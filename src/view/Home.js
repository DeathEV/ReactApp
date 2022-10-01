import { useEffect, useState } from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import movieApi from "../api/movieApi";
import APagination from "../components/AForm/APagination";
import AMovieBlock from "../components/AMovie/AMovieBlock";

export default function Home(props) {
    const { t } = useTranslation('common')
    const searchInput = localStorage.getItem('search')
    const routerPush = useNavigate()

    const [nowPlaying, setNowPlaying] = useState([])
    const [pageNum, setPageNum] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [cantFind, setCantFind] = useState(false)

    const getNowPlaying = async function(){
        setLoading(true)
        const data = await movieApi.getListNowPlaying(pageNum)
        setNowPlaying(data.results)
        setTotalPage(data.total_pages)
        setLoading(false)
        if(data.results.length > 0){
            setCantFind(false)
        } else setCantFind(true)
    }

    const searchName = async function(){
        setLoading(true)
        const data = await movieApi.searchMovie(searchInput, pageNum)
        setNowPlaying(data.results)
        setTotalPage(data.total_pages)
        setLoading(false)
        if(data.results.length > 0){
            setCantFind(false)
        } else setCantFind(true)
    }

    useEffect(()=>{
        if(pageNum && searchInput === "none"){
            getNowPlaying()
        } else {
            if(pageNum){
                searchName()
            }
        }
        return()=>{
            setNowPlaying([])
        }
    },[pageNum])

    return(
        <div className={`bg-slate-900 w-full h-screen pb-24 ${props.scroll ? "" : "overflow-y-scroll"}`}>
            <h2 className="text-yellow-400 font-semibold text-lg uppercase p-4">{t('text.nowmovie')}</h2>
            {loading ?
            <div className="flex justify-center"><h1 className="text-white text-6xl">{t('text.loading')}</h1></div>
            :
            <>
            <div className="grid grid-cols-1 sm:grid-cols-5 md:cols-6">
                {nowPlaying.map((i, index)=>(
                    <div key={index} onClick={()=>routerPush("/home/"+i.id)}><AMovieBlock name={i.original_title} poster={i.poster_path} vote={i.vote_count} type={i.media_type} date={i.release_date}/></div>
                ))}
            </div>
            {cantFind &&
                <div className="flex justify-center"><h1 className="text-white text-6xl">{t('text.cantfind')}</h1></div>
            }
            <div className="flex justify-center my-5"><APagination pageNum={pageNum} setNum={setPageNum} total={totalPage}/></div>
            </>
            }
        </div>
    );
}
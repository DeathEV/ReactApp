import { useEffect, useState } from "react";
import {useTranslation} from "react-i18next";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import movieApi from "../api/movieApi";

export default function MoviePage() {
    const { t } = useTranslation('common')
    const routerPush = useNavigate()

    const id = useParams()
    const [dataDetail, setDataDetail] = useState({})

    const getDetail = async function(){
        const data = await movieApi.detailMovie(id.id)
        setDataDetail(data)
    }

    useEffect(()=>{
        getDetail()  
        return()=>{
            setDataDetail({})
        }
    },[])

    return(
        <div className="bg-slate-900 w-full h-full overflow-hidden pb-24">
            {dataDetail.id !== undefined && 
            <div className="h-full bg-no-repeat bg-cover flex" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${"https://image.tmdb.org/t/p/original"+dataDetail.backdrop_path})`}}>
                <div className="text-white py-20 uppercase w-1/3 flex justify-center">
                    <div>
                        <img src={"https://image.tmdb.org/t/p/w200"+dataDetail.poster_path} className="h-full rounded"/>
                        <div className="flex justify-between">
                            <button
                                onClick={()=>routerPush('/home')}
                                className="mt-4 w-1/2 transition duration-200 bg-amber-600 hover:bg-amber-500 focus:bg-amber-500 focus:shadow-sm focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                            >
                                <span className="inline-block mr-2">{t('text.back')}</span>
                            </button>
                            <button
                                className="mt-4 ml-2 w-1/2 transition duration-200 bg-red-600 hover:bg-red-500 focus:bg-red-500 focus:shadow-sm focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                            >
                                <span className="inline-block mr-2">{t('text.view')}</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="text-white py-20 uppercase w-2/3 pr-20">
                    <h1 className="text-white text-6xl">{dataDetail.original_title}</h1>
                    <span>{dataDetail.release_date}</span>
                    <p className="mt-8 mb-4 text-yellow-400 font-semibold text-lg uppercase">{t('text.description')}</p>
                    <span className="text-xl">{dataDetail.overview}</span>
                    <p className="mt-8 mb-4 text-yellow-400 font-semibold text-lg uppercase">{dataDetail.vote_count} Votes</p>
                    <p className="mt-8 mb-4 font-semibold text-lg uppercase">{t('text.movietype')} -{dataDetail.genres.map((i,index)=>
                        <span key={index} className="mx-2">{i.name}</span>
                    )}</p>
                </div>
            </div>
            }
        </div>
    );
}
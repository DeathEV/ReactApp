import background from "../images/web-image-background.jpg";
import RouterBase from "../routers/routerBase";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";

export default function Home() {
    const { i18n } = useTranslation('common');
    const checkLang = localStorage.getItem('language');
    useEffect(()=>{
        if(checkLang) {
            i18n.changeLanguage(JSON.parse(checkLang).lang);
        }
    },[])
    const logout = function (){
      localStorage.removeItem('access_token');
    };
    return(
        <>
            <div className="w-full h-screen">
                <div className="w-full h-1/6 bg-green-700 flex justify-start">
                    <div className="w-1/5 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${background})` }} />
                    <div className="w-4/5 flex justify-between">
                        <p>Seach</p>
                        <div className="w-1/6 flex justify-around">
                            <p>IMG</p>
                            <p>Admin</p>
                            <a className="cursor-pointer" href="/login" onClick={logout}>Thoat</a>
                        </div>
                    </div>
                </div>
                <div className="w-full flex h-full h-5/6 justify-start">
                    <div className="w-1/5 bg-black text-white overflow-y-auto">
                        <p>Menu</p>
                    </div>
                    <div className="w-4/5 bg-white overflow-y-auto overflow-y-auto">
                        <RouterBase/>
                    </div>
                </div>
            </div>
        </>
    );
}
import ALangDropdown from "../components/AHeader/ALangDropdown";
import background from "../images/web-image-background.jpg";
import RouterBase from "../routers/routerBase";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import ASearchBar from "../components/AHeader/ASearchBar";

export default function Theme() {
    const { i18n, t } = useTranslation('common');
    const [openMenu, setOpenMenu] = useState(false);

    const imageBackground = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${background})`,
    };

    const checkLang = localStorage.getItem('language');

    const logout = function (){
      localStorage.removeItem('access_token');
      window.location.href="/login";
    };

    useEffect(()=>{
        if(checkLang) {
            i18n.changeLanguage(JSON.parse(checkLang).lang);
        }
    },[])

    return(
        <div className="w-full h-screen overflow-hidden" style={imageBackground}>
            {window.navigator.onLine ? 
            <>
            {/* header */}
            <div className="w-full flex justify-around items-center text-white cursor-default">
                <div className="w-1/4 p-4 mx-4">
                    <h1 className="uppercase text-3xl">dmovie</h1>
                    <span>{t('text.welcome')} Thắng</span>
                </div>
                <div className="w-full flex justify-start item-center">
                    <div className="w-4/6 pt-3">
                        <ASearchBar/>
                    </div>
                    <ALangDropdown />
                    <button onClick={logout} className="w-1/6 mx-4 h-16 shadow bg-amber-600 hover:bg-amber-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                        {t('text.logout')}
                    </button>
                </div>
            </div>
            {/* menu */}
            <div className="w-full flex h-screen justify-start">
                <div className={`bg-black p-5 text-white relative ${openMenu ? "w-1/5" : "w-20"}`} onClick={()=>setOpenMenu(!openMenu)}>
                    <div className={`absolute -right-3 bg-white text-gray-400 rounded-full border-2 border-gray-400 cursor-pointer ${!openMenu && "rotate-180"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </div>
                    <h1 className="uppcase">{openMenu && t('text.nothing')}</h1>
                </div>
                <div className="w-full bg-white overflow-y-auto overflow-y-auto">
                    <RouterBase/>
                </div>
            </div>
            </>
            :
            <div className="flex justify-center"><h1 className="text-white text-6xl mt-5">{t('text.nonetwork')}</h1></div>
            }
        </div>
    );
}
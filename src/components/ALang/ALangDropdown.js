import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";

export default function ALangDropdown(props) {
    const { t, i18n } = useTranslation('common');
    const checkLang = localStorage.getItem('language');
    const [mLang, setMlang] = useState("Tiếng việt");
    useEffect(()=>{
        if(checkLang) {
            setMlang(JSON.parse(checkLang).name)
            i18n.changeLanguage(JSON.parse(checkLang).lang);
        }
    },[])

    const lang = [
        {lang: `vi`, name: `Tiếng việt`},
        {lang: `en`, name: 'English'}
    ];
    const setLang = function (idLang, nameLang){
        const lang = {
            'lang': idLang,
            'name': nameLang,
        };
        localStorage.setItem('language', JSON.stringify(lang));
        i18n.changeLanguage(idLang);
        setMlang(nameLang);
    }
    return(
        <>
            <button className="h-full max-h-8 w-48 mx-2 relative flex justify-center items-center text-white pt-5 group">
                <p className="px-4 item-center">{t('title.language')}: {mLang}</p>
                <span className="border-l pt-3 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </span>
                <div className="absolute top-full min-w-full w-max bg-white shadow-md mt-4 rounded group-focus:block hidden">
                    <ul className="text-left border rounded text-gray-600">
                        {
                            lang.map(({ lang, name }, i) => (<p className="px-4 py-1 hover:bg-gray-100 border-b" key={lang} onClick={()=>setLang(lang, name)}>{name}</p>))
                        }
                    </ul>
                </div>
            </button>
        </>
    );
}
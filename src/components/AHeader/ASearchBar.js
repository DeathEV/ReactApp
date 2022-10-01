import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

export default function ASearchBar(props) {
    const { t } = useTranslation('common');
    const routerPush = useNavigate();
    const searchInput = localStorage.getItem('search')

    const [SInput, setSInput] = useState('')

    useEffect(()=>{
        if(searchInput !== "none"){
            setSInput(searchInput)
        } else setSInput('')
    },[])

    useEffect(()=>{
        if(SInput.length > 0){
            localStorage.setItem('search', SInput)
        } else {
            localStorage.setItem('search', 'none')
        }
    },[SInput])
    
    return(
        <form action="">
            <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                <div className="absolute w-5 h-5 ml-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </div>
                <input
                    type='text'
                    value={SInput}
                    onChange={e => setSInput(e.target.value)}
                    placeholder={t('text.search')}
                    className="w-full pr-3 pl-10 px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                />
            </div>
        </form>
    );
}
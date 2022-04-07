import {useTranslation} from "react-i18next";

export default function LoginHeader(props) {
    const { t } = useTranslation('common');
    return(
        <>
            <div className="w-full flex justify-around text-white cursor-default">
                <div className="w-full p-4 mt-2 mx-4">
                    <h1 className="uppercase text-3xl">Shiny Store</h1>
                    <span>Controller</span>
                </div>
                <div className="flex justify-start mt-4 mx-4">
                    <a href="/login" className="w-32 py-2 px-4 mt-3">{t('text.website')}</a>
                    <button onClick={props.openDialog} className="w-32 h-16 shadow bg-amber-600 hover:bg-amber-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                        {t('text.register')}
                    </button>
                </div>
            </div>
        </>
    );
}
import {useTranslation} from "react-i18next";
import ALangDropdown from "../../components/ALang/ALangDropdown";

export default function LoginHeader(props) {
    const { t } = useTranslation('common');
    return(
        <>
            <div className="w-full flex justify-around items-center text-white cursor-default">
                <div className="w-full p-4 mx-4">
                    <h1 className="uppercase text-3xl">Shiny Store</h1>
                    <span>Controller</span>
                </div>
                <div className="w-2/3 flex justify-start item-center">
                    <a href="/login" className="w-1/3 py-2 px-4 pt-4">{t('text.website')}</a>
                    <ALangDropdown />
                    <button onClick={props.openDialog} className="w-1/3 mx-4 h-16 shadow bg-amber-600 hover:bg-amber-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                        {t('text.register')}
                    </button>
                </div>
            </div>
        </>
    );
}
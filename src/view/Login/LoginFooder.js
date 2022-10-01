import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import background from "../../images/web-banner-login.jpg";
import AInput from "../../components/AForm/AInput";
import userApi from "../../api/userApi";

export default function LoginFooder() {
    const routerPush = useNavigate();
    const { t } = useTranslation('common');

    const [emailUser, setEmailUser] = useState("admin");
    const [passwordUser, setPasswordUser] = useState("admin");
    const inputEmail = function (e) {
        setEmailUser(e.target.value);
    };
    const inputPassword = function (e) {
        setPasswordUser(e.target.value);
    };

    const validateLogin = function () {
        let isValid = true;
        if(emailUser === ""){
            alert("Request email");
            isValid = false;
        }
        if(passwordUser === ""){
            alert("Request password");
            isValid = false;
        }

        return isValid;
    };
    const loginUser = async function () {
        if (!validateLogin()) {
          return;
        }
        try {
            // const user = {
            //     'email': emailUser,
            //     'pass_word': passwordUser,
            // };
            routerPush("/home");
            window.location.reload();
            localStorage.setItem('access_token', 'thutoken'); //BE call
            localStorage.setItem('search', 'none')
        } catch (error) {
            console.log(error);
        };
    };

    return(
        <div className="w-full flex justify-center mt-8">
            <div className="flex justify-start w-2/3 h-min-96 overflow-hidden bg-white rounded">
                <div className="w-2/3 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${background})` }} />
                <div className="w-1/3 my-4">
                    <span className="text-center text-3xl font-bold uppercase"><p className="p-4">Dmovie</p></span>
                    <form className="mt-6 p-4" onSubmit={loginUser}>
                        <AInput title={t('title.email')} iValue={emailUser} iChange={inputEmail} placeholder={t('input_text.email')} />
                        <AInput title={t('title.password')} type="password" iValue={passwordUser} iChange={inputPassword} placeholder={t('input_text.password')} />
                        <button
                            type="submit"
                            className="mt-4 transition duration-200 bg-amber-600 hover:bg-amber-500 focus:bg-amber-500 focus:shadow-sm focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                        >
                            <span className="inline-block mr-2">{t('text.login')}</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
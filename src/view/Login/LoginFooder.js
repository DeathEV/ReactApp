import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import background from "../../images/web-image-background.jpg";
import AInput from "../../components/AForm/AInput";
// import userApi from "../../api/userApi";
import ADialog from "../../components/AModal/ADialog";

export default function LoginFooder(props) {
    const routerPush = useNavigate();
    const { t } = useTranslation('common');

    const [emailUser, setEmailUser] = useState("");
    const [passwordUser, setPasswordUser] = useState("");
    const inputEmail = function (e) {
        setEmailUser(e.target.value);
    };
    const inputPassword = function (e) {
        setPasswordUser(e.target.value);
    };

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfPassword, setRegisterConfPassword] = useState("");
    const inputResEmail = function (e){
        setRegisterEmail(e.target.value);
    };
    const inputResPass = function (e){
        setRegisterPassword(e.target.value);
    };
    const inputResCPass = function (e){
        setRegisterConfPassword(e.target.value);
    };

    const validateLogin = function () {
        let isValid = true;
        if(emailUser === ""){
            alert("Thieu email");
            isValid = false;
        }
        if(passwordUser === ""){
            alert("Thieu password");
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
            // await userApi.userLogin(user);
            localStorage.setItem('access_token', 'thutoken');
            routerPush("/home2");
            window.location.reload();
        } catch (error) {
            console.log(error);
        };
    };

    const validateRegister = function () {
        let isValid = true;
        if(registerEmail === ""){
            alert("Thieu email");
            isValid = false;
        }
        if(registerPassword === ""){
            alert("Thieu password");
            isValid = false;
        }
        if(registerConfPassword === ""){
            alert("Thieu confirm password");
            isValid = false;
        }

        return isValid;
    };
    const registerUser = async function(){
        if(!validateRegister()){
            return;
        };
        try {
            // const user = {
            //     'email': registerEmail,
            //     'pass_word': registerPassword,
            //     'confirm_password': registerConfPassword
            // };
            // await userApi.userRegister(user);
        } catch (error) {
            console.log(error);
        };
    };

    return(
        <>
            <div className="w-full flex justify-center mt-14">
                <div className="flex justify-start w-2/3 h-min-96 overflow-hidden bg-white rounded">
                    <div className="w-2/3 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${background})` }} />
                    <div className="w-1/3 my-4">
                        <span className="text-center text-3xl font-bold uppercase"><p className="p-4">Shiny</p></span>
                        <form className="mt-6 p-4" onSubmit={loginUser}>
                            <AInput title={t('title.email')} iValue={emailUser} iChange={inputEmail} placeholder={t('input_text.email')} />
                            <AInput title={t('title.password')} iValue={passwordUser} iChange={inputPassword} placeholder={t('input_text.password')} />
                            <div className="flex justify-end items-center my-2">
                                <div>
                                    <a
                                        className="block text-sm fontme text-gray-600 hover:underline"
                                        href="/forgot-password"
                                    >
                                        {t('title.forget_password')}
                                    </a>
                                </div>
                            </div>
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
            <ADialog title={t('text.register')} onOpen={props.openDialog} onClose={props.closeDialog}>
                <AInput title={t('title.email')} iValue={registerEmail} iChange={inputResEmail} placeholder={t('input_text.email')} />
                <AInput title={t('title.password')} iValue={registerPassword} iChange={inputResPass} placeholder={t('input_text.password')} />
                <AInput title={t('title.confirm_password')} iValue={registerConfPassword} iChange={inputResCPass} placeholder={t('input_text.confirm_password')} />
                <button
                    onClick={registerUser}
                    className="mt-4 transition duration-200 bg-amber-600 hover:bg-amber-500 focus:bg-amber-500 focus:shadow-sm focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                >
                    <span className="inline-block mr-2">{t('text.register')}</span>
                </button>
            </ADialog>
        </>
    );
}
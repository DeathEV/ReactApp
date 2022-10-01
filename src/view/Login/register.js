import {useState} from "react";
import {useTranslation} from "react-i18next";
import AInput from "../../components/AForm/AInput";
import ADialog from "../../components/AModal/ADialog";

export default function RegisterDialog(props) {
    const { t } = useTranslation('common');

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfPassword, setRegisterConfPassword] = useState("");
    const [registerName, setRegisterName] = useState("");

    const inputResEmail = function (e){
        setRegisterEmail(e.target.value);
    };
    const inputResPass = function (e){
        setRegisterPassword(e.target.value);
    };
    const inputResCPass = function (e){
        setRegisterConfPassword(e.target.value);
    };
    const inputResName = function (e){
        setRegisterName(e.target.value);
    };

    const validateRegister = function () {
        let isValid = true;
        if(registerName === ""){
            alert("Thieu ten");
            isValid = false;
        }
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
            //     'name': registerName,
            //     'email': registerEmail,
            //     'pass_word': registerPassword,
            // };
            alert("Cant use this register, beta sorry UWU");
            props.closeDialog();
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <ADialog title={t('text.register')} onOpen={props.openDialog} onClose={props.closeDialog}>
            <AInput title={t('title.name')} iValue={registerName} iChange={inputResName} placeholder={t('input_text.name')} />
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
    );
}
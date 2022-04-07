import {useState} from "react";
import {useNavigate} from "react-router-dom";
import background from "../../images/web-image-background.jpg";
import AInput from "../../components/AForm/AInput";
import userApi from "../../api/userApi";

export default function LoginFooder() {
    const routerPush = useNavigate();

    const [emailUser, setEmailUser] = useState("");
    const [passwordUser, setPasswordUser] = useState("");
    const inputEmail = function (e) {
        setEmailUser(e.target.value);
    };
    const inputPassword = function (e) {
        setPasswordUser(e.target.value);
    };

    const validate = function () {
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
        if (!validate()) {
          return;
        }
        try {
            const user = {
                'email': emailUser,
                'pass_word': passwordUser,
            };
            // await userApi.userLogin(user);
            localStorage.setItem('access_token', 'thutoken');
            routerPush("/home2")
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
                            <AInput title="Email" iValue={emailUser} iChange={inputEmail} placeholder="Nhập Email..." />
                            <AInput title="Password" iValue={passwordUser} iChange={inputPassword} placeholder="Nhập Password..." />
                            <div className="flex justify-end items-center my-2">
                                <div>
                                    <a
                                        className="block text-sm fontme text-gray-600 hover:underline"
                                        href="/forgot-password"
                                    >
                                        Forget password
                                    </a>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="mt-4 transition duration-200 bg-amber-600 hover:bg-amber-500 focus:bg-amber-500 focus:shadow-sm focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                            >
                                <span className="inline-block mr-2">Login</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
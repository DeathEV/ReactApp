import React, {useEffect, useState} from 'react';
import LoginHeader from "./LoginHeader";
import background from "../../images/web-image-background.jpg";
import LoginFooder from "./LoginFooder";
import RegisterDialog from "./register";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const token = localStorage.getItem('access_token');
    const routerPush = useNavigate();

    const imageBackground = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${background})`,
    };

    const [onOpen, setOpen] = useState(false);
    const openDialog = function (){
        setOpen(true)
    }
    const onClose = function (){
        setOpen(false);
    }

    const checkToken = async function (){
        if(token){
            routerPush('/home');
        }
    }

    useEffect(() => {
        checkToken();
    }, []);

    return(
        <div className="w-full h-screen bg-no-repeat bg-cover" style={imageBackground}>
            <LoginHeader openDialog={openDialog} />
            <LoginFooder openDialog={onOpen} closeDialog={onClose} />
            <RegisterDialog openDialog={onOpen} closeDialog={onClose}/>
        </div>
    );
}
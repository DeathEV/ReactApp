import React, {useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import { routesCore } from "./routerCore";
import Login from "../view/Login/Login"

export default function RouterBase() {
    const token = localStorage.getItem('access_token');
    const routerPush = useNavigate();
    useEffect(() => {
        checkToken();
    }, []);

    const checkToken = async function (){
        if(!token){
            routerPush('/login');
        }
    }
    return (
        <>
            <Routes>
            {
                localStorage.getItem('access_token') ?
                    routesCore.map(({ path, Component }, i) => (<Route path={path} element={Component} key={i}/>)) :
                    <Route path="/login" element={<Login/>}/>
            }
            </Routes>
        </>
    );
};

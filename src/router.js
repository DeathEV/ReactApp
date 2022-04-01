import {Routes, Route, useNavigate} from 'react-router-dom';
import {useEffect} from "react";
import Login from "./view/Login";
import Home from "./view/Home";
import Home2 from "./view/Home2";

export default function Router() {
    const token = localStorage.getItem('access_token');
    const routerPush = useNavigate();
    useEffect(() => {
        if (!token) {
            routerPush('/login');
        }
    }, []);

    if(!token){
        return (
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        );
    };

    return(
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home2" element={<Home2 />} />
        </Routes>
    );
}
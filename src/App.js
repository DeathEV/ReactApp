import {useNavigate} from "react-router-dom";
import background from "./images/web-image-background.jpg"
import RouterBase from "./routers/routerBase";
import Home from "./view/Home";

export default function App() {
    const token = localStorage.getItem('access_token');
    const routerPush = useNavigate();
    const logout = function (){
      localStorage.removeItem('access_token') ;
      routerPush("/login");
    };
    if(token){
        return(
            <Home />
        );
    } else {
        return (
            <>
                <RouterBase/>
            </>
        );
    }
}

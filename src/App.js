import RouterBase from "./routers/routerBase";
import Home from "./view/Home";

export default function App() {
    const token = localStorage.getItem('access_token');
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

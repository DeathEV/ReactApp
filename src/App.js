import RouterBase from "./routers/routerBase";
import Theme from "./view/Theme";

export default function App() {
    const token = localStorage.getItem('access_token');
    if(token){
        return(
            <Theme/>
        );
    } else {
        return (
            <RouterBase/>
        );
    }
}

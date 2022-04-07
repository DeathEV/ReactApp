import background from "../images/web-image-background.jpg";
import RouterBase from "../routers/routerBase";
import {useNavigate} from "react-router-dom";

export default function Home() {
    const routerPush = useNavigate();
    const logout = function (){
      localStorage.removeItem('access_token');
      window.location.reload();
      routerPush("/login");
    };
    return(
        <>
            <div className="w-full h-screen">
                <div className="w-full h-1/6 bg-green-700 flex justify-start">
                    <div className="w-1/5 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${background})` }} />
                    <div className="w-4/5 flex justify-between">
                        <p>Seach</p>
                        <div className="w-1/6 flex justify-around">
                            <p>IMG</p>
                            <p>Admin</p>
                            <p className="cursor-pointer" onClick={logout}>Thoat</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex h-full h-5/6 justify-start">
                    <div className="w-1/5 bg-black text-white overflow-y-auto">
                        <p>Menu</p>
                    </div>
                    <div className="w-4/5 bg-white overflow-y-auto overflow-y-auto">
                        <RouterBase/>
                    </div>
                </div>
            </div>
        </>
    );
}
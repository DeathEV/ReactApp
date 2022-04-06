import background from "./images/web-image-background.jpg"
import RouterBase from "./routers/routerBase";

export default function App() {
    const token = localStorage.getItem('access_token');
    if(token){
        return(
        <>
            <div className="w-full h-16 bg-green-700 flex justify-start">
                <div className="w-1/5 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${background})` }} />
                <div className="w-4/5 flex justify-between">
                    <p>Seach</p>
                    <div className="w-1/6 flex justify-around">
                        <p>IMG</p>
                        <p>Admin</p>
                        <p className="cursor-pointer">Thoat</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex h-screen justify-start">
                <div className="w-1/5 bg-black text-white">
                    <p>Menu</p>
                </div>
                <div className="w-4/5 bg-white">
                    <RouterBase/>
                </div>
            </div>
        </>
        );
    } else {
        return (
            <>
                <RouterBase/>
            </>
        );
    }
}

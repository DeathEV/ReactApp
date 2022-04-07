import { useState } from "react";
import LoginHeader from "./LoginHeader";
import ADialog from "../../components/AModal/ADialog";
import background from "../../images/web-image-background.jpg";
import LoginFooder from "./LoginFooder";

export default function Login() {
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
    return(
        <>
            <div className="w-full h-screen bg-no-repeat bg-cover" style={imageBackground}>
                <LoginHeader openDialog={openDialog} />
                <LoginFooder />
                <ADialog title="Thu dialog" onOpen={onOpen} onClose={onClose}>
                    <p>Test</p>
                </ADialog>
            </div>
        </>
    );
}
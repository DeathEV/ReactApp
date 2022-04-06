import Login from "../view/Login"
import Home from "../view/Home"
import Home2 from "../view/Home2"

export const routesCore = [
    { path: `/login`, Component: <Login /> },
    { path: `/home`, Component: <Home /> },
    { path: `/home2`, Component: <Home2 /> },
];
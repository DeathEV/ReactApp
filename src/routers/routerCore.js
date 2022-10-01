import Login from "../view/Login/Login"
import Theme from "../view/Theme"
import Home from "../view/Home"
import MoviePage from "../view/MoviePage";

export const routesCore = [
    { path: `/login`, Component: <Login /> },
    { path: `/theme`, Component: <Theme /> },
    { path: `/home`, Component: <Home /> },
    { path: `/home/:id`, Component: <MoviePage/> },
];
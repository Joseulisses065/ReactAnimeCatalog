import React from "react";
import { BrowserRouter,Route,Routes} from "react-router-dom";

import Login from "./pages/login";
import Animes from "./pages/anime";

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Login}/>
                <Route path="/animes" Component={Animes}/>
            </Routes>
        </BrowserRouter>
    );

}
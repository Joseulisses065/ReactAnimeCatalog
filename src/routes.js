import React from "react";
import { BrowserRouter,Route,Routes} from "react-router-dom";

import Login from "./pages/Login";
import Animes from "./pages/Anime";
import NewAnime from "./pages/NewAnime";


export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact Component={Animes}/>
                <Route path="/animes" Component={Animes}/>
                <Route path="/animes/new" Component={NewAnime}/>
                <Route path="/animes" Component={Animes}/>

            </Routes>
        </BrowserRouter>
    );

}
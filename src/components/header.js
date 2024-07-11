import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
export default function Header(){
    return(
        <nav className="navbar navbar-dark bg-dark px-5">
            <a className="navbar-brand">Anime</a>
            <div><Link className="btn btn-primary" to={"/animes/new/0"}><FiPlus size={18}/> Add</Link></div>
        </nav>
    );
}
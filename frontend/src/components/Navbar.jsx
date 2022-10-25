import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar(){

    return <div><nav>
        <a><img className="logo" src="https://p.kindpng.com/picc/s/765-7657079_download-logo-twitter-computer-black-icons-free-transparent.png"></img></a>
        <a ><h4><Link className="LINK" to="/">  home</Link></h4></a>
        <a ><h4><Link className="LINK" to="/events"> events</Link></h4></a>
        <a><h4><Link className="LINK" to="/create">  create   </Link></h4></a>
        <div className="animation start-home"></div>
        
    </nav>
    </div>
}

export default Navbar;
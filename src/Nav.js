import React from 'react';
import style from "./nav.module.css";
import {Link} from "react-router-dom";
import logo from "./img/logo.png";
import info from "./img/info.png";

function Nav() {
    const Style = {textDecoration: 'none', cursor: "pointer"};
    return(
        <div className={style.navcontainer}>
            
                <div className={style.first}>
                <Link to ="/" style={Style}>
                <img className={style.logo} src={logo} alt = "logo"/>
                </Link>
                </div>
                <ul className={style.nav}>
                    <Link style={Style} to ="/fundamentals">
                    <li>Fundamentals</li>
                    </Link>
                    <Link style={Style} to = "/routing">
                    <li>Routing Protocols</li>
                    </Link>
                    <Link style={Style} to = "/topologies">
                    <li>Network Topologies</li>
                    </Link>
                    <Link style={Style} to = "/security">
                    <li>Security</li>
                    </Link>
                    <Link style={Style} className={style.info}  to = "/info">
                    <li><img src={info} alt="info"/></li>
                    </Link>
                </ul>
            
            </div>
    )
}


export default Nav;
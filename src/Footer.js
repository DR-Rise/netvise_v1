import React from 'react';
import style from "./footer.module.css";
import git from "./img/git.png";


function Footer() {
    return(
        <div className={style.footer}>
            <div className={style.text}>Made by DRISS ALAOUI SOULIMANI</div>
            <div className={style.git}><a href="https://github.com/DR-Rise"><img src={git} alt="github" /></a></div>
        </div>
    )
}

export default Footer;
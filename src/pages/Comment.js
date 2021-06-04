import React from 'react';
import style from "./page.module.css";

function getDate() {
    let today = new Date();
    let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];
    let date = `${today.getDate()} ${months[today.getMonth()]}, on ${today.getHours()} : ${today.getMinutes()} `;
    return date

}
function comment(props) {
    return(
        <div>
            <p><span className={style.cname}>{props.name}</span> <br/> {getDate()}</p>
            <p className={style.cp}>{props.comment}</p>
            
        </div>
    )
}

export default comment;
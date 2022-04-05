import React from "react";
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'


const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/dialogs/' + props.id} >
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgxfDAMqK3mhyikTk6uhY8Bn3HdpjkMvuzLQ&usqp=CAU' />
            {props.name}
        </NavLink>
    </div>
}


export default DialogItem
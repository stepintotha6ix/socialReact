import React from "react";
import s from './Message.module.css'


const Message = (props) => {
    return <div className={s.dialog}>
        <div className={s.messageItems}>
            <div className={s.messageItem}>
                {props.message}
            </div>
        </div>
        <div>
        </div>
    </div>

}


export default Message
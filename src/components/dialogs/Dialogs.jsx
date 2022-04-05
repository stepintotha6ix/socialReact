import React from "react";
import s from './Dialogs.module.css'
import DialogItem from './dialogitem/DialogItem'
import Message from './message/Message'
import { maxLengthCreator, required } from './../../utils/validators/validators'
import AddMessageForm from "./addMessageForm";


const Dialogs = (props) => {

    let state = props.dialogsPage
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />)
    let newMessageBody = state.newMessageBody

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messagesBlock}>
                    <div className={s.message}>{messagesElements}</div>
                </div>
                <AddMessageForm onSubmit={addNewMessage} />

            </div>
        </div>

    )
}

export default Dialogs
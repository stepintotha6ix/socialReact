import React from "react";
import { Field, reduxForm } from "redux-form"
import { Textarea } from '../command/FormsControls/FormsControls'
import s from './Dialogs.module.css'



const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.textareaBlock}>
                <div>
                    <Field className={s.textarea} component={Textarea}
                        name={'newMessageBody'}

                        placeholder="Enter your message" />
                </div>
                <div>
                    <button className={s.button}>Send message</button>
                </div>
            </div>
        </form>
    )
}
export default reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)
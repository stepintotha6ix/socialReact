import React from 'react'
import { createField, Input, Textarea } from '../../command/FormsControls/FormsControls'
import { reduxForm } from "redux-form"
import s from './ProfileInfo.module.css'
import style from './../../command/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <div>
                Full name: {createField('Full name', 'fullName', [], Input)}
            </div>
            <div>
                Looking for a job: {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
            </div>
            <div>
                My professional skills: {createField('', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                About me: {createField('', 'aboutMe', [], Textarea)}
            </div>
            
        </div>
        
        <div>
            <button>save</button>
        </div>

    </form>
}

const profileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default profileDataFormReduxForm


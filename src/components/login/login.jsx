import React from "react"
import { reduxForm } from "redux-form"
import { required } from "../../utils/validators/validators"
import { Input } from "../command/FormsControls/FormsControls"
import { connect } from "react-redux"
import { login } from '../../redux/auth-reducer'
import { Redirect } from "react-router-dom"
import style from './../command/FormsControls/FormsControls.module.css'
import { createField } from './../command/FormsControls/FormsControls'
import s from './login.module.css'

const LoginForm = ({ handleSubmit, error }) => {

    return (

        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, { type: 'password' })}

            {createField(null, 'rememberMe', [], Input, { type: 'checkbox' }, 'remember me')}


            <div>
                <button className={s.button}>Login</button>
            </div>
        </form >

    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div className={s.formLogin}>
            <h1 className={s.title}>Login</h1>
            <div className={s.itemsLogin}>
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login)
import React, {Fragment} from 'react';
import {useForm} from 'react-hook-form';
import axios from '../Helper/Instance';
import {toast} from 'react-toastify';
function Login(props) {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = async data => {
        try {
            const {email, password, nickname} = data;
            const res = await axios.post('/register', {email, password, nickname, type: 0});
            const jwtToken = res.data;
            toast.success('Register Successful');
            global.auth.setToken(jwtToken);
            props.history.push('/Home');
        } catch (error) { // const message = error.response.data;
            console.log(error)
        }
    };
    return (
        <Fragment>
            <div className="login-wrapper">
                <form className="login-box box"
                    onSubmit={
                        handleSubmit(onSubmit)
                }>
                    <div className="field">
                        <label className="label" htmlFor="email">
                            Email
                        </label>
                        <div className="control">
                            <input className={
                                    `input ${
                                        errors.email && 'is-danger'
                                    }`
                                }
                                placeholder="Email"
                                type="email"
                                className="input"
                                name="email"
                                ref={
                                    register({required: true})
                                }/> {
                            errors.email && (
                                <p className="">
                                    Email
                                                                                                                              is
                                                                                                                              required
                                </p>
                            )
                        } </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="email">
                            Nickname
                        </label>
                        <div className="control">
                            <input className={
                                    `input ${
                                        errors.nickname && 'is-danger'
                                    }`
                                }
                                placeholder="Nickname"
                                type="text"
                                className="input"
                                name="nickname"
                                ref={
                                    register({required: true})
                                }/> {
                            errors.email && (
                                <p className="">
                                    Nickname
                                                                                                                              is
                                                                                                                              required
                                </p>
                            )
                        } </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="password">
                            Password
                        </label>
                        <div className="control">
                            <input className={
                                    `input ${
                                        errors.password && 'is-danger'
                                    }`
                                }
                                type="password"
                                placeholder="Password"
                                name="password"
                                ref={
                                    register({
                                        required: true,
                                        minLength: {
                                            value: 6,
                                            message: 'message be less than 6 digits'
                                        }
                                    })
                                }/> {
                            errors.password && (
                                <p className="">
                                    Password
                                                                                                                              is
                                                                                                                              required
                                </p>
                            )
                        } </div>
                    </div>
                    <div className="control">
                        <button className="button is-fullwidth is-primary" type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}
export default Login;

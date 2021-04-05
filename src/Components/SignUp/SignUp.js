import React, { useState } from "react";
import { register } from "../../Services/AuthService";
import { Redirect } from "react-router-dom";

function SignUp(props) {
    const [state, setState] = useState({
        login: '',
        password: '',
        confirmPassword: '',
    });
    const [loginError, setLoginError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [redirect, setRedirect] = useState(null);

    async function handleInputChange(e) {
        setState({
            ...state,
            [e.target.id]: e.target.value,
        });
    }

    async function signUp(e) {
        setLoginError(state.login === '' ? 'Login is empty' : '');
        setPasswordError(state.password === '' ? 'Password is empty' : '');
        setConfirmPasswordError(state.confirmPassword === '' ? 'Password is empty' : '');
        if (state.login === '' || state.password === '' || state.confirmPassword === '')
            return;
        if (state.password !== state.confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            return;
        }
        setConfirmPasswordError('');
        register(state)
            .then(res => {
                if (res.message) {
                    setConfirmPasswordError(res.message);
                } else {
                    // todo: redirect to the main page
                    setRedirect("/signin");
                }
            });
    }

    return (
        (redirect)?
            <Redirect to={redirect} />
        :(
        <div className="container w-50">
            <div className="mb-2">
                <label htmlFor="login" className="form-label">Login</label>
                <input
                    type="text"
                    className="form-control"
                    id="login"
                    onChange={handleInputChange} />
                <small className="form-text text-danger">{loginError}</small>
            </div>
            <div className="mb-2">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={handleInputChange} />
                <small className="form-text text-danger">{passwordError}</small>
            </div>
            <div className="mb-2">
                <label htmlFor="confirmPassword" className="form-label">Confirm password</label>
                <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    onChange={handleInputChange} />
                <small className="form-text text-danger">{confirmPasswordError}</small>
            </div>
            <button className="btn btn-primary float-end" onClick={signUp}>Sign Up</button>
        </div>
    ));
}

export default SignUp;
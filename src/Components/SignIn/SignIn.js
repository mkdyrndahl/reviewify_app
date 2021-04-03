import React, { useState } from "react";
import { authorize, login } from "../../Services/AuthService";

function SignIn(props) {
    const [state, setState] = useState({
        login: '',
        password: '',
    });
    const [loginError, setLoginError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    async function handleInputChange(e) {
        setState({
            ...state,
            [e.target.id]: e.target.value,
        });
    }

    async function signIn(e) {
        setLoginError(state.login === '' ? 'Login is empty' : '');
        setPasswordError(state.password === '' ? 'Password is empty' : '');
        if (state.login === '' || state.password === '')
            return;
        login(state)
            .then(res => {
                if (res.message)
                    throw res.message;
                localStorage.setItem('token', res.token);
                return authorize();
            }).then(res => {
                if (res.message)
                    throw res.message;
                return res;
            }).then(user => {
                console.log(user);
                // todo: redirect to the main page
            }).catch(err => {
                setPasswordError(err.toString());
            });
    }

    return (
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
            <button className="btn btn-primary float-end" onClick={signIn}>Sign In</button>
        </div>
    );
}

export default SignIn;
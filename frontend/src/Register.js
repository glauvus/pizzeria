import React, { useState } from 'react';
import './Register.css';

const Register = props => {

    const [state, setState] = useState({
        username: "",
        password: "",
    });
    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: state.username,
                password: state.password,
            }),
        };
        fetch('/api/users/create', requestOptions)
        .then(response => {
            response.json();
            if(response.status===201)
                props.history.push('/');
        })
        .then(data => console.log(data));
    }

    return (
        <div>
            <div className="register-body row d-flex justify-content-center">
                <form className="col-md-4 col-sm-6 col-8">
                    <div className="mb-2">
                        <i className="fa fa-user"></i>
                        <label data-error="wrong" data-success="right" htmlFor="registerForm-username">Username</label>
                        <input type="text" id="registerForm-username" name="username" className="form-control" onChange={handleChange}/>
                    </div>
                    <div className="mb-2">
                        <i className="fa fa-lock"></i>
                        <label data-error="wrong" data-success="right" htmlFor="registerForm-pass">Password</label>
                        <input type="password" id="registerForm-pass" name="password" className="form-control" onChange={handleChange}/>
                    </div>
                        <div className="mb-2 d-flex justify-content-center">
                        <input className="btn btn-default px-5" type="submit" value="Register" onClick={handleRegister}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
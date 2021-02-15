import React, { useState } from 'react';
import axios from 'axios';
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
        if(Object.values(state).includes('')) {
            document.getElementById('emptyFormMessage').style.display = 'flex';
            setTimeout(() => {document.getElementById('emptyFormMessage').style.display = 'none'}, 3000);
            return
        }

        axios.post(`/api/users/create`, {
            username: state.username,
            password: state.password
        })
        .then(response => {
            if(response.status===201)
                props.history.push('/');
        }, (error) => {
            document.getElementById('userExistsMessage').style.display = 'flex';
            setTimeout(() => {document.getElementById('userExistsMessage').style.display = 'none'}, 3000);
            console.log(error);
        });

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
                    <div className="justify-content-center" id="emptyFormMessage">Please fill out all fields!</div>
                    <div className="justify-content-center" id="userExistsMessage">This username already exists!</div>
                </form>
            </div>
        </div>
    );
}

export default Register;
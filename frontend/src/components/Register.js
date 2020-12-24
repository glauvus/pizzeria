import React, { useState } from 'react';

const Register = () => {
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const csrftoken = getCookie('csrftoken');

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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: state.username,
                password: state.password,
            }),
        };
        fetch('/api/create-user', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    }

    return (
        <div>
            <div class="register-body row d-flex justify-content-center">
                <form class="col-md-4 col-sm-6 col-8">
                    <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
                    <div class="mb-2">
                        <i class="fa fa-user"></i>
                        <label data-error="wrong" data-success="right" for="defaultForm-username">Username</label>
                        <input type="text" id="defaultForm-username" name="username" class="form-control" value={state.username} onChange={handleChange}/>
                    </div>
                    <div class="mb-2">
                        <i class="fa fa-lock"></i>
                        <label data-error="wrong" data-success="right" for="defaultForm-pass">Password</label>
                        <input type="password" id="defaultForm-pass" name="password" class="form-control" value={state.password} onChange={handleChange}/>
                    </div>
                        <div class="mb-2 d-flex justify-content-center">
                        <input class="btn btn-default px-5" type="submit" value="Register" onClick={handleRegister}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;
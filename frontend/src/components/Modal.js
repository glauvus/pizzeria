import React, { useState } from 'react';

const Modal = () => {

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

    const handleLogin = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: state.username,
                password: state.password,
            }),
        };
        fetch('/api/login', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    }

    return (
        <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header text-center">
                        <h4 class="modal-title w-100 font-weight-bold">Sign in</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form class="modal-body mx-3">
                        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
                        <div class="mb-5">
                            <i class="fa fa-user"></i>
                            <label data-error="wrong" data-success="right" for="defaultForm-username">Username</label>
                            <input type="text" id="defaultForm-username" name="username" class="form-control" value={state.username} onChange={handleChange}/>
                        </div>
                        <div class="mb-5">
                            <i class="fa fa-lock"></i>
                            <label data-error="wrong" data-success="right" for="defaultForm-pass">Password</label>
                            <input type="password" id="defaultForm-pass" name="password" class="form-control" value={state.password} onChange={handleChange}/>
                        </div>
                        <div class="mb-2 d-flex justify-content-center">
                            <input class="btn btn-default px-5" type="submit" value="Login" onClick={handleLogin}/>
                        </div>
                    </form>
                    <div class="modal-footer d-flex justify-content-center">
                        <div class="mb-2">Don't have an account yet?<a href="/register"> Register</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
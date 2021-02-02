import React from 'react';
import './Modal.css';

const Modal = () => {
    return (
        <div className="modal fade" id="modalLoginForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form className="modal-body mx-3">
                        <div className="mb-5">
                            <i className="fa fa-user"></i>
                            <label data-error="wrong" data-success="right" htmlFor="loginForm-username">Username</label>
                            <input type="text" id="loginForm-username" name="username" className="form-control"/>
                        </div>
                        <div className="mb-5">
                            <i className="fa fa-lock"></i>
                            <label data-error="wrong" data-success="right" htmlFor="loginForm-pass">Password</label>
                            <input type="password" id="loginForm-pass" name="password" className="form-control"/>
                        </div>
                        <div className="mb-2 d-flex justify-content-center">
                            <input className="btn btn-default px-5" type="submit" value="Login"/>
                        </div>
                    </form>
                    <div className="modal-footer d-flex justify-content-center">
                        <div className="mb-2">Don't have an account yet?<a href="/register"> Register</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
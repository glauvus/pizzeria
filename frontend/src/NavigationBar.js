import React from "react";
import './NavigationBar.css';
import Modal from './Modal';

const NavigationBar = () => {

    return (
        <div className="row">
            <nav className="col-12 navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand h1" href="/">Pizz3ria</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="modal" href="#modalLoginForm">SIGN IN/REGISTER</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cart"><i className="fa fa-shopping-cart fa-fw" aria-hidden="true"></i>&nbsp; CART</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <Modal />
        </div>
    );
}

export default NavigationBar;
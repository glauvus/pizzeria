import React, { useEffect } from "react";
import './NavigationBar.css';
import Modal from './Modal';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedIn, cartCounter } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { login, logout, setCartCounter } from './features/userSlice';
import axios from 'axios';

const NavigationBar = () => {

    const isUserLoggedIn = useSelector(isLoggedIn);
    const getCartCounter = useSelector(cartCounter);

    const dispatch = useDispatch();
    const setUserStatus = (isAuthenticated) => {
        if(isAuthenticated) {
            dispatch(login());
            axios.get('/api/cart')
            .then(response => {
                let counter = 0;
                for(const key in response.data)
                    counter += response.data[key].length;
                dispatch(setCartCounter(counter));
                })
            .catch(err => console.log(err));
        }
    }

    useEffect(() => {
        axios.get('/api/is-authenticated')
        .then(response => {
            console.log(response.data);
            setUserStatus(response.data.is_authenticated);
            })
        .catch(err => console.log(err));
    }, []);

    const handleLogout = (e) => {
        axios.get('/api/logout')
        .then(response => {console.log(response.data); dispatch(logout());})
        .catch(err => console.log(err));
    }

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
                            {
                                isUserLoggedIn ? <input type="button" value="LOGOUT" className="nav-link" data-toggle="modal" onClick={handleLogout}/>
                                : <a className="nav-link" data-toggle="modal" href="#modalLoginForm">SIGN IN/REGISTER</a>
                            }
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/cart'}>
                                &nbsp; CART
                                <i className="fa fa-shopping-cart fa-fw" aria-hidden="true"></i>
                                <span className='badge badge-danger'> {getCartCounter} </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Modal />
        </div>
    );
}

export default NavigationBar;
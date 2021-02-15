import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { increaseCartCounter } from './features/userSlice';
import './AddToCartModal.css';

// includes csrf token to requests
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const AddToCartModal = ({ item, category, toppings, price }) => {
    const [count, setCount] = useState(1);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
      };
    const handleDecrement = () => {
        setCount(prevCount => prevCount > 1 ? prevCount - 1 : 1);
      };
    
    let param = '';
    switch(category) {
        case 'pasta':
            param = 'pasta_id';
            break;
        case 'salads':
            param = 'salad_id';
            break;
        case 'desserts':
            param = 'dessert_id';
            break;
        case 'drinks':
            param = 'drink_id';
            break;
        default:
            param = '';
    }

    /* addToCart
    If pizza is custom it first requests creation of new pizza (/api/pizzas/create)
    then requests the addition of this pizza to the cart (/api/orders/create/pizzas)
    and displays either success or fail message.

    If pizza is not custom or item falls into another category
    it requests the addition of this item to the cart (/api/orders/create/${category}).
    */
    const addToCart = (e) => {
        if(category==='pizzas') {
            if(item==='0') {

                axios.post(`/api/pizzas/create`, {
                    price: price,
                    toppings: toppings
                })
                .then((response) => {
                    let size = 1
                    if(document.getElementById('gigaSizeRadio').checked) size=2;
                    axios.post(`/api/orders/create/pizzas`, {
                        pizza_id: response.data.id,
                        size_id: size,
                        quantity: count
                    })
                    .then((response) => {
                        dispatch(increaseCartCounter());
                        document.getElementById('successMessage').style.display = 'flex';
                        setTimeout(() => {document.getElementById('successMessage').style.display = 'none'}, 2000);
                    }, (error) => {
                        document.getElementById('failMessage').style.display = 'flex';
                        setTimeout(() => {document.getElementById('failMessage').style.display = 'none'}, 3000);
                        console.log(error);
                    });
                }, (error) => {
                    document.getElementById('failMessage').style.display = 'flex';
                    setTimeout(() => {document.getElementById('failMessage').style.display = 'none'}, 3000);
                    console.log(error);
                });
            }
            else {
                let size = 1
                if(document.getElementById('gigaSizeRadio').checked) size=2;
                axios.post(`/api/orders/create/pizzas`, {
                    pizza_id: item,
                    size_id: size,
                    quantity: count
                })
                .then((response) => {
                    dispatch(increaseCartCounter());
                    document.getElementById('successMessage').style.display = 'flex';
                    setTimeout(() => {document.getElementById('successMessage').style.display = 'none'}, 2000);
                }, (error) => {
                    document.getElementById('failMessage').style.display = 'flex';
                    setTimeout(() => {document.getElementById('failMessage').style.display = 'none'}, 3000);
                    console.log(error);
                });
            }
        }

        else {
            axios.post(`/api/orders/create/${category}`, {
                [param]: item,
                quantity: count
            })
            .then((response) => {
                dispatch(increaseCartCounter());
                document.getElementById('successMessage').style.display = 'flex';
                setTimeout(() => {document.getElementById('successMessage').style.display = 'none'}, 2000);
            }, (error) => {
                document.getElementById('failMessage').style.display = 'flex';
                setTimeout(() => {document.getElementById('failMessage').style.display = 'none'}, 3000);
                console.log(error);
            });
        }

    }

    return (
        <div className="modal fade" id="modalOrder" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <h4 className="modal-title w-100 font-weight-bold">Select quantity</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body mx-3 text-center">
                        <button type="button" className="rounded-circle font-weight-bold" onClick={handleDecrement}>-</button>
                        <h5 className="d-inline mx-3">{count}</h5>
                        <button type="button" className="rounded-circle font-weight-bold" onClick={handleIncrement}>+</button>
                    </div>
                    {
                    category === 'pizzas' &&
                    <div>
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Select size</h4>
                        </div>
                        <div className="modal-body mx-3 text-center">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="familySizeRadio" defaultChecked />
                                <label className="form-check-label" htmlFor="familySizeRadio">
                                Family
                                </label>
                            </div>
                            <div className="form-check mx-3">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="gigaSizeRadio" />
                                <label className="form-check-label" htmlFor="gigaSizeRadio">
                                Giga
                                </label>
                            </div>
                        </div>
                    </div>
                    }
                    <div className="modal-footer d-flex justify-content-center">
                        <button className="btn btn-default px-5" onClick={addToCart}>ADD</button>
                    </div>
                </div>
            </div>
            <div className="modal-dialog alert alert-success alert-dismissible fade show" id="successMessage" role="alert">
                Successfully added to the cart.
            </div>
            <div className="modal-dialog alert alert-danger alert-dismissible fade show" id="failMessage" role="alert">
                Action failed. Please login first.
            </div>
        </div>
    );
}

export default AddToCartModal;
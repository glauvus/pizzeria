import React, { useState } from 'react';
import './AddToCartModal.css';

const AddToCartModal = ({ item }) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
      };
    const handleDecrement = () => {
        setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
      };

    const addToCart = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                pasta_id: item,
                quantity: count,
            }),
        }
        fetch('/api/orders/create/pasta', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
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
                    <div className="modal-footer d-flex justify-content-center">
                        <button className="btn btn-default px-5" onClick={addToCart}>ADD</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddToCartModal;
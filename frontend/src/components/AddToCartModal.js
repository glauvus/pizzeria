import React, { useEffect, useState } from 'react';

const AddToCartModal = ({ item }) => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
      };
    const handleDecrement = () => {
        setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
      };

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

    const addToCart = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'X-CSRFToken': csrftoken },
            body: JSON.stringify({
                pasta_id: item,
                quantity: count,
            }),
        };
        fetch('/api/orders/create/pasta', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    }

  return (
    <div class="modal fade" id="modalLoginForm2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h4 class="modal-title w-100 font-weight-bold">Select quantity</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body mx-3 text-center">
                    <button type="button" class="rounded-circle font-weight-bold" onClick={handleDecrement}>-</button>
                    <h5 class="d-inline mx-3">{count}</h5>
                    <button type="button" class="rounded-circle font-weight-bold" onClick={handleIncrement}>+</button>
                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button class="btn btn-default px-5" onClick={addToCart}>ADD</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AddToCartModal;
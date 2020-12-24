import React from 'react';

const OrderSalad = props => {
    return (
        <div class="row">
            <div class="col-md-3 col-sm-4 col-6">
                <div class="card mt-3">
                    <img class="card-img-top" src={`../../static/img/${props.filename}.png`} alt="Card image cap"/>
                    <div class="card-body">
                        <div>
                            <h5 class="card-title">{props.filename}</h5>
                            <h3 class="card-text">{props.price} &euro;</h3>
                            <input type="button" class="btn btn-primary add-to-cart mr-2" value="Add to cart"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSalad;
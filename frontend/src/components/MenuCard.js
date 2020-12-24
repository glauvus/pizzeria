import React, { useEffect, useState } from 'react';

const MenuCard = props => {
    const [items, setItems] = useState([]);
    const category = props.match.params.category;

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('/api/'+category, requestOptions)
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div class="row">
        {items.map((item, key) => {
        return (
        <div class="col-md-3 col-sm-4 col-6">
            <div class="card mt-3">
                <img class="card-img-top" src={`../../static/img/${item.name}.jpg`} alt="Card image cap"/>
                    <div class="card-body">
                        <div>
                            <h5 class="card-title">{item.name}</h5>
                            <h3 class="card-text">{item.price} &euro;</h3>
                            <input type="button" class="btn btn-primary add-to-cart mr-2" value="Add to cart"/>
                        </div>
                    </div>
            </div>
        </div>
        );
    })}
    </div>
    );
};

export default MenuCard;


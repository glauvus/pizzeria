import React, { useEffect, useState } from 'react';
import AddToCartModal from './AddToCartModal';

const MenuCard = props => {
    const [items, setItems] = useState([]);
    const [selectedItemID, setSelectedItemID] = useState(0);
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

    const getItemID = e => {
        let itemID = e.target.parentElement.id;
        setSelectedItemID(itemID);
    }

  return (
    <div class="row">

      {items.map((item, key) => (
        <div class="col-md-3 col-sm-4 col-6">
            <div class="card mt-3">
                <img class="card-img-top" src={`../../static/img/${item.name}.jpg`} alt="Card image cap"/>
                    <div class="card-body">
                        <div id={item.id}>
                            <h5 class="card-title">{item.name}</h5>
                            <h3 class="card-text">{item.price} &euro;</h3>
                            <a onClick={getItemID} class="btn btn-primary add-to-cart mr-2" data-toggle="modal" href="#modalLoginForm2">Add to cart</a>
                        </div>
                    </div>
            </div>
        </div>
        ))
        }
        <AddToCartModal item={selectedItemID} />
    </div>
  );
};

export default MenuCard;

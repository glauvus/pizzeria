import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MenuCard.css';
import AddToCartModal from './AddToCartModal';

const MenuCard = ({match}) => {
    const [items, setItems] = useState([]);
    const [selectedItemID, setSelectedItemID] = useState(0);
    const category = match.params.category;

    useEffect(() => {
        axios.get(`/api/${category}`)
        .then(response => {setItems(response.data); console.log(response.data);})
        .catch(err => console.log(err));
    }, [category]);

    const getItemID = e => {
        let itemID = e.target.parentElement.id;
        setSelectedItemID(itemID);
    }

    /*const fetchItems = async () => {
        const data = await fetch(
            `/api/${match.params.category}`
        );

        const items = await data.json();
        console.log(items);
        setItems(items);
    };*/

  return (
    <div className="row">
      {items.map(item => (
        <div key={item.id} className="col-md-3 col-sm-4 col-6">
            <div className="card mt-3">
                <img className="card-img-top" src={require(`./img/${item.name}.jpg`)} alt="item card"/>
                    <div className="card-body">
                        <div id={item.id}>
                            <h5 className="card-title">{item.name}</h5>
                            <h3 className="card-text">{item.price} &euro;</h3>
                            <a onClick={getItemID} className="btn btn-primary add-to-cart mr-2" data-toggle="modal" href="#modalOrder">Add to cart</a>
                        </div>
                    </div>
            </div>
        </div>
        ))
        }
        <AddToCartModal item={selectedItemID} />
    </div>
  );
}

export default MenuCard;

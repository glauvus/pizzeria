import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MenuCard.css';
import AddToCartModal from './AddToCartModal';
import { Link } from 'react-router-dom';

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

  return (
    <div className="row">
        {
        category === 'pizzas' &&
        <div className="col-md-3 col-sm-4 col-6">
            <div className="card mt-3">
                <img className="card-img-top" src={require(`./img/custom.jpg`)} alt="item card"/>
                    <div className="card-body">
                        <div>
                            <h5 className="card-title">Customized</h5>
                            <h3 className="card-text">pizza</h3>
                            <Link className="btn btn-primary mr-2" to='/menu/pizzas/custom'>Make yours</Link>
                        </div>
                    </div>
            </div>
        </div>
        }
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
        <AddToCartModal item={selectedItemID} category={category} />
    </div>
  );
}

export default MenuCard;

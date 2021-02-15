import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Cart.css';

const Cart = () => { 
    const [pizzaItems, setPizzaItems] = useState([]);
    const [pastaItems, setPastaItems] = useState([]);
    const [saladItems, setSaladItems] = useState([]);
    const [dessertItems, setDessertItems] = useState([]);
    const [drinkItems, setDrinkItems] = useState([]);
    let totalSum = 0;

    useEffect(() => {
        axios.get('/api/cart')
        .then(response => {
            console.log(response.data);
            setPizzaItems(response.data['pizzas']);
            setPastaItems(response.data['pasta']);
            setSaladItems(response.data['salads']);
            setDessertItems(response.data['desserts']);
            setDrinkItems(response.data['drinks']);
            document.getElementById('cartTable').style.visibility = 'visible';
        })
        .catch(err => {
            document.getElementById('cartFailMessage').style.display = 'flex';
            console.log(err);
        });
    }, []);

    pizzaItems.forEach((pizzaItem) => totalSum += pizzaItem.pizza_id.price * pizzaItem.size_id.price_pct * pizzaItem.quantity);
    pastaItems.forEach((pastaItem) => totalSum += pastaItem.pasta_id.price * pastaItem.quantity);
    saladItems.forEach((saladItem) => totalSum += saladItem.salad_id.price * saladItem.quantity);
    dessertItems.forEach((dessertItem) => totalSum += dessertItem.dessert_id.price * dessertItem.quantity);
    drinkItems.forEach((drinkItem) => totalSum += drinkItem.drink_id.price * drinkItem.quantity);

    /* checkoutCart
    It requests the checkout of the cart and, if successful, redirects to main page
    */
    const checkoutCart = () => {
        axios.put('/api/checkout')
        .then(response => {
            document.getElementById('checkoutSuccessMessage').style.display = 'flex';
            setTimeout(() => {document.getElementById('checkoutSuccessMessage').style.display = 'none'}, 2000);
            axios.post('/api/carts/create')
            .then(response => window.location.href='/')
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="row">
            <table className="table col-sm-8 col-md-6 mx-auto" id="cartTable">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th className="text-center" scope="col">Quantity</th>
                        <th className="text-right" scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                {pizzaItems.map(pizzaItem => (
                    <tr key={pizzaItem.id}>
                        <td>{pizzaItem.pizza_id.name}</td>
                        <td className="text-center">x{pizzaItem.quantity}</td>
                        <td className="text-right">{(pizzaItem.pizza_id.price * pizzaItem.size_id.price_pct * pizzaItem.quantity).toFixed(2)}</td>
                    </tr>
                ))}
                {pastaItems.map(pastaItem => (
                    <tr key={pastaItem.id}>
                        <td>{pastaItem.pasta_id.name}</td>
                        <td className="text-center">x{pastaItem.quantity}</td>
                        <td className="text-right">{(pastaItem.pasta_id.price * pastaItem.quantity).toFixed(2)}</td>
                    </tr>
                ))}
                {saladItems.map(saladItem => (
                    <tr key={saladItem.id}>
                        <td>{saladItem.salad_id.name}</td>
                        <td className="text-center">x{saladItem.quantity}</td>
                        <td className="text-right">{(saladItem.salad_id.price * saladItem.quantity).toFixed(2)}</td>
                    </tr>
                ))}
                {dessertItems.map(dessertItem => (
                    <tr key={dessertItem.id}>
                        <td>{dessertItem.dessert_id.name}</td>
                        <td className="text-center">x{dessertItem.quantity}</td>
                        <td className="text-right">{(dessertItem.dessert_id.price * dessertItem.quantity).toFixed(2)}</td>
                    </tr>
                ))}
                {drinkItems.map(drinkItem => (
                    <tr key={drinkItem.id}>
                        <td>{drinkItem.drink_id.name}</td>
                        <td className="text-center">x{drinkItem.quantity}</td>
                        <td className="text-right">{(drinkItem.drink_id.price * drinkItem.quantity).toFixed(2)}</td>
                    </tr>
                ))}
                    <tr>
                        <td className="font-weight-bold" colSpan="2">Total</td>
                        <td className="text-right font-weight-bold" id="total">{totalSum.toFixed(2)}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td className="text-right font-weight-bold">
                            <button className="btn btn-success" onClick={checkoutCart}>CHECKOUT</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
            </div>
            <div className="row">
            <div className="alert alert-success alert-dismissible fade show mx-auto" id="checkoutSuccessMessage" role="alert">
                Successfully checked out your order!
            </div>
            <div className="alert alert-danger alert-dismissible fade show mx-auto" id="cartFailMessage" role="alert">
                Login to see your cart!
            </div>
            </div>
        </div>
    );
}

export default Cart;
import React, { useState, useEffect } from "react";
import axios from 'axios';

const Cart = () => { 
    const [pastaItems, setPastaItems] = useState([]);
    const [saladItems, setSaladItems] = useState([]);
    const [dessertItems, setDessertItems] = useState([]);
    const [drinkItems, setDrinkItems] = useState([]);
    let totalSum = 0;

    useEffect(() => {
        axios.get('/api/cart')
        .then(response => {
            console.log(response.data);
            setPastaItems(response.data['pasta']);
            setSaladItems(response.data['salads']);
            setDessertItems(response.data['desserts']);
            setDrinkItems(response.data['drinks']);
        })
        .catch(err => console.log(err));
    }, []);

    pastaItems.forEach((pastaItem) => totalSum += pastaItem.pasta_id.price * pastaItem.quantity);
    saladItems.forEach((saladItem) => totalSum += saladItem.salad_id.price * saladItem.quantity);
    dessertItems.forEach((dessertItem) => totalSum += dessertItem.dessert_id.price * dessertItem.quantity);
    drinkItems.forEach((drinkItem) => totalSum += drinkItem.drink_id.price * drinkItem.quantity);

    return (
        <div className="row">
            <table className="table col-sm-8 col-md-6 mx-auto">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th className="text-center" scope="col">Quantity</th>
                        <th className="text-right" scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
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
                </tbody>
                <tfoot>
                    <tr>
                        <td className="font-weight-bold" colSpan="2">Total</td>
                        <td className="text-right font-weight-bold" id="total">{totalSum.toFixed(2)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Cart;
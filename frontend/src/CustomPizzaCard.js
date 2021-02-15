import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CustomPizzaCard.css';
import AddToCartModal from './AddToCartModal';

const CustomPizzaCard = () => {
    const [toppings, setToppings] = useState([]);
    const [selectedToppings, setSelectedToppings] = useState([]);
    const [price, setPrice] = useState(4)
    const [gouda, setGouda] = useState(false);
    const [mozzarella, setMozzarella] = useState(false);
    const [pepperoni, setPepperoni] = useState(false);
    const [ham, setHam] = useState(false);
    const [bacon, setBacon] = useState(false);
    const [salami, setSalami] = useState(false);
    const [turkey, setTurkey] = useState(false);
    const [mushrooms, setMushrooms] = useState(false);
    const [onions, setOnions] = useState(false);
    const [olives, setOlives] = useState(false);
    const [corn, setCorn] = useState(false);

    useEffect(() => {
        axios.get(`/api/toppings`)
        .then(response => {setToppings(response.data); console.log(response.data);})
        .catch(err => console.log(err));
    }, []);

    /* setVisible
    Sets visible (or invisible) an image of the topping checked (or unchecked)
    and updates the price.
    */
    const setVisible = (event) => {
        switch(event.target.id) {
            case 'Gouda':
                if(document.getElementById('Gouda').checked) {
                    setGouda(true);
                    setPrice(price+parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                else {
                    setGouda(false);
                    setPrice(price-parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                break;
            case 'Mozzarella':
                if(document.getElementById('Mozzarella').checked) {
                    setMozzarella(true);
                    setPrice(price+parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                else {
                    setMozzarella(false);
                    setPrice(price-parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                break;
            case 'Pepperoni':
                if(document.getElementById('Pepperoni').checked) {
                    setPepperoni(true);
                    setPrice(price+parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                else {
                    setPepperoni(false);
                    setPrice(price-parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                break;
            case 'Ham':
                if(document.getElementById('Ham').checked) {
                    setHam(true);
                    setPrice(price+parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                else {
                    setHam(false);
                    setPrice(price-parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                break;
            case 'Bacon':
                if(document.getElementById('Bacon').checked) {
                    setBacon(true);
                    setPrice(price+parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                else {
                    setBacon(false);
                    setPrice(price-parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                break;
            case 'Salami':
                if(document.getElementById('Salami').checked) {
                    setSalami(true);
                    setPrice(price+parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                else {
                    setSalami(false);
                    setPrice(price-parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                break;
            case 'Turkey':
                if(document.getElementById('Turkey').checked) {
                    setTurkey(true);
                    setPrice(price+parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                else {
                    setTurkey(false);
                    setPrice(price-parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                break;
            case 'Mushrooms':
                if(document.getElementById('Mushrooms').checked) {
                    setMushrooms(true);
                    setPrice(price+parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                else {
                    setMushrooms(false);
                    setPrice(price-parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                break;
            case 'Onion':
                if(document.getElementById('Onion').checked) {
                    setOnions(true);
                    setPrice(price+parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                else {
                    setOnions(false);
                    setPrice(price-parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                break;
            case 'Olives':
                if(document.getElementById('Olives').checked) {
                    setOlives(true);
                    setPrice(price+parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                else {
                    setOlives(false);
                    setPrice(price-parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                break;
            case 'Corn':
                if(document.getElementById('Corn').checked) {
                    setCorn(true);
                    setPrice(price+parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                else {
                    setCorn(false);
                    setPrice(price-parseFloat(toppings[event.target.parentNode.id-1].price));
                }
                break;
            default:
        }
    }

    /* setAllSelectedToppings
    Sets the list of the toppings with all checked toppings.
    */
    const setAllSelectedToppings = () => {
        var checkedBoxes = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map((element) => {return element.parentNode.id});
        setSelectedToppings(checkedBoxes);
    }

    return (
        <div className="row">
            <div className="col my-auto pizza-image">
                <img className="card-img-top first" src={require(`./img/PizzaBase.png`)} alt="item card"/>
                {
                    gouda &&
                    <img className="card-img-top second" src={require(`./img/Gouda.png`)} alt="item card"/>
                }
                {
                    mozzarella &&
                    <img className="card-img-top second" src={require(`./img/Mozzarella.png`)} alt="item card"/>
                }
                {
                    pepperoni &&
                    <img className="card-img-top second" src={require(`./img/Pepperoni.png`)} alt="item card"/>
                }
                {
                    ham &&
                    <img className="card-img-top second" src={require(`./img/Ham.png`)} alt="item card"/>
                }
                {
                    bacon &&
                    <img className="card-img-top second" src={require(`./img/Bacon.png`)} alt="item card"/>
                }
                {
                    salami &&
                    <img className="card-img-top second" src={require(`./img/Salami.png`)} alt="item card"/>
                }
                {
                    turkey &&
                    <img className="card-img-top second" src={require(`./img/Turkey.png`)} alt="item card"/>
                }
                {
                    mushrooms &&
                    <img className="card-img-top second" src={require(`./img/Mushroom.png`)} alt="item card"/>
                }
                {
                    onions &&
                    <img className="card-img-top second" src={require(`./img/Onion.png`)} alt="item card"/>
                }
                {
                    olives &&
                    <img className="card-img-top second" src={require(`./img/Olive.png`)} alt="item card"/>
                }
                {
                    corn &&
                    <img className="card-img-top second" src={require(`./img/Corn.png`)} alt="item card"/>
                }
            </div>
            <div className="col mx-5 my-auto">
                {toppings.map(topping => (
                    <div key={topping.id} id={topping.id}>
                        <input className="form-check-input" type="checkbox" value={topping.name} id={topping.name} onClick={setVisible} />
                        <label htmlFor="flexCheckDefault">
                        {topping.name}
                        </label>
                    </div>
                ))
                }
                <h4>Price: {price} &euro;</h4>
                <a className="btn btn-primary add-to-cart mr-2 my-3" data-toggle="modal" href="#modalOrder" onClick={setAllSelectedToppings}>Add to cart</a>
                <AddToCartModal item='0' category='pizzas' toppings={selectedToppings} price={price} />
            </div>
        </div>
    );
}

export default CustomPizzaCard;
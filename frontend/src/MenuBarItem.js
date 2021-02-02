import React from 'react';
import { Link } from 'react-router-dom';

const MenuBarItem = props => {
    const name = props.name;

    return (
        <Link className="col list-group-item list-group-item-action border-dark rounded-0" to={`/menu/${name}`}>
                <img src={require(`./img/${name}.png`)} alt="menu icon"/>
                <span className="h4 ml-4">{name}</span>
        </Link>
    );
}

export default MenuBarItem;
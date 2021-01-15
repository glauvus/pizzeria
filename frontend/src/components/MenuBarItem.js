import React from 'react';

const MenuBarItem = props => {
    const name = props.name;

    return (
        <a href={`/menu/${name}`} class="col list-group-item list-group-item-action border-dark rounded-0"><img src={`../../static/img/${name}.png`}/><span class="h4 ml-4">{name}</span></a>
    )
}

export default MenuBarItem;
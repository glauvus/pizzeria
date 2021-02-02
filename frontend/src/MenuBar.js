import React from 'react';
import MenuBarItem from './MenuBarItem';

const MenuBar = () => {
    return (
        <div className="row list-group list-group-horizontal">
            <MenuBarItem name="pizzas" />
            <MenuBarItem name="pasta" />
            <MenuBarItem name="salads" />
            <MenuBarItem name="desserts" />
            <MenuBarItem name="drinks" />
        </div>
    );
}

export default MenuBar;
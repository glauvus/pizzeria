import React from 'react';

const CarouselItem = props => {
    return (
        <div className={`${props.className}`} data-interval="3000">
            <img src={require(`./img/${props.filename}.jpg`)} className="d-block w-100" alt="..."/>
        </div>
    );
}

export default CarouselItem;
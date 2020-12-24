import React from 'react';

const CarouselItem = props => {
    return (
        <div class={`${props.className}`} data-interval="3000">
            <img src={`../../static/img/${props.filename}.jpg`} class="d-block w-100" alt="..."/>
        </div>
    )
}

export default CarouselItem;
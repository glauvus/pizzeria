import React from 'react';
import CarouselItem from './CarouselItem';

const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" class="row carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <CarouselItem filename="pizza5" className="carousel-item active" />
                <CarouselItem filename="pizza2" className="carousel-item" />
                <CarouselItem filename="pizza3" className="carousel-item" />
            </div>
        </div>
    )
}

export default Carousel;
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Simply, the best!</h1>
            <p className="lead">With over 100 years of experience, you can be sure you are eating from the masters.</p>
            <hr className="my-4"/>
            <p>Delicious pizza and fast delivery make us city's most loved pizza place.</p>
            <a className="btn btn-dark btn-lg" href="#" role="button">PLACE AN ORDER</a>
        </div>
    );
}

export default Banner;
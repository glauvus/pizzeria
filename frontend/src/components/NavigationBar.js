import React from "react";

const NavigationBar = () => {
    return (
        <div class="row">
            <nav class="col-12 navbar navbar-expand-lg navbar-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="modal" href="#modalLoginForm">SIGN IN/REGISTER</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/cart"><i class="fa fa-shopping-cart fa-fw" aria-hidden="true"></i>&nbsp; CART</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar;
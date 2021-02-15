import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavigationBar from './NavigationBar';
import MenuBar from './MenuBar';
import Carousel from './Carousel';
import Banner from './Banner';
import MenuCard from './MenuCard';
import Register from './Register';
import Footer from './Footer';
import Cart from './Cart';
import CustomPizzaCard from './CustomPizzaCard';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <MenuBar />
        <Switch>
          <Route exact path="/">
            <Carousel />
            <Banner />
          </Route>
          <Route path="/menu/pizzas/custom" component={CustomPizzaCard} />
          <Route path="/menu/:category" component={MenuCard} />
          <Route path="/cart" component={Cart} />
          <Route path="/register" component={Register} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

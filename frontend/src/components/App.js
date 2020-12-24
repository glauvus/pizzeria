import React from 'react';
import NavigationBar from './NavigationBar';
import MenuBar from './MenuBar';
import Carousel from './Carousel';
import Banner from './Banner';
import Footer from './Footer';
import Modal from './Modal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Register';
import MenuCard from './MenuCard';

function App() {
	return (
		<div className="App">
			<NavigationBar />
			<MenuBar />
			<Router>
				<Switch>
					<Route exact path="/">
						<Carousel />
						<Banner />
					</Route>
					<Route path="/menu/:category" component={MenuCard} />
					<Route path="/register" component={Register} />
				</Switch>
			</Router>
			<Footer />
			<Modal />
		</div>
	);
}

export default App;
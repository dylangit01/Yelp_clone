import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RestaurantsContextProvider } from './context/contextAPI';
import Details from './routes/Details';
import Home from './routes/Home';
import Update from './routes/Update';

const App = () => {
	return (
		// Using context wrap everything inside
		<RestaurantsContextProvider>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/restaurants/:id/update' component={Update} />
					<Route exact path='/restaurants/:id' component={Details} />
				</Switch>
			</Router>
		</RestaurantsContextProvider>
	);
};

export default App;

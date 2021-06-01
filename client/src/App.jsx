import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from './routes/Details';
import Home from './routes/Home';
import Update from './routes/Update';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/restaurants/:id/update' component={Update} />
				<Route exact path='/restaurants/:id' component={Details} />
			</Switch>
		</Router>
	);
};

export default App;

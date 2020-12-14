import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import NotFound from './notFound/notFound';
import Dashboard from './users/Dashboard';

class App extends Component {
	render() {
		return (
			<Fragment>
				<header>
					<Header />
				</header>
				<div className='container'>
					<main>
						<Dashboard />
						<Route component={NotFound} />
					</main>
				</div>

				<footer>
					<div>
						<p>&copy; Shalom Lee</p>
					</div>
				</footer>
			</Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

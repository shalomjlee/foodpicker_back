import React, { Component, Fragment, useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './layout/Header.js';
import NotFound from './notFound/notFound';
import Home from './users/Home';
// import Login from './users/Login.js';
import RegisterDisplay from './users/RegisterDisplay.js';
import LoginDisplay from './users/LoginDisplay.js';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
	const [userId, setUserId] = useState('');

	
		return (
			<Fragment>
				<header>
					<Header 
                    setLoggedin={setLoggedIn}
                    loggedIn={loggedIn}
                    />
				</header>
                <main>
				<Home />
                <BrowserRouter>
				<Switch>
					<Route path='/api/login' render = {
                        () => {
                            <LoginDisplay
                            loggedIn={loggedIn}
                            setLoggedIn={setLoggedIn}
                            userId = {userId}
							setUserId = {setUserId}
                            />
                        }
                    } />
					<Route path='/api/register' component={RegisterDisplay}/>
                    <Route component={NotFound}/>
				</Switch>
                </BrowserRouter>

                </main>
				<footer>
					<div>
						<p>&copy; 2020 Shalom Lee</p>
					</div>
				</footer>
			</Fragment>
		);
}

ReactDOM.render(<App />, document.getElementById('app'));

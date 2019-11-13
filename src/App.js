import React, { Component } from 'react';
import Navbar from './components/NavBar/Navbar';
import Body from './components/Body/Body'
import Phones from './components/Phones/Phones'

import Home from '../src/pages/Home'
import Rooms from '../src/pages/Rooms'
import Error from '../src/pages/Error'

import {Route, Switch} from 'react-router-dom'

class App extends Component {
    render() {
		return (
			<>
            <Switch>
                <Route exact path='/Home/' component ={Home} />
                <Route exact path='/Rooms/' component ={Rooms} />
                {/* <Route exact path='/Rooms/:slug' component ={Rooms} /> */}
                <Route component={Error} />
            </Switch>
                <Navbar />
                <Body />
                <Phones />
            </>
        );
    }
}

export default App;
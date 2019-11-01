import React, { Component } from 'react';
import Navbar from './components/NavBar/Navbar';
import Body from './components/Body/Body'

class App extends Component {
    render() {
		return (
			<React.Fragment>
                <Navbar />
                <Body />
            </React.Fragment>
        );
    }
}

export default App;
import React, { Component } from 'react';
import Navbar from './components/NavBar/Navbar';
import Body from './components/Body/Body'
import Phones from './components/Phones/Phones'

class App extends Component {
    render() {
		return (
			<>
                <Navbar />
                <Body />
                <Phones />
            </>
        );
    }
}

export default App;
import React, { Component } from 'react';
import Navbar from './components/NavBar/Navbar';
import Body from './components/Body/Body'
import Phones from './components/Phones/Phones'
import Addphone from './components/Addphone/Addphone'

class App extends Component {
    render() {
		return (
			<>
                <Navbar />
                <Body />
                <Addphone />
                <Phones />
            </>
        );
    }
}

export default App;
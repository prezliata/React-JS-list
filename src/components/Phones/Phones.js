import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class Phones extends Component {
	constructor() {
		super();
		this.state = {
            isLoaded: true,
			arrOfPhones: []
		};
	}

	componentDidMount() {
		this.getPhones();
	}

	getPhones = () => {
		axios
			.get('http://www.mocky.io/v2/5dbc31173100008bf04c0ef5')
			.then((res) => {
				this.setState({
					arrOfPhones: res.data.results,
					loading: false
				});
			})
			.catch((err) => {
				console.log(err);
            });
            
	};

	render() {
        console.log(this.state.arrOfPhones);
        const phones = this.state.arrOfPhones.map((item, i) =>(
            <div key={i}>
                Name: {item.name}
            </div>
        ));

		return (
			<div>
                {phones}
			</div>
        );
	}
}

export default  (Phones);
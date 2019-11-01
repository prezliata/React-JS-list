import React, { Component } from 'react';
import axios from 'axios';

class Phones extends Component {
	constructor() {
		super();
		this.state = {
            loading: true,
			arrOfPhones: []
		};
	}

	componentDidMount() {
		this.getPhones();
	}

	getPhones = () => {
		axios
			.get('https://dog.ceo/api/breeds/image/random')
			.then((res) => {
				this.setState({
					arrOfPhones: res.data,
					loading: false
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};


	render() {
		console.log(this.state);
		
		return (
			<div>
                'hello'
			</div>
		);
	}
}

export default Phones;
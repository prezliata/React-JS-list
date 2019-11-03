import React, { Component } from 'react';
import axios from 'axios';
import './Phones.css';
import { connect } from 'react-redux';
import { getPhones, loadPhones } from './actions/setPhones';

class Phones extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arrOfPhones: []
		};
	}

	componentDidMount() {
		this.props.loadPhones();
	}

	// getPhones = () => {
	// 	axios
	// 		.get('http://www.mocky.io/v2/5dbc31173100008bf04c0ef5')
	// 		.then((res) => {
	// 			this.setState({
	// 				arrOfPhones: res.data.results,
	// 				loading: false
	// 			});
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

	render() {
		// console.log(this.state.arrOfPhones);
		// const phones = this.state.arrOfPhones.map((item, i) => (
		// 	<div key={i} className="wrapper">
		// 		<div className="container">
		// 			<input type="checkbox" defaultChecked={item.isChecked} />
		// 			<span className="value">{item.value}</span>
		// 			<span className="name">Name: {item.name}</span>
		// 			{/* <input className="button" /> */}
		// 			<button className="btnInc">Increment</button>
		// 			<button className="btnDec">Decrement</button>
		// 			<button className=" btnDel">Delete</button>
		// 		</div>
		// 	</div>
		// ));

		// return <div className="phones">{phones}</div>;
		console.log(this.props.phonesArr);
		return (
			<div>
				<h1>Phones</h1>
				<div>
					{this.props.phonesArr.map(function(d, idx) {
						return <li key={idx}>{d.name}</li>;
					})}
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadPhones: () => dispatch(loadPhones())
	};
};

const mapStateToProps = (state) => {
	return {
		phonesArr: state.phonesArr.phonesArr
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);

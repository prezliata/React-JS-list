import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loadPhones, postPhone } from './actions';
import Addphone from '../Addphone/Addphone.js';
import './Phones.css';

class Phones extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			price: 0,
			phone: null
		};
	}

	componentDidMount() {
		this.props.loadPhones();
		// this.handleSubmit();
	}

	onChangeName = (e) => {
		let name = e.target.value === '' ? 0 : e.target.value;
		this.setState({
			name: name
		});
	};

	onChangePrice = (e) => {
		let price = e.target.value;
		this.setState({
			price: price
		});
	};

	addItem = () => {
		let addDate = new Date().toLocaleString();
		let newItem = {
			isChecked: false,
			isEditMode: false,
			id: Date.now(),
			name: this.state.name,
			price: this.state.price,
			date: addDate
		};
		this.props.postPhone(newItem);
	};

	handleSubmit = () => {
		const phone = this.state.phone;
		axios
			.post(`http://localhost:3000/posts/`, phone)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		console.log(this.props.phonesArr);
		console.log(this.state);
		return (
			<div>
				<h1>Phones</h1>
				<div>
					<Addphone
						onChangeName={this.onChangeName}
						onChangePrice={this.onChangePrice}
						addItem={this.addItem}
						handleSubmit={this.handleSubmit}
					/>
				</div>
				<div className="wrapper">
					{this.props.phonesArr.map((item, idx) => {
						return (
							<div key={idx}>
								<div className="container phones">
									<input type="checkbox" defaultChecked={item.isChecked} />
									<span className="value">{item.value}</span>
									<span className="name">Name: {item.name}</span>
									{/* <input className="button" /> */}
									<button className="btnInc">Increment</button>
									<button className="btnDec">Decrement</button>
									<button className=" btnDel">Delete</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadPhones: () => dispatch(loadPhones()),
		postPhone: (phone) => dispatch(postPhone(phone))
	};
};

const mapStateToProps = (state) => {
	return {
		phonesArr: state.phonesArr.phonesArr
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);

import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loadPhones, postPhone, putPhone, getSortPhone, deletePhone, getFindPhone } from './actions';
import Addphone from '../Addphone/Addphone.js';
import Sortphone from '../Sortphone/Sortphone.js';
import './Phones.css';

class Phones extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editName: '',
			name: '',
			value: '',
			findPhone: []
		};
	}

	componentDidMount() {
		this.props.loadPhones();
	}

	onChangeName = (e) => {
		let name = e.target.value === '' ? 0 : e.target.value;
		this.setState({
			name: name
		});
	};

	onChangePrice = (e) => {
		let value = e.target.value;
		this.setState({
			value: value
		});
	};

	filterPhones = (e) => {
		// const phones = this.props.phonesArr;
		let filteredPhones = this.props.initialPhonesArr;
		filteredPhones = filteredPhones.filter(
			(item) => item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
		);
		this.props.getFindPhone(filteredPhones);
	};

	handleIncrement = (e) => {
		let id = e.target.getAttribute('data-id');
		console.log(id);
		const phones = this.props.phonesArr;
		const phone = phones.filter((el) => el.id == id)[0];
		phone.value++;
		console.log(phone);
		this.props.putPhone(phone);
	};
	handleDecrement = (e) => {
		let id = e.target.getAttribute('data-id');
		const phones = this.props.phonesArr;
		const phone = phones.filter((el) => el.id == id)[0];
		phone.value--;
		this.props.putPhone(phone);
	};

	addItem = () => {
		let addDate = new Date().toLocaleString();
		if (this.state.name !== '' && this.state.price !== '') {
			let newItem = {
				isChecked: false,
				isEditMode: false,
				id: Date.now(),
				name: this.state.name,
				value: this.state.value,
				date: addDate
			};
			this.props.postPhone(newItem);
			this.reset();
		}
	};
	reset() {
		this.setState({
			name: '',
			value: ''
		});
	}

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

	sortMaxMin = (arr) => {
		const phones = arr.sort((a, b) => a.value - b.value);
		this.props.getSortPhone(phones);
	};

	sortMinMax = (arr) => {
		const phones = arr.sort((a, b) => b.value - a.value);
		this.props.getSortPhone(phones);
	};
	sortPhoneFunc = (e) => {
		const { phonesArr } = this.props;
		return e.target.value === '1' ? this.sortMinMax(phonesArr) : this.sortMaxMin(phonesArr);
	};
	handleUpdate = () => {
		this.forceUpdate();
	};

	handleCheckboxChange = (e) => {
		let id = e.target.getAttribute('data-id');
		const phones = this.props.phonesArr;
		const phone = phones.filter((el) => el.id == id)[0];
		phone.isChecked = !phone.isChecked;
		this.props.putPhone(phone);
	};
	handleDelete = (e) => {
		let id = e.target.getAttribute('data-id');
		this.props.deletePhone(id);
	};

	isEditModeTrue = (e) => {
		let id = e.target.getAttribute('data-id');
		const phones = this.props.phonesArr;
		let editName = this.state.editName;
		const phone = phones.filter((el) => el.id == id)[0];
		phone.isEditMode = false;
		phone.name = editName;
		this.props.putPhone(phone);
	};
	isEditModeFalse = (e) => {
		let id = e.target.getAttribute('data-id');
		const phones = this.props.phonesArr;
		let editName = this.state.editName;
		const phone = phones.filter((el) => el.id == id)[0];
		phone.isEditMode = true;
		phone.name = editName;
		this.props.putPhone(phone);
	};

	handleEdit = (e) => {
		let name = e.target.value;
		this.setState({
			editName: name
		});
	};
	onDeleteAll = () => {
		const phones = this.props.phonesArr;
		let newPhones = phones.filter((c) => c.isChecked === true);
		newPhones.forEach((el) => this.props.deletePhone(el.id));
		console.log(newPhones);
	};
	render() {
		console.log(this.props.phonesArr);
		console.log(this.state);
		return (
			<div>
				<button onClick={this.handleUpdate}>Update</button>
				<h1>Phones</h1>
				<div>
					<Addphone
						onChangeName={this.onChangeName}
						onChangePrice={this.onChangePrice}
						addItem={this.addItem}
						handleSubmit={this.handleSubmit}
						resetValue={this.state.value}
						resetName={this.state.name}
					/>
				</div>
				<div>
					<Sortphone
						sortPhoneFunc={this.sortPhoneFunc}
						filterPhones={this.filterPhones}
						onDeleteAll={this.onDeleteAll}
					/>
				</div>
				<div className="wrapper">
					{this.props.phonesArr.map((item, idx) => {
						return (
							<div key={idx}>
								<div className="container phones">
									<input
										type="checkbox"
										defaultChecked={item.isChecked}
										onChange={(e) => this.handleCheckboxChange(e)}
										data-id={item.id}
									/>
									<span className="value">{item.value}</span>
									<span className="name">Name: {item.name}</span>
									{/* <input className="button" /> */}
									<button
										data-id={item.id}
										className="btnInc"
										onClick={(e) => this.handleIncrement(e)}
									>
										Increment
									</button>
									<button
										data-id={item.id}
										onClick={(e) => this.handleDecrement(e)}
										className="btnDec"
									>
										Decrement
									</button>
									<button data-id={item.id} onClick={(e) => this.handleDelete(e)} className=" btnDel">
										Delete
									</button>

									{item.isEditMode === false ? (
										<button
											onClick={(e) => this.isEditModeFalse(e)}
											data-id={item.id}
											className="btnEdit"
										>
											Edit
										</button>
									) : (
										<div>
											<button
												onClick={(e) => this.isEditModeTrue(e)}
												data-id={item.id}
												className="btnEdit"
											>
												Save
											</button>
											<input
												className="inputEdit"
												placeholder="edit"
												onChange={(e) => this.handleEdit(e)}
											/>
										</div>
									)}
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
		postPhone: (phone) => dispatch(postPhone(phone)),
		putPhone: (phone) => dispatch(putPhone(phone)),
		deletePhone: (phone) => dispatch(deletePhone(phone)),
		getSortPhone: (phones) => dispatch(getSortPhone(phones)),
		getFindPhone: (phones) => dispatch(getFindPhone(phones))
	};
};

const mapStateToProps = (state) => {
	return {
		phonesArr: state.phonesArr.phonesArr,
		initialPhonesArr: state.phonesArr.initialPhonesArr
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);

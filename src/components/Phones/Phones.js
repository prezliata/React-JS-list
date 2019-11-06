import React, { Component } from 'react';
import './Phones.css';
import { connect } from 'react-redux';
import { loadPhones } from './actions';

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

	render() {
		console.log(this.props.phonesArr);
		return (
			<div>
				<h1>Phones</h1>
				<div  className="wrapper">
					{this.props.phonesArr.map((item, idx)=> {
						return <div key={idx}>
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

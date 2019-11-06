import React, { Component } from 'react';
import './Addphone.css';

class Addphone extends Component {
	render() {
		const { onChangeName, onChangePrice, addItem, handleSubmit } = this.props;
		return (
			<div className="wrapper">
				<div className="inputWrapper">
					<input onChange={(e) => onChangeName(e)} className="input" placeholder="Name" />
					<input onChange={(e) => onChangePrice(e)} className="input" placeholder="Price" />
					<button onClick={() => addItem()} className="btnAdd">
						Add phone
					</button>
					<button onClick={() => handleSubmit()} className="btnAdd">
						Submit
					</button>
				</div>
			</div>
		);
	}
}

export default Addphone;

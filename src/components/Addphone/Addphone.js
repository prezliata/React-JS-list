import React, { Component } from 'react';
import './Addphone.css';

class Addphone extends Component {
	render() {
		const { onChangeName, onChangePrice, addItem, resetValue, resetName } = this.props;
		return (
			<div className="wrapper">
				<div className="inputWrapper">
					<input value= {resetName} onChange={(e) => onChangeName(e)} className="input" placeholder="Name" />
					<input value= {resetValue} onChange={(e) => onChangePrice(e)} className="input" placeholder="Price" />
					<button onClick={() => addItem()} className="btnAdd">
						Add phone
					</button>
				</div>
			</div>
		);
	}
}

export default Addphone;

import React, { Component } from 'react';


class Sortphone extends Component {
	render() {
		const { sortPhoneFunc, filterPhones, onDeleteAll } = this.props;
		return (
			<div className="wrapper">
				<div className="inputWrapper">
                    <select onChange={(e) => sortPhoneFunc(e)}>
						<option>Sort</option> />
						<option value="1">Max - Min</option>
						<option value="2">Min - Max</option>
					</select>
					<input placeholder="Search..."  onChange={(e) => filterPhones(e)} />
					<button onClick={onDeleteAll} className="btnDel">
					Delete select
				</button>
				</div>
			</div>
		);
	}
}

export default Sortphone;
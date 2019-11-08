import React, { Component } from 'react';


class Sortphone extends Component {
	render() {
		const { sortPhoneFunc } = this.props;
		return (
			<div className="wrapper">
				<div className="inputWrapper">
                    <select onChange={(e) => sortPhoneFunc(e)}>
						<option />
						<option value="1">Max - Min</option>
						<option value="2">Min - Max</option>
					</select>
				</div>
			</div>
		);
	}
}

export default Sortphone;
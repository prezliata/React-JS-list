import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
	componentDidUpdate(prevProps, prevState) {
		// console.log('prevProps', prevProps);
		// console.log('prevState', prevState);
	}

	render() {
		const { onReset, counters, onDelete, onIncrement, onDecrement, onUpdateName } = this.props;

		return (
			<div>
				<button onClick={onReset} className="btn btn-primary btn-sm m-2">
					Reset
				</button>
				{counters.map((counter) => (
					<Counter
						key={counter.id}
						onDelete={onDelete}
						onIncrement={onIncrement}
						counter={counter}
						onDecrement={onDecrement}
						onUpdateName={onUpdateName}
					/>
				))}
			</div>
		);
	}
}

export default Counters;

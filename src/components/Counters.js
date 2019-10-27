import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
	componentDidUpdate(prevProps, prevState) {
		// console.log('prevProps', prevProps);
		// console.log('prevState', prevState);
	}

	render() {
		const {
			onReset,
			counters,
			onDelete,
			onIncrement,
			onDecrement,
			onUpdateName,
			onEdit,
			onIsEditModeTrue,
			onIsEditModeFalse,
			onIsEditMode
		} = this.props;

		return (
			<div>
				<button onClick={onReset} className="btn btn-primary btn-sm m-2">
					Reset
				</button>
				{counters.map((counter) => (
					<Counter
						key={counter.id}
						editMode={counter.isEditMode}
						onDelete={onDelete}
						onIncrement={onIncrement}
						counter={counter}
						onDecrement={onDecrement}
						onUpdateName={onUpdateName}
						onEdit={onEdit}
						onIsEditModeTrue={onIsEditModeTrue}
						onIsEditModeFalse={onIsEditModeFalse}
						onIsEditMode={onIsEditMode}
					/>
				))}
			</div>
		);
	}
}

export default Counters;

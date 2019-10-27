import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
	render() {
		const {
			onReset,
			counters,
			onDelete,
			onIncrement,
			onDecrement,
			onUpdateName,
			onIsEditModeTrue,
			onIsEditModeFalse,
			onIsEditMode,
			onHandleEdit
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
						onIsEditModeTrue={onIsEditModeTrue}
						onIsEditModeFalse={onIsEditModeFalse}
						onIsEditMode={onIsEditMode}
						onHandleEdit={onHandleEdit}
					/>
				))}
			</div>
		);
	}
}

export default Counters;

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
            onHandleEdit,
            onChecked,
            onDeleteAll,
            onHandleInputChange
		} = this.props;

		return (
			<div>
				<button onClick={onReset} className="btn btn-primary btn-sm m-2">
					Reset
				</button>
                <button onClick={onDeleteAll} className="btn btn-danger btn-sm m-2">
					Delete select
				</button>
				{counters.map((counter) => (
					<Counter
                        isCheckedMode={counter.isChecked}
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
                        onChecked={onChecked}
                        onHandleInputChange={onHandleInputChange}
					/>
				))}
			</div>
		);
	}
}

export default Counters;

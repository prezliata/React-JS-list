import React, { Component } from 'react';

class Counter extends Component {
	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? 'Zero' : value;
	}

	handleIncrement = (product) => {
		this.setState({ value: this.state.value + 1 });
	};

	doHandleIncrement = () => {
		this.handleIncrement({ id: 1 });
	};

	renderTags() {
		if (this.state.tags.length === 0) return <p>There are no tags!</p>;
		return <ul>{this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>;
	}

	render() {
		let classes = 'badge m-2 badge-';
		classes += this.props.counter.value === 0 ? 'warning' : 'primary';
		return (
			<div>
                <input
                    name="isGoing"
                    type="checkbox"
                    defaultChecked={this.props.counter.isChecked}
                    onChange={this.props.onHandleInputChange} 
                    data-id={this.props.counter.id}
                />
				<h4>
					{this.props.counter.name + ':'} {this.props.counter.date} {this.props.id}
				</h4>
				<span className={classes}>{this.formatCount()}</span>
				<button
					onClick={(e) => this.props.onIncrement(this.props.counter, e)}
					data-id={this.props.counter.id}
					className="btn btn-primary btn-sm"
				>
					Increment
				</button>
				<button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm">
					Decrement
				</button>
				<button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">
					Delete
				</button>

				{this.props.editMode === false ? (
					<button
						onClick={(e) => this.props.onIsEditModeFalse(e)}
						data-id={this.props.counter.id}
						className="btn btn-danger btn-sm"
					>
						Edit
					</button>
				) : (
					<div>
						<button
							onClick={(e) => this.props.onIsEditModeTrue(e)}
							data-id={this.props.counter.id}
							className="btn btn-danger btn-sm"
						>
							Save
						</button>
						<input placeholder="edit" onChange={(e) => this.props.onHandleEdit(e)} />
					</div>
				)}
			</div>
		);
	}
}

export default Counter;

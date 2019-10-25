import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Counters from './components/Counters';

import './App.css';

class App extends Component {
	state = {
		name: '',
		value: 0,
		counters: [
			{ id: 1, name: 'LG', value: 0, date: 12.22 },
			{ id: 2, name: 'SAMSUNG', value: 0, date: 12.22 },
			{ id: 3, name: 'Apple', value: 0, date: 12.22 },
			{ id: 4, name: 'Nokia', value: 4, date: 12.22 }
		],
		initialCounters: []
	};

	// componentDidMount() {
	// 	this.addItem();
	// 	console.log(this.state);
	// }
	componentDidMount() {
		this.setCounters();
		console.log(this.state);
	}

	setCounters = () => {
		this.setState({ initialCounters: this.state.counters });
	};

	filterCounters = (e) => {
		let updatedCounters = this.state.initialCounters;
		updatedCounters = updatedCounters.filter((item) => {
			return item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
		});

		this.setState({ counters: updatedCounters });
	};

	onChangeName = (e) => {
		let name = e.target.value === '' ? 0 : e.target.value;
		this.setState({
			name: name
		});
	};

	onChangeValue = (e) => {
		let valueNumber = e.target.value;
		this.setState({
			value: valueNumber
		});
	};

	addItem = () => {
		let addDate = new Date().toLocaleString();
		let newItem = {
			id: Date.now(),
			name: this.state.name,
			value: this.state.value,
			date: addDate
		};
		let newCountersArr = this.state.counters;
		newCountersArr.push(newItem);

		this.setState({
			counters: newCountersArr
		});
		this.reset();
	};

	reset() {
		this.setState({
			name: '',
			value: 0
		});
		this.myFormRef.reset();
	}

	handleReset = () => {
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};

	handleIncrement = (counter) => {
		const counters = [ ...this.state.counters ];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	};
	handleDecrement = (counter) => {
		const counters = [ ...this.state.counters ];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value--;
		this.setState({ counters });
	};

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({ counters: counters });
	};

	sortMaxMin = (arr) => {
		let counters = arr.sort((a, b) => a.value - b.value);
		this.setState({ counters: counters });
	};

	sortMinMax = (arr) => {
		let counters = arr.sort((a, b) => b.value - a.value);
		this.setState({ counters: counters });
	};

	changeFunc = (e) => {
		const { counters } = this.state;
		return e.target.value === '1' ? this.sortMinMax(counters) : this.sortMaxMin(counters);
	};

	render() {
		console.log(this.state.counters);
		return (
			<React.Fragment>
				<NavBar
					totalCounters={this.state.counters.filter((c) => c.value > 0).length}
					sum={this.state.counters.reduce((acc, el) => acc + el.value, 0)}
				/>
				<main className="container">
					<form ref={(el) => (this.myFormRef = el)}>
						<input onChange={(e) => this.onChangeName(e)} placeholder="Name" />
						<input onChange={(e) => this.onChangeValue(e)} placeholder="Value" />
					</form>
					<input placeholder="Search..." onChange={this.filterCounters} />
					<button onClick={() => this.addItem()} className="btn btn-primary btn-sm">
						Add item
					</button>
					<button onClick={() => this.sortMaxMin()} className="btn btn-primary btn-sm">
						min max
					</button>

					<select onChange={(e) => this.changeFunc(e)}>
						<option />
						<option value="1">Max - Min</option>
						<option value="2">Min - Max</option>
					</select>
					<Counters
						counters={this.state.counters}
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						onDelete={this.handleDelete}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;

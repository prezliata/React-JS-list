import React from 'react';
// import {connect} from 'react-redux';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../Body/actions/changeNumber';

function Body() {
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>counter{counter}</h1>

			<button onClick={() => dispatch(increment(1))}>+</button>
			<button onClick={() => dispatch(decrement(1))}>-</button>
			{isLogged ? <h3>NOO</h3> : ''}
		</div>
	);
}

export default Body;
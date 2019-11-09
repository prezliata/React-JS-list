import React from 'react';
// import {connect} from 'react-redux';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
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

export default App;
// const mapStateToProps = (state) =>{
// 	return {
// 		age:state.age
// 	}
// };

// const mapDispatchToProps = (dispatch) =>{
// 	return {
// 		onAgeUp: () =>dispatch({type:"AGE_UP"}),
// 		onAgeDown: () =>dispatch({type:"AGE_DOWN"})
// 	}
// };

// export default connect(mapStateToProps, mapDispatchToProps) (App);

// function App(props) {
// 	return(
// 		<div>
// 			<h1>I am app</h1>
// 			<h2>My name is {props.myName}</h2>
// 			<button onClick={()=>{props.changeName("Oleg")}}>Change it</button>
// 		</div>
// 	)
// }

// const mapStateToProps = (state) =>{
// 	return {
// 		myName: state.name
// 	}
// }

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		changeName: (name) =>{dispatch({type:'CHANGE_NAME', payload:name})}
// 	}
// }

// export default  connect(mapStateToProps, mapDispatchToProps) (App);

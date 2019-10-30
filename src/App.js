import React, { Component } from 'react';
// import {connect} from 'react-redux';

import {connect} from 'react-redux';


class App  extends Component {
	// state = {
	// 	age:21
	// }

	render(){
		return(
			<div>
				<div>Age: <span>{this.props.age}</span></div>
				<button onClick={this.props.onAgeUp}>Age up</button>
				<button onClick={this.props.onAgeDown}>Age down</button>
			</div>
		)
	}
}

const mapStateToProps = (state) =>{
	return {
		age:state.age
	}
};

const mapDispatchToProps = (dispatch) =>{
	return {
		onAgeUp: () =>dispatch({type:"AGE_UP"}),
		onAgeDown: () =>dispatch({type:"AGE_DOWN"})
	}
};


export default connect(mapStateToProps, mapDispatchToProps) (App);

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
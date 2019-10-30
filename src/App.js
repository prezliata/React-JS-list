import React from 'react';

import {connect} from 'react-redux';



function App(props) {
	return(
		<div>
			<h1>I am app</h1>
			<h2>My name is {props.myName}</h2>
			<button onClick={()=>{props.changeName("Oleg")}}>Change it</button>
		</div>
	)
}

const mapStateToProps = (state) =>{
	return {
		myName: state.name
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeName: (name) =>{dispatch({type:'CHANGE_NAME', payload:name})}
	}
}

export default  connect(mapStateToProps, mapDispatchToProps) (App);
import axios from 'axios';
// import React, { Component } from 'react';

// export function setPhotos() {
// 	return (dispatch) => {
// 		return axios.get('http://www.mocky.io/v2/5dbc31173100008bf04c0ef5').then((res) => {
// 			dispatch(allPhones(res.data.results));
// 		});
// 	};
// }

// class setPhotos extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			arrOfPhones:[]
// 		};
// 	}

// 	componentDidMount() {
// 		this.getPhones();
// 	}

// 	getPhones = () => {
// 		axios
// 			.get('http://www.mocky.io/v2/5dbc31173100008bf04c0ef5')
// 			.then((res) => {
// 				this.setState({
// 					arrOfPhones: res.data.results,
// 					loading: false
// 				});
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	};

// 	render() {
// 		return (dispatch) => {
// 			return axios.get('http://www.mocky.io/v2/5dbc31173100008bf04c0ef5').then((res) => {
// 				dispatch(allPhones(res.data.results));
// 			});
// 		};
// 	}
// }
// export default setPhotos;
// const methods = {
//     componentDidMount(props) {
//         this.getPhones();
//     }
//   };

export const loadPhones = () => {
	return (dispatch) => {
		axios.get('http://www.mocky.io/v2/5dbc31173100008bf04c0ef5').then((res) => {
			dispatch(getPhones(res.data.results));
		});
	};
};

export const getPhones = (phones) => {
	return {
		type: 'GET_PHONES',
		payload: phones
	};
};

// export const increment = (numb) =>{
//     return{
//         type: "INCREMENT",
//         payload: numb
//     };
// };

// export const decrement = (numb) =>{
//     return{
//         type: "DECREMENT",
//         payload: numb
//     };
// };

import axios from 'axios';

export const loadPhones = () => {
	return (dispatch) => {
		axios.get('http://localhost:3000/posts/').then((res) => {
			dispatch(getPhones(res.data));
		});
	};
};

export const getPhones = (phones) => {
	return {
		type: 'GET_PHONES',
		payload: phones
	};
};

export const postPhone = (phone) => {
	return (dispatch) => {
		axios.post(`http://localhost:3000/posts/`, phone).then(() => {
			dispatch(loadPhones());
		});
	};
};

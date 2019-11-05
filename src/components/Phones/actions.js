import axios from 'axios';

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


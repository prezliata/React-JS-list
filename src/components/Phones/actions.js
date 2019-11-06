import axios from 'axios';

export const loadPhones = () => {
	return (dispatch) => {
		axios.get('https://5dc2cce41666f6001477f524.mockapi.io/reactapi/phone').then((res) => {
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

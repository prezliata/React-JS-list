import axios from 'axios';

export const loadPhones = () => {
	return (dispatch) => {
		axios.get('http://demo5642441.mockable.io/tewgsesxerf').then((res) => {
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

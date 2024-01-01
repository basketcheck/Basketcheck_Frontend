import axios from 'axios';
import cookies from 'js-cookie';
const ServerURL = 'http://122.34.57.9:9898';

export const customAxios = axios.create({
	baseURL: `${ServerURL}`,
	headers: {
		accessToken: localStorage.getItem('accessToken'),
	},
});

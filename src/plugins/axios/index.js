import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});

instance.interceptors.response.use(async (response) => {
	return response.data;
});

export default instance;

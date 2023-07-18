import { PUBLIC_BASE_URL } from '$env/static/public';
import axios from 'axios';

export const getSite = async () => {
	const { data } = await axios.get(`${PUBLIC_BASE_URL}site/1/site-data`);
	return data;
};

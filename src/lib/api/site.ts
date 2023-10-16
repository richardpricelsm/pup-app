import { PUBLIC_BASE_URL } from '$env/static/public';
import axios from 'axios';

export const getSite = async () => {
	console.time('requestSite');
	const { data } = await axios.get<Site>(`${PUBLIC_BASE_URL}site/1/site-data`);
	console.timeEnd('requestSite');
	return data;
};

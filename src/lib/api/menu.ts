import axios, { type AxiosResponse } from 'axios';
import type { Menu } from './types';
import { PUBLIC_BASE_URL } from '$env/static/public';

export const getMenu = async (): Promise<AxiosResponse<Menu> | null> => {
	try {
		console.time('requestMenu');
		const data = await axios.get<Menu>(`${PUBLIC_BASE_URL}site/1/menus`);
		console.timeEnd('requestMenu');
		return data;
	} catch (e) {
		return null;
	}
};

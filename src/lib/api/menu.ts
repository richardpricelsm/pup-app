import axios from 'axios';
import type { Menu } from './types';
import { PUBLIC_BASE_URL } from '$env/static/public';

export const getMenu = async (): Promise<Menu | null> => {
	try {
		const { data } = await axios.get<Menu>(`${PUBLIC_BASE_URL}site/1/menus`);
		return data;
	} catch (e) {
		return null;
	}
};

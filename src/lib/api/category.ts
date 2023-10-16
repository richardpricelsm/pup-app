import axios from 'axios';
import type { Category } from './types';
import { PUBLIC_BASE_URL } from '$env/static/public';

export const getCategory = async (slug: string): Promise<Category | null> => {
	try {
		console.time('requestCategory');
		const { data } = await axios.get<Category>(`${PUBLIC_BASE_URL}site/1/categories/${slug}`);
		console.timeEnd('requestCategory');
		return data;
	} catch (e) {
		return null;
	}
};

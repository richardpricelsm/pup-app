import axios from 'axios';
import type { Directory } from './types';
import { PUBLIC_BASE_URL } from '$env/static/public';

export const getDirectory = async (): Promise<Directory> => {
	const { data } = await axios.get<Directory>(`${PUBLIC_BASE_URL}site/1/directories`);
	return data;
};

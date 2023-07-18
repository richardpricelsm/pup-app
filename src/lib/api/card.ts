import axios from 'axios';
import type { Card } from './types';
import { PUBLIC_BASE_URL } from '$env/static/public';

export const getCard = async (cardid: string): Promise<Card> => {
	const { data } = await axios.get<Card>(`${PUBLIC_BASE_URL}site/1/offers/${cardid}`);
	return data;
};

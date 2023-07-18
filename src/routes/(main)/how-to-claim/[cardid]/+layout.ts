import type { LayoutLoad } from './$types';
import { error } from '@sveltejs/kit';
import { Card } from '$lib/api';

export const load = (async ({ params }) => {
	const card = await Card.getCard(params.cardid);
	if (card) {
		return { card };
	}
	error(404, 'card not found');
}) satisfies LayoutLoad;

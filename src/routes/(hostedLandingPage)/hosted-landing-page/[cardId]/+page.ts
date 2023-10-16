import type { PageLoad } from './$types';
import { Card } from '$lib/api';

export const load = (async ({ params }) => {
	const card = async () => await Card.getCard(params.cardId);
	return { card: card() };
}) satisfies PageLoad;

import type { LayoutLoad } from './$types';
import { error } from '@sveltejs/kit';
import { Category } from '$lib/api';

export const load = (async ({ params }) => {
	const category = await Category.getCategory(params.slug);
	if (category) {
		return { category };
	}
	throw error(404, 'category not found');
}) satisfies LayoutLoad;

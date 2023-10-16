import type { LayoutLoad } from './$types';
import { error } from '@sveltejs/kit';
import { Category } from '$lib/api';

export const load = (async ({ params }) => {
	const category = async () => await Category.getCategory(params.slug);
	return { category: category() };
}) satisfies LayoutLoad;

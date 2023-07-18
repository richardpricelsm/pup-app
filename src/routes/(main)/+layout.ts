import type { LayoutLoad } from './$types';
import { error } from '@sveltejs/kit';
import { Menu, Site } from '$lib/api';

export const load = (async () => {
	const site = await Site.getSite();
	const menu = await Menu.getMenu();

	if (!site) {
		return error(404, 'Site not found');
	}
	if (!menu) {
		return error(404, 'Menu not found');
	}
	return { site, menu };
}) satisfies LayoutLoad;

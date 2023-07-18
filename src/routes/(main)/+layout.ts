import type { LayoutLoad } from './$types';
import { error } from '@sveltejs/kit';
import { Directory, Menu, Site } from '$lib/api';

export const load = (async () => {
	const site = await Site.getSite();
	const menu = await Menu.getMenu();
	const directory = await Directory.getDirectory();

	if (!site) {
		return error(404, 'Site not found');
	}
	if (!menu) {
		return error(404, 'Menu not found');
	}
	if (!directory) {
		return error(404, 'Directory not found');
	}
	return { site, menu, directory };
}) satisfies LayoutLoad;

import type { LayoutLoad } from './$types';
import { error } from '@sveltejs/kit';
import { Directory, Menu, Site } from '$lib/api';

export const load = (async ({ setHeaders }) => {
	const site = async () => {
		console.info('starting site');
		return await Site.getSite();
	};
	const menu = async () => await Menu.getMenu();
	const directory = async () => await Directory.getDirectory();

	return { site: site(), menu: menu(), directory: directory() };
}) satisfies LayoutLoad;

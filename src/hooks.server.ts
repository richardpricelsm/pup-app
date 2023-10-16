import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	console.time('resolution');
	const repsonse = await resolve(event);
	console.timeEnd('resolution');
	return repsonse;
};

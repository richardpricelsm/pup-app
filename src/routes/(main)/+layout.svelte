<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
	import '../../app.postcss';

	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';

	import { config } from '@fortawesome/fontawesome-svg-core';

	import Navigation from '$lib/Navigation/Navigation.svelte';
	import type { LayoutData } from './$types';
	import Footer from '$lib/Footer/Footer.svelte';

	function drawerOpen(): void {
		drawerStore.open({});
	}

	export let data: LayoutData;

	config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
</script>

<Drawer>
	<h2 class="p-4">Navigation</h2>
	<hr />
	{#await Navigation}
		<div class="placeholder animate-pulse rounded-container-token w-full h-84" />
	{:then}
		<Navigation menu={data.menu} />
	{/await}
</Drawer>
<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
	<svelte:fragment slot="header">
		<AppBar
			gridColumns="grid-cols-3 "
			slotDefault="place-self-center"
			slotTrail="place-content-end"
		>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
				</div>
			</svelte:fragment>
			<a href="/" slot="default">
				<img
					class="h-8 text-white"
					alt="site logo"
					src="https://d37brx5gwsr21q.cloudfront.net/image/2021/8/16/cad13ed0-4d3c-11ec-96a8-b749a4fff5d9.svg"
				/>
			</a>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation menu={data.menu} />
	</svelte:fragment>

	<main class="pb-4">
		<slot name="sidebanner-left" />
		<section class="max-w-7xl mx-auto">
			<slot />
		</section>
		<slot name="sidebanner-right" />
	</main>
	<svelte:fragment slot="pageFooter">
		<Footer directory={data.directory} />
	</svelte:fragment>
</AppShell>

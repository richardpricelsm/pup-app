<script lang="ts">
	import { onMount } from 'svelte';
	export let image: string;

	let loaded = false;
	let failed = false;
	let loading = false;

	onMount(() => {
		const img = new Image();
		img.src = image;
		loading = true;

		img.onload = () => {
			loading = false;
			loaded = true;
		};
		img.onerror = () => {
			loading = false;
			failed = true;
		};
	});
</script>

<div class="py-4 items-center">
	{#if !loaded}
		<div class="placeholder animate-pulse w-full" />
	{:else}
		<img
			class="snap-center w-full rounded-container-token card-hover mx-auto"
			src={image}
			alt="Unsplash"
			loading="lazy"
		/>
	{/if}
</div>

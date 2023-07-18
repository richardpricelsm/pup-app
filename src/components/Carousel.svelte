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

<div class="my-4 items-center max-h-[400px]">
	{#if !loaded}
		<div class="placeholder animate-pulse w-full h-[400px] rounded-container-token" />
	{:else}
		<img
			class="snap-center h-full rounded-container-token card-hover mx-auto"
			src={image}
			alt="Unsplash"
			loading="eager"
		/>
	{/if}
</div>

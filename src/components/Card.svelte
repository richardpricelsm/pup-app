<script lang="ts">
	import { onMount } from 'svelte';
	import type { Card } from '$lib/api/types';

	export let card: Card;

	let loaded = false;
	let failed = false;

	onMount(() => {
		const img = new Image();

		if (card.banner) {
			img.src = card.banner?.large.location;
		} else if (card.brandLogo) {
			img.src = card.brandLogo?.small.location;
		} else {
			return null;
		}

		img.onload = () => {
			loaded = true;
		};
		img.onerror = () => {
			failed = true;
		};
	});
</script>

{#if !loaded}
	<section class="card w-full">
		<div class="p-4 space-y-4">
			<div class="placeholder animate-pulse py-12" />
			<div class="grid grid-cols-2 gap-8">
				<div class="placeholder animate-pulse py-4" />
			</div>
			<div class="placeholder animate-pulse py-3" />
			<div class="placeholder animate-pulse py-3" />
			<div class="placeholder animate-pulse py-3" />
			<div class="grid grid-cols-2 gap-3">
				<div class="placeholder animate-pulse py-5" />
				<div class="placeholder animate-pulse py-5" />
			</div>

			<div class="placeholder animate-pulse" />
			<div class="placeholder animate-pulse" />
			<div class="placeholder animate-pulse" />
		</div>
	</section>
{:else if card.banner}
	<main class="card variant-filled card-hover overflow-hidden">
		<a href={card.trackingLink} target="_blank">
			<img src={card.banner.large.location} class="bg-black/50 h-full mx-auto" alt="Post" />
		</a>
	</main>
{:else}
	<main class="card variant-ghost card-hover overflow-hidden h-full flex flex-col">
		<header class="w-full">
			<img src={card.brandLogo?.large.location} class="bg-black/50 h-full" alt="Post" />
		</header>
		<div class="p-4 space-y-4 flex flex-col flex-1">
			{#if card.ribbon}
				<h6 class="h6 chip variant-ghost-primary">{card.ribbon?.label}</h6>
			{/if}
			<article class="items-center justify-center flex-1">
				<h3 class="h3">{card.offer}</h3>
				<h3 class="h3">{card.condition}</h3>
				<h3 class="h3">{card.bonus}</h3>
			</article>
			<div class=" flex flex-wrap justify-around items-center">
				<a href={card.trackingLink} target="_blank" class="btn variant-filled-primary w-full mb-2"
					>Claim Now</a
				>
				<a href={`/how-to-claim/${card.id}`} class="btn variant-filled-secondary w-full"
					>How to Claim</a
				>
			</div>
		</div>
		<hr class="opacity-50" />
		<footer class="p-4 flex justify-start items-center space-x-4">
			<a class="text-xs" target="_blank" href={card.tsAndCsLink}>
				{card.tsAndCs}
			</a>
		</footer>
	</main>
{/if}

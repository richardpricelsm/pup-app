<script lang="ts">
	import type { PageData } from './$types';
	import Card from '../../../../components/Card.svelte';
	import Carousel from '../../../../components/Carousel.svelte';

	export let data: PageData;
</script>

<main>
	<Carousel image={data.category.welcomeMessage.backgroundImage.large.location} />
	<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
		{#each data.category.cards.xl as card, i}
			<Card {card} />
		{/each}
	</section>
</main>

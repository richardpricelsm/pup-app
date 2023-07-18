<script lang="ts">
	import type { Directory } from '$lib/api/types';

	export let directory: Directory[];
</script>

<nav class="flex">
	<div class="bg-gray-300 w-full p-8">
		<h3 class="h3">Super Free Bets UK</h3>
		<h3 class="h3">Directory</h3>
		<div class="grid grid-cols-2 gap-2 pt-4">
			{#each directory as entry}
				<a class="hover:text-" href={`/how-to-claim/${entry.id}`}>{entry.title}</a>
			{/each}
		</div>
	</div>
	<div class="bg-blue-200 w-full h-10" />
</nav>

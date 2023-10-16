<script lang="ts">
	import SignupForm from '$lib/Signup-Form/SignupForm.svelte';
	import type { Directory } from '$lib/api/types';

	export let directory: Directory[];
</script>

<nav class="flex">
	<div class="bg-gray-300 w-full p-8">
		<h3 class="h3">Super Free Bets UK</h3>
		<h3 class="h3 text-primary prose">Directory</h3>
		<div class="grid grid-cols-2 gap-2 pt-4">
			{#each directory as entry}
				<span>
					<a class="hover:text-blue-600" href={`/how-to-claim/${entry.id}`}>{entry.title}</a>
				</span>
			{/each}
		</div>
	</div>
	<div class="bg-blue-200 w-full">
		<SignupForm />
	</div>
</nav>

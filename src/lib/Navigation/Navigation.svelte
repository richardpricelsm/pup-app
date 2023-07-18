<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';
	import { Menu } from '$lib/api';

	export let menu: Menu;

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/category/homepage" on:click={drawerClose}>Homepage</a></li>
		{#each menu as item}
			<li><a href={`/category/${item.slug}`} on:click={drawerClose}>{item.title}</a></li>
		{/each}
		<li><a href="/contact" on:click={drawerClose}>Contact</a></li>
	</ul>
</nav>

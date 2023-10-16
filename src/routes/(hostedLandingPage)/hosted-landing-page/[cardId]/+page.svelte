<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Hosted landing page</h1>
<h2>Site data</h2>
<h2>Card data</h2>
{JSON.stringify(data.card)}

<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>
<h1>HOW TO CLAIM</h1>
<h2>Site data</h2>
{JSON.stringify(data.site)}
<h2>Card data</h2>
{JSON.stringify(data.card)}

<a href='/category/homepage'>Category page</a>
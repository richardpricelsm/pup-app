<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="m-4 items-center relative card-hover">
	<img
		class="snap-center w-full rounded-container-token mx-auto"
		src={data.card.htcHeroBannerResponsiveAsset?.large.location}
		alt="Unsplash"
		loading="eager"
	/>
	<div class="h-full w-full absolute top-0 flex p-8">
		<div class="flex-1 text-3xl p-4 text-white pt-20">
			Exclusive! Grab $25 no deposit + up to $100 cashback!
		</div>
		<div class="h-full flex flex-col justify-around">
			<div class="h-1/3 bg-white text-2xl p-4 flex flex-col text-center justify-center">
				<span class="text-6xl text-red-600">$25</span> Free
			</div>
			<div class="h-1/3 bg-white text-2xl p-4 flex flex-col text-center justify-center">
				<span class="text-6xl text-red-600">No</span> Deposit
			</div>
		</div>
	</div>
</div>

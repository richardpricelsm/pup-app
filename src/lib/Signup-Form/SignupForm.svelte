<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faUser } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="p-4">
	<h3 class="h3">Sign up to receive free</h3>
	<h3 class="h3">Casino offers straight to your inbox!</h3>
	<form method="POST">
		<form class=" pt-6 pb-8 mb-4">
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">
					First Name
				</label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="firstName"
					type="text"
					placeholder="Sophie"
				/>
				<p class="text-red-500 text-xs italic">Please enter your first name.</p>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="email">
					Email Address
				</label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="email"
					type="email"
					placeholder="sophie@gmail.com"
				/>
				<p class="text-red-500 text-xs italic">Please enter your email address.</p>
			</div>
			<div class="mb-6">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="phone"> Mobile </label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="phone"
					type="tel"
					placeholder="07XXXXXXXXX"
				/>
				<p class="text-red-500 text-xs italic">Please enter your mobile number</p>
			</div>
			<div class="flex items-center justify-between">
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="button"
				>
					Sign Me Up!
				</button>
			</div>
		</form>
	</form>
</div>

<script>
	let { images = [], mobile = false } = $props();
	let current = $state(0);

	function next() {
		current = (current + 1) % images.length;
	}

	function prev() {
		current = (current - 1 + images.length) % images.length;
	}
</script>

<div class="relative group">
	{#if mobile}
		<!-- Mobile: show 1 on small screens, 3 on larger -->
		<div class="overflow-hidden rounded-lg">
			<!-- Small screens: single slide -->
			<div class="block sm:hidden">
				<div
					class="flex transition-transform duration-300 ease-in-out items-center"
					style="transform: translateX(-{current * 100}%)"
				>
					{#each images as image, i}
						<div class="w-full flex-shrink-0 px-8 flex items-center justify-center">
							<button
								onclick={() => current = i}
								class="transition-all duration-300 cursor-pointer block max-h-[60vh]"
							>
								<img
									src={image}
									alt="Screenshot {i + 1}"
									class="max-h-[60vh] w-auto mx-auto rounded-xl object-contain transition-all duration-300 {i === current ? 'opacity-100' : 'opacity-40 scale-90'}"
								/>
							</button>
						</div>
					{/each}
				</div>
			</div>
			<!-- Larger screens: 3 visible -->
			<div class="hidden sm:block">
				<div
					class="flex transition-transform duration-300 ease-in-out items-center"
					style="transform: translateX(calc(-{current * 33.33}% + 33.33%))"
				>
					{#each images as image, i}
						<div class="w-1/3 flex-shrink-0 px-2">
							<button
								onclick={() => current = i}
								class="w-full transition-all duration-300 cursor-pointer block"
							>
								<img
									src={image}
									alt="Screenshot {i + 1}"
									class="w-full rounded-xl object-contain transition-all duration-300 {i === current ? 'opacity-100 scale-100' : 'opacity-40 scale-90'}"
								/>
							</button>
						</div>
					{/each}
				</div>
			</div>
		</div>
	{:else}
		<div class="overflow-hidden rounded-lg">
			<div
				class="flex transition-transform duration-300 ease-in-out items-center"
				style="transform: translateX(-{current * 100}%)"
			>
				{#each images as image, i}
					<div class="w-full flex-shrink-0 relative">
						<button
							onclick={() => current = i}
							class="w-full transition-all duration-300 cursor-pointer block"
						>
							<img
								src={image}
								alt="Screenshot {i + 1}"
								class="w-full rounded-lg object-contain bg-gray-100 dark:bg-gray-800 transition-all duration-300 {i === current ? 'opacity-100' : 'opacity-40 scale-95'}"
							/>
						</button>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	{#if images.length > 1}
		<button
			onclick={prev}
			class="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
		</button>
		<button
			onclick={next}
			class="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
			</svg>
		</button>

		<div class="flex justify-center gap-2 mt-3">
			{#each images as _, i}
				<button
					onclick={() => current = i}
					class="w-2 h-2 rounded-full transition-colors cursor-pointer {i === current ? 'bg-gray-900 dark:bg-white' : 'bg-gray-300 dark:bg-gray-600'}"
				></button>
			{/each}
		</div>
	{/if}
</div>

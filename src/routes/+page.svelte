<script>
	import { ModeWatcher, toggleMode, mode } from 'mode-watcher';

	let skillSets = ['JavaScript', 'TypeScript', 'Go', 'React', 'Svelte', 'Node.js'];

	let currentMode = $derived(mode.current);
</script>

<ModeWatcher />

<svelte:head>
	<title>Harsh Agrawal</title>
</svelte:head>

<div class="flex flex-col items-center w-full min-h-screen py-24 px-4 bg-gray-50 dark:bg-gray-900 transition-colors">
	<div class="max-w-2xl w-full">
		<div class="flex justify-between items-start">
			<div>
				<h1 class="text-4xl font-bold text-gray-900 dark:text-white">Harsh Agrawal</h1>
				<p class="mt-2 text-lg text-gray-600 dark:text-gray-400">Software Engineer</p>
			</div>
			<button onclick={toggleMode} class="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
				{#if currentMode === 'dark'}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
					</svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
					</svg>
				{/if}
			</button>
		</div>

		<div class="flex gap-4 mt-4">
			<a href="https://github.com/harshdev2" target="_blank" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
			</a>
			<a href="https://www.linkedin.com/in/harsh-agrawal-a06115239/" target="_blank" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
			</a>
			<a href="https://discord.gg/kZPYKCsec6" target="_blank" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 640 512"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/></svg>
			</a>
		</div>

		<div class="flex flex-wrap gap-2 mt-6">
			{#each skillSets as skill}
				<span class="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">{skill}</span>
			{/each}
		</div>

		<div class="mt-8 text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
			<p>
				Hey there! I'm a software engineer with a passion for creating
				beautiful and functional web applications. I've been coding since 13 and professionally for the last 3 years,
				gaining valuable experience working with
				<a href="https://kit.svelte.dev" target="_blank" class="text-gray-900 dark:text-white font-medium hover:text-gray-600 dark:hover:text-gray-300">SvelteKit</a> and
				<a href="https://nextjs.org" target="_blank" class="text-gray-900 dark:text-white font-medium hover:text-gray-600 dark:hover:text-gray-300">Next.js</a>
				as well as backend technologies like
				<a href="https://mongodb.com" target="_blank" class="text-gray-900 dark:text-white font-medium hover:text-gray-600 dark:hover:text-gray-300">MongoDB</a>,
				<a href="https://expressjs.com" target="_blank" class="text-gray-900 dark:text-white font-medium hover:text-gray-600 dark:hover:text-gray-300">Express.js</a>,
				<a href="https://www.postgresql.org/" target="_blank" class="text-gray-900 dark:text-white font-medium hover:text-gray-600 dark:hover:text-gray-300">PostgreSQL</a>
				and many others.
			</p>
			<p>
				As an independent developer, I've had the opportunity to work on a variety of
				projects including my own coding learning application called
				<a href="https://aquacode.xyz" target="_blank" class="text-gray-900 dark:text-white font-medium hover:text-gray-600 dark:hover:text-gray-300">AquaCode</a>. I love building things
				from scratch and seeing my ideas come to life on the web.
			</p>
			<p>
				I have a deep understanding of modern web development
				technologies and methodologies. I am always eager to learn new things and stay
				up-to-date with the latest industry trends.
			</p>
		</div>

		<h2 class="mt-12 text-xl font-semibold text-gray-900 dark:text-white">Projects</h2>

		<div class="mt-6 space-y-6">
			<a href="https://www.verix.one" target="_blank" class="flex gap-4 group">
				<img src="https://www.verix.one/logo-circular-transparent.png" alt="verix" class="w-12 h-12 bg-white rounded" />
				<div>
					<h3 class="font-medium text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">Verix</h3>
					<p class="text-sm text-gray-600 dark:text-gray-400">Media company with AI-powered news analysis and civic engagement platform.</p>
					<div class="flex flex-wrap gap-2 mt-2">
						<span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">React Native</span>
						<span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Go</span>
						<span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">TypeScript</span>
						<span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">iOS</span>
					</div>
				</div>
			</a>

			<a href="https://aquacode.xyz" target="_blank" class="flex gap-4 group">
				<img src="/aquacode.png" alt="aquacode" class="w-12 h-12 bg-white rounded" />
				<div>
					<h3 class="font-medium text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">Aquacode</h3>
					<p class="text-sm text-gray-600 dark:text-gray-400">Interactive coding app with AI assistant and quizzes.</p>
					<div class="flex flex-wrap gap-2 mt-2">
						<span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Svelte</span>
						<span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">SvelteKit</span>
						<span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">MongoDB</span>
						<span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Tailwind</span>
						<span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">ChatGPT API</span>
						<span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Vercel</span>
					</div>
				</div>
			</a>

			<div class="flex gap-4">
				<img src="https://cdn.discordapp.com/avatars/1032836183065116722/b2628cef1a5640df7aac021d7e927b68.png?size=512" alt="bitt" class="w-12 h-12 rounded" style="background-color: rgb(88, 100, 242);" />
				<div>
					<h3 class="font-medium text-gray-900 dark:text-white">Bitt</h3>
					<p class="text-sm text-gray-600 dark:text-gray-400">Multipurpose Discord bot for moderation and utilities.</p>
					<div class="flex flex-wrap gap-2 mt-2">
						<span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">JavaScript</span>
						<span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Discord.js</span>
						<span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Node.js</span>
					</div>
				</div>
			</div>

			<a href="https://blog.harshagrawal.dev" target="_blank" class="flex gap-4 group">
				<img src="/bytecodey.png" alt="bytecodey" class="w-12 h-12 bg-gray-700 rounded p-1" />
				<div>
					<h3 class="font-medium text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">Byte Codey Blog</h3>
					<p class="text-sm text-gray-600 dark:text-gray-400">Tips and tutorials on Node.js, SvelteKit, and React.</p>
					<div class="flex flex-wrap gap-2 mt-2">
						<span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Svelte</span>
						<span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">SvelteKit</span>
						<span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Markdown</span>
						<span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Tailwind</span>
						<span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Vercel</span>
					</div>
				</div>
			</a>
		</div>

		<h2 class="mt-12 text-xl font-semibold text-gray-900 dark:text-white">Contact</h2>
		<p class="mt-4 text-gray-600 dark:text-gray-400">
			<a href="mailto:harshagrawal2489@gmail.com" class="hover:text-gray-900 dark:hover:text-white">harshagrawal2489@gmail.com</a>
		</p>
	</div>
</div>

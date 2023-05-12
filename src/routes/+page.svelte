<script>
	import { onMount } from 'svelte';

	let mouseX;
	let mouseY;

	onMount(() => {
		window.addEventListener('mousemove', (event) => {
			mouseX = event.clientX;
			mouseY = event.clientY;
		});
	});
</script>

<div class="mt-36 ml-56 mr-56 flex flex-row justify-between">
	<div>
		<h1 class="text-6xl font-bold">Harsh Agrawal</h1>
		<h2 class="mt-2 text-3xl font-semibold">Full Stack Developer</h2>
		<h3 class="mt-2 text-slate-300">
			From code to launch, I make sure your digital product <br /> is accessible and inclusive for all.
		</h3>

		<nav class="flex flex-col mt-24 h-24 justify-between">
			<a
				href="/"
				class="text-slate-400 text-base font-bold hover:text-red-300 flex flex-row items-center"
				><span class="bg-slate-400 block h-0.5 w-8 mr-2" />About</a
			>
			<a
				href="/"
				class="text-slate-400 text-base font-bold hover:text-red-300 flex flex-row items-center"
				><span class="bg-slate-400 block h-0.5 w-8 mr-2" />Projects</a
			>
			<a
				href="/"
				class="text-slate-400 text-base font-bold hover:text-red-300 flex flex-row items-center"
				><span class="bg-slate-400 block h-0.5 w-8 mr-2" />Contact</a
			>
		</nav>
	</div>
	<div class="flex flex-col text-slate-400 text-lg">
		<div>
			<p>
				Hey there! I'm a 15-year-old full stack web developer with a <br /> passion for creating
				beautiful and functional web applications. <br /> I've been self-taught since the age of 12
				and have gained <br /> valuable experience working with
				<a
					href="https://kit.svelte.dev"
					target="_blank"
					class="text-white font-bold hover:text-teal-300">SvelteKit (Svelte)</a
				> <br /> and
				<a
					href="https://nextjs.org"
					target="_blank"
					class="text-white font-bold hover:text-teal-300">Next.js (React)</a
				>
				as well as backend technologies like <br />
				<a
					href="https://mongodb.com"
					target="_blank"
					class="text-white font-bold hover:text-teal-300">MongoDB</a
				>,
				<a
					href="https://expressjs.com"
					target="_blank"
					class="text-white font-bold hover:text-teal-300">Express.js</a
				>,
				<a
					href="https://www.postgresql.org/"
					target="_blank"
					class="text-white font-bold hover:text-teal-300">PostgresSQL</a
				> and many others.
			</p>
			<p class="mt-4 mb-4">
				As an independent developer, I've had the opportunity to <br /> work on a variety of
				projects, including my own coding <br /> learning application called
				<a
					href="https://aquacode.xyz"
					target="_blank"
					class="text-white font-bold hover:text-teal-300">AquaCode</a
				>. I love building <br /> things from scratch and seeing my ideas come to life <br /> on the
				web.
			</p>
			<p>
				Despite my young age, I have a deep understanding of modern <br /> web development
				technologies and methodologies. <br /> I am always eager to learn new things and stay
				up-to-date <br /> with the latest industry trends.
			</p>
		</div>
    <div>
      
    </div>
	</div>
</div>

<div
	class="pointer-events-none fixed"
	style={`width: 68rem; height: 68rem; left: ${mouseX - 515}px; top: ${
		mouseY - 515
	}px; background: radial-gradient(
      rgba(29, 78, 216, 0.3),
      transparent 70%
    );`}
/>

<style>
	:global(body) {
		background-color: #0f172a;
	}
</style>

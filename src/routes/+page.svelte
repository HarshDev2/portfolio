<script>
	import { onMount } from 'svelte';

	let mouseX = 100;
	let mouseY = 100;

	onMount(() => {
		window.addEventListener('mousemove', (event) => {
			mouseX = event.clientX;
			mouseY = event.clientY;
		});
	});
</script>

<div class="mt-36 ml-48 mr-16 flex flex-row">
	<div class="fixed">
		<h1 class="text-6xl font-bold">Harsh Agrawal</h1>
		<h2 class="mt-2 text-3xl font-semibold">Full Stack Developer</h2>
		<h3 class="mt-2 text-slate-300">
			From code to launch, I make sure your digital product <br /> is accessible and inclusive for all.
		</h3>

		<nav class="flex flex-col mt-24 h-24 justify-between">
			<a
				href="#about"
				class="text-slate-400 text-base font-bold hover:text-white flex flex-row items-center"
				><span class="bg-slate-400 block h-0.5 w-8 mr-2" />About</a
			>
			<a
				href="#projects"
				class="text-slate-400 text-base font-bold hover:text-white flex flex-row items-center"
				><span class="bg-slate-400 block h-0.5 w-8 mr-2" />Projects</a
			>
			<a
				href="#contact"
				class="text-slate-400 text-base font-bold hover:text-white flex flex-row items-center"
				><span class="bg-slate-400 block h-0.5 w-8 mr-2" />Contact</a
			>
		</nav>
		<div>
			<a href="https://github.com/harshdev2">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-white" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
			</a>
		</div>
	</div>
	<div class="flex flex-col text-slate-400 text-lg ml-auto">
		<div class="pl-8" id="about">
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
		<div class="mt-12" id="projects">
			<a href="/">
				<div class="flex flex-row hover:bg-slate-800/50 w-max rounded-md p-4">
					<img
						src="/favicon.png"
						alt="aquacode"
						class="w-16 h-16"
					/>
					<div class="flex flex-col ml-4">
						<div
							class="flex flex-row items-center text-white hover:text-teal-300 hover:fill-teal-300"
						>
							<a
								href="/"
								class="font-semibold text-xl flex flex-row items-center"
								>Portfolio<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									class="w-4 h-4 fill-white ml-1"
									aria-hidden="true"
									><path
										fill-rule="evenodd"
										d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
										clip-rule="evenodd"
									/></svg
								></a
							>
						</div>
						<p class="text-slate-400 mt-2 text-base">
							An portfolio showcasing a diverse range of projects that highlights my <br> expertise in frontend and backend technologies
						</p>
						<div class="flex flex-row w-4/5 flex-wrap mt-2">
							<div class="mt-2 rounded-full bg-teal-400/10 pt-0 pb-1 px-3 py-3 w-max mr-2">
								<span class="text-teal-300 font-semibold text-sm">Svelte</span>
							</div>
							<div class="mt-2 rounded-full bg-teal-400/10 pt-0 pb-1 px-3 py-3 w-max mr-2">
								<span class="text-teal-300 font-semibold text-sm">Tailwind</span>
							</div>
							<div class="mt-2 rounded-full bg-teal-400/10 pt-0 pb-1 px-3 py-3 w-max mr-2">
								<span class="text-teal-300 font-semibold text-sm">Netlify</span>
							</div>
						</div>
					</div>
				</div>
			</a>
			<a href="https://aquacode.xyz" target="_blank">
			<div class="flex flex-row hover:bg-slate-800/50 w-max rounded-md p-4">
				<img src="/aquacode.png" alt="aquacode" class="w-24 h-24" />
				<div class="flex flex-col mt-2 mr-4">
					<div class="flex flex-row items-center text-white">
						<a
							href="https://aquacode.xyz"
							class="font-semibold text-xl flex flex-row items-center hover:text-teal-300"
							>Aquacode <svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="w-4 h-4 fill-white ml-1"
								aria-hidden="true"
								><path
									fill-rule="evenodd"
									d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
									clip-rule="evenodd"
								/></svg
							></a
						>
					</div>
					<p class="text-slate-400 mt-2 text-base">
						An web and mobile application that is focused on teaching beginners <br /> how to code
						interactively, with features like ai assistant, leaderboard,<br /> quizzes, code playground..
					</p>
					<div class="flex flex-row w-4/5 flex-wrap mt-2">
						<div class="mt-2 rounded-full bg-teal-400/10 pt-0 pb-1 px-3 py-3 w-max mr-2">
							<span class="text-teal-300 font-semibold text-sm">Svelte</span>
						</div>
						<div class="mt-2 rounded-full bg-teal-400/10 pt-0 pb-1 px-3 py-3 w-max mr-2">
							<span class="text-teal-300 font-semibold text-sm">SvelteKit</span>
						</div>
						<div class="mt-2 rounded-full bg-teal-400/10 pt-0 pb-1 px-3 py-3 w-max mr-2">
							<span class="text-teal-300 font-semibold text-sm">MongoDB</span>
						</div>
						<div class="mt-2 rounded-full bg-teal-400/10 pt-0 pb-1 px-3 py-3 w-max mr-2">
							<span class="text-teal-300 font-semibold text-sm">Tailwind</span>
						</div>
						<div class="mt-2 rounded-full bg-teal-400/10 pt-0 pb-1 px-3 py-3 w-max mr-2">
							<span class="text-teal-300 font-semibold text-sm">ChatGPT API</span>
						</div>
						<div class="mt-2 rounded-full bg-teal-400/10 pt-0 pb-1 px-3 py-3 w-max mr-2">
							<span class="text-teal-300 font-semibold text-sm">Vercel</span>
						</div>
						<div class="mt-2 rounded-full bg-teal-400/10 pt-0 pb-1 px-3 py-3 w-max mr-2">
							<span class="text-teal-300 font-semibold text-sm">Play Store</span>
						</div>
					</div>
				</div>
			</div>
			<a href="https://aquacode.xyz" target="_blank">
				<div class="flex flex-row hover:bg-slate-800/50 w-max rounded-md p-4">
					<img
						src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"
						alt="aquacode"
						class="w-20 h-20"
					/>
					<div class="flex flex-col mt-2 ml-4">
						<div
							class="flex flex-row items-center text-white hover:text-teal-300 hover:fill-teal-300"
						>
							<a
								href="https://aquacode.xyz"
								class="font-semibold text-xl flex flex-row items-center"
								>Youtube Clone <svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									class="w-4 h-4 fill-white ml-1"
									aria-hidden="true"
									><path
										fill-rule="evenodd"
										d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
										clip-rule="evenodd"
									/></svg
								></a
							>
						</div>
						<p class="text-slate-400 mt-2 text-base">
							An application that lets you upload and watch videos, with <br> features like comments, likes, and subscriptions. Using modern <br> web technologies, this platform has a user-friendly interface and <br> clean design.
						</p>
						<div class="flex flex-row w-4/5 flex-wrap mt-2">
							<div class="mt-2 rounded-full bg-teal-400/10 pt-0 pb-1 px-3 py-3 w-max mr-2">
								<span class="text-teal-300 font-semibold text-sm">React</span>
							</div>
							<div class="mt-2 rounded-full bg-teal-400/10 pt-0 pb-1 px-3 py-3 w-max mr-2">
								<span class="text-teal-300 font-semibold text-sm">Next.js</span>
							</div>
							<div class="mt-2 rounded-full bg-teal-400/10 pt-0 pb-1 px-3 py-3 w-max mr-2">
								<span class="text-teal-300 font-semibold text-sm">MongoDB</span>
							</div>
							<div class="mt-2 rounded-full bg-teal-400/10 pt-0 pb-1 px-3 py-3 w-max mr-2">
								<span class="text-teal-300 font-semibold text-sm">AWS Storage</span>
							</div>
							<div class="mt-2 rounded-full bg-teal-400/10 pt-0 pb-1 px-3 py-3 w-max mr-2">
								<span class="text-teal-300 font-semibold text-sm">Tailwind</span>
							</div>
							<div class="mt-2 rounded-full bg-teal-400/10 pt-0 pb-1 px-3 py-3 w-max mr-2">
								<span class="text-teal-300 font-semibold text-sm">Vercel</span>
							</div>
						</div>
					</div>
				</div>
			</a>
			
		</div>

		<div class="mt-16 pl-6" id="contact">
			<h4 class="font-semibold text-3xl text-white">Get in touch!</h4>
			<div class="flex flex-row mt-8 items-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="fill-white w-6 h-6" viewBox="0 0 448 512"
					><path
						d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
					/></svg
				>
				<a
					href="https://www.linkedin.com/in/harsh-agrawal-a06115239/"
					class="ml-2 flex flex-row text-white items-center justify-center"
					>Harsh Agrawal <svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="w-4 h-4 fill-white ml-1"
						aria-hidden="true"
						><path
							fill-rule="evenodd"
							d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
							clip-rule="evenodd"
						/></svg
					></a
				>
			</div>
			<div class="flex flex-row mt-4 items-center mb-4">
				<svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					><path
						d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
					/></svg
				>
				<a
					href="mailto:harshagrawal2489@gmail.com"
					class="ml-2 flex flex-row text-white items-center justify-center"
					>harshagrawal2489@gmail.com <svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="w-4 h-4 fill-white ml-1"
						aria-hidden="true"
						><path
							fill-rule="evenodd"
							d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
							clip-rule="evenodd"
						/></svg
					></a
				>
			</div>
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

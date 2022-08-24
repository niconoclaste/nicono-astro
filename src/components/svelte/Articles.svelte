<script>
	import Header from '@components/svelte/Header.svelte';
	import Footer from '@components/svelte/Footer.svelte';

	import { lang } from '@utils/store.js';
	import translation from '@utils/translation.json';

	const category = 'articles';
	const layout = 'category';
	export let articles = [];
	console.log(articles);
	export let title;
	export let titleJa;
</script>

<main class="g-main">
	<Header current={category} layout={layout}/>

	<article class="l-article" id={category}>
		<header class="m-header">
			<h1 class="title">{@html $lang === 'en' ? title : titleJa}</h1>
		</header>

		<section class="l-section">
			<div class="m-bloc">

			</div>
		</section>
</article>

<Footer/>

</main>

<script>
	import Header from '@components/svelte/Header.svelte';
	import Footer from '@components/svelte/Footer.svelte';
	import { lang } from '@utils/store.js';
	export let title;
	export let titleJa;
</script>

<main class="g-main">

	<Header current="about" />

	<article class="l-article" id="about">
		<header class="m-header">
			<h1 class="title">{@html $lang === 'en' ? title : titleJa}</h1>
		</header>

		<section class="l-section">
			<div class="m-bloc">
				<h3 class="title">{#if $lang === 'en'}About me{:else}私について{/if}</h3>
				<p>aaaaa</p>
			</div>

			<div class="m-bloc">
				<h3 class="title">{#if $lang === 'en'}About this site{:else}このサイトについて{/if}</h3>
				<p>aaaaa</p>
			</div>
		</section>
  </article>

  <Footer/>
	
</main>
<script>
	import { lang } from '@utils/store.js';
  import translation from '@utils/translation.json';
</script>

<header class="m-header">
	<h2 class="title">{translation.about.title[$lang]}</h2>
</header>

<section class="l-section">
	{#if $lang == 'en'}
	<p><strong>Nicolas</strong> (NicoNoClaste)</p>
	<p>born in <strong>Paris</strong> living in <strong>Tokyo</strong></p>
	<p>10+ years <strong>Web Developer</strong></p>
{:else}
	<p><strong>二コラ</strong> (ニコのクラスト)</p>
	<p><strong>パリ</strong>生まれ <strong>東京</strong>在住</p>
	<p>10年+ <strong>ウェブデベロッパー</strong></p>
{/if}
	
	<p>
		HTML&nbsp;<strong>CSS</strong>&nbsp;SCSS <strong>JavaScript</strong>&nbsp;TypeScript<br>
		<strong>Svelte</strong>&nbsp;Vue <strong>Astro</strong>&nbsp;Eleventy <strong>Sveltekit</strong><br>
		<strong>Node.js</strong>&nbsp;Ionic <strong>PHP</strong> SQL&nbsp;<strong>WordPress</strong> ...
	</p>
</section>

<footer class="m-footer">
	<p><a href="/about"><strong>{translation.about.more[$lang]}</strong></a></p>
</footer>
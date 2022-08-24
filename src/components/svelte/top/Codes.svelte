<script>
	import Snippet from '@components/svelte/Snippet.svelte';
	import { lang } from '@utils/store.js';
	import translation from '@utils/translation.json';
</script>

<header class="m-header">
	<h2 class="title">{translation.codes.title[$lang]}</h2>
</header>

<section class="l-section">

	<Snippet id="NWgvaOa" title="CSS only responsive slider" title_ja="CSSのみ レスポンシブ カルーセル" />

	<!-- <CodeSnippet id="abwyYRN" title="CSS only hamburger navigation" title_ja="CSSのみ ハンバーガー ナビゲーション" /> -->

	<Snippet id="ExbKxPx" title="Responsive svg progress circle" title_ja="レスポンシブSVG進行サークル" />

	<Snippet id="poadjOL" title="STAR WARS opening" title_ja="スターウォーズ オープニング" />

</section>
<footer class="m-footer">
	<p><a href="https://codepen.io/niconoclaste" target="_blank" rel="noopener"><strong>{translation.codes.more[$lang]}</strong></a></p>
</footer>
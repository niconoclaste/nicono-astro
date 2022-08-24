<script>
	import { lang } from '@utils/store.js';
  import translation from '@utils/translation.json';
  import { settings } from '@utils/settings.js';

	let showArticles = settings.showArticles;
	export let articles = [];
	console.log(articles);
	if(!showArticles){
		document.getElementById('articles').remove();
	}

  $: dateSyle = $lang === 'en' ? 'short' : 'long';
  $: langKey = function(key){
    return $lang === 'en' ? key : key +'_'+ $lang;
  }

  function nth(nb){
    return nb < 11 || nb > 13 ? nb + ['st', 'nd', 'rd', 'th'][Math.min((nb - 1) % 10, 3)] : nb + 'th';
  }


</script>

{#if showArticles}
	<header class="m-header">
		<h2 class="title">{translation.articles.title[$lang]}</h2>
	</header>

	<section class="l-section">

		<ul class="m-posts-list">
			{#each articles as article}
			<li>
				<a href="{article.url}">
					{#if article.frontmatter.thumb}
					<div class="m-posts-list_thumb">
						<img src="{article.frontmatter.thumb}" alt="{article.frontmatter[langKey('title')]}" class="img">
					</div>
					{/if}
	
					<div class="m-posts-list_body">
						<p class="m-posts-list_category">{@html article.frontmatter[langKey('category')]}</p>
						<h2 class="title">{@html article.frontmatter[langKey('title')]}</h2>
						<p class="m-posts-list_date">{new Intl.DateTimeFormat('ja-JP', {dateStyle: dateSyle}).format(new Date(article.frontmatter.date))}</p>
						<p class="m-posts-list_desc">{@html article.frontmatter[langKey('excerpt')]}</p>
						{#if article.frontmatter.series && $lang === 'en'}
						<p class="m-post-list_series">This article is the {nth(article.frontmatter.series_nb)} part of the [{article.frontmatter.series}] series.</p>
						{:else if article.frontmatter.series}
						<p class="m-post-list_series">この記事は[{article.frontmatter.series}]シリーズの{article.frontmatter.series_nb}番目の記事です。</p>
						{/if}
						<p class="m-posts-list_readmore">{translation.articles.readmore[$lang]}</p>
						{#if article.frontmatter.tags}
						<div class="m-posts-list_tags">{#each article.frontmatter.tags as tag}<span>{tag}</span>{/each}</div>
						{/if}
					</div>
				</a>
			</li>
			{/each}
		</ul>
	</section>

	<!-- {#if articles.length > settings.maxArticles} -->
	<footer class="m-footer">
		<p><a href="/articles"> <strong>{translation.articles.more[$lang]}</strong></a></p>
	</footer>
	<!-- {/if} -->

{/if}
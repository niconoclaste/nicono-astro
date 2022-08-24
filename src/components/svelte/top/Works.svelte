<script>
	import { lang } from '@utils/store.js';
  import translation from '@utils/translation.json';
  import { settings } from '@utils/settings.js';

	let showWorks = settings.showWorks;
	export let works = [];

	let topWorks = works.filter((work) => !work.hidden);
  topWorks = topWorks.filter((work) => work.top).sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : 0).slice(0, settings.maxWorks);

	$: dateOutput = (date) => $lang === 'en' ? new Intl.DateTimeFormat('en-US', {year: 'numeric'}).format(new Date(date)) : new Intl.DateTimeFormat('ja-JP', {year: 'numeric'}).format(new Date(date));

	if(!showWorks){
		document.getElementById('works').remove();
	}
</script>

{#if showWorks}
	<header class="m-header">
		<h2 class="title">{translation.works.title[$lang]}</h2>
	</header>

	<section class="l-section">
		<div class="m-bloc" id="top-works">
			<ul class="m-works-list">
        {#each topWorks as work}
          <li>
						<a href="{work.link}" target="_blank" rel="noopener">
							{#if work.thumb}
              <div class="m-works-list_thumb">
                <img src="{work.thumb}" alt="{work.title[$lang]}" class="img" loading="lazy" />
              </div>
							{/if}
              <div class="m-works-list_body">
                <h2 class="title">{work.title[$lang]}</h2>
								<p class="m-works-list_desc"><small>{work.client[$lang] !== work.title[$lang] ? work.client[$lang]+' ' : ''}({dateOutput(work.date)})</small></p>
             </div>
						 {#if work.techs}
						 <div class="m-works-list_tags">
						 {#each work.techs as tech}
							 <span class="m-logo-icon" style="background-image:var(--logo_{tech})" title="{tech}">{tech}</span>
						 {/each}
						 </div>
					 	{/if}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</section>

  {#if topWorks.length > settings.maxWorks}
    <footer class="m-footer">
      <p><a href="/works"> <strong>{translation.works.more[$lang]}</strong></a></p>
    </footer>
  {/if}
{/if}
<script>
	import { createEventDispatcher } from 'svelte';
  export let current = '';
  export let layout = '';

	const dispatch = createEventDispatcher();
	const linkClick = () => dispatch('linkClick');

  import translation from '@utils/translation.json';
  import { lang } from '@utils/store.js';
  import { getContext } from 'svelte';
  import { settings } from '@utils/settings.js';

  let showWorks = settings.showWorks;
  let showArticles = settings.showArticles;

	// console.log(showWorks);
  let email = settings.email;

	// import { showWorks } from '@utils/store.js';
	// console.log(showWorks);

	function switchToJa() {
		lang.set('ja');
		window.localStorage.setItem('lang', 'ja');
		document.documentElement.setAttribute('lang', 'ja');
		const titleJa = document.head.querySelector('meta[name="jaTitle"]').content;
		document.title = titleJa;
		linkClick();
		// document.location.reload();
	}
	function switchToEn() {
		lang.set('en');
		window.localStorage.setItem('lang', 'en');
		document.documentElement.setAttribute('lang', 'en');
		const titleEn = document.head.querySelector('meta[name="enTitle"]').content;
		document.title = titleEn;
		linkClick();
		// document.location.reload();
	}


</script>

    <ul>
      <li class={current === 'home' ? "is-active" : ''} on:click={linkClick}>
        <a href="{current === 'home' ? '#top' : '/'}">{translation.home.title[$lang]}</a>
      </li>
      <li class={current === 'about' ? "is-active" : ''} on:click={linkClick}>
        <a href="/#about">{translation.about.title[$lang]}</a>
      </li>
      {#if showWorks}
      <li class={current === 'works' ? "is-active" : ''} on:click={linkClick}>
        <a href="/#works">{translation.works.title[$lang]}</a>
      </li>
      {/if}
      <li class={current === 'codes' ? "is-active" : ''} on:click={linkClick}>
        <a href="/#codes">{translation.codes.title[$lang]}</a>
      </li>
      {#if showArticles}
      <li class={current === 'articles' ? "is-active" : ''} on:click={linkClick}>
        <a href="{current === 'articles' && layout === 'single' ? '/articles' : '/#articles'}">{translation.articles.title[$lang]}</a>
      </li>
      {/if}
      <li>
        <!-- <a href="mailto:{email}">{translation.contact.title[$lang]}</a> -->
        <span>{translation.contact.title[$lang]}</span>
        <ul>
          <li on:click={linkClick}><a href="mailto:{email}" style="background-image:var(--logo_email)" title="{email}">email</a></li>
          <li on:click={linkClick}><a href="https://twitter.com/NicoloNoClaste/" target="_blank" rel="noreferrer" title="twitter.com/NicoloNoClaste" style="background-image:var(--logo_twitter)">twitter</a></li>
          <li on:click={linkClick}><a href="https://codepen.io/niconoclaste/" target="_blank" rel="noreferrer" title="codepen.io/niconoclaste" style="background-image:var(--logo_codepen)">codepen</a></li>
          <li on:click={linkClick}><a href="https://github.com/niconoclaste" target="_blank" rel="noreferrer" title="github.com/niconoclaste" style="background-image:var(--logo_github)">github</a></li>
        </ul>
      </li>
      <li>

        {#if $lang == 'en'}
        <button type="button" lang="ja" class="m-lang_btn" on:click={switchToJa}>日本語</button>
        {:else}
        <button type="button" lang="en" class="m-lang_btn" on:click={switchToEn}>English</button>
        {/if}

      </li>
    </ul>

import { writable } from 'svelte/store';

let language = 'en';
if(typeof window !== 'undefined' && window !== null){
	const urlSearchParams = new URLSearchParams(window.location.search);
	const params = Object.fromEntries(urlSearchParams.entries());
	if(params.lang){
		language = params.lang;
	}else{
		const localLang = window.localStorage.getItem('lang');
		if(localLang){
			language = localLang;
		}else{
			language = window.navigator.language;
		}
	}
	if(language !== 'ja'){
		language = 'en';
	}
	if(language == 'ja'){
		// document.documentElement.setAttribute('lang', language);
		// window.localStorage.setItem('lang', 'ja');
		// const titleJa = document.head.querySelector('meta[name="jaTitle"]').content;
		// document.title = titleJa;
	}
}

export const lang = writable(language);

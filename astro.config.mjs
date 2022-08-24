import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import { VitePWA } from 'vite-plugin-pwa';
// import serviceWorker from 'astro-service-worker';

export default defineConfig({
	// Enable Svelte to support Svelte components.
	integrations: [
		svelte(),
		// serviceWorker()
	],
	vite: {
		plugins: [VitePWA()],
	},
});
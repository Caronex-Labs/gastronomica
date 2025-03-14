<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';

	import { analytics } from '$lib/firebase';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let { children } = $props();
	
	// Initialize theme based on saved preference or default to dark mode
	if (typeof window !== 'undefined') {
		const savedTheme = localStorage.getItem('theme');
		// Default to dark mode if no saved preference
		const theme = savedTheme || 'dark';
		document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'palete_dark' : 'palete_light');
	}

	onMount(() => {
		if (analytics) {
		// Log a page_view event or any other custom event
		analytics.logEvent('page_view', {
			page_path: $page.url.pathname
		});
		}
	});
</script>

<div class="flex min-h-screen flex-col">
	<NavBar>
		{@render children()}
	</NavBar>
</div>

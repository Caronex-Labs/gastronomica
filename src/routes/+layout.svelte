<script lang="ts">
	import { logEvent } from 'firebase/analytics';
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';

	import { analytics } from '$lib/firebase';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let { children } = $props();
	
	// Initialize theme based on saved preference or default to dark mode
	if (browser) {
		const savedTheme = localStorage.getItem('theme');
		// Default to dark mode if no saved preference
		const theme = savedTheme || 'dark';
		document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'palete_dark' : 'palete_light');
	}

	// Track the current page path to avoid duplicate events
	let currentPath = '';

	// Use a single effect to track page views
	$effect(() => {
		// Only run in browser and when page changes
		if (browser && $page && $page.url.pathname !== currentPath && analytics != null) {
			// Update current path to avoid duplicate events
			currentPath = $page.url.pathname;
			
			logEvent(analytics, 'page_view', {
				page_path: currentPath,
			});
			
		}
	});
</script>

<div class="flex min-h-screen flex-col">
	<NavBar>
		{@render children()}
	</NavBar>
</div>

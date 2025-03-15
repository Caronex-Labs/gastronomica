<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';

	import { app } from '$lib/firebase';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	
	// Import analytics functions directly
	import { getAnalytics, logEvent, setAnalyticsCollectionEnabled, isSupported } from 'firebase/analytics';
	import type { Analytics } from 'firebase/analytics';

	let { children } = $props();
	
	// Initialize analytics only in browser
	let analytics: Analytics | null = null;
	
	// Initialize theme based on saved preference or default to dark mode
	if (browser) {
		const savedTheme = localStorage.getItem('theme');
		// Default to dark mode if no saved preference
		const theme = savedTheme || 'dark';
		document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'palete_dark' : 'palete_light');
	}

	// Track the current page path to avoid duplicate events
	let currentPath = '';

	// Initialize analytics in browser only
	onMount(() => {
		if (!browser) return;
		
		// Initialize analytics in browser
		isSupported().then(supported => {
			if (supported) {
				// Initialize analytics
				analytics = getAnalytics(app);
				
				// Enable analytics collection
				setAnalyticsCollectionEnabled(analytics, true);
				
				console.log('Firebase Analytics initialized in browser');
				
			}
		}).catch(error => {
			console.error('Failed to initialize analytics:', error);
		});
	});

	// Track page navigation after initial load
	$effect(() => {
		// Only run in browser, when analytics is initialized, and when page changes
		if (browser && analytics && $page && $page.url.pathname !== currentPath) {
			// Update current path to avoid duplicate events
			currentPath = $page.url.pathname;
			
			// Log the page view
			logEvent(analytics, 'page_view', {
				page_path: currentPath,
			});
			
			console.log(`Page navigation tracked: ${currentPath}`);
		}
	});
</script>

<div class="flex min-h-screen flex-col">
	<NavBar>
		{@render children()}
	</NavBar>
</div>

<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';

	let { children } = $props();
	
	// Initialize theme based on saved preference or default to dark mode
	if (typeof window !== 'undefined') {
		const savedTheme = localStorage.getItem('theme');
		// Default to dark mode if no saved preference
		const theme = savedTheme || 'dark';
		document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'gastronomica_dark' : 'gastronomica_light');
	}
</script>

<div class="flex min-h-screen flex-col">
	<NavBar>
		{@render children()}
	</NavBar>
</div>

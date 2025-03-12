<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';

	let { children } = $props();
	
	// Initialize theme based on saved preference or system preference
	if (typeof window !== 'undefined') {
		const savedTheme = localStorage.getItem('theme');
		const theme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
		document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'gastronomica_dark' : 'gastronomica_light');
	}
</script>

<div class="flex min-h-screen flex-col">
	<NavBar>
		{@render children()}
	</NavBar>
</div>

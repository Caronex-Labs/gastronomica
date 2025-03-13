<script lang="ts">
	import { onMount } from 'svelte';
	import Logo from './Logo.svelte';
	
	let isScrolled = false;
	let isDarkMode = true; // Default to dark mode
	
	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};
		
		window.addEventListener('scroll', handleScroll);
		
		// Check for saved theme preference or default to dark mode
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			isDarkMode = savedTheme === 'dark';
			applyTheme();
		} else {
			// Default to dark mode if no saved preference
			isDarkMode = true;
			applyTheme();
		}
		
		return () => window.removeEventListener('scroll', handleScroll);
	});
	
	function toggleTheme() {
		isDarkMode = !isDarkMode;
		applyTheme();
		
		// Save preference
		localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
	}
	
	function applyTheme() {
		// Apply theme to HTML element
		document.documentElement.setAttribute('data-theme', isDarkMode ? 'palete_dark' : 'palete_light');
	}
</script>

<div class="navbar-container w-full">
	<header 
		class={`fixed top-0 left-0 right-0 w-full z-50 py-4 px-4 md:px-6 transition-all duration-300 ${
			isScrolled 
				? 'bg-base-100/90 backdrop-blur-md shadow-sm' 
				: 'bg-transparent'
		}`}
	>
		<div class="mx-auto flex items-center justify-between">
			<div class="flex items-center">
				<a href="#hero" class="flex items-baseline hover:opacity-80 transition-opacity">
					<Logo size="large" />
				</a>
			</div>

			<!-- Desktop Navigation -->
			<nav class="hidden md:flex items-center space-x-8">
				<a href="#features" class="text-base-content hover:text-accent transition-colors">
					Features
				</a>
				<a href="#roadmap" class="text-base-content hover:text-accent transition-colors">
					Roadmap
				</a>
				
				<!-- Theme Toggle -->
				<button 
					on:click={toggleTheme}
					class="p-2 rounded-full bg-base-200 hover:bg-base-300 transition-colors"
					aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
				>
					{#if isDarkMode}
						<!-- Sun icon for light mode -->
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-base-content"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
					{:else}
						<!-- Moon icon for dark mode -->
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-base-content"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
					{/if}
				</button>
				
				<a href="#cta" class="btn btn-primary rounded-full px-5 text-primary-content font-semibold">
					Join Waitlist
				</a>
			</nav>

			<!-- Mobile Actions -->
			<div class="md:hidden flex items-center gap-2">
				<!-- Theme Toggle for Mobile -->
				<button 
					on:click={toggleTheme}
					class="p-2 rounded-full bg-base-200 hover:bg-base-300 transition-colors"
					aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
				>
					{#if isDarkMode}
						<!-- Sun icon for light mode -->
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-base-content"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
					{:else}
						<!-- Moon icon for dark mode -->
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-base-content"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
					{/if}
				</button>
				
				<!-- Join Waitlist Button for Mobile -->
				<a href="#cta" class="btn btn-primary btn-sm rounded-full px-3 text-primary-content font-semibold">
					Join Waitlist
				</a>
			</div>
		</div>
	</header>

	<!-- Spacer to push content below the fixed navbar -->
	<div class="h-24"></div>

	<!-- Page content goes here -->
	<slot />
</div>

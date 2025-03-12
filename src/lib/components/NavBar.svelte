<script lang="ts">
	import { onMount } from 'svelte';
	import Logo from './Logo.svelte';
	
	let isScrolled = false;
	let mobileMenuOpen = false;
	let isDarkMode = true; // Default to dark mode
	
	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};
		
		window.addEventListener('scroll', handleScroll);
		
		// Check for saved theme preference or use system preference
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			isDarkMode = savedTheme === 'dark';
			applyTheme();
		} else {
			// Use system preference
			isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
			applyTheme();
		}
		
		return () => window.removeEventListener('scroll', handleScroll);
	});
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
	
	function toggleTheme() {
		isDarkMode = !isDarkMode;
		applyTheme();
		
		// Save preference
		localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
	}
	
	function applyTheme() {
		// Apply theme to HTML element
		document.documentElement.setAttribute('data-theme', isDarkMode ? 'gastronomica_dark' : 'gastronomica_light');
	}
</script>

<div class="navbar-container w-full">
	<header 
		class={`fixed top-0 left-0 right-0 w-full z-50 py-4 px-6 transition-all duration-300 ${
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

			<!-- Mobile Menu Button -->
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
				
				<button
					on:click={toggleMobileMenu}
					class="text-base-content p-2"
					aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
				>
					{#if mobileMenuOpen}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile Menu -->
		{#if mobileMenuOpen}
			<div class="md:hidden absolute top-full left-0 right-0 w-full bg-base-100 shadow-lg p-4 animate-in fade-in">
				<nav class="flex flex-col space-y-4 py-2">
					<a 
						href="#features" 
						on:click={toggleMobileMenu}
						class="text-base-content hover:text-accent py-2 transition-colors"
					>
						Features
					</a>
					<a 
						href="#roadmap" 
						on:click={toggleMobileMenu}
						class="text-base-content hover:text-accent py-2 transition-colors"
					>
						Roadmap
					</a>
					<a 
						href="#cta" 
						on:click={toggleMobileMenu}
						class="text-base-content hover:text-accent py-2 transition-colors"
					>
						Join Waitlist
					</a>
					<a href="#cta" class="btn btn-primary w-full rounded-full mt-2 text-primary-content font-semibold">
						Sign Up
					</a>
				</nav>
			</div>
		{/if}
	</header>

	<!-- Spacer to push content below the fixed navbar -->
	<div class="h-24"></div>

	<!-- Page content goes here -->
	<slot />
</div>

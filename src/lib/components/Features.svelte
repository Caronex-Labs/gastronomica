<script lang="ts">
  import { onMount } from 'svelte';
  import { Aperture, BookHeart, BrainCircuit, Share2 } from 'lucide-svelte';
  import ScrapbookMockup from './mockups/ScrapbookMockup.svelte';
  import AiAssistantMockup from './mockups/AiAssistantMockup.svelte';
  import DishCaptureMockup from './mockups/DishCaptureMockup.svelte';
  import SocialSharingMockup from './mockups/SocialSharingMockup.svelte';
  
  // Feature card data
  const features = [
    {
      title: "Personal Culinary Scrapbook",
      description: "Browse dish archetypes, peek at friends' favorite bites, and craft a living scrapbook of every memorable meal.",
      icon: BookHeart,
      delay: 100,
      mockup: ScrapbookMockup
    },
    {
      title: "Your AI Powered Food Assistant",
      description: "Feeling indecisive? Let our AI that knows your taste—and your friends'—instantly suggest what to order, even from vague requests.",
      icon: BrainCircuit,
      delay: 200,
      mockup: AiAssistantMockup
    },
    {
      title: "Frictionless Dish Capture",
      description: "Snap a photo, auto-fill the venue, then casually chat with the AI—logging your latest dish is that effortless.",
      icon: Aperture,
      delay: 300,
      mockup: DishCaptureMockup
    },
    {
      title: "Seamless Social Sharing",
      description: "Share a single dish or your entire dining adventure in one tap. It's never been easier to swap recommendations with friends.",
      icon: Share2,
      delay: 400,
      mockup: SocialSharingMockup
    }
  ];

  let isVisible = false;
  let cardsVisible = features.map(() => false);
  let isDarkMode = true;
  
  // Reactive declarations - these will update whenever isDarkMode changes
  $: accentColor = isDarkMode 
    ? "rgba(19, 111, 99, 0.8)" // accent teal
    : "rgba(233, 196, 106, 0.6)"; // primary gold
  
  onMount(() => {
    // Animate section on load
    setTimeout(() => {
      isVisible = true;
    }, 100);
    
    // Animate cards with staggered delay
    features.forEach((feature, index) => {
      setTimeout(() => {
        cardsVisible[index] = true;
      }, 300 + feature.delay);
    });
    
    // Check for theme preference
    const theme = document.documentElement.getAttribute('data-theme') || '';
    isDarkMode = theme.includes('dark');
    
    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme') || '';
          isDarkMode = newTheme.includes('dark');
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => {
      observer.disconnect();
    };
  });
</script>

<section id="features" class="py-16 md:py-20 px-4 md:px-6 bg-primary/5">
  <div class="max-w-7xl mx-auto">
    <!-- Section Header -->
    <div class="text-center mb-10 md:mb-16">
      <h2 
        class={`text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 transition-all duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-4'
        }`}
      >
        Key Features
      </h2>
      <div 
        class={`w-16 md:w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-secondary to-accent mb-4 md:mb-6 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 transform scale-x-100' : 'opacity-0 transform scale-x-0'
        }`}
      ></div>
    </div>
    
    <!-- Feature Cards -->
    <div class="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24">
      {#each features as feature, i}
        <div 
          class={`feature-card rounded-2xl md:rounded-3xl overflow-hidden shadow-md transition-all duration-700 ${
            isDarkMode 
              ? 'bg-base-100 border border-base-content/10' 
              : 'bg-base-100 border border-accent/10'
          } ${
            cardsVisible[i] 
              ? 'opacity-100 transform translate-y-0 glow-active' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <!-- Card Layout - alternating left/right on desktop, stacked on mobile -->
          <div class="flex flex-col md:flex-row md:h-80 lg:h-96 xl:h-[28rem] {i % 2 === 1 ? 'md:flex-row-reverse' : ''}">
            
            <!-- Text Content -->
            <div class="p-6 sm:p-8 md:p-10 lg:p-12 flex-1 flex flex-col justify-center">
              <div class="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-4 md:mb-6 rounded-xl md:rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 text-primary">
                <svelte:component this={feature.icon} class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </div>
              <h3 class="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2 md:mb-4">{feature.title}</h3>
              <p class="text-sm md:text-base lg:text-lg text-base-content/70 max-w-xl">{feature.description}</p>
            </div>
            
            <!-- Mockup Display -->
            <div class="w-full md:w-1/2 h-[32rem] sm:h-[36rem] md:h-auto bg-base-100 overflow-hidden">
              <div class="mockup-container flex justify-center mt-5">
                <svelte:component this={feature.mockup} />
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .feature-card {
    transition: all 0.5s ease;
  }
  
  .glow-active {
    animation: glow-pulse 3s ease-in-out infinite;
  }
  
  @keyframes glow-pulse {
    0% {
      box-shadow: 0 0 5px var(--accent-color, rgba(19, 111, 99, 0.1));
    }
    50% {
      box-shadow: 0 0 30px var(--accent-color, rgba(19, 111, 99, 0.3));
    }
    100% {
      box-shadow: 0 0 5px var(--accent-color, rgba(19, 111, 99, 0.1));
    }
  }
  
  :global([data-theme="gastronomica_dark"]) .glow-active {
    --accent-color: rgba(19, 111, 99, 0.3);
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  :global([data-theme="gastronomica_light"]) .glow-active {
    --accent-color: rgba(233, 196, 106, 0.3);
    border-color: rgba(19, 111, 99, 0.2);
  }
  
  /* Responsive scaling for mockups */
  .mockup-container {
    transform-origin: top center;
    transform: scale(0.7);
  }
  
  @media (min-width: 640px) {
    .mockup-container {
      transform: scale(0.8);
    }
  }
  
  @media (min-width: 768px) {
    .mockup-container {
      transform: scale(0.55);
    }
  }
  
  @media (min-width: 1024px) {
    .mockup-container {
      transform: scale(0.6);
    }
  }
  
  @media (min-width: 1280px) {
    .mockup-container {
      transform: scale(0.65);
    }
  }
</style>

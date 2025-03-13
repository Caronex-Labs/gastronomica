<script lang="ts">
  import { onMount } from 'svelte';
  
  let isVisible = false;
  
  onMount(() => {
    const timer = setTimeout(() => {
      isVisible = true;
    }, 100);
    
    return () => clearTimeout(timer);
  });
</script>

<section id="hero" class="relative pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20 lg:pb-32 px-4 md:px-6 overflow-hidden">
  <!-- Enhanced Background Design Elements -->
  <div class="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[20rem] md:w-[30rem] lg:w-[40rem] h-[20rem] md:h-[30rem] lg:h-[40rem] rounded-full bg-primary/30 blur-[100px] opacity-70"></div>
  <div class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[20rem] md:w-[30rem] lg:w-[40rem] h-[20rem] md:h-[30rem] lg:h-[40rem] rounded-full bg-accent/30 blur-[100px] opacity-70"></div>
  
  <!-- Additional decorative elements -->
  <div class="absolute top-1/3 left-1/4 w-[10rem] md:w-[15rem] lg:w-[20rem] h-[10rem] md:h-[15rem] lg:h-[20rem] rounded-full bg-secondary/20 blur-[80px] opacity-60"></div>
  
  <div class="max-w-7xl mx-auto relative">
    <div class="max-w-3xl mx-auto text-center">
      <!-- Subtle pre-heading tag -->
      <div 
        class={`inline-block mb-3 md:mb-4 px-3 md:px-4 py-1 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-medium transition-all duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-4'
        }`}
      >
        Your AI-Powered Food Diary
      </div>
      
      <!-- Main Headline -->
      <h1 
        class={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-4'
        }`}
      >
        Your AI Food Diary—Capture, Explore, and Share Every Delicious Moment
      </h1>
      
      <!-- Sub-headline -->
      <p 
        class={`text-base sm:text-lg md:text-xl text-base-content/70 mb-6 md:mb-10 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-4'
        }`}
      >
        A personal scrapbook for the best dishes you've tasted, and smart suggestions for whatever you're craving next.
      </p>
      
      <!-- CTA Button -->
      <div 
        class={`transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-4'
        }`}
      >
        <a 
          href="#cta"
          class="btn btn-primary btn-md md:btn-lg rounded-full shadow-lg md:shadow-xl shadow-primary/30 transform transition-all duration-300 hover:scale-105 px-6 md:px-8"
        >
          Request Early Access
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-4 w-4 md:h-5 md:w-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </a>
      </div>
      
      <!-- Optional Tagline -->
      <p 
        class={`mt-4 md:mt-6 text-xs md:text-sm text-base-content/60 italic transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Think beyond meal tracking—build a living story of great eats.
      </p>
    </div>
    
    <!-- Quick Value Proposition -->
    <div 
      class={`mt-12 md:mt-20 max-w-3xl mx-auto text-center py-4 md:py-6 px-6 md:px-8 rounded-xl md:rounded-2xl glass border border-accent/10 shadow-lg md:shadow-xl transition-all duration-700 delay-500 ${
        isVisible ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'
      }`}
    >
      <p class="text-base md:text-lg text-base-content/90">
        Palete helps you effortlessly record your favorite dishes, 
        browse new and old discoveries, and tap into a personal AI assistant 
        to decide what to eat next—whether it's an old favorite or something new.
      </p>
    </div>
  </div>
</section>

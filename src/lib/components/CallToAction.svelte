<script lang="ts">
  import { onMount } from 'svelte';
  
  let email = '';
  let isSubmitted = false;
  let isVisible = false;
  let sectionElement: HTMLElement;
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isVisible = true;
            // Once visible, no need to keep observing
            observer.unobserve(sectionElement);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionElement) {
      observer.observe(sectionElement);
    }
    
    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
      observer.disconnect();
    };
  });
  
  function handleSubmit(e: Event) {
    e.preventDefault();
    if (email.trim() !== '') {
      // Here you would normally send this to your backend
      console.log('Email submitted:', email);
      isSubmitted = true;
      email = '';
      
      // Reset after 3 seconds
      setTimeout(() => {
        isSubmitted = false;
      }, 3000);
    }
  }
</script>

<section 
  id="cta" 
  class="py-20 px-6 relative overflow-hidden"
  bind:this={sectionElement}
>
  <!-- Enhanced background decorative elements - outside the card -->
  <div class="absolute top-0 right-0 -translate-y-1/4 translate-x-1/3 w-[30rem] h-[30rem] rounded-full bg-accent/10 blur-[80px] opacity-50"></div>
  <div class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/3 w-[30rem] h-[30rem] rounded-full bg-primary/10 blur-[80px] opacity-50"></div>
  
  <div class="max-w-5xl mx-auto relative">
    <div 
      class={`p-10 md:p-16 rounded-3xl bg-gradient-to-br from-base-300 to-base-300/90 text-base-content shadow-2xl transition-all duration-1000 transform overflow-hidden ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      <!-- Internal decorative elements - contained within the card -->
      <div class="absolute top-0 right-0 w-[25rem] h-[25rem] rounded-full bg-primary/20 blur-[80px] opacity-60 -translate-y-1/2 translate-x-1/3"></div>
      <div class="absolute bottom-0 left-0 w-[25rem] h-[25rem] rounded-full bg-secondary/20 blur-[80px] opacity-60 translate-y-1/2 -translate-x-1/3"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] rounded-full bg-accent/10 blur-[70px] opacity-40"></div>
      
      <div class="relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Food Scrapbook?
          </h2>
          <p class="text-base-content/80 max-w-2xl mx-auto">
            Join our Beta to capture your favorite dishes, get personal AI-driven suggestions, and share culinary memories with friends.
          </p>
        </div>
        
        <form 
          on:submit={handleSubmit}
          class={`max-w-xl mx-auto transition-all duration-500 ${
            isSubmitted ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
          }`}
        >
          <div class="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              bind:value={email}
              required
              class="flex-grow py-3 px-4 rounded-full bg-base-content/10 backdrop-blur-sm border border-base-content/20 text-base-content placeholder:text-base-content/60 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button 
              type="submit"
              class="btn btn-primary rounded-full shadow-xl shadow-primary/30 transform transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Request Access
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-5 w-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </button>
          </div>
          <p class="text-xs text-base-content/60 mt-3 text-center">
            No spam. We respect your data.
          </p>
        </form>
        
        <div 
          class={`max-w-md mx-auto text-center transition-all duration-500 ${
            isSubmitted ? 'opacity-100 scale-100' : 'opacity-0 scale-90 h-0 overflow-hidden'
          }`}
        >
          <div class="flex items-center justify-center mb-4">
            <div class="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-primary"><path d="M20 6 9 17l-5-5"></path></svg>
            </div>
          </div>
          <h3 class="text-xl font-semibold mb-2">Thank You for Joining!</h3>
          <p class="text-base-content/80">
            We've added you to our waitlist. You'll be among the first to know when Gastronomica launches.
          </p>
        </div>
        
        <div class="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
            </div>
            <p class="text-sm text-base-content/80">
              Early beta access with premium features
            </p>
          </div>
          
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
            </div>
            <p class="text-sm text-base-content/80">
              Unlimited AI recommendations
            </p>
          </div>
          
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
            </div>
            <p class="text-sm text-base-content/80">
              Priority support from our team
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

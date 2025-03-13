<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  
  let email = '';
  let feedback = '';
  let isSubmitted = false;
  let isVisible = false;
  let isLoading = false;
  let errorMessage = '';
  let isValidated = false;
  let sectionElement: HTMLElement;
  let inputElement: HTMLInputElement;
  
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
  
  // Email validation function
  function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Validate email on input
  function handleInput() {
    if (email.trim() === '') {
      isValidated = false;
      errorMessage = '';
    } else if (!isValidEmail(email.trim())) {
      isValidated = false;
      errorMessage = 'Please enter a valid email address';
    } else {
      isValidated = true;
      errorMessage = '';
    }
  }
  
  async function handleSubmit(e: Event) {
    e.preventDefault();
    errorMessage = '';
    
    // Validate email
    if (!email.trim()) {
      errorMessage = 'Please enter your email address';
      inputElement.focus();
      return;
    }
    
    if (!isValidEmail(email.trim())) {
      errorMessage = 'Please enter a valid email address';
      inputElement.focus();
      return;
    }
    
    try {
      isLoading = true;
      
      // Send to our API endpoint
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          email: email.trim(),
          feedback: feedback.trim()
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        isSubmitted = true;
        email = '';
        feedback = '';
        isValidated = false;
        
        // Reset after 5 seconds
        setTimeout(() => {
          isSubmitted = false;
        }, 5000);
      } else {
        errorMessage = result.error || 'Failed to join waitlist. Please try again.';
        await tick();
        inputElement.focus();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      errorMessage = 'Something went wrong. Please try again later.';
      await tick();
      inputElement.focus();
    } finally {
      isLoading = false;
    }
  }
</script>

<section 
  id="cta" 
  class="py-16 md:py-20 px-4 md:px-6 relative overflow-hidden"
  bind:this={sectionElement}
>
  <!-- Enhanced background decorative elements - outside the card -->
  <div class="absolute top-0 right-0 -translate-y-1/4 translate-x-1/3 w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] rounded-full bg-accent/10 blur-[80px] opacity-50"></div>
  <div class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/3 w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] rounded-full bg-primary/10 blur-[80px] opacity-50"></div>
  
  <div class="max-w-5xl mx-auto relative">
    <div 
      class={`p-6 md:p-10 lg:p-16 rounded-2xl md:rounded-3xl bg-gradient-to-br from-base-300 to-base-300/90 text-base-content shadow-xl md:shadow-2xl transition-all duration-1000 transform overflow-hidden ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      <!-- Internal decorative elements - contained within the card -->
      <div class="absolute top-0 right-0 w-[15rem] md:w-[25rem] h-[15rem] md:h-[25rem] rounded-full bg-primary/20 blur-[80px] opacity-60 -translate-y-1/2 translate-x-1/3"></div>
      <div class="absolute bottom-0 left-0 w-[15rem] md:w-[25rem] h-[15rem] md:h-[25rem] rounded-full bg-secondary/20 blur-[80px] opacity-60 translate-y-1/2 -translate-x-1/3"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15rem] md:w-[20rem] h-[15rem] md:h-[20rem] rounded-full bg-accent/10 blur-[70px] opacity-40"></div>
      
      <div class="relative z-10">
        <div class="text-center mb-8 md:mb-12">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Ready to Start Your Food Scrapbook?
          </h2>
          <p class="text-sm md:text-base text-base-content/80 max-w-2xl mx-auto">
            Join our Beta to capture your favorite dishes, get personal AI-driven suggestions, and share culinary memories with friends.
          </p>
        </div>
        
        <form 
          on:submit={handleSubmit}
          class={`max-w-xl mx-auto transition-all duration-500 ${
            isSubmitted ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
          }`}
        >
          <div class="flex flex-col gap-4">
            <div class="flex-grow relative">
              <div class="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  bind:value={email}
                  bind:this={inputElement}
                  on:input={handleInput}
                  required
                  class={`w-full py-2 md:py-3 px-3 md:px-4 pl-4 md:pl-5 rounded-full bg-base-content/10 backdrop-blur-sm border transition-all duration-300 text-sm md:text-base
                  ${errorMessage ? 'border-error shadow-[0_0_0_1px_rgba(202,46,85,0.3)]' : 
                    isValidated ? 'border-success shadow-[0_0_0_1px_rgba(19,111,99,0.3)]' : 
                    'border-base-content/20'} 
                  text-base-content placeholder:text-base-content/60 focus:outline-none focus:ring-2 
                  ${errorMessage ? 'focus:ring-error/30' : 'focus:ring-primary/30'}`}
                />
                
                <div class="absolute top-0 left-4 md:left-5 -translate-y-1/2 px-1.5 bg-gradient-to-br from-base-300 to-base-300/90 flex items-center rounded-full">
                  <label for="email" class="text-xs font-medium text-base-content/90 flex items-center gap-1 p-1">
                    Email
                    <span class="text-secondary">*</span>
                  </label>
                </div>
                
                {#if isValidated && !errorMessage}
                  <div class="absolute right-4 top-1/2 -translate-y-1/2" transition:fade={{ duration: 200 }}>
                    <div class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-success/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-success"><path d="M20 6 9 17l-5-5"></path></svg>
                    </div>
                  </div>
                {/if}
                
                {#if errorMessage}
                  <div class="absolute right-4 top-1/2 -translate-y-1/2" transition:fade={{ duration: 200 }}>
                    <div class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-error/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-error"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                    </div>
                  </div>
                {/if}
              </div>
              
              {#if errorMessage}
                <div class="mt-2 ml-4 md:ml-5" transition:fly={{ y: -10, duration: 200 }}>
                  <p class="text-xs text-error flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-error"><path d="M12 9v4"></path><path d="M12 17h.01"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    {errorMessage}
                  </p>
                </div>
              {/if}
            </div>
            
            <!-- Optional Feedback Field with improved styling -->
            <div class="relative">
              <div class="relative">
                <textarea
                  id="feedback"
                  placeholder="Share your thoughts or feature requests..."
                  bind:value={feedback}
                  rows="2"
                  class="w-full py-2 md:py-3 px-4 md:px-5 rounded-xl bg-base-content/10 backdrop-blur-sm border border-base-content/20 
                  text-base-content placeholder:text-base-content/60 focus:outline-none focus:ring-2 focus:ring-primary/30
                  text-sm md:text-base transition-all duration-300 resize-none"
                ></textarea>
                
                <div class="absolute top-0 left-4 md:left-5 -translate-y-1/2 px-1.5 bg-gradient-to-br from-base-300 to-base-300/90 flex items-center rounded-full
                ">
                  <label for="feedback" class="text-xs font-medium text-base-content/90 flex items-center gap-1.5 p-1">
                    Feedback
                    <span class="px-1.5 py-0.5 bg-accent/20 text-accent text-[10px] rounded-full">Optional</span>
                  </label>
                </div>
              </div>
            </div>
            
            <div class="flex justify-center mt-2">
              <button 
                type="submit"
                disabled={isLoading}
                class="btn btn-primary rounded-full shadow-lg md:shadow-xl shadow-primary/30 transform transition-all duration-300 hover:scale-105 whitespace-nowrap min-w-[120px] md:min-w-[140px] text-sm md:text-base h-10 md:h-12"
              >
                {#if isLoading}
                  <span class="loading loading-spinner loading-xs"></span>
                  Processing...
                {:else}
                  Join Waitlist
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 md:ml-2 h-4 w-4 md:h-5 md:w-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                {/if}
              </button>
            </div>
          </div>
          <p class="text-xs text-base-content/60 mt-2 md:mt-3 text-center">
            No spam. We respect your data.
          </p>
        </form>
        
        <div 
          class={`max-w-md mx-auto text-center transition-all duration-500 ${
            isSubmitted ? 'opacity-100 scale-100' : 'opacity-0 scale-90 h-0 overflow-hidden'
          }`}
        >
          <div class="flex items-center justify-center mb-3 md:mb-4">
            <div class="w-12 h-12 md:w-16 md:h-16 rounded-full bg-success/30 flex items-center justify-center shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 md:h-8 md:w-8 text-success"><path d="M20 6 9 17l-5-5"></path></svg>
            </div>
          </div>
          <h3 class="text-lg md:text-xl font-semibold mb-2">Thank You for Joining!</h3>
          <p class="text-sm md:text-base text-base-content/80">
            We've added you to our waitlist. You'll be among the first to know when Palette launches.
          </p>
        </div>
        
        <div class="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 md:h-5 md:w-5 text-primary"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
            </div>
            <p class="text-xs md:text-sm text-base-content/80">
              Early beta access with premium features
            </p>
          </div>
          
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 md:h-5 md:w-5 text-primary"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
            </div>
            <p class="text-xs md:text-sm text-base-content/80">
              Unlimited AI recommendations
            </p>
          </div>
          
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 md:h-5 md:w-5 text-primary"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
            </div>
            <p class="text-xs md:text-sm text-base-content/80">
              Priority support and feature requests
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

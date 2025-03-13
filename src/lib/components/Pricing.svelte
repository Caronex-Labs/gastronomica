<script lang="ts">
  import { Check, X, Utensils, Camera, Sparkles, Users, Globe, Star, Clock, ChefHat, MapPin, Heart, Bookmark, AlertTriangle, Flame } from 'lucide-svelte';
  import type { ComponentType } from 'svelte';
  
  // Toggle between monthly and yearly pricing
  let isYearly = false;
  
  // Define color types
  type ColorTheme = 'primary' | 'secondary' | 'accent';
  type ColorProperty = 'bg' | 'bgHover' | 'border' | 'borderHover' | 'text' | 'buttonBg' | 'buttonText' | 'buttonHover';
  
  // Define plan type
  type PlanFeature = {
    name: string;
    included: boolean;
  };
  
  type Plan = {
    name: string;
    version: string;
    description: string;
    userType: string;
    monthlyPrice: number;
    yearlyPrice: number;
    color: ColorTheme;
    icon: ComponentType;
    features: PlanFeature[];
  };
  
  // Define color mapping for different themes
  const colorMap = {
    primary: {
      bg: 'rgba(233, 196, 106, 0.1)',
      bgHover: 'rgba(233, 196, 106, 0.2)',
      border: 'rgba(233, 196, 106, 0.3)',
      borderHover: 'rgba(233, 196, 106, 1)',
      text: 'rgb(233, 196, 106)',
      buttonBg: 'rgb(233, 196, 106)',
      buttonText: '#000000',
      buttonHover: 'rgba(233, 196, 106, 0.8)'
    },
    secondary: {
      bg: 'rgba(202, 46, 85, 0.1)',
      bgHover: 'rgba(202, 46, 85, 0.2)',
      border: 'rgba(202, 46, 85, 0.3)',
      borderHover: 'rgba(202, 46, 85, 1)',
      text: 'rgb(202, 46, 85)',
      buttonBg: 'rgb(202, 46, 85)',
      buttonText: '#ffffff',
      buttonHover: 'rgba(202, 46, 85, 0.8)'
    },
    accent: {
      bg: 'rgba(19, 111, 99, 0.1)',
      bgHover: 'rgba(19, 111, 99, 0.2)',
      border: 'rgba(19, 111, 99, 0.3)',
      borderHover: 'rgba(19, 111, 99, 1)',
      text: 'rgb(19, 111, 99)',
      buttonBg: 'rgb(19, 111, 99)',
      buttonText: '#ffffff',
      buttonHover: 'rgba(19, 111, 99, 0.8)'
    }
  };
  
  // Helper function to get color safely
  function getColor(plan: { color: ColorTheme }, property: ColorProperty): string {
    return colorMap[plan.color]?.[property] || '';
  }
  
  // Define pricing plans with correct feature distribution
  const plans: Plan[] = [
    {
      name: "Foodie",
      version: "v1",
      description: "Perfect for recording experiences and sharing with friends",
      userType: "Casual food enthusiasts",
      monthlyPrice: 100,
      yearlyPrice: 1000,
      color: "primary",
      icon: Utensils,
      features: [
        { name: "Unlimited entries into the diary", included: true },
        { name: "2 pictures per dish", included: true },
        { name: "All AI food recognition features", included: true },
        { name: "Slower AI responses", included: true },
        { name: "Social sharing with friends only", included: true },
        { name: "Maximum of 50 friends", included: true },
        { name: "Individual taste profile", included: false },
        { name: "Broader social suggestions beyond friends", included: false },
        { name: "Social Influencer Feed access", included: false },
        { name: "Priority AI processing", included: false }
      ]
    },
    {
      name: "Gourmet",
      version: "v2",
      description: "For passionate foodies seeking broader experiences",
      userType: "Serious food lovers",
      monthlyPrice: 200,
      yearlyPrice: 2000,
      color: "secondary",
      icon: Camera,
      features: [
        { name: "All Foodie features", included: true },
        { name: "5 pictures per dish", included: true },
        { name: "Individual taste profile", included: true },
        { name: "Broader social suggestions beyond friends", included: true },
        { name: "Maximum of 100 friends", included: true },
        { name: "Follow Connoisseur-level users (Food Influencers)", included: true },
        { name: "Social Influencer Feed access (read-only)", included: true },
        { name: "Post on the Social Influencer Feed", included: false },
        { name: "Priority AI processing", included: false },
        { name: "Advanced dashboard to analyze follower data", included: false }
      ]
    },
    {
      name: "Connoisseur",
      version: "v3",
      description: "For aspiring food influencers",
      userType: "Food content creators",
      monthlyPrice: 300,
      yearlyPrice: 3000,
      color: "accent",
      icon: Globe,
      features: [
        { name: "All Gourmet features", included: true },
        { name: "10 pictures per dish", included: true },
        { name: "Post on the Social Influencer Feed", included: true },
        { name: "Faster AI responses", included: true },
        { name: "Advanced dashboard to analyze follower data", included: true },
        { name: "Early access to new features", included: true }
      ]
    }
  ];
  
  // Format price with currency
  function formatPrice(price: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  }
</script>

<section id="pricing" class="py-20 px-6 bg-base-200">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-8">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
      <p class="text-base-content/80 text-lg max-w-3xl mx-auto mb-6">
        Palette is built for food lovers, not investors. We're committed to creating an app that serves you, 
        not shareholders, which means our decisions are guided by your needs, not funding rounds.
      </p>
      <div class="flex flex-col items-center">
        <div class="bg-base-300/50 p-4 rounded-xl max-w-2xl mx-auto">
          <p class="italic text-base-content/90">
            "We believe that by being directly supported by our users, we can build a more authentic, 
            user-focused experience that truly celebrates the joy of food."
          </p>
        </div>
      </div>
    </div>
    
    <!-- Monthly/Yearly toggle -->
    <div class="flex justify-center mb-8 md:mb-12">
      <div class="bg-base-300 rounded-full p-1 flex items-center flex-wrap justify-center">
        <button 
          class={`px-4 md:px-6 py-2 rounded-full transition-all ${!isYearly ? 'bg-primary text-primary-content shadow-md' : 'text-base-content/70'}`}
          on:click={() => isYearly = false}
        >
          Monthly
        </button>
        <button 
          class={`px-4 md:px-6 py-2 rounded-full transition-all ${isYearly ? 'bg-primary text-primary-content shadow-md' : 'text-base-content/70'}`}
          on:click={() => isYearly = true}
        >
          Yearly <span class="text-xs opacity-80">Save 15%</span>
        </button>
      </div>
    </div>
    
    <!-- Pricing cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {#each plans as plan, i}
        <div class="relative">
          <div 
            class="card bg-base-100 shadow-xl h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
            style="border: 2px solid {getColor(plan, 'border')};"
          >
            <!-- Card header with decorative elements -->
            <div 
              class="p-4 md:p-6 relative overflow-hidden"
              style="background-color: {getColor(plan, 'bg')};"
            >
              <div 
                class="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-xl"
                style="background-color: {getColor(plan, 'bgHover')};"
              ></div>
              
              <div class="relative z-10">
                <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                  <div 
                    class="w-10 h-10 rounded-full flex items-center justify-center"
                    style="background-color: {getColor(plan, 'text')}; color: {getColor(plan, 'buttonText')};"
                  >
                    <svelte:component this={plan.icon} size={20} />
                  </div>
                  <div>
                    <div class="flex flex-wrap items-center gap-2">
                      <h3 
                        class="text-xl md:text-2xl font-bold"
                        style="color: {getColor(plan, 'text')};"
                      >{plan.name}</h3>
                      <div 
                        class="badge text-xs"
                        style="background-color: {getColor(plan, 'text')}; color: {getColor(plan, 'buttonText')};"
                      >Available in {plan.version}</div>
                    </div>
                    <p class="text-sm text-base-content/60">{plan.userType}</p>
                  </div>
                </div>
                <p class="text-base-content/70 mb-4 text-sm md:text-base">{plan.description}</p>
                
                <div class="flex items-end gap-1">
                  <span 
                    class="text-3xl md:text-4xl font-bold"
                    style="color: {getColor(plan, 'text')};"
                  >
                    {formatPrice(isYearly ? plan.yearlyPrice / 12 : plan.monthlyPrice)}
                  </span>
                  <span class="text-base-content/70 mb-1">/ month</span>
                </div>
                
                {#if isYearly}
                  <div class="text-xs md:text-sm text-base-content/70 mt-1">
                    Billed annually as {formatPrice(plan.yearlyPrice)}
                  </div>
                {/if}
              </div>
            </div>
            
            <!-- Feature list -->
            <div class="card-body p-4 md:p-6">
              <ul class="space-y-2 md:space-y-3 mb-6 text-sm md:text-base">
                {#each plan.features as feature}
                  <li class="flex items-start gap-2">
                    {#if feature.included}
                      <Check 
                        size={18} 
                        class="mt-0.5 flex-shrink-0"
                        style="color: {getColor(plan, 'text')};"
                      />
                      <span>{feature.name}</span>
                    {:else}
                      <X size={18} class="text-base-content/30 mt-0.5 flex-shrink-0" />
                      <span class="text-base-content/50">{feature.name}</span>
                    {/if}
                  </li>
                {/each}
              </ul>
              
              <div class="card-actions justify-center mt-auto">
                <a 
                  href="#cta" 
                  class="btn w-full border-none hover:opacity-90"
                  style="background-color: {getColor(plan, 'buttonBg')}; color: {getColor(plan, 'buttonText')};"
                >
                  Choose {plan.name}
                </a>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    <!-- Additional info -->
    <div class="mt-12 md:mt-16 text-center">
      <p class="text-base-content/70 max-w-2xl mx-auto mb-4 text-sm md:text-base">
        All plans include a 14-day free trial. No credit card required to start. 
        Cancel anytime.
      </p>
      <div class="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-4 md:p-6 rounded-xl max-w-2xl mx-auto border border-base-300 shadow-lg">
        <div class="flex items-center justify-center gap-2 mb-2 md:mb-3">
          <h3 class="font-bold text-base md:text-lg">Experimental Pricing</h3>
        </div>
        <p class="text-base-content/90 text-sm md:text-base">
          These pricing plans are experimental and subject to change based on user feedback.
          We're committed to finding the right balance that provides value to all types of food enthusiasts.
        </p>
      </div>
    </div>
  </div>
</section>


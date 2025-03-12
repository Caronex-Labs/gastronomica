<script lang="ts">
  import { onMount } from 'svelte';
  import { MapPin, Star, Zap, Calendar, Users, Award, Sparkles, CheckCircle, MoreHorizontal, Utensils, Camera, Globe } from 'lucide-svelte';
  
  // Define the roadmap versions and features aligned with pricing plans
  const roadmapItems = [
    {
      version: "1",
      title: "Foodie Foundations",
      date: "Q3 2023",
      features: [
        "Personal food diary with unlimited entries",
        "AI-powered food recognition",
        "Social sharing with friends",
        "Friend connections (up to 50)",
        "Basic AI processing"
      ],
      icon: Utensils,
      color: "primary"
    },
    {
      version: "2",
      title: "Gourmet Social",
      date: "Q4 2023",
      features: [
        "Individual taste profiles",
        "Broader social suggestions beyond friends",
        "Social Influencer Feed (read-only)",
        "Follow food influencers",
        "Enhanced friend connections (up to 100)"
      ],
      icon: Camera,
      color: "secondary"
    },
    {
      version: "3",
      title: "Connoisseur Creator",
      date: "Q1 2024",
      features: [
        "Post on the Social Influencer Feed",
        "Priority AI processing",
        "Advanced dashboard for follower analysis",
        "Early access to new features",
        "Food content creator tools"
      ],
      icon: Globe,
      color: "accent"
    }
  ];
  
  // Animation control for fade-in effect
  let isVisible = false;
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible = true;
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('roadmap');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
      observer.disconnect();
    };
  });
</script>

<section id="roadmap" class="py-20 px-6">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">Our Development Roadmap</h2>
      <p class="text-base-content/80 text-lg max-w-2xl mx-auto">
        Follow our journey as we build Gastronomica in phases. Each version brings new features that enhance your culinary experience, from personal food journaling to becoming a food influencer.
      </p>
    </div>
    
    <div class={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
      <!-- DaisyUI Timeline Component -->
      <ul class="timeline timeline-vertical">
        {#each roadmapItems as item, index}
          <li>
            {#if index > 0}
              <hr/>
            {/if}
            
            <!-- For even items (0, 2, etc.) - content on the left -->
            {#if index % 2 === 0}
              <div class="timeline-start timeline-box bg-base-200 rounded-xl p-6 shadow-lg border border-base-300 relative overflow-hidden w-full">
                <!-- Decorative glow -->
                <div class={`absolute -inset-1 bg-${item.color}/20 blur-xl opacity-70 rounded-m`}></div>
                
                <!-- Card content -->
                <div class="relative z-10">
                  <div class="flex items-center gap-3 mb-3">
                    <div class={`badge badge-${item.color} text-white px-3 py-3 font-bold text-sm`}>v{item.version}</div>
                    <h3 class="text-2xl font-bold">{item.title}</h3>
                  </div>
                  
                  <div class="flex items-center gap-2 text-base-content/70 text-sm mb-4">
                    <Calendar size={14} class="text-base-content" />
                    <span>{item.date}</span>
                  </div>
                  
                  <ul class="space-y-2">
                    {#each item.features as feature}
                      <li class="flex items-start gap-2">
                        <Sparkles size={16} class={`text-${item.color} mt-1 flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    {/each}
                  </ul>
                </div>
              </div>
            {:else}
              <!-- For odd items (1, 3, etc.) - content on the right -->
              <div class="timeline-end timeline-box bg-base-200 rounded-xl p-6 shadow-lg border border-base-300 relative overflow-hidden w-full">
                <!-- Decorative glow -->
                <div class={`absolute -inset-1 bg-${item.color}/20 blur-xl opacity-70 rounded-m`}></div>
                
                <!-- Card content -->
                <div class="relative z-10">
                  <div class="flex items-center gap-3 mb-3">
                    <div class={`badge badge-${item.color} text-white px-3 py-3 font-bold text-sm`}>v{item.version}</div>
                    <h3 class="text-2xl font-bold">{item.title}</h3>
                  </div>
                  
                  <div class="flex items-center gap-2 text-base-content/70 text-sm mb-4">
                    <Calendar size={14} class="text-base-content" />
                    <span>{item.date}</span>
                  </div>
                  
                  <ul class="space-y-2">
                    {#each item.features as feature}
                      <li class="flex items-start gap-2">
                        <Sparkles size={16} class={`text-${item.color} mt-1 flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    {/each}
                  </ul>
                </div>
              </div>
            {/if}
            
            <!-- Timeline middle with icon -->
            <div class="timeline-middle">
              <div class={`w-10 h-10 rounded-full bg-${item.color} shadow-lg shadow-${item.color}/30 flex items-center justify-center text-${item.color}-content z-20`}>
                <svelte:component this={item.icon} size={18} />
              </div>
            </div>
            
            <!-- Empty side (will be filled on the other side) -->
            {#if index % 2 === 0}
              <div class="timeline-end"></div>
            {:else}
              <div class="timeline-start"></div>
            {/if}
            
            {#if index < roadmapItems.length}
              <hr/>
            {/if}
          </li>
        {/each}
        
        <!-- Dotted line to signify future updates - properly connected -->
        <li>
          <hr class="border-dashed" />
          <div class="timeline-start"></div>
          <div class="timeline-middle">
            <div class="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center text-base-content z-20">
              <MoreHorizontal size={18} />
            </div>
          </div>
          <div class="timeline-end timeline-box bg-base-200/50 rounded-xl p-6 border border-dashed border-base-300 relative overflow-hidden w-full">
            <p class="text-base-content/70 text-center italic">
              More exciting features coming soon...
            </p>
          </div>
        </li>
      </ul>
    </div>
    
    <!-- Call to action -->
    <div class="mt-24 text-center">
      <div class="inline-block">
        <div class="relative">
          <div class="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-70 blur-xl rounded-full"></div>
          <a href="#cta" class="relative z-10 btn btn-primary btn-lg">
            Join the Waitlist
          </a>
        </div>
      </div>
      <p class="mt-4 text-base-content/70">
        Be the first to experience our features as they roll out across different versions
      </p>
    </div>
  </div>
</section>

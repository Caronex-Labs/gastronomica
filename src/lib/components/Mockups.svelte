<script lang="ts">
  import { onMount } from 'svelte';
  import { MapPin, Star, Zap, Calendar, Users, Award, Sparkles } from 'lucide-svelte';
  
  // Define the roadmap versions and features
  const roadmapItems = [
    {
      version: "1.0",
      title: "Launch",
      date: "Q3 2023",
      features: [
        "Personal food diary with photo uploads",
        "Basic AI food recognition",
        "Simple note-taking for dishes",
        "Dark/light mode support"
      ],
      icon: Star,
      color: "primary"
    },
    {
      version: "1.5",
      title: "Social Expansion",
      date: "Q4 2023",
      features: [
        "Friend connections",
        "Sharing food experiences",
        "Restaurant check-ins",
        "Enhanced AI recommendations"
      ],
      icon: Users,
      color: "secondary"
    },
    {
      version: "2.0",
      title: "Culinary Intelligence",
      date: "Q1 2024",
      features: [
        "Advanced taste profile analysis",
        "Personalized restaurant suggestions",
        "Recipe matching for favorite dishes",
        "Dietary preference tracking"
      ],
      icon: Zap,
      color: "accent"
    },
    {
      version: "2.5",
      title: "Global Gastronomy",
      date: "Q2 2024",
      features: [
        "International cuisine exploration",
        "Travel food guides",
        "Cultural food insights",
        "Language translation for menus"
      ],
      icon: MapPin,
      color: "primary"
    }
  ];
  
  // Animation control
  let visibleItems = new Array(roadmapItems.length).fill(false);
  let itemRefs: HTMLElement[] = [];
  
  // Setup intersection observers after component mounts
  onMount(() => {
    const options = { threshold: 0.1 };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = itemRefs.findIndex(ref => ref === entry.target);
        if (index !== -1 && entry.isIntersecting) {
          visibleItems[index] = true;
        }
      });
    }, options);
    
    // Observe all item elements
    itemRefs.forEach(item => {
      if (item) observer.observe(item);
    });
    
    return () => {
      // Cleanup
      itemRefs.forEach(item => {
        if (item) observer.unobserve(item);
      });
      observer.disconnect();
    };
  });
</script>

<section id="roadmap" class="py-20 px-6">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">Our Roadmap</h2>
      <p class="text-base-content/80 text-lg max-w-2xl mx-auto">
        Follow our journey as we build the ultimate culinary companion. Here's what we're cooking up for future releases.
      </p>
    </div>
    
    <div class="relative">
      <!-- Curvy timeline path -->
      <div class="absolute left-1/2 top-0 bottom-0 w-1 bg-base-300 hidden md:block" style="transform: translateX(-50%);">
        <!-- Curved path overlay -->
        <div class="absolute inset-0 w-full h-full overflow-hidden">
          <svg class="absolute h-full w-24" style="left: -44px;" viewBox="0 0 100 800" preserveAspectRatio="none">
            <path 
              d="M50,0 Q70,200 30,400 Q-10,600 50,800" 
              stroke="currentColor" 
              stroke-width="4"
              fill="none"
              class="text-base-content/30"
            />
          </svg>
        </div>
      </div>
      
      <!-- Timeline items -->
      <div class="space-y-24 relative z-10">
        {#each roadmapItems as item, index}
          <div 
            class="flex flex-col md:flex-row items-center"
            bind:this={itemRefs[index]}
          >
            <!-- Timeline node (visible on md+ screens) -->
            <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2" style={`top: ${index * 24 + 10}rem;`}>
              <div class={`w-12 h-12 rounded-full bg-${item.color} shadow-lg shadow-${item.color}/30 flex items-center justify-center text-${item.color}-content z-20 transition-all duration-700 ${visibleItems[index] ? 'scale-100' : 'scale-0'}`}>
                <svelte:component this={item.icon} size={20} />
              </div>
            </div>
            
            <!-- Content card -->
            <div class={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 md:text-right md:self-end' : 'md:pl-16 md:ml-auto'}`}>
              <div 
                class={`bg-base-200 rounded-2xl p-6 shadow-lg border border-base-300 relative overflow-hidden transition-all duration-1000 ${
                  visibleItems[index] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
                }`}
              >
                <!-- Decorative glow -->
                <div class={`absolute -inset-1 bg-${item.color}/20 blur-xl opacity-70 rounded-full`}></div>
                
                <!-- Card content -->
                <div class="relative z-10">
                  <!-- Version badge -->
                  <div class="flex items-center gap-2 mb-2 md:hidden md:mb-0">
                    <svelte:component this={item.icon} size={16} class={`text-${item.color}`} />
                    <span class={`text-${item.color} font-bold`}>v{item.version}</span>
                  </div>
                  
                  <div class={`flex ${index % 2 === 0 ? 'md:justify-end' : ''} items-center gap-2 mb-3`}>
                    <div class={`hidden md:block text-${item.color} font-bold`}>v{item.version}</div>
                    <h3 class="text-2xl font-bold">{item.title}</h3>
                  </div>
                  
                  <div class={`flex items-center gap-2 text-base-content/70 text-sm mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                  
                  <ul class={`space-y-2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    {#each item.features as feature}
                      <li class="flex items-start gap-2">
                        <Sparkles size={16} class={`text-${item.color} mt-1 flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    {/each}
                  </ul>
                </div>
              </div>
            </div>
            
            <!-- Empty space for alternating layout -->
            <div class="hidden md:block w-5/12"></div>
          </div>
        {/each}
      </div>
    </div>
    
    <!-- Call to action -->
    <div class="mt-24 text-center">
      <div class="inline-block">
        <div class="relative">
          <div class="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-70 blur-xl rounded-full"></div>
          <button class="relative z-10 btn btn-primary btn-lg">
            Join the Beta
          </button>
        </div>
      </div>
      <p class="mt-4 text-base-content/70">
        Be among the first to experience our upcoming features
      </p>
    </div>
  </div>
</section>

<script lang="ts">
  import { onMount } from 'svelte';
  import { MapPin, Star, Zap, Calendar, Users, Award, Sparkles, CheckCircle, MoreHorizontal, Utensils, Camera, Globe } from 'lucide-svelte';
  import RoadmapTimeline from './roadmap/RoadmapTimeline.svelte';
  import RoadmapMobile from './roadmap/RoadmapMobile.svelte';
  // Import Firebase Analytics
  import { getAnalytics, logEvent } from 'firebase/analytics';
  import { app } from '$lib/firebase';
  
  type RoadmapItem = {
    version: string;
    title: string;
    date: string;
    features: string[];
    icon: any;
    color: 'primary' | 'secondary' | 'accent';
  };
  
  // Define the roadmap versions and features aligned with pricing plans
  const roadmapItems: RoadmapItem[] = [
    {
      version: "1",
      title: "Foodie Foundations",
      date: "Q2 2025",
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
      date: "Q3 2025",
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
      date: "Q4 2025",
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
  let hasTrackedView = false; // Track if we've already logged the view event
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible = true;
          
          // Track section view event - only once per session
          if (!hasTrackedView) {
            try {
              const analytics = getAnalytics(app);
              logEvent(analytics, 'section_view', {
                section_id: 'roadmap',
                section_name: 'Roadmap'
              });
              console.log('Roadmap section view tracked');
              hasTrackedView = true; // Mark as tracked
            } catch (error) {
              console.error('Failed to track section view:', error);
            }
          }
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

  // Track CTA button click
  function trackCTAClick() {
    try {
      const analytics = getAnalytics(app);
      logEvent(analytics, 'cta_click', {
        cta_location: 'roadmap_section',
        cta_text: 'Join the Waitlist'
      });
      console.log('Roadmap CTA click tracked');
    } catch (error) {
      console.error('Failed to track CTA click:', error);
    }
  }
</script>

<section id="roadmap" class="py-16 md:py-20 px-4 md:px-6">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-10 md:mb-16">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Our Development Roadmap</h2>
      <p class="text-base-content/80 text-base md:text-lg max-w-2xl mx-auto">
        Follow our journey as we build Palete in phases. Each version brings new features that enhance your culinary experience, from personal food journaling to becoming a food influencer.
      </p>
    </div>
    
    <div class={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
      <!-- Desktop Timeline View -->
      <RoadmapTimeline {roadmapItems} />
      
      <!-- Mobile Card View -->
      <RoadmapMobile {roadmapItems} />
    </div>
    
    <!-- Call to action -->
    <div class="mt-16 md:mt-24 text-center">
      <div class="inline-block">
        <div class="relative">
          <div class="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-70 blur-xl rounded-full"></div>
          <a 
            href="#cta" 
            on:click={trackCTAClick}
            class="relative z-10 btn btn-primary btn-md md:btn-lg"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
      <p class="mt-3 md:mt-4 text-xs md:text-sm text-base-content/70">
        Be the first to experience our features as they roll out across different versions
      </p>
    </div>
  </div>
</section>

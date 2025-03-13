<script lang="ts">
  import { MoreHorizontal } from 'lucide-svelte';
  import RoadmapCard from './RoadmapCard.svelte';
  
  type RoadmapItem = {
    version: string;
    title: string;
    date: string;
    features: string[];
    icon: any;
    color: 'primary' | 'secondary' | 'accent';
  };
  
  export let roadmapItems: RoadmapItem[];
  
  // Define color mapping
  const colorMap = {
    primary: {
      bg: 'rgba(233, 196, 106, 1)', // #e9c46a
      bgLight: 'rgba(233, 196, 106, 0.2)',
      text: '#ffffff'
    },
    secondary: {
      bg: 'rgba(202, 46, 85, 1)', // #ca2e55
      bgLight: 'rgba(202, 46, 85, 0.2)',
      text: '#ffffff'
    },
    accent: {
      bg: 'rgba(19, 111, 99, 1)', // #136f63
      bgLight: 'rgba(19, 111, 99, 0.2)',
      text: '#ffffff'
    }
  };
  
  // Helper function to get color safely
  function getColor(item: RoadmapItem) {
    return colorMap[item.color] || colorMap.primary;
  }
</script>

<div class="md:hidden">
  <div class="space-y-6">
    {#each roadmapItems as item}
      <div class="flex items-start gap-4">
        <div class="flex-shrink-0 mt-2">
          <div class="w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-20" 
               style="background-color: {getColor(item).bg}; color: {getColor(item).text}; box-shadow: 0 10px 15px -3px {getColor(item).bgLight}, 0 4px 6px -4px {getColor(item).bgLight};">
            <svelte:component this={item.icon} size={18} />
          </div>
        </div>
        <div class="flex-grow">
          <RoadmapCard {item} isMobile={true} />
        </div>
      </div>
    {/each}
    
    <!-- Coming Soon section -->
    <div class="flex items-start gap-4">
      <div class="flex-shrink-0 mt-2">
        <div class="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center text-base-content z-20">
          <MoreHorizontal size={18} />
        </div>
      </div>
      <div class="flex-grow">
        <div class="bg-base-200/50 rounded-xl p-4 border border-dashed border-base-300 relative overflow-hidden w-full">
          <p class="text-base-content/70 text-center italic">
            More exciting features coming soon...
          </p>
        </div>
      </div>
    </div>
  </div>
</div> 
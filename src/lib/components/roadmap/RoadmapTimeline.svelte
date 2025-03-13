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

<div class="hidden md:block">
  <!-- DaisyUI Timeline Component -->
  <ul class="timeline timeline-vertical">
    {#each roadmapItems as item, index}
      <li>
        {#if index > 0}
          <hr/>
        {/if}
        
        <!-- For even items (0, 2, etc.) - content on the left -->
        {#if index % 2 === 0}
          <div class="timeline-start">
            <RoadmapCard {item} />
          </div>
        {:else}
          <!-- For odd items (1, 3, etc.) - content on the right -->
          <div class="timeline-end">
            <RoadmapCard {item} />
          </div>
        {/if}
        
        <!-- Timeline middle with icon -->
        <div class="timeline-middle">
          <div class="w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-20" 
               style="background-color: {getColor(item).bg}; color: {getColor(item).text}; box-shadow: 0 10px 15px -3px {getColor(item).bgLight}, 0 4px 6px -4px {getColor(item).bgLight};">
            <svelte:component this={item.icon} size={18} />
          </div>
        </div>
        
        <!-- Empty side (will be filled on the other side) -->
        {#if index % 2 === 0}
          <div class="timeline-end"></div>
        {:else}
          <div class="timeline-start"></div>
        {/if}
        
        {#if index < roadmapItems.length - 1}
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
      <div class="timeline-end">
        <div class="bg-base-200/50 rounded-xl p-6 border border-dashed border-base-300 relative overflow-hidden w-full">
          <p class="text-base-content/70 text-center italic">
            More exciting features coming soon...
          </p>
        </div>
      </div>
    </li>
  </ul>
</div> 
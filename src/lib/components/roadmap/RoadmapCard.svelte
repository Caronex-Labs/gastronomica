<script lang="ts">
  import { Calendar, Sparkles } from 'lucide-svelte';
  
  export let item: {
    version: string;
    title: string;
    date: string;
    features: string[];
    icon: any;
    color: 'primary' | 'secondary' | 'accent';
  };
  export let isMobile = false;
  
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
  
  // Get the color values for this item
  const colors = colorMap[item.color] || colorMap.primary;
</script>

<div class={`bg-base-200 rounded-xl p-4 md:p-6 shadow-lg border border-base-300 relative overflow-hidden w-full ${isMobile ? 'mb-8' : ''}`}>
  <!-- Decorative glow -->
  <div class="absolute -inset-1 blur-xl opacity-70 rounded-m" style="background-color: {colors.bgLight};"></div>
  
  <!-- Card content -->
  <div class="relative z-10">
    <div class="flex items-center gap-3 mb-2 md:mb-3">
      <div class="badge px-2 md:px-3 py-2 md:py-3 font-bold text-xs md:text-sm" style="background-color: {colors.bg}; color: {colors.text};">
        v{item.version}
      </div>
      <h3 class="text-xl md:text-2xl font-bold" style="color: {colors.bg};">{item.title}</h3>
    </div>
    
    <div class="flex items-center gap-2 text-base-content/70 text-xs md:text-sm mb-3 md:mb-4">
      <Calendar size={14} class="text-base-content" />
      <span>{item.date}</span>
    </div>
    
    <ul class="space-y-1 md:space-y-2 text-sm md:text-base">
      {#each item.features as feature}
        <li class="flex items-start gap-2">
          <Sparkles size={16} class="mt-1 flex-shrink-0" style="color: {colors.bg};" />
          <span>{feature}</span>
        </li>
      {/each}
    </ul>
  </div>
</div> 
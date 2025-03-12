<script>
  import { Search, Bot, Settings, Star, Clock, Utensils, Coffee, Info } from 'lucide-svelte';
  import Logo from '../Logo.svelte';
  import FeatureMockup from './FeatureMockup.svelte';
</script>

<FeatureMockup featureType="Scrapbook">
  <div class="w-full h-full flex flex-col bg-base-100 text-base-content overflow-hidden max-h-full mt-10">
    <!-- App Bar -->
    <div class="flex justify-between items-center ">
      <div class="dropdown dropdown-bottom">
        <button tabindex="0" class="btn btn-ghost btn-circle">
          <Bot size={20} class="text-primary" />
        </button>
        <div tabindex="0" class="dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-52">
          <p class="text-xs p-2">Not sure what to order? Ask the bot!</p>
        </div>
      </div>
      
      <div class="dropdown dropdown-bottom dropdown-end">
        <button tabindex="0" class="btn btn-ghost btn-circle">
          <Settings size={20} class="text-primary" />
        </button>
        <div tabindex="0" class="dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-52">
          <p class="text-xs p-2">Customize your experience</p>
        </div>
      </div>
    </div>
    
    <!-- Search Bar -->
    <div class="p-4">
      <div class="relative">
        <div class="dropdown dropdown-bottom w-full">
          <input 
            tabindex="0"
            type="text" 
            placeholder="Search for dishes, cuisines, courses, etc." 
            class="input input-bordered w-full pl-10 bg-base-200 text-sm"
          />
          <Search size={18} class="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50" />
          <div tabindex="0" class="dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-full">
            <p class="text-xs p-2">Search for dishes, restaurants, or cuisine types</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Archetypes Carousel -->
    <div class="px-4 pb-3">
      <h3 class="text-sm font-medium mb-3 text-base-content/80">Archetypes</h3>
      <div class="flex overflow-x-auto gap-4 pb-2 hide-scrollbar">
        {#each [
          { emoji: '🍕', name: 'Pizza' },
          { emoji: '🍣', name: 'Sushi' },
          { emoji: '🍔', name: 'Burger' },
          { emoji: '🥗', name: 'Salad' },
          { emoji: '🍜', name: 'Ramen' },
          { emoji: '🍰', name: 'Pastries' }
        ] as category, i}
          <div class="flex-shrink-0">
            <div class="dropdown dropdown-bottom">
              <div tabindex="0" class="w-16 h-16 rounded-full flex flex-col items-center justify-center bg-base-200 hover:bg-primary/20 transition-colors cursor-pointer">
                <span class="text-xl">{category.emoji}</span>
                <span class="text-[10px] mt-1">{category.name}</span>
              </div>
              <div tabindex="0" class="dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-40">
                <p class="text-xs p-2">Browse {category.name.toLowerCase()} dishes from around the world</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
    
    <!-- Recent Experiences -->
    <div class="px-4 pb-3">
      <h3 class="text-sm font-medium mb-3 text-base-content/80">Recent Experiences</h3>
      <div class="flex overflow-x-auto gap-4 pb-2 hide-scrollbar">
        {#each [
          { name: 'Truffle Pasta', restaurant: 'Bella Italia', rating: 4.5, cuisine: 'Italian', mealType: 'Main', archetype: '🍝', comment: 'Perfect al dente texture, rich flavor' },
          { name: 'Matcha Tiramisu', restaurant: 'Fusion Desserts', rating: 5, cuisine: 'Fusion', mealType: 'Dessert', archetype: '🍰', comment: 'Unique twist on a classic' }
        ] as experience, i}
          <div class="dropdown dropdown-bottom">
            <div tabindex="0" class="card card-compact w-56 bg-base-200 shadow-sm flex-shrink-0 hover:shadow-md transition-shadow">
              <div class="card-body p-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="card-title text-sm">{experience.name}</h3>
                    <p class="text-xs text-base-content/70">{experience.restaurant}</p>
                  </div>
                  <div class="flex items-center gap-1">
                    <Star size={14} class="text-primary fill-primary" />
                    <span class="text-sm font-medium">{experience.rating}</span>
                  </div>
                </div>
                <div class="flex gap-2 mt-2 flex-wrap items-center">
                  <span class="badge badge-sm">{experience.cuisine}</span>
                  <span class="badge badge-sm badge-outline">{experience.mealType}</span>
                  <span class="text-lg">{experience.archetype}</span>
                </div>
                <p class="text-xs text-base-content/80 mt-2 line-clamp-2">{experience.comment}</p>
              </div>
            </div>
            <div tabindex="0" class="dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-56">
              <p class="text-xs p-2">Tap to view details and add to your collection</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
    
    <!-- Friends Activity -->
    <div class="px-4 pb-4">
      <h3 class="text-sm font-medium mb-3 text-base-content/80">What your friends are up to</h3>
      <div class="flex overflow-x-auto gap-4 pb-2 hide-scrollbar">
        {#each [
          { name: 'Ramen Bowl', restaurant: 'Ichiban Noodles', user: 'Alex', rating: 4, cuisine: 'Japanese', mealType: 'Main', archetype: '🍜', comment: 'Rich broth, tender chashu' },
          { name: 'Avocado Toast', restaurant: 'Morning Brew Café', user: 'Jamie', rating: 3.5, cuisine: 'Brunch', mealType: 'Breakfast', archetype: '🥑', comment: 'Simple but satisfying' }
        ] as friendActivity, i}
          <div class="dropdown dropdown-bottom">
            <div tabindex="0" class="card card-compact w-56 bg-base-200 shadow-sm flex-shrink-0 hover:shadow-md transition-shadow">
              <div class="card-body p-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="card-title text-sm">{friendActivity.name}</h3>
                    <p class="text-xs text-base-content/70">{friendActivity.restaurant}</p>
                    <p class="text-xs text-accent mt-1">by {friendActivity.user}</p>
                  </div>
                  <div class="flex items-center gap-1">
                    <Star size={14} class="text-primary fill-primary" />
                    <span class="text-sm font-medium">{friendActivity.rating}</span>
                  </div>
                </div>
                <div class="flex gap-2 mt-2 flex-wrap items-center">
                  <span class="badge badge-sm">{friendActivity.cuisine}</span>
                  <span class="badge badge-sm badge-outline">{friendActivity.mealType}</span>
                  <span class="text-lg">{friendActivity.archetype}</span>
                </div>
                <p class="text-xs text-base-content/80 mt-2 line-clamp-2">{friendActivity.comment}</p>
              </div>
            </div>
            <div tabindex="0" class="dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-56">
              <p class="text-xs p-2">See what {friendActivity.user} thought about this dish</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</FeatureMockup>

<style>
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
</style> 
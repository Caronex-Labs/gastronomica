<script>
  import { MapPin, Send, Star, Bot, ArrowLeft, MoreVertical } from 'lucide-svelte';
  import FeatureMockup from './FeatureMockup.svelte';
  import Logo from '../Logo.svelte';
</script>

<FeatureMockup featureType="AI Assistant">
  <div class="w-full h-full flex flex-col bg-base-100 text-base-content overflow-hidden mt-10">
    <!-- Chat Header -->
    <div class="flex items-center p-4 border-b border-base-300 gap-3">
      <div class="dropdown dropdown-bottom">
        <button tabindex="0" class="btn btn-ghost btn-circle">
          <ArrowLeft size={20} class="text-base-content" />
        </button>
        <div tabindex="0" class="dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-52">
          <p class="text-xs p-2">Return to your scrapbook</p>
        </div>
      </div>
      
      <div class="flex items-center gap-2 flex-1">
        <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <Bot size={20} class="text-primary" />
        </div>
        <div>
          <h3 class="font-medium text-sm">GastroBot</h3>
          <p class="text-xs text-base-content/60">Your culinary companion</p>
        </div>
      </div>
      
      <div class="dropdown dropdown-bottom dropdown-end">
        <button tabindex="0" class="btn btn-ghost btn-circle">
          <MoreVertical size={20} class="text-base-content" />
        </button>
        <div tabindex="0" class="dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-52">
          <p class="text-xs p-2">More options</p>
        </div>
      </div>
    </div>
    
    <!-- Chat Messages -->
    <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
      
      <!-- User Message -->
      <div class="chat chat-end">
        <div class="chat-image avatar">
          <div class="w-8 h-8 rounded-full bg-secondary/20">
            <div class="text-xs flex items-center justify-center h-full font-medium text-secondary">You</div>
          </div>
        </div>
        <div class="chat-bubble bg-secondary text-secondary-content">
          <p class="text-sm">I want to eat something hot and wet</p>
        </div>
      </div>
      
      <!-- Bot Response - Location -->
      <div class="chat chat-start">
        <div class="chat-image avatar bg-primary/20 w-8 h-8 flex items-center justify-center rounded-full">
              <Bot size={16} class="text-primary" />
        </div>
        <div class="chat-bubble bg-base-200 text-base-content flex flex-col gap-2 p-4">
          <div class="flex items-center gap-2 bg-base-300 p-2 rounded-lg">
            <MapPin size={16} class="text-accent" />
            <div>
              <p class="text-xs">You appear to be at: </p>
              <span class="font-medium">Bella Italia, Downtown</span>
            </div>
          </div>
          <p class="text-sm mt-1">Strange request. </p>
          <p class="text-sm mt-1">How about some pasta? </p>
        </div>
      </div>
      
      <!-- Bot Response - Recommendations -->
      <div class="chat chat-start">
        <div class="chat-image avatar bg-primary/20 w-8 h-8 flex items-center justify-center rounded-full">
              <Bot size={16} class="text-primary" />
        </div>
        <div class="chat-bubble bg-base-200 text-base-content p-0 overflow-hidden">
          
          <div class="flex overflow-x-auto gap-3 py-2 px-3 hide-scrollbar">
            {#each [
              { name: 'Carbonara', restaurant: 'Bella Italia', rating: 4.5, cuisine: 'Italian', mealType: 'Main', archetype: '🍝', comment: 'Not as creamy as I like, but the taste is on point' },
              { name: 'Sphagetti Bolognese', restaurant: 'Bella Italia', rating: 4.2, cuisine: 'Italian', mealType: 'Main', archetype: '🍝', comment: 'Love the meatballs, but the sauce is a bit too sweet' }
            ] as recommendation, i}
              <div class="dropdown dropdown-bottom">
                <div tabindex="0" class="card card-compact w-48 h-full bg-base-300 shadow-sm flex-shrink-0 hover:shadow-md transition-shadow">
                  <div class="card-body p-3">
                    <div class="flex justify-between items-start">
                      <div>
                        <h3 class="card-title text-sm">{recommendation.name}</h3>
                        <p class="text-xs text-base-content/70">{recommendation.restaurant}</p>
                      </div>
                      <div class="flex items-center gap-1">
                        <Star size={14} class="text-primary fill-primary" />
                        <span class="text-sm font-medium">{recommendation.rating}</span>
                      </div>
                    </div>
                    <div class="flex gap-1 mt-2 flex-wrap items-center">
                      <span class="badge badge-sm">{recommendation.cuisine}</span>
                      <span class="badge badge-sm badge-outline">{recommendation.mealType}</span>
                      <span class="text-lg">{recommendation.archetype}</span>
                    </div>
                    <p class="text-xs text-base-content/80 mt-2 line-clamp-2">{recommendation.comment}</p>
                  </div>
                </div>
                <div tabindex="0" class="dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-48">
                  <p class="text-xs p-2">Tap to add to your wishlist</p>
                </div>
              </div>
            {/each}
          </div>


          
          <div class="p-3 pt-1">
            <p class="text-xs text-base-content/70">Would you like me to suggest something else?</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Chat Input -->
    <div class="p-3 border-t border-base-300">
      <div class="flex items-center gap-2">
        <input 
          type="text" 
          placeholder="Type your message..." 
          class="input input-bordered flex-1 text-sm"
        />
        <button class="btn btn-circle btn-primary">
          <Send size={18} class="text-primary-content" />
        </button>
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
<script>
  import { MapPin, Star, MoreVertical, Edit, Trash2, Share, Search, Clock, Calendar, User, Home, Utensils, Award } from 'lucide-svelte';
  import FeatureMockup from './FeatureMockup.svelte';
  import Logo from '../Logo.svelte';
</script>

<FeatureMockup featureType="Social Sharing">
  <div class="w-full h-full flex flex-col bg-base-100 text-base-content overflow-hidden mt-10">
    
    <!-- Tab Navigation -->
    <div class="flex border-b border-base-300">
      <button class="flex-1 py-3 px-4 text-sm font-medium border-b-2 border-primary">
        Experiences
      </button>
      <button class="flex-1 py-3 px-4 text-sm font-medium text-base-content/60">
        Wishlist
      </button>
      <button class="flex-1 py-3 px-4 text-sm font-medium text-base-content/60">
        Friends
      </button>
    </div>
    
    <!-- Search Bar -->
    <div class="p-3 border-b border-base-300">
      <div class="relative">
        <input 
          type="text" 
          placeholder="Search your experiences..." 
          class="input input-bordered w-full pl-10 bg-base-200 text-sm"
        />
        <Search size={18} class="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50" />
      </div>
    </div>
    
    <!-- Filter Pills -->
    <div class="flex gap-2 p-3 overflow-x-auto hide-scrollbar">
      <button class="btn btn-sm btn-outline btn-primary gap-1">
        <Clock size={14} />
        <span>Recent</span>
      </button>
      <button class="btn btn-sm btn-outline gap-1">
        <Star size={14} />
        <span>Top Rated</span>
      </button>
      <button class="btn btn-sm btn-outline gap-1">
        <Calendar size={14} />
        <span>This Month</span>
      </button>
      <button class="btn btn-sm btn-outline gap-1">
        <User size={14} />
        <span>Solo</span>
      </button>
    </div>
    
    <!-- Restaurant Cards List -->
    <div class="flex-1 overflow-y-auto p-3">
      <div class="flex flex-col gap-6">
        
        <!-- Restaurant Card 1 -->
        <div class="card bg-base-200 shadow-md">
          <!-- Restaurant Cover Image -->
          <figure class="h-40 bg-base-content/10 overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=2232&q=80" 
              alt="Bella Italia" 
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-base-300/90 to-transparent"></div>
            <div class="absolute bottom-3 left-3 flex items-center gap-2">
              <div class="badge badge-lg">Italian</div>
              <div class="badge badge-outline badge-lg">Fine Dining</div>
            </div>
          </figure>
          
          <!-- Restaurant Info -->
          <div class="card-body p-4">
            <div class="flex justify-between items-start">
              <div>
                <h2 class="card-title">Bella Italia</h2>
                <div class="flex items-center gap-1 text-sm text-base-content/70 mt-1">
                  <MapPin size={14} />
                  <span>Downtown, 123 Main St</span>
                </div>
              </div>
              
              <div class="dropdown dropdown-left dropdown-open">
                <label tabindex="0" class="btn btn-ghost btn-sm btn-circle">
                  <MoreVertical size={16} />
                </label>
                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36">
                  <li><a class="text-xs flex items-center gap-2"><Edit size={14} /> Edit</a></li>
                  <li><a class="text-xs flex items-center gap-2"><Share size={14} /> Share</a></li>
                  <li><a class="text-xs flex items-center gap-2 text-error"><Trash2 size={14} /> Delete</a></li>
                </ul>
              </div>
            </div>
            
            <div class="divider my-1"></div>
            
            <!-- Experience Stats -->
            <div class="grid grid-cols-3 gap-2 mt-2">
              <div class="flex flex-col items-center bg-base-300/50 rounded-lg p-2">
                <div class="flex items-center gap-1 text-primary">
                  <Utensils size={16} />
                  <span class="font-bold">3</span>
                </div>
                <span class="text-xs text-base-content/70">Dishes Tried</span>
              </div>
              
              <div class="flex flex-col items-center bg-base-300/50 rounded-lg p-2">
                <div class="flex items-center gap-1 text-primary">
                  <Star size={16} class="fill-primary" />
                  <span class="font-bold">4.5</span>
                </div>
                <span class="text-xs text-base-content/70">Avg. Rating</span>
              </div>
              
              <div class="flex flex-col items-center bg-base-300/50 rounded-lg p-2">
                <div class="flex items-center gap-1 text-primary">
                  <Award size={16} />
                  <span class="font-bold">Pasta</span>
                </div>
                <span class="text-xs text-base-content/70">Best Dish</span>
              </div>
            </div>
            
            <!-- Top Dishes Preview -->
            <div class="mt-3">
              <h3 class="text-sm font-medium mb-2">Top Dishes:</h3>
              <div class="flex flex-wrap gap-1">
                <div class="badge badge-sm">Truffle Pasta (4.5★)</div>
                <div class="badge badge-sm">Tiramisu (5.0★)</div>
                <div class="badge badge-sm">Caprese Salad (4.0★)</div>
              </div>
            </div>
            
            <!-- Last Visit -->
            <div class="mt-3 text-xs text-base-content/70 flex items-center gap-1">
              <Clock size={12} />
              <span>Last visit: 2 weeks ago</span>
            </div>
          </div>
        </div>
        
        <!-- Restaurant Card 2 -->
        <div class="card bg-base-200 shadow-md">
          <!-- Restaurant Cover Image -->
          <figure class="h-40 bg-base-content/10 overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Pizza Palace" 
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-base-300/90 to-transparent"></div>
            <div class="absolute bottom-3 left-3 flex items-center gap-2">
              <div class="badge badge-lg">Pizza</div>
              <div class="badge badge-outline badge-lg">Casual</div>
            </div>
          </figure>
          
          <!-- Restaurant Info -->
          <div class="card-body p-4">
            <div class="flex justify-between items-start">
              <div>
                <h2 class="card-title">Pizza Palace</h2>
                <div class="flex items-center gap-1 text-sm text-base-content/70 mt-1">
                  <MapPin size={14} />
                  <span>Westside, 456 Oak Ave</span>
                </div>
              </div>
              
              <button class="btn btn-ghost btn-sm btn-circle">
                <MoreVertical size={16} />
              </button>
            </div>
            
            <div class="divider my-1"></div>
            
            <!-- Experience Stats -->
            <div class="grid grid-cols-3 gap-2 mt-2">
              <div class="flex flex-col items-center bg-base-300/50 rounded-lg p-2">
                <div class="flex items-center gap-1 text-primary">
                  <Utensils size={16} />
                  <span class="font-bold">2</span>
                </div>
                <span class="text-xs text-base-content/70">Dishes Tried</span>
              </div>
              
              <div class="flex flex-col items-center bg-base-300/50 rounded-lg p-2">
                <div class="flex items-center gap-1 text-primary">
                  <Star size={16} class="fill-primary" />
                  <span class="font-bold">4.5</span>
                </div>
                <span class="text-xs text-base-content/70">Avg. Rating</span>
              </div>
              
              <div class="flex flex-col items-center bg-base-300/50 rounded-lg p-2">
                <div class="flex items-center gap-1 text-primary">
                  <Award size={16} />
                  <span class="font-bold">Pepperoni</span>
                </div>
                <span class="text-xs text-base-content/70">Best Dish</span>
              </div>
            </div>
            
            <!-- Top Dishes Preview -->
            <div class="mt-3">
              <h3 class="text-sm font-medium mb-2">Top Dishes:</h3>
              <div class="flex flex-wrap gap-1">
                <div class="badge badge-sm">Pepperoni Pizza (4.8★)</div>
                <div class="badge badge-sm">Margherita Pizza (4.2★)</div>
              </div>
            </div>
            
            <!-- Last Visit -->
            <div class="mt-3 text-xs text-base-content/70 flex items-center gap-1">
              <Clock size={12} />
              <span>Last visit: 3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Bottom Navigation -->
    <div class="btm-nav btm-nav-sm bg-base-100 border-t border-base-300">
      <button class="text-primary">
        <Home size={20} />
      </button>
      <button class="active">
        <div class="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
          <Star size={14} class="text-primary" />
        </div>
      </button>
      <button>
        <User size={20} />
      </button>
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
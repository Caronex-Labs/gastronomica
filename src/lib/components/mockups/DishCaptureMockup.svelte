<script>
  import { Camera, Bot, Send, Star, ArrowLeft, Check, X, Image, MapPin, Edit3 } from 'lucide-svelte';
  import FeatureMockup from './FeatureMockup.svelte';
  import Logo from '../Logo.svelte';
</script>

<FeatureMockup featureType="Dish Capture">
  <div class="w-full h-full flex flex-col bg-base-100 text-base-content overflow-hidden mt-10">
    <!-- Header -->
    <div class="flex items-center p-4 border-b border-base-300 gap-3">
      <div class="dropdown dropdown-bottom">
        <button tabindex="0" class="btn btn-ghost btn-circle">
          <ArrowLeft size={20} class="text-base-content" />
        </button>
        <div tabindex="0" class="dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-52">
          <p class="text-xs p-2">Return to your scrapbook</p>
        </div>
      </div>
      
      <div class="flex-1 text-center">
        <h3 class="font-medium text-sm">Capture New Dish</h3>
      </div>
      
      <div class="w-8"></div> <!-- Spacer for balance -->
    </div>
    
    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Photo Section -->
      <div class="relative">
        <!-- Photo Preview -->
        <div class="aspect-video bg-base-300 relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80" 
            alt="Pasta dish" 
            class="w-full h-full object-cover"
          />
          
          <!-- Location Badge -->
          <div class="absolute bottom-3 left-3 bg-base-100/80 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1 text-xs shadow-sm">
            <MapPin size={12} class="text-accent" />
            <span>Bella Italia, Downtown</span>
          </div>
        </div>
        
        <!-- AI Analysis Result Card -->
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-11/12 z-10">
          <div class="card bg-base-100 shadow-lg">
            <div class="card-body p-4">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="card-title text-sm">Truffle Pasta</h3>
                  <p class="text-xs text-base-content/70">Bella Italia</p>
                </div>
                <div class="flex items-center gap-1">
                  <Star size={14} class="text-primary fill-primary" />
                  <span class="text-sm font-medium">4.5</span>
                </div>
              </div>
              <div class="flex gap-1 mt-2 flex-wrap items-center">
                <span class="badge badge-sm">Italian</span>
                <span class="badge badge-sm badge-outline">Main</span>
                <span class="text-lg">🍝</span>
              </div>
              <div class="flex justify-end mt-2">
                <div class="dropdown dropdown-bottom dropdown-end">
                  <button tabindex="0" class="btn btn-sm btn-ghost btn-circle">
                    <Edit3 size={16} class="text-base-content/70" />
                  </button>
                  <div tabindex="0" class="dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                    <p class="text-xs p-2">Edit dish details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Visual Separator -->
      <div class="h-16 bg-gradient-to-b from-base-200/50 to-base-100 relative z-0"></div>
      
      <!-- Chat Section -->
      <div class="flex-1 pb-4 px-4 flex flex-col">
        <div class="flex-1 overflow-y-auto flex flex-col gap-4 pt-4">
          <!-- AI Message - Initial -->
          <div class="chat chat-start">
            <div class="chat-image avatar bg-primary/20 w-8 h-8 flex items-center justify-center rounded-full">
              <Bot size={16} class="text-primary" />
            </div>
            <div class="chat-bubble bg-base-200 text-base-content">
              <p class="text-sm">I've analyzed your photo! It looks like a pasta dish with truffle. Is this correct?</p>
            </div>
          </div>
          
          <!-- User Response -->
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-8 h-8 rounded-full bg-secondary/20">
                <div class="text-xs flex items-center justify-center h-full font-medium text-secondary">You</div>
              </div>
            </div>
            <div class="chat-bubble bg-secondary text-secondary-content">
              <p class="text-sm">Yes, it's truffle pasta</p>
            </div>
          </div>
          
          <!-- AI Message - Follow up -->
          <div class="chat chat-start">
            <div class="chat-image avatar bg-primary/20 w-8 h-8 flex items-center justify-center rounded-full">
              <Bot size={16} class="text-primary" />
            </div>
            <div class="chat-bubble bg-base-200 text-base-content">
              <p class="text-sm">Tell me about your experience with this pasta! How was it?</p>
            </div>
          </div>
          
          <!-- User Response -->
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-8 h-8 rounded-full bg-secondary/20">
                <div class="text-xs flex items-center justify-center h-full font-medium text-secondary">You</div>
              </div>
            </div>
            <div class="chat-bubble bg-secondary text-secondary-content">
              <p class="text-sm">It was amazing! The pasta was perfectly al dente and the truffle flavor was rich without being overwhelming. I'd give it 4.5 stars. Definitely one of the best pasta dishes I've had in months.</p>
            </div>
          </div>
          
          <!-- AI Message - Follow up -->
          <div class="chat chat-start">
            <div class="chat-image avatar bg-primary/20 w-8 h-8 flex items-center justify-center rounded-full">
              <Bot size={16} class="text-primary" />
            </div>
            <div class="chat-bubble bg-base-200 text-base-content">
              <p class="text-sm">Sounds delicious! I've added your rating and notes. Would you like to add anything else about the experience?</p>
            </div>
          </div>
          
          <!-- Current typing indicator -->
          <div class="flex items-center gap-2 px-4 py-2">
            <div class="w-2 h-2 rounded-full bg-base-content/30 animate-pulse"></div>
            <div class="w-2 h-2 rounded-full bg-base-content/30 animate-pulse delay-75"></div>
            <div class="w-2 h-2 rounded-full bg-base-content/30 animate-pulse delay-150"></div>
          </div>
        </div>
        
        <!-- Chat Input -->
        <div class="mt-4 border-t border-base-300 pt-3">
          <div class="flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Perfect al dente texture, rich flavor..." 
              class="input input-bordered flex-1 text-sm"
            />
            <button class="btn btn-circle btn-primary">
              <Send size={18} class="text-primary-content" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</FeatureMockup>

<style>
  @keyframes pulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }
  
  .animate-pulse {
    animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .delay-75 {
    animation-delay: 0.2s;
  }
  
  .delay-150 {
    animation-delay: 0.4s;
  }
</style> 
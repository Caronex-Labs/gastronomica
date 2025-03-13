<script lang="ts">
  import Logo from './Logo.svelte';
  
  const currentYear = new Date().getFullYear();
</script>

<footer class="py-8 md:py-12 px-4 md:px-6 bg-base-200">
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-col items-center justify-center">
      <div class="mb-6 md:mb-8">
        <Logo />
      </div>
    </div>
    
    <div class="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-base-content/10 text-xs md:text-sm text-base-content/60 text-center">
      <p class="mb-2">© {currentYear} Gastronomica. All rights reserved.</p>
      <p>With ❤️ From <a href="https://www.adroitalliance.in" class="hover:text-accent transition-colors">Adroit Alliance</a> and <a href="https://www.caronexlabs.com" class="hover:text-accent transition-colors">CaronexLabs</a></p>
    </div>
  </div>
</footer>

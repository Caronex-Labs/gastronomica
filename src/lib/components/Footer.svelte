<script lang="ts">
  import Logo from './Logo.svelte';
  
  const currentYear = new Date().getFullYear();
</script>

<footer class="py-12 px-6 bg-base-200">
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-col items-center justify-center">
      <div class="mb-8">
        <Logo />
      </div>
    </div>
    
    <div class="mt-8 pt-8 border-t border-base-content/10 text-sm text-base-content/60 text-center">
     With ❤️ From <a href="https://www.adroitalliance.in">Adroit Alliance</a> and <a href="https://www.caronexlabs.com">CaronexLabs</a>  
    </div>
  </div>
</footer>

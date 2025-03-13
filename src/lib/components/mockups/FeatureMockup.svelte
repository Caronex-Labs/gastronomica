<script lang="ts">
  export let imageUrl: string = "";
  export let altText: string = "Feature mockup";
  export let featureType: string = "default";
</script>

<div class="mockup-phone">
  <div class="mockup-phone-camera"></div> 
  <div class="mockup-phone-display">
    <div class="artboard artboard-demo phone-1 flex items-center justify-center bg-base-100">
      {#if imageUrl}
        <img src={imageUrl} alt={altText} class="w-full h-auto" />
      {:else if $$slots.default}
        <slot></slot>
      {:else}
        <div class="flex flex-col items-center justify-center p-4 text-center h-full">
          <div class="text-xl font-bold mb-2">{featureType} Mockup</div>
          <p class="text-sm opacity-70">Placeholder for {featureType} feature</p>
        </div>
      {/if}
    </div>
  </div>
</div>

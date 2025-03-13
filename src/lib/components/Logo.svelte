<script lang="ts">
  export let showBadge = true;
  export let badgeText = "In-Dev";
  export let size = "default"; // Options: "small", "default", "large"
  
  // Determine text size based on the size prop
  let textSize = "text-xl"; // default size
  if (size === "small") {
    textSize = "text-lg";
  } else if (size === "large") {
    textSize = "text-2xl";
  }
</script>

<div class="flex items-center">
  <span class="{textSize} font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent via-secondary to-primary">
    Palete
  </span>
  {#if showBadge}
    <span class="ml-2 text-xs py-0.5 px-2 rounded-full bg-secondary text-secondary-content font-semibold">
      {badgeText}
    </span>
  {/if}
</div> 
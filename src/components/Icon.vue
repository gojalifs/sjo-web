<template>
  <svg v-if="name==='shield'" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 14.93V20h-2v-3.07A8.015 8.015 0 0 1 4.07 13H1v-2h3.07A8.015 8.015 0 0 1 11 4.07V1h2v3.07A8.015 8.015 0 0 1 19.93 11H23v2h-3.07A8.015 8.015 0 0 1 13 16.93Z"/>
  </svg>
  <svg v-else-if="name==='layers'" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
    <path d="M2 7h20v2H2zM4 11h16v2H4zM7 15h10v2H7z"/>
  </svg>
  <svg v-else-if="name==='user'" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
    <path d="M12 12a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5Zm0 2c-5.33 0-8 2.686-8 4v2h16v-2c0-1.314-2.67-4-8-4Z"/>
  </svg>
</template>
<script setup lang="ts">
defineProps<{ name: 'shield'|'layers'|'user' }>()
</script>

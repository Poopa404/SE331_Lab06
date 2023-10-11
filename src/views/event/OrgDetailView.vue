<script setup lang="ts">
import { type EventOrganizer } from '@/type'
import type { PropType } from 'vue'

defineProps({
  organizer: {
    type: Object as PropType<EventOrganizer>,
    require: true
  }
})
</script>
<template>
  <div v-if="organizer">
    <p>{{ organizer.name }}</p>
    <div class="flex flex-row flex-wrap justify-center">
      <img v-for="image in organizer.images" :key="image" :src="image" alt="organizer image"
        class="w-40 p-1 m-1 border-2 border-gray-200 border-solid rounded hover:shadow-lg"
      >
    </div>
  </div>
  
</template>

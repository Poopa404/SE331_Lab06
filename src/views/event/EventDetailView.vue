<script setup lang="ts">
import { type EventItem } from '@/type'
import type { PropType } from 'vue'

defineProps({
  event: {
    type: Object as PropType<EventItem>,
    require: true
  }
})
</script>
<template>
  <div v-if="event">
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
    <div class="flex flex-row flex-wrap justify-center">
      <img v-for="image in event.images" :key="image" :src="image" alt="events image"
        class="w-40 p-1 m-1 border-2 border-gray-200 border-solid rounded hover:shadow-lg"
      >
    </div>
  </div>
  
</template>

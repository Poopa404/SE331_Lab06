<script setup lang="ts">
import EventCatCard from '@/components/EventCatCard.vue'
import type { EventItem } from '@/type'

import { ref, type Ref } from 'vue'
import axios from 'axios'
const events: Ref<Array<EventItem>> = ref([])
axios.get<EventItem[]>('http://localhost:3004/events')
.then((response) =>{
  events.value = response.data
})
</script>

<template>
  <h1>Events For Good</h1>
  <main class="flex flex-col items-center">
    <EventCatCard v-for="event in events" :key="event.id" :event="event"></EventCatCard>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

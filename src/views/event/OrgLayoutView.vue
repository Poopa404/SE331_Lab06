<script setup lang="ts">
import { useOrganizerStore } from '@/stores/organizer'
import { storeToRefs } from 'pinia'
const store = useOrganizerStore()
const organizer = storeToRefs(store).organizer
console.log(organizer.value)
</script>
<template>
  <div v-if="organizer">
    <h1>{{ organizer.name }}</h1>
    <div id="nav">
      <RouterLink :to="{ name: 'organizer-detail' }">Details</RouterLink>
    </div>

    <RouterView :organizer="organizer"></RouterView>
  </div>
</template>

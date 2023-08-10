<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import type { EventItem } from '@/type'

import { ref, watchEffect, type Ref, computed } from 'vue'
import EventService from '@/services/EventService'
import type { AxiosResponse } from 'axios'

import NProgress from 'nprogress'
import { useRouter, onBeforeRouteUpdate } from 'vue-router'

const events: Ref<Array<EventItem>> = ref([])
const totalEvent = ref<number>(0)
const props = defineProps({
  limit: {
    type: Number,
    required: true
  },
  page: {
    type: Number,
    required: true
  }
})

const router = useRouter()

// eslint-disable-next-line vue/no-setup-props-destructure
EventService.getEvent(props.limit, props.page)
  .then((response: AxiosResponse<EventItem[]>) => {
    events.value = response.data
    totalEvent.value = response.headers['x-total-count']
  })
  .catch(() => {
    router.push({ name: 'network-error' })
  })

onBeforeRouteUpdate((to, from, next) => {
  const toPage = Number(to.query.page)
  // eslint-disable-next-line vue/no-setup-props-destructure
  EventService.getEvent(props.limit, toPage)
    .then((response: AxiosResponse<EventItem[]>) => {
      events.value = response.data
      totalEvent.value = response.headers['x-total-count']
      next()
    })
    .catch(() => {
      next({ name: 'network-error' })
    })
})

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvent.value / props.limit)
  return props.page.valueOf() < totalPages
})
</script>

<template>
  <h1>Events For Good</h1>
  <main class="flex flex-col items-center">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
    <div class="flex w-[290px]">
      <RouterLink
        :to="{ name: 'event-list', query: { limit: limit, page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        id="page-prev"
        class="flex-1 no-underline text-[#2c3e50] text-left"
      >
        Prev Page
      </RouterLink>
      <RouterLink
        :to="{ name: 'event-list', query: { limit: limit, page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        id="page-next"
        class="flex-1 no-underline text-[#2c3e50] text-right"
      >
        Next Page
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
</style>

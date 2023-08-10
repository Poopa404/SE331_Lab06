<script setup lang="ts">
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import type { EventItem } from '@/type'
import { useRouter } from 'vue-router';

const store = useEventStore()
const event = storeToRefs(store).event
const id = ref(event?.value?.id)

// const router = useRouter()
// eslint-disable-next-line vue/no-setup-props-destructure
// EventService.getEventById(Number(props.id))
// .then((response) => {
//     event.value = response.data
// })
// .catch(error => {
//     console.log(error)
//     if(error.response && error.response.status === 404){
//         router.push({ name: '404-resource', params: { resource: 'event' }})
//     } else {
//         router.push({ name: 'network-error' })
//     }
// })
</script>

<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <div id="nav" class="p-[30px]">
            <router-link :to="{ name: 'event-detail', params: { id } }" class="font-bold text-[#2c3e50]" active-class="text-[#42b983]">Details</router-link>
            |
            <router-link :to="{ name: 'event-register', params: { id } }" class="font-bold text-[#2c3e50]" active-class="text-[#42b983]">Register</router-link>
            |
            <router-link :to="{ name: 'event-edit', params: { id } }" class="font-bold text-[#2c3e50]" active-class="text-[#42b983]">Edit</router-link>
        </div>

        <RouterView :event="event"></RouterView>
    </div>
</template>
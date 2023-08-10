<script setup lang="ts">
import type { EventItem } from "@/type"
import type { PropType } from 'vue'
import { useRouter } from "vue-router"
import { useMessageStore } from '@/stores/message'

const store = useMessageStore()
const props = defineProps({
    event: {
        type: Object as PropType<EventItem>,
        require: true
    }
})
const router = useRouter()
function edit(){
    store.updateMessage(props.event?.title+' has been updated')
    setTimeout(() => {
        store.resetMessage()
    }, 3000);
    router.push({
        name: 'event-detail',
        params:{
            id: props.event?.id
        }
    })
}
</script>

<template>
    <p>Edit the event here</p>
    <button @click="edit" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-500 dark:focus:ring-green-800"
    >Edit Me</button>
</template>
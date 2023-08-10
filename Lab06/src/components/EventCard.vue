<template>
  <RouterLink class="text-[#2c3e50] no-underline" :to="{name: 'event-detail', params:{id: event?.id}}">
    <div class="p-[20px] cursor-pointer border-[1px] border-solid border-[#39495c] mb-[18px] hover:scale-[1.01] hover:shadow-[0_3px_12px_0_rgba(0,0,0,0.2)]">
      <div class="event-card">
        <span> @{{ event?.time }} on {{ event?.date }}</span>
        <h4>{{ event?.title }}</h4>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import type { EventItem } from '@/type'
import type { PropType } from 'vue'
const props = defineProps({
  event: {
    type: Object as PropType<EventItem>,
    require: true
  }
})
</script>

<!-- <style scoped>
.event-class {
  padding: 20px;
  widows: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-class:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link{
 color: #2c3e50;
 text-decoration: none;
}
</style> -->

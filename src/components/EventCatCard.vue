<template>
  <div class="text-right p-[20px] cursor-pointer border-[1px] border-solid border-[#39495c] mb-[18px] hover:scale-[1.01] hover:shadow-[0_3px_12px_0_rgba(0,0,0,0.2)]">
    <div class="event-cat-card">
      <h4>{{ event?.category }}</h4>
      <h4>{{ event?.organizer }}</h4>
    </div>
  </div>
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
.event-cat-class {
  padding: 20px;
  widows: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  text-align: right;
}
.event-cat-class:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style> -->

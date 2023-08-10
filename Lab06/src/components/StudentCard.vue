<template>
  <div class="p-[20px] cursor-pointer border-[1px] border-solid border-[#39495c] mb-[18px] hover:scale-[1.01] hover:shadow-[0_3px_12px_0_rgba(0,0,0,0.2)]">
    <div class="student-card">
      <span>{{ student?.name }} {{ student?.surname }}</span>
      <br>
      <span>{{ student?.gpa }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Student } from '@/type'
import type { PropType } from 'vue'
const props = defineProps({
  student: {
    type: Object as PropType<Student>,
    require: true
  }
})
</script>

<!-- <style scoped>
.student-class {
  padding: 20px;
  widows: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.student-class:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style> -->

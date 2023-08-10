<script setup lang="ts">
import StudentCard from '../components/StudentCard.vue'
import type { Student } from '@/type'

import { ref, type Ref } from 'vue';
import StudentService from '@/services/StudentService'

const students: Ref<Array<Student>> = ref([])
StudentService.getStudent().then((response) => {
  students.value = response.data
})
</script>

<template>
  <h1>Students</h1>
  <main class="flex flex-col items-center">
    <StudentCard v-for="student in students" :key="student.id" :student="student"></StudentCard>
  </main>
</template>

<style scoped>
</style>

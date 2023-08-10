<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia';
const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <header class="max-h-screen leading-normal">
    <h1>Poopa Somthawil</h1>
    <div class="animate-yellowFade" v-if="message">
      <h4 class="text-[20px]">{{ message }}</h4>
    </div>
    <nav class="p-[30px]">
      <!-- 1.11 -->
      <RouterLink :to="{name: 'event-list'}" class="font-bold text-[#2c3e50]" active-class="text-[#42b983]">Home</RouterLink>
      <RouterLink :to="{name: 'about'}" class="font-bold text-[#2c3e50]" active-class="text-[#42b983]">About</RouterLink>
      <RouterLink :to="{name: 'new'}" class="font-bold text-[#2c3e50]" active-class="text-[#42b983]">New</RouterLink>
      <RouterLink :to="{name: 'student'}" class="font-bold text-[#2c3e50]" active-class="text-[#42b983]">Student</RouterLink>
    </nav>
  </header>

  <RouterView/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
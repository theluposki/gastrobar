<script setup>
import AsideM from './Aside.vue';
import SectionM from './Section.vue'
</script>

<template>
  <main class="main">
    <AsideM />
    <SectionM />
  </main>
</template>

<style scoped>
.main {
  display: flex;
  gap: 8px;
  padding: 8px;
  min-height: calc(100vh - 68px);
  background-color: transparent;
}
</style>

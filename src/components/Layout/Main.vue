<script setup>
import { computed } from "vue";
import { useLayoutStore } from "../../stores/Layout.js";

import AsideM from "./Aside.vue";
import SectionM from "./Section.vue";

const storeLayout = useLayoutStore();

const activeAside = computed(() => storeLayout.activeAside);
</script>

<template>
  <main class="main">
    <transition
      enter-active-class="animate__animated animate__slideInLeft"
      leave-active-class="animate__animated animate__slideOutLeft"
      mode="out-in"
    >
      <AsideM v-if="activeAside" />
    </transition>
    <SectionM />
  </main>
</template>

<style scoped>
.animate__animated.animate__slideInLeft {
  --animate-duration: 0.3s;
}
.animate__animated.animate__slideOutLeft {
  --animate-duration: 0.3s;
}
.main {
  display: flex;
  gap: 8px;
  padding: 8px;
  min-height: calc(100vh - 68px);
  background-color: transparent;
}
</style>

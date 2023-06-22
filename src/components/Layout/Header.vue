<script setup>
import { computed } from 'vue';
import { useLayoutStore } from '../../stores/Layout.js';

const storeLayout = useLayoutStore()

const activeAside = computed(() => storeLayout.activeAside)
</script>

<template>
  <header class="header">
    <div class="left">
      <div class="btn" @click="storeLayout.fnActiveAside">
        <i class='bx bx-menu' v-if="!activeAside"></i>
        <i class='bx bx-x' v-if="activeAside"></i>
      </div>
      <div class="logo">
        <span class="title">Gastrobar</span>
      </div>
    </div>

    <div class="right">
      <div class="btn">
        <i class='bx bx-cart'></i>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  min-height: 50px;
  background-color: var(--palette-1-3);
  color: var(--palette-2);
  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 8px 8px;
  margin: 0 8px;
}

.header i {
  font-size: 3.5rem;
  filter: drop-shadow(2px 2px 1px var(--palette-2));
  color: var(--palette-3);
}

.left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.btn:hover {
  animation: rubberBand;
  animation-duration: 1.5s;
}

.btn:active {
  scale: 0.9;
}

.logo {
  display: flex;
  align-items: center;
}

.logo > .title {
  color: var(--palette-3);
  font-size: 3rem;
  filter: drop-shadow(2px 2px 1px var(--palette-2));
  font-family: 'Kablammo', cursive;
  user-select: none;
}
</style>

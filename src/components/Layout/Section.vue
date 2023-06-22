<script setup>

</script>

<template>
  <section class="section">
    <router-view v-slot="{ Component }">
      <transition 
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
        mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<style scoped>
.section {
  background-color: var(--palette-4);
  width: 100%;
  min-height: calc(100vh - 68px);
  box-shadow: 0 0 3px var(--palette-2-3);
  border-radius: 4px;
  overflow: hidden;
}

.animate__animated.animate__fadeIn {
  --animate-duration: 0.5s;
}
.animate__animated.animate__fadeOut{
  --animate-duration: 0.5s;
}
</style>

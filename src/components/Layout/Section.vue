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
  flex: 1;
  width: 100%;
  min-height: calc(100vh - 80px);
  max-height: calc(100vh - 80px);
  border-radius: 4px;
  overflow: hidden;
  transition: all ease .4s;
  z-index: 2;
}

.animate__animated.animate__fadeIn {
  --animate-duration: 0.5s;
}
.animate__animated.animate__fadeOut{
  --animate-duration: 0.5s;
}
</style>

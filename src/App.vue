<script setup>
import HeaderM from "./components/Layout/Header.vue";
import MainM from "./components/Layout/Main.vue";

</script>

<template>
  <div>
    <HeaderM />
    <div class="retangle"></div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#252728"
        fill-opacity="1"
        d="M0,192L120,213.3C240,235,480,277,720,250.7C960,224,1200,128,1320,80L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
      ></path>
    </svg>
    <MainM />
  </div>
</template>

<style scoped>
.retangle {
  max-width: var(--width-layout);
  width: 100%;
  position: absolute;
  min-height: 140px;
  background-color: var(--palette-0-2);
  z-index: 1;
}

svg {
  max-width: var(--width-layout);
  position: absolute;
  top: 220px;
  z-index: 1;
}
</style>

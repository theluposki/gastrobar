<script setup>
import { computed } from "vue";
import { useLayoutStore } from "../../stores/Layout.js";

const storeLayout = useLayoutStore();

const activeAside = computed(() => storeLayout.activeAside);

function toggleFullscreen() {
  if (
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement
  ) {
    // O documento está em modo de tela cheia, solicita a saída do modo de tela cheia
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      // Chrome, Safari e Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // Internet Explorer/Edge
      document.msExitFullscreen();
    }
  } else {
    // O documento não está em modo de tela cheia, solicita a entrada no modo de tela cheia
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      // Chrome, Safari e Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      // Internet Explorer/Edge
      document.documentElement.msRequestFullscreen();
    }
  }
}
</script>

<template>
  <header class="header">
    <div class="left">
      <div class="btn" @click="storeLayout.fnActiveAside">
        <i class="bx bx-menu" v-if="!activeAside"></i>
        <i class="bx bx-x" v-if="activeAside"></i>
      </div>
    </div>

    <div class="logo" @click="toggleFullscreen">
      <span class="title">Gastrobar</span>
    </div>

    <div class="right">
      <div class="btn">
        <i class="bx bx-cart"></i>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  min-height: 80px;
  background-color: var(--palette-0-2);
  color: var(--palette-0-3);
  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header i {
  font-size: 3.5rem;
  color: var(--palette-0-4);
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
  cursor: pointer;
}

.logo:hover {
  animation: rubberBand;
  animation-duration: 1.5s;
}

.logo > .title {
  color: var(--palette-3);
  font-size: 3rem;
  filter: drop-shadow(-4px 4px 1px var(--palette-0-5));
  font-family: "Kablammo", cursive;
  user-select: none;
}
</style>

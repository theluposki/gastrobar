<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const { push, currentRoute } = useRouter();

const pathname = computed(() => currentRoute.value.fullPath);

const setLink = (link) => push(link);
</script>

<template>
  <aside class="aside">
    <nav class="nav">
      <a
        href="#"
        @click.prevent="setLink('/')"
        :class="pathname === '/' ? 'nav-link active' : 'nav-link'"
      >
        <i class="bx bxs-store"></i>
        <span> Promoções </span>
      </a>
      <a
        href="#"
        @click.prevent="setLink('/especiais-da-casa')"
        :class="
          pathname === '/especiais-da-casa' ? 'nav-link active' : 'nav-link'
        "
      >
        <i class="bx bx-bowl-hot"></i>
        <span> Especiais da casa </span>
      </a>
      <a
        href="#"
        @click.prevent="setLink('/bebidas')"
        :class="pathname === '/bebidas' ? 'nav-link active' : 'nav-link'"
      >
        <i class="bx bxs-drink"></i>
        <span> Bebidas </span>
      </a>
      <a
        href="#"
        @click.prevent="setLink('/porcoes')"
        :class="pathname === '/porcoes' ? 'nav-link active' : 'nav-link'"
      >
        <i class="bx bx-bowl-rice"></i>
        <span> Porções </span>
      </a>
      <a
        href="#"
        @click.prevent="setLink('/pratos-infatis')"
        :class="pathname === '/pratos-infatis' ? 'nav-link active' : 'nav-link'"
      >
        <i class="bx bx-baguette"></i>
        <span> Pratos Infantis </span>
      </a>
      <a
        href="#"
        @click.prevent="setLink('/sobremesas')"
        :class="pathname === '/sobremesas' ? 'nav-link active' : 'nav-link'"
      >
        <i class="bx bx-popsicle"></i>
        <span> Sobremesas </span>
      </a>
    </nav>
  </aside>
</template>

<style scoped>
.aside {
  background-color: var(--palette-1-3);
  background-color: transparent;
  min-width: var(--width-aside);
  max-width: var(--width-aside);
  min-height: calc(100vh - 68px);
  /* box-shadow: 0 0 3px var(--palette-2-3); */
  border-radius: 4px;
  /* overflow: hidden; */
  /* padding: 20px 0; */
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.nav-link {
  min-height: 55px;
  background-color: var(--palette-2);
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 0 16px;
  box-shadow: 0 0 1px var(--palette-2);
  border-radius: 4px;
}

.nav-link:hover {
  animation: headShake;
  animation-duration: 2s;
}

.nav-link i {
  font-size: 2.6rem;
  color: var(--palette-3-2);
  filter: drop-shadow(-1px 1px 1px var(--palette-2-3));
}

.nav-link span {
  color: var(--palette-3-1);
  /* filter: drop-shadow(0 1px 1px var(--palette-3-2)); */
  font-weight: 600;
  font-size: 1.4rem;
  text-transform: uppercase;

  display: flex;
  align-items: center;
}

.active {
  background-color: var(--palette-1-3);
}

.active > span {
  color: var(--palette-2);
}

.active > i {
  color: var(--palette-2);
  filter: drop-shadow(-1px 1px 1px var(--palette-3-3));
}
</style>

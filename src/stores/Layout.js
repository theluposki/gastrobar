import { defineStore } from "pinia";
import { ref, onMounted } from "vue";

export const useLayoutStore = defineStore("layout", () => {
  const activeAside = ref(false);

  const fnActiveAside = () => {
    if (activeAside.value) {
      activeAside.value = false;
    } else {
      activeAside.value = true;
    }
  };

  return {
    activeAside,
    fnActiveAside
  };
});

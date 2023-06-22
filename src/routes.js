import { createRouter, createWebHashHistory } from 'vue-router'

import Promocoes from './views/Promoções.vue'
import EspeciaisDaCasa from './views/Especiais-da-casa.vue'
import Bebidas from './views/Bebidas.vue'
import Porcoes from './views/Porções.vue'
import PratosInfantis from './views/Pratos-infantis.vue'
import Sobremesas from './views/Sobremesas.vue'
import NotFound from './views/NotFound.vue'


const routes = [
  { path: '/:pathMatch(.*)*', component: NotFound },
  { path: '/', component: Promocoes },
  { path: '/especiais-da-casa', component: EspeciaisDaCasa },
  { path: '/bebidas', component: Bebidas },
  { path: '/porcoes', component: Porcoes },
  { path: '/pratos-infatis', component: PratosInfantis },
  { path: '/sobremesas', component: Sobremesas },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

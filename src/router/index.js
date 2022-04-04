import { createRouter, createWebHistory } from 'vue-router';
import itemRoute from '@/router/item';

const finalRoute = [].concat(itemRoute);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: finalRoute,
});

export default router;

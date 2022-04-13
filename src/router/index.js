import { createRouter, createWebHistory } from 'vue-router';
import IntroRoute from '@/router/routes/intro';
import itemRoute from '@/router/item';

const finalRoute = [].concat(itemRoute, IntroRoute);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: finalRoute,
});

export default router;

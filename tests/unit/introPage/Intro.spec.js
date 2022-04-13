import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import IntroPage from '@/views/Intro.vue';

import IntroRoute from '@/router/routes/intro';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [].concat(IntroRoute),
});

describe('IntroPage', () => {
  const wrapper = mount(IntroPage, {
    global: {
      plugins: [router],
    },
  });
  it('renders IntroPage', () => {
    expect(wrapper.find('[data-test="intro-page"]').exists()).toBe(true);
  });
});

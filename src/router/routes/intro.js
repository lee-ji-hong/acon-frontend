import Header from '@/components/layouts/Header.vue';
import Nav from '@/components/layouts/Nav.vue';

import IntroPage from '@/views/Intro.vue';

export default [
  {
    path: '/intro',
    name: 'Intro',
    components: {
      header: Header,
      nav: Nav,
      main: IntroPage,
    },
  },
];

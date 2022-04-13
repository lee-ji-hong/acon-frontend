import Header from '@/components/layouts/Header.vue';
import Nav from '@/components/layouts/Nav.vue';

import mainPage from '@/views/Home.vue';

export default [
  {
    path: '/',
    name: 'Home',
    components: {
      header: Header,
      nav: Nav,
      main: mainPage,
    },
  },
];

<template>
  <Header />
  <Nav />
  <div id="content" class="content">
    <router-view />
  </div>
</template>

<script>
import Header from './components/layouts/Header.vue';
import Nav from './components/layouts/Nav.vue';

export default {
  name: 'App',
  components: {
    Header,
    Nav,
  },
};
</script>

<style></style>

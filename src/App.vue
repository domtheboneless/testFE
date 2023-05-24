<template>
  <Menu></Menu>
  <Welcome></Welcome>
</template>

<script>

import Menu from './components/Menu.vue'
import Welcome from './components/Welcome.vue'
export default {
  name: 'App',
  components: {
    Menu,
    Welcome
  }
}
</script>

<style>
#app {
  font-family: 'Nunito';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: hidden; /* Hide scrollbars */

}
</style>

<template>
  <div id="app">
    <app-aside />
    <router-view />
  </div>
</template>

<script>
import AppAside from './views/layout/AppAside.vue'
export default {
  name: 'App',
  components: {
    AppAside
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
  <div class="hambuerger-container" @click="toggleClick" id="hambuerger">
    <svg-icon :icon="icon"></svg-icon>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const toggleClick = () => {
  store.commit('app/changeSibarType')
}

const icon = computed(() => {
  return store.getters.sidebarType ? 'hamburger-opened' : 'hamburger-closed'
})
</script>

<style scoped>
.hambuerger-container {
  margin-right: 16px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>

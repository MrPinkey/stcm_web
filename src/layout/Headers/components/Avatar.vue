<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="50" :src="squareUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const squareUrl = ref(
  'https://img0.baidu.com/it/u=3393630849,3622690478&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666'
)
const store = useStore()
const logout = () => {
  store.dispatch('app/logout')
}
</script>

<style scoped lang="scss"></style>

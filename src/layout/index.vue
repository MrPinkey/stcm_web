<template>
  <el-container class="app-wrapper">
    <el-aside
      :width="$store.getters.sidebarType ? '210px' : '67px'"
      class="sidebar-container"
    >
      <Menu />
    </el-aside>
    <el-container
      class="container"
      :class="{ hidderContainer: !$store.getters.sidebarType }"
    >
      <el-header><Headers /></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Menu from './Menu'
import Headers from './Headers'
// import { computed } from 'vue'
// import { useStore } from 'vuex'
// import { sideBarWidth, hideSideBarWidth } from '@/styles/variables.scss'
// const store = useStore()
// const asideWidth = computed(() => {
//   return store.getters.siderType ? sideBarWidth : hideSideBarWidth
// })
</script>

<style lang="scss" scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
/**
 *也可以使用下面的方式动态绑定
 */
// .sidebar-container {
//   width: $sideBarWidth;
// }

// 计算 .container 的宽度 ，应该使用变量的值，而不是变量的名称
// 使用calc(100% - $sideBarWidth) 表达式时，需要在变量前面加上#{}，否则效果不生效
.container {
  width: calc(100% - #{$sideBarWidth});
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - #{$hideSideBarWidth});
  }
}
::v-deep .el-header {
  padding: 0;
}
</style>

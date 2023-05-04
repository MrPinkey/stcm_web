<template>
  <h5 class="mb-2">STCM</h5>
  <el-menu default-active="2" class="el-menu-vertical">
    <el-menu-item index="1">
      <template #title>
        <router-link to="/home">主页</router-link>
      </template>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/about">会员</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/member">定制</router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link to="/chat">聊天</router-link>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.el-menu-vertical {
  width: 200px;
  text-align: center;
}
</style>

<script>
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import { ElMenu, ElMenuItem } from 'element-plus'

export default defineComponent({
  name: 'AppAside',

  components: { ElMenu, ElMenuItem },

  setup() {
    const route = useRoute()
    const isCollapse = ref(false)

    return { route, isCollapse }
  }
})
</script>

<template>
  <!-- 动态绑定全局样式时， :background-color="$menuBg"，这种方式不会生效，需要将$menuBg转换为string类型-->
  <el-menu
    active-text-color="#ff8c00"
    hover-background-color="#f5f5f5"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    router
    unique-opened
    :collapse="!$store.getters.sidebarType"
  >
    <el-sub-menu
      :index="item.id"
      v-for="(item, index) in menusList"
      :key="item.id"
    >
      <template #title>
        <el-icon>
          <component :is="iconList[index]"></component>
        </el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
        :index="'/' + it.path"
        v-for="it in item.children"
        :key="it.id"
        ><template #title>
          <el-icon>
            <component :is="icon"></component>
          </el-icon>
          <span>{{ $t(`menus.${it.path}`) }}</span>
        </template></el-menu-item
      >
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { menuList } from '@/api/menu'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
/**
 * vue.config.js中已经全局引入了scss文件，再使用下面导入会报循环导入
 * import variables from '@/styles/variables.scss'
 */

const menusList = ref([])
const initMenuList = async () => {
  menusList.value = await menuList()
}
initMenuList()

// 动态绑定菜单的index，即页面刷新前后一样
const $route = useRoute()
const activeIndex = computed(() => {
  return $route.path || '/shortGame'
})
const defaultActive = ref(activeIndex.value || '/shortGame')

const iconList = ref(['user', 'setting', 'shop', 'tickets', 'pie-chart'])
const icon = ref('menu')
</script>

<style lang="scss" scoped></style>

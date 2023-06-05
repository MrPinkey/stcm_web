import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
import SvgIcons from '@/icons'
import '@/router/permission'
import * as ELIcons from '@element-plus/icons-vue'
import i18n from '@/i18n'

const app = createApp(App)
// icon图标作为全局组件（仅是避免在单个文件中逐个引入），并不推荐
for (const iconName in ELIcons) {
  app.component(iconName, ELIcons[iconName])
}
SvgIcons(app)
app.use(store)
app.use(router).use(ElementPlus).use(i18n).mount('#app')

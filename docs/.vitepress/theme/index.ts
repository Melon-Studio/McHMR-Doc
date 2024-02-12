import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/vars.css'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const theme: Theme = {
    ...DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
        })
    },
}
export default {
    ...theme,
    enhanceApp({ app }) {
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
        app.use(ElementPlus)
    }
}

import { h } from 'vue'
import { useData } from "vitepress/client"
import { useRoute } from "vitepress/client"
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from "vitepress/client"

import FooterMessage from './components/FooterMessage.vue'
import vitepressNprogress from '@andatoshiki/vitepress-plugin-nprogress'
import imageViewer from 'vitepress-plugin-image-viewer'
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue'
import codeblocksFold from 'vitepress-plugin-codeblocks-fold'
import { NolebaseInlineLinkPreviewPlugin } from '@nolebase/vitepress-plugin-inline-link-preview/client'
import { NolebaseEnhancedReadabilitiesMenu, NolebaseEnhancedReadabilitiesScreenMenu } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import { NolebaseUnlazyImg } from '@nolebase/vitepress-plugin-thumbnail-hash/client'

import './styles/vars.css'
import 'element-plus/dist/index.css'
import 'viewerjs/dist/viewer.min.css'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'
import '@nolebase/vitepress-plugin-thumbnail-hash/client/style.css'
import '@andatoshiki/vitepress-plugin-nprogress/lib/css/index.css'
import 'vitepress-plugin-codeblocks-fold/style/index.css'
const theme: Theme = {
    ...DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
            'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
            'home-features-after': () => h(FooterMessage),
        })
    },
    enhanceApp(ctx: EnhanceAppContext) {
        ctx.app.use(NolebaseInlineLinkPreviewPlugin)
        ctx.app.use(NolebaseGitChangelogPlugin)
        ctx.app.component('NolebaseUnlazyImg', NolebaseUnlazyImg)
        vitepressNprogress(ctx)
        ctx.app.component("vImageViewer", vImageViewer)
    },
    setup(): void {
        const { frontmatter } = useData()
        const route = useRoute()
        imageViewer(route)
        codeblocksFold({ route, frontmatter }, true, 400)
    }
}
export default theme

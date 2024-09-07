import { defineConfig } from 'vitepress'
import { sharedConfig } from './shared'
import markdownitConfig from './markdown-it'
import themeConfig from './themeConfig'
import viteConfig from './vite'

export default defineConfig({
    ...sharedConfig,
    markdown: markdownitConfig,
    themeConfig: themeConfig,
    vite: viteConfig
})


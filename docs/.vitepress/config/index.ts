import { defineConfig } from 'vitepress'
import { sharedConfig } from './shared'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'

export default defineConfig({
    ...sharedConfig,
    vite: {
        plugins: [pagefindPlugin()],
    }
})
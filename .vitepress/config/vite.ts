import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite'
import { ThumbnailHashImages } from '@nolebase/vitepress-plugin-thumbnail-hash/vite'

const viteConfg = {
    optimizeDeps: {
        exclude: [
            '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        ],
    },
    ssr: {
        noExternal: [
            '@nolebase/vitepress-plugin-enhanced-readabilities',
            'vitepress-plugin-nprogress',
            '@nolebase/vitepress-plugin-inline-link-preview'
        ],
    },

    plugins: [
        GitChangelog({
            repoURL: () => 'https://github.com/Melon-Studio/McHMR-Doc',
        }),
        GitChangelogMarkdownSection(),
        ThumbnailHashImages(), 
    ],
}

export default viteConfg
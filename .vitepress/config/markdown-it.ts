import type { MarkdownOptions } from "vitepress"
import { InlineLinkPreviewElementTransform } from "@nolebase/vitepress-plugin-inline-link-preview/markdown-it"
import { UnlazyImages } from '@nolebase/markdown-it-unlazy-img'
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links'

const markdownitConfig: MarkdownOptions = {
    image: {
        lazyLoading: true
    },
    theme: {
        dark: 'dracula-soft',
        light: 'vitesse-light',
    },
    lineNumbers: true,
    config: (md) => {
        md.use(InlineLinkPreviewElementTransform)
        md.use(UnlazyImages(), {
            imgElementTag: 'NolebaseUnlazyImg',
        })
        md.use(BiDirectionalLinks()) 
    },
}

export default markdownitConfig
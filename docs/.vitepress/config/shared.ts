import { defineConfig } from 'vitepress'

export const sharedConfig = defineConfig({
    title: 'McHMR',
    description: 'Minecraft 服务器客户端热更新解决方案',
    appearance: 'dark',

    sitemap: {
        hostname: 'https://doc.dooper.top'
    },

    lastUpdated: true,

    markdown: {
        theme: {
            dark: 'dracula-soft',
            light: 'vitesse-light',
        },
        image: {
            lazyLoading: true
        }
    },

    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
        ['meta', { name: 'keywords', content: 'Minecraft,我的世界,我的世界服务器,MC,麦块,MCBBS,我的世界客户端,热更新,自动更新,服主,腐竹' }],

        
        ['script', { async: 'async', src: 'https://www.googletagmanager.com/gtag/js?id=G-NML2HM7B6Z' }],
        ['script', {},
            `window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-NML2HM7B6Z');
         `
        ],
        ['script', {},
            `
         var _hmt = _hmt || [];
          (function () {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?958132d2cbb7c1c3cca0de478ed0a165";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
          })();
         `
        ],
        ['script', { async: 'async', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8805772686644245', crossorigin: 'anonymous' }]
    ],

    themeConfig: {
        logo: '/logo.svg',
        
        outline: [2, 3],

        nav: [
            {
                text: '指南',
                link: '/docs/guide/what-is-mchmr',
            },
            {
                text: '赞助名单',
                link: '/sponsors',
            }
        ],

        socialLinks: [
            {
                icon: {
                    svg: '<svg t="1707404686239" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8125" width="32" height="32"><path d="M390 489.68c-7.3-2.62-13.9-4-17.86-2.84a49.34 49.34 0 0 0 7.78 10.24z" fill="#9396A2" p-id="8126"></path><path d="M845.08 658.82c-8.86-5.56-18.34-6.28-33.42-3.52-0.7 0.12-1.38 0-2 0a7.64 7.64 0 0 1-1.18 0c-22 1.74-39.88-18.74-43.36-23.1a17.1 17.1 0 0 1 2.74-24 17.3 17.3 0 0 1 24 2.72 46 46 0 0 0 7.4 7.1c21.58-47.2 35.18-101.52-2.54-156.64-61.38-89.74-145.84-134.44-258.22-136.66-34-0.66-74.54 0.94-117.58 2.62-99.84 4-170.66 5.48-210.48-6.76-0.42 0-0.82-0.3-1.26-0.44-11.46-3.66-20.46-8.48-26.54-14.86a17.08 17.08 0 0 1 24.68-23.6 20.44 20.44 0 0 0 3 2.2c15.06-13.2 37.48-24.36 58-34.34l6.76-3.28a269.88 269.88 0 0 0-63.84 15.72c-30.16 11.52-44 23.62-47.04 31.1-12.78 32 44.92 60.52 70.36 71.28 35.48 15 145.38 36 192.92 40.7 30 2.94 48.7 12 59.52 19.18 32-20.26 57.08-35.16 64.48-39.5 7.66-5.3 18.58-2 23.36 6a17.1 17.1 0 0 1-6 23.4c-91.5 53.86-234.74 148.82-254.58 190.04-6.92 15.82-10.2 44.96 4.24 73.26 20 39.16 69.16 68.32 142.2 84.28 162 35.44 276.74-36.46 302.84-72.6a37.08 37.08 0 0 1-7.02-6.66A17.08 17.08 0 0 1 783.8 662c3.44 4.18 21.52 9.68 32.34 12.98 5.84 1.8 11.7 3.6 17.12 5.52 8 2.78 16.74 2.62 22.8-0.42a10 10 0 0 0 5.38-5.64c1.16-3.8-4.62-8.2-16.36-15.62zM416 616a18.16 18.16 0 1 1 18.16-18.18A18.16 18.16 0 0 1 416 616z m171.24 54.48a18.16 18.16 0 1 1 18.16-18.18 18.16 18.16 0 0 1-18.16 18.14z" fill="#9396A2" p-id="8127"></path><path d="M870.4 0H153.6A153.58 153.58 0 0 0 0 153.6v716.8A153.58 153.58 0 0 0 153.6 1024h716.8a153.58 153.58 0 0 0 153.6-153.6V153.6A153.58 153.58 0 0 0 870.4 0z m23.72 684.44A43.68 43.68 0 0 1 872.26 710l-0.8 0.42c-14.24 7.18-32.74 8-49.46 2.16-5.06-1.8-10.46-3.44-15.86-5.08l-11.38-3.6c-12.12 19.7-37.08 41.78-72.24 60.28-63.14 33.24-158.6 54.96-269.12 30.84-84.58-18.5-140.2-52.88-165.34-102.18-19.84-38.84-15.5-78.66-4.88-102.98 9.52-19.8 36.38-45.48 69.6-72-8.4-9.72-15.88-21.76-15.56-34a30 30 0 0 1 14-24.52c22.56-15.38 52.76-2.96 71.24 7.56 10.64-7.28 21.24-14.42 31.56-21.2a117.18 117.18 0 0 0-29.82-6.54c-45-4.46-161.6-25.8-202.9-43.28-100.36-42.44-98.72-90.46-88.8-115.34C150 236.4 248 210.2 293.26 211.22c21.54 0.48 34.64 7.12 39.04 19.74 8.38 21.62-16.96 33.8-49.12 49.46-8.42 4-18.12 8.82-27.24 13.76 45.74 3.78 113.02 1.16 163.58-0.84 43.54-1.74 84.68-3.36 119.58-2.68 122.54 2.44 218.7 53.34 285.78 151.54 43.84 64.14 30.96 128.7 10.72 178a59.5 59.5 0 0 1 26 8.62c15.6 9.84 41.62 26.14 32.52 55.62z" fill="#9396A2" p-id="8128"></path></svg>'
                },
                link: 'https://afdian.net/a/Melon_Studio'
            },
            {
                icon: {
                    svg: '<svg t="1707404275090" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4218" width="32" height="32"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="4219"></path></svg>'
                },
                link: 'https://qm.qq.com/cgi-bin/qm/qr?k=A_zkSI464wjDmtYh0k8fNvNODkDG5T1R&jump_from=webapi&authKey=/fppJC1dovfzCB9ZxGLSZ1rBVfJhw0cPYn0Cdn5iqspkFufvWdHZEUt6S31QAgL7'
            },
            {
                icon: 'github',
                link: 'https://github.com/Melon-Studio/McHMR-Doc'
            }
        ],

        sidebar: [
            {
                text: '简介',
                items: [
                    { text: '什么是 McHMR？', link: '/docs/guide/what-is-mchmr.md' },
                    { text: '快速上手', link: '/docs/guide/start.md'}
                ]
            },
            {
                text: '开放 API',
                items: [
                    { text: '简介', link: '/docs/apis/start.md' },
                    { text: '身份验证 API', link: '/docs/apis/token.md' },
                    { text: '更新服务 API', link: '/docs/apis/update.md' },
                    { text: '启动器相关 API', link: '/docs/apis/launcher.md' }
                ]
            },
            {
                text: '贡献代码',
                items: [
                    { text: '为开源的 McHMR 贡献你的代码', link: '/docs/contribution/standard.md' },
                    { text: '提交你的第一个 pull request', link: '/docs/contribution/submitting-your-first-pull-request.md' }
                ]
            },
            {
                text: '其他',
                items: [
                    { text: '赞助名单', link: '/sponsors' },
                    { text: '用户协议', link: '/docs/other/user-agreement' }
                ]
            }
        ],

        editLink: {
            pattern: 'https://github.com/Melon-Studio/McHMR-Doc/tree/main/docs/:path',
            text: '内容有问题？去编辑',
        },

        outlineTitle: "页面导航",

        lastUpdatedText: "最后更新于",

        docFooter: {
            prev: '上一页',
            next: '下一页'
        }
    },
})

import { defineConfig } from 'vitepress'

export const sharedConfig = defineConfig({
    title: 'McHMR',
    description: 'Minecraft 服务器客户端自动更新解决方案',
    cleanUrls: true,
    lang: "zh-CN",
    lastUpdated: true,
    srcDir: ".",

    sitemap: {
        hostname: 'https://doc.dooper.top'
    },

    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
        ['meta', { name: 'keywords', content: 'Minecraft,我的世界,我的世界服务器,MC,麦块,MCBBS,我的世界客户端,自动更新,热更新,服主,腐竹' }],


        ['script', { async: 'async', src: 'https://www.googletagmanager.com/gtag/js?id=G-NML2HM7B6Z' }],
        ['script', {},
            `
                window.dataLayer = window.dataLayer || [];
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
        ['script', { type: 'text/javascript' },
            `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "nh2v277y19");
            `
        ]
    ]
})

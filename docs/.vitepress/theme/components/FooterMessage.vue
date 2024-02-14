<template>
    <footer class="VPFooter">
        <div class="container">
            <div class="message">
                <p style="display:flex;align-items:center;justify-content:center;"><a href="https://beian.miit.gov.cn/"
                        target="_blank" style="margin:0 5px; text-decoration: underline">陇ICP备2022000263号</a>|<img src="../../../public/logo01.png"
                        style="display:inline-block;width:20px;height:20px;margin:0 5px" />甘公网安备62011102000239号</p>
                <p>Minecraft 商标归 Mojang Synergies AB 所有，本站与其没有从属关系</p>
                <p>本工作室提供的软件等服务均与 Mojang Synergies AB 旗下的 Minecraft 游戏相关，合理遵守其商标使用<a
                        href="https://www.minecraft.net/zh-hans/usage-guidelines" target="_blank" style="text-decoration: underline">规定</a>，与中国网易公司无关
                </p>
            </div>
            <p class="copyright">Copyright © 2022-present Melon-Studio All Rights Reserved.</p>
        </div>
    </footer>
</template>

<style>
@media (min-width: 768px) {
    .VPFooter {
        padding: 32px;
    }
}

.VPFooter {
    position: relative;
    z-index: var(--vp-z-index-footer);
    border-top: 1px solid var(--vp-c-gutter);
    padding: 32px 24px;
    background-color: var(--vp-c-bg);
    margin-top: 120px;
}

.VPFooter .container {
    margin: 0 auto;
    max-width: var(--vp-layout-max-width);
    text-align: center;
}

.VPFooter .container .message,
.copyright {
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-2);
}
</style>
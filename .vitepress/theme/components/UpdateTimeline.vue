<template>
    <div>
        <h2 style="text-align: center;">🗓️ 更新时间轴 🗓️</h2>
        <div class="block">
            <el-timeline>
                <el-timeline-item timestamp="2024/08/10" placement="top">
                    <el-card>
                        <h4>公测包 1.0.2 发布</h4>
                        <blockquote>优化重复 IP 获取 Token 的提示</blockquote>
                        <blockquote>优化选择启动器时自动打开的文件夹为当前程序运行目录</blockquote>
                        <blockquote>修复更新器自动切换深色模式异常</blockquote>
                        <blockquote>修复 .minecraft 文件夹拼写错误</blockquote>
                        <blockquote>修复无法生成 API 的问题*</blockquote>
                        <blockquote>*注意：1.0.2 公测包中已携带 SQL 修复文件，请按照文件内文档指示操作</blockquote>
                        <p>下载地址：<a href="https://xiaofans.lanzouq.com/iBWbE2728akf" target="_blank">点击下载</a></p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2024/08/05" placement="top">
                    <el-card>
                        <h4>公测包 1.0.1 发布</h4>
                        <blockquote>修复 API 生成多 HTTP 协议头问题</blockquote>
                        <blockquote>修复更新器在更新只有删除文件的版本时的 ZIP 文件未找到错误</blockquote>
                        <blockquote>新增更新器在更新时自动移除空白文件夹功能</blockquote>
                        <blockquote>新增自动检测 .minecraft 文件夹</blockquote>
                        <blockquote>优化异常处理，优化部分代码逻辑</blockquote>
                        <p>下载地址：<a href="https://xiaofans.lanzouq.com/itYFx26khccf" target="_blank">点击下载</a></p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2024/08/01" placement="top">
                    <el-card>
                        <h4>公测包 1.0.0 发布</h4>
                        <blockquote>初代版本发布</blockquote>
                        <p>下载地址：<a href="https://xiaofans.lanzouq.com/if8HU264jqve" target="_blank">点击下载</a></p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>

<style>
.el-card {
    border-radius: var(--el-card-border-radius);
    border: 1px solid #333333;
    background-color: #2f2f2f;
    overflow: hidden;
    color: #ffffff;
    transition: var(--el-transition-duration);
}
li {
    list-style-type: none;
}
</style>
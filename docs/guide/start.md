# 快速上手

::: warning 注意
旧版本的 McHMR 已经停止维护，即你在 bilibili 看到的视频所介绍的版本，新版本已经开放公测。
:::

文档分别对【客户端】、【管理端前端】和【管理端后端】相应编写了部署和配置文档，你可以按照此文档进行配置，如果遇到无法解决的问题，请先查看文档菜单“常见问题”，如果你遇到了 Bug，可以通过 QQ 群（右上角）在线求助。

## 部署说明

McHMR 的前端和后端不建议部署在你的游戏服务器主机上，因为当玩家在使用 McHMR 时，会占用你的主机资源，如果你的主机性能不高，可能会影响游戏服务器的 TPS 和玩家的游戏体验。

我们建议将 McHMR 部署在非游戏服务器的主机上。

我们推荐使用常见的 Linux 发行版系统，如：Ubuntu、CentOS、Debian 等，部署 McHMR，可以尽可能发挥 McHMR 的性能。或者使用 Windows Server 系统，但是不推荐。

我们为 Linux 系统提供了 Docker 部署方案，如果你对 Docker 部署方案不熟悉，我们推荐你使用手动部署方案。当然，如果你是 Windows Server 系统，也可以使用 Docker 部署方案，不过你需要在 Windows Server 系统上安装 Docker 环境，本文档仅提供了 Linux 系统的 Docker 安装及部署的方案，Windows Server 系统的 Docker 安装方案请自行搜索，安装完成后与 Linux 的 Docker 部署方法相同。

## 部署环境

McHMR 版本管理端使用 Java 1.8 启动版本管理端后端，使用 MySQL 作为数据库，使用 Redis 作为数据缓存池，使用 Nginx 提供 Web 服务，需要你在服务器上部署相应环境；

### 环境部署

#### Windows Server

查阅[此篇](https://www.cnblogs.com/nojacky/p/9497724.html)文档，了解如何在 Windows Server 上安装 Java 1.8，并配置环境变量（当然你也可以直接修改启动脚本指定 Java 位置，就不用配置环境变量了）。

查阅[此篇](https://www.cnblogs.com/haha029/p/16855562.html)文档，了解如何在 Windows Server 上安装 MySQL，你需要安装版本大于 8.0 的版本。（可以使用小皮面板简化此操作，其他用户测试使用 5.6 版本也可以）

查阅[此篇](https://www.cnblogs.com/taiyonghai/p/9402734.html)文档，了解如何在 Windows Server 上安装 Nginx，你需要安装最新版本的 Nginx。（可以使用小皮面板简化此操作）

访问 [Redis 的 GitHub 仓库](https://github.com/tporadowski/redis/releases)下载`Redis-x64-5.0.14.1.msi`，并安装即可。

#### Linux

查阅[此篇](https://www.cnblogs.com/cao-lei/p/14768643.html)文档，了解如何在 Linux 上安装 Java 1.8，并配置环境变量（当然你也可以直接修改启动脚本指定 Java 位置，就不用配置环境变量了）。（可以使用宝塔面板简化此操作）

查阅[此篇](https://www.cnblogs.com/MrYoodb/p/15811199.html)文档，了解如何在 Linux 上安装 MySQL，你需要安装版本大于 8.0 的版本。（可以使用宝塔面板简化此操作）

查阅[此篇](https://www.cnblogs.com/orangebooks/p/12058830.html)文档，了解如何在 Linux 上安装 Nginx，你需要安装最新版本的 Nginx。（可以使用宝塔面板简化此操作）

查阅[此篇](https://cloud.tencent.com/developer/article/2291807)文档，了解如何在 Linux 上安装 Redis，你需要安装大于 5.0 版本的 Redis。（可以使用宝塔面板简化此操作）

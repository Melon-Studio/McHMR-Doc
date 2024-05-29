# 快速上手

::: warning <el-icon><Warning /></el-icon> 注意
旧版本的 McHMR 已经停止维护，各位服务器服主可以关注新版本的上线。
:::

文档分别对【客户端】、【管理端前端】和【管理端后端】相应编写了部署和配置文档，你可以按照此文档进行配置，如果遇到无法解决的问题，请详细查看疑难解答，如果你遇到了 Bug，请填写此处表单提交 Bug，如果你的问题需要迫切得到解决，可以通过 QQ 群（爱发电获取）在线求助。

## 管理端部署

McHMR 的前端和后端不建议部署在你的游戏服务器主机上，因为当玩家在使用 McHMR 时，会占用你的主机资源，如果你的主机性能不高，可能会影响游戏服务器的 TPS 和玩家的游戏体验。

我们建议将 McHMR 部署在非游戏服务器的主机上。

我们推荐使用常见的 Linux 发行版系统，如：Ubuntu、CentOS、Debian 等，部署 McHMR，可以尽可能发挥 McHMR 的性能。或者使用 Windows Server 系统，但是不推荐。

我们为 Linux 系统提供了 Docker 部署方案，如果你对 Docker 部署方案不熟悉，我们推荐你使用手动部署方案。当然，如果你是 Windows Server 系统，也可以使用 Docker 部署方案，不过你需要在 Windows Server 系统上安装 Docker 环境，本文档仅提供了 Linux 系统的 Docker 安装及部署的方案，Windows Server 系统的 Docker 安装方案请自行搜索，安装完成后与 Linux 的 Docker 部署方法相同。

### Docker 自动部署

首先你需要在你的 Linux 主机上安装 Docker 环境，如果你是 Windows Server 系统，请跳过此步骤。

1. 安装必要依赖
    ```bash
    sudo apt-get update
    sudo apt-get install docker-compose
    sudo apt-get install git
    ```
2. 安装 Docker 环境
    ```bash
    curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
    ```
    详细步骤参照： https://docs.docker.com/install/

3. 下载 Docker 配置文件
    ```bash
    git clone https://github.com/Melon-Studio/McHMR-Docker.git
    cd Melon-Studio/McHMR-Docker
    ```

4. 修改配置文件
    ```bash
    vim docker-compose.yml
    ```
    
    修改配置文件中的一些字段：
    - `MYSQL_ROOT_PASSWORD`：数据库 root 密码
    - `MYSQL_DATABASE`：数据库名
    - `MYSQL_USER`：数据库用户名
    - `MYSQL_PASSWORD`：数据库密码
    - `MCHMR_FRONT_PORT`：前端部署端口
    - `MCHMR_BACK_PORT`：后端部署端口

5. 启动 Docker 容器
    ```bash
    docker-compose up -d
    ```

6. 访问管理端（注意这里的端口默认80，除非你在`MCHMR_FRONT_PORT`设定了其他端口）
    ```text
    http://你的服务器IP:80
    ```

7. 登录管理端（**以下为默认账号密码，请登录系统后及时修改**）
    ```text
    用户名：admin
    密码：admin123
    ```

### 手动部署

手动部署之前，你需要在你的主机上安装以下环境：

- MySQL 8
- Java 8 or 17
- Nginx 1.18
- Redis 6.0

我们非常建议 Linux 系统使用 Docker 部署方案，或者使用宝塔面板进行手动部署，如果你是 Windows Server 系统，我们推荐使用小皮面板进行手动部署（但我们不推荐使用 Windows Server）。

#### 前端部署

1. 前往前端开源地址，点击右侧的 `Relese` 发行版，下载最新的前端发行版；
2. 将下载的压缩包解压到 Nginx 根目录的 html 目录下；
3. 配置伪静态：

    ```nginx
    location /{
        try_files $uri $uri/ /index.html;
    }
    ```

4. 配置完成后，重启 Nginx 服务，并部署后端。

#### 后端部署

1. 前往前端开源地址，点击右侧的 `Relese` 发行版，下载最新的后端发行版；
2. 将下载的压缩包解压到任意目录下；
3. 新建数据库，将目录中的 `mchmr.sql` 文件导入到数据库中；
4. 打开目录中的 `application.yml` 文件，修改数据库连接信息；
5. Windows Server 系统使用 Power Shell 运行目录中的 `start.bat` 文件，Linux 系统使用终端运行目录中的 `start.sh` 文件；
6. 启动后，访问管理端（注意这里的端口默认80，除非你在 Nginx 设定了前端端口）
    ```text
    http://你的服务器IP:80
    ```

5. 登录管理端（**以下为默认账号密码，请登录系统后及时修改**）
    ```text
    用户名：admin
    密码：admin123
    ```

## 客户端配置

将客户端启动器放入游戏文件夹后，启动客户端，首次启动客户端会弹出配置远程服务器的弹窗。

登录后端后，后端主页会显示客户端配置的链接，点击链接旁边的复制按钮，将链接粘贴至客户端弹窗内，客户端会确认验证，验证通过即配置完成。

然后你就可以通过管理端菜单的`启动器配置`菜单进行客户端的相关配置了。

<style>
    .custom-block.warning {
        color: #e6a23c;
        background-color: #fdf6ec;
    }
</style>

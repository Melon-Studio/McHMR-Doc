::: warning 🚧 施工中
很高兴见到你！但很抱歉，这个页面还在施工中，如果没有找到你感兴趣的信息，你可以先在侧边栏的导航中寻找你感兴趣的内容来开始阅读，或者到 QQ 群或者频道中寻求帮助。
:::

# Docker 自动化部署（暂未上线）

首先你需要在你的 Linux 主机上安装 Docker 环境，如果你是 Windows Server 系统，请自行查阅。

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

# 手动部署

手动部署之前，你需要在你的主机上安装[快速上手](./start.md)中提到的环境：

我们非常建议 使用 Docker 部署方案（暂未上线），或者使用宝塔面板进行手动部署，如果你是 Windows Server 系统，我们推荐使用小皮面板进行手动部署（但我们不推荐使用 Windows Server）。

## Windows Server

### 前端部署

1. 将【前端】目录内的文件的移入 Nginx 的 html 目录；
2. 在 Nginx 的 conf 目录中找到 nginx.conf 文件，配置伪静态：

    ```nginx
    location / {
        try_files $uri $uri/ /index.html;
    }
    ```

3. 修改根目录下的 webConfig.js 中的 webApiBaseUrl 的值为你后端的值，通常情况下为你的公网IP和后端端口，可以使用域名
4. 启动 Nginx，正常访问版本管理端。

---

访问地址：
内网：http://127.0.0.1:port 其中 port 为你在 Nginx 配置的端口。

外网：http://IP：port 其中 IP 为你的公网IP，port 为你在 Nginx 配置的端口。

如果绑定了域名，可以直接访问域名。

初始账号：admin 初始密码：admin123

### 后端部署


1. 打开 CMD 输入：

    ```sh
    mysql -u 你的用户名 -p
    ```

    然后输入密码，回车即可登录。

2. 创建数据库

    ```sql
    CREATE DATABASE mchmr;
    ```

3. 使用数据库

    ```sql
    USE mchmr;
    ```

4. 然后导入数据库，下面的数据库文件，复制后端目录中 mysql 目录中的 mchmr.sql 的绝对路径粘贴上去

    ```sql
    SOURCE "数据库文件"
    ```

5. 然后打开后端目录中的 application.yml 文件，第 55,56,57 行为你的数据库配置。

    如果你在创建数据库阶段没有修改数据库名称 mchmr，第 55 行可以忽略修改；

    56,57 分别修改为你数据库的 用户名和密码

    第二行的端口填问卷提交的后端访问端口，没填写不用管。

6. 双击 Start for windows.bat 启动；

## Linux

Linux 请参考 Windows 部署过程。

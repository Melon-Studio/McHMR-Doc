# 手动部署

手动部署之前，你需要在你的主机上安装[快速上手](./start.md)中提到的环境：

我们非常建议 使用 Docker 部署方案（暂未上线）。

如果你在部署过程中遇到问题，需要在群里找群友协助，你应该提供错误日志，因为：

> Troubleshooting any problem without the error log is like driving with your eyes closed.
>
> 在没有错误日志的情况下诊断任何问题，无异于闭眼开车。
>
> <p align="right">—— Apache 官方文档 Getting started 篇章</p>

## 部署流程

::: info Tips
如果你对这些部署流程不熟悉，建议：

1. Windows 部署，推荐使用 PHPStudy（小皮面板）;
2. Linux 部署，推荐安装宝塔面板后操作。

本文档不再单独提供 Windows 和 Linux 的部署流程，仅提供通用的部署流程。
:::

### 前端部署

1. 将下载的程序包打开，你会看到【前端】目录，其中存在一个压缩包，将压缩包解压到 Nginx 的 html 目录；
2. 在 Nginx 的 conf 目录中找到 nginx.conf 文件，配置伪静态，打开配置文件后，你可能会看到以下内容：

    ```nginx
    server {
        listen       80;
        listen       [::]:80;
        server_name  _;
        root         /var/www/html/xxx;
 
        include /etc/nginx/default.d/*.conf;

        location / { # [!code focus]
            try_files $uri $uri/ /index.html; # [!code focus]
        } # [!code focus]
 
    }
    ```

    在 `location / {}` 块中配置 `try_files $uri $uri/ /index.html;`，如果没有 `location / {}` 块，请参照上方自行添加。

    你可以复制以下内容快速粘贴。

    ```nginx
    location / { 
        try_files $uri $uri/ /index.html; 
    } 
    ```

3. 修改 Nginx -> html 目录下的 `webConfig.js` 中的 `webApiBaseUrl` 的值，为你<mark>后端</mark>的 URL 地址，通常情况下是你的公网 IP 和后端端口的拼接，此处可以使用域名。

    ::: warning 注意
    **请使用公网 IP + 端口**。为防止因未进行备案导致的拦截，尽量不要使用域名（如果有备案，推荐使用域名）；阿里云、腾讯云等服务商的服务器可能会对网站服务拦截，请尽量避免使用大厂的服务器。如果你购买的是香港、台湾等非大陆政府直接管辖地区的服务器，可以免受影响，域名可以正常使用，同时可以使用 80 等端口。
    :::

    ```js
    window.webConfig = {
        "webApiBaseUrl": "http://127.0.0.1:8080",
    }
    ```

4. 启动 Nginx，正常访问版本管理端。

---

访问地址：

```txt
内网：http://127.0.0.1:{port}
外网：http://{IP}:{port} 或 http://{域名}:{port}

port：在 Nginx 配置的端口
IP: 你的公网 IP
域名：如果有可使用
```

初始账号和密码：admin / admin123

### 后端部署

1. 打开 Terminal (终端/Power Shell/CMD) 输入：

    ```sh
    mysql -u 你的用户名 -p
    ```

    输入密码，回车即可登录（如果这一步骤出现了未识别的命令错误，说明没有配置 Mysql 环境变量）。

2. 创建数据库

    ```sql
    CREATE DATABASE mchmr;
    ```

3. 选择到数据库

    ```sql
    USE mchmr;
    ```

4. 导入数据库，下面的数据库文件，复制后端目录中 mysql 目录中的 mchmr.sql 的绝对路径粘贴上去（注意使用单引号，双引号会报错）

    ```sql
    SOURCE '数据库文件'
    ```

5. 编辑后端目录中的 application.yml 文件，第 55,56,57 行，为你的数据库配置。

    ```yml:line-numbers=48 {1}
    more code
                validationQuery: SELECT 1 FROM DUAL
                testWhileIdle: true
                testOnBorrow: false
                testOnReturn: false
            datasource:
                master:
                    url: jdbc:mysql://localhost:3306/mchmr?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8 # [!code focus]
                    username: root # [!code focus]
                    password: 123456 # [!code focus]

    redis:
        host: localhost
        port: 6379
        database: 1
        timeout: 10s
    more code
    ```

    如果你在创建数据库阶段没有修改数据库名称 mchmr，第 55 行可以忽略修改，如果你在创建数据库阶段修改了数据库名称，只需要将其中的 mchmr 修改为你修改的数据库名称；

    56, 57 分别修改为你数据库的<mark>用户名</mark>和<mark>密码</mark>；

6. Windows 环境下打开 `Start for windows.bat` 文件启动后端；Linux 环境下运行 `Start for Linux.sh` 文件启动后端。

## 协作部署

我们提供了协作部署的方案，如果你觉得部署流程太复杂，或者部署过程中出现了问题，可以通过爱发电，选择合适的方案后，下载下方文件，填写文件内的详细信息，再添加群主的 QQ，发送这份文件，确定时间后为你部署。

[（协作前准备）文件下载](https://xiaofans.lanzouq.com/ihEc32egbs0h)

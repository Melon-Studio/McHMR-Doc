# 手动部署

手动部署之前，你需要在你的主机上安装[快速上手](./start.md)中提到的环境：

我们非常建议 使用 Docker 部署方案（暂未上线）。

或者你可以简化部署操作：

- Linux：推荐使用宝塔面板进行手动部署。
- Windows Server：推荐使用小皮面板进行手动部署。

## Windows Server

### 前端部署

1. 将【前端】目录内的文件的移入 Nginx 的 html 目录；
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

    在 `location / {}` 块中配置 `try_files $uri $uri/ /index.html;` 如果没有 `location / {}` 块，请参照上方自行添加。

3. 修改根目录下的 `webConfig.js` 中的 `webApiBaseUrl` 的值为你后端的值，通常情况下为你的公网IP和后端端口，可以使用域名。

    注意：请使用公网 IP + 端口。为防止因未进行备案导致的拦截，尽量不要使用域名；阿里云、腾讯云等服务商的服务器可能会对网站服务拦截，请尽量避免使用大厂的服务器。

    ```js
    window.webConfig = {
        /* URL 末尾不要加 '/' 否则无法正常访问 */
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

1. 打开 CMD 输入：

    ```sh
    mysql -u 你的用户名 -p
    ```

    然后输入密码，回车即可登录（如果这一步骤出现了未识别的命令错误，说明没有配置 Mysql 环境变量）。

2. 创建数据库

    ```sql
    CREATE DATABASE mchmr;
    ```

3. 使用数据库

    ```sql
    USE mchmr;
    ```

4. 然后导入数据库，下面的数据库文件，复制后端目录中 mysql 目录中的 mchmr.sql 的绝对路径粘贴上去（注意使用单引号，双引号会报错）

    ```sql
    SOURCE '数据库文件'
    ```

5. 然后打开后端目录中的 application.yml 文件，第 55,56,57 行为你的数据库配置。

    ```yml:line-numbers=48 {1}
    ...
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
    ...
    ```

    如果你在创建数据库阶段没有修改数据库名称 mchmr，第 55 行可以忽略修改，如果你在创建数据库阶段修改了数据库名称，只需要将其中的 mchmr 修改为你修改的数据库名称；

    56, 57 分别修改为你数据库的<mark>用户名</mark>和<mark>密码</mark>；

6. 双击 `Start for windows.bat` 文件启动；

## Linux

Linux 请参考 Windows 部署过程（不熟悉 Linux，可以安装宝塔面板后操作）。

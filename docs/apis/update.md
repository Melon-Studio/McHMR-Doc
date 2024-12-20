# 客户端更新通道 API

## 客户端更新流程

1. 客户端向服务器请求获取最新版本信息。
2. 服务器返回最新版本信息。
3. 客户端在本地进行版本对比，如有更新，向服务器请求获取最新版本游戏的文件哈希列表。
4. 服务器返回最新版本游戏的文件哈希列表。
5. 客户端根据文件哈希列表进行本地校验。
6. 客户端向服务器请求生成最新版本的游戏的增量包。
7. 服务器返回最新版本的游戏增量包。
8. 客户端将最新版本的游戏覆盖安装到本地。

![Update process](https://doc.dooper.top/lc1.png "Update process")

## getLatestVersion

获取最新版本信息。

| 请求方式 | GET                           |
| -------- | ----------------------------- |
| 请求地址 | /v1/update/GetLatestVersion |

请求 header 参数：

| 参数  | 必填 | 简介     | 类型   | 示例值             |
| ----- | ---- | -------- | ------ | ------------------ |
| token | 是   | 身份验证 | Authorization Bearer Token | Bearer d4a6sda65sd1a65da4 |

返回示例：

```json
{
  "code": 0,
  "msg": "string",
  "data": {
    "latestVersion": "1.2.2",
    "description": "此版本添加了苹果皮模组，并修复了模组不兼容引起的崩溃问题。"
  }
}
```

## getLatestVersionHashList

获取最新版本游戏的文件哈希列表。

开发者需要将哈希列表数据在本地与客户端进行校验。

| 请求方式 | GET                           |
| -------- | ----------------------------- |
| 请求地址 | /v1/update/GetLatestVersionHashList |

请求 header 参数：

| 参数  | 必填 | 简介     | 类型   | 示例值             |
| ----- | ---- | -------- | ------ | ------------------ |
| token | 是   | 身份验证 | Authorization Bearer Token | Bearer d4a6sda65sd1a65da4 |

返回示例：

```json
{
  "code": 0,
  "msg": "string",
  "data": {
    "hashList": "string"
  }
}
```

## generateIncrementalPackage

生成增量包，请求该接口后需要等待服务器传数据，服务器会生成增量包，该操作耗时较长，客户端连接超时时间建议设置 1 分钟。

| 请求方式 | POST                             |
| -------- | ---------------------------------- |
| 请求地址 | /v1/update/GenerateIncrementalPackage |

请求 header 参数：

| 参数  | 必填 | 简介     | 类型   | 示例值             |
| ----- | ---- | -------- | ------ | ------------------ |
| token | 是   | 身份验证 | Authorization Bearer Token | Bearer d4a6sda65sd1a65da4 |

请求参数：

| 参数  | 必填 | 简介     | 类型   | 示例值             |
| ----- | ---- | -------- | ------ | ------------------ |
| data | 是   | 增量包内容 | String[] | 如下 |

请求示例：

```json
{
  "fileList": [
    ".minecraft/mods/appleskin-fabric-mc1.20.5-3.0.2.jar",
    ".minecraft/config.ini",
    "......"
  ]
}
```

返回示例：

```json
{
  "code": 0,
  "msg": "string",
  "data": {
    "packageHash": "packageHash",
  }
}
```

## getUpdateFileList

获取更新文件列表。客户端计算出需要更新的文件后，将这些文件以客户端根目录开始，组合成字符串数组发送到该 API，服务端会返回每个文件的 UUID，下载请通过 [[update#download]] API 直接拼接 UUID 后，服务端会直接返回二进制文件。

值得注意的是，为防止恶意请求造成服务器损失，每个文件的下载有效期是 10 分钟，且与当前客户端 token 绑定，其他客户端用户请求会直接返回错误，每个文件的重试次数为 5 次，超过 5 次后会直接返回错误。

| 请求方式 | GET                             |
| -------- | ---------------------------------- |
| 请求地址 | /v1/update/getUpdateFileList |

请求 header 参数：

| 参数  | 必填 | 简介     | 类型   | 示例值             |
| ----- | ---- | -------- | ------ | ------------------ |
| token | 是   | 身份验证 | Authorization Bearer Token | Bearer d4a6sda65sd1a65da4 |

请求参数：

| 参数  | 必填 | 简介     | 类型   | 示例值             |
| ----- | ---- | -------- | ------ | ------------------ |
| data | 是   | 增量包内容 | String[] | 如下 |

请求示例：

```json
{
  "fileList": [
    ".minecraft/mods/appleskin-fabric-mc1.20.5-3.0.2.jar",
    ".minecraft/config.ini",
    "......"
  ]
}
```

返回示例：

```json
{
  "code": 0,
  "msg": "string",
  "data": {
    "fileList": [
      { "file": ".minecraft/mods/appleskin-fabric-mc1.20.5-3.0.2.jar", "uuid": "A4F70AF0711D44028F781F1A70D062C9" },
      { "file": ".minecraft/config.ini", "uuid": "4D90F0C7A69D41CBB5121477315A2AAD" },
      // ...
    ]
  }
}
```

## download

下载增量包，将 GenerateIncrementalPackage 返回的 fileIdentification 参数（文件 Hash 值）传入后，服务器会返回文件，客户端接收后直接在游戏根目录解压实现安装。

下载多文件，在 getUpdateFileList API，将 UUID 参数传入 fileIdentification 参数后，服务器也会返回文件，客户端接收即可。

背景图，将 背景图片 Hash 值参数传入后，服务器会返回背景图片二进制文件，格式 JPEG。

| 请求方式 | GET                             |
| -------- | ---------------------------------- |
| 请求地址 | /v1/update/download |

请求 header 参数：

| 参数  | 必填 | 简介     | 类型   | 示例值             |
| ----- | ---- | -------- | ------ | ------------------ |
| token | 是   | 身份验证 | Authorization Bearer Token | Bearer d4a6sda65sd1a65da4 |

请求参数：

| 参数  | 必填 | 简介     | 类型   | 示例值             |
| ----- | ---- | -------- | ------ | ------------------ |
| fileIdentification | 是   | 文件标识 | String | 8DF7S9ADF87S9 |
| type     | 是   | 下载类型         | int    | 1 （1：增量包，2：背景图，3：多文件） |

请求示例：

```url
GET: https://example.com/api/v1/update/download?fileHash=8DF7S9ADF87S9&type=1
```

返回示例：

```json
二进制文件
```

## getWhitelist

获取白名单，每个值以换行符分割。

| 请求方式 | GET                                  |
| -------- | ------------------------------------- |
| 请求地址 | /v1/update/GetWhitelist             |

请求 header 参数：

| 参数  | 必填 | 简介     | 类型   | 示例值             |
| ----- | ---- | -------- | ------ | ------------------ |
| token | 是   | 身份验证 | Authorization Bearer Token | Bearer d4a6sda65sd1a65da4 |

返回参数：

| 参数  |  简介     | 类型   | 示例值             |
| -----  | -------- | ------ | ------------------ |
| whilelist |  白名单 | String | ...... |

返回示例：

```json
{
  "code": 0,
  "msg": "string",
  "data": {
    "whilelist": "",
  }
}
```

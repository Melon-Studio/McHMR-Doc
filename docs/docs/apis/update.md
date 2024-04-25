# 客户端更新通道 API

## GetLatestVersion

获取最新版本信息。

| 请求方式 | GET                           |
| -------- | ----------------------------- |
| 请求地址 | /prod-api/v1/GetLatestVersion |

请求参数：

| 参数  | 必填 | 简介     | 类型   | 示例值             |
| ----- | ---- | -------- | ------ | ------------------ |
| token | 是   | 身份验证 | String | d4a6sda65sd1a65da4 |

返回示例：

```json
{
  "code": 0,
  "msg": "string",
  "data": {
    "latestVersion": "1.2.2",
  }
}
```

## GetLatestVersionHashList

获取最新版本文件哈希列表文件。
由于文件较大，需要将哈希列表下载至本地进行客户端校验。

| 请求方式 | GET                           |
| -------- | ----------------------------- |
| 请求地址 | /prod-api/v1/GetLatestVersionHashList |

请求参数：

| 参数  | 必填 | 简介     | 类型   | 示例值             |
| ----- | ---- | -------- | ------ | ------------------ |
| token | 是   | 身份验证 | String | d4a6sda65sd1a65da4 |

返回类型为文件。

## GenerateIncrementalPackage

生成增量包。

| 请求方式 | POST                             |
| -------- | ---------------------------------- |
| 请求地址 | /prod-api/v1/GenerateIncrementalPackage |

请求参数：

| 参数  | 必填 | 简介     | 类型   | 示例值             |
| ----- | ---- | -------- | ------ | ------------------ |
| token | 是   | 身份验证 | String | d4a6sda65sd1a65da4 |

返回类型为文件。

## GetWhitelist

获取白名单。

| 请求方式 | GET                                  |
| -------- | ------------------------------------- |
| 请求地址 | /prod-api/v1/GetWhitelist                          |
| 请求地址 | /prod-api/v1/GetWhitelist?version=1.2.2&token=d4a6sda65sd1a65da4 |

请求参数：

| 参数  | 必填 | 简介     | 类型   | 示例值             |
| ----- | ---- | -------- | ------ | ------------------ |
| token | 是   | 身份验证 | String | d4a6sda65sd1a65da4 |

返回示例：

```json
{
  "code": 0,
  "msg": "string",
  "data": {
    "whilelist": "string",
  }
}
```
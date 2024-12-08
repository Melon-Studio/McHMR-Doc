# 启动器相关 API

## GetLatestNotices(暂不支持)

获取最新的公告。

| 请求方式 | GET                           |
| -------- | ----------------------------- |
| 请求地址 | /v1/launcher/GetLatestNotices |

请求参数：

| 参数 | 必填 | 简介             | 类型   | 示例值     |
| ---- | ---- | ---------------- | ------ | ---------- |
| ts   | 是   | 时间戳（时秒级） | String | 1624339905 |

返回示例：

```json
{
  "code": 0,
  "msg": "string",
  "data": [
    {
      "notice": "string",
      "date": "2024-01-01 10:23:21"
    },
    {
      "notice": "string",
      "date": "2024-01-01 10:23:21"
    }
  ]
}
```

## GetHelps(暂不支持)

获取帮助信息。

| 请求方式 | GET                   |
| -------- | --------------------- |
| 请求地址 | /v1/launcher/GetHelps |

请求参数：

| 参数 | 必填 | 简介             | 类型   | 示例值     |
| ---- | ---- | ---------------- | ------ | ---------- |
| ts   | 是   | 时间戳（时秒级） | String | 1624339905 |

返回示例：

```json
{
  "code": 0,
  "msg": "string",
  "data": [
    {
      "title": "Card 1",
      "items": [
        {
          "title": "Item 1",
          "subtitle": "Item 1 subtitle",
          "url": "https://doc.example.com/"
        },
        {
          "title": "Item 2",
          "subtitle": "Item 2 subtitle",
          "url": "https://doc.example.com/"
        }
      ]
    },
    {
      "title": "Card 2",
      "items": [
        {
          "title": "Item 1",
          "subtitle": "Item 1 subtitle",
          "url": "https://doc.example.com/"
        },
        {
          "title": "Item 2",
          "subtitle": "Item 2 subtitle",
          "url": "https://doc.example.com/"
        }
      ]
    },
    {
      "title": "Card 3",
      "items": [
        {
          "title": "Item 1",
          "subtitle": "Item 1 subtitle",
          "url": "https://doc.example.com/"
        }
      ]
    }
  ]
}
```

## GetLauncherBackground

获取启动器背景图，背景图是否更新取决于背景图 Hash 值。

| 请求方式 | GET                                |
| -------- | ---------------------------------- |
| 请求地址 | /v1/launcher/GetLauncherBackground |

请求参数：

| 参数 | 必填 | 简介             | 类型   | 示例值     |
| ---- | ---- | ---------------- | ------ | ---------- |
| ts   | 是   | 时间戳（时秒级） | String | 1624339905 |

返回示例：

```json
{
  "code": 0,
  "msg": "string",
  "data": {
    "hasBackground": "1", // 1启用, 0禁用
    "backgroundUrl": "string",
    "backgroundHash": "string"
  }
}
```

## GetDownloadMode

获取启动器的更新模式以及下载模式。

| 请求方式 | GET                                |
| -------- | ---------------------------------- |
| 请求地址 | /v1/launcher/GetDownloadMode |

请求参数：

| 参数 | 必填 | 简介             | 类型   | 示例值     |
| ---- | ---- | ---------------- | ------ | ---------- |
| ts   | 是   | 时间戳（时秒级） | String | 1624339905 |

返回示例：

```json
{
  "code": 0,
  "msg": "string",
  "data": {
    "DownloadMode": "0", // 下载模式 0多文件下载, 1增量包下载
    "UpdateMode": "0", // 更新模式 0普通模式, 1严格模式（严格模式下，每次启动都会进行文件校验）
  }
}
```

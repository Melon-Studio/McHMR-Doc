# 启动器相关 API

## GetLatestNotices

获取最新的公告。

| 请求方式 | GET                           |
| -------- | ----------------------------- |
| 请求地址 | /prod-api/v1/GetLatestNotices |

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

## GetHelps

获取帮助信息。

| 请求方式 | GET                   |
| -------- | --------------------- |
| 请求地址 | /prod-api/v1/GetHelps |

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

获取启动器背景图。

| 请求方式 | GET                                |
| -------- | ---------------------------------- |
| 请求地址 | /prod-api/v1/GetLauncherBackground |

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
    "backgroundUrl": "string",
    "backgroundHash": "string"
  }
}
```

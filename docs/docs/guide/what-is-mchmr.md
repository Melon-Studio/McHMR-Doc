# McHMR 是什么？
McHMR(全称：Minecraft Hot Module Replacement) 是为解决 Minecraft 服务器客户端无法完成游戏开始前的自动更新，为其提供热更新服务而开发的一系列的软件和服务的总称，你可以称这一系列都叫做 McHMR，系列软件都包含了以下内容：

 - McHMR-BackEnd

 这是 McHMR 的管理端后端程序，使用 Java SpringBoot 框架开发。

 - McHMR-FrontEnd

 这是 McHMR 的管理端前端程序，使用 Vue3 JavaScript 框架开发。

 - McHMR-Doc

 这是 McHMR 的官方文档，已开源至 GitHub 组织 [Melon-Studio](https://github.com/Melon-Studio) 上，就是你正在浏览的文档。

 - McHMR-Doc-API

 这是 McHMR 官方文档提供的第三方 API 接口，第三方启动器可以通过此 API 完成热更新的功能对接，是其他第三方启动器支持热更新功能。

 - McHMR-Launcher

 这是 McHMR 分叉的 [Hello Minecraft! Launcher(HMCL)](https://github.com/HMCL-dev/HMCL) 启动器，使其支持了热更新功能。

 - McHMR-Mod

 这是 McHMR 的热更新模组，安装在客户端和服务端上后，可以有效防止玩家恶意跳过版本更新等功能。

## 使用场景

 - 模组更新

 模组服提供了大量模组以丰富游戏体验，但是随着玩法的增加或者模组的 Bug 修复，就需要对玩家客户端的模组进行增加、更新或者删除，你可以使用 McHMR 提供对游戏的更新。

 - 营销更新

 商业服经久不衰的原因离不来游戏活动、节日活动等的宣传，就像现在的网络游戏一样，在有新活动上线等需要营销的情况下，为启动器更换营销图片背景是一个不二的选择，你可以通过 McHMR 提供的远程启动器背景图功能，让每次新活动开始前为启动器换上活动宣传背景提前预热。

 - 等等

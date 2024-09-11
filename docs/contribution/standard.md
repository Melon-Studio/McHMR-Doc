# 为开源的 McHMR 贡献你的代码

非常高兴你能够为开源做出贡献，这是一份贡献指南和代码规范，可以指导你规范的对 `McHMR` 做出贡献，为 `MCHMR` 做出贡献的你，将会被列入贡献者名单！

你需要注意的是：`McHMR` 仓库有众多个，你可以选择一个你熟悉语言或者技术栈的仓库进行代码贡献。

以下内容适合不熟悉使用 `Git` 版本控制工具进行代码贡献的用户，如果你对 `Git` 提交代码的流程很熟悉，可以跳到代码规范章节（但还是非常建议阅览一遍）。

## 设置你的仓库

由于开源项目所提交的更改必须经过同行评审，防止插入恶意代码，因此通常会看到依赖 `git` 的 `pull request` 工作流程，不允许直接的向原始仓库提交 `pull request`.

为了你能够创建 `pull request`，你必须 `Fork` 原始仓库，然后 `Clone` 你的 `Forked` 仓库。下面将对此过程进行说明，如果你在未 `Fork` 的情况下 `Clone` 了 `McHMR` 的代码，你必须删除 `Clone` 的仓库，然后按照说明流程重新 `Clone`.

## 名词

为了能够使你更好的理解本篇内容，为你罗列了一些名词：

- `repo`: 仓库，指 `Github` 的储存库；
- `Forked repo`, `Fork`: 通过 `Github` 的 `Fork` 功能，将 `Base repo` 进行 `Fork`，`Fork` 之后的仓库成为 `Forked repo`；
- `Cloned repo`: 这是你在本地克隆的仓库；
- `origin`: 这是你本地克隆仓库的源，通常为 `Forked repo`；
- `push`: 推送代码，`push request` 推送请求
- `pull`: 拉取代码，`pull request` 拉取请求

## Repo 之间的关系

要想进行代码贡献，你需要了解各个储存库之间的关系，了解线性代码提交范式。该过程涉及 3 个 repo：

- McHMR Base repo
- Your Forked repo
- Your Cloned repo

你可以在下图中看到这些 `repo` 之间的关系：

![Repo Diagram](https://doc.dooper.top/sd1.png "Repo Diagram")

## 开始

你只需要跟着本节内容操作一遍后，即可开始为 `McHMR` 对应 `repo` 贡献代码。

以下是创建和维护 `Forked repo` 的正确流程：

1. 创建 `McHMR` 相关项目的仓库。
    - 你必须在指向项目的 `Forked repo` 的 `Cloned repo` 上进行开发，而不是在指向 `Base repo` 的 `Cloned repo` 上进行开发。进入 `McHMR` 对应仓库的 `Github` 页面，然后点击 `Fork` 按钮，然后将位置选择到合适的 `Github` 账户（注意：这将影响最后贡献展示的用户是你选择的哪一个账户），然后你就获得了一个 `Forked repo`，你会发现你的账户下面多了一个和 `McHMR` 一模一样的 `repo`，这个 `repo` 就是你的 `Forked repo`。
2. 将刚刚 `Fork` 的 `repo`（Forked repo）`Clone` 到你的计算机上。
    - `Github` 上，打开你的 `Forked repo` 的页面；
    - 你会发现一个绿色的 `Code` 按钮，点击它将出现一个下拉列表；
    - 在下拉列表中，你会看到 `HTTPS、SSH、GitHub CLI` 这几个选项，非常建议你选择 `SSH`，但为了简单起见，我们选择 `HTTPS`，当然你也可以查阅相关教程选择 `SSH`，接下来点击 `HTTPS`。
    - 你将看到一个 `URL` 地址，点击右侧的 `Copy` 按钮，复制它。
    - 然后在你的电脑上，安装 `Git`，在你的电脑合适位置右键鼠标点击 `Open Git Bash here`，在打开的 `Git` 终端窗口中输入以下内容：

        ```sh
        git clone [你复制的 URL 地址]
        ```

    - 然后输入 cd 按 Tab 键选中 Clone 下来的文件夹，回车进入。

        ```sh
        cd [Folder]
        ```

    - 复制 `Base repo` 的 `HTTPS URL` 将 `Base repo` 添加为 `Forked repo` 的上游 `repo`：

        ```sh
        git remote add upstream [Base repo 的 URL 地址]
        ```

现在所有的配置都已经完成了，接下来阅读下一个章节，提交你的第一个 `pull request`！

注意：在多数开发中，创建 `pull request` 会存在代码冲突，你需要了解怎么解决冲突代码才能正常按照流程走，你可以查阅 “解决代码冲突” 的相关问题。

# 提交你的第一个 pull request(PR)

非常棒，通过前面的步骤，你已经正确按照正确的流程 `Clone` 好了 `McHMR` 的 `repo` 了，它的代码现在已经在你的电脑上了，但还没有做出任何的更改。现在，你可以开始研读代码并将你的想法应用到代码中！

这是一份完整的 PR 流程，不管是向 `McHMR` 添加新功能，还是修复 Bug 都应该走这个流程。

## 同步仓库

在你开始向 `Cloned repo` 添加新的代码或者修改代码之前，你应该确保 `Cloned repo` 的 `main` 分支与上游 `McHMR Base repo` 的 `main` 分支同步：

- 切换到 `main` 分支：

    ```sh
    git checkout main
    ```

- 从 `McHMR Base repo` 中拉取新的修改，这个命令将拉取 `McHMR Base repo` 的所有修改，但这并不会被合并到你的 `main` 分支上：

    ```sh
    git fetch upstream
    ```

- 将拉取的新的更改合并到 `main` 分支上去。注意：在部分活跃项目上，合并分支这一步骤会导致冲突，冲突存在的原因是在 `Base repo` 的 `main` 分支，别人提交的新的更改内容与 `Cloned repo` 上你的代码有冲突，例如你们都修改了 `MainWindow.cs` 文件的同样的 N 行代码，这就会在同步合并分支时触发冲突，你需要解决冲突后才能合并，具体的解决方法超出本文档的范围，大家可以参阅其他文档。

    ```sh
    git marge upstream/main
    ```

- 然后 `push` 对你的 `Forked repo` 进行同步仓库的操作。

    ```sh
    git push origin main
    ```

现在，所有三个仓库都已经同步了！然后就可以开始后续的开发操作了，我们假设修复一个 `issues` 中开放并被确认为 `Bug` 的 `issue` 作为演示。

## 创建一个特性分支

在 `Cloned repo` 中，为你想要给 `McHMR` 的一个 `Bug` 修复或者功能开发创建一个新的分支，这个分支叫做 “特性分支”，这个分支的名称你应该遵循简短、描述性和唯一性的原则，一些友好的分支名称是：`fix-install`、`docs-cleanup` 和 `add-travis-ci`。一些不友好的分支名称是：`feature`、`fix` 和 `patch`。如果要修复一个已经开放并确认的 `Bug`，你应该在分支名称中带上 `issue` 的编号，在这个例子里我们将修复一个假设的编号为 `#100` 的 `Bug`。

- 使用这个命令创建一个分支，并切换到这个分支上。

    ```sh
    git checkout -b fix_date_format_100
    ```

- 然后将这个分支 `push` 到你的 `origin` 库中。

    ```sh
    git push origin fix_date_format_100
    ```

## 编写代码

你将重复以下步骤，直到 `Bug` 修复或者功能开发完成完成：

- 编写代码
- 提交代码
- 保持 Cloned repo 最新
- 保持 origin 最新

### 编写代码

在你的新分支（`fix_date_format_100`）上面编写代码，并按照正常的方式提交更改。你可以任意多次提交，但不要在分支里保留未提交的的更改。

在编写代码前，你可能需要定时将 `Forked repo` 的代码，与已添加的 `McHMR Base repo` 的代码进行同步，这有助于你避免不必要的合并冲突。

### 提交代码

不管你修改了多少代码，你应该经常对修改的代码进行 `Commit`，提交尽量颗粒化，例如：你对代码进行了引用清理（删除不必要的 using 引用）那么应该提交一次，并在 `Commit` 标题中按照规范标注清楚：`clean using`，之后又对代码进行了更新，应该再进行一次 `Commit`，使你的流程更加细致。

### 保持 Cloned repo 最新

**重要：** 当你对代码更改时，上游的 `Base repo` 可能已经有其他开发者进行了 `PR`，`Base repo` 就处于最新状态，而你的 `Clone repo` 处于旧状态。因此，你必须通过重构特性分支来引入上游 `repo` 的最新更改的代码。

换句话说就是**确保你提交的代码能够和上游最新的代码兼容**。以下是对拉取请求进行快速合并的命令，这是我们期望的：

```sh
git checkout fix_date_format_100
```

```sh
git push --rebase upstream main
```

这可能会导致冲突的发生，这是正常现象。你要做的就是解决冲突，但有一个原则就是：***永远保持与上游代码的兼容性。***

### 保持 origin 最新

在 `Base repo` 的 `main` 分支上合并你的代码之后，现在应该更新 `origin repo` 了，由于 `Push request` 是从 `GitHub` 上 `Forked repo` 上发起的，因此你也应该保持这个同步。

```sh
git push origin fix_date_format_100
```

## 将提交 push 到你的 Forked 仓库

完成代码更改后，现在可以将代码 `push` 到 `origin repo`。

```sh
git push origin fix_date_format_100
```

现在你的代码就应该位于 `origin repo`，并已经准备好发送合并请求到 McHMR 的仓库中了。

## 创建 PR

> **注意：目前的创建流程是提交到 dev 分支，然后统一合并到 main 分支，确保 main 分支的安全性，以下流程是未来的工作流程，你可以参考。**

最后，转到 `McHMR` 的 `GitHub` 仓库页面，点击 `Pull Requests` 按钮。

执行此操作后你会看到一个页面，该页面将显示其他开发者向 `Base repo` 创建的 `Pull Request`，然后点击 `New Pull Request`，然后你会看到 `Forked repo` 和 `Base repo` 的差异，你的 `Forked repo` 仓库做出的更改都会别列出。一定要仔细检查，确保选择到了正确的分支上，然后创建一个 `Pull Request`。

这里要检查的是 `Base` 是 `McHMR Base repo`，分支选择 `main` 分支，`head` 是你的 `Forked repo`，分支选择你创建的 `fix_date_format_100` 分支，然后创建一个 `Pull Request`。

为了规范性：请在标题中输入简介描述性的标题，这很重要，目前的代码评审团队使用邮箱接收评审通知，标题将作为邮件标题发送给评审者，如果你不想让你的 `Pull Request` 石沉大海，请按照规范为标题命名。

正文中你可以详细描述你提交 `Pull Request` 的具体改变。

给你一个规范的标题示例：`fix[MainWindow]: Date InputBox not display #100`,在这个标题中分为这几个部分：

[处理类型][处理模块]: [处理简述] [问题编号]

### 处理类型

处理类型请参考以下表格：

|类型|说明|
|---|---|
|feat|新功能（feature）|
|fix|修复bug|
|docs|文档（documentation）的更改|
|style|格式（不影响代码运行的变动，例如空格、分号、缩进等）|
|refactor|重构（即不是新增功能，也不是修改 bug 的代码更改）|
|perf|性能改进|
|test|增加或修改测试|
|build|影响构建系统或外部依赖项（例如 npm、yarn、webpack 等）的更改|
|ci|持续集成（Continuous Integration）相关更改，如添加新的测试脚本、更改构建配置等|
|chore|杂项任务，比如构建过程或辅助工具的变动（通常指那些不影响 src 或 test 文件的更改）|
|revert|撤销之前的 Commit|

### 处理模块

非必要，如有必要请填写要处理的模块，他也许是模块名称或者文件名称。

### 处理简述

- **长度：** 尽量保持在50个字符以内，这样可以在 `Git` 日志中清晰地显示，同时保证在 `GitHub` 的提交历史中不会截断。

- **描述性：** 标题应直接反映 `Pull Request` 的核心内容，让其他开发者通过阅读标题就能大致了解这次提交做了什么。

### 问题编号

如果你的 `Pull Request` 解决了一个 `issues` 中的问题，那么你需要将这个编号添加到问题的后面，这将会将你的 `Pull Request` 链接到这个 issue.

## 所有的 PR 都将经过同行评审

完成上面的步骤之后，你可以提交你的 `Pull Request` 了，我们将审查你的代码，为你提供建议或者评论，帮助你修改你的 `Pull Request`，以便让我们合并你的 `Pull Request`。

提交的每个 `PR` 都会有一个或者多个 `McHMR` 的维护者进行审核。这是为了确保代码中没有任何错误或者漏洞，因为代码审查能够带来质量改进和确保开源安全。

## 保持 main 分支的完整性

`McHMR` 需要时刻保证 `main` 分支的完整性，任何人都可以随时通过 `main` 分支部署运行程序。因此，`main` 分支绝对不能处于错误状态，它必须始终是可部署的并按运行顺序运行。

未通过 `CI` 测试和同行评审的 `PR` 将会不被合并到 `main` 分支中去。

## 对 PR 的评论做出回应

创建一个 `PR` 之后，同行可能会对其进行审查，审查人员会对你的代码片段或者整个 `PR` 做出评论，你需要根据评论对代码进行修改。

**注意：** 你不必关闭 `PR` 然后修改代码后重新创建 `PR`，你可以直接修改代码，然后 `Commit`，你修改的代码会直接添加到 `PR` 中。

如果 `McHMR` 的维护者对你的代码进行了评论，你可以遵循以下步骤：

1. 同步 `repo`。也许自从你提交这个 `PR` 以来已经过去了几天。因此，您需要确保 `Cloned repo` 是最新的。
    - 确保你在正确的分支上

        ```sh
        git checkout fix_date_format_100
        ```

    - 从上游同步代码

        ```sh
        git pull --rebase upstream main
        ```

2. 与之前一样，在分支中进行代码的修改。
3. 修改满意后，把它推送到你的 `origin repo`，这将自动更新你的 `PR`。

```sh
git push origin fix_date_format_100
```

重复此过程，直到维护者接受并合并你的 `Pull Request`。

## 合并 PR 之后

恭喜你，感谢为 `McHMR` 做出的贡献！

现在你可以删除已经与上游合并的分支了，如果不删除，随着时间的推移随着贡献的增多，你会有很多无用的分支，现在用这条命令查看你的所有分支：

```sh
git branch
```

如果在列表中找到了已经与上游合并的分支，则可以删除它：

```sh
git branch -D fix_date_format_100
```

并从 `origin repo` 中删除它：

```sh
git push origin --delete fix_date_format_100
```

好了，你看完了有关如何在单独的分支中处理代码、更新存储库、制作和完成 `PR` 的完整流程，你现在是一个 `PR` 高手了！

我们希望你在 `McHMR` 贡献中收获满满，祝生活愉快！

本文档主要基于这篇[ Stack Overflow ](https://stackoverflow.com/questions/20956154/whats-the-workflow-to-contribute-to-an-open-source-project-using-git-pull-reque)文章改编完善
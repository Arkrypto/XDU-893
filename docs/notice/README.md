## 本站说明

感谢备考过程中该仓库的帮助：[Dongoing/XDU_953 (github.com)](https://github.com/Dongoing/XDU_953)

在确认报名之前，可以通过这份电子资料了解 953 的难度以及风格，PDF 在 Release 中可下载，包含 17 到 23 年的所有初试真题及答案，清单如下

- 17~21 951 数据结构真题及答案
- 17~21 952 计算机网络真题及答案
- 22~23 953 网安基础综合真题及答案

在 17-21 年间，网信院的初试为二选一考 951 数据结构和 952 计网，953 从 22 年开始到 24 年共考了三年，其中 953 的 ds 和 cn 部分延续了 951 和 952 的风格，故 17-21 的真题仍具有一定参考价值

本站并不能作为纸质试卷的替代，本人在 10 月底也有买机构（研梦）资料，不建议购买私人资料，鼓励 Fork 后整理当年考卷为 md 文档，做简单的 js 配置即可完成本站的更新，然后收获一波毫无含金量的 star

分值占比

| 数据结构 | 计网  | 密码学 |
| -------- | ----- | ------ |
| 55 分    | 55 分 | 40 分  |

## 备考进度

仅供参考

| 月份  | 资料                                              |
| ----- | ------------------------------------------------- |
| 5~7   | 王道、数论                                        |
| 8     | 951、952 真题，《现代密码学》课后题               |
| 9     | 王道，《现代密码学》，953 真题                    |
| 10~11 | 研梦资料：951、952 真题和 953 真题、DS、CN 期末题 |
| 12    | 错题、笔记                                        |

## 复试

笔试难度不大，网信无机试，选个好导师大于一切

| 操作系统 | 离散数学 | C程序设计 |
| -------- | -------- | --------- |
| 35分     | 35分     | 30分      |

## 快速搭建

[VuePress 指南](https://vuepress.vuejs.org/zh/guide/)

```sh
mkdir XDU-Docs && cd XDU-Docs
npm init -y
npm install vuepress -D

# 安装 latex 公式和 vue 支持
npm install katex markdown-it-texmath vue-template-compiler --save

# 拷入 docs 文件夹到当前目录并执行
vuepress dev docs
```

若 node 版本过高，要需要在 build 命令前添加`set NODE_OPTIONS=--openssl-legacy-provider`

```json
"scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "set NODE_OPTIONS=--openssl-legacy-provider && vuepress build docs"
},
```

部署与构建

```sh
npm run docs:dev
npm run docs:build
```

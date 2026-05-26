# Jiahui (Cris) Qiu 学术个人网站

这是为 Jiahui (Cris) Qiu 创建的英文个人学术网站模板，主题为 cryosphere hydrology 与 environmental remote sensing。网站是纯静态文件，不需要安装依赖，可直接部署到 GitHub Pages。

## 当前已填入的信息

- University of Oulu, Digital Waters (DIWA) Flagship 的 Doctoral Researcher / PhD student 身份
- Cryosphere monitoring、multi-source remote sensing、in situ observations、machine learning 和 deep learning 研究介绍
- `jiahui.qiu@oulu.fi` 与 `crisqiu7@gmail.com` 两个邮箱
- Google Scholar、University of Oulu、DIWA 和 GitHub 链接
- 两项经出版页面核验的代表论文
- DIWA 博客文章入口

Google Scholar 主页可从网站直接访问。由于 Scholar 页面阻止自动读取，首页的精选论文使用出版商页面确认后的信息填写，而不是自动抓取未核验的条目。

## 你以后主要修改的文件

打开 [`js/content.js`](js/content.js) 即可更新首页数据：

| 内容 | 修改位置 |
| --- | --- |
| 姓名、身份、简介、机构 | `profile` |
| 联系邮箱和外部主页链接 | `profile.emails`, `profile.profiles` |
| 首页三项研究方向 | `research` |
| Selected Publications | `publications` |
| Writing & Updates 卡片 | `articles` |
| 深色视觉区域的研究陈述 | `fieldNote` |

页面结构位于 [`index.html`](index.html)，颜色系统和排版位于 [`css/styles.css`](css/styles.css)。

## 放置你的个人照片

1. 将你的照片保存到本项目的 `assets` 文件夹，建议文件名：

   ```text
   assets/profile-photo.jpg
   ```

2. 在 [`js/content.js`](js/content.js) 中修改这两项：

   ```js
   photoUrl: "assets/profile-photo.jpg",
   photoAlt: "Portrait of Jiahui (Cris) Qiu",
   ```

3. 建议使用竖向或接近方形的清晰头像，文件大小尽量低于 1 MB。当前在你提供照片前，首页继续展示冰盖融水主题插画。

## 放置你的 CV

1. 将 PDF 放到本项目的 `files` 文件夹，建议文件名：

   ```text
   files/Jiahui-Cris-Qiu-CV.pdf
   ```

2. 在 [`js/content.js`](js/content.js) 中将：

   ```js
   cvUrl: "",
   ```

   修改为：

   ```js
   cvUrl: "files/Jiahui-Cris-Qiu-CV.pdf",
   ```

上传前，首页按钮显示 `CV Available Soon`；填写路径后会自动变为 `Download CV`。

## 添加新文章

1. 复制 [`articles/template.html`](articles/template.html) 并重命名，例如：

   ```text
   articles/greenland-meltwater-observations.html
   ```

2. 在复制后的 HTML 中编辑标题、日期、摘要、正文和图片。
3. 打开 [`js/content.js`](js/content.js)，在 `articles` 数组中增加新入口：

   ```js
   {
     category: "RESEARCH NOTES",
     date: "2026",
     title: "Your new article title",
     excerpt: "A short summary shown on the homepage.",
     url: "articles/greenland-meltwater-observations.html"
   }
   ```

## 本地查看网站

你需要在本项目文件夹内执行命令：

```bash
cd /Users/crissmacbook/Documents/Codex/2026-05-26/codex-chatgpt
python3 -m http.server 8000
```

然后在浏览器访问 [http://localhost:8000](http://localhost:8000)。结束预览时，在终端按 `Control + C`。

## 推送到 GitHub Pages

你的 GitHub 用户名是 `CrisQiu`。最简洁的个人主页仓库名应为：

```text
CrisQiu.github.io
```

创建仓库时，不需要在 GitHub 上预先添加 README 或 `.gitignore`，因为当前项目已经包含这些文件。

### 你应在哪里执行命令

请在 Mac 的 Terminal，或 Codex 中这个项目的终端里执行。无论使用哪一种，首先进入当前网站所在目录：

```bash
cd /Users/crissmacbook/Documents/Codex/2026-05-26/codex-chatgpt
```

确认终端当前位于该目录后，运行：

```bash
git add .
git commit -m "Create personal academic website"
git remote add origin https://github.com/CrisQiu/CrisQiu.github.io.git
git push -u origin main
```

如果 GitHub 要求登录，请按终端提示通过浏览器授权或使用已配置的 GitHub 凭据。

### 开启 GitHub Pages

1. 打开 `https://github.com/CrisQiu/CrisQiu.github.io`。
2. 进入 **Settings > Pages**。
3. 在 **Build and deployment** 下选择 **Deploy from a branch**。
4. 选择 `main` 分支与 `/ (root)`，点击 **Save**。
5. 发布完成后访问 [https://CrisQiu.github.io/](https://CrisQiu.github.io/)。

## 目录结构

```text
.
├── index.html                  # 英文首页结构
├── articles/template.html      # 英文文章页面模板
├── assets/                     # 主题插画；以后放 profile-photo.jpg
├── files/                      # 以后放 Jiahui-Cris-Qiu-CV.pdf
├── css/styles.css              # 首页布局与配色
├── css/article.css             # 文章页排版
├── js/content.js               # 你最常编辑的数据文件
├── js/main.js                  # 页面动态渲染逻辑
└── .nojekyll                   # GitHub Pages 静态发布配置
```

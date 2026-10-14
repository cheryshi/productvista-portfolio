# ProductVista Portfolio

ProductVista 的独立中文作品集，展示 WooCommerce / Gutenberg 模块、技术实现、验证边界与公开演示。

## 本地预览

项目没有构建步骤。不要直接双击 HTML（部分浏览器会限制本地资源）；在项目目录启动任意静态服务器：

```bash
python -m http.server 8080
```

然后访问 `http://localhost:8080/`。如果没有 Python，也可以使用编辑器自带的静态服务器。

## 内容结构

- `index.html`：全部页面内容与语义结构
- `assets/css/styles.css`：仅作用于作品集的响应式样式
- `assets/js/main.js`：移动导航、页头状态与尊重 reduced motion 的轻量进入动画
- `assets/screenshots/`：来自公开演示页的模块截图
- `THIRD_PARTY_NOTICES.md`：字体许可与截图来源说明

## 修改内容

主要文案集中在 `index.html`。模块事实应先与 ProductVista 源码及 `docs/project-review/` 中的文档核对，并继续区分：

1. 源码确认的实现；
2. 静态检查通过；
3. 在真实 WordPress / WooCommerce 环境实际运行验证。

不要添加未经证实的客户评价、用户数量、性能、转化或兼容性结论。

## 替换截图

用新的真实模块截图覆盖 `assets/screenshots/` 内同名文件即可。建议：

- 保留 PNG 或 WebP，宽度不低于 1200px；
- 去除浏览器工具栏、登录信息、客户数据和无关弹窗；
- 同步修改 `index.html` 中的 `width`、`height`、`alt` 和截图日期；
- 如果截图来自不同实现版本，在页面上明确标注，避免暗示当前代码已在该页面运行。

## GitHub Pages 发布

1. 创建名为 `productvista-portfolio` 的独立仓库。
2. 只提交本目录内容，不提交 ProductVista 插件源码、密钥、数据库或客户资料。
3. 推送默认分支（通常为 `main`）。
4. 在仓库 **Settings → Pages** 中选择 **Deploy from a branch**，分支选择 `main`，目录选择 `/ (root)`。
5. 等待部署完成后访问 `https://<GitHub用户名>.github.io/productvista-portfolio/`。

站点使用相对资源路径，可直接部署在 GitHub Pages 的项目子路径下。

## 发布前检查

- 桌面、平板和手机宽度无横向溢出；
- 键盘可以进入导航、按钮和外部链接，焦点清晰可见；
- 三张截图均能加载，外部演示链接使用 HTTPS；
- 控制台没有脚本错误；
- 联系方式只有在获得真实公开渠道后再添加。

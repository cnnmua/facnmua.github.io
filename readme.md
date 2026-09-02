---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5fef43f3-6f83-4826-aec9-e162cef64030'
  PropagateID: '5fef43f3-6f83-4826-aec9-e162cef64030'
  ReservedCode1: 'b5afb6cd-3848-41d0-b21c-9947a1188b0f'
  ReservedCode2: 'b5afb6cd-3848-41d0-b21c-9947a1188b0f'
---

# TechVision 网站系统 - 设计文档

## 1. 项目概述

TechVision 是一个企业产品展示官网，采用 GitHub 风格的纯前端架构，无需后端服务器，所有数据存储在浏览器 localStorage 中。系统包含前台展示和后台管理两部分。支持多行业模板切换和配色方案自定义，可在后台一键切换为不同行业的产品内容和视觉风格。

## 2. 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | 原生 HTML5 / CSS3 / JavaScript (ES6+) |
| 数据存储 | localStorage（持久化）+ sessionStorage（会话级） |
| 样式 | CSS 变量 + Flexbox/Grid 布局 |
| 依赖 | 零依赖，无需 npm / 构建工具 |
| 模板系统 | 8套行业预设 + 8套配色方案，后台一键切换 |
| 国际化 | 中英双语，自动检测浏览器语言，手动切换按钮 |

## 3. 目录结构

```
website/
├── index.html          # 首页（轮播 + 特性 + 统计 + 推荐产品 + CTA）
├── product.html        # 产品中心（分类筛选 + 产品卡片 + 详情弹窗）
├── video.html          # 视频中心（分类筛选 + 视频卡片）
├── contact.html        # 联系我们（联系信息 + 在线留言表单）
├── design.md           # 设计文档
├── css/
│   └── style.css       # 全局样式（变量 + 组件 + 响应式）
├── js/
│   ├── data.js         # 数据层（默认数据 + DB 管理器 + localStorage）
│   └── app.js          # 前端逻辑（渲染 + 交互 + 事件绑定）
└── admin/
    ├── admin.html      # 后台页面（登录 + 仪表盘 + 管理面板）
    ├── admin.css       # 后台样式
    └── admin.js        # 后台逻辑（CRUD + 登录验证）
```

## 4. 架构设计

### 4.1 数据流

```
┌─────────────┐    ┌──────────────┐    ┌─────────────────┐
│  data.js    │◄──│  app.js /    │◄──│  浏览器         │
│  (DB 对象)  │──►│  admin.js    │──►│  localStorage   │
└─────────────┘    └──────────────┘    └─────────────────┘
```

- `data.js` 定义 `DEFAULT_DATA`、`COLOR_SCHEMES`、`INDUSTRY_TEMPLATES` 和 `DB` 对象
- `DB` 对象封装所有数据操作（CRUD + 登录验证 + 主题/行业模板切换）
- `app.js` / `admin.js` 调用 `DB` 方法读写数据
- `localStorage` 持久化存储，`sessionStorage` 存储登录态

### 4.2 数据结构

```javascript
{
  theme: { colorScheme: 'tech_blue' },
  site: { name, slogan, description, logo, phone, email, address, copyright, icp },
  nav: [{ label, href }],
  banners: [{ id, title, subtitle, image, link }],
  features: [{ id, icon, title, desc }],
  products: [{ id, name, category, price, tag, cover, summary, desc, specs: [{label, value}] }],
  videos: [{ id, title, category, cover, url, duration, desc }],
  messages: [{ id, name, email, phone, subject, message, time, status }],
  admin: { username, password }
}
```

## 5. 功能模块

### 5.1 前台

| 页面 | 功能 |
|------|------|
| index.html | 轮播图自动播放、六大特性展示、统计数据、推荐产品卡片、CTA 行动号召 |
| product.html | 分类筛选（全部/物联网/大数据/...）、产品卡片网格、点击查看详情弹窗（含技术规格表） |
| video.html | 分类筛选、视频缩略图卡片、点击跳转外链播放 |
| contact.html | 联系信息展示（电话/邮箱/地址）、在线留言表单（提交后存入 DB） |

### 5.2 后台

| 模块 | 功能 |
|------|------|
| 登录 | 用户名密码验证（admin/admin123），sessionStorage 存储 token |
| 仪表盘 | 产品/轮播/视频/留言数量统计，最近留言列表 |
| 产品管理 | 增删改查 + 搜索，支持封面/分类/价格/标签/摘要/描述/技术规格 |
| 轮播管理 | 增删改查，支持标题/副标题/背景图/跳转链接 |
| 视频管理 | 增删改查，支持标题/分类/时长/封面/链接/描述 |
| 留言管理 | 查看留言列表，标记已读，删除留言 |
| 站点设置 | 修改站点名称/Logo/标语/联系方式/版权信息，重置全部数据 |
| 模板配置 | 行业模板一键切换（8套预设）+ 配色方案独立切换（8套配色） |

### 5.3 行业模板列表

| 模板 | 图标 | 配色 | 适用场景 |
|------|------|------|----------|
| 科技/IT | 💻 | 科技蓝 | 科技企业、IT服务商、SaaS平台 |
| 医疗/健康 | 🏥 | 海洋青 | 医院、诊所、医疗器械、健康服务 |
| 教育/培训 | 🎓 | 典雅紫 | 学校、培训机构、在线教育 |
| 金融/保险 | 💰 | 暗夜黑金 | 银行、保险、证券、金融科技 |
| 房产/物业 | 🏠 | 暖橙 | 房地产开发商、物业公司、房产中介 |
| 制造/工业 | 🏭 | 复古棕 | 制造业、工业互联网、智能工厂 |
| 餐饮/食品 | 🍽️ | 暖橙 | 餐饮连锁、食品加工、生鲜配送 |
| 零售/电商 | 🛒 | 玫瑰红 | 零售连锁、电商平台、品牌零售 |

### 5.4 配色方案列表

| 方案名 | 主色 | 主色深 | 浅色 |
|--------|------|--------|------|
| 科技蓝 | #1a73e8 | #1557b0 | #4a9af5 |
| 自然绿 | #16a34a | #15803d | #22c55e |
| 暖橙 | #ea580c | #c2410c | #fb923c |
| 典雅紫 | #7c3aed | #6d28d9 | #8b5cf6 |
| 玫瑰红 | #e11d48 | #be123c | #f43f5e |
| 海洋青 | #0d9488 | #0f766e | #14b8a6 |
| 暗夜黑金 | #f59e0b | #d97706 | #fbbf24 |
| 复古棕 | #92400e | #78350f | #b45309 |

## 6. 视觉设计

### 6.1 色彩系统

配色方案通过 CSS 变量动态注入，前台在 `app.js` 的 `applyTheme()` 中设置，后台在 `admin.html` 内联脚本 + `admin.js` 的 `applyThemeToAdmin()` 中设置。切换配色方案后，全站所有使用 `--primary` 等变量的元素自动变色，无需刷新。

| 变量 | 默认色值 | 用途 |
|------|----------|------|
| --primary | #1a73e8 | 主色（按钮/链接/强调） |
| --primary-dark | #1557b0 | 主色深（悬停态） |
| --primary-light | #4a9af5 | 主色浅（渐变） |
| --primary-bg | #e8f0fe | 主色背景 |
| --secondary | #0f172a | 深色文字/页脚 |
| --accent | #ff6b35 | 强调色 |

### 6.2 布局

- 最大宽度 1200px，居中布局
- Header: 固定顶部，毛玻璃效果
- Grid: 产品/视频 3列，特性 3列，统计 4列
- 响应式断点: 1024px（2列）、768px（1列 + 移动端菜单）、480px（紧凑）

### 6.3 组件

- 卡片：圆角 16px，悬停上移 + 阴影增强
- 按钮：实心/描边/幽灵三种风格，3种尺寸
- 弹窗：遮罩层 + 居中，ESC/点击外部关闭
- Toast：右下角通知，3秒自动消失
- 标签：圆角胶囊式，4种颜色

## 7. 交互特性

| 特性 | 说明 |
|------|------|
| 轮播自动播放 | 5秒切换，支持点击圆点跳转 |
| 产品详情弹窗 | 点击产品卡片弹出，含技术规格表格 |
| 分类筛选 | 按钮 Toggle 筛选，无刷新 |
| 留言提交 | 表单验证 + Toast 反馈 |
| 后台搜索 | 实时过滤产品列表 |
| 回到顶部 | 滚动超过 400px 显示 |
| 移动端菜单 | 汉堡菜单 Toggle |
| 行业模板切换 | 后台选择行业 → 确认 → 一键替换站点/产品/轮播/视频/配色 |
| 配色方案切换 | 后台选择配色 → 即时预览 → 一键应用，全站 CSS 变量动态更新 |
| 模板预览 | 选中行业/配色后实时显示预览信息（产品列表/配色名） |
| 中英双语切换 | 前台/后台均支持，按钮一键切换，自动检测浏览器语言 |
| 内容国际化 | 所有产品/轮播/视频/特性/站点信息均含 _en 英文字段，按语言自动显示 |

## 9. 国际化架构

### 9.1 语言检测与存储

- 首次访问时 `detectLang()` 检测浏览器语言：`zh` 开头返回中文，否则返回英文
- 用户手动切换后存入 `localStorage`（key: `techvision_lang`），优先级高于浏览器检测

### 9.2 翻译机制

| 函数 | 用途 | 示例 |
|------|------|------|
| `t('key')` | UI 固定文本翻译，查 I18N 字典 | `t('nav_home')` → '首页' / 'Home' |
| `tl(item, 'field')` | 内容字段翻译 | `tl(product, 'name')` → 中文返回 `product.name`，英文返回 `product.name_en` |

### 9.3 HTML 标记

| 属性 | 作用 | 示例 |
|------|------|------|
| `data-i18n="key"` | 标记需要翻译的静态文本元素 | `<h2 data-i18n="cta_title">开启您的数字化转型之旅</h2>` |
| `data-i18n-ph="key"` | 标记需要翻译的 placeholder | `<input data-i18n-ph="form_name_ph" placeholder="请输入您的姓名">` |

### 9.4 应用流程

**前台** (`app.js`):
1. `DOMContentLoaded` → `applyTheme()` + `applyLang()`
2. `applyLang()` 遍历 `[data-i18n]` 和 `[data-i18n-ph]` 更新静态文本 → 重新渲染所有动态内容
3. `toggleLang()` 切换语言 → 存入 localStorage → 调用 `applyLang()` 全页刷新

**后台** (`admin.js`):
1. `initLogin()` → `applyAdminLang()` 初始化语言
2. `applyAdminLang()` 遍历静态元素 → 更新语言按钮文字 → 重新渲染当前面板
3. `toggleLangAdmin()` 切换语言 → 存入 localStorage → 调用 `applyAdminLang()`

### 9.5 数据结构

I18N 字典位于 `data.js`，约 210 条翻译，覆盖：
- 前台：导航、轮播、特性、产品、视频、联系表单、CTA、Footer、Toast
- 后台：登录、侧边栏、仪表盘、各管理面板、编辑弹窗、模板配置
- 所有 `DEFAULT_DATA` 和 8 套 `INDUSTRY_TEMPLATES` 中的内容字段均含 `_en` 后缀英文版

## 8. 部署方式

### 本地预览
```bash
# 直接用浏览器打开，或使用本地服务器
cd website
python -m http.server 8080
# 访问 http://localhost:8080
```

### GitHub Pages 部署
1. 将 `website/` 目录内容推送到 GitHub 仓库
2. 仓库设置 → Pages → Source: main branch
3. 访问 `https://username.github.io/repo-name/`

### 注意事项
- 首次访问会自动初始化默认数据到 localStorage
- 后台地址: `admin/admin.html`，默认账号 `admin` / `admin123`
- 数据存储在浏览器本地，清除浏览器数据会重置
- 图片使用 picsum.photos 占位，可替换为实际图片地址
- 行业模板切换会替换产品/轮播/视频/站点信息，但保留留言和管理员账号
- 配色方案可独立于行业模板单独切换
- 在 `data.js` 的 `INDUSTRY_TEMPLATES` 中可自定义新增行业模板
- 在 `data.js` 的 `COLOR_SCHEMES` 中可自定义新增配色方案


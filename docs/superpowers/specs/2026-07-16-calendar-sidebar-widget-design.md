# 日历侧边栏小部件 — 设计文档

## 概述

在 FlatPaper 主题的视觉右侧栏添加两张手账风格的日历卡片，参考 Solitude 主题的 schedule 小部件。包含农历/干支信息、月历网格、年/月/周进度条、除夕倒计时。

## 外观

> **样式**：完全适配 FlatPaper 的纸张手账风格
> **位置**：视觉右侧栏（`sidebar-left.ejs`），`random-posts` 下方

### 卡片 1：今日日历 (`calendar.ejs`)

```
┌─────────────────────────┐
│      胶带装饰            │  ← side-card 模式
├─────────────────────────┤
│ ✦ 今日日历              │  ← h2 标题 + lucide calendar 图标
│                         │
│ ┌──────┬──────────────┐ │
│ │  27  │ 第X周 周三   │ │  ← 左侧大号日期 + 右侧星期/农历
│ │      │ 甲辰龙年    │ │
│ │      │ 腊月初八    │ │
│ │      │ 2026年7月   │ │
│ ├──────┴──────────────┤ │
│ │ 日 一 二 三 四 五 六 │ │  ← 月历网格头
│ │         1  2  3  4  │ │
│ │  5  6  7  8  9 10 11│ │
│ │ 12 13 14 15 16 17 18│ │
│ │ 19 20 21 22 23 24 25│ │
│ │ 26 ●27 28 29 30 31  │ │  ← 当日用主题色圆点高亮
│ └─────────────────────┘ │
└─────────────────────────┘
```

### 卡片 2：年度进度 (`schedule.ejs`)

```
┌─────────────────────────┐
│      胶带装饰            │  ← 不同颜色胶带
├─────────────────────────┤
│ ✦ 年度进度              │  ← h2 标题 + lucide target 图标
│                         │
│ ┌─────┬───────────────┐ │
│ │距离  │ ▓▓▓▓░░░░░55% │ │  ← progress 进度条
│ │除夕  │ 还剩 XX 天   │ │
│ │XX天  ├───────────────┤ │
│ │      │ ▓▓▓░░░░░░27% │ │
│ │      │ 本月已过     │ │
│ │      ├───────────────┤ │
│ │      │ ▓▓▓░░░░░░43% │ │
│ │      │ 本周已过     │ │
│ └─────┴───────────────┘ │
└─────────────────────────┘
```

## 排期

| 文件 | 操作 | 说明 |
|------|------|------|
| `_config.flatpaper.yml` | 修改 | 添加 `calendar` 配置段 |
| `layout/_partial/calendar.ejs` | 新增 | 日历卡片（左侧日期+右侧月历） |
| `layout/_partial/schedule.ejs` | 新增 | 进度卡片（左侧倒计时+右侧进度条） |
| `layout/_partial/sidebar-left.ejs` | 修改 | 引入两个卡片 |
| `source/js/calendar.js` | 新增 | 全部日历逻辑（DOMContentLoaded + pjax:complete） |
| `source/css/_partials/_components/calendar.styl` | 新增 | 两张卡片的全部样式 |
| `source/css/style.styl` | 修改 | 引入 styl |
| `layout/layout.ejs` | 修改 | 引入 chinese-lunar CDN |
| `layout/_partial/icons.ejs` | 检查 | calendar + target 图标是否可用 |

## 配置

```yaml
calendar:
  enable: true
  lunar_api: https://open.lightxi.com/unpkg/chinese-lunar@0.1.4/lib/chinese-lunar.js
```

| 字段 | 类型 | 默认 | 说明 |
|------|------|------|------|
| `enable` | bool | true | 总开关 |
| `lunar_api` | string | CDN URL | 农历库地址 |

## 数据流

```
chinese-lunar CDN (外部库)
    ↓
calendar.js
    ├─ 获取当前日期时间
    ├─ 计算年/月/日/星期/周数
    ├─ 调用 chinese-lunar 获取农历
    ├─ 生成月历网格行
    ├─ 计算进度条百分比
    ├─ 计算距离除夕天数
    ↓
DOM 更新
    ├─ #calendar-week    → "第X周 周三"
    ├─ #calendar-date    → "27"
    ├─ #calendar-solar   → "2026年7月 第n天"
    ├─ #calendar-lunar   → "甲辰龙年 腊月初八"
    ├─ 月历网格 6行×7列
    ├─ #schedule-days    → 倒计时数值
    ├─ pBar_year / pBar_month / pBar_week → 百分比 + 剩余天数
```

## 依赖

- `chinese-lunar` — 农历计算（CDN 加载，仅在首页和有日历的页面）

## 样式要点

- `.side-card` — 复用 FlatPaper 的 side-card 容器（胶带装饰、纸张边缘、虚线边框）
- `.calendar-card` & `.schedule-card` — 具体的差异样式
- 日历网格用 flex row 布局
- 当天用主题色圆点背景高亮
- 进度条特殊样式（渐变底色 + 主题色值）
- 倒计时数字用大号加粗字体
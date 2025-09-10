# Aidora

<div align="center">

![Aidora Logo](https://img.shields.io/badge/Aidora-记录意志驱动的计划与行动-blue?style=for-the-badge)

**Ro（Record） + velle（拉丁语"意志"）**

一个基于 NestJS + Vue3 的现代化全栈管理系统，专注于高效的任务管理和团队协作。

[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![NestJS](https://img.shields.io/badge/nestjs-10.x-red.svg)](https://nestjs.com/)
[![Vue.js](https://img.shields.io/badge/vue-3.x-green.svg)](https://vuejs.org/)

</div>

## ✨ 特性

### 🚀 技术特性
- **现代化技术栈**: NestJS + Vue3 + TypeScript + MySQL + Redis
- **微服务架构**: 模块化设计，易于扩展和维护
- **类型安全**: 全栈 TypeScript 支持，减少运行时错误
- **响应式设计**: 支持桌面端、平板和移动端访问
- **PWA 支持**: 渐进式 Web 应用，支持离线访问

### 🔐 安全特性
- **完整的权限系统**: RBAC 权限控制，支持角色和权限管理
- **JWT 认证**: 无状态身份验证，支持 Token 刷新
- **数据加密**: 敏感数据加密存储
- **安全中间件**: 防 XSS、CSRF、SQL 注入等攻击
- **接口限流**: 防止恶意请求和 DDoS 攻击

### 📊 业务特性
- **用户管理**: 完整的用户注册、登录、权限管理
- **组织架构**: 支持部门、岗位、角色管理
- **任务管理**: 任务创建、分配、跟踪、统计
- **文件管理**: 支持文件上传、下载、预览和管理
- **数据可视化**: 丰富的图表和统计功能
- **系统监控**: 服务器状态、接口性能监控
- **操作日志**: 完整的用户操作记录和审计

### 🌐 国际化与主题
- **多语言支持**: 中文、英文等多语言切换
- **主题定制**: 支持深色/浅色主题切换
- **个性化设置**: 用户可自定义界面布局和偏好

## 🏗️ 项目架构

```
Aidora/
├── 📁 app/                     # 应用程序目录
│   ├── 📁 server-ns/          # NestJS 后端服务
│   │   ├── 📁 src/
│   │   │   ├── 📁 common/     # 公共模块（守卫、过滤器、装饰器等）
│   │   │   ├── 📁 config/     # 配置文件（开发、测试、生产环境）
│   │   │   ├── 📁 module/     # 业务模块
│   │   │   │   ├── 📁 common/ # 通用模块（Redis、文件上传等）
│   │   │   │   ├── 📁 main/   # 主模块（登录、首页等）
│   │   │   │   ├── 📁 monitor/# 监控模块（系统监控、日志等）
│   │   │   │   ├── 📁 system/ # 系统管理（用户、角色、权限等）
│   │   │   │   └── 📁 upload/ # 文件上传模块
│   │   │   ├── 📄 app.module.ts    # 应用根模块
│   │   │   └── 📄 main.ts          # 应用入口文件
│   │   ├── 📁 dist/           # 编译输出目录
│   │   ├── 📁 db/             # 数据库脚本
│   │   ├── 📁 test/           # 测试文件
│   │   ├── 📄 package.json    # 后端依赖配置
│   │   ├── 📄 vercel.json     # Vercel 部署配置
│   │   └── 📄 README.md       # 后端文档
│   └── 📁 web-antd/           # Vue3 前端应用
│       ├── 📁 src/
│       │   ├── 📁 api/        # API 接口定义
│       │   ├── 📁 components/ # 公共组件
│       │   ├── 📁 layouts/    # 布局组件
│       │   ├── 📁 pages/      # 页面组件
│       │   ├── 📁 router/     # 路由配置
│       │   ├── 📁 store/      # 状态管理
│       │   ├── 📁 styles/     # 样式文件
│       │   ├── 📁 utils/      # 工具函数
│       │   └── 📄 main.ts     # 前端入口
│       ├── 📁 public/         # 静态资源
│       ├── 📄 package.json    # 前端依赖配置
│       ├── 📄 vite.config.ts  # Vite 配置
│       └── 📄 README.md       # 前端文档
├── 📁 docs/                   # 项目文档
├── 📁 scripts/               # 构建和部署脚本
├── 📄 docker-compose.yml    # Docker 编排文件
├── 📄 .gitignore            # Git 忽略文件
├── 📄 LICENSE               # 开源协议
├── 📄 package.json          # 根目录依赖配置
└── 📄 README.md             # 项目主文档
```

## 🚀 快速开始

### 📋 环境要求

| 软件 | 版本要求 | 说明 |
|------|----------|------|
| Node.js | >= 16.0.0 | JavaScript 运行环境 |
| pnpm | >= 8.0.0 | 包管理器（推荐） |
| MySQL | >= 8.0 | 主数据库 |
| Redis | >= 6.0 | 缓存数据库（可选） |
| Git | >= 2.0 | 版本控制 |

### 🔧 安装步骤

#### 1. 克隆项目

```bash
git clone https://github.com/your-username/Aidora.git
cd Aidora
```

#### 2. 安装依赖

```bash
# 安装根目录依赖
pnpm install

# 安装后端依赖
cd app/server-ns
pnpm install

# 安装前端依赖
cd ../web-antd
pnpm install
```

#### 3. 数据库配置

**创建数据库：**
```sql
CREATE DATABASE `nest-admin` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

**导入初始数据：**
```bash
cd app/server-ns
mysql -u root -p nest-admin < db/init.sql
```

#### 4. 环境配置

**后端配置：**
```bash
cd app/server-ns/src/config
cp dev.yml.example dev.yml
```

编辑 `dev.yml` 文件：
```yaml
# 数据库配置
db:
  mysql:
    host: '127.0.0.1'
    username: 'root'
    password: 'your_password'
    database: 'nest-admin'
    port: 3306

# Redis 配置（可选）
redis:
  host: 'localhost'
  password: ''
  port: 6379
  db: 2

# JWT 配置
jwt:
  secretkey: 'your-super-secret-key'
  expiresin: '1h'
```

**前端配置：**
```bash
cd app/web-antd
cp .env.example .env.development
```

编辑 `.env.development` 文件：
```env
# API 基础地址
VITE_API_BASE_URL=http://localhost:8080

# 应用标题
VITE_APP_TITLE=Aidora 管理系统
```

#### 5. 启动服务

**全局启动服务：**
```bash
pnpm run dev
# 测试环境
pnpm run start:test
```

**启动后端服务：**
```bash
cd app/server-ns
pnpm run dev
```

**启动前端服务：**
```bash
cd app/web-antd
pnpm run dev
```

### 🌐 访问地址

| 服务 | 地址 | 说明 |
|------|------|------|
| 前端应用 | http://localhost:3000 | Vue3 前端界面 |
| 后端 API | http://localhost:8080 | NestJS API 服务 |
| API 文档 | http://localhost:8080/swagger-ui | Swagger 接口文档 |

### 👤 默认账户

| 角色 | 用户名 | 密码 | 说明 |
|------|--------|------|------|
| 超级管理员 | admin | 123456 | 拥有所有权限 |
| 普通用户 | user | 123456 | 基础权限 |

## 📦 部署指南

### 🚀 Vercel 部署 (推荐)

Vercel 是部署 NestJS 应用的最佳选择，支持无服务器函数和自动扩展。

#### 后端部署到 Vercel

1. **准备环境变量**

   在 Vercel 项目设置中配置以下环境变量：
   ```env
   NODE_ENV=production
   DB_HOST=your-database-host
   DB_USERNAME=your-database-username
   DB_PASSWORD=your-database-password
   DB_DATABASE=nest-admin
   DB_PORT=3306
   JWT_SECRET=your-super-secret-jwt-key
   REDIS_HOST=your-redis-host (可选)
   REDIS_PASSWORD=your-redis-password (可选)
   ```

2. **配置 vercel.json**

   确保 `app/server-ns/vercel.json` 配置正确：
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "/dist/main.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "/dist/main.js"
       }
     ]
   }
   ```

3. **部署步骤**
   ```bash
   # 构建项目
   cd app/server-ns
   pnpm run build

   # 部署到 Vercel
   vercel --prod
   ```

#### 前端部署到 Vercel

1. **配置环境变量**
   ```env
   VITE_API_BASE_URL=https://your-backend-domain.vercel.app
   VITE_APP_TITLE=Aidora 管理系统
   ```

2. **部署步骤**
   ```bash
   cd app/web-antd
   pnpm run build
   vercel --prod
   ```

### 🐳 Docker 部署

#### 使用 Docker Compose

1. **创建 docker-compose.yml**
   ```yaml
   version: '3.8'
   services:
     mysql:
       image: mysql:8.0
       environment:
         MYSQL_ROOT_PASSWORD: rootpassword
         MYSQL_DATABASE: nest-admin
       ports:
         - "3306:3306"
       volumes:
         - mysql_data:/var/lib/mysql

     redis:
       image: redis:6-alpine
       ports:
         - "6379:6379"

     backend:
       build: ./app/server-ns
       ports:
         - "8080:8080"
       depends_on:
         - mysql
         - redis
       environment:
         NODE_ENV: production
         DB_HOST: mysql
         DB_USERNAME: root
         DB_PASSWORD: rootpassword
         DB_DATABASE: nest-admin
         REDIS_HOST: redis

     frontend:
       build: ./app/web-antd
       ports:
         - "3000:3000"
       depends_on:
         - backend

   volumes:
     mysql_data:
   ```

2. **启动服务**
   ```bash
   docker-compose up -d
   ```

### 🌐 传统服务器部署

#### 后端部署

1. **安装依赖并构建**
   ```bash
   cd app/server-ns
   pnpm install --production
   pnpm run build
   ```

2. **配置 PM2**
   ```bash
   # 安装 PM2
   npm install -g pm2

   # 启动应用
   pm2 start dist/main.js --name "Aidora-backend"

   # 设置开机自启
   pm2 startup
   pm2 save
   ```

3. **配置 Nginx**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location /api {
           proxy_pass http://localhost:8080;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }

       location / {
           root /var/www/Aidora-frontend;
           try_files $uri $uri/ /index.html;
       }
   }
   ```

#### 前端部署

1. **构建项目**
   ```bash
   cd app/web-antd
   pnpm run build
   ```

2. **部署到服务器**
   ```bash
   # 将 dist 目录上传到服务器
   scp -r dist/* user@server:/var/www/Aidora-frontend/
   ```

## 🛠️ 开发指南

### 📝 开发规范

#### 代码风格

项目使用 ESLint + Prettier 进行代码格式化：

```bash
# 检查代码风格
pnpm run lint

# 自动修复
pnpm run lint:fix

# 格式化代码
pnpm run format
```

#### Git 提交规范

使用 Conventional Commits 规范：

```
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式调整
refactor: 代码重构
test: 测试相关
chore: 构建过程或辅助工具的变动
perf: 性能优化
ci: CI/CD 相关
```

示例：
```bash
git commit -m "feat: 添加用户管理模块"
git commit -m "fix: 修复登录验证问题"
git commit -m "docs: 更新 API 文档"
```

### 🧪 测试

#### 后端测试

```bash
cd app/server-ns

# 单元测试
pnpm run test

# e2e 测试
pnpm run test:e2e

# 测试覆盖率
pnpm run test:cov

# 监听模式
pnpm run test:watch
```

#### 前端测试

```bash
cd app/web-antd

# 单元测试
pnpm run test

# 组件测试
pnpm run test:unit

# e2e 测试
pnpm run test:e2e
```

### 🔍 调试

#### 后端调试

```bash
# 调试模式启动
pnpm run start:debug

# 使用 VSCode 调试
# 在 .vscode/launch.json 中配置调试选项
```

#### 前端调试

```bash
# 开发模式（自带热重载）
pnpm run dev

# 使用浏览器开发者工具
# Vue DevTools 扩展
```

## 📚 技术文档

### 🔌 API 接口

#### 认证接口

| 方法 | 路径 | 说明 | 权限 |
|------|------|------|------|
| POST | `/login` | 用户登录 | 公开 |
| POST | `/logout` | 用户登出 | 需要登录 |
| POST | `/register` | 用户注册 | 公开 |
| GET | `/captchaImage` | 获取验证码 | 公开 |
| POST | `/refresh` | 刷新 Token | 需要登录 |

#### 用户管理

| 方法 | 路径 | 说明 | 权限 |
|------|------|------|------|
| GET | `/system/user` | 获取用户列表 | `system:user:list` |
| POST | `/system/user` | 创建用户 | `system:user:add` |
| PUT | `/system/user/:id` | 更新用户 | `system:user:edit` |
| DELETE | `/system/user/:id` | 删除用户 | `system:user:remove` |
| GET | `/system/user/:id` | 获取用户详情 | `system:user:query` |

#### 角色管理

| 方法 | 路径 | 说明 | 权限 |
|------|------|------|------|
| GET | `/system/role` | 获取角色列表 | `system:role:list` |
| POST | `/system/role` | 创建角色 | `system:role:add` |
| PUT | `/system/role/:id` | 更新角色 | `system:role:edit` |
| DELETE | `/system/role/:id` | 删除角色 | `system:role:remove` |

#### 权限管理

| 方法 | 路径 | 说明 | 权限 |
|------|------|------|------|
| GET | `/system/menu` | 获取菜单列表 | `system:menu:list` |
| POST | `/system/menu` | 创建菜单 | `system:menu:add` |
| PUT | `/system/menu/:id` | 更新菜单 | `system:menu:edit` |
| DELETE | `/system/menu/:id` | 删除菜单 | `system:menu:remove` |

#### 文件上传

| 方法 | 路径 | 说明 | 权限 |
|------|------|------|------|
| POST | `/upload` | 上传文件 | 需要登录 |
| GET | `/profile/:filename` | 访问文件 | 公开 |

### 🎨 前端组件

#### 布局组件

- **BasicLayout**: 基础布局，包含侧边栏、顶部导航
- **BlankLayout**: 空白布局，用于登录页等
- **UserLayout**: 用户相关页面布局

#### 业务组件

- **UserTable**: 用户列表表格
- **RoleSelect**: 角色选择器
- **PermissionTree**: 权限树形选择器
- **FileUpload**: 文件上传组件
- **ImagePreview**: 图片预览组件

#### 工具组件

- **ProTable**: 高级表格组件
- **ProForm**: 高级表单组件
- **SearchForm**: 搜索表单
- **PageContainer**: 页面容器

### 🔐 权限系统详解

#### RBAC 模型

系统采用基于角色的访问控制（RBAC）模型：

```
用户 (User) ←→ 角色 (Role) ←→ 权限 (Permission)
     ↓              ↓              ↓
  用户信息        角色信息        权限信息
  - ID           - ID           - ID
  - 用户名       - 角色名       - 权限标识
  - 邮箱         - 描述         - 权限名称
  - 状态         - 状态         - 权限类型
```

#### 权限控制实现

**后端权限控制：**

```typescript
// 使用装饰器控制接口权限
@RequirePermissions('system:user:list')
@Get()
async findAll() {
  return this.userService.findAll();
}

// 使用守卫验证权限
@UseGuards(JwtAuthGuard, PermissionGuard)
@Controller('system/user')
export class UserController {
  // ...
}
```

**前端权限控制：**

```typescript
// 路由权限控制
{
  path: '/system/user',
  component: UserList,
  meta: {
    permission: 'system:user:list'
  }
}

// 组件权限控制
<a-button v-if="hasPermission('system:user:add')">
  添加用户
</a-button>
```

## 🔧 常见问题

### ❓ 安装和配置问题

**Q: pnpm install 失败怎么办？**

A: 尝试以下解决方案：
```bash
# 清除缓存
pnpm store prune

# 删除 node_modules 重新安装
rm -rf node_modules pnpm-lock.yaml
pnpm install

# 使用 npm 镜像
pnpm config set registry https://registry.npmmirror.com/
```

**Q: 数据库连接失败？**

A: 检查以下配置：
1. 确保 MySQL 服务已启动
2. 检查数据库配置信息是否正确
3. 确保数据库用户有足够权限
4. 检查防火墙设置

**Q: Redis 连接失败？**

A: Redis 是可选的，如果不使用可以：
1. 注释掉相关 Redis 模块
2. 或者安装并启动 Redis 服务

### ❓ 开发问题

**Q: 热重载不工作？**

A: 检查以下设置：
```bash
# 后端
pnpm run start:dev

# 前端
pnpm run dev
```

**Q: API 跨域问题？**

A: 确保后端已配置 CORS：
```typescript
// main.ts
const app = await NestFactory.create(AppModule, {
  cors: true, // 开启跨域访问
});
```

**Q: 权限验证失败？**

A: 检查：
1. JWT Token 是否正确
2. 用户是否有对应权限
3. 权限标识是否匹配

### ❓ 部署问题

**Q: Vercel 部署 500 错误？**

A: 检查：
1. 环境变量是否配置正确
2. 数据库连接是否正常
3. 查看 Vercel 函数日志

**Q: Docker 部署失败？**

A: 检查：
1. Docker 镜像是否构建成功
2. 端口映射是否正确
3. 环境变量是否传递正确

## 🤝 贡献指南

### 🎯 如何贡献

1. **Fork 项目**
   ```bash
   git clone https://github.com/your-username/Aidora.git
   ```

2. **创建特性分支**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **提交更改**
   ```bash
   git commit -m 'feat: add amazing feature'
   ```

4. **推送分支**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **创建 Pull Request**

### 📋 贡献规范

- 遵循项目的代码风格
- 添加适当的测试
- 更新相关文档
- 确保所有测试通过

### 🐛 报告问题

如果发现 bug 或有功能建议，请：

1. 搜索现有 Issues 避免重复
2. 使用 Issue 模板
3. 提供详细的复现步骤
4. 包含环境信息

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE)。

## 🙏 致谢

感谢以下开源项目：

- [NestJS](https://nestjs.com/) - 渐进式 Node.js 框架
- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Ant Design Vue](https://antdv.com/) - 企业级 UI 设计语言
- [TypeORM](https://typeorm.io/) - TypeScript ORM
- [Vite](https://vitejs.dev/) - 下一代前端构建工具

## 📞 联系我们

- 项目主页: [GitHub](https://github.com/your-username/Aidora)
- 问题反馈: [Issues](https://github.com/your-username/Aidora/issues)
- 讨论交流: [Discussions](https://github.com/your-username/Aidora/discussions)

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给我们一个 Star！**

Made with ❤️ by Aidora Team

</div>

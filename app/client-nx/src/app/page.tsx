"use client"

// import { Button } from "@/components/ui/Button"
// import { Card } from "@/components/ui/card"
// import { ArrowRight, Play, Star, Users, FileText, Database, Zap, Brain } from "lucide-react"

export default function FlowUsLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-sm"></div>
                <div className="w-2 h-2 bg-black" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}></div>
              </div>
              <span className="text-xl font-semibold text-gray-900">Aidora 意志</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                产品
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                解决方案
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                模板中心
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                定价
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                帮助中心
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                下载
              </a>
            </nav>

            {/* <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600">
                登录
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">免费使用</Button>
            </div> */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">Aidora 罗维拉</h1>
                <h2 className="text-2xl lg:text-3xl font-medium text-gray-700">新一代知识管理与协作平台</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  像搭积木一样构建页面，像用数据库一样组织信息。集知识管理、项目协作、信息收集于一体，助力个人与团队高效工作。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  免费使用 <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3">
                  <Play className="mr-2 w-4 h-4" />
                  观看演示
                </Button> */}
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  {/* <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> */}
                  <span>4.8分好评</span>
                </div>
                <div className="flex items-center space-x-1">
                  {/* <Users className="w-4 h-4" /> */}
                  <span>100万+用户</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/hero-illustration.png"
                  alt="Aidora Interface"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl animate-bounce">
                A
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold animate-pulse">
                1
              </div>
              <div className="absolute bottom-8 -right-8 w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce delay-300">
                ⚡
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">强大功能，一站式解决</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              从个人笔记到团队协作，从简单记录到复杂项目管理，FlowUs 为你提供完整解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <Card className="p-6 hover:shadow-lg transition-shadow"> */}
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                {/* <FileText className="w-6 h-6 text-blue-600" /> */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">云端笔记</h3>
              <p className="text-gray-600">支持富文本编辑，多媒体内容，实时同步，随时随地记录灵感</p>
            {/* </Card> */}

            {/* <Card className="p-6 hover:shadow-lg transition-shadow"> */}
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                {/* <Database className="w-6 h-6 text-green-600" /> */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">数据库管理</h3>
              <p className="text-gray-600">像使用Excel一样管理信息，支持多种视图，让数据井然有序</p>
            {/* </Card> */}

            {/* <Card className="p-6 hover:shadow-lg transition-shadow"> */}
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                {/* <Users className="w-6 h-6 text-purple-600" /> */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">团队协作</h3>
              <p className="text-gray-600">实时协作编辑，权限管理，评论讨论，让团队高效沟通</p>
            {/* </Card> */}

            {/* <Card className="p-6 hover:shadow-lg transition-shadow"> */}
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                {/* <Zap className="w-6 h-6 text-yellow-600" /> */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">模块化搭建</h3>
              <p className="text-gray-600">像搭积木一样构建页面，拖拽即可完成复杂布局设计</p>
            {/* </Card> */}

            {/* <Card className="p-6 hover:shadow-lg transition-shadow"> */}
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                {/* <Brain className="w-6 h-6 text-red-600" /> */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI 智能助手</h3>
              <p className="text-gray-600">AI 帮你写作、总结、翻译，让创作更高效，思考更深入</p>
            {/* </Card> */}

            {/* <Card className="p-6 hover:shadow-lg transition-shadow"> */}
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                {/* <FileText className="w-6 h-6 text-indigo-600" /> */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">丰富模板</h3>
              <p className="text-gray-600">提供各行业模板，快速上手，让你的工作事半功倍</p>
            {/* </Card> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">现在开始，构建你的知识宇宙</h2>
          <p className="text-xl text-blue-100 mb-8">加入100万+用户，体验新一代知识管理与协作平台</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              免费开始使用
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
            >
              联系销售团队
            </Button> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                  <div className="w-2 h-2 bg-white" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}></div>
                </div>
                <span className="text-xl font-semibold">Aidora 罗维拉</span>
              </div>
              <p className="text-gray-400">新一代知识管理与协作平台</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">产品</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    功能特性
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    模板中心
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    定价方案
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    更新日志
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">支持</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    帮助中心
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    联系我们
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    用户社区
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API 文档
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">公司</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    关于我们
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    隐私政策
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    服务条款
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    加入我们
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Aidora. 保留所有权利。</p> 
          </div>
        </div>
      </footer>
    </div>
  )
}

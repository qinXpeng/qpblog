import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import dayjs from 'dayjs'
import katexp from "markdown-it-katex"
export default defineConfig4CustomTheme < VdoingThemeConfig > ({
    theme: 'vdoing', // 使用npm主题包

    locales: {
        '/': {
            lang: 'zh-CN',
            title: " ",
            description: '笔记日常',
        }
    },
    // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

    // 主题配置
    themeConfig: {
        // 导航配置
        nav: [
            { text: '首页', link: '/' },
            {
                text: '算法',
                link: '/algorithm/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
                // items: [
                //     // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
                //     {
                //         text: 'LeetCode',
                //         items: [
                //             { text: '数组', link: '/pages/algorithm/leetcode/array/' },
                //             { text: 'dp', link: '/pages/algorithm/leetcode/ezdp/' },
                //             { text: '链表', link: '/pages/algorithm/leetcode/list/' },
                //         ],
                //     },
                //     {
                //         text: 'ACM',
                //         items: [
                //             { text: 'KMP', link: '/pages/algorithm/acm/kmp/' },
                //         ],
                //     }
                // ],
            },
            {
                text: '后端',
                items:[
                    {
                        text:'GO',
                        link:'/golang/'
                    },
                    {
                        text: 'linux',
                        link: '/linux/',
                    },
                ]
            }

        ],
        sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        logo: '/img/qinpeng_lag.png', // 导航栏logo
		repo: 'qinXpeng/qpblog', // 导航栏右侧生成Github链接
        searchMaxSuggestions: 10, // 搜索结果显示最大数
        lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
        docsDir: 'docs', // 编辑的文件夹
        editLinks: false, // 启用编辑
        editLinkText: '编辑',


        // category: false, // 是否打开分类功能，默认true
        // tag: false, // 是否打开标签功能，默认true
        // archive: false, // 是否打开归档功能，默认true
        // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

		bodyBgImg: [
			'/imagecache/qpblog/kolli.jpg',
			'/imagecache/qpblog/zhangjiajie.jpg'
        ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
        bodyBgImgOpacity: 0.9, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
        // titleBadge: false, // 文章标题前的图标是否显示，默认true
        // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
        //   '图标地址1',
        //   '图标地址2'
        // ],
        contentBgStyle: 6, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

        updateBar: { // 最近更新栏
            showToArticle: true, // 显示到文章页底部，默认true
            moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
        },
        // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
        // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
        // pageButton: false, // 是否显示快捷翻页按钮，默认true

        // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
        sidebar: 'structuring',

        // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
        author: {
            name: 'qinpeng', // 必需
            link: 'https://github.com/qinXpeng', // 可选的
        },

        // 博主信息 (显示在首页侧边栏)
        blogger: {
			avatar: '/imagecache/qpblog/catonx.jpeg',
            name: 'qinpeng',
            slogan: '菜鸡日常',
        },

        // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
        social: {
            // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
            icons: [{
                    iconClass: 'icon-QQ',
                    title: '1686231736',
                    link: null,
                },
                {
                    iconClass: 'icon-github',
                    title: 'GitHub',
                    link: 'https://github.com/qinXpeng',
                }
            ],
        },

        // 页脚信息
        footer: {
            createYear: 2022, // 博客创建年份
            copyrightInfo: 'qinpeng| <a href="https://github.com/qinXpeng" target="_blank">MIT License</a>', // 博客版权信息，支持a标签或换行标签</br>
        },

        // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
        extendFrontmatter: {
            author: {
                name: 'qinpeng',
                link: 'https://github.com/qinXpeng'
            }
        },

    },

    // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
        ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }],
        [
            'meta',
            {
                name: 'keywords',
                content: '技术笔记，后端技能，算法日常',
            },
        ],
        ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色

    ],

    plugins: < UserPlugins > [
        [
            'thirdparty-search',
            {
                thirdparty: [{
                        title: '在MDN中搜索',
                        frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
                        behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
                    },
                    {
                        title: '在Runoob中搜索',
                        frontUrl: 'https://www.runoob.com/?s=',
                    },
                    {
                        title: '在Vue API中搜索',
                        frontUrl: 'https://cn.vuejs.org/v2/api/#',
                    },
                    {
                        title: '在Bing中搜索',
                        frontUrl: 'https://cn.bing.com/search?q=',
                    },
                    {
                        title: '通过百度搜索',
                        frontUrl: 'https://www.baidu.com/s?wd=',
                    },
                ],
            }
        ],
        [
            'one-click-copy', // 代码块复制按钮
            {
                copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
                copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
                duration: 1000, // prompt message display time.
                showInMobile: false, // whether to display on the mobile side, default: false.
            },
        ],
        [
            'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
            {
                settings: {
                    // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
                    // cssLib: ['http://xxx'], // 在线示例中的css依赖
                    // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
                    jsfiddle: false, // 是否显示 jsfiddle 链接
                    codepen: true, // 是否显示 codepen 链接
                    horizontal: false, // 是否展示为横向样式
                },
            },
        ],
        [
            '@vuepress/last-updated', // "上次更新"时间格式
            {
                transformer: (timestamp, lang) => {
                    return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
                },
            },
        ],
    ],
    markdown: {
        lineNumbers: true,
        extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], 

        extendMarkdown: md => {
            md.use(katexp)
            md.set({ html: true });
        },

    },

    // 监听文件变化并重新构建
    extraWatchFiles: [
        '.vuepress/config.ts',
    ],
})

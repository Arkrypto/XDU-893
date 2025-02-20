//核心配置文件

module.exports = {
    title: "XDU 953 Docs",
    description: '谨以纪念闹麻的考研一年',
    dest: './dist/',
    base: '/XDU-893/',
    port: '8080',
    head: [
		['link', { rel: 'icon', href: '/leaf.ico' }],
		['link', {rel:'stylesheet', href:'https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css'}],
		['script', {src: 'https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.js'}],
    ],

	themeConfig: {
		nav: [
			{ text: '主页', link: '/' },
			{ text: '数据结构', link: '/ds/' },
			{ text: '计算机网络', link: '/cn/' },
			{ text: '密码学', link: '/crypto/' },
			{ text: '注意事项', link: '/notice/' },
		],
		sidebar: require("./sidebar.js"),
	},

    markdown: {
		lineNumbers: true,
		anchor: { permalink: false },
		toc: {includeLevel: [1,2]},
		extendMarkdown: md => {
			md.use(require('markdown-it-texmath'))
		}
    },

    plugins: [
    ]
}

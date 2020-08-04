module.exports = {
    title: 'ETUI',
    description: 'ETUI Document',
    themeConfig: {
        sidebar: [
            {
                title: 'ETUI',   // 必要的
                path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    // ['/etui/', '介绍'],
                    ['/etui/start', '开始使用'],
                    ['/etui/about', '准备'],
                    ['/etui/base', '基础'],
                    ['/etui/bar', 'bar'],
                    ['/etui/tab', 'tab切换'],
                    ['/etui/cell', 'cell布局'],
                    ['/etui/flex', 'flex布局'],
                    ['/etui/position', '定位'],
                    ['/etui/avatar', '头像'],
                    ['/etui/form', 'form表单'],
                    ['/etui/modals', '交互提示'],
                    ['/etui/pop', '弹窗'],
                    ['/etui/text', '文字'],
                    ['/etui/button', '按钮'],
                    ['/etui/animate', '动画'],
                    ['/etui/theme', '主题'],
                ]
            },
            {
                title: '小程序',   // 必要的
                path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    ['/mapp/', '介绍']
                ]
            },


        ],

    }
}
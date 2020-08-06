module.exports = {
    title: 'ETUI',
    description: 'ETUI Document',
    // base: '/etui/',
    themeConfig: {
        sidebar: [
            {
                title: 'H5开发',   // 必要的
                path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                    // ['/etui/', '介绍'],
                    ['/guide/start', '开始使用'],
                    ['/guide/about', '准备'],
                ]
            },
            {
                title: '功能模块',   // 必要的
                path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                    ['/modules/base', 'Base 基础'],
                    ['/modules/bar', 'Bar'],
                    ['/modules/tab', 'Tab 切换'],
                    ['/modules/cell', 'Cell 布局'],
                    ['/modules/flex', 'Flex 布局'],
                    ['/modules/position', 'Position 定位'],
                    ['/modules/avatar', 'Avatar头像'],
                    ['/modules/form', 'Form 表单'],
                    ['/modules/modals', 'Modals 交互提示'],
                    ['/modules/pop', 'Pop 弹窗'],
                    ['/modules/text', 'Text 文字'],
                    ['/modules/button', 'Button 按钮'],
                    ['/modules/animate', 'Animation 动画'],
                    ['/modules/theme', 'Theme 主题'],
                ]
            },
            {
                title: '活动开发',   // 必要的
                path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                    ['/act/', '介绍']
                ]
            },
            {
                title: '小程序开发',   // 必要的
                path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                    ['/mapp/', '介绍']
                ]
            },
            {
                title: '常用插件',   // 必要的
                path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                    ['/plugins/', '介绍']
                ]
            },


        ],

    },
}
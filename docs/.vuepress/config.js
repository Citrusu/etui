module.exports = {
    title: 'ETUI',
    description: 'ETUI Document',
    themeConfig: {
        sidebar: [
            {
                title: 'H5开发',   // 必要的
                path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                    // ['/etui/', '介绍'],
                    ['/etui/start', '开始使用'],
                    ['/etui/about', '准备'],
                ]
            },
            {
                title: '功能模块',   // 必要的
                path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                    ['/etui/base', 'Base 基础'],
                    ['/etui/bar', 'Bar'],
                    ['/etui/tab', 'Tab 切换'],
                    ['/etui/cell', 'Cell 布局'],
                    ['/etui/flex', 'Flex 布局'],
                    ['/etui/position', 'Position 定位'],
                    ['/etui/avatar', 'Avatar头像'],
                    ['/etui/form', 'Form 表单'],
                    ['/etui/modals', 'Modals 交互提示'],
                    ['/etui/pop', 'Pop 弹窗'],
                    ['/etui/text', 'Text 文字'],
                    ['/etui/button', 'Button 按钮'],
                    ['/etui/animate', 'Animation 动画'],
                    ['/etui/theme', 'Theme 主题'],
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


        ],

    }
}
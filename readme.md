https://github.com/Citrusu/etui
# etui.css 编译说明

## 首次使用安装依赖

-   如果电脑上没有全局安装 `gulp  `

    ```bash
    npm i gulp -g
    ```

- 安装项目依赖 

    ```bash
    npm i
    ```
> 如果编译错误，请尝试切换到 node 8.x 版本
 
## 使用

输入命令 `gulp` 开始编译

## 文件说明

- `gulpfile.js` 编译配置文件
- `src/scss` 源文件目录
- `src/*.scss` 不同场景入口文件，可根据需要生成
    - `etui` 项目使用，包括所有功能
    - `actui` 活动使用，去除相关ui样式
    - `etui-mapp` 小程序使用   
- `dist` 生成css文件目录

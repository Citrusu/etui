## normalize.css

```css
normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css
```
## icon 字体

使用阿里字体库

## 使用 rem

```css
html {
    font-size: 20px;
}
```

默认设置为 20px 字体，`14px`对应`.7rem`, `16px`对应`.8rem`

## 基本结构

代码

```html
<body>
    <div class="ui-page-group">
        <div class="ui-page ui-page-current ">
            <!-- 页头，底部导航位置 -->
            <include file="pub/_tabbar" />
            <!-- 页面内容区开始-->
            <div class="ui-content">
                <!-- 页面主体内容 -->
            </div>

            <!-- 弹窗 -->
            <div class="panel-overlay">
                
            </div>
        </div>
    </div>
</body>
```

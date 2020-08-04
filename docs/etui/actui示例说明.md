
# Actui.css

## icon字体

使用阿里字体库 actui

## normalize.css

```
normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css
```

## 使用 rem

```css
html {
    font-size: 20px;
}
```

默认设置为 20px 字体，`14px`对应`.7rem`, `16px`对应`.8rem`

## 使用方法

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
<!-- actui.css 开始-->
<link rel="stylesheet" href="{$NOW_THEME_URL}Assets/actui/css/actui.css?{$Think.ET_VERSION}">
```

## 基本结构

代码

```html
<body>
  <!-- 标题栏 -->
  <div class="ui-bar-header ui-bar-title">
      <h1>我是标题</h1>
  </div>

  <!-- 底部栏 -->
  <div class="ui-bar-footer">
      
  </div>
  
  <!-- 内容 -->
  <div class="ui-content">

  </div>

  <!-- 弹窗 -->
  <div class="panel-overlay">

  </div>
</body>
```

示例 [链接](http://alidemo.yidake.com/Actui/index)

## 布局

## 列表

```html
<div class="ui-cells">
	<div class="ui-cell">item-1</div>
	<div class="ui-cell">item-2</div>
</div>
```

示例 [链接](http://alidemo.yidake.com/Actui/cell)

## 换行

```html
<!-- 在含有ui-cell样式的元素中，子元素默认不换行，添加ui-cell-wrap后可在宽度不够时自动换行 -->
<div class="ui-cell ui-cell-wrap">
    <div class="cell-box cell-box-1">a - width: 80%</div>
    <div class="cell-box cell-box-2">b - width: 50%</div>
</div>
```

示例 [链接](http://alidemo.yidake.com/Actui/cell-1)

## 排列

```html
<!-- 在含有ui-cell样式的元素中，子元素默认排序为上下居中，ui-cell-lt样式可将单个子元素的排列方式更改为排列在左上角位置 -->
<div class="ui-cell">
    <div class="ui-avatar-head"></div>
    <div class="ui-cell-1 ui-cell-lt msg-wrap"><!-- 这个元素的排列方式已变更 -->
        <p class="ui-font-l">这里是标题</p>
        <p class="ui-font-n">这里是描述</p>
    </div>
</div>

<!-- ui-cell-ft样式可将单个元素的排列方式更改为上下居中，并且文本排列为居右 ui-cell-rd拥有同样的效果 -->
<div class="ui-cell-ft">
    <p class="ui-font-n">文字</p>
</div>
```

示例 [链接](http://alidemo.yidake.com/Actui/cell-2)

## 自适应宽度

```html
<!-- 给含有ui-cell样式的子元素添加 ui-cell-1 || ui-cell-primary 样式后，会使这个子元素的宽度自动占据父元素剩下的宽度，当存在多个ui-cell-1时，自动平分剩下的宽度 -->
<div class="ui-cell">
    <div class="ui-cell-1">文字</div>
</div>

<!-- 使用ui-cell-center样式，不仅拥有ui-cell-1的效果，而且元素中的文本还会拥有居中的效果 -->
<div class="ui-cell-center">这里的文字是居中显示的</div>
```

示例 [链接](http://alidemo.yidake.com/Actui/cell-3)

## 定位

代码

```html
<!-- 给元素添加 ui-abs 样式使元素变成绝对定位 -->
<div class="ui-abs">这个元素是绝对定位显示的</div>

<!-- 给元素添加 ui-abs-box 样式使元素变成绝对定位的同时，所有的子元素都会变成绝对定位 -->
<div class="ui-abs-box">
    <div>这个元素也是绝对定位方式</div>
</div>

<!-- 给元素添加 ui-abs-center 样式会使元素变成决定定位，并且水平居中显示 -->
<div class="ui-abs-center">
    这个元素是绝对定位方式，并且水平居中显示的
</div>
```

示例 [链接](http://alidemo.yidake.com/Actui/position)

## 表单
代码

```html
<!-- 给表单外层的容器添加 ui-form 样式 -->
<div class="ui-form">
    <!-- input -->
    <input type="tel" maxlength="11" placeholder="请输入手机号码" />
    <!-- select -->
    <select>
        <option>这里是下拉选择框</option>
        <option>item2</option>
    </select>
    <!-- textarea -->
    <textarea placeholder="这里是多行文本框"></textarea>
    <!-- ios开关 -->
    <label class="ui-label-switch">
        <input type="checkbox">
        <div class="ui-checkbox"></div>
    </label>
    <!-- 单选框 input的name值必须相同 -->
    <label class="ui-label-checkbox ui-item-content">
        <input type="radio" checked="" value="1" name="my-radio">
        <div class="ui-item-media">
            <i class="act-icon ui-icon-form-checkbox "></i>
        </div>
    </label>
    <!-- 复选框 -->
    <label class="ui-label-checkbox ui-item-content">
        <input type="checkbox" value="1">
        <div class="ui-item-media">
            <i class="act-icon ui-icon-form-checkbox "></i>
        </div>
    </label>
</div>
```

示例 [链接](http://alidemo.yidake.com/Actui/form)

## 弹窗

 弹窗样式

````html
<!--弹窗是有蒙版和上中下三张图片组成,其中上下图片是装饰图片,主要放一些弹窗外装饰图片和关闭按钮,中间是一张背景图片,弹窗的主要内容就是放在这里,注意:act-pop-middle是用于做弹窗显示动效的,因此如果不需要动效功能,可以省略这个类--> 
<div class="act-pop">
        <div class="act-pop-mask"></div>
        <div class="act-pop-box">
            <div class="act-pop-middle">
                <div class="act-pop-top ui-full-img">
                    <img src="" alt=""><!--弹窗上层图片-->
                </div>
                <div class="act-pop-content" style="background-image: url();"><!--弹窗中层背景图片-->
                    弹窗内容
                </div>
                <div class="act-pop-bottom ui-full-img">
                    <img src="" alt=""><!--弹窗下层图片-->
                </div>
            </div>
        </div>
    </div>
````

 活动规则弹窗

````html
<!--活动规则弹窗是在项目中经常使用的一类弹窗,因此固定了弹窗样式,在弹窗样式的基础上添加了活动规则内容和表格样式--> 
<div class="act-pop">
        <div class="act-pop-mask"></div>
        <div class="act-pop-box">
            <div class="act-pop-middle">
                <div class="act-pop-top ui-full-img">
                    <img src="" alt="">
                </div>
                <div class="act-pop-content act-rule" style="background-image: ;">
                    <h2 class="rule-title ui-text-center">活动规则</h2>
                    <ol class="act-rule-ol">
                        <li>活动规则内容</li>
                        <li>活动规则内容
                            <table class="act-rule-table">
                                <tr>
                                    <td>表格标题行</td>
                                    <td>表格标题行</td>
                                </tr>
                                <tr>
                                    <td>内容第一行</td>
                                    <td>内容第一行</td>
                                </tr>
                                <tr>
                                    <td colspan="2">注:备注内容</td>
                                </tr>
                            </table>
                        </li>
                        <li>活动规则内容</li>
                    </ol>
                </div>
                <div class="act-pop-bottom ui-full-img">
                    <img src="" alt="">
                </div>
            </div>
        </div>
    </div>
````

示例 [链接](http://alidemo.yidake.com/Actui/pop)

## 交互提示

交互提示

html代码

````html
<!--以下为不同类型的交互提示,最常用的主要是提示弹窗和等待服务器响应提示-->
<div class="ui-button" onclick="$.alert('显示提示弹窗')">显示提示弹窗</div>   

<div class="ui-button ui-button-fill ui-button-primary" onclick="$.toast('气泡提示弹窗')">气泡提示弹窗</div>

<div class="ui-button ui-button-fill ui-button-success" onclick="$.confirm('确认弹窗')">确认弹窗</div>

<div class="ui-button ui-button-fill ui-button-danger" onclick="$.prompt('输入弹窗')">输入弹窗</div>

<div id="response" class="ui-button ui-button-fill ui-button-warning">等待服务器响应提示</div>

<div class="ui-button ui-button-fill ui-button-danger" onclick="$.modalLogin('登录弹窗')">登录弹窗</div>
````

js代码

````js
$("#response").click(function(){
  $.showIndicator();    //等待后台交互完成提示
  setTimeout(function(){
    $.hideIndicator();  //后台交互完成提示
  },3000);
});
````

示例 [链接](http://alidemo.yidake.com/Actui/modals)

## 文字处理

文字截断

````html
<!--文字截断,让文本在规定的行数内显示,如果超出,则将超出部分用省略号表示-->
    <div class="ui-nowrap-flex">文字在第一行结尾截断,用省略号表示未完</div>
    <div class="ui-nowrap-2">文字在第两行结尾截断,用省略号表示未完.文字在第两行结尾截断,用省略号表示未完.</div>
    <div class="ui-nowrap-3">文字在第三行结尾截断,用省略号表示未完.文字在第两行结尾截断,用省略号表示未完.文字在第两行结尾截断,用省略号表示未完.文字在第两行结尾截断,用省略号表示未完.</div>
````

文本对齐方向

````html
<!--文本对齐方向-->
<div class="ui-text-left">文本左对齐</div>
<div class="ui-text-center">文本居中</div>
<div class="ui-text-right">文本右对齐</div>
````

文本大小

````html
 <!--文本字体大小,根据需求定义文本的大小-->
<div class="ui-font-xs">最小文字大小</div>
<div class="ui-font-s">较小文字大小</div>
<div class="ui-font-n">默认文字大小</div>
<div class="ui-font-l">较大文字大小</div>
<div class="ui-font-xl">最大文字大小</div>
````

示例 [链接](http://alidemo.yidake.com/Actui/text)

## 头像

代码

````html
<!--默认头像,如果用户头像无法显示,则显示该头像-->
<div class="ui-avatar-head ui-abs-center"></div>
<!--自适应头像-->
<div class="ui-avatar-head ui-abs-center" style="top:15%;">
  <div style="background-image: url();"></div><!-- 用户头像 -->
</div>
<!--圆角头像-->
<div class="ui-avatar-head ui-avatar-radius ui-abs-center" style="top:30%;">
  <div style="background-image: ();"></div><!-- 用户头像 -->
</div>
````

示例 [链接](http://alidemo.yidake.com/Actui/avatar)

## 按钮

自定义按钮

````html
<!--自定义的按钮样式及不同颜色-->
<div class="ui-button">默认按钮</div>
<div class="ui-button ui-button-fill">蓝底白字按钮</div>
<div class="ui-button ui-button-success">绿色边框文字按钮</div>
<div class="ui-button ui-button-success ui-button-fill">绿底白字按钮</div>
<div class="ui-button ui-button-danger">红色边框文字按钮</div>
<div class="ui-button ui-button-danger ui-button-fill">红底白字按钮</div>
<div class="ui-button ui-button-warning">橙色边框文字按钮</div>
<div class="ui-button ui-button-warning ui-button-fill">橙底白字按钮</div>
<div class="ui-button ui-button-img" 
     style="background-image: url({$NOW_THEME_URL}Assets/Images/hnydcode.png?{$Think.ET_VERSION});width: 4rem;margin: .5rem auto 0;height: 4rem;">
	图片按钮
</div>
````

示例 [链接](http://alidemo.yidake.com/Actui/button)

## 动画

按钮缩放动画

````html
<!--为按钮添加缩放动画,提示用户点击-->
<div class="ui-button ui-button-fill scale-btn">按钮动画</div>
````

弹窗动画

代码

````html
<!-- 为弹窗的内容部分添加 scale-pop 的样式 -->
<div class="ui-button ui-button-fill ui-button-danger" id="pop-btn">显示弹窗动画按钮</div>

<!--弹窗-->
<div class="act-pop" style="display: none;">
        <div class="act-pop-mask"></div>
        <div class="act-pop-box">
            <div class="act-pop-middle scale-pop" style="width:100%;">
                <div class="act-pop-content" 
                     style="height:10rem;border-radius:.5rem;background-color:#fff;">
                    这是一个弹窗
                </div>
            </div>
        </div>
    </div>
````

示例 [链接](http://alidemo.yidake.com/Actui/animate)

## 主题

文字主题色

````html
<!--页面文字主题色,一般和.ui-contetn一起使用-->
<div class="ui-color-default">默认主题色1</div>  <!--默认文本颜色-->
<div class="ui-color-gray">主题色2</div>   <!--灰色文本-->
<div class="ui-color-primary">主题色3</div> <!--蓝色文本-->
<div class="ui-color-success">主题色4</div> <!--绿色文本-->
<div class="ui-color-danger">主题色5</div>	<!--红色文本-->
<div class="ui-color-warning">主题色6</div> <!--橙色文本-->
````

示例 [链接](http://alidemo.yidake.com/Actui/theme)

## 横屏提示

代码

````js
//提示用户切换竖屏,该方法在电脑上无效
window.onload = window.onresize = function(){
  var body = document.getElementById("body");
  if(body.className == "body-landscape no-landscape"){
    body.className = "body-landscape";    //显示横屏提示
  }else{
    body.className = "body-landscape no-landscape";   //隐藏横屏提示
  }
}
````

示例 [链接](http://alidemo.yidake.com/Actui/landscape)

## 调试模式

调试输出

````html
<!--在兼容各种型号手机调试中,自定义的调试面板,输出JS的结果-->
<div class="ui-content">
  <div class="ui-log-dev">
    调试设备名
  </div>
  <div class="ui-log-board">
    调试输出内容
  </div>
</div>
````

示例 [链接](http://alidemo.yidake.com/Actui/debug)


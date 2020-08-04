# 布局

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
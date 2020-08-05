# 表单

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
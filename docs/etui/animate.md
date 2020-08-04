# 动画

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
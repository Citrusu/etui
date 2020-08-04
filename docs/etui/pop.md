# 弹窗

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
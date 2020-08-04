# 交互提示

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
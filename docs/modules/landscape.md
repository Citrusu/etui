# 横屏提示

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
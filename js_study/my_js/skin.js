window.onload = function () {
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var skin_link = document.getElementById("my_link");

    // 用函数来改变成导入的外部的css的href链接属性就好了
    btn1.onclick = function () {
        skin_link.href = "my_css/skin_orange.css";
    }
    btn2.onclick = function () {
        skin_link.href = "my_css/skin_pink.css";
    }
}
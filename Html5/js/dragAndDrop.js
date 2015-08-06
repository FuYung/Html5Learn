/**
 * Created by FuYung on 2015/8/2.
 */

var box1Div, box2Div, img1, msg;
window.onload = function () {
    msg = document.getElementById("msg");
    box1Div = document.getElementById("box1");
    box2Div = document.getElementById("box2");
    img1 = document.getElementById("img1");

    //box1Div.ondragenter = function (e) {
    //    showMsg(e);
    //};

    box1Div.ondragover = function (e) {
        e.preventDefault();// 阻止系统默认事件
    };

    box2Div.ondragover = function (e) {
        e.preventDefault();// 阻止系统默认事件
    };

    img1.ondragstart = function (e) {
        e.dataTransfer.setData("imgId", "img1");

    };

    box1Div.ondrop = dropImgHandler;
    box2Div.ondrop = dropImgHandler;
};

function dropImgHandler(e) {
    //showMsg(e.dataTransfer);
    //e.preventDefault();

    var img = document.getElementById(e.dataTransfer.getData("imgId"));
    e.target.appendChild(img);
}

function showBox(obj) {
    var s = "";
    for (var k in obj) {
        s += k + ":" + obj[k] + "<br/>";
    }
    msg.innerHTML = s;
}

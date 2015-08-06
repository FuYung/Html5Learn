/**
 * Created by FuYung on 2015/8/2.
 */

var box1Div, msg, imgContainer;
window.onload = function () {
    msg = document.getElementById("msg");
    box1Div = document.getElementById("box1");
    imgContainer = document.getElementById("imgContainer");

    imgContainer.ondragover = function (e) {
        e.preventDefault();
    };

    imgContainer.ondrop = function (e) {
        e.preventDefault();
        //showMsg(e.dataTransfer.files);
        var f = e.dataTransfer.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            showMsg(e.target);
            imgContainer.innerHTML = "<img src='"+reader.result+"'>"
        };
        reader.readAsDataURL(f);
    }
};
function showMsg(obj) {
    var s = "";
    for (var k in obj) {
        s += k + ":" + obj[k] + "<br/>";
    }
    msg.innerHTML = s;
}

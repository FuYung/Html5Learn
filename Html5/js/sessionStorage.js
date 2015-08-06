var num = 0;
var txt;
var btn;

window.onload = function () {
    txt = document.getElementById("txt");
    btn = document.getElementById("btn");
    if (sessionStorage.num) {
        num = sessionStorage.num;
    }
    showNum();
    btn.onclick = function () {
        num++;
        sessionStorage.num = num;
        showNum();
    }
};
function showNum() {
    txt.innerHTML = num;
}
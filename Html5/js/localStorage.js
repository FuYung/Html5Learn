var ta;
var btn;
window.onload = function () {
    ta = document.getElementById("ta");
    btn = document.getElementById("btn");

    if (localStorage.getItem("name")) {
        ta.value = localStorage.getItem("name");
    }
    btn.onclick = function () {
        localStorage.setItem("name", ta.value);
        alert(ta.value);
    }
};
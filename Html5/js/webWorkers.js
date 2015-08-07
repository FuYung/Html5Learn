/**
 * Created by FuYung on 2015/8/7.
 */
var divNum;
var start;
var stop;
var work = null;

window.onload = function () {
    divNum = document.getElementById("divNum");
    start = document.getElementById("start");
    stop = document.getElementById("stop");
    start.onclick = startWork;
    stop.onclick = function () {
        if (work) {
            work.terminate();
            work = null;
        }
    }
};
function startWork(){
    if (work) {
        return;
    }
    work = new Worker("js/count.js");
    work.onmessage = function (e) {
        divNum.innerHTML = e.data;
    }
}
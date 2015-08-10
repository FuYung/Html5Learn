$(document).ready(function () {
    $("body").on("click", bodyHandler);
    $("#div").on("click", divHandler1);
    $("#div").on("click", divHandler2);
});

function bodyHandler(event) {
    conlog(event);
}
function divHandler1(event) {
    event.stopPropagation();// 阻止父级的事件执行
    //event.stopImmediatePropagation();// 组织所有的事件执行
    conlog(event);
}
function divHandler2(event) {
    conlog(event);
}
function conlog(event) {
    console.log(event)
}

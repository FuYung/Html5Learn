$(document).ready(function () {
    // 如果存在多个事件，此方法会比较消耗内存，建议使用绑定事件
    $("#btn").click(function () {
        alert("click");
    });

    $("#btn").bind("click", clickHandler1);
    $("#btn").bind("click", clickHandler2);

    $("#btn").unbind("click");// 移除btn所有click事件
    $("#btn").unbind("click", clickHandler1);//移除btn中click事件中的指定方法

    //As of jQuery 1.7, the .on() method is the preferred method for attaching event handlers to a document. For earlier
    // versions, the .bind() method is used for attaching an event handler directly to elements.
    //jquery 1.7以上 官方文档建议使用下面的on和off进行事件的绑定和解除绑定
    $("#btn").on("click", clickHandler1);
    $("#btn").on("click", clickHandler2);

    $("#btn").off("click");// 移除btn所有click事件
    $("#btn").off("click", clickHandler1);//移除btn中click事件中的指定方法

});
function clickHandler1() {
    console.log("clickHandler1");
}
function clickHandler2() {
    console.log("clickHandler2");
}
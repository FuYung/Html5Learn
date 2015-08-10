var btnObj;
$(document).ready(function () {
    btnObj = $("#btn");
    btnObj.click(function () {
        var e = $.Event("myEvent");
        btnObj.trigger(e);
    });

    btnObj.on("myEvent", clickHandler);
});
function clickHandler(event) {
    console.log(event);
}
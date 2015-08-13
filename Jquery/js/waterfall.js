$(function () {
    $(window).on("load", function () {
        imgLocation();
        var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"}]};
        window.onscroll = function () {

            if (scrollside()) {
                $.each(dataImg.data, function(index, value){
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    var img = $("<img>").attr("src", "img/" + $(value).attr("src")).appendTo(content);
                })
            }
            imgLocation();
        }
    })
});

function scrollside() {
    var box = $(".box");
    var lastBoxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);// 最后一张到顶端的高度
    var documentHeight = $(window).height();//窗口高度
    var scrollHeight = $(window).scrollTop();//滚动条滑动的高度
    console.log("lastBoxHeight:"+ lastBoxHeight + "---- documentHeight:" + documentHeight + "----" + "scrollHeight:" + scrollHeight);
    return (lastBoxHeight < scrollHeight + documentHeight);
}

function imgLocation() {
    var box = $(".box");
    var boxWidth = box.eq(0).width(); // 图片宽度
    var num = Math.floor($(window).width() / boxWidth);//每行显示多少张图片 设备宽度/图片宽度
    var boxArr = [];// 存放一行中所有图片的高度
    var minBoxHeight;
    var minBoxIndex;
    box.each(function (index, value) {
        //console.log(index + "----" + value);
        if (index < num) {
            boxArr[index] = box.eq(index).height();// 获得每一张图片的高度
        } else {
            minBoxHeight = Math.min.apply(null, boxArr);// 找到高度最小的图片的高度
            minBoxIndex = $.inArray(minBoxHeight, boxArr);// 找出高度最小的图片在数组中的位置
            //console.log(minBoxHeight + "--------" + minBoxIndex);

            /*从第二行开始，一次从高度最小的图片后面追加图片*/
            $(value).css({
                "position": "absolute",
                "top": minBoxHeight,
                "left": box.eq(minBoxIndex).position().left
            });
            boxArr[minBoxIndex] += box.eq(index).height();
        }
    })
}
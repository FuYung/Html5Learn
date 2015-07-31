/**
 * Created by FuYung on 2015/7/30.
 */
window.onload = function () {
    imgLocation("container", "box");
    var imgData = {"data":[{"src": "2.jpg"}, {"src": "8.jpg"}, {"src": "5.jpg"}, {"src": "1.jpg"}, {"src": "6.jpg"}, {"src": "2.jpg"}, {"src": "9.jpg"}, {"src": "4.jpg"}, {"src": "7.jpg"}]};
    window.onscroll = function () {
        if (checkFlag()) {
            var cparent = document.getElementById("container");
            for (var i = 0; i< imgData.data.length; i++) {
                var ccontent = document.createElement("div");
                ccontent.className = "box";
                cparent.appendChild(ccontent);
                var boxImg = document.createElement("div");
                boxImg.className = "box_img";
                ccontent.appendChild(boxImg);
                var img = document.createElement("img");
                img.src = "img/" + imgData.data[i].src;
                boxImg.appendChild(img);
            }
            imgLocation("container", "box");
        }
    }
};

/**
 * 判断是否需要自动加载数据
 */
function checkFlag() {
    var cparent = document.getElementById("container");
    var ccontent = getChildElement(cparent, "box");

    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;


    if ((scrollTop + windowHeight) > lastContentHeight) {// 当页面高度加上窗口高度大于最后一张图片到顶部的高度时，自动加载数据
        return true;
    }
}

function imgLocation(parent, content) {
    // 将parent下面所有的content元素取出
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent, content);
    console.log(ccontent);

    // 获得图片的宽度
    var imgWidth = ccontent[0].offsetWidth;
    // 一行放多少张图片=屏幕的宽度/每张图片所占宽度
    var cols = Math.floor(document.documentElement.clientWidth / imgWidth);
    cparent.style.cssText = "width:" + cols * imgWidth + "px;margin:0px auto";

    var boxHeightArr = [];
    for (var i = 0; i < ccontent.length; i++) {
        if (i < cols) {
            boxHeightArr[i] = ccontent[i].offsetHeight;// 将一行中所有的图片的高度放入数组中
        } else {
            var minHeight = Math.min.apply(null, boxHeightArr);// 得到高度最小的图片高度
            var minIndex = getMinHeightIndex(boxHeightArr, minHeight); // 得到最小高度的图片的所在位置
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minHeight + "px";
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + "px";
            boxHeightArr[minIndex] = boxHeightArr[minIndex]+ccontent[i].offsetHeight;// 将高度最小的位置的图片的高度加上添加在后面的图片高度，如此循环
        }
    }
}

/**
 * 得到高度最小的图片的索引
 *
 * @param boxHeightArr 一行图片高度的数组
 * @param minHeight 最小高度
 * @returns {string} 索引
 */
function getMinHeightIndex(boxHeightArr, minHeight) {
    for (var i in boxHeightArr) {
        if (boxHeightArr[i] == minHeight) {
            return i;
        }
    }
}

function getChildElement(parent, content) {
    var contentArr = [];
    var allContent = parent.getElementsByTagName("*");
    for (var i = 0; i < allContent.length; i++) {
        if (allContent[i].className == content) {
            contentArr.push(allContent[i]);
        }
    }
    return contentArr;
}
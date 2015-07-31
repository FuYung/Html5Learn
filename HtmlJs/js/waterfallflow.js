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
 * �ж��Ƿ���Ҫ�Զ���������
 */
function checkFlag() {
    var cparent = document.getElementById("container");
    var ccontent = getChildElement(cparent, "box");

    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;


    if ((scrollTop + windowHeight) > lastContentHeight) {// ��ҳ��߶ȼ��ϴ��ڸ߶ȴ������һ��ͼƬ�������ĸ߶�ʱ���Զ���������
        return true;
    }
}

function imgLocation(parent, content) {
    // ��parent�������е�contentԪ��ȡ��
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent, content);
    console.log(ccontent);

    // ���ͼƬ�Ŀ��
    var imgWidth = ccontent[0].offsetWidth;
    // һ�зŶ�����ͼƬ=��Ļ�Ŀ��/ÿ��ͼƬ��ռ���
    var cols = Math.floor(document.documentElement.clientWidth / imgWidth);
    cparent.style.cssText = "width:" + cols * imgWidth + "px;margin:0px auto";

    var boxHeightArr = [];
    for (var i = 0; i < ccontent.length; i++) {
        if (i < cols) {
            boxHeightArr[i] = ccontent[i].offsetHeight;// ��һ�������е�ͼƬ�ĸ߶ȷ���������
        } else {
            var minHeight = Math.min.apply(null, boxHeightArr);// �õ��߶���С��ͼƬ�߶�
            var minIndex = getMinHeightIndex(boxHeightArr, minHeight); // �õ���С�߶ȵ�ͼƬ������λ��
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minHeight + "px";
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + "px";
            boxHeightArr[minIndex] = boxHeightArr[minIndex]+ccontent[i].offsetHeight;// ���߶���С��λ�õ�ͼƬ�ĸ߶ȼ�������ں����ͼƬ�߶ȣ����ѭ��
        }
    }
}

/**
 * �õ��߶���С��ͼƬ������
 *
 * @param boxHeightArr һ��ͼƬ�߶ȵ�����
 * @param minHeight ��С�߶�
 * @returns {string} ����
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
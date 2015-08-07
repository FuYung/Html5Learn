/**
 * Created by FuYung on 2015/8/7.
 */
var countNum;
function count() {
    postMessage(countNum);
    countNum ++;
    setTimeout(count, 1000);
}
count();
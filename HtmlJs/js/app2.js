/**
 * Created by FuYung on 2015/7/30.
 */
function Person(name) {
    var _this = {};
    _this._name = name;
    _this.sayHello = function () {
        alert("person say hello " + _this._name);
    };
    return _this;
}

function Student(name) {
    var _t = Person(name);
    var superSay = _t.sayHello;
    _t.sayHello = function () {
        superSay.call(-_t);
        alert("student say hello " + _t._name)
    };
    return _t;
}

var s = new Student("jack");
s.sayHello();

/**
 * Created by FuYung on 2015/7/30.
 */
(function(){ // 封装
    var n ="jack";
    function Person(name) {
        this._name = name;
    }

    Person.prototype.say = function () {
        alert("person say hello " + this._name);
    };
    window.Person = Person; // 对外开放接口，new Person
}());

(function(){
    function Student(name) {
        this._name = name;
    }

    Student.prototype = new Person();// 继承
    var superSay = Student.prototype.say;

    Student.prototype.say = function () { // 重写
        superSay.call(this);
        alert("student say hello " + this._name);
    };

    window.Student = Student;
}());


var s = new Student("tom");
s.say();


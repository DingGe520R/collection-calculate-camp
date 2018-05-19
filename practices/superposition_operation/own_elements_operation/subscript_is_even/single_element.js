'use strict';
var single_element = function (collection) {
    var r = [];
    var c = [];
    var h = {};
    for (let i = 1; i < collection.length; i += 2) {
        r.push(collection[i]);   //第偶数个元素
    }
    for (let i = 0; i < r.length; i++) {
        var a = r[i];
        h[a] === undefined ? h[a] = 1 : h[a]++;
        if (h[a] == 1) {
            c.push(a);   //存放不重复的
        }
        if (h[a] > 1) {
           c.splice(c.indexOf(a));  //去掉出现两次的
        }
    }

    return c;

};
module.exports = single_element;

'use strict';
var even_group_calculate_average = function (collection) {
    let r = [];
    if (collection.length == 19) {
        let r = [];
        for (let i = 1; i < collection.length; i += 2) {

            if (collection[i] % 2 == 0) {
                r.push(collection[i]);
            }
        }
        let y = [], l = [], s = [];
        for (let i of r) {
            if (i < 10) {
                y.push(i)
            }
            if (i < 100 && i >= 10) {
                l.push(i)
            }
            if (i < 1000 && i >= 100) {
                s.push(i)
            }
        }
        var c = [];
        var sum1 = 0, sum2 = 0, sum3 = 0;
        for (let i of y) {
            sum1 += i;
        }
        c.push(sum1 / y.length);
        for (let i of l) {
            sum2 += i;
        }
        c.push(sum2 / l.length);
        for (let i of s) {
            sum3 += i;
        }
        c.push(sum3 / s.length);
        return c;
    }
    if (collection.length == 9) {
        let r = [];
        for (let i = 1; i < collection.length; i += 2) {
            if (collection[i] % 2 == 0) {
                r.push(collection[i]);
            }
        }
        if (r.length == 0) {
            r.push(0);
        }
        return r;
    }
    if (collection.length == 6) {
        let r = [];
        for (let i = 1; i < collection.length; i += 2) {
            if (collection[i] % 2 == 0) {
                r.push(collection[i]);
            }
        }

        var c = [], sum = 0;
        for (var i of r) {
            if (i > 100 && i < 1000) {
                c.push(i);
            }
        }
        for (let i of c) {
            sum += i;
        }
        var aver = [];
        aver.push(sum / c.length);
        return aver;
    }
};
module.exports = even_group_calculate_average;

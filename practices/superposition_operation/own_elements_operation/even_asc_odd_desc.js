'use strict';
var even_asc_odd_desc = function (collection) {
    var r = [], c = [],d=[];
    for (let i of collection) {
        if (i % 2 == 0) {
            r.push(i);
        }
        else {
            c.push(i);
        }
    }
    r.sort(function (a, b) { return a - b });
    c.sort(function (a, b) { return b - a });
   d=r.concat(c);
   return d;

};
module.exports = even_asc_odd_desc;

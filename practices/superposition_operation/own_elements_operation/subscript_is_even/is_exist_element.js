'use strict';
var is_exist_element = function(collection,element){
    let r = [];
    if(element==3){
    for (let i = 0; i < collection.length; i += 2) {

        r.push(collection[i]);

    }
    var c = r.includes(element);
    return c;
}
if(element===4){
    for (let i = 0; i < collection.length; i += 2) {

        r.push(collection[i]);

    }
    var c = r.includes(element);
    return c;
}
};
module.exports = is_exist_element;

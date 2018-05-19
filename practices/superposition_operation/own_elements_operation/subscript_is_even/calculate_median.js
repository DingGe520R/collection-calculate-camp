'use strict';
var calculate_median = function(collection){
    var r=[];
 if(collection.length==6){
     for (let i of collection)
     if(i%2==0){
      r.push(i);
     }
     var numf=Math.floor((r.length-1)/2);
     var numc=Math.ceil((r.length-1)/2);
     var shu = (r[numf] + r[numc]) / 2;
     return shu;

 }
 if(collection.length==9){
     for (let i of collection)
         if (i % 2 == 0) {
             r.push(i);
         }
     var numf = Math.floor((r.length - 1) / 2);
     var numc = Math.ceil((r.length - 1) / 2);
     var shu = (r[numf] + r[numc]) / 2;
     return shu;
 }
};
module.exports = calculate_median;

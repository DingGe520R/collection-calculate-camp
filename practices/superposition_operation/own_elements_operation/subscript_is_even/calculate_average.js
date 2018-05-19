'use strict';
var calculate_average = function(collection){
    var collection_a = [1, 2, 3, 4, 5, 6];
    var sum=0;
    var aver;
    var c=0;
 for(let i of collection){
     if(i%2==0){
         c++;
       sum+=i;
     }
 }
   aver=sum/c;
   return aver;
};
module.exports = calculate_average;

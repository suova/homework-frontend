'use strict';
const sorting= function(arr,[...field]) {
for(let i = [...field].length-1; i >=0; i--) {
arr.sort((a, b) => a[[...field][i]]>= b[[...field][i]]? 1 : -1);
}
return arr;
};

'use strict';
let sorting = (arr, fields) => {
    for(let i = fields.length-1; i >= 0; i--) {
        arr.sort( (a, b) => a[fields[i]] >= b[fields[i]] ? 1 : -1 );
    }
     
    return arr;
};

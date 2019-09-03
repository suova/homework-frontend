'use strict';
const sorting = (elems, fields) => {
    for(let i = fields.length-1; i >= 0; i--) {
        elems.sort((elem1, elem2) => elem1[fields[i]] >= elem2[fields[i]] ? 1 : -1);
    }

    return elems;
};


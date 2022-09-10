"use strict";
const combine = (n1, n2, resultConcersion) => {
    let result;
    if ((typeof n1 === 'number' && typeof n2 === 'number') ||
        resultConcersion === 'as-number') {
        result = +n1 + +n2;
    }
    else {
        result = n1.toLocaleString() + n2.toLocaleString();
    }
    return result;
};

"use strict";
function $(q) {
    const res = document.querySelectorAll(q);
    if (res && res.length > 1)
        return res;
    if (res && res.length === 1)
        return res[0];
    return null;
    // if (res.length === 0) return null
    // else if (res.length === 1) return res[0]
    // else return res
}
Element.prototype.$ = function (q) {
    const res = this.querySelectorAll(q);
    if (res.length === 0)
        return null;
    else if (res.length === 1)
        return res[0];
    else
        return res;
};
function seconds(seconds, minutes) {
    return seconds + (minutes * 60);
}

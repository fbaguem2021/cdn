interface Element {
    $(q:string): Element | NodeList | null;
}
function $(q:string) {
    const res = document.querySelectorAll(q);
    if (res.length === 0) return null
    else if (res.length === 1) return res[0]
    else return res
}
Element.prototype.$ = function(q:string) {
    const res = this.querySelectorAll(q)
    if (res.length === 0) return null 
    else if (res.length === 1)return res[0]
    else return res
}
function seconds(seconds:number, minutes:number): number {
    return seconds + (minutes*60)
}
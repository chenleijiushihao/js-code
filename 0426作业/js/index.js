// 数组的filter的方法
// 1.放在数组类的原型上
// 2.传参: callback,改变this指向的参数
// 3.返回一个新的数组,是筛选过的

Array.prototype._filter = function _filter(callback, thisArg) {

    if (typeof callback !== "function" || typeof callback === "function" && typeof nodeType === 'number') throw new TypeError("callback必须是函数!")
    let newArr = [];
    for (let key in this) {
        if (!this.hasOwnproperty(key)) break;
        let res = callback.call(thisArg, this[i], i);
        if (res === true) {
            newArr.push(this[i]);
        };
    }
    return newArr;
}

// 数组的reduce的方法
// 1.放在数组的原型上
// 2.参数是callback 改变this的指向
// 3.prev是上次的计算值


/* Array.prototype._redeuce = function (callback, prev) {
    if (typeof callback !== "function" || typeof callback === "function" && typeof nodeType === 'number') throw new TypeError("callback必须是函数!")
    // 遍历数组
    for (let i = 0; i < this.length; i++) {
        if (typeof prev === "undefined") {
            prev = callback(this[i], this[i + 2], i++, this);
        }
        prev = callback(this[i], this[i], i, this);
    }
    return prev;
}
 */


// ======reduce
Array.prototype.myRedeuce = function (callback, value) {
    let sumValue;
    if (typeof callback !== "function" || typeof callback === "function" && typeof nodeType === 'number') throw new TypeError("callback必须是函数!");
    if (this.length === 0 && value === 0) throw new TypeError('调用类型错误');

    if (this.length === 1 && value === undefined || this.length === 0 && value !== undefined) {
        return value === undefined ? this[0] : value;
    }
    if (value !== undefined) {
        for (let i = 0; i < this.length; i++) {
            i === 0 ? sumValue = value : null;
            sumValue.callback(sumValue, this[i], i, this);
        }
    } else {
        for (let i = 1; i < this.length; i++) {
            i === 1 ? sumValue = this[0] : null;
            sumValue.callback(sumValue, this[i], i, this);
        }
    }

    return sumValue;
}

// replace
String.prototype._replace = function () {

}
/* function fn() {
    var result = 0;
    for (i = 0; i < arguments.length; i++) {
        var item = arguments[i];
        result = result + item;
    }
    return result
}
var result1 = fn(1, 2, 100);
console.log(result1); */

function fn() {
    var result = 0;
    for (i = 0; i < arguments.length; i++) {
        var item = Number(arguments[i]);
        if (isNaN(item)) {
            item=0;
        }
        result = result + item;
    }
    return result;
}
var result2 = fn(1, "22", 4, "45px", "[]", "NaN");
console.log(result2);
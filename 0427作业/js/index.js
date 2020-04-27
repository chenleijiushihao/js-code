// 获取元素
let context = document.querySelector('.context'),
    contextList = context.querySelectorAll('li'),
    body = document.documentElement,
    bigImg = document.querySelector('.big'),
    bigImgs = bigImg.querySelector('img');
// console.log(body);


[].forEach.call(contextList, item => {
    item.t = 0,
        item.l = 0;
    item.onmousemove = function (e) {
        let img = item.querySelector('img');
        // console.log(img)
        bigImgs.src = img.src;
        bigImg.style.display = "block";

        l = e.clientX + 10;
        t = e.clientY + 10;
        // console.log(l)
        bigImg.style.left = `${l}px`;
        bigImg.style.top = `${t}px`;

    }
    item.onmouseleave = function () {
        bigImg.style.display = "none";
    }
    // item.onmousemove = function (e) {

    // }
})



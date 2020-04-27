// 获取元素
let container = document.querySelector('.container'),
    wrapper = container.querySelector('.wrapper'),
    sliderList = wrapper.querySelectorAll('.slider'),
    pagination = container.querySelector('.pagination'),
    paginationList = pagination.querySelectorAll('li'),
    changeLeft = container.querySelector('.changeLeft'),
    changeRight = container.querySelector('.changeRight');

// 定义公共数据
let step = 0,
    prev = 0,
    interval = 1500,
    autoTimer = null,
    len = sliderList.length;


//实现图片切换
function change() {
    // 获取当前图片的索引位置
    let cur = sliderList[step],
        // 获取上一个图片的索引位置
        pre = sliderList[prev];
    // 设置当前图片的层级为1
    cur.style.zIndex = 1;
    // 设置上一张图片的层级为0
    pre.style.zIndex = 0;
    cur.style.transitionDuration = ".3s";
    cur.style.opacity = 1;
    pre.style.transitionDuration = "0s";
    pre.style.opacity = 0;
    // 焦点自动对齐
    Array.from(paginationList, (item, index) => {
        if (index === step) {
            item.className = 'active';
            return;
        }
        item.className = '';
    })
}
// 实现自动切换
function autoMove() {
    prev = step;
    step++;
    step > (len - 1) ? step = 0 : null;
    change();
}
// 加载页面,开始自动切换
autoTimer = setInterval(autoMove, interval);
// 鼠标移入停止自动切换
container.onmouseenter = function () {
    clearInterval(autoTimer);
}

// 鼠标离开停止自动切换
container.onmouseleave = function () {
    autoTimer = setInterval(autoMove, interval);
};


// 点击焦点切换图片

Array.from(paginationList).forEach((item, index) => {
    // console.log(item,index)
    item.onclick = function () {
        if (index === step) return;
        prev = step;
        step = index;
        change();
    }
})

// 右按钮点击
changeRight.onclick = autoMove;
// 左按钮点击
changeLeft.onclick = function () {
    prev = step;
    step--;
    step < 0 ? step = len - 1 : null;
    change();
}
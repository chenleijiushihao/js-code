$(function () {
    // 获取元素
    let $box = $(box),
        $ul = $box.children('ul'),
        $lis = $box.find('.slide'),
        $paginationList = $box.find('.pagination>ul>li'),
        $leftBtn = $box.find('.btn_box>.left_btn'),
        $rightBtn = $box.find('.btn_box>.right_btn');
    // 定义公共数据
    let step = 0,
        interval = 1500,
        autoTimer = null,
        len = $lis.length;

    // 自动轮播    
    function autoMove() {
        if (step === (len - 1)) {
            step = 0;
            $ul.css({
                left: '0px',
                transitionDuration: '0s'
            });
            $ul.offset();
        }
        step++;
        $ul.css({
            left: -step * 1000 + 'px',
            transitionDuration: '0.3s'
        });
        paginationFocus()
    }
    // 焦点对齐
    function paginationFocus() {
        let tempStep = step;
        tempStep === (len - 1) ? tempStep = 0 : null;
        $paginationList.each((index, item) => {
            if (index === tempStep) {
                $(item).addClass('active');
                return;
            }
            $(item).removeClass('active');
        })
    }
    // 鼠标移入停止自动轮播
    $box.on('mouseenter', function () {
        clearInterval(autoTimer);
    })

    // 鼠标离开自动轮播
    $box.on("mouseleave", function () {
        autoTimer = setInterval(autoMove, interval);

    })

    // 加载页面开始自动轮播
    autoTimer = setInterval(autoMove, interval);


    // 鼠标点击焦点实现切换
    $paginationList.each((index, item) => {
        $(item).on('click', function () {
            if (index === step || (index === 0 && step === (len - 1))) {
                return;
            }
            step = index;
            $ul.css({
                left: -step * 1000 + 'px',
                transitionDuration: '0.3s'
            });
            paginationFocus()
        })
    })
    // 点击左箭头实现划动
    $leftBtn.on('click', function () {
        if (step === 0) {
            step = len - 1;
            $ul.css({
                left: -step * 1000 + 'px',
                transitionDuration: '0s'
            });
            $ul.offset();
        }
        step--;
        $ul.css({
            left: -step * 1000 + 'px',
            transitionDuration: '0.3s'
        });
    })

    // 点击右箭头实现划动
    $rightBtn.on('click', autoMove);




})
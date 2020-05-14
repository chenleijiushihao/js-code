$(function () {
    // 获取元素

    let $container = $(".container"),
        $arrowLeft = $container.find(".arrow-left"),
        $arrowRight = $container.find(".arrow-right"),
        $Wrapper = $container.find(".wrapper"),
        $wrapperList = $Wrapper.find(".wrapper-list"),
        $item = $wrapperList.find(".item");
    console.log($item);


    //

    // 定义初始的参数
    let $curIndex = 0,
        prev = 0,
        len = $wrapperList.length;
    // console.log(len)

    // 实现切换
    function change() {
        if ($curIndex < 0) {
            $curIndex = len - 1;
        } else if ($curIndex > len - 1) {
            $curIndex = 0;
        }

        $wrapperList.hide().eq($curIndex).show();

    }

    // 左边点击
    $arrowLeft.on('click', function () {
        $curIndex--;
        change();
    });

    // 右边点击
    $arrowRight.on('click', function () {
        $curIndex++;
        change();
    })

    // 推拉门效果
    $item.on('mouseenter', function () {
        let $this = $(this);
        console.log($this.index())
        if ($this.index() === $this.length-1) {
            $this.addClass("item-hover");
            $this.siblings().addClass("item-no-width");
            $this.siblings().eq(0).removeClass('item-no-width');
            $this.siblings().eq(1).removeClass('item-no-width');
        } else {
            $this.addClass("item-hover");
            $this.siblings().addClass("item-no-width");
            $this.next().attr('class', "item");
        }
    })

    $item.on('mouseleave', function () {
        let $this = $(this);
        $this.attr("class", "item");
        $this.siblings().removeClass("item-no-width");
    })
});







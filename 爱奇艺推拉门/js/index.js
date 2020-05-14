$(function () {
    // 获取元素

    let $aqyContainer = $(".aqy-container"),
        $arrowLeft = $aqyContainer.find(".aqi-arrow-left"),
        $arrowRight = $aqyContainer.find(".aqi-arrow-right"),
        $aqyWrapper = $aqyContainer.find(".aqy-wrapper"),
        $wrapperList = $aqyWrapper.find(".aqy-wrapper-list"),
        $wrapperBox = $wrapperList.find(".aqy-wrapper-box"),
        $aqyItem = $wrapperBox.find(".aqy-item"),
        $aqyExpand = $aqyItem.find(".aqy-expand"),
        $expandLeft = $aqyExpand.children(".aqy-expand-left"),
        $expandRight = $aqyExpand.children(".aqy-expand-right"),
        $aqyBanner = $expandRight.children(".aqy-banner");


    //

    // 定义初始的参数
    let $curIndex = 0,
        prev = 0,
        len = $wrapperBox.length;
    // console.log(len)

    // 实现切换
    function change() {
        if ($curIndex < 0) {
            $curIndex = len - 1;
        } else if ($curIndex > len - 1) {
            $curIndex = 0;
        }

        $wrapperBox.hide().eq($curIndex).show();

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
    $aqyItem.on('mouseenter', function () {
        let $this = $(this);
        console.log($this.index())
        if ($this.index() === 6||$this.index() === 5) {
            $this.addClass("item-hover");
            $this.siblings().addClass("item-no-width");
            $this.siblings().eq(0).removeClass('item-no-width');
            $this.siblings().eq(1).removeClass('item-no-width');
        }  else {
            $this.addClass("item-hover");
            $this.siblings().addClass("item-no-width");
            $this.nextAll().attr('class', "aqy-item");
        }
    })

    $aqyItem.on('mouseleave', function () {
        let $this = $(this);
        $this.attr("class", "aqy-item");
        $this.siblings().removeClass("item-no-width");
    })
});







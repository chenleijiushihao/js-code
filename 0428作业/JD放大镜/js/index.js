/* 封装JQ版本的插件 */
$.fn.extend({
    FDplubgin: function (opation = {}) {
        // 参数初始化处理
        opation = Object.assign({
            backgroundColor: 'rgba(0, 0, 0, .4)',
        }, opation);

        // 获取需要操作的元素
        let $this = $(this),
            $smallBox = $this.children('.small-box'),
            $mask = $smallBox.children('.mask'),
            $bigBox = $this.children('.big-box'),
            $bigImg = $bigBox.children('img');
        console.log($this)

        $smallBox.on('mouseenter', function () {
            $mask.show();
            $bigBox.show();
        });
        $smallBox.on('mousemove', function (e) {
            let o = $smallBox.offset();

            let T = e.pageY - o.top - $mask.height() / 2;
            let L = e.pageX - o.left - $mask.width() / 2;
            console.log(L);
            let maxT = $smallBox.height() - $mask.height();
            let maxL = $smallBox.width() - $mask.width();

            L = L < 0 ? 0 : (L > maxL ? maxL : L);
            T = T < 0 ? 0 : (T > maxT ? maxT : T);
            $mask.css({
                backgroundColor: opation.backgroundColor,
                left: L + 'px',
                top: T + 'px',
            })

            let n = $bigBox.height() / $mask.height();
            $bigImg.css({
                left: -L * n + 'px',
                top: -T * n + 'px',
            })

        });
        $smallBox.on('mouseleave', function () {
            $mask.hide();
            $bigBox.hide();
        })
    }
});

$("#fd1").FDplubgin({
    backgroundColor: 'rgba(33, 10, 100, .4)'
});

$("#fd2").FDplubgin({
    backgroundColor: 'rgba(29, 210, 100, .4)'
});
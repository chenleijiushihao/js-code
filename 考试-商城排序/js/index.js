/* 单例模式来实现商城排序 */
let shopModule = (function () {
    //获取元素
    let navList = document.querySelectorAll('.navlist li'),
        cardList = document.querySelector('.cardlist'),
        data = null;
    // console.log(cardList);

    // 获取数据

    let queryData = function queryData() {
        let xhr = new XMLHttpRequest;
        xhr.open('get', './json/product.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                data = JSON.parse(xhr.responseText);
                console.log(data);
            }
        }
        xhr.send();
    }
    // 数据渲染到页面
    let render = function render() {
        let str = ``;
        data.forEach(item => {
            let {
                id,
                title,
                time,
                hot,
                price,
                img
            } = item;
            str += `
            <div class="card">
            <img src="${img}" alt="">
            <h2>${title}</h2>
            <p>价格：¥${price.toFixed(2)}</p>
            <p>销量：${hot}</p>
            <p>时间：${time.replace(/-/g, '/')}</p>
        </div>`;
        });
        cardList.innerHTML = str;
    };

    let clear = function clear() {
        Array.from(navList).forEach(item => {
            if (item !== this) {
                item.flag = -1;
            }
        })
    }



    //绑定点击事件
    let handle = function handle() {
        Array.from(navList).forEach(item => {
            item.flag = -1;
            item.onclick = function () {
                clear.call(this);
                this.flag *= -1;
                let pai = this.getAttribute('data-pai');
                data.sort((a, b) => {
                    a = String(a[pai]).replace(/-/g, '');
                    b = String(b[pai]).replace(/-/g, '');
                    return (a - b) * this.flag;
                });
                render();
            }
        })
    }



    return {
        init() {
            queryData();
            render();
            handle();
        }
    }
})();
shopModule.init();
let moudle = (function () {
    let columns = Array.from(document.querySelectorAll('.column')),
        _data = [];
    // 获取数据
    let getData = function () {
        let xhr = new XMLHttpRequest;
        xhr.open('get', 'json/data.json', false);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                _data = JSON.parse(xhr.responseText);
            }
        }
        xhr.send();
        // console.log(_data);
    }

    // 数据渲染到页面   
    let bindHTML = function bindHTML() {
        _data = _data.map(item => {
            let h = item.height;
            let w = item.width;
            h = h / (w / 230);
            item.width = 230;
            item.height = h;
            return item;
        })
        for (let i = 0; i < _data.length; i += 3) {
            let group = _data.slice(i, i + 3);
            group.sort((a, b) => {
                return a.height - b.height;
            })
            columns.sort((a, b) => {
                return b.offsetHeight - a.offsetHeight
            })
            group.forEach((item, index) => {
                let {
                    pic,
                    height,
                    title,
                    link
                } = item;
                let card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `<a href="${link}">
                <div class="lazyImageBox" style="height:${height}px">
                    <img src="" alt="" data-image="${pic}">
                </div>
                <p>${title}</p>
            </a>`;
                columns[index].appendChild(card);
            })
        }
    }


    // 懒加载
    let lazyFunc = function lazyFunc() {
        let lazyImageBoxs = Array.from(document.querySelectorAll('.lazyImageBox'));
        lazyImageBoxs.forEach(item => {
            let isLoad = item.getAttribute('isLoad');
            if (isLoad === 'true') return;
            let B = utils.offset(item).top + item.offsetHeight / 2;
            let A = document.documentElement.clientHeight +
                document.documentElement.scrollTop;
            if (B <= A) {
                lazyImg(item)
            }
        })
    }
    let lazyImg = function lazyImg(item) {
        let img = item.querySelector('img '),
            dataImage = img.getAttribute('data-image'),
            tempImage = new Image;
        tempImage.src = dataImage;
        tempImage.onload = () => {
            img.src = dataImage;
            utils.css(img, 'opacity', 1);
        }
        img.removeAttribute('data-image');
        tempImage = null;
        item.setAttribute('isLoad', 'true');
    }

    //加载更多数据
    let loadMoreData = function loadMoreData() {
        let isReader;
        let HTML = document.documentElement;
        if (HTML.clientHeight * 1.5 + HTML.scrollTop >= HTML.scrollHeight) {
            if (isReader) return;
            isReader = true;
            getData();
            bindHTML();
            lazyFunc();
            isReader = false;
        }
    }


    return {
        init() {
            getData();
            bindHTML();
            lazyFunc();
            window.onscroll = () => {
                lazyFunc();
                loadMoreData();
            }
        }
    }
})();
moudle.init();
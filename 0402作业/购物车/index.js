(function () {
    let lis = document.getElementsByTagName('li');
    let ems = document.querySelectorAll('.info em');
    for (let i = 0; i < lis.length; i++) {
        console.log(lis[i]);
        addClick(lis[i]);
    }
    // 循环的时候给每个li的i绑定点击事件
    function addClick(li) {
        let lis_i = li.getElementsByTagName('i');
        let em = li.getElementsByTagName('em')[0];
        let strongs = li.getElementsByTagName('strong');
        // 给点击减少绑定事件，每个li里面有两个i标签，减少为第一个标签，索引为[0],所以给lis_[0]绑定事件
        lis_i[0].onclick = function () {
            // 购物车的最小数量为0，所以需要判断一下，当最小数量小于0的时候要修改为0
            if (Number(em.innerHTML <= 0)) {
                em.innerHTML = 0;
            } else {
                em.innerHTML = Number(em.innerHTML) - 1;
            }
            strongs[1].innerHTML = Number(em.innerHTML) * parseFloat(strongs[0].innerHTML) + '元';
            screen();
        }
        lis_i[1].onclick = function () {
            em.innerHTML = Number(em.innerHTML) + 1;
            strongs[1].innerHTML = Number(em.innerHTML) * parseFloat(strongs[0].innerHTML) + '元';
            screen();
        }
    }
    function screen() {
        let total = 0;
        let allPrice = 0;
        let ary = [0];
        for (let i = 0; i < lis.length; i++) {
            let lis = document.getElementsByTagName('li');
            let em = lis[i].getElementsByTagName('em')[0];
            let strongs = lis[i].getElementsByTagName('strong');
            total += Number(em.innerHTML);
            allPrice += parseFloat(strongs[1].innerHTML);
            if (Number(em.innerHTML) >= 1) {
                ary.push(parseFloat(strongs[0].innerHTML))
            }
        }
        ary.sort((a, b) => b - a);
        ems[0].innerHTML = total;
        ems[1].innerHTML = allPrice;
        ems[2].innerHTML = ary[0];
    }
})()
// 输入框获取焦点显示搜索框


function search() {
    let container = document.querySelector('.container'),
        header = container.querySelector('#head'),
        searchText = container.querySelector('#search-text'),
        searchResult = container.querySelector('.search-result');
    searchText.onfocus = function () {
        searchResult.style.display = 'block';
    }
    searchText.onblur = function () {
        searchResult.style.display = 'none';
    }
}
search();
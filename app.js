const items = document.querySelector('.data');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


let itemsPerPage = 8;
const data = [];
let count = 1;
let currPage = 0;
let currentPageData;
let listItem;

while (count <= 111) {
    item = 'data-' + count;
    data.push(item);
    count++;
}
let pageNo = Math.round((data.length) / itemsPerPage);
console.log(pageNo);
const updatePageContent = () => {
    let dataList = document.querySelectorAll('h2');
    dataList.forEach(ele => {
        currentPageData
        ele.innerText = '';
        if (ele.innerText == '') {
            ele.remove();
        }
    })
}

const updatePageData = () => {
    currentPageData = data.filter((ele, index) =>  
    index >= (itemsPerPage * currPage) && index <= (itemsPerPage * (currPage + 1) - 1))

    currentPageData.forEach(ele => {
        listItem = document.createElement('h2');
        listItem.innerText = ele;
        items.appendChild(listItem);
    })
}
updatePageData();

prev.addEventListener('click', () => {
    currPage > 0 ? currPage-- : currPage;
    updatePageContent();
    updatePageData();
})
next.addEventListener('click', () => {
    console.log(currPage);
    currPage<(pageNo%2==0?(pageNo-1):pageNo)?currPage++:currPage;
    updatePageContent();
    updatePageData();
})

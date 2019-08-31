//获取按钮  点名和重置
var btn = document.querySelector('.btn>button');
//获取名字显示的位置
var banner = document.querySelector('.banner');
//获取所有的tr
var tr = document.querySelectorAll('tbody tr');
//获取所有设置已点的按钮
var btns = document.querySelectorAll('tbody tr td button');

//遍历设置已点的数组
for (var j = 0; j < btns.length; j++) {
    //点击改变他们的样式
    btns[j].onclick = function () {
        this.parentElement.previousElementSibling.innerHTML = true;
        this.parentElement.parentElement.style.color = 'rgb(200,20,20)';
        this.parentElement.parentElement.style.background = 'rgb(100,100,100)';
        this.disabled = true;

        run();
    }
}


//这个函数来做tr的随机下标的数组
function run() {
    //声明一个随机的数组来做tr的随机下标数组
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
    //为true的让arr对应的下标值为null
    for (var q = 0; q < tr.length; q++) {
        tr[q].index = q;
        if (tr[q].getElementsByTagName('td')[1].innerHTML == 'true') {
            for (var a = 0; a < arr.length; a++) {
                arr[q] = null;
            }
        }
    }
    //新的数组复制上个数组并去掉null
    newArr = arr.filter(function (key) {
        return key !== null
    })
    //随机排序一下
    newArr.sort(function () { return Math.random() - 0.5; })
    console.log(newArr)
    //返回newArr的值，方便后面使用
    return newArr;
}

//i当作下标
var i = 0;
btn.onclick = function () {
    //接受newArr
    var newArr = run();
    var trone = tr[newArr[i]];
    //当前的序号姓名赋值给banner里
    if (i == newArr.length) {
        i = null;
        banner.innerHTML = '点名完毕'
    } else if (trone.firstElementChild.nextElementSibling.nextElementSibling.innerHTML == 'false') {
        banner.innerHTML = trone.firstElementChild.innerHTML + '  ' + trone.firstElementChild.nextElementSibling.innerHTML;
    } else if (trone.firstElementChild.nextElementSibling.nextElementSibling.innerHTML == 'true') {
        banner.innerHTML = trone.firstElementChild.innerHTML + '  ' + trone.firstElementChild.nextElementSibling.innerHTML;
    }
    //出现在banner的trtd改变他们的样式    
    for (var a = 0; a < tr.length; a++) {
        if (banner.innerHTML == tr[a].firstElementChild.innerHTML + '  ' + trone.firstElementChild.nextElementSibling.innerHTML) {
            tr[a].getElementsByTagName('td')[1].innerHTML = true;
            tr[a].style.color = 'rgb(200,200,200)';
            tr[a].style.background = 'rgb(100,100,100)';
            tr[a].getElementsByTagName('td')[2].firstElementChild.style.background = 'rgb(200,200,200)';
            tr[a].getElementsByTagName('td')[2].firstElementChild.disabled = true;
        }
    }
    run()
}

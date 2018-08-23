//引入header&footer
;(function(){

    jQuery(function($){

        $('#j_header').load('../html/header&footer.html .j_header');
        $('#j_footer').load('../html/header&footer.html .j_footer');
    })

})();





//从数据库提取数据    价格时间排序
document.addEventListener('DOMContentLoaded',()=>{
            
    // 实例化一个异步请求对象
    var xhr = new XMLHttpRequest();//readyState=0

    xhr.onreadystatechange = function(){
        // console.log(xhr.readyState)
        if(xhr.readyState === 4){
            // 确认数据接收完毕
            // 在次获取数据：responseText
            var data = JSON.parse(xhr.responseText);
            console.log(data);



            // 获取元素
            var goodslist = document.querySelector('.goodslist');

            goodslist.innerHTML = data.map(function(list,idx){ console.log(list,idx);
                return `<li data-guid="${list.id}">
                    <img class="img1" src="../img/list/${list.imgurl}"/>
                    <p class="rate">${list.rate}</p>
                    <img class="img2" src="../img/list/${list.xxurl}"/>
                    <h4 class="h4">${list.name}</h4>
                    <p class="content">${list.content}</p>
                    <p class="date">Date：${list.date.slice(0,10)}</p>
                    <p class="price">Price：CNY ${list.price}</p> 
                </li>`
            }).join('\n');




            // 获取a标签
            var links = goodslist.getElementsByTagName('img');   console.log(links)

            for(var i=0;i<links.length;i++){
                links[i].idx = i;
                links[i].onclick = function(){
                    // 通过索引值获取商品信息
                    var goods = data[this.idx];

                    // Object->String（id=001&name=ip7&price=...）
                    var params = '';
                    for(var key in goods){
                        params += key + '=' + goods[key] + '&'
                    }

                    // 去除多余的&
                    params = params.slice(0,-1);

                    // 修改href属性
                    // this.href = '06goods.html?'+params

                    // 在js中跳到06goods.html
                    location.href = '../index.html?' + params;s

                    console.log(params);
                }
            }




        }
    }

    // 配置参数，建立与服务器连接
    xhr.open('get','../api/list.php',true);//readyState=1

    // 发起请求
    xhr.send();//readyState=2
    // console.log(xhr);
    












 
    // ————————————————————————日期排序——————————————————————————————

    //获取页面元素
    var date = document.querySelector('.date');
    var price = document.querySelector('.price');

    

    //获取页面元素
    var goodslist = document.getElementById('goodslist');
    var a = 'aaa';
    

    //根据数据生成ul，li
    function init(){
        var html = '<ul>';
        for(var i=0;i<data.length;i++){
            // 拼接li
            html += `<li data-guid="${data[i].id}">
            <a href="html/a.html"><img src="${data[i].imgurl}"/></a>
            <h4>${data[i].name}</h4>
            <p class="price"><del>${data[i].price}</del></p>
            <p class="price1"><span>${data[i].sale}</span></p>
            <p class="price2"><span>${data[i]._price}</span></p>
            <p class="date"><span>${data[i].date}</span></p>
            <p class="who">${data[i].who}</p>
            </li>`;
    
        }
        //闭合ul
        html += '</ul>';
        // 把ul写入页面
        goodslist.innerHTML = html;
    }

    // 页面初始化，函数执行
    init();
    

    //鼠标hover在Date上.....点击实现排序
    function rank(){
        var length = data.length;
        for(var i = length - 1; i > 0; i--){
            for(var j = 0; j < i; j++){
                var front = (new Date(data[j].date)).getTime()
                var later = (new Date(data[j+1].date)).getTime();
                if (front > later) { 
                    var temp = data[j];
                    data[j] = data[j+1];
                    data[j+1] = temp;
                }
            }
        }
    }
    

    full.onclick = function(){
        rank();
        // 调用函数，重置由新到旧的价格
        init();
    }

    up.onclick = function(){
        rank();
        data = data.reverse();
        init();
    }













    // ————————————————————————价格排序——————————————————————————————
   
    //获取页面元素
    var price = document.getElementById('price');
    var hide_p = document.getElementById('hide_p');
    var priceFull = document.getElementById('priceFull');
    var priceUp = document.getElementById('priceUp'); 

    price.onmousemove = function(){
        hide_p.style.display = "block";
    }

    price.onmouseout = function(){
        hide_p.style.display = "none";
    }



    //获取页面元素
    var goodslist = document.getElementById('goodslist');

    //根据数据生成ul，li
    function priceinit(){
        var html = '<ul>';
        for(var i=0;i<data.length;i++){
            // 拼接li
              html += `<li data-guid="${data[i].id}">
                <a href="html/a.html"><img src="${data[i].imgurl}"/></a>
                <h4>${data[i].name}</h4>
                <p class="price"><del>${data[i].price}</del></p>
                <p class="price1"><span>${data[i].sale}</span></p>
                <p class="price2"><span>${data[i]._price}</span></p>
                <p class="date"><span>${data[i].date}</span></p>
                <p class="who">${data[i].who}</p>
            </li>`;
        }
        //闭合ul
        html += '</ul>';
        // 把ul写入页面
        goodslist.innerHTML = html;
    }

    // 页面初始化，函数执行
    priceinit();
    

    //鼠标hover在Date上.....点击实现排序
    function pricerank(){
        var length = data.length;
        for(var i = length - 1; i > 0; i--){
            for(var j = 0; j < i; j++){
                var front =  data[j].sale;
                var later =  data[j+1].sale;
                if (front > later) { 
                    var temp = data[j];
                    data[j] = data[j+1];
                    data[j+1] = temp;
                }
            }
        }
    }
    


    priceFull.onclick = function(){
        pricerank();
        data = data.reverse();
        // 调用函数，重置由新到旧的价格
        priceinit();
    }

    priceUp.onclick = function(){
        pricerank();

        // console.log(price);

        priceinit();
    }
    
    









});


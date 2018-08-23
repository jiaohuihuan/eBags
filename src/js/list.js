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



            // 获取元素
            var goodslist = document.querySelector('.goodslist');
          

                jiegou(data);
              


                //点击价格排序（重置页面）
                var init = 1;
                price.onclick = function(){
                    var res = pricerank(data);
                    if(init==1){
                        jiegou(res);
                        init = 2;
                    }else if(init==2){
                        res.reverse();
                        jiegou(res);
                        init = 1;
                    }
                    
                }



                //点击日期排序（重置页面）
                var init = 1;
                 date.onclick = function(){
                    var res = daterank(data);
                    if(init==1){
                        jiegou(res);
                        init=2;                             
                    }else if(init==2){
                        res.reverse();
                        jiegou(res);
                        init = 1;
                    }
                }

       




            // 获取img标签
            var links = goodslist.getElementsByTagName('img'); 
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


                    // 在js中跳到06goods.html
                    location.href = 'goods.html?' + params;

                }
            }


        }
    }

    // 配置参数，建立与服务器连接
    xhr.open('get','../api/list.php',true);//readyState=1

    // 发起请求
    xhr.send();//readyState=2

    





    // ————————————————————————价格排序——————————————————————————————
   
    //获取页面元素
    var price = document.querySelector('.price');
    var date = document.querySelector('.date');   
    var goodslist = document.querySelector('.goodslist');
    // console.log(price,date,goodslist);


    // 根据数据生成li
    function jiegou(a){  
                goodslist.innerHTML = a.map(function(list,idx){    //console.log(list,idx);
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
    }

    
    

    //点击price实现排序
    function pricerank(arr){
        var length = arr.length;   //console.log(goodslist);
        for(var i = length - 1; i > 0; i--){
            for(var j = 0; j < i; j++){
                var front =  arr[j].price;
                var later =  arr[j+1].price;
                if (front > later) { 
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        return arr;
    }
    





 
    // // ————————————————————————日期排序——————————————————————————————

    //获取页面元素
    var price = document.querySelector('.price');
    var date = document.querySelector('.date');
    var goodslist = document.querySelector('.goodslist');
        

 
    //点击date实现排序
    function daterank(arr){
        var length = arr.length;
        for(var i = length - 1; i > 0; i--){
            for(var j = 0; j < i; j++){
                var front = (new Date(arr[j].date)).getTime()
                var later = (new Date(arr[j+1].date)).getTime();
                if (front > later) { 
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        return arr;
    }
    




});


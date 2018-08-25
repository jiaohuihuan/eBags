//引入header&footer
;(function(){

    jQuery(function($){

        $('#j_header').load('../html/header&footer.html .j_header');
        $('#j_footer').load('../html/header&footer.html .j_footer');


        //获取大图节点，该节点执行lxzoom()放大镜插件的方法
        $('.lx-zoom').lxzoom();


        // 点击小图,大图位置的路径变成小图的路径
        $('.small').on('mousemove','img',function(){
                $('.lx-zoom img').attr({
                    'src':this.src,
                });
        })

    })

})();







;document.addEventListener('DOMContentLoaded',()=>{

    var url = location.search,
    obj = {};

    if(url.indexOf("?") != -1) {　　
        var str = url.substr(1);
        strs = str.split("&");　　
        for(var i = 0; i < strs.length; i++) {　　　
            obj[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);　　
        }

    }

    // console.log('传过来的参数是:', obj.id);


    var id = obj.id;
    

    var xhr = new XMLHttpRequest();
   
    xhr.onreadystatechange = function(){

        if(xhr.readyState === 4){
            // 确认数据接收完毕
            // 在次获取数据：responseText
            var data = JSON.parse(xhr.responseText);

              // console.log(data)

            // 获取数据库数据
            var dataimg = data[0].imgurl;
            var dataname = data[0].name;
            var dataprice = data[0].price;
            // console.log(dataimg);


            // 获取页面元素
            var img = document.querySelector('.big');
            var name = document.querySelector('.dataname');
            var price = document.querySelector('.dataprice');
            var simg = document.querySelector('.simg');
          


            //把被点击的商品信息加载到详情页
            img.children[0].src = '../img/list/'+dataimg;
            simg.children[0].src ='../img/list/'+dataimg; 
            name.innerText = dataname;
            price.innerText = dataprice;



 // -------------------------商品添加到购物车———————————————————————

            var c_btn = document.querySelector('.add');

            var goodslist = Cookie.get('goodslist');//'[{},{}]' /[]
            
           
            
            if(goodslist!= ''){
                //如果goodslist得到一个空字符串变成空数组
                 goodslist = JSON.parse(goodslist);

            }else{
                //如果goodslist得到一个json字符串变成数组
               
                 goodslist = [];
            }
            
            var qty=1;
            $('.num').on('change',function(){
                qty = $(this).val()*1;
            })

            // 点击添加购物车
            c_btn.onclick=function(){

                //获取商品信息
                var goods = {
                    
                    imgurl:img.children[0].src,
                    name:name.innerText,
                    price:price.innerText,
                    qty:qty
                }
               
                console.log(goods);
                
                 //添加商品到数组
                goodslist.push(goods);

                //写入cookie
                document.cookie = 'goodslist=' + JSON.stringify(goodslist);

                // 跳转到购物车
                location.href = 'car.html';

            };
           
// -------------------------商品添加到购物车———————————————————————

        }
    }



    xhr.open('get','../api/goods.php?id='+id,true);

    xhr.send();



});
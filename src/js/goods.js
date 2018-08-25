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

              // console.log(data[0].imgurl)

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


                 
        }
    }



    xhr.open('get','../api/goods.php?id='+id,true);

    xhr.send();






    //商品添加到购物车—————————————————————————————————————————
    
    var c_img = document.querySelector('.c_img');
    var c_name = document.querySelector('.dataname');
    var c_price = document.querySelector('.dataprice');
    var c_qty = document.querySelector('.num');
    var c_btn = document.querySelector('.add');
    var c_goods = document.querySelector('.goods_t');
    console.log(c_img,c_name,c_price,c_qty,c_btn,c_goods);
         


        // 声明一个变量，用于存放所有添加的商品信息
        var goodslist = Cookie.get('goodslist');//'[{},{}..]' 或 ''

        if(goodslist === ''){
            goodslist = []
        }else{
            goodslist = JSON.parse(goodslist);//goodslist必须为json字符串
        }


        // 事件委托
        // 利用事件委托实现添加到购物车的效果
        c_goods.onclick = function(e){
            // Event对象兼容
            e = e || window.event;

            // 事件源对象兼容
            var target = e.target || e.srcElement;


            // 判断是否点击了添加购物车按钮
            if(target.className === 'c_btn'){
                // 获取当前需要提取内容的容器
                // var currentLi = target.parentNode.parentNode;//goods_t_r
                var guid = c_goods.getAttribute('data-guid');

                // 判断当前商品是否已经添加过
                // * 已添加：找出这个商品，数量+1
                // * 未添加：创建对象，商量为1，写入数组

                var currentGoods = goodslist.filter(function(g){
                    return g.guid === guid;
                });//[{}]或[]

                if(currentGoods.length>0){
                    // 存在，数量+1
                    currentGoods[0].c_qty++;
                }else{
                    // 不存在，添加商品

                    // 获取商品信息
                    // 把goods保持外观，存入cookie(只能字符串)：json字符串
                    var goods = {
                        guid:guid,
                        c_bigsrc: c_img.src,
                        c_name: c_name.innerText,
                        c_price: dataprice.innerText,
                        c_qty:1
                    }

                    // 当前商品添加到数组
                    goodslist.push(c_goods);
                }


                Cookie.set('goodslist',JSON.stringify(goodslist));
            }
        }















});
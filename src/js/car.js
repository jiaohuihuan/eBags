//引入header&footer
;(function(){

    jQuery(function($){

        $('#j_header').load('../html/header&footer.html .j_header');
        $('#j_footer').load('../html/header&footer.html .j_footer');


//购物车列表生成以内————————————————————————————————————————————   
        /*
            购物车页
                * 读取cookie -> 显示到页面
                * 删除cookie -> 显示到页面
                    * 清除所有商品
                    * 删除单个商品
         */
        var oCarList = document.getElementById('carList');
        var oSubPrice = document.querySelector('.subPrice');
        var btnClear = document.querySelector('.btnClear');

             

        var goodslist = Cookie.get('goodslist');//'[{}]',''

        if(goodslist.length<=0){
            goodslist = [];
        }else{
            goodslist = JSON.parse(goodslist);
        }


        render();

        // 清空购物车
        // 删除goodslist这个cookie
        btnClear.onclick = function(e){

            // 清空cookie
            Cookie.remove('goodslist');

            // 清空goodslist数组
            goodslist = [];

            render();


            e.preventDefault();
        }


        btnClear.onmousemove = function(){
            btnClear.style.backgroundColor = '#A52325';
            btnClear.style.color = '#fff';

        }

        btnClear.onmouseout = function(){
            btnClear.style.backgroundColor = '#ddd';
            btnClear.style.color = '#000';
        }





        // 删除单个商品
        // * 找出删除的商品 -> 从数组中移除 -> 重写cookie -> 渲染页面
        
        // 删除单个商品原生js方法————————————————————————————
        var btn=document.getElementsByClassName('btnClose')
        for(let i=0;i<btn.length;i++){
            btn[i].onclick=function(){

                goodslist.splice(i,1);
                Cookie.set('goodslist',JSON.stringify(goodslist));
                render();


            }
        }



        // 删除单个商品jquery方法——————————————————————————————————
       // $('#carList ul li').on('click',function(e){
       //      if(e.target.className==='btnClose'){
       //       goodslist.splice($(this).index(),1);
       //       Cookie.set('goodslist',JSON.stringify(goodslist));
       //      render();
       //   }
           
       // })






        function render(){

            // 根据数据生成html结构
            var ul = document.createElement('ul');

            // 计算总价
            var total = 0;

            ul.innerHTML = goodslist.map(function(goods){
                // 计算总价
                total += goods.price * goods.qty;

        

                return `<li>
                    <img class="showimg" src="${goods.imgurl}"/>
                    <div class="jj_div1">
                        <p class="jj_p1" >eBags-Packing Cubes-3pc Set</p>
                        <p class="jj_p2" >Color: </p>
                        <p class="jj_p3" >Quantity:</p>
                        <p class="jj_p4" ><span>${goods.qty}</span><span>Update</span></p>
                        <p class="jj_p5" >Remove | Add to Favorites</p>
                    </div>
                    <div class="jj_div2">
                        <h4 class="jj_name" >${goods.name}</h4>
                        <p class="jj_price">item Price <span>${goods.price}</span> &times;${goods.qty}</p>
                    </div>
                    <span class="btnClose">&times;</span>
                </li>`;





            }).join('\n');

            // 把ul写入页面#carList
            oCarList.innerHTML = '';
            oCarList.appendChild(ul);

            // 写入总价
            oSubPrice.innerHTML = total.toFixed(2);
        }



//购物车列表生成以内————————————————————————————————————————————   

        
    })

})();









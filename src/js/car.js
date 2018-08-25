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

            // 手动刷新页面
            // location.reload()
        }

        // 删除单个商品
        // * 找出删除的商品 -> 从数组中移除 -> 重写cookie -> 渲染页面
        oCarList.onclick = function(e){
            e = e || window.event;

            var target = e.target || e.srcElement;

            // 判断是否点击了按钮
            if(target.className === 'btn-close'){
                // 获取当前li
                var currentLi = target.parentNode;

                // 获取当前商品的guid
                var guid = currentLi.getAttribute('data-guid');

                // 找出数组中对应商品并移除
                for(var i=0;i<goodslist.length;i++){
                    if(goodslist[i].guid === guid){
                        goodslist.splice(i,1);
                        break;
                    }
                }

                // 重写cookie
                Cookie.set('goodslist',JSON.stringify(goodslist));

                // 重新渲染页面
                render();
            }
        }

        function render(){

            // 根据数据生成html结构
            var ul = document.createElement('ul');

            // 计算总价
            var total = 0;

            ul.innerHTML = goodslist.map(function(goods){
                // 计算总价
                total += goods.price * goods.qty;

        

                return `<li data-guid="${goods.guid}">
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
                    <span class="btn-close">&times;</span>
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









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
            console.log(dataimg);


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








// __________________________________放大镜实验————————————————————————————————



    // $(function(){           
    //    $(".jqzoom").jqueryzoom({
    //         xzoom:400,
    //         yzoom:400,
    //         offset:10,
    //         position:"right",
    //         preload:1,
    //         lens:1
    //     });
    //     $("#spec-list").jdMarquee({
    //         deriction:"left",
    //         width:350,
    //         height:56,
    //         step:2,
    //         speed:4,
    //         delay:10,
    //         control:true,
    //         _front:"#spec-right",
    //         _back:"#spec-left"
    //     });
    //     $("#spec-list img").bind("mouseover",function(){
    //         var src=$(this).attr("src");
    //         $("#spec-n1 img").eq(0).attr({
    //             src:src.replace("\/n5\/","\/n1\/"),
    //             jqimg:src.replace("\/n5\/","\/n0\/")
    //         });
    //         $(this).css({
    //             "border":"2px solid #ff6600",
    //             "padding":"1px"
    //         });
    //     }).bind("mouseout",function(){
    //         $(this).css({
    //             "border":"1px solid #ccc",
    //             "padding":"2px"
    //         });
    //     });             
    // })




// __________________________________放大镜实验————————————————————————————————









});
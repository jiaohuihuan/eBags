
//引入header&footer
;(function(){

    jQuery(function($){

        $('#j_header').load('../html/header&footer.html .j_header',function(){
             $(".car").on("click",function(){
            
            // 跳转到购物车
            location.href = 'car.html';
                 
            })
        }); 

       

        $('#j_footer').load('../html/header&footer.html .j_footer');
    })

})();




//登录

document.addEventListener('DOMContentLoaded',()=>{
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let btnLogin = document.querySelector('.btnLogin');
    // console.log(email,password,btnLogin); 


    // email.onclick = function(){
    //     email.style.borderColor = '#039B9F';

    // }
    

     
    email.onfocus = function(){
        email.style.borderColor = '#006DD9';

    }

    email.onblur = function(){
        email.style.borderColor = '#ccc';

    }



     
    password.onfocus = function(){
        password.style.borderColor = '#006DD9';

    }

    password.onblur = function(){
        password.style.borderColor = '#ccc';

    }


    btnLogin.onmousedown = ()=>{
        btnLogin.style.background = "#143D8D";
        btnLogin.style.color = "#fff";
    }

    btnLogin.onmouseup = ()=>{
        btnLogin.style.background = "#F8F8F8";
        btnLogin.style.color = "#000";
    }





    var status = [200,304];

    // 填写正确点击登录跳转页面
    btnLogin.onclick = ()=>{

        let _email = email.value;
        var _password = password.value;

        let xhr = new XMLHttpRequest();
            
        xhr.onload = ()=>{
            if(status.indexOf(xhr.status) >= 0){
    
                if(xhr.responseText === 'yes'){
                   console.log(xhr.responseText)
                        
                    location.href = "../index.html";

                }else if(xhr.responseText === 'no'){
                    alert('电子邮箱或密码不正确')

                }
            }
        }
        xhr.open('post','../api/login.php',true);

        // 设置请求头，以便后端接收post数据
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');


        xhr.send(`email=${_email}&password=${_password}`);

        
        
    }



});
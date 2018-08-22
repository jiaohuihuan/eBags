

//引入header&footer
;(function(){

    jQuery(function($){

        $('#j_header').load('../html/header&footer.html .j_header');
        $('#j_footer').load('../html/header&footer.html .j_footer');
    })

})();






/*
    实现注册成功后跳转到登录页面，并输入电子邮箱密码登录
*/

document.addEventListener('DOMContentLoaded',()=>{
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    // console.log(email,password)
         
    let btnReg = document.querySelector('.btnReg');
    // console.log(btnReg)


    let status = [200,304];

    let isok = false;

    // 输入电子邮箱，失去焦点时，验证是否已存在
    email.onblur = ()=>{
        // console.log(66)
        // 获取电子邮箱/密码
        let _email = email.value;
        var _password = password.value;

        let xhr = new XMLHttpRequest();
        xhr.onload = ()=>{
            if(status.indexOf(xhr.status) >= 0){
                // console.log(xhr.responseText);
                if(xhr.responseText=='no'){
                    alert('电子邮箱已存在');   
                    
                }
            }
        }
        xhr.open('get','../api/check_email.php?email='+_email,true);

        xhr.send();
 
    }



    btnReg.onmousedown = ()=>{
        btnReg.style.background = "#143D8D";
    }

    btnReg.onmouseup = ()=>{
        btnReg.style.background = "#404040";
    }



    // 填写资料点击注册
    btnReg.onclick = ()=>{
        

        //获取元素
        let email = document.querySelector('#email');
        let name = document.querySelector('#name');
        let age = document.querySelector('#age');
        let password = document.querySelector('#password');
        let site = document.querySelector('#site');
        let code = document.querySelector('#code');
        let city = document.querySelector('#city');
        let area = document.querySelector('#area');


        // 获取输入的值
        let _email = email.value;
        let _name = name.value;
        let _age = age.value;
        let _password = password.value;
        let _site = site.value;
        let _code = code.value;
        let _city = city.value;
        let _area = area.value;
        console.log(_email,_name,_age,_password,_site,_code,_city,_area)
             

        let xhr = new XMLHttpRequest();
        
        xhr.onload = ()=>{
            if(status.indexOf(xhr.status) >= 0){
                var formGroup = email.parentNode;
                if(xhr.responseText === 'success'){
                    isok = true;

                }else if(xhr.responseText === 'fail'){
                    isok = false;

                }
            }
        }
        xhr.open('post','../api/reg.php',true);

        // 设置请求头，以便后端接收post数据
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');


        // 正则判断

        if(!/[a-z0-9][\w\-\.]{2,29}@[a-z0-9\-]{2,67}(\.[a-z\u2E80-\u9FFF]{2,6})+$/.test(_email)){
            alert('您输入的电子邮箱不合法');
            email.style.borderColor = 'red';
            return false;
        }


        if(!/^[\u4E00-\u9FA5A-Za-z]+$/.test(_name)){
            alert('您输入的姓名不合法');
            name.style.borderColor = 'red';
            return false;
        }


        if(!/^((1[0-5])|[1-9])?\d$/.test(_age)){
            alert('您输入的年龄不合法');
            age.style.borderColor = 'red';
            return false;
        }



        if(!/^\S{6,20}$/.test(_password)){
            alert('您输入的密码不合法');
            password.style.borderColor = 'red';
            return false;
        }


        if(!/^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(_site)){
            alert('您输入的地址不合法');
            site.style.borderColor = 'red';
            return false;
        }


        if(!/^\d{6}$/.test(_code)){
            alert('您输入的邮政编码不合法');
            code.style.borderColor = 'red';
            return false;
        }


        if(!/^[\u4E00-\u9FA5A-Za-z]+$/.test(_city)){
            alert('您输入的城市不合法');
            city.style.borderColor = 'red';
            return false;
        }
  

        if(!/^[\u4E00-\u9FA5A-Za-z]+$/.test(_area)){
            alert('您输入的地区不合法');
            area.style.borderColor = 'red';
            return false;
        }
    
        xhr.send(`email=${_email}&name=${_name}&age=${_age}&password=${_password}&site=${_site}&code=${_code}&city=${_city}&area=${_area}`);


        alert('注册成功，点击确定跳转页面');

        location.href = "login.html";

    }



});
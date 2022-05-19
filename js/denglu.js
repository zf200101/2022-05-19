var tupianyia=document.getElementById('tupianyia');
var tupianera=document.getElementById('tupianera');
var tupiansana=document.getElementById('tupiansana');
var tupiansia=document.getElementById('tupiansia');
tupianyia.onmouseenter=function(){
    tupianyia.src='../images/l_1_h.png';
}
tupianyia.onmouseleave=function(){
    tupianyia.src='../images/l_1.png';
}
tupianera.onmouseenter=function(){
    tupianera.src='../images/l_2_h.png';
}
tupianera.onmouseleave=function(){
    tupianera.src='../images/l_2.png';
}
tupiansana.onmouseenter=function(){
    tupiansana.src='../images/l_3_h.png';
}
tupiansana.onmouseleave=function(){
    tupiansana.src='../images/l_3.png';
}
tupiansia.onmouseenter=function(){
    tupiansia.src='../images/l_4_h.png';
}
tupiansia.onmouseleave=function(){
    tupiansia.src='../images/l_4.png';
}

var contentinput=document.getElementById('contentinput');

var contentpassword=document.getElementById('contentpassword');
var contentcheck=document.getElementById('contentcheck');
console.log(contentcheck.checked);
var inputyi=getCookie('inputyi');
console.log(inputyi);
var inputsan=getCookie('inputsan');
console.log(inputsan);

if(getCookie('contentcheck')){
    contentinput.value=getCookie('inputyi');
    contentpassword.value=getCookie('inputsan');
    contentcheck.checked=getCookie('checked')
}


var contentbutton=document.getElementById('contentbutton');
contentbutton.onclick=function(){

    if(contentinput.value==inputyi&&contentpassword.value==inputsan){
        alert('登陆成功');
    }else{
        alert('用户名错误或者密码错误')
    }

    if(contentcheck.checked==true){
        setCookie('checked',contentcheck.checked)
        contentinput.value=getCookie('inputyi');
        contentpassword.value=getCookie('inputsan');
        contentcheck.checked=getCookie('checked')
    }
}







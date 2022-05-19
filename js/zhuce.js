var inputyi=document.getElementById('inputyi');
var inputer=document.getElementById('inputer');
var inputsan=document.getElementById('inputsan');
var inputsi=document.getElementById('inputsi');


var spana=document.getElementById('spana');
var spanb=document.getElementById('spanb');
var spanc=document.getElementById('spanc');
var spand=document.getElementById('spand');



inputyi.onfocus=function(){
    spana.innerHTML='请输入11位手机号码'
}

inputyi.onblur=function(){
    var reg=/^1[3-9][0-9]{9}$/;
    if(inputyi.value==''){
        spana.innerHTML='不能为空';
        return false;
    }else if(!reg.test(inputyi.value)){
        spana.innerHTML='长度不在范围内或者存在非法字符';
        return false;
    }else{
        spana.innerHTML='输入正确';
        return true;
    }
}

var buttonyi=document.getElementById('buttonyi');
var timer=null;
var num=60;

function huoqu(){
    clearInterval(timer);
    timer=setInterval(function(){
        num--;
        buttonyi.innerHTML='('+num+')'+'秒后，重新获取'
        if(num=='55'){
        alert('9527');
        clearInterval(timer);
        buttonyi.innerHTML='获取验证码';
        num=60;
        }
    },1000) 
}
inputer.onfocus=function(){
    spanb.innerHTML='请输入验证码';
}
inputer.onblur=function(){
    if(inputer.value==''){
        spanb.innerHTML='验证码不能为空';
    }else if(inputer.value!='9527'){
        spanb.innerHTML='验证码输入错误';
    }else{
        spanb.innerHTML='输入正确';
    }
}
inputsan.onfocus=function(){
    spanc.innerHTML='请设置密码,包含数字字母';
}
inputsan.onblur=function(){
    //不能为空
    //长度在6-12之间 字母数字下划线       
    //不能全是数字
    //不能全是字母
    var reg=/^\w{6,12}$/;
    var reg1=/[^0-9]/;
    var reg2=/[^a-zA-Z]/;
    if(inputsan.value==''){
        spanc.innerHTML='密码不能为空';
    }else if(!reg.test(inputsan.value)){
        spanc.innerHTML='长度不在范围内或者存在非法字符';
        return false;
    }else if(!reg1.test(inputsan.value)){
        spanc.innerHTML='密码不能全是数字';
        return false;
    }else if(!reg2.test(inputsan.value)){
        spanc.innerHTML='密码不能全部是字母';
        return false;
    }else{
        spanc.innerHTML='输入正确';
        return true;
    }
}
inputsi.onfocus=function(){
    spand.innerHTML='请输入相同密码';
}
inputsi.onblur=function(){
    if(inputsi.value==''){
        spand.innerHTML='密码不能为空';
    }else if(inputsi.value!=inputsan.value){
        spand.innerHTML='两次密码不一致';
        return false;
    }else{
        spand.innerHTML='输入正确';
        return true;
    }
}
function agree(){
    if(inputyi.onblur()&&inputsan.onblur()&&inputsi.onblur()){
        setCookie('inputyi',inputyi.value);
        setCookie('inputsan',inputsan.value);
        alert('注册成功');
    }
}







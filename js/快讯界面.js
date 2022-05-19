var xuanfu_=document.getElementById('xuanfu');
var kehu=document.getElementById('kehufuwu')

xuanfu_.onmouseenter=function(){
   kehu.style.display='block';
}
kehu.onmouseleave=function(){
    kehu.style.display='none';
}
xuanfu_.onmouseleave=function(){
    kehu.style.display='none';
}
kehu.onmouseenter=function(){
    kehu.style.display='block';
}
var shop=document.getElementById('shop');
var shopcar=document.getElementById('shopcar');

shop.onmouseenter=function(){
    shopcar.style.display='block';
}
shopcar.onmouseleave=function(){
    shopcar.style.display='none';
}
shop.onmouseleave=function(){
    shopcar.style.display='none';
}
shopcar.onmouseenter=function(){
    shopcar.style.display='block';
}
// ----------------------------------------
var spanyid=document.getElementById('spanyid');
var zongjia=0;
var spanyi=document.getElementById('spanyi');
var spanyivalue=spanyi.firstChild.nodeValue;
var span190=document.getElementById('span190');
var numyi=1;
var baoyou=document.getElementById('baoyou');
var yijian=document.getElementById('yijian');
var shopcarsia=document.getElementById('shopcarsia');
var shopcarsib=document.getElementById('shopcarsib');
var le_=document.getElementsByClassName('le');
function jiayia(){
    numyi++;
    spanyi.innerHTML=numyi;
    span190.innerHTML= numyi*190;
    zongjia=numyi*190+(span58.firstChild.nodeValue-0)+(span777.firstChild.nodeValue-0);
    spanyid.innerHTML=zongjia;
}
var shopcaryi=document.getElementById('shopcaryi');
var shopcarulyi=document.getElementById('shopcarulyi');
var shopcaruler=document.getElementById('shopcaruler');



function  jianyia(){
    numyi--;
    spanyi.innerHTML=numyi;
    span190.innerHTML=numyi*190;
    zongjia=numyi*190+(span58.firstChild.nodeValue-0)+(span777.firstChild.nodeValue-0);
    spanyid.innerHTML=zongjia;
    if(numyi==0){
       alert('您要删除这件商品吗?');
       shopcaryi.parentNode.removeChild(shopcaryi);
       shopcarulyi.parentNode.removeChild(shopcarulyi);
       shopcaruler.parentNode.removeChild(shopcaruler);
       if(le_.length<=1){
        alert('您还没有加入购物车');
        baoyou.parentNode.removeChild(baoyou);
        yijian.parentNode.removeChild(yijian);
        shopcarsia.parentNode.removeChild(shopcarsia);
        shopcarsib.parentNode.removeChild(shopcarsib);
        shopcar.style.width='171px';
        shopcar.style.height='145px';
        // shopcar.style.border='1px solid black';
        shopcar.style.background='url(../images/icon_tips2.png) no-repeat';
        
        shopcar.style.backgroundColor='white';

      
        }
    zongjia=(span58.firstChild.nodeValue-0)+(span777.firstChild.nodeValue-0);
    spanyid.innerHTML=zongjia;
    }

    

}
var spanchahao=document.getElementById('spanchahao');
spanchahao.onclick=function(){
    alert('您要删除这件商品吗?');
    shopcaryi.parentNode.removeChild(shopcaryi);
    shopcarulyi.parentNode.removeChild(shopcarulyi);
    shopcaruler.parentNode.removeChild(shopcaruler);


    if(le_.length<=1){
        alert('您还没有加入购物车');
        baoyou.parentNode.removeChild(baoyou);
        yijian.parentNode.removeChild(yijian);
        shopcarsia.parentNode.removeChild(shopcarsia);
        shopcarsib.parentNode.removeChild(shopcarsib);
        shopcar.style.width='171px';
        shopcar.style.height='145px';
        // shopcar.style.border='1px solid black';
        shopcar.style.background='url(../images/icon_tips2.png) no-repeat';
        
        shopcar.style.backgroundColor='white';

      
    }
    zongjia=(span58.firstChild.nodeValue-0)+(span777.firstChild.nodeValue-0);
    spanyid.innerHTML=zongjia;
}

// --------------------------快讯界面------------------------------
var uls=document.getElementById('uls');
var num=0;
var gundongyi=setInterval(function(){
    var lis=document.getElementById('uls').children;
    num=num-0.1;
    lis[0].style.marginTop=num+'px';
    if(-num>=0){
        var value=lis[0].firstChild.nodeValue;
        lis[0].parentNode.removeChild(lis[0]);
        var lijia=document.createElement('li');
        lijia.innerHTML=value;
        uls.appendChild(lijia)   
    }
},500)
// ----------------返利消失-----------------------------
var fanlibtn=document.getElementById('gudingbtn');
var gudinger=document.getElementById('gudinger');
var gudingsan=document.getElementById('gudingsan');
var gudingcha=document.getElementById('gudingcha');
gudinger.onclick=function(){
    gudingsan.style.display='block';
}
fanlibtn.onclick=function(){
    gudingsan.style.display='none'
}
gudingcha.onclick=function(){
    gudingsan.style.display='none';
}

// ----------------------------------------
var buyspana=document.getElementById('buyspana');
var buyspanaa=document.getElementById('buyspanaa');
var buyspanb=document.getElementById('buyspanb');
var buyspanbb=document.getElementById('buyspanbb');
var buyspanc=document.getElementById('buyspanc');
var buyspancc=document.getElementById('buyspancc');

buyspana.onmouseenter=function(){
    buyspana.style.backgroundColor='white';
    buyspanaa.style.color='red';
    // buyspanb.style.backgroundColor='red';
    buyspanc.style.backgroundColor='red';
    buyspancc.style.color='white';
}
buyspana.onmouseleave=function(){
    buyspana.style.backgroundColor='red';
    buyspanaa.style.color='white';
    buyspanc.style.backgroundColor='white';
    buyspancc.style.color='red';
}
buyspanb.onmouseenter=function(){
    buyspanb.style.backgroundColor='white';
    buyspanbb.style.color='red';
    buyspanc.style.backgroundColor='red';
    buyspancc.style.color='white';
}
buyspanb.onmouseleave=function(){
    buyspanb.style.backgroundColor='red';
    buyspanbb.style.color='white';
    buyspanc.style.backgroundColor='white';
    buyspancc.style.color='red';
}
// -----------------------抢购--------------------------------------------
var qianga=document.getElementById('qianga');
var qiangb=document.getElementById('qiangb');
var qiangc=document.getElementById('qiangc');
var qiangd=document.getElementById('qiangd');
var qiange=document.getElementById('qiange');
var qiangf=document.getElementById('qiangf');
var qiangg=document.getElementById('qiangg');
var qiangh=document.getElementById('qiangh');
var qiangi=document.getElementById('qiangi');


qianga.onclick=function(){
    qianga.style.backgroundColor='red';
    qianga.style.color='white';
    qiangb.style.backgroundColor='#f5f5f5';
    qiangb.style.color='red';
    qiangc.style.backgroundColor='#f5f5f5';
    qiangc.style.color='red';
    qiangd.style.backgroundColor='#f5f5f5';
    qiangd.style.color='red';
    qiange.style.backgroundColor='#f5f5f5';
    qiange.style.color='red';
    qiangf.style.backgroundColor='#f5f5f5';
    qiangf.style.color='red';
    qiangg.style.backgroundColor='#f5f5f5';
    qiangg.style.color='red';
    qiangh.style.backgroundColor='#f5f5f5';
    qiangh.style.color='red';
    qiangi.style.backgroundColor='#f5f5f5';
    qiangi.style.color='red';
}

qiangb.onclick=function(){
    qiangb.style.backgroundColor='red';
    qiangb.style.color='white';
    qianga.style.backgroundColor='#f5f5f5';
    qianga.style.color='red';
    qiangc.style.backgroundColor='#f5f5f5';
    qiangc.style.color='red';
    qiangd.style.backgroundColor='#f5f5f5';
    qiangd.style.color='red';
    qiange.style.backgroundColor='#f5f5f5';
    qiange.style.color='red';
    qiangf.style.backgroundColor='#f5f5f5';
    qiangf.style.color='red';
    qiangg.style.backgroundColor='#f5f5f5';
    qiangg.style.color='red';
    qiangh.style.backgroundColor='#f5f5f5';
    qiangh.style.color='red';
    qiangi.style.backgroundColor='#f5f5f5';
    qiangi.style.color='red';
}
qiangc.onclick=function(){
    qiangc.style.backgroundColor='red';
    qiangc.style.color='white';
    qianga.style.backgroundColor='#f5f5f5';
    qianga.style.color='red';
    qiangb.style.backgroundColor='#f5f5f5';
    qiangb.style.color='red';
    qiangd.style.backgroundColor='#f5f5f5';
    qiangd.style.color='red';
    qiange.style.backgroundColor='#f5f5f5';
    qiange.style.color='red';
    qiangf.style.backgroundColor='#f5f5f5';
    qiangf.style.color='red';
    qiangg.style.backgroundColor='#f5f5f5';
    qiangg.style.color='red';
    qiangh.style.backgroundColor='#f5f5f5';
    qiangh.style.color='red';
    qiangi.style.backgroundColor='#f5f5f5';
    qiangi.style.color='red';
}

qiangd.onclick=function(){
    qiangd.style.backgroundColor='red';
    qiangd.style.color='white';
    qianga.style.backgroundColor='#f5f5f5';
    qianga.style.color='red';
    qiangc.style.backgroundColor='#f5f5f5';
    qiangc.style.color='red';
    qiangb.style.backgroundColor='#f5f5f5';
    qiangb.style.color='red';
    qiange.style.backgroundColor='#f5f5f5';
    qiange.style.color='red';
    qiangf.style.backgroundColor='#f5f5f5';
    qiangf.style.color='red';
    qiangg.style.backgroundColor='#f5f5f5';
    qiangg.style.color='red';
    qiangh.style.backgroundColor='#f5f5f5';
    qiangh.style.color='red';
    qiangi.style.backgroundColor='#f5f5f5';
    qiangi.style.color='red';
}
qiange.onclick=function(){
    qiange.style.backgroundColor='red';
    qiange.style.color='white';
    qianga.style.backgroundColor='#f5f5f5';
    qianga.style.color='red';
    qiangc.style.backgroundColor='#f5f5f5';
    qiangc.style.color='red';
    qiangd.style.backgroundColor='#f5f5f5';
    qiangd.style.color='red';
    qiangb.style.backgroundColor='#f5f5f5';
    qiangb.style.color='red';
    qiangf.style.backgroundColor='#f5f5f5';
    qiangf.style.color='red';
    qiangg.style.backgroundColor='#f5f5f5';
    qiangg.style.color='red';
    qiangh.style.backgroundColor='#f5f5f5';
    qiangh.style.color='red';
    qiangi.style.backgroundColor='#f5f5f5';
    qiangi.style.color='red';
}
qiangf.onclick=function(){
    qiangf.style.backgroundColor='red';
    qiangf.style.color='white';
    qianga.style.backgroundColor='#f5f5f5';
    qianga.style.color='red';
    qiangc.style.backgroundColor='#f5f5f5';
    qiangc.style.color='red';
    qiangd.style.backgroundColor='#f5f5f5';
    qiangd.style.color='red';
    qiange.style.backgroundColor='#f5f5f5';
    qiange.style.color='red';
    qiangb.style.backgroundColor='#f5f5f5';
    qiangb.style.color='red';
    qiangg.style.backgroundColor='#f5f5f5';
    qiangg.style.color='red';
    qiangh.style.backgroundColor='#f5f5f5';
    qiangh.style.color='red';
    qiangi.style.backgroundColor='#f5f5f5';
    qiangi.style.color='red';
}

qiangg.onclick=function(){
    qiangg.style.backgroundColor='red';
    qiangg.style.color='white';
    qianga.style.backgroundColor='#f5f5f5';
    qianga.style.color='red';
    qiangc.style.backgroundColor='#f5f5f5';
    qiangc.style.color='red';
    qiangd.style.backgroundColor='#f5f5f5';
    qiangd.style.color='red';
    qiange.style.backgroundColor='#f5f5f5';
    qiange.style.color='red';
    qiangf.style.backgroundColor='#f5f5f5';
    qiangf.style.color='red';
    qiangb.style.backgroundColor='#f5f5f5';
    qiangb.style.color='red';
    qiangh.style.backgroundColor='#f5f5f5';
    qiangh.style.color='red';
    qiangi.style.backgroundColor='#f5f5f5';
    qiangi.style.color='red';
}

qiangh.onclick=function(){
    qiangh.style.backgroundColor='red';
    qiangh.style.color='white';
    qianga.style.backgroundColor='#f5f5f5';
    qianga.style.color='red';
    qiangc.style.backgroundColor='#f5f5f5';
    qiangc.style.color='red';
    qiangd.style.backgroundColor='#f5f5f5';
    qiangd.style.color='red';
    qiange.style.backgroundColor='#f5f5f5';
    qiange.style.color='red';
    qiangf.style.backgroundColor='#f5f5f5';
    qiangf.style.color='red';
    qiangg.style.backgroundColor='#f5f5f5';
    qiangg.style.color='red';
    qiangb.style.backgroundColor='#f5f5f5';
    qiangb.style.color='red';
    qiangi.style.backgroundColor='#f5f5f5';
    qiangi.style.color='red';
}

qiangi.onclick=function(){
    qiangi.style.backgroundColor='red';
    qiangi.style.color='white';
    qianga.style.backgroundColor='#f5f5f5';
    qianga.style.color='red';
    qiangc.style.backgroundColor='#f5f5f5';
    qiangc.style.color='red';
    qiangd.style.backgroundColor='#f5f5f5';
    qiangd.style.color='red';
    qiange.style.backgroundColor='#f5f5f5';
    qiange.style.color='red';
    qiangf.style.backgroundColor='#f5f5f5';
    qiangf.style.color='red';
    qiangg.style.backgroundColor='#f5f5f5';
    qiangg.style.color='red';
    qiangh.style.backgroundColor='#f5f5f5';
    qiangh.style.color='red';
    qiangb.style.backgroundColor='#f5f5f5';
    qiangb.style.color='red';
}

// ----------------------------------------------------------

var shoptopbd=document.getElementById('shoptopbd');
var shoptopbc=document.getElementById('shoptopbc');
var shoptopbb=document.getElementById('shoptopbb');
var shoptopbdnum=60;
var shoptopbcnum=10;
var shoptopbbnum=5;
var shoptoptime=setInterval(function(){
    shoptopbdnum--;
    shoptopbd.innerHTML=shoptopbdnum;
    if(shoptopbdnum==50){
        shoptopbdnum=60;
        shoptopbcnum--;
        shoptopbc.innerHTML='0'+shoptopbcnum;

        if(shoptopbcnum==8||shoptopbcnum==6||shoptopbcnum==4||shoptopbcnum==2||shoptopbcnum==0){
           
            shoptopbbnum--;
            if(shoptopbcnum==0){
                shoptopbb.innerHTML='00';
            }
            shoptopbb.innerHTML='0'+shoptopbbnum;  
            
             

        }
    }
        return shoptoptime;
},1000)

        
// ------------------------------------------
var spanwai=document.getElementById('spanwai');
var spanli=document.getElementById('spanli');

spanwai.onmouseenter=function(){
    spanli.style.backgroundColor='red';
    spanli.style.transition='all 1s'
}
spanwai.onmouseleave=function(){
    spanli.style.backgroundColor='';
}

// ---------------------------------------------------
var btn999jian=document.getElementById('btn999jian');
var btn999jia=document.getElementById('btn999jia');

var span999num=document.getElementById('spannum999');
var span999=document.getElementById('span999');
var num999=1;
btn999jia.onclick=function(){
    num999++;
    span999num.innerHTML=num999;
    span999.innerHTML=(span999num.firstChild.nodeValue-0)*999;
}

btn999jian.onclick=function(){
    num999--;
    if(num999<1){
        alert('不能再减了!');
        num999=0;
    }
    span999num.innerHTML=num999;
    span999.innerHTML=(span999num.firstChild.nodeValue-0)*999;
    
}
// -----------------------------------------------------------

var spanwai88=document.getElementById('spanwai88');
var spanli88=document.getElementById('spanli88');

spanwai88.onmouseenter=function(){
    spanli88.style.backgroundColor='red';
    spanli88.style.transition='all 1s'
}
spanwai88.onmouseleave=function(){
    spanli88.style.backgroundColor='';
}

// ---------------------------------------------------
var btn88jian=document.getElementById('btn88jian');
var btn88jia=document.getElementById('btn88jia');

var span88num=document.getElementById('spannum88');
var span88=document.getElementById('span88');
var num88=1;
btn88jia.onclick=function(){
    num88++;
    span88num.innerHTML=num88;
    span88.innerHTML=(span88num.firstChild.nodeValue-0)*88;
}

btn88jian.onclick=function(){
    num88--;
    if(num88<1){
        alert('不能再减了!');
        num88=0;
    }
    span88num.innerHTML=num88;
    span88.innerHTML=(span88num.firstChild.nodeValue-0)*88;
    
}




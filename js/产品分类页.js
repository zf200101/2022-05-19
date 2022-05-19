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
var zongjia=null;
var spanyi=document.getElementById('spanyi');
var spanyivalue=spanyi.firstChild.nodeValue;
var span190=document.getElementById('span190');
var numyi=1;
var le_=document.getElementsByClassName('le');
function jiayia(){
    numyi++;
    spanyi.innerHTML=numyi;
    span190.innerHTML='￥'+ numyi*190;
}
var shopcaryi=document.getElementById('shopcaryi');
var shopcarulyi=document.getElementById('shopcarulyi');
var shopcaruler=document.getElementById('shopcaruler');



function  jianyia(){
    numyi--;
    spanyi.innerHTML=numyi;
    span190.innerHTML='￥'+numyi*190;
    if(numyi==0){
       alert('您要删除这件商品吗?');
       shopcaryi.parentNode.removeChild(shopcaryi);
       shopcarulyi.parentNode.removeChild(shopcarulyi);
       shopcaruler.parentNode.removeChild(shopcaruler);
      
    }
    spanyivalue=0;
    return spanyivalue;
}
var spanchahao=document.getElementById('spanchahao');
spanchahao.onclick=function(){
    alert('您要删除这件商品吗?');
    shopcaryi.parentNode.removeChild(shopcaryi);
    shopcarulyi.parentNode.removeChild(shopcarulyi);
    shopcaruler.parentNode.removeChild(shopcaruler);
    numyi=0;
    return numyi;

    
}
// -----------------------------------------------------

// -----------------------------------------------------------------------
var spanyib=document.getElementById('spanyib');
var spanyibvalue=spanyib.firstChild.nodeValue;
var span58=document.getElementById('span58');
var numer=1;
function jiayib(){
    numer++;
    spanyib.innerHTML=numer;
    span58.innerHTML='￥'+ numer*5.8;
    return numer;

}
var shopcarer=document.getElementById('shopcarer');
function  jianyib(){
    numer--;
    spanyib.innerHTML=numer;
    span58.innerHTML='￥'+numer*5.8;
    if(numer==0){
       alert('您要删除这件商品吗?');
       shopcarer.parentNode.removeChild(shopcarer);
       numer=0;
       return numer;

    }
}
var spanchahaob=document.getElementById('spanchahaob');
spanchahaob.onclick=function(){
    alert('您要删除这件商品吗?');
    shopcarer.parentNode.removeChild(shopcarer);
    numer=0;
    return numer;  

}
// -------------------------------------------------------
var spanyic=document.getElementById('spanyic');
var spanyicvalue=spanyic.firstChild.nodeValue;
var span777=document.getElementById('span777');
var numsan=1;

function jiayic(){
    numsan++;
    spanyic.innerHTML=numsan;
    span777.innerHTML='￥'+ numsan*777;
    return numsan;

}
var shopcarsan=document.getElementById('shopcarsan');
function  jianyic(){
    numsan--;
    spanyic.innerHTML=numsan;
    span777.innerHTML='￥'+numsan*777;
    if(numsan==0){
       alert('您要删除这件商品吗?');
       shopcarsan.parentNode.removeChild(shopcarsan);
       numsan=0;
       return numsan;

    }
}
var spanchahaoc=document.getElementById('spanchahaoc');
spanchahaoc.onclick=function(){
    alert('您要删除这件商品吗?');
    shopcarsan.parentNode.removeChild(shopcarsan);
    numsan=0;
    return  numsan;  

}

zongjia=spanyivalue*190+spanyibvalue*5.8+spanyicvalue*777;
spanyid.innerHTML=zongjia;
// -----------------------------------------------------------------

var baoyou=document.getElementById('baoyou');
var yijian=document.getElementById('yijian');
var shopcarsia=document.getElementById('shopcarsia');
var shopcarsib=document.getElementById('shopcarsib');
shopcarsib.onmouseenter=function(){
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
}
// ------------------第一排商品------------------------------------
var diyipaia=document.getElementById('diyipaia');
var spandiyipaiaer=document.getElementById('spandiyipaiaer');
diyipaia.onmouseenter=function(){
    
    spandiyipaiaer.style.background='url(../images/cars.png) no-repeat 13px 7px'
    spandiyipaiaer.style.backgroundColor='orange';
    spandiyipaiaer.style.color='white';
}
diyipaia.onmouseleave=function(){
    spandiyipaiaer.style.background='url(../images/car.png) no-repeat 13px 7px'
    spandiyipaiaer.style.color='orange';
}
// ----------------------------------------------------
var diyipaib=document.getElementById('diyipaib');
var spandiyipaiber=document.getElementById('spandiyipaiber');
diyipaib.onmouseenter=function(){
    
    spandiyipaiber.style.background='url(../images/cars.png) no-repeat 13px 7px'
    spandiyipaiber.style.backgroundColor='orange';
    spandiyipaiber.style.color='white';
}
diyipaib.onmouseleave=function(){
    spandiyipaiber.style.background='url(../images/car.png) no-repeat 13px 7px'
    spandiyipaiber.style.color='orange';
}
// ----------------------------------------------------
var diyipaic=document.getElementById('diyipaic');
var spandiyipaicer=document.getElementById('spandiyipaicer');
diyipaic.onmouseenter=function(){
    
    spandiyipaicer.style.background='url(../images/cars.png) no-repeat 13px 7px'
    spandiyipaicer.style.backgroundColor='orange';
    spandiyipaicer.style.color='white';
}
diyipaic.onmouseleave=function(){
    spandiyipaicer.style.background='url(../images/car.png) no-repeat 13px 7px'
    spandiyipaicer.style.color='orange';
}
// -------------------------------------------
var diyipaid=document.getElementById('diyipaid');
var spandiyipaider=document.getElementById('spandiyipaider');
diyipaid.onmouseenter=function(){
    
    spandiyipaider.style.background='url(../images/cars.png) no-repeat 13px 7px'
    spandiyipaider.style.backgroundColor='orange';
    spandiyipaider.style.color='white';
}
diyipaid.onmouseleave=function(){
    spandiyipaider.style.background='url(../images/car.png) no-repeat 13px 7px'
    spandiyipaider.style.color='orange';
}
// ------------------------第二排商品------------------------------------
var dierpaia=document.getElementById('dierpaia');
var spandierpaiaer=document.getElementById('spandierpaiaer');
dierpaia.onmouseenter=function(){
    
    spandierpaiaer.style.background='url(../images/cars.png) no-repeat 13px 7px'
    spandierpaiaer.style.backgroundColor='orange';
    spandierpaiaer.style.color='white';
}
dierpaia.onmouseleave=function(){
    spandierpaiaer.style.background='url(../images/car.png) no-repeat 13px 7px'
    spandierpaiaer.style.color='orange';
}
// ----------------------------------------------------
var dierpaib=document.getElementById('dierpaib');
var spandierpaiber=document.getElementById('spandierpaiber');
dierpaib.onmouseenter=function(){
    
    spandierpaiber.style.background='url(../images/cars.png) no-repeat 13px 7px'
    spandierpaiber.style.backgroundColor='orange';
    spandierpaiber.style.color='white';
}
dierpaib.onmouseleave=function(){
    spandierpaiber.style.background='url(../images/car.png) no-repeat 13px 7px'
    spandierpaiber.style.color='orange';
}
// ----------------------------------------------------
var dierpaic=document.getElementById('dierpaic');
var spandierpaicer=document.getElementById('spandierpaicer');
dierpaic.onmouseenter=function(){
    
    spandierpaicer.style.background='url(../images/cars.png) no-repeat 13px 7px'
    spandierpaicer.style.backgroundColor='orange';
    spandierpaicer.style.color='white';
}
dierpaic.onmouseleave=function(){
    spandierpaicer.style.background='url(../images/car.png) no-repeat 13px 7px'
    spandierpaicer.style.color='orange';
}
// -------------------------------------------
var dierpaid=document.getElementById('dierpaid');
var spandieraider=document.getElementById('spandierpaider');
dierpaid.onmouseenter=function(){
    
    spandierpaider.style.background='url(../images/cars.png) no-repeat 13px 7px'
    spandierpaider.style.backgroundColor='orange';
    spandierpaider.style.color='white';
}
dierpaid.onmouseleave=function(){
    spandierpaider.style.background='url(../images/car.png) no-repeat 13px 7px'
    spandierpaider.style.color='orange';
}
// -------------------------第三排商品-----------------------------------
var dicpaia=document.getElementById('dicpaia');
var spandicpaiaer=document.getElementById('spandicpaiaer');
dicpaia.onmouseenter=function(){
    
    spandicpaiaer.style.background='url(../images/cars.png) no-repeat 13px 7px'
    spandicpaiaer.style.backgroundColor='orange';
    spandicpaiaer.style.color='white';
}
dicpaia.onmouseleave=function(){
    spandicpaiaer.style.background='url(../images/car.png) no-repeat 13px 7px'
    spandicpaiaer.style.color='orange';
}
// ----------------------------------------------------
var dicpaib=document.getElementById('dicpaib');
var spandicpaiber=document.getElementById('spandicpaiber');
dicpaib.onmouseenter=function(){
    
    spandicpaiber.style.background='url(../images/cars.png) no-repeat 13px 7px'
    spandicpaiber.style.backgroundColor='orange';
    spandicpaiber.style.color='white';
}
dicpaib.onmouseleave=function(){
    spandicpaiber.style.background='url(../images/car.png) no-repeat 13px 7px'
    spandicpaiber.style.color='orange';
}
// ----------------------------------------------------
var dicpaic=document.getElementById('dicpaic');
var spandicpaicer=document.getElementById('spandicpaicer');
dicpaic.onmouseenter=function(){
    
    spandicpaicer.style.background='url(../images/cars.png) no-repeat 13px 7px'
    spandicpaicer.style.backgroundColor='orange';
    spandicpaicer.style.color='white';
}
dicpaic.onmouseleave=function(){
    spandicpaicer.style.background='url(../images/car.png) no-repeat 13px 7px'
    spandicpaicer.style.color='orange';
}
// -------------------------------------------
var dicpaid=document.getElementById('dicpaid');
var spandicpaider=document.getElementById('spandicpaider');
dicpaid.onmouseenter=function(){
    
    spandicpaider.style.background='url(../images/cars.png) no-repeat 13px 7px'
    spandicpaider.style.backgroundColor='orange';
    spandicpaider.style.color='white';
}
dicpaid.onmouseleave=function(){
    spandicpaider.style.background='url(../images/car.png) no-repeat 13px 7px'
    spandicpaider.style.color='orange';
}
// ------------------第四排商品----------------------------------
var dicipaia=document.getElementById('dicipaia');
var spandicipaiaer=document.getElementById('spandicipaiaer');
dicipaia.onmouseenter=function(){
    
    spandicipaiaer.style.background='url(../images/cars.png) no-repeat 13px 7px'
    spandicipaiaer.style.backgroundColor='orange';
    spandicipaiaer.style.color='white';
}
dicipaia.onmouseleave=function(){
    spandicipaiaer.style.background='url(../images/car.png) no-repeat 13px 7px'
    spandicipaiaer.style.color='orange';
}
// ----------------------------------------------------
var dicipaib=document.getElementById('dicipaib');
var spandicipaiber=document.getElementById('spandicipaiber');
dicipaib.onmouseenter=function(){
    
    spandicipaiber.style.background='url(../images/cars.png) no-repeat 13px 7px'
    spandicipaiber.style.backgroundColor='orange';
    spandicipaiber.style.color='white';
}
dicipaib.onmouseleave=function(){
    spandicipaiber.style.background='url(../images/car.png) no-repeat 13px 7px'
    spandicipaiber.style.color='orange';
}
// ----------------------------------------------------
var dicipaic=document.getElementById('dicipaic');
var spandicipaicer=document.getElementById('spandicipaicer');
dicipaic.onmouseenter=function(){
    
    spandicipaicer.style.background='url(../images/cars.png) no-repeat 13px 7px'
    spandicipaicer.style.backgroundColor='orange';
    spandicipaicer.style.color='white';
}
dicipaic.onmouseleave=function(){
    spandicipaicer.style.background='url(../images/car.png) no-repeat 13px 7px'
    spandicipaicer.style.color='orange';
}
// -------------------------------------------
var dicipaid=document.getElementById('dicipaid');
var spandicipaider=document.getElementById('spandicipaider');
dicipaid.onmouseenter=function(){
    
    spandicipaider.style.background='url(../images/cars.png) no-repeat 13px 7px'
    spandicipaider.style.backgroundColor='orange';
    spandicipaider.style.color='white';
}
dicipaid.onmouseleave=function(){
    spandicipaider.style.background='url(../images/car.png) no-repeat 13px 7px'
    spandicipaider.style.color='orange';
}
// -------------------------第五排商品----------------------------------
var dicpipaia=document.getElementById('dicpipaia');
var spandicpipaiaer=document.getElementById('spandicpipaiaer');
dicpipaia.onmouseenter=function(){
    
    spandicpipaiaer.style.background='url(../images/cars.png) no-repeat 13px 7px'
    spandicpipaiaer.style.backgroundColor='orange';
    spandicpipaiaer.style.color='white';
}
dicpipaia.onmouseleave=function(){
    spandicpipaiaer.style.background='url(../images/car.png) no-repeat 13px 7px'
    spandicpipaiaer.style.color='orange';
}
// ----------------------------------------------------
var dicpipaib=document.getElementById('dicpipaib');
var spandicpipaiber=document.getElementById('spandicpipaiber');
dicpipaib.onmouseenter=function(){
    
    spandicpipaiber.style.background='url(../images/cars.png) no-repeat 13px 7px'
    spandicpipaiber.style.backgroundColor='orange';
    spandicpipaiber.style.color='white';
}
dicpipaib.onmouseleave=function(){
    spandicpipaiber.style.background='url(../images/car.png) no-repeat 13px 7px'
    spandicpipaiber.style.color='orange';
}
// ----------------------------------------------------
var dicpipaic=document.getElementById('dicpipaic');
var spandicpipaicer=document.getElementById('spandicpipaicer');
dicpipaic.onmouseenter=function(){
    
    spandicpipaicer.style.background='url(../images/cars.png) no-repeat 13px 7px'
    spandicpipaicer.style.backgroundColor='orange';
    spandicpipaicer.style.color='white';
}
dicpipaic.onmouseleave=function(){
    spandicpipaicer.style.background='url(../images/car.png) no-repeat 13px 7px'
    spandicpipaicer.style.color='orange';
}
// -------------------------------------------
var dicpipaid=document.getElementById('dicpipaid');
var spandicpipaider=document.getElementById('spandicpipaider');
dicpipaid.onmouseenter=function(){
    
    spandicpipaider.style.background='url(../images/cars.png) no-repeat 13px 7px'
    spandicpipaider.style.backgroundColor='orange';
    spandicpipaider.style.color='white';
}
dicpipaid.onmouseleave=function(){
    spandicpipaider.style.background='url(../images/car.png) no-repeat 13px 7px'
    spandicpipaider.style.color='orange';
}







































































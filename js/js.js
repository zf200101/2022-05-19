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

// -----------购物车-------------------------
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
// -----------------------------------------------------

// -----------------------------------------------------------------------
var spanyib=document.getElementById('spanyib');
var spanyibvalue=spanyib.firstChild.nodeValue;
var span58=document.getElementById('span58');
var numer=1;
function jiayib(){
    numer++;
    spanyib.innerHTML=numer;
    span58.innerHTML= numer*5.8;
    zongjia=numer*5.8+(span190.firstChild.nodeValue-0)+(span777.firstChild.nodeValue-0);
    spanyid.innerHTML=zongjia;
}
var shopcarer=document.getElementById('shopcarer');
function  jianyib(){
    numer--;
    spanyib.innerHTML=numer;
    span58.innerHTML=numer*5.8;
    zongjia=numer*5.8+(span190.firstChild.nodeValue-0)+(span777.firstChild.nodeValue-0);
    spanyid.innerHTML=zongjia;
    if(numer==0){
       alert('您要删除这件商品吗?');
       shopcarer.parentNode.removeChild(shopcarer);
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

       zongjia=(span190.firstChild.nodeValue-0)+(span777.firstChild.nodeValue-0);
        spanyid.innerHTML=zongjia;
    }

    


}
var spanchahaob=document.getElementById('spanchahaob');
spanchahaob.onclick=function(){
    alert('您要删除这件商品吗?');
    shopcarer.parentNode.removeChild(shopcarer);

    if(le_.length<=0){
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
 zongjia=(span190.firstChild.nodeValue-0)+(span777.firstChild.nodeValue-0);
        spanyid.innerHTML=zongjia;

}
// -------------------------------------------------------
var spanyic=document.getElementById('spanyic');
var spanyicvalue=spanyic.firstChild.nodeValue;
var span777=document.getElementById('span777');
var numsan=1;

function jiayic(){
    numsan++;
    spanyic.innerHTML=numsan;
    span777.innerHTML= numsan*777;
    zongjia=numsan*777+(span190.firstChild.nodeValue-0)+(span58.firstChild.nodeValue-0);
    spanyid.innerHTML=zongjia;
}
var shopcarsan=document.getElementById('shopcarsan');
function  jianyic(){
    numsan--;
    spanyic.innerHTML=numsan;
    span777.innerHTML=numsan*777;
    zongjia=numsan*777+(span190.firstChild.nodeValue-0)+(span58.firstChild.nodeValue-0);
    spanyid.innerHTML=zongjia;
    if(numsan==0){
       alert('您要删除这件商品吗?');
       shopcarsan.parentNode.removeChild(shopcarsan);

       if(le_.length<=0){
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
       zongjia=(span190.firstChild.nodeValue-0)+(span58.firstChild.nodeValue-0);
       spanyid.innerHTML=zongjia;
      
    }
}
var spanchahaoc=document.getElementById('spanchahaoc');
spanchahaoc.onclick=function(){
    alert('您要删除这件商品吗?');
    shopcarsan.parentNode.removeChild(shopcarsan);

    if(le_.length<=0){
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

    zongjia=(span190.firstChild.nodeValue-0)+(span58.firstChild.nodeValue-0);
    spanyid.innerHTML=zongjia;
}


// -----------------------------------------------------------------


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



var mySwiperyi = new Swiper ('.swiperyi', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
  }) 
    mySwiperyi.el.onmouseenter=function(){
    mySwiperyi.autoplay.stop();
    },
    mySwiperyi.el.onmouseleave=function(){
    mySwiperyi.autoplay.start();
    }

// ------------------商品分类-------------------------------
var liyi=document.getElementById('liyi');
var fooda=document.getElementById('fooda');
fooda.onmouseenter=function(){
    liyi.style.display='block';
    fooda.style.backgroundColor='white';
    fooda.style.color='red';
}
liyi.onmouseenter=function(){
    liyi.style.display='block';
    fooda.style.backgroundColor='white';
    fooda.style.color='red';
}
liyi.onmouseleave=function(){
    liyi.style.display='none';
    fooda.style.backgroundColor='#b01d1d';
    fooda.style.color='white';
}
fooda.onmouseleave=function(){
    liyi.style.display='none';
    fooda.style.backgroundColor='#b01d1d';
    fooda.style.color='white';
}
// --------------------------------------------------------
var lier=document.getElementById('lier');
var foodb=document.getElementById('foodb');
foodb.onmouseenter=function(){
    lier.style.display='block';
    foodb.style.backgroundColor='white';
    foodb.style.color='red';
}
lier.onmouseenter=function(){
    lier.style.display='block';
    foodb.style.backgroundColor='white';
    foodb.style.color='red';
}
lier.onmouseleave=function(){
    lier.style.display='none';
    foodb.style.backgroundColor='#b01d1d';
    foodb.style.color='white';
}
foodb.onmouseleave=function(){
    lier.style.display='none';
    foodb.style.backgroundColor='#b01d1d';
    foodb.style.color='white';
}










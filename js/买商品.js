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


// -------------------尺码-----------------------------------
var btn=document.getElementById('shoushiera').children;
// console.log(btn);
for(var i=0;i<btn.length;i++){
    btn[0].className='btnyi';
    btn[0].onclick=function(){
        this.className='btnyi';
        btn[2].className='';
        btn[1].className='';
    }
    btn[1].onclick=function(){
        this.className='btnyi';
        btn[0].className='';
        btn[2].className='';
    }
    btn[2].onclick=function(){
        this.className='btnyi';
        btn[0].className='';
        btn[1].className='';
    }
}
// -------------------------------------------
var btner=document.getElementById('shoushierb').children;
// console.log(btner);
for(var j=0;j<btn.length;j++){
    btner[0].className='btner';
    btner[0].onclick=function(){
        this.className='btner';
        btner[1].className='';
    }
    btner[1].onclick=function(){
        this.className='btner';
        btner[0].className='';
    }
}
var spanshoushiercyi=document.getElementById('spanshoushiercyi');
var shoushiercyidiv=document.getElementById('shoushiercyidiv');
spanshoushiercyi.onmouseenter=function(){
    shoushiercyidiv.style.display='block';
}
shoushiercyidiv.onmouseenter=function(){
    shoushiercyidiv.style.display='block';
}
spanshoushiercyi.onmouseleave=function(){
    shoushiercyidiv.style.display='none';
}
shoushiercyidiv.onmouseleave=function(){
    shoushiercyidiv.style.display='none';
}
// ------------------------------------
var shoushierdyi=document.getElementById('shoushierdyi');
var shoushierdyia=document.getElementById('shoushierdyia');
var shoushierdyib=document.getElementById('shoushierdyib');
var kiss=1;
shoushierdyia.onclick=function(){
     
    kiss++;
    // console.log(kiss);
    shoushierdyi.innerHTML=kiss;
    return kiss;
}

shoushierdyib.onclick=function(){
    kiss--;
    
    if(kiss<=0){
        alert('不能再减了');
        kiss=0;
    }
    shoushierdyi.innerHTML=kiss;
}
// ------------------------------------------------
var tuijianercheck=document.getElementById('tuijianercheck');
var tuijiansicheck=document.getElementById('tuijiansicheck');
var tuijianliucheck=document.getElementById('tuijianliucheck');
var tuijianbaspan=document.getElementById('tuijianbaspan');
var jia=0;
var qqq=null;
tuijianercheck.addEventListener('click', function(){
    var tuijianernum=0;
    if(tuijianercheck.checked){
        tuijianernum=1;  

    }else{
        tuijianernum=0;
    }
    console.log(tuijianernum);
    if(tuijianernum==1&&tuijiansicheck.checked&&tuijianliucheck.checked){
        tuijianbaspan.innerHTML=3741;
    }else if(tuijianernum==1&&tuijiansicheck.checked&&!tuijianliucheck.checked){
        tuijianbaspan.innerHTML=1742;
    }else if(tuijianernum==1&&!tuijiansicheck.checked&&tuijianliucheck.checked){
        tuijianbaspan.innerHTML=2075;
    }else if(tuijianernum==1&&!tuijiansicheck.checked&&!tuijianliucheck.checked){
        tuijianbaspan.innerHTML=76;
    }else if(tuijianernum==0&&tuijiansicheck.checked&&tuijianliucheck.checked){
        tuijianbaspan.innerHTML=3665;
    }else if(tuijianernum==0&&tuijiansicheck.checked&&!tuijianliucheck.checked){
        tuijianbaspan.innerHTML=1666;
    }else if(tuijianernum==0&&!tuijiansicheck.checked&&tuijianliucheck.checked){
        tuijianbaspan.innerHTML=1999;
    }else if(tuijianernum==0&&!tuijiansicheck.checked&&!tuijianliucheck.checked){
        tuijianbaspan.innerHTML=0;
    }
} 
)

// -----------------------------------------------------------
tuijiansicheck.addEventListener('click', function(){
    var tuijiansinum=0;
    if(tuijiansicheck.checked){
        tuijiansinum=1;  

    }else{
        tuijiansinum=0;
    }
    console.log(tuijiansinum);
    if(tuijiansinum==1&&tuijianercheck.checked&&tuijianliucheck.checked){
        tuijianbaspan.innerHTML=3741;
    }else if(tuijiansinum==1&&tuijianercheck.checked&&!tuijianliucheck.checked){
        tuijianbaspan.innerHTML=1742;
    }else if(tuijiansinum==1&&!tuijianercheck.checked&&tuijianliucheck.checked){
        tuijianbaspan.innerHTML=3665;
    }else if(tuijiansinum==1&&!tuijianercheck.checked&&!tuijianliucheck.checked){
        tuijianbaspan.innerHTML=1666;
    }else if(tuijiansinum==0&&tuijianercheck.checked&&tuijianliucheck.checked){
        tuijianbaspan.innerHTML=2075;
    }else if(tuijiansinum==0&&tuijianercheck.checked&&!tuijianliucheck.checked){
        tuijianbaspan.innerHTML=76;
    }else if(tuijiansinum==0&&!tuijianercheck.checked&&tuijianliucheck.checked){
        tuijianbaspan.innerHTML=1999;
    }else if(tuijiansinum==0&&!tuijianercheck.checked&&!tuijianliucheck.checked){
        tuijianbaspan.innerHTML=0;
    }
} 
)
// -----------------------------------------------------------
tuijianliucheck.addEventListener('click', function(){
    var tuijianliunum=0;
    if(tuijianliucheck.checked){
        tuijianliunum=1;  
    }else{
        tuijianliunum=0;
    }
    console.log(tuijianliunum);
    if(tuijianliunum==1&&tuijiansicheck.checked&&tuijianercheck.checked){
        tuijianbaspan.innerHTML=3741;
    }else if(tuijianliunum==1&&tuijiansicheck.checked&&!tuijianercheck.checked){
        tuijianbaspan.innerHTML=3665;
    }else if(tuijianliunum==1&&!tuijiansicheck.checked&&tuijianercheck.checked){
        tuijianbaspan.innerHTML=2075;
    }else if(tuijianliunum==1&&!tuijiansicheck.checked&&!tuijianercheck.checked){
        tuijianbaspan.innerHTML=1999;
    }else if(tuijianliunum==0&&tuijiansicheck.checked&&tuijianercheck.checked){
        tuijianbaspan.innerHTML=1742;
    }else if(tuijianliunum==0&&tuijiansicheck.checked&&!tuijianercheck.checked){
        tuijianbaspan.innerHTML=1666;
    }else if(tuijianliunum==0&&!tuijiansicheck.checked&&tuijianercheck.checked){
        tuijianbaspan.innerHTML=76;
    }else if(tuijianliunum==0&&!tuijiansicheck.checked&&!tuijianercheck.checked){
        tuijianbaspan.innerHTML=0;
    }
} 
)

// ---------------------------------------
var tuijianbainput=document.getElementById('tuijianbainput');
console.log(tuijianbainput.value);
tuijianbainput.onblur=function(){
   var jiage= tuijianbainput.value*3741;
    // console.log(jiage);
    tuijianbaspan.innerHTML=jiage;
}

var tuijianbainput=document.getElementById('tuijianbainput');

// console.log(tuijianbainput.value);


















































































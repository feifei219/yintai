 $(function(){
  //特卖
      	var sizes=getClass("size");
      	var bigboxs=getClass("bigbox");
        var bt=getClass("bt1")
        var sanjiao=getClass("hsj")
      	
  		for (var i = 0; i < sizes.length; i++) {
  			sizes[i].index=i;
  			sizes[i].onmouseover=function(){
  				for (var i = 0; i < bigboxs.length; i++) {
            bigboxs[i].style.display="none";
  					sanjiao[i].style.display="none";
            bt[i].style.borderBottom="5px solid #000";
  				}
          bigboxs[this.index].style.display="block";
  				sanjiao[this.index].style.display="block";
  				bt[this.index].style.borderBottom="5px solid #e5004f";
  			}
 
  		}		
 
 //专柜     
      var zgbtn=getClass("zgbtn");
      var down=getClass("down_down");
      var z=getClass("zi-zi")
      var sj=getClass("hsj2")
      for (var i = 0; i < zgbtn.length; i++) {
        zgbtn[i].index=i;
        zgbtn[i].onmouseover=function(){
          for (var i = 0; i <down.length; i++) {
            down[i].style.display="none";
            sj[i].style.display="none";
            z[i].style.borderBottom="3px solid #000";
          }
         down[this.index].style.display="block";
         sj[this.index].style.display="block";
         z[this.index].style.borderBottom="3px solid #e5004f";
        }
 
      }   
  
// 顶部 drop


   var dropup=$(".drop-up");
   var drop=$(".drop");
   
   for (var i = 0; i < dropup.length; i++) {
     dropup[i].index=i;
     dropup[i].onmouseover=function(){
         drop[this.index].style.display="block";
     }
     dropup[i].onmouseout=function(){
           drop[this.index].style.display="none";
     }
   };
//banner
        var btn=getClass("btn")
        var img=getClass("bannerimg")
        var bg=getClass("content")[0];
        var bgColor=["images/bg1.jpg","images/bg2.jpg","images/bg3.jpg","images/bg4.jpg"]

          for (var i = 0; i < btn.length; i++) {
            btn[i].index=i;        
            btn[i].onmouseover=function(){
              bannernum=this.index;    //在当前按钮继续播
              for (var i = 0; i < img.length; i++) {
                img[i].style.zIndex=1;
                btn[i].style.background="#111";
                img[i].style.opacity=0.8;
              }
              img[this.index].style.zIndex=2;
              this.style.background="#e5004f";
              bg.style.backgroundImage="url("+bgColor[this.index]+")";
              animate(img[this.index],{opacity:1});
            }
          }
          var bannernum=0;
          var bannert=setInterval(bannerchange,3000)
          function bannerchange(){
            bannernum++;
            if(bannernum==img.length){
                     bannernum=0;
            }
            if(bannernum==-1){
                     bannernum=img.length-1;
            }   
              for (var i = 0; i <img.length; i++) {
                img[i].style.zIndex=1;
                btn[i].style.background="#111";
                img[i].style.opacity=0.8;
                // bg.style.opacity=0.8;
              }
                img[bannernum].style.zIndex=2;
                btn[bannernum].style.background="#e5004f";
                bg.style.backgroundImage="url("+bgColor[bannernum]+")";
                animate(img[bannernum],{opacity:1});
                // animate(bg,{opacity:1});

          }

            var banner=getClass("banner")[0];
            var pre=getClass("zuo")[0];
            var next=getClass("you")[0];
            banner.onmouseover=function(){

              clearInterval(bannert)
              pre.style.display="block"
              next.style.display="block"
            }
            banner.onmouseout=function(){

              bannert=setInterval(bannerchange,3000)
              pre.style.display="none"
              next.style.display="none"
            }
            pre.onclick=function(){
              bannernum-=2;
              bannerchange()
            }
            
            next.onclick=function(){
              bannerchange()
            }





      var right=$(".banner-right")[0];
      
      right.onmouseover=function(){
        animate(right,{right:20},600);
        pre.style.display="none"
        next.style.display="none"

      }
      right.onmouseout=function(){
        animate(right,{right:0},600);
      }
      

//品牌 banner-left
      var box=getClass("smlbox");
      var conbox=getClass("conbox");
      
      for (var i = 0; i < box.length; i++) {
        box[i].index=i;
        box[i].onmouseover=function(){
          for (var i = 0; i <box.length; i++) {
            conbox[i].style.display="none";
          }
         conbox[this.index].style.display="block";
        }
        box[i].onmouseout=function(){
           conbox[this.index].style.display="none";
        }
 
      }   


//小动画banner

          var con=$(".container")
          var innerbox=$(".innerbox")
          var zuo=$(".zuo-zuo")
          var you=$(".you-you")
          var btnbox=$(".yuanbox")
        for (var i = 0; i < con.length; i++) {
          splunbo(con[i],innerbox[i],zuo[i],you[i],btnbox[i])
          
        };

        function splunbo(con,innerbox,zuo,you,btnbox){
            var btn0=$(".yuan1",btnbox)[0];
            var btn1=$(".yuan1",btnbox)[1];
          
            con.onmouseover=function(){
              animate(zuo,{left:0},200);
              animate(you,{right:0},200);
            }
            con.onmouseout=function(){
              animate(zuo,{left:-30},200);
              animate(you,{right:-30},200);
            }
          zuo.onclick=pre1;
          btn0.onclick=pre1;
          function pre1(){
               animate(innerbox,{marginLeft:0},600);
               you.style.backgroundPosition="";
               this.style.backgroundPosition="left 0"
               btn1.style.background="#6e6e6e";
               btn0.style.background="#e5004f";
          }

          you.onclick=next1;
          btn1.onclick=next1;
          function next1(){
               animate(innerbox,{marginLeft:-390},600);
               this.style.backgroundPosition="right 0"
               zuo.style.backgroundPosition="";
               btn0.style.background="#6e6e6e";
               btn1.style.background="#e5004f";
          }
     }     


//银泰边框效果

    var  borderitems=$(".bordereffect");
    for (var i = 0; i < borderitems.length; i++) {
      border(borderitems[i])
    };

    function border(obj){
      var  divarr=[];
      for (var i = 0; i < 4; i++) {
        var  div=document.createElement("div")
        div.style.cssText="position:absolute;background:#000";
        obj.appendChild(div)
        divarr.push(div);
      }
      divarr[0].style.cssText+="width:0px;height:1px;left:-1px;top:-1px;"
      divarr[1].style.cssText+="width:1px;height:0px;left:-1px;top:-1px;"
      divarr[2].style.cssText+="width:0px;height:1px;right:-1px;bottom:-1px;"
      divarr[3].style.cssText+="width:1px;height:0px;right:-1px;bottom:-1px;"

      var boxwidth=parseInt(getStyle(obj,"width"))+2;
      var boxheight=parseInt(getStyle(obj,"height"))+2;
      obj.onmouseover=function(){
        animate(divarr[0],{width:boxwidth},800)
        animate(divarr[1],{height:boxheight},800)
        animate(divarr[2],{width:boxwidth},800)
        animate(divarr[3],{height:boxheight},800)
      }
      obj.onmouseout=function(){
        animate(divarr[0],{width:0},800)
        animate(divarr[1],{height:0},800)
        animate(divarr[2],{width:0},800)
        animate(divarr[3],{height:0},800)
      }

    }

//楼层跳转

    //返回顶部
     var totop=$(".Y_floor_top")[0];
     var obj=getWindow();
     totop.onclick=function(){
      animate(obj,{scrollTop:0})
     }

    //滚动到一定距离后出现浮动导航
    var rightyou=$(".float_nav_fixed")[0];
    // window.onscroll=function(){
    //   var st=obj.scrollTop;
    //   if(st>670){
    //      rightyou.style.display="block"
    //   }else{
    //      rightyou.style.display="none"
    //   }

    // }

    //跳转
    var contents2=$(".content-yt");
    var floorbtns=$(".floorbtn")
    var chuangkou=getWindow();
    for (var i = 0; i < floorbtns.length; i++) {
      floorbtns[i].index=i;
      
      floorbtns[i].onclick=function(){
        var ot=contents2[this.index].offsetTop;
        animate(chuangkou,{scrollTop:ot})
        
      }
    }

// 按需加载图片

    var imgarr=$("img")
    for (var i = 0; i < imgarr.length; i++) {
      imgarr[i].datasrc=imgarr[i].src;
      imgarr[i].src=""
    };
    var bheight=document.documentElement.clientHeight;

    for (var i = 0; i < imgarr.length; i++) {

      if(getPosition(imgarr[i]).y<bheight){
          imgarr[i].src=imgarr[i].datasrc;
      }
    }

    window.onscroll=function(){
      var st=chuangkou.scrollTop;
      var st=obj.scrollTop;
      if(st>670){
         rightyou.style.display="block"
      }else{
         rightyou.style.display="none"
      }
      for (var i = 0; i < imgarr.length; i++) {
        if((st+bheight)>getPosition(imgarr[i]).y){
          imgarr[i].src=imgarr[i].datasrc;
        }
      }
    }

 

// log-lunbo

    var container=$(".con-box");
    var coninnerbox=$(".con-logbox");
    var prev2=$(".pre")
    var next2=$(".next")

    for (var i = 0; i < container.length; i++) {
          loglunbo(container[i],coninnerbox[i],prev2[i],next2[i])
          
        };
    function loglunbo(container,coninnerbox,prev2,next2){
      function move(){
        animate(coninnerbox,{marginLeft:-170},function(){
          var first=getFirst(coninnerbox)
          coninnerbox.appendChild(first);
          this.style.marginLeft=0;
          flag1=true;
        })
      }
     
      var flag1=true;
      var flag2=true;
      next2.onclick=function(){
        if(flag1){
          flag1=false;
            move();
        }
      }
      prev2.onclick=function(){
        if(flag2){
          flag2=false;
          var first=getFirst(coninnerbox)
          var last=getLast(coninnerbox)
          coninnerbox.insertBefore(last,first)
          coninnerbox.style.marginLeft="-170px";
          animate(coninnerbox,{marginLeft:0},function(){
            flag2=true;
          })
        }
      }
    }

// 文字滚动

      var act_gg=$(".act-gg-innerbox")[0];
      
        setInterval(function(){
        animate(act_gg,{marginTop:-30},function(){
          var first=getFirst(act_gg);
          act_gg.appendChild(first);
          this.style.marginTop="0";
        })
      },2000)
     


  


















})
  
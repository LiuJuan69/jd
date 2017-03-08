
//商品放大镜
var wrap=document.getElementById('wrap1');
	var big=document.getElementById('big');
	var bigimg=document.getElementById('bigimg');
	var img1=document.getElementById('img1');
	var img=document.getElementById('img');
	var fdj=document.getElementById('fdj');
	var pic=document.getElementById('pic');
	var lis=pic.getElementsByTagName('li');
	var imgs=pic.getElementsByTagName('img');
	var click=document.getElementById('click');
	var clis=cimg.getElementsByTagName('img');
	wrap.onmouseover=function(){
		bigimg.style.display='block';
		big.style.display='block';
		fdj.style.display='none';
	}
	wrap.onmouseout=function(){
		bigimg.style.display='none';
		big.style.display='none';
		fdj.style.display='block';
	}

	wrap.onmousemove=function(event){
		var e= event||window.event;
		var x=e.clientX;
		var y=e.clientY;
		var l=wrap.offsetLeft;
		var t=wrap.offsetTop;
		var bleft=x-l-big.offsetWidth/2;
		var btop=y-t-big.offsetHeight/2+250;
		if(btop<=0){
			btop=0;
		}else if(btop>wrap.offsetHeight-big.offsetHeight){
			btop=wrap.offsetHeight-big.offsetHeight;
		}
		if(bleft<=0){
			bleft=0;
		}else if(bleft>wrap.offsetWidth-big.offsetWidth){
			bleft=wrap.offsetWidth-big.offsetWidth;
		}
		big.style.top=btop+'px';
		big.style.left=bleft+'px';
		var lb=bleft/(wrap.offsetWidth-big.offsetWidth);
		var tb=btop/(wrap.offsetHeight-big.offsetHeight);
		img.style.left=(bigimg.offsetWidth-img.offsetWidth)*lb+'px';
		img.style.top=(bigimg.offsetHeight-img.offsetHeight)*tb+'px';
	}
	for(var i=0;i<lis.length;i++){
			lis[i].index=i
			lis[i].onmouseover=function(){
				for(var j=0;j<lis.length;j++){
					if(this.index==j){
						this.style.border='2px solid rgb(255,68,0)';
						img1.src=imgs[this.index].src;
						img.src=imgs[this.index].src;
						clis[this.index].style.display='block';
						
					}else{
						lis[j].style.border='';
						clis[j].style.display='none';
					}
				}
			}
			lis[i].onclick=function(){
				for(var j=0;j<lis.length;j++){
					if(this.index==j){
						click.style.display='block';
					}
				}
			}
	}
	click.onclick=function(){
		click.style.display='none';
	}

	//商品价格与数量
	var jdprice=document.getElementById('jd-price');
	var shang=document.getElementById('shang');
	var shangs=shang.getElementsByTagName('a');
	var chooseinput=$('.choose-btns .chooseinput');
	var choosejia=$('.choose-btns .more');
	var choosejian=$('.choose-btns .less');
	var bb;
	$('.choose-btns .more').click(function(){
		var bb = eval($('.choose-btns .chooseinput').html())
		bb=bb+1;
		$('.choose-btns .chooseinput').html(eval(bb));
	})
	$('.choose-btns .less').click(function(){
		 bb = eval($('.choose-btns .chooseinput').html())
		bb=bb-1;
		if(bb>0){
			$('.choose-btns .chooseinput').html(eval(bb));
			return bb;
		}else{
			$('.choose-btns .chooseinput').html(1);
			return $('.choose-btns .chooseinput').html();
		}
	})
	$('#shang a').click(function(){
		var pp=eval($(this).attr('title'));
		jdprice.innerHTML=('￥'+$(this).attr('title'));
		 $(this).css('border','2px solid #C81623').siblings().css('border','');
	})



	//商品增值保障
	var item1=document.getElementById('item1');
	var item2=document.getElementById('item2');
	var item3=document.getElementById('item3');
	var item11=document.getElementById('item11');
	var item21=document.getElementById('item21');
	var item12=document.getElementById('item12');
	var itul=item11.getElementsByTagName('ul');
	var itlist=item11.getElementsByTagName('input');
	var sername=$('#item1 .name');
	var count=1;
	var count1=1;
	item1.onmouseover=function(){
		item11.style.display='block';
	}
	item1.onclick=function(){
		// var count=1;
		count++;
		if(count%2==0){
			this.style.border='2px solid rgb(228,57,60) '
		}else{
			this.style.border='';
		}
		return count;
		
	}
	item2.onclick=function(){
		
		count1++;
		if(count1%2==0){
			this.style.border='2px solid rgb(228,57,60) '
		}else{
			this.style.border='';
		}
		return count1;
		
	}

	console.log(count);
	item12 .onmouseover=function(){
		item11.style.display='block';
	}
	item12 .onmouseout=function(){
		item11.style.display='none';
	}
	item11 .onmouseover=function(){
		item11.style.display='block';
	}
	item11.onmouseout=function(){
		item11.style.display='none';
	}
	item2.onmouseover=function(){
		item21.style.display='block';
	}
	item2.onmouseout=function(){
		item21.style.display='none';
	}
	//点击出现的单选框会替换上面的内容
	$('#item11 ul li input').click(function(){
		
		$('#item1 .name').html($(this).val());
		$('#item11').css('display','none');

	})
	$('#item21 ul li input').click(function(){
		
		$('#item2 .name').html($(this).val());
		$('#item21').css('display','none');

	})
	$('#item1').click(function(){

		$('#item11').css('display','none');
	})
	//商品配送至
	$('.clear-selector').mouseover(function(){
		$('.areahide').show();
		$(this).css('borderTop','white');
	})
	$('.areahide').mouseover(function(){
		$('.areahide').css('display','block');
	})
	$('.areahide').mouseout(function(){
		$('.areahide').css('display','none');
	})
	$('.areaclose').click(function(){
		$('.areahide').hide();
	})

	$('.areaul li').click(function(){
		var num2=$(this).index();

		$(this).css('borderBottom','4px solid white').siblings().css('borderBottom','0px solid rgb(237,210,139)')
		$('.area0').eq(num2).show().siblings().hide();
		$('.areaul').show();
		$('.areaclose').show();
	})
	var html;

	$('.area0 li').click(function(){
		var num21=$(this).parent().index()-1;
		var num2=$(this).parent().index()-2;
		var html1=$(this).html();
		$('.area0').eq(3).html($('.area0').eq(num21).html()).show().siblings().hide();
		$('.areaul').show();
		$('.areaclose').show();
		
	})

	//用户的商品评价

	//商品小图图列表 点击小图显示大图
	// var photo=ab;
	$('.clearfix li').click(function(){
		var ab=$(this).index();
		var len=$('.p-photos-wrap ul li').width();
		$('.clearfix li').css('border','');
		$(this).css('border','2px solid rgb(228,57,60)');
		$('.p-photos-wrap ul').css({left:-len*ab});
		
	})
	//商品大图列表
	var liss=0;
	// var firstImg=$('.p-photos-wrap ul li').first().clone();
	var wimg=$('.p-photos-wrap ul li').width();
	// $('.p-photos-wrap ul').append(firstImg);
	function moveImg(){
		if(liss==$('.p-photos-wrap ul li').length-1){
			liss=1;
			$('.p-photos-wrap ul').css({left:0});
		}else if(liss==-1){
			liss=$('.p-photos-wrap ul li').length-2;
			$('.p-photos-wrap ul').css({left:-($('.p-photos-wrap ul li').length-1)*wimg})
		}else{
			++liss;
			$('.p-photos-wrap ul').css({left:-liss*wimg});
		}
		
	}
	//上一张
	$('.p-photos-wrapnext').click(function(){
		moveImg(++i);
	})
	//下一张
	$('.p-photos-wrapprev').click(function(){
		moveImg(--i);
	})

	//收起
	$('.p-photos-operate .sq').click(function(){
		$('.J-big-photo').css('display','none');
		$('.comment-operate').css({top:140+'px'})
		$('.mylove').css('marginTop','-571px')
	})

	//向左旋转
	var photo1=-90;
	$('.p-photos-operate .lefttran').click(function(){
		
		$('.p-photos-wrap ul li img').css('transform',' rotate('+photo1+'deg)');
		photo1+=photo1;
		if(photo1==-720){
			photo1=-90;
		}
	})
	//向右旋转
	var photo2=90;
	$('.p-photos-operate .righttran').click(function(){
		$('.p-photos-wrap ul li img').css('transform',' rotate('+photo2+'deg)');
		photo2+=photo2;
		if(photo2==720){
			photo2=90;
		}
		
		
	})
	//	点击小图显示大图
	$('.J-p-show-img .showul li').click(function(){
		var num=$(this).index();
		var len=$('.p-photos-wrap ul li').width();
		$('.J-big-photo').css('display','block');
		$('.p-photos-wrap ul').css({left:-num*len});
		$('.comment-operate').css({top:590+'px'})
		$('.mylove').css('marginTop','-140px');
		i=$(this).index();
		moveImg();
	})
	$('.luv2').mouseover(function(){
		var index=$(this).index()-1;
		console.log(index)
		$('.luv-name').eq(index).show();
	})
	$('.luv2 ').mouseout(function(){
		var index=$(this).index()-1;
		$('.luv-name').eq(index).hide();
	})
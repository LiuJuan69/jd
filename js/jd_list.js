	
	// 品牌 点击更多的效果
	var listbj = true;
	$('#fenleiMore').click(function(){
		if(listbj){
			$('#fenleiMore .more1').html('收起');
			$('.listBanks').height(245).width(1197).css('border','2px solid #aaa');
			listbj=false;
			$('.listCon .listBank .ul').css({overflow:'auto',height:'150px'});
			$('.zimu').css('display','block');
		}else{
			$('#fenleiMore .more1').html('更多');
			$('.listBanks').height(145).width(1210).css('border','none');
			listbj = true;
			$('.listCon .listBank .ul').css({overflow:'hidden',height:'95px'});
			$('.zimu').css('display','none');
		}
		
	});
	// 全部商品分类
	function xianshi(){
		document.getElementById("left").style.display="block";		
	}
	function yincang(){
		document.getElementById("left").style.display="none";
	}
	// 点击下拉显示隐藏
	var flag=0;
	document.getElementById("anniu").onclick=function(){
		if($('#anniua').html()=='内存容量、硬盘容量、分辨率等'){
			$('#anniua').html('收起');
		}else{
			$('#anniua').html('内存容量、硬盘容量、分辨率等');
		}
		if(flag==0){
			document.getElementById("shenzhan").style.height="350px";
			document.getElementById("emp").style.height="1000px";
			return flag=1;
		}else{
			document.getElementById("shenzhan").style.height="139px";
			document.getElementById("emp").style.height="789px";
			return flag=0;
		}
		console.log($('.listCon').height())
	}
	// 第五行两件套
	document.getElementById('tao').onmouseover=function(){
		document.getElementById('first12').style.display='block';
		this.style.borderColor='rgb(255, 170, 113)';
		this.style.borderBottomColor='#fff';
		this.style.color='rgb(255, 170, 113)';
		document.getElementById('tao1').style.borderColor='#fff';
		document.getElementById('tao1').style.color='rgb(102,102,102)';
		document.getElementById('tao1').style.borderBottomColor='rgb(255, 170, 113)';

	}
	document.getElementById('tao1').onmouseover=function(){
		document.getElementById('first12').style.display='none';
		document.getElementById('tao').style.borderColor='#fff';
		document.getElementById('tao').style.borderBottomColor='rgb(255, 170, 113)';
		document.getElementById('tao').style.color='rgb(102,102,102)';
		this.style.borderColor='rgb(255, 170, 113)';
		this.style.borderBottomColor='#fff';
	}
	// 选择收货地址=========================================================
	// 收货地址
	$('.add').mouseover(function(){
		$('.addNone').show();
		$('.shopLine').show();
		$('.icon').css('background-position','-17px 0px');
	}).mouseout(function(){
		$('.addNone').hide();
		$('.shopLine').hide();
		$('.icon').css('background-position','0px 0px');
	});
	// 选择省
	function num(num){
		$('#dizhi'+num).click(function(){
			$('.xcAdd').css('display','none');//当前地址消失
			$('#dizhij'+num).css('display','block');//显示选择后的新地址
			$('.tou .li:eq(0) .addwenzi').html($('#dizhi'+num+' a').html());//替换当前头内容
			$('.tou .li').eq(1).css('display','block');//下一个头部框出现
			$('.y1').addClass('borderYL');//改变黄边框
			$('.y0').removeClass('borderYL');
			$('.y2').removeClass('borderYL');
		});
	}
	num(0);
	num(1);
	num(2);
	// 阻止a链接跳转事件
	function A(){
		$('.add a').click(function(e){
			e.preventDefault();
		});
	}
	A();
	// 选择市
	function nums(num){
		$('#bjq'+num).click(function(){
			$('#dizhij0').css('display','none');
			$('#dbjq'+num).css('display','block');
			$('.tou .li:eq(1) .addwenzi').html($('#bjq'+num+' a').html());
			$('.tou .li').eq(2).css('display','block');
			$('.y2').addClass('borderYL');//改变黄边框
			$('.y1').removeClass('borderYL');
			$('.y0').removeClass('borderYL');
		});
	}
	nums(0);
	nums(1);
	nums(2);
	// 选择区
	function numss(num){
		$('#dbjq'+num+' ul li').click(function(){
			var index = $(this).index();
			$('.tou .li:eq(2) .addwenzi').html($('#dbjq'+num+' ul li a').eq(index).html());
			$('.add .con').html($('.tou .addwenzi').eq(0).html()+$('.tou .addwenzi').eq(1).html()+$('.tou .addwenzi').eq(2).html());//最终显示的地址
		});
	}
	numss(0);
	numss(1);
	numss(2);
	// 都选择一次以后再回头选择
	$('.tou li').eq(0).click(function(){
		$('.xcAdd').css('display','block');
		$('.beijing').css('display','none');
		$('.bjq').css('display','none');
		$('.y0').addClass('borderYL');//改变黄边框
		$('.y1').removeClass('borderYL');
		$('.y2').removeClass('borderYL');
	});
	$('.tou li').eq(1).click(function(){
		$('.xcAdd').css('display','none');
		$('.beijing').eq(0).css('display','block');
		$('.bjq').css('display','none');
		$('.y1').addClass('borderYL');//改变黄边框
		$('.y0').removeClass('borderYL');
		$('.y2').removeClass('borderYL');
	});
	$('.tou li').eq(2).click(function(){
		$('.xcAdd').css('display','none');
		$('.beijing').css('display','none');
		$('.bjq').eq(0).css('display','block');
		$('.y2').addClass('borderYL');//改变黄边框
		$('.y1').removeClass('borderYL');
		$('.y0').removeClass('borderYL');
	});

	// 对比 只做了第一个
	$('.content .rows .div1').click(function(){
		$('.dbList').show();

	});
	$('#yincang').click(function(){
		$('.dbList').hide();
	});
	$('.dbList .list .title ul li').mouseover(function(){
		$(this).addClass('borgreen').siblings().removeClass('borgreen');
		$('.xian').css('display','none');
		$('.xian').eq($(this).index()).css('display','block');
	});
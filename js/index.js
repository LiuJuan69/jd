	// nav 导航栏 送至北京，切换城市
	$('.nav .dis .dis-none ul li a').click(function(e){
		e.preventDefault();
		$('.nav .dis .title').html('送至：'+$(this).html())
	})
	<!-- 中间的大轮播图 -->
	// 获取第一张图片的节点对象
	var firstImg = $('#center ul li').first().clone();
	// 添加到最后的位置 并设置 ul 的宽度
	$('#center ul').append(firstImg).width($('#center ul li').length*$('#center ul img').width());

	var i =0;
	var imgW = $('#center ul img').width();
	var timer;

	// 下一张
	$('#center #next').click(function(){
		moveImg(++i);
		// console.log(i)
	});

	// 上一张
	$('#center #prev').click(function(){
		moveImg(--i);
		// console.log(i)
	});

	// 移动到指定的图片
	function moveImg(){
		// alert(num);

		// 最后一张
		if(i==$('#center ul li').length){
			$('#center ul').css({left:0})
			i=1;
		}

		// 是第一张的时候			
		if(i==-1){
			i = $('#center ul li').length-2;
			$('#center ul').css({left:($('#center ul li').length-1)*-$('#center ul li img').width()});
		}

		// 移动图片动画
		$('#center ul').stop().animate({left:i*-imgW},400);
		// console.log(i);
		// // 换一下每个图片的小标记
		if(i==($('#center ul li').length-1)){
			$('#center ol li').eq(0).addClass('circleBg').siblings().removeClass('circleBg');
		}else{
			$('#center ol li').eq(i).addClass('circleBg').siblings().removeClass('circleBg');
		}
	}
	// 点击小图片，跳转到指定的图片
	$('#center ol li').click(function(){
		i = $(this).index();
		moveImg();
	});

	function autoPlay(){
		timer = setInterval(function(){
			i++;
			moveImg();
		},1500);
	}

	autoPlay();

	// 鼠标移入幻灯片清除定时器
	$('#center').mouseover(function(){
		$('#center .button').show();
		clearInterval(timer);
	}).mouseout(function(){
		// 鼠标离开重新播放
		autoPlay();
		$('#center .button').hide();
	})
	// 首页大轮播下的四张小图轮播=================================
	var imgW1 = ($('#img-list ul li img').width()+1)*4;
	$('#img-list ul li').width(imgW1);
	// 获取第一张图片的节点对象
	var firstImg1 = $('#img-list ul li').first().clone();
	// 添加到最后的位置 并设置 ul 的宽度
	$('#img-list ul').append(firstImg1).width($('#img-list ul li').length*imgW1);
	var s =0;
	// 下一张
	$('#img-list .button-right').click(function(){
		moveImg1(++s);
	});

	// 上一张
	$('#img-list .button-left').click(function(){
		moveImg1(--s);
	});

	// 移动到指定的图片
	function moveImg1(){
		// alert(num);

		// 最后一张
		if(s==$('#img-list ul li').length){
			$('#img-list ul').css({left:0})
			s=1;
		}

		// 是第一张的时候			
		if(s==-1){
			s = $('#img-list ul li').length-2;
			$('#img-list ul').css({left:($('#img-list ul li').length-1)*-imgW1});
		}

		// 移动图片动画
		$('#img-list ul').stop().animate({left:s*-imgW1},400);
	}

	// 鼠标移入幻灯片清除定时器
	$('#img-list').mouseover(function(){
		$('#img-list .button').show();
	}).mouseout(function(){
		// 鼠标离开重新播放
		$('#img-list .button').hide();
	})

	// ===============================================================================================
	var huafeinum;//索引值，图标话费机票游戏电影票 ，鼠标移入的索引，等于 出现的div中标题的索引值
	$('.center ul .addH').mouseover(function(){
		// alert()
		$('.ull').hide();
		huafeinum = $(this).index();
		$('.huafei').show().animate({top:0,left:0});
	});
	// 话费机票游戏电影票的悬停
	$('.huafei #Tnav li').mouseover(function(){
		// alert(huafeinum)
		var navnum = huafeinum;//鼠标移入的索引，等于 出现的div中标题的索引值
		var navnum = $(this).index();
		$('.huafei ol').css('display','none');
		$('.huafei ol').eq(navnum).css('display','block');
		$('.huafei .redL').css('display','none');
		$('.huafei .redL').eq(navnum).css('display','block');
		$('.huafei .whiteL').css('display','none');
		$('.huafei .whiteL').eq(navnum).css('display','block');
	})
	// 删除的小叉
	$('.huafei .xiaoshi').click(function(e){
		// alert(1)
		$('.ull').show();
		$('.huafei').animate({top:'200px'}).hide();
	});
	$('#huEr .erji div').on('mouseover',function(){
		$(this).addClass('backgrounder').siblings().removeClass('backgrounder');
		var numer = $(this).index();
		$('#huEr .erji div a').css('color','#666');
		$('#huEr .erji div a').eq(numer).css('color','#fff');
		$('#huEr .erNone').css('display','none');
		$('#huEr .erNone').eq(numer).css('display','block');
	});
	// 话费充值 onfocus 第一次input框时，清空input
	$('#phone12').focus(function(){
		if($(this).val()=='移动、联通、电信'){
			$(this).val('');
			$('#phpneError').html('');
		}	
	});
	// 选择面值 对应提示文字改变
	$('#erse').change(function(){
		if($(this).val()==10){
			$('#erprice').html('￥9.8-￥11.0');
		}else if($(this).val()==20){
			$('#erprice').html('￥19.6-￥21.0');
		}else if($(this).val()==30){
			$('#erprice').html('￥29.4-￥31.0');
		}else if($(this).val()==50){
			$('#erprice').html('￥49.0-￥50.0');
		}else if($(this).val()==100){
			$('#erprice').html('￥98.0-￥100.0');
		}else if($(this).val()==200){
			$('#erprice').html('￥196.0-￥200.0');
		}else if($(this).val()==300){
			$('#erprice').html('￥294.0-￥300.0');
		}else if($(this).val()==500){
			$('#erprice').html('￥490.0-￥500.0');
		}
	});
	// 话费充值，点击充值按钮 正则检验
	$('.huafei .chongzhi').click(function(){
		var str = $('.erNone input').val();
		var p = /^1[34578][0-9]{9}$/;
		if(p.test(str)){
			$('#phpneError').html('输入正确');
			$('#phpneError').addClass('green');
			$('.erNone input').addClass('huafeiBg');
			return true;
		}else{
			$('#phpneError').html('请输入正确手机号');
			$('#phpneError').addClass('ared');
			$('#phone12').val('');
		}
	});
	// 按照ABCDEFGHI........搜索城市
	$('.weizhi li').click(function(){
		var weizhi = $(this).index();
		$(this).css({background:'#c81623',color:'#fff'}).siblings().css({background:'#eee',color:'#666'});
		$('.dizhi li').css('display','none');
		$('.dizhi li').eq(weizhi).css('display','block');

	});
	// 选择城市 选择哪个城市input中显示相应的城市
	$('#starCity1').focus(function(){
		if($(this).val()=='城市'){
			$(this).val('');
		}
		$('.starAdd #addNone1').css('display','block');	
	});
	// 选择城市
	$('#addNone1 a').click(function(e){
		e.preventDefault();
		$('#starCity1').val($(this).html()).css('color','#666');
		$('#addNone1').css('display','none');
	});
	// 到达城市的设置
	$('#starCity2').focus(function(){
		if($(this).val()=='城市'){
			$(this).val('');
		}
		$('.starAdd #addNone2').css('display','block');	
	});
	// 选择城市
	$('#addNone2 a').click(function(e){
		e.preventDefault();
		$('#starCity2').val($(this).html()).css('color','#666');
		$('#addNone2').css('display','none');
	});
	// 判断输入是否正确 不正确弹窗提示'请输入正确信息'
	$('#chongzhi2').click(function(){
		if($('#starCity1').val()!='城市' && $('#starCity2').val()!='城市' && $('#riqi').val()!='日期'){
		}else{
			alert('请输入正确信息');
		}
	});
	// 电影票
	$('#huEr2 .erji div').on('mouseover',function(){
		$(this).addClass('backgrounder').siblings().removeClass('backgrounder');
		var numer = $(this).index();
		$('#huEr2 .erji div a').css('color','#666');
		$('#huEr2 .erji div a').eq(numer).css('color','#fff');
		$('#huEr2 .erNone').css('display','none');
		$('#huEr2 .erNone').eq(numer).css('display','block');
	});
	// 游戏
	$('#huEr4 .erji div').on('mouseover',function(){
		$(this).addClass('backgrounder').siblings().removeClass('backgrounder');
		var numer = $(this).index();
		$('#huEr4 .erji div a').css('color','#666');
		$('#huEr4 .erji div a').eq(numer).css('color','#fff');
		$('#huEr4 .erNone').css('display','none');
		$('#huEr4 .erNone').eq(numer).css('display','block');

	});
	// ==============================================================================================



	// 猜你喜欢 中的换一批 换图片
	var  likeChange=0;
	$('#getChange').click(function(){

		likeChange++;
		if(likeChange==4) likeChange=0;
		console.log(likeChange);
		$('.love-right ul').css('display','none');
		$('.love-right ul').eq(likeChange).css('display','block');
	});
	// 1楼
	$('.floor1 ul .li1f').mouseover(function(){
		var num1f = $(this).index();
		$('.floor1 .whitefff').css('display','none');
		$('.floor1 .whitefff'+num1f).css('display','block');
		$('.floor1 .redfff').css('display','none');
		$('.floor1 .redfff'+num1f).css('display','block');
		// $('.floor1 red-title').removeClass('borderhovers');
		$(this).addClass('borderhovers').siblings().removeClass('borderhovers');
		$('.spanff').css('color','#666');
		$('.span'+num1f).css('color','#fff');
		$('.topred').css('display','none');
		$('.topred'+num1f).css('display','block');
	});
	// 1楼轮播图
	var firstImg1f = $('#ul1f li').first().clone();
	var timer1f;
	$('#ul1f li').width($('#ul1f img').width());
	$('#ul1f').append(firstImg1f).width($('#ul1f li').length*$('#ul1f img').width());
	var i1f =0;
	var imgW1f = $('#ul1f img').width();
	$('#next1f').click(function(){
		moveImg1f(++i1f);
		// console.log(i1f)
	});
	$('#prev1f').click(function(){
		moveImg1f(--i1f);
	});
	function moveImg1f(){
		if(i1f==$('#ul1f li').length){
			$('#ul1f').css({left:0})
			i1f=1;
		}

		// 是第一张的时候			
		if(i1f==-1){
			i1f = $('#ul1f li').length-2;
			$('#ul1f').css({left:($('#ul1f li').length-1)*-imgW1f});
		}
		$('#ul1f').stop().animate({left:i1f*-imgW1f},400);
		if(i1f==($('#ul1f li').length-1)){
			$('#ol1f li').eq(0).attr('style','background:#b61b1f').siblings().removeAttr('style');
		}else{
			$('#ol1f li').eq(i1f).attr('style','background:#b61b1f').siblings().removeAttr('style');
		}
	}
	$('#ol1f li').click(function(){
		i1f = $(this).index();
		moveImg1f();
	});
	function autoPlay1f(){
		timer1f = setInterval(function(){
			i1f++;
			moveImg1f();
		},3000);
	}

	autoPlay1f();

	// 鼠标移入幻灯片清除定时器
	$('.bottom_over').mouseover(function(){
		clearInterval(timer1f)
	}).mouseout(function(){
		// 鼠标离开重新播放
		autoPlay1f();
	})


	// 楼层2 选项卡
	var F2num;
	$('#Title li').on('mouseover',function(){
		F2num = $(this).index()
		$('#F2ul #li'+F2num).css('display','block').siblings().css('display','none');
		$('#Title .none').eq(F2num).css('display','block');
		$('#Title .whiteLine').eq(F2num).css('display','block');
	}).mouseout(function(){
		$('#Title .none').css('display','none');
		$('#Title .whiteLine').css('display','none');
		$('#Title .none').eq(F2num).css('display','block');
		$('#Title .whiteLine').eq(F2num).css('display','block');
	})
	// 楼层2图片轮播
	var i2f =0;
	var imgW2f = $('#floor2 .center-top ul img').width();
	$('#floor2 .center-top ul li').width(imgW2f)
	var firstImg2f = $('#floor2 .center-top ul li').first().clone();
	$('#floor2 .center-top ul').append(firstImg2f).width($('#floor2 .center-top ul li').length*$('#floor2 .center-top ul li img').width());
	// 下一张
	$('#floor2 .center-top .button-right').click(function(){
		moveImg2f(++i2f);
	});
	// 上一张
	$('#floor2 .center-top .button-left').click(function(){
		moveImg2f(--i2f);
	});
	// 移动到指定的图片
	function moveImg2f(){
		// 最后一张
		if(i2f==$('#floor2 .center-top ul li').length){
			$('#floor2 .center-top ul').css({left:0})
			i2f=1;
		}
		// 是第一张的时候			
		if(i2f==-1){
			i2f = $('#floor2 .center-top ul li').length-2;
			$('#floor2 .center-top ul').css({left:($('#floor2 .center-top ul li').length-1)*-imgW2f});
		}
		// 移动图片动画
		$('#floor2 .center-top ul').stop().animate({left:i2f*-imgW2f},400);
		if(i2f==($('#floor2 .center-top ul li').length-1)){
			// $('.center-top .circle div').eq(0).addClass('f2bg').siblings().removeClass('f2bg');
			$('#floor2 .center-top .circle div').eq(0).attr('style','background:#b61b1f').siblings().removeAttr('style');
		}else{
			// $('.center-top .circle div').eq(i2f).addClass('f2bg').siblings().removeClass('f2bg');
			$('#floor2 .center-top .circle div').eq(i2f).attr('style','background:#b61b1f').siblings().removeAttr('style');
		}
	}

	// 点击小图片，跳转到指定的图片
	$('#floor2 .center-top .circle div').click(function(){
		i2f = $(this).index();
		moveImg2f();
	});
	// 楼层三选项卡
	var F3num;
	$('.ul3f').on('mouseover',function(){
		F3num = $(this).index();
		$('.ul3f .none').css('display','none');
		$('.ul3f .whiteLine').css('display','none');
		$('.ul3f .none').eq(F3num).css('display','block');
		$('.ul3f .whiteLine').eq(F3num).css('display','block');
	}).mouseout(function(){
		$('.ul3f .none').css('display','none');
		$('.ul3f .whiteLine').css('display','none');
		$('.ul3f .none').eq(F3num).css('display','block');
		$('.ul3f .whiteLine').eq(F3num).css('display','block');
	});
	// 楼层四选项卡
	var F4num;
	$('.ul4f').on('mouseover',function(){
		F4num = $(this).index()
		$('.ul4f .none').eq(F4num).css('display','block');
		$('.ul4f .whiteLine').eq(F4num).css('display','block');
	}).mouseout(function(){
		$('.ul4f .none').css('display','none');
		$('.ul4f .whiteLine').css('display','none');
		$('.ul4f .none').eq(F4num).css('display','block');
		$('.ul4f .whiteLine').eq(F4num).css('display','block');
	})
	// 天天特价 向上滚动
	var firstTT = $('#price .price-rcontent ul li').first().clone();
	var heightTT = $('#price .price-rcontent ul li').height()+20;
	$('#price .price-rcontent ul').append(firstTT).height(heightTT*$('#price .price-rcontent ul li').length);
	var timerTT;
	var iTT=0;
	function moveImgTT(){
		if(iTT==$('#price .price-rcontent ul li').length-1){
			$('#price .price-rcontent ul').css({top:0})
			iTT=1;
		}
		// 移动图片动画
		$('#price .price-rcontent ul').stop().animate({top:iTT*-heightTT},400);
	}
	function autoPlayTT(){
		timerTT = setInterval(function(){
			iTT++;
			moveImgTT();
			// alert()
		},3000);	
	}
	autoPlayTT();
	// 左侧固定楼层
	$(document).on('scroll',function(){
	if($(document).scrollTop()>1200&&$(document).scrollTop()<13000){
		$('#fixed-left').css('display','block');
		if($(document).scrollTop()>1200 && $(document).scrollTop()<1950){
			$('#fixed-left .play-none').css('display','none');
			$('#fixed-left .play-none:eq(0)').css('display','block');
			
		}
		if($(document).scrollTop()>1950 && $(document).scrollTop()<2700){
			$('#fixed-left .play-none').css('display','none');
			$('#fixed-left .play-none:eq(1)').css('display','block');
		}
		if($(document).scrollTop()>2700 && $(document).scrollTop()<3500){
			$('#fixed-left .play-none').css('display','none');
			$('#fixed-left .play-none:eq(2)').css('display','block');
		}
		if($(document).scrollTop()>3500 && $(document).scrollTop()<4200){
			$('#fixed-left .play-none').css('display','none');
			$('#fixed-left .play-none:eq(3)').css('display','block');
		}
		if($(document).scrollTop()>4200 && $(document).scrollTop()<5000){
			$('#fixed-left .play-none').css('display','none');
			$('#fixed-left .play-none:eq(4)').css('display','block');
		}
		if($(document).scrollTop()>5000 && $(document).scrollTop()<5700){
			$('#fixed-left .play-none').css('display','none');
			$('#fixed-left .play-none:eq(5)').css('display','block');
		}
		if($(document).scrollTop()>5700 && $(document).scrollTop()<6350){
			$('#fixed-left .play-none').css('display','none');
			$('#fixed-left .play-none:eq(6)').css('display','block');
		}
		if($(document).scrollTop()>6350 && $(document).scrollTop()<7000){
			$('#fixed-left .play-none').css('display','none');
			$('#fixed-left .play-none:eq(7)').css('display','block');
		}
		if($(document).scrollTop()>7000 && $(document).scrollTop()<7600){
			$('#fixed-left .play-none').css('display','none');
			$('#fixed-left .play-none:eq(8)').css('display','block');
		}
		if($(document).scrollTop()>7600 && $(document).scrollTop()<8300){
			$('#fixed-left .play-none').css('display','none');
			$('#fixed-left .play-none:eq(9)').css('display','block');
		}
		if($(document).scrollTop()>8300 && $(document).scrollTop()<9000){
			$('#fixed-left .play-none').css('display','none');
			$('#fixed-left .play-none:eq(10)').css('display','block');
		}
		if($(document).scrollTop()>9000 && $(document).scrollTop()<9670){
			$('#fixed-left .play-none').css('display','none');
			$('#fixed-left .play-none:eq(11)').css('display','block');
		}
		if($(document).scrollTop()>9670 && $(document).scrollTop()<13000){
			$('#fixed-left .play-none').css('display','none');
			$('#fixed-left .play-none:eq(12)').css('display','block');
		}
	}else{
		$('#fixed-left').css('display','none');
	}

	})
	// 右侧回到顶部
	$('#scrollT').click(function(){
		$(document).scrollTop(0);
	})
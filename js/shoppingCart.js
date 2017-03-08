	// 全部商品京东大药房
	$('.yaofang').on('mouseover',function(){
		$('.ListLine').animate({left:'105px'},200); 
		$(this).css('color','#e4393c');
		$('.all').css('color','#666');
	});
	$('.all').on('mouseover',function(){
		$('.ListLine').animate({left:'3px'},200); 
		$(this).css('color','#e4393c');
		$('.yaofang').css('color','#666');
	});
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
	// =========================================================================
	// 判断背景是否变粉
	function bg(){
		if(check.checked== true){
			$('.con').css('background','#fff4e8');
			$('.change .title .bj').css({background:'#f48719',color:'#fff'});//换购改变背景颜色
		}else{
			$('.change .title .bj').css({background:'#fff',color:'#666'});
			$('.checkxu').removeAttr('checked');//有一个不选中全选取消
			$('.con').css('background','#fff');
		}
	}
	// 只选变粉的
	var check = document.getElementsByName('xu[]')[2];
	check.onclick=function(){
		bg();
	}
	// 全选
	$('.checkxu').click(function(){
		$('input[name="xu[]"]').attr('checked',this.checked);
		if(check.checked== true){
			$('.con').css('background','#fff4e8');
			$('.change .title .bj').css({background:'#f48719',color:'#fff'});//换购改变背景颜色
		}else{
			$('.con').css('background','#fff');
			$('.change .title .bj').css({background:'#fff',color:'#666'});
		}
	});
	// 选择商品数量，价格做相应改变，数量改变
	var numi=1;
	var price = $('.con .price').html();
	$('.jian').click(function(){
		numi--;
		if(numi<1){
			alert('商品数量不能小于1');
			numi=1;
		}
		$('.numss .zhi').html(numi);
		$('.con .price').html(numi*price+'.00');
		$('#xzn').html(numi);
		$('#jsprice').html(numi*price+'.00');
	})
	$('.jia').click(function(){
		numi++;
		$('.numss .zhi').html(numi);
		$('.con .price').html(numi*price+'.00');
		$('#xzn').html(numi);
		$('#jsprice').html(numi*price+'.00');
	});
	// 删除
	$('#dele').click(function(){
		if(confirm('你确定要删除选种商品吗？')){
			$('.con').hide();
			$('#xzn').html('0');
			$('#jsprice').html('00.00');
		}else{
			return true;
		}
		
	})
	// 当商品被选中背景颜色变粉
	$('.timer').click(function(){
		$('.timerNone').fadeToggle();
		$('.timerLine').fadeToggle();
		$(this).css('border','1px solid #e4393c')
	});
	// 猜你喜欢图片轮播
	// 向下
	var listi=0;
	$('#listNext').click(function(){
		listi++;
		$('.listul').eq(listi).show().siblings('.listul').hide();
		if(listi>=2) listi=-1;
		$('.title #ol li').eq(listi).addClass('first').siblings().removeClass('first');
		console.log(listi)
	});
	// 向上
	$('#listPrev').click(function(){
		listi--;
		$('.listul').eq(listi).show().siblings('.listul').hide();
		if(listi<=-1) listi=2;
		$('.title #ol li').eq(listi).addClass('first').siblings().removeClass('first');
		console.log(listi)
	});
	// 点圆改变
	$('.title #ol li').click(function(){
		$(this).addClass('first').siblings().removeClass('first');
		$('.listul').eq($(this).index()).show().siblings('.listul').hide();
	});

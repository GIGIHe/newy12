$(function(){
    $(".mfol li").click(function(){
        $(this).addClass('hover').siblings('li').removeClass('hover');
        $(".mfexa_type").eq($(this).index()).stop().slideDown(600).siblings(".mfexa_type").hide();
    })

    $(".point1").click(function(){
        $("html , body").animate({scrollTop:$(".m1").offset().top},400);
    });

    $(window).scroll(function(){
        // 注入ht
        var top = $(".container").offset().top;//获取指定位置
        var scrollTop = $(window).scrollTop();
        if(scrollTop>top){
            $(".navbar").addClass('active');
        }else{
            $(".navbar").removeClass('active');
        }
    })

    $(".hjul li").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('li').removeClass('hover');
             $(".hjul_inner").hide().eq(index).fadeIn(200);
        })
    })
    $(".navs li").each(function(index){
        $(this).click(function(){
            $(this).addClass('active').siblings('.navs li').removeClass('active');
             $(".data_con").hide().eq(index).fadeIn(200);
        })
    })
        $('.zg_mcCent').eq(8).show();
        var txt = $('.zg_mNav li').eq(8).text();
        $(".zg_mtopP b").text(txt);
        var idd = window.location.hash.replace(/[^0-9]/ig,"");
        // console.log(idd);	//课程方向选择
        $(".zg_mNav li").each(function(){
            var indx = $(this).attr('data-size');
            if(idd==indx){
                var txt = $(this).text();
                $(".zg_mtopP b").text(txt);
                $(".zg_mNav li").removeClass("on");
                $(this).addClass("on");
                $(".zg_mcCent").hide();
                $(".zg_mcCent:eq("+indx+")").stop(true,true).fadeIn();
            }
            $(this).click(function(){			
                var txt = $(this).text();
                $(".zg_mtopP b").text(txt);
                $(".zg_mNav li").removeClass('on');
                $(this).addClass('on');
                $('.zg_mcCent').hide();
                $('.zg_mcCent').eq(indx).show();
                $(".zg_cenav").stop().animate({right:'-100%'});
                $(".mask").hide();
                $('html,body').scrollTop(sct);
                // console.log(sct);
            });
        });	
        //筛选
        var sct;
        $(".zg_mtopP a").click(function(){
            var sct = $('html,body').scrollTop()
            $(".zg_cenav").stop().animate({right:0});
            $(".mask").show();
            $('html,body').scrollTop(sct);
        });
 //关闭弹窗
 $(".zgColse,.zgnavBox").click(function(){
    $(".zg_cenav").stop().animate({right:'-100%'});
    $(".mask").hide();
    $('html,body').scrollTop(sct);
});
$(".zg_navC").click(function(e){
    e.stopPropagation();
})
})
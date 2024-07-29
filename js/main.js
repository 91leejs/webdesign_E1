$(function(){
    $(".main > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    },
    function(){
        $(".sub").stop().slideUp();
    })//main li hover


    //     var n = 0;
    // setInterval(function(){
    //     if(n == 2){
    //         n=0;
    //     }else{
    //         n++;
    //     }
    //     $(".move").animate({left : n * (-100) + "%"},500);
    // },2000)

    setInterval(function(){
        $(".move").animate({left : "-100%"},500
            ,function(){
                $(".move").append($(".move li").eq(0));
                $(".move").css({left : "0"});
            })
    },2500)

    $(".cont_top_box").click(function(){
        $(".modal").fadeIn();
    })//cont_top_box click

    $(".close").click(function(){
        $(".modal").fadeOut();
    })//close click
})//jQuery
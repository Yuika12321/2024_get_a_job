jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    })

    $(".main>li").mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })

    $(".imgs li:gt(0)").hide()

    setInterval(function(){
        $(".imgs li:first").fadeOut().next("li").fadeIn().end().appendTo(".imgs>ul")
    }, 2000)

    $("#tab").click(function () {
        $(".notice").show()
        $(".gal").hide()
        $("#tab2").removeClass("off")
        $("#tab").addClass("off")
    })

    $("#tab2").click(function () {
        $(".notice").hide()
        $(".gal").show()
        $("#tab").removeClass("off")
        $("#tab2").addClass("off")
    })

    $(".notice li:first").click(function(){
        $(".popup").show()
    })

    $("button").click(function(){
        $(".popup").hide()
    })

})
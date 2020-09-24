$(function () {
    $(".scroll_right").click(function () {
        $(".item").animate({ left: "-=100px" }, 500);
    });

    $(".scroll_left").click(function () {
        $(".item").animate({ left: "+=100px" }, 500);
    });

    $(".rounded-circle").click(function () {
        $(".box").fadeIn(200);
    })

    $(".close").click(function () {
        $(".box").fadeOut();
    })

    $("body").css("line-height", "inherit");
    $("html").removeProp("line-height");

    $(".button5").click(function () {
        $("#box1").toggle("slow", "linear", function () { $("#box2").toggle("slow") },
            function () { $("#box3").toggle("slow") },
        
        );    
    })

    $(".button6").click(function () {
        $("#box5").toggle("slow", "swing");
    })

});

$(function () {
    if ($(".box").length >= 5) {
        $(".box").show(length == 3);
    }
});

$(function () {
    $(".box").css("text-decoration", "none");
    $(".close").click(function () {
        $(this).css("color", "#ffff");
    });
});

$(function () {

    if ($(".item").length <= 3) {

        $(".scroll_left").hide();
        $(".scroll_right").hide();

    } else {

        $(".scroll_left").show();
        $(".scroll_right").show();

    }

});
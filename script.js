$(".part-2").hide();
$(".part-3").hide();
$(".part-4").hide();


$(".part-1").click(function() {
    $(".part-1").hide();
    $(".part-2").show();
});

$(".part-2").click(function() {
    $(".part-2").hide();
    $(".part-3").show();
});

$(".part-3").click(function() {
    $(".part-3").hide();
    $(".part-4").show();
    $(".part-4").fadeOut();
});


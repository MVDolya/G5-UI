$('.welcome').hide();


$(document).on('click','.interface__btn-02', function(){
    $(".interface").css("display", "none");
 });


$(document).on('click','.interface__btn-02', function(){
    $(".welcome").css("display", "none");
 });



 $(".interface__btn-01").click(function(){
    $(".interface").hide();
    $(".welcome").show();
});
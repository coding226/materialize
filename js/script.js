$(document).ready(function(){
    $('.modal').modal();
    $('select').formSelect();
    $(".approval-section").click(function(){
        $(this).parents(".card-wrap").toggleClass("active");
    });
    $(".approval-btn").click(function(e){
        e.stopPropagation();
        e.preventDefault();
    });

});
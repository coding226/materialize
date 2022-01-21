$(document).ready(function(){
    $('.modal').modal();
    $(".approval-section").click(function(){
        $(this).parents(".card-wrap").toggleClass("active");
    });
    $(".approval-btn").click(function(e){
        e.stopPropagation();
        e.preventDefault();
    });
    var this_year = new Date().getFullYear()
    function generate_table() {
        var tr;
        $('.year-filter').html('');
        tr = $('<ul class="pagination" />');
         tr.append("<td class=\"\"><a href=\"#!\" class='btn'>" + (this_year + 1) + "</a></td>");
         tr.append("<td class=\"\"><a href=\"#!\" class='btn'>" + this_year + "</a></td>");
         tr.append("<td class=\"\"><a href=\"#!\" class='btn'>" + (this_year - 1) + "</a></td>");
         tr.append("<td class=\"\"><a href=\"#!\" class='btn'>" + (this_year - 2) + "</a></td>");
         tr.append("<td class=\"\"><a href=\"#!\" class='btn'>" + (this_year - 3) + "</a></td>");
         tr.append("<td class=\"\"><select class='pp'></select></td>");
        $('.year-filter').append(tr);
         var filter_year = (this_year - 4)
        var se;
        for (var i = filter_year; i > 1998; i--) {
            $(".pp").append("<option>" + i + "</option>");
         }


    }
    generate_table();

    $('select').formSelect();
});
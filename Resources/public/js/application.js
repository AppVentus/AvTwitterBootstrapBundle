$(document).ready(function(){

    $(".fancybox").fancybox();
    //tab
    $("a[rel=twipsy],a[rel=tooltip]").tooltip({
        live: true
    });
    $("a[rel=popover]").popover({placement:"bottom",trigger:"click"});
    $('.nav-pills.tab a').click(function(e){
        e.preventDefault();
        if(!$(this).parent('li').hasClass('active')){
            var data_tab_id = $(this).parents('ul').attr('data');
            $("#"+data_tab_id+" > div").hide();
            $("#"+data_tab_id+" "+$(this).attr('href')).show();
            $(this).parents('ul').find('li').removeClass('active');
            $(this).parent('li').addClass('active');
        }
    });
    

});

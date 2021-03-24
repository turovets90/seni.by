$(document).ready(function(){

    /* перевод картинки svg в код */
    $('.icon img, img.icon').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });
    /* end перевод картинки svg в код */


    $('.hamburger').click(function () {
        $('.main_menu').slideToggle();
        $(this).toggleClass('act');

        return false;
    });


    $('.main_menu .arrow').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('act');
    });


    $(".main_slider").slick({
        infinite: true,
        arrows: true,
        dots: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    if($(window).innerWidth() < 575){
        $(".products_slider").slick({
            infinite: true,
            arrows: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }


    $('select.custom_select').select2({
        minimumResultsForSearch: -1
    });


    $('.file').filestyle({
        //placeholder: "Загрузите файл",
        text: "Открыть"
    });


});






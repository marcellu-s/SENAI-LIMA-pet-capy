if(window.matchMedia("(min-width: 700px)").matches) {
    

    var carouselWidth = $('#slider-products .carousel-inner')[0].scrollWidth;
    var cardWidth = $('#slider-products .carousel-item').width();
    
    var scrollPosition = 0;
    
    $('#slider-products .carousel-control-next').on('click', function() {
        if(scrollPosition < (carouselWidth - (cardWidth * 4))) {
            console.log('next');
            scrollPosition = scrollPosition + cardWidth;
            $('#slider-products .carousel-inner').animate({scrollLeft: scrollPosition}, 600)
        }
    });
    
    $('#slider-products .carousel-control-prev').on('click', function() {
        if(scrollPosition > 0) {
            console.log('prev');
            scrollPosition = scrollPosition - cardWidth;
            $('#slider-products .carousel-inner').animate({scrollLeft: scrollPosition}, 600)
        }
    });
}else {
    
}
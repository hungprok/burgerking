$(document).ready(function() {
    $(window).scroll(function() {

        if ($(window).scrollTop() > 200) {
            $(.sidebar).css('position', 'fixed');
            $(.sidebar).css('top', '0');
        } else if ($(window).scrollTop() <= 200) {
            $(.sidebar).css('position', '');
            $(.sidebar).css('top', '');
        }
        if ($(.sidebar).offset().top + $(.sidebar).height() > $(footer).offset().top) {
            $(.sidebar).css('top', -($(.sidebar).offset().top + $(.sidebar).height() - $(footer).offset().top));
        }
    });
});
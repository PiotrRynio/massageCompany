$(document).ready(function () {
    $('a[href^="#"]:not([href="#"]').on('click', function (event) {
        //after click on link with-# (nav on page)
        var target = $($(this).attr('href'));
        // check that exist
        if (target.length) {
            const navBarHeight = $('.upperBar').height();
            const placeFromTop = (target.offset().top - (navBarHeight));
            // console.log(navBarHeight);
            // console.log(placeFromTop);
            event.preventDefault();
            $('html, body').animate({
                scrollTop: placeFromTop
            }, 500);
        }
    });
    $('.stickyPhoneIcon').on('click', function (event) {
        console.log('to tutaj');
        const navBarHeight = $('.upperBar').height();
        const placeFromTop = ($('#section-footer').offset().top - (navBarHeight));

        $('html, body').animate({
            scrollTop: placeFromTop
        }, 500);
    });
});
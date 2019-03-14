$(document).ready(function () {
    $('a[href^="#"]:not([href="#"]').on('click', function (event) {
        //after click on link with-# (nav on page)
        var target = $($(this).attr('href'));
        // check that exist
        if (target.length) {
            const $myTarget = target
            goToPlace($myTarget);
            event.preventDefault();
        }
    });
    $('.stickyPhoneIcon').on('click', function (event) {
        const $myTarget = $('#section-footer')
        goToPlace($myTarget);
    });
});

function goToPlace($myTarget) {
    const navBarHeight = $('.upperBar').height();
    const placeFromTop = ($myTarget.offset().top - (navBarHeight));
    $('html, body').animate({
        scrollTop: placeFromTop
    }, 600);
}
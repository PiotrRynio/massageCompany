var isActiveNavMenu = false;
$(document).ready(function () {
    $('.navMenu').stop().slideToggle(0);
});

$('a[href^="#"]').on('click', function (event) {
    var target = $(this).attr('href');
    // check that exist
    if (target.length) {
        if (isActiveNavMenu)
            activeNavMenu();
    }
});

$('.upperBar__burger').on('click', function () {
    activeNavMenu();
})

function activeNavMenu() {
    $('.burger__first').toggleClass('burger__first--active');
    $('.burger__second').toggleClass('burger__second--active');
    $('.burger__third').toggleClass('burger__third--active');
    $('.navMenu').stop().slideToggle(300);
    isActiveNavMenu = !isActiveNavMenu;
}
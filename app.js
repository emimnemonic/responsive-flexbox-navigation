$(document).ready(function ()  {

    var items = $('ul.top-nav').children('li:not(.menu-icon)');

    $('#open-menu').click(function () {
        $(this).toggleClass('close');
        items.toggleClass('active');
    });

    $('li.dropdown').hover(function () {
        $('.dropdown-content').toggle();
        $('.main').toggleClass('hover-fade');
    });
});

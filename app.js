$(document).ready(function ()  {

    var items = $('ul.top-nav').children('li:not(.menu-icon)');

    $('#open-menu').click(function () {
        $(this).toggleClass('close');
        items.toggleClass('active');
    });

    $('li.dropdown').hover(function () {
        $('.main').toggleClass('hover-fade');
    });
});

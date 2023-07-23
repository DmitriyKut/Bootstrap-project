$(document).ready(function() {
    $('.header_burger').click(function(event) {                     //При нажатии на бургер срабатывает событие
        $('.header_burger,.header_menu').toggleClass('active');     //Классам .header_burger и .header_menu добавляется класс active
        $('body').toggleClass('lock');                              //А к классу body добавляется класс lock
    });
});
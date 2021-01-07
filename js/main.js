$(function() {

    // fixed Header
    let header = $("#header");
    let intro = $("#intro");
    let introH; // высота нашего intro
    let scrollPos = $(window).scrollTop(); // позиция скролла

    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();

        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) header.addClass("fixed")
        else header.removeClass("fixed");


        console.log(scrollPos);

    }); // действие, которое выполняется при скролле страницы

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault(); // отменяет стандратное поведение ссылки

        let elementId = $(this).data('scroll'); // хранится id блока, к которому хотим скролить
        let elementOffset = $(elementId).offset().top; // получаем отступ отступ элемента от вверха

        console.log(elementId);

        $("html, body").animate({
            scrollTop: elementOffset - 45
        }, 700);


    });
});

let animItems = document.querySelectorAll('._anim-items');

// Проверяем есть ли объекты, которые нужно анимировать
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll); // событие при скроле

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight; // высота нашего объекта
            const animItemOffset = offset(animItem).top; // позиция нашего объекта относительно вверха
            const animStart = 4; // коэф регулировки старта анимации

            let animItemPoint = window.innerHeight - animItemHeight/animStart; 

            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint)&&
                 pageYOffset<(animItemOffset+animItemHeight)){
                animItem.classList.add('_active');
            }
            else
                animItem.classList.remove('_active');
        }
    }
    function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
         animOnScroll();
    }, 300);
   
}
    


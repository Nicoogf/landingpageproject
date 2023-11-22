const mobileNav = document.querySelector(".mnav");
const closeBtn = document.querySelector(".mnav__close-btn");
const closeBtnIcn = document.querySelector(".mnav__close-btn-icon");

closeBtn.addEventListener('click', () => {
    const currentLeft = parseInt(window.getComputedStyle(mobileNav).getPropertyValue('left'));

    if (currentLeft === 0) {
        mobileNav.style.left = '-300px';
        closeBtnIcn.classList.remove('ri-arrow-left-s-line');
        closeBtnIcn.classList.add('ri-arrow-right-s-line');
    } else {
        mobileNav.style.left = '0';
        closeBtnIcn.classList.remove('ri-arrow-right-s-line');
        closeBtnIcn.classList.add('ri-arrow-left-s-line');
    }
});


//swiper

const swiper = new Swiper('.swiper', {

    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickeable : true ,
    },

  });

  document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach((item) => {
        const faqBtn = item.querySelector('.faq__btn');
        const answer = item.querySelector('.faq__answer');

        item.addEventListener('click', () => {
            const isOpen = item.classList.toggle('open');
            const iconElement = faqBtn.querySelector('i');

            if (isOpen) {
                iconElement.classList.replace('ri-add-fill', 'ri-subtract-fill');
                answer.classList.remove('hidden');
                answer.classList.add('h-auto');
            } else {
                iconElement.classList.replace('ri-subtract-fill', 'ri-add-fill');
                answer.classList.remove('h-auto');
                answer.classList.add('hidden');
            }
        });
    });
});



const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: '3000',
    delay : 600 ,
    reset: true
}) ;

//

sr.reveal('.hero__text' , { origin:'top' } )
sr.reveal('.hero__img' )


//stats
sr.reveal('.stats__item' , {
    delay:600,
    distance : '100px' ,
    interval: 100 ,
    origin: 'top'
})
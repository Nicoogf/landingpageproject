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

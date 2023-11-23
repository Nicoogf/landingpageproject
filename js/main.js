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
    duration: '2000',
    delay : 400 ,
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


sr.reveal('.services') ;
sr.reveal('.services__top') ;
sr.reveal('.services__item' , {
    delay:600,
    distance : '100px' ,
    interval: 100 ,
    origin: 'bottom'
}) ;

//appaintment

sr.reveal('.appointment__title') ;
sr.reveal('.appointment__form') ;


sr.reveal('.testimonial') ;
sr.reveal('.testimonial__constainer') ;




sr.reveal('.team__tittle') ;
sr.reveal('.team__slider') ;

sr.reveal('.faq__tittle') ;
sr.reveal('.faq__item' , {
    delay:400,
    distance:'100px',
    interval: 100 ,
    origin : 'bottom'
}) ;


sr.reveal('.departaments') ;
sr.reveal('.departaments__container') ;

sr.reveal('.blog__tittle') ;
sr.reveal('.blog__post' , {
    delay:400,
    distance: '100px',
    interval : 100 ,
    origin:'bottom'
}) ;


sr.reveal('.brands__logo' , {
    delay:400,
    distance: '100px',
    interval : 100 ,
    origin:'bottom'
}) ;

sr.reveal('.newsletter')
sr.reveal('.newsletter_container')


sr.reveal('.footer__item' , {
    delay:400,
    distance: '100px',
    interval : 100 ,
    origin:'bottom'
}) ;

document.addEventListener("DOMContentLoaded", function () {
    const opciones = document.querySelectorAll('.opcion');
    const titulo = document.getElementById('titulo');
    const infoTexto = document.getElementById('infoTexto');

    opciones.forEach((opcion) => {
        opcion.addEventListener('click', () => {
            const opcionId = opcion.id;

            // Cambiar el texto según la opción seleccionada
            switch (opcionId) {
                case 'pizza':
                    titulo.textContent = 'Pizza';
                    infoTexto.textContent = 'Nuestro menú de pizzas es un viaje por Italia en cada bocado, con ingredientes frescos y combinaciones que despiertan los sentidos. Desde las capas de queso derretido hasta la perfección de la masa crujiente, cada pizza está cuidadosamente elaborada para garantizar una experiencia gastronómica inolvidable.Ya sea que prefieras la simplicidad de una Margherita o te aventures con nuestras creaciones exclusivas, cada elección es una invitación a descubrir nuevos y deliciosos sabores. En nuestro restaurante, la pizza no es solo una comida, es un festín de tradición y creatividad que estamos emocionados de compartir contigo';
                    break;
                case 'hamburguesas':
                        titulo.textContent = 'Hamburguesas';
                        infoTexto.textContent = 'Sumérgete en un mundo de sabores irresistibles con nuestra selección de hamburguesas. Desde la jugosa clásica hasta creaciones innovadoras como la BBQ Bacon Explosion, cada hamburguesa es una experiencia culinaria única. Nuestro menú celebra la diversidad de ingredientes frescos y combinaciones audaces que transforman cada bocado en un deleite para los amantes de las hamburguesas. En nuestro restaurante, la hamburguesa es mucho más que una comida, es una expresión de creatividad y pasión por la buena comida que estamos emocionados de compartir contigo.';
                        break;    
                case 'tragos':
                    titulo.textContent = 'Tragos';
                    infoTexto.textContent = '"Sumérgete en un universo de sabores con nuestra extensa variedad de bebidas. Desde cócteles clásicos hasta creaciones únicas, cada sorbo es una experiencia refrescante. Nuestra carta de bebidas celebra la diversidad de opciones, desde refrescantes mocktails hasta los cócteles más sofisticados. En nuestro establecimiento, la bebida es mucho más que un acompañamiento; es una celebración de la diversidad de sabores y la calidad que nos define. Descubre todas nuestras opciones y brinda por momentos inolvidables con nosotros. ¡Salud!';
                        break;
                case 'postres':
                        titulo.textContent = 'Postres';
                        infoTexto.textContent = 'Deleita tu paladar con nuestra exquisita variedad de postres, una sinfonía de dulces tentaciones que cautivan los sentidos. Desde los clásicos como la tarta de chocolate hasta creaciones únicas como el cheesecake de frutos del bosque, cada postre es una obra maestra culinaria. Nuestra carta de postres es una invitación a explorar el placer de lo dulce, con opciones para todos los gustos. En nuestro restaurante, la experiencia culinaria no está completa sin un toque de indulgencia al final. Descubre todos nuestros postres y déjate llevar por el placer de los sabores más dulces. ¡Tu banquete de dulzura te espera!';
                      break;
                 case 'cafe':
                        titulo.textContent = 'Cafe';
                        infoTexto.textContent = 'Explora el mundo del café en nuestro establecimiento, donde cada taza cuenta una historia de aromas y sabores únicos. Desde el espresso clásico hasta creaciones indulgentes como el cappuccino de avellana, cada sorbo es una experiencia para los amantes del café. Nuestra carta de café celebra la diversidad de opciones, desde métodos de preparación tradicionales hasta innovadoras mezclas de sabores. En nuestro restaurante, el café es más que una bebida; es una pasión que se sirve taza tras taza. Descubre todas nuestras opciones y sumérgete en el placer de un buen café. ¡Tu viaje sensorial comienza aquí!';
                      break; 
                 case 'delicias':
                        titulo.textContent = 'Delicias';
                        infoTexto.textContent = 'Explora el mundo del café en nuestro establecimiento, donde cada taza cuenta una historia de aromas y sabores únicos. Desde el espresso clásico hasta creaciones indulgentes como el cappuccino de avellana, cada sorbo es una experiencia para los amantes del café. Nuestra carta de café celebra la diversidad de opciones, desde métodos de preparación tradicionales hasta innovadoras mezclas de sabores. En nuestro restaurante, el café es más que una bebida; es una pasión que se sirve taza tras taza. Descubre todas nuestras opciones y sumérgete en el placer de un buen café. ¡Tu viaje sensorial comienza aquí!';
                      break;                 
                // Agrega más casos según sea necesario
                default:
                    infoTexto.textContent = 'Texto predeterminado';
            }
        });
    });
});
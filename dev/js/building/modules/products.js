export default class Products {
  constructor() {
    this.carInit()
    this.scrollListener()
  }
  carInit() {
    new Swiper('.js-iproducts', {
      loop: true,
      speed: 1200,
      slidesPerView: 3,
      spaceBetween: 60,
      loopedSlides: 6,
      navigation: {
        nextEl: '.js-iproducts ~ .swiper-button-next',
        prevEl: '.js-iproducts ~ .swiper-button-prev',
      },
      breakpoints: {
        900: {
          autoHeight: true
        }
      }
    })
  }
  scrollListener() {
    window.addEventListener('scroll', () => {
      if (document.documentElement.offsetHeight - window.pageYOffset === window.innerHeight) {
        document.body.classList.add('scrollEnd')
      } else {
        document.body.classList.remove('scrollEnd')
      }
    })
  }
}
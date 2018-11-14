import {fadeOut} from './helpers'

export default class Index {
  constructor(delay) {
    this.block = document.querySelector('.js-loader')
    this.products = document.querySelector('.products')
    this.delay = delay
  }
  preload() {
    Pace.on('hide', () => {
      fadeOut(this.block, 600, () => {
        this.block.parentNode.removeChild(this.block)
        this.animate()
      })
    })
    
    window.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      scrollTop > 0 ? 
        document.body.classList.add('scroll') : document.body.classList.remove('scroll')
    })
  }
  animate() {
    let elems = document.querySelectorAll('.js-opening-img'),
        delay = this.delay
    if (elems.length > 1) {
      elems[0].parentNode.removeChild(elems[0])
      setTimeout(this.animate.bind(this), delay)
    } else {
      if (elems.length === 1) {
        const opening = document.querySelector('.opening')
        opening.parentNode.removeChild(opening)
        
        document.body.classList.add('iload')
        
        this.scrollLib()
        this.carInit()
        this.textChanger()
      }
    }
  }
  parallax() {
    let centerX, centerY, diffX, diffY
    
    document.body.addEventListener('mousemove', (event) => {
      centerX = Math.round(window.innerWidth / 2)
      centerY = Math.round(window.innerHeight / 2)
      diffX = -(event.clientX - centerX) / centerX
      diffY = -(event.clientY - centerY) / centerY
      
      TweenMax.to(Array.from(document.querySelectorAll('.bg__left, .bg__right')), 2, {
        backgroundPosition: Math.round(10 * diffX) + 'px ' + Math.round(20 * diffY) + 'px',
        ease: Expo.easeOut
      })
    })
  }
  carInit() {
    new Swiper('.js-iproducts', {
      loop: true,
      speed: 1200,
      slidesPerView: 3,
      spaceBetween: 60,
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
  textChanger()  {
    let h = parseInt(document.querySelector('.js-img-handler').style.height)
    
    document.querySelector('.handler__texts').classList.add('show')
    
    window.addEventListener('scroll', (e) => {
      console.log(document.documentElement.scrollTop + ' : ' + (document.documentElement.scrollTop / h))
    })
    
    var controller = new ScrollMagic.Controller()
    
    new ScrollMagic.Scene({
      triggerElement: '.handler__texts',
      duration: h * .04,
      triggerHook: 'onLeave'
    })
      .setClassToggle('.handler__texts', 'text1')
      .addTo(controller)
    
    new ScrollMagic.Scene({
      triggerElement: '.handler__texts',
      offset: h * .071,
      duration: h * .07,
      triggerHook: 'onLeave'
    })
      .setClassToggle('.handler__texts', 'text2')
      .addTo(controller)
    
    new ScrollMagic.Scene({
      triggerElement: '.handler__texts',
      offset: h * .171,
      duration: h * .05,
      triggerHook: 'onLeave'
    })
      .setClassToggle('.handler__texts', 'text3')
      .addTo(controller)
    
    new ScrollMagic.Scene({
      triggerElement: '.handler__texts',
      offset: h * .77,
      duration: h * .07,
      triggerHook: 'onLeave'
    })
      .setClassToggle('.handler__texts', 'text4')
      .addTo(controller)
    
    new ScrollMagic.Scene({
      triggerElement: '.handler__texts',
      offset: h * .85,
      duration: h * .07,
      triggerHook: 'onLeave'
    })
      .setClassToggle('.handler__texts', 'text5')
      .addTo(controller)
    
  }
  scrollLib() {
    let scrollTop, ceil, percentage,
        imgQuantity = document.querySelectorAll('.handler__img').length / 2,
        lostFramesPerc = Math.floor(window.innerHeight / 200) / imgQuantity,
        scrollToPicture = 200 - lostFramesPerc * 200,
        curActive = 1,
        progressEl = document.querySelector('.js-progress'),
        bgLeft = document.querySelector('.js-bgleft'),
        bgRight = document.querySelector('.js-bgright'),
        _t = this

    document.querySelector('.js-img-handler').style.height = imgQuantity * 200 + 'px'

    //this.parallax()
    
    const onScrollHandler = function() {
      scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      ceil = Math.ceil(scrollTop / scrollToPicture)
      
      if (ceil <= imgQuantity && ceil !== curActive && ceil >= 0) {
        if (ceil !== 0) {
          curActive = Math.ceil(scrollTop / scrollToPicture)
          if (curActive <= 30 || curActive >= 51) {
            for (let nHide of document.querySelectorAll('.handler__img:not(.hide)'))
              nHide.classList.add('hide')

            for (let nShow of document.querySelectorAll(`.js-bgleft .handler__img[src="img/main/left/${curActive}.png"]`))
              nShow.classList.remove('hide')
            for (let nShow of document.querySelectorAll(`.js-bgright .handler__img[src="img/main/right/${curActive}.png"]`))
              nShow.classList.remove('hide')
          }
        }

        // 13
        let percWidth = Math.ceil(ceil * 100 / (imgQuantity - 0)),
            percScroll = Math.ceil((scrollTop + window.innerHeight) * 100 / document.body.scrollHeight)
        
        bgLeft.style.width = (percWidth > 100 ? 100 : percWidth) + '%'
        bgRight.style.width = 100 - (percWidth > 100 ? 100 : percWidth) + '%'
        progressEl.style.height = percScroll + '%'
        
        if (percScroll === 100) {
          document.body.classList.add('scrollEnd')
        } else {
          document.body.classList.remove('scrollEnd')
        }
      }
    }

    window.addEventListener('scroll', onScrollHandler)
  }
}
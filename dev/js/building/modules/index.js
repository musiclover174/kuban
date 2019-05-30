import {fadeOut} from './helpers'

export default class Index {
  constructor(delay = 25) {
    this.block = document.querySelector('.js-loader')
    this.products = document.querySelector('.products')
    this.delay = delay
    this.preloadBlock = document.querySelector('.js-imgloader')
  }

  preload() {
    Pace.on('hide', () => {
      fadeOut(this.block, 600, () => {
        this.block.parentNode.removeChild(this.block)
        this.preloadBlock.parentNode.removeChild(this.preloadBlock)
        if (document.querySelector('html').classList.contains('touchevents') && window.innerWidth <= 500) {
          const opening = document.querySelector('.opening')
          opening.parentNode.removeChild(opening)
          
          document.body.classList.add('iload')
          this.scrollLib()
          this.textChanger()
        } else {
          this.animate()
        }
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
  textChanger()  {
    let h = parseInt(document.querySelector('.js-img-handler').style.height)
    
    document.querySelector('.handler__texts').classList.add('show')
    
    var controller = new ScrollMagic.Controller()
    
    new ScrollMagic.Scene({
      triggerElement: '.handler__texts',
      duration: h * .1,
      triggerHook: 'onLeave'
    })
      .setClassToggle('.handler__texts', 'text1')
      .addTo(controller)
    
    new ScrollMagic.Scene({
      triggerElement: '.handler__texts',
      offset: h * .13,
      duration: h * .08,
      triggerHook: 'onLeave'
    })
      .setClassToggle('.handler__texts', 'text2')
      .addTo(controller)
    
    new ScrollMagic.Scene({
      triggerElement: '.handler__texts',
      offset: h * .27,
      duration: h * .1,
      triggerHook: 'onLeave'
    })
      .setClassToggle('.handler__texts', 'text3')
      .addTo(controller)
    
    new ScrollMagic.Scene({
      triggerElement: '.handler__texts',
      offset: h * .4,
      duration: h * .1,
      triggerHook: 'onLeave'
    })
      .setClassToggle('.handler__texts', 'text4')
      .addTo(controller)
    
    new ScrollMagic.Scene({
      triggerElement: '.handler__texts',
      offset: h * .6,
      duration: h * .05,
      triggerHook: 'onLeave'
    })
      .setClassToggle('.handler__texts', 'text5')
      .addTo(controller)
    
    new ScrollMagic.Scene({
      triggerElement: '.handler__texts',
      offset: h * .76,
      duration: h * .10,
      triggerHook: 'onLeave'
    })
      .setClassToggle('.handler__texts', 'text6')
      .addTo(controller)
    
  }
  scrollLib() {
    let scrollTop, ceil, percentage,
        imgQuantity = 100,
        lostFramesPerc = window.innerHeight / imgQuantity,
        scrollToPicture = 100 - lostFramesPerc,
        curActive = 1,
        progressEl = document.querySelector('.js-progress'),
        bgLeft = document.querySelector('.js-bgleft'),
        bgRight = document.querySelector('.js-bgright'),
        leftImg = document.querySelector('.js-leftImg'),
        rightImg = document.querySelector('.js-rightImg'),
        _t = this

    document.querySelector('.js-img-handler').style.height = imgQuantity * 100 + 'px'

    const onScrollHandler = function() {
      scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      ceil = Math.ceil(scrollTop / scrollToPicture)
      
      if (ceil <= imgQuantity && ceil >= 0) {
      //if (ceil <= imgQuantity && ceil !== curActive && ceil >= 0) {
        if (ceil !== 0) {
          curActive = Math.ceil(scrollTop / scrollToPicture)
          if (curActive < 36 || curActive > 61) {
            leftImg.setAttribute('src', `img/main/${curActive}.png`)
            rightImg.setAttribute('src', `img/main/${curActive}.png`)
          }
          if (curActive === 36 || curActive === 61) {
            leftImg.setAttribute('src', `img/main/${curActive}_left.png`)
            rightImg.setAttribute('src', `img/main/${curActive}_right.png`)
          }
        }

        let percWidth = Math.ceil(ceil * 100 / imgQuantity),
            percScroll = Math.ceil((scrollTop + window.innerHeight) * 100 / document.body.scrollHeight)
        
        bgLeft.style.width = (percWidth >= 100 ? 100 : percWidth) + '%'
        bgRight.style.width = 100 - (percWidth > 100 ? 100 : percWidth) + '%'
        bgRight.style.left = (percWidth >= 100 ? 100 : percWidth) + '%'
        progressEl.style.height = percScroll + '%'
      }
    }

    window.addEventListener('scroll', onScrollHandler)
  }
}
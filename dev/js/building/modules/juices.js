export default class Juices {
  constructor() {
    this.init()
  }
  init() {
    const spacers = document.querySelectorAll('.js-scenes-spacer'),
          positioner = document.querySelector('.js-scenes-positioner'),
          scenesOver = document.querySelector('.js-scenes')

    window.addEventListener('scroll', () => {
      const scenesRect = scenesOver.getBoundingClientRect(),
            posRect = positioner.getBoundingClientRect(),
            sceneHeight = getComputedStyle(scenesOver)['height'],
            positionHeight = getComputedStyle(positioner)['height'],
            wHeightHalf = (window.innerHeight || document.documentElement.clientHeight) / 2,
            positionHeightHalf = positioner.offsetHeight / 2

      let progressHeight = 0

      if (scenesRect.top + positionHeightHalf <= wHeightHalf) {
        if (scenesRect.top + scenesOver.offsetHeight - positionHeightHalf - wHeightHalf > 0) { 
          progressHeight = (parseInt(positionHeight) + parseInt(positioner.style.top)) * 100 / parseInt(sceneHeight)
          positioner.classList.remove('bottom')
          positioner.classList.add('fixed')
        }
        else {
          positioner.classList.remove('fixed')
          positioner.classList.add('bottom')
        }
      } else {
        positioner.classList.remove('fixed', 'bottom')
        positioner.removeAttribute('style')
      }

    })

    const controller = new ScrollMagic.Controller()

    const sceneClass1 = new ScrollMagic.Scene({
      triggerElement: '.js-scenes-spacer[data-step="1"]'
    }).setClassToggle('.js-scenes-positioner', 'scene1')
    const sceneClass2 = new ScrollMagic.Scene({
      triggerElement: '.js-scenes-spacer[data-step="2"]'
    }).setClassToggle('.js-scenes-positioner', 'scene2')
    const sceneClass3 = new ScrollMagic.Scene({
      triggerElement: '.js-scenes-spacer[data-step="3"]'
    }).setClassToggle('.js-scenes-positioner', 'scene3')
    const sceneClass4 = new ScrollMagic.Scene({
      triggerElement: '.js-scenes-spacer[data-step="4"]'
    }).setClassToggle('.js-scenes-positioner', 'scene4')

    controller.addScene([
      sceneClass1,
      sceneClass2,
      sceneClass3,
      sceneClass4
    ])
  }
}
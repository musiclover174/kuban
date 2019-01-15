import {fadeIn, fadeOut, scrollTo, visChecker, resizeWatcher, elemVisCheck} from './modules/helpers'
import Index from './modules/index'
import Burger from './modules/burger'
import Contacts from './modules/contacts'
import Sticky from './modules/sticky'
import Share from './modules/share'
import Juices from './modules/juices'
import Products from './modules/products'

document.addEventListener('DOMContentLoaded', function(){
  
  const burger = new Burger(),
        elVisArray = ['.about__img', '.about p, .about__clients, .catalog__img, .catalog__elem-img']
  
  if (document.body.classList.contains('index')) {
    const index = new Index(30)
    index.preload()
  }
  
  if (document.querySelector('.js-contacts-map')) {
    const contacts = new Contacts('contacts-map')
    contacts.init()
  }
  
  if (document.querySelector('.js-sticky')) {
    const sticky = new Sticky(200, 0)
  }

  if (document.querySelector('.js-iproducts')) {
    const products = new Products()
  }
  
  for (let sh of document.querySelectorAll('.js-shave')) {
    shave(sh, sh.getAttribute('data-height'))
  }
  
  if (document.querySelectorAll('.js-share').length) {
    for (let shBtn of document.querySelectorAll('.js-share')) {
      shBtn.addEventListener('click', (e) => {
        e.preventDefault()
      })
    }
    window.share = new Share()
  }
  
  if (document.querySelectorAll('.js-scenes').length) {
    const juices = new Juices()
  }

  new resizeWatcher()
  new elemVisCheck(elVisArray)
  
  let eventScroll
  try {
    eventScroll = new Event('scroll')
  }
  catch (e) {
    eventScroll = document.createEvent('Event');
    let doesnt_bubble = false,
        isnt_cancelable = false
    eventScroll.initEvent('scroll', doesnt_bubble, isnt_cancelable);
  }
  window.dispatchEvent(eventScroll)
  
});

import {fadeIn, fadeOut, scrollTo, visChecker, resizeWatcher} from './modules/helpers'
import Index from './modules/index'
import Burger from './modules/burger'
import Contacts from './modules/contacts'
import Sticky from './modules/sticky'
import Share from './modules/share'

document.addEventListener('DOMContentLoaded', function(){
  
  const burger = new Burger()
  
  if (document.body.classList.contains('index')) {
    const index = new Index(30)
    index.preload()
  }
  
  if (document.querySelector('.js-contacts-map')) {
    const contacts = new Contacts('contacts-map')
    contacts.init()
  }
  
  if (document.querySelector('.js-sticky')) {
    const sticky = new Sticky(20, 0)
  }
  
  for (let sh of document.querySelectorAll('.js-shave')) {
    shave(sh, sh.getAttribute('data-height'))
  }
  
  if (document.querySelectorAll('.js-share')) {
    for (let shBtn of document.querySelectorAll('.js-share')) {
      shBtn.addEventListener('click', (e) => {
        e.preventDefault()
      })
    }
    window.share = new Share()
  }
  
  new resizeWatcher()
  
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

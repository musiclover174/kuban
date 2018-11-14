import {fadeIn, fadeOut, scrollTo, visChecker} from './modules/helpers'
import Index from './modules/index'
import Burger from './modules/burger'

document.addEventListener('DOMContentLoaded', function(){
  
  const burger = new Burger()
  
  if (document.body.classList.contains('index')) {
    const index = new Index(25)
    index.preload()
  }
  
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

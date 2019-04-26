import {qs, qsAll, resizeWatcher, elemVisCheck} from './modules/helpers'
import Index from './modules/index'
import Burger from './modules/burger'
import Contacts from './modules/contacts'
import Sticky from './modules/sticky'
import Share from './modules/share'
import Juices from './modules/juices'
import Products from './modules/products'
import Game from './modules/game';

document.addEventListener('DOMContentLoaded', function(){
  
  const burger = new Burger(),
        elVisArray = ['.about__img', '.about p, .about__clients, .catalog__img, .catalog__elem-img']
  
  if (document.body.classList.contains('index')) {
    const index = new Index(30)
    index.preload()
  }
  
  if (qs('.js-contacts-map')) {
    const contacts = new Contacts('contacts-map')
    contacts.init()
  }
  
  if (qs('.js-sticky')) {
    const sticky = new Sticky(200, 0)
  }

  if (qs('.js-iproducts')) {
    const products = new Products()
  }

  if (qs('.js-video')) {
    const videos = qsAll('.js-video');
    const popup = qs('.js-popup');
    const popupClose = qsAll('.js-popup-close, js-popup-bg');
    const popupContent = qs('.js-popup-content');

    popupClose.forEach((elem) => {
      elem.addEventListener('click', () => {
        popupContent.innerHTML = '';
        popup.classList.remove('open');
        document.body.classList.remove('popup-open');
      });
    });

    videos.forEach((video) => {
      video.addEventListener('click', (e) => {
        const videoHref = video.getAttribute('href');
        popup.classList.add('open');
        document.body.classList.add('popup-open');

        popupContent.innerHTML = `
          <video class="popup__video" preload autoplay>
            <source src="${videoHref}" type='video/mp4'>
          </video>`;

        e.preventDefault();
      });
    })
  }
  
  window.onload = () => {
    for (let sh of qsAll('.js-shave')) {
      shave(sh, sh.getAttribute('data-height'))
    }
  }
  
  if (qsAll('.js-share').length) {
    for (let shBtn of qsAll('.js-share')) {
      shBtn.addEventListener('click', (e) => {
        e.preventDefault()
      })
    }
    window.share = new Share()
  }
  
  if (qsAll('.js-scenes').length) {
    const juices = new Juices()
  }

  if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    document.querySelector('html').classList.add('ios');
  }

  if (qs('.js-game')) {
    const game = new Game();
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

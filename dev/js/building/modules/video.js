import { qs, qsAll } from './helpers';

export default class Video {
  constructor(videosEl, popupEl, popupCloseEl, popupContentEl) {
    this.init({
      videos: qsAll(videosEl),
      popup: qs(popupEl),
      popupClose: qsAll(popupCloseEl),
      popupContent: qs(popupContentEl),
    });
  }

  init({
    videos,
    popup,
    popupContent,
    popupClose,
  }) {
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
          <video class="popup__video js-popup-video" preload autoplay>
            <source src="${videoHref}" type='video/mp4'>
          </video>`;

        const videoBlock = qs('.js-popup-video');
        videoBlock.addEventListener('ended', () => {
          popupContent.innerHTML = '';
          popup.classList.remove('open');
          document.body.classList.remove('popup-open');
        });

        e.preventDefault();
      });
    })
  }
}
export default class Burger {
  constructor() {
    this.burgerEl = document.querySelector('.js-burger');
    this.animationFlag = false;

    this.init();
  }
  init() {
    this.burgerEl.addEventListener('click', (e) => {
      if (this.animationFlag) return;

      this.animationFlag = true;
      document.body.classList.toggle('burgeropen');
      if (this.burgerEl.classList.contains('open')) {
        this.burgerEl.classList.add('remove');
        setTimeout(function() {
          this.burgerEl.classList.remove('open', 'remove');
          this.animationFlag = false;
        }.bind(this), 1000)
      } else {
        this.burgerEl.classList.add('open');
        setTimeout(() => {
          this.animationFlag = false;
        }, 700);
      }
      e.preventDefault();
    })
  }
}
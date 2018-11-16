function fadeIn(elem, ms, cb, d = 'block') {
  if (!elem)
    return;

  elem.style.opacity = 0;
  elem.style.display = d;

  if (ms) {
    var opacity = 0;
    var timer = setInterval(function () {
      opacity += 50 / ms;
      if (opacity >= 1) {
        clearInterval(timer);
        opacity = 1;
        if (cb) cb()
      }
      elem.style.opacity = opacity;
    }, 50);
  } else {
    elem.style.opacity = 1;
    if (cb) cb()
  }
}

function fadeOut(elem, ms, cb) {
  if (!elem)
    return;

  elem.style.opacity = 1;

  if (ms) {
    var opacity = 1;
    var timer = setInterval(function () {
      opacity -= 50 / ms;
      if (opacity <= 0) {
        clearInterval(timer);
        opacity = 0;
        elem.style.display = "none";
        if (cb) cb()
      }
      elem.style.opacity = opacity;
    }, 50);
  } else {
    elem.style.opacity = 0;
    elem.style.display = "none";
    if (cb) cb()
  }
}

function scrollTo(to, duration) {
  if (duration <= 0) return;
  const element = document.documentElement,
    difference = to - element.scrollTop,
    perTick = difference / duration * 10;

  setTimeout(function () {
    element.scrollTop = element.scrollTop + perTick;
    window.animation.scrollTo(to, duration - 10);
  }, 10);
}

function visChecker(el) {
  let rect = el.getBoundingClientRect()
  return (
    //rect.top >= 0 &&
    //rect.left >= 0 &&
    rect.bottom - el.offsetHeight * .35 <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

function resizeWatcher() {
  const tableSel = document.querySelectorAll('table'),
        scrollArray = [];
  if (tableSel.length) {
    tableSel.forEach((item, i) => {
      let orgHtml = item.outerHTML

      item.outerHTML = `<div class='table-scroller${i}'>${orgHtml}</div>`;
      let ps = new PerfectScrollbar(`.table-scroller${i}`, {
        wheelPropagation: true
      })
      
      scrollArray.push(ps);
    })
    window.addEventListener('resize', () => {
      if (scrollArray.length)
        scrollArray.forEach((item, i) => {
          item.update()
        })
    })
  }

}

export {fadeIn, fadeOut, scrollTo, visChecker, resizeWatcher}
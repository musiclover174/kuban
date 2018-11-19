export default class Share {
  vkontakte (purl, ptitle, pimg, text) {
    let url = 'https://vk.com/share.php?'
    url += 'url=' + encodeURIComponent(purl)
    url += '&title=' + encodeURIComponent(ptitle)
    this.popup(url)
  }
  odnoklassniki (purl, text) {
    let url = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1'
    url += '&st.comments=' + encodeURIComponent(text)
    url += '&st._surl=' + encodeURIComponent(purl)
    this.popup(url)
  }
  facebook (purl, ptitle, pimg, text) {
    let url = 'http://www.facebook.com/sharer.php?s=100'
    url += '&p[title]=' + encodeURIComponent(ptitle)
    url += '&p[summary]=' + encodeURIComponent(text)
    url += '&p[url]=' + encodeURIComponent(purl)
    url += '&p[images][0]=' + encodeURIComponent(pimg)
    this.popup(url)
  }
  twitter (purl, ptitle) {
    let url = 'http://twitter.com/share?'
    url += 'text=' + encodeURIComponent(ptitle)
    url += '&url=' + encodeURIComponent(purl)
    url += '&counturl=' + encodeURIComponent(purl)
    this.popup(url)
  }
  mailru (purl, ptitle, pimg, text) {
    let url = 'http://connect.mail.ru/share?'
    url += 'url=' + encodeURIComponent(purl)
    url += '&title=' + encodeURIComponent(ptitle)
    url += '&description=' + encodeURIComponent(text)
    url += '&imageurl=' + encodeURIComponent(pimg)
    this.popup(url)
  }
  popup (url) {
    const width = $(window).width() > 626 ? 626 : $(window).width(),
      left = $(window).width() > 626 ? ($(window).width() / 2 - 313) : 0,
      top = $(window).width() > 436 ? ($(window).height() / 2 - 218) : 0
    window.open(url, '', 'toolbar=0,status=0,width=' + width + ',height=436,left=' + (left + window.screenLeft) + ', top=' + (top + window.screenTop))
  }
}
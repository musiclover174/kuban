/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundcliptext-forcetouch-smil-touchevents-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,s,a;for(var u in _)if(_.hasOwnProperty(u)){if(e=[],t=_[u],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),C.push((o?"":"no-")+a.join("-"))}}function i(e){var t=w.className,n=Modernizr._config.classPrefix||"";if(E&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),E?w.className.baseVal=t:w.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(){var e=t.body;return e||(e=s(E?"svg":"body"),e.fake=!0),e}function l(e,n,r,o){var i,a,l,f,c="modernizr",p=s("div"),d=u();if(parseInt(r,10))for(;r--;)l=s("div"),l.id=o?o[r]:c+(r+1),p.appendChild(l);return i=s("style"),i.type="text/css",i.id="s"+c,(d.fake?d:p).appendChild(i),d.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),p.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",f=w.style.overflow,w.style.overflow="hidden",w.appendChild(d)),a=n(p,e),d.fake?(d.parentNode.removeChild(d),w.style.overflow=f,w.offsetHeight):p.parentNode.removeChild(p),!!a}function f(e,t){return!!~(""+e).indexOf(t)}function c(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?c(o,n||t):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function v(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+d(t[o])+":"+r+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return n}function g(e,t,o,i){function u(){c&&(delete k.style,delete k.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var l=v(e,o);if(!r(l,"undefined"))return l}for(var c,p,d,m,g,h=["modernizr","tspan","samp"];!k.style&&h.length;)c=!0,k.modElem=s(h.shift()),k.style=k.modElem.style;for(d=e.length,p=0;d>p;p++)if(m=e[p],g=k.style[m],f(m,"-")&&(m=a(m)),k.style[m]!==n){if(i||r(o,"undefined"))return u(),"pfx"==t?m:!0;try{k.style[m]=o}catch(y){}if(k.style[m]!=g)return u(),"pfx"==t?m:!0}return u(),!1}function h(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+O.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?g(a,t,o,i):(a=(e+" "+P.join(s+" ")+s).split(" "),p(a,t,n))}function y(e,t,r){return h(e,n,n,t,r)}var C=[],_=[],S={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){_.push({name:e,fn:t,options:n})},addAsyncTest:function(e){_.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var w=t.documentElement,E="svg"===w.nodeName.toLowerCase(),b=S._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];S._prefixes=b;var x={}.toString;Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(x.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))});var T=function(){function e(e,t){var o;return e?(t&&"string"!=typeof t||(t=s(t||"div")),e="on"+e,o=e in t,!o&&r&&(t.setAttribute||(t=s("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),o):!1}var r=!("onblur"in t.documentElement);return e}();S.hasEvent=T;var z=S.testStyles=l;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",b.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");z(r,function(e){n=9===e.offsetTop})}return n});var N="Moz O ms Webkit",O=S._config.usePrefixes?N.split(" "):[];S._cssomPrefixes=O;var A=function(t){var r,o=b.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var s=0;o>s;s++){var a=b[s],u=a.toUpperCase()+"_"+r;if(u in i)return"@-"+a.toLowerCase()+"-"+t}return!1};S.atRule=A;var P=S._config.usePrefixes?N.toLowerCase().split(" "):[];S._domPrefixes=P;var j={elem:s("modernizr")};Modernizr._q.push(function(){delete j.elem});var k={style:j.elem.style};Modernizr._q.unshift(function(){delete k.style}),S.testAllProps=h;var R=S.prefixed=function(e,t,n){return 0===e.indexOf("@")?A(e):(-1!=e.indexOf("-")&&(e=a(e)),t?h(e,t,n):h(e,"pfx"))};Modernizr.addTest("forcetouch",function(){return T(R("mouseforcewillbegin",e,!1),e)?MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN:!1}),S.testAllProps=y,Modernizr.addTest("backgroundcliptext",function(){return y("backgroundClip","text")}),o(),i(C),delete S.addTest,delete S.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);
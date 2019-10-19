window.Modernizr=function(e,t,n){function r(e){g.cssText=e}function o(e,t){return r(x.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e)if(g[e[r]]!==n)return"pfx"!=t||e[r];return!1}function s(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return!1===r?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function u(e,t,n){var r=e.charAt(0).toUpperCase()+e.substr(1),o=(e+" "+S.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?c(o,t):(o=(e+" "+C.join(r+" ")+r).split(" "),s(o,t,n))}var l,f,d={},p=t.documentElement,m="modernizr",h=t.createElement(m),g=h.style,v=t.createElement("input"),y=":)",b={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),w="Webkit Moz O ms",S=w.split(" "),C=w.toLowerCase().split(" "),E={svg:"http://www.w3.org/2000/svg"},k={},T={},j={},P=[],A=P.slice,M=function(e,n,r,o){var i,a,c,s=t.createElement("div"),u=t.body,l=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:m+(r+1),s.appendChild(c);return i=["&#173;","<style>",e,"</style>"].join(""),s.id=m,(u?s:l).innerHTML+=i,l.appendChild(s),u||(l.style.background="",p.appendChild(l)),a=n(s,e),u?s.parentNode.removeChild(s):l.parentNode.removeChild(l),!!a},N=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return M("@media "+t+" { #"+m+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},O=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=i(o[e],"function"),i(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),L={}.hasOwnProperty;f=i(L,"undefined")||i(L.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return L.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=A.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(A.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(A.call(arguments)))};return r});!function(n,r){var o=n.join(""),i=r.length;M(o,function(n,r){for(var o=t.styleSheets[t.styleSheets.length-1],a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",c=n.childNodes,s={};i--;)s[c[i].id]=c[i];d.touch="ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch||9===(s.touch&&s.touch.offsetTop),d.csstransforms3d=9===(s.csstransforms3d&&s.csstransforms3d.offsetLeft)&&3===s.csstransforms3d.offsetHeight,d.generatedcontent=(s.generatedcontent&&s.generatedcontent.offsetHeight)>=1,d.fontface=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])},i,r)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",x.join("touch-enabled),("),m,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",x.join("transform-3d),("),m,")","{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""),['#generatedcontent:after{content:"',y,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);k.flexbox=function(){return u("flexOrder")},k["flexbox-legacy"]=function(){return u("boxDirection")},k.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},k.canvastext=function(){return!!d.canvas&&!!i(t.createElement("canvas").getContext("2d").fillText,"function")},k.webgl=function(){try{var r,o=t.createElement("canvas");r=!(!e.WebGLRenderingContext||!o.getContext("experimental-webgl")&&!o.getContext("webgl")),o=n}catch(e){r=!1}return r},k.touch=function(){return d.touch},k.geolocation=function(){return!!navigator.geolocation},k.postmessage=function(){return!!e.postMessage},k.websqldatabase=function(){return!!e.openDatabase},k.indexedDB=function(){return!!u("indexedDB",e)},k.hashchange=function(){return O("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},k.history=function(){return!!e.history&&!!history.pushState},k.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},k.websockets=function(){for(var t=-1,n=S.length;++t<n;)if(e[S[t]+"WebSocket"])return!0;return"WebSocket"in e},k.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(g.backgroundColor,"rgba")},k.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(g.backgroundColor,"rgba")||a(g.backgroundColor,"hsla")},k.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(g.background)},k.backgroundsize=function(){return u("backgroundSize")},k.borderimage=function(){return u("borderImage")},k.borderradius=function(){return u("borderRadius")},k.boxshadow=function(){return u("boxShadow")},k.textshadow=function(){return""===t.createElement("div").style.textShadow},k.opacity=function(){return o("opacity:.55"),/^0.55$/.test(g.opacity)},k.cssanimations=function(){return u("animationName")},k.csscolumns=function(){return u("columnCount")},k.cssgradients=function(){var e="background-image:";return r((e+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+e)+x.join("linear-gradient(left top,#9f9, white);"+e)).slice(0,-e.length)),a(g.backgroundImage,"gradient")},k.cssreflections=function(){return u("boxReflect")},k.csstransforms=function(){return!!u("transform")},k.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in p.style&&(e=d.csstransforms3d),e},k.csstransitions=function(){return u("transition")},k.fontface=function(){return d.fontface},k.generatedcontent=function(){return d.generatedcontent},k.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return n},k.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return n},k.localstorage=function(){try{return localStorage.setItem(m,m),localStorage.removeItem(m),!0}catch(e){return!1}},k.sessionstorage=function(){try{return sessionStorage.setItem(m,m),sessionStorage.removeItem(m),!0}catch(e){return!1}},k.webworkers=function(){return!!e.Worker},k.applicationcache=function(){return!!e.applicationCache},k.svg=function(){return!!t.createElementNS&&!!t.createElementNS(E.svg,"svg").createSVGRect},k.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==E.svg},k.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(b.call(t.createElementNS(E.svg,"animate")))},k.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(b.call(t.createElementNS(E.svg,"clipPath")))};for(var $ in k)f(k,$)&&(l=$.toLowerCase(),d[l]=k[$](),P.push((d[l]?"":"no-")+l));return d.input||function(){d.input=function(n){for(var r=0,o=n.length;r<o;r++)j[n[r]]=n[r]in v;return j.list&&(j.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),j}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),d.inputtypes=function(e){for(var r,o,i,a=0,c=e.length;a<c;a++)v.setAttribute("type",o=e[a]),r="text"!==v.type,r&&(v.value=y,v.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&v.style.WebkitAppearance!==n?(p.appendChild(v),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(v,null).WebkitAppearance&&0!==v.offsetHeight,p.removeChild(v)):/^(search|tel)$/.test(o)||(/^(url|email)$/.test(o)?r=v.checkValidity&&!1===v.checkValidity():/^color$/.test(o)?(p.appendChild(v),p.offsetWidth,r=v.value!=y,p.removeChild(v)):r=v.value!=y)),T[e[a]]=!!r;return T}("search tel url email datetime date month week time datetime-local number range color".split(" "))}(),r(""),h=v=null,d._version="2.5.3",d._prefixes=x,d._domPrefixes=C,d._cssomPrefixes=S,d.mq=N,d.hasEvent=O,d.testProp=function(e){return c([e])},d.testAllProps=u,d.testStyles=M,d.prefixed=function(e,t,n){return t?u(e,t,n):u(e,"pfx")},d}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=v.shift();y=1,e?e.t?m(function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):y=0}function s(e,n,r,o,i,s,u){function l(t){if(!p&&a(f.readyState)&&(b.r=p=1,!y&&c(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&m(function(){w.removeChild(f)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var u=u||d.errorTimeout,f={},p=0,g=0,b={t:r,s:n,e:i,a:s,x:u};1===T[n]&&(g=1,T[n]=[],f=t.createElement(e)),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){l.call(this,g)},v.splice(o,0,b),"img"!=e&&(g||2===T[n]?(w.insertBefore(f,x?null:h),m(l,u)):T[n].push(f))}function u(e,t,n,r,i){return y=0,t=t||"j",o(e)?s("c"==t?C:S,e,t,this.i++,n,r,i):(v.splice(this.i++,0,e),1==v.length&&c()),this}function l(){var e=d;return e.loader={load:u,i:0},e}var f,d,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in p.style,x=b&&!!t.createRange().compareNode,w=x?p:h.parentNode,p=e.opera&&"[object Opera]"==g.call(e.opera),p=!!t.attachEvent&&!p,S=b?"object":p?"script":"img",C=p?"script":S,E=Array.isArray||function(e){return"[object Array]"==g.call(e)},k=[],T={},j={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};d=function(e){function t(e){var t,n,r,e=e.split("!"),o=k.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;n<a;n++)r=e[n].split("="),(t=j[r.shift()])&&(i=t(i,r));for(n=0;n<o;n++)i=k[n](i);return i}function a(e,o,i,a,s){var u=t(e),f=u.autoCallback;u.url.split(".").pop().split("?").shift(),u.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]||c),u.instead?u.instead(e,o,i,a,s):(T[u.url]?u.noexec=!0:T[u.url]=1,i.load(u.url,u.forceCSS||!u.forceJS&&"css"==u.url.split(".").pop().split("?").shift()?"c":n,u.noexec,u.attrs,u.timeout),(r(o)||r(f))&&i.load(function(){l(),o&&o(u.origUrl,s,a),f&&f(u.origUrl,s,a),T[u.url]=2})))}function s(e,t){function n(e,n){if(e){if(o(e))n||(f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}),a(e,f,t,0,u);else if(Object(e)===e)for(s in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(s)&&(!n&&!--c&&(r(f)?f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}:f[s]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(d[s])),a(e[s],f,t,s,u))}else!n&&p()}var c,s,u=!!e.test,l=e.load||e.both,f=e.callback||i,d=f,p=e.complete||i;n(u?e.yep:e.nope,!!l),l&&n(l)}var u,f,p=this.yepnope.loader;if(o(e))a(e,0,p,0);else if(E(e))for(u=0;u<e.length;u++)f=e[u],o(f)?a(f,0,p,0):E(f)?d(f):Object(f)===f&&s(f,p);else Object(e)===e&&s(e,p)},d.addPrefix=function(e,t){j[e]=t},d.addFilter=function(e){k.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,s,u){var l,f,p=t.createElement("script"),o=o||d.errorTimeout;p.src=e;for(f in r)p.setAttribute(f,r[f]);n=u?c:n||i,p.onreadystatechange=p.onload=function(){!l&&a(p.readyState)&&(l=1,n(),p.onload=p.onreadystatechange=null)},m(function(){l||(l=1,n(1))},o),s?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,o,a,s){var u,o=t.createElement("link"),n=s?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(u in r)o.setAttribute(u,r[u]);a||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
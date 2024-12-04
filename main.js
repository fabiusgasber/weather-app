(()=>{var n={365:(n,e,t)=>{"use strict";t.d(e,{A:()=>L});var r=t(601),o=t.n(r),i=t(314),s=t.n(i),a=t(417),c=t.n(a),p=new URL(t(98),t.b),d=new URL(t(585),t.b),u=new URL(t(706),t.b),l=new URL(t(976),t.b),f=new URL(t(461),t.b),g=new URL(t(676),t.b),m=new URL(t(467),t.b),b=s()(o()),h=c()(p),v=c()(d),w=c()(u),y=c()(l),x=c()(f),k=c()(g),E=c()(m);b.push([n.id,`:root {\n  --accent-color: #51b34c;\n  --background-color: #1f2937;\n  --secondary-background-color: #2d3748;\n  --box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);\n  --font-color: white;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n  font-family: outfit;\n  font-weight: 300;\n  background-color: var(--background-color);\n  line-height: 1.5;\n  padding: 1rem 2rem;\n  flex-wrap: wrap;\n}\n\n@font-face {\n  font-family: poppins;\n  src: url(${h});\n}\n\n@font-face {\n  font-family: outfit;\n  src: url(${v});\n}\n\nh1,\np {\n  margin-block-start: 0;\n  margin-block-end: 0;\n  margin-inline-start: 0;\n  margin-inline-end: 0;\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  align-self: flex-start;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n\n.logo > h1 {\n  font-family: outfit, poppins, sans-serif;\n  color: rgba(255, 255, 255, 0.834);\n  position: relative;\n  flex-grow: 1;\n  font-size: clamp(2rem, 4vw + 1rem, 3rem);\n}\n\n#weather-info {\n  grid-template-columns: 1fr 1fr 1fr;\n  font-size: inherit;\n  font-family: inherit;\n  grid-area: info;\n  grid-auto-rows: 3rem;\n  width: clamp(200px, 30rem, 50%);\n  gap: 0.5rem;\n  padding: 1.5rem;\n  justify-items: center;\n  align-items: center;\n  border: 2px solid var(--accent-color);\n  grid-template-areas:\n    "location location location"\n    "icon icon icon"\n    "conditions conditions conditions"\n    "temperature temperature temperature"\n    "precipitation uv windspeed"\n    "sunrise sunset .";\n  display: none;\n  box-shadow: var(--box-shadow);\n  border-radius: 0.5rem;\n  color: var(--font-color);\n  background-color: var(--secondary-background-color);\n}\n\nform {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 100%;\n}\n\nform input,\nform button {\n  font-family: inherit;\n  appearance: none;\n  font-size: 100%;\n  padding: 0.5rem 1rem;\n}\n\nform input {\n  border: 1px solid white;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n  min-width: 100px;\n}\n\nform button {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n  border: none;\n}\n\nbutton {\n  margin: 0 auto;\n  transition:\n    background-color 0.3s ease,\n    transform 0.2s ease;\n  background-color: var(--accent-color);\n  color: var(--font-color);\n}\n\nbutton:hover {\n  background-color: #51b34cc3;\n  cursor: pointer;\n}\n\n#weather-info.active {\n  display: grid;\n}\n\n#weather-info div {\n  display: flex;\n  gap: 1rem;\n}\n\n.conditions {\n  grid-area: conditions;\n}\n\n.precipitation {\n  grid-area: precipitation;\n  position: relative;\n}\n\n.precipitation::before,\n.windspeed::before,\n.sunrise::before,\n.sunset::before,\n.uv::before {\n  position: absolute;\n  content: "";\n  background-size: contain; /* Ensures the image fits the container */\n  background-repeat: no-repeat; /* Prevents tiling */\n  width: 20px; /* Adjust width */\n  height: 20px; /* Adjust height */\n  left: -30px;\n}\n\n.precipitation::before {\n  background-image: url(${w});\n}\n\n.windspeed::before {\n  background-image: url(${y});\n}\n\n.location {\n  grid-area: location;\n  font-weight: 500;\n}\n\n.icon {\n  grid-area: icon;\n}\n\n.temperature {\n  grid-area: temperature;\n  font-size: 2rem;\n  font-weight: 500;\n  color: var(--accent-color);\n  position: relative;\n}\n\n.temperature::after {\n  position: absolute;\n  content: "";\n  right: -45px;\n}\n\n.windspeed {\n  grid-area: windspeed;\n  position: relative;\n}\n\n.windspeed::before {\n  background-image: url(${y});\n}\n\n.sunrise {\n  grid-area: sunrise;\n  grid-column: 1 / 3;\n}\n\n.sunset {\n  grid-area: sunset;\n  grid-column: 2 / 4;\n}\n\n.sunrise,\n.sunset {\n  position: relative;\n}\n\n.sunrise::before {\n  background-image: url(${x});\n}\n\n.sunset::before {\n  background-image: url(${k});\n}\n\n.uv {\n  grid-area: uv;\n  position: relative;\n}\n\n.uv::before {\n  background-image: url(${E});\n}\n\n.unit-toggle {\n  display: flex;\n  border-radius: 0.25rem;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 20%;\n}\n\n.unit-toggle:hover {\n  cursor: pointer;\n}\n\n.unit-toggle div {\n  border-radius: 0.25rem;\n  background-color: white;\n  padding: 0.25rem 0.5rem;\n  display: flex;\n  justify-content: center;\n  transition-duration: 0.5s;\n}\n\n.unit-toggle div:not(.active):hover {\n  background-color: rgba(255, 255, 255, 0.914);\n}\n\n.unit-toggle .active {\n  background-color: var(--accent-color);\n  transition-duration: 0.5s;\n  color: var(--font-color);\n}\n\n.spinner {\n  position: absolute;\n  top: 50%;\n  bottom: 50%;\n  border-radius: 50%;\n  border: 10px solid white;\n  border-top: 10px solid var(--accent-color);\n  width: 60px;\n  height: 60px;\n  animation: spin 2s linear infinite;\n  display: none;\n}\n\n.spinner.active {\n  display: block;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n`,""]);const L=b},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);r&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},417:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{"use strict";n.exports=function(n){return n[1]}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},s=[],a=0;a<n.length;a++){var c=n[a],p=r.base?c[0]+r.base:c[0],d=i[p]||0,u="".concat(p," ").concat(d);i[p]=d+1;var l=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var g=o(f,r);r.byIndex=a,e.splice(a,0,{identifier:u,updater:g,references:1})}s.push(u)}return s}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var s=0;s<i.length;s++){var a=t(i[s]);e[a].references--}for(var c=r(n,o),p=0;p<i.length;p++){var d=t(i[p]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},987:(n,e,t)=>{var r={"./clear-day.png":575,"./clear-night.png":675,"./cloudy.png":793,"./fog.png":801,"./hail.png":127,"./partly-cloudy-day.png":95,"./partly-cloudy-night.png":299,"./rain-snow-showers-day.png":220,"./rain-snow-showers-night.png":88,"./rain-snow.png":699,"./rain.png":7,"./showers-day.png":577,"./showers-night.png":509,"./sleet.png":159,"./snow-showers-day.png":727,"./snow-showers-night.png":347,"./snow.png":672,"./thunder-rain.png":296,"./thunder-showers-day.png":760,"./thunder-showers-night.png":996,"./thunder.png":303,"./wind.png":397};function o(n){var e=i(n);return t(e)}function i(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}o.keys=function(){return Object.keys(r)},o.resolve=i,n.exports=o,o.id=987},585:(n,e,t)=>{"use strict";n.exports=t.p+"00c2ed1a3bf798b0da27.ttf"},98:(n,e,t)=>{"use strict";n.exports=t.p+"59ff6a729e30c99b478e.ttf"},706:(n,e,t)=>{"use strict";n.exports=t.p+"ec86fec8801aed1419cb.png"},461:(n,e,t)=>{"use strict";n.exports=t.p+"b61a5a70a957e6364fa0.png"},676:(n,e,t)=>{"use strict";n.exports=t.p+"537d298dad269499b9c7.png"},467:(n,e,t)=>{"use strict";n.exports=t.p+"9c081b8437210f72a54a.png"},575:(n,e,t)=>{"use strict";n.exports=t.p+"2d2c4c1e0cea2ea94d9e.png"},675:(n,e,t)=>{"use strict";n.exports=t.p+"8b657d6b2a4c7f55c95f.png"},793:(n,e,t)=>{"use strict";n.exports=t.p+"3a22010cc574b8ec3467.png"},801:(n,e,t)=>{"use strict";n.exports=t.p+"bec51c6b905e71a69c73.png"},127:(n,e,t)=>{"use strict";n.exports=t.p+"22bc6a62d61cd4e61b23.png"},95:(n,e,t)=>{"use strict";n.exports=t.p+"e2cb38f56ab3f72e93c0.png"},299:(n,e,t)=>{"use strict";n.exports=t.p+"e406783465c1e058592a.png"},220:(n,e,t)=>{"use strict";n.exports=t.p+"03570f8770afb4578ef1.png"},88:(n,e,t)=>{"use strict";n.exports=t.p+"b56363b154ab1b8cabbf.png"},699:(n,e,t)=>{"use strict";n.exports=t.p+"038d450ab94c9555c80b.png"},7:(n,e,t)=>{"use strict";n.exports=t.p+"6966c27e67c496174de7.png"},577:(n,e,t)=>{"use strict";n.exports=t.p+"f4024ece0d1611677487.png"},509:(n,e,t)=>{"use strict";n.exports=t.p+"9c2b00d012491c137b95.png"},159:(n,e,t)=>{"use strict";n.exports=t.p+"7308695c26f29c07e780.png"},727:(n,e,t)=>{"use strict";n.exports=t.p+"bd8534b598bd67f042f8.png"},347:(n,e,t)=>{"use strict";n.exports=t.p+"144ff406034d20032dae.png"},672:(n,e,t)=>{"use strict";n.exports=t.p+"9ea730ccdd3c70265097.png"},296:(n,e,t)=>{"use strict";n.exports=t.p+"28c16fdbc81fa954c34d.png"},760:(n,e,t)=>{"use strict";n.exports=t.p+"4ecb49ae0e8456fffe83.png"},996:(n,e,t)=>{"use strict";n.exports=t.p+"b11d5ba572c6b2d69aec.png"},303:(n,e,t)=>{"use strict";n.exports=t.p+"bbaf7afabd2579a73577.png"},397:(n,e,t)=>{"use strict";n.exports=t.p+"1fe081956dbbfe6cc56a.png"},976:(n,e,t)=>{"use strict";n.exports=t.p+"d7b3024e18e110470a23.png"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var n=t(72),e=t.n(n),r=t(825),o=t.n(r),i=t(659),s=t.n(i),a=t(56),c=t.n(a),p=t(540),d=t.n(p),u=t(113),l=t.n(u),f=t(365),g={};g.styleTagTransform=l(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),e()(f.A,g),f.A&&f.A.locals&&f.A.locals;class m{constructor(n={}){this.system=n}getUnit=n=>this.system[n]||"";addUnit=(n,e)=>this.system[n]=e;formatUnit=(n,e)=>`${e} ${this.getUnit(n)}`}const b=new m({temperature:"°C",precipitation:"%",windspeed:"km/h"}),h=new m({temperature:"°F",precipitation:"%",windspeed:"mph"}),v=(()=>{const n=document.querySelector("#search"),e=document.querySelector("#search-btn"),r=document.querySelector("#weather-info"),o=document.querySelector(".unit-toggle"),i=document.querySelector(".spinner"),s=()=>c(Array.from(o.children))?.getAttribute("id"),a=n=>{if(!n||!n.target||!n.target.parentElement)return;const e=n.target.parentElement;Array.from(e.children).forEach((n=>n.classList.remove("active"))),n.target.classList.add("active")},c=n=>{if(n&&Array.isArray(n)&&!(n.length<=0))return n.find((n=>n.classList.contains("active")))};return{setEventListeners:n=>{e.addEventListener("click",n),o.addEventListener("click",a)},getLocation:()=>n.value,showWeatherInfos:n=>{r.replaceChildren();const e="metric"===s()?b:h;r.classList.add("active");for(const o in n){const i=document.createElement("div");if(i.classList.add(o),"icon"===o){const e=document.createElement("img");e.setAttribute("src",t(987)(`./${n[o]}.png`)),i.append(e)}else if("sunrise"===o||"sunset"===o){const e=document.createElement("p");e.append(document.createTextNode(n[o].slice(0,n[o].lastIndexOf(":")))),i.append(e)}else{const t=document.createElement("p");t.append(document.createTextNode(e.formatUnit(o,n[o]))),i.append(t)}r.append(i)}},showError:()=>{r.replaceChildren(),r.classList.add("active"),r.append(document.createTextNode("No city found"))},getUnit:s,showLoader:()=>{i.classList.add("active"),r.replaceChildren()},hideLoader:()=>i.classList.remove("active")}})(),w=n=>{if(!(n&&n instanceof Promise))throw new Error("Data error! Unexpected data format");return n.then((n=>{if(!n||!n.days||!n.days[0])throw new Error("Data error! Unexpected data format");const e=n.days[0];return{conditions:e.description,precipitation:e.precipprob,location:n.resolvedAddress,icon:e.icon,temperature:e.temp,windspeed:e.windspeed,sunrise:e.sunrise,sunset:e.sunset,uv:e.uvindex}}))},y=async function(n,e){const t=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${n}?unitGroup=${e}&IconSet=icons1&key=W8SRDE35NC9EZSAB2UEM3ZD9H`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return await t.json()};v.setEventListeners((()=>{v.showLoader();const n=v.getLocation(),e=v.getUnit();w(y(n,e)).then((n=>{v.showWeatherInfos(n)})).catch((()=>{v.showError()})).finally((()=>{v.hideLoader()}))}))})()})();
(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>s});var r=t(354),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,"ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\nli {\n    margin: 14px;\n}\n\ninput {\n    border: 1px solid black;\n}\n\ninput:invalid {\n    border: 2px dashed red;\n}\n  \ninput:valid {\n    border: 2px solid black;\n}\n\n.error {\n    color: red;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,qBAAqB;IACrB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,UAAU;AACd",sourcesContent:["ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\nli {\n    margin: 14px;\n}\n\ninput {\n    border: 1px solid black;\n}\n\ninput:invalid {\n    border: 2px dashed red;\n}\n  \ninput:valid {\n    border: 2px solid black;\n}\n\n.error {\n    color: red;\n}"],sourceRoot:""}]);const s=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},354:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=t(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=s,n.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),u=0;u<a.length;u++){var d=t(a[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e=function(){const e=["^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",'email must use format "alex@alex.alex"'],n=document.getElementById("email"),t=new RegExp(e[0],""),r=document.getElementById("email-error");return t.test(n.value)&&""!=n.value?(r.innerText="",!0):(r.innerText=e[1],!1)},n=function(){const e={ro:["^\\d{6}$","Romanian ZIPs must have 6 digits"],fr:["^(F-)?\\d{5}$","France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012"],est:["^\\d{5}$","Estonian ZIPs must have 5 digits"]},n=document.getElementById("country").value,t=document.getElementById("zipcode"),r=new RegExp(e[n][0],""),o=document.getElementById("zipcode-error");return""==t.value?(o.innerText="ZIP code must not be empty!",!1):r.test(t.value)?(o.innerText="",!0):(o.innerText=e[n][1],!1)},r=function(){const e=document.getElementById("password"),n=document.getElementById("repeat-password"),t=[".{5,}","Password must have at least 5 characters"],r=new RegExp(t[0],""),o=document.getElementById("password-error"),a=document.getElementById("repeat-password-error");return""==e.value&&""==n.value?(o.innerText="Password must not be empty",a.innerText="Password must not be empty",!1):e.value===n.value&&r.test(e.value)?(o.innerText="",a.innerText="",!0):e.value!=n.value?(o.innerText="The passwords do not match!",a.innerText="The passwords do not match!",!1):r.test(e.value)?r.test(n.value)?(e.setCustomValidity("You should not be seeing this error?!"),!1):(a.innerText=t[1],o.innerText=t[1],!1):(o.innerText=t[1],a.innerText=t[1],!1)};var o=t(72),a=t.n(o),i=t(825),s=t.n(i),c=t(659),u=t.n(c),d=t(56),l=t.n(d),p=t(540),m=t.n(p),f=t(113),v=t.n(f),A=t(208),g={};g.styleTagTransform=v(),g.setAttributes=l(),g.insert=u().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=m(),a()(A.A,g),A.A&&A.A.locals&&A.A.locals,window.onload=()=>{document.getElementById("email").oninput=e,document.getElementById("zipcode").oninput=n,document.getElementById("repeat-password").oninput=r,document.getElementById("password").oninput=r,document.getElementById("email").onchange=e,document.getElementById("zipcode").onchange=n,document.getElementById("repeat-password").onchange=r,document.getElementById("password").onchange=r};const y=document.getElementById("validate"),h=document.getElementById("submit-error"),x=document.getElementById("high-five");y.addEventListener("click",(function(t){if(e(),n(),r(),!e()||!n()||!r())return x.innerText="",t.preventDefault(),void(h.innerText="Try again after following the requirements above");x.innerText="High 5!"}))})()})();
//# sourceMappingURL=main.js.map
function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}!function r(e,n){Object.entries(n).forEach(function(n){var a=function(t){if(Array.isArray(t))return t}(n)||function(t,r){var e,n,a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var o=[],l=!0,i=!1;try{for(a=a.call(t);!(l=(e=a.next()).done)&&(o.push(e.value),2!==o.length);l=!0);}catch(t){i=!0,n=t}finally{try{l||null==a.return||a.return()}finally{if(i)throw n}}return o}}(n,2)||function(r,e){if(r){if("string"==typeof r)return t(r,2);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,2)}}(n,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=a[0],l=a[1],i=document.createElement("li");if(i.textContent=o,e.append(i),Object.entries(l).length>0){var u=document.createElement("ul");i.append(u),r(u,l)}})}(document.querySelector("#tree"),{Drink:{Wine:{},Schnaps:{}},Fruit:{Red:{Cherry:{},Strawberry:{}},Yellow:{Banana:{},Pineapple:{}}}});
//# sourceMappingURL=index.cfa56030.js.map

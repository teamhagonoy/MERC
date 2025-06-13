(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function B(t){return typeof window.Node=="object"?t instanceof window.Node:t!==null&&typeof t=="object"&&typeof t.nodeType=="number"&&typeof t.nodeName=="string"}/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function ut(t){var e=Object.prototype.toString.call(t),r=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?t instanceof window.NodeList:t!==null&&typeof t=="object"&&typeof t.length=="number"&&r.test(e)&&(t.length===0||B(t[0]))}/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function L(t,e){if(e===void 0&&(e=document),t instanceof Array)return t.filter(B);if(B(t))return[t];if(ut(t))return Array.prototype.slice.call(t);if(typeof t=="string")try{var r=e.querySelectorAll(t);return Array.prototype.slice.call(r)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/function W(t){if(t.constructor!==Array)throw new TypeError("Expected array.");if(t.length===16)return t;if(t.length===6){var e=w();return e[0]=t[0],e[1]=t[1],e[4]=t[2],e[5]=t[3],e[12]=t[4],e[13]=t[5],e}throw new RangeError("Expected array with either 6 or 16 values.")}function w(){for(var t=[],e=0;e<16;e++)e%5==0?t.push(1):t.push(0);return t}function lt(t,e){for(var r=W(t),i=W(e),n=[],o=0;o<4;o++)for(var s=[r[o],r[o+4],r[o+8],r[o+12]],d=0;d<4;d++){var p=d*4,c=[i[p],i[p+1],i[p+2],i[p+3]],f=s[0]*c[0]+s[1]*c[1]+s[2]*c[2]+s[3]*c[3];n[o+p]=f}return n}function dt(t){if(typeof t=="string"){var e=t.match(/matrix(3d)?\(([^)]+)\)/);if(e){var r=e[2].split(", ").map(parseFloat);return W(r)}}return w()}function ft(t){var e=Math.PI/180*t,r=w();return r[5]=r[10]=Math.cos(e),r[6]=r[9]=Math.sin(e),r[9]*=-1,r}function ht(t){var e=Math.PI/180*t,r=w();return r[0]=r[10]=Math.cos(e),r[2]=r[8]=Math.sin(e),r[2]*=-1,r}function vt(t){var e=Math.PI/180*t,r=w();return r[0]=r[5]=Math.cos(e),r[1]=r[4]=Math.sin(e),r[4]*=-1,r}function G(t,e){var r=w();return r[0]=t,r[5]=typeof e=="number"?e:t,r}function pt(t){var e=w();return e[12]=t,e}function yt(t){var e=w();return e[13]=t,e}/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/var tt=function(){var t=Date.now();return function(e){var r=Date.now();r-t>16?(t=r,e(r)):setTimeout(function(){return tt(e)},0)}}(),gt=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||tt;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var et={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function bt(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function mt(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var R={success:mt,failure:bt};function S(t){return t!==null&&t instanceof Object&&(t.constructor===Object||Object.prototype.toString.call(t)==="[object Object]")}function a(t,e){if(S(t)){var r=Object.keys(t);return r.forEach(function(i){return e(t[i],i,t)})}if(t instanceof Array)return t.forEach(function(i,n){return e(i,n,t)});throw new TypeError("Expected either an array or object literal.")}function O(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+t;e.forEach(function(n){return i+=`
 — `+n}),console.log(i,"color: #ea654b;")}}function rt(){var t=this,e=function(){return{active:[],stale:[]}},r=e(),i=e(),n=e();try{a(L("[data-sr-id]"),function(o){var s=parseInt(o.getAttribute("data-sr-id"));r.active.push(s)})}catch(o){throw o}a(this.store.elements,function(o){r.active.indexOf(o.id)===-1&&r.stale.push(o.id)}),a(r.stale,function(o){return delete t.store.elements[o]}),a(this.store.elements,function(o){n.active.indexOf(o.containerId)===-1&&n.active.push(o.containerId),o.hasOwnProperty("sequence")&&i.active.indexOf(o.sequence.id)===-1&&i.active.push(o.sequence.id)}),a(this.store.containers,function(o){n.active.indexOf(o.id)===-1&&n.stale.push(o.id)}),a(n.stale,function(o){var s=t.store.containers[o].node;s.removeEventListener("scroll",t.delegate),s.removeEventListener("resize",t.delegate),delete t.store.containers[o]}),a(this.store.sequences,function(o){i.active.indexOf(o.id)===-1&&i.stale.push(o.id)}),a(i.stale,function(o){return delete t.store.sequences[o]})}var K=function(){var t={},e=document.documentElement.style;function r(i,n){if(n===void 0&&(n=e),i&&typeof i=="string"){if(t[i])return t[i];if(typeof n[i]=="string")return t[i]=i;if(typeof n["-webkit-"+i]=="string")return t[i]="-webkit-"+i;throw new RangeError('Unable to find "'+i+'" style property.')}throw new TypeError("Expected a string.")}return r.clearCache=function(){return t={}},r}();function wt(t){var e=window.getComputedStyle(t.node),r=e.position,i=t.config,n={},o=t.node.getAttribute("style")||"",s=o.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];n.computed=s?s.map(function(g){return g.trim()}).join("; ")+";":"",n.generated=s.some(function(g){return g.match(/visibility\s?:\s?visible/i)})?n.computed:s.concat(["visibility: visible"]).map(function(g){return g.trim()}).join("; ")+";";var d=parseFloat(e.opacity),p=isNaN(parseFloat(i.opacity))?parseFloat(e.opacity):parseFloat(i.opacity),c={computed:d!==p?"opacity: "+d+";":"",generated:d!==p?"opacity: "+p+";":""},f=[];if(parseFloat(i.distance)){var u=i.origin==="top"||i.origin==="bottom"?"Y":"X",v=i.distance;(i.origin==="top"||i.origin==="left")&&(v=/^-/.test(v)?v.substr(1):"-"+v);var E=v.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),y=E[0],T=E[1];switch(T){case"em":v=parseInt(e.fontSize)*y;break;case"px":v=y;break;case"%":v=u==="Y"?t.node.getBoundingClientRect().height*y/100:t.node.getBoundingClientRect().width*y/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}u==="Y"?f.push(yt(v)):f.push(pt(v))}i.rotate.x&&f.push(ft(i.rotate.x)),i.rotate.y&&f.push(ht(i.rotate.y)),i.rotate.z&&f.push(vt(i.rotate.z)),i.scale!==1&&(i.scale===0?f.push(G(2e-4)):f.push(G(i.scale)));var h={};if(f.length){h.property=K("transform"),h.computed={raw:e[h.property],matrix:dt(e[h.property])},f.unshift(h.computed.matrix);var at=f.reduce(lt);h.generated={initial:h.property+": matrix3d("+at.join(", ")+");",final:h.property+": matrix3d("+h.computed.matrix.join(", ")+");"}}else h.generated={initial:"",final:""};var l={};if(c.generated||h.generated.initial){l.property=K("transition"),l.computed=e[l.property],l.fragments=[];var U=i.delay,$=i.duration,q=i.easing;c.generated&&l.fragments.push({delayed:"opacity "+$/1e3+"s "+q+" "+U/1e3+"s",instant:"opacity "+$/1e3+"s "+q+" 0s"}),h.generated.initial&&l.fragments.push({delayed:h.property+" "+$/1e3+"s "+q+" "+U/1e3+"s",instant:h.property+" "+$/1e3+"s "+q+" 0s"});var ct=l.computed&&!l.computed.match(/all 0s|none 0s/);ct&&l.fragments.unshift({delayed:l.computed,instant:l.computed});var Z=l.fragments.reduce(function(g,A,V){return g.delayed+=V===0?A.delayed:", "+A.delayed,g.instant+=V===0?A.instant:", "+A.instant,g},{delayed:"",instant:""});l.generated={delayed:l.property+": "+Z.delayed+";",instant:l.property+": "+Z.instant+";"}}else l.generated={delayed:"",instant:""};return{inline:n,opacity:c,position:r,transform:h,transition:l}}function j(t,e){e.split(";").forEach(function(r){var i=r.split(":"),n=i[0],o=i.slice(1);n&&o&&(t.style[n.trim()]=o.join(":"))})}function H(t){var e=this,r;try{a(L(t),function(i){var n=i.getAttribute("data-sr-id");if(n!==null){r=!0;var o=e.store.elements[n];o.callbackTimer&&window.clearTimeout(o.callbackTimer.clock),j(o.node,o.styles.inline.generated),i.removeAttribute("data-sr-id"),delete e.store.elements[n]}})}catch(i){return O.call(this,"Clean failed.",i.message)}if(r)try{rt.call(this)}catch(i){return O.call(this,"Clean failed.",i.message)}}function Et(){var t=this;a(this.store.elements,function(e){j(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),a(this.store.containers,function(e){var r=e.node===document.documentElement?window:e.node;r.removeEventListener("scroll",t.delegate),r.removeEventListener("resize",t.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function P(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];if(S(t))return a(e,function(i){a(i,function(n,o){S(n)?((!t[o]||!S(t[o]))&&(t[o]={}),P(t[o],n)):t[o]=n})}),t;throw new TypeError("Target must be an object literal.")}function k(t){return t===void 0&&(t=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(t)}var X=function(){var t=0;return function(){return t++}}();function it(){var t=this;rt.call(this),a(this.store.elements,function(e){var r=[e.styles.inline.generated];e.visible?(r.push(e.styles.opacity.computed),r.push(e.styles.transform.generated.final),e.revealed=!0):(r.push(e.styles.opacity.generated),r.push(e.styles.transform.generated.initial),e.revealed=!1),j(e.node,r.filter(function(i){return i!==""}).join(" "))}),a(this.store.containers,function(e){var r=e.node===document.documentElement?window:e.node;r.addEventListener("scroll",t.delegate),r.addEventListener("resize",t.delegate)}),this.delegate(),this.initTimeout=null}function I(t,e){e===void 0&&(e={});var r=e.pristine||this.pristine,i=t.config.useDelay==="always"||t.config.useDelay==="onload"&&r||t.config.useDelay==="once"&&!t.seen,n=t.visible&&!t.revealed,o=!t.visible&&t.revealed&&t.config.reset;if(e.reveal||n)return Tt.call(this,t,i);if(e.reset||o)return Ot.call(this,t)}function Tt(t,e){var r=[t.styles.inline.generated,t.styles.opacity.computed,t.styles.transform.generated.final];e?r.push(t.styles.transition.generated.delayed):r.push(t.styles.transition.generated.instant),t.revealed=t.seen=!0,j(t.node,r.filter(function(i){return i!==""}).join(" ")),nt.call(this,t,e)}function Ot(t){var e=[t.styles.inline.generated,t.styles.opacity.generated,t.styles.transform.generated.initial,t.styles.transition.generated.instant];t.revealed=!1,j(t.node,e.filter(function(r){return r!==""}).join(" ")),nt.call(this,t)}function nt(t,e){var r=this,i=e?t.config.duration+t.config.delay:t.config.duration,n=t.revealed?t.config.beforeReveal:t.config.beforeReset,o=t.revealed?t.config.afterReveal:t.config.afterReset,s=0;t.callbackTimer&&(s=Date.now()-t.callbackTimer.start,window.clearTimeout(t.callbackTimer.clock)),n(t.node),t.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(t.node),t.callbackTimer=null,t.revealed&&!t.config.reset&&t.config.cleanup&&H.call(r,t.node)},i-s)}}function ot(t,e){if(e===void 0&&(e=this.pristine),!t.visible&&t.revealed&&t.config.reset)return I.call(this,t,{reset:!0});var r=this.store.sequences[t.sequence.id],i=t.sequence.index;if(r){var n=new J(r,"visible",this.store),o=new J(r,"revealed",this.store);if(r.models={visible:n,revealed:o},!o.body.length){var s=r.members[n.body[0]],d=this.store.elements[s];if(d)return M.call(this,r,n.body[0],-1,e),M.call(this,r,n.body[0],1,e),I.call(this,d,{reveal:!0,pristine:e})}if(!r.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(n.body).shift())return M.call(this,r,i,-1,e),I.call(this,t,{reveal:!0,pristine:e});if(!r.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(n.body).pop())return M.call(this,r,i,1,e),I.call(this,t,{reveal:!0,pristine:e})}}function jt(t){var e=Math.abs(t);if(!isNaN(e))this.id=X(),this.interval=Math.max(e,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function J(t,e,r){var i=this;this.head=[],this.body=[],this.foot=[],a(t.members,function(n,o){var s=r.elements[n];s&&s[e]&&i.body.push(o)}),this.body.length&&a(t.members,function(n,o){var s=r.elements[n];s&&!s[e]&&(o<i.body[0]?i.head.push(o):i.foot.push(o))})}function M(t,e,r,i){var n=this,o=["head",null,"foot"][1+r],s=t.members[e+r],d=this.store.elements[s];t.blocked[o]=!0,setTimeout(function(){t.blocked[o]=!1,d&&ot.call(n,d,i)},t.interval)}function st(t,e,r){var i=this;e===void 0&&(e={}),r===void 0&&(r=!1);var n=[],o,s=e.interval||et.interval;try{s&&(o=new jt(s));var d=L(t);if(!d.length)throw new Error("Invalid reveal target.");var p=d.reduce(function(c,f){var u={},v=f.getAttribute("data-sr-id");v?(P(u,i.store.elements[v]),j(u.node,u.styles.inline.computed)):(u.id=X(),u.node=f,u.seen=!1,u.revealed=!1,u.visible=!1);var E=P({},u.config||i.defaults,e);if(!E.mobile&&k()||!E.desktop&&!k())return v&&H.call(i,u),c;var y=L(E.container)[0];if(!y)throw new Error("Invalid container.");if(!y.contains(f))return c;var T;return T=Rt(y,n,i.store.containers),T===null&&(T=X(),n.push({id:T,node:y})),u.config=E,u.containerId=T,u.styles=wt(u),o&&(u.sequence={id:o.id,index:o.members.length},o.members.push(u.id)),c.push(u),c},[]);a(p,function(c){i.store.elements[c.id]=c,c.node.setAttribute("data-sr-id",c.id)})}catch(c){return O.call(this,"Reveal failed.",c.message)}a(n,function(c){i.store.containers[c.id]={id:c.id,node:c.node}}),o&&(this.store.sequences[o.id]=o),r!==!0&&(this.store.history.push({target:t,options:e}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(it.bind(this),0))}function Rt(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];var i=null;return a(e,function(n){a(n,function(o){i===null&&o.node===t&&(i=o.id)})}),i}function It(){var t=this;a(this.store.history,function(e){st.call(t,e.target,e.options,!0)}),it.call(this)}var Lt=function(t){return(t>0)-(t<0)||+t},Q=Math.sign||Lt;function _(t,e){var r=e?t.node.clientHeight:t.node.offsetHeight,i=e?t.node.clientWidth:t.node.offsetWidth,n=0,o=0,s=t.node;do isNaN(s.offsetTop)||(n+=s.offsetTop),isNaN(s.offsetLeft)||(o+=s.offsetLeft),s=s.offsetParent;while(s);return{bounds:{top:n,right:o+i,bottom:n+r,left:o},height:r,width:i}}function Pt(t){var e,r;return t.node===document.documentElement?(e=window.pageYOffset,r=window.pageXOffset):(e=t.node.scrollTop,r=t.node.scrollLeft),{top:e,left:r}}function $t(t){t===void 0&&(t={});var e=this.store.containers[t.containerId];if(e){var r=Math.max(0,Math.min(1,t.config.viewFactor)),i=t.config.viewOffset,n={top:t.geometry.bounds.top+t.geometry.height*r,right:t.geometry.bounds.right-t.geometry.width*r,bottom:t.geometry.bounds.bottom-t.geometry.height*r,left:t.geometry.bounds.left+t.geometry.width*r},o={top:e.geometry.bounds.top+e.scroll.top+i.top,right:e.geometry.bounds.right+e.scroll.left-i.right,bottom:e.geometry.bounds.bottom+e.scroll.top-i.bottom,left:e.geometry.bounds.left+e.scroll.left+i.left};return n.top<o.bottom&&n.right>o.left&&n.bottom>o.top&&n.left<o.right||t.styles.position==="fixed"}}function qt(t,e){var r=this;t===void 0&&(t={type:"init"}),e===void 0&&(e=this.store.elements),gt(function(){var i=t.type==="init"||t.type==="resize";a(r.store.containers,function(n){i&&(n.geometry=_.call(r,n,!0));var o=Pt.call(r,n);n.scroll&&(n.direction={x:Q(o.left-n.scroll.left),y:Q(o.top-n.scroll.top)}),n.scroll=o}),a(e,function(n){(i||n.geometry===void 0)&&(n.geometry=_.call(r,n)),n.visible=$t.call(r,n)}),a(e,function(n){n.sequence?ot.call(r,n):I.call(r,n)}),r.pristine=!1})}function At(){var t=document.documentElement.style;return"transform"in t||"WebkitTransform"in t}function Mt(){var t=document.documentElement.style;return"transition"in t||"WebkitTransition"in t}var St="4.0.9",N,x,D,C,F,m,z,Y;function b(t){t===void 0&&(t={});var e=typeof this>"u"||Object.getPrototypeOf(this)!==b.prototype;if(e)return new b(t);if(!b.isSupported())return O.call(this,"Instantiation failed.","This browser is not supported."),R.failure();var r;try{r=m?P({},m,t):P({},et,t)}catch(n){return O.call(this,"Invalid configuration.",n.message),R.failure()}try{var i=L(r.container)[0];if(!i)throw new Error("Invalid container.")}catch(n){return O.call(this,n.message),R.failure()}return m=r,!m.mobile&&k()||!m.desktop&&!k()?(O.call(this,"This device is disabled.","desktop: "+m.desktop,"mobile: "+m.mobile),R.failure()):(R.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,N=N||qt.bind(this),x=x||Et.bind(this),D=D||st.bind(this),C=C||H.bind(this),F=F||It.bind(this),Object.defineProperty(this,"delegate",{get:function(){return N}}),Object.defineProperty(this,"destroy",{get:function(){return x}}),Object.defineProperty(this,"reveal",{get:function(){return D}}),Object.defineProperty(this,"clean",{get:function(){return C}}),Object.defineProperty(this,"sync",{get:function(){return F}}),Object.defineProperty(this,"defaults",{get:function(){return m}}),Object.defineProperty(this,"version",{get:function(){return St}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),Y||(Y=this))}b.isSupported=function(){return At()&&Mt()};Object.defineProperty(b,"debug",{get:function(){return z||!1},set:function(t){return z=typeof t=="boolean"?t:z}});b();document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("preloader");window.addEventListener("load",()=>{t.style.opacity="0",setTimeout(()=>t.style.display="none",500)});const e=document.querySelector(".hero-overlay");window.addEventListener("scroll",()=>{const r=window.scrollY;e.classList.toggle("shrink",r>50)}),b().reveal(".credits",{delay:200,distance:"50px",origin:"bottom",duration:800,reset:!1}),b().reveal(".image-reveal",{delay:300,distance:"50px",origin:"bottom",duration:900,reset:!1}),b().reveal(".hero-content",{delay:300,distance:"20px",origin:"top",duration:800,reset:!1})});function kt(){new YT.Player("youtube-bg",{videoId:"9hZqr1D-aBE",playerVars:{autoplay:1,controls:0,showinfo:0,modestbranding:1,loop:1,mute:1,playlist:"9hZqr1D-aBE",playsinline:1},events:{onReady:t=>t.target.mute()}})}window.onYouTubeIframeAPIReady=kt;

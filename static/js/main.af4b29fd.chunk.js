(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,r){e.exports=r(224)},119:function(e,t,r){},126:function(e,t){},131:function(e,t){},133:function(e,t){},144:function(e,t){},146:function(e,t){},173:function(e,t){},174:function(e,t){},179:function(e,t){},181:function(e,t){},188:function(e,t){},207:function(e,t){},224:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(109),i=r.n(o);r(119);function l(){return n.a.createElement("section",{id:"about"},n.a.createElement("div",{className:"container mx-auto flex px-10 py-20 md:flex-row flex-col items-center"},n.a.createElement("div",{className:"lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"},n.a.createElement("h1",{className:"title-font sm:text-4xl text-3xl mb-4 font-medium text-white"},"Hi, I'm Adithya, a.k.a Savitar608.",n.a.createElement("br",{className:"hidden lg:inline-block"})),n.a.createElement("p",{className:"mb-8 leading-relaxed"},"Currently working as a developer in the Platform Backend team of Head Digital Works."),n.a.createElement("div",{className:"flex justify-center"},n.a.createElement("a",{href:"#contact",className:"inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"},"Work With Me"),n.a.createElement("a",{href:"#skills",className:"ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"},"See My Skills"))),n.a.createElement("div",{className:"lg:max-w-lg lg:w-full md:w-1/2 w-5/6"},n.a.createElement("img",{className:"object-cover object-center rounded",alt:"hero",src:"./myphoto.jpg"}))))}var c=r(110),s=r(22),m=r(112),u=r(113);function f(){f=function(){return t};var e,t={},r=Object.prototype,a=r.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function m(e,t,r,a){var o=t&&t.prototype instanceof x?t:x,i=Object.create(o.prototype),l=new A(a||[]);return n(i,"_invoke",{value:O(e,r,l)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=m;var d="suspendedStart",h="suspendedYield",g="executing",p="completed",y={};function x(){}function v(){}function b(){}var w={};s(w,i,function(){return this});var E=Object.getPrototypeOf,N=E&&E(E(P([])));N&&N!==r&&a.call(N,i)&&(w=N);var j=b.prototype=x.prototype=Object.create(w);function k(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function L(e,t){function r(n,o,i,l){var c=u(e[n],e,o);if("throw"!==c.type){var s=c.arg,m=s.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,i,l)},function(e){r("throw",e,i,l)}):t.resolve(m).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,l)})}l(c.arg)}var o;n(this,"_invoke",{value:function(e,a){function n(){return new t(function(t,n){r(e,a,t,n)})}return o=o?o.then(n,n):n()}})}function O(t,r,a){var n=d;return function(o,i){if(n===g)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return{value:e,done:!0}}for(a.method=o,a.arg=i;;){var l=a.delegate;if(l){var c=S(l,a);if(c){if(c===y)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(n===d)throw n=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n=g;var s=u(t,r,a);if("normal"===s.type){if(n=a.done?p:h,s.arg===y)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(n=p,a.method="throw",a.arg=s.arg)}}}function S(t,r){var a=r.method,n=t.iterator[a];if(n===e)return r.delegate=null,"throw"===a&&t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method)||"return"!==a&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+a+"' method")),y;var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function P(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(a.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return v.prototype=b,n(j,"constructor",{value:b,configurable:!0}),n(b,"constructor",{value:v,configurable:!0}),v.displayName=s(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,s(e,c,"GeneratorFunction")),e.prototype=Object.create(j),e},t.awrap=function(e){return{__await:e}},k(L.prototype),s(L.prototype,l,function(){return this}),t.AsyncIterator=L,t.async=function(e,r,a,n,o){void 0===o&&(o=Promise);var i=new L(m(e,r,a,n),o);return t.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},k(j),s(j,c,"Generator"),s(j,i,function(){return this}),s(j,"toString",function(){return"[object Generator]"}),t.keys=function(e){var t=Object(e),r=[];for(var a in t)r.push(a);return r.reverse(),function e(){for(;r.length;){var a=r.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},t.values=P,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(a,n){return l.type="throw",l.arg=t,r.next=a,n&&(r.method="next",r.arg=e),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;T(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,a){return this.delegate={iterator:P(t),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=e),y}},t}function d(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),r=t[0],o=t[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),d=l[0],h=l[1],g=Object(a.useState)(""),p=Object(s.a)(g,2),y=p[0],x=p[1],v=Object(a.useState)(""),b=Object(s.a)(v,2),w=b[0],E=b[1],N=Object(a.useState)(""),j=Object(s.a)(N,2),k=j[0],L=j[1],O=function(e){var t=e.target,r=t.name,a=t.value;"name"===r?o(a):"email"===r?h(a):"subject"===r?x(a):"message"===r&&E(a)},S=function(){var e=Object(c.a)(f().mark(function e(t){return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),k){e.next=4;break}return alert("Please complete the CAPTCHA."),e.abrupt("return");case 4:return e.prev=4,e.next=7,m.a.send("service_jjw4t5h","template_0q91nvd",{name:r,email:d,subject:y,message:w},"CO45DM9qTa8isu7S9");case 7:alert("Email sent successfully!!"),window.location.reload(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),console.error("Email sending failed:",e.t0),alert("Email sending failed. Please try again later.");case 15:case"end":return e.stop()}},e,null,[[4,11]])}));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("section",{id:"contact",className:"relative"},n.a.createElement("div",{className:"container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap"},n.a.createElement("div",{className:"lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"},n.a.createElement("iframe",{width:"100%",height:"100%",title:"map",className:"absolute inset-0",style:{filter:"opacity(0.7)"},src:"https://www.google.com/maps/embed/v1/place?q=Bengaluru,+Karnataka,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"}),n.a.createElement("div",{className:"bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md"},n.a.createElement("div",{className:"lg:w-1/2 px-6"},n.a.createElement("h2",{className:"title-font font-semibold text-white tracking-widest text-xs"},"CITY"),n.a.createElement("p",{className:"mt-1"},"Bangalore, Karnataka")),n.a.createElement("div",{className:"lg:w-1/2 px-6 mt-4 lg:mt-0"},n.a.createElement("h2",{className:"title-font font-semibold text-white tracking-widest text-xs"},"EMAIL"),n.a.createElement("a",{className:"text-indigo-400 leading-relaxed"},"adithya608@gmail.com")))),n.a.createElement("form",{name:"contact-form",onSubmit:S,className:"lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"},n.a.createElement("h2",{className:"text-white sm:text-4xl text-3xl mb-1 font-medium title-font"},"Contact me"),n.a.createElement("p",{className:"leading-relaxed mb-5"},"Hit me up if you want to discuss any collaborative work opportunities or even for just a normal conversation."),n.a.createElement("div",{className:"relative mb-4"},n.a.createElement("label",{htmlFor:"name",className:"leading-7 text-sm text-gray-400"},"Name"),n.a.createElement("input",{type:"text",id:"name",name:"name",value:r,className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",onChange:O})),n.a.createElement("div",{className:"relative mb-4"},n.a.createElement("label",{htmlFor:"email",className:"leading-7 text-sm text-gray-400"},"Email"),n.a.createElement("input",{type:"email",id:"email",name:"email",value:d,className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",onChange:O})),n.a.createElement("div",{className:"relative mb-4"},n.a.createElement("label",{htmlFor:"subject",className:"leading-7 text-sm text-gray-400"},"Subject"),n.a.createElement("input",{type:"text",id:"subject",name:"subject",value:y,onChange:O,className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})),n.a.createElement("div",{className:"relative mb-4"},n.a.createElement("label",{htmlFor:"message",className:"leading-7 text-sm text-gray-400"},"Message"),n.a.createElement("textarea",{id:"message",name:"message",value:w,className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out",onChange:O})),n.a.createElement(u.a,{sitekey:"6LdxPUsoAAAAAENv0c5W1pyTi6M1DwXh0YpP9-RO",onChange:function(e){L(e)}}),n.a.createElement("button",{type:"submit",className:"text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"},"Submit"))))}r(56).config();var h=r(11);function g(){return n.a.createElement("header",{className:"bg-gray-800 md:sticky top-0 z-10"},n.a.createElement("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"},n.a.createElement("a",{className:"title-font font-medium text-white mb-4 md:mb-0"},n.a.createElement("a",{href:"#about",className:"ml-3 text-xl"},"Adithya")),n.a.createElement("nav",{className:"md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700\tflex flex-wrap items-center text-base justify-center"},n.a.createElement("a",{href:"#skills",className:"mr-5 hover:text-white"},"Skills")),n.a.createElement("a",{href:"#contact",className:"inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"},"Contact Me",n.a.createElement(h.a,{className:"w-4 h-4 ml-1"}))))}var p=["JavaScript","Node","React","AWS","Python","Cybersecurity"];function y(){return n.a.createElement("section",{id:"skills"},n.a.createElement("div",{className:"container px-5 py-10 mx-auto"},n.a.createElement("div",{className:"text-center mb-20"},n.a.createElement(h.c,{className:"w-10 inline-block mb-4"}),n.a.createElement("h1",{className:"sm:text-4xl text-3xl font-medium title-font text-white mb-4"},"Skills & Technologies"),n.a.createElement("p",{className:"text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"},"These are just some of the technologies I am familiar with")),n.a.createElement("div",{className:"flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"},p.map(function(e){return n.a.createElement("div",{key:e,className:"p-2 sm:w-1/2 w-full"},n.a.createElement("div",{className:"bg-gray-800 rounded flex p-4 h-full items-center"},n.a.createElement(h.b,{className:"text-green-400 w-6 h-6 flex-shrink-0 mr-4"}),n.a.createElement("span",{className:"title-font font-medium text-white"},e)))}))))}function x(){return n.a.createElement("main",{className:"text-gray-400 bg-gray-900 body-font"},n.a.createElement(g,null),n.a.createElement(l,null),n.a.createElement(y,null),n.a.createElement(d,null))}r(56).config(),i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x,null)),document.getElementById("root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.af4b29fd.chunk.js.map
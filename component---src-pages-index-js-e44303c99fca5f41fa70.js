(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{5985:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(7294),l=c(r),a=c(n(4867)),u=c(n(217));function c(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.toPdf=n.toPdf.bind(n),n.targetRef=l.default.createRef(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"toPdf",value:function(){var e=this.props,t=e.targetRef,n=e.filename,o=e.x,r=e.y,l=e.options,c=e.onComplete,i=t||this.targetRef,s=i.current||i;if(!s)throw new Error("Target ref must be used or informed. See https://github.com/ivmarcos/react-to-pdf#usage.");(0,u.default)(s,{logging:!1,useCORS:!0,scale:this.props.scale}).then((function(e){var t=e.toDataURL("image/jpeg"),u=new a.default(l);u.addImage(t,"JPEG",o,r),u.save(n),c&&c()}))}},{key:"render",value:function(){return(0,this.props.children)({toPdf:this.toPdf,targetRef:this.targetRef})}}]),t}(r.PureComponent);i.defaultProps={filename:"download.pdf",options:void 0,x:0,y:0,scale:1,onComplete:void 0,targetRef:void 0},t.Z=i},9670:function(e,t,n){var o=n(111);e.exports=function(e){if(!o(e))throw TypeError(String(e)+" is not an object");return e}},1318:function(e,t,n){var o=n(5656),r=n(7466),l=n(1400),a=function(e){return function(t,n,a){var u,c=o(t),i=r(c.length),s=l(a,i);if(e&&n!=n){for(;i>s;)if((u=c[s++])!=u)return!0}else for(;i>s;s++)if((e||s in c)&&c[s]===n)return e||s||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},4326:function(e){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},9920:function(e,t,n){var o=n(6656),r=n(3887),l=n(1236),a=n(3070);e.exports=function(e,t){for(var n=r(t),u=a.f,c=l.f,i=0;i<n.length;i++){var s=n[i];o(e,s)||u(e,s,c(t,s))}}},8880:function(e,t,n){var o=n(9781),r=n(3070),l=n(9114);e.exports=o?function(e,t,n){return r.f(e,t,l(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},9781:function(e,t,n){var o=n(7293);e.exports=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var o=n(7854),r=n(111),l=o.document,a=r(l)&&r(l.createElement);e.exports=function(e){return a?l.createElement(e):{}}},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var o=n(7854),r=n(1236).f,l=n(8880),a=n(1320),u=n(3505),c=n(9920),i=n(4705);e.exports=function(e,t){var n,s,f,m,p,g=e.target,v=e.global,d=e.stat;if(n=v?o:d?o[g]||u(g,{}):(o[g]||{}).prototype)for(s in t){if(m=t[s],f=e.noTargetGet?(p=r(n,s))&&p.value:n[s],!i(v?s:g+(d?".":"#")+s,e.forced)&&void 0!==f){if(typeof m==typeof f)continue;c(m,f)}(e.sham||f&&f.sham)&&l(m,"sham",!0),a(n,s,m,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},5005:function(e,t,n){var o=n(857),r=n(7854),l=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?l(o[e])||l(r[e]):o[e]&&o[e][t]||r[e]&&r[e][t]}},7854:function(e,t,n){var o=function(e){return e&&e.Math==Math&&e};e.exports=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},6656:function(e){var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},3501:function(e){e.exports={}},4664:function(e,t,n){var o=n(9781),r=n(7293),l=n(317);e.exports=!o&&!r((function(){return 7!=Object.defineProperty(l("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var o=n(7293),r=n(4326),l="".split;e.exports=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==r(e)?l.call(e,""):Object(e)}:Object},2788:function(e,t,n){var o=n(5465),r=Function.toString;"function"!=typeof o.inspectSource&&(o.inspectSource=function(e){return r.call(e)}),e.exports=o.inspectSource},9909:function(e,t,n){var o,r,l,a=n(8536),u=n(7854),c=n(111),i=n(8880),s=n(6656),f=n(5465),m=n(6200),p=n(3501),g=u.WeakMap;if(a){var v=f.state||(f.state=new g),d=v.get,y=v.has,h=v.set;o=function(e,t){return t.facade=e,h.call(v,e,t),t},r=function(e){return d.call(v,e)||{}},l=function(e){return y.call(v,e)}}else{var b=m("state");p[b]=!0,o=function(e,t){return t.facade=e,i(e,b,t),t},r=function(e){return s(e,b)?e[b]:{}},l=function(e){return s(e,b)}}e.exports={set:o,get:r,has:l,enforce:function(e){return l(e)?r(e):o(e,{})},getterFor:function(e){return function(t){var n;if(!c(t)||(n=r(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},4705:function(e,t,n){var o=n(7293),r=/#|\.prototype\./,l=function(e,t){var n=u[a(e)];return n==i||n!=c&&("function"==typeof t?o(t):!!t)},a=l.normalize=function(e){return String(e).replace(r,".").toLowerCase()},u=l.data={},c=l.NATIVE="N",i=l.POLYFILL="P";e.exports=l},111:function(e){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},1913:function(e){e.exports=!1},8536:function(e,t,n){var o=n(7854),r=n(2788),l=o.WeakMap;e.exports="function"==typeof l&&/native code/.test(r(l))},3070:function(e,t,n){var o=n(9781),r=n(4664),l=n(9670),a=n(7593),u=Object.defineProperty;t.f=o?u:function(e,t,n){if(l(e),t=a(t,!0),l(n),r)try{return u(e,t,n)}catch(o){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var o=n(9781),r=n(5296),l=n(9114),a=n(5656),u=n(7593),c=n(6656),i=n(4664),s=Object.getOwnPropertyDescriptor;t.f=o?s:function(e,t){if(e=a(e),t=u(t,!0),i)try{return s(e,t)}catch(n){}if(c(e,t))return l(!r.f.call(e,t),e[t])}},8006:function(e,t,n){var o=n(6324),r=n(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return o(e,r)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},6324:function(e,t,n){var o=n(6656),r=n(5656),l=n(1318).indexOf,a=n(3501);e.exports=function(e,t){var n,u=r(e),c=0,i=[];for(n in u)!o(a,n)&&o(u,n)&&i.push(n);for(;t.length>c;)o(u,n=t[c++])&&(~l(i,n)||i.push(n));return i}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,r=o&&!n.call({1:2},1);t.f=r?function(e){var t=o(this,e);return!!t&&t.enumerable}:n},3887:function(e,t,n){var o=n(5005),r=n(8006),l=n(5181),a=n(9670);e.exports=o("Reflect","ownKeys")||function(e){var t=r.f(a(e)),n=l.f;return n?t.concat(n(e)):t}},857:function(e,t,n){var o=n(7854);e.exports=o},1320:function(e,t,n){var o=n(7854),r=n(8880),l=n(6656),a=n(3505),u=n(2788),c=n(9909),i=c.get,s=c.enforce,f=String(String).split("String");(e.exports=function(e,t,n,u){var c,i=!!u&&!!u.unsafe,m=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof t||l(n,"name")||r(n,"name",t),(c=s(n)).source||(c.source=f.join("string"==typeof t?t:""))),e!==o?(i?!p&&e[t]&&(m=!0):delete e[t],m?e[t]=n:r(e,t,n)):m?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&i(this).source||u(this)}))},4488:function(e){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},3505:function(e,t,n){var o=n(7854),r=n(8880);e.exports=function(e,t){try{r(o,e,t)}catch(n){o[e]=t}return t}},6200:function(e,t,n){var o=n(2309),r=n(9711),l=o("keys");e.exports=function(e){return l[e]||(l[e]=r(e))}},5465:function(e,t,n){var o=n(7854),r=n(3505),l="__core-js_shared__",a=o[l]||r(l,{});e.exports=a},2309:function(e,t,n){var o=n(1913),r=n(5465);(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.1",mode:o?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},6091:function(e,t,n){var o=n(7293),r=n(1361);e.exports=function(e){return o((function(){return!!r[e]()||"​᠎"!="​᠎"[e]()||r[e].name!==e}))}},3111:function(e,t,n){var o=n(4488),r="["+n(1361)+"]",l=RegExp("^"+r+r+"*"),a=RegExp(r+r+"*$"),u=function(e){return function(t){var n=String(o(t));return 1&e&&(n=n.replace(l,"")),2&e&&(n=n.replace(a,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},1400:function(e,t,n){var o=n(9958),r=Math.max,l=Math.min;e.exports=function(e,t){var n=o(e);return n<0?r(n+t,0):l(n,t)}},5656:function(e,t,n){var o=n(8361),r=n(4488);e.exports=function(e){return o(r(e))}},9958:function(e){var t=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:t)(e)}},7466:function(e,t,n){var o=n(9958),r=Math.min;e.exports=function(e){return e>0?r(o(e),9007199254740991):0}},7593:function(e,t,n){var o=n(111);e.exports=function(e,t){if(!o(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},9711:function(e){var t=0,n=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++t+n).toString(36)}},1361:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},8702:function(e,t,n){"use strict";var o=n(2109),r=n(3111).end,l=n(6091)("trimEnd"),a=l?function(){return r(this)}:"".trimEnd;o({target:"String",proto:!0,forced:l},{trimEnd:a,trimRight:a})},5674:function(e,t,n){"use strict";var o=n(2109),r=n(3111).start,l=n(6091)("trimStart"),a=l?function(){return r(this)}:"".trimStart;o({target:"String",proto:!0,forced:l},{trimStart:a,trimLeft:a})},2345:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var o=n(7294),r=n(9519),l=n(8014),a=n(8331),u=function(){return o.createElement("div",{className:"flex justify-between max-h-12 w-full p-2 bg-opacity-25 bg-transparent fixed z-50"},o.createElement("img",{src:a.Z,alt:"logo",className:"object-contain w-28"}),o.createElement("div",{className:"flex justify-between mr-4"},o.createElement("a",{className:"px-6",href:"/"},"Account"),o.createElement("a",{className:"px-6",href:"/"},"History"),o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",width:"40",viewBox:"0 0 24 24",stroke:"currentColor",className:"pl-4"},o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"})),o.createElement(r.G,{className:"mt-2",icon:l.gc2})))},c=o.createRef(),i=function(){var e=(0,o.useState)({bill:"BILLED TO",t_inv_no:"INV NUMBER",t_issue_date:"DATE OF ISSUE",t_due:"DUE DATE",cmpny_name:"Company name",gst:"GSTIN",pan:"PAN",state:"STATE",address:"Address of the company",inv_no:"INV - 00000",issue_date:"28-Feb-21",due:"7-Mar-21"}),t=e[0],n=e[1],r=function(e){n(e.target.value)};return o.createElement(o.Fragment,null,o.createElement("div",{className:"text-gray-500 mb-4",ref:c},o.createElement("div",{className:"grid grid-cols-12 mb-2 lg:text-sm text-xs"},o.createElement("input",{type:"text",value:t.bill,className:"col-span-5 mr-2 text-left font-semibold focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100",onChange:function(e){return r(e)}}),o.createElement("input",{type:"text",value:t.t_inv_no,className:"col-span-3 mr-2 font-semibold text-right focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100",onChange:function(e){return r(e)}}),o.createElement("input",{type:"text",value:t.t_issue_date,className:"col-span-2 font-semibold mr-2 text-right focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100",onChange:function(e){return r(e)}}),o.createElement("input",{type:"text",value:t.t_due,className:"col-span-2 mr-2 font-semibold text-right focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100",onChange:function(e){return r(e)}})),o.createElement("div",{className:"grid grid-cols-12"},o.createElement("div",{className:"col-span-5 mr-2 w-full text-sm"},o.createElement("input",{type:"text",value:t.cmpny_name,className:" w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 ",onChange:function(e){return r(e)}}),o.createElement("input",{type:"text",value:t.gst,className:"w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 ",onChange:function(e){return r(e)}}),o.createElement("input",{type:"text",value:t.pan,className:" w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 ",onChange:function(e){return r(e)}}),o.createElement("input",{type:"text",value:t.state,className:"w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100",onChange:function(e){return r(e)}}),o.createElement("input",{type:"text",value:t.address,className:" w-full focus:outline-none leading-none hover:bg-yellow-100 focus:bg-yellow-100 ",onChange:function(e){return r(e)}})),o.createElement("input",{type:"text",value:t.inv_no,className:"col-span-3 mr-2 text-sm text-right focus:outline-none max-h-12 hover:bg-yellow-100 focus:bg-yellow-100",onChange:function(e){return r(e)}}),o.createElement("input",{type:"",value:t.issue_date,className:"col-span-2 mr-2 text-sm text-right focus:outline-none max-h-12 hover:bg-yellow-100 focus:bg-yellow-100",onChange:function(e){return r(e)}}),o.createElement("input",{type:"",value:t.due,className:"col-span-2 mr-2 text-sm text-right focus:outline-none max-h-12  hover:bg-yellow-100 focus:bg-yellow-100",onChange:function(e){return r(e)}}))))},s=o.createRef(),f=function(e){var t=(0,o.useState)({l_acc_name:"Account Name",l_bank_name:"Bank Name",l_acc_no:"Account Number",l_ifsc:"IFSC Code",name:"Name XXXX",bank:"Bank YYYY",acc_no:"5555 6666 7777 8888",ifsc:"IFSC Code",l_subtot:"SUBTOTAL",cgst:"CGST",sgst:"SGST",igst:"IGST",inv_tot:"INVOICE TOTAL"}),n=t[0],r=t[1],l=(0,o.useState)(0),a=l[0],u=l[1],c=(0,o.useState)(0),i=c[0],f=c[1],m=(0,o.useState)(0),p=m[0],g=m[1],v=function(e){r(e.target.value)},d=parseFloat(e.total*(i/100)).toFixed(2),y=parseFloat(e.total*(a/100)).toFixed(2),h=parseFloat(e.total*(p/100)).toFixed(2);parseFloat(e.total+d+y+h).toFixed(2);return o.createElement("div",{className:"text-gray-500 text-xs lg:text-sm",ref:s},o.createElement("div",{className:""},o.createElement("div",{className:"grid grid-cols-12 mb-8 col-end-8"},o.createElement("div",{className:"col-span-6"}),o.createElement("div",{className:"col-span-3"},o.createElement("input",{type:"text",value:n.l_subtot,className:"focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 text-xs  font-semibold lg:text-sm",onChange:function(e){return v(e)}}),!p>=1?o.createElement(o.Fragment,null,o.createElement("input",{type:"text",value:n.cgst,className:"focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 font-semibold  w-1/2",onChange:function(e){return v(e)}}),o.createElement("input",{type:"number",value:a,min:"0",max:"100",className:"focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 font-semibold  w-1/4 text-center",onChange:function(e){return function(e){u(parseFloat(e.target.value))}(e)}}),o.createElement("span",null,"%"),o.createElement("input",{type:"text",value:n.sgst,className:"focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 font-semibold  w-1/2",onChange:function(e){return v(e)}}),o.createElement("input",{type:"number",value:i,min:"0",className:"focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 font-semibold w-1/4 text-center",onChange:function(e){return function(e){f(parseFloat(e.target.value))}(e)}}),o.createElement("span",null,"%")):null,!a>=1&&!i>=1?o.createElement(o.Fragment,null,o.createElement("input",{type:"text",value:n.igst,className:"focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 font-semibold w-1/2",onChange:function(e){return v(e)}}),o.createElement("input",{type:"number",value:p,min:"0",className:"focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 font-semibold w-1/4 text-center",onChange:function(e){return function(e){g(parseFloat(e.target.value))}(e)}}),o.createElement("span",null,"%")):null,o.createElement("input",{type:"text",value:n.inv_tot,className:"focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 font-semibold",onChange:function(e){return v(e)}})),o.createElement("div",{className:"col-span-3 text-right"},o.createElement("p",{className:""},e.currency," ",parseFloat(e.total).toFixed(2)),!p>=1?o.createElement(o.Fragment,null,o.createElement("p",null,e.currency," ",y),o.createElement("p",{className:""},e.currency," ",d," ")):null,!a>=1&&!i>=1?o.createElement(o.Fragment,null,o.createElement("p",{className:""},e.currency," ",h)):null,o.createElement("p",null,e.currency," ",parseFloat(parseFloat(y)+parseFloat(e.total)+parseFloat(d)+parseFloat(h)).toFixed(2)))),o.createElement("input",{type:"text",className:"focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 text-md font-semibold mb-2",value:"Bank Details",onChange:function(e){return v(e)}}),o.createElement("div",{className:"grid grid-cols-12 text-sm mb-10"},o.createElement("div",{className:"col-span-3 w-full "},o.createElement("input",{type:"text",value:n.l_acc_name,className:"focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100",onChange:function(e){return v(e)}}),o.createElement("input",{type:"text",value:n.l_bank_name,className:"focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100",onChange:function(e){return v(e)}}),o.createElement("input",{type:"text",value:n.l_acc_no,className:"focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100",onChange:function(e){return v(e)}}),o.createElement("input",{type:"text",value:n.l_ifsc,className:"focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100",onChange:function(e){return v(e)}})),o.createElement("div",{className:"col-span-3  w-full"},o.createElement("input",{type:"text",value:n.name,className:" w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100",onChange:function(e){return v(e)}}),o.createElement("input",{type:"text",value:n.bank,className:"w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100",onChange:function(e){return v(e)}}),o.createElement("input",{type:"text",value:n.acc_no,className:"w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100",onChange:function(e){return v(e)}}),o.createElement("input",{type:"text",value:n.ifsc,className:"w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100",onChange:function(e){return v(e)}})))))},m=o.createRef(),p=function(e){var t=(0,o.useState)(0),n=t[0],r=t[1],l=(0,o.useState)([{item_desc:"Monthly charges towards development of digital suite of products",item_hsn_code:"998314",item_amount:888888}]),a=l[0],u=l[1],c=(0,o.useState)({description:"DESCRIPTION",hsn_code:"HSN CODE",amount:"AMOUNT"}),i=c[0],s=c[1],p=function(e,t){s((function(n){var o;return Object.assign({},n,((o={})[e]=t,o))}))},g=function(e,t,n){u((function(o){var l,u=o;return u[e][t]=n,l=0,a.forEach((function(e){console.log(e),l+=parseFloat(e.item_amount)})),console.log(l),r(l),u}))};return o.createElement(o.Fragment,null,o.createElement("div",{className:"mb-4"},o.createElement("div",{className:"text-gray-500 mb-6",ref:m},o.createElement("div",{className:"grid grid-cols-12 mb-2"},o.createElement("input",{type:"text",value:i.description,className:"col-span-6 mr-2 focus:outline-none font-semibold text-sm  hover:bg-yellow-100 focus:bg-yellow-100",onChange:function(e){var t;return p("description",null==e||null===(t=e.target)||void 0===t?void 0:t.value)}}),o.createElement("input",{type:"text",value:i.hsn_code,className:"col-span-3 mr-2 text-right focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 font-semibold text-sm",onChange:function(e){var t;return p("hsn_code",null==e||null===(t=e.target)||void 0===t?void 0:t.value)}}),o.createElement("input",{type:"text",value:i.amount,className:"col-span-3 text-right focus:outline-none font-semibold text-sm hover:bg-yellow-100 focus:bg-yellow-100",onChange:function(e){var t;return p("amount",null==e||null===(t=e.target)||void 0===t?void 0:t.value)}})),a.map((function(e,t){return o.createElement("div",{key:"row-"+t,className:"grid grid-cols-12 mb-2"},o.createElement("textarea",{type:"text",defaultValue:e.item_desc,className:"mr-2 col-span-6 text-sm  focus:outline-none  hover:bg-yellow-100 focus:bg-yellow-100",onChange:function(e){var n;return g(t,"item_desc",null==e||null===(n=e.target)||void 0===n?void 0:n.value)}}),o.createElement("input",{type:"text",defaultValue:e.item_hsn_code,className:"focus:outline-none mr-2 h-5 hover:bg-yellow-100  focus:bg-yellow-100 col-span-3 text-sm text-right",onChange:function(e){var n;return g(t,"item_hsn_code",null==e||null===(n=e.target)||void 0===n?void 0:n.value)}}),o.createElement("input",{type:"amount",defaultValue:e.item_amount,className:"focus:outline-none h-5  hover:bg-yellow-100 focus:bg-yellow-100 col-span-3 text-sm text-right",onChange:function(e){var n;return g(t,"item_amount",null==e||null===(n=e.target)||void 0===n?void 0:n.value)}}))}))),o.createElement("span",{className:"cursor-pointer font-semibold text-sm text-blue-800",onClick:function(){u((function(e){return e.concat({item_desc:"New row item",item_hsn_code:"998314",item_amount:0})}))}},"+ Add Item to the list")),o.createElement(f,{total:parseFloat(n),currency:e.currency}))},g=n(5985),v=o.createRef(),d=function(){var e=(0,o.useState)({title:"Invoice",name:"Pentafox Texhnologies Private Limited",address:"59, Journalist Colony, Thiruvanmiyur",city:"Chennai - 600041",gst:"GSTIN - 33AAICP5142K1ZC",state:"STATE - 33 - Tamil Nadu",pan:"PAN - AAICP5142K"}),t=e[0],n=e[1],c=(0,o.useState)("₹"),s=c[0],f=c[1],m=(0,o.useState)({file:null}),d=m[0],y=m[1],h=(0,o.useState)(!1),b=h[0],x=h[1],w=function(e){n(e.target.value)};return o.createElement(o.Fragment,null,o.createElement("div",{className:"bg-gray-200 min-h-screen min-w-screen"},o.createElement("div",{className:""},o.createElement(u,null)),o.createElement("div",{className:"lg:flex lg:justify-center lg:w-8/12   lg:mx-auto"},o.createElement("div",{className:"lg:block hidden "},o.createElement(g.Z,{targetRef:v,filename:"invoice.pdf",size:"A4"},(function(e){var t=e.toPdf;return o.createElement("div",{className:"mt-20 w-8 mr-12"},o.createElement(r.G,{onClick:t,className:" fixed cursor-pointer",icon:l.cwv,size:"3x",color:"gray"}))}))),o.createElement("div",{className:" bg-white lg:mt-20 lg:p-12 p-4 min-h-screen"},o.createElement("div",{className:"text-center mb-4 lg:mt-0 mt-8",ref:v},o.createElement("input",{className:"focus:outline-none mx-auto text-xl font-semibold text-center text-gray-700  hover:bg-yellow-100 focus:bg-yellow-100",value:t.title,type:"text",placeholder:t.title,onChange:function(e){return w(e)}})),o.createElement("div",{className:"flex mb-8",ref:v},o.createElement("div",{className:""},o.createElement("input",{className:"font-semibold w-full focus:outline-none text-gray-600 lg:text-xl text-sm hover:bg-yellow-100 focus:bg-yellow-100",value:t.name,type:"text",onChange:function(e){return w(e)}}),o.createElement("input",{className:"font-medium w-full text-xs focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100",type:"address",value:t.address,placeholder:"address line 1",onChange:function(e){return w(e)}}),o.createElement("input",{className:"font-medium w-full text-xs focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100",type:"address",value:t.city,placeholder:"address line 2",onChange:function(e){return w(e)}}),o.createElement("input",{className:"font-medium w-full text-xs focus:outline-none leading-none hover:bg-yellow-100 focus:bg-yellow-100",type:"text",value:t.gst,onChange:function(e){return w(e)}}),o.createElement("input",{className:"font-medium text-xs w-full focus:outline-none leading-none hover:bg-yellow-100 focus:bg-yellow-100",type:"text",value:t.state,onChange:function(e){return w(e)}}),o.createElement("input",{className:"font-medium text-xs w-full focus:outline-none leading-none hover:bg-yellow-100 focus:bg-yellow-100",type:"text",value:t.pan,onChange:function(e){return w(e)}})),o.createElement("div",null,o.createElement("div",{className:"lg:w-24 mt-8 w-20 m-auto cursor-pointer"},b&&o.createElement("p",{className:"text-red-500 text-xs"},"File not supported"),o.createElement("div",null,o.createElement(o.Fragment,null,o.createElement("label",{htmlFor:"fileUpload",className:""},d.file?o.createElement("img",{src:d.file,alt:"could not be stored"}):o.createElement("img",{src:a.Z,alt:"alter",className:""})," "),o.createElement("input",{type:"file",id:"fileUpload",onChange:function(e){var t=e.target.files[0];if(t&&["image/png","image/jpeg","image/jpg"].includes(t.type)){var n=new FileReader;n.onloadend=function(){y({file:URL.createObjectURL(t)})},n.readAsDataURL(t)}else x(!0)},className:"hidden"})))))),o.createElement(i,null),o.createElement(p,{currency:s})),o.createElement("div",{className:"w-8 ml-6 mt-20 lg:block hidden "},o.createElement("select",{className:"fixed p-1 text-2xl focus:outline-none w-12",onBlur:function(e){return function(e){f(e.target.value)}(e)}},o.createElement("option",null,"₹"),o.createElement("option",null,"$"),o.createElement("option",null,"£"),o.createElement("option",null,"€"),o.createElement("option",null,"¥"))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-e44303c99fca5f41fa70.js.map
(function(t){function e(e){for(var r,c,i=e[0],s=e[1],u=e[2],f=0,d=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0fe1":function(t,e,n){"use strict";var r=n("907a"),o=n.n(r);o.a},"1b74":function(t,e,n){"use strict";var r=n("7e4d"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("TheNavigation"),n("router-view")],1)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("HOME")]),n("router-link",{attrs:{to:"/calculation"}},[t._v("CALCULATION")])],1)},i=[],s=(n("0fe1"),n("2877")),u={},l=Object(s["a"])(u,c,i,!1,null,"4cb3368b",null),f=l.exports,d={components:{TheNavigation:f}},p=d,v=(n("5c0b"),Object(s["a"])(p,o,a,!1,null,null,null)),h=v.exports,m=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("NoC")]),n("InputForm")],1)},y=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text"},domProps:{value:t.query},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)},input:function(e){e.target.composing||(t.query=e.target.value)}}}),n("button",{on:{click:t.submit}},[t._v("START")])])},g=[],x={data:function(){return{query:""}},methods:{submit:function(){this.$root.$emit("data-out",this.query),this.$router.push("/calculation"),this.$event.target.nextElementSibling.focus()}}},O=x,k=(n("1b74"),Object(s["a"])(O,_,g,!1,null,"4b8cb870",null)),w=k.exports,j={components:{InputForm:w},data:function(){return{newData:""}}},C=j,$=(n("6aaa"),Object(s["a"])(C,b,y,!1,null,"fd46d398",null)),M=$.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calculation"},[n("div",{staticClass:"area"},t._l(t.items,(function(t){return n("NumBlock",{key:t.id})})),1)])},P=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blok"},[n("p",[t._v(t._s(t.first)+" + "+t._s(t.second)+" =")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"result",class:{correctClass:t.classGreen,wrongClass:t.classRed},attrs:{type:"text"},domProps:{value:t.val},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.validation(e)},input:function(e){e.target.composing||(t.val=e.target.value)}}})])},R=[],T={data:function(){return{val:"",first:2,second:6,calcRes:"",classGreen:!1,classRed:!1}},methods:{randomCalc:function(){this.first=Math.floor(10*Math.random()),this.second=Math.floor(10*Math.random()),this.calcRes=this.first+this.second},validation:function(){this.val==this.calcRes?(console.log("correct"),this.classGreen=!0,this.classRed=!1):(console.log("false"),this.classRed=!0,this.classGreen=!1)}},beforeMount:function(){this.randomCalc()}},S=T,q=(n("6130"),Object(s["a"])(S,N,R,!1,null,"43eaf9a6",null)),A=q.exports,G={components:{NumBlock:A},data:function(){return{items:[],max:6}},methods:{setArray:function(){for(var t=0;t<this.max;t++)this.items.push("x")}},beforeMount:function(){var t=this;this.$root.$on("data-out",(function(e){return t.max=e}))},mounted:function(){this.setArray()}},I=G,B=(n("cc09"),Object(s["a"])(I,E,P,!1,null,"8c72ee6e",null)),F=B.exports;r["a"].use(m["a"]);var J=[{path:"/",component:M},{path:"/calculation",component:F}],L=new m["a"]({routes:J}),D=L;r["a"].config.productionTip=!1,new r["a"]({router:D,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},6130:function(t,e,n){"use strict";var r=n("fe3d"),o=n.n(r);o.a},"6aaa":function(t,e,n){"use strict";var r=n("cc5a"),o=n.n(r);o.a},7993:function(t,e,n){},"7e4d":function(t,e,n){},"907a":function(t,e,n){},"9c0c":function(t,e,n){},cc09:function(t,e,n){"use strict";var r=n("7993"),o=n.n(r);o.a},cc5a:function(t,e,n){},fe3d:function(t,e,n){}});
//# sourceMappingURL=app.8d81a0e9.js.map
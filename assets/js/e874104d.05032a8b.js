/*! For license information please see e874104d.05032a8b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[652979],{603905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,y=f["".concat(i,".").concat(d)]||f[d]||s[d]||a;return t?n.createElement(y,c(c({ref:r},p),{},{components:t})):n.createElement(y,c({ref:r},p))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u[f]="string"==typeof e?e:o,c[1]=u;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},512655:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>u,default:()=>s,frontMatter:()=>c,metadata:()=>i,toc:()=>p});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const c={id:"plugin-adr-backend.createrouter",title:"createRouter()",description:"API reference for createRouter()"},u=void 0,i={unversionedId:"reference/plugin-adr-backend.createrouter",id:"reference/plugin-adr-backend.createrouter",title:"createRouter()",description:"API reference for createRouter()",source:"@site/../docs/reference/plugin-adr-backend.createrouter.md",sourceDirName:"reference",slug:"/reference/plugin-adr-backend.createrouter",permalink:"/docs/reference/plugin-adr-backend.createrouter",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-adr-backend.createrouter.md",tags:[],version:"current",frontMatter:{id:"plugin-adr-backend.createrouter",title:"createRouter()",description:"API reference for createRouter()"}},l={},p=[{value:"Parameters",id:"parameters",level:2}],f={toc:p};function s(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},f,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-adr-backend"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-adr-backend"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-adr-backend.createrouter"}),(0,n.kt)("inlineCode",{parentName:"a"},"createRouter"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"function createRouter(options: AdrRouterOptions): Promise<express.Router>;\n")),(0,n.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-adr-backend.adrrouteroptions"}),"AdrRouterOptions")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"Promise","<","express.Router",">"))}s.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var c,u,i=o(e),l=1;l<arguments.length;l++){for(var p in c=Object(arguments[l]))t.call(c,p)&&(i[p]=c[p]);if(r){u=r(c);for(var f=0;f<u.length;f++)n.call(c,u[f])&&(i[u[f]]=c[u[f]])}}return i}},541535:(e,r,t)=>{var n=t(862525),o=60103,a=60106;var c=60109,u=60110,i=60112;var l=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),c=f("react.provider"),u=f("react.context"),i=f("react.forward_ref"),f("react.suspense"),l=f("react.memo"),p=f("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function m(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||y}function g(){}function h(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var v=h.prototype=new g;v.constructor=h,n(v,m.prototype),v.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,a={},c=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(c=""+r.key),r)O.call(r,n)&&!j.hasOwnProperty(n)&&(a[n]=r[n]);var i=arguments.length-2;if(1===i)a.children=t;else if(1<i){for(var l=Array(i),p=0;p<i;p++)l[p]=arguments[p+2];a.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function N(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,c){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case a:i=!0}}if(i)return c=c(i=e),e=""===n?"."+N(i,0):n,Array.isArray(c)?(t="",null!=e&&(t=e.replace(_,"$&/")+"/"),S(c,r,t,"",(function(e){return e}))):null!=c&&(P(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,t+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(_,"$&/")+"/")+e)),r.push(c)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var p=n+N(u=e[l],l);i+=S(u,r,t,p,c)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),l=0;!(u=e.next()).done;)i+=S(u=u.value,r,t,p=n+N(u,l++),c);else if("object"===u)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}function R(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function x(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function C(){var e=E.current;if(null===e)throw Error(d(321));return e}},827378:(e,r,t)=>{t(541535)}}]);
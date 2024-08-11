function RE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var bE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function PE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ag={exports:{}},va={},Og={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oo=Symbol.for("react.element"),AE=Symbol.for("react.portal"),OE=Symbol.for("react.fragment"),LE=Symbol.for("react.strict_mode"),DE=Symbol.for("react.profiler"),ME=Symbol.for("react.provider"),FE=Symbol.for("react.context"),jE=Symbol.for("react.forward_ref"),UE=Symbol.for("react.suspense"),zE=Symbol.for("react.memo"),WE=Symbol.for("react.lazy"),zf=Symbol.iterator;function BE(t){return t===null||typeof t!="object"?null:(t=zf&&t[zf]||t["@@iterator"],typeof t=="function"?t:null)}var Lg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dg=Object.assign,Mg={};function Oi(t,e,n){this.props=t,this.context=e,this.refs=Mg,this.updater=n||Lg}Oi.prototype.isReactComponent={};Oi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Oi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fg(){}Fg.prototype=Oi.prototype;function Rd(t,e,n){this.props=t,this.context=e,this.refs=Mg,this.updater=n||Lg}var bd=Rd.prototype=new Fg;bd.constructor=Rd;Dg(bd,Oi.prototype);bd.isPureReactComponent=!0;var Wf=Array.isArray,jg=Object.prototype.hasOwnProperty,Pd={current:null},Ug={key:!0,ref:!0,__self:!0,__source:!0};function zg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jg.call(e,r)&&!Ug.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:oo,type:t,key:s,ref:o,props:i,_owner:Pd.current}}function VE(t,e){return{$$typeof:oo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===oo}function HE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bf=/\/+/g;function cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?HE(""+t.key):e.toString(36)}function Zo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case oo:case AE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+cc(o,0):r,Wf(i)?(n="",t!=null&&(n=t.replace(Bf,"$&/")+"/"),Zo(i,e,n,"",function(c){return c})):i!=null&&(Ad(i)&&(i=VE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Bf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Wf(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+cc(s,l);o+=Zo(s,e,n,a,i)}else if(a=BE(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+cc(s,l++),o+=Zo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function No(t,e,n){if(t==null)return t;var r=[],i=0;return Zo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function GE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xe={current:null},el={transition:null},KE={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:el,ReactCurrentOwner:Pd};q.Children={map:No,forEach:function(t,e,n){No(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return No(t,function(){e++}),e},toArray:function(t){return No(t,function(e){return e})||[]},only:function(t){if(!Ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=Oi;q.Fragment=OE;q.Profiler=DE;q.PureComponent=Rd;q.StrictMode=LE;q.Suspense=UE;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KE;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Dg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)jg.call(e,a)&&!Ug.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:oo,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:FE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ME,_context:t},t.Consumer=t};q.createElement=zg;q.createFactory=function(t){var e=zg.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:jE,render:t}};q.isValidElement=Ad;q.lazy=function(t){return{$$typeof:WE,_payload:{_status:-1,_result:t},_init:GE}};q.memo=function(t,e){return{$$typeof:zE,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=el.transition;el.transition={};try{t()}finally{el.transition=e}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(t,e){return Xe.current.useCallback(t,e)};q.useContext=function(t){return Xe.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return Xe.current.useDeferredValue(t)};q.useEffect=function(t,e){return Xe.current.useEffect(t,e)};q.useId=function(){return Xe.current.useId()};q.useImperativeHandle=function(t,e,n){return Xe.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return Xe.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return Xe.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return Xe.current.useMemo(t,e)};q.useReducer=function(t,e,n){return Xe.current.useReducer(t,e,n)};q.useRef=function(t){return Xe.current.useRef(t)};q.useState=function(t){return Xe.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return Xe.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return Xe.current.useTransition()};q.version="18.2.0";Og.exports=q;var C=Og.exports;const Ht=PE(C),qE=RE({__proto__:null,default:Ht},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YE=C,$E=Symbol.for("react.element"),QE=Symbol.for("react.fragment"),XE=Object.prototype.hasOwnProperty,JE=YE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ZE={key:!0,ref:!0,__self:!0,__source:!0};function Wg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)XE.call(e,r)&&!ZE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:$E,type:t,key:s,ref:o,props:i,_owner:JE.current}}va.Fragment=QE;va.jsx=Wg;va.jsxs=Wg;Ag.exports=va;var f=Ag.exports,su={},Bg={exports:{}},mt={},Vg={exports:{}},Hg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,F){var z=T.length;T.push(F);e:for(;0<z;){var M=z-1>>>1,V=T[M];if(0<i(V,F))T[M]=F,T[z]=V,z=M;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var F=T[0],z=T.pop();if(z!==F){T[0]=z;e:for(var M=0,V=T.length,ke=V>>>1;M<ke;){var ie=2*(M+1)-1,xe=T[ie],Ge=ie+1,Nt=T[Ge];if(0>i(xe,z))Ge<V&&0>i(Nt,xe)?(T[M]=Nt,T[Ge]=z,M=Ge):(T[M]=xe,T[ie]=z,M=ie);else if(Ge<V&&0>i(Nt,z))T[M]=Nt,T[Ge]=z,M=Ge;else break e}}return F}function i(T,F){var z=T.sortIndex-F.sortIndex;return z!==0?z:T.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],c=[],d=1,u=null,h=3,v=!1,_=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var F=n(c);F!==null;){if(F.callback===null)r(c);else if(F.startTime<=T)r(c),F.sortIndex=F.expirationTime,e(a,F);else break;F=n(c)}}function w(T){if(E=!1,g(T),!_)if(n(a)!==null)_=!0,$(I);else{var F=n(c);F!==null&&Ee(w,F.startTime-T)}}function I(T,F){_=!1,E&&(E=!1,m(A),A=-1),v=!0;var z=h;try{for(g(F),u=n(a);u!==null&&(!(u.expirationTime>F)||T&&!Y());){var M=u.callback;if(typeof M=="function"){u.callback=null,h=u.priorityLevel;var V=M(u.expirationTime<=F);F=t.unstable_now(),typeof V=="function"?u.callback=V:u===n(a)&&r(a),g(F)}else r(a);u=n(a)}if(u!==null)var ke=!0;else{var ie=n(c);ie!==null&&Ee(w,ie.startTime-F),ke=!1}return ke}finally{u=null,h=z,v=!1}}var x=!1,R=null,A=-1,b=5,j=-1;function Y(){return!(t.unstable_now()-j<b)}function ae(){if(R!==null){var T=t.unstable_now();j=T;var F=!0;try{F=R(!0,T)}finally{F?Oe():(x=!1,R=null)}}else x=!1}var Oe;if(typeof p=="function")Oe=function(){p(ae)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,Ze=Le.port2;Le.port1.onmessage=ae,Oe=function(){Ze.postMessage(null)}}else Oe=function(){S(ae,0)};function $(T){R=T,x||(x=!0,Oe())}function Ee(T,F){A=S(function(){T(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){_||v||(_=!0,$(I))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(T){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var z=h;h=F;try{return T()}finally{h=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,F){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var z=h;h=T;try{return F()}finally{h=z}},t.unstable_scheduleCallback=function(T,F,z){var M=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?M+z:M):z=M,T){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=z+V,T={id:d++,callback:F,priorityLevel:T,startTime:z,expirationTime:V,sortIndex:-1},z>M?(T.sortIndex=z,e(c,T),n(a)===null&&T===n(c)&&(E?(m(A),A=-1):E=!0,Ee(w,z-M))):(T.sortIndex=V,e(a,T),_||v||(_=!0,$(I))),T},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(T){var F=h;return function(){var z=h;h=F;try{return T.apply(this,arguments)}finally{h=z}}}})(Hg);Vg.exports=Hg;var e1=Vg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg=C,pt=e1;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kg=new Set,xs={};function Ur(t,e){yi(t,e),yi(t+"Capture",e)}function yi(t,e){for(xs[t]=e,t=0;t<e.length;t++)Kg.add(e[t])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=Object.prototype.hasOwnProperty,t1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vf={},Hf={};function n1(t){return ou.call(Hf,t)?!0:ou.call(Vf,t)?!1:t1.test(t)?Hf[t]=!0:(Vf[t]=!0,!1)}function r1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function i1(t,e,n,r){if(e===null||typeof e>"u"||r1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Je(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){je[t]=new Je(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];je[e]=new Je(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){je[t]=new Je(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){je[t]=new Je(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){je[t]=new Je(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){je[t]=new Je(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){je[t]=new Je(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){je[t]=new Je(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){je[t]=new Je(t,5,!1,t.toLowerCase(),null,!1,!1)});var Od=/[\-:]([a-z])/g;function Ld(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Od,Ld);je[e]=new Je(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Od,Ld);je[e]=new Je(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Od,Ld);je[e]=new Je(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){je[t]=new Je(t,1,!1,t.toLowerCase(),null,!1,!1)});je.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){je[t]=new Je(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dd(t,e,n,r){var i=je.hasOwnProperty(e)?je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(i1(e,n,i,r)&&(n=null),r||i===null?n1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var yn=Gg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),Md=Symbol.for("react.strict_mode"),lu=Symbol.for("react.profiler"),qg=Symbol.for("react.provider"),Yg=Symbol.for("react.context"),Fd=Symbol.for("react.forward_ref"),au=Symbol.for("react.suspense"),cu=Symbol.for("react.suspense_list"),jd=Symbol.for("react.memo"),Sn=Symbol.for("react.lazy"),$g=Symbol.for("react.offscreen"),Gf=Symbol.iterator;function Gi(t){return t===null||typeof t!="object"?null:(t=Gf&&t[Gf]||t["@@iterator"],typeof t=="function"?t:null)}var de=Object.assign,uc;function is(t){if(uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uc=e&&e[1]||""}return`
`+uc+t}var dc=!1;function hc(t,e){if(!t||dc)return"";dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?is(t):""}function s1(t){switch(t.tag){case 5:return is(t.type);case 16:return is("Lazy");case 13:return is("Suspense");case 19:return is("SuspenseList");case 0:case 2:case 15:return t=hc(t.type,!1),t;case 11:return t=hc(t.type.render,!1),t;case 1:return t=hc(t.type,!0),t;default:return""}}function uu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $r:return"Fragment";case Yr:return"Portal";case lu:return"Profiler";case Md:return"StrictMode";case au:return"Suspense";case cu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yg:return(t.displayName||"Context")+".Consumer";case qg:return(t._context.displayName||"Context")+".Provider";case Fd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jd:return e=t.displayName||null,e!==null?e:uu(t.type)||"Memo";case Sn:e=t._payload,t=t._init;try{return uu(t(e))}catch{}}return null}function o1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uu(e);case 8:return e===Md?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function l1(t){var e=Qg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bo(t){t._valueTracker||(t._valueTracker=l1(t))}function Xg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Qg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function du(t,e){var n=e.checked;return de({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=qn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jg(t,e){e=e.checked,e!=null&&Dd(t,"checked",e,!1)}function hu(t,e){Jg(t,e);var n=qn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fu(t,e.type,n):e.hasOwnProperty("defaultValue")&&fu(t,e.type,qn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fu(t,e,n){(e!=="number"||ml(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ss=Array.isArray;function li(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+qn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function pu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return de({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(ss(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qn(n)}}function Zg(t,e){var n=qn(e.value),r=qn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function $f(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ev(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ev(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Po,tv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Po=Po||document.createElement("div"),Po.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Po.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ns(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var us={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},a1=["Webkit","ms","Moz","O"];Object.keys(us).forEach(function(t){a1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),us[e]=us[t]})});function nv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||us.hasOwnProperty(t)&&us[t]?(""+e).trim():e+"px"}function rv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var c1=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gu(t,e){if(e){if(c1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function vu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yu=null;function Ud(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _u=null,ai=null,ci=null;function Qf(t){if(t=co(t)){if(typeof _u!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Sa(e),_u(t.stateNode,t.type,e))}}function iv(t){ai?ci?ci.push(t):ci=[t]:ai=t}function sv(){if(ai){var t=ai,e=ci;if(ci=ai=null,Qf(t),e)for(t=0;t<e.length;t++)Qf(e[t])}}function ov(t,e){return t(e)}function lv(){}var fc=!1;function av(t,e,n){if(fc)return t(e,n);fc=!0;try{return ov(t,e,n)}finally{fc=!1,(ai!==null||ci!==null)&&(lv(),sv())}}function Rs(t,e){var n=t.stateNode;if(n===null)return null;var r=Sa(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var wu=!1;if(hn)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){wu=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{wu=!1}function u1(t,e,n,r,i,s,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ds=!1,gl=null,vl=!1,Eu=null,d1={onError:function(t){ds=!0,gl=t}};function h1(t,e,n,r,i,s,o,l,a){ds=!1,gl=null,u1.apply(d1,arguments)}function f1(t,e,n,r,i,s,o,l,a){if(h1.apply(this,arguments),ds){if(ds){var c=gl;ds=!1,gl=null}else throw Error(k(198));vl||(vl=!0,Eu=c)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xf(t){if(zr(t)!==t)throw Error(k(188))}function p1(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Xf(i),t;if(s===r)return Xf(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function uv(t){return t=p1(t),t!==null?dv(t):null}function dv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dv(t);if(e!==null)return e;t=t.sibling}return null}var hv=pt.unstable_scheduleCallback,Jf=pt.unstable_cancelCallback,m1=pt.unstable_shouldYield,g1=pt.unstable_requestPaint,ye=pt.unstable_now,v1=pt.unstable_getCurrentPriorityLevel,zd=pt.unstable_ImmediatePriority,fv=pt.unstable_UserBlockingPriority,yl=pt.unstable_NormalPriority,y1=pt.unstable_LowPriority,pv=pt.unstable_IdlePriority,ya=null,Kt=null;function _1(t){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(ya,t,void 0,(t.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:S1,w1=Math.log,E1=Math.LN2;function S1(t){return t>>>=0,t===0?32:31-(w1(t)/E1|0)|0}var Ao=64,Oo=4194304;function os(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _l(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=os(l):(s&=o,s!==0&&(r=os(s)))}else o=n&~i,o!==0?r=os(o):s!==0&&(r=os(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Dt(e),i=1<<n,r|=t[n],e&=~i;return r}function C1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Dt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=C1(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Su(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mv(){var t=Ao;return Ao<<=1,!(Ao&4194240)&&(Ao=64),t}function pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function lo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Dt(e),t[e]=n}function T1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Dt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Wd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function gv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vv,Bd,yv,_v,wv,Cu=!1,Lo=[],Ln=null,Dn=null,Mn=null,bs=new Map,Ps=new Map,In=[],k1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zf(t,e){switch(t){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":bs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ps.delete(e.pointerId)}}function qi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=co(e),e!==null&&Bd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function x1(t,e,n,r,i){switch(e){case"focusin":return Ln=qi(Ln,t,e,n,r,i),!0;case"dragenter":return Dn=qi(Dn,t,e,n,r,i),!0;case"mouseover":return Mn=qi(Mn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return bs.set(s,qi(bs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ps.set(s,qi(Ps.get(s)||null,t,e,n,r,i)),!0}return!1}function Ev(t){var e=fr(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=cv(n),e!==null){t.blockedOn=e,wv(t.priority,function(){yv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Iu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);yu=r,n.target.dispatchEvent(r),yu=null}else return e=co(n),e!==null&&Bd(e),t.blockedOn=n,!1;e.shift()}return!0}function ep(t,e,n){tl(t)&&n.delete(e)}function N1(){Cu=!1,Ln!==null&&tl(Ln)&&(Ln=null),Dn!==null&&tl(Dn)&&(Dn=null),Mn!==null&&tl(Mn)&&(Mn=null),bs.forEach(ep),Ps.forEach(ep)}function Yi(t,e){t.blockedOn===e&&(t.blockedOn=null,Cu||(Cu=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,N1)))}function As(t){function e(i){return Yi(i,t)}if(0<Lo.length){Yi(Lo[0],t);for(var n=1;n<Lo.length;n++){var r=Lo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ln!==null&&Yi(Ln,t),Dn!==null&&Yi(Dn,t),Mn!==null&&Yi(Mn,t),bs.forEach(e),Ps.forEach(e),n=0;n<In.length;n++)r=In[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<In.length&&(n=In[0],n.blockedOn===null);)Ev(n),n.blockedOn===null&&In.shift()}var ui=yn.ReactCurrentBatchConfig,wl=!0;function R1(t,e,n,r){var i=J,s=ui.transition;ui.transition=null;try{J=1,Vd(t,e,n,r)}finally{J=i,ui.transition=s}}function b1(t,e,n,r){var i=J,s=ui.transition;ui.transition=null;try{J=4,Vd(t,e,n,r)}finally{J=i,ui.transition=s}}function Vd(t,e,n,r){if(wl){var i=Iu(t,e,n,r);if(i===null)Ic(t,e,r,El,n),Zf(t,r);else if(x1(i,t,e,n,r))r.stopPropagation();else if(Zf(t,r),e&4&&-1<k1.indexOf(t)){for(;i!==null;){var s=co(i);if(s!==null&&vv(s),s=Iu(t,e,n,r),s===null&&Ic(t,e,r,El,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ic(t,e,r,null,n)}}var El=null;function Iu(t,e,n,r){if(El=null,t=Ud(r),t=fr(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=cv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return El=t,null}function Sv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(v1()){case zd:return 1;case fv:return 4;case yl:case y1:return 16;case pv:return 536870912;default:return 16}default:return 16}}var bn=null,Hd=null,nl=null;function Cv(){if(nl)return nl;var t,e=Hd,n=e.length,r,i="value"in bn?bn.value:bn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return nl=i.slice(t,1<r?1-r:void 0)}function rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Do(){return!0}function tp(){return!1}function gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Do:tp,this.isPropagationStopped=tp,this}return de(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),e}var Li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gd=gt(Li),ao=de({},Li,{view:0,detail:0}),P1=gt(ao),mc,gc,$i,_a=de({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$i&&($i&&t.type==="mousemove"?(mc=t.screenX-$i.screenX,gc=t.screenY-$i.screenY):gc=mc=0,$i=t),mc)},movementY:function(t){return"movementY"in t?t.movementY:gc}}),np=gt(_a),A1=de({},_a,{dataTransfer:0}),O1=gt(A1),L1=de({},ao,{relatedTarget:0}),vc=gt(L1),D1=de({},Li,{animationName:0,elapsedTime:0,pseudoElement:0}),M1=gt(D1),F1=de({},Li,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),j1=gt(F1),U1=de({},Li,{data:0}),rp=gt(U1),z1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B1[t])?!!e[t]:!1}function Kd(){return V1}var H1=de({},ao,{key:function(t){if(t.key){var e=z1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?W1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kd,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),G1=gt(H1),K1=de({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=gt(K1),q1=de({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kd}),Y1=gt(q1),$1=de({},Li,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q1=gt($1),X1=de({},_a,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),J1=gt(X1),Z1=[9,13,27,32],qd=hn&&"CompositionEvent"in window,hs=null;hn&&"documentMode"in document&&(hs=document.documentMode);var eS=hn&&"TextEvent"in window&&!hs,Iv=hn&&(!qd||hs&&8<hs&&11>=hs),sp=" ",op=!1;function Tv(t,e){switch(t){case"keyup":return Z1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function tS(t,e){switch(t){case"compositionend":return kv(e);case"keypress":return e.which!==32?null:(op=!0,sp);case"textInput":return t=e.data,t===sp&&op?null:t;default:return null}}function nS(t,e){if(Qr)return t==="compositionend"||!qd&&Tv(t,e)?(t=Cv(),nl=Hd=bn=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Iv&&e.locale!=="ko"?null:e.data;default:return null}}var rS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rS[t.type]:e==="textarea"}function xv(t,e,n,r){iv(r),e=Sl(e,"onChange"),0<e.length&&(n=new Gd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fs=null,Os=null;function iS(t){jv(t,0)}function wa(t){var e=Zr(t);if(Xg(e))return t}function sS(t,e){if(t==="change")return e}var Nv=!1;if(hn){var yc;if(hn){var _c="oninput"in document;if(!_c){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),_c=typeof ap.oninput=="function"}yc=_c}else yc=!1;Nv=yc&&(!document.documentMode||9<document.documentMode)}function cp(){fs&&(fs.detachEvent("onpropertychange",Rv),Os=fs=null)}function Rv(t){if(t.propertyName==="value"&&wa(Os)){var e=[];xv(e,Os,t,Ud(t)),av(iS,e)}}function oS(t,e,n){t==="focusin"?(cp(),fs=e,Os=n,fs.attachEvent("onpropertychange",Rv)):t==="focusout"&&cp()}function lS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wa(Os)}function aS(t,e){if(t==="click")return wa(e)}function cS(t,e){if(t==="input"||t==="change")return wa(e)}function uS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jt=typeof Object.is=="function"?Object.is:uS;function Ls(t,e){if(jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ou.call(e,i)||!jt(t[i],e[i]))return!1}return!0}function up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dp(t,e){var n=up(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=up(n)}}function bv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Pv(){for(var t=window,e=ml();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ml(t.document)}return e}function Yd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dS(t){var e=Pv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bv(n.ownerDocument.documentElement,n)){if(r!==null&&Yd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=dp(n,s);var o=dp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hS=hn&&"documentMode"in document&&11>=document.documentMode,Xr=null,Tu=null,ps=null,ku=!1;function hp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ku||Xr==null||Xr!==ml(r)||(r=Xr,"selectionStart"in r&&Yd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ps&&Ls(ps,r)||(ps=r,r=Sl(Tu,"onSelect"),0<r.length&&(e=new Gd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Xr)))}function Mo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Jr={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},wc={},Av={};hn&&(Av=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function Ea(t){if(wc[t])return wc[t];if(!Jr[t])return t;var e=Jr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Av)return wc[t]=e[n];return t}var Ov=Ea("animationend"),Lv=Ea("animationiteration"),Dv=Ea("animationstart"),Mv=Ea("transitionend"),Fv=new Map,fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jn(t,e){Fv.set(t,e),Ur(e,[t])}for(var Ec=0;Ec<fp.length;Ec++){var Sc=fp[Ec],fS=Sc.toLowerCase(),pS=Sc[0].toUpperCase()+Sc.slice(1);Jn(fS,"on"+pS)}Jn(Ov,"onAnimationEnd");Jn(Lv,"onAnimationIteration");Jn(Dv,"onAnimationStart");Jn("dblclick","onDoubleClick");Jn("focusin","onFocus");Jn("focusout","onBlur");Jn(Mv,"onTransitionEnd");yi("onMouseEnter",["mouseout","mouseover"]);yi("onMouseLeave",["mouseout","mouseover"]);yi("onPointerEnter",["pointerout","pointerover"]);yi("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));function pp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,f1(r,e,void 0,t),t.currentTarget=null}function jv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;pp(i,l,c),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;pp(i,l,c),s=a}}}if(vl)throw t=Eu,vl=!1,Eu=null,t}function se(t,e){var n=e[Pu];n===void 0&&(n=e[Pu]=new Set);var r=t+"__bubble";n.has(r)||(Uv(e,t,2,!1),n.add(r))}function Cc(t,e,n){var r=0;e&&(r|=4),Uv(n,t,r,e)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function Ds(t){if(!t[Fo]){t[Fo]=!0,Kg.forEach(function(n){n!=="selectionchange"&&(mS.has(n)||Cc(n,!1,t),Cc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fo]||(e[Fo]=!0,Cc("selectionchange",!1,e))}}function Uv(t,e,n,r){switch(Sv(e)){case 1:var i=R1;break;case 4:i=b1;break;default:i=Vd}n=i.bind(null,e,n,t),i=void 0,!wu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ic(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=fr(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}av(function(){var c=s,d=Ud(n),u=[];e:{var h=Fv.get(t);if(h!==void 0){var v=Gd,_=t;switch(t){case"keypress":if(rl(n)===0)break e;case"keydown":case"keyup":v=G1;break;case"focusin":_="focus",v=vc;break;case"focusout":_="blur",v=vc;break;case"beforeblur":case"afterblur":v=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=O1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Y1;break;case Ov:case Lv:case Dv:v=M1;break;case Mv:v=Q1;break;case"scroll":v=P1;break;case"wheel":v=J1;break;case"copy":case"cut":case"paste":v=j1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ip}var E=(e&4)!==0,S=!E&&t==="scroll",m=E?h!==null?h+"Capture":null:h;E=[];for(var p=c,g;p!==null;){g=p;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Rs(p,m),w!=null&&E.push(Ms(p,w,g)))),S)break;p=p.return}0<E.length&&(h=new v(h,_,null,n,d),u.push({event:h,listeners:E}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",h&&n!==yu&&(_=n.relatedTarget||n.fromElement)&&(fr(_)||_[fn]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=c,_=_?fr(_):null,_!==null&&(S=zr(_),_!==S||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=c),v!==_)){if(E=np,w="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(E=ip,w="onPointerLeave",m="onPointerEnter",p="pointer"),S=v==null?h:Zr(v),g=_==null?h:Zr(_),h=new E(w,p+"leave",v,n,d),h.target=S,h.relatedTarget=g,w=null,fr(d)===c&&(E=new E(m,p+"enter",_,n,d),E.target=g,E.relatedTarget=S,w=E),S=w,v&&_)t:{for(E=v,m=_,p=0,g=E;g;g=Kr(g))p++;for(g=0,w=m;w;w=Kr(w))g++;for(;0<p-g;)E=Kr(E),p--;for(;0<g-p;)m=Kr(m),g--;for(;p--;){if(E===m||m!==null&&E===m.alternate)break t;E=Kr(E),m=Kr(m)}E=null}else E=null;v!==null&&mp(u,h,v,E,!1),_!==null&&S!==null&&mp(u,S,_,E,!0)}}e:{if(h=c?Zr(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var I=sS;else if(lp(h))if(Nv)I=cS;else{I=lS;var x=oS}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=aS);if(I&&(I=I(t,c))){xv(u,I,n,d);break e}x&&x(t,h,c),t==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&fu(h,"number",h.value)}switch(x=c?Zr(c):window,t){case"focusin":(lp(x)||x.contentEditable==="true")&&(Xr=x,Tu=c,ps=null);break;case"focusout":ps=Tu=Xr=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,hp(u,n,d);break;case"selectionchange":if(hS)break;case"keydown":case"keyup":hp(u,n,d)}var R;if(qd)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Qr?Tv(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Iv&&n.locale!=="ko"&&(Qr||A!=="onCompositionStart"?A==="onCompositionEnd"&&Qr&&(R=Cv()):(bn=d,Hd="value"in bn?bn.value:bn.textContent,Qr=!0)),x=Sl(c,A),0<x.length&&(A=new rp(A,t,null,n,d),u.push({event:A,listeners:x}),R?A.data=R:(R=kv(n),R!==null&&(A.data=R)))),(R=eS?tS(t,n):nS(t,n))&&(c=Sl(c,"onBeforeInput"),0<c.length&&(d=new rp("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=R))}jv(u,e)})}function Ms(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Rs(t,n),s!=null&&r.unshift(Ms(t,s,i)),s=Rs(t,e),s!=null&&r.push(Ms(t,s,i))),t=t.return}return r}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=Rs(n,s),a!=null&&o.unshift(Ms(n,a,l))):i||(a=Rs(n,s),a!=null&&o.push(Ms(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gS=/\r\n?/g,vS=/\u0000|\uFFFD/g;function gp(t){return(typeof t=="string"?t:""+t).replace(gS,`
`).replace(vS,"")}function jo(t,e,n){if(e=gp(e),gp(t)!==e&&n)throw Error(k(425))}function Cl(){}var xu=null,Nu=null;function Ru(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bu=typeof setTimeout=="function"?setTimeout:void 0,yS=typeof clearTimeout=="function"?clearTimeout:void 0,vp=typeof Promise=="function"?Promise:void 0,_S=typeof queueMicrotask=="function"?queueMicrotask:typeof vp<"u"?function(t){return vp.resolve(null).then(t).catch(wS)}:bu;function wS(t){setTimeout(function(){throw t})}function Tc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),As(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);As(e)}function Fn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Di=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Di,Fs="__reactProps$"+Di,fn="__reactContainer$"+Di,Pu="__reactEvents$"+Di,ES="__reactListeners$"+Di,SS="__reactHandles$"+Di;function fr(t){var e=t[Vt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fn]||n[Vt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yp(t);t!==null;){if(n=t[Vt])return n;t=yp(t)}return e}t=n,n=t.parentNode}return null}function co(t){return t=t[Vt]||t[fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Sa(t){return t[Fs]||null}var Au=[],ei=-1;function Zn(t){return{current:t}}function oe(t){0>ei||(t.current=Au[ei],Au[ei]=null,ei--)}function re(t,e){ei++,Au[ei]=t.current,t.current=e}var Yn={},Ve=Zn(Yn),it=Zn(!1),Ir=Yn;function _i(t,e){var n=t.type.contextTypes;if(!n)return Yn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function st(t){return t=t.childContextTypes,t!=null}function Il(){oe(it),oe(Ve)}function _p(t,e,n){if(Ve.current!==Yn)throw Error(k(168));re(Ve,e),re(it,n)}function zv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,o1(t)||"Unknown",i));return de({},n,r)}function Tl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yn,Ir=Ve.current,re(Ve,t),re(it,it.current),!0}function wp(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=zv(t,e,Ir),r.__reactInternalMemoizedMergedChildContext=t,oe(it),oe(Ve),re(Ve,t)):oe(it),re(it,n)}var tn=null,Ca=!1,kc=!1;function Wv(t){tn===null?tn=[t]:tn.push(t)}function CS(t){Ca=!0,Wv(t)}function er(){if(!kc&&tn!==null){kc=!0;var t=0,e=J;try{var n=tn;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}tn=null,Ca=!1}catch(i){throw tn!==null&&(tn=tn.slice(t+1)),hv(zd,er),i}finally{J=e,kc=!1}}return null}var ti=[],ni=0,kl=null,xl=0,vt=[],yt=0,Tr=null,rn=1,sn="";function cr(t,e){ti[ni++]=xl,ti[ni++]=kl,kl=t,xl=e}function Bv(t,e,n){vt[yt++]=rn,vt[yt++]=sn,vt[yt++]=Tr,Tr=t;var r=rn;t=sn;var i=32-Dt(r)-1;r&=~(1<<i),n+=1;var s=32-Dt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,rn=1<<32-Dt(e)+i|n<<i|r,sn=s+t}else rn=1<<s|n<<i|r,sn=t}function $d(t){t.return!==null&&(cr(t,1),Bv(t,1,0))}function Qd(t){for(;t===kl;)kl=ti[--ni],ti[ni]=null,xl=ti[--ni],ti[ni]=null;for(;t===Tr;)Tr=vt[--yt],vt[yt]=null,sn=vt[--yt],vt[yt]=null,rn=vt[--yt],vt[yt]=null}var ht=null,ut=null,le=!1,At=null;function Vv(t,e){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ep(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ht=t,ut=Fn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ht=t,ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Tr!==null?{id:rn,overflow:sn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ht=t,ut=null,!0):!1;default:return!1}}function Ou(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lu(t){if(le){var e=ut;if(e){var n=e;if(!Ep(t,e)){if(Ou(t))throw Error(k(418));e=Fn(n.nextSibling);var r=ht;e&&Ep(t,e)?Vv(r,n):(t.flags=t.flags&-4097|2,le=!1,ht=t)}}else{if(Ou(t))throw Error(k(418));t.flags=t.flags&-4097|2,le=!1,ht=t}}}function Sp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ht=t}function Uo(t){if(t!==ht)return!1;if(!le)return Sp(t),le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ru(t.type,t.memoizedProps)),e&&(e=ut)){if(Ou(t))throw Hv(),Error(k(418));for(;e;)Vv(t,e),e=Fn(e.nextSibling)}if(Sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ut=Fn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ut=null}}else ut=ht?Fn(t.stateNode.nextSibling):null;return!0}function Hv(){for(var t=ut;t;)t=Fn(t.nextSibling)}function wi(){ut=ht=null,le=!1}function Xd(t){At===null?At=[t]:At.push(t)}var IS=yn.ReactCurrentBatchConfig;function bt(t,e){if(t&&t.defaultProps){e=de({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Nl=Zn(null),Rl=null,ri=null,Jd=null;function Zd(){Jd=ri=Rl=null}function eh(t){var e=Nl.current;oe(Nl),t._currentValue=e}function Du(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function di(t,e){Rl=t,Jd=ri=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nt=!0),t.firstContext=null)}function Ct(t){var e=t._currentValue;if(Jd!==t)if(t={context:t,memoizedValue:e,next:null},ri===null){if(Rl===null)throw Error(k(308));ri=t,Rl.dependencies={lanes:0,firstContext:t}}else ri=ri.next=t;return e}var pr=null;function th(t){pr===null?pr=[t]:pr.push(t)}function Gv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,th(e)):(n.next=i.next,i.next=n),e.interleaved=n,pn(t,r)}function pn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Cn=!1;function nh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function jn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,pn(t,n)}return i=r.interleaved,i===null?(e.next=e,th(r)):(e.next=i.next,i.next=e),r.interleaved=e,pn(t,n)}function il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wd(t,n)}}function Cp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bl(t,e,n,r){var i=t.updateQueue;Cn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?s=c:o.next=c,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=a))}if(s!==null){var u=i.baseState;o=0,d=c=a=null,l=s;do{var h=l.lane,v=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,E=l;switch(h=e,v=n,E.tag){case 1:if(_=E.payload,typeof _=="function"){u=_.call(v,u,h);break e}u=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,h=typeof _=="function"?_.call(v,u,h):_,h==null)break e;u=de({},u,h);break e;case 2:Cn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=v,a=u):d=d.next=v,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=u),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);xr|=o,t.lanes=o,t.memoizedState=u}}function Ip(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var qv=new Gg.Component().refs;function Mu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:de({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ia={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=$e(),i=zn(t),s=un(r,i);s.payload=e,n!=null&&(s.callback=n),e=jn(t,s,i),e!==null&&(Mt(e,t,i,r),il(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=$e(),i=zn(t),s=un(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=jn(t,s,i),e!==null&&(Mt(e,t,i,r),il(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$e(),r=zn(t),i=un(n,r);i.tag=2,e!=null&&(i.callback=e),e=jn(t,i,r),e!==null&&(Mt(e,t,r,n),il(e,t,r))}};function Tp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ls(n,r)||!Ls(i,s):!0}function Yv(t,e,n){var r=!1,i=Yn,s=e.contextType;return typeof s=="object"&&s!==null?s=Ct(s):(i=st(e)?Ir:Ve.current,r=e.contextTypes,s=(r=r!=null)?_i(t,i):Yn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ia,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function kp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ia.enqueueReplaceState(e,e.state,null)}function Fu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=qv,nh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ct(s):(s=st(e)?Ir:Ve.current,i.context=_i(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ia.enqueueReplaceState(i,i.state,null),bl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Qi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===qv&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function zo(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xp(t){var e=t._init;return e(t._payload)}function $v(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Wn(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,w){return p===null||p.tag!==6?(p=Oc(g,m.mode,w),p.return=m,p):(p=i(p,g),p.return=m,p)}function a(m,p,g,w){var I=g.type;return I===$r?d(m,p,g.props.children,w,g.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Sn&&xp(I)===p.type)?(w=i(p,g.props),w.ref=Qi(m,p,g),w.return=m,w):(w=ul(g.type,g.key,g.props,null,m.mode,w),w.ref=Qi(m,p,g),w.return=m,w)}function c(m,p,g,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Lc(g,m.mode,w),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function d(m,p,g,w,I){return p===null||p.tag!==7?(p=wr(g,m.mode,w,I),p.return=m,p):(p=i(p,g),p.return=m,p)}function u(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Oc(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ro:return g=ul(p.type,p.key,p.props,null,m.mode,g),g.ref=Qi(m,null,p),g.return=m,g;case Yr:return p=Lc(p,m.mode,g),p.return=m,p;case Sn:var w=p._init;return u(m,w(p._payload),g)}if(ss(p)||Gi(p))return p=wr(p,m.mode,g,null),p.return=m,p;zo(m,p)}return null}function h(m,p,g,w){var I=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:l(m,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ro:return g.key===I?a(m,p,g,w):null;case Yr:return g.key===I?c(m,p,g,w):null;case Sn:return I=g._init,h(m,p,I(g._payload),w)}if(ss(g)||Gi(g))return I!==null?null:d(m,p,g,w,null);zo(m,g)}return null}function v(m,p,g,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,l(p,m,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ro:return m=m.get(w.key===null?g:w.key)||null,a(p,m,w,I);case Yr:return m=m.get(w.key===null?g:w.key)||null,c(p,m,w,I);case Sn:var x=w._init;return v(m,p,g,x(w._payload),I)}if(ss(w)||Gi(w))return m=m.get(g)||null,d(p,m,w,I,null);zo(p,w)}return null}function _(m,p,g,w){for(var I=null,x=null,R=p,A=p=0,b=null;R!==null&&A<g.length;A++){R.index>A?(b=R,R=null):b=R.sibling;var j=h(m,R,g[A],w);if(j===null){R===null&&(R=b);break}t&&R&&j.alternate===null&&e(m,R),p=s(j,p,A),x===null?I=j:x.sibling=j,x=j,R=b}if(A===g.length)return n(m,R),le&&cr(m,A),I;if(R===null){for(;A<g.length;A++)R=u(m,g[A],w),R!==null&&(p=s(R,p,A),x===null?I=R:x.sibling=R,x=R);return le&&cr(m,A),I}for(R=r(m,R);A<g.length;A++)b=v(R,m,A,g[A],w),b!==null&&(t&&b.alternate!==null&&R.delete(b.key===null?A:b.key),p=s(b,p,A),x===null?I=b:x.sibling=b,x=b);return t&&R.forEach(function(Y){return e(m,Y)}),le&&cr(m,A),I}function E(m,p,g,w){var I=Gi(g);if(typeof I!="function")throw Error(k(150));if(g=I.call(g),g==null)throw Error(k(151));for(var x=I=null,R=p,A=p=0,b=null,j=g.next();R!==null&&!j.done;A++,j=g.next()){R.index>A?(b=R,R=null):b=R.sibling;var Y=h(m,R,j.value,w);if(Y===null){R===null&&(R=b);break}t&&R&&Y.alternate===null&&e(m,R),p=s(Y,p,A),x===null?I=Y:x.sibling=Y,x=Y,R=b}if(j.done)return n(m,R),le&&cr(m,A),I;if(R===null){for(;!j.done;A++,j=g.next())j=u(m,j.value,w),j!==null&&(p=s(j,p,A),x===null?I=j:x.sibling=j,x=j);return le&&cr(m,A),I}for(R=r(m,R);!j.done;A++,j=g.next())j=v(R,m,A,j.value,w),j!==null&&(t&&j.alternate!==null&&R.delete(j.key===null?A:j.key),p=s(j,p,A),x===null?I=j:x.sibling=j,x=j);return t&&R.forEach(function(ae){return e(m,ae)}),le&&cr(m,A),I}function S(m,p,g,w){if(typeof g=="object"&&g!==null&&g.type===$r&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ro:e:{for(var I=g.key,x=p;x!==null;){if(x.key===I){if(I=g.type,I===$r){if(x.tag===7){n(m,x.sibling),p=i(x,g.props.children),p.return=m,m=p;break e}}else if(x.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Sn&&xp(I)===x.type){n(m,x.sibling),p=i(x,g.props),p.ref=Qi(m,x,g),p.return=m,m=p;break e}n(m,x);break}else e(m,x);x=x.sibling}g.type===$r?(p=wr(g.props.children,m.mode,w,g.key),p.return=m,m=p):(w=ul(g.type,g.key,g.props,null,m.mode,w),w.ref=Qi(m,p,g),w.return=m,m=w)}return o(m);case Yr:e:{for(x=g.key;p!==null;){if(p.key===x)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Lc(g,m.mode,w),p.return=m,m=p}return o(m);case Sn:return x=g._init,S(m,p,x(g._payload),w)}if(ss(g))return _(m,p,g,w);if(Gi(g))return E(m,p,g,w);zo(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=Oc(g,m.mode,w),p.return=m,m=p),o(m)):n(m,p)}return S}var Ei=$v(!0),Qv=$v(!1),uo={},qt=Zn(uo),js=Zn(uo),Us=Zn(uo);function mr(t){if(t===uo)throw Error(k(174));return t}function rh(t,e){switch(re(Us,e),re(js,t),re(qt,uo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mu(e,t)}oe(qt),re(qt,e)}function Si(){oe(qt),oe(js),oe(Us)}function Xv(t){mr(Us.current);var e=mr(qt.current),n=mu(e,t.type);e!==n&&(re(js,t),re(qt,n))}function ih(t){js.current===t&&(oe(qt),oe(js))}var ce=Zn(0);function Pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xc=[];function sh(){for(var t=0;t<xc.length;t++)xc[t]._workInProgressVersionPrimary=null;xc.length=0}var sl=yn.ReactCurrentDispatcher,Nc=yn.ReactCurrentBatchConfig,kr=0,ue=null,Se=null,be=null,Al=!1,ms=!1,zs=0,TS=0;function ze(){throw Error(k(321))}function oh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jt(t[n],e[n]))return!1;return!0}function lh(t,e,n,r,i,s){if(kr=s,ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sl.current=t===null||t.memoizedState===null?RS:bS,t=n(r,i),ms){s=0;do{if(ms=!1,zs=0,25<=s)throw Error(k(301));s+=1,be=Se=null,e.updateQueue=null,sl.current=PS,t=n(r,i)}while(ms)}if(sl.current=Ol,e=Se!==null&&Se.next!==null,kr=0,be=Se=ue=null,Al=!1,e)throw Error(k(300));return t}function ah(){var t=zs!==0;return zs=0,t}function Bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?ue.memoizedState=be=t:be=be.next=t,be}function It(){if(Se===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Se.next;var e=be===null?ue.memoizedState:be.next;if(e!==null)be=e,Se=t;else{if(t===null)throw Error(k(310));Se=t,t={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},be===null?ue.memoizedState=be=t:be=be.next=t}return be}function Ws(t,e){return typeof e=="function"?e(t):e}function Rc(t){var e=It(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Se,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,c=s;do{var d=c.lane;if((kr&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=u,o=r):a=a.next=u,ue.lanes|=d,xr|=d}c=c.next}while(c!==null&&c!==s);a===null?o=r:a.next=l,jt(r,e.memoizedState)||(nt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ue.lanes|=s,xr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bc(t){var e=It(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);jt(s,e.memoizedState)||(nt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Jv(){}function Zv(t,e){var n=ue,r=It(),i=e(),s=!jt(r.memoizedState,i);if(s&&(r.memoizedState=i,nt=!0),r=r.queue,ch(ny.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,Bs(9,ty.bind(null,n,r,i,e),void 0,null),Ae===null)throw Error(k(349));kr&30||ey(n,e,i)}return i}function ey(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ty(t,e,n,r){e.value=n,e.getSnapshot=r,ry(e)&&iy(t)}function ny(t,e,n){return n(function(){ry(e)&&iy(t)})}function ry(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jt(t,n)}catch{return!0}}function iy(t){var e=pn(t,1);e!==null&&Mt(e,t,1,-1)}function Np(t){var e=Bt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ws,lastRenderedState:t},e.queue=t,t=t.dispatch=NS.bind(null,ue,t),[e.memoizedState,t]}function Bs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function sy(){return It().memoizedState}function ol(t,e,n,r){var i=Bt();ue.flags|=t,i.memoizedState=Bs(1|e,n,void 0,r===void 0?null:r)}function Ta(t,e,n,r){var i=It();r=r===void 0?null:r;var s=void 0;if(Se!==null){var o=Se.memoizedState;if(s=o.destroy,r!==null&&oh(r,o.deps)){i.memoizedState=Bs(e,n,s,r);return}}ue.flags|=t,i.memoizedState=Bs(1|e,n,s,r)}function Rp(t,e){return ol(8390656,8,t,e)}function ch(t,e){return Ta(2048,8,t,e)}function oy(t,e){return Ta(4,2,t,e)}function ly(t,e){return Ta(4,4,t,e)}function ay(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cy(t,e,n){return n=n!=null?n.concat([t]):null,Ta(4,4,ay.bind(null,e,t),n)}function uh(){}function uy(t,e){var n=It();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&oh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function dy(t,e){var n=It();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&oh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function hy(t,e,n){return kr&21?(jt(n,e)||(n=mv(),ue.lanes|=n,xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nt=!0),t.memoizedState=n)}function kS(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=Nc.transition;Nc.transition={};try{t(!1),e()}finally{J=n,Nc.transition=r}}function fy(){return It().memoizedState}function xS(t,e,n){var r=zn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},py(t))my(e,n);else if(n=Gv(t,e,n,r),n!==null){var i=$e();Mt(n,t,r,i),gy(n,e,r)}}function NS(t,e,n){var r=zn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(py(t))my(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,jt(l,o)){var a=e.interleaved;a===null?(i.next=i,th(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Gv(t,e,i,r),n!==null&&(i=$e(),Mt(n,t,r,i),gy(n,e,r))}}function py(t){var e=t.alternate;return t===ue||e!==null&&e===ue}function my(t,e){ms=Al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wd(t,n)}}var Ol={readContext:Ct,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},RS={readContext:Ct,useCallback:function(t,e){return Bt().memoizedState=[t,e===void 0?null:e],t},useContext:Ct,useEffect:Rp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ol(4194308,4,ay.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return ol(4,2,t,e)},useMemo:function(t,e){var n=Bt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Bt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xS.bind(null,ue,t),[r.memoizedState,t]},useRef:function(t){var e=Bt();return t={current:t},e.memoizedState=t},useState:Np,useDebugValue:uh,useDeferredValue:function(t){return Bt().memoizedState=t},useTransition:function(){var t=Np(!1),e=t[0];return t=kS.bind(null,t[1]),Bt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ue,i=Bt();if(le){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Ae===null)throw Error(k(349));kr&30||ey(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Rp(ny.bind(null,r,s,t),[t]),r.flags|=2048,Bs(9,ty.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Bt(),e=Ae.identifierPrefix;if(le){var n=sn,r=rn;n=(r&~(1<<32-Dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=zs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bS={readContext:Ct,useCallback:uy,useContext:Ct,useEffect:ch,useImperativeHandle:cy,useInsertionEffect:oy,useLayoutEffect:ly,useMemo:dy,useReducer:Rc,useRef:sy,useState:function(){return Rc(Ws)},useDebugValue:uh,useDeferredValue:function(t){var e=It();return hy(e,Se.memoizedState,t)},useTransition:function(){var t=Rc(Ws)[0],e=It().memoizedState;return[t,e]},useMutableSource:Jv,useSyncExternalStore:Zv,useId:fy,unstable_isNewReconciler:!1},PS={readContext:Ct,useCallback:uy,useContext:Ct,useEffect:ch,useImperativeHandle:cy,useInsertionEffect:oy,useLayoutEffect:ly,useMemo:dy,useReducer:bc,useRef:sy,useState:function(){return bc(Ws)},useDebugValue:uh,useDeferredValue:function(t){var e=It();return Se===null?e.memoizedState=t:hy(e,Se.memoizedState,t)},useTransition:function(){var t=bc(Ws)[0],e=It().memoizedState;return[t,e]},useMutableSource:Jv,useSyncExternalStore:Zv,useId:fy,unstable_isNewReconciler:!1};function Ci(t,e){try{var n="",r=e;do n+=s1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ju(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var AS=typeof WeakMap=="function"?WeakMap:Map;function vy(t,e,n){n=un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Dl||(Dl=!0,Yu=r),ju(t,e)},n}function yy(t,e,n){n=un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ju(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ju(t,e),typeof r!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function bp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new AS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=KS.bind(null,t,e,n),e.then(t,t))}function Pp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ap(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=un(-1,1),e.tag=2,jn(n,e,1))),n.lanes|=1),t)}var OS=yn.ReactCurrentOwner,nt=!1;function qe(t,e,n,r){e.child=t===null?Qv(e,null,n,r):Ei(e,t.child,n,r)}function Op(t,e,n,r,i){n=n.render;var s=e.ref;return di(e,i),r=lh(t,e,n,r,s,i),n=ah(),t!==null&&!nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,mn(t,e,i)):(le&&n&&$d(e),e.flags|=1,qe(t,e,r,i),e.child)}function Lp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!yh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_y(t,e,s,r,i)):(t=ul(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ls,n(o,r)&&t.ref===e.ref)return mn(t,e,i)}return e.flags|=1,t=Wn(s,r),t.ref=e.ref,t.return=e,e.child=t}function _y(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ls(s,r)&&t.ref===e.ref)if(nt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(nt=!0);else return e.lanes=t.lanes,mn(t,e,i)}return Uu(t,e,n,r,i)}function wy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(si,ct),ct|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,re(si,ct),ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,re(si,ct),ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,re(si,ct),ct|=r;return qe(t,e,i,n),e.child}function Ey(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uu(t,e,n,r,i){var s=st(n)?Ir:Ve.current;return s=_i(e,s),di(e,i),n=lh(t,e,n,r,s,i),r=ah(),t!==null&&!nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,mn(t,e,i)):(le&&r&&$d(e),e.flags|=1,qe(t,e,n,i),e.child)}function Dp(t,e,n,r,i){if(st(n)){var s=!0;Tl(e)}else s=!1;if(di(e,i),e.stateNode===null)ll(t,e),Yv(e,n,r),Fu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ct(c):(c=st(n)?Ir:Ve.current,c=_i(e,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==c)&&kp(e,o,r,c),Cn=!1;var h=e.memoizedState;o.state=h,bl(e,r,o,i),a=e.memoizedState,l!==r||h!==a||it.current||Cn?(typeof d=="function"&&(Mu(e,n,d,r),a=e.memoizedState),(l=Cn||Tp(e,n,l,r,h,a,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Kv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:bt(e.type,l),o.props=c,u=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ct(a):(a=st(n)?Ir:Ve.current,a=_i(e,a));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==u||h!==a)&&kp(e,o,r,a),Cn=!1,h=e.memoizedState,o.state=h,bl(e,r,o,i);var _=e.memoizedState;l!==u||h!==_||it.current||Cn?(typeof v=="function"&&(Mu(e,n,v,r),_=e.memoizedState),(c=Cn||Tp(e,n,c,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return zu(t,e,n,r,s,i)}function zu(t,e,n,r,i,s){Ey(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&wp(e,n,!1),mn(t,e,s);r=e.stateNode,OS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ei(e,t.child,null,s),e.child=Ei(e,null,l,s)):qe(t,e,l,s),e.memoizedState=r.state,i&&wp(e,n,!0),e.child}function Sy(t){var e=t.stateNode;e.pendingContext?_p(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_p(t,e.context,!1),rh(t,e.containerInfo)}function Mp(t,e,n,r,i){return wi(),Xd(i),e.flags|=256,qe(t,e,n,r),e.child}var Wu={dehydrated:null,treeContext:null,retryLane:0};function Bu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cy(t,e,n){var r=e.pendingProps,i=ce.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),re(ce,i&1),t===null)return Lu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Na(o,r,0,null),t=wr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bu(n),e.memoizedState=Wu,t):dh(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return LS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Wn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Wn(l,s):(s=wr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Bu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wu,r}return s=t.child,t=s.sibling,r=Wn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function dh(t,e){return e=Na({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wo(t,e,n,r){return r!==null&&Xd(r),Ei(e,t.child,null,n),t=dh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function LS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Pc(Error(k(422))),Wo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Na({mode:"visible",children:r.children},i,0,null),s=wr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ei(e,t.child,null,o),e.child.memoizedState=Bu(o),e.memoizedState=Wu,s);if(!(e.mode&1))return Wo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(k(419)),r=Pc(s,r,void 0),Wo(t,e,o,r)}if(l=(o&t.childLanes)!==0,nt||l){if(r=Ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,pn(t,i),Mt(r,t,i,-1))}return vh(),r=Pc(Error(k(421))),Wo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=qS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ut=Fn(i.nextSibling),ht=e,le=!0,At=null,t!==null&&(vt[yt++]=rn,vt[yt++]=sn,vt[yt++]=Tr,rn=t.id,sn=t.overflow,Tr=e),e=dh(e,r.children),e.flags|=4096,e)}function Fp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Du(t.return,e,n)}function Ac(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Iy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(qe(t,e,r.children,n),r=ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fp(t,n,e);else if(t.tag===19)Fp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(re(ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Pl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ac(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Pl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ac(e,!0,n,null,s);break;case"together":Ac(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Wn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function DS(t,e,n){switch(e.tag){case 3:Sy(e),wi();break;case 5:Xv(e);break;case 1:st(e.type)&&Tl(e);break;case 4:rh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;re(Nl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(re(ce,ce.current&1),e.flags|=128,null):n&e.child.childLanes?Cy(t,e,n):(re(ce,ce.current&1),t=mn(t,e,n),t!==null?t.sibling:null);re(ce,ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Iy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(ce,ce.current),r)break;return null;case 22:case 23:return e.lanes=0,wy(t,e,n)}return mn(t,e,n)}var Ty,Vu,ky,xy;Ty=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vu=function(){};ky=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,mr(qt.current);var s=null;switch(n){case"input":i=du(t,i),r=du(t,r),s=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),s=[];break;case"textarea":i=pu(t,i),r=pu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Cl)}gu(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xs.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xs.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&se("scroll",t),s||l===a||(s=[])):(s=s||[]).push(c,a))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};xy=function(t,e,n,r){n!==r&&(e.flags|=4)};function Xi(t,e){if(!le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function We(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function MS(t,e,n){var r=e.pendingProps;switch(Qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(e),null;case 1:return st(e.type)&&Il(),We(e),null;case 3:return r=e.stateNode,Si(),oe(it),oe(Ve),sh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Uo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,At!==null&&(Xu(At),At=null))),Vu(t,e),We(e),null;case 5:ih(e);var i=mr(Us.current);if(n=e.type,t!==null&&e.stateNode!=null)ky(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return We(e),null}if(t=mr(qt.current),Uo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Vt]=e,r[Fs]=s,t=(e.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<ls.length;i++)se(ls[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":Kf(r,s),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},se("invalid",r);break;case"textarea":Yf(r,s),se("invalid",r)}gu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&jo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&jo(r.textContent,l,t),i=["children",""+l]):xs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&se("scroll",r)}switch(n){case"input":bo(r),qf(r,s,!0);break;case"textarea":bo(r),$f(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Cl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ev(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Vt]=e,t[Fs]=r,Ty(t,e,!1,!1),e.stateNode=t;e:{switch(o=vu(n,r),n){case"dialog":se("cancel",t),se("close",t),i=r;break;case"iframe":case"object":case"embed":se("load",t),i=r;break;case"video":case"audio":for(i=0;i<ls.length;i++)se(ls[i],t);i=r;break;case"source":se("error",t),i=r;break;case"img":case"image":case"link":se("error",t),se("load",t),i=r;break;case"details":se("toggle",t),i=r;break;case"input":Kf(t,r),i=du(t,r),se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),se("invalid",t);break;case"textarea":Yf(t,r),i=pu(t,r),se("invalid",t);break;default:i=r}gu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?rv(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&tv(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ns(t,a):typeof a=="number"&&Ns(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xs.hasOwnProperty(s)?a!=null&&s==="onScroll"&&se("scroll",t):a!=null&&Dd(t,s,a,o))}switch(n){case"input":bo(t),qf(t,r,!1);break;case"textarea":bo(t),$f(t);break;case"option":r.value!=null&&t.setAttribute("value",""+qn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?li(t,!!r.multiple,s,!1):r.defaultValue!=null&&li(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return We(e),null;case 6:if(t&&e.stateNode!=null)xy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=mr(Us.current),mr(qt.current),Uo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Vt]=e,(s=r.nodeValue!==n)&&(t=ht,t!==null))switch(t.tag){case 3:jo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&jo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vt]=e,e.stateNode=r}return We(e),null;case 13:if(oe(ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(le&&ut!==null&&e.mode&1&&!(e.flags&128))Hv(),wi(),e.flags|=98560,s=!1;else if(s=Uo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[Vt]=e}else wi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;We(e),s=!1}else At!==null&&(Xu(At),At=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ce.current&1?Te===0&&(Te=3):vh())),e.updateQueue!==null&&(e.flags|=4),We(e),null);case 4:return Si(),Vu(t,e),t===null&&Ds(e.stateNode.containerInfo),We(e),null;case 10:return eh(e.type._context),We(e),null;case 17:return st(e.type)&&Il(),We(e),null;case 19:if(oe(ce),s=e.memoizedState,s===null)return We(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Xi(s,!1);else{if(Te!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Pl(t),o!==null){for(e.flags|=128,Xi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return re(ce,ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&ye()>Ii&&(e.flags|=128,r=!0,Xi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Pl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!le)return We(e),null}else 2*ye()-s.renderingStartTime>Ii&&n!==1073741824&&(e.flags|=128,r=!0,Xi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ye(),e.sibling=null,n=ce.current,re(ce,r?n&1|2:n&1),e):(We(e),null);case 22:case 23:return gh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ct&1073741824&&(We(e),e.subtreeFlags&6&&(e.flags|=8192)):We(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function FS(t,e){switch(Qd(e),e.tag){case 1:return st(e.type)&&Il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Si(),oe(it),oe(Ve),sh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ih(e),null;case 13:if(oe(ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));wi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return oe(ce),null;case 4:return Si(),null;case 10:return eh(e.type._context),null;case 22:case 23:return gh(),null;case 24:return null;default:return null}}var Bo=!1,Be=!1,jS=typeof WeakSet=="function"?WeakSet:Set,D=null;function ii(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(t,e,r)}else n.current=null}function Hu(t,e,n){try{n()}catch(r){he(t,e,r)}}var jp=!1;function US(t,e){if(xu=wl,t=Pv(),Yd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,d=0,u=t,h=null;t:for(;;){for(var v;u!==n||i!==0&&u.nodeType!==3||(l=o+i),u!==s||r!==0&&u.nodeType!==3||(a=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(v=u.firstChild)!==null;)h=u,u=v;for(;;){if(u===t)break t;if(h===n&&++c===i&&(l=o),h===s&&++d===r&&(a=o),(v=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=v}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nu={focusedElem:t,selectionRange:n},wl=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var E=_.memoizedProps,S=_.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?E:bt(e.type,E),S);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){he(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return _=jp,jp=!1,_}function gs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Hu(e,n,s)}i=i.next}while(i!==r)}}function ka(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Gu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ny(t){var e=t.alternate;e!==null&&(t.alternate=null,Ny(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Vt],delete e[Fs],delete e[Pu],delete e[ES],delete e[SS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ry(t){return t.tag===5||t.tag===3||t.tag===4}function Up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ry(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ku(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cl));else if(r!==4&&(t=t.child,t!==null))for(Ku(t,e,n),t=t.sibling;t!==null;)Ku(t,e,n),t=t.sibling}function qu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qu(t,e,n),t=t.sibling;t!==null;)qu(t,e,n),t=t.sibling}var De=null,Pt=!1;function wn(t,e,n){for(n=n.child;n!==null;)by(t,e,n),n=n.sibling}function by(t,e,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(ya,n)}catch{}switch(n.tag){case 5:Be||ii(n,e);case 6:var r=De,i=Pt;De=null,wn(t,e,n),De=r,Pt=i,De!==null&&(Pt?(t=De,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(Pt?(t=De,n=n.stateNode,t.nodeType===8?Tc(t.parentNode,n):t.nodeType===1&&Tc(t,n),As(t)):Tc(De,n.stateNode));break;case 4:r=De,i=Pt,De=n.stateNode.containerInfo,Pt=!0,wn(t,e,n),De=r,Pt=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hu(n,e,o),i=i.next}while(i!==r)}wn(t,e,n);break;case 1:if(!Be&&(ii(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){he(n,e,l)}wn(t,e,n);break;case 21:wn(t,e,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,wn(t,e,n),Be=r):wn(t,e,n);break;default:wn(t,e,n)}}function zp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jS),e.forEach(function(r){var i=YS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Rt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:De=l.stateNode,Pt=!1;break e;case 3:De=l.stateNode.containerInfo,Pt=!0;break e;case 4:De=l.stateNode.containerInfo,Pt=!0;break e}l=l.return}if(De===null)throw Error(k(160));by(s,o,i),De=null,Pt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){he(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Py(e,t),e=e.sibling}function Py(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rt(e,t),Wt(t),r&4){try{gs(3,t,t.return),ka(3,t)}catch(E){he(t,t.return,E)}try{gs(5,t,t.return)}catch(E){he(t,t.return,E)}}break;case 1:Rt(e,t),Wt(t),r&512&&n!==null&&ii(n,n.return);break;case 5:if(Rt(e,t),Wt(t),r&512&&n!==null&&ii(n,n.return),t.flags&32){var i=t.stateNode;try{Ns(i,"")}catch(E){he(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Jg(i,s),vu(l,o);var c=vu(l,s);for(o=0;o<a.length;o+=2){var d=a[o],u=a[o+1];d==="style"?rv(i,u):d==="dangerouslySetInnerHTML"?tv(i,u):d==="children"?Ns(i,u):Dd(i,d,u,c)}switch(l){case"input":hu(i,s);break;case"textarea":Zg(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?li(i,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?li(i,!!s.multiple,s.defaultValue,!0):li(i,!!s.multiple,s.multiple?[]:"",!1))}i[Fs]=s}catch(E){he(t,t.return,E)}}break;case 6:if(Rt(e,t),Wt(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(E){he(t,t.return,E)}}break;case 3:if(Rt(e,t),Wt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{As(e.containerInfo)}catch(E){he(t,t.return,E)}break;case 4:Rt(e,t),Wt(t);break;case 13:Rt(e,t),Wt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ph=ye())),r&4&&zp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Be=(c=Be)||d,Rt(e,t),Be=c):Rt(e,t),Wt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(D=t,d=t.child;d!==null;){for(u=D=d;D!==null;){switch(h=D,v=h.child,h.tag){case 0:case 11:case 14:case 15:gs(4,h,h.return);break;case 1:ii(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(E){he(r,n,E)}}break;case 5:ii(h,h.return);break;case 22:if(h.memoizedState!==null){Bp(u);continue}}v!==null?(v.return=h,D=v):Bp(u)}d=d.sibling}e:for(d=null,u=t;;){if(u.tag===5){if(d===null){d=u;try{i=u.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=u.stateNode,a=u.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=nv("display",o))}catch(E){he(t,t.return,E)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(E){he(t,t.return,E)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Rt(e,t),Wt(t),r&4&&zp(t);break;case 21:break;default:Rt(e,t),Wt(t)}}function Wt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ry(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ns(i,""),r.flags&=-33);var s=Up(t);qu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Up(t);Ku(t,l,o);break;default:throw Error(k(161))}}catch(a){he(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zS(t,e,n){D=t,Ay(t)}function Ay(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Bo;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Be;l=Bo;var c=Be;if(Bo=o,(Be=a)&&!c)for(D=i;D!==null;)o=D,a=o.child,o.tag===22&&o.memoizedState!==null?Vp(i):a!==null?(a.return=o,D=a):Vp(i);for(;s!==null;)D=s,Ay(s),s=s.sibling;D=i,Bo=l,Be=c}Wp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):Wp(t)}}function Wp(t){for(;D!==null;){var e=D;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Be||ka(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ip(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ip(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&As(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Be||e.flags&512&&Gu(e)}catch(h){he(e,e.return,h)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function Bp(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function Vp(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ka(4,e)}catch(a){he(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){he(e,i,a)}}var s=e.return;try{Gu(e)}catch(a){he(e,s,a)}break;case 5:var o=e.return;try{Gu(e)}catch(a){he(e,o,a)}}}catch(a){he(e,e.return,a)}if(e===t){D=null;break}var l=e.sibling;if(l!==null){l.return=e.return,D=l;break}D=e.return}}var WS=Math.ceil,Ll=yn.ReactCurrentDispatcher,hh=yn.ReactCurrentOwner,Et=yn.ReactCurrentBatchConfig,Q=0,Ae=null,_e=null,Fe=0,ct=0,si=Zn(0),Te=0,Vs=null,xr=0,xa=0,fh=0,vs=null,tt=null,ph=0,Ii=1/0,en=null,Dl=!1,Yu=null,Un=null,Vo=!1,Pn=null,Ml=0,ys=0,$u=null,al=-1,cl=0;function $e(){return Q&6?ye():al!==-1?al:al=ye()}function zn(t){return t.mode&1?Q&2&&Fe!==0?Fe&-Fe:IS.transition!==null?(cl===0&&(cl=mv()),cl):(t=J,t!==0||(t=window.event,t=t===void 0?16:Sv(t.type)),t):1}function Mt(t,e,n,r){if(50<ys)throw ys=0,$u=null,Error(k(185));lo(t,n,r),(!(Q&2)||t!==Ae)&&(t===Ae&&(!(Q&2)&&(xa|=n),Te===4&&Tn(t,Fe)),ot(t,r),n===1&&Q===0&&!(e.mode&1)&&(Ii=ye()+500,Ca&&er()))}function ot(t,e){var n=t.callbackNode;I1(t,e);var r=_l(t,t===Ae?Fe:0);if(r===0)n!==null&&Jf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jf(n),e===1)t.tag===0?CS(Hp.bind(null,t)):Wv(Hp.bind(null,t)),_S(function(){!(Q&6)&&er()}),n=null;else{switch(gv(r)){case 1:n=zd;break;case 4:n=fv;break;case 16:n=yl;break;case 536870912:n=pv;break;default:n=yl}n=zy(n,Oy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Oy(t,e){if(al=-1,cl=0,Q&6)throw Error(k(327));var n=t.callbackNode;if(hi()&&t.callbackNode!==n)return null;var r=_l(t,t===Ae?Fe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fl(t,r);else{e=r;var i=Q;Q|=2;var s=Dy();(Ae!==t||Fe!==e)&&(en=null,Ii=ye()+500,_r(t,e));do try{HS();break}catch(l){Ly(t,l)}while(!0);Zd(),Ll.current=s,Q=i,_e!==null?e=0:(Ae=null,Fe=0,e=Te)}if(e!==0){if(e===2&&(i=Su(t),i!==0&&(r=i,e=Qu(t,i))),e===1)throw n=Vs,_r(t,0),Tn(t,r),ot(t,ye()),n;if(e===6)Tn(t,r);else{if(i=t.current.alternate,!(r&30)&&!BS(i)&&(e=Fl(t,r),e===2&&(s=Su(t),s!==0&&(r=s,e=Qu(t,s))),e===1))throw n=Vs,_r(t,0),Tn(t,r),ot(t,ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:ur(t,tt,en);break;case 3:if(Tn(t,r),(r&130023424)===r&&(e=ph+500-ye(),10<e)){if(_l(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){$e(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=bu(ur.bind(null,t,tt,en),e);break}ur(t,tt,en);break;case 4:if(Tn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Dt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*WS(r/1960))-r,10<r){t.timeoutHandle=bu(ur.bind(null,t,tt,en),r);break}ur(t,tt,en);break;case 5:ur(t,tt,en);break;default:throw Error(k(329))}}}return ot(t,ye()),t.callbackNode===n?Oy.bind(null,t):null}function Qu(t,e){var n=vs;return t.current.memoizedState.isDehydrated&&(_r(t,e).flags|=256),t=Fl(t,e),t!==2&&(e=tt,tt=n,e!==null&&Xu(e)),t}function Xu(t){tt===null?tt=t:tt.push.apply(tt,t)}function BS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Tn(t,e){for(e&=~fh,e&=~xa,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Dt(e),r=1<<n;t[n]=-1,e&=~r}}function Hp(t){if(Q&6)throw Error(k(327));hi();var e=_l(t,0);if(!(e&1))return ot(t,ye()),null;var n=Fl(t,e);if(t.tag!==0&&n===2){var r=Su(t);r!==0&&(e=r,n=Qu(t,r))}if(n===1)throw n=Vs,_r(t,0),Tn(t,e),ot(t,ye()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,tt,en),ot(t,ye()),null}function mh(t,e){var n=Q;Q|=1;try{return t(e)}finally{Q=n,Q===0&&(Ii=ye()+500,Ca&&er())}}function Nr(t){Pn!==null&&Pn.tag===0&&!(Q&6)&&hi();var e=Q;Q|=1;var n=Et.transition,r=J;try{if(Et.transition=null,J=1,t)return t()}finally{J=r,Et.transition=n,Q=e,!(Q&6)&&er()}}function gh(){ct=si.current,oe(si)}function _r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yS(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(Qd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Il();break;case 3:Si(),oe(it),oe(Ve),sh();break;case 5:ih(r);break;case 4:Si();break;case 13:oe(ce);break;case 19:oe(ce);break;case 10:eh(r.type._context);break;case 22:case 23:gh()}n=n.return}if(Ae=t,_e=t=Wn(t.current,null),Fe=ct=e,Te=0,Vs=null,fh=xa=xr=0,tt=vs=null,pr!==null){for(e=0;e<pr.length;e++)if(n=pr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}pr=null}return t}function Ly(t,e){do{var n=_e;try{if(Zd(),sl.current=Ol,Al){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Al=!1}if(kr=0,be=Se=ue=null,ms=!1,zs=0,hh.current=null,n===null||n.return===null){Te=1,Vs=e,_e=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Fe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=l,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Pp(o);if(v!==null){v.flags&=-257,Ap(v,o,l,s,e),v.mode&1&&bp(s,c,e),e=v,a=c;var _=e.updateQueue;if(_===null){var E=new Set;E.add(a),e.updateQueue=E}else _.add(a);break e}else{if(!(e&1)){bp(s,c,e),vh();break e}a=Error(k(426))}}else if(le&&l.mode&1){var S=Pp(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Ap(S,o,l,s,e),Xd(Ci(a,l));break e}}s=a=Ci(a,l),Te!==4&&(Te=2),vs===null?vs=[s]:vs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=vy(s,a,e);Cp(s,m);break e;case 1:l=a;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Un===null||!Un.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=yy(s,l,e);Cp(s,w);break e}}s=s.return}while(s!==null)}Fy(n)}catch(I){e=I,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(!0)}function Dy(){var t=Ll.current;return Ll.current=Ol,t===null?Ol:t}function vh(){(Te===0||Te===3||Te===2)&&(Te=4),Ae===null||!(xr&268435455)&&!(xa&268435455)||Tn(Ae,Fe)}function Fl(t,e){var n=Q;Q|=2;var r=Dy();(Ae!==t||Fe!==e)&&(en=null,_r(t,e));do try{VS();break}catch(i){Ly(t,i)}while(!0);if(Zd(),Q=n,Ll.current=r,_e!==null)throw Error(k(261));return Ae=null,Fe=0,Te}function VS(){for(;_e!==null;)My(_e)}function HS(){for(;_e!==null&&!m1();)My(_e)}function My(t){var e=Uy(t.alternate,t,ct);t.memoizedProps=t.pendingProps,e===null?Fy(t):_e=e,hh.current=null}function Fy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=FS(n,e),n!==null){n.flags&=32767,_e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Te=6,_e=null;return}}else if(n=MS(n,e,ct),n!==null){_e=n;return}if(e=e.sibling,e!==null){_e=e;return}_e=e=t}while(e!==null);Te===0&&(Te=5)}function ur(t,e,n){var r=J,i=Et.transition;try{Et.transition=null,J=1,GS(t,e,n,r)}finally{Et.transition=i,J=r}return null}function GS(t,e,n,r){do hi();while(Pn!==null);if(Q&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(T1(t,s),t===Ae&&(_e=Ae=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vo||(Vo=!0,zy(yl,function(){return hi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Et.transition,Et.transition=null;var o=J;J=1;var l=Q;Q|=4,hh.current=null,US(t,n),Py(n,t),dS(Nu),wl=!!xu,Nu=xu=null,t.current=n,zS(n),g1(),Q=l,J=o,Et.transition=s}else t.current=n;if(Vo&&(Vo=!1,Pn=t,Ml=i),s=t.pendingLanes,s===0&&(Un=null),_1(n.stateNode),ot(t,ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Dl)throw Dl=!1,t=Yu,Yu=null,t;return Ml&1&&t.tag!==0&&hi(),s=t.pendingLanes,s&1?t===$u?ys++:(ys=0,$u=t):ys=0,er(),null}function hi(){if(Pn!==null){var t=gv(Ml),e=Et.transition,n=J;try{if(Et.transition=null,J=16>t?16:t,Pn===null)var r=!1;else{if(t=Pn,Pn=null,Ml=0,Q&6)throw Error(k(331));var i=Q;for(Q|=4,D=t.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(D=c;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:gs(8,d,s)}var u=d.child;if(u!==null)u.return=d,D=u;else for(;D!==null;){d=D;var h=d.sibling,v=d.return;if(Ny(d),d===c){D=null;break}if(h!==null){h.return=v,D=h;break}D=v}}}var _=s.alternate;if(_!==null){var E=_.child;if(E!==null){_.child=null;do{var S=E.sibling;E.sibling=null,E=S}while(E!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:gs(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,D=m;break e}D=s.return}}var p=t.current;for(D=p;D!==null;){o=D;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,D=g;else e:for(o=p;D!==null;){if(l=D,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ka(9,l)}}catch(I){he(l,l.return,I)}if(l===o){D=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,D=w;break e}D=l.return}}if(Q=i,er(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(ya,t)}catch{}r=!0}return r}finally{J=n,Et.transition=e}}return!1}function Gp(t,e,n){e=Ci(n,e),e=vy(t,e,1),t=jn(t,e,1),e=$e(),t!==null&&(lo(t,1,e),ot(t,e))}function he(t,e,n){if(t.tag===3)Gp(t,t,n);else for(;e!==null;){if(e.tag===3){Gp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Un===null||!Un.has(r))){t=Ci(n,t),t=yy(e,t,1),e=jn(e,t,1),t=$e(),e!==null&&(lo(e,1,t),ot(e,t));break}}e=e.return}}function KS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=$e(),t.pingedLanes|=t.suspendedLanes&n,Ae===t&&(Fe&n)===n&&(Te===4||Te===3&&(Fe&130023424)===Fe&&500>ye()-ph?_r(t,0):fh|=n),ot(t,e)}function jy(t,e){e===0&&(t.mode&1?(e=Oo,Oo<<=1,!(Oo&130023424)&&(Oo=4194304)):e=1);var n=$e();t=pn(t,e),t!==null&&(lo(t,e,n),ot(t,n))}function qS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jy(t,n)}function YS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),jy(t,n)}var Uy;Uy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||it.current)nt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nt=!1,DS(t,e,n);nt=!!(t.flags&131072)}else nt=!1,le&&e.flags&1048576&&Bv(e,xl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ll(t,e),t=e.pendingProps;var i=_i(e,Ve.current);di(e,n),i=lh(null,e,r,t,i,n);var s=ah();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,st(r)?(s=!0,Tl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nh(e),i.updater=Ia,e.stateNode=i,i._reactInternals=e,Fu(e,r,t,n),e=zu(null,e,r,!0,s,n)):(e.tag=0,le&&s&&$d(e),qe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ll(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=QS(r),t=bt(r,t),i){case 0:e=Uu(null,e,r,t,n);break e;case 1:e=Dp(null,e,r,t,n);break e;case 11:e=Op(null,e,r,t,n);break e;case 14:e=Lp(null,e,r,bt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),Uu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),Dp(t,e,r,i,n);case 3:e:{if(Sy(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Kv(t,e),bl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ci(Error(k(423)),e),e=Mp(t,e,r,n,i);break e}else if(r!==i){i=Ci(Error(k(424)),e),e=Mp(t,e,r,n,i);break e}else for(ut=Fn(e.stateNode.containerInfo.firstChild),ht=e,le=!0,At=null,n=Qv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wi(),r===i){e=mn(t,e,n);break e}qe(t,e,r,n)}e=e.child}return e;case 5:return Xv(e),t===null&&Lu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ru(r,i)?o=null:s!==null&&Ru(r,s)&&(e.flags|=32),Ey(t,e),qe(t,e,o,n),e.child;case 6:return t===null&&Lu(e),null;case 13:return Cy(t,e,n);case 4:return rh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ei(e,null,r,n):qe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),Op(t,e,r,i,n);case 7:return qe(t,e,e.pendingProps,n),e.child;case 8:return qe(t,e,e.pendingProps.children,n),e.child;case 12:return qe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,re(Nl,r._currentValue),r._currentValue=o,s!==null)if(jt(s.value,o)){if(s.children===i.children&&!it.current){e=mn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=un(-1,n&-n),a.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Du(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Du(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,di(e,n),i=Ct(i),r=r(i),e.flags|=1,qe(t,e,r,n),e.child;case 14:return r=e.type,i=bt(r,e.pendingProps),i=bt(r.type,i),Lp(t,e,r,i,n);case 15:return _y(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),ll(t,e),e.tag=1,st(r)?(t=!0,Tl(e)):t=!1,di(e,n),Yv(e,r,i),Fu(e,r,i,n),zu(null,e,r,!0,t,n);case 19:return Iy(t,e,n);case 22:return wy(t,e,n)}throw Error(k(156,e.tag))};function zy(t,e){return hv(t,e)}function $S(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(t,e,n,r){return new $S(t,e,n,r)}function yh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function QS(t){if(typeof t=="function")return yh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fd)return 11;if(t===jd)return 14}return 2}function Wn(t,e){var n=t.alternate;return n===null?(n=_t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ul(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")yh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $r:return wr(n.children,i,s,e);case Md:o=8,i|=8;break;case lu:return t=_t(12,n,e,i|2),t.elementType=lu,t.lanes=s,t;case au:return t=_t(13,n,e,i),t.elementType=au,t.lanes=s,t;case cu:return t=_t(19,n,e,i),t.elementType=cu,t.lanes=s,t;case $g:return Na(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qg:o=10;break e;case Yg:o=9;break e;case Fd:o=11;break e;case jd:o=14;break e;case Sn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=_t(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function wr(t,e,n,r){return t=_t(7,t,r,e),t.lanes=n,t}function Na(t,e,n,r){return t=_t(22,t,r,e),t.elementType=$g,t.lanes=n,t.stateNode={isHidden:!1},t}function Oc(t,e,n){return t=_t(6,t,null,e),t.lanes=n,t}function Lc(t,e,n){return e=_t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function XS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pc(0),this.expirationTimes=pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _h(t,e,n,r,i,s,o,l,a){return t=new XS(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_t(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nh(s),t}function JS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Wy(t){if(!t)return Yn;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(st(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(st(n))return zv(t,n,e)}return e}function By(t,e,n,r,i,s,o,l,a){return t=_h(n,r,!0,t,i,s,o,l,a),t.context=Wy(null),n=t.current,r=$e(),i=zn(n),s=un(r,i),s.callback=e??null,jn(n,s,i),t.current.lanes=i,lo(t,i,r),ot(t,r),t}function Ra(t,e,n,r){var i=e.current,s=$e(),o=zn(i);return n=Wy(n),e.context===null?e.context=n:e.pendingContext=n,e=un(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=jn(i,e,o),t!==null&&(Mt(t,i,o,s),il(t,i,o)),o}function jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wh(t,e){Kp(t,e),(t=t.alternate)&&Kp(t,e)}function ZS(){return null}var Vy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Eh(t){this._internalRoot=t}ba.prototype.render=Eh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Ra(t,e,null,null)};ba.prototype.unmount=Eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){Ra(null,t,null,null)}),e[fn]=null}};function ba(t){this._internalRoot=t}ba.prototype.unstable_scheduleHydration=function(t){if(t){var e=_v();t={blockedOn:null,target:t,priority:e};for(var n=0;n<In.length&&e!==0&&e<In[n].priority;n++);In.splice(n,0,t),n===0&&Ev(t)}};function Sh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qp(){}function eC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=jl(o);s.call(c)}}var o=By(e,r,t,0,null,!1,!1,"",qp);return t._reactRootContainer=o,t[fn]=o.current,Ds(t.nodeType===8?t.parentNode:t),Nr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=jl(a);l.call(c)}}var a=_h(t,0,!1,null,null,!1,!1,"",qp);return t._reactRootContainer=a,t[fn]=a.current,Ds(t.nodeType===8?t.parentNode:t),Nr(function(){Ra(e,a,n,r)}),a}function Aa(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=jl(o);l.call(a)}}Ra(e,o,t,i)}else o=eC(n,e,t,i,r);return jl(o)}vv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=os(e.pendingLanes);n!==0&&(Wd(e,n|1),ot(e,ye()),!(Q&6)&&(Ii=ye()+500,er()))}break;case 13:Nr(function(){var r=pn(t,1);if(r!==null){var i=$e();Mt(r,t,1,i)}}),wh(t,1)}};Bd=function(t){if(t.tag===13){var e=pn(t,134217728);if(e!==null){var n=$e();Mt(e,t,134217728,n)}wh(t,134217728)}};yv=function(t){if(t.tag===13){var e=zn(t),n=pn(t,e);if(n!==null){var r=$e();Mt(n,t,e,r)}wh(t,e)}};_v=function(){return J};wv=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};_u=function(t,e,n){switch(e){case"input":if(hu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Sa(r);if(!i)throw Error(k(90));Xg(r),hu(r,i)}}}break;case"textarea":Zg(t,n);break;case"select":e=n.value,e!=null&&li(t,!!n.multiple,e,!1)}};ov=mh;lv=Nr;var tC={usingClientEntryPoint:!1,Events:[co,Zr,Sa,iv,sv,mh]},Ji={findFiberByHostInstance:fr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},nC={bundleType:Ji.bundleType,version:Ji.version,rendererPackageName:Ji.rendererPackageName,rendererConfig:Ji.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=uv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ji.findFiberByHostInstance||ZS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ho.isDisabled&&Ho.supportsFiber)try{ya=Ho.inject(nC),Kt=Ho}catch{}}mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tC;mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sh(e))throw Error(k(200));return JS(t,e,null,n)};mt.createRoot=function(t,e){if(!Sh(t))throw Error(k(299));var n=!1,r="",i=Vy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_h(t,1,!1,null,null,n,!1,r,i),t[fn]=e.current,Ds(t.nodeType===8?t.parentNode:t),new Eh(e)};mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=uv(e),t=t===null?null:t.stateNode,t};mt.flushSync=function(t){return Nr(t)};mt.hydrate=function(t,e,n){if(!Pa(e))throw Error(k(200));return Aa(null,t,e,!0,n)};mt.hydrateRoot=function(t,e,n){if(!Sh(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Vy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=By(e,null,t,1,n??null,i,!1,s,o),t[fn]=e.current,Ds(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ba(e)};mt.render=function(t,e,n){if(!Pa(e))throw Error(k(200));return Aa(null,t,e,!1,n)};mt.unmountComponentAtNode=function(t){if(!Pa(t))throw Error(k(40));return t._reactRootContainer?(Nr(function(){Aa(null,null,t,!1,function(){t._reactRootContainer=null,t[fn]=null})}),!0):!1};mt.unstable_batchedUpdates=mh;mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Pa(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Aa(t,e,n,!1,r)};mt.version="18.2.0-next-9e3b772b8-20220608";function Hy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hy)}catch(t){console.error(t)}}Hy(),Bg.exports=mt;var rC=Bg.exports,Yp=rC;su.createRoot=Yp.createRoot,su.hydrateRoot=Yp.hydrateRoot;var Ch={};Object.defineProperty(Ch,"__esModule",{value:!0});var Oa=Ch.useGeolocated=void 0;const et=C;function iC(t={}){const{positionOptions:e={enableHighAccuracy:!0,maximumAge:0,timeout:1/0},isOptimisticGeolocationEnabled:n=!0,userDecisionTimeout:r=void 0,suppressLocationOnMount:i=!1,watchPosition:s=!1,geolocationProvider:o=typeof navigator<"u"?navigator.geolocation:void 0,watchLocationPermissionChange:l=!1,onError:a,onSuccess:c}=t,d=(0,et.useRef)(0),u=(0,et.useRef)(!0),h=(0,et.useRef)(0),[v,_]=(0,et.useState)(n),[E,S]=(0,et.useState)(),[m,p]=(0,et.useState)(),[g,w]=(0,et.useState)(),[I,x]=(0,et.useState)(),R=(0,et.useCallback)(()=>{d.current&&window.clearTimeout(d.current)},[]),A=(0,et.useCallback)(Y=>{R(),u.current&&(S(()=>{}),_(!1),w(Y)),a==null||a(Y)},[a,R]),b=(0,et.useCallback)(Y=>{R(),u.current&&(S(Y.coords),p(Y.timestamp),_(!0),w(()=>{})),c==null||c(Y)},[c,R]),j=(0,et.useCallback)(()=>{if(!o||!o.getCurrentPosition||!o.watchPosition)throw new Error("The provided geolocation provider is invalid");r&&(d.current=window.setTimeout(()=>{A()},r)),s?h.current=o.watchPosition(b,A,e):o.getCurrentPosition(b,A,e)},[o,s,r,A,b,e]);return(0,et.useEffect)(()=>{let Y;return l&&o&&"permissions"in navigator&&navigator.permissions.query({name:"geolocation"}).then(ae=>{Y=ae,Y.onchange=()=>{x(Y.state)}}).catch(ae=>{console.error("Error updating the permissions",ae)}),()=>{Y&&(Y.onchange=null)}},[]),(0,et.useEffect)(()=>(i||j(),()=>{R(),s&&h.current&&(o==null||o.clearWatch(h.current))}),[I]),{getPosition:j,coords:E,timestamp:m,isGeolocationEnabled:v,isGeolocationAvailable:!!o,positionError:g}}Oa=Ch.useGeolocated=iC;function $p(t){var e;if(!Array.isArray(t))e="location must be an array";else if(t.length!==2)e="expected array of length 2, got length "+t.length;else{var n=t[0],r=t[1];typeof n!="number"||isNaN(n)?e="latitude must be a number":n<-90||n>90?e="latitude must be within the range [-90, 90]":typeof r!="number"||isNaN(r)?e="longitude must be a number":(r<-180||r>180)&&(e="longitude must be within the range [-180, 180]")}if(typeof e<"u")throw new Error("Invalid GeoFire location '"+t+"': "+e)}function Go(t){if(typeof t!="number"||isNaN(t))throw new Error("Error: degrees must be a number");return t*Math.PI/180}function Gy(t,e){$p(t),$p(e);var n=6371,r=Go(e[0]-t[0]),i=Go(e[1]-t[1]),s=Math.sin(r/2)*Math.sin(r/2)+Math.cos(Go(t[0]))*Math.cos(Go(e[0]))*Math.sin(i/2)*Math.sin(i/2),o=2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s));return n*o}var Qp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(t,e){if(!t)throw Mi(e)},Mi=function(t){return new Error("Firebase Database ("+Ky.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,d=s>>2,u=(s&3)<<4|l>>4;let h=(l&15)<<2|c>>6,v=c&63;a||(v=64,o||(h=64)),r.push(n[d],n[u],n[h],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||u==null)throw new oC;const h=s<<2|l>>4;if(r.push(h),c!==64){const v=l<<4&240|c>>2;if(r.push(v),u!==64){const _=c<<6&192|u;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class oC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yy=function(t){const e=qy(t);return Ih.encodeByteArray(e,!0)},Ul=function(t){return Yy(t).replace(/\./g,"")},zl=function(t){try{return Ih.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t){return $y(void 0,t)}function $y(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!aC(n)||(t[n]=$y(t[n],e[n]));return t}function aC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=()=>cC().__FIREBASE_DEFAULTS__,dC=()=>{if(typeof process>"u"||typeof Qp>"u")return;const t=Qp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zl(t[1]);return e&&JSON.parse(e)},Th=()=>{try{return uC()||dC()||hC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qy=t=>{var e,n;return(n=(e=Th())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xy=t=>{const e=Qy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Jy=()=>{var t;return(t=Th())===null||t===void 0?void 0:t.config},Zy=t=>{var e;return(e=Th())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ul(JSON.stringify(n)),Ul(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function t_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function n_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fC(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function r_(){return Ky.NODE_ADMIN===!0}function i_(){try{return typeof indexedDB=="object"}catch{return!1}}function s_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function pC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="FirebaseError";class zt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mC,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wr.prototype.create)}}class Wr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?gC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new zt(i,l,r)}}function gC(t,e){return t.replace(vC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const vC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t){return JSON.parse(t)}function Ie(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Hs(zl(s[0])||""),n=Hs(zl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},yC=function(t){const e=o_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},_C=function(t){const e=o_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ti(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ju(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Gs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Xp(s)&&Xp(o)){if(!Gs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function as(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function cs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=l^s&(o^l),d=1518500249):(c=s^o^l,d=1859775393):u<60?(c=s&o|l&(s|o),d=2400959708):(c=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+c+a+d+r[u]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function EC(t,e){const n=new SC(t,e);return n.subscribe.bind(n)}class SC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");CC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Dc),i.error===void 0&&(i.error=Dc),i.complete===void 0&&(i.complete=Dc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dc(){}function La(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,N(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Da=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=1e3,kC=2,xC=4*60*60*1e3,NC=.5;function Jp(t,e=TC,n=kC){const r=e*Math.pow(n,t),i=Math.round(NC*r*(Math.random()-.5)*2);return Math.min(xC,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t){return t&&t._delegate?t._delegate:t}class Tt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ho;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PC(e))try{this.getOrInitializeService({instanceIdentifier:dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dr){return this.instances.has(e)}getOptions(e=dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=dr){return this.component?this.component.multipleInstances?e:dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bC(t){return t===dr?void 0:t}function PC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const OC={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},LC=Z.INFO,DC={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},MC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=DC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ma{constructor(e){this.name=e,this._logLevel=LC,this._logHandler=MC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const FC=(t,e)=>e.some(n=>t instanceof n);let Zp,em;function jC(){return Zp||(Zp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UC(){return em||(em=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l_=new WeakMap,Zu=new WeakMap,a_=new WeakMap,Mc=new WeakMap,xh=new WeakMap;function zC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Bn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&l_.set(n,t)}).catch(()=>{}),xh.set(e,t),e}function WC(t){if(Zu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Zu.set(t,e)}let ed={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||a_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BC(t){ed=t(ed)}function VC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fc(this),e,...n);return a_.set(r,e.sort?e.sort():[e]),Bn(r)}:UC().includes(t)?function(...e){return t.apply(Fc(this),e),Bn(l_.get(this))}:function(...e){return Bn(t.apply(Fc(this),e))}}function HC(t){return typeof t=="function"?VC(t):(t instanceof IDBTransaction&&WC(t),FC(t,jC())?new Proxy(t,ed):t)}function Bn(t){if(t instanceof IDBRequest)return zC(t);if(Mc.has(t))return Mc.get(t);const e=HC(t);return e!==t&&(Mc.set(t,e),xh.set(e,t)),e}const Fc=t=>xh.get(t);function c_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Bn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Bn(o.result),a.oldVersion,a.newVersion,Bn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const GC=["get","getKey","getAll","getAllKeys","count"],KC=["put","add","delete","clear"],jc=new Map;function tm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jc.get(e))return jc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=KC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||GC.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return jc.set(e,s),s}BC(t=>({...t,get:(e,n,r)=>tm(e,n)||t.get(e,n,r),has:(e,n)=>!!tm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const td="@firebase/app",nm="0.9.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Ma("@firebase/app"),$C="@firebase/app-compat",QC="@firebase/analytics-compat",XC="@firebase/analytics",JC="@firebase/app-check-compat",ZC="@firebase/app-check",eI="@firebase/auth",tI="@firebase/auth-compat",nI="@firebase/database",rI="@firebase/database-compat",iI="@firebase/functions",sI="@firebase/functions-compat",oI="@firebase/installations",lI="@firebase/installations-compat",aI="@firebase/messaging",cI="@firebase/messaging-compat",uI="@firebase/performance",dI="@firebase/performance-compat",hI="@firebase/remote-config",fI="@firebase/remote-config-compat",pI="@firebase/storage",mI="@firebase/storage-compat",gI="@firebase/firestore",vI="@firebase/firestore-compat",yI="firebase",_I="10.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="[DEFAULT]",wI={[td]:"fire-core",[$C]:"fire-core-compat",[XC]:"fire-analytics",[QC]:"fire-analytics-compat",[ZC]:"fire-app-check",[JC]:"fire-app-check-compat",[eI]:"fire-auth",[tI]:"fire-auth-compat",[nI]:"fire-rtdb",[rI]:"fire-rtdb-compat",[iI]:"fire-fn",[sI]:"fire-fn-compat",[oI]:"fire-iid",[lI]:"fire-iid-compat",[aI]:"fire-fcm",[cI]:"fire-fcm-compat",[uI]:"fire-perf",[dI]:"fire-perf-compat",[hI]:"fire-rc",[fI]:"fire-rc-compat",[pI]:"fire-gcs",[mI]:"fire-gcs-compat",[gI]:"fire-fst",[vI]:"fire-fst-compat","fire-js":"fire-js",[yI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=new Map,rd=new Map;function EI(t,e){try{t.container.addComponent(e)}catch(n){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ut(t){const e=t.name;if(rd.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;rd.set(e,t);for(const n of Bl.values())EI(n,t);return!0}function tr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vn=new Wr("app","Firebase",SI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=_I;function u_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:nd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Vn.create("bad-app-name",{appName:String(i)});if(n||(n=Jy()),!n)throw Vn.create("no-options");const s=Bl.get(i);if(s){if(Gs(n,s.options)&&Gs(r,s.config))return s;throw Vn.create("duplicate-app",{appName:i})}const o=new AC(i);for(const a of rd.values())o.addComponent(a);const l=new CI(n,r,o);return Bl.set(i,l),l}function Fa(t=nd){const e=Bl.get(t);if(!e&&t===nd&&Jy())return u_();if(!e)throw Vn.create("no-app",{appName:t});return e}function lt(t,e,n){var r;let i=(r=wI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(l.join(" "));return}Ut(new Tt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II="firebase-heartbeat-database",TI=1,Ks="firebase-heartbeat-store";let Uc=null;function d_(){return Uc||(Uc=c_(II,TI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ks)}catch(n){console.warn(n)}}}}).catch(t=>{throw Vn.create("idb-open",{originalErrorMessage:t.message})})),Uc}async function kI(t){try{const n=(await d_()).transaction(Ks),r=await n.objectStore(Ks).get(h_(t));return await n.done,r}catch(e){if(e instanceof zt)Rr.warn(e.message);else{const n=Vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(n.message)}}}async function rm(t,e){try{const r=(await d_()).transaction(Ks,"readwrite");await r.objectStore(Ks).put(e,h_(t)),await r.done}catch(n){if(n instanceof zt)Rr.warn(n.message);else{const r=Vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rr.warn(r.message)}}}function h_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=1024,NI=30*24*60*60*1e3;class RI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new PI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=im();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=NI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=im(),{heartbeatsToSend:r,unsentEntries:i}=bI(this._heartbeatsCache.heartbeats),s=Ul(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function im(){return new Date().toISOString().substring(0,10)}function bI(t,e=xI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class PI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return i_()?s_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sm(t){return Ul(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(t){Ut(new Tt("platform-logger",e=>new qC(e),"PRIVATE")),Ut(new Tt("heartbeat",e=>new RI(e),"PRIVATE")),lt(td,nm,t),lt(td,nm,"esm2017"),lt("fire-js","")}AI("");var om={};const lm="@firebase/database",am="1.0.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f_="";function OI(t){f_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ie(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Hs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Qt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new LI(e)}}catch{}return new DI},gr=p_("localStorage"),id=p_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new Ma("@firebase/database"),MI=function(){let t=1;return function(){return t++}}(),m_=function(t){const e=IC(t),n=new wC;n.update(e);const r=n.digest();return Ih.encodeByteArray(r)},fo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=fo.apply(null,r):typeof r=="object"?e+=Ie(r):e+=r,e+=" "}return e};let Er=null,cm=!0;const FI=function(t,e){N(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(fi.logLevel=Z.VERBOSE,Er=fi.log.bind(fi),e&&id.set("logging_enabled",!0)):typeof t=="function"?Er=t:(Er=null,id.remove("logging_enabled"))},Me=function(...t){if(cm===!0&&(cm=!1,Er===null&&id.get("logging_enabled")===!0&&FI(!0)),Er){const e=fo.apply(null,t);Er(e)}},po=function(t){return function(...e){Me(t,...e)}},sd=function(...t){const e="FIREBASE INTERNAL ERROR: "+fo(...t);fi.error(e)},gn=function(...t){const e=`FIREBASE FATAL ERROR: ${fo(...t)}`;throw fi.error(e),new Error(e)},Qe=function(...t){const e="FIREBASE WARNING: "+fo(...t);fi.warn(e)},jI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Nh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},UI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ki="[MIN_NAME]",br="[MAX_NAME]",Vr=function(t,e){if(t===e)return 0;if(t===ki||e===br)return-1;if(e===ki||t===br)return 1;{const n=um(t),r=um(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},zI=function(t,e){return t===e?0:t<e?-1:1},Zi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ie(e))},Rh=function(t){if(typeof t!="object"||t===null)return Ie(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ie(e[r]),n+=":",n+=Rh(t[e[r]]);return n+="}",n},g_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ue(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const v_=function(t){N(!Nh(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},WI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},BI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function VI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const HI=new RegExp("^-?(0*)\\d{1,10}$"),GI=-2147483648,KI=2147483647,um=function(t){if(HI.test(t)){const e=Number(t);if(e>=GI&&e<=KI)return e}return null},ji=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Qe("Exception was thrown by user callback.",n),e},Math.floor(0))}},qI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_s=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Qe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Qe(e)}}class pi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}pi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="5",y_="v",__="s",w_="r",E_="f",S_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,C_="ls",I_="p",od="ac",T_="websocket",k_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=gr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&gr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function QI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function N_(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let r;if(e===T_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===k_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);QI(t)&&(n.ns=t.namespace);const i=[];return Ue(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(){this.counters_={}}incrementCounter(e,n=1){Qt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return lC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc={},Wc={};function Ph(t){const e=t.toString();return zc[e]||(zc[e]=new XI),zc[e]}function JI(t,e){const n=t.toString();return Wc[n]||(Wc[n]=e()),Wc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ji(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm="start",eT="close",tT="pLPCommand",nT="pRTLPCB",R_="id",b_="pw",P_="ser",rT="cb",iT="seg",sT="ts",oT="d",lT="dframe",A_=1870,O_=30,aT=A_-O_,cT=25e3,uT=3e4;class oi{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=po(e),this.stats_=Ph(n),this.urlFn=a=>(this.appCheckToken&&(a[od]=this.appCheckToken),N_(n,k_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ZI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(uT)),UI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ah((...s)=>{const[o,l,a,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===dm)this.id=l,this.password=a;else if(o===eT)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[dm]="t",r[P_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[rT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[y_]=bh,this.transportSessionId&&(r[__]=this.transportSessionId),this.lastSessionId&&(r[C_]=this.lastSessionId),this.applicationId&&(r[I_]=this.applicationId),this.appCheckToken&&(r[od]=this.appCheckToken),typeof location<"u"&&location.hostname&&S_.test(location.hostname)&&(r[w_]=E_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){oi.forceAllow_=!0}static forceDisallow(){oi.forceDisallow_=!0}static isAvailable(){return oi.forceAllow_?!0:!oi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!WI()&&!BI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Yy(n),i=g_(r,aT);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[lT]="t",r[R_]=e,r[b_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ie(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ah{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=MI(),window[tT+this.uniqueCallbackIdentifier]=e,window[nT+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ah.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Me("frame writing exception"),l.stack&&Me(l.stack),Me(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Me("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[R_]=this.myID,e[b_]=this.myPW,e[P_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+O_+r.length<=A_;){const o=this.pendingSegs.shift();r=r+"&"+iT+i+"="+o.seg+"&"+sT+i+"="+o.ts+"&"+oT+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(cT)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=16384,hT=45e3;let Vl=null;typeof MozWebSocket<"u"?Vl=MozWebSocket:typeof WebSocket<"u"&&(Vl=WebSocket);class Ot{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=po(this.connId),this.stats_=Ph(n),this.connURL=Ot.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[y_]=bh,typeof location<"u"&&location.hostname&&S_.test(location.hostname)&&(o[w_]=E_),n&&(o[__]=n),r&&(o[C_]=r),i&&(o[od]=i),s&&(o[I_]=s),N_(e,T_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,gr.set("previous_websocket_failure",!0);try{let r;r_(),this.mySock=new Vl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ot.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Vl!==null&&!Ot.forceDisallow_}static previouslyFailed(){return gr.isInMemoryStorage||gr.get("previous_websocket_failure")===!0}markConnectionHealthy(){gr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Hs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=g_(n,dT);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(hT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ot.responsesRequiredToBeHealthy=2;Ot.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[oi,Ot]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ot&&Ot.isAvailable();let r=n&&!Ot.previouslyFailed();if(e.webSocketOnly&&(n||Qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ot];else{const i=this.transports_=[];for(const s of qs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);qs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=6e4,pT=5e3,mT=10*1024,gT=100*1024,Bc="t",hm="d",vT="s",fm="r",yT="e",pm="o",mm="a",gm="n",vm="p",_T="h";class wT{constructor(e,n,r,i,s,o,l,a,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=po("c:"+this.id+":"),this.transportManager_=new qs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=_s(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>gT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>mT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Bc in e){const n=e[Bc];n===mm?this.upgradeIfSecondaryHealthy_():n===fm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===pm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Zi("t",e),r=Zi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:mm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Zi("t",e),r=Zi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Zi(Bc,e);if(hm in e){const r=e[hm];if(n===_T){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===gm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===vT?this.onConnectionShutdown_(r):n===fm?this.onReset_(r):n===yT?sd("Server Error: "+r):n===pm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):sd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),bh!==r&&Qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),_s(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(fT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_s(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(pT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(gr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends D_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!kh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Hl}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=32,_m=768;class ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new ee("")}function H(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function $n(t){return t.pieces_.length-t.pieceNum_}function ne(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ee(t.pieces_,e)}function Oh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ET(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ys(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function M_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ee(e,0)}function fe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ee(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function Ye(t,e){const n=H(t),r=H(e);if(n===null)return e;if(n===r)return Ye(ne(t),ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ST(t,e){const n=Ys(t,0),r=Ys(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Vr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Lh(t,e){if($n(t)!==$n(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function wt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if($n(t)>$n(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class CT{constructor(e,n){this.errorPrefix_=n,this.parts_=Ys(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Da(this.parts_[r]);F_(this)}}function IT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Da(e),F_(t)}function TT(t){const e=t.parts_.pop();t.byteLength_-=Da(e),t.parts_.length>0&&(t.byteLength_-=1)}function F_(t){if(t.byteLength_>_m)throw new Error(t.errorPrefix_+"has a key path longer than "+_m+" bytes ("+t.byteLength_+").");if(t.parts_.length>ym)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ym+") or object contains a cycle "+hr(t))}function hr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh extends D_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Dh}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=1e3,kT=60*5*1e3,wm=30*1e3,xT=1.3,NT=3e4,RT="server_kill",Em=3;class dn extends L_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=dn.nextPersistentConnectionId_++,this.log_=po("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=es,this.maxReconnectDelay_=kT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!r_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Dh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Hl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ie(s)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ho,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,c=l.s;dn.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Qt(e,"w")){const r=Ti(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_C(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=wm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=yC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ie(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):sd("Unrecognized action received from server: "+Ie(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=es,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=es,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>NT&&(this.reconnectDelay_=es),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+dn.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},c=function(u){N(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Me("getToken() completed but was canceled"):(Me("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,l=new wT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{Qe(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(RT)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Qe(u),a())}}}interrupt(e){Me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ju(this.interruptReasons_)&&(this.reconnectDelay_=es,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Rh(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ee(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Me("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Em&&(this.reconnectDelay_=wm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Me("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Em&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+f_.replace(/\./g,"-")]=1,kh()?e["framework.cordova"]=1:n_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Hl.getInstance().currentlyOnline();return Ju(this.interruptReasons_)&&e}}dn.nextPersistentConnectionId_=0;dn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new G(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new G(ki,e),i=new G(ki,n);return this.compare(r,i)!==0}minPost(){return G.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko;class j_ extends ja{static get __EMPTY_NODE(){return Ko}static set __EMPTY_NODE(e){Ko=e}compare(e,n){return Vr(e.name,n.name)}isDefinedOn(e){throw Mi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(br,Ko)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,Ko)}toString(){return".key"}}const mi=new j_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Pe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Pe.RED,this.left=i??rt.EMPTY_NODE,this.right=s??rt.EMPTY_NODE}copy(e,n,r,i,s){return new Pe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return rt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Pe.RED=!0;Pe.BLACK=!1;class bT{copy(e,n,r,i,s){return this}insert(e,n,r){return new Pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class rt{constructor(e,n=rt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new rt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Pe.BLACK,null,null))}remove(e){return new rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new qo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new qo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new qo(this.root_,null,this.comparator_,!0,e)}}rt.EMPTY_NODE=new bT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(t,e){return Vr(t.name,e.name)}function Mh(t,e){return Vr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ld;function AT(t){ld=t}const U_=function(t){return typeof t=="number"?"number:"+v_(t):"string:"+t},z_=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Qt(e,".sv"),"Priority must be a string or number.")}else N(t===ld||t.isEmpty(),"priority of unexpected type.");N(t===ld||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sm;class Re{constructor(e,n=Re.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),z_(this.priorityNode_)}static set __childrenNodeConstructor(e){Sm=e}static get __childrenNodeConstructor(){return Sm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Re(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Re.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:H(e)===".priority"?this.priorityNode_:Re.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Re.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=H(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(N(r!==".priority"||$n(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Re.__childrenNodeConstructor.EMPTY_NODE.updateChild(ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+U_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=v_(this.value_):e+=this.value_,this.lazyHash_=m_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Re.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Re.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Re.VALUE_TYPE_ORDER.indexOf(n),s=Re.VALUE_TYPE_ORDER.indexOf(r);return N(i>=0,"Unknown leaf type: "+n),N(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Re.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let W_,B_;function OT(t){W_=t}function LT(t){B_=t}class DT extends ja{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Vr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(br,new Re("[PRIORITY-POST]",B_))}makePost(e,n){const r=W_(e);return new G(n,new Re("[PRIORITY-POST]",r))}toString(){return".priority"}}const pe=new DT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=Math.log(2);class FT{constructor(e){const n=s=>parseInt(Math.log(s)/MT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Gl=function(t,e,n,r){t.sort(e);const i=function(a,c){const d=c-a;let u,h;if(d===0)return null;if(d===1)return u=t[a],h=n?n(u):u,new Pe(h,u.node,Pe.BLACK,null,null);{const v=parseInt(d/2,10)+a,_=i(a,v),E=i(v+1,c);return u=t[v],h=n?n(u):u,new Pe(h,u.node,Pe.BLACK,_,E)}},s=function(a){let c=null,d=null,u=t.length;const h=function(_,E){const S=u-_,m=u;u-=_;const p=i(S+1,m),g=t[S],w=n?n(g):g;v(new Pe(w,g.node,E,null,p))},v=function(_){c?(c.left=_,c=_):(d=_,c=_)};for(let _=0;_<a.count;++_){const E=a.nextBitIsOne(),S=Math.pow(2,a.count-(_+1));E?h(S,Pe.BLACK):(h(S,Pe.BLACK),h(S,Pe.RED))}return d},o=new FT(t.length),l=s(o);return new rt(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc;const qr={};class on{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return N(qr&&pe,"ChildrenNode.ts has not been loaded"),Vc=Vc||new on({".priority":qr},{".priority":pe}),Vc}get(e){const n=Ti(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof rt?n:null}hasIndex(e){return Qt(this.indexSet_,e.toString())}addIndex(e,n){N(e!==mi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(G.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Gl(r,e.getCompare()):l=qr;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new on(d,c)}addToIndexes(e,n){const r=Wl(this.indexes_,(i,s)=>{const o=Ti(this.indexSet_,s);if(N(o,"Missing index implementation for "+s),i===qr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(G.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Gl(l,o.getCompare())}else return qr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new G(e.name,l))),a.insert(e,e.node)}});return new on(r,this.indexSet_)}removeFromIndexes(e,n){const r=Wl(this.indexes_,i=>{if(i===qr)return i;{const s=n.get(e.name);return s?i.remove(new G(e.name,s)):i}});return new on(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts;class W{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&z_(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ts||(ts=new W(new rt(Mh),null,on.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ts}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ts:n}}getChild(e){const n=H(e);return n===null?this:this.getImmediateChild(n).getChild(ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new G(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ts:this.priorityNode_;return new W(i,o,s)}}updateChild(e,n){const r=H(e);if(r===null)return n;{N(H(e)!==".priority"||$n(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ne(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(pe,(o,l)=>{n[o]=l.val(e),r++,s&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+U_(this.getPriority().val())+":"),this.forEachChild(pe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":m_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new G(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mo?-1:0}withIndex(e){if(e===mi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===mi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(pe),i=n.getIterator(pe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===mi?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class jT extends W{constructor(){super(new rt(Mh),W.EMPTY_NODE,on.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const mo=new jT;Object.defineProperties(G,{MIN:{value:new G(ki,W.EMPTY_NODE)},MAX:{value:new G(br,mo)}});j_.__EMPTY_NODE=W.EMPTY_NODE;Re.__childrenNodeConstructor=W;AT(mo);LT(mo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=!0;function Ce(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Re(n,Ce(e))}if(!(t instanceof Array)&&UT){const n=[];let r=!1;if(Ue(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ce(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new G(o,a)))}}),n.length===0)return W.EMPTY_NODE;const s=Gl(n,PT,o=>o.name,Mh);if(r){const o=Gl(n,pe.getCompare());return new W(s,Ce(e),new on({".priority":o},{".priority":pe}))}else return new W(s,Ce(e),on.Default)}else{let n=W.EMPTY_NODE;return Ue(t,(r,i)=>{if(Qt(t,r)&&r.substring(0,1)!=="."){const s=Ce(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ce(e))}}OT(Ce);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT extends ja{constructor(e){super(),this.indexPath_=e,N(!K(e)&&H(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Vr(e.name,n.name):s}makePost(e,n){const r=Ce(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,r);return new G(n,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,mo);return new G(br,e)}toString(){return Ys(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT extends ja{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Vr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const r=Ce(e);return new G(n,r)}toString(){return".value"}}const BT=new WT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(t){return{type:"value",snapshotNode:t}}function xi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function $s(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Qs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function VT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange($s(n,l)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(xi(n,r)):o.trackChildChange(Qs(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(pe,(i,s)=>{n.hasChild(i)||r.trackChildChange($s(i,s))}),n.isLeafNode()||n.forEachChild(pe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Qs(i,s,o))}else r.trackChildChange(xi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.indexedFilter_=new Fh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xs.getStartPost_(e),this.endPost_=Xs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new G(n,r))||(r=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=W.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(W.EMPTY_NODE);const s=this;return n.forEachChild(pe,(o,l)=>{s.matches(new G(o,l))||(i=i.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Xs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new G(n,r))||(r=W.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=W.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(W.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,v)=>u(v,h)}else o=this.index_.getCompare();const l=e;N(l.numChildren()===this.limit_,"");const a=new G(n,r),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const u=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const v=h==null?1:o(h,a);if(d&&!r.isEmpty()&&v>=0)return s!=null&&s.trackChildChange(Qs(n,r,u)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange($s(n,u));const E=l.updateImmediateChild(n,W.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(xi(h.name,h.node)),E.updateImmediateChild(h.name,h.node)):E}}else return r.isEmpty()?e:d&&o(c,a)>=0?(s!=null&&(s.trackChildChange($s(c.name,c.node)),s.trackChildChange(xi(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(c.name,W.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ki}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:br}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pe}copy(){const e=new jh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function GT(t){return t.loadsAllData()?new Fh(t.getIndex()):t.hasLimit()?new HT(t):new Xs(t)}function Cm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===pe?n="$priority":t.index_===BT?n="$value":t.index_===mi?n="$key":(N(t.index_ instanceof zT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ie(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ie(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ie(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ie(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ie(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Im(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==pe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends L_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=po("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Kl.getListenId_(e,r),l={};this.listens_[o]=l;const a=Cm(e._queryParams);this.restRequest_(s+".json",a,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,r),Ti(this.listens_,o)===l){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=Kl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Cm(e._queryParams),r=e._path.toString(),i=new ho;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Hs(l.responseText)}catch{Qe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Qe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(){return{value:null,children:new Map}}function H_(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=H(e);t.children.has(r)||t.children.set(r,ql());const i=t.children.get(r);e=ne(e),H_(i,e,n)}}function ad(t,e,n){t.value!==null?n(e,t.value):qT(t,(r,i)=>{const s=new ee(e.toString()+"/"+r);ad(i,s,n)})}function qT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ue(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=10*1e3,$T=30*1e3,QT=5*60*1e3;class XT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new YT(e);const r=Tm+($T-Tm)*Math.random();_s(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ue(e,(i,s)=>{s>0&&Qt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),_s(this.reportStats_.bind(this),Math.floor(Math.random()*2*QT))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Lt||(Lt={}));function Uh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Wh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Lt.ACK_USER_WRITE,this.source=Uh()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ee(e));return new Yl(X(),n,this.revert)}}else return N(H(this.path)===e,"operationForChild called for unrelated child."),new Yl(ne(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n){this.source=e,this.path=n,this.type=Lt.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new Js(this.source,X()):new Js(this.source,ne(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Lt.OVERWRITE}operationForChild(e){return K(this.path)?new Pr(this.source,X(),this.snap.getImmediateChild(e)):new Pr(this.source,ne(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Lt.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new ee(e));return n.isEmpty()?null:n.value?new Pr(this.source,X(),n.value):new Ni(this.source,X(),n)}else return N(H(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ni(this.source,ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=H(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ZT(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(VT(o.childName,o.snapshotNode))}),ns(t,i,"child_removed",e,r,n),ns(t,i,"child_added",e,r,n),ns(t,i,"child_moved",s,r,n),ns(t,i,"child_changed",e,r,n),ns(t,i,"value",e,r,n),i}function ns(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>tk(t,l,a)),o.forEach(l=>{const a=ek(t,l,s);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function ek(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function tk(t,e,n){if(e.childName==null||n.childName==null)throw Mi("Should only compare child_ events.");const r=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(t,e){return{eventCache:t,serverCache:e}}function ws(t,e,n,r){return Ua(new Qn(e,n,r),t.serverCache)}function G_(t,e,n,r){return Ua(t.eventCache,new Qn(e,n,r))}function $l(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ar(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hc;const nk=()=>(Hc||(Hc=new rt(zI)),Hc);class te{constructor(e,n=nk()){this.value=e,this.children=n}static fromObject(e){let n=new te(null);return Ue(e,(r,i)=>{n=n.set(new ee(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(K(e))return null;{const r=H(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ne(e),n);return s!=null?{path:fe(new ee(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=H(e),r=this.children.get(n);return r!==null?r.subtree(ne(e)):new te(null)}}set(e,n){if(K(e))return new te(n,this.children);{const r=H(e),s=(this.children.get(r)||new te(null)).set(ne(e),n),o=this.children.insert(r,s);return new te(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new te(null):new te(null,this.children);{const n=H(e),r=this.children.get(n);if(r){const i=r.remove(ne(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new te(null):new te(this.value,s)}else return this}}get(e){if(K(e))return this.value;{const n=H(e),r=this.children.get(n);return r?r.get(ne(e)):null}}setTree(e,n){if(K(e))return n;{const r=H(e),s=(this.children.get(r)||new te(null)).setTree(ne(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new te(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(fe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(K(e))return null;{const s=H(e),o=this.children.get(s);return o?o.findOnPath_(ne(e),fe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,r){if(K(e))return this;{this.value&&r(n,this.value);const i=H(e),s=this.children.get(i);return s?s.foreachOnPath_(ne(e),fe(n,i),r):new te(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(fe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.writeTree_=e}static empty(){return new Ft(new te(null))}}function Es(t,e,n){if(K(e))return new Ft(new te(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ye(i,e);return s=s.updateChild(o,n),new Ft(t.writeTree_.set(i,s))}else{const i=new te(n),s=t.writeTree_.setTree(e,i);return new Ft(s)}}}function cd(t,e,n){let r=t;return Ue(n,(i,s)=>{r=Es(r,fe(e,i),s)}),r}function km(t,e){if(K(e))return Ft.empty();{const n=t.writeTree_.setTree(e,new te(null));return new Ft(n)}}function ud(t,e){return Hr(t,e)!=null}function Hr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ye(n.path,e)):null}function xm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(pe,(r,i)=>{e.push(new G(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new G(r,i.value))}),e}function Hn(t,e){if(K(e))return t;{const n=Hr(t,e);return n!=null?new Ft(new te(n)):new Ft(t.writeTree_.subtree(e))}}function dd(t){return t.writeTree_.isEmpty()}function Ri(t,e){return K_(X(),t.writeTree_,e)}function K_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(N(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=K_(fe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(fe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t,e){return Q_(e,t)}function rk(t,e,n,r,i){N(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Es(t.visibleWrites,e,n)),t.lastWriteId=r}function ik(t,e,n,r){N(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=cd(t.visibleWrites,e,n),t.lastWriteId=r}function sk(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function ok(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&lk(l,r.path)?i=!1:wt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return ak(t),!0;if(r.snap)t.visibleWrites=km(t.visibleWrites,r.path);else{const l=r.children;Ue(l,a=>{t.visibleWrites=km(t.visibleWrites,fe(r.path,a))})}return!0}else return!1}function lk(t,e){if(t.snap)return wt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&wt(fe(t.path,n),e))return!0;return!1}function ak(t){t.visibleWrites=q_(t.allWrites,ck,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ck(t){return t.visible}function q_(t,e,n){let r=Ft.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)wt(n,o)?(l=Ye(n,o),r=Es(r,l,s.snap)):wt(o,n)&&(l=Ye(o,n),r=Es(r,X(),s.snap.getChild(l)));else if(s.children){if(wt(n,o))l=Ye(n,o),r=cd(r,l,s.children);else if(wt(o,n))if(l=Ye(o,n),K(l))r=cd(r,X(),s.children);else{const a=Ti(s.children,H(l));if(a){const c=a.getChild(ne(l));r=Es(r,X(),c)}}}else throw Mi("WriteRecord should have .snap or .children")}}return r}function Y_(t,e,n,r,i){if(!r&&!i){const s=Hr(t.visibleWrites,e);if(s!=null)return s;{const o=Hn(t.visibleWrites,e);if(dd(o))return n;if(n==null&&!ud(o,X()))return null;{const l=n||W.EMPTY_NODE;return Ri(o,l)}}}else{const s=Hn(t.visibleWrites,e);if(!i&&dd(s))return n;if(!i&&n==null&&!ud(s,X()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(wt(c.path,e)||wt(e,c.path))},l=q_(t.allWrites,o,e),a=n||W.EMPTY_NODE;return Ri(l,a)}}}function uk(t,e,n){let r=W.EMPTY_NODE;const i=Hr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(pe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Hn(t.visibleWrites,e);return n.forEachChild(pe,(o,l)=>{const a=Ri(Hn(s,new ee(o)),l);r=r.updateImmediateChild(o,a)}),xm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Hn(t.visibleWrites,e);return xm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function dk(t,e,n,r,i){N(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=fe(e,n);if(ud(t.visibleWrites,s))return null;{const o=Hn(t.visibleWrites,s);return dd(o)?i.getChild(n):Ri(o,i.getChild(n))}}function hk(t,e,n,r){const i=fe(e,n),s=Hr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Hn(t.visibleWrites,i);return Ri(o,r.getNode().getImmediateChild(n))}else return null}function fk(t,e){return Hr(t.visibleWrites,e)}function pk(t,e,n,r,i,s,o){let l;const a=Hn(t.visibleWrites,e),c=Hr(a,X());if(c!=null)l=c;else if(n!=null)l=Ri(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],u=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let v=h.getNext();for(;v&&d.length<i;)u(v,r)!==0&&d.push(v),v=h.getNext();return d}else return[]}function mk(){return{visibleWrites:Ft.empty(),allWrites:[],lastWriteId:-1}}function Ql(t,e,n,r){return Y_(t.writeTree,t.treePath,e,n,r)}function Bh(t,e){return uk(t.writeTree,t.treePath,e)}function Nm(t,e,n,r){return dk(t.writeTree,t.treePath,e,n,r)}function Xl(t,e){return fk(t.writeTree,fe(t.treePath,e))}function gk(t,e,n,r,i,s){return pk(t.writeTree,t.treePath,e,n,r,i,s)}function Vh(t,e,n){return hk(t.writeTree,t.treePath,e,n)}function $_(t,e){return Q_(fe(t.treePath,e),t.writeTree)}function Q_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Qs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,$s(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,xi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Qs(r,e.snapshotNode,i.oldSnap));else throw Mi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const X_=new yk;class Hh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Qn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ar(this.viewCache_),s=gk(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(t){return{filter:t}}function wk(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Ek(t,e,n,r,i){const s=new vk;let o,l;if(n.type===Lt.OVERWRITE){const c=n;c.source.fromUser?o=hd(t,e,c.path,c.snap,r,i,s):(N(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!K(c.path),o=Jl(t,e,c.path,c.snap,r,i,l,s))}else if(n.type===Lt.MERGE){const c=n;c.source.fromUser?o=Ck(t,e,c.path,c.children,r,i,s):(N(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=fd(t,e,c.path,c.children,r,i,l,s))}else if(n.type===Lt.ACK_USER_WRITE){const c=n;c.revert?o=kk(t,e,c.path,r,i,s):o=Ik(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Lt.LISTEN_COMPLETE)o=Tk(t,e,n.path,r,s);else throw Mi("Unknown operation type: "+n.type);const a=s.getChanges();return Sk(e,o,a),{viewCache:o,changes:a}}function Sk(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=$l(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(V_($l(e)))}}function J_(t,e,n,r,i,s){const o=e.eventCache;if(Xl(r,n)!=null)return e;{let l,a;if(K(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ar(e),d=c instanceof W?c:W.EMPTY_NODE,u=Bh(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=Ql(r,Ar(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=H(n);if(c===".priority"){N($n(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const u=Nm(r,n,d,a);u!=null?l=t.filter.updatePriority(d,u):l=o.getNode()}else{const d=ne(n);let u;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const h=Nm(r,n,o.getNode(),a);h!=null?u=o.getNode().getImmediateChild(c).updateChild(d,h):u=o.getNode().getImmediateChild(c)}else u=Vh(r,c,e.serverCache);u!=null?l=t.filter.updateChild(o.getNode(),c,u,d,i,s):l=o.getNode()}}return ws(e,l,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function Jl(t,e,n,r,i,s,o,l){const a=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(K(n))c=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const v=a.getNode().updateChild(n,r);c=d.updateFullNode(a.getNode(),v,null)}else{const v=H(n);if(!a.isCompleteForPath(n)&&$n(n)>1)return e;const _=ne(n),S=a.getNode().getImmediateChild(v).updateChild(_,r);v===".priority"?c=d.updatePriority(a.getNode(),S):c=d.updateChild(a.getNode(),v,S,_,X_,null)}const u=G_(e,c,a.isFullyInitialized()||K(n),d.filtersNodes()),h=new Hh(i,u,s);return J_(t,u,n,i,h,l)}function hd(t,e,n,r,i,s,o){const l=e.eventCache;let a,c;const d=new Hh(i,e,s);if(K(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=ws(e,c,!0,t.filter.filtersNodes());else{const u=H(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),a=ws(e,c,l.isFullyInitialized(),l.isFiltered());else{const h=ne(n),v=l.getNode().getImmediateChild(u);let _;if(K(h))_=r;else{const E=d.getCompleteChild(u);E!=null?Oh(h)===".priority"&&E.getChild(M_(h)).isEmpty()?_=E:_=E.updateChild(h,r):_=W.EMPTY_NODE}if(v.equals(_))a=e;else{const E=t.filter.updateChild(l.getNode(),u,_,h,d,o);a=ws(e,E,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Rm(t,e){return t.eventCache.isCompleteForChild(e)}function Ck(t,e,n,r,i,s,o){let l=e;return r.foreach((a,c)=>{const d=fe(n,a);Rm(e,H(d))&&(l=hd(t,l,d,c,i,s,o))}),r.foreach((a,c)=>{const d=fe(n,a);Rm(e,H(d))||(l=hd(t,l,d,c,i,s,o))}),l}function bm(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function fd(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;K(n)?c=r:c=new te(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const v=e.serverCache.getNode().getImmediateChild(u),_=bm(t,v,h);a=Jl(t,a,new ee(u),_,i,s,o,l)}}),c.children.inorderTraversal((u,h)=>{const v=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!v){const _=e.serverCache.getNode().getImmediateChild(u),E=bm(t,_,h);a=Jl(t,a,new ee(u),E,i,s,o,l)}}),a}function Ik(t,e,n,r,i,s,o){if(Xl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(K(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Jl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(K(n)){let c=new te(null);return a.getNode().forEachChild(mi,(d,u)=>{c=c.set(new ee(d),u)}),fd(t,e,n,c,i,s,l,o)}else return e}else{let c=new te(null);return r.foreach((d,u)=>{const h=fe(n,d);a.isCompleteForPath(h)&&(c=c.set(d,a.getNode().getChild(h)))}),fd(t,e,n,c,i,s,l,o)}}function Tk(t,e,n,r,i){const s=e.serverCache,o=G_(e,s.getNode(),s.isFullyInitialized()||K(n),s.isFiltered());return J_(t,o,n,r,X_,i)}function kk(t,e,n,r,i,s){let o;if(Xl(r,n)!=null)return e;{const l=new Hh(r,e,i),a=e.eventCache.getNode();let c;if(K(n)||H(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ql(r,Ar(e));else{const u=e.serverCache.getNode();N(u instanceof W,"serverChildren would be complete if leaf node"),d=Bh(r,u)}d=d,c=t.filter.updateFullNode(a,d,s)}else{const d=H(n);let u=Vh(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=a.getImmediateChild(d)),u!=null?c=t.filter.updateChild(a,d,u,ne(n),l,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(a,d,W.EMPTY_NODE,ne(n),l,s):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ql(r,Ar(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Xl(r,X())!=null,ws(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Fh(r.getIndex()),s=GT(r);this.processor_=_k(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(W.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(W.EMPTY_NODE,l.getNode(),null),d=new Qn(a,o.isFullyInitialized(),i.filtersNodes()),u=new Qn(c,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ua(u,d),this.eventGenerator_=new JT(this.query_)}get query(){return this.query_}}function Nk(t){return t.viewCache_.serverCache.getNode()}function Rk(t){return $l(t.viewCache_)}function bk(t,e){const n=Ar(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(H(e)).isEmpty())?n.getChild(e):null}function Pm(t){return t.eventRegistrations_.length===0}function Pk(t,e){t.eventRegistrations_.push(e)}function Am(t,e,n){const r=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Om(t,e,n,r){e.type===Lt.MERGE&&e.source.queryId!==null&&(N(Ar(t.viewCache_),"We should always have a full cache before handling merges"),N($l(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Ek(t.processor_,i,e,n,r);return wk(t.processor_,s.viewCache),N(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Z_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Ak(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(pe,(s,o)=>{r.push(xi(s,o))}),n.isFullyInitialized()&&r.push(V_(n.getNode())),Z_(t,r,n.getNode(),e)}function Z_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return ZT(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zl;class e0{constructor(){this.views=new Map}}function Ok(t){N(!Zl,"__referenceConstructor has already been defined"),Zl=t}function Lk(){return N(Zl,"Reference.ts has not been loaded"),Zl}function Dk(t){return t.views.size===0}function Gh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return N(s!=null,"SyncTree gave us an op for an invalid query."),Om(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Om(o,e,n,r));return s}}function t0(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Ql(n,i?r:null),a=!1;l?a=!0:r instanceof W?(l=Bh(n,r),a=!1):(l=W.EMPTY_NODE,a=!1);const c=Ua(new Qn(l,a,!1),new Qn(r,i,!1));return new xk(e,c)}return o}function Mk(t,e,n,r,i,s){const o=t0(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Pk(o,n),Ak(o,n)}function Fk(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Xn(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Am(c,n,r)),Pm(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||s.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Am(a,n,r)),Pm(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Xn(t)&&s.push(new(Lk())(e._repo,e._path)),{removed:s,events:o}}function n0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Gn(t,e){let n=null;for(const r of t.views.values())n=n||bk(r,e);return n}function r0(t,e){if(e._queryParams.loadsAllData())return Wa(t);{const r=e._queryIdentifier;return t.views.get(r)}}function i0(t,e){return r0(t,e)!=null}function Xn(t){return Wa(t)!=null}function Wa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea;function jk(t){N(!ea,"__referenceConstructor has already been defined"),ea=t}function Uk(){return N(ea,"Reference.ts has not been loaded"),ea}let zk=1;class Lm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new te(null),this.pendingWriteTree_=mk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function s0(t,e,n,r,i){return rk(t.pendingWriteTree_,e,n,r,i),i?Ui(t,new Pr(Uh(),e,n)):[]}function Wk(t,e,n,r){ik(t.pendingWriteTree_,e,n,r);const i=te.fromObject(n);return Ui(t,new Ni(Uh(),e,i))}function An(t,e,n=!1){const r=sk(t.pendingWriteTree_,e);if(ok(t.pendingWriteTree_,e)){let s=new te(null);return r.snap!=null?s=s.set(X(),!0):Ue(r.children,o=>{s=s.set(new ee(o),!0)}),Ui(t,new Yl(r.path,s,n))}else return[]}function go(t,e,n){return Ui(t,new Pr(zh(),e,n))}function Bk(t,e,n){const r=te.fromObject(n);return Ui(t,new Ni(zh(),e,r))}function Vk(t,e){return Ui(t,new Js(zh(),e))}function Hk(t,e,n){const r=qh(t,n);if(r){const i=Yh(r),s=i.path,o=i.queryId,l=Ye(s,e),a=new Js(Wh(o),l);return $h(t,s,a)}else return[]}function ta(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||i0(o,e))){const a=Fk(o,e,n,r);Dk(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=a.removed;if(l=a.events,!i){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(h,v)=>Xn(v));if(d&&!u){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const v=qk(h);for(let _=0;_<v.length;++_){const E=v[_],S=E.query,m=c0(t,E);t.listenProvider_.startListening(Ss(S),Zs(t,S),m.hashFn,m.onComplete)}}}!u&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Ss(e),null):c.forEach(h=>{const v=t.queryToTagMap.get(Ba(h));t.listenProvider_.stopListening(Ss(h),v)}))}Yk(t,c)}return l}function o0(t,e,n,r){const i=qh(t,r);if(i!=null){const s=Yh(i),o=s.path,l=s.queryId,a=Ye(o,e),c=new Pr(Wh(l),a,n);return $h(t,o,c)}else return[]}function Gk(t,e,n,r){const i=qh(t,r);if(i){const s=Yh(i),o=s.path,l=s.queryId,a=Ye(o,e),c=te.fromObject(n),d=new Ni(Wh(l),a,c);return $h(t,o,d)}else return[]}function pd(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,v)=>{const _=Ye(h,i);s=s||Gn(v,_),o=o||Xn(v)});let l=t.syncPointTree_.get(i);l?(o=o||Xn(l),s=s||Gn(l,X())):(l=new e0,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=W.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((v,_)=>{const E=Gn(_,X());E&&(s=s.updateImmediateChild(v,E))}));const c=i0(l,e);if(!c&&!e._queryParams.loadsAllData()){const h=Ba(e);N(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const v=$k();t.queryToTagMap.set(h,v),t.tagToQueryMap.set(v,h)}const d=za(t.pendingWriteTree_,i);let u=Mk(l,e,n,d,s,a);if(!c&&!o&&!r){const h=r0(l,e);u=u.concat(Qk(t,e,h))}return u}function Kh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ye(o,e),c=Gn(l,a);if(c)return c});return Y_(i,e,s,n,!0)}function Kk(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=Ye(c,n);r=r||Gn(d,u)});let i=t.syncPointTree_.get(n);i?r=r||Gn(i,X()):(i=new e0,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Qn(r,!0,!1):null,l=za(t.pendingWriteTree_,e._path),a=t0(i,e,l,s?o.getNode():W.EMPTY_NODE,s);return Rk(a)}function Ui(t,e){return l0(e,t.syncPointTree_,null,za(t.pendingWriteTree_,X()))}function l0(t,e,n,r){if(K(t.path))return a0(t,e,n,r);{const i=e.get(X());n==null&&i!=null&&(n=Gn(i,X()));let s=[];const o=H(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,d=$_(r,o);s=s.concat(l0(l,a,c,d))}return i&&(s=s.concat(Gh(i,t,r,n))),s}}function a0(t,e,n,r){const i=e.get(X());n==null&&i!=null&&(n=Gn(i,X()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=$_(r,o),d=t.operationForChild(o);d&&(s=s.concat(a0(d,l,a,c)))}),i&&(s=s.concat(Gh(i,t,r,n))),s}function c0(t,e){const n=e.query,r=Zs(t,n);return{hashFn:()=>(Nk(e)||W.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Hk(t,n._path,r):Vk(t,n._path);{const s=VI(i,n);return ta(t,n,null,s)}}}}function Zs(t,e){const n=Ba(e);return t.queryToTagMap.get(n)}function Ba(t){return t._path.toString()+"$"+t._queryIdentifier}function qh(t,e){return t.tagToQueryMap.get(e)}function Yh(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ee(t.substr(0,e))}}function $h(t,e,n){const r=t.syncPointTree_.get(e);N(r,"Missing sync point for query tag that we're tracking");const i=za(t.pendingWriteTree_,e);return Gh(r,n,i,null)}function qk(t){return t.fold((e,n,r)=>{if(n&&Xn(n))return[Wa(n)];{let i=[];return n&&(i=n0(n)),Ue(r,(s,o)=>{i=i.concat(o)}),i}})}function Ss(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Uk())(t._repo,t._path):t}function Yk(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ba(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function $k(){return zk++}function Qk(t,e,n){const r=e._path,i=Zs(t,e),s=c0(t,n),o=t.listenProvider_.startListening(Ss(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)N(!Xn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,d,u)=>{if(!K(c)&&d&&Xn(d))return[Wa(d).query];{let h=[];return d&&(h=h.concat(n0(d).map(v=>v.query))),Ue(u,(v,_)=>{h=h.concat(_)}),h}});for(let c=0;c<a.length;++c){const d=a[c];t.listenProvider_.stopListening(Ss(d),Zs(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Qh(n)}node(){return this.node_}}class Xh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=fe(this.path_,e);return new Xh(this.syncTree_,n)}node(){return Kh(this.syncTree_,this.path_)}}const Xk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Dm=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Jk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Zk(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Jk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},Zk=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&N(!1,"Unexpected increment value: "+r);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},u0=function(t,e,n,r){return Jh(e,new Xh(n,t),r)},d0=function(t,e,n){return Jh(t,new Qh(e),n)};function Jh(t,e,n){const r=t.getPriority().val(),i=Dm(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Dm(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Re(l,Ce(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Re(i))),o.forEachChild(pe,(l,a)=>{const c=Jh(a,e.getImmediateChild(l),n);c!==a&&(s=s.updateImmediateChild(l,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ef(t,e){let n=e instanceof ee?e:new ee(e),r=t,i=H(n);for(;i!==null;){const s=Ti(r.node.children,i)||{children:{},childCount:0};r=new Zh(i,r,s),n=ne(n),i=H(n)}return r}function zi(t){return t.node.value}function h0(t,e){t.node.value=e,md(t)}function f0(t){return t.node.childCount>0}function ex(t){return zi(t)===void 0&&!f0(t)}function Va(t,e){Ue(t.node.children,(n,r)=>{e(new Zh(n,t,r))})}function p0(t,e,n,r){n&&!r&&e(t),Va(t,i=>{p0(i,e,!0,r)}),n&&r&&e(t)}function tx(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function vo(t){return new ee(t.parent===null?t.name:vo(t.parent)+"/"+t.name)}function md(t){t.parent!==null&&nx(t.parent,t.name,t)}function nx(t,e,n){const r=ex(n),i=Qt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,md(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,md(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=/[\[\].#$\/\u0000-\u001F\u007F]/,ix=/[\[\].#$\u0000-\u001F\u007F]/,Gc=10*1024*1024,tf=function(t){return typeof t=="string"&&t.length!==0&&!rx.test(t)},m0=function(t){return typeof t=="string"&&t.length!==0&&!ix.test(t)},sx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),m0(t)},ox=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Nh(t)||t&&typeof t=="object"&&Qt(t,".sv")},g0=function(t,e,n,r){r&&e===void 0||Ha(La(t,"value"),e,n)},Ha=function(t,e,n){const r=n instanceof ee?new CT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+hr(r));if(typeof e=="function")throw new Error(t+"contains a function "+hr(r)+" with contents = "+e.toString());if(Nh(e))throw new Error(t+"contains "+e.toString()+" "+hr(r));if(typeof e=="string"&&e.length>Gc/3&&Da(e)>Gc)throw new Error(t+"contains a string greater than "+Gc+" utf8 bytes "+hr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ue(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!tf(o)))throw new Error(t+" contains an invalid key ("+o+") "+hr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);IT(r,o),Ha(t,l,r),TT(r)}),i&&s)throw new Error(t+' contains ".value" child '+hr(r)+" in addition to actual children.")}},lx=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Ys(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!tf(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(ST);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&wt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},ax=function(t,e,n,r){if(r&&e===void 0)return;const i=La(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ue(e,(o,l)=>{const a=new ee(o);if(Ha(i,l,fe(n,a)),Oh(a)===".priority"&&!ox(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),lx(i,s)},v0=function(t,e,n,r){if(!(r&&n===void 0)&&!m0(n))throw new Error(La(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},cx=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),v0(t,e,n,r)},y0=function(t,e){if(H(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ux=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!tf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!sx(n))throw new Error(La(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ga(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Lh(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function _0(t,e,n){Ga(t,n),w0(t,r=>Lh(r,e))}function kt(t,e,n){Ga(t,n),w0(t,r=>wt(r,e)||wt(e,r))}function w0(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(hx(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function hx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Er&&Me("event: "+n.toString()),ji(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx="repo_interrupt",px=25;class mx{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ql(),this.transactionQueueTree_=new Zh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function gx(t,e,n){if(t.stats_=Ph(t.repoInfo_),t.forceRestClient_||qI())t.server_=new Kl(t.repoInfo_,(r,i,s,o)=>{Mm(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Fm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ie(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new dn(t.repoInfo_,e,(r,i,s,o)=>{Mm(t,r,i,s,o)},r=>{Fm(t,r)},r=>{vx(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=JI(t.repoInfo_,()=>new XT(t.stats_,t.server_)),t.infoData_=new KT,t.infoSyncTree_=new Lm({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=go(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),nf(t,"connected",!1),t.serverSyncTree_=new Lm({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const c=o(l,a);kt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function E0(t){const n=t.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ka(t){return Xk({timestamp:E0(t)})}function Mm(t,e,n,r,i){t.dataUpdateCount++;const s=new ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Wl(n,c=>Ce(c));o=Gk(t.serverSyncTree_,s,a,i)}else{const a=Ce(n);o=o0(t.serverSyncTree_,s,a,i)}else if(r){const a=Wl(n,c=>Ce(c));o=Bk(t.serverSyncTree_,s,a)}else{const a=Ce(n);o=go(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=bi(t,s)),kt(t.eventQueue_,l,o)}function Fm(t,e){nf(t,"connected",e),e===!1&&Ex(t)}function vx(t,e){Ue(e,(n,r)=>{nf(t,n,r)})}function nf(t,e,n){const r=new ee("/.info/"+e),i=Ce(n);t.infoData_.updateSnapshot(r,i);const s=go(t.infoSyncTree_,r,i);kt(t.eventQueue_,r,s)}function rf(t){return t.nextWriteId_++}function yx(t,e,n){const r=Kk(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Ce(i).withIndex(e._queryParams.getIndex());pd(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=go(t.serverSyncTree_,e._path,s);else{const l=Zs(t.serverSyncTree_,e);o=o0(t.serverSyncTree_,e._path,s,l)}return kt(t.eventQueue_,e._path,o),ta(t.serverSyncTree_,e,n,null,!0),s},i=>(yo(t,"get for query "+Ie(e)+" failed: "+i),Promise.reject(new Error(i))))}function _x(t,e,n,r,i){yo(t,"set",{path:e.toString(),value:n,priority:r});const s=Ka(t),o=Ce(n,r),l=Kh(t.serverSyncTree_,e),a=d0(o,l,s),c=rf(t),d=s0(t.serverSyncTree_,e,a,c,!0);Ga(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,v)=>{const _=h==="ok";_||Qe("set at "+e+" failed: "+h);const E=An(t.serverSyncTree_,c,!_);kt(t.eventQueue_,e,E),gd(t,i,h,v)});const u=of(t,e);bi(t,u),kt(t.eventQueue_,u,[])}function wx(t,e,n,r){yo(t,"update",{path:e.toString(),value:n});let i=!0;const s=Ka(t),o={};if(Ue(n,(l,a)=>{i=!1,o[l]=u0(fe(e,l),Ce(a),t.serverSyncTree_,s)}),i)Me("update() called with empty data.  Don't do anything."),gd(t,r,"ok",void 0);else{const l=rf(t),a=Wk(t.serverSyncTree_,e,o,l);Ga(t.eventQueue_,a),t.server_.merge(e.toString(),n,(c,d)=>{const u=c==="ok";u||Qe("update at "+e+" failed: "+c);const h=An(t.serverSyncTree_,l,!u),v=h.length>0?bi(t,e):e;kt(t.eventQueue_,v,h),gd(t,r,c,d)}),Ue(n,c=>{const d=of(t,fe(e,c));bi(t,d)}),kt(t.eventQueue_,e,[])}}function Ex(t){yo(t,"onDisconnectEvents");const e=Ka(t),n=ql();ad(t.onDisconnect_,X(),(i,s)=>{const o=u0(i,s,t.serverSyncTree_,e);H_(n,i,o)});let r=[];ad(n,X(),(i,s)=>{r=r.concat(go(t.serverSyncTree_,i,s));const o=of(t,i);bi(t,o)}),t.onDisconnect_=ql(),kt(t.eventQueue_,X(),r)}function Sx(t,e,n){let r;H(e._path)===".info"?r=pd(t.infoSyncTree_,e,n):r=pd(t.serverSyncTree_,e,n),_0(t.eventQueue_,e._path,r)}function jm(t,e,n){let r;H(e._path)===".info"?r=ta(t.infoSyncTree_,e,n):r=ta(t.serverSyncTree_,e,n),_0(t.eventQueue_,e._path,r)}function Cx(t){t.persistentConnection_&&t.persistentConnection_.interrupt(fx)}function yo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Me(n,...e)}function gd(t,e,n,r){e&&ji(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function S0(t,e,n){return Kh(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function sf(t,e=t.transactionQueueTree_){if(e||qa(t,e),zi(e)){const n=I0(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Ix(t,vo(e),n)}else f0(e)&&Va(e,n=>{sf(t,n)})}function Ix(t,e,n){const r=n.map(c=>c.currentWriteId),i=S0(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];N(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=Ye(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,c=>{yo(t,"transaction put response",{path:a.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(An(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();qa(t,ef(t.transactionQueueTree_,e)),sf(t,t.transactionQueueTree_),kt(t.eventQueue_,e,d);for(let h=0;h<u.length;h++)ji(u[h])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Qe("transaction at "+a.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}bi(t,e)}},o)}function bi(t,e){const n=C0(t,e),r=vo(n),i=I0(t,n);return Tx(t,i,r),r}function Tx(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Ye(n,a.path);let d=!1,u;if(N(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,u=a.abortReason,i=i.concat(An(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=px)d=!0,u="maxretry",i=i.concat(An(t.serverSyncTree_,a.currentWriteId,!0));else{const h=S0(t,a.path,o);a.currentInputSnapshot=h;const v=e[l].update(h.val());if(v!==void 0){Ha("transaction failed: Data returned ",v,a.path);let _=Ce(v);typeof v=="object"&&v!=null&&Qt(v,".priority")||(_=_.updatePriority(h.getPriority()));const S=a.currentWriteId,m=Ka(t),p=d0(_,h,m);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=p,a.currentWriteId=rf(t),o.splice(o.indexOf(S),1),i=i.concat(s0(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(An(t.serverSyncTree_,S,!0))}else d=!0,u="nodata",i=i.concat(An(t.serverSyncTree_,a.currentWriteId,!0))}kt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(u),!1,null))))}qa(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ji(r[l]);sf(t,t.transactionQueueTree_)}function C0(t,e){let n,r=t.transactionQueueTree_;for(n=H(e);n!==null&&zi(r)===void 0;)r=ef(r,n),e=ne(e),n=H(e);return r}function I0(t,e){const n=[];return T0(t,e,n),n.sort((r,i)=>r.order-i.order),n}function T0(t,e,n){const r=zi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Va(e,i=>{T0(t,i,n)})}function qa(t,e){const n=zi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,h0(e,n.length>0?n:void 0)}Va(e,r=>{qa(t,r)})}function of(t,e){const n=vo(C0(t,e)),r=ef(t.transactionQueueTree_,e);return tx(r,i=>{Kc(t,i)}),Kc(t,r),p0(r,i=>{Kc(t,i)}),n}function Kc(t,e){const n=zi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(An(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?h0(e,void 0):n.length=s+1,kt(t.eventQueue_,vo(e),i);for(let o=0;o<r.length;o++)ji(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function xx(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Qe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Um=function(t,e){const n=Nx(t),r=n.namespace;n.domain==="firebase.com"&&gn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&gn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||jI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new x_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ee(n.pathString)}},Nx=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=kx(t.substring(d,u)));const h=xx(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Rx=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=zm.charAt(n%64),n=Math.floor(n/64);N(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=zm.charAt(e[i]);return N(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ie(this.snapshot.exportVal())}}class x0{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return K(this._path)?null:Oh(this._path)}get ref(){return new Xt(this._repo,this._path)}get _queryIdentifier(){const e=Im(this._queryParams),n=Rh(e);return n==="{}"?"default":n}get _queryObject(){return Im(this._queryParams)}isEqual(e){if(e=ge(e),!(e instanceof lf))return!1;const n=this._repo===e._repo,r=Lh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ET(this._path)}}class Xt extends lf{constructor(e,n){super(e,n,new jh,!1)}get parent(){const e=M_(this._path);return e===null?null:new Xt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Pi{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ee(e),r=Ai(this.ref,e);return new Pi(this._node.getChild(n),r,pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Pi(i,Ai(this.ref,r),pe)))}hasChild(e){const n=new ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ln(t,e){return t=ge(t),t._checkNotDeleted("ref"),e!==void 0?Ai(t._root,e):t._root}function Ai(t,e){return t=ge(t),H(t._path)===null?cx("child","path",e,!1):v0("child","path",e,!1),new Xt(t._repo,fe(t._path,e))}function R0(t,e){t=ge(t),y0("push",t._path),g0("push",e,t._path,!0);const n=E0(t._repo),r=Rx(n),i=Ai(t,r),s=Ai(t,r);let o;return e!=null?o=af(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function af(t,e){t=ge(t),y0("set",t._path),g0("set",e,t._path,!1);const n=new ho;return _x(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function bx(t,e){ax("update",e,t._path,!1);const n=new ho;return wx(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function cf(t){t=ge(t);const e=new N0(()=>{}),n=new Ya(e);return yx(t._repo,t,n).then(r=>new Pi(r,new Xt(t._repo,t._path),t._queryParams.getIndex()))}class Ya{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new k0("value",this,new Pi(e.snapshotNode,new Xt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new x0(this,e,n):null}matches(e){return e instanceof Ya?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class uf{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new x0(this,e,n):null}createEvent(e,n){N(e.childName!=null,"Child events should have a childName.");const r=Ai(new Xt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new k0(e.type,this,new Pi(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof uf?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Px(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,c=(d,u)=>{jm(t._repo,t,l),a(d,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new N0(n,s||void 0),l=e==="value"?new Ya(o):new uf(e,o);return Sx(t._repo,t,l),()=>jm(t._repo,t,l)}function Ax(t,e,n,r){return Px(t,"value",e,n,r)}Ok(Xt);jk(Xt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox="FIREBASE_DATABASE_EMULATOR_HOST",vd={};let Lx=!1;function Dx(t,e,n,r){t.repoInfo_=new x_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Mx(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||gn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Me("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Um(s,i),l=o.repoInfo,a,c;typeof process<"u"&&om&&(c=om[Ox]),c?(a=!0,s=`http://${c}?ns=${l.namespace}`,o=Um(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new pi(pi.OWNER):new $I(t.name,t.options,e);ux("Invalid Firebase Database URL",o),K(o.path)||gn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=jx(l,t,d,new YI(t.name,n));return new Ux(u,t)}function Fx(t,e){const n=vd[e];(!n||n[t.key]!==t)&&gn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Cx(t),delete n[t.key]}function jx(t,e,n,r){let i=vd[e.name];i||(i={},vd[e.name]=i);let s=i[t.toURLString()];return s&&gn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new mx(t,Lx,n,r),i[t.toURLString()]=s,s}class Ux{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(gx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xt(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Fx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gn("Cannot call "+e+" on a deleted database.")}}function Wi(t=Fa(),e){const n=tr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Xy("database");r&&zx(n,...r)}return n}function zx(t,e,n,r={}){t=ge(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&gn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&gn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new pi(pi.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:e_(r.mockUserToken,t.app.options.projectId);s=new pi(o)}Dx(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(t){OI(Br),Ut(new Tt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Mx(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),lt(lm,am,t),lt(lm,am,"esm2017")}dn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};dn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Wx();const na=({className:t=""})=>f.jsx("svg",{className:`${t} || ""`,width:"11",height:"11",fill:"none",children:f.jsx("path",{d:"M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z",fill:"#ada8c4"})}),Bx=({crossesOffset:t})=>f.jsxs(f.Fragment,{children:[f.jsx(na,{className:`hidden absolute -top-[0.3125rem] left-[1.5625rem] ${t&&t} pointer-events-none lg:block xl:left-[2.1875rem]`}),f.jsx(na,{className:`hidden absolute  -top-[0.3125rem] right-[1.5625rem] ${t&&t} pointer-events-none lg:block xl:right-[2.1875rem]`})]}),$a=({className:t,id:e,crosses:n,crossesOffset:r,customPaddings:i,children:s})=>f.jsxs("div",{id:e,className:`
      relative 
      ${i||`py-10 lg:py-16 xl:py-20 ${n?"lg:py-32 xl:py-40":""}`} 
      ${t||""}`,children:[s,f.jsx("div",{className:"hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10"}),f.jsx("div",{className:"hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10"}),n&&f.jsxs(f.Fragment,{children:[f.jsx("div",{className:`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${r&&r} pointer-events-none lg:block xl:left-10 right-10`}),f.jsx(Bx,{crossesOffset:r})]})]}),b0=()=>f.jsx("svg",{className:"ml-5 fill-n-1",width:"24",height:"24",children:f.jsx("path",{d:"M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414z"})}),P0=()=>f.jsx("div",{className:"absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none"}),A0=()=>f.jsx("svg",{className:"block",width:0,height:0,children:f.jsx("clipPath",{id:"benefits",clipPathUnits:"objectBoundingBox",children:f.jsx("path",{d:"M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0"})})}),Yo="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e",Vx="/assets/loading-CllQEGx_.png",Hx="/assets/background-BF0zYYBx.jpg",Gx="/assets/Maps-DZAmcqyW.png",Kx="/assets/curve-DplsLMf8.png",qx="/assets/hero-background-DUbyVUlq.jpg",Yx="/assets/image-1-CTP7EhT0.png",$x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA81SURBVHgBTVhrjF3XVf7O677vvGc843nbk4ntxMYT2wWcWE2hxaVReagpUmlBQqj/iIBfIAWkABJUUAkRiAAJ/lBaCYkKkFBFUho7cRu7cezY7sSveOwZz4w9T8/cmfs+95zdb619rh2P78w9+5yz99prre9b39pOdXfbGNh/xjiAgyf/5I5jB8rbjzB7+RL+5pvfwEc37iDr+zCI0ZHNwLgefF4P7+lH2IqQDVykAx8hPFyfX8Rzh57GH/zRH+Pg4RnA5Xy6oMxr7G+uYa+SZZM15bdToYEx5AGj9ohBrn4X41w7SRzTuIv4w1dewcP1TbR43Wy10FcoYLC3m9cRMqkUVrdLyKYDrG+V4HGegY4Cnp7ah4u37mH/yB689pffwNTBw1yCq6kvHN1/e135o/Yb+12ek+vEoMRZ8qW9Q/lOY+7evoG//vM/RbWyy6EWFweGugrwaL+JmujwDKb6C5gZGUAqaiFshtgsV7C0sYWfXL+Fo/tGcX1uEf/yxuvYXF+xm2/7yLS/mU/8Tvxr1IMlY1+QLdHQ+MldMTgOQ7z6ytdxa3YWV++vIOJ4F8M62l3Evj29GB/sR3c+h5kjR5Ch98o7ZaysreHMxQ/xzu37qDPk3YUMJsfG8GBlHS+99Mv4/VdfQ5AKrAGw3lNPJqbpusaG2jfJcOwkW3HtXX2RQ7NXL2F9eQlzq5sMa4RCysepyT341PR+TE+Oo7unB0Euh3QuD3geOgtFDHQWGNIhnLx5C69/7xwebpcxNRwyV11c+OE5nDr/Lk6c+gxc1008KNa4XFqy2nmMBTHFTW7zS9ts8zhdDXPr/XfPorSzg0oYMaQejg324hcO7cezk3vRU8xxzMBLsthP5RAUO5EudqCDhk/vm8BXnz+KZhTh5uIyDo3txSY9/N3v/DtWl5bQClsJUCxE2kF2EmeJKTS6bUxsE1dCqzuKsVvawuL1K1ihB2Ian2bSHZnYg57uDgWGjJkW3+Puo7iFKGwCfgBkc/zrIUNDx/s6MdpV1DlMs45iLovbN27i2//0Oj66+gFR36JfLCjb6d8OvYIECcTVpYm7Y2Nh/t7bb2JjdRU7tYZOkg88hoAeC5g/rk8jQ8StkIbV0arVmK91RPzr8p5s1OPzWebnWG+XrrxTraOnkMOj7R2sMG2+9cbf4drF8wRa1E7GBCbG/hi1yXlCfRrlhHLo0ff+/02slSoCZDSIzEYU01MGIQeERhwvxbQLuEfyQGQQNZr6nm6Q9xy+l/J8jHfkdIObTJU0k6rJZz64OotqLcR3/vkf8GDpvnqwTXVtFNMaGmistRpaflybpqSUMrbWVrAm4VW3JzzJkLT48dI5uAynG6TVSCFqQ4pp7pb0s7W+jnsL8yhVavCV4ww2ONdWqUS0p1FmTl+fu4f1jW28f/YtxPSiSZgDeMLavicLJwVEdi4ekJvV3R2GYhc10kwraunDIf96vLm9U0W1ucz8MaSYDPq7u2ikZgvm7s7j7NWbuolPHz+C/r5+9Pd0wydiHcKy0myh0WigyXlNFKJnYABXfnwep7/0m8iT+K0HLeUJdCVZFLxOG738H5GMG0z4ar2GJkMrk0UETYM0s1NtolatYokovDy3pKGdGevD9NQ4hoZHUKmU0J/xcWWjge9fX8KAuaXVJkUD0+S+1VIZpXoTPbkMS2LAkpgiea+hVqkgly/Y0Lrib0tBvtjrJRCXXI2JxpheXLs/j92GZW0TWwIIBShM8l2G/8pqGR+VI4wUi9g2KWxXQxwZHEHZyaIU3cHRnpBgziFvmtjT04WJ7juoEVDbFW6QkRB/9Bbz2N5cY8j9hKjNY5i0Y+ybNsQjuZQ8YJIzPIvLyyiQElrNJrbrDQSsbz7DmM8QwY6HI6ODOEavTY6MKps6pTXeT2GQ9Tdz9DCq9HKe73d3EcHVMqb3zOLS/BJrtodGPUKO3qzUSTvZNGZ+9ueRITW1CyDa1ZYp4WtJM9b6WIwTpHKHxc4uiM193Z24u7mDgEjNs4p0dnbi4MSYGhkyZ3OsIGXW1zCT1d0XO7qQazXhjey1q3CDMQ3dN9SH9+8tUmDkmL/CoZFWicHREcy88KJWok8KKSsajHhQOZk5FtEwMS5Shn/qwCGWsW7cnZtHkTXWiSX+UhID8lsGOd9BKp3hkIcKS1zgZOD4KaRoKBUSTKPOypIhzwRo0QN9rN0+nyNtoJANdOGhgT584cu/jYmnDkCR+gkXxkrS0Oe5iA2tEGYsVNFs0MgGuiVHSNIZEm5I40fzKdxcXqUHmmgZV+nHYfIHmQzDWUCzWuFMjuYeyH9RowrDtJCi39VR1EUbTJ/Rng6iP4vPfuGL6Ortg8tnP+k9WzSMcqevhsU2tCbxXoMlqV6vqu4TNxO8eEQSPpDqwHTRY5LHSPEZz41pnIsH8/O48tEdHBgbQjcX7O3qxNjMDN/1lUpkE500sMa5B2hYzJz+1PHn8Eu//mV0dHWraFAOpBdjV8jZVYeirWYsSGINcUjvNYVeyFX9ewZRyKSxVa3RGBeXVrdRvnwHXx/dj4De9KVUcHx4ZJhVxrDOZjA8PIi+kQmto02St8t8jJmvGXq4wHBnWaM9hvzIsRNKK6poEvwaJOU2oUFRWC60NBkNsRBySCqQEIfkwRMnnyfRdqkoEBroIJE+imnoPEmaYzVy5DpbAcMUGO7sQA9d3Vx6iOtnz+Hqu+exOTdHT7hWQHgiKCIQZzhy4hiOn/oss8DXcVuqbIFQTCSc7CrN2BJi1UyCYFElojKyRNZXfutrOPv2O5i7v4S1jQ318pkrN/Dpg+M0kGglqf/3988jTx480NeNLtLKXiK4sGcA/tgIQnpZNndtcU1XHySZn375ayrHknIL4+NJT6LK3goWsdMXUo5VOsWK5JYAxVhDpT5KTr30a7/C3AyZl3WsrDzA2+9ewA+u3sap6WEEfOdzJ49il+DJc45snmHtK8IbH1bJ5Tm+iouPFxbRT/144hc/j8GxiaQHsT+Pec8k4vlxr0YvWs9FCpL2p6WAIfU4FiQuwxCwLKXYGPX29uMg1fTVufuoEOE7lTrWHm0hpmJJsffIT+2H01lEvVnTlBEUSxsQk3bul2rIdfbYpimxSpxhjOVgqViiph3jJhqVKBYvifeUqNWbVi7F8hMZK0odqTGxsqfju9g3OYHlu3ewy+4tX8izOgSa4vJsTHCxLMDlPC55r1KpIiToJiYmcXrvU5iYnqZMc20/RqNc5nQsqjzpIK2xiXDmmB8nvCMELUkcG8vyei35KASti0MVilYaXo+OjsIJt1Gv0TuUXr00VMriDg306WmPvUmzVqfQaCEgSJ555hCeHTuAApGLtshPpJ7SHI1J/KZ0k8h9MoWKgaT+0fRIO02L7DghgBbRKaARUNTojRpzMcPODlRhIZVJFDtYZo5Ky5nneN3bRJYv947tY/dGLqTnpZDdmL2C/7y3iq/8xsuYGh/R6iHhVIpRI1k93KQn5z0Rx357F22goI1k/STGcfEGddwC286lpQUMUxandzcQc3FpH8XLog3pKnhsAwKywEDfAD3AEKXSBEsLDuc63J3Ce+/cxu/+2d9jZmIQX/ri5/G5nztGIjdPThUS8eIkvbnf7lSi2FYUkSat2FWvSGbWadiZH1/D7OxNPFxexO+cmEAPecGnRPJZooR0tftnSoR1GhdIjc7ZE4rA8oeT9CiZnI98RwfqG3WcO38R5z68jtMvPo/TL5xAH+np+LNPs3QHj9W7TOvL7AICLTcckFp5+Tb74IUF3ozx5pnzKG2uMu5sO/lzcP8+pKM6NnnM0WIIAlKJiAAmG2VaRI+maBjFAIWE44o4iJSuXFaTmNf3diKbPmJEo4Y333obb535EdHuY2r/JE499ww+Q6+e/JmDJHLOLWGIaFyZC/zHWz/Ev/3X/6HOol8vPaKCCW0T76VFNyGm3lvgAs+N9KHGcZHuQZI3GVE5XKTAipIhwQt1STsRCbgYci9TwNJmBR8+LCOiE4x8WHdbXF96GuGJu2wX7lEzfut/foCJyTH83ld/Fc76g2XzMZvqV//2X/GTa9dYRUK4kZIMIgoCVzzMyQhRUoyHsf4+/MnLL6C8sYI6lXU+kyJaq9qTSBNVZC9coADIUReKqmm1hJ5IN9zrX333HXywXFLPOaI2BZHSq7DkibflOdfXLgQuN+RRxHo7+aHX/uIfv42HiwuEZFNDKQpEc0hODBxX1YjWVHqkzDxb3qrg2b29JOoqFXO3Tl7I55HOZlUjal8saUODBWhN5vQb37uACwus242KblZFqXSF1JDMDRplC4Z2lq5jT9YEdIsV/zXKF3qJuSESKshq4Tb6UqTGyc6099UCbrCytYvL99cx1N+Pwwem1CgJq8cWtE4pFUqCM9w+r2+u7OKb/3sBl/h8RCEi0XAlpPLRRsQKYfWk8JZJumIRt6IT+w+/aNyoqSpGYU1j5KQgrpftsVKrwaTParescKV3tfxpiYoxsncIx/eP4+D4IE+9Au1F1nlycG+9hLn1Mj5+sEYxkLJnUpIqunCgm471AMBVZzw+/5PoiSWkJ6/YC6fv0Ekj4loUjCez0NCYu4mrO+o1rRtUxk6Q0xoq4ZDJ9RSUG5N9i9QXCwTnLp4cBPBGcgKUPC9G6aX1TqRiNtD8jZguGqFkA3LWo4cDcv4XN6taZrTuSmjpwbbSsMc3pMtmRcMg/UgsTZHs3E2pGBUjWqwwTmzRKcJAThlikfzJ4VRb1kvaCN8KAKV+u3K+Q/0p9dnVMNty57mWon1D1WFFWKhokjwUI+XozUnlucgOj1lIG00jdY2U5FtPSOhJO9wmv3Mx7tbQG+D5tKMgiJM2lp7wMpp/4h3JTQGVtrlSGEhPuh5sPvqprKaaaAIvnRXABYoqaVIiwt/EkshNlfh68hXbMmSSF20YJKS+Tigh9XKdJFXmDBf0EyCp58ULkiZisJ5L+8mBpFUqOoccEClYZCNpu0ZYVY8LydPDDTUoauxanSbMKnnGPNAXiUQrx2M7JpVRgPL42JPfBFRhjTnV1BA7Sc7Jj1AOy4oqGi2Lnm2k1FKr7/U0w9c8tlJfuxM+F1d3qWbkIXonrmzYyRSpsT4gTpTq4Wht5MKaf0bLlsMzlURV6sGkmsMx8Z+s4wsHMrcZ06RrszJOuM4VbzPnYsEcN+X5QWKr6NFQhYU2W9USfgpBStBRY+iRWQAAAABJRU5ErkJggg==",Qx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA9sSURBVHgBTVhpbyNXdj1VrCrui0hqay3uTT32jKc9nrEHSCcIkCCDYJAP+Zo/lI8B8j1A/kKAIAkmQDwDjJdx2o5jTbfV7kVSayFFiRR3FquKrKo591ap3VKzRbKq3rvv3HPPPe8ZL4/asWkakJ9YfqNY3xv8YxjyXYQwAkx+MJF8B/k+Tu5D8hFRFEG+MUwTIR+wM6a+540wzQyvh+mdOgv0H69FRiYdI9bPMo+MFXGMmO8t/iCKo3RCA8twyScjLJehDmRlMnotTicyJEL5x88y6HTShzsdIZvPY3jdxWw8QKFUQXNjG+VKE5mMpWNprLqIiM9JEBzPsnUMRqOBafxExrIYtMzL74yr3ijWi/wJoxQ2YiUrlpXM5x5MuTlMPssUy+WSrwWuWy/gjno4PDrEgEHeu/0jxL6HXvcS+byBd+7ex86Dj+HkazpGxMVLQBKckbEZNKOOlhqcoC0gGHESqM7E9xbXAcUiDhUhCVBvTHMpuNpE2XRs/U4G9/wAneN9BniEq/4QX+8fEB4LrmtivZZFpWCjddHBdbcLf9DF2t6HqN96lwCQK3w+Y1vIMKBl4CcUkLlSmiVAJr8BQbD0Gf4KDyWYmKvUgHkhJGoWUyTZF/TkhsUywsmLx/jqD79DfzTGtwfHCJnCRx89hKzv1asTbDTzWKmUmfo5Li4vkGHKbNvG5p0PNQDXncPJOkQ5ryCEKZ2Wi4AUC1OKBXzOhmUYUUreJKiE+7G+lx9Jg2EkxRPy4tnJU/zjP/0znjx/jZWcrS+bi/jN/3yGlVoZqytFxEsXtUIWO9tNXBJJ4fnw7CnyxQoqq3eT6bTkoMCYWUsRyzJo3BQcX7PZjCnWaorIycybi5JKLRlNc/Qm1QH59d//8W/44vEBcvz8o8Ya7m7U4XPV18Mpzs8vEIwL2N5aRbDwNXVbm2sY9rtorDTQffEF7EKN6FU1tXGaPcMw35aNZH5RDcZk3UiFlDWUCmYiBHEiBQZuggXGnZd49ewZDBbQo3vr+PXHD7BSrzA1C0ynLlqtHv736AJREKDdvsDd21vIGMLNGdFfYDEYYPT6K6w++OsUwfgt6TFUGaIEMY3Jth0GaKQ3pAHppRstlAXJf0Q18OaY9U4xH49QdjL4YLeOnd1byOUcrepiqaBLOb0ewV94COYZ+LMhJymiXCxhOZ+xch1M2y9R2ngPpcY2pEBxA5wqCN4CJSlUUwUxSgJMBDRWKUn0LuUlr8+nPfLBQ72YRTZjoEDSZ3M51b9CIYcSX416FbcaFWT5jM25X708lKrDIhCpMmGZEXzfx+ziQMX8DQiqGjfiH+OmBWiASRcx9IMKKIlh3khMnCxvwcoOxpeijri/VUODMuLkWWGWqfyRZ6VSs/kcrGIBDlFtlLN4fXzBxXmqmUK4cLFExslh3m9h4Y3f6kg/AGSYxg9Bc5HmDzek7SydUKtLKlgEPHDhD1t8t8CdWzXsNIp43hnhi/3vMRiNdFJGiBevOzg672GrWUYhl9Exnz19DodcCij4cs/gigtlsAt3rICoZsQJbqY2CGmtIW6oaLU6bVawSeFMRFo1k+8tvqSy5bOgF4y7WmmVWhEPt9kZTAfj6yFaZ2eolHLw3Skmg74SvVxwUKB0FPNZtE6vsLZ+gvt77+riF47FdthH1e0ztHeS4lAqSV9O0/5W4Vg+1TzW9hOmaU1kRQaTnpg3lgivjzAd9mEzdQ65FzDQ3z+/xMSP8LOBS73bgDscodUbwxeaEHmTzxazNnIk48nLEzRqFWzu3kO5voalP8X08hDlnYcExtJgEsobb/p+Am1EoFLtyWRsvUlauWXaiqgItOldYdI71yq2raRn5hlonejcXsvj/gZ1LV/GlC2vwupuVApsTyGLJI9mo4zj11fY3VrB2fGpNHts7f0Ek/mY2SaS0wHnE5HOsIgMbX/CaaGWgGYzJkskRNgYawMXS5XwT8iaEWRn10Snj5g32+yh9Boa3F/craPebKBazqNCVPzhEDvNEqYLVu3Mh92s4vbOGiZDF532AHt31jGfjDHrd+AUytoAxIjMF9DsLdU0iFVjQbLNCVj3d/coM0JK9kAxC9IT03aiqY5DD26/TWK3KRVLXWHMSiyQ7JuNGpr1ElZWyuyXMapscyu1KtbrZaxVy0TQQo4GY3u9St108PJ1Vxc9GfQ0zRkrp+5J5gnTvi8BT9nePEpRPltM0Ax4YcEbfKq/3OizRXl8+f4ci/kEwWQAk8gJejaLxpu5yJFf9aKDaqkIh991WSjXgykXSt6yc1TYh/MMJutk0WjWsX5rBQGDOTi8IP/mCoZVXCEAAeakztx3+ddT5OaMQ2ogJ8pALlqOlU1yHkdverGVutyY0HuzsXLUYYBSXD47gmWpYiLLQN1gwYUtYDPtizgAXR4zQbp4Pp1QnchWWOEUavNaVSEmD0MKt0V0CizAlksQUnBMZmZBwHI0DTadjOTZutEdqSC9yTDU8qiTFmWyHA6a+GBBWezWnOkuFzJYsAerNMUmRmeXKDgFZPJUV67P9wJ44wmqW1twWEDX/hJ1ptwukX9sjeft1zBrO5qRwWyuqBXpxKUXi0kQfyixWLJ6n0ov/BJZ0Q4kZjKMVOtylQayo2v1k4PRVOVjTI6s8p6AEnXRnaN/PECfKNkMPrYNVNYd3N2pwySls9m8Cnm9UmIVhyiwL0t//+PX/49Hv34Ax2E6uU6XqRceSusVFVS+i1B7nGRGkc0XCvzaSaRGkIwTlXead1CedmHmKhgPF8iXa3DDDgwSX9y1bI62d1axwcq1CuRpmXJlL+GwDZpGYtaWlK3NtSrc8RgeC6FCnm421+ExoDz7+YKR5PhX6iHQrJiJeRYOCvekFUkal2xlNzsxsWeihYHTgNO4x5yNYGdLKFXZi1ev0Kb/29vdhlNObLygE2sfZbcgT+Wz9PAlx435XftyQG4G6HU6yDfvYfO9h8xEzHuCxBveiHPqA7TlSpoX5IPykIMJxPKSXVikhpLkp4Mxyg1+ZirENhk2tu7cRaZQhM/F5XLkHbuLcNVgccnahUMBx211ron6NSEMINTcqObZjYrU1QnOjk51TjEnSFxLAgx/ZQ+UmBemONQ9QLICeX/jrMPIUOjZieFM2E0mLi7PXmHr9m1kieI203bRamH3VgE5Cm9EaRIkRVPdYIxWm1vQeYBi50J7eK3kaM///PEL3L/n4fTLp/jVP/w9BusPUKzWU/TM1AskmVAO+rTxzEHSC3lBgjTSbaj0SZd8WRQ2UFyaqLRe4ZCOulytJjzhbafcFNXJH5OFI7Ikld3vj5WfK7USxoMZtTXQDhUGETZWK/jk02/xAaWq+Owb/JhG5Di7inFzC9n6pvZ62ajdbJOt/rCX5NxMTgWSi6nPkyKhw9g+eYLZ/tfaaUL6wMPzDjtKiGcvOti4VcfDu2uQvba4Fx2UBZI3RNhJXa6iezHE1WxBh0MH5Eq3YMD0lN89b2PjekbRP8Va4xjT+jqsnT0Ym5sJghzMGtP6yH4xYya2R9RfhHOV/HtneK58+uY/f4sVx8Rw6kNcYVs6CV1KNWeh15sg+/4OAw50ATKOKakxk3RJ2l/TO+6/uqL1z7FylyiRdudsmft8dqc7xZ/f20D/rIer6VO6n9/hZ3+1j/O9j/Duh7+E5c5dNYoZ7RQUY7acCie533mGV4/30WSa/PEcx5zcYLBfshpbRO/viJrBdAwOr/D5k9f4+MEtHhJwLytCHycGxF/EeHFKE3s60F5+GUzhMeBVBjqgOWjSFa1wzN98d4YRO9J9bhd+uruJdW+E7vff4F8++70UCSuYJA6DxA+uU2h/FfYw4olAp8ed2tDDRq2Aw6sxu4GHc6ZIanXphTi9GGlnefrNCbk4xM/vbbIPWypPc2+JQ6Ly3ctL3sPOJG2SwVGXUaNrqjHd0ikOyNEJr79Pa/a3P9lCfXOV1DDwaLOMJ122VSH1zT44w1V/5JO0Tw64SfIpnDFOrifokCey8kAOi9hnd2nnL2kORjwh2OZmqTX1MD4b4r/aI1jcyGcZTcwFjzhGxkhaVla2rRyjIn5SzmmI8gW9Vp/ZeJ8u/WPuEr89usTwoIVtespfPPTwaHUV1nt7P1X1lo3NHa+L0hG5wIcOmJZynttE6b18XTJFpWxyusVzIfR4PiOZrLC42pQPuSdHVscTD9QFLijSLlKQ6uH7ZboTznGRZzQSWaLsU0ceMJgmC+bfn7bUpH5Ae/aLH2+hSs2s1bOw/uznv1TVjpY+nE/+FVOmPFok+4EWEZDNzzknnTKamRfpniPHKh2Q5EWmwqGo+ss5NmgEQga+FMsmqWQAYZwcoThc1Ez0VgyweEICkKf73iQAOT7zSauPVW4P/mZvE3e44XIJmDmaYaVYhKUbZZGY77/E88/+AJfBRBRpi2idXk7k6A6uOh6eavGDHPNIkAFfWwxKPI8cN0nAa6zqWKwapUnCcblYgosskQ35cqRL8HqNG6odBjcm935LqrxDmvzl9grlx8Pn5PKD7Tq2qJfllTms5yeHcoKE7f1PEVCfvj/ps9TJMTcgmkBXnDSvu7IVlOMI8XsiusxfUfbFMrH0bAmeKxWjSupixirNkmu2GstQQbDkdIyjFFiU16zaxyMPNVbN+9xDH/Wm1MMc9poVVY6snWTAuuxxW+gP4F11pEqIDPCEulUuZRW5LuEWYs/5PsdJ5MRgkaaryoLIiKng+8AwtP/mZTdnyd4io6iX+P1UDAQXUJZxxE5xUfvMlAjx+0SvTxBuc29TyzMDHH/Qn/CEjEdzNLmm9Ltm/xRj+VKMKLuB+LUDrki6co6DdjmxhBRJgRAhT+WCrSo1uQ6DkiyICmTfcI8I832ZSBgZUytZghd+SnG4/PthKa9KscGUy+ZzKUrB58aUqCkrvMb9jmmyyTvdNmY0A+fUPWkDtwi5SEqbzd5U/UoauVhJCXgWJsWSF6QifSQ9AIcuRHYVomU121TbFoj55XciNWL1BcV1buDnzMQqi0W2DjK2y+K5GlNnGXCduigbKGvX5QEjN0fJSX2M/yNJh7yxwECuKT3zIJlYkBYpKTmWpkbSKKgt0jOATHIIxlaWnGOXiVrBlj1LyAVGOoCtPg/6TEiIAw4kJ2UCQKPMfYg2chKGGTs+6ei+2vJOj/HpV68wJqQWB12lGegywDarUoALUrcrZ4BIPwuWDcvR0IK0wu30JNZIkSrqfiJMg4EWWt5IDmLk84TPrHO+nPCYUffGLqakmCAumSnlslhdt/An9/WN5SMnS0gAAAAASUVORK5CYII=",Xx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAoqSURBVHgBzVhZb1xnGX7ONqtnJvZ47PEaO67jNrXdpFFT1DRFYWmhaqGlVBX0GiGEuOGCa34CSBVICKGC6EUvCIU2KqihVZuaNEnr2tnHWxzbmfEy+3rmrDzfcVLBBY7H5IJXss+Zc75zvuc87/5Kp9cuuPg/FhV7lFCjjvjKPOKbGfgsC+VELzI9+1Hu6IArSbhf0hpAcj00dxXJpatQtjZgVEuobOVgSA5kzY8DwSDcjgTWjzyBrbFx2D4f/lfZNUDFtjH+4bvwX59BrVKGS9YaDQOuokFvNFHVq3AcfoG0isClawiH98GZPIL6ya/CIat7FWk3NhioVfDAu6fQvHoZPk1GqVxDTbeg1xtQZcByHKpVhkSAml+DrCiIRcJoGBbUWDvy330V+tiD2Ivck0HJdTHwzikUZ6ZhE0iVbNUFc7ZJsCqKDQuOLME0TRQISJJNCCLD2ToSsQD6wmH0nXkbC6MHeU9Gq3JPgJErl2Bfu0Tzc3AzU4CmSQRnwySKzXoTBaq6ZLqo8lrdduBXZIRlhcya2DBMLJcMDOdq6Ds3hfTxE2hV7g3wwpTH2AbVGiA423aRp3qzhosV3cCW5aLMa1WXaoYE8omwZCPAZ9t9Kvp9vGdamPjzW1AnDsOKRtCK7AyQ6pWKRayX61B4njccFJsWpktNbFg2tsiiofkwMZDAE90JxOjFEtVd0U3cyuUxe3sDN/js0bAGNbOFsffOAC+9iPsGUM3msLmShkbbyVabWKkZuFo3kSZraRs43NeNp8YOYCARRyQSgS8Q4lMKHEmFpEjIFYo49ckFfDy3hIjPwODcPHyu8PTdx8mdAX74gdgO6YaJxZqJFP9umjYqdI7vHR3HY2OjiHbEEQxHoKhcaRmwyaxMFrVIO4Ld/Xi5az+U9/+Btz+9gNFsFgO872i7D787rpQuX0GupmOJ7F0neyl6aVFW8exwPx7oSUIKxXBpLYtcaQFtmoLhRDuSnfvo7TbSG+s4e32JsVHCsYcm8dbFCzi/uoFevQFJ270d7ghQMxrQHWCraWKJ9rdMtX6tvxOjyS50die5uYkeVUelvI7ruSLWbgUwsT+JeHsUM4urWFvPoyscgq+8ismDh5C+vQSX75Ja8JMdA1OdtrRY0nFDt5FqGhjaF8V4TzcG+wfgU1VYpU2UCnkoZHWz1sT59BYW6AyK6sNFMhunmmO9oziXLuHB/kFY/gDkUAityI4M5qsNpBhKZrh5LBzEoe44huitiuTi5s05rOUZejoHcDsMzJcX8EA0jEQkhIOPHcfjqwXs04Jw+sdwq/g5njl6HLXSOquMAFqRHRnMWUDGpI6Zz0YTHXh0eD9iHUmU6TSbhSo2KjpVGMPDXQk8PzKEZx4cwbFDIwh2DeHZF15BvVqAkzqHbz86jsG+Xnzrxz9Cq7Ijg9GJCVRTN/HDL41TpX7UHA0uj4mOKNqUHowxYhSzKVh6E8PxNjx0cD86e3ogVwpIDgzh69/5PrILV9CejMOVbUS7emDgPgJsf/kFTH5ykSqV0B/vwHrTD9PQ0d4eRvu+Njhm03MIiYqIsMwKBIKQfUHYNAuplMe+eBKBSAfMehmVWhGOHudX+3HfAMqdHXjpZz9B9u2/INkVx3Jqjfm4hpDaSUZFYA4i0h6HForCaugwykVoPQlcmvoIeqmAMq0jvn8UAwdG0HQUGLbFT7mPAD2QQwcwcnAM6bU1WM06Pt1seOFlmDVhPN6OzgTN2JVQzKQBW8Fv3noNZ1cyeLgzjjqrn5NKEGGfDLt7DLYkodV65p4ArXAAzvhjCBfKzMebMBiEU1tVuKIG5Lmt15lBeLQk9AyO4CuHWRDQTpOxGPIOi4XhQ5DawkhncoiO9KJV2VXOKQ3TuPVj6GVcW5r6DIoWwFqVKc2t4uZmAelCBd84egTz6SzO30pjmeFpnZ6us/xa+Ptp9CWSOHb0KdaJNlqV3SVF5k7f5CH0TzyE3rKB7I157/JctgK/7KA3nsAb09ewtJlFR8CHJnGYZLch8m6ziFsM5vBH8PSTY2hVWmuaaEOPfPMkTl+dQ1il3TG7+FjpSMzT780tIsYmqSMYwYnebvhZH4bIeCPYhstr81haT0MJaWhVWm47Y32dCA0NoLK8hBqDeE2hb9QaBKfhxGAP2VNxNr2GYr3OD2gg0RbCsYF+5DQNWlvrXV7rTQLl+ItP42ImizzL/duVKhZKZagstwyW+Kv5dWTKORSNGnrYOO2PtmF6fQMbTJfSHvrlPTXuicEkjj/5OP5w6q9g6cdiQUGDZVSDteJkPIZoWxRp9isy42ONJlCgx9erVexF9jxZ+PJTj2Pqoylcz2S2WwO2mlnWi2dZzdjMLbphwO+vcKUDk86iBdpwZWYO44cPtrTPnlQsJNyXxJGeLgTF9EA0TGw7G7S7cq2Oeq3GzNJAvVJkBVOA0ahBb+p47Re/w3xqpaV9lFd/+oOfo0UxydRrv/wjBpoVNJldVM+0XF5nyU+gLKlJnMNGXnR6wvnp6WxH67Uqzn7wCRZTq7ymYoDF7b3sck8qLhVrSF1bwOXyJqqcOlimAcswvH5Zwp1BBTdmBvwCgMs1NpmuWyYufPwxZqdnkc+9gudePLkjyD0xGGL6m/n8CuZSLLWoOodFgLBDfNGx/XvnxqMs3cFMi6JDCTZNAl1ZzGD2YgqFrRJ/s59mSvT5/5OzPTvJ8y89h+nzn8K0WeFZ2AbEzT1wdwFKdwDyXIw9JN53+RG2rkNti6FB81hcmEN6dRXamTZW7VFMPvIwjp2YxOBoN18n7Q3geiaP3//6TcY+PyxF9QoHT8TRM7o7C8U52WLy9sCLeY4rKVCCYai8Jp4Sg6YqtaBRCxJZPc8++trsDXSwnR2bGN0bwN/+6g2spZeplibByNts0f7uMiZU6Qo2CUZMGgRrMHUCi8DlJEL2hkjsne+oWuZ627FQZTEc4TMNuY6NLfbip+dbB5hK3cLsZ9N0Cv0OUZIHhGX3NkBPjc62J7tkjJ4icbgpkTVJABZLvP8ODOE4BChsV/MF2E9FmCqbDE1Vhqwy/Az0LQGc+Wweb75+yguenlqF2ZENwYpLFYk/UF0eZqrfZWsq7M4bu7G6AdXpEIzwekX85kKHzPn4fNAfRLmSZX8mM2U2aT4+r03YFcAmh0Hn3p/Fu+98yOEl8y77jka9wimrcBBuJOo8dzu8SNyMjfG2Y0jbDiI+RgB13O34KFIjPKe3hEF4fXSusAmVfXOdQ1GFH9eoCQYj9wa4zv72T6//DSsry8ixjdSbNaqGXshBkWOqnLNYHkhZZBNWLO5dR7nr0QQu4uG21WHbMSQxxjO8NaqqocFZt+Lzw2bGEXHU4R4B0edQI/8VoM4ab+rMDN5/758olbZQZ2nfpN0Z4sViXxq2LFTL4aWXSoQaRU6m6lwRUrw4KHlpUDiSAEmonkmI2Y0g3LNIvk8stfTadvahvWp+v7eXRhL+Bexx22qsavYdAAAAAElFTkSuQmCC",O0="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='48'%20height='48'%20rx='12'%20fill='%23FFC876'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M30%2033H18C16.3432%2033%2015%2031.6569%2015%2030V18C15%2016.3432%2016.3432%2015%2018%2015H30C31.6569%2015%2033%2016.3432%2033%2018V30C33%2031.6569%2031.6569%2033%2030%2033ZM29%2020.4142L24.4142%2025H26C26.5523%2025%2027%2025.4477%2027%2026C27%2026.5523%2026.5523%2027%2026%2027H22C21.4477%2027%2021%2026.5523%2021%2026V22C21%2021.4477%2021.4477%2021%2022%2021C22.5523%2021%2023%2021.4477%2023%2022V23.5858L27.5858%2019H26C25.4477%2019%2025%2018.5523%2025%2018C25%2017.4477%2025.4477%2017%2026%2017H30C30.5523%2017%2031%2017.4477%2031%2018V22C31%2022.5523%2030.5523%2023%2030%2023C29.4477%2023%2029%2022.5523%2029%2022V20.4142Z'%20fill='%230E0C15'/%3e%3c/svg%3e",Jx=()=>f.jsxs("div",{className:"absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2",children:[f.jsx("div",{className:"absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"}),f.jsx("div",{className:"absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"})]}),Zx=()=>f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"absolute top-0 left-5 w-0.25 h-full bg-n-6"}),f.jsx("div",{className:"absolute top-0 right-5 w-0.25 h-full bg-n-6"})]}),Qa=()=>f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"}),f.jsx("div",{className:"absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"}),f.jsx("div",{className:"absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"})]}),eN=()=>f.jsxs("div",{className:"absolute inset-0 pointer-events-none lg:hidden",children:[f.jsx("div",{className:"absolute inset-0 opacity-[.03]",children:f.jsx("img",{className:"w-full h-full object-cover",src:Hx,width:688,height:953,alt:"Background"})}),f.jsx(Jx,{}),f.jsx(Zx,{}),f.jsx(Qa,{})]}),nr=()=>f.jsx("svg",{className:"block",width:0,height:0,children:f.jsxs("defs",{children:[f.jsxs("linearGradient",{id:"btn-left",x1:"50%",x2:"50%",y1:"0%",y2:"100%",children:[f.jsx("stop",{offset:"0%",stopColor:"#89F9E8"}),f.jsx("stop",{offset:"100%",stopColor:"#FACB7B"})]}),f.jsxs("linearGradient",{id:"btn-top",x1:"100%",x2:"0%",y1:"50%",y2:"50%",children:[f.jsx("stop",{offset:"0%",stopColor:"#D87CEE"}),f.jsx("stop",{offset:"100%",stopColor:"#FACB7B"})]}),f.jsxs("linearGradient",{id:"btn-bottom",x1:"100%",x2:"0%",y1:"50%",y2:"50%",children:[f.jsx("stop",{offset:"0%",stopColor:"#9099FC"}),f.jsx("stop",{offset:"100%",stopColor:"#89F9E8"})]}),f.jsxs("linearGradient",{id:"btn-right",x1:"14.635%",x2:"14.635%",y1:"0%",y2:"100%",children:[f.jsx("stop",{offset:"0%",stopColor:"#9099FC"}),f.jsx("stop",{offset:"100%",stopColor:"#D87CEE"})]})]})}),Wm=t=>f.jsxs(f.Fragment,{children:[f.jsx("svg",{className:"absolute top-0 left-0",width:"21",height:"44",viewBox:"0 0 21 44",children:f.jsx("path",{fill:t?"white":"none",stroke:t?"white":"url(#btn-left)",strokeWidth:"2",d:"M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"})}),f.jsx("svg",{className:"absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]",height:"44",viewBox:"0 0 100 44",preserveAspectRatio:"none",fill:t?"white":"none",children:t?f.jsx("polygon",{fill:"white",fillRule:"nonzero",points:"100 0 100 44 0 44 0 0"}):f.jsxs(f.Fragment,{children:[f.jsx("polygon",{fill:"url(#btn-top)",fillRule:"nonzero",points:"100 42 100 44 0 44 0 42"}),f.jsx("polygon",{fill:"url(#btn-bottom)",fillRule:"nonzero",points:"100 0 100 2 0 2 0 0"})]})}),f.jsx("svg",{className:"absolute top-0 right-0",width:"21",height:"44",viewBox:"0 0 21 44",children:f.jsx("path",{fill:t?"white":"none",stroke:t?"white":"url(#btn-right)",strokeWidth:"2",d:"M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"})})]}),St=({className:t,href:e,onClick:n,children:r,px:i,white:s})=>{const o=`button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${i||"px-7"} ${s?"text-n-8":"text-n-1"} ${t||""}`,l="relative z-10";return e?f.jsxs("a",{href:e,className:o,children:[f.jsx("span",{className:l,children:r}),Wm(s)]}):f.jsxs("button",{className:o,onClick:n,children:[f.jsx("span",{className:l,children:r}),Wm(s)]})};/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eo(){return eo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},eo.apply(this,arguments)}var On;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(On||(On={}));const Bm="popstate";function tN(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return yd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ra(i)}return rN(e,n,null,t)}function we(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function L0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function nN(){return Math.random().toString(36).substr(2,8)}function Vm(t,e){return{usr:t.state,key:t.key,idx:e}}function yd(t,e,n,r){return n===void 0&&(n=null),eo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Bi(e):e,{state:n,key:e&&e.key||r||nN()})}function ra(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Bi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function rN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=On.Pop,a=null,c=d();c==null&&(c=0,o.replaceState(eo({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function u(){l=On.Pop;let S=d(),m=S==null?null:S-c;c=S,a&&a({action:l,location:E.location,delta:m})}function h(S,m){l=On.Push;let p=yd(E.location,S,m);n&&n(p,S),c=d()+1;let g=Vm(p,c),w=E.createHref(p);try{o.pushState(g,"",w)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(w)}s&&a&&a({action:l,location:E.location,delta:1})}function v(S,m){l=On.Replace;let p=yd(E.location,S,m);n&&n(p,S),c=d();let g=Vm(p,c),w=E.createHref(p);o.replaceState(g,"",w),s&&a&&a({action:l,location:E.location,delta:0})}function _(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof S=="string"?S:ra(S);return p=p.replace(/ $/,"%20"),we(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let E={get action(){return l},get location(){return t(i,o)},listen(S){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Bm,u),a=S,()=>{i.removeEventListener(Bm,u),a=null}},createHref(S){return e(i,S)},createURL:_,encodeLocation(S){let m=_(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:v,go(S){return o.go(S)}};return E}var Hm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Hm||(Hm={}));function iN(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Bi(e):e,i=df(r.pathname||"/",n);if(i==null)return null;let s=D0(t);sN(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let a=vN(i);o=pN(s[l],a)}return o}function D0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(we(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=Kn([r,a.relativePath]),d=n.concat(a);s.children&&s.children.length>0&&(we(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),D0(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:hN(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of M0(s.path))i(s,o,a)}),e}function M0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=M0(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function sN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:fN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const oN=/^:[\w-]+$/,lN=3,aN=2,cN=1,uN=10,dN=-2,Gm=t=>t==="*";function hN(t,e){let n=t.split("/"),r=n.length;return n.some(Gm)&&(r+=dN),e&&(r+=aN),n.filter(i=>!Gm(i)).reduce((i,s)=>i+(oN.test(s)?lN:s===""?cN:uN),r)}function fN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function pN(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",d=mN({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},c);if(!d)return null;Object.assign(r,d.params);let u=l.route;s.push({params:r,pathname:Kn([i,d.pathname]),pathnameBase:EN(Kn([i,d.pathnameBase])),route:u}),d.pathnameBase!=="/"&&(i=Kn([i,d.pathnameBase]))}return s}function mN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=gN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,u)=>{let{paramName:h,isOptional:v}=d;if(h==="*"){let E=l[u]||"";o=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const _=l[u];return v&&!_?c[h]=void 0:c[h]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function gN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),L0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function vN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return L0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function df(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function yN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Bi(t):t;return{pathname:n?n.startsWith("/")?n:_N(n,e):e,search:SN(r),hash:CN(i)}}function _N(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function qc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function F0(t,e){let n=wN(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function j0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Bi(t):(i=eo({},t),we(!i.pathname||!i.pathname.includes("?"),qc("?","pathname","search",i)),we(!i.pathname||!i.pathname.includes("#"),qc("#","pathname","hash",i)),we(!i.search||!i.search.includes("#"),qc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let u=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),u-=1;i.pathname=h.join("/")}l=u>=0?e[u]:"/"}let a=yN(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||d)&&(a.pathname+="/"),a}const Kn=t=>t.join("/").replace(/\/\/+/g,"/"),EN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),SN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,CN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function IN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const U0=["post","put","patch","delete"];new Set(U0);const TN=["get",...U0];new Set(TN);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function to(){return to=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},to.apply(this,arguments)}const hf=C.createContext(null),kN=C.createContext(null),Gr=C.createContext(null),Xa=C.createContext(null),rr=C.createContext({outlet:null,matches:[],isDataRoute:!1}),z0=C.createContext(null);function xN(t,e){let{relative:n}=e===void 0?{}:e;_o()||we(!1);let{basename:r,navigator:i}=C.useContext(Gr),{hash:s,pathname:o,search:l}=B0(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:Kn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function _o(){return C.useContext(Xa)!=null}function Vi(){return _o()||we(!1),C.useContext(Xa).location}function W0(t){C.useContext(Gr).static||C.useLayoutEffect(t)}function ir(){let{isDataRoute:t}=C.useContext(rr);return t?WN():NN()}function NN(){_o()||we(!1);let t=C.useContext(hf),{basename:e,future:n,navigator:r}=C.useContext(Gr),{matches:i}=C.useContext(rr),{pathname:s}=Vi(),o=JSON.stringify(F0(i,n.v7_relativeSplatPath)),l=C.useRef(!1);return W0(()=>{l.current=!0}),C.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let u=j0(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:Kn([e,u.pathname])),(d.replace?r.replace:r.push)(u,d.state,d)},[e,r,o,s,t])}function RN(){let{matches:t}=C.useContext(rr),e=t[t.length-1];return e?e.params:{}}function B0(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=C.useContext(Gr),{matches:i}=C.useContext(rr),{pathname:s}=Vi(),o=JSON.stringify(F0(i,r.v7_relativeSplatPath));return C.useMemo(()=>j0(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function bN(t,e){return PN(t,e)}function PN(t,e,n,r){_o()||we(!1);let{navigator:i}=C.useContext(Gr),{matches:s}=C.useContext(rr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let c=Vi(),d;if(e){var u;let S=typeof e=="string"?Bi(e):e;a==="/"||(u=S.pathname)!=null&&u.startsWith(a)||we(!1),d=S}else d=c;let h=d.pathname||"/",v=h;if(a!=="/"){let S=a.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(S.length).join("/")}let _=iN(t,{pathname:v}),E=MN(_&&_.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:Kn([a,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?a:Kn([a,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return e&&E?C.createElement(Xa.Provider,{value:{location:to({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:On.Pop}},E):E}function AN(){let t=zN(),e=IN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,null)}const ON=C.createElement(AN,null);class LN extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?C.createElement(rr.Provider,{value:this.props.routeContext},C.createElement(z0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function DN(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(hf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(rr.Provider,{value:e},r)}function MN(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(u=>u.route.id&&(l==null?void 0:l[u.route.id]));d>=0||we(!1),o=o.slice(0,Math.min(o.length,d+1))}let a=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let u=o[d];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=d),u.route.id){let{loaderData:h,errors:v}=n,_=u.route.loader&&h[u.route.id]===void 0&&(!v||v[u.route.id]===void 0);if(u.route.lazy||_){a=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,u,h)=>{let v,_=!1,E=null,S=null;n&&(v=l&&u.route.id?l[u.route.id]:void 0,E=u.route.errorElement||ON,a&&(c<0&&h===0?(BN("route-fallback",!1),_=!0,S=null):c===h&&(_=!0,S=u.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,h+1)),p=()=>{let g;return v?g=E:_?g=S:u.route.Component?g=C.createElement(u.route.Component,null):u.route.element?g=u.route.element:g=d,C.createElement(DN,{match:u,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:g})};return n&&(u.route.ErrorBoundary||u.route.errorElement||h===0)?C.createElement(LN,{location:n.location,revalidation:n.revalidation,component:E,error:v,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var V0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(V0||{}),ia=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ia||{});function FN(t){let e=C.useContext(hf);return e||we(!1),e}function jN(t){let e=C.useContext(kN);return e||we(!1),e}function UN(t){let e=C.useContext(rr);return e||we(!1),e}function H0(t){let e=UN(),n=e.matches[e.matches.length-1];return n.route.id||we(!1),n.route.id}function zN(){var t;let e=C.useContext(z0),n=jN(ia.UseRouteError),r=H0(ia.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function WN(){let{router:t}=FN(V0.UseNavigateStable),e=H0(ia.UseNavigateStable),n=C.useRef(!1);return W0(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,to({fromRouteId:e},s)))},[t,e])}const Km={};function BN(t,e,n){!e&&!Km[t]&&(Km[t]=!0)}function Zt(t){we(!1)}function VN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=On.Pop,navigator:s,static:o=!1,future:l}=t;_o()&&we(!1);let a=e.replace(/^\/*/,"/"),c=C.useMemo(()=>({basename:a,navigator:s,static:o,future:to({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=Bi(r));let{pathname:d="/",search:u="",hash:h="",state:v=null,key:_="default"}=r,E=C.useMemo(()=>{let S=df(d,a);return S==null?null:{location:{pathname:S,search:u,hash:h,state:v,key:_},navigationType:i}},[a,d,u,h,v,_,i]);return E==null?null:C.createElement(Gr.Provider,{value:c},C.createElement(Xa.Provider,{children:n,value:E}))}function HN(t){let{children:e,location:n}=t;return bN(_d(e),n)}new Promise(()=>{});function _d(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;let s=[...e,i];if(r.type===C.Fragment){n.push.apply(n,_d(r.props.children,s));return}r.type!==Zt&&we(!1),!r.props.index||!r.props.children||we(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=_d(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wd(){return wd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wd.apply(this,arguments)}function GN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function KN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function qN(t,e){return t.button===0&&(!e||e==="_self")&&!KN(t)}const YN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],$N="6";try{window.__reactRouterVersion=$N}catch{}const QN="startTransition",qm=qE[QN];function XN(t){let{basename:e,children:n,future:r,window:i}=t,s=C.useRef();s.current==null&&(s.current=tN({window:i,v5Compat:!0}));let o=s.current,[l,a]=C.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=C.useCallback(u=>{c&&qm?qm(()=>a(u)):a(u)},[a,c]);return C.useLayoutEffect(()=>o.listen(d),[o,d]),C.createElement(VN,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const JN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,G0=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:c,preventScrollReset:d,unstable_viewTransition:u}=e,h=GN(e,YN),{basename:v}=C.useContext(Gr),_,E=!1;if(typeof c=="string"&&ZN.test(c)&&(_=c,JN))try{let g=new URL(window.location.href),w=c.startsWith("//")?new URL(g.protocol+c):new URL(c),I=df(w.pathname,v);w.origin===g.origin&&I!=null?c=I+w.search+w.hash:E=!0}catch{}let S=xN(c,{relative:i}),m=eR(c,{replace:o,state:l,target:a,preventScrollReset:d,relative:i,unstable_viewTransition:u});function p(g){r&&r(g),g.defaultPrevented||m(g)}return C.createElement("a",wd({},h,{href:_||S,onClick:E||s?r:p,ref:n,target:a}))});var Ym;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ym||(Ym={}));var $m;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})($m||($m={}));function eR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,a=ir(),c=Vi(),d=B0(t,{relative:o});return C.useCallback(u=>{if(qN(u,n)){u.preventDefault();let h=r!==void 0?r:ra(c)===ra(d);a(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,a,d,r,i,n,t,s,o,l])}const tR=()=>{const t=Wi(),{coords:e}=Oa({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3}),[n,r]=C.useState(2),[i,s]=C.useState([]),o=ir();C.useEffect(()=>{if(e){const u=[e.latitude,e.longitude],h=n*1e3,v=ln(t,"events");cf(v).then(_=>{const E=[];_.forEach(S=>{const m=S.val(),p=m.location.split(",").map(parseFloat),g=Gy(p,u);g*1e3<=h&&E.push({id:S.key,...m,distance:g})}),s(E)})}},[e,n,t]);const l=u=>{const[h,v]=u.split(","),_=`https://www.google.com/maps?q=${h},${v}`;window.open(_,"_blank")},a=u=>{console.log(u),o(`/event/${u}`)},c=()=>{o("/addevent")},d=u=>{r(u.target.value)};return f.jsxs($a,{id:"features",children:[f.jsxs("div",{className:"container relative z-2",children:[f.jsxs("div",{className:"flex items-center justify-center",children:[f.jsxs("h1",{className:"h3 mb-5",children:["Showing Events within ",n," Km radius "]}),f.jsx("label",{htmlFor:"radius",className:"h3 mb-5 ml-1"}),f.jsx("input",{type:"number",id:"radius",value:n,onChange:d,className:"ml-2 border rounded-md py-2 px-3 mb-5  bg-n-11"})]}),f.jsx("div",{className:"flex flex-wrap gap-10 mb-10",children:i.length===0?f.jsxs("div",{className:"flex flex-col items-center justify-center mt-10",children:[f.jsx("p",{className:"text-lg mb-4",children:"No events found."}),f.jsx(St,{onClick:c,className:"mt-2",children:"Be the first one to add an event"})]}):i.slice().reverse().map(u=>f.jsxs("div",{className:"block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:w-[24rem] md:h-[22rem]",style:{backgroundImage:"url(./src/assets/benefits/card-1.svg)"},children:[f.jsxs("div",{className:"relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] ",children:[f.jsx("h5",{className:"h5 mb-5",children:u.eventName}),f.jsx("p",{className:"body-2 mb-6 text-n-3",children:u.description}),f.jsxs("div",{className:"flex items-center mt-auto",children:[f.jsx("img",{src:O0,width:48,height:48,alt:u.title,onClick:()=>l(u.location),style:{cursor:"pointer"}}),f.jsx("p",{className:"ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider",children:f.jsx("a",{href:"",className:"explore-more-link",style:{cursor:"pointer",textDecoration:"none"},onClick:()=>{a(u.id)},children:"Explore more"})}),f.jsx(b0,{})]})]}),f.jsx(P0,{}),f.jsx("div",{className:"absolute inset-0.5 bg-n-8",style:{clipPath:"url(#benefits)"},children:f.jsx("div",{className:"absolute inset-0 opacity-10 transition-opacity hover:opacity-10",children:u.imageURL&&f.jsx("img",{src:u.imageURL,width:380,height:362,alt:u.title,className:"w-full h-full object-cover"})})}),f.jsx(A0,{})]},u.id))})]}),f.jsx(Qa,{}),f.jsx(nr,{})]})};var K0={exports:{}};(function(t,e){(function(r,i){t.exports=i()})(bE,function(){return function(n){var r={};function i(s){if(r[s])return r[s].exports;var o=r[s]={i:s,l:!1,exports:{}};return n[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=n,i.c=r,i.d=function(s,o,l){i.o(s,o)||Object.defineProperty(s,o,{enumerable:!0,get:l})},i.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},i.t=function(s,o){if(o&1&&(s=i(s)),o&8||o&4&&typeof s=="object"&&s&&s.__esModule)return s;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:s}),o&2&&typeof s!="string")for(var a in s)i.d(l,a,(function(c){return s[c]}).bind(null,a));return l},i.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(o,"a",o),o},i.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},i.p="",i(i.s=0)}([function(n,r,i){i.r(r);var s=function(y){return Array.isArray(y)?y:[y]},o=function(y){return y instanceof Node},l=function(y){return y instanceof NodeList},a=function(y,P){if(y&&P){y=l(y)?y:[y];for(var L=0;L<y.length&&P(y[L],L,y.length)!==!0;L++);}},c=function(y){return console.error("[scroll-lock] ".concat(y))},d=function(y){if(Array.isArray(y)){var P=y.join(", ");return P}},u=function(y){var P=[];return a(y,function(L){return P.push(L)}),P},h=function(y,P){var L=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,U=arguments.length>3&&arguments[3]!==void 0?arguments[3]:document;if(L&&u(U.querySelectorAll(P)).indexOf(y)!==-1)return y;for(;(y=y.parentElement)&&u(U.querySelectorAll(P)).indexOf(y)===-1;);return y},v=function(y,P){var L=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document,U=u(L.querySelectorAll(P)).indexOf(y)!==-1;return U},_=function(y){if(y){var P=getComputedStyle(y),L=P.overflow==="hidden";return L}},E=function(y){if(y){if(_(y))return!0;var P=y.scrollTop;return P<=0}},S=function(y){if(y){if(_(y))return!0;var P=y.scrollTop,L=y.scrollHeight,U=P+y.offsetHeight;return U>=L}},m=function(y){if(y){if(_(y))return!0;var P=y.scrollLeft;return P<=0}},p=function(y){if(y){if(_(y))return!0;var P=y.scrollLeft,L=y.scrollWidth,U=P+y.offsetWidth;return U>=L}},g=function(y){var P='textarea, [contenteditable="true"]';return v(y,P)},w=function(y){var P='input[type="range"]';return v(y,P)};i.d(r,"disablePageScroll",function(){return j}),i.d(r,"enablePageScroll",function(){return Y}),i.d(r,"getScrollState",function(){return ae}),i.d(r,"clearQueueScrollLocks",function(){return Oe}),i.d(r,"getTargetScrollBarWidth",function(){return Le}),i.d(r,"getCurrentTargetScrollBarWidth",function(){return Ze}),i.d(r,"getPageScrollBarWidth",function(){return $}),i.d(r,"getCurrentPageScrollBarWidth",function(){return Ee}),i.d(r,"addScrollableTarget",function(){return T}),i.d(r,"removeScrollableTarget",function(){return F}),i.d(r,"addScrollableSelector",function(){return z}),i.d(r,"removeScrollableSelector",function(){return M}),i.d(r,"addLockableTarget",function(){return V}),i.d(r,"addLockableSelector",function(){return ke}),i.d(r,"setFillGapMethod",function(){return ie}),i.d(r,"addFillGapTarget",function(){return xe}),i.d(r,"removeFillGapTarget",function(){return Ge}),i.d(r,"addFillGapSelector",function(){return Nt}),i.d(r,"removeFillGapSelector",function(){return Lf}),i.d(r,"refillGaps",function(){return To});function I(O){for(var y=1;y<arguments.length;y++){var P=arguments[y]!=null?arguments[y]:{},L=Object.keys(P);typeof Object.getOwnPropertySymbols=="function"&&(L=L.concat(Object.getOwnPropertySymbols(P).filter(function(U){return Object.getOwnPropertyDescriptor(P,U).enumerable}))),L.forEach(function(U){x(O,U,P[U])})}return O}function x(O,y,P){return y in O?Object.defineProperty(O,y,{value:P,enumerable:!0,configurable:!0,writable:!0}):O[y]=P,O}var R=["padding","margin","width","max-width","none"],A=3,b={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:R[0],startTouchY:0,startTouchX:0},j=function(y){b.queue<=0&&(b.scroll=!1,oc(),Df()),T(y),b.queue++},Y=function(y){b.queue>0&&b.queue--,b.queue<=0&&(b.scroll=!0,mE(),wE()),F(y)},ae=function(){return b.scroll},Oe=function(){b.queue=0},Le=function(y){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(o(y)){var L=y.style.overflowY;P?ae()||(y.style.overflowY=y.getAttribute("data-scroll-lock-saved-overflow-y-property")):y.style.overflowY="scroll";var U=Ze(y);return y.style.overflowY=L,U}else return 0},Ze=function(y){if(o(y))if(y===document.body){var P=document.documentElement.clientWidth,L=window.innerWidth,U=L-P;return U}else{var Jt=y.style.borderLeftWidth,ar=y.style.borderRightWidth;y.style.borderLeftWidth="0px",y.style.borderRightWidth="0px";var _n=y.offsetWidth-y.clientWidth;return y.style.borderLeftWidth=Jt,y.style.borderRightWidth=ar,_n}else return 0},$=function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return Le(document.body,y)},Ee=function(){return Ze(document.body)},T=function(y){if(y){var P=s(y);P.map(function(L){a(L,function(U){o(U)?U.setAttribute("data-scroll-lock-scrollable",""):c('"'.concat(U,'" is not a Element.'))})})}},F=function(y){if(y){var P=s(y);P.map(function(L){a(L,function(U){o(U)?U.removeAttribute("data-scroll-lock-scrollable"):c('"'.concat(U,'" is not a Element.'))})})}},z=function(y){if(y){var P=s(y);P.map(function(L){b.scrollableSelectors.push(L)})}},M=function(y){if(y){var P=s(y);P.map(function(L){b.scrollableSelectors=b.scrollableSelectors.filter(function(U){return U!==L})})}},V=function(y){if(y){var P=s(y);P.map(function(L){a(L,function(U){o(U)?U.setAttribute("data-scroll-lock-lockable",""):c('"'.concat(U,'" is not a Element.'))})}),ae()||oc()}},ke=function(y){if(y){var P=s(y);P.map(function(L){b.lockableSelectors.push(L)}),ae()||oc(),Nt(y)}},ie=function(y){if(y)if(R.indexOf(y)!==-1)b.fillGapMethod=y,To();else{var P=R.join(", ");c('"'.concat(y,`" method is not available!
Available fill gap methods: `).concat(P,"."))}},xe=function(y){if(y){var P=s(y);P.map(function(L){a(L,function(U){o(U)?(U.setAttribute("data-scroll-lock-fill-gap",""),b.scroll||Ff(U)):c('"'.concat(U,'" is not a Element.'))})})}},Ge=function(y){if(y){var P=s(y);P.map(function(L){a(L,function(U){o(U)?(U.removeAttribute("data-scroll-lock-fill-gap"),b.scroll||lc(U)):c('"'.concat(U,'" is not a Element.'))})})}},Nt=function(y){if(y){var P=s(y);P.map(function(L){b.fillGapSelectors.indexOf(L)===-1&&(b.fillGapSelectors.push(L),b.scroll||Mf(L))})}},Lf=function(y){if(y){var P=s(y);P.map(function(L){b.fillGapSelectors=b.fillGapSelectors.filter(function(U){return U!==L}),b.scroll||jf(L)})}},To=function(){b.scroll||Df()},oc=function(){var y=d(b.lockableSelectors);gE(y)},mE=function(){var y=d(b.lockableSelectors);vE(y)},gE=function(y){var P=document.querySelectorAll(y);a(P,function(L){yE(L)})},vE=function(y){var P=document.querySelectorAll(y);a(P,function(L){_E(L)})},yE=function(y){if(o(y)&&y.getAttribute("data-scroll-lock-locked")!=="true"){var P=window.getComputedStyle(y);y.setAttribute("data-scroll-lock-saved-overflow-y-property",P.overflowY),y.setAttribute("data-scroll-lock-saved-inline-overflow-property",y.style.overflow),y.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",y.style.overflowY),y.style.overflow="hidden",y.setAttribute("data-scroll-lock-locked","true")}},_E=function(y){o(y)&&y.getAttribute("data-scroll-lock-locked")==="true"&&(y.style.overflow=y.getAttribute("data-scroll-lock-saved-inline-overflow-property"),y.style.overflowY=y.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),y.removeAttribute("data-scroll-lock-saved-overflow-property"),y.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),y.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),y.removeAttribute("data-scroll-lock-locked"))},Df=function(){b.fillGapSelectors.map(function(y){Mf(y)})},wE=function(){b.fillGapSelectors.map(function(y){jf(y)})},Mf=function(y){var P=document.querySelectorAll(y),L=b.lockableSelectors.indexOf(y)!==-1;a(P,function(U){Ff(U,L)})},Ff=function(y){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(o(y)){var L;if(y.getAttribute("data-scroll-lock-lockable")===""||P)L=Le(y,!0);else{var U=h(y,d(b.lockableSelectors));L=Le(U,!0)}y.getAttribute("data-scroll-lock-filled-gap")==="true"&&lc(y);var Jt=window.getComputedStyle(y);if(y.setAttribute("data-scroll-lock-filled-gap","true"),y.setAttribute("data-scroll-lock-current-fill-gap-method",b.fillGapMethod),b.fillGapMethod==="margin"){var ar=parseFloat(Jt.marginRight);y.style.marginRight="".concat(ar+L,"px")}else if(b.fillGapMethod==="width")y.style.width="calc(100% - ".concat(L,"px)");else if(b.fillGapMethod==="max-width")y.style.maxWidth="calc(100% - ".concat(L,"px)");else if(b.fillGapMethod==="padding"){var _n=parseFloat(Jt.paddingRight);y.style.paddingRight="".concat(_n+L,"px")}}},jf=function(y){var P=document.querySelectorAll(y);a(P,function(L){lc(L)})},lc=function(y){if(o(y)&&y.getAttribute("data-scroll-lock-filled-gap")==="true"){var P=y.getAttribute("data-scroll-lock-current-fill-gap-method");y.removeAttribute("data-scroll-lock-filled-gap"),y.removeAttribute("data-scroll-lock-current-fill-gap-method"),P==="margin"?y.style.marginRight="":P==="width"?y.style.width="":P==="max-width"?y.style.maxWidth="":P==="padding"&&(y.style.paddingRight="")}},EE=function(y){To()},SE=function(y){b.scroll||(b.startTouchY=y.touches[0].clientY,b.startTouchX=y.touches[0].clientX)},CE=function(y){if(!b.scroll){var P=b.startTouchY,L=b.startTouchX,U=y.touches[0].clientY,Jt=y.touches[0].clientX;if(y.touches.length<2){var ar=d(b.scrollableSelectors),_n={up:P<U,down:P>U,left:L<Jt,right:L>Jt},ko={up:P+A<U,down:P-A>U,left:L+A<Jt,right:L-A>Jt},xE=function Uf(Ne){var NE=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Ne){var ac=h(Ne,ar,!1);if(w(Ne))return!1;if(NE||g(Ne)&&h(Ne,ar)||v(Ne,ar)){var xo=!1;m(Ne)&&p(Ne)?(_n.up&&E(Ne)||_n.down&&S(Ne))&&(xo=!0):E(Ne)&&S(Ne)?(_n.left&&m(Ne)||_n.right&&p(Ne))&&(xo=!0):(ko.up&&E(Ne)||ko.down&&S(Ne)||ko.left&&m(Ne)||ko.right&&p(Ne))&&(xo=!0),xo&&(ac?Uf(ac,!0):y.cancelable&&y.preventDefault())}else Uf(ac)}else y.cancelable&&y.preventDefault()};xE(y.target)}}},IE=function(y){b.scroll||(b.startTouchY=0,b.startTouchX=0)};typeof window<"u"&&window.addEventListener("resize",EE),typeof document<"u"&&(document.addEventListener("touchstart",SE),document.addEventListener("touchmove",CE,{passive:!1}),document.addEventListener("touchend",IE));var TE={hide:function(y){c(`"hide" is deprecated! Use "disablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget`),j(y)},show:function(y){c(`"show" is deprecated! Use "enablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget`),Y(y)},toggle:function(y){c('"toggle" is deprecated! Do not use it.'),ae()?j():Y(y)},getState:function(){return c(`"getState" is deprecated! Use "getScrollState" instead. 
 https://github.com/FL3NKEY/scroll-lock#getscrollstate`),ae()},getWidth:function(){return c(`"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth`),$()},getCurrentWidth:function(){return c(`"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth`),Ee()},setScrollableTargets:function(y){c(`"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget`),T(y)},setFillGapSelectors:function(y){c(`"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector`),Nt(y)},setFillGapTargets:function(y){c(`"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget`),xe(y)},clearQueue:function(){c(`"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. 
 https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks`),Oe()}},kE=I({disablePageScroll:j,enablePageScroll:Y,getScrollState:ae,clearQueueScrollLocks:Oe,getTargetScrollBarWidth:Le,getCurrentTargetScrollBarWidth:Ze,getPageScrollBarWidth:$,getCurrentPageScrollBarWidth:Ee,addScrollableSelector:z,removeScrollableSelector:M,addScrollableTarget:T,removeScrollableTarget:F,addLockableSelector:ke,addLockableTarget:V,addFillGapSelector:Nt,removeFillGapSelector:Lf,addFillGapTarget:xe,removeFillGapTarget:Ge,setFillGapMethod:ie,refillGaps:To,_state:b},TE);r.default=kE}]).default})})(K0);var Yc=K0.exports;const nR=[{id:"0",title:"Home",url:"/"},{id:"1",title:"Events",url:"events"},{id:"2",title:"Filter",url:"/filter"},{id:"3",title:"Contact Us",url:"#contact"},{id:"4",title:"New account",url:"register",onlyMobile:!0},{id:"5",title:"Sign in",url:"login",onlyMobile:!0}],rR=[Xx,Qx,$x],iR=({openNavigation:t})=>f.jsxs("svg",{className:"overflow-visible",width:"20",height:"12",viewBox:"0 0 20 12",children:[f.jsx("rect",{className:"transition-all origin-center",y:t?"5":"0",width:"20",height:"2",rx:"1",fill:"white",transform:`rotate(${t?"45":"0"})`}),f.jsx("rect",{className:"transition-all origin-center",y:t?"5":"10",width:"20",height:"2",rx:"1",fill:"white",transform:`rotate(${t?"-45":"0"})`})]});function ff(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function q0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sR=q0,Y0=new Wr("auth","Firebase",q0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=new Ma("@firebase/auth");function oR(t,...e){sa.logLevel<=Z.WARN&&sa.warn(`Auth (${Br}): ${t}`,...e)}function dl(t,...e){sa.logLevel<=Z.ERROR&&sa.error(`Auth (${Br}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,...e){throw pf(t,...e)}function Yt(t,...e){return pf(t,...e)}function $0(t,e,n){const r=Object.assign(Object.assign({},sR()),{[e]:n});return new Wr("auth","Firebase",r).create(e,{appName:t.name})}function lR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&xt(t,"argument-error"),$0(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Y0.create(t,...e)}function B(t,e,...n){if(!t)throw pf(e,...n)}function an(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dl(e),new Error(e)}function vn(t,e){t||an(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function aR(){return Qm()==="http:"||Qm()==="https:"}function Qm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aR()||t_()||"connection"in navigator)?navigator.onLine:!0}function uR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=kh()||n_()}get(){return cR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=new wo(3e4,6e4);function sr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function or(t,e,n,r,i={}){return X0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Fi(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Q0.fetch()(J0(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function X0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},dR),e);try{const i=new pR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $o(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw $o(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw $o(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw $o(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw $0(t,d,c);xt(t,d)}}catch(i){if(i instanceof zt)throw i;xt(t,"network-request-failed",{message:String(i)})}}async function Eo(t,e,n,r,i={}){const s=await or(t,e,n,r,i);return"mfaPendingCredential"in s&&xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function J0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?mf(t.config,i):`${t.config.apiScheme}://${i}`}function fR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Yt(this.auth,"network-request-failed")),hR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $o(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Yt(t,e,r);return i.customData._tokenResponse=n,i}function Xm(t){return t!==void 0&&t.enterprise!==void 0}class mR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return fR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function gR(t,e){return or(t,"GET","/v2/recaptchaConfig",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vR(t,e){return or(t,"POST","/v1/accounts:delete",e)}async function yR(t,e){return or(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _R(t,e=!1){const n=ge(t),r=await n.getIdToken(e),i=gf(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Cs($c(i.auth_time)),issuedAtTime:Cs($c(i.iat)),expirationTime:Cs($c(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $c(t){return Number(t)*1e3}function gf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return dl("JWT malformed, contained fewer than 3 sections"),null;try{const i=zl(n);return i?JSON.parse(i):(dl("Failed to decode base64 JWT payload"),null)}catch(i){return dl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wR(t){const e=gf(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zt&&ER(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ER({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cs(this.lastLoginAt),this.creationTime=Cs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await no(t,yR(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?TR(s.providerUserInfo):[],l=IR(t.providerData,o),a=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Z0(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function CR(t){const e=ge(t);await oa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function TR(t){return t.map(e=>{var{providerId:n}=e,r=ff(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kR(t,e){const n=await X0(t,{},async()=>{const r=Fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=J0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Q0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xR(t,e){return or(t,"POST","/v2/accounts:revokeToken",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await kR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ro;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ff(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new SR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Z0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await no(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _R(this,e)}reload(){return CR(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await oa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await no(this,vR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,c,d;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:w,isAnonymous:I,providerData:x,stsTokenManager:R}=n;B(g&&R,e,"internal-error");const A=ro.fromJSON(this.name,R);B(typeof g=="string",e,"internal-error"),En(u,e.name),En(h,e.name),B(typeof w=="boolean",e,"internal-error"),B(typeof I=="boolean",e,"internal-error"),En(v,e.name),En(_,e.name),En(E,e.name),En(S,e.name),En(m,e.name),En(p,e.name);const b=new Sr({uid:g,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:I,photoURL:_,phoneNumber:v,tenantId:E,stsTokenManager:A,createdAt:m,lastLoginAt:p});return x&&Array.isArray(x)&&(b.providerData=x.map(j=>Object.assign({},j))),S&&(b._redirectEventId=S),b}static async _fromIdTokenResponse(e,n,r=!1){const i=new ro;i.updateFromServerResponse(n);const s=new Sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await oa(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=new Map;function cn(t){vn(t instanceof Function,"Expected a class definition");let e=Jm.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ew.type="NONE";const Zm=ew;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t,e,n){return`firebase:${t}:${e}:${n}`}class gi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=hl(this.userKey,i.apiKey,s),this.fullPersistenceKey=hl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gi(cn(Zm),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||cn(Zm);const o=hl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const u=Sr._fromJSON(e,d);c!==s&&(l=u),s=c;break}}catch{}const a=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new gi(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new gi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sw(e))return"Blackberry";if(ow(e))return"Webos";if(vf(e))return"Safari";if((e.includes("chrome/")||nw(e))&&!e.includes("edge/"))return"Chrome";if(iw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tw(t=He()){return/firefox\//i.test(t)}function vf(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nw(t=He()){return/crios\//i.test(t)}function rw(t=He()){return/iemobile/i.test(t)}function iw(t=He()){return/android/i.test(t)}function sw(t=He()){return/blackberry/i.test(t)}function ow(t=He()){return/webos/i.test(t)}function Ja(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NR(t=He()){var e;return Ja(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function RR(){return fC()&&document.documentMode===10}function lw(t=He()){return Ja(t)||iw(t)||ow(t)||sw(t)||/windows phone/i.test(t)||rw(t)}function bR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(t,e=[]){let n;switch(t){case"Browser":n=eg(He());break;case"Worker":n=`${eg(He())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Br}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AR(t,e={}){return or(t,"GET","/v2/passwordPolicy",sr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=6;class LR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:OR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tg(this),this.idTokenSubscription=new tg(this),this.beforeStateQueue=new PR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Y0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await gi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ge(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AR(this),n=new LR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await xR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cn(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await gi.create(this,[cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&oR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function lr(t){return ge(t)}class tg{constructor(e){this.auth=e,this.observer=null,this.addObserver=EC(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MR(t){Za=t}function cw(t){return Za.loadJS(t)}function FR(){return Za.recaptchaEnterpriseScript}function jR(){return Za.gapiScript}function UR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const zR="recaptcha-enterprise",WR="NO_RECAPTCHA";class BR{constructor(e){this.type=zR,this.auth=lr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{gR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new mR(a);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;Xm(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(WR)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Xm(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=FR();a.length!==0&&(a+=l),cw(a).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function ng(t,e,n,r=!1){const i=new BR(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Sd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await ng(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ng(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(t,e){const n=tr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Gs(s,e??{}))return i;xt(i,"already-initialized")}return n.initialize({options:e})}function HR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function GR(t,e,n){const r=lr(t);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=uw(e),{host:o,port:l}=KR(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||qR()}function uw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KR(t){const e=uw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:rg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:rg(o)}}}function rg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,n){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}async function YR(t,e){return or(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(t,e){return Eo(t,"POST","/v1/accounts:signInWithPassword",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(t,e){return Eo(t,"POST","/v1/accounts:signInWithEmailLink",sr(t,e))}async function XR(t,e){return Eo(t,"POST","/v1/accounts:signInWithEmailLink",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io extends yf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new io(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new io(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sd(e,n,"signInWithPassword",$R);case"emailLink":return QR(e,{email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sd(e,r,"signUpPassword",YR);case"emailLink":return XR(e,{idToken:n,email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(t,e){return Eo(t,"POST","/v1/accounts:signInWithIdp",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR="http://localhost";class Or extends yf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ff(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Or(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vi(e,n)}buildRequest(){const e={requestUri:JR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eb(t){const e=as(cs(t)).link,n=e?as(cs(e)).deep_link_id:null,r=as(cs(t)).deep_link_id;return(r?as(cs(r)).link:null)||r||n||e||t}class _f{constructor(e){var n,r,i,s,o,l;const a=as(cs(e)),c=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,u=ZR((i=a.mode)!==null&&i!==void 0?i:null);B(c&&d&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=d,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=eb(e);try{return new _f(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.providerId=Hi.PROVIDER_ID}static credential(e,n){return io._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_f.parseLink(n);return B(r,"argument-error"),io._fromEmailAndCode(e,r.code,r.tenantId)}}Hi.PROVIDER_ID="password";Hi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends wf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends So{constructor(){super("facebook.com")}static credential(e){return Or._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends So{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Or._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com";nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends So{constructor(){super("github.com")}static credential(e){return Or._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends So{constructor(){super("twitter.com")}static credential(e,n){return Or._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tb(t,e){return Eo(t,"POST","/v1/accounts:signUp",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Sr._fromIdTokenResponse(e,r,i),o=ig(r);return new Lr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ig(r);return new Lr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ig(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends zt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,la.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new la(e,n,r,i)}}function dw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?la._fromErrorAndOperation(t,s,e,r):s})}async function nb(t,e,n=!1){const r=await no(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Lr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rb(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await no(t,dw(r,i,e,t),n);B(s.idToken,r,"internal-error");const o=gf(s.idToken);B(o,r,"internal-error");const{sub:l}=o;return B(t.uid===l,r,"user-mismatch"),Lr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hw(t,e,n=!1){const r="signIn",i=await dw(t,r,e),s=await Lr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ib(t,e){return hw(lr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fw(t){const e=lr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function sb(t,e,n){const r=lr(t),o=await Sd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tb).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&fw(t),a}),l=await Lr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function ob(t,e,n){return ib(ge(t),Hi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&fw(t),r})}function lb(t,e,n,r){return ge(t).onIdTokenChanged(e,n,r)}function ab(t,e,n){return ge(t).beforeAuthStateChanged(e,n)}function pw(t,e,n,r){return ge(t).onAuthStateChanged(e,n,r)}function cb(t){return ge(t).signOut()}const aa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(aa,"1"),this.storage.removeItem(aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(){const t=He();return vf(t)||Ja(t)}const db=1e3,hb=10;class gw extends mw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ub()&&bR(),this.fallbackToPolling=lw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);RR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,hb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},db)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gw.type="LOCAL";const fb=gw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw extends mw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vw.type="SESSION";const yw=vw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ec(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),a=await pb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ec.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const c=Ef("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return window}function gb(t){$t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function vb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _b(){return _w()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="firebaseLocalStorageDb",wb=1,ca="firebaseLocalStorage",Ew="fbase_key";class Co{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tc(t,e){return t.transaction([ca],e?"readwrite":"readonly").objectStore(ca)}function Eb(){const t=indexedDB.deleteDatabase(ww);return new Co(t).toPromise()}function Cd(){const t=indexedDB.open(ww,wb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ca,{keyPath:Ew})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ca)?e(r):(r.close(),await Eb(),e(await Cd()))})})}async function sg(t,e,n){const r=tc(t,!0).put({[Ew]:e,value:n});return new Co(r).toPromise()}async function Sb(t,e){const n=tc(t,!1).get(e),r=await new Co(n).toPromise();return r===void 0?null:r.value}function og(t,e){const n=tc(t,!0).delete(e);return new Co(n).toPromise()}const Cb=800,Ib=3;class Sw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ib)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _w()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ec._getInstance(_b()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vb(),!this.activeServiceWorker)return;this.sender=new mb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cd();return await sg(e,aa,"1"),await og(e,aa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Sb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>og(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=tc(i,!1).getAll();return new Co(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Cb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sw.type="LOCAL";const Tb=Sw;new wo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(t,e){return e?cn(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf extends yf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kb(t){return hw(t.auth,new Sf(t),t.bypassAuthState)}function xb(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),rb(n,new Sf(t),t.bypassAuthState)}async function Nb(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),nb(n,new Sf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kb;case"linkViaPopup":case"linkViaRedirect":return Nb;case"reauthViaPopup":case"reauthViaRedirect":return xb;default:xt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=new wo(2e3,1e4);async function bb(t,e,n){const r=lr(t);lR(t,e,wf);const i=Cw(r,n);return new vr(r,"signInViaPopup",e,i).executeNotNull()}class vr extends Iw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vr.currentPopupAction&&vr.currentPopupAction.cancel(),vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Ef();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Rb.get())};e()}}vr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb="pendingRedirect",fl=new Map;class Ab extends Iw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fl.get(this.auth._key());if(!e){try{const r=await Ob(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fl.set(this.auth._key(),e)}return this.bypassAuthState||fl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ob(t,e){const n=Mb(e),r=Db(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Lb(t,e){fl.set(t._key(),e)}function Db(t){return cn(t._redirectPersistence)}function Mb(t){return hl(Pb,t.config.apiKey,t.name)}async function Fb(t,e,n=!1){const r=lr(t),i=Cw(r,e),o=await new Ab(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=10*60*1e3;class Ub{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Tw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Yt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jb&&this.cachedEventUids.clear(),this.cachedEventUids.has(lg(e))}saveEventToCache(e){this.cachedEventUids.add(lg(e)),this.lastProcessedEventTime=Date.now()}}function lg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Tw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wb(t,e={}){return or(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vb=/^https?/;async function Hb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wb(t);for(const n of e)try{if(Gb(n))return}catch{}xt(t,"unauthorized-domain")}function Gb(t){const e=Ed(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Vb.test(n))return!1;if(Bb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=new wo(3e4,6e4);function ag(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qb(t){return new Promise((e,n)=>{var r,i,s;function o(){ag(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ag(),n(Yt(t,"network-request-failed"))},timeout:Kb.get()})}if(!((i=(r=$t().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=$t().gapi)===null||s===void 0)&&s.load)o();else{const l=UR("iframefcb");return $t()[l]=()=>{gapi.load?o():n(Yt(t,"network-request-failed"))},cw(`${jR()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw pl=null,e})}let pl=null;function Yb(t){return pl=pl||qb(t),pl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=new wo(5e3,15e3),Qb="__/auth/iframe",Xb="emulator/auth/iframe",Jb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eP(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mf(e,Xb):`https://${t.config.authDomain}/${Qb}`,r={apiKey:e.apiKey,appName:t.name,v:Br},i=Zb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fi(r).slice(1)}`}async function tP(t){const e=await Yb(t),n=$t().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:eP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Yt(t,"network-request-failed"),l=$t().setTimeout(()=>{s(o)},$b.get());function a(){$t().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rP=500,iP=600,sP="_blank",oP="http://localhost";class cg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lP(t,e,n,r=rP,i=iP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},nP),{width:r.toString(),height:i.toString(),top:s,left:o}),c=He().toLowerCase();n&&(l=nw(c)?sP:n),tw(c)&&(e=e||oP,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[v,_])=>`${h}${v}=${_},`,"");if(NR(c)&&l!=="_self")return aP(e||"",l),new cg(null);const u=window.open(e||"",l,d);B(u,t,"popup-blocked");try{u.focus()}catch{}return new cg(u)}function aP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP="__/auth/handler",uP="emulator/auth/handler",dP=encodeURIComponent("fac");async function ug(t,e,n,r,i,s){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Br,eventId:i};if(e instanceof wf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ju(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries(s||{}))o[d]=u}if(e instanceof So){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),c=a?`#${dP}=${encodeURIComponent(a)}`:"";return`${hP(t)}?${Fi(l).slice(1)}${c}`}function hP({config:t}){return t.emulator?mf(t,uP):`https://${t.authDomain}/${cP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc="webStorageSupport";class fP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yw,this._completeRedirectFn=Fb,this._overrideRedirectResult=Lb}async _openPopup(e,n,r,i){var s;vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ug(e,n,r,Ed(),i);return lP(e,o,Ef())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ug(e,n,r,Ed(),i);return gb(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tP(e),r=new Ub(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qc,{type:Qc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Qc];o!==void 0&&n(!!o),xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Hb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return lw()||vf()||Ja()}}const pP=fP;var dg="@firebase/auth",hg="1.6.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vP(t){Ut(new Tt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aw(t)},c=new DR(r,i,s,a);return HR(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ut(new Tt("auth-internal",e=>{const n=lr(e.getProvider("auth").getImmediate());return(r=>new mP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(dg,hg,gP(t)),lt(dg,hg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=5*60,_P=Zy("authIdTokenMaxAge")||yP;let fg=null;const wP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_P)return;const i=n==null?void 0:n.token;fg!==i&&(fg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Dr(t=Fa()){const e=tr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=VR(t,{popupRedirectResolver:pP,persistence:[Tb,fb,yw]}),r=Zy("authTokenSyncURL");if(r&&r.match(/^\/[^\/].*/)){const s=wP(r);ab(n,s,()=>s(n.currentUser)),lb(n,o=>s(o))}const i=Qy("auth");return i&&GR(n,`http://${i}`),n}function EP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}MR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Yt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",EP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vP("Browser");const SP=({userLoggedIn:t})=>{const e=Dr(),n=Vi(),[r,i]=C.useState(!1),s=()=>{r?(i(!1),Yc.enablePageScroll()):(i(!0),Yc.disablePageScroll())},o=()=>{r&&(Yc.enablePageScroll(),i(!1))},l=()=>{cb(e).then(()=>{console.log("User signed out")}).catch(a=>{console.error("Sign out error:",a)})};return f.jsx("div",{className:`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${r?"bg-n-8":"bg-n-8/90 backdrop-blur-sm"}`,children:f.jsxs("div",{className:"flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4",children:[f.jsx("a",{className:"block w-[12rem] xl:mr-8",href:"/",children:"Event's Calender"}),f.jsxs("nav",{className:`${r?"flex":"hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`,children:[f.jsx("div",{className:"relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row",children:nR.map(a=>f.jsx("a",{href:a.url,onClick:o,className:`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${a.onlyMobile?"lg:hidden":""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${a.url===n.hash?"z-2 lg:text-n-1":"lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`,children:a.title},a.id))}),f.jsx(eN,{})]}),t?f.jsx("a",{href:"/addevent",className:"button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block",children:"Add an event"}):f.jsx("a",{href:"/register",className:"button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block",children:"New Account"}),t?f.jsx(St,{className:"hidden lg:flex",onClick:l,children:"Sign Out"}):f.jsx(St,{className:"hidden lg:flex",href:"/login",children:"Sign In"}),f.jsx(St,{className:"ml-auto lg:hidden",px:"px-3",onClick:s,children:f.jsx(iR,{openNavigation:r})})]})})},CP=typeof performance<"u"?()=>performance.now():()=>Date.now(),kw=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(CP()),16.666666666666668);let Id=!0,so=!1,Td=!1;const Is={delta:0,timestamp:0},Io=["read","update","preRender","render","postRender"],nc=Io.reduce((t,e)=>(t[e]=function(n){let r=[],i=[],s=0,o=!1,l=!1;const a=new WeakSet,c={schedule:(d,u=!1,h=!1)=>{const v=h&&o,_=v?r:i;return u&&a.add(d),_.indexOf(d)===-1&&(_.push(d),v&&o&&(s=r.length)),d},cancel:d=>{const u=i.indexOf(d);u!==-1&&i.splice(u,1),a.delete(d)},process:d=>{if(o)l=!0;else{if(o=!0,[r,i]=[i,r],i.length=0,s=r.length,s)for(let u=0;u<s;u++){const h=r[u];h(d),a.has(h)&&(c.schedule(h),n())}o=!1,l&&(l=!1,c.process(d))}}};return c}(()=>so=!0),t),{}),ua=Io.reduce((t,e)=>{const n=nc[e];return t[e]=(r,i=!1,s=!1)=>(so||TP(),n.schedule(r,i,s)),t},{}),da=Io.reduce((t,e)=>(t[e]=nc[e].cancel,t),{});Io.reduce((t,e)=>(t[e]=()=>nc[e].process(Is),t),{});const IP=t=>nc[t].process(Is),xw=t=>{so=!1,Is.delta=Id?16.666666666666668:Math.max(Math.min(t-Is.timestamp,40),1),Is.timestamp=t,Td=!0,Io.forEach(IP),Td=!1,so&&(Id=!1,kw(xw))},TP=()=>{so=!0,Id=!0,Td||kw(xw)};var Qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},kP=/^\s+|\s+$/g,xP=/^[-+]0x[0-9a-f]+$/i,NP=/^0b[01]+$/i,RP=/^0o[0-7]+$/i,bP=parseInt,PP=typeof Qo=="object"&&Qo&&Qo.Object===Object&&Qo,AP=typeof self=="object"&&self&&self.Object===Object&&self,OP=PP||AP||Function("return this")(),LP=Object.prototype.toString,DP=Math.max,MP=Math.min,Xc=function(){return OP.Date.now()};function kd(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function pg(t){if(typeof t=="number")return t;if(function(r){return typeof r=="symbol"||function(i){return!!i&&typeof i=="object"}(r)&&LP.call(r)=="[object Symbol]"}(t))return NaN;if(kd(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=kd(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(kP,"");var n=NP.test(t);return n||RP.test(t)?bP(t.slice(2),n?2:8):xP.test(t)?NaN:+t}var Cf=function(t,e,n){var r,i,s,o,l,a,c=0,d=!1,u=!1,h=!0;if(typeof t!="function")throw new TypeError("Expected a function");function v(g){var w=r,I=i;return r=i=void 0,c=g,o=t.apply(I,w)}function _(g){return c=g,l=setTimeout(S,e),d?v(g):o}function E(g){var w=g-a;return a===void 0||w>=e||w<0||u&&g-c>=s}function S(){var g=Xc();if(E(g))return m(g);l=setTimeout(S,function(w){var I=e-(w-a);return u?MP(I,s-(w-c)):I}(g))}function m(g){return l=void 0,h&&r?v(g):(r=i=void 0,o)}function p(){var g=Xc(),w=E(g);if(r=arguments,i=this,a=g,w){if(l===void 0)return _(a);if(u)return l=setTimeout(S,e),v(a)}return l===void 0&&(l=setTimeout(S,e)),o}return e=pg(e)||0,kd(n)&&(d=!!n.leading,s=(u="maxWait"in n)?DP(pg(n.maxWait)||0,e):s,h="trailing"in n?!!n.trailing:h),p.cancel=function(){l!==void 0&&clearTimeout(l),c=0,r=a=i=l=void 0},p.flush=function(){return l===void 0?o:m(Xc())},p},ha={exports:{}},mg=typeof document<"u"?document.createElement("p").style:{},gg=["O","ms","Moz","Webkit"],Jc=/([A-Z])/g,Zc={};function vg(t){if(t=t.replace(/-([a-z])/g,function(i,s){return s.toUpperCase()}),mg[t]!==void 0)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=gg.length;n--;){var r=gg[n]+e;if(mg[r]!==void 0)return r}return t}ha.exports=function(t){return t in Zc?Zc[t]:Zc[t]=vg(t)},ha.exports.dash=function(t){return t=vg(t),Jc.test(t)&&(t="-"+t.replace(Jc,"-$1"),Jc.lastIndex=0),t.toLowerCase()};const yg={isReady:!1,scrollbarWidth:0,windowHeight:0,windowWidth:0},Nw=()=>{const[t,e]=C.useState(yg),n=C.useRef(yg),r=C.useCallback(()=>{const i={isReady:!0,scrollbarWidth:window.innerWidth-document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth};e(i),n.current=i},[]);return C.useEffect(()=>{const i=Cf(r,100);return window.addEventListener("resize",i),r(),()=>{window.removeEventListener("resize",i)}},[r]),{windowSize:t,windowSizeRef:n}},fa=(t,e,n)=>t+(e-t)*n;class FP extends class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let i=0,s=r.length;i<s;i++)r[i].call(this,e);e.target=null}}}{constructor(){super(),this._mouseLast={x:0,y:0},this._isTouching=!1,this.mouse={x:0,y:0},this._shouldUpdate=!1,this._onTouchDown=e=>{this._shouldUpdate&&(this._isTouching=!0,this._mouseLast.x="touches"in e?e.touches[0].clientX:e.clientX,this._mouseLast.y="touches"in e?e.touches[0].clientY:e.clientY,this.mouse.x=this._mouseLast.x,this.mouse.y=this._mouseLast.y,this.dispatchEvent({type:"down"}),this.dispatchEvent({type:"mousemove"}))},this._onTouchMove=e=>{if(!this._shouldUpdate)return;const n="touches"in e?e.touches[0].clientX:e.clientX,r="touches"in e?e.touches[0].clientY:e.clientY,i=n-this._mouseLast.x,s=r-this._mouseLast.y;this._mouseLast.x=n,this._mouseLast.y=r,this.mouse.x+=i,this.mouse.y+=s,this.dispatchEvent({type:"mousemove"})},this._onTouchUp=()=>{this._shouldUpdate&&(this._isTouching=!1,this.dispatchEvent({type:"up"}),this.dispatchEvent({type:"mousemove"}))},this._onMouseLeave=()=>{this.dispatchEvent({type:"left"})}}_addEvents(){this._targetEl.addEventListener("mousedown",this._onTouchDown),this._targetEl.addEventListener("mousemove",this._onTouchMove,{passive:!0}),this._targetEl.addEventListener("mouseup",this._onTouchUp),this._targetEl.addEventListener("touchstart",this._onTouchDown,{passive:!0}),this._targetEl.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this._targetEl.addEventListener("touchend",this._onTouchUp),this._targetEl.addEventListener("mouseout",this._onMouseLeave)}_removeEvents(){this._targetEl.removeEventListener("mousedown",this._onTouchDown),this._targetEl.removeEventListener("mousemove",this._onTouchMove),this._targetEl.removeEventListener("mouseup",this._onTouchUp),this._targetEl.removeEventListener("touchstart",this._onTouchDown),this._targetEl.removeEventListener("touchmove",this._onTouchMove),this._targetEl.removeEventListener("touchend",this._onTouchUp),this._targetEl.removeEventListener("mouseout",this._onMouseLeave)}init(e){this._targetEl=window,e&&e.current&&(this._targetEl=e.current),this._addEvents()}destroy(){this._removeEvents()}setShouldUpdate(e){this._shouldUpdate=e}update(){this._mouseLast.x=this.mouse.x,this._mouseLast.y=this.mouse.y}}const Rw=()=>typeof window<"u"&&("ontouchstart"in window||"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0),jP={height:1,width:1,x:1,y:1},UP=t=>{const{children:e,strength:n=.14,parallaxContainerRef:r=null,scrollContainerRef:i=null,shouldResetPosition:s=!1,enableOnTouchDevice:o=!1,isAbsolutelyPositioned:l=!1,lerpEase:a=.06,zIndex:c=null,shouldPause:d=!0}=t,{windowSizeRef:u}=Nw(),h=C.useRef(null),v=C.useRef(null),_=C.useRef(0),E=C.useRef(0),S=C.useRef(0),m=C.useRef(0),p=C.useRef(null),g=C.useRef(null),w=C.useRef(!0),I=C.useRef(jP),x=C.useRef(new FP),R=C.useRef(null),A=C.useRef(ha.exports("transform")),b=()=>{w.current&&h.current&&(h.current.style.willChange="transform",p.current=ua.render(Y,!0),g.current=ua.update(ae,!0))},j=()=>{h.current&&(h.current.style.willChange="auto",p.current&&da.render(p.current),g.current&&da.update(g.current))},Y=()=>{if(!h.current)return;let M=u.current.windowWidth,V=u.current.windowHeight;r&&r.current&&(M=I.current.width,V=I.current.height),M*=.5,V*=.5,M*=n,V*=n,h.current.style[A.current]=`translate3d(${_.current*M}px, ${E.current*V}px, 0px)`},ae=({delta:M})=>{const V=Math.abs(S.current-_.current),ke=Math.abs(m.current-E.current);if(V<.001&&ke<.001)return;let ie=M/16.666666666666668;x.current.update();const xe=Math.round(ie);xe>=1&&(ie=xe);const Ge=fa(_.current,S.current,a*ie);_.current=Ge;const Nt=fa(E.current,m.current,a*ie);E.current=Nt},Oe=()=>{document.hidden?j():b()},Le=(M,V)=>{let ke=u.current.windowWidth,ie=u.current.windowHeight,xe=M,Ge=V;return r&&r.current&&(ke=I.current.width,ie=I.current.height,xe=M-I.current.x,Ge=V-I.current.y),{x:xe/ke*2-1,y:Ge/ie*2-1}},Ze=M=>{const V=M.target.mouse.x,ke=M.target.mouse.y,{x:ie,y:xe}=Le(V,ke);S.current=ie,m.current=xe},$=()=>{s&&(S.current=0,m.current=0)},Ee=M=>{const V="touches"in M?M.touches[0].clientX:M.clientX,ke="touches"in M?M.touches[0].clientY:M.clientY,{x:ie,y:xe}=Le(V,ke);(ie<=-1||ie>=1||xe>=1||xe<=-1)&&$()},T=()=>{if(!r||!r.current)return;const M=r.current.getBoundingClientRect();I.current={x:M.x,y:M.y,width:r.current.clientWidth,height:r.current.clientHeight}},F=Cf(T,150),z=M=>{if(M[0].isIntersecting)w.current=!0,b(),x.current.setShouldUpdate(!0);else{if(!d)return;w.current=!1,j(),x.current.setShouldUpdate(!1)}};return C.useEffect(()=>{if(!o&&Rw())return;x.current.init(r),b();let M=window,V=window;return i&&i.current&&(V=i.current),r&&r.current&&(T(),M=r.current,V.addEventListener("scroll",F,{passive:!0}),window.addEventListener("resize",F,{passive:!0})),x.current.addEventListener("mousemove",Ze),window.addEventListener("visibilitychange",Oe),window.addEventListener("touchstart",Ee,{passive:!0}),M.addEventListener("mouseout",$),R.current=new IntersectionObserver(z,{threshold:.5}),v.current&&R.current.observe(v.current),()=>{j(),r&&r.current&&(V.removeEventListener("scroll",F),window.removeEventListener("resize",F)),x.current.removeEventListener("mousemove",Ze),window.removeEventListener("visibilitychange",Oe),window.removeEventListener("touchstart",Ee),M.removeEventListener("mouseout",$),v.current&&R.current&&R.current.unobserve(v.current),x.current.destroy()}},[]),Ht.createElement(Ht.Fragment,null,Ht.createElement("span",{ref:v,style:{width:"100%",height:"100%",display:"inline-block",userSelect:"none",pointerEvents:"none",position:l?"absolute":"relative",top:0,left:0,zIndex:c||"initial"}},Ht.createElement("span",{ref:h,style:{backfaceVisibility:"hidden",position:"relative",width:"100%",height:"100%",display:"inline-block",userSelect:"initial",pointerEvents:"initial"}},e)))},zP={xMaxOffset:1,xOffset:1,yMaxOffset:1,yOffset:1},WP=C.forwardRef((t,e)=>{C.useImperativeHandle(e,()=>({updateValues:Le}));const{children:n,strength:r=.14,scrollContainerRef:i=null,enableOnTouchDevice:s=!0,lerpEase:o=.06,isHorizontal:l=!1,isAbsolutelyPositioned:a=!1,zIndex:c=null,shouldPause:d=!0}=t,u=C.useRef(null),h=C.useRef(null),v=C.useRef(1),_=C.useRef(1),E=C.useRef(1),S=C.useRef(1),m=C.useRef(null),p=C.useRef(null),g=C.useRef(!0),w=C.useRef(zP),I=C.useRef(1),x=C.useRef(1),{windowSizeRef:R}=Nw(),A=C.useRef(ha.exports("transform")),b=()=>{u.current&&(u.current.style.willChange="transform",m.current=ua.render(Y,!0),p.current=ua.update(ae,!0))},j=()=>{u.current&&(u.current.style.willChange="auto",m.current&&da.render(m.current),p.current&&da.update(p.current))},Y=()=>{if(!g.current||!u.current)return;let T=l?1:0;u.current.style[A.current]=`translate3d(${v.current*r*T}px, ${_.current*r*(1-T)}px, 0px)`},ae=({delta:T})=>{if(!g.current)return;const F=Math.abs(E.current-v.current),z=Math.abs(S.current-_.current);if(F<.001&&z<.001)return;let M=T/16.666666666666668;const V=Math.round(M);V>=1&&(M=V);const ke=fa(v.current,E.current,o*M);v.current=ke;const ie=fa(_.current,S.current,o*M);_.current=ie},Oe=()=>{document.hidden?j():b()},Le=()=>{(()=>{if(!h||!h.current)return;$();const T=h.current.getBoundingClientRect();I.current=w.current.xOffset+T.x+.5*T.width,x.current=w.current.yOffset+T.y+.5*T.height})(),Ee()},Ze=Cf(Le,150),$=()=>{var T;i&&i.current?w.current={xOffset:(T=i.current).scrollLeft,yOffset:T.scrollTop,xMaxOffset:T.scrollWidth-T.offsetWidth,yMaxOffset:T.scrollHeight-T.offsetHeight}:w.current={xOffset:window.pageXOffset,yOffset:window.pageYOffset,xMaxOffset:document.body.clientWidth-window.innerWidth,yMaxOffset:document.body.clientHeight-window.innerHeight}},Ee=()=>{$();let T=w.current.xOffset-I.current,F=w.current.yOffset-x.current;if(T+=.5*R.current.windowWidth,F+=.5*R.current.windowHeight,E.current=T,S.current=F,Math.abs(S.current)>1.5*R.current.windowHeight||Math.abs(E.current)>1.5*R.current.windowWidth){if(!d)return;g.current=!1}else g.current=!0};return C.useEffect(()=>{if(!s&&Rw())return;b();let T=window;return i&&i.current&&(T=i.current),T.addEventListener("scroll",Ee,{passive:!0}),window.addEventListener("visibilitychange",Oe),window.addEventListener("resize",Ze),Le(),()=>{j(),T.removeEventListener("scroll",Ee),window.removeEventListener("visibilitychange",Oe),window.removeEventListener("resize",Ze)}},[]),Ht.createElement(Ht.Fragment,null,Ht.createElement("span",{ref:h,style:{width:"100%",height:"100%",display:"inline-block",userSelect:"none",pointerEvents:"none",position:a?"absolute":"relative",top:0,left:0,zIndex:c||"initial"}},Ht.createElement("span",{ref:u,style:{backfaceVisibility:"hidden",position:"relative",width:"100%",height:"100%",display:"inline-block",userSelect:"initial",pointerEvents:"initial"}},n)))}),BP=()=>f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8"}),f.jsx("div",{className:"relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20"})]}),VP=()=>f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block"}),f.jsx(na,{className:"hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block"}),f.jsx(na,{className:"hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block"})]}),HP=()=>f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"}),f.jsx("div",{className:"absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"}),f.jsx("div",{className:"absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"}),f.jsx("div",{className:"absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"})]}),rc=({parallaxRef:t})=>{const[e,n]=C.useState(!1);return C.useEffect(()=>{n(!0)},[]),f.jsxs("div",{className:"absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]",children:[f.jsx(HP,{}),f.jsxs(UP,{strength:.07,parallaxContainerRef:t,children:[f.jsx("div",{className:"absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]",children:f.jsx("div",{className:`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${e?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`})}),f.jsx("div",{className:"absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]",children:f.jsx("div",{className:`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${e?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`})}),f.jsx("div",{className:"absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]",children:f.jsx("div",{className:`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${e?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`})}),f.jsx("div",{className:"absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]",children:f.jsx("div",{className:`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${e?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`})}),f.jsx("div",{className:"absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]",children:f.jsx("div",{className:`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${e?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`})}),f.jsx("div",{className:"absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]",children:f.jsx("div",{className:`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${e?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`})})]})]})},GP=({className:t,comment:e})=>f.jsxs("div",{className:`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${t||""} text-base`,children:[f.jsx("img",{className:"w-5 h-5 mr-4",src:Vx,alt:"Loading"}),e]}),KP=({className:t,title:e})=>f.jsxs("div",{className:`${t||""} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`,children:[f.jsx("img",{src:Yx,width:62,height:62,alt:"image",className:"rounded-xl"}),f.jsxs("div",{className:"flex-1",children:[f.jsx("h6",{className:"mb-1 font-semibold text-base",children:e}),f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("ul",{className:"flex -m-0.5",children:rR.map((n,r)=>f.jsx("li",{className:"flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden",children:f.jsx("img",{src:n,className:"w-full",width:20,height:20,alt:n})},r))}),f.jsx("div",{className:"body-2 text-n-13",children:"..."})]})]})]}),qP=()=>{const t=C.useRef(null);return f.jsxs($a,{className:"pt-[12rem] -mt-[5.25rem]",crosses:!0,crossesOffset:"lg:translate-y-[5.25rem]",customPaddings:!0,id:"hero",children:[f.jsxs("div",{className:"container relative",ref:t,children:[f.jsxs("div",{className:"relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]",children:[f.jsxs("h1",{className:"h1 mb-6",children:["Unlock the potential of community-driven  event discovery with our "," ",f.jsxs("span",{className:"inline-block relative",children:["EventMingle"," ",f.jsx("img",{src:Kx,className:"absolute top-full left-0 w-full xl:-mt-2",width:624,height:28,alt:"Curve"})]})]}),f.jsx("p",{className:"body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8",children:"Experience the convenience of a crowdsourced local events calendar, where users come together to share and explore upcoming activities in their area"}),f.jsx(St,{href:"/events",white:!0,children:"Get started"})]}),f.jsxs("div",{className:"relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24",children:[f.jsxs("div",{className:"relative z-1 p-0.5 rounded-2xl bg-conic-gradient",children:[f.jsxs("div",{className:"relative bg-n-8 rounded-[1rem]",children:[f.jsx("div",{className:"h-[1.4rem] bg-n-10 rounded-t-[0.9rem]"}),f.jsxs("div",{className:"aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]",children:[f.jsx("img",{src:Gx,className:"w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]",width:1024,height:490,alt:"AI"}),f.jsx(WP,{isAbsolutelyPositioned:!0,children:f.jsx(KP,{className:"hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex",title:"Add local Events "})})]})]}),f.jsx(BP,{})]}),f.jsx("div",{className:"absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]",children:f.jsx("img",{src:qx,className:"w-full",width:1440,height:1800,alt:"hero"})})]}),f.jsx(rc,{})]}),f.jsx(VP,{}),f.jsx(nr,{})]})};var YP="firebase",$P="10.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt(YP,$P,"app");const bw="@firebase/installations",If="0.6.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=1e4,Aw=`w:${If}`,Ow="FIS_v2",QP="https://firebaseinstallations.googleapis.com/v1",XP=60*60*1e3,JP="installations",ZP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Mr=new Wr(JP,ZP,eA);function Lw(t){return t instanceof zt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw({projectId:t}){return`${QP}/projects/${t}/installations`}function Mw(t){return{token:t.token,requestStatus:2,expiresIn:nA(t.expiresIn),creationTime:Date.now()}}async function Fw(t,e){const r=(await e.json()).error;return Mr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function jw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function tA(t,{refreshToken:e}){const n=jw(t);return n.append("Authorization",rA(e)),n}async function Uw(t){const e=await t();return e.status>=500&&e.status<600?t():e}function nA(t){return Number(t.replace("s","000"))}function rA(t){return`${Ow} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Dw(t),i=jw(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:Ow,appId:t.appId,sdkVersion:Aw},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Uw(()=>fetch(r,l));if(a.ok){const c=await a.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Mw(c.authToken)}}else throw await Fw("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=/^[cdef][\w-]{21}$/,xd="";function lA(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=aA(t);return oA.test(n)?n:xd}catch{return xd}}function aA(t){return sA(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=new Map;function Bw(t,e){const n=ic(t);Vw(n,e),cA(n,e)}function Vw(t,e){const n=Ww.get(t);if(n)for(const r of n)r(e)}function cA(t,e){const n=uA();n&&n.postMessage({key:t,fid:e}),dA()}let yr=null;function uA(){return!yr&&"BroadcastChannel"in self&&(yr=new BroadcastChannel("[Firebase] FID Change"),yr.onmessage=t=>{Vw(t.data.key,t.data.fid)}),yr}function dA(){Ww.size===0&&yr&&(yr.close(),yr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA="firebase-installations-database",fA=1,Fr="firebase-installations-store";let eu=null;function Tf(){return eu||(eu=c_(hA,fA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fr)}}})),eu}async function pa(t,e){const n=ic(t),i=(await Tf()).transaction(Fr,"readwrite"),s=i.objectStore(Fr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Bw(t,e.fid),e}async function Hw(t){const e=ic(t),r=(await Tf()).transaction(Fr,"readwrite");await r.objectStore(Fr).delete(e),await r.done}async function sc(t,e){const n=ic(t),i=(await Tf()).transaction(Fr,"readwrite"),s=i.objectStore(Fr),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Bw(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kf(t){let e;const n=await sc(t.appConfig,r=>{const i=pA(r),s=mA(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===xd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function pA(t){const e=t||{fid:lA(),registrationStatus:0};return Gw(e)}function mA(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Mr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=gA(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:vA(t)}:{installationEntry:e}}async function gA(t,e){try{const n=await iA(t,e);return pa(t.appConfig,n)}catch(n){throw Lw(n)&&n.customData.serverCode===409?await Hw(t.appConfig):await pa(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function vA(t){let e=await _g(t.appConfig);for(;e.registrationStatus===1;)await zw(100),e=await _g(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await kf(t);return r||n}return e}function _g(t){return sc(t,e=>{if(!e)throw Mr.create("installation-not-found");return Gw(e)})}function Gw(t){return yA(t)?{fid:t.fid,registrationStatus:0}:t}function yA(t){return t.registrationStatus===1&&t.registrationTime+Pw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _A({appConfig:t,heartbeatServiceProvider:e},n){const r=wA(t,n),i=tA(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:Aw,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Uw(()=>fetch(r,l));if(a.ok){const c=await a.json();return Mw(c)}else throw await Fw("Generate Auth Token",a)}function wA(t,{fid:e}){return`${Dw(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xf(t,e=!1){let n;const r=await sc(t.appConfig,s=>{if(!Kw(s))throw Mr.create("not-registered");const o=s.authToken;if(!e&&CA(o))return s;if(o.requestStatus===1)return n=EA(t,e),s;{if(!navigator.onLine)throw Mr.create("app-offline");const l=TA(s);return n=SA(t,l),l}});return n?await n:r.authToken}async function EA(t,e){let n=await wg(t.appConfig);for(;n.authToken.requestStatus===1;)await zw(100),n=await wg(t.appConfig);const r=n.authToken;return r.requestStatus===0?xf(t,e):r}function wg(t){return sc(t,e=>{if(!Kw(e))throw Mr.create("not-registered");const n=e.authToken;return kA(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function SA(t,e){try{const n=await _A(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await pa(t.appConfig,r),n}catch(n){if(Lw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Hw(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await pa(t.appConfig,r)}throw n}}function Kw(t){return t!==void 0&&t.registrationStatus===2}function CA(t){return t.requestStatus===2&&!IA(t)}function IA(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+XP}function TA(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function kA(t){return t.requestStatus===1&&t.requestTime+Pw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xA(t){const e=t,{installationEntry:n,registrationPromise:r}=await kf(e);return r?r.catch(console.error):xf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NA(t,e=!1){const n=t;return await RA(n),(await xf(n,e)).token}async function RA(t){const{registrationPromise:e}=await kf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(t){if(!t||!t.options)throw tu("App Configuration");if(!t.name)throw tu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw tu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function tu(t){return Mr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="installations",PA="installations-internal",AA=t=>{const e=t.getProvider("app").getImmediate(),n=bA(e),r=tr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},OA=t=>{const e=t.getProvider("app").getImmediate(),n=tr(e,qw).getImmediate();return{getId:()=>xA(n),getToken:i=>NA(n,i)}};function LA(){Ut(new Tt(qw,AA,"PUBLIC")),Ut(new Tt(PA,OA,"PRIVATE"))}LA();lt(bw,If);lt(bw,If,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma="analytics",DA="firebase_id",MA="origin",FA=60*1e3,jA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Nf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new Ma("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ft=new Wr("analytics","Analytics",UA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(t){if(!t.startsWith(Nf)){const e=ft.create("invalid-gtag-resource",{gtagURL:t});return at.warn(e.message),""}return t}function Yw(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function WA(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function BA(t,e){const n=WA("firebase-js-sdk-policy",{createScriptURL:zA}),r=document.createElement("script"),i=`${Nf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function VA(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function HA(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const a=(await Yw(n)).find(c=>c.measurementId===i);a&&await e[a.appId]}}catch(l){at.error(l)}t("config",i,s)}async function GA(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await Yw(n);for(const a of o){const c=l.find(u=>u.measurementId===a),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){at.error(s)}}function KA(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,a]=o;await GA(t,e,n,l,a)}else if(s==="config"){const[l,a]=o;await HA(t,e,n,r,l,a)}else if(s==="consent"){const[l]=o;t("consent","update",l)}else if(s==="get"){const[l,a,c]=o;t("get",l,a,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){at.error(l)}}return i}function qA(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=KA(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function YA(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Nf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=30,QA=1e3;class XA{constructor(e={},n=QA){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $w=new XA;function JA(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ZA(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:JA(r)},s=jA.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(l=a.error.message)}catch{}throw ft.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function eO(t,e=$w,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw ft.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ft.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new rO;return setTimeout(async()=>{l.abort()},n!==void 0?n:FA),Qw({appId:r,apiKey:i,measurementId:s},o,l,e)}async function Qw(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=$w){var s;const{appId:o,measurementId:l}=t;try{await tO(r,e)}catch(a){if(l)return at.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await ZA(t);return i.deleteThrottleMetadata(o),a}catch(a){const c=a;if(!nO(c)){if(i.deleteThrottleMetadata(o),l)return at.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw a}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Jp(n,i.intervalMillis,$A):Jp(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,u),at.debug(`Calling attemptFetch again in ${d} millis`),Qw(t,u,r,i)}}function tO(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(ft.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function nO(t){if(!(t instanceof zt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class rO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function iO(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sO(){if(i_())try{await s_()}catch(t){return at.warn(ft.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return at.warn(ft.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function oO(t,e,n,r,i,s,o){var l;const a=eO(t);a.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&at.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>at.error(v)),e.push(a);const c=sO().then(v=>{if(v)return r.getId()}),[d,u]=await Promise.all([a,c]);YA(s)||BA(s,d.measurementId),i("js",new Date);const h=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return h[MA]="firebase",h.update=!0,u!=null&&(h[DA]=u),i("config",d.measurementId,h),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e){this.app=e}_delete(){return delete Ts[this.app.options.appId],Promise.resolve()}}let Ts={},Eg=[];const Sg={};let nu="dataLayer",aO="gtag",Cg,Xw,Ig=!1;function cO(){const t=[];if(t_()&&t.push("This is a browser extension environment."),pC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ft.create("invalid-analytics-context",{errorInfo:e});at.warn(n.message)}}function uO(t,e,n){cO();const r=t.options.appId;if(!r)throw ft.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)at.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ft.create("no-api-key");if(Ts[r]!=null)throw ft.create("already-exists",{id:r});if(!Ig){VA(nu);const{wrappedGtag:s,gtagCore:o}=qA(Ts,Eg,Sg,nu,aO);Xw=s,Cg=o,Ig=!0}return Ts[r]=oO(t,Eg,Sg,e,Cg,nu,n),new lO(t)}function dO(t=Fa()){t=ge(t);const e=tr(t,ma);return e.isInitialized()?e.getImmediate():hO(t)}function hO(t,e={}){const n=tr(t,ma);if(n.isInitialized()){const i=n.getImmediate();if(Gs(e,n.getOptions()))return i;throw ft.create("already-initialized")}return n.initialize({options:e})}function fO(t,e,n,r){t=ge(t),iO(Xw,Ts[t.app.options.appId],e,n,r).catch(i=>at.error(i))}const Tg="@firebase/analytics",kg="0.10.1";function pO(){Ut(new Tt(ma,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return uO(r,i,n)},"PUBLIC")),Ut(new Tt("analytics-internal",t,"PRIVATE")),lt(Tg,kg),lt(Tg,kg,"esm2017");function t(e){try{const n=e.getProvider(ma).getImmediate();return{logEvent:(r,i,s)=>fO(n,r,i,s)}}catch(n){throw ft.create("interop-component-reg-failed",{reason:n})}}}pO();const mO={apiKey:"AIzaSyCUhFLZ6w_IcMGcuVNrk567tPhq__q6ryw",authDomain:"events-app-8a786.firebaseapp.com",databaseURL:"https://events-app-8a786-default-rtdb.firebaseio.com",projectId:"events-app-8a786",storageBucket:"events-app-8a786.appspot.com",messagingSenderId:"593192966656",appId:"1:593192966656:web:86cc974853c86764dcd6e5",measurementId:"G-R9QM55RH5V"},ga=u_(mO);dO(ga);const gO=()=>{const[t,e]=C.useState(""),[n,r]=C.useState(""),i=Dr(),s=ir(),o=d=>{e(d.target.value)},l=d=>{r(d.target.value)},a=d=>{d.preventDefault(),ob(i,t,n).then(u=>{const h=u.user;console.log(h),s("/")}).catch(u=>{u.code,u.message})},c=()=>{const d=new nn;bb(i,d).then(u=>{const h=u.user,v=Wi(ga),_=ln(v,`users/${h.uid}`);af(_,{email:h.email}),s("/")}).catch(u=>{u.code,u.message})};return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"h-screen flex justify-center items-center",children:f.jsxs("div",{className:"max-w-md rounded-lg shadow-lg p-8 ring-2 relative z-10",children:[f.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Login"}),f.jsxs("form",{className:"space-y-4",onSubmit:a,children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"email",className:"block mb-1",children:"Email"}),f.jsx("input",{type:"email",id:"email",name:"email",className:"w-full bg-n-11 border rounded-md py-2 px-3",placeholder:"Enter your email",value:t,onChange:o})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"password",className:"block mb-1",children:"Password"}),f.jsx("input",{type:"password",id:"password",name:"password",className:"w-full bg-n-11 border rounded-md py-2 px-3",placeholder:"Enter your password",value:n,onChange:l})]}),f.jsx(St,{type:"submit",className:"w-full",children:"Login"}),f.jsx(St,{onClick:c,className:"w-full mt-2",children:"Sign in with Google"})]}),f.jsxs("p",{className:"text-sm mt-4",children:["Don't have an account?"," ",f.jsx(G0,{to:"/register",className:"text-color-1",children:"Register here"})]})]})}),f.jsx(rc,{}),f.jsx(nr,{})]})},vO=()=>{const[t,e]=C.useState(""),[n,r]=C.useState(""),[i,s]=C.useState(""),o=Dr(ga),l=ir(),a=h=>{e(h.target.value)},c=h=>{r(h.target.value)},d=h=>{s(h.target.value)},u=h=>{h.preventDefault(),sb(o,t,n).then(v=>{const _=v.user,E=Wi(ga),S=ln(E,`users/${_.uid}`);af(S,{email:_.email}),console.log(v),console.log(_),l("/")}).catch(v=>{v.code,v.message})};return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"h-screen flex justify-center items-center relative z-10",children:[" ",f.jsxs("div",{className:"max-w-md rounded-lg shadow-lg p-8 ring-2",children:[f.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Register"}),f.jsxs("form",{className:"space-y-4",onSubmit:u,children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"email",className:"block mb-1",children:"Email"}),f.jsx("input",{type:"email",id:"email",name:"email",className:"w-full bg-n-11 border rounded-md py-2 px-3",placeholder:"Enter your email",value:t,onChange:a})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"password",className:"block mb-1",children:"Password"}),f.jsx("input",{type:"password",id:"password",name:"password",className:"w-full bg-n-11 border rounded-md py-2 px-3",placeholder:"Enter your password",value:n,onChange:c})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"confirmPassword",className:"block mb-1",children:"Confirm Password"}),f.jsx("input",{type:"password",id:"confirmPassword",name:"confirmPassword",className:"w-full bg-n-11 border rounded-md py-2 px-3",placeholder:"Confirm your password",value:i,onChange:d})]}),f.jsx(St,{type:"submit",className:"w-full",children:"Register"})]}),f.jsxs("p",{className:"text-sm mt-4",children:["Already have an account?"," ",f.jsx(G0,{to:"/login",className:"text-color-1",children:"Login here"})]})]})]}),f.jsx(rc,{}),f.jsx(nr,{})]})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="firebasestorage.googleapis.com",Zw="storageBucket",yO=2*60*1e3,_O=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends zt{constructor(e,n,r=0){super(ru(e),`Firebase Storage: ${n} (${ru(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ve.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ru(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var me;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(me||(me={}));function ru(t){return"storage/"+t}function Rf(){const t="An unknown error occurred, please check the error payload for server response.";return new ve(me.UNKNOWN,t)}function wO(t){return new ve(me.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function EO(t){return new ve(me.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function SO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ve(me.UNAUTHENTICATED,t)}function CO(){return new ve(me.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function IO(t){return new ve(me.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function TO(){return new ve(me.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kO(){return new ve(me.CANCELED,"User canceled the upload/download.")}function xO(t){return new ve(me.INVALID_URL,"Invalid URL '"+t+"'.")}function NO(t){return new ve(me.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function RO(){return new ve(me.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Zw+"' property when initializing the app?")}function bO(){return new ve(me.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function PO(){return new ve(me.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function AO(t){return new ve(me.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Nd(t){return new ve(me.INVALID_ARGUMENT,t)}function eE(){return new ve(me.APP_DELETED,"The Firebase app was deleted.")}function OO(t){return new ve(me.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ks(t,e){return new ve(me.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function rs(t){throw new ve(me.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=dt.makeFromUrl(e,n)}catch{return new dt(e,"")}if(r.path==="")return r;throw NO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),a={bucket:1,path:3};function c(w){w.path_=decodeURIComponent(w.path)}const d="v[A-Za-z0-9_]+",u=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",v=new RegExp(`^https?://${u}/${d}/b/${i}/o${h}`,"i"),_={bucket:1,path:3},E=n===Jw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",m=new RegExp(`^https?://${E}/${i}/${S}`,"i"),g=[{regex:l,indices:a,postModify:s},{regex:v,indices:_,postModify:c},{regex:m,indices:{bucket:1,path:2},postModify:c}];for(let w=0;w<g.length;w++){const I=g[w],x=I.regex.exec(e);if(x){const R=x[I.indices.bucket];let A=x[I.indices.path];A||(A=""),r=new dt(R,A),I.postModify(r);break}}if(r==null)throw xO(e);return r}}class LO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DO(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function a(){return l===2}let c=!1;function d(...S){c||(c=!0,e.apply(null,S))}function u(S){i=setTimeout(()=>{i=null,t(v,a())},S)}function h(){s&&clearTimeout(s)}function v(S,...m){if(c){h();return}if(S){h(),d.call(null,S,...m);return}if(a()||o){h(),d.call(null,S,...m);return}r<64&&(r*=2);let g;l===1?(l=2,g=0):g=(r+Math.random())*1e3,u(g)}let _=!1;function E(S){_||(_=!0,h(),!c&&(i!==null?(S||(l=2),clearTimeout(i),u(0)):S||(l=1)))}return u(0),s=setTimeout(()=>{o=!0,E(!0)},n),E}function MO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(t){return t!==void 0}function jO(t){return typeof t=="object"&&!Array.isArray(t)}function bf(t){return typeof t=="string"||t instanceof String}function xg(t){return Pf()&&t instanceof Blob}function Pf(){return typeof Blob<"u"}function Ng(t,e,n,r){if(r<e)throw Nd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Nd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function tE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Cr||(Cr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,n,r,i,s,o,l,a,c,d,u,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,_)=>{this.resolve_=v,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Xo(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const a=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Cr.NO_ERROR,a=s.getStatus();if(!l||UO(a,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Cr.ABORT;r(!1,new Xo(!1,null,d));return}const c=this.successCodes_.indexOf(a)!==-1;r(!0,new Xo(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());FO(a)?s(a):s()}catch(a){o(a)}else if(l!==null){const a=Rf();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(i.canceled){const a=this.appDelete_?eE():kO();o(a)}else{const a=TO();o(a)}};this.canceled_?n(!1,new Xo(!1,null,!0)):this.backoffId_=DO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&MO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Xo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function WO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function BO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function VO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function HO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function GO(t,e,n,r,i,s,o=!0){const l=tE(t.urlParams),a=t.url+l,c=Object.assign({},t.headers);return VO(c,e),WO(c,n),BO(c,s),HO(c,r),new zO(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function qO(...t){const e=KO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Pf())return new Blob(t);throw new ve(me.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function YO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(t){if(typeof atob>"u")throw AO("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class iu{constructor(e,n){this.data=e,this.contentType=n||null}}function QO(t,e){switch(t){case Gt.RAW:return new iu(nE(e));case Gt.BASE64:case Gt.BASE64URL:return new iu(rE(t,e));case Gt.DATA_URL:return new iu(JO(e),ZO(e))}throw Rf()}function nE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function XO(t){let e;try{e=decodeURIComponent(t)}catch{throw ks(Gt.DATA_URL,"Malformed data URL.")}return nE(e)}function rE(t,e){switch(t){case Gt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ks(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Gt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ks(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=$O(e)}catch(i){throw i.message.includes("polyfill")?i:ks(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class iE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ks(Gt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=e2(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function JO(t){const e=new iE(t);return e.base64?rE(Gt.BASE64,e.rest):XO(e.rest)}function ZO(t){return new iE(t).contentType}function e2(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n){let r=0,i="";xg(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(xg(this.data_)){const r=this.data_,i=YO(r,e,n);return i===null?null:new Rn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Rn(r,!0)}}static getBlob(...e){if(Pf()){const n=e.map(r=>r instanceof Rn?r.data_:r);return new Rn(qO.apply(null,n))}else{const n=e.map(o=>bf(o)?QO(Gt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new Rn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(t){let e;try{e=JSON.parse(t)}catch{return null}return jO(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function n2(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function oE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r2(t,e){return e}class Ke{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||r2}}let Jo=null;function i2(t){return!bf(t)||t.length<2?t:oE(t)}function lE(){if(Jo)return Jo;const t=[];t.push(new Ke("bucket")),t.push(new Ke("generation")),t.push(new Ke("metageneration")),t.push(new Ke("name","fullPath",!0));function e(s,o){return i2(o)}const n=new Ke("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ke("size");return i.xform=r,t.push(i),t.push(new Ke("timeCreated")),t.push(new Ke("updated")),t.push(new Ke("md5Hash",null,!0)),t.push(new Ke("cacheControl",null,!0)),t.push(new Ke("contentDisposition",null,!0)),t.push(new Ke("contentEncoding",null,!0)),t.push(new Ke("contentLanguage",null,!0)),t.push(new Ke("contentType",null,!0)),t.push(new Ke("metadata","customMetadata",!0)),Jo=t,Jo}function s2(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new dt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function o2(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return s2(r,t),r}function aE(t,e,n){const r=sE(e);return r===null?null:o2(t,r,n)}function l2(t,e,n,r){const i=sE(e);if(i===null||!bf(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,u=t.fullPath,h="/b/"+o(d)+"/o/"+o(u),v=Af(h,n,r),_=tE({alt:"media",token:c});return v+_})[0]}function a2(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class cE{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(t){if(!t)throw Rf()}function c2(t,e){function n(r,i){const s=aE(t,i,e);return uE(s!==null),s}return n}function u2(t,e){function n(r,i){const s=aE(t,i,e);return uE(s!==null),l2(s,i,t.host,t._protocol)}return n}function dE(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=CO():i=SO():n.getStatus()===402?i=EO(t.bucket):n.getStatus()===403?i=IO(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function d2(t){const e=dE(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=wO(t.path)),s.serverResponse=i.serverResponse,s}return n}function h2(t,e,n){const r=e.fullServerUrl(),i=Af(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new cE(i,s,u2(t,n),o);return l.errorHandler=d2(e),l}function f2(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function p2(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=f2(null,e)),r}function m2(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let g="";for(let w=0;w<2;w++)g=g+Math.random().toString().slice(2);return g}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const c=p2(e,r,i),d=a2(c,n),u="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+a+`\r
Content-Type: `+c.contentType+`\r
\r
`,h=`\r
--`+a+"--",v=Rn.getBlob(u,r,h);if(v===null)throw bO();const _={name:c.fullPath},E=Af(s,t.host,t._protocol),S="POST",m=t.maxUploadRetryTime,p=new cE(E,S,c2(t,n),m);return p.urlParams=_,p.headers=o,p.body=v.uploadData(),p.errorHandler=dE(e),p}class g2{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Cr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Cr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Cr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw rs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw rs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw rs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw rs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw rs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class v2 extends g2{initXhr(){this.xhr_.responseType="text"}}function hE(){return new v2}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n){this._service=e,n instanceof dt?this._location=n:this._location=dt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new jr(e,n)}get root(){const e=new dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return oE(this._location.path)}get storage(){return this._service}get parent(){const e=t2(this._location.path);if(e===null)return null;const n=new dt(this._location.bucket,e);return new jr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw OO(e)}}function y2(t,e,n){t._throwIfRoot("uploadBytes");const r=m2(t.storage,t._location,lE(),new Rn(e,!0),n);return t.storage.makeRequestWithTokens(r,hE).then(i=>({metadata:i,ref:t}))}function _2(t){t._throwIfRoot("getDownloadURL");const e=h2(t.storage,t._location,lE());return t.storage.makeRequestWithTokens(e,hE).then(n=>{if(n===null)throw PO();return n})}function w2(t,e){const n=n2(t._location.path,e),r=new dt(t._location.bucket,n);return new jr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E2(t){return/^[A-Za-z]+:\/\//.test(t)}function S2(t,e){return new jr(t,e)}function fE(t,e){if(t instanceof Of){const n=t;if(n._bucket==null)throw RO();const r=new jr(n,n._bucket);return e!=null?fE(r,e):r}else return e!==void 0?w2(t,e):t}function C2(t,e){if(e&&E2(e)){if(t instanceof Of)return S2(t,e);throw Nd("To use ref(service, url), the first argument must be a Storage instance.")}else return fE(t,e)}function Rg(t,e){const n=e==null?void 0:e[Zw];return n==null?null:dt.makeFromBucketSpec(n,t)}function I2(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:e_(i,t.app.options.projectId))}class Of{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Jw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yO,this._maxUploadRetryTime=_O,this._requests=new Set,i!=null?this._bucket=dt.makeFromBucketSpec(i,this._host):this._bucket=Rg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=dt.makeFromBucketSpec(this._url,e):this._bucket=Rg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ng("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ng("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new jr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new LO(eE());{const o=GO(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const bg="@firebase/storage",Pg="0.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE="storage";function T2(t,e,n){return t=ge(t),y2(t,e,n)}function k2(t){return t=ge(t),_2(t)}function x2(t,e){return t=ge(t),C2(t,e)}function N2(t=Fa(),e){t=ge(t);const r=tr(t,pE).getImmediate({identifier:e}),i=Xy("storage");return i&&R2(r,...i),r}function R2(t,e,n,r={}){I2(t,e,n,r)}function b2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Of(n,r,i,e,Br)}function P2(){Ut(new Tt(pE,b2,"PUBLIC").setMultipleInstances(!0)),lt(bg,Pg,""),lt(bg,Pg,"esm2017")}P2();const A2=()=>{const t=Dr(),e=Wi(),n=N2(),r=ir(),[i,s]=C.useState(""),[o,l]=C.useState(!1),[a,c]=C.useState(""),[d,u]=C.useState(""),[h,v]=C.useState(null),[_,E]=C.useState(!1),[S,m]=C.useState(null),[p,g]=C.useState(null),[w,I]=C.useState(""),{coords:x}=Oa({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3});C.useEffect(()=>{x&&x.latitude&&x.longitude&&u(`${x.latitude}, ${x.longitude}`)},[x]);const R=$=>{s($.target.value)},A=$=>{l($.target.checked)},b=$=>{c($.target.value)},j=$=>{const Ee=$.target.files[0];v(Ee)},Y=$=>{E($.target.checked),$.target.checked?m(new Date().toISOString().slice(0,16)):m(null)},ae=$=>{m($.target.value)},Oe=$=>{g($.target.value)},Le=$=>{I($.target.value)},Ze=$=>{$.preventDefault();const Ee=t.currentUser;if(!Ee||!h)return;const T=x2(n,`images/${h.name}`);T2(T,h).then(F=>{k2(T).then(z=>{const M=ln(e,"events");R0(M,{userId:Ee.uid,eventName:i,organizer:o,contactInfo:a,location:d,imageURL:z,isEventHappening:_,startTime:S,endTime:p,description:w}).then(()=>{s(""),l(!1),c(""),u(""),v(null),E(!1),m(null),g(null),I(""),r("/events")}).catch(V=>{console.error("Error adding event: ",V)})}).catch(z=>{console.error("Error getting download URL: ",z)})}).catch(F=>{console.error("Error uploading image: ",F)})};return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:" flex justify-center items-center",children:f.jsxs("div",{className:"max-w-md rounded-lg shadow-lg p-8 ring-2 relative z-10",children:[f.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Event Registration"}),f.jsxs("form",{className:"space-y-4",onSubmit:Ze,children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"eventName",className:"block mb-1",children:"Event Name"}),f.jsx("input",{type:"text",id:"eventName",name:"eventName",className:"w-full bg-n-11 border rounded-md py-2 px-3",placeholder:"Enter event name",value:i,onChange:R})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"organizer",className:"block mb-1",children:"Are you an organizer?"}),f.jsx("input",{type:"checkbox",checked:o,onChange:A,className:"h-5 mb-5"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"image",className:"block mb-1",children:"Upload Image"}),f.jsxs("div",{className:"relative",children:[f.jsx("input",{type:"file",id:"image",name:"image",accept:"image/*",onChange:j,className:"w-full bg-n-11 border rounded-md py-2 px-3  "}),f.jsx("label",{htmlFor:"image",className:"cursor-pointer absolute inset-0.5 bg-n-8",style:{clipPath:"url(#benefits)"},children:f.jsx("div",{className:"absolute inset-0 opacity-0 transition-opacity hover:opacity-10",children:h&&f.jsx("img",{src:URL.createObjectURL(h),width:380,height:362,alt:"Event Preview",className:"w-full h-full object-cover"})})})]})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"contactInfo",className:"block mb-1",children:"Contact Information"}),f.jsx("input",{type:"text",id:"contactInfo",name:"contactInfo",className:"w-full bg-n-11 border rounded-md py-2 px-3",placeholder:"Enter contact information",value:a,onChange:b})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"location",className:"block mb-1",children:"Location:"}),f.jsx("input",{type:"text",id:"location",value:d,readOnly:!0,className:"w-full bg-n-11 border rounded-md py-2 px-3"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"isEventHappening",className:"block mb-1",children:"Is the event currently happening?"}),f.jsx("input",{type:"checkbox",id:"isEventHappening",checked:_,onChange:Y,className:"h-5 mb-5"})]}),!_&&f.jsxs("div",{children:[f.jsx("label",{htmlFor:"startTime",className:"block mb-1",children:"Start Time:"}),f.jsx("input",{type:"datetime-local",id:"startTime",value:S,onChange:ae,className:"w-full bg-n-11 border rounded-md py-2 px-3"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"endTime",className:"block mb-1",children:"End Time:"}),f.jsx("input",{type:"datetime-local",id:"endTime",value:p,onChange:Oe,className:"w-full bg-n-11 border rounded-md py-2 px-3"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"description",className:"block mb-1",children:"Description:"}),f.jsx("textarea",{id:"description",value:w,onChange:Le,className:"w-full bg-n-11 border rounded-md py-2 px-3",rows:4,placeholder:"Enter event description"})]}),f.jsx(St,{type:"submit",className:"w-full",children:"Submit"})]})]})}),f.jsx(Qa,{}),f.jsx(nr,{})]})},O2=()=>{const[t,e]=C.useState(null),[n,r]=C.useState(!1),[i,s]=C.useState(null),[o,l]=C.useState(""),{user:a}=Dr(),c=Wi(),{eventId:d}=RN(),u=ir();C.useEffect(()=>{(async()=>{try{const w=ln(c,`events/${d}`),I=await cf(w);I.exists()?(e(I.val()),I.val().likes&&a&&(console.log(I.val().likes[a.uid]),r(I.val().likes[a.uid]))):console.log("Event not found")}catch(w){console.error("Error fetching event:",w)}})();const p=ln(c,`events/${d}`),g=Ax(p,w=>{w.exists()?(e(w.val()),w.val().likes&&a&&(console.log(w.val().likes[a.uid]),r(w.val().likes[a.uid]))):console.log("Event not found")});return()=>{g()}},[d,c,a]),C.useEffect(()=>{const m=Dr(),p=pw(m,g=>{s(g)});return()=>{p()}},[]);const h=async()=>{try{if(i){const m=ln(c,`events/${d}/likes`);let p;n?(console.log("hereeeee"),p={...t.likes,hello:"sfsffs"},console.log(p),delete p[i.uid],console.log(p)):(console.log("he 22"),p={...t.likes,[i.uid]:!0}),await bx(m,p).then(()=>{console.log("Likes updated successfully")}).catch(g=>{console.error("Error updating likes:",g)}),r(!n)}else u("/login")}catch(m){console.error("Error updating likes:",m)}},v=async()=>{try{if(i&&o.trim()!==""){const m=ln(c,`events/${d}/comments`);await R0(m,{userId:i.uid,text:o.trim()}),l("")}else u("/login")}catch(m){console.error("Error submitting comment:",m)}};if(!t)return f.jsx("div",{children:"Loading..."});const _=t.likes?Object.keys(t.likes).length:0,E=t.startTime?new Date(t.startTime).toLocaleString():"Not specified",S=t.endTime?new Date(t.endTime).toLocaleString():"Not specified";return f.jsxs($a,{id:"how-to-use",children:[f.jsx("div",{className:"container",children:f.jsxs("div",{className:"relative ",children:[f.jsx("img",{className:"absolute inset-0 w-full h-full object-cover z-0 opacity-10",alt:"Event Background",src:t.imageURL}),f.jsxs("div",{className:"relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]",children:[f.jsx("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto"}),f.jsxs("div",{className:"relative z-1 max-w-[17rem] ml-auto",children:[f.jsx("h4",{className:"h4 mb-4",children:t.eventName}),f.jsx("p",{className:"body-2 mb-[3rem] text-n-3",children:t.description}),f.jsxs("ul",{className:"body-2",children:[f.jsxs("li",{className:"flex items-start py-4 border-t border-n-6 cursor-pointer",onClick:()=>h(),children:[f.jsx("img",{width:24,height:24,src:Yo,alt:"Check icon",style:{cursor:"pointer"}}),f.jsxs("p",{className:"ml-4",children:["Likes: ",_]})]}),f.jsxs("li",{className:"flex items-start py-4 border-t border-n-6",children:[f.jsx("img",{width:24,height:24,src:Yo,alt:"Check icon"}),f.jsxs("p",{className:"ml-4",children:["Contact : ",t.contactInfo]})]}),f.jsxs("li",{className:"flex items-start py-4 border-t border-n-6",children:[f.jsx("img",{width:24,height:24,src:Yo,alt:"Check icon"}),f.jsxs("p",{className:"ml-4",children:["Start Time: ",E]})]}),f.jsxs("li",{className:"flex items-start py-4 border-t border-n-6",children:[f.jsx("img",{width:24,height:24,src:Yo,alt:"Check icon"}),f.jsxs("p",{className:"ml-4",children:["End Time: ",S]})]})]})]})]})]})}),f.jsxs("div",{className:"flex items-center flex-row",children:[f.jsx("input",{type:"text",id:"comment",name:"comment",className:"w-full bg-n-8 border border-n-11 rounded-md py-2 px-3 ml-12 mr-20 focus:border-black",placeholder:"Write your Comment",value:o,onChange:m=>l(m.target.value)}),f.jsx(St,{className:"mr-20",onClick:v,children:"Comment"})]}),f.jsx("div",{className:"flex flex-col items-center mt-8",children:t.comments&&Object.values(t.comments).length>0?Object.values(t.comments).map((m,p)=>f.jsx(GP,{className:"relative left-4 right-4 bottom-4 border-n-1/10 border lg:bottom-8 lg:mt-3",comment:m.text},p)):f.jsx("p",{className:"text-gray-500",children:"No comments yet, be the first one to comment."})}),f.jsx(nr,{})]})},L2=()=>{const[t,e]=C.useState(2),[n,r]=C.useState(""),i=ir(),s=[{name:"Benz circle",latitude:16.497722,longitude:80.65378},{name:"Vijayawada Railway Station",latitude:16.517968,longitude:80.620439},{name:"Undavalli",latitude:16.491207,longitude:80.601396},{name:"Guntur",latitude:16.306526,longitude:80.436606}],o=c=>{e(c.target.value)},l=c=>{r(c.target.value)},a=()=>{const c=s.find(v=>v.name===n),d=c?c.latitude:"",u=c?c.longitude:"",h=c?c.name:"";i(`/filteredevents?radius=${t}&latitude=${d}&longitude=${u}&city=${h}`)};return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"h-screen flex justify-center items-center",children:f.jsxs("div",{className:"max-w-md rounded-lg shadow-lg p-8 ring-2 relative z-10",children:[f.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Filter Events"}),f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"radius",className:"block mb-1",children:"Radius (km):"}),f.jsx("input",{type:"number",id:"radius",name:"radius",className:"w-full bg-n-11 border rounded-md py-2 px-3",placeholder:"Enter radius",value:t,onChange:o})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"place",className:"block mb-1",children:"Select a Place:"}),f.jsxs("select",{id:"place",name:"place",className:"w-full bg-n-11 border rounded-md py-2 px-3",value:n,onChange:l,children:[f.jsx("option",{value:"",children:"Select a place"}),s.map(c=>f.jsx("option",{value:c.name,children:c.name},c.name))]})]}),f.jsx(St,{onClick:a,className:"w-full",children:"Apply Filter"})]})]})}),f.jsx(rc,{}),f.jsx(nr,{})]})},D2=()=>{const t=Wi();Oa({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3});const e=Vi(),n=new URLSearchParams(e.search),r=n.get("radius"),i=n.get("latitude"),s=n.get("longitude"),o=n.get("city"),[l,a]=C.useState(r),[c,d]=C.useState([]),u=ir();C.useEffect(()=>{const S=[i,s],m=r*1e3,p=ln(t,"events");cf(p).then(g=>{const w=[];g.forEach(I=>{const x=I.val(),R=x.location.split(",").map(parseFloat),A=Gy(R,S);A*1e3<=m&&w.push({id:I.key,...x,distance:A})}),d(w)})},[r,t]);const h=S=>{const[m,p]=S.split(","),g=`https://www.google.com/maps?q=${m},${p}`;window.open(g,"_blank")},v=S=>{console.log(S),u(`/event/${S}`)},_=()=>{u("/addevent")},E=()=>c.length===0?f.jsxs("div",{className:"flex flex-col items-center justify-center mt-10",children:[f.jsx("p",{className:"text-lg mb-4",children:"No events found."}),f.jsx(St,{onClick:_,className:"mt-2",children:"Be the first one to add an event"})]}):f.jsx("div",{className:"flex flex-wrap gap-10 mb-10",children:c.slice().reverse().map(S=>f.jsxs("div",{className:"block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:w-[24rem] md:h-[22rem]",style:{backgroundImage:"url(./src/assets/benefits/card-1.svg)"},children:[f.jsxs("div",{className:"relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] ",children:[f.jsx("h5",{className:"h5 mb-5",children:S.eventName}),f.jsx("p",{className:"body-2 mb-6 text-n-3",children:S.contactInfo}),f.jsxs("div",{className:"flex items-center mt-auto",children:[f.jsx("img",{src:O0,width:48,height:48,alt:S.title,onClick:()=>h(S.location),style:{cursor:"pointer"}}),f.jsx("p",{className:"ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider",children:f.jsx("a",{href:"",className:"explore-more-link",style:{cursor:"pointer",textDecoration:"none"},onClick:()=>{v(S.id)},children:"Explore more"})}),f.jsx(b0,{})]})]}),f.jsx(P0,{}),f.jsx("div",{className:"absolute inset-0.5 bg-n-8",style:{clipPath:"url(#benefits)"},children:f.jsx("div",{className:"absolute inset-0 opacity-10 transition-opacity hover:opacity-10",children:S.imageURL&&f.jsx("img",{src:S.imageURL,width:380,height:362,alt:S.title,className:"w-full h-full object-cover"})})}),f.jsx(A0,{})]},S.id))});return f.jsxs($a,{id:"features",children:[f.jsxs("div",{className:"container relative z-2",children:[f.jsx("div",{className:"flex items-center justify-center",children:f.jsxs("h1",{className:"h3 mb-2",children:["Showing Events at ",o," within ",l," Km radius"]})}),E()]}),f.jsx(Qa,{}),f.jsx(nr,{})]})},M2=()=>{const[t,e]=C.useState(!1),n=Dr();return C.useEffect(()=>{const r=pw(n,i=>{e(!!i)});return()=>r()},[n]),f.jsx(f.Fragment,{children:f.jsx(XN,{children:f.jsxs("div",{className:"pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden",children:[f.jsx(SP,{userLoggedIn:t}),f.jsxs(HN,{children:[f.jsx(Zt,{path:"/",element:f.jsx(qP,{})}),f.jsx(Zt,{path:"/events",element:f.jsx(tR,{})}),f.jsx(Zt,{path:"/login",element:f.jsx(gO,{})}),f.jsx(Zt,{path:"/register",element:f.jsx(vO,{})}),f.jsx(Zt,{path:"/filteredevents",element:f.jsx(D2,{})}),f.jsx(Zt,{path:"/filter",element:f.jsx(L2,{})}),f.jsx(Zt,{path:"/addevent",element:f.jsx(A2,{})}),f.jsx(Zt,{path:"/event/:eventId",element:f.jsx(O2,{})})]})]})})})};su.createRoot(document.getElementById("root")).render(f.jsx(Ht.StrictMode,{children:f.jsx(M2,{})}));

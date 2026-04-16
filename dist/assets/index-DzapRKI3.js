(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function gc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ja={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rr=Symbol.for("react.element"),vc=Symbol.for("react.portal"),yc=Symbol.for("react.fragment"),wc=Symbol.for("react.strict_mode"),kc=Symbol.for("react.profiler"),xc=Symbol.for("react.provider"),Sc=Symbol.for("react.context"),Ec=Symbol.for("react.forward_ref"),Cc=Symbol.for("react.suspense"),Nc=Symbol.for("react.memo"),_c=Symbol.for("react.lazy"),Wi=Symbol.iterator;function zc(e){return e===null||typeof e!="object"?null:(e=Wi&&e[Wi]||e["@@iterator"],typeof e=="function"?e:null)}var eu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tu=Object.assign,nu={};function gn(e,t,n){this.props=e,this.context=t,this.refs=nu,this.updater=n||eu}gn.prototype.isReactComponent={};gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ru(){}ru.prototype=gn.prototype;function Xo(e,t,n){this.props=e,this.context=t,this.refs=nu,this.updater=n||eu}var Ko=Xo.prototype=new ru;Ko.constructor=Xo;tu(Ko,gn.prototype);Ko.isPureReactComponent=!0;var $i=Array.isArray,lu=Object.prototype.hasOwnProperty,Yo={current:null},ou={key:!0,ref:!0,__self:!0,__source:!0};function iu(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)lu.call(t,r)&&!ou.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:rr,type:e,key:o,ref:i,props:l,_owner:Yo.current}}function Lc(e,t){return{$$typeof:rr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Go(e){return typeof e=="object"&&e!==null&&e.$$typeof===rr}function Pc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vi=/\/+/g;function Nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pc(""+e.key):t.toString(36)}function Lr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case rr:case vc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Nl(i,0):r,$i(l)?(n="",e!=null&&(n=e.replace(Vi,"$&/")+"/"),Lr(l,t,n,"",function(d){return d})):l!=null&&(Go(l)&&(l=Lc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Vi,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",$i(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+Nl(o,a);i+=Lr(o,t,n,u,l)}else if(u=zc(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+Nl(o,a++),i+=Lr(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function cr(e,t,n){if(e==null)return e;var r=[],l=0;return Lr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Tc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Pr={transition:null},Mc={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Pr,ReactCurrentOwner:Yo};function au(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:cr,forEach:function(e,t,n){cr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return cr(e,function(){t++}),t},toArray:function(e){return cr(e,function(t){return t})||[]},only:function(e){if(!Go(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=gn;D.Fragment=yc;D.Profiler=kc;D.PureComponent=Xo;D.StrictMode=wc;D.Suspense=Cc;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mc;D.act=au;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=tu({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Yo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)lu.call(t,u)&&!ou.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:rr,type:e.type,key:l,ref:o,props:r,_owner:i}};D.createContext=function(e){return e={$$typeof:Sc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xc,_context:e},e.Consumer=e};D.createElement=iu;D.createFactory=function(e){var t=iu.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Ec,render:e}};D.isValidElement=Go;D.lazy=function(e){return{$$typeof:_c,_payload:{_status:-1,_result:e},_init:Tc}};D.memo=function(e,t){return{$$typeof:Nc,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Pr.transition;Pr.transition={};try{e()}finally{Pr.transition=t}};D.unstable_act=au;D.useCallback=function(e,t){return pe.current.useCallback(e,t)};D.useContext=function(e){return pe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};D.useEffect=function(e,t){return pe.current.useEffect(e,t)};D.useId=function(){return pe.current.useId()};D.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return pe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};D.useRef=function(e){return pe.current.useRef(e)};D.useState=function(e){return pe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return pe.current.useTransition()};D.version="18.3.1";Ja.exports=D;var M=Ja.exports;const c=gc(M);var Jl={},uu={exports:{}},_e={},su={exports:{}},cu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,P){var R=C.length;C.push(P);e:for(;0<R;){var $=R-1>>>1,G=C[$];if(0<l(G,P))C[$]=P,C[R]=G,R=$;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var P=C[0],R=C.pop();if(R!==P){C[0]=R;e:for(var $=0,G=C.length,Nt=G>>>1;$<Nt;){var p=2*($+1)-1,O=C[p],T=p+1,ne=C[T];if(0>l(O,R))T<G&&0>l(ne,O)?(C[$]=ne,C[T]=R,$=T):(C[$]=O,C[p]=R,$=p);else if(T<G&&0>l(ne,R))C[$]=ne,C[T]=R,$=T;else break e}}return P}function l(C,P){var R=C.sortIndex-P.sortIndex;return R!==0?R:C.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var u=[],d=[],y=1,v=null,h=3,k=!1,x=!1,S=!1,A=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var P=n(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=C)r(d),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(d)}}function g(C){if(S=!1,m(C),!x)if(n(u)!==null)x=!0,Wt(E);else{var P=n(d);P!==null&&$t(g,P.startTime-C)}}function E(C,P){x=!1,S&&(S=!1,f(L),L=-1),k=!0;var R=h;try{for(m(P),v=n(u);v!==null&&(!(v.expirationTime>P)||C&&!he());){var $=v.callback;if(typeof $=="function"){v.callback=null,h=v.priorityLevel;var G=$(v.expirationTime<=P);P=e.unstable_now(),typeof G=="function"?v.callback=G:v===n(u)&&r(u),m(P)}else r(u);v=n(u)}if(v!==null)var Nt=!0;else{var p=n(d);p!==null&&$t(g,p.startTime-P),Nt=!1}return Nt}finally{v=null,h=R,k=!1}}var _=!1,z=null,L=-1,H=5,I=-1;function he(){return!(e.unstable_now()-I<H)}function Et(){if(z!==null){var C=e.unstable_now();I=C;var P=!0;try{P=z(!0,C)}finally{P?Ct():(_=!1,z=null)}}else _=!1}var Ct;if(typeof s=="function")Ct=function(){s(Et)};else if(typeof MessageChannel<"u"){var ur=new MessageChannel,sr=ur.port2;ur.port1.onmessage=Et,Ct=function(){sr.postMessage(null)}}else Ct=function(){A(Et,0)};function Wt(C){z=C,_||(_=!0,Ct())}function $t(C,P){L=A(function(){C(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){x||k||(x=!0,Wt(E))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(C){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var R=h;h=P;try{return C()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var R=h;h=C;try{return P()}finally{h=R}},e.unstable_scheduleCallback=function(C,P,R){var $=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?$+R:$):R=$,C){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=R+G,C={id:y++,callback:P,priorityLevel:C,startTime:R,expirationTime:G,sortIndex:-1},R>$?(C.sortIndex=R,t(d,C),n(u)===null&&C===n(d)&&(S?(f(L),L=-1):S=!0,$t(g,R-$))):(C.sortIndex=G,t(u,C),x||k||(x=!0,Wt(E))),C},e.unstable_shouldYield=he,e.unstable_wrapCallback=function(C){var P=h;return function(){var R=h;h=P;try{return C.apply(this,arguments)}finally{h=R}}}})(cu);su.exports=cu;var Rc=su.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ic=M,Ne=Rc;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var du=new Set,Bn={};function Ut(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(Bn[e]=t,e=0;e<t.length;e++)du.add(t[e])}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eo=Object.prototype.hasOwnProperty,Dc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hi={},Qi={};function Oc(e){return eo.call(Qi,e)?!0:eo.call(Hi,e)?!1:Dc.test(e)?Qi[e]=!0:(Hi[e]=!0,!1)}function Fc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ac(e,t,n,r){if(t===null||typeof t>"u"||Fc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var qo=/[\-:]([a-z])/g;function Zo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qo,Zo);oe[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qo,Zo);oe[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qo,Zo);oe[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Jo(e,t,n,r){var l=oe.hasOwnProperty(t)?oe[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ac(t,n,l,r)&&(n=null),r||l===null?Oc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nt=Ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dr=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),Qt=Symbol.for("react.fragment"),ei=Symbol.for("react.strict_mode"),to=Symbol.for("react.profiler"),fu=Symbol.for("react.provider"),pu=Symbol.for("react.context"),ti=Symbol.for("react.forward_ref"),no=Symbol.for("react.suspense"),ro=Symbol.for("react.suspense_list"),ni=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),mu=Symbol.for("react.offscreen"),bi=Symbol.iterator;function wn(e){return e===null||typeof e!="object"?null:(e=bi&&e[bi]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,_l;function zn(e){if(_l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_l=t&&t[1]||""}return`
`+_l+e}var zl=!1;function Ll(e,t){if(!e||zl)return"";zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,a=o.length-1;1<=i&&0<=a&&l[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==o[a]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{zl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zn(e):""}function jc(e){switch(e.tag){case 5:return zn(e.type);case 16:return zn("Lazy");case 13:return zn("Suspense");case 19:return zn("SuspenseList");case 0:case 2:case 15:return e=Ll(e.type,!1),e;case 11:return e=Ll(e.type.render,!1),e;case 1:return e=Ll(e.type,!0),e;default:return""}}function lo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qt:return"Fragment";case Ht:return"Portal";case to:return"Profiler";case ei:return"StrictMode";case no:return"Suspense";case ro:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pu:return(e.displayName||"Context")+".Consumer";case fu:return(e._context.displayName||"Context")+".Provider";case ti:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ni:return t=e.displayName||null,t!==null?t:lo(e.type)||"Memo";case lt:t=e._payload,e=e._init;try{return lo(e(t))}catch{}}return null}function Uc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lo(t);case 8:return t===ei?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bc(e){var t=hu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fr(e){e._valueTracker||(e._valueTracker=Bc(e))}function gu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oo(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vu(e,t){t=t.checked,t!=null&&Jo(e,"checked",t,!1)}function io(e,t){vu(e,t);var n=yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ao(e,t.type,n):t.hasOwnProperty("defaultValue")&&ao(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ki(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ao(e,t,n){(t!=="number"||Br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ln=Array.isArray;function nn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function uo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Ln(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yt(n)}}function yu(e,t){var n=yt(t.value),r=yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Gi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function so(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pr,ku=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pr=pr||document.createElement("div"),pr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wc=["Webkit","ms","Moz","O"];Object.keys(Mn).forEach(function(e){Wc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mn[t]=Mn[e]})});function xu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mn.hasOwnProperty(e)&&Mn[e]?(""+t).trim():t+"px"}function Su(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=xu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var $c=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function co(e,t){if(t){if($c[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function fo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var po=null;function ri(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mo=null,rn=null,ln=null;function qi(e){if(e=ir(e)){if(typeof mo!="function")throw Error(w(280));var t=e.stateNode;t&&(t=ml(t),mo(e.stateNode,e.type,t))}}function Eu(e){rn?ln?ln.push(e):ln=[e]:rn=e}function Cu(){if(rn){var e=rn,t=ln;if(ln=rn=null,qi(e),t)for(e=0;e<t.length;e++)qi(t[e])}}function Nu(e,t){return e(t)}function _u(){}var Pl=!1;function zu(e,t,n){if(Pl)return e(t,n);Pl=!0;try{return Nu(e,t,n)}finally{Pl=!1,(rn!==null||ln!==null)&&(_u(),Cu())}}function $n(e,t){var n=e.stateNode;if(n===null)return null;var r=ml(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var ho=!1;if(Ze)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){ho=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{ho=!1}function Vc(e,t,n,r,l,o,i,a,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(y){this.onError(y)}}var Rn=!1,Wr=null,$r=!1,go=null,Hc={onError:function(e){Rn=!0,Wr=e}};function Qc(e,t,n,r,l,o,i,a,u){Rn=!1,Wr=null,Vc.apply(Hc,arguments)}function bc(e,t,n,r,l,o,i,a,u){if(Qc.apply(this,arguments),Rn){if(Rn){var d=Wr;Rn=!1,Wr=null}else throw Error(w(198));$r||($r=!0,go=d)}}function Bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zi(e){if(Bt(e)!==e)throw Error(w(188))}function Xc(e){var t=e.alternate;if(!t){if(t=Bt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Zi(l),e;if(o===r)return Zi(l),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Pu(e){return e=Xc(e),e!==null?Tu(e):null}function Tu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tu(e);if(t!==null)return t;e=e.sibling}return null}var Mu=Ne.unstable_scheduleCallback,Ji=Ne.unstable_cancelCallback,Kc=Ne.unstable_shouldYield,Yc=Ne.unstable_requestPaint,Y=Ne.unstable_now,Gc=Ne.unstable_getCurrentPriorityLevel,li=Ne.unstable_ImmediatePriority,Ru=Ne.unstable_UserBlockingPriority,Vr=Ne.unstable_NormalPriority,qc=Ne.unstable_LowPriority,Iu=Ne.unstable_IdlePriority,cl=null,He=null;function Zc(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(cl,e,void 0,(e.current.flags&128)===128)}catch{}}var je=Math.clz32?Math.clz32:td,Jc=Math.log,ed=Math.LN2;function td(e){return e>>>=0,e===0?32:31-(Jc(e)/ed|0)|0}var mr=64,hr=4194304;function Pn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~l;a!==0?r=Pn(a):(o&=i,o!==0&&(r=Pn(o)))}else i=n&~l,i!==0?r=Pn(i):o!==0&&(r=Pn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-je(t),l=1<<n,r|=e[n],t&=~l;return r}function nd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-je(o),a=1<<i,u=l[i];u===-1?(!(a&n)||a&r)&&(l[i]=nd(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function vo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Du(){var e=mr;return mr<<=1,!(mr&4194240)&&(mr=64),e}function Tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-je(t),e[t]=n}function ld(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-je(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function oi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-je(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var j=0;function Ou(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fu,ii,Au,ju,Uu,yo=!1,gr=[],ct=null,dt=null,ft=null,Vn=new Map,Hn=new Map,it=[],od="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ea(e,t){switch(e){case"focusin":case"focusout":ct=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":ft=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function xn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=ir(t),t!==null&&ii(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function id(e,t,n,r,l){switch(t){case"focusin":return ct=xn(ct,e,t,n,r,l),!0;case"dragenter":return dt=xn(dt,e,t,n,r,l),!0;case"mouseover":return ft=xn(ft,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Vn.set(o,xn(Vn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Hn.set(o,xn(Hn.get(o)||null,e,t,n,r,l)),!0}return!1}function Bu(e){var t=Pt(e.target);if(t!==null){var n=Bt(t);if(n!==null){if(t=n.tag,t===13){if(t=Lu(n),t!==null){e.blockedOn=t,Uu(e.priority,function(){Au(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);po=r,n.target.dispatchEvent(r),po=null}else return t=ir(n),t!==null&&ii(t),e.blockedOn=n,!1;t.shift()}return!0}function ta(e,t,n){Tr(e)&&n.delete(t)}function ad(){yo=!1,ct!==null&&Tr(ct)&&(ct=null),dt!==null&&Tr(dt)&&(dt=null),ft!==null&&Tr(ft)&&(ft=null),Vn.forEach(ta),Hn.forEach(ta)}function Sn(e,t){e.blockedOn===t&&(e.blockedOn=null,yo||(yo=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,ad)))}function Qn(e){function t(l){return Sn(l,e)}if(0<gr.length){Sn(gr[0],e);for(var n=1;n<gr.length;n++){var r=gr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ct!==null&&Sn(ct,e),dt!==null&&Sn(dt,e),ft!==null&&Sn(ft,e),Vn.forEach(t),Hn.forEach(t),n=0;n<it.length;n++)r=it[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)Bu(n),n.blockedOn===null&&it.shift()}var on=nt.ReactCurrentBatchConfig,Qr=!0;function ud(e,t,n,r){var l=j,o=on.transition;on.transition=null;try{j=1,ai(e,t,n,r)}finally{j=l,on.transition=o}}function sd(e,t,n,r){var l=j,o=on.transition;on.transition=null;try{j=4,ai(e,t,n,r)}finally{j=l,on.transition=o}}function ai(e,t,n,r){if(Qr){var l=wo(e,t,n,r);if(l===null)Bl(e,t,r,br,n),ea(e,r);else if(id(l,e,t,n,r))r.stopPropagation();else if(ea(e,r),t&4&&-1<od.indexOf(e)){for(;l!==null;){var o=ir(l);if(o!==null&&Fu(o),o=wo(e,t,n,r),o===null&&Bl(e,t,r,br,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Bl(e,t,r,null,n)}}var br=null;function wo(e,t,n,r){if(br=null,e=ri(r),e=Pt(e),e!==null)if(t=Bt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return br=e,null}function Wu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gc()){case li:return 1;case Ru:return 4;case Vr:case qc:return 16;case Iu:return 536870912;default:return 16}default:return 16}}var ut=null,ui=null,Mr=null;function $u(){if(Mr)return Mr;var e,t=ui,n=t.length,r,l="value"in ut?ut.value:ut.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Mr=l.slice(e,1<r?1-r:void 0)}function Rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vr(){return!0}function na(){return!1}function ze(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?vr:na,this.isPropagationStopped=na,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vr)},persist:function(){},isPersistent:vr}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},si=ze(vn),or=X({},vn,{view:0,detail:0}),cd=ze(or),Ml,Rl,En,dl=X({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ci,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?(Ml=e.screenX-En.screenX,Rl=e.screenY-En.screenY):Rl=Ml=0,En=e),Ml)},movementY:function(e){return"movementY"in e?e.movementY:Rl}}),ra=ze(dl),dd=X({},dl,{dataTransfer:0}),fd=ze(dd),pd=X({},or,{relatedTarget:0}),Il=ze(pd),md=X({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),hd=ze(md),gd=X({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vd=ze(gd),yd=X({},vn,{data:0}),la=ze(yd),wd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xd[e])?!!t[e]:!1}function ci(){return Sd}var Ed=X({},or,{key:function(e){if(e.key){var t=wd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ci,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cd=ze(Ed),Nd=X({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oa=ze(Nd),_d=X({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ci}),zd=ze(_d),Ld=X({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pd=ze(Ld),Td=X({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Md=ze(Td),Rd=[9,13,27,32],di=Ze&&"CompositionEvent"in window,In=null;Ze&&"documentMode"in document&&(In=document.documentMode);var Id=Ze&&"TextEvent"in window&&!In,Vu=Ze&&(!di||In&&8<In&&11>=In),ia=" ",aa=!1;function Hu(e,t){switch(e){case"keyup":return Rd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bt=!1;function Dd(e,t){switch(e){case"compositionend":return Qu(t);case"keypress":return t.which!==32?null:(aa=!0,ia);case"textInput":return e=t.data,e===ia&&aa?null:e;default:return null}}function Od(e,t){if(bt)return e==="compositionend"||!di&&Hu(e,t)?(e=$u(),Mr=ui=ut=null,bt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vu&&t.locale!=="ko"?null:t.data;default:return null}}var Fd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ua(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fd[e.type]:t==="textarea"}function bu(e,t,n,r){Eu(r),t=Xr(t,"onChange"),0<t.length&&(n=new si("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,bn=null;function Ad(e){rs(e,0)}function fl(e){var t=Yt(e);if(gu(t))return e}function jd(e,t){if(e==="change")return t}var Xu=!1;if(Ze){var Dl;if(Ze){var Ol="oninput"in document;if(!Ol){var sa=document.createElement("div");sa.setAttribute("oninput","return;"),Ol=typeof sa.oninput=="function"}Dl=Ol}else Dl=!1;Xu=Dl&&(!document.documentMode||9<document.documentMode)}function ca(){Dn&&(Dn.detachEvent("onpropertychange",Ku),bn=Dn=null)}function Ku(e){if(e.propertyName==="value"&&fl(bn)){var t=[];bu(t,bn,e,ri(e)),zu(Ad,t)}}function Ud(e,t,n){e==="focusin"?(ca(),Dn=t,bn=n,Dn.attachEvent("onpropertychange",Ku)):e==="focusout"&&ca()}function Bd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(bn)}function Wd(e,t){if(e==="click")return fl(t)}function $d(e,t){if(e==="input"||e==="change")return fl(t)}function Vd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:Vd;function Xn(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!eo.call(t,l)||!Be(e[l],t[l]))return!1}return!0}function da(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fa(e,t){var n=da(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=da(n)}}function Yu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gu(){for(var e=window,t=Br();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Br(e.document)}return t}function fi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hd(e){var t=Gu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yu(n.ownerDocument.documentElement,n)){if(r!==null&&fi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=fa(n,o);var i=fa(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qd=Ze&&"documentMode"in document&&11>=document.documentMode,Xt=null,ko=null,On=null,xo=!1;function pa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xo||Xt==null||Xt!==Br(r)||(r=Xt,"selectionStart"in r&&fi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),On&&Xn(On,r)||(On=r,r=Xr(ko,"onSelect"),0<r.length&&(t=new si("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xt)))}function yr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:yr("Animation","AnimationEnd"),animationiteration:yr("Animation","AnimationIteration"),animationstart:yr("Animation","AnimationStart"),transitionend:yr("Transition","TransitionEnd")},Fl={},qu={};Ze&&(qu=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function pl(e){if(Fl[e])return Fl[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qu)return Fl[e]=t[n];return e}var Zu=pl("animationend"),Ju=pl("animationiteration"),es=pl("animationstart"),ts=pl("transitionend"),ns=new Map,ma="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kt(e,t){ns.set(e,t),Ut(t,[e])}for(var Al=0;Al<ma.length;Al++){var jl=ma[Al],bd=jl.toLowerCase(),Xd=jl[0].toUpperCase()+jl.slice(1);kt(bd,"on"+Xd)}kt(Zu,"onAnimationEnd");kt(Ju,"onAnimationIteration");kt(es,"onAnimationStart");kt("dblclick","onDoubleClick");kt("focusin","onFocus");kt("focusout","onBlur");kt(ts,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function ha(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,bc(r,t,void 0,e),e.currentTarget=null}function rs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==o&&l.isPropagationStopped())break e;ha(l,a,d),o=u}else for(i=0;i<r.length;i++){if(a=r[i],u=a.instance,d=a.currentTarget,a=a.listener,u!==o&&l.isPropagationStopped())break e;ha(l,a,d),o=u}}}if($r)throw e=go,$r=!1,go=null,e}function B(e,t){var n=t[_o];n===void 0&&(n=t[_o]=new Set);var r=e+"__bubble";n.has(r)||(ls(t,e,2,!1),n.add(r))}function Ul(e,t,n){var r=0;t&&(r|=4),ls(n,e,r,t)}var wr="_reactListening"+Math.random().toString(36).slice(2);function Kn(e){if(!e[wr]){e[wr]=!0,du.forEach(function(n){n!=="selectionchange"&&(Kd.has(n)||Ul(n,!1,e),Ul(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wr]||(t[wr]=!0,Ul("selectionchange",!1,t))}}function ls(e,t,n,r){switch(Wu(t)){case 1:var l=ud;break;case 4:l=sd;break;default:l=ai}n=l.bind(null,t,n,e),l=void 0,!ho||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Bl(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;a!==null;){if(i=Pt(a),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue e}a=a.parentNode}}r=r.return}zu(function(){var d=o,y=ri(n),v=[];e:{var h=ns.get(e);if(h!==void 0){var k=si,x=e;switch(e){case"keypress":if(Rr(n)===0)break e;case"keydown":case"keyup":k=Cd;break;case"focusin":x="focus",k=Il;break;case"focusout":x="blur",k=Il;break;case"beforeblur":case"afterblur":k=Il;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=ra;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=zd;break;case Zu:case Ju:case es:k=hd;break;case ts:k=Pd;break;case"scroll":k=cd;break;case"wheel":k=Md;break;case"copy":case"cut":case"paste":k=vd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=oa}var S=(t&4)!==0,A=!S&&e==="scroll",f=S?h!==null?h+"Capture":null:h;S=[];for(var s=d,m;s!==null;){m=s;var g=m.stateNode;if(m.tag===5&&g!==null&&(m=g,f!==null&&(g=$n(s,f),g!=null&&S.push(Yn(s,g,m)))),A)break;s=s.return}0<S.length&&(h=new k(h,x,null,n,y),v.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==po&&(x=n.relatedTarget||n.fromElement)&&(Pt(x)||x[Je]))break e;if((k||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,k?(x=n.relatedTarget||n.toElement,k=d,x=x?Pt(x):null,x!==null&&(A=Bt(x),x!==A||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=d),k!==x)){if(S=ra,g="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(S=oa,g="onPointerLeave",f="onPointerEnter",s="pointer"),A=k==null?h:Yt(k),m=x==null?h:Yt(x),h=new S(g,s+"leave",k,n,y),h.target=A,h.relatedTarget=m,g=null,Pt(y)===d&&(S=new S(f,s+"enter",x,n,y),S.target=m,S.relatedTarget=A,g=S),A=g,k&&x)t:{for(S=k,f=x,s=0,m=S;m;m=Vt(m))s++;for(m=0,g=f;g;g=Vt(g))m++;for(;0<s-m;)S=Vt(S),s--;for(;0<m-s;)f=Vt(f),m--;for(;s--;){if(S===f||f!==null&&S===f.alternate)break t;S=Vt(S),f=Vt(f)}S=null}else S=null;k!==null&&ga(v,h,k,S,!1),x!==null&&A!==null&&ga(v,A,x,S,!0)}}e:{if(h=d?Yt(d):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var E=jd;else if(ua(h))if(Xu)E=$d;else{E=Bd;var _=Ud}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=Wd);if(E&&(E=E(e,d))){bu(v,E,n,y);break e}_&&_(e,h,d),e==="focusout"&&(_=h._wrapperState)&&_.controlled&&h.type==="number"&&ao(h,"number",h.value)}switch(_=d?Yt(d):window,e){case"focusin":(ua(_)||_.contentEditable==="true")&&(Xt=_,ko=d,On=null);break;case"focusout":On=ko=Xt=null;break;case"mousedown":xo=!0;break;case"contextmenu":case"mouseup":case"dragend":xo=!1,pa(v,n,y);break;case"selectionchange":if(Qd)break;case"keydown":case"keyup":pa(v,n,y)}var z;if(di)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else bt?Hu(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Vu&&n.locale!=="ko"&&(bt||L!=="onCompositionStart"?L==="onCompositionEnd"&&bt&&(z=$u()):(ut=y,ui="value"in ut?ut.value:ut.textContent,bt=!0)),_=Xr(d,L),0<_.length&&(L=new la(L,e,null,n,y),v.push({event:L,listeners:_}),z?L.data=z:(z=Qu(n),z!==null&&(L.data=z)))),(z=Id?Dd(e,n):Od(e,n))&&(d=Xr(d,"onBeforeInput"),0<d.length&&(y=new la("onBeforeInput","beforeinput",null,n,y),v.push({event:y,listeners:d}),y.data=z))}rs(v,t)})}function Yn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=$n(e,n),o!=null&&r.unshift(Yn(e,o,l)),o=$n(e,t),o!=null&&r.push(Yn(e,o,l))),e=e.return}return r}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ga(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var a=n,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,l?(u=$n(n,o),u!=null&&i.unshift(Yn(n,u,a))):l||(u=$n(n,o),u!=null&&i.push(Yn(n,u,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Yd=/\r\n?/g,Gd=/\u0000|\uFFFD/g;function va(e){return(typeof e=="string"?e:""+e).replace(Yd,`
`).replace(Gd,"")}function kr(e,t,n){if(t=va(t),va(e)!==t&&n)throw Error(w(425))}function Kr(){}var So=null,Eo=null;function Co(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var No=typeof setTimeout=="function"?setTimeout:void 0,qd=typeof clearTimeout=="function"?clearTimeout:void 0,ya=typeof Promise=="function"?Promise:void 0,Zd=typeof queueMicrotask=="function"?queueMicrotask:typeof ya<"u"?function(e){return ya.resolve(null).then(e).catch(Jd)}:No;function Jd(e){setTimeout(function(){throw e})}function Wl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Qn(t)}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+yn,Gn="__reactProps$"+yn,Je="__reactContainer$"+yn,_o="__reactEvents$"+yn,ef="__reactListeners$"+yn,tf="__reactHandles$"+yn;function Pt(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Je]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wa(e);e!==null;){if(n=e[Ve])return n;e=wa(e)}return t}e=n,n=e.parentNode}return null}function ir(e){return e=e[Ve]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function ml(e){return e[Gn]||null}var zo=[],Gt=-1;function xt(e){return{current:e}}function W(e){0>Gt||(e.current=zo[Gt],zo[Gt]=null,Gt--)}function U(e,t){Gt++,zo[Gt]=e.current,e.current=t}var wt={},ce=xt(wt),ye=xt(!1),Dt=wt;function cn(e,t){var n=e.type.contextTypes;if(!n)return wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function we(e){return e=e.childContextTypes,e!=null}function Yr(){W(ye),W(ce)}function ka(e,t,n){if(ce.current!==wt)throw Error(w(168));U(ce,t),U(ye,n)}function os(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(w(108,Uc(e)||"Unknown",l));return X({},n,r)}function Gr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wt,Dt=ce.current,U(ce,e),U(ye,ye.current),!0}function xa(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=os(e,t,Dt),r.__reactInternalMemoizedMergedChildContext=e,W(ye),W(ce),U(ce,e)):W(ye),U(ye,n)}var Ke=null,hl=!1,$l=!1;function is(e){Ke===null?Ke=[e]:Ke.push(e)}function nf(e){hl=!0,is(e)}function St(){if(!$l&&Ke!==null){$l=!0;var e=0,t=j;try{var n=Ke;for(j=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ke=null,hl=!1}catch(l){throw Ke!==null&&(Ke=Ke.slice(e+1)),Mu(li,St),l}finally{j=t,$l=!1}}return null}var qt=[],Zt=0,qr=null,Zr=0,Le=[],Pe=0,Ot=null,Ye=1,Ge="";function zt(e,t){qt[Zt++]=Zr,qt[Zt++]=qr,qr=e,Zr=t}function as(e,t,n){Le[Pe++]=Ye,Le[Pe++]=Ge,Le[Pe++]=Ot,Ot=e;var r=Ye;e=Ge;var l=32-je(r)-1;r&=~(1<<l),n+=1;var o=32-je(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Ye=1<<32-je(t)+l|n<<l|r,Ge=o+e}else Ye=1<<o|n<<l|r,Ge=e}function pi(e){e.return!==null&&(zt(e,1),as(e,1,0))}function mi(e){for(;e===qr;)qr=qt[--Zt],qt[Zt]=null,Zr=qt[--Zt],qt[Zt]=null;for(;e===Ot;)Ot=Le[--Pe],Le[Pe]=null,Ge=Le[--Pe],Le[Pe]=null,Ye=Le[--Pe],Le[Pe]=null}var Ce=null,Ee=null,V=!1,Ae=null;function us(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Sa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,Ee=pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:Ye,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,Ee=null,!0):!1;default:return!1}}function Lo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Po(e){if(V){var t=Ee;if(t){var n=t;if(!Sa(e,t)){if(Lo(e))throw Error(w(418));t=pt(n.nextSibling);var r=Ce;t&&Sa(e,t)?us(r,n):(e.flags=e.flags&-4097|2,V=!1,Ce=e)}}else{if(Lo(e))throw Error(w(418));e.flags=e.flags&-4097|2,V=!1,Ce=e}}}function Ea(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function xr(e){if(e!==Ce)return!1;if(!V)return Ea(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Co(e.type,e.memoizedProps)),t&&(t=Ee)){if(Lo(e))throw ss(),Error(w(418));for(;t;)us(e,t),t=pt(t.nextSibling)}if(Ea(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=Ce?pt(e.stateNode.nextSibling):null;return!0}function ss(){for(var e=Ee;e;)e=pt(e.nextSibling)}function dn(){Ee=Ce=null,V=!1}function hi(e){Ae===null?Ae=[e]:Ae.push(e)}var rf=nt.ReactCurrentBatchConfig;function Cn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var a=l.refs;i===null?delete a[o]:a[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Sr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ca(e){var t=e._init;return t(e._payload)}function cs(e){function t(f,s){if(e){var m=f.deletions;m===null?(f.deletions=[s],f.flags|=16):m.push(s)}}function n(f,s){if(!e)return null;for(;s!==null;)t(f,s),s=s.sibling;return null}function r(f,s){for(f=new Map;s!==null;)s.key!==null?f.set(s.key,s):f.set(s.index,s),s=s.sibling;return f}function l(f,s){return f=vt(f,s),f.index=0,f.sibling=null,f}function o(f,s,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<s?(f.flags|=2,s):m):(f.flags|=2,s)):(f.flags|=1048576,s)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,s,m,g){return s===null||s.tag!==6?(s=Yl(m,f.mode,g),s.return=f,s):(s=l(s,m),s.return=f,s)}function u(f,s,m,g){var E=m.type;return E===Qt?y(f,s,m.props.children,g,m.key):s!==null&&(s.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===lt&&Ca(E)===s.type)?(g=l(s,m.props),g.ref=Cn(f,s,m),g.return=f,g):(g=Ur(m.type,m.key,m.props,null,f.mode,g),g.ref=Cn(f,s,m),g.return=f,g)}function d(f,s,m,g){return s===null||s.tag!==4||s.stateNode.containerInfo!==m.containerInfo||s.stateNode.implementation!==m.implementation?(s=Gl(m,f.mode,g),s.return=f,s):(s=l(s,m.children||[]),s.return=f,s)}function y(f,s,m,g,E){return s===null||s.tag!==7?(s=It(m,f.mode,g,E),s.return=f,s):(s=l(s,m),s.return=f,s)}function v(f,s,m){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Yl(""+s,f.mode,m),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case dr:return m=Ur(s.type,s.key,s.props,null,f.mode,m),m.ref=Cn(f,null,s),m.return=f,m;case Ht:return s=Gl(s,f.mode,m),s.return=f,s;case lt:var g=s._init;return v(f,g(s._payload),m)}if(Ln(s)||wn(s))return s=It(s,f.mode,m,null),s.return=f,s;Sr(f,s)}return null}function h(f,s,m,g){var E=s!==null?s.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(f,s,""+m,g);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case dr:return m.key===E?u(f,s,m,g):null;case Ht:return m.key===E?d(f,s,m,g):null;case lt:return E=m._init,h(f,s,E(m._payload),g)}if(Ln(m)||wn(m))return E!==null?null:y(f,s,m,g,null);Sr(f,m)}return null}function k(f,s,m,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(m)||null,a(s,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case dr:return f=f.get(g.key===null?m:g.key)||null,u(s,f,g,E);case Ht:return f=f.get(g.key===null?m:g.key)||null,d(s,f,g,E);case lt:var _=g._init;return k(f,s,m,_(g._payload),E)}if(Ln(g)||wn(g))return f=f.get(m)||null,y(s,f,g,E,null);Sr(s,g)}return null}function x(f,s,m,g){for(var E=null,_=null,z=s,L=s=0,H=null;z!==null&&L<m.length;L++){z.index>L?(H=z,z=null):H=z.sibling;var I=h(f,z,m[L],g);if(I===null){z===null&&(z=H);break}e&&z&&I.alternate===null&&t(f,z),s=o(I,s,L),_===null?E=I:_.sibling=I,_=I,z=H}if(L===m.length)return n(f,z),V&&zt(f,L),E;if(z===null){for(;L<m.length;L++)z=v(f,m[L],g),z!==null&&(s=o(z,s,L),_===null?E=z:_.sibling=z,_=z);return V&&zt(f,L),E}for(z=r(f,z);L<m.length;L++)H=k(z,f,L,m[L],g),H!==null&&(e&&H.alternate!==null&&z.delete(H.key===null?L:H.key),s=o(H,s,L),_===null?E=H:_.sibling=H,_=H);return e&&z.forEach(function(he){return t(f,he)}),V&&zt(f,L),E}function S(f,s,m,g){var E=wn(m);if(typeof E!="function")throw Error(w(150));if(m=E.call(m),m==null)throw Error(w(151));for(var _=E=null,z=s,L=s=0,H=null,I=m.next();z!==null&&!I.done;L++,I=m.next()){z.index>L?(H=z,z=null):H=z.sibling;var he=h(f,z,I.value,g);if(he===null){z===null&&(z=H);break}e&&z&&he.alternate===null&&t(f,z),s=o(he,s,L),_===null?E=he:_.sibling=he,_=he,z=H}if(I.done)return n(f,z),V&&zt(f,L),E;if(z===null){for(;!I.done;L++,I=m.next())I=v(f,I.value,g),I!==null&&(s=o(I,s,L),_===null?E=I:_.sibling=I,_=I);return V&&zt(f,L),E}for(z=r(f,z);!I.done;L++,I=m.next())I=k(z,f,L,I.value,g),I!==null&&(e&&I.alternate!==null&&z.delete(I.key===null?L:I.key),s=o(I,s,L),_===null?E=I:_.sibling=I,_=I);return e&&z.forEach(function(Et){return t(f,Et)}),V&&zt(f,L),E}function A(f,s,m,g){if(typeof m=="object"&&m!==null&&m.type===Qt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case dr:e:{for(var E=m.key,_=s;_!==null;){if(_.key===E){if(E=m.type,E===Qt){if(_.tag===7){n(f,_.sibling),s=l(_,m.props.children),s.return=f,f=s;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===lt&&Ca(E)===_.type){n(f,_.sibling),s=l(_,m.props),s.ref=Cn(f,_,m),s.return=f,f=s;break e}n(f,_);break}else t(f,_);_=_.sibling}m.type===Qt?(s=It(m.props.children,f.mode,g,m.key),s.return=f,f=s):(g=Ur(m.type,m.key,m.props,null,f.mode,g),g.ref=Cn(f,s,m),g.return=f,f=g)}return i(f);case Ht:e:{for(_=m.key;s!==null;){if(s.key===_)if(s.tag===4&&s.stateNode.containerInfo===m.containerInfo&&s.stateNode.implementation===m.implementation){n(f,s.sibling),s=l(s,m.children||[]),s.return=f,f=s;break e}else{n(f,s);break}else t(f,s);s=s.sibling}s=Gl(m,f.mode,g),s.return=f,f=s}return i(f);case lt:return _=m._init,A(f,s,_(m._payload),g)}if(Ln(m))return x(f,s,m,g);if(wn(m))return S(f,s,m,g);Sr(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,s!==null&&s.tag===6?(n(f,s.sibling),s=l(s,m),s.return=f,f=s):(n(f,s),s=Yl(m,f.mode,g),s.return=f,f=s),i(f)):n(f,s)}return A}var fn=cs(!0),ds=cs(!1),Jr=xt(null),el=null,Jt=null,gi=null;function vi(){gi=Jt=el=null}function yi(e){var t=Jr.current;W(Jr),e._currentValue=t}function To(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function an(e,t){el=e,gi=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(gi!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(el===null)throw Error(w(308));Jt=e,el.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var Tt=null;function wi(e){Tt===null?Tt=[e]:Tt.push(e)}function fs(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,wi(t)):(n.next=l.next,l.next=n),t.interleaved=n,et(e,r)}function et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ot=!1;function ki(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ps(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,et(e,n)}return l=r.interleaved,l===null?(t.next=t,wi(r)):(t.next=l.next,l.next=t),r.interleaved=t,et(e,n)}function Ir(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,oi(e,n)}}function Na(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function tl(e,t,n,r){var l=e.updateQueue;ot=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,d=u.next;u.next=null,i===null?o=d:i.next=d,i=u;var y=e.alternate;y!==null&&(y=y.updateQueue,a=y.lastBaseUpdate,a!==i&&(a===null?y.firstBaseUpdate=d:a.next=d,y.lastBaseUpdate=u))}if(o!==null){var v=l.baseState;i=0,y=d=u=null,a=o;do{var h=a.lane,k=a.eventTime;if((r&h)===h){y!==null&&(y=y.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,S=a;switch(h=t,k=n,S.tag){case 1:if(x=S.payload,typeof x=="function"){v=x.call(k,v,h);break e}v=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,h=typeof x=="function"?x.call(k,v,h):x,h==null)break e;v=X({},v,h);break e;case 2:ot=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[a]:h.push(a))}else k={eventTime:k,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},y===null?(d=y=k,u=v):y=y.next=k,i|=h;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;h=a,a=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(y===null&&(u=v),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=y,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);At|=i,e.lanes=i,e.memoizedState=v}}function _a(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var ar={},Qe=xt(ar),qn=xt(ar),Zn=xt(ar);function Mt(e){if(e===ar)throw Error(w(174));return e}function xi(e,t){switch(U(Zn,t),U(qn,e),U(Qe,ar),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:so(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=so(t,e)}W(Qe),U(Qe,t)}function pn(){W(Qe),W(qn),W(Zn)}function ms(e){Mt(Zn.current);var t=Mt(Qe.current),n=so(t,e.type);t!==n&&(U(qn,e),U(Qe,n))}function Si(e){qn.current===e&&(W(Qe),W(qn))}var Q=xt(0);function nl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vl=[];function Ei(){for(var e=0;e<Vl.length;e++)Vl[e]._workInProgressVersionPrimary=null;Vl.length=0}var Dr=nt.ReactCurrentDispatcher,Hl=nt.ReactCurrentBatchConfig,Ft=0,b=null,Z=null,ee=null,rl=!1,Fn=!1,Jn=0,lf=0;function ae(){throw Error(w(321))}function Ci(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function Ni(e,t,n,r,l,o){if(Ft=o,b=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dr.current=e===null||e.memoizedState===null?sf:cf,e=n(r,l),Fn){o=0;do{if(Fn=!1,Jn=0,25<=o)throw Error(w(301));o+=1,ee=Z=null,t.updateQueue=null,Dr.current=df,e=n(r,l)}while(Fn)}if(Dr.current=ll,t=Z!==null&&Z.next!==null,Ft=0,ee=Z=b=null,rl=!1,t)throw Error(w(300));return e}function _i(){var e=Jn!==0;return Jn=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?b.memoizedState=ee=e:ee=ee.next=e,ee}function Ie(){if(Z===null){var e=b.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=ee===null?b.memoizedState:ee.next;if(t!==null)ee=t,Z=e;else{if(e===null)throw Error(w(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ee===null?b.memoizedState=ee=e:ee=ee.next=e}return ee}function er(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=Ie(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=Z,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=i=null,u=null,d=o;do{var y=d.lane;if((Ft&y)===y)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var v={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=v,i=r):u=u.next=v,b.lanes|=y,At|=y}d=d.next}while(d!==null&&d!==o);u===null?i=r:u.next=a,Be(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,b.lanes|=o,At|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bl(e){var t=Ie(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Be(o,t.memoizedState)||(ve=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function hs(){}function gs(e,t){var n=b,r=Ie(),l=t(),o=!Be(r.memoizedState,l);if(o&&(r.memoizedState=l,ve=!0),r=r.queue,zi(ws.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,tr(9,ys.bind(null,n,r,l,t),void 0,null),te===null)throw Error(w(349));Ft&30||vs(n,t,l)}return l}function vs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=b.updateQueue,t===null?(t={lastEffect:null,stores:null},b.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ys(e,t,n,r){t.value=n,t.getSnapshot=r,ks(t)&&xs(e)}function ws(e,t,n){return n(function(){ks(t)&&xs(e)})}function ks(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function xs(e){var t=et(e,1);t!==null&&Ue(t,e,1,-1)}function za(e){var t=$e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:e},t.queue=e,e=e.dispatch=uf.bind(null,b,e),[t.memoizedState,e]}function tr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=b.updateQueue,t===null?(t={lastEffect:null,stores:null},b.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ss(){return Ie().memoizedState}function Or(e,t,n,r){var l=$e();b.flags|=e,l.memoizedState=tr(1|t,n,void 0,r===void 0?null:r)}function gl(e,t,n,r){var l=Ie();r=r===void 0?null:r;var o=void 0;if(Z!==null){var i=Z.memoizedState;if(o=i.destroy,r!==null&&Ci(r,i.deps)){l.memoizedState=tr(t,n,o,r);return}}b.flags|=e,l.memoizedState=tr(1|t,n,o,r)}function La(e,t){return Or(8390656,8,e,t)}function zi(e,t){return gl(2048,8,e,t)}function Es(e,t){return gl(4,2,e,t)}function Cs(e,t){return gl(4,4,e,t)}function Ns(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){return n=n!=null?n.concat([e]):null,gl(4,4,Ns.bind(null,t,e),n)}function Li(){}function zs(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ci(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ls(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ci(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ps(e,t,n){return Ft&21?(Be(n,t)||(n=Du(),b.lanes|=n,At|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function of(e,t){var n=j;j=n!==0&&4>n?n:4,e(!0);var r=Hl.transition;Hl.transition={};try{e(!1),t()}finally{j=n,Hl.transition=r}}function Ts(){return Ie().memoizedState}function af(e,t,n){var r=gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ms(e))Rs(t,n);else if(n=fs(e,t,n,r),n!==null){var l=fe();Ue(n,e,r,l),Is(n,t,r)}}function uf(e,t,n){var r=gt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ms(e))Rs(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,a=o(i,n);if(l.hasEagerState=!0,l.eagerState=a,Be(a,i)){var u=t.interleaved;u===null?(l.next=l,wi(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=fs(e,t,l,r),n!==null&&(l=fe(),Ue(n,e,r,l),Is(n,t,r))}}function Ms(e){var t=e.alternate;return e===b||t!==null&&t===b}function Rs(e,t){Fn=rl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Is(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,oi(e,n)}}var ll={readContext:Re,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},sf={readContext:Re,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:La,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Or(4194308,4,Ns.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Or(4194308,4,e,t)},useInsertionEffect:function(e,t){return Or(4,2,e,t)},useMemo:function(e,t){var n=$e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$e();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=af.bind(null,b,e),[r.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:za,useDebugValue:Li,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=za(!1),t=e[0];return e=of.bind(null,e[1]),$e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=b,l=$e();if(V){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),te===null)throw Error(w(349));Ft&30||vs(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,La(ws.bind(null,r,o,e),[e]),r.flags|=2048,tr(9,ys.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=$e(),t=te.identifierPrefix;if(V){var n=Ge,r=Ye;n=(r&~(1<<32-je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cf={readContext:Re,useCallback:zs,useContext:Re,useEffect:zi,useImperativeHandle:_s,useInsertionEffect:Es,useLayoutEffect:Cs,useMemo:Ls,useReducer:Ql,useRef:Ss,useState:function(){return Ql(er)},useDebugValue:Li,useDeferredValue:function(e){var t=Ie();return Ps(t,Z.memoizedState,e)},useTransition:function(){var e=Ql(er)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:hs,useSyncExternalStore:gs,useId:Ts,unstable_isNewReconciler:!1},df={readContext:Re,useCallback:zs,useContext:Re,useEffect:zi,useImperativeHandle:_s,useInsertionEffect:Es,useLayoutEffect:Cs,useMemo:Ls,useReducer:bl,useRef:Ss,useState:function(){return bl(er)},useDebugValue:Li,useDeferredValue:function(e){var t=Ie();return Z===null?t.memoizedState=e:Ps(t,Z.memoizedState,e)},useTransition:function(){var e=bl(er)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:hs,useSyncExternalStore:gs,useId:Ts,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Mo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vl={isMounted:function(e){return(e=e._reactInternals)?Bt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fe(),l=gt(e),o=qe(r,l);o.payload=t,n!=null&&(o.callback=n),t=mt(e,o,l),t!==null&&(Ue(t,e,l,r),Ir(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fe(),l=gt(e),o=qe(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=mt(e,o,l),t!==null&&(Ue(t,e,l,r),Ir(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fe(),r=gt(e),l=qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=mt(e,l,r),t!==null&&(Ue(t,e,r,n),Ir(t,e,r))}};function Pa(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Xn(n,r)||!Xn(l,o):!0}function Ds(e,t,n){var r=!1,l=wt,o=t.contextType;return typeof o=="object"&&o!==null?o=Re(o):(l=we(t)?Dt:ce.current,r=t.contextTypes,o=(r=r!=null)?cn(e,l):wt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ta(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vl.enqueueReplaceState(t,t.state,null)}function Ro(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ki(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Re(o):(o=we(t)?Dt:ce.current,l.context=cn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Mo(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&vl.enqueueReplaceState(l,l.state,null),tl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function mn(e,t){try{var n="",r=t;do n+=jc(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Xl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Io(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ff=typeof WeakMap=="function"?WeakMap:Map;function Os(e,t,n){n=qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){il||(il=!0,Vo=r),Io(e,t)},n}function Fs(e,t,n){n=qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Io(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Io(e,t),typeof r!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ma(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ff;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=_f.bind(null,e,t,n),t.then(e,e))}function Ra(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ia(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qe(-1,1),t.tag=2,mt(n,t,1))),n.lanes|=1),e)}var pf=nt.ReactCurrentOwner,ve=!1;function de(e,t,n,r){t.child=e===null?ds(t,null,n,r):fn(t,e.child,n,r)}function Da(e,t,n,r,l){n=n.render;var o=t.ref;return an(t,l),r=Ni(e,t,n,r,o,l),n=_i(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,tt(e,t,l)):(V&&n&&pi(t),t.flags|=1,de(e,t,r,l),t.child)}function Oa(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Fi(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,As(e,t,o,r,l)):(e=Ur(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Xn,n(i,r)&&e.ref===t.ref)return tt(e,t,l)}return t.flags|=1,e=vt(o,r),e.ref=t.ref,e.return=t,t.child=e}function As(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Xn(o,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,tt(e,t,l)}return Do(e,t,n,r,l)}function js(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(tn,Se),Se|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(tn,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(tn,Se),Se|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U(tn,Se),Se|=r;return de(e,t,l,n),t.child}function Us(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Do(e,t,n,r,l){var o=we(n)?Dt:ce.current;return o=cn(t,o),an(t,l),n=Ni(e,t,n,r,o,l),r=_i(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,tt(e,t,l)):(V&&r&&pi(t),t.flags|=1,de(e,t,n,l),t.child)}function Fa(e,t,n,r,l){if(we(n)){var o=!0;Gr(t)}else o=!1;if(an(t,l),t.stateNode===null)Fr(e,t),Ds(t,n,r),Ro(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var u=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=Re(d):(d=we(n)?Dt:ce.current,d=cn(t,d));var y=n.getDerivedStateFromProps,v=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function";v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||u!==d)&&Ta(t,i,r,d),ot=!1;var h=t.memoizedState;i.state=h,tl(t,r,i,l),u=t.memoizedState,a!==r||h!==u||ye.current||ot?(typeof y=="function"&&(Mo(t,n,y,r),u=t.memoizedState),(a=ot||Pa(t,n,a,r,h,u,d))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=d,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,ps(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Oe(t.type,a),i.props=d,v=t.pendingProps,h=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=Re(u):(u=we(n)?Dt:ce.current,u=cn(t,u));var k=n.getDerivedStateFromProps;(y=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==v||h!==u)&&Ta(t,i,r,u),ot=!1,h=t.memoizedState,i.state=h,tl(t,r,i,l);var x=t.memoizedState;a!==v||h!==x||ye.current||ot?(typeof k=="function"&&(Mo(t,n,k,r),x=t.memoizedState),(d=ot||Pa(t,n,d,r,h,x,u)||!1)?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),i.props=r,i.state=x,i.context=u,r=d):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Oo(e,t,n,r,o,l)}function Oo(e,t,n,r,l,o){Us(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&xa(t,n,!1),tt(e,t,o);r=t.stateNode,pf.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=fn(t,e.child,null,o),t.child=fn(t,null,a,o)):de(e,t,a,o),t.memoizedState=r.state,l&&xa(t,n,!0),t.child}function Bs(e){var t=e.stateNode;t.pendingContext?ka(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ka(e,t.context,!1),xi(e,t.containerInfo)}function Aa(e,t,n,r,l){return dn(),hi(l),t.flags|=256,de(e,t,n,r),t.child}var Fo={dehydrated:null,treeContext:null,retryLane:0};function Ao(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ws(e,t,n){var r=t.pendingProps,l=Q.current,o=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(Q,l&1),e===null)return Po(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=kl(i,r,0,null),e=It(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ao(n),t.memoizedState=Fo,e):Pi(t,i));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return mf(e,t,i,r,a,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=vt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=vt(a,o):(o=It(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Ao(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Fo,r}return o=e.child,e=o.sibling,r=vt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Pi(e,t){return t=kl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Er(e,t,n,r){return r!==null&&hi(r),fn(t,e.child,null,n),e=Pi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mf(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Xl(Error(w(422))),Er(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=kl({mode:"visible",children:r.children},l,0,null),o=It(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&fn(t,e.child,null,i),t.child.memoizedState=Ao(i),t.memoizedState=Fo,o);if(!(t.mode&1))return Er(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(w(419)),r=Xl(o,r,void 0),Er(e,t,i,r)}if(a=(i&e.childLanes)!==0,ve||a){if(r=te,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,et(e,l),Ue(r,e,l,-1))}return Oi(),r=Xl(Error(w(421))),Er(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=zf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Ee=pt(l.nextSibling),Ce=t,V=!0,Ae=null,e!==null&&(Le[Pe++]=Ye,Le[Pe++]=Ge,Le[Pe++]=Ot,Ye=e.id,Ge=e.overflow,Ot=t),t=Pi(t,r.children),t.flags|=4096,t)}function ja(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),To(e.return,t,n)}function Kl(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function $s(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(de(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ja(e,n,t);else if(e.tag===19)ja(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Q,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&nl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Kl(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&nl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Kl(t,!0,n,null,o);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),At|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hf(e,t,n){switch(t.tag){case 3:Bs(t),dn();break;case 5:ms(t);break;case 1:we(t.type)&&Gr(t);break;case 4:xi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;U(Jr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Ws(e,t,n):(U(Q,Q.current&1),e=tt(e,t,n),e!==null?e.sibling:null);U(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $s(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,js(e,t,n)}return tt(e,t,n)}var Vs,jo,Hs,Qs;Vs=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jo=function(){};Hs=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Mt(Qe.current);var o=null;switch(n){case"input":l=oo(e,l),r=oo(e,r),o=[];break;case"select":l=X({},l,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":l=uo(e,l),r=uo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Kr)}co(n,r);var i;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var a=l[d];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Bn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(a=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(i in a)!a.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&a[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Bn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&B("scroll",e),o||a===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Qs=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nn(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gf(e,t,n){var r=t.pendingProps;switch(mi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return we(t.type)&&Yr(),ue(t),null;case 3:return r=t.stateNode,pn(),W(ye),W(ce),Ei(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(bo(Ae),Ae=null))),jo(e,t),ue(t),null;case 5:Si(t);var l=Mt(Zn.current);if(n=t.type,e!==null&&t.stateNode!=null)Hs(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return ue(t),null}if(e=Mt(Qe.current),xr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ve]=t,r[Gn]=o,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(l=0;l<Tn.length;l++)B(Tn[l],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Xi(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":Yi(r,o),B("invalid",r)}co(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&kr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&kr(r.textContent,a,e),l=["children",""+a]):Bn.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&B("scroll",r)}switch(n){case"input":fr(r),Ki(r,o,!0);break;case"textarea":fr(r),Gi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Kr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ve]=t,e[Gn]=r,Vs(e,t,!1,!1),t.stateNode=e;e:{switch(i=fo(n,r),n){case"dialog":B("cancel",e),B("close",e),l=r;break;case"iframe":case"object":case"embed":B("load",e),l=r;break;case"video":case"audio":for(l=0;l<Tn.length;l++)B(Tn[l],e);l=r;break;case"source":B("error",e),l=r;break;case"img":case"image":case"link":B("error",e),B("load",e),l=r;break;case"details":B("toggle",e),l=r;break;case"input":Xi(e,r),l=oo(e,r),B("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=X({},r,{value:void 0}),B("invalid",e);break;case"textarea":Yi(e,r),l=uo(e,r),B("invalid",e);break;default:l=r}co(n,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?Su(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ku(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Wn(e,u):typeof u=="number"&&Wn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Bn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&B("scroll",e):u!=null&&Jo(e,o,u,i))}switch(n){case"input":fr(e),Ki(e,r,!1);break;case"textarea":fr(e),Gi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?nn(e,!!r.multiple,o,!1):r.defaultValue!=null&&nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Kr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)Qs(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Mt(Zn.current),Mt(Qe.current),xr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(o=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:kr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&kr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return ue(t),null;case 13:if(W(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Ee!==null&&t.mode&1&&!(t.flags&128))ss(),dn(),t.flags|=98560,o=!1;else if(o=xr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[Ve]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),o=!1}else Ae!==null&&(bo(Ae),Ae=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?J===0&&(J=3):Oi())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return pn(),jo(e,t),e===null&&Kn(t.stateNode.containerInfo),ue(t),null;case 10:return yi(t.type._context),ue(t),null;case 17:return we(t.type)&&Yr(),ue(t),null;case 19:if(W(Q),o=t.memoizedState,o===null)return ue(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)Nn(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=nl(e),i!==null){for(t.flags|=128,Nn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&Y()>hn&&(t.flags|=128,r=!0,Nn(o,!1),t.lanes=4194304)}else{if(!r)if(e=nl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!V)return ue(t),null}else 2*Y()-o.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,r=!0,Nn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Y(),t.sibling=null,n=Q.current,U(Q,r?n&1|2:n&1),t):(ue(t),null);case 22:case 23:return Di(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function vf(e,t){switch(mi(t),t.tag){case 1:return we(t.type)&&Yr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(),W(ye),W(ce),Ei(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Si(t),null;case 13:if(W(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Q),null;case 4:return pn(),null;case 10:return yi(t.type._context),null;case 22:case 23:return Di(),null;case 24:return null;default:return null}}var Cr=!1,se=!1,yf=typeof WeakSet=="function"?WeakSet:Set,N=null;function en(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Uo(e,t,n){try{n()}catch(r){K(e,t,r)}}var Ua=!1;function wf(e,t){if(So=Qr,e=Gu(),fi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,a=-1,u=-1,d=0,y=0,v=e,h=null;t:for(;;){for(var k;v!==n||l!==0&&v.nodeType!==3||(a=i+l),v!==o||r!==0&&v.nodeType!==3||(u=i+r),v.nodeType===3&&(i+=v.nodeValue.length),(k=v.firstChild)!==null;)h=v,v=k;for(;;){if(v===e)break t;if(h===n&&++d===l&&(a=i),h===o&&++y===r&&(u=i),(k=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=k}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Eo={focusedElem:e,selectionRange:n},Qr=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,A=x.memoizedState,f=t.stateNode,s=f.getSnapshotBeforeUpdate(t.elementType===t.type?S:Oe(t.type,S),A);f.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(g){K(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return x=Ua,Ua=!1,x}function An(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Uo(t,n,o)}l=l.next}while(l!==r)}}function yl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bs(e){var t=e.alternate;t!==null&&(e.alternate=null,bs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[Gn],delete t[_o],delete t[ef],delete t[tf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xs(e){return e.tag===5||e.tag===3||e.tag===4}function Ba(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Kr));else if(r!==4&&(e=e.child,e!==null))for(Wo(e,t,n),e=e.sibling;e!==null;)Wo(e,t,n),e=e.sibling}function $o(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($o(e,t,n),e=e.sibling;e!==null;)$o(e,t,n),e=e.sibling}var re=null,Fe=!1;function rt(e,t,n){for(n=n.child;n!==null;)Ks(e,t,n),n=n.sibling}function Ks(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(cl,n)}catch{}switch(n.tag){case 5:se||en(n,t);case 6:var r=re,l=Fe;re=null,rt(e,t,n),re=r,Fe=l,re!==null&&(Fe?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(Fe?(e=re,n=n.stateNode,e.nodeType===8?Wl(e.parentNode,n):e.nodeType===1&&Wl(e,n),Qn(e)):Wl(re,n.stateNode));break;case 4:r=re,l=Fe,re=n.stateNode.containerInfo,Fe=!0,rt(e,t,n),re=r,Fe=l;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Uo(n,t,i),l=l.next}while(l!==r)}rt(e,t,n);break;case 1:if(!se&&(en(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}rt(e,t,n);break;case 21:rt(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,rt(e,t,n),se=r):rt(e,t,n);break;default:rt(e,t,n)}}function Wa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new yf),t.forEach(function(r){var l=Lf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:re=a.stateNode,Fe=!1;break e;case 3:re=a.stateNode.containerInfo,Fe=!0;break e;case 4:re=a.stateNode.containerInfo,Fe=!0;break e}a=a.return}if(re===null)throw Error(w(160));Ks(o,i,l),re=null,Fe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){K(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ys(t,e),t=t.sibling}function Ys(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),We(e),r&4){try{An(3,e,e.return),yl(3,e)}catch(S){K(e,e.return,S)}try{An(5,e,e.return)}catch(S){K(e,e.return,S)}}break;case 1:De(t,e),We(e),r&512&&n!==null&&en(n,n.return);break;case 5:if(De(t,e),We(e),r&512&&n!==null&&en(n,n.return),e.flags&32){var l=e.stateNode;try{Wn(l,"")}catch(S){K(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&vu(l,o),fo(a,i);var d=fo(a,o);for(i=0;i<u.length;i+=2){var y=u[i],v=u[i+1];y==="style"?Su(l,v):y==="dangerouslySetInnerHTML"?ku(l,v):y==="children"?Wn(l,v):Jo(l,y,v,d)}switch(a){case"input":io(l,o);break;case"textarea":yu(l,o);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?nn(l,!!o.multiple,k,!1):h!==!!o.multiple&&(o.defaultValue!=null?nn(l,!!o.multiple,o.defaultValue,!0):nn(l,!!o.multiple,o.multiple?[]:"",!1))}l[Gn]=o}catch(S){K(e,e.return,S)}}break;case 6:if(De(t,e),We(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(S){K(e,e.return,S)}}break;case 3:if(De(t,e),We(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(S){K(e,e.return,S)}break;case 4:De(t,e),We(e);break;case 13:De(t,e),We(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ri=Y())),r&4&&Wa(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(se=(d=se)||y,De(t,e),se=d):De(t,e),We(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(N=e,y=e.child;y!==null;){for(v=N=y;N!==null;){switch(h=N,k=h.child,h.tag){case 0:case 11:case 14:case 15:An(4,h,h.return);break;case 1:en(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(S){K(r,n,S)}}break;case 5:en(h,h.return);break;case 22:if(h.memoizedState!==null){Va(v);continue}}k!==null?(k.return=h,N=k):Va(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{l=v.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=v.stateNode,u=v.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=xu("display",i))}catch(S){K(e,e.return,S)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(S){K(e,e.return,S)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:De(t,e),We(e),r&4&&Wa(e);break;case 21:break;default:De(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xs(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Wn(l,""),r.flags&=-33);var o=Ba(e);$o(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Ba(e);Wo(e,a,i);break;default:throw Error(w(161))}}catch(u){K(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kf(e,t,n){N=e,Gs(e)}function Gs(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var l=N,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Cr;if(!i){var a=l.alternate,u=a!==null&&a.memoizedState!==null||se;a=Cr;var d=se;if(Cr=i,(se=u)&&!d)for(N=l;N!==null;)i=N,u=i.child,i.tag===22&&i.memoizedState!==null?Ha(l):u!==null?(u.return=i,N=u):Ha(l);for(;o!==null;)N=o,Gs(o),o=o.sibling;N=l,Cr=a,se=d}$a(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,N=o):$a(e)}}function $a(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||yl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&_a(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_a(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&Qn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}se||t.flags&512&&Bo(t)}catch(h){K(t,t.return,h)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Va(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Ha(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yl(4,t)}catch(u){K(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){K(t,l,u)}}var o=t.return;try{Bo(t)}catch(u){K(t,o,u)}break;case 5:var i=t.return;try{Bo(t)}catch(u){K(t,i,u)}}}catch(u){K(t,t.return,u)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var xf=Math.ceil,ol=nt.ReactCurrentDispatcher,Ti=nt.ReactCurrentOwner,Me=nt.ReactCurrentBatchConfig,F=0,te=null,q=null,le=0,Se=0,tn=xt(0),J=0,nr=null,At=0,wl=0,Mi=0,jn=null,ge=null,Ri=0,hn=1/0,Xe=null,il=!1,Vo=null,ht=null,Nr=!1,st=null,al=0,Un=0,Ho=null,Ar=-1,jr=0;function fe(){return F&6?Y():Ar!==-1?Ar:Ar=Y()}function gt(e){return e.mode&1?F&2&&le!==0?le&-le:rf.transition!==null?(jr===0&&(jr=Du()),jr):(e=j,e!==0||(e=window.event,e=e===void 0?16:Wu(e.type)),e):1}function Ue(e,t,n,r){if(50<Un)throw Un=0,Ho=null,Error(w(185));lr(e,n,r),(!(F&2)||e!==te)&&(e===te&&(!(F&2)&&(wl|=n),J===4&&at(e,le)),ke(e,r),n===1&&F===0&&!(t.mode&1)&&(hn=Y()+500,hl&&St()))}function ke(e,t){var n=e.callbackNode;rd(e,t);var r=Hr(e,e===te?le:0);if(r===0)n!==null&&Ji(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ji(n),t===1)e.tag===0?nf(Qa.bind(null,e)):is(Qa.bind(null,e)),Zd(function(){!(F&6)&&St()}),n=null;else{switch(Ou(r)){case 1:n=li;break;case 4:n=Ru;break;case 16:n=Vr;break;case 536870912:n=Iu;break;default:n=Vr}n=lc(n,qs.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qs(e,t){if(Ar=-1,jr=0,F&6)throw Error(w(327));var n=e.callbackNode;if(un()&&e.callbackNode!==n)return null;var r=Hr(e,e===te?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ul(e,r);else{t=r;var l=F;F|=2;var o=Js();(te!==e||le!==t)&&(Xe=null,hn=Y()+500,Rt(e,t));do try{Cf();break}catch(a){Zs(e,a)}while(!0);vi(),ol.current=o,F=l,q!==null?t=0:(te=null,le=0,t=J)}if(t!==0){if(t===2&&(l=vo(e),l!==0&&(r=l,t=Qo(e,l))),t===1)throw n=nr,Rt(e,0),at(e,r),ke(e,Y()),n;if(t===6)at(e,r);else{if(l=e.current.alternate,!(r&30)&&!Sf(l)&&(t=ul(e,r),t===2&&(o=vo(e),o!==0&&(r=o,t=Qo(e,o))),t===1))throw n=nr,Rt(e,0),at(e,r),ke(e,Y()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Lt(e,ge,Xe);break;case 3:if(at(e,r),(r&130023424)===r&&(t=Ri+500-Y(),10<t)){if(Hr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=No(Lt.bind(null,e,ge,Xe),t);break}Lt(e,ge,Xe);break;case 4:if(at(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-je(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xf(r/1960))-r,10<r){e.timeoutHandle=No(Lt.bind(null,e,ge,Xe),r);break}Lt(e,ge,Xe);break;case 5:Lt(e,ge,Xe);break;default:throw Error(w(329))}}}return ke(e,Y()),e.callbackNode===n?qs.bind(null,e):null}function Qo(e,t){var n=jn;return e.current.memoizedState.isDehydrated&&(Rt(e,t).flags|=256),e=ul(e,t),e!==2&&(t=ge,ge=n,t!==null&&bo(t)),e}function bo(e){ge===null?ge=e:ge.push.apply(ge,e)}function Sf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Be(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function at(e,t){for(t&=~Mi,t&=~wl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-je(t),r=1<<n;e[n]=-1,t&=~r}}function Qa(e){if(F&6)throw Error(w(327));un();var t=Hr(e,0);if(!(t&1))return ke(e,Y()),null;var n=ul(e,t);if(e.tag!==0&&n===2){var r=vo(e);r!==0&&(t=r,n=Qo(e,r))}if(n===1)throw n=nr,Rt(e,0),at(e,t),ke(e,Y()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lt(e,ge,Xe),ke(e,Y()),null}function Ii(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(hn=Y()+500,hl&&St())}}function jt(e){st!==null&&st.tag===0&&!(F&6)&&un();var t=F;F|=1;var n=Me.transition,r=j;try{if(Me.transition=null,j=1,e)return e()}finally{j=r,Me.transition=n,F=t,!(F&6)&&St()}}function Di(){Se=tn.current,W(tn)}function Rt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qd(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(mi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yr();break;case 3:pn(),W(ye),W(ce),Ei();break;case 5:Si(r);break;case 4:pn();break;case 13:W(Q);break;case 19:W(Q);break;case 10:yi(r.type._context);break;case 22:case 23:Di()}n=n.return}if(te=e,q=e=vt(e.current,null),le=Se=t,J=0,nr=null,Mi=wl=At=0,ge=jn=null,Tt!==null){for(t=0;t<Tt.length;t++)if(n=Tt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Tt=null}return e}function Zs(e,t){do{var n=q;try{if(vi(),Dr.current=ll,rl){for(var r=b.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}rl=!1}if(Ft=0,ee=Z=b=null,Fn=!1,Jn=0,Ti.current=null,n===null||n.return===null){J=1,nr=t,q=null;break}e:{var o=e,i=n.return,a=n,u=t;if(t=le,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,y=a,v=y.tag;if(!(y.mode&1)&&(v===0||v===11||v===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var k=Ra(i);if(k!==null){k.flags&=-257,Ia(k,i,a,o,t),k.mode&1&&Ma(o,d,t),t=k,u=d;var x=t.updateQueue;if(x===null){var S=new Set;S.add(u),t.updateQueue=S}else x.add(u);break e}else{if(!(t&1)){Ma(o,d,t),Oi();break e}u=Error(w(426))}}else if(V&&a.mode&1){var A=Ra(i);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Ia(A,i,a,o,t),hi(mn(u,a));break e}}o=u=mn(u,a),J!==4&&(J=2),jn===null?jn=[o]:jn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Os(o,u,t);Na(o,f);break e;case 1:a=u;var s=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ht===null||!ht.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=Fs(o,a,t);Na(o,g);break e}}o=o.return}while(o!==null)}tc(n)}catch(E){t=E,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function Js(){var e=ol.current;return ol.current=ll,e===null?ll:e}function Oi(){(J===0||J===3||J===2)&&(J=4),te===null||!(At&268435455)&&!(wl&268435455)||at(te,le)}function ul(e,t){var n=F;F|=2;var r=Js();(te!==e||le!==t)&&(Xe=null,Rt(e,t));do try{Ef();break}catch(l){Zs(e,l)}while(!0);if(vi(),F=n,ol.current=r,q!==null)throw Error(w(261));return te=null,le=0,J}function Ef(){for(;q!==null;)ec(q)}function Cf(){for(;q!==null&&!Kc();)ec(q)}function ec(e){var t=rc(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?tc(e):q=t,Ti.current=null}function tc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vf(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,q=null;return}}else if(n=gf(n,t,Se),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);J===0&&(J=5)}function Lt(e,t,n){var r=j,l=Me.transition;try{Me.transition=null,j=1,Nf(e,t,n,r)}finally{Me.transition=l,j=r}return null}function Nf(e,t,n,r){do un();while(st!==null);if(F&6)throw Error(w(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ld(e,o),e===te&&(q=te=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nr||(Nr=!0,lc(Vr,function(){return un(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Me.transition,Me.transition=null;var i=j;j=1;var a=F;F|=4,Ti.current=null,wf(e,n),Ys(n,e),Hd(Eo),Qr=!!So,Eo=So=null,e.current=n,kf(n),Yc(),F=a,j=i,Me.transition=o}else e.current=n;if(Nr&&(Nr=!1,st=e,al=l),o=e.pendingLanes,o===0&&(ht=null),Zc(n.stateNode),ke(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(il)throw il=!1,e=Vo,Vo=null,e;return al&1&&e.tag!==0&&un(),o=e.pendingLanes,o&1?e===Ho?Un++:(Un=0,Ho=e):Un=0,St(),null}function un(){if(st!==null){var e=Ou(al),t=Me.transition,n=j;try{if(Me.transition=null,j=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,al=0,F&6)throw Error(w(331));var l=F;for(F|=4,N=e.current;N!==null;){var o=N,i=o.child;if(N.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(N=d;N!==null;){var y=N;switch(y.tag){case 0:case 11:case 15:An(8,y,o)}var v=y.child;if(v!==null)v.return=y,N=v;else for(;N!==null;){y=N;var h=y.sibling,k=y.return;if(bs(y),y===d){N=null;break}if(h!==null){h.return=k,N=h;break}N=k}}}var x=o.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var A=S.sibling;S.sibling=null,S=A}while(S!==null)}}N=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,N=i;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:An(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,N=f;break e}N=o.return}}var s=e.current;for(N=s;N!==null;){i=N;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,N=m;else e:for(i=s;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yl(9,a)}}catch(E){K(a,a.return,E)}if(a===i){N=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,N=g;break e}N=a.return}}if(F=l,St(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(cl,e)}catch{}r=!0}return r}finally{j=n,Me.transition=t}}return!1}function ba(e,t,n){t=mn(n,t),t=Os(e,t,1),e=mt(e,t,1),t=fe(),e!==null&&(lr(e,1,t),ke(e,t))}function K(e,t,n){if(e.tag===3)ba(e,e,n);else for(;t!==null;){if(t.tag===3){ba(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ht===null||!ht.has(r))){e=mn(n,e),e=Fs(t,e,1),t=mt(t,e,1),e=fe(),t!==null&&(lr(t,1,e),ke(t,e));break}}t=t.return}}function _f(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(le&n)===n&&(J===4||J===3&&(le&130023424)===le&&500>Y()-Ri?Rt(e,0):Mi|=n),ke(e,t)}function nc(e,t){t===0&&(e.mode&1?(t=hr,hr<<=1,!(hr&130023424)&&(hr=4194304)):t=1);var n=fe();e=et(e,t),e!==null&&(lr(e,t,n),ke(e,n))}function zf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nc(e,n)}function Lf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),nc(e,n)}var rc;rc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,hf(e,t,n);ve=!!(e.flags&131072)}else ve=!1,V&&t.flags&1048576&&as(t,Zr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fr(e,t),e=t.pendingProps;var l=cn(t,ce.current);an(t,n),l=Ni(null,t,r,e,l,n);var o=_i();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(o=!0,Gr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ki(t),l.updater=vl,t.stateNode=l,l._reactInternals=t,Ro(t,r,e,n),t=Oo(null,t,r,!0,o,n)):(t.tag=0,V&&o&&pi(t),de(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Tf(r),e=Oe(r,e),l){case 0:t=Do(null,t,r,e,n);break e;case 1:t=Fa(null,t,r,e,n);break e;case 11:t=Da(null,t,r,e,n);break e;case 14:t=Oa(null,t,r,Oe(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Do(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Fa(e,t,r,l,n);case 3:e:{if(Bs(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,l=o.element,ps(e,t),tl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=mn(Error(w(423)),t),t=Aa(e,t,r,n,l);break e}else if(r!==l){l=mn(Error(w(424)),t),t=Aa(e,t,r,n,l);break e}else for(Ee=pt(t.stateNode.containerInfo.firstChild),Ce=t,V=!0,Ae=null,n=ds(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),r===l){t=tt(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return ms(t),e===null&&Po(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Co(r,l)?i=null:o!==null&&Co(r,o)&&(t.flags|=32),Us(e,t),de(e,t,i,n),t.child;case 6:return e===null&&Po(t),null;case 13:return Ws(e,t,n);case 4:return xi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Da(e,t,r,l,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,U(Jr,r._currentValue),r._currentValue=i,o!==null)if(Be(o.value,i)){if(o.children===l.children&&!ye.current){t=tt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=qe(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?u.next=u:(u.next=y.next,y.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),To(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(w(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),To(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}de(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,an(t,n),l=Re(l),r=r(l),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,l=Oe(r,t.pendingProps),l=Oe(r.type,l),Oa(e,t,r,l,n);case 15:return As(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Fr(e,t),t.tag=1,we(r)?(e=!0,Gr(t)):e=!1,an(t,n),Ds(t,r,l),Ro(t,r,l,n),Oo(null,t,r,!0,e,n);case 19:return $s(e,t,n);case 22:return js(e,t,n)}throw Error(w(156,t.tag))};function lc(e,t){return Mu(e,t)}function Pf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new Pf(e,t,n,r)}function Fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tf(e){if(typeof e=="function")return Fi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ti)return 11;if(e===ni)return 14}return 2}function vt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ur(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Fi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Qt:return It(n.children,l,o,t);case ei:i=8,l|=8;break;case to:return e=Te(12,n,t,l|2),e.elementType=to,e.lanes=o,e;case no:return e=Te(13,n,t,l),e.elementType=no,e.lanes=o,e;case ro:return e=Te(19,n,t,l),e.elementType=ro,e.lanes=o,e;case mu:return kl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fu:i=10;break e;case pu:i=9;break e;case ti:i=11;break e;case ni:i=14;break e;case lt:i=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Te(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function It(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function kl(e,t,n,r){return e=Te(22,e,r,t),e.elementType=mu,e.lanes=n,e.stateNode={isHidden:!1},e}function Yl(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function Gl(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ai(e,t,n,r,l,o,i,a,u){return e=new Mf(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Te(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ki(o),e}function Rf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ht,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function oc(e){if(!e)return wt;e=e._reactInternals;e:{if(Bt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(we(n))return os(e,n,t)}return t}function ic(e,t,n,r,l,o,i,a,u){return e=Ai(n,r,!0,e,l,o,i,a,u),e.context=oc(null),n=e.current,r=fe(),l=gt(n),o=qe(r,l),o.callback=t??null,mt(n,o,l),e.current.lanes=l,lr(e,l,r),ke(e,r),e}function xl(e,t,n,r){var l=t.current,o=fe(),i=gt(l);return n=oc(n),t.context===null?t.context=n:t.pendingContext=n,t=qe(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mt(l,t,i),e!==null&&(Ue(e,l,i,o),Ir(e,l,i)),i}function sl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ji(e,t){Xa(e,t),(e=e.alternate)&&Xa(e,t)}function If(){return null}var ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ui(e){this._internalRoot=e}Sl.prototype.render=Ui.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));xl(e,t,null,null)};Sl.prototype.unmount=Ui.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jt(function(){xl(null,e,null,null)}),t[Je]=null}};function Sl(e){this._internalRoot=e}Sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ju();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&Bu(e)}};function Bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function El(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ka(){}function Df(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=sl(i);o.call(d)}}var i=ic(t,r,e,0,null,!1,!1,"",Ka);return e._reactRootContainer=i,e[Je]=i.current,Kn(e.nodeType===8?e.parentNode:e),jt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var d=sl(u);a.call(d)}}var u=Ai(e,0,!1,null,null,!1,!1,"",Ka);return e._reactRootContainer=u,e[Je]=u.current,Kn(e.nodeType===8?e.parentNode:e),jt(function(){xl(t,u,n,r)}),u}function Cl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var a=l;l=function(){var u=sl(i);a.call(u)}}xl(t,i,e,l)}else i=Df(n,t,e,l,r);return sl(i)}Fu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pn(t.pendingLanes);n!==0&&(oi(t,n|1),ke(t,Y()),!(F&6)&&(hn=Y()+500,St()))}break;case 13:jt(function(){var r=et(e,1);if(r!==null){var l=fe();Ue(r,e,1,l)}}),ji(e,1)}};ii=function(e){if(e.tag===13){var t=et(e,134217728);if(t!==null){var n=fe();Ue(t,e,134217728,n)}ji(e,134217728)}};Au=function(e){if(e.tag===13){var t=gt(e),n=et(e,t);if(n!==null){var r=fe();Ue(n,e,t,r)}ji(e,t)}};ju=function(){return j};Uu=function(e,t){var n=j;try{return j=e,t()}finally{j=n}};mo=function(e,t,n){switch(t){case"input":if(io(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ml(r);if(!l)throw Error(w(90));gu(r),io(r,l)}}}break;case"textarea":yu(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}};Nu=Ii;_u=jt;var Of={usingClientEntryPoint:!1,Events:[ir,Yt,ml,Eu,Cu,Ii]},_n={findFiberByHostInstance:Pt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ff={bundleType:_n.bundleType,version:_n.version,rendererPackageName:_n.rendererPackageName,rendererConfig:_n.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pu(e),e===null?null:e.stateNode},findFiberByHostInstance:_n.findFiberByHostInstance||If,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_r.isDisabled&&_r.supportsFiber)try{cl=_r.inject(Ff),He=_r}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Of;_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bi(t))throw Error(w(200));return Rf(e,t,null,n)};_e.createRoot=function(e,t){if(!Bi(e))throw Error(w(299));var n=!1,r="",l=ac;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ai(e,1,!1,null,null,n,!1,r,l),e[Je]=t.current,Kn(e.nodeType===8?e.parentNode:e),new Ui(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Pu(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return jt(e)};_e.hydrate=function(e,t,n){if(!El(t))throw Error(w(200));return Cl(null,e,t,!0,n)};_e.hydrateRoot=function(e,t,n){if(!Bi(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=ac;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=ic(t,null,e,1,n??null,l,!1,o,i),e[Je]=t.current,Kn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Sl(t)};_e.render=function(e,t,n){if(!El(t))throw Error(w(200));return Cl(null,e,t,!1,n)};_e.unmountComponentAtNode=function(e){if(!El(e))throw Error(w(40));return e._reactRootContainer?(jt(function(){Cl(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};_e.unstable_batchedUpdates=Ii;_e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!El(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Cl(e,t,n,!1,r)};_e.version="18.3.1-next-f1338f8080-20240426";function uc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uc)}catch(e){console.error(e)}}uc(),uu.exports=_e;var Af=uu.exports,Ya=Af;Jl.createRoot=Ya.createRoot,Jl.hydrateRoot=Ya.hydrateRoot;/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=e=>{const t=Uf(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ql={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Wf=M.createContext({}),$f=()=>M.useContext(Wf),Vf=M.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:l="",children:o,iconNode:i,...a},u)=>{const{size:d=24,strokeWidth:y=2,absoluteStrokeWidth:v=!1,color:h="currentColor",className:k=""}=$f()??{},x=r??v?Number(n??y)*24/Number(t??d):n??y;return M.createElement("svg",{ref:u,...ql,width:t??d??ql.width,height:t??d??ql.height,stroke:e??h,strokeWidth:x,className:sc("lucide",k,l),...!o&&!Bf(a)&&{"aria-hidden":"true"},...a},[...i.map(([S,A])=>M.createElement(S,A)),...Array.isArray(o)?o:[o]])});/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=(e,t)=>{const n=M.forwardRef(({className:r,...l},o)=>M.createElement(Vf,{ref:o,iconNode:t,className:sc(`lucide-${jf(Ga(e))}`,`lucide-${e}`,r),...l}));return n.displayName=Ga(e),n};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Qf=ie("bell",Hf);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],Xf=ie("building-2",bf);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],Yf=ie("car",Kf);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],qa=ie("chevron-right",Gf);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],cc=ie("database",qf);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],dc=ie("inbox",Zf);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],fc=ie("layout-dashboard",Jf);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],tp=ie("moon",ep);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],rp=ie("play",np);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],pc=ie("refresh-ccw",lp);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],ip=ie("rotate-ccw",op);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],up=ie("search",ap);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],cp=ie("shield-check",sp);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],fp=ie("sparkles",dp);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]],mc=ie("square-kanban",pp);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],hp=ie("sun",mp);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],hc=ie("users",gp),vp=[{id:"executive",label:"Executive Summary",icon:fc},{id:"inbox",label:"Lead Inbox",icon:dc},{id:"pipeline",label:"Pipeline Board",icon:mc},{id:"records",label:"Lead Records",icon:cc},{id:"manager",label:"Manager View",icon:hc},{id:"reactivation",label:"Reactivation",icon:pc}],zr=[{id:"LD-1042",name:"Afsal K",channel:"Instagram",interest:"2023 Kia Seltos GTX+",budget:"₹11L–₹13L",location:"Kozhikode",finance:"Required",timeline:"0–7 days",score:92,status:"hot",assigned:"Athira",phone:"+91 98XXXXXX41",lastSeen:"12 sec ago",nextAction:"Call in 5 min",source:"Instagram DM Campaign",branch:"Makkaraparamba",stockRef:"STK-8821",stockStatus:"Matching vehicle in stock",stockAge:"11 days in stock",followupStatus:"Callback overdue in 2 min",financeReadiness:"Pre-qualified",riskLevel:"Low risk",summary:"High-intent lead. Exact model asked. Budget aligned. Finance required. Purchase intent this week.",activity:[{time:"10:41",text:"Lead created from Instagram DM"},{time:"10:41",text:"AI replied in 21 sec"},{time:"10:42",text:"Qualification completed"},{time:"10:42a",text:"Scored 92 / Hot"},{time:"10:42b",text:"Assigned to Athira"}],messages:[{from:"customer",text:"Hi, Seltos available?"},{from:"ai",text:"Yes, available. Which variant are you looking for?"},{from:"customer",text:"Automatic. Budget around 12 lakh."},{from:"ai",text:"Got it. Which location are you from, and would you need finance support?"},{from:"customer",text:"Kozhikode. Yes, finance needed. Want to buy this week."}]},{id:"LD-1038",name:"Nidhin P",channel:"WhatsApp",interest:"Swift VXi",budget:"₹5L–₹6L",location:"Malappuram",finance:"No",timeline:"30–45 days",score:74,status:"warm",assigned:"Shihas",phone:"+91 97XXXXXX12",lastSeen:"8 min ago",nextAction:"Follow up tomorrow",source:"WhatsApp Inbound",branch:"Pattambi",stockRef:"STK-7145",stockStatus:"Alternative vehicle suggested",stockAge:"23 days in stock",followupStatus:"Follow-up due tomorrow",financeReadiness:"Cash buyer",riskLevel:"Medium risk",summary:"Qualified lead. Realistic budget. Not urgent, but still active.",activity:[{time:"09:18",text:"Lead created from WhatsApp"},{time:"09:18a",text:"AI qualification started"},{time:"09:20",text:"Scored 74 / Warm"}],messages:[{from:"customer",text:"Swift price?"},{from:"ai",text:"Sure. What budget range are you considering?"},{from:"customer",text:"5 to 6 lakh."},{from:"ai",text:"Perfect. Which location are you from, and are you buying soon?"}]},{id:"LD-1019",name:"Fahad",channel:"Website",interest:"Baleno",budget:"Not shared",location:"Thrissur",finance:"Maybe",timeline:"Researching",score:42,status:"cold",assigned:"Nurture Queue",phone:"+91 96XXXXXX77",lastSeen:"2 days ago",nextAction:"Day-3 reactivation at 6 PM",source:"Website Form",branch:"Kochi",stockRef:"STK-5521",stockStatus:"Waiting for stock match",stockAge:"No confirmed match",followupStatus:"Queued for reactivation",financeReadiness:"Unknown",riskLevel:"High risk",summary:"Top-of-funnel lead. Good fit for automated reactivation.",activity:[{time:"2d-ago",text:"Lead created from website form"},{time:"2d-ago-b",text:"No budget shared"},{time:"scheduled",text:"Reactivation queued"}],messages:[{from:"customer",text:"Need details for Baleno."},{from:"ai",text:"Sure — what budget are you considering, and how soon are you planning to buy?"},{from:"customer",text:"Just checking for now."}]}],yp=[{name:"Fahad",vehicle:"Baleno",stage:"Day 3",sendAt:"6:00 PM",status:"Queued"},{name:"Shameer",vehicle:"Brezza",stage:"Day 7",sendAt:"7:30 PM",status:"Queued"},{name:"Navas",vehicle:"i20",stage:"Day 14",sendAt:"Tomorrow",status:"Drafted"}],Zl=[{delay:900,type:"createLead",payload:{id:"LD-1088",name:"Riyaz M",channel:"Instagram",interest:"Unknown",budget:"Not captured",location:"Not captured",finance:"Unknown",timeline:"Unknown",score:18,status:"new",assigned:"Unassigned",phone:"+91 99XXXXXX08",lastSeen:"just now",nextAction:"Awaiting qualification",source:"Instagram DM Campaign",branch:"Makkaraparamba",stockRef:"Pending vehicle match",stockStatus:"Checking inventory",stockAge:"Not checked yet",followupStatus:"Live conversation started",financeReadiness:"Unknown",riskLevel:"Medium risk",summary:"New inbound enquiry. Qualification not started yet.",activity:[{time:"now-0",text:"Lead created from Instagram DM"}],messages:[{from:"customer",text:"Hi, Creta available?"}]},toast:"New lead captured from Instagram"},{delay:1200,type:"appendMessage",payload:{from:"ai",text:"Yes, available. Which variant are you looking for?"},toast:"AI replied in 18 seconds"},{delay:1100,type:"updateLead",payload:{status:"qualifying",summary:"Qualification started. Vehicle interest identified as Creta.",nextAction:"Capture budget",stockStatus:"Creta inventory check started",followupStatus:"Qualification in progress",activityEntry:{time:"now-1",text:"AI started qualification"}}},{delay:1300,type:"appendMessage",payload:{from:"customer",text:"Automatic. Budget 13 to 14 lakh."},toast:"Budget captured"},{delay:1100,type:"updateLead",payload:{interest:"Hyundai Creta Automatic",budget:"₹13L–₹14L",score:46,stockRef:"STK-9214",stockStatus:"Exact stock match found",stockAge:"14 days in stock",summary:"Budget captured. Strong model intent detected.",nextAction:"Capture location and finance need",activityEntry:{time:"now-2",text:"Budget and model captured"}}},{delay:1100,type:"appendMessage",payload:{from:"ai",text:"Got it. Which location are you from, and would you need finance support?"}},{delay:1300,type:"appendMessage",payload:{from:"customer",text:"Malappuram. Yes finance. Need in 2 weeks."},toast:"Location, finance and timeline captured"},{delay:1200,type:"updateLead",payload:{location:"Malappuram",finance:"Required",timeline:"7–14 days",score:89,status:"hot",assigned:"Athira",financeReadiness:"Finance-ready",riskLevel:"Low risk",followupStatus:"Callback due in 5 min",nextAction:"Immediate callback",summary:"High-intent buyer. Budget aligned. Finance required. Purchase intent within two weeks.",activityEntry:{time:"now-3",text:"Lead scored 89 / Hot and routed to Athira"}},toast:"Lead routed to sales"},{delay:1e3,type:"appendMessage",payload:{from:"ai",text:"Perfect — I'm assigning this to our sales team right now. They'll contact you shortly."}}],Za={hot:{bg:"#241617",color:"#fecdd3",border:"#5f2d33"},warm:{bg:"#15202c",color:"#bfdbfe",border:"#29445f"},cold:{bg:"#142015",color:"#bbf7d0",border:"#2a4931"},new:{bg:"#141414",color:"#e5e7eb",border:"#3f3f46"},qualifying:{bg:"#1a1a1a",color:"#f3f4f6",border:"#52525b"},queued:{bg:"#141414",color:"#e5e7eb",border:"#3f3f46"},finance:{bg:"#0f1711",color:"#d1fae5",border:"#1f3a25"},risk:{bg:"#202020",color:"#fafafa",border:"#5a5a5a"},live:{bg:"#121712",color:"#dcfce7",border:"#35523b"}};function wp(){return new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}function kp(e){return e?e.status==="new"?{owner:"Automation Queue",priority:"New enquiry",action:"Start qualification and capture vehicle intent",sla:"Reply within 30 sec",checklist:["Create lead record","Tag source channel","Start qualification"]}:e.status==="qualifying"?{owner:"YEL6AI Qualifier",priority:"Qualification in progress",action:"Capture budget, finance need, location, and timeline",sla:"Complete within 2 mins",checklist:["Budget captured","Location pending","Finance check pending"]}:e.status==="hot"?{owner:e.assigned,priority:"Immediate callback",action:"Call now, confirm stock, push finance-ready buyer to close",sla:"Sales callback within 5 mins",checklist:["Vehicle match ready","Finance-ready","Assign closer"]}:e.status==="warm"?{owner:e.assigned,priority:"Keep active",action:"Share matching inventory and schedule follow-up",sla:"Follow up within 24 hrs",checklist:["Send options","Log buyer response","Rescore after follow-up"]}:{owner:"Reactivation Queue",priority:"Nurture",action:"Re-engage automatically with matching stock and finance angle",sla:"Day-3 / Day-7 / Day-14",checklist:["Queued sequence","Watch replies","Route back if active"]}:{owner:"-",priority:"-",action:"-",sla:"-",checklist:[]}}const xp=`
  @import url('https://fonts.googleapis.com/css2?family=Audiowide&family=DM+Sans:wght@400;500;700;800&family=Space+Grotesk:wght@500;700&display=swap');

  :root {
    --bg: #000000;
    --panel: rgba(8, 8, 8, 0.94);
    --panel-soft: #0d0d0d;
    --panel-border: #2a2a2a;
    --accent: #86efac;
    --accent-2: #bbf7d0;
    --text-main: #f3f4f6;
    --text-soft: #cbd5e1;
    --panel-motion: 680ms;
    --panel-ease: cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  @keyframes pulse {
    0% { border-color: #4b5563; background: #171717; transform: translateX(0); }
    50% { border-color: #86efac; background: #1b1b1b; transform: translateX(1px); }
    100% { border-color: #4b5563; background: #171717; transform: translateX(0); }
  }

  @keyframes toastIn {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes toastOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(-8px); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes riseIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  html, body, #root {
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    background: var(--bg);
  }

  * { box-sizing: border-box; }

  .carlet-root {
    min-height: 100vh;
    background: var(--bg);
    color: var(--text-main);
    font-family: 'DM Sans', sans-serif;
    padding: 0;
    transition: background 240ms ease, color 240ms ease;
  }

  .carlet-root.theme-light {
    --bg: #f3f5f8;
    --panel: rgba(255, 255, 255, 0.94);
    --panel-soft: #ffffff;
    --panel-border: #d7deea;
    --accent: #22c55e;
    --accent-2: #86efac;
    --text-main: #111827;
    --text-soft: #334155;
  }

  .carlet-root.theme-light .side-panel {
    background: #eef2f7;
  }

  .carlet-root.theme-light .sidebar-label {
    color: #64748b;
  }

  .carlet-root.theme-light .sidebar-desc,
  .carlet-root.theme-light .header-sub,
  .carlet-root.theme-light .text-muted,
  .carlet-root.theme-light .label-sub,
  .carlet-root.theme-light .lead-fact-label,
  .carlet-root.theme-light .label-upper {
    color: #475569;
  }

  .carlet-root.theme-light .header-label {
    color: #64748b;
  }

  .carlet-root.theme-light .nav-btn--active {
    border-color: #cbd5e1;
    background: #ffffff;
    color: #0f172a;
  }

  .carlet-root.theme-light .nav-btn--inactive {
    border-color: #d7deea;
    background: #f8fafc;
    color: #334155;
  }

  .carlet-root.theme-light .nav-btn--inactive:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
  }

  .carlet-root.theme-light .search-shell,
  .carlet-root.theme-light .icon-btn,
  .carlet-root.theme-light .profile-chip {
    background: #ffffff;
    border-color: #d7deea;
    color: #0f172a;
  }

  .carlet-root.theme-light .search-shell input {
    color: #0f172a;
  }

  .carlet-root.theme-light .lead-card {
    color: #0f172a;
  }

  .carlet-root.theme-light .lead-card--selected {
    background: #eef2f7;
    border-color: #cbd5e1;
  }

  .carlet-root.theme-light .lead-card--default {
    background: #ffffff;
    border-color: #d7deea;
  }

  .carlet-root.theme-light .lead-card:hover {
    background: #f1f5f9 !important;
  }

  .carlet-root.theme-light .msg-bubble {
    border-color: #d7deea;
  }

  .carlet-root.theme-light .msg-bubble--ai {
    background: #f8fafc;
  }

  .carlet-root.theme-light .msg-bubble--customer {
    background: #ffffff;
  }

  .carlet-root.theme-light .msg-typing {
    background: #f8fafc;
    border-color: #d7deea;
    color: #334155;
  }

  .carlet-root.theme-light .records-table thead tr {
    background: #f8fafc;
  }

  .carlet-root.theme-light .records-table th {
    color: #334155;
    border-bottom-color: #d7deea;
  }

  .carlet-root.theme-light .records-table tbody tr {
    border-bottom-color: #e2e8f0;
  }

  .carlet-root.theme-light .records-table tbody tr:hover {
    background: #f8fafc;
  }

  .carlet-root.theme-light .empty-state {
    color: #64748b;
  }

  .carlet-layout {
    max-width: none;
    margin: 0;
    min-height: 100vh;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 0;
  }

  .carlet-layout.sidebar-collapsed {
    --sidebar-width: 96px;
  }

  .panel {
    background: var(--panel);
    border: 1px solid var(--panel-border);
    border-radius: 22px;
    padding: 28px;
    box-shadow: 0 16px 40px rgba(0,0,0,0.25);
    animation: riseIn 0.3s ease-out both;
    animation-delay: var(--delay, 0ms);
  }

  .panel-inner {
    background: var(--panel-soft);
    border: 1px solid var(--panel-border);
    border-radius: 22px;
    padding: 22px;
    box-shadow: none;
  }

  .panel-sm {
    background: var(--panel-soft);
    border: 1px solid var(--panel-border);
    border-radius: 16px;
    padding: 18px;
  }

  .panel-card {
    background: var(--panel-soft);
    border: 1px solid var(--panel-border);
    border-radius: 16px;
    padding: 16px;
  }

  .sidebar {
    padding: 24px;
    align-self: start;
    position: sticky;
    top: 0;
    transition: padding var(--panel-motion) var(--panel-ease);
  }

  .side-panel {
    width: var(--sidebar-width, 280px);
    min-width: var(--sidebar-width, 280px);
    min-height: 100vh;
    border-radius: 0;
    border-top: none;
    border-left: none;
    border-bottom: none;
    box-shadow: none;
    background: #060606;
    position: relative;
    overflow: visible;
    transition: width var(--panel-motion) var(--panel-ease), min-width var(--panel-motion) var(--panel-ease);
  }

  .sidebar-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
  }

  .sidebar-collapse-btn {
    width: 34px;
    height: 34px;
    border-radius: 10px;
    border: 1px solid #2f2f2f;
    background: #111111;
    color: #d4d4d8;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
    position: absolute;
    top: 50%;
    right: -17px;
    transform: translateY(-50%);
    z-index: 8;
    transition: background 0.18s ease, border-color 0.18s ease;
  }

  .sidebar-collapse-btn:hover {
    border-color: #4b5563;
    background: #171717;
  }

  .sidebar-collapse-btn:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
  }

  .brand-mark {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background: #86efac;
    border: 1px solid #4ade80;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #111111;
  }

  .sidebar-label {
    color: #a3a3a3;
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .sidebar-title {
    font-size: 24px;
    font-family: 'Audiowide', 'Space Grotesk', sans-serif;
    font-weight: 800;
    letter-spacing: 0.04em;
    margin-bottom: 4px;
  }

  .brand-meta {
    max-width: 220px;
    transition: opacity 260ms ease, max-width var(--panel-motion) var(--panel-ease), transform var(--panel-motion) var(--panel-ease);
    transform-origin: left center;
    overflow: hidden;
    white-space: nowrap;
  }

  .sidebar-desc {
    color: #b4b4b4;
    font-size: 13px;
    line-height: 1.6;
    margin-bottom: 24px;
    overflow: hidden;
    max-height: 96px;
    transition: opacity 260ms ease, max-height var(--panel-motion) var(--panel-ease), margin var(--panel-motion) var(--panel-ease), transform var(--panel-motion) var(--panel-ease);
    transform-origin: top left;
  }

  .nav-grid {
    display: grid;
    gap: 12px;
    margin-bottom: 24px;
  }

  .nav-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    text-align: left;
    border-radius: 14px;
    padding: 14px 16px;
    font-weight: 700;
    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
    transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.16s ease, padding var(--panel-motion) var(--panel-ease);
  }

  .nav-btn:hover {
    transform: translateX(2px);
  }

  .nav-btn-icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  .nav-btn-label {
    display: flex;
    align-items: center;
    gap: 9px;
    min-width: 0;
  }

  .nav-btn-text {
    display: inline-block;
    min-width: 0;
    max-width: 180px;
    overflow: hidden;
    white-space: nowrap;
    transform-origin: left center;
    transition: opacity 260ms ease, transform var(--panel-motion) var(--panel-ease), max-width var(--panel-motion) var(--panel-ease);
  }

  .nav-btn-arrow {
    opacity: 0.45;
    width: 16px;
    min-width: 16px;
    overflow: hidden;
    transition: opacity 260ms ease, transform var(--panel-motion) var(--panel-ease), width var(--panel-motion) var(--panel-ease), min-width var(--panel-motion) var(--panel-ease);
  }

  .sidebar-toggle-icon {
    transition: transform var(--panel-motion) var(--panel-ease);
  }

  .sidebar-toggle-icon.is-open {
    transform: rotate(180deg);
  }

  .main-shell {
    min-width: 0;
    padding: 24px 28px;
  }

  .sidebar-collapsed .sidebar {
    padding: 20px 12px;
  }

  .sidebar-collapsed .sidebar-top {
    justify-content: center;
  }

  .sidebar-collapsed .sidebar-desc {
    opacity: 0;
    max-height: 0;
    margin-bottom: 0;
    transform: translateX(-6px);
    pointer-events: none;
  }

  .sidebar-collapsed .sidebar-label,
  .sidebar-collapsed .sidebar-title,
  .sidebar-collapsed .nav-btn-text,
  .sidebar-collapsed .nav-btn-arrow {
    opacity: 0;
    transform: translateX(-6px);
    pointer-events: none;
  }

  .sidebar-collapsed .nav-btn-text {
    max-width: 0;
  }

  .sidebar-collapsed .nav-btn-arrow {
    width: 0;
    min-width: 0;
  }

  .sidebar-collapsed .brand {
    width: 100%;
    justify-content: center;
    margin-bottom: 8px;
  }

  .sidebar-collapsed .brand-meta {
    opacity: 0;
    max-width: 0;
    transform: translateX(-6px);
    pointer-events: none;
  }

  .sidebar-collapsed .nav-btn {
    width: 48px;
    height: 48px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    gap: 0;
    padding: 0;
    margin: 0 auto;
  }

  .sidebar-collapsed .nav-btn-label {
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 0;
  }

  .sidebar-collapsed .nav-btn-icon {
    display: block;
    margin: auto;
  }

  @media (prefers-reduced-motion: reduce) {
    .sidebar,
    .side-panel,
    .sidebar-desc,
    .brand-meta,
    .nav-btn-text,
    .nav-btn-arrow,
    .sidebar-toggle-icon {
      transition: none !important;
    }
  }

  .nav-btn:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  .nav-btn--active {
    border: 1px solid #3f3f46;
    background: #171717;
    color: #f8fafc;
  }

  .nav-btn--inactive {
    border: 1px solid #2f2f2f;
    background: #0b0b0b;
    color: #d4d4d8;
  }

  .nav-btn--inactive:hover {
    background: #161616;
    border-color: #4b5563;
  }

  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }

  .header-label {
    color: #a3a3a3;
    font-size: 12px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .header-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 34px;
    font-weight: 800;
    letter-spacing: -0.03em;
  }

  .header-sub {
    color: #cbd5e1;
    margin-top: 10px;
    line-height: 1.6;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: none;
    border-radius: 14px;
    padding: 14px 20px;
    background: #86efac;
    color: #052e16;
    font-weight: 800;
    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
    transition: background 0.15s;
  }

  .btn-primary:hover { background: #4ade80; color: #04170d; }
  .btn-primary:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid #3f3f46;
    border-radius: 14px;
    padding: 14px 20px;
    background: transparent;
    color: #e4e4e7;
    font-weight: 700;
    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
    transition: background 0.15s;
  }

  .btn-secondary:hover { background: #1a1a1a; }
  .btn-secondary:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

  .toast {
    border-radius: 16px;
    background: #0f1711;
    border: 1px solid #2f4b36;
    color: #dcfce7;
    font-weight: 700;
    padding: 12px 16px;
    margin-bottom: 14px;
  }

  .utility-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    gap: 16px;
    flex-wrap: wrap;
  }

  .search-shell {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #0f0f0f;
    border: 1px solid #333333;
    border-radius: 12px;
    padding: 10px 12px;
    min-width: 240px;
  }

  .search-shell input {
    border: none;
    outline: none;
    background: transparent;
    color: #f3f4f6;
    width: 100%;
    font-family: inherit;
    font-size: 13px;
  }

  .utility-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .icon-btn {
    width: 38px;
    height: 38px;
    border-radius: 11px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #3a3a3a;
    background: #0f0f0f;
    color: #f3f4f6;
    cursor: pointer;
  }

  .theme-toggle {
    width: auto;
    padding: 0 12px;
    gap: 8px;
    font-size: 12px;
    font-weight: 700;
  }

  .profile-chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 7px 12px;
    border-radius: 999px;
    border: 1px solid #3a3a3a;
    background: #0f0f0f;
    font-size: 13px;
    color: #f3f4f6;
    font-weight: 700;
  }

  .profile-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #86efac;
  }

  .toast--entering {
    animation: toastIn 0.25s ease-out;
  }

  .toast--exiting {
    animation: toastOut 0.3s ease-in forwards;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    text-transform: capitalize;
    white-space: nowrap;
  }

  .lead-card {
    width: 100%;
    text-align: left;
    border-radius: 18px;
    padding: 18px;
    margin-bottom: 12px;
    cursor: pointer;
    color: #f3f4f6;
    font-family: inherit;
    font-size: 14px;
    transition: background 0.15s, border-color 0.15s;
  }

  .lead-card:hover { background: #1a1a1a !important; }
  .lead-card:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

  .lead-card--selected {
    background: #171717;
    border: 1px solid #4b5563;
  }

  .lead-card--default {
    background: #0d0d0d;
    border: 1px solid #2a2a2a;
  }

  .lead-card--pulse {
    animation: pulse 1.8s infinite;
  }

  .inbox-grid {
    display: grid;
    grid-template-columns: 320px 1fr 320px;
    gap: 24px;
  }

  .pipeline-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(220px, 1fr));
    gap: 18px;
    overflow-x: auto;
  }

  .pipeline-col {
    min-height: 360px;
    transition: outline-color 0.2s;
  }

  .pipeline-col--active {
    outline: 2px solid #f8fafc;
  }

  .pipeline-item {
    background: #0d0d0d;
    border: 1px solid #2a2a2a;
    border-radius: 16px;
    padding: 16px;
    margin-bottom: 12px;
    cursor: pointer;
    transition: background 0.15s;
  }

  .pipeline-item:hover { background: #1a1a1a; }
  .pipeline-item:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

  .msg-bubble {
    max-width: 84%;
    margin-bottom: 14px;
    border-radius: 16px;
    padding: 14px 16px;
    border: 1px solid #343434;
    animation: fadeIn 0.2s ease-out;
  }

  .msg-bubble--ai {
    margin-left: auto;
    background: #111111;
  }

  .msg-bubble--customer {
    margin-left: 0;
    background: #0a0a0a;
  }

  .msg-typing {
    max-width: 84%;
    margin-left: auto;
    border-radius: 16px;
    padding: 12px 14px;
    background: #141414;
    border: 1px solid #3a3a3a;
    color: #cbd5e1;
  }

  .records-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
  }

  .records-table thead tr { background: #111111; }

  .records-table th {
    text-align: left;
    padding: 12px 10px;
    color: #d1d5db;
    border-bottom: 1px solid #2f2f2f;
    white-space: nowrap;
  }

  .records-table tbody tr {
    border-bottom: 1px solid #222222;
    cursor: pointer;
    transition: background 0.12s;
  }

  .records-table tbody tr:hover { background: #171717; }
  .records-table tbody tr:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }

  .records-table td {
    padding: 12px 10px;
    white-space: nowrap;
  }

  .records-table td.wrap { white-space: normal; min-width: 150px; }

  .pipeline-head-stats {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 14px;
  }

  .pipeline-row-live {
    background: rgba(187, 247, 208, 0.07);
    border-left: 2px solid #86efac;
  }

  .stat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 20px; }
  .detail-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px; }
  .conv-layout { display: grid; grid-template-columns: 1fr; gap: 20px; }
  .manager-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 24px; }
  .react-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }

  .lead-facts {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 24px;
  }

  .lead-fact {
    min-width: 170px;
    border: 1px solid #2f2f2f;
    border-radius: 12px;
    background: rgba(12, 12, 12, 0.85);
    padding: 10px 12px;
  }

  .lead-fact-label {
    color: #a3a3a3;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .lead-fact-value {
    margin-top: 6px;
    font-size: 13px;
    line-height: 1.45;
  }

  .lead-conversation {
    padding-right: 4px;
  }

  .lead-insights {
    display: grid;
    gap: 16px;
  }

  .lead-insight-block {
    border-left: 2px solid #2f4f66;
    padding-left: 14px;
  }

  .timeline-row {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 10px;
    margin-bottom: 10px;
  }

  .label-upper {
    color: #8fa1bf;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .label-sub { color: #a3a3a3; font-size: 12px; }
  .text-muted { color: #cbd5e1; }
  .text-body { color: #f1f5f9; line-height: 1.65; font-size: 14px; }

  .minibar-track {
    height: 8px;
    background: #1a1a1a;
    border-radius: 999px;
    margin-bottom: 12px;
    overflow: hidden;
  }

  .minibar-fill {
    height: 8px;
    border-radius: 999px;
    background: #bbf7d0;
    transition: width 0.4s ease;
  }

  .empty-state {
    color: #475569;
    font-size: 13px;
    text-align: center;
    padding: 40px 16px;
    font-style: italic;
  }

  .smoke-item { color: #9fb0c9; line-height: 1.7; font-size: 13px; }

  @media (max-width: 1200px) {
    .carlet-layout {
      grid-template-columns: 1fr;
    }

    .main-shell {
      padding: 16px;
    }

    .sidebar {
      position: static;
    }

    .side-panel {
      width: auto;
      min-width: 0;
      min-height: auto;
      border-right: 1px solid var(--panel-border);
    }

    .sidebar-collapse-btn {
      position: static;
      transform: none;
    }

    .inbox-grid,
    .manager-grid,
    .react-grid,
    .conv-layout {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 720px) {
    .carlet-root {
      padding: 14px;
    }

    .main-shell {
      padding: 0;
    }

    .header-title {
      font-size: 28px;
    }

    .search-shell {
      width: 100%;
    }

    .header-row {
      margin-bottom: 12px;
    }
  }
`;function xe({type:e,children:t}){const n=Za[e]||Za.queued;return c.createElement("span",{className:"badge",style:{border:`1px solid ${n.border}`,background:n.bg,color:n.color}},t||e)}function Sp({text:e="No leads in this stage"}){return c.createElement("div",{className:"empty-state"},e)}function be({icon:e,title:t}){return c.createElement("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14}},e&&c.createElement(e,{size:18,color:"#bbf7d0"}),c.createElement("div",{style:{fontWeight:800,fontSize:18}},t))}function Ep(){const[e,t]=M.useState("executive"),[n,r]=M.useState(()=>typeof window>"u"?"dark":window.localStorage.getItem("carlet-theme")==="light"?"light":"dark"),[l,o]=M.useState(!0),[i,a]=M.useState(zr),[u,d]=M.useState(zr[0].id),[y,v]=M.useState(!1),[h,k]=M.useState(-1),[x,S]=M.useState(""),[A,f]=M.useState("idle"),s=M.useRef([]),m=M.useRef(!1),g=M.useMemo(()=>i.find(p=>p.id===u)||i[0],[i,u]),E=M.useMemo(()=>kp(g),[g]),_=M.useMemo(()=>i.filter(p=>p.status==="hot"),[i]),z=M.useMemo(()=>i.filter(p=>p.status==="warm"),[i]),L=M.useMemo(()=>i.filter(p=>p.status==="new"),[i]),H=M.useMemo(()=>i.filter(p=>p.status==="qualifying"),[i]),I=M.useMemo(()=>i.filter(p=>p.status==="cold"),[i]),he=M.useMemo(()=>i.filter(p=>p.financeReadiness==="Finance-ready"||p.financeReadiness==="Pre-qualified"),[i]),Et=M.useMemo(()=>i.filter(p=>p.stockStatus.toLowerCase().includes("match")),[i]),Ct=M.useMemo(()=>i.filter(p=>p.followupStatus.toLowerCase().includes("overdue")||p.followupStatus.toLowerCase().includes("due")),[i]),ur=M.useMemo(()=>new Set(i.map(p=>p.branch)).size,[i]),sr=M.useMemo(()=>{const p={new:0,qualifying:1,hot:2,warm:3,cold:4};return[...i].sort((O,T)=>{const ne=p[O.status]??99,_t=p[T.status]??99;return ne!==_t?ne-_t:T.score-O.score})},[i]),Wt=M.useMemo(()=>{const p={};return i.forEach(T=>{p[T.assigned]||(p[T.assigned]={active:0,hot:0}),p[T.assigned].active++,T.status==="hot"&&p[T.assigned].hot++}),["Athira","Shihas","Anusha","Abhilash"].map(T=>{var ne,_t;return{name:T,active:((ne=p[T])==null?void 0:ne.active)||0,hot:((_t=p[T])==null?void 0:_t.hot)||0}})},[i]),$t=M.useMemo(()=>{const p={};return i.forEach(O=>{const T=O.channel;p[T]=(p[T]||0)+1}),p},[i]);M.useEffect(()=>()=>s.current.forEach(p=>clearTimeout(p)),[]),M.useEffect(()=>{if(!x){f("idle");return}f("entering");const p=window.setTimeout(()=>f("exiting"),1300),O=window.setTimeout(()=>{S(""),f("idle")},1600);return()=>{clearTimeout(p),clearTimeout(O)}},[x]);const C=M.useCallback(()=>{s.current.forEach(p=>clearTimeout(p)),s.current=[]},[]),P=M.useCallback(()=>{C(),m.current=!1,a(zr),d(zr[0].id),v(!1),k(-1),S(""),f("idle")},[C]),R=M.useCallback(p=>{a(O=>O.map(T=>T.id==="LD-1088"?p(T):T))},[]),$=M.useCallback((p,O)=>{m.current&&(k(O),p.type==="createLead"&&(a(T=>T.some(ne=>ne.id===p.payload.id)?T:[p.payload,...T]),d(p.payload.id)),p.type==="appendMessage"&&R(T=>({...T,lastSeen:"just now",messages:[...T.messages,p.payload]})),p.type==="updateLead"&&R(T=>{const{activityEntry:ne,..._t}=p.payload;return{...T,..._t,activity:ne?[{time:wp(),text:ne.text},...T.activity]:T.activity}}),p.toast&&S(p.toast))},[R]),G=M.useCallback(()=>{P(),Promise.resolve().then(()=>{m.current=!0,t("inbox"),v(!0);let p=200;Zl.forEach((O,T)=>{p+=O.delay;const ne=window.setTimeout(()=>{$(O,T),T===Zl.length-1&&(v(!1),m.current=!1)},p);s.current.push(ne)})})},[P,$]),Nt=M.useCallback((p,O)=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),O())},[]);return M.useEffect(()=>{window.localStorage.setItem("carlet-theme",n)},[n]),c.createElement("div",{className:`carlet-root ${n==="light"?"theme-light":"theme-dark"}`},c.createElement("style",null,xp),c.createElement("div",{className:`carlet-layout ${l?"":"sidebar-collapsed"}`},c.createElement("aside",{className:"panel sidebar side-panel",style:{"--delay":"40ms"}},c.createElement("div",{className:"sidebar-top"},c.createElement("div",{className:"brand"},c.createElement("div",{className:"brand-mark","aria-hidden":"true"},c.createElement(Yf,{size:20,strokeWidth:2.4})),c.createElement("div",{className:"brand-meta"},c.createElement("div",{className:"sidebar-label"},"YEL6AI OS"),c.createElement("div",{className:"sidebar-title"},"Carlet"))),c.createElement("button",{className:"sidebar-collapse-btn",onClick:()=>o(p=>!p),"aria-label":l?"Collapse sidebar":"Expand sidebar",title:l?"Collapse sidebar":"Expand sidebar"},c.createElement(qa,{size:16,className:`sidebar-toggle-icon ${l?"is-open":""}`}))),c.createElement("div",{className:"sidebar-desc"},"Operational control system for lead capture, qualification, sales routing, stock matching, and reactivation."),c.createElement("nav",{className:"nav-grid","aria-label":"Main navigation"},vp.map(p=>c.createElement("button",{key:p.id,onClick:()=>t(p.id),className:`nav-btn ${e===p.id?"nav-btn--active":"nav-btn--inactive"}`,"aria-current":e===p.id?"page":void 0},c.createElement("span",{className:"nav-btn-label"},c.createElement(p.icon,{className:"nav-btn-icon"}),c.createElement("span",{className:"nav-btn-text"},p.label)),c.createElement(qa,{size:16,className:"nav-btn-arrow"}))))),c.createElement("main",{className:"main-shell"},c.createElement("div",{className:"utility-row"},c.createElement("label",{className:"search-shell","aria-label":"Search leads"},c.createElement(up,{size:16,color:"var(--accent)"}),c.createElement("input",{type:"text",value:"",readOnly:!0,placeholder:"Search lead, vehicle, branch"})),c.createElement("div",{className:"utility-actions"},c.createElement("button",{className:"icon-btn theme-toggle",onClick:()=>r(p=>p==="dark"?"light":"dark"),"aria-label":n==="dark"?"Switch to light mode":"Switch to dark mode",title:n==="dark"?"Switch to light mode":"Switch to dark mode"},n==="dark"?c.createElement(hp,{size:16}):c.createElement(tp,{size:16}),n==="dark"?"Light":"Dark"),c.createElement("button",{className:"icon-btn","aria-label":"Notifications"},c.createElement(Qf,{size:17})),c.createElement("div",{className:"profile-chip"},c.createElement("span",{className:"profile-dot"})," Operations Online"))),c.createElement("div",{className:"header-row"},c.createElement("div",null,c.createElement("div",{className:"header-label"},"YEL6AI · Carlet Workspace"),c.createElement("div",{className:"header-title"},"Lead Command Center"),c.createElement("div",{className:"header-sub"},"Used-car lead operating system for faster response, finance-ready buyers, branch visibility, and zero lead leakage.")),c.createElement("div",{style:{display:"flex",gap:10,flexWrap:"wrap"}},c.createElement("button",{onClick:G,className:"btn-primary",disabled:y},c.createElement(rp,{size:16}),y?"Running…":"Play Live Demo"),c.createElement("button",{onClick:P,className:"btn-secondary"},c.createElement(ip,{size:16}),"Reset"))),x&&c.createElement("div",{className:`panel toast ${A==="entering"?"toast--entering":""} ${A==="exiting"?"toast--exiting":""}`,role:"status","aria-live":"polite"},x),e==="executive"&&c.createElement("section",{className:"panel","aria-label":"Executive Summary",style:{"--delay":"70ms"}},c.createElement(be,{icon:fc,title:"Executive Summary"}),c.createElement("div",{className:"stat-grid"},[{title:"Finance-Ready Buyers",value:he.length,sub:"ready to push into close",tone:"finance"},{title:"Stock-Matched Enquiries",value:Et.length,sub:"inventory aligned in system",tone:"live"},{title:"Follow-Ups Due / Overdue",value:Ct.length,sub:"needs attention",tone:"risk"},{title:"Branches with Live Demand",value:ur,sub:"distribution across operations",tone:"queued"}].map(p=>c.createElement("div",{key:p.title,className:"panel-inner",style:{padding:16}},c.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8}},c.createElement("div",{style:{fontWeight:800,fontSize:14}},p.title),c.createElement(xe,{type:p.tone})),c.createElement("div",{style:{fontSize:34,fontWeight:800,marginTop:12}},p.value),c.createElement("div",{className:"text-muted",style:{marginTop:8,fontSize:13}},p.sub))))),e==="inbox"&&c.createElement("section",{className:"inbox-grid","aria-label":"Lead Inbox"},c.createElement("div",{className:"panel",style:{"--delay":"70ms"}},c.createElement(be,{icon:dc,title:"Active Leads"}),i.length===0&&c.createElement(Sp,{text:"No active leads"}),i.map(p=>c.createElement("button",{key:p.id,onClick:()=>d(p.id),className:`lead-card ${u===p.id?"lead-card--selected":"lead-card--default"} ${p.id==="LD-1088"&&y?"lead-card--pulse":""}`,"aria-pressed":u===p.id},c.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10}},c.createElement("div",{style:{fontWeight:700}},p.name),c.createElement(xe,{type:p.status})),c.createElement("div",{className:"label-sub",style:{marginTop:6}},p.channel," · ",p.lastSeen),c.createElement("div",{style:{marginTop:8}},p.interest)))),c.createElement("div",{className:"panel",style:{"--delay":"110ms"}},c.createElement("div",{className:"conv-layout"},c.createElement("div",{className:"lead-conversation"},c.createElement("div",{style:{fontWeight:800,marginBottom:12}},"Conversation"),g.messages.map((p,O)=>c.createElement("div",{key:`${g.id}-msg-${O}`,className:`msg-bubble ${p.from==="ai"?"msg-bubble--ai":"msg-bubble--customer"}`},c.createElement("div",{className:"label-upper",style:{marginBottom:6}},p.from==="ai"?"YEL6AI":"Customer"),c.createElement("div",{style:{lineHeight:1.55}},p.text))),y&&g.id==="LD-1088"&&h<Zl.length-1&&c.createElement("div",{className:"msg-typing"},"typing…")),c.createElement("div",{className:"lead-insights"},c.createElement("div",{className:"lead-insight-block"},c.createElement("div",{style:{fontWeight:800,marginBottom:10}},"AI Summary"),c.createElement("div",{className:"text-body"},g.summary)),c.createElement("div",{className:"lead-insight-block"},c.createElement("div",{style:{fontWeight:800,marginBottom:10}},"Timeline"),g.activity.map((p,O)=>c.createElement("div",{key:`${g.id}-act-${O}`,className:"timeline-row"},c.createElement("div",{className:"label-sub"},p.time.replace(/[a-z]-/g,"").replace(/\d+-/g,"")),c.createElement("div",{style:{fontSize:13,lineHeight:1.5}},p.text)))))),c.createElement("div",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"center",marginBottom:16,flexWrap:"wrap"}},c.createElement("div",null,c.createElement("div",{style:{fontSize:24,fontWeight:800}},g.name),c.createElement("div",{className:"label-sub",style:{marginTop:4}},g.id," · ",g.phone," · ",g.source)),c.createElement("div",{style:{display:"flex",gap:8,flexWrap:"wrap"}},c.createElement(xe,{type:g.status}),c.createElement(xe,{type:"finance"},g.financeReadiness),c.createElement(xe,{type:"risk"},g.riskLevel))),c.createElement("div",{className:"lead-facts"},[["Vehicle",g.interest],["Budget",g.budget],["Location",g.location],["Finance",g.finance],["Timeline",g.timeline],["Branch",g.branch],["Stock",g.stockStatus],["Follow-Up",g.followupStatus]].map(([p,O])=>c.createElement("div",{key:p,className:"lead-fact"},c.createElement("div",{className:"lead-fact-label"},p),c.createElement("div",{className:"lead-fact-value"},O))))),c.createElement("div",{className:"panel",style:{"--delay":"150ms"}},c.createElement(be,{icon:cp,title:"Sales Action Panel"}),[["Owner",E.owner],["Priority",E.priority],["Recommended Action",E.action],["SLA",E.sla]].map(([p,O])=>c.createElement("div",{key:p,className:"panel-sm",style:{marginBottom:12}},c.createElement("div",{className:"label-upper"},p),c.createElement("div",{style:{marginTop:8,lineHeight:1.5}},O))))),e==="pipeline"&&c.createElement("section",{className:"panel","aria-label":"Pipeline Board",style:{"--delay":"70ms"}},c.createElement(be,{icon:mc,title:"Pipeline Board"}),c.createElement("div",{className:"pipeline-head-stats"},c.createElement(xe,{type:"new"},"New ",L.length),c.createElement(xe,{type:"qualifying"},"Qualifying ",H.length),c.createElement(xe,{type:"hot"},"Hot ",_.length),c.createElement(xe,{type:"warm"},"Warm ",z.length),c.createElement(xe,{type:"queued"},"Reactivation ",I.length)),c.createElement("div",{style:{overflowX:"auto"}},c.createElement("table",{className:"records-table"},c.createElement("thead",null,c.createElement("tr",null,["Stage","Lead","Vehicle","Channel","Score","Budget","Location","Owner","Next Action"].map(p=>c.createElement("th",{key:p},p)))),c.createElement("tbody",null,sr.length===0&&c.createElement("tr",null,c.createElement("td",{colSpan:9,style:{textAlign:"center",padding:40,color:"#475569",fontStyle:"italic"}},"No pipeline leads")),sr.map(p=>c.createElement("tr",{key:p.id,className:p.id==="LD-1088"&&y?"pipeline-row-live":"",onClick:()=>{d(p.id),t("inbox")},onKeyDown:O=>Nt(O,()=>{d(p.id),t("inbox")}),tabIndex:0,role:"button","aria-label":`View lead ${p.name}`},c.createElement("td",null,c.createElement(xe,{type:p.status==="cold"?"queued":p.status},p.status==="cold"?"reactivation":p.status)),c.createElement("td",null,p.name),c.createElement("td",{className:"wrap"},p.interest),c.createElement("td",null,p.channel),c.createElement("td",null,p.score),c.createElement("td",null,p.budget),c.createElement("td",null,p.location),c.createElement("td",null,p.assigned),c.createElement("td",{className:"wrap"},p.nextAction))))))),e==="records"&&c.createElement("section",{className:"panel","aria-label":"Lead Records",style:{"--delay":"70ms"}},c.createElement(be,{icon:cc,title:"Master Lead Records"}),c.createElement("div",{style:{overflowX:"auto"}},c.createElement("table",{className:"records-table"},c.createElement("thead",null,c.createElement("tr",null,["Lead ID","Name","Channel","Vehicle","Budget","Location","Finance","Timeline","Score","Status","Owner","Branch","Stock","Follow-Up","Next Action"].map(p=>c.createElement("th",{key:p},p)))),c.createElement("tbody",null,i.length===0&&c.createElement("tr",null,c.createElement("td",{colSpan:15,style:{textAlign:"center",padding:40,color:"#475569",fontStyle:"italic"}},"No leads found")),i.map(p=>c.createElement("tr",{key:p.id,onClick:()=>{d(p.id),t("inbox")},onKeyDown:O=>Nt(O,()=>{d(p.id),t("inbox")}),tabIndex:0,role:"button","aria-label":`View lead ${p.name}`},c.createElement("td",null,p.id),c.createElement("td",null,p.name),c.createElement("td",null,p.channel),c.createElement("td",{className:"wrap"},p.interest),c.createElement("td",null,p.budget),c.createElement("td",null,p.location),c.createElement("td",null,p.finance),c.createElement("td",null,p.timeline),c.createElement("td",null,p.score),c.createElement("td",null,c.createElement(xe,{type:p.status})),c.createElement("td",null,p.assigned),c.createElement("td",null,p.branch),c.createElement("td",null,p.stockStatus),c.createElement("td",null,p.followupStatus),c.createElement("td",{className:"wrap"},p.nextAction))))))),e==="manager"&&c.createElement("section",{className:"manager-grid","aria-label":"Manager View"},c.createElement("div",{className:"panel",style:{"--delay":"70ms"}},c.createElement(be,{icon:Xf,title:"Manager Overview"}),c.createElement("div",{className:"stat-grid",style:{marginBottom:14}},[["Instagram",`${$t.Instagram||0} leads`,"From DM campaigns"],["WhatsApp",`${$t.WhatsApp||0} leads`,"Inbound enquiries"],["Finance-Ready",String(he.length),"ready for faster close"],["Sales Load",`${i.length} total`,`Across ${Wt.filter(p=>p.active>0).length} reps`]].map(([p,O,T])=>c.createElement("div",{key:p,className:"panel-sm"},c.createElement("div",{className:"label-sub"},p),c.createElement("div",{style:{fontSize:28,fontWeight:800,marginTop:8}},O),c.createElement("div",{className:"text-muted",style:{marginTop:6,fontSize:13}},T))))),c.createElement("div",{className:"panel",style:{"--delay":"110ms"}},c.createElement(be,{icon:hc,title:"Team Queue"}),Wt.map(p=>c.createElement("div",{key:p.name,className:"panel-sm",style:{marginBottom:10}},c.createElement("div",{style:{fontWeight:700}},p.name),c.createElement("div",{className:"label-sub",style:{marginTop:6}},p.active," active"),c.createElement("div",{style:{marginTop:6,fontSize:13}},p.hot," hot lead",p.hot!==1?"s":""))))),e==="reactivation"&&c.createElement("section",{className:"react-grid","aria-label":"Reactivation Queue"},c.createElement("div",{className:"panel",style:{"--delay":"70ms"}},c.createElement(be,{icon:pc,title:"Reactivation Queue"}),yp.map((p,O)=>c.createElement("div",{key:`react-${O}`,className:"panel-sm",style:{marginBottom:10}},c.createElement("div",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"center"}},c.createElement("div",{style:{fontWeight:700}},p.name),c.createElement(xe,{type:"queued"},p.status)),c.createElement("div",{className:"label-sub",style:{marginTop:6}},p.vehicle),c.createElement("div",{style:{marginTop:8,fontSize:14}},p.stage," · ",p.sendAt)))),c.createElement("div",{className:"panel",style:{"--delay":"110ms"}},c.createElement(be,{icon:fp,title:"Outgoing Message Preview"}),c.createElement("div",{className:"panel-inner",style:{lineHeight:1.8}},"Hi Fahad — sharing this because you had asked about Baleno earlier. We currently have a few matching options and can also help if finance support is needed. Are you still looking, or should I share the best available choices for your budget?"))))))}Jl.createRoot(document.getElementById("root")).render(c.createElement(c.StrictMode,null,c.createElement(Ep,null)));

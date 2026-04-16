(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function hc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ja={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nr=Symbol.for("react.element"),gc=Symbol.for("react.portal"),vc=Symbol.for("react.fragment"),yc=Symbol.for("react.strict_mode"),wc=Symbol.for("react.profiler"),kc=Symbol.for("react.provider"),xc=Symbol.for("react.context"),Sc=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),Cc=Symbol.for("react.memo"),Nc=Symbol.for("react.lazy"),Bo=Symbol.iterator;function _c(e){return e===null||typeof e!="object"?null:(e=Bo&&e[Bo]||e["@@iterator"],typeof e=="function"?e:null)}var ba={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eu=Object.assign,tu={};function mn(e,t,n){this.props=e,this.context=t,this.refs=tu,this.updater=n||ba}mn.prototype.isReactComponent={};mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nu(){}nu.prototype=mn.prototype;function Qi(e,t,n){this.props=e,this.context=t,this.refs=tu,this.updater=n||ba}var Xi=Qi.prototype=new nu;Xi.constructor=Qi;eu(Xi,mn.prototype);Xi.isPureReactComponent=!0;var Wo=Array.isArray,ru=Object.prototype.hasOwnProperty,Ki={current:null},lu={key:!0,ref:!0,__self:!0,__source:!0};function iu(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)ru.call(t,r)&&!lu.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),f=0;f<a;f++)u[f]=arguments[f+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:nr,type:e,key:i,ref:o,props:l,_owner:Ki.current}}function Lc(e,t){return{$$typeof:nr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Yi(e){return typeof e=="object"&&e!==null&&e.$$typeof===nr}function zc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $o=/\/+/g;function Cl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zc(""+e.key):t.toString(36)}function Lr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case nr:case gc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Cl(o,0):r,Wo(l)?(n="",e!=null&&(n=e.replace($o,"$&/")+"/"),Lr(l,t,n,"",function(f){return f})):l!=null&&(Yi(l)&&(l=Lc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace($o,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Wo(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+Cl(i,a);o+=Lr(i,t,n,u,l)}else if(u=_c(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+Cl(i,a++),o+=Lr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function sr(e,t,n){if(e==null)return e;var r=[],l=0;return Lr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Pc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},zr={transition:null},Tc={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:zr,ReactCurrentOwner:Ki};function ou(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:sr,forEach:function(e,t,n){sr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return sr(e,function(){t++}),t},toArray:function(e){return sr(e,function(t){return t})||[]},only:function(e){if(!Yi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=mn;O.Fragment=vc;O.Profiler=wc;O.PureComponent=Qi;O.StrictMode=yc;O.Suspense=Ec;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tc;O.act=ou;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=eu({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Ki.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)ru.call(t,u)&&!lu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var f=0;f<u;f++)a[f]=arguments[f+2];r.children=a}return{$$typeof:nr,type:e.type,key:l,ref:i,props:r,_owner:o}};O.createContext=function(e){return e={$$typeof:xc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:kc,_context:e},e.Consumer=e};O.createElement=iu;O.createFactory=function(e){var t=iu.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Sc,render:e}};O.isValidElement=Yi;O.lazy=function(e){return{$$typeof:Nc,_payload:{_status:-1,_result:e},_init:Pc}};O.memo=function(e,t){return{$$typeof:Cc,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=zr.transition;zr.transition={};try{e()}finally{zr.transition=t}};O.unstable_act=ou;O.useCallback=function(e,t){return fe.current.useCallback(e,t)};O.useContext=function(e){return fe.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};O.useEffect=function(e,t){return fe.current.useEffect(e,t)};O.useId=function(){return fe.current.useId()};O.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return fe.current.useMemo(e,t)};O.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};O.useRef=function(e){return fe.current.useRef(e)};O.useState=function(e){return fe.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return fe.current.useTransition()};O.version="18.3.1";Ja.exports=O;var M=Ja.exports;const c=hc(M);var Jl={},au={exports:{}},_e={},uu={exports:{}},su={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,P){var R=E.length;E.push(P);e:for(;0<R;){var V=R-1>>>1,d=E[V];if(0<l(d,P))E[V]=P,E[R]=d,R=V;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var P=E[0],R=E.pop();if(R!==P){E[0]=R;e:for(var V=0,d=E.length,D=d>>>1;V<D;){var T=2*(V+1)-1,le=E[T],se=T+1,ur=E[se];if(0>l(le,R))se<d&&0>l(ur,le)?(E[V]=ur,E[se]=R,V=se):(E[V]=le,E[T]=R,V=T);else if(se<d&&0>l(ur,R))E[V]=ur,E[se]=R,V=se;else break e}}return P}function l(E,P){var R=E.sortIndex-P.sortIndex;return R!==0?R:E.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],f=[],v=1,g=null,h=3,k=!1,x=!1,S=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(E){for(var P=n(f);P!==null;){if(P.callback===null)r(f);else if(P.startTime<=E)r(f),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(f)}}function y(E){if(S=!1,m(E),!x)if(n(u)!==null)x=!0,Bt(C);else{var P=n(f);P!==null&&Nt(y,P.startTime-E)}}function C(E,P){x=!1,S&&(S=!1,p(z),z=-1),k=!0;var R=h;try{for(m(P),g=n(u);g!==null&&(!(g.expirationTime>P)||E&&!ke());){var V=g.callback;if(typeof V=="function"){g.callback=null,h=g.priorityLevel;var d=V(g.expirationTime<=P);P=e.unstable_now(),typeof d=="function"?g.callback=d:g===n(u)&&r(u),m(P)}else r(u);g=n(u)}if(g!==null)var D=!0;else{var T=n(f);T!==null&&Nt(y,T.startTime-P),D=!1}return D}finally{g=null,h=R,k=!1}}var _=!1,L=null,z=-1,$=5,I=-1;function ke(){return!(e.unstable_now()-I<$)}function Ct(){if(L!==null){var E=e.unstable_now();I=E;var P=!0;try{P=L(!0,E)}finally{P?rt():(_=!1,L=null)}}else _=!1}var rt;if(typeof s=="function")rt=function(){s(Ct)};else if(typeof MessageChannel<"u"){var vn=new MessageChannel,ar=vn.port2;vn.port1.onmessage=Ct,rt=function(){ar.postMessage(null)}}else rt=function(){A(Ct,0)};function Bt(E){L=E,_||(_=!0,rt())}function Nt(E,P){z=A(function(){E(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){x||k||(x=!0,Bt(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var R=h;h=P;try{return E()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,P){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=h;h=E;try{return P()}finally{h=R}},e.unstable_scheduleCallback=function(E,P,R){var V=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?V+R:V):R=V,E){case 1:var d=-1;break;case 2:d=250;break;case 5:d=1073741823;break;case 4:d=1e4;break;default:d=5e3}return d=R+d,E={id:v++,callback:P,priorityLevel:E,startTime:R,expirationTime:d,sortIndex:-1},R>V?(E.sortIndex=R,t(f,E),n(u)===null&&E===n(f)&&(S?(p(z),z=-1):S=!0,Nt(y,R-V))):(E.sortIndex=d,t(u,E),x||k||(x=!0,Bt(C))),E},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(E){var P=h;return function(){var R=h;h=P;try{return E.apply(this,arguments)}finally{h=R}}}})(su);uu.exports=su;var Mc=uu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=M,Ne=Mc;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cu=new Set,Un={};function jt(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for(Un[e]=t,e=0;e<t.length;e++)cu.add(t[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bl=Object.prototype.hasOwnProperty,Ic=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vo={},Ho={};function Dc(e){return bl.call(Ho,e)?!0:bl.call(Vo,e)?!1:Ic.test(e)?Ho[e]=!0:(Vo[e]=!0,!1)}function Oc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fc(e,t,n,r){if(t===null||typeof t>"u"||Oc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gi=/[\-:]([a-z])/g;function qi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gi,qi);re[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gi,qi);re[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gi,qi);re[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zi(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fc(t,n,l,r)&&(n=null),r||l===null?Dc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nt=Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cr=Symbol.for("react.element"),$t=Symbol.for("react.portal"),Vt=Symbol.for("react.fragment"),Ji=Symbol.for("react.strict_mode"),ei=Symbol.for("react.profiler"),du=Symbol.for("react.provider"),fu=Symbol.for("react.context"),bi=Symbol.for("react.forward_ref"),ti=Symbol.for("react.suspense"),ni=Symbol.for("react.suspense_list"),eo=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),pu=Symbol.for("react.offscreen"),Qo=Symbol.iterator;function yn(e){return e===null||typeof e!="object"?null:(e=Qo&&e[Qo]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Nl;function _n(e){if(Nl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Nl=t&&t[1]||""}return`
`+Nl+e}var _l=!1;function Ll(e,t){if(!e||_l)return"";_l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{_l=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_n(e):""}function Ac(e){switch(e.tag){case 5:return _n(e.type);case 16:return _n("Lazy");case 13:return _n("Suspense");case 19:return _n("SuspenseList");case 0:case 2:case 15:return e=Ll(e.type,!1),e;case 11:return e=Ll(e.type.render,!1),e;case 1:return e=Ll(e.type,!0),e;default:return""}}function ri(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vt:return"Fragment";case $t:return"Portal";case ei:return"Profiler";case Ji:return"StrictMode";case ti:return"Suspense";case ni:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fu:return(e.displayName||"Context")+".Consumer";case du:return(e._context.displayName||"Context")+".Provider";case bi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case eo:return t=e.displayName||null,t!==null?t:ri(e.type)||"Memo";case it:t=e._payload,e=e._init;try{return ri(e(t))}catch{}}return null}function jc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ri(t);case 8:return t===Ji?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Uc(e){var t=mu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function dr(e){e._valueTracker||(e._valueTracker=Uc(e))}function hu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ur(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function li(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gu(e,t){t=t.checked,t!=null&&Zi(e,"checked",t,!1)}function ii(e,t){gu(e,t);var n=wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oi(e,t.type,n):t.hasOwnProperty("defaultValue")&&oi(e,t.type,wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ko(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oi(e,t,n){(t!=="number"||Ur(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ln=Array.isArray;function en(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ai(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Ln(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wt(n)}}function vu(e,t){var n=wt(t.value),r=wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Go(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ui(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fr,wu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fr=fr||document.createElement("div"),fr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bc=["Webkit","ms","Moz","O"];Object.keys(Tn).forEach(function(e){Bc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tn[t]=Tn[e]})});function ku(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tn.hasOwnProperty(e)&&Tn[e]?(""+t).trim():t+"px"}function xu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ku(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Wc=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function si(e,t){if(t){if(Wc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function ci(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var di=null;function to(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fi=null,tn=null,nn=null;function qo(e){if(e=ir(e)){if(typeof fi!="function")throw Error(w(280));var t=e.stateNode;t&&(t=pl(t),fi(e.stateNode,e.type,t))}}function Su(e){tn?nn?nn.push(e):nn=[e]:tn=e}function Eu(){if(tn){var e=tn,t=nn;if(nn=tn=null,qo(e),t)for(e=0;e<t.length;e++)qo(t[e])}}function Cu(e,t){return e(t)}function Nu(){}var zl=!1;function _u(e,t,n){if(zl)return e(t,n);zl=!0;try{return Cu(e,t,n)}finally{zl=!1,(tn!==null||nn!==null)&&(Nu(),Eu())}}function Wn(e,t){var n=e.stateNode;if(n===null)return null;var r=pl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var pi=!1;if(Je)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){pi=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{pi=!1}function $c(e,t,n,r,l,i,o,a,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(v){this.onError(v)}}var Mn=!1,Br=null,Wr=!1,mi=null,Vc={onError:function(e){Mn=!0,Br=e}};function Hc(e,t,n,r,l,i,o,a,u){Mn=!1,Br=null,$c.apply(Vc,arguments)}function Qc(e,t,n,r,l,i,o,a,u){if(Hc.apply(this,arguments),Mn){if(Mn){var f=Br;Mn=!1,Br=null}else throw Error(w(198));Wr||(Wr=!0,mi=f)}}function Ut(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zo(e){if(Ut(e)!==e)throw Error(w(188))}function Xc(e){var t=e.alternate;if(!t){if(t=Ut(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Zo(l),e;if(i===r)return Zo(l),t;i=i.sibling}throw Error(w(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function zu(e){return e=Xc(e),e!==null?Pu(e):null}function Pu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pu(e);if(t!==null)return t;e=e.sibling}return null}var Tu=Ne.unstable_scheduleCallback,Jo=Ne.unstable_cancelCallback,Kc=Ne.unstable_shouldYield,Yc=Ne.unstable_requestPaint,G=Ne.unstable_now,Gc=Ne.unstable_getCurrentPriorityLevel,no=Ne.unstable_ImmediatePriority,Mu=Ne.unstable_UserBlockingPriority,$r=Ne.unstable_NormalPriority,qc=Ne.unstable_LowPriority,Ru=Ne.unstable_IdlePriority,sl=null,He=null;function Zc(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(sl,e,void 0,(e.current.flags&128)===128)}catch{}}var je=Math.clz32?Math.clz32:ed,Jc=Math.log,bc=Math.LN2;function ed(e){return e>>>=0,e===0?32:31-(Jc(e)/bc|0)|0}var pr=64,mr=4194304;function zn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=zn(a):(i&=o,i!==0&&(r=zn(i)))}else o=n&~l,o!==0?r=zn(o):i!==0&&(r=zn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-je(t),l=1<<n,r|=e[n],t&=~l;return r}function td(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-je(i),a=1<<o,u=l[o];u===-1?(!(a&n)||a&r)&&(l[o]=td(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function hi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Iu(){var e=pr;return pr<<=1,!(pr&4194240)&&(pr=64),e}function Pl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-je(t),e[t]=n}function rd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-je(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ro(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-je(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var j=0;function Du(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ou,lo,Fu,Au,ju,gi=!1,hr=[],dt=null,ft=null,pt=null,$n=new Map,Vn=new Map,at=[],ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bo(e,t){switch(e){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":$n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function kn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ir(t),t!==null&&lo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function id(e,t,n,r,l){switch(t){case"focusin":return dt=kn(dt,e,t,n,r,l),!0;case"dragenter":return ft=kn(ft,e,t,n,r,l),!0;case"mouseover":return pt=kn(pt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return $n.set(i,kn($n.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Vn.set(i,kn(Vn.get(i)||null,e,t,n,r,l)),!0}return!1}function Uu(e){var t=zt(e.target);if(t!==null){var n=Ut(t);if(n!==null){if(t=n.tag,t===13){if(t=Lu(n),t!==null){e.blockedOn=t,ju(e.priority,function(){Fu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);di=r,n.target.dispatchEvent(r),di=null}else return t=ir(n),t!==null&&lo(t),e.blockedOn=n,!1;t.shift()}return!0}function ea(e,t,n){Pr(e)&&n.delete(t)}function od(){gi=!1,dt!==null&&Pr(dt)&&(dt=null),ft!==null&&Pr(ft)&&(ft=null),pt!==null&&Pr(pt)&&(pt=null),$n.forEach(ea),Vn.forEach(ea)}function xn(e,t){e.blockedOn===t&&(e.blockedOn=null,gi||(gi=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,od)))}function Hn(e){function t(l){return xn(l,e)}if(0<hr.length){xn(hr[0],e);for(var n=1;n<hr.length;n++){var r=hr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dt!==null&&xn(dt,e),ft!==null&&xn(ft,e),pt!==null&&xn(pt,e),$n.forEach(t),Vn.forEach(t),n=0;n<at.length;n++)r=at[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<at.length&&(n=at[0],n.blockedOn===null);)Uu(n),n.blockedOn===null&&at.shift()}var rn=nt.ReactCurrentBatchConfig,Hr=!0;function ad(e,t,n,r){var l=j,i=rn.transition;rn.transition=null;try{j=1,io(e,t,n,r)}finally{j=l,rn.transition=i}}function ud(e,t,n,r){var l=j,i=rn.transition;rn.transition=null;try{j=4,io(e,t,n,r)}finally{j=l,rn.transition=i}}function io(e,t,n,r){if(Hr){var l=vi(e,t,n,r);if(l===null)Ul(e,t,r,Qr,n),bo(e,r);else if(id(l,e,t,n,r))r.stopPropagation();else if(bo(e,r),t&4&&-1<ld.indexOf(e)){for(;l!==null;){var i=ir(l);if(i!==null&&Ou(i),i=vi(e,t,n,r),i===null&&Ul(e,t,r,Qr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ul(e,t,r,null,n)}}var Qr=null;function vi(e,t,n,r){if(Qr=null,e=to(r),e=zt(e),e!==null)if(t=Ut(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qr=e,null}function Bu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gc()){case no:return 1;case Mu:return 4;case $r:case qc:return 16;case Ru:return 536870912;default:return 16}default:return 16}}var st=null,oo=null,Tr=null;function Wu(){if(Tr)return Tr;var e,t=oo,n=t.length,r,l="value"in st?st.value:st.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Tr=l.slice(e,1<r?1-r:void 0)}function Mr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gr(){return!0}function ta(){return!1}function Le(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?gr:ta,this.isPropagationStopped=ta,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gr)},persist:function(){},isPersistent:gr}),t}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ao=Le(hn),lr=K({},hn,{view:0,detail:0}),sd=Le(lr),Tl,Ml,Sn,cl=K({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sn&&(Sn&&e.type==="mousemove"?(Tl=e.screenX-Sn.screenX,Ml=e.screenY-Sn.screenY):Ml=Tl=0,Sn=e),Tl)},movementY:function(e){return"movementY"in e?e.movementY:Ml}}),na=Le(cl),cd=K({},cl,{dataTransfer:0}),dd=Le(cd),fd=K({},lr,{relatedTarget:0}),Rl=Le(fd),pd=K({},hn,{animationName:0,elapsedTime:0,pseudoElement:0}),md=Le(pd),hd=K({},hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gd=Le(hd),vd=K({},hn,{data:0}),ra=Le(vd),yd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kd[e])?!!t[e]:!1}function uo(){return xd}var Sd=K({},lr,{key:function(e){if(e.key){var t=yd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uo,charCode:function(e){return e.type==="keypress"?Mr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ed=Le(Sd),Cd=K({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),la=Le(Cd),Nd=K({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uo}),_d=Le(Nd),Ld=K({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zd=Le(Ld),Pd=K({},cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Td=Le(Pd),Md=[9,13,27,32],so=Je&&"CompositionEvent"in window,Rn=null;Je&&"documentMode"in document&&(Rn=document.documentMode);var Rd=Je&&"TextEvent"in window&&!Rn,$u=Je&&(!so||Rn&&8<Rn&&11>=Rn),ia=" ",oa=!1;function Vu(e,t){switch(e){case"keyup":return Md.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function Id(e,t){switch(e){case"compositionend":return Hu(t);case"keypress":return t.which!==32?null:(oa=!0,ia);case"textInput":return e=t.data,e===ia&&oa?null:e;default:return null}}function Dd(e,t){if(Ht)return e==="compositionend"||!so&&Vu(e,t)?(e=Wu(),Tr=oo=st=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $u&&t.locale!=="ko"?null:t.data;default:return null}}var Od={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Od[e.type]:t==="textarea"}function Qu(e,t,n,r){Su(r),t=Xr(t,"onChange"),0<t.length&&(n=new ao("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var In=null,Qn=null;function Fd(e){ns(e,0)}function dl(e){var t=Kt(e);if(hu(t))return e}function Ad(e,t){if(e==="change")return t}var Xu=!1;if(Je){var Il;if(Je){var Dl="oninput"in document;if(!Dl){var ua=document.createElement("div");ua.setAttribute("oninput","return;"),Dl=typeof ua.oninput=="function"}Il=Dl}else Il=!1;Xu=Il&&(!document.documentMode||9<document.documentMode)}function sa(){In&&(In.detachEvent("onpropertychange",Ku),Qn=In=null)}function Ku(e){if(e.propertyName==="value"&&dl(Qn)){var t=[];Qu(t,Qn,e,to(e)),_u(Fd,t)}}function jd(e,t,n){e==="focusin"?(sa(),In=t,Qn=n,In.attachEvent("onpropertychange",Ku)):e==="focusout"&&sa()}function Ud(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(Qn)}function Bd(e,t){if(e==="click")return dl(t)}function Wd(e,t){if(e==="input"||e==="change")return dl(t)}function $d(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:$d;function Xn(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!bl.call(t,l)||!Be(e[l],t[l]))return!1}return!0}function ca(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function da(e,t){var n=ca(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ca(n)}}function Yu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gu(){for(var e=window,t=Ur();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ur(e.document)}return t}function co(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vd(e){var t=Gu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yu(n.ownerDocument.documentElement,n)){if(r!==null&&co(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=da(n,i);var o=da(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hd=Je&&"documentMode"in document&&11>=document.documentMode,Qt=null,yi=null,Dn=null,wi=!1;function fa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wi||Qt==null||Qt!==Ur(r)||(r=Qt,"selectionStart"in r&&co(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dn&&Xn(Dn,r)||(Dn=r,r=Xr(yi,"onSelect"),0<r.length&&(t=new ao("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xt={animationend:vr("Animation","AnimationEnd"),animationiteration:vr("Animation","AnimationIteration"),animationstart:vr("Animation","AnimationStart"),transitionend:vr("Transition","TransitionEnd")},Ol={},qu={};Je&&(qu=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function fl(e){if(Ol[e])return Ol[e];if(!Xt[e])return e;var t=Xt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qu)return Ol[e]=t[n];return e}var Zu=fl("animationend"),Ju=fl("animationiteration"),bu=fl("animationstart"),es=fl("transitionend"),ts=new Map,pa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){ts.set(e,t),jt(t,[e])}for(var Fl=0;Fl<pa.length;Fl++){var Al=pa[Fl],Qd=Al.toLowerCase(),Xd=Al[0].toUpperCase()+Al.slice(1);xt(Qd,"on"+Xd)}xt(Zu,"onAnimationEnd");xt(Ju,"onAnimationIteration");xt(bu,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(es,"onTransitionEnd");an("onMouseEnter",["mouseout","mouseover"]);an("onMouseLeave",["mouseout","mouseover"]);an("onPointerEnter",["pointerout","pointerover"]);an("onPointerLeave",["pointerout","pointerover"]);jt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jt("onBeforeInput",["compositionend","keypress","textInput","paste"]);jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));function ma(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qc(r,t,void 0,e),e.currentTarget=null}function ns(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,f=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;ma(l,a,f),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,f=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;ma(l,a,f),i=u}}}if(Wr)throw e=mi,Wr=!1,mi=null,e}function B(e,t){var n=t[Ci];n===void 0&&(n=t[Ci]=new Set);var r=e+"__bubble";n.has(r)||(rs(t,e,2,!1),n.add(r))}function jl(e,t,n){var r=0;t&&(r|=4),rs(n,e,r,t)}var yr="_reactListening"+Math.random().toString(36).slice(2);function Kn(e){if(!e[yr]){e[yr]=!0,cu.forEach(function(n){n!=="selectionchange"&&(Kd.has(n)||jl(n,!1,e),jl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yr]||(t[yr]=!0,jl("selectionchange",!1,t))}}function rs(e,t,n,r){switch(Bu(t)){case 1:var l=ad;break;case 4:l=ud;break;default:l=io}n=l.bind(null,t,n,e),l=void 0,!pi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ul(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;a!==null;){if(o=zt(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}_u(function(){var f=i,v=to(n),g=[];e:{var h=ts.get(e);if(h!==void 0){var k=ao,x=e;switch(e){case"keypress":if(Mr(n)===0)break e;case"keydown":case"keyup":k=Ed;break;case"focusin":x="focus",k=Rl;break;case"focusout":x="blur",k=Rl;break;case"beforeblur":case"afterblur":k=Rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=na;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=_d;break;case Zu:case Ju:case bu:k=md;break;case es:k=zd;break;case"scroll":k=sd;break;case"wheel":k=Td;break;case"copy":case"cut":case"paste":k=gd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=la}var S=(t&4)!==0,A=!S&&e==="scroll",p=S?h!==null?h+"Capture":null:h;S=[];for(var s=f,m;s!==null;){m=s;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Wn(s,p),y!=null&&S.push(Yn(s,y,m)))),A)break;s=s.return}0<S.length&&(h=new k(h,x,null,n,v),g.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==di&&(x=n.relatedTarget||n.fromElement)&&(zt(x)||x[be]))break e;if((k||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,k?(x=n.relatedTarget||n.toElement,k=f,x=x?zt(x):null,x!==null&&(A=Ut(x),x!==A||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=f),k!==x)){if(S=na,y="onMouseLeave",p="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(S=la,y="onPointerLeave",p="onPointerEnter",s="pointer"),A=k==null?h:Kt(k),m=x==null?h:Kt(x),h=new S(y,s+"leave",k,n,v),h.target=A,h.relatedTarget=m,y=null,zt(v)===f&&(S=new S(p,s+"enter",x,n,v),S.target=m,S.relatedTarget=A,y=S),A=y,k&&x)t:{for(S=k,p=x,s=0,m=S;m;m=Wt(m))s++;for(m=0,y=p;y;y=Wt(y))m++;for(;0<s-m;)S=Wt(S),s--;for(;0<m-s;)p=Wt(p),m--;for(;s--;){if(S===p||p!==null&&S===p.alternate)break t;S=Wt(S),p=Wt(p)}S=null}else S=null;k!==null&&ha(g,h,k,S,!1),x!==null&&A!==null&&ha(g,A,x,S,!0)}}e:{if(h=f?Kt(f):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var C=Ad;else if(aa(h))if(Xu)C=Wd;else{C=Ud;var _=jd}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Bd);if(C&&(C=C(e,f))){Qu(g,C,n,v);break e}_&&_(e,h,f),e==="focusout"&&(_=h._wrapperState)&&_.controlled&&h.type==="number"&&oi(h,"number",h.value)}switch(_=f?Kt(f):window,e){case"focusin":(aa(_)||_.contentEditable==="true")&&(Qt=_,yi=f,Dn=null);break;case"focusout":Dn=yi=Qt=null;break;case"mousedown":wi=!0;break;case"contextmenu":case"mouseup":case"dragend":wi=!1,fa(g,n,v);break;case"selectionchange":if(Hd)break;case"keydown":case"keyup":fa(g,n,v)}var L;if(so)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Ht?Vu(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&($u&&n.locale!=="ko"&&(Ht||z!=="onCompositionStart"?z==="onCompositionEnd"&&Ht&&(L=Wu()):(st=v,oo="value"in st?st.value:st.textContent,Ht=!0)),_=Xr(f,z),0<_.length&&(z=new ra(z,e,null,n,v),g.push({event:z,listeners:_}),L?z.data=L:(L=Hu(n),L!==null&&(z.data=L)))),(L=Rd?Id(e,n):Dd(e,n))&&(f=Xr(f,"onBeforeInput"),0<f.length&&(v=new ra("onBeforeInput","beforeinput",null,n,v),g.push({event:v,listeners:f}),v.data=L))}ns(g,t)})}function Yn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Wn(e,n),i!=null&&r.unshift(Yn(e,i,l)),i=Wn(e,t),i!=null&&r.push(Yn(e,i,l))),e=e.return}return r}function Wt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ha(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,f=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&f!==null&&(a=f,l?(u=Wn(n,i),u!=null&&o.unshift(Yn(n,u,a))):l||(u=Wn(n,i),u!=null&&o.push(Yn(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Yd=/\r\n?/g,Gd=/\u0000|\uFFFD/g;function ga(e){return(typeof e=="string"?e:""+e).replace(Yd,`
`).replace(Gd,"")}function wr(e,t,n){if(t=ga(t),ga(e)!==t&&n)throw Error(w(425))}function Kr(){}var ki=null,xi=null;function Si(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ei=typeof setTimeout=="function"?setTimeout:void 0,qd=typeof clearTimeout=="function"?clearTimeout:void 0,va=typeof Promise=="function"?Promise:void 0,Zd=typeof queueMicrotask=="function"?queueMicrotask:typeof va<"u"?function(e){return va.resolve(null).then(e).catch(Jd)}:Ei;function Jd(e){setTimeout(function(){throw e})}function Bl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Hn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Hn(t)}function mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ya(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+gn,Gn="__reactProps$"+gn,be="__reactContainer$"+gn,Ci="__reactEvents$"+gn,bd="__reactListeners$"+gn,ef="__reactHandles$"+gn;function zt(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[be]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ya(e);e!==null;){if(n=e[Ve])return n;e=ya(e)}return t}e=n,n=e.parentNode}return null}function ir(e){return e=e[Ve]||e[be],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function pl(e){return e[Gn]||null}var Ni=[],Yt=-1;function St(e){return{current:e}}function W(e){0>Yt||(e.current=Ni[Yt],Ni[Yt]=null,Yt--)}function U(e,t){Yt++,Ni[Yt]=e.current,e.current=t}var kt={},ue=St(kt),ve=St(!1),It=kt;function un(e,t){var n=e.type.contextTypes;if(!n)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ye(e){return e=e.childContextTypes,e!=null}function Yr(){W(ve),W(ue)}function wa(e,t,n){if(ue.current!==kt)throw Error(w(168));U(ue,t),U(ve,n)}function ls(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(w(108,jc(e)||"Unknown",l));return K({},n,r)}function Gr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,It=ue.current,U(ue,e),U(ve,ve.current),!0}function ka(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=ls(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,W(ve),W(ue),U(ue,e)):W(ve),U(ve,n)}var Ye=null,ml=!1,Wl=!1;function is(e){Ye===null?Ye=[e]:Ye.push(e)}function tf(e){ml=!0,is(e)}function Et(){if(!Wl&&Ye!==null){Wl=!0;var e=0,t=j;try{var n=Ye;for(j=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ye=null,ml=!1}catch(l){throw Ye!==null&&(Ye=Ye.slice(e+1)),Tu(no,Et),l}finally{j=t,Wl=!1}}return null}var Gt=[],qt=0,qr=null,Zr=0,ze=[],Pe=0,Dt=null,Ge=1,qe="";function _t(e,t){Gt[qt++]=Zr,Gt[qt++]=qr,qr=e,Zr=t}function os(e,t,n){ze[Pe++]=Ge,ze[Pe++]=qe,ze[Pe++]=Dt,Dt=e;var r=Ge;e=qe;var l=32-je(r)-1;r&=~(1<<l),n+=1;var i=32-je(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ge=1<<32-je(t)+l|n<<l|r,qe=i+e}else Ge=1<<i|n<<l|r,qe=e}function fo(e){e.return!==null&&(_t(e,1),os(e,1,0))}function po(e){for(;e===qr;)qr=Gt[--qt],Gt[qt]=null,Zr=Gt[--qt],Gt[qt]=null;for(;e===Dt;)Dt=ze[--Pe],ze[Pe]=null,qe=ze[--Pe],ze[Pe]=null,Ge=ze[--Pe],ze[Pe]=null}var Ce=null,Ee=null,H=!1,Ae=null;function as(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,Ee=mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dt!==null?{id:Ge,overflow:qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,Ee=null,!0):!1;default:return!1}}function _i(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Li(e){if(H){var t=Ee;if(t){var n=t;if(!xa(e,t)){if(_i(e))throw Error(w(418));t=mt(n.nextSibling);var r=Ce;t&&xa(e,t)?as(r,n):(e.flags=e.flags&-4097|2,H=!1,Ce=e)}}else{if(_i(e))throw Error(w(418));e.flags=e.flags&-4097|2,H=!1,Ce=e}}}function Sa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function kr(e){if(e!==Ce)return!1;if(!H)return Sa(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Si(e.type,e.memoizedProps)),t&&(t=Ee)){if(_i(e))throw us(),Error(w(418));for(;t;)as(e,t),t=mt(t.nextSibling)}if(Sa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=Ce?mt(e.stateNode.nextSibling):null;return!0}function us(){for(var e=Ee;e;)e=mt(e.nextSibling)}function sn(){Ee=Ce=null,H=!1}function mo(e){Ae===null?Ae=[e]:Ae.push(e)}var nf=nt.ReactCurrentBatchConfig;function En(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function xr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ea(e){var t=e._init;return t(e._payload)}function ss(e){function t(p,s){if(e){var m=p.deletions;m===null?(p.deletions=[s],p.flags|=16):m.push(s)}}function n(p,s){if(!e)return null;for(;s!==null;)t(p,s),s=s.sibling;return null}function r(p,s){for(p=new Map;s!==null;)s.key!==null?p.set(s.key,s):p.set(s.index,s),s=s.sibling;return p}function l(p,s){return p=yt(p,s),p.index=0,p.sibling=null,p}function i(p,s,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<s?(p.flags|=2,s):m):(p.flags|=2,s)):(p.flags|=1048576,s)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,s,m,y){return s===null||s.tag!==6?(s=Yl(m,p.mode,y),s.return=p,s):(s=l(s,m),s.return=p,s)}function u(p,s,m,y){var C=m.type;return C===Vt?v(p,s,m.props.children,y,m.key):s!==null&&(s.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===it&&Ea(C)===s.type)?(y=l(s,m.props),y.ref=En(p,s,m),y.return=p,y):(y=jr(m.type,m.key,m.props,null,p.mode,y),y.ref=En(p,s,m),y.return=p,y)}function f(p,s,m,y){return s===null||s.tag!==4||s.stateNode.containerInfo!==m.containerInfo||s.stateNode.implementation!==m.implementation?(s=Gl(m,p.mode,y),s.return=p,s):(s=l(s,m.children||[]),s.return=p,s)}function v(p,s,m,y,C){return s===null||s.tag!==7?(s=Rt(m,p.mode,y,C),s.return=p,s):(s=l(s,m),s.return=p,s)}function g(p,s,m){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Yl(""+s,p.mode,m),s.return=p,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case cr:return m=jr(s.type,s.key,s.props,null,p.mode,m),m.ref=En(p,null,s),m.return=p,m;case $t:return s=Gl(s,p.mode,m),s.return=p,s;case it:var y=s._init;return g(p,y(s._payload),m)}if(Ln(s)||yn(s))return s=Rt(s,p.mode,m,null),s.return=p,s;xr(p,s)}return null}function h(p,s,m,y){var C=s!==null?s.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(p,s,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case cr:return m.key===C?u(p,s,m,y):null;case $t:return m.key===C?f(p,s,m,y):null;case it:return C=m._init,h(p,s,C(m._payload),y)}if(Ln(m)||yn(m))return C!==null?null:v(p,s,m,y,null);xr(p,m)}return null}function k(p,s,m,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,a(s,p,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case cr:return p=p.get(y.key===null?m:y.key)||null,u(s,p,y,C);case $t:return p=p.get(y.key===null?m:y.key)||null,f(s,p,y,C);case it:var _=y._init;return k(p,s,m,_(y._payload),C)}if(Ln(y)||yn(y))return p=p.get(m)||null,v(s,p,y,C,null);xr(s,y)}return null}function x(p,s,m,y){for(var C=null,_=null,L=s,z=s=0,$=null;L!==null&&z<m.length;z++){L.index>z?($=L,L=null):$=L.sibling;var I=h(p,L,m[z],y);if(I===null){L===null&&(L=$);break}e&&L&&I.alternate===null&&t(p,L),s=i(I,s,z),_===null?C=I:_.sibling=I,_=I,L=$}if(z===m.length)return n(p,L),H&&_t(p,z),C;if(L===null){for(;z<m.length;z++)L=g(p,m[z],y),L!==null&&(s=i(L,s,z),_===null?C=L:_.sibling=L,_=L);return H&&_t(p,z),C}for(L=r(p,L);z<m.length;z++)$=k(L,p,z,m[z],y),$!==null&&(e&&$.alternate!==null&&L.delete($.key===null?z:$.key),s=i($,s,z),_===null?C=$:_.sibling=$,_=$);return e&&L.forEach(function(ke){return t(p,ke)}),H&&_t(p,z),C}function S(p,s,m,y){var C=yn(m);if(typeof C!="function")throw Error(w(150));if(m=C.call(m),m==null)throw Error(w(151));for(var _=C=null,L=s,z=s=0,$=null,I=m.next();L!==null&&!I.done;z++,I=m.next()){L.index>z?($=L,L=null):$=L.sibling;var ke=h(p,L,I.value,y);if(ke===null){L===null&&(L=$);break}e&&L&&ke.alternate===null&&t(p,L),s=i(ke,s,z),_===null?C=ke:_.sibling=ke,_=ke,L=$}if(I.done)return n(p,L),H&&_t(p,z),C;if(L===null){for(;!I.done;z++,I=m.next())I=g(p,I.value,y),I!==null&&(s=i(I,s,z),_===null?C=I:_.sibling=I,_=I);return H&&_t(p,z),C}for(L=r(p,L);!I.done;z++,I=m.next())I=k(L,p,z,I.value,y),I!==null&&(e&&I.alternate!==null&&L.delete(I.key===null?z:I.key),s=i(I,s,z),_===null?C=I:_.sibling=I,_=I);return e&&L.forEach(function(Ct){return t(p,Ct)}),H&&_t(p,z),C}function A(p,s,m,y){if(typeof m=="object"&&m!==null&&m.type===Vt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case cr:e:{for(var C=m.key,_=s;_!==null;){if(_.key===C){if(C=m.type,C===Vt){if(_.tag===7){n(p,_.sibling),s=l(_,m.props.children),s.return=p,p=s;break e}}else if(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===it&&Ea(C)===_.type){n(p,_.sibling),s=l(_,m.props),s.ref=En(p,_,m),s.return=p,p=s;break e}n(p,_);break}else t(p,_);_=_.sibling}m.type===Vt?(s=Rt(m.props.children,p.mode,y,m.key),s.return=p,p=s):(y=jr(m.type,m.key,m.props,null,p.mode,y),y.ref=En(p,s,m),y.return=p,p=y)}return o(p);case $t:e:{for(_=m.key;s!==null;){if(s.key===_)if(s.tag===4&&s.stateNode.containerInfo===m.containerInfo&&s.stateNode.implementation===m.implementation){n(p,s.sibling),s=l(s,m.children||[]),s.return=p,p=s;break e}else{n(p,s);break}else t(p,s);s=s.sibling}s=Gl(m,p.mode,y),s.return=p,p=s}return o(p);case it:return _=m._init,A(p,s,_(m._payload),y)}if(Ln(m))return x(p,s,m,y);if(yn(m))return S(p,s,m,y);xr(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,s!==null&&s.tag===6?(n(p,s.sibling),s=l(s,m),s.return=p,p=s):(n(p,s),s=Yl(m,p.mode,y),s.return=p,p=s),o(p)):n(p,s)}return A}var cn=ss(!0),cs=ss(!1),Jr=St(null),br=null,Zt=null,ho=null;function go(){ho=Zt=br=null}function vo(e){var t=Jr.current;W(Jr),e._currentValue=t}function zi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ln(e,t){br=e,ho=Zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(ho!==e)if(e={context:e,memoizedValue:t,next:null},Zt===null){if(br===null)throw Error(w(308));Zt=e,br.dependencies={lanes:0,firstContext:e}}else Zt=Zt.next=e;return t}var Pt=null;function yo(e){Pt===null?Pt=[e]:Pt.push(e)}function ds(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,yo(t)):(n.next=l.next,l.next=n),t.interleaved=n,et(e,r)}function et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ot=!1;function wo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,et(e,n)}return l=r.interleaved,l===null?(t.next=t,yo(r)):(t.next=l.next,l.next=t),r.interleaved=t,et(e,n)}function Rr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ro(e,n)}}function Ca(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function el(e,t,n,r){var l=e.updateQueue;ot=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,f=u.next;u.next=null,o===null?i=f:o.next=f,o=u;var v=e.alternate;v!==null&&(v=v.updateQueue,a=v.lastBaseUpdate,a!==o&&(a===null?v.firstBaseUpdate=f:a.next=f,v.lastBaseUpdate=u))}if(i!==null){var g=l.baseState;o=0,v=f=u=null,a=i;do{var h=a.lane,k=a.eventTime;if((r&h)===h){v!==null&&(v=v.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,S=a;switch(h=t,k=n,S.tag){case 1:if(x=S.payload,typeof x=="function"){g=x.call(k,g,h);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,h=typeof x=="function"?x.call(k,g,h):x,h==null)break e;g=K({},g,h);break e;case 2:ot=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[a]:h.push(a))}else k={eventTime:k,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},v===null?(f=v=k,u=g):v=v.next=k,o|=h;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;h=a,a=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(v===null&&(u=g),l.baseState=u,l.firstBaseUpdate=f,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Ft|=o,e.lanes=o,e.memoizedState=g}}function Na(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var or={},Qe=St(or),qn=St(or),Zn=St(or);function Tt(e){if(e===or)throw Error(w(174));return e}function ko(e,t){switch(U(Zn,t),U(qn,e),U(Qe,or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ui(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ui(t,e)}W(Qe),U(Qe,t)}function dn(){W(Qe),W(qn),W(Zn)}function ps(e){Tt(Zn.current);var t=Tt(Qe.current),n=ui(t,e.type);t!==n&&(U(qn,e),U(Qe,n))}function xo(e){qn.current===e&&(W(Qe),W(qn))}var Q=St(0);function tl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $l=[];function So(){for(var e=0;e<$l.length;e++)$l[e]._workInProgressVersionPrimary=null;$l.length=0}var Ir=nt.ReactCurrentDispatcher,Vl=nt.ReactCurrentBatchConfig,Ot=0,X=null,Z=null,b=null,nl=!1,On=!1,Jn=0,rf=0;function ie(){throw Error(w(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,l,i){if(Ot=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ir.current=e===null||e.memoizedState===null?uf:sf,e=n(r,l),On){i=0;do{if(On=!1,Jn=0,25<=i)throw Error(w(301));i+=1,b=Z=null,t.updateQueue=null,Ir.current=cf,e=n(r,l)}while(On)}if(Ir.current=rl,t=Z!==null&&Z.next!==null,Ot=0,b=Z=X=null,nl=!1,t)throw Error(w(300));return e}function No(){var e=Jn!==0;return Jn=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b===null?X.memoizedState=b=e:b=b.next=e,b}function Ie(){if(Z===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=b===null?X.memoizedState:b.next;if(t!==null)b=t,Z=e;else{if(e===null)throw Error(w(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},b===null?X.memoizedState=b=e:b=b.next=e}return b}function bn(e,t){return typeof t=="function"?t(e):t}function Hl(e){var t=Ie(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=Z,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,u=null,f=i;do{var v=f.lane;if((Ot&v)===v)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var g={lane:v,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(a=u=g,o=r):u=u.next=g,X.lanes|=v,Ft|=v}f=f.next}while(f!==null&&f!==i);u===null?o=r:u.next=a,Be(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,X.lanes|=i,Ft|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ql(e){var t=Ie(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Be(i,t.memoizedState)||(ge=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ms(){}function hs(e,t){var n=X,r=Ie(),l=t(),i=!Be(r.memoizedState,l);if(i&&(r.memoizedState=l,ge=!0),r=r.queue,_o(ys.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||b!==null&&b.memoizedState.tag&1){if(n.flags|=2048,er(9,vs.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(w(349));Ot&30||gs(n,t,l)}return l}function gs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vs(e,t,n,r){t.value=n,t.getSnapshot=r,ws(t)&&ks(e)}function ys(e,t,n){return n(function(){ws(t)&&ks(e)})}function ws(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function ks(e){var t=et(e,1);t!==null&&Ue(t,e,1,-1)}function _a(e){var t=$e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:e},t.queue=e,e=e.dispatch=af.bind(null,X,e),[t.memoizedState,e]}function er(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xs(){return Ie().memoizedState}function Dr(e,t,n,r){var l=$e();X.flags|=e,l.memoizedState=er(1|t,n,void 0,r===void 0?null:r)}function hl(e,t,n,r){var l=Ie();r=r===void 0?null:r;var i=void 0;if(Z!==null){var o=Z.memoizedState;if(i=o.destroy,r!==null&&Eo(r,o.deps)){l.memoizedState=er(t,n,i,r);return}}X.flags|=e,l.memoizedState=er(1|t,n,i,r)}function La(e,t){return Dr(8390656,8,e,t)}function _o(e,t){return hl(2048,8,e,t)}function Ss(e,t){return hl(4,2,e,t)}function Es(e,t){return hl(4,4,e,t)}function Cs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ns(e,t,n){return n=n!=null?n.concat([e]):null,hl(4,4,Cs.bind(null,t,e),n)}function Lo(){}function _s(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ls(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Eo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zs(e,t,n){return Ot&21?(Be(n,t)||(n=Iu(),X.lanes|=n,Ft|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function lf(e,t){var n=j;j=n!==0&&4>n?n:4,e(!0);var r=Vl.transition;Vl.transition={};try{e(!1),t()}finally{j=n,Vl.transition=r}}function Ps(){return Ie().memoizedState}function of(e,t,n){var r=vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ts(e))Ms(t,n);else if(n=ds(e,t,n,r),n!==null){var l=de();Ue(n,e,r,l),Rs(n,t,r)}}function af(e,t,n){var r=vt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ts(e))Ms(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,Be(a,o)){var u=t.interleaved;u===null?(l.next=l,yo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=ds(e,t,l,r),n!==null&&(l=de(),Ue(n,e,r,l),Rs(n,t,r))}}function Ts(e){var t=e.alternate;return e===X||t!==null&&t===X}function Ms(e,t){On=nl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ro(e,n)}}var rl={readContext:Re,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},uf={readContext:Re,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:La,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Dr(4194308,4,Cs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Dr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Dr(4,2,e,t)},useMemo:function(e,t){var n=$e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$e();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=of.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:_a,useDebugValue:Lo,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=_a(!1),t=e[0];return e=lf.bind(null,e[1]),$e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,l=$e();if(H){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),ee===null)throw Error(w(349));Ot&30||gs(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,La(ys.bind(null,r,i,e),[e]),r.flags|=2048,er(9,vs.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=$e(),t=ee.identifierPrefix;if(H){var n=qe,r=Ge;n=(r&~(1<<32-je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sf={readContext:Re,useCallback:_s,useContext:Re,useEffect:_o,useImperativeHandle:Ns,useInsertionEffect:Ss,useLayoutEffect:Es,useMemo:Ls,useReducer:Hl,useRef:xs,useState:function(){return Hl(bn)},useDebugValue:Lo,useDeferredValue:function(e){var t=Ie();return zs(t,Z.memoizedState,e)},useTransition:function(){var e=Hl(bn)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:ms,useSyncExternalStore:hs,useId:Ps,unstable_isNewReconciler:!1},cf={readContext:Re,useCallback:_s,useContext:Re,useEffect:_o,useImperativeHandle:Ns,useInsertionEffect:Ss,useLayoutEffect:Es,useMemo:Ls,useReducer:Ql,useRef:xs,useState:function(){return Ql(bn)},useDebugValue:Lo,useDeferredValue:function(e){var t=Ie();return Z===null?t.memoizedState=e:zs(t,Z.memoizedState,e)},useTransition:function(){var e=Ql(bn)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:ms,useSyncExternalStore:hs,useId:Ps,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Pi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gl={isMounted:function(e){return(e=e._reactInternals)?Ut(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),l=vt(e),i=Ze(r,l);i.payload=t,n!=null&&(i.callback=n),t=ht(e,i,l),t!==null&&(Ue(t,e,l,r),Rr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),l=vt(e),i=Ze(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ht(e,i,l),t!==null&&(Ue(t,e,l,r),Rr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=vt(e),l=Ze(n,r);l.tag=2,t!=null&&(l.callback=t),t=ht(e,l,r),t!==null&&(Ue(t,e,r,n),Rr(t,e,r))}};function za(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Xn(n,r)||!Xn(l,i):!0}function Is(e,t,n){var r=!1,l=kt,i=t.contextType;return typeof i=="object"&&i!==null?i=Re(i):(l=ye(t)?It:ue.current,r=t.contextTypes,i=(r=r!=null)?un(e,l):kt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Pa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gl.enqueueReplaceState(t,t.state,null)}function Ti(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},wo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Re(i):(i=ye(t)?It:ue.current,l.context=un(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Pi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&gl.enqueueReplaceState(l,l.state,null),el(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var n="",r=t;do n+=Ac(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Xl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Mi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var df=typeof WeakMap=="function"?WeakMap:Map;function Ds(e,t,n){n=Ze(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){il||(il=!0,Wi=r),Mi(e,t)},n}function Os(e,t,n){n=Ze(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Mi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Mi(e,t),typeof r!="function"&&(gt===null?gt=new Set([this]):gt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ta(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new df;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Nf.bind(null,e,t,n),t.then(e,e))}function Ma(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ra(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ze(-1,1),t.tag=2,ht(n,t,1))),n.lanes|=1),e)}var ff=nt.ReactCurrentOwner,ge=!1;function ce(e,t,n,r){t.child=e===null?cs(t,null,n,r):cn(t,e.child,n,r)}function Ia(e,t,n,r,l){n=n.render;var i=t.ref;return ln(t,l),r=Co(e,t,n,r,i,l),n=No(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,tt(e,t,l)):(H&&n&&fo(t),t.flags|=1,ce(e,t,r,l),t.child)}function Da(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Oo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Fs(e,t,i,r,l)):(e=jr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Xn,n(o,r)&&e.ref===t.ref)return tt(e,t,l)}return t.flags|=1,e=yt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Fs(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Xn(i,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,tt(e,t,l)}return Ri(e,t,n,r,l)}function As(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(bt,Se),Se|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(bt,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,U(bt,Se),Se|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,U(bt,Se),Se|=r;return ce(e,t,l,n),t.child}function js(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ri(e,t,n,r,l){var i=ye(n)?It:ue.current;return i=un(t,i),ln(t,l),n=Co(e,t,n,r,i,l),r=No(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,tt(e,t,l)):(H&&r&&fo(t),t.flags|=1,ce(e,t,n,l),t.child)}function Oa(e,t,n,r,l){if(ye(n)){var i=!0;Gr(t)}else i=!1;if(ln(t,l),t.stateNode===null)Or(e,t),Is(t,n,r),Ti(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,f=n.contextType;typeof f=="object"&&f!==null?f=Re(f):(f=ye(n)?It:ue.current,f=un(t,f));var v=n.getDerivedStateFromProps,g=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==f)&&Pa(t,o,r,f),ot=!1;var h=t.memoizedState;o.state=h,el(t,r,o,l),u=t.memoizedState,a!==r||h!==u||ve.current||ot?(typeof v=="function"&&(Pi(t,n,v,r),u=t.memoizedState),(a=ot||za(t,n,a,r,h,u,f))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=f,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,fs(e,t),a=t.memoizedProps,f=t.type===t.elementType?a:Oe(t.type,a),o.props=f,g=t.pendingProps,h=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Re(u):(u=ye(n)?It:ue.current,u=un(t,u));var k=n.getDerivedStateFromProps;(v=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==g||h!==u)&&Pa(t,o,r,u),ot=!1,h=t.memoizedState,o.state=h,el(t,r,o,l);var x=t.memoizedState;a!==g||h!==x||ve.current||ot?(typeof k=="function"&&(Pi(t,n,k,r),x=t.memoizedState),(f=ot||za(t,n,f,r,h,x,u)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=u,r=f):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ii(e,t,n,r,i,l)}function Ii(e,t,n,r,l,i){js(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&ka(t,n,!1),tt(e,t,i);r=t.stateNode,ff.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=cn(t,e.child,null,i),t.child=cn(t,null,a,i)):ce(e,t,a,i),t.memoizedState=r.state,l&&ka(t,n,!0),t.child}function Us(e){var t=e.stateNode;t.pendingContext?wa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wa(e,t.context,!1),ko(e,t.containerInfo)}function Fa(e,t,n,r,l){return sn(),mo(l),t.flags|=256,ce(e,t,n,r),t.child}var Di={dehydrated:null,treeContext:null,retryLane:0};function Oi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bs(e,t,n){var r=t.pendingProps,l=Q.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(Q,l&1),e===null)return Li(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=wl(o,r,0,null),e=Rt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Oi(n),t.memoizedState=Di,e):zo(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return pf(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=yt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=yt(a,i):(i=Rt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Oi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Di,r}return i=e.child,e=i.sibling,r=yt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zo(e,t){return t=wl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Sr(e,t,n,r){return r!==null&&mo(r),cn(t,e.child,null,n),e=zo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Xl(Error(w(422))),Sr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=wl({mode:"visible",children:r.children},l,0,null),i=Rt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&cn(t,e.child,null,o),t.child.memoizedState=Oi(o),t.memoizedState=Di,i);if(!(t.mode&1))return Sr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(w(419)),r=Xl(i,r,void 0),Sr(e,t,o,r)}if(a=(o&e.childLanes)!==0,ge||a){if(r=ee,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,et(e,l),Ue(r,e,l,-1))}return Do(),r=Xl(Error(w(421))),Sr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=_f.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Ee=mt(l.nextSibling),Ce=t,H=!0,Ae=null,e!==null&&(ze[Pe++]=Ge,ze[Pe++]=qe,ze[Pe++]=Dt,Ge=e.id,qe=e.overflow,Dt=t),t=zo(t,r.children),t.flags|=4096,t)}function Aa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zi(e.return,t,n)}function Kl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Ws(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ce(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Aa(e,n,t);else if(e.tag===19)Aa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Q,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&tl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Kl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&tl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Kl(t,!0,n,null,i);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Or(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ft|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mf(e,t,n){switch(t.tag){case 3:Us(t),sn();break;case 5:ps(t);break;case 1:ye(t.type)&&Gr(t);break;case 4:ko(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;U(Jr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Bs(e,t,n):(U(Q,Q.current&1),e=tt(e,t,n),e!==null?e.sibling:null);U(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ws(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,As(e,t,n)}return tt(e,t,n)}var $s,Fi,Vs,Hs;$s=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fi=function(){};Vs=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Tt(Qe.current);var i=null;switch(n){case"input":l=li(e,l),r=li(e,r),i=[];break;case"select":l=K({},l,{value:void 0}),r=K({},r,{value:void 0}),i=[];break;case"textarea":l=ai(e,l),r=ai(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Kr)}si(n,r);var o;n=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var a=l[f];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Un.hasOwnProperty(f)?i||(i=[]):(i=i||[]).push(f,null));for(f in r){var u=r[f];if(a=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&u!==a&&(u!=null||a!=null))if(f==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Un.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&B("scroll",e),i||a===u||(i=[])):(i=i||[]).push(f,u))}n&&(i=i||[]).push("style",n);var f=i;(t.updateQueue=f)&&(t.flags|=4)}};Hs=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hf(e,t,n){var r=t.pendingProps;switch(po(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ye(t.type)&&Yr(),oe(t),null;case 3:return r=t.stateNode,dn(),W(ve),W(ue),So(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(kr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(Hi(Ae),Ae=null))),Fi(e,t),oe(t),null;case 5:xo(t);var l=Tt(Zn.current);if(n=t.type,e!==null&&t.stateNode!=null)Vs(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return oe(t),null}if(e=Tt(Qe.current),kr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ve]=t,r[Gn]=i,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(l=0;l<Pn.length;l++)B(Pn[l],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Xo(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":Yo(r,i),B("invalid",r)}si(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&wr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&wr(r.textContent,a,e),l=["children",""+a]):Un.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":dr(r),Ko(r,i,!0);break;case"textarea":dr(r),Go(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Kr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ve]=t,e[Gn]=r,$s(e,t,!1,!1),t.stateNode=e;e:{switch(o=ci(n,r),n){case"dialog":B("cancel",e),B("close",e),l=r;break;case"iframe":case"object":case"embed":B("load",e),l=r;break;case"video":case"audio":for(l=0;l<Pn.length;l++)B(Pn[l],e);l=r;break;case"source":B("error",e),l=r;break;case"img":case"image":case"link":B("error",e),B("load",e),l=r;break;case"details":B("toggle",e),l=r;break;case"input":Xo(e,r),l=li(e,r),B("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=K({},r,{value:void 0}),B("invalid",e);break;case"textarea":Yo(e,r),l=ai(e,r),B("invalid",e);break;default:l=r}si(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?xu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&wu(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Bn(e,u):typeof u=="number"&&Bn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Un.hasOwnProperty(i)?u!=null&&i==="onScroll"&&B("scroll",e):u!=null&&Zi(e,i,u,o))}switch(n){case"input":dr(e),Ko(e,r,!1);break;case"textarea":dr(e),Go(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?en(e,!!r.multiple,i,!1):r.defaultValue!=null&&en(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Kr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Hs(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Tt(Zn.current),Tt(Qe.current),kr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(i=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:wr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return oe(t),null;case 13:if(W(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Ee!==null&&t.mode&1&&!(t.flags&128))us(),sn(),t.flags|=98560,i=!1;else if(i=kr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[Ve]=t}else sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),i=!1}else Ae!==null&&(Hi(Ae),Ae=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?J===0&&(J=3):Do())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return dn(),Fi(e,t),e===null&&Kn(t.stateNode.containerInfo),oe(t),null;case 10:return vo(t.type._context),oe(t),null;case 17:return ye(t.type)&&Yr(),oe(t),null;case 19:if(W(Q),i=t.memoizedState,i===null)return oe(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Cn(i,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=tl(e),o!==null){for(t.flags|=128,Cn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Q,Q.current&1|2),t.child}e=e.sibling}i.tail!==null&&G()>pn&&(t.flags|=128,r=!0,Cn(i,!1),t.lanes=4194304)}else{if(!r)if(e=tl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!H)return oe(t),null}else 2*G()-i.renderingStartTime>pn&&n!==1073741824&&(t.flags|=128,r=!0,Cn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=G(),t.sibling=null,n=Q.current,U(Q,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Io(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function gf(e,t){switch(po(t),t.tag){case 1:return ye(t.type)&&Yr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dn(),W(ve),W(ue),So(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xo(t),null;case 13:if(W(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Q),null;case 4:return dn(),null;case 10:return vo(t.type._context),null;case 22:case 23:return Io(),null;case 24:return null;default:return null}}var Er=!1,ae=!1,vf=typeof WeakSet=="function"?WeakSet:Set,N=null;function Jt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function Ai(e,t,n){try{n()}catch(r){Y(e,t,r)}}var ja=!1;function yf(e,t){if(ki=Hr,e=Gu(),co(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,f=0,v=0,g=e,h=null;t:for(;;){for(var k;g!==n||l!==0&&g.nodeType!==3||(a=o+l),g!==i||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(k=g.firstChild)!==null;)h=g,g=k;for(;;){if(g===e)break t;if(h===n&&++f===l&&(a=o),h===i&&++v===r&&(u=o),(k=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=k}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(xi={focusedElem:e,selectionRange:n},Hr=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,A=x.memoizedState,p=t.stateNode,s=p.getSnapshotBeforeUpdate(t.elementType===t.type?S:Oe(t.type,S),A);p.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){Y(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return x=ja,ja=!1,x}function Fn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ai(t,n,i)}l=l.next}while(l!==r)}}function vl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ji(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qs(e){var t=e.alternate;t!==null&&(e.alternate=null,Qs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[Gn],delete t[Ci],delete t[bd],delete t[ef])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xs(e){return e.tag===5||e.tag===3||e.tag===4}function Ua(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ui(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Kr));else if(r!==4&&(e=e.child,e!==null))for(Ui(e,t,n),e=e.sibling;e!==null;)Ui(e,t,n),e=e.sibling}function Bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bi(e,t,n),e=e.sibling;e!==null;)Bi(e,t,n),e=e.sibling}var te=null,Fe=!1;function lt(e,t,n){for(n=n.child;n!==null;)Ks(e,t,n),n=n.sibling}function Ks(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(sl,n)}catch{}switch(n.tag){case 5:ae||Jt(n,t);case 6:var r=te,l=Fe;te=null,lt(e,t,n),te=r,Fe=l,te!==null&&(Fe?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Fe?(e=te,n=n.stateNode,e.nodeType===8?Bl(e.parentNode,n):e.nodeType===1&&Bl(e,n),Hn(e)):Bl(te,n.stateNode));break;case 4:r=te,l=Fe,te=n.stateNode.containerInfo,Fe=!0,lt(e,t,n),te=r,Fe=l;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ai(n,t,o),l=l.next}while(l!==r)}lt(e,t,n);break;case 1:if(!ae&&(Jt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Y(n,t,a)}lt(e,t,n);break;case 21:lt(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,lt(e,t,n),ae=r):lt(e,t,n);break;default:lt(e,t,n)}}function Ba(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vf),t.forEach(function(r){var l=Lf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Fe=!1;break e;case 3:te=a.stateNode.containerInfo,Fe=!0;break e;case 4:te=a.stateNode.containerInfo,Fe=!0;break e}a=a.return}if(te===null)throw Error(w(160));Ks(i,o,l),te=null,Fe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(f){Y(l,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ys(t,e),t=t.sibling}function Ys(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),We(e),r&4){try{Fn(3,e,e.return),vl(3,e)}catch(S){Y(e,e.return,S)}try{Fn(5,e,e.return)}catch(S){Y(e,e.return,S)}}break;case 1:De(t,e),We(e),r&512&&n!==null&&Jt(n,n.return);break;case 5:if(De(t,e),We(e),r&512&&n!==null&&Jt(n,n.return),e.flags&32){var l=e.stateNode;try{Bn(l,"")}catch(S){Y(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&gu(l,i),ci(a,o);var f=ci(a,i);for(o=0;o<u.length;o+=2){var v=u[o],g=u[o+1];v==="style"?xu(l,g):v==="dangerouslySetInnerHTML"?wu(l,g):v==="children"?Bn(l,g):Zi(l,v,g,f)}switch(a){case"input":ii(l,i);break;case"textarea":vu(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?en(l,!!i.multiple,k,!1):h!==!!i.multiple&&(i.defaultValue!=null?en(l,!!i.multiple,i.defaultValue,!0):en(l,!!i.multiple,i.multiple?[]:"",!1))}l[Gn]=i}catch(S){Y(e,e.return,S)}}break;case 6:if(De(t,e),We(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(S){Y(e,e.return,S)}}break;case 3:if(De(t,e),We(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hn(t.containerInfo)}catch(S){Y(e,e.return,S)}break;case 4:De(t,e),We(e);break;case 13:De(t,e),We(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Mo=G())),r&4&&Ba(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(f=ae)||v,De(t,e),ae=f):De(t,e),We(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!v&&e.mode&1)for(N=e,v=e.child;v!==null;){for(g=N=v;N!==null;){switch(h=N,k=h.child,h.tag){case 0:case 11:case 14:case 15:Fn(4,h,h.return);break;case 1:Jt(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(S){Y(r,n,S)}}break;case 5:Jt(h,h.return);break;case 22:if(h.memoizedState!==null){$a(g);continue}}k!==null?(k.return=h,N=k):$a(g)}v=v.sibling}e:for(v=null,g=e;;){if(g.tag===5){if(v===null){v=g;try{l=g.stateNode,f?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=ku("display",o))}catch(S){Y(e,e.return,S)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=f?"":g.memoizedProps}catch(S){Y(e,e.return,S)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:De(t,e),We(e),r&4&&Ba(e);break;case 21:break;default:De(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xs(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Bn(l,""),r.flags&=-33);var i=Ua(e);Bi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ua(e);Ui(e,a,o);break;default:throw Error(w(161))}}catch(u){Y(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wf(e,t,n){N=e,Gs(e)}function Gs(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var l=N,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Er;if(!o){var a=l.alternate,u=a!==null&&a.memoizedState!==null||ae;a=Er;var f=ae;if(Er=o,(ae=u)&&!f)for(N=l;N!==null;)o=N,u=o.child,o.tag===22&&o.memoizedState!==null?Va(l):u!==null?(u.return=o,N=u):Va(l);for(;i!==null;)N=i,Gs(i),i=i.sibling;N=l,Er=a,ae=f}Wa(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,N=i):Wa(e)}}function Wa(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||vl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Na(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Na(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var v=f.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&Hn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ae||t.flags&512&&ji(t)}catch(h){Y(t,t.return,h)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function $a(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Va(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vl(4,t)}catch(u){Y(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){Y(t,l,u)}}var i=t.return;try{ji(t)}catch(u){Y(t,i,u)}break;case 5:var o=t.return;try{ji(t)}catch(u){Y(t,o,u)}}}catch(u){Y(t,t.return,u)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var kf=Math.ceil,ll=nt.ReactCurrentDispatcher,Po=nt.ReactCurrentOwner,Me=nt.ReactCurrentBatchConfig,F=0,ee=null,q=null,ne=0,Se=0,bt=St(0),J=0,tr=null,Ft=0,yl=0,To=0,An=null,he=null,Mo=0,pn=1/0,Ke=null,il=!1,Wi=null,gt=null,Cr=!1,ct=null,ol=0,jn=0,$i=null,Fr=-1,Ar=0;function de(){return F&6?G():Fr!==-1?Fr:Fr=G()}function vt(e){return e.mode&1?F&2&&ne!==0?ne&-ne:nf.transition!==null?(Ar===0&&(Ar=Iu()),Ar):(e=j,e!==0||(e=window.event,e=e===void 0?16:Bu(e.type)),e):1}function Ue(e,t,n,r){if(50<jn)throw jn=0,$i=null,Error(w(185));rr(e,n,r),(!(F&2)||e!==ee)&&(e===ee&&(!(F&2)&&(yl|=n),J===4&&ut(e,ne)),we(e,r),n===1&&F===0&&!(t.mode&1)&&(pn=G()+500,ml&&Et()))}function we(e,t){var n=e.callbackNode;nd(e,t);var r=Vr(e,e===ee?ne:0);if(r===0)n!==null&&Jo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Jo(n),t===1)e.tag===0?tf(Ha.bind(null,e)):is(Ha.bind(null,e)),Zd(function(){!(F&6)&&Et()}),n=null;else{switch(Du(r)){case 1:n=no;break;case 4:n=Mu;break;case 16:n=$r;break;case 536870912:n=Ru;break;default:n=$r}n=rc(n,qs.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qs(e,t){if(Fr=-1,Ar=0,F&6)throw Error(w(327));var n=e.callbackNode;if(on()&&e.callbackNode!==n)return null;var r=Vr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=al(e,r);else{t=r;var l=F;F|=2;var i=Js();(ee!==e||ne!==t)&&(Ke=null,pn=G()+500,Mt(e,t));do try{Ef();break}catch(a){Zs(e,a)}while(!0);go(),ll.current=i,F=l,q!==null?t=0:(ee=null,ne=0,t=J)}if(t!==0){if(t===2&&(l=hi(e),l!==0&&(r=l,t=Vi(e,l))),t===1)throw n=tr,Mt(e,0),ut(e,r),we(e,G()),n;if(t===6)ut(e,r);else{if(l=e.current.alternate,!(r&30)&&!xf(l)&&(t=al(e,r),t===2&&(i=hi(e),i!==0&&(r=i,t=Vi(e,i))),t===1))throw n=tr,Mt(e,0),ut(e,r),we(e,G()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Lt(e,he,Ke);break;case 3:if(ut(e,r),(r&130023424)===r&&(t=Mo+500-G(),10<t)){if(Vr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ei(Lt.bind(null,e,he,Ke),t);break}Lt(e,he,Ke);break;case 4:if(ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-je(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kf(r/1960))-r,10<r){e.timeoutHandle=Ei(Lt.bind(null,e,he,Ke),r);break}Lt(e,he,Ke);break;case 5:Lt(e,he,Ke);break;default:throw Error(w(329))}}}return we(e,G()),e.callbackNode===n?qs.bind(null,e):null}function Vi(e,t){var n=An;return e.current.memoizedState.isDehydrated&&(Mt(e,t).flags|=256),e=al(e,t),e!==2&&(t=he,he=n,t!==null&&Hi(t)),e}function Hi(e){he===null?he=e:he.push.apply(he,e)}function xf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Be(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ut(e,t){for(t&=~To,t&=~yl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-je(t),r=1<<n;e[n]=-1,t&=~r}}function Ha(e){if(F&6)throw Error(w(327));on();var t=Vr(e,0);if(!(t&1))return we(e,G()),null;var n=al(e,t);if(e.tag!==0&&n===2){var r=hi(e);r!==0&&(t=r,n=Vi(e,r))}if(n===1)throw n=tr,Mt(e,0),ut(e,t),we(e,G()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lt(e,he,Ke),we(e,G()),null}function Ro(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(pn=G()+500,ml&&Et())}}function At(e){ct!==null&&ct.tag===0&&!(F&6)&&on();var t=F;F|=1;var n=Me.transition,r=j;try{if(Me.transition=null,j=1,e)return e()}finally{j=r,Me.transition=n,F=t,!(F&6)&&Et()}}function Io(){Se=bt.current,W(bt)}function Mt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qd(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(po(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yr();break;case 3:dn(),W(ve),W(ue),So();break;case 5:xo(r);break;case 4:dn();break;case 13:W(Q);break;case 19:W(Q);break;case 10:vo(r.type._context);break;case 22:case 23:Io()}n=n.return}if(ee=e,q=e=yt(e.current,null),ne=Se=t,J=0,tr=null,To=yl=Ft=0,he=An=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Pt=null}return e}function Zs(e,t){do{var n=q;try{if(go(),Ir.current=rl,nl){for(var r=X.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}nl=!1}if(Ot=0,b=Z=X=null,On=!1,Jn=0,Po.current=null,n===null||n.return===null){J=1,tr=t,q=null;break}e:{var i=e,o=n.return,a=n,u=t;if(t=ne,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,v=a,g=v.tag;if(!(v.mode&1)&&(g===0||g===11||g===15)){var h=v.alternate;h?(v.updateQueue=h.updateQueue,v.memoizedState=h.memoizedState,v.lanes=h.lanes):(v.updateQueue=null,v.memoizedState=null)}var k=Ma(o);if(k!==null){k.flags&=-257,Ra(k,o,a,i,t),k.mode&1&&Ta(i,f,t),t=k,u=f;var x=t.updateQueue;if(x===null){var S=new Set;S.add(u),t.updateQueue=S}else x.add(u);break e}else{if(!(t&1)){Ta(i,f,t),Do();break e}u=Error(w(426))}}else if(H&&a.mode&1){var A=Ma(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Ra(A,o,a,i,t),mo(fn(u,a));break e}}i=u=fn(u,a),J!==4&&(J=2),An===null?An=[i]:An.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Ds(i,u,t);Ca(i,p);break e;case 1:a=u;var s=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(gt===null||!gt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Os(i,a,t);Ca(i,y);break e}}i=i.return}while(i!==null)}ec(n)}catch(C){t=C,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function Js(){var e=ll.current;return ll.current=rl,e===null?rl:e}function Do(){(J===0||J===3||J===2)&&(J=4),ee===null||!(Ft&268435455)&&!(yl&268435455)||ut(ee,ne)}function al(e,t){var n=F;F|=2;var r=Js();(ee!==e||ne!==t)&&(Ke=null,Mt(e,t));do try{Sf();break}catch(l){Zs(e,l)}while(!0);if(go(),F=n,ll.current=r,q!==null)throw Error(w(261));return ee=null,ne=0,J}function Sf(){for(;q!==null;)bs(q)}function Ef(){for(;q!==null&&!Kc();)bs(q)}function bs(e){var t=nc(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?ec(e):q=t,Po.current=null}function ec(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gf(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,q=null;return}}else if(n=hf(n,t,Se),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);J===0&&(J=5)}function Lt(e,t,n){var r=j,l=Me.transition;try{Me.transition=null,j=1,Cf(e,t,n,r)}finally{Me.transition=l,j=r}return null}function Cf(e,t,n,r){do on();while(ct!==null);if(F&6)throw Error(w(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(rd(e,i),e===ee&&(q=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cr||(Cr=!0,rc($r,function(){return on(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Me.transition,Me.transition=null;var o=j;j=1;var a=F;F|=4,Po.current=null,yf(e,n),Ys(n,e),Vd(xi),Hr=!!ki,xi=ki=null,e.current=n,wf(n),Yc(),F=a,j=o,Me.transition=i}else e.current=n;if(Cr&&(Cr=!1,ct=e,ol=l),i=e.pendingLanes,i===0&&(gt=null),Zc(n.stateNode),we(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(il)throw il=!1,e=Wi,Wi=null,e;return ol&1&&e.tag!==0&&on(),i=e.pendingLanes,i&1?e===$i?jn++:(jn=0,$i=e):jn=0,Et(),null}function on(){if(ct!==null){var e=Du(ol),t=Me.transition,n=j;try{if(Me.transition=null,j=16>e?16:e,ct===null)var r=!1;else{if(e=ct,ct=null,ol=0,F&6)throw Error(w(331));var l=F;for(F|=4,N=e.current;N!==null;){var i=N,o=i.child;if(N.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var f=a[u];for(N=f;N!==null;){var v=N;switch(v.tag){case 0:case 11:case 15:Fn(8,v,i)}var g=v.child;if(g!==null)g.return=v,N=g;else for(;N!==null;){v=N;var h=v.sibling,k=v.return;if(Qs(v),v===f){N=null;break}if(h!==null){h.return=k,N=h;break}N=k}}}var x=i.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var A=S.sibling;S.sibling=null,S=A}while(S!==null)}}N=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,N=o;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Fn(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,N=p;break e}N=i.return}}var s=e.current;for(N=s;N!==null;){o=N;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,N=m;else e:for(o=s;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vl(9,a)}}catch(C){Y(a,a.return,C)}if(a===o){N=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,N=y;break e}N=a.return}}if(F=l,Et(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(sl,e)}catch{}r=!0}return r}finally{j=n,Me.transition=t}}return!1}function Qa(e,t,n){t=fn(n,t),t=Ds(e,t,1),e=ht(e,t,1),t=de(),e!==null&&(rr(e,1,t),we(e,t))}function Y(e,t,n){if(e.tag===3)Qa(e,e,n);else for(;t!==null;){if(t.tag===3){Qa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gt===null||!gt.has(r))){e=fn(n,e),e=Os(t,e,1),t=ht(t,e,1),e=de(),t!==null&&(rr(t,1,e),we(t,e));break}}t=t.return}}function Nf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(J===4||J===3&&(ne&130023424)===ne&&500>G()-Mo?Mt(e,0):To|=n),we(e,t)}function tc(e,t){t===0&&(e.mode&1?(t=mr,mr<<=1,!(mr&130023424)&&(mr=4194304)):t=1);var n=de();e=et(e,t),e!==null&&(rr(e,t,n),we(e,n))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tc(e,n)}function Lf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),tc(e,n)}var nc;nc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,mf(e,t,n);ge=!!(e.flags&131072)}else ge=!1,H&&t.flags&1048576&&os(t,Zr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Or(e,t),e=t.pendingProps;var l=un(t,ue.current);ln(t,n),l=Co(null,t,r,e,l,n);var i=No();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(i=!0,Gr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,wo(t),l.updater=gl,t.stateNode=l,l._reactInternals=t,Ti(t,r,e,n),t=Ii(null,t,r,!0,i,n)):(t.tag=0,H&&i&&fo(t),ce(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Or(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Pf(r),e=Oe(r,e),l){case 0:t=Ri(null,t,r,e,n);break e;case 1:t=Oa(null,t,r,e,n);break e;case 11:t=Ia(null,t,r,e,n);break e;case 14:t=Da(null,t,r,Oe(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Ri(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Oa(e,t,r,l,n);case 3:e:{if(Us(t),e===null)throw Error(w(387));r=t.pendingProps,i=t.memoizedState,l=i.element,fs(e,t),el(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=fn(Error(w(423)),t),t=Fa(e,t,r,n,l);break e}else if(r!==l){l=fn(Error(w(424)),t),t=Fa(e,t,r,n,l);break e}else for(Ee=mt(t.stateNode.containerInfo.firstChild),Ce=t,H=!0,Ae=null,n=cs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sn(),r===l){t=tt(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return ps(t),e===null&&Li(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Si(r,l)?o=null:i!==null&&Si(r,i)&&(t.flags|=32),js(e,t),ce(e,t,o,n),t.child;case 6:return e===null&&Li(t),null;case 13:return Bs(e,t,n);case 4:return ko(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Ia(e,t,r,l,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,U(Jr,r._currentValue),r._currentValue=o,i!==null)if(Be(i.value,o)){if(i.children===l.children&&!ve.current){t=tt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ze(-1,n&-n),u.tag=2;var f=i.updateQueue;if(f!==null){f=f.shared;var v=f.pending;v===null?u.next=u:(u.next=v.next,v.next=u),f.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),zi(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(w(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),zi(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ce(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,ln(t,n),l=Re(l),r=r(l),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,l=Oe(r,t.pendingProps),l=Oe(r.type,l),Da(e,t,r,l,n);case 15:return Fs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Or(e,t),t.tag=1,ye(r)?(e=!0,Gr(t)):e=!1,ln(t,n),Is(t,r,l),Ti(t,r,l,n),Ii(null,t,r,!0,e,n);case 19:return Ws(e,t,n);case 22:return As(e,t,n)}throw Error(w(156,t.tag))};function rc(e,t){return Tu(e,t)}function zf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new zf(e,t,n,r)}function Oo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pf(e){if(typeof e=="function")return Oo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bi)return 11;if(e===eo)return 14}return 2}function yt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function jr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Oo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Vt:return Rt(n.children,l,i,t);case Ji:o=8,l|=8;break;case ei:return e=Te(12,n,t,l|2),e.elementType=ei,e.lanes=i,e;case ti:return e=Te(13,n,t,l),e.elementType=ti,e.lanes=i,e;case ni:return e=Te(19,n,t,l),e.elementType=ni,e.lanes=i,e;case pu:return wl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case du:o=10;break e;case fu:o=9;break e;case bi:o=11;break e;case eo:o=14;break e;case it:o=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Te(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Rt(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function wl(e,t,n,r){return e=Te(22,e,r,t),e.elementType=pu,e.lanes=n,e.stateNode={isHidden:!1},e}function Yl(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function Gl(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Tf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pl(0),this.expirationTimes=Pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Fo(e,t,n,r,l,i,o,a,u){return e=new Tf(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Te(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wo(i),e}function Mf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$t,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lc(e){if(!e)return kt;e=e._reactInternals;e:{if(Ut(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ye(n))return ls(e,n,t)}return t}function ic(e,t,n,r,l,i,o,a,u){return e=Fo(n,r,!0,e,l,i,o,a,u),e.context=lc(null),n=e.current,r=de(),l=vt(n),i=Ze(r,l),i.callback=t??null,ht(n,i,l),e.current.lanes=l,rr(e,l,r),we(e,r),e}function kl(e,t,n,r){var l=t.current,i=de(),o=vt(l);return n=lc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ze(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ht(l,t,o),e!==null&&(Ue(e,l,o,i),Rr(e,l,o)),o}function ul(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ao(e,t){Xa(e,t),(e=e.alternate)&&Xa(e,t)}function Rf(){return null}var oc=typeof reportError=="function"?reportError:function(e){console.error(e)};function jo(e){this._internalRoot=e}xl.prototype.render=jo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));kl(e,t,null,null)};xl.prototype.unmount=jo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;At(function(){kl(null,e,null,null)}),t[be]=null}};function xl(e){this._internalRoot=e}xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Au();e={blockedOn:null,target:e,priority:t};for(var n=0;n<at.length&&t!==0&&t<at[n].priority;n++);at.splice(n,0,e),n===0&&Uu(e)}};function Uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Sl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ka(){}function If(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var f=ul(o);i.call(f)}}var o=ic(t,r,e,0,null,!1,!1,"",Ka);return e._reactRootContainer=o,e[be]=o.current,Kn(e.nodeType===8?e.parentNode:e),At(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var f=ul(u);a.call(f)}}var u=Fo(e,0,!1,null,null,!1,!1,"",Ka);return e._reactRootContainer=u,e[be]=u.current,Kn(e.nodeType===8?e.parentNode:e),At(function(){kl(t,u,n,r)}),u}function El(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var u=ul(o);a.call(u)}}kl(t,o,e,l)}else o=If(n,t,e,l,r);return ul(o)}Ou=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zn(t.pendingLanes);n!==0&&(ro(t,n|1),we(t,G()),!(F&6)&&(pn=G()+500,Et()))}break;case 13:At(function(){var r=et(e,1);if(r!==null){var l=de();Ue(r,e,1,l)}}),Ao(e,1)}};lo=function(e){if(e.tag===13){var t=et(e,134217728);if(t!==null){var n=de();Ue(t,e,134217728,n)}Ao(e,134217728)}};Fu=function(e){if(e.tag===13){var t=vt(e),n=et(e,t);if(n!==null){var r=de();Ue(n,e,t,r)}Ao(e,t)}};Au=function(){return j};ju=function(e,t){var n=j;try{return j=e,t()}finally{j=n}};fi=function(e,t,n){switch(t){case"input":if(ii(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=pl(r);if(!l)throw Error(w(90));hu(r),ii(r,l)}}}break;case"textarea":vu(e,n);break;case"select":t=n.value,t!=null&&en(e,!!n.multiple,t,!1)}};Cu=Ro;Nu=At;var Df={usingClientEntryPoint:!1,Events:[ir,Kt,pl,Su,Eu,Ro]},Nn={findFiberByHostInstance:zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Of={bundleType:Nn.bundleType,version:Nn.version,rendererPackageName:Nn.rendererPackageName,rendererConfig:Nn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zu(e),e===null?null:e.stateNode},findFiberByHostInstance:Nn.findFiberByHostInstance||Rf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nr.isDisabled&&Nr.supportsFiber)try{sl=Nr.inject(Of),He=Nr}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Df;_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uo(t))throw Error(w(200));return Mf(e,t,null,n)};_e.createRoot=function(e,t){if(!Uo(e))throw Error(w(299));var n=!1,r="",l=oc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Fo(e,1,!1,null,null,n,!1,r,l),e[be]=t.current,Kn(e.nodeType===8?e.parentNode:e),new jo(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=zu(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return At(e)};_e.hydrate=function(e,t,n){if(!Sl(t))throw Error(w(200));return El(null,e,t,!0,n)};_e.hydrateRoot=function(e,t,n){if(!Uo(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=oc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=ic(t,null,e,1,n??null,l,!1,i,o),e[be]=t.current,Kn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new xl(t)};_e.render=function(e,t,n){if(!Sl(t))throw Error(w(200));return El(null,e,t,!1,n)};_e.unmountComponentAtNode=function(e){if(!Sl(e))throw Error(w(40));return e._reactRootContainer?(At(function(){El(null,null,e,!1,function(){e._reactRootContainer=null,e[be]=null})}),!0):!1};_e.unstable_batchedUpdates=Ro;_e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Sl(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return El(e,t,n,!1,r)};_e.version="18.3.1-next-f1338f8080-20240426";function ac(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ac)}catch(e){console.error(e)}}ac(),au.exports=_e;var Ff=au.exports,Ya=Ff;Jl.createRoot=Ya.createRoot,Jl.hydrateRoot=Ya.hydrateRoot;/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=e=>{const t=jf(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ql={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Bf=M.createContext({}),Wf=()=>M.useContext(Bf),$f=M.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:l="",children:i,iconNode:o,...a},u)=>{const{size:f=24,strokeWidth:v=2,absoluteStrokeWidth:g=!1,color:h="currentColor",className:k=""}=Wf()??{},x=r??g?Number(n??v)*24/Number(t??f):n??v;return M.createElement("svg",{ref:u,...ql,width:t??f??ql.width,height:t??f??ql.height,stroke:e??h,strokeWidth:x,className:uc("lucide",k,l),...!i&&!Uf(a)&&{"aria-hidden":"true"},...a},[...o.map(([S,A])=>M.createElement(S,A)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=(e,t)=>{const n=M.forwardRef(({className:r,...l},i)=>M.createElement($f,{ref:i,iconNode:t,className:uc(`lucide-${Af(Ga(e))}`,`lucide-${e}`,r),...l}));return n.displayName=Ga(e),n};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Hf=me("bell",Vf);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],Xf=me("building-2",Qf);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],Yf=me("car",Kf);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],qa=me("chevron-right",Gf);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],sc=me("database",qf);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],cc=me("inbox",Zf);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],dc=me("layout-dashboard",Jf);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],ep=me("play",bf);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],fc=me("refresh-ccw",tp);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],rp=me("rotate-ccw",np);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ip=me("search",lp);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ap=me("shield-check",op);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],sp=me("sparkles",up);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]],pc=me("square-kanban",cp);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],mc=me("users",dp),fp=[{id:"executive",label:"Executive Summary",icon:dc},{id:"inbox",label:"Lead Inbox",icon:cc},{id:"pipeline",label:"Pipeline Board",icon:pc},{id:"records",label:"Lead Records",icon:sc},{id:"manager",label:"Manager View",icon:mc},{id:"reactivation",label:"Reactivation",icon:fc}],_r=[{id:"LD-1042",name:"Afsal K",channel:"Instagram",interest:"2023 Kia Seltos GTX+",budget:"₹11L–₹13L",location:"Kozhikode",finance:"Required",timeline:"0–7 days",score:92,status:"hot",assigned:"Athira",phone:"+91 98XXXXXX41",lastSeen:"12 sec ago",nextAction:"Call in 5 min",source:"Instagram DM Campaign",branch:"Makkaraparamba",stockRef:"STK-8821",stockStatus:"Matching vehicle in stock",stockAge:"11 days in stock",followupStatus:"Callback overdue in 2 min",financeReadiness:"Pre-qualified",riskLevel:"Low risk",summary:"High-intent lead. Exact model asked. Budget aligned. Finance required. Purchase intent this week.",activity:[{time:"10:41",text:"Lead created from Instagram DM"},{time:"10:41",text:"AI replied in 21 sec"},{time:"10:42",text:"Qualification completed"},{time:"10:42a",text:"Scored 92 / Hot"},{time:"10:42b",text:"Assigned to Athira"}],messages:[{from:"customer",text:"Hi, Seltos available?"},{from:"ai",text:"Yes, available. Which variant are you looking for?"},{from:"customer",text:"Automatic. Budget around 12 lakh."},{from:"ai",text:"Got it. Which location are you from, and would you need finance support?"},{from:"customer",text:"Kozhikode. Yes, finance needed. Want to buy this week."}]},{id:"LD-1038",name:"Nidhin P",channel:"WhatsApp",interest:"Swift VXi",budget:"₹5L–₹6L",location:"Malappuram",finance:"No",timeline:"30–45 days",score:74,status:"warm",assigned:"Shihas",phone:"+91 97XXXXXX12",lastSeen:"8 min ago",nextAction:"Follow up tomorrow",source:"WhatsApp Inbound",branch:"Pattambi",stockRef:"STK-7145",stockStatus:"Alternative vehicle suggested",stockAge:"23 days in stock",followupStatus:"Follow-up due tomorrow",financeReadiness:"Cash buyer",riskLevel:"Medium risk",summary:"Qualified lead. Realistic budget. Not urgent, but still active.",activity:[{time:"09:18",text:"Lead created from WhatsApp"},{time:"09:18a",text:"AI qualification started"},{time:"09:20",text:"Scored 74 / Warm"}],messages:[{from:"customer",text:"Swift price?"},{from:"ai",text:"Sure. What budget range are you considering?"},{from:"customer",text:"5 to 6 lakh."},{from:"ai",text:"Perfect. Which location are you from, and are you buying soon?"}]},{id:"LD-1019",name:"Fahad",channel:"Website",interest:"Baleno",budget:"Not shared",location:"Thrissur",finance:"Maybe",timeline:"Researching",score:42,status:"cold",assigned:"Nurture Queue",phone:"+91 96XXXXXX77",lastSeen:"2 days ago",nextAction:"Day-3 reactivation at 6 PM",source:"Website Form",branch:"Kochi",stockRef:"STK-5521",stockStatus:"Waiting for stock match",stockAge:"No confirmed match",followupStatus:"Queued for reactivation",financeReadiness:"Unknown",riskLevel:"High risk",summary:"Top-of-funnel lead. Good fit for automated reactivation.",activity:[{time:"2d-ago",text:"Lead created from website form"},{time:"2d-ago-b",text:"No budget shared"},{time:"scheduled",text:"Reactivation queued"}],messages:[{from:"customer",text:"Need details for Baleno."},{from:"ai",text:"Sure — what budget are you considering, and how soon are you planning to buy?"},{from:"customer",text:"Just checking for now."}]}],pp=[{name:"Fahad",vehicle:"Baleno",stage:"Day 3",sendAt:"6:00 PM",status:"Queued"},{name:"Shameer",vehicle:"Brezza",stage:"Day 7",sendAt:"7:30 PM",status:"Queued"},{name:"Navas",vehicle:"i20",stage:"Day 14",sendAt:"Tomorrow",status:"Drafted"}],Zl=[{delay:900,type:"createLead",payload:{id:"LD-1088",name:"Riyaz M",channel:"Instagram",interest:"Unknown",budget:"Not captured",location:"Not captured",finance:"Unknown",timeline:"Unknown",score:18,status:"new",assigned:"Unassigned",phone:"+91 99XXXXXX08",lastSeen:"just now",nextAction:"Awaiting qualification",source:"Instagram DM Campaign",branch:"Makkaraparamba",stockRef:"Pending vehicle match",stockStatus:"Checking inventory",stockAge:"Not checked yet",followupStatus:"Live conversation started",financeReadiness:"Unknown",riskLevel:"Medium risk",summary:"New inbound enquiry. Qualification not started yet.",activity:[{time:"now-0",text:"Lead created from Instagram DM"}],messages:[{from:"customer",text:"Hi, Creta available?"}]},toast:"New lead captured from Instagram"},{delay:1200,type:"appendMessage",payload:{from:"ai",text:"Yes, available. Which variant are you looking for?"},toast:"AI replied in 18 seconds"},{delay:1100,type:"updateLead",payload:{status:"qualifying",summary:"Qualification started. Vehicle interest identified as Creta.",nextAction:"Capture budget",stockStatus:"Creta inventory check started",followupStatus:"Qualification in progress",activityEntry:{time:"now-1",text:"AI started qualification"}}},{delay:1300,type:"appendMessage",payload:{from:"customer",text:"Automatic. Budget 13 to 14 lakh."},toast:"Budget captured"},{delay:1100,type:"updateLead",payload:{interest:"Hyundai Creta Automatic",budget:"₹13L–₹14L",score:46,stockRef:"STK-9214",stockStatus:"Exact stock match found",stockAge:"14 days in stock",summary:"Budget captured. Strong model intent detected.",nextAction:"Capture location and finance need",activityEntry:{time:"now-2",text:"Budget and model captured"}}},{delay:1100,type:"appendMessage",payload:{from:"ai",text:"Got it. Which location are you from, and would you need finance support?"}},{delay:1300,type:"appendMessage",payload:{from:"customer",text:"Malappuram. Yes finance. Need in 2 weeks."},toast:"Location, finance and timeline captured"},{delay:1200,type:"updateLead",payload:{location:"Malappuram",finance:"Required",timeline:"7–14 days",score:89,status:"hot",assigned:"Athira",financeReadiness:"Finance-ready",riskLevel:"Low risk",followupStatus:"Callback due in 5 min",nextAction:"Immediate callback",summary:"High-intent buyer. Budget aligned. Finance required. Purchase intent within two weeks.",activityEntry:{time:"now-3",text:"Lead scored 89 / Hot and routed to Athira"}},toast:"Lead routed to sales"},{delay:1e3,type:"appendMessage",payload:{from:"ai",text:"Perfect — I'm assigning this to our sales team right now. They'll contact you shortly."}}],Za={hot:{bg:"#241617",color:"#fecdd3",border:"#5f2d33"},warm:{bg:"#15202c",color:"#bfdbfe",border:"#29445f"},cold:{bg:"#142015",color:"#bbf7d0",border:"#2a4931"},new:{bg:"#141414",color:"#e5e7eb",border:"#3f3f46"},qualifying:{bg:"#1a1a1a",color:"#f3f4f6",border:"#52525b"},queued:{bg:"#141414",color:"#e5e7eb",border:"#3f3f46"},finance:{bg:"#0f1711",color:"#d1fae5",border:"#1f3a25"},risk:{bg:"#202020",color:"#fafafa",border:"#5a5a5a"},live:{bg:"#121712",color:"#dcfce7",border:"#35523b"}};function mp(){return new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}function hp(e){return e?e.status==="new"?{owner:"Automation Queue",priority:"New enquiry",action:"Start qualification and capture vehicle intent",sla:"Reply within 30 sec",checklist:["Create lead record","Tag source channel","Start qualification"]}:e.status==="qualifying"?{owner:"YEL6AI Qualifier",priority:"Qualification in progress",action:"Capture budget, finance need, location, and timeline",sla:"Complete within 2 mins",checklist:["Budget captured","Location pending","Finance check pending"]}:e.status==="hot"?{owner:e.assigned,priority:"Immediate callback",action:"Call now, confirm stock, push finance-ready buyer to close",sla:"Sales callback within 5 mins",checklist:["Vehicle match ready","Finance-ready","Assign closer"]}:e.status==="warm"?{owner:e.assigned,priority:"Keep active",action:"Share matching inventory and schedule follow-up",sla:"Follow up within 24 hrs",checklist:["Send options","Log buyer response","Rescore after follow-up"]}:{owner:"Reactivation Queue",priority:"Nurture",action:"Re-engage automatically with matching stock and finance angle",sla:"Day-3 / Day-7 / Day-14",checklist:["Queued sequence","Watch replies","Route back if active"]}:{owner:"-",priority:"-",action:"-",sla:"-",checklist:[]}}const gp=`
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
    --panel-motion: 420ms;
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
    background: #000000;
    color: var(--text-main);
    font-family: 'DM Sans', sans-serif;
    padding: 0;
  }

  .carlet-layout {
    max-width: none;
    margin: 0;
    min-height: 100vh;
    display: grid;
    grid-template-columns: var(--sidebar-width, 280px) minmax(0, 1fr);
    gap: 0;
    transition: grid-template-columns var(--panel-motion) var(--panel-ease);
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
    min-height: 100vh;
    border-radius: 0;
    border-top: none;
    border-left: none;
    border-bottom: none;
    box-shadow: none;
    background: #060606;
    position: relative;
    overflow: visible;
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
    justify-content: center;
    padding: 12px;
  }

  .sidebar-collapsed .nav-btn-label {
    gap: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    .carlet-layout,
    .sidebar,
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
`;function xe({type:e,children:t}){const n=Za[e]||Za.queued;return c.createElement("span",{className:"badge",style:{border:`1px solid ${n.border}`,background:n.bg,color:n.color}},t||e)}function vp({text:e="No leads in this stage"}){return c.createElement("div",{className:"empty-state"},e)}function Xe({icon:e,title:t}){return c.createElement("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14}},e&&c.createElement(e,{size:18,color:"#bbf7d0"}),c.createElement("div",{style:{fontWeight:800,fontSize:18}},t))}function yp(){const[e,t]=M.useState("executive"),[n,r]=M.useState(!0),[l,i]=M.useState(_r),[o,a]=M.useState(_r[0].id),[u,f]=M.useState(!1),[v,g]=M.useState(-1),[h,k]=M.useState(""),[x,S]=M.useState("idle"),A=M.useRef([]),p=M.useRef(!1),s=M.useMemo(()=>l.find(d=>d.id===o)||l[0],[l,o]),m=M.useMemo(()=>hp(s),[s]),y=M.useMemo(()=>l.filter(d=>d.status==="hot"),[l]),C=M.useMemo(()=>l.filter(d=>d.status==="warm"),[l]),_=M.useMemo(()=>l.filter(d=>d.status==="new"),[l]),L=M.useMemo(()=>l.filter(d=>d.status==="qualifying"),[l]),z=M.useMemo(()=>l.filter(d=>d.status==="cold"),[l]),$=M.useMemo(()=>l.filter(d=>d.financeReadiness==="Finance-ready"||d.financeReadiness==="Pre-qualified"),[l]),I=M.useMemo(()=>l.filter(d=>d.stockStatus.toLowerCase().includes("match")),[l]),ke=M.useMemo(()=>l.filter(d=>d.followupStatus.toLowerCase().includes("overdue")||d.followupStatus.toLowerCase().includes("due")),[l]),Ct=M.useMemo(()=>new Set(l.map(d=>d.branch)).size,[l]),rt=M.useMemo(()=>{const d={new:0,qualifying:1,hot:2,warm:3,cold:4};return[...l].sort((D,T)=>{const le=d[D.status]??99,se=d[T.status]??99;return le!==se?le-se:T.score-D.score})},[l]),vn=M.useMemo(()=>{const d={};return l.forEach(T=>{d[T.assigned]||(d[T.assigned]={active:0,hot:0}),d[T.assigned].active++,T.status==="hot"&&d[T.assigned].hot++}),["Athira","Shihas","Anusha","Abhilash"].map(T=>{var le,se;return{name:T,active:((le=d[T])==null?void 0:le.active)||0,hot:((se=d[T])==null?void 0:se.hot)||0}})},[l]),ar=M.useMemo(()=>{const d={};return l.forEach(D=>{const T=D.channel;d[T]=(d[T]||0)+1}),d},[l]);M.useEffect(()=>()=>A.current.forEach(d=>clearTimeout(d)),[]),M.useEffect(()=>{if(!h){S("idle");return}S("entering");const d=window.setTimeout(()=>S("exiting"),1300),D=window.setTimeout(()=>{k(""),S("idle")},1600);return()=>{clearTimeout(d),clearTimeout(D)}},[h]);const Bt=M.useCallback(()=>{A.current.forEach(d=>clearTimeout(d)),A.current=[]},[]),Nt=M.useCallback(()=>{Bt(),p.current=!1,i(_r),a(_r[0].id),f(!1),g(-1),k(""),S("idle")},[Bt]),E=M.useCallback(d=>{i(D=>D.map(T=>T.id==="LD-1088"?d(T):T))},[]),P=M.useCallback((d,D)=>{p.current&&(g(D),d.type==="createLead"&&(i(T=>T.some(le=>le.id===d.payload.id)?T:[d.payload,...T]),a(d.payload.id)),d.type==="appendMessage"&&E(T=>({...T,lastSeen:"just now",messages:[...T.messages,d.payload]})),d.type==="updateLead"&&E(T=>{const{activityEntry:le,...se}=d.payload;return{...T,...se,activity:le?[{time:mp(),text:le.text},...T.activity]:T.activity}}),d.toast&&k(d.toast))},[E]),R=M.useCallback(()=>{Nt(),Promise.resolve().then(()=>{p.current=!0,t("inbox"),f(!0);let d=200;Zl.forEach((D,T)=>{d+=D.delay;const le=window.setTimeout(()=>{P(D,T),T===Zl.length-1&&(f(!1),p.current=!1)},d);A.current.push(le)})})},[Nt,P]),V=M.useCallback((d,D)=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),D())},[]);return c.createElement("div",{className:"carlet-root"},c.createElement("style",null,gp),c.createElement("div",{className:`carlet-layout ${n?"":"sidebar-collapsed"}`},c.createElement("aside",{className:"panel sidebar side-panel",style:{"--delay":"40ms"}},c.createElement("div",{className:"sidebar-top"},c.createElement("div",{className:"brand"},c.createElement("div",{className:"brand-mark","aria-hidden":"true"},c.createElement(Yf,{size:20,strokeWidth:2.4})),c.createElement("div",{className:"brand-meta"},c.createElement("div",{className:"sidebar-label"},"YEL6AI OS"),c.createElement("div",{className:"sidebar-title"},"Carlet"))),c.createElement("button",{className:"sidebar-collapse-btn",onClick:()=>r(d=>!d),"aria-label":n?"Collapse sidebar":"Expand sidebar",title:n?"Collapse sidebar":"Expand sidebar"},c.createElement(qa,{size:16,className:`sidebar-toggle-icon ${n?"is-open":""}`}))),c.createElement("div",{className:"sidebar-desc"},"Operational control system for lead capture, qualification, sales routing, stock matching, and reactivation."),c.createElement("nav",{className:"nav-grid","aria-label":"Main navigation"},fp.map(d=>c.createElement("button",{key:d.id,onClick:()=>t(d.id),className:`nav-btn ${e===d.id?"nav-btn--active":"nav-btn--inactive"}`,"aria-current":e===d.id?"page":void 0},c.createElement("span",{className:"nav-btn-label"},c.createElement(d.icon,{className:"nav-btn-icon"}),c.createElement("span",{className:"nav-btn-text"},d.label)),c.createElement(qa,{size:16,className:"nav-btn-arrow"}))))),c.createElement("main",{className:"main-shell"},c.createElement("div",{className:"utility-row"},c.createElement("label",{className:"search-shell","aria-label":"Search leads"},c.createElement(ip,{size:16,color:"#bbf7d0"}),c.createElement("input",{type:"text",value:"",readOnly:!0,placeholder:"Search lead, vehicle, branch"})),c.createElement("div",{className:"utility-actions"},c.createElement("button",{className:"icon-btn","aria-label":"Notifications"},c.createElement(Hf,{size:17})),c.createElement("div",{className:"profile-chip"},c.createElement("span",{className:"profile-dot"})," Operations Online"))),c.createElement("div",{className:"header-row"},c.createElement("div",null,c.createElement("div",{className:"header-label"},"YEL6AI · Carlet Workspace"),c.createElement("div",{className:"header-title"},"Lead Command Center"),c.createElement("div",{className:"header-sub"},"Used-car lead operating system for faster response, finance-ready buyers, branch visibility, and zero lead leakage.")),c.createElement("div",{style:{display:"flex",gap:10,flexWrap:"wrap"}},c.createElement("button",{onClick:R,className:"btn-primary",disabled:u},c.createElement(ep,{size:16}),u?"Running…":"Play Live Demo"),c.createElement("button",{onClick:Nt,className:"btn-secondary"},c.createElement(rp,{size:16}),"Reset"))),h&&c.createElement("div",{className:`panel toast ${x==="entering"?"toast--entering":""} ${x==="exiting"?"toast--exiting":""}`,role:"status","aria-live":"polite"},h),e==="executive"&&c.createElement("section",{className:"panel","aria-label":"Executive Summary",style:{"--delay":"70ms"}},c.createElement(Xe,{icon:dc,title:"Executive Summary"}),c.createElement("div",{className:"stat-grid"},[{title:"Finance-Ready Buyers",value:$.length,sub:"ready to push into close",tone:"finance"},{title:"Stock-Matched Enquiries",value:I.length,sub:"inventory aligned in system",tone:"live"},{title:"Follow-Ups Due / Overdue",value:ke.length,sub:"needs attention",tone:"risk"},{title:"Branches with Live Demand",value:Ct,sub:"distribution across operations",tone:"queued"}].map(d=>c.createElement("div",{key:d.title,className:"panel-inner",style:{padding:16}},c.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8}},c.createElement("div",{style:{fontWeight:800,fontSize:14}},d.title),c.createElement(xe,{type:d.tone})),c.createElement("div",{style:{fontSize:34,fontWeight:800,marginTop:12}},d.value),c.createElement("div",{className:"text-muted",style:{marginTop:8,fontSize:13}},d.sub))))),e==="inbox"&&c.createElement("section",{className:"inbox-grid","aria-label":"Lead Inbox"},c.createElement("div",{className:"panel",style:{"--delay":"70ms"}},c.createElement(Xe,{icon:cc,title:"Active Leads"}),l.length===0&&c.createElement(vp,{text:"No active leads"}),l.map(d=>c.createElement("button",{key:d.id,onClick:()=>a(d.id),className:`lead-card ${o===d.id?"lead-card--selected":"lead-card--default"} ${d.id==="LD-1088"&&u?"lead-card--pulse":""}`,"aria-pressed":o===d.id},c.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10}},c.createElement("div",{style:{fontWeight:700}},d.name),c.createElement(xe,{type:d.status})),c.createElement("div",{className:"label-sub",style:{marginTop:6}},d.channel," · ",d.lastSeen),c.createElement("div",{style:{marginTop:8}},d.interest)))),c.createElement("div",{className:"panel",style:{"--delay":"110ms"}},c.createElement("div",{className:"conv-layout"},c.createElement("div",{className:"lead-conversation"},c.createElement("div",{style:{fontWeight:800,marginBottom:12}},"Conversation"),s.messages.map((d,D)=>c.createElement("div",{key:`${s.id}-msg-${D}`,className:`msg-bubble ${d.from==="ai"?"msg-bubble--ai":"msg-bubble--customer"}`},c.createElement("div",{className:"label-upper",style:{marginBottom:6}},d.from==="ai"?"YEL6AI":"Customer"),c.createElement("div",{style:{lineHeight:1.55}},d.text))),u&&s.id==="LD-1088"&&v<Zl.length-1&&c.createElement("div",{className:"msg-typing"},"typing…")),c.createElement("div",{className:"lead-insights"},c.createElement("div",{className:"lead-insight-block"},c.createElement("div",{style:{fontWeight:800,marginBottom:10}},"AI Summary"),c.createElement("div",{className:"text-body"},s.summary)),c.createElement("div",{className:"lead-insight-block"},c.createElement("div",{style:{fontWeight:800,marginBottom:10}},"Timeline"),s.activity.map((d,D)=>c.createElement("div",{key:`${s.id}-act-${D}`,className:"timeline-row"},c.createElement("div",{className:"label-sub"},d.time.replace(/[a-z]-/g,"").replace(/\d+-/g,"")),c.createElement("div",{style:{fontSize:13,lineHeight:1.5}},d.text)))))),c.createElement("div",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"center",marginBottom:16,flexWrap:"wrap"}},c.createElement("div",null,c.createElement("div",{style:{fontSize:24,fontWeight:800}},s.name),c.createElement("div",{className:"label-sub",style:{marginTop:4}},s.id," · ",s.phone," · ",s.source)),c.createElement("div",{style:{display:"flex",gap:8,flexWrap:"wrap"}},c.createElement(xe,{type:s.status}),c.createElement(xe,{type:"finance"},s.financeReadiness),c.createElement(xe,{type:"risk"},s.riskLevel))),c.createElement("div",{className:"lead-facts"},[["Vehicle",s.interest],["Budget",s.budget],["Location",s.location],["Finance",s.finance],["Timeline",s.timeline],["Branch",s.branch],["Stock",s.stockStatus],["Follow-Up",s.followupStatus]].map(([d,D])=>c.createElement("div",{key:d,className:"lead-fact"},c.createElement("div",{className:"lead-fact-label"},d),c.createElement("div",{className:"lead-fact-value"},D))))),c.createElement("div",{className:"panel",style:{"--delay":"150ms"}},c.createElement(Xe,{icon:ap,title:"Sales Action Panel"}),[["Owner",m.owner],["Priority",m.priority],["Recommended Action",m.action],["SLA",m.sla]].map(([d,D])=>c.createElement("div",{key:d,className:"panel-sm",style:{marginBottom:12}},c.createElement("div",{className:"label-upper"},d),c.createElement("div",{style:{marginTop:8,lineHeight:1.5}},D))))),e==="pipeline"&&c.createElement("section",{className:"panel","aria-label":"Pipeline Board",style:{"--delay":"70ms"}},c.createElement(Xe,{icon:pc,title:"Pipeline Board"}),c.createElement("div",{className:"pipeline-head-stats"},c.createElement(xe,{type:"new"},"New ",_.length),c.createElement(xe,{type:"qualifying"},"Qualifying ",L.length),c.createElement(xe,{type:"hot"},"Hot ",y.length),c.createElement(xe,{type:"warm"},"Warm ",C.length),c.createElement(xe,{type:"queued"},"Reactivation ",z.length)),c.createElement("div",{style:{overflowX:"auto"}},c.createElement("table",{className:"records-table"},c.createElement("thead",null,c.createElement("tr",null,["Stage","Lead","Vehicle","Channel","Score","Budget","Location","Owner","Next Action"].map(d=>c.createElement("th",{key:d},d)))),c.createElement("tbody",null,rt.length===0&&c.createElement("tr",null,c.createElement("td",{colSpan:9,style:{textAlign:"center",padding:40,color:"#475569",fontStyle:"italic"}},"No pipeline leads")),rt.map(d=>c.createElement("tr",{key:d.id,className:d.id==="LD-1088"&&u?"pipeline-row-live":"",onClick:()=>{a(d.id),t("inbox")},onKeyDown:D=>V(D,()=>{a(d.id),t("inbox")}),tabIndex:0,role:"button","aria-label":`View lead ${d.name}`},c.createElement("td",null,c.createElement(xe,{type:d.status==="cold"?"queued":d.status},d.status==="cold"?"reactivation":d.status)),c.createElement("td",null,d.name),c.createElement("td",{className:"wrap"},d.interest),c.createElement("td",null,d.channel),c.createElement("td",null,d.score),c.createElement("td",null,d.budget),c.createElement("td",null,d.location),c.createElement("td",null,d.assigned),c.createElement("td",{className:"wrap"},d.nextAction))))))),e==="records"&&c.createElement("section",{className:"panel","aria-label":"Lead Records",style:{"--delay":"70ms"}},c.createElement(Xe,{icon:sc,title:"Master Lead Records"}),c.createElement("div",{style:{overflowX:"auto"}},c.createElement("table",{className:"records-table"},c.createElement("thead",null,c.createElement("tr",null,["Lead ID","Name","Channel","Vehicle","Budget","Location","Finance","Timeline","Score","Status","Owner","Branch","Stock","Follow-Up","Next Action"].map(d=>c.createElement("th",{key:d},d)))),c.createElement("tbody",null,l.length===0&&c.createElement("tr",null,c.createElement("td",{colSpan:15,style:{textAlign:"center",padding:40,color:"#475569",fontStyle:"italic"}},"No leads found")),l.map(d=>c.createElement("tr",{key:d.id,onClick:()=>{a(d.id),t("inbox")},onKeyDown:D=>V(D,()=>{a(d.id),t("inbox")}),tabIndex:0,role:"button","aria-label":`View lead ${d.name}`},c.createElement("td",null,d.id),c.createElement("td",null,d.name),c.createElement("td",null,d.channel),c.createElement("td",{className:"wrap"},d.interest),c.createElement("td",null,d.budget),c.createElement("td",null,d.location),c.createElement("td",null,d.finance),c.createElement("td",null,d.timeline),c.createElement("td",null,d.score),c.createElement("td",null,c.createElement(xe,{type:d.status})),c.createElement("td",null,d.assigned),c.createElement("td",null,d.branch),c.createElement("td",null,d.stockStatus),c.createElement("td",null,d.followupStatus),c.createElement("td",{className:"wrap"},d.nextAction))))))),e==="manager"&&c.createElement("section",{className:"manager-grid","aria-label":"Manager View"},c.createElement("div",{className:"panel",style:{"--delay":"70ms"}},c.createElement(Xe,{icon:Xf,title:"Manager Overview"}),c.createElement("div",{className:"stat-grid",style:{marginBottom:14}},[["Instagram",`${ar.Instagram||0} leads`,"From DM campaigns"],["WhatsApp",`${ar.WhatsApp||0} leads`,"Inbound enquiries"],["Finance-Ready",String($.length),"ready for faster close"],["Sales Load",`${l.length} total`,`Across ${vn.filter(d=>d.active>0).length} reps`]].map(([d,D,T])=>c.createElement("div",{key:d,className:"panel-sm"},c.createElement("div",{className:"label-sub"},d),c.createElement("div",{style:{fontSize:28,fontWeight:800,marginTop:8}},D),c.createElement("div",{className:"text-muted",style:{marginTop:6,fontSize:13}},T))))),c.createElement("div",{className:"panel",style:{"--delay":"110ms"}},c.createElement(Xe,{icon:mc,title:"Team Queue"}),vn.map(d=>c.createElement("div",{key:d.name,className:"panel-sm",style:{marginBottom:10}},c.createElement("div",{style:{fontWeight:700}},d.name),c.createElement("div",{className:"label-sub",style:{marginTop:6}},d.active," active"),c.createElement("div",{style:{marginTop:6,fontSize:13}},d.hot," hot lead",d.hot!==1?"s":""))))),e==="reactivation"&&c.createElement("section",{className:"react-grid","aria-label":"Reactivation Queue"},c.createElement("div",{className:"panel",style:{"--delay":"70ms"}},c.createElement(Xe,{icon:fc,title:"Reactivation Queue"}),pp.map((d,D)=>c.createElement("div",{key:`react-${D}`,className:"panel-sm",style:{marginBottom:10}},c.createElement("div",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"center"}},c.createElement("div",{style:{fontWeight:700}},d.name),c.createElement(xe,{type:"queued"},d.status)),c.createElement("div",{className:"label-sub",style:{marginTop:6}},d.vehicle),c.createElement("div",{style:{marginTop:8,fontSize:14}},d.stage," · ",d.sendAt)))),c.createElement("div",{className:"panel",style:{"--delay":"110ms"}},c.createElement(Xe,{icon:sp,title:"Outgoing Message Preview"}),c.createElement("div",{className:"panel-inner",style:{lineHeight:1.8}},"Hi Fahad — sharing this because you had asked about Baleno earlier. We currently have a few matching options and can also help if finance support is needed. Are you still looking, or should I share the best available choices for your budget?"))),c.createElement("div",{className:"panel-inner",style:{marginTop:16}},c.createElement("div",{style:{fontWeight:800,marginBottom:8}},"Smoke checks"),c.createElement("div",{className:"smoke-item"},"• Canvas preview loads without syntax errors"),c.createElement("div",{className:"smoke-item"},"• Play Live Demo creates LD-1088 and updates it through qualification"),c.createElement("div",{className:"smoke-item"},"• Navigation switches between all tabs"),c.createElement("div",{className:"smoke-item"},"• Clicking a row in Lead Records opens that lead in Lead Inbox")))))}Jl.createRoot(document.getElementById("root")).render(c.createElement(c.StrictMode,null,c.createElement(yp,null)));

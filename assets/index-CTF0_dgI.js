var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(e&&(t=e(e=0)),t),s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function ee(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function te(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ae(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+ie(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(re,`$&/`)+`/`),ae(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=te(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+ie(s,l);c+=ae(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+ie(s,l++),c+=ae(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return ae(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},le={transition:null},ue={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:le,ReactCurrentOwner:C};function de(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,e.act=de,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=ee,e.createFactory=function(e){var t=ee.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=le.transition;le.transition={};try{e()}finally{le.transition=t}},e.unstable_act=de,e.useCallback=function(e,t){return ce.current.useCallback(e,t)},e.useContext=function(e){return ce.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return ce.current.useDeferredValue(e)},e.useEffect=function(e,t){return ce.current.useEffect(e,t)},e.useId=function(){return ce.current.useId()},e.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return ce.current.useMemo(e,t)},e.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)},e.useRef=function(e){return ce.current.useRef(e)},e.useState=function(e){return ce.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return ce.current.useTransition()},e.version=`18.3.1`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m)if(n(c)!==null)m=!0,oe(x);else{var t=n(l);t!==null&&se(b,t.startTime-e)}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&se(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,ee=5,te=-1;function T(){return!(e.unstable_now()-te<ee)}function ne(){if(C!==null){var t=e.unstable_now();te=t;var n=!0;try{n=C(!0,t)}finally{n?re():(S=!1,C=null)}}else S=!1}var re;if(typeof v==`function`)re=function(){v(ne)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=ne,re=function(){ae.postMessage(null)}}else re=function(){g(ne,0)};function oe(e){C=e,S||(S=!0,re())}function se(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,oe(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ee=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,se(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,oe(x))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p(),n=h();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,d={},f={};function m(e){return l.call(f,e)?!0:l.call(d,e)?!1:u.test(e)?f[e]=!0:(d[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?m(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),ee=Symbol.for(`react.portal`),te=Symbol.for(`react.fragment`),T=Symbol.for(`react.strict_mode`),ne=Symbol.for(`react.profiler`),re=Symbol.for(`react.provider`),ie=Symbol.for(`react.context`),ae=Symbol.for(`react.forward_ref`),oe=Symbol.for(`react.suspense`),se=Symbol.for(`react.suspense_list`),ce=Symbol.for(`react.memo`),le=Symbol.for(`react.lazy`),ue=Symbol.for(`react.offscreen`),de=Symbol.iterator;function fe(e){return typeof e!=`object`||!e?null:(e=de&&e[de]||e[`@@iterator`],typeof e==`function`?e:null)}var E=Object.assign,pe;function me(e){if(pe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);pe=t&&t[1]||``}return`
`+pe+e}var he=!1;function ge(e,t){if(!e||he)return``;he=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{he=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?me(e):``}function _e(e){switch(e.tag){case 5:return me(e.type);case 16:return me(`Lazy`);case 13:return me(`Suspense`);case 19:return me(`SuspenseList`);case 0:case 2:case 15:return e=ge(e.type,!1),e;case 11:return e=ge(e.type.render,!1),e;case 1:return e=ge(e.type,!0),e;default:return``}}function ve(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case te:return`Fragment`;case ee:return`Portal`;case ne:return`Profiler`;case T:return`StrictMode`;case oe:return`Suspense`;case se:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case ie:return(e.displayName||`Context`)+`.Consumer`;case re:return(e._context.displayName||`Context`)+`.Provider`;case ae:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ce:return t=e.displayName||null,t===null?ve(e.type)||`Memo`:t;case le:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}function ye(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return ve(t);case 8:return t===T?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function be(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function xe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Se(e){var t=xe(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ce(e){e._valueTracker||=Se(e)}function we(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=xe(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Te(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Ee(e,t){var n=t.checked;return E({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function De(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=be(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function Oe(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function ke(e,t){Oe(e,t);var n=be(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?je(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&je(e,t.type,be(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ae(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function je(e,t,n){(t!==`number`||Te(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var Me=Array.isArray;function Ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+be(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Pe(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return E({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function Fe(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(Me(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:be(n)}}function Ie(e,t){var n=be(t.value),r=be(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Le(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Re(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function ze(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Re(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Be,Ve=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(Be||=document.createElement(`div`),Be.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Be.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function He(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ue={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},We=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Ue).forEach(function(e){We.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ue[t]=Ue[e]})});function Ge(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Ue.hasOwnProperty(e)&&Ue[e]?(``+t).trim():t+`px`}function Ke(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Ge(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var qe=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(e,t){if(t){if(qe[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Ye(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Xe=null;function Ze(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qe=null,$e=null,et=null;function tt(e){if(e=Ki(e)){if(typeof Qe!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Ji(t),Qe(e.stateNode,e.type,t))}}function nt(e){$e?et?et.push(e):et=[e]:$e=e}function D(){if($e){var e=$e,t=et;if(et=$e=null,tt(e),t)for(e=0;e<t.length;e++)tt(t[e])}}function rt(e,t){return e(t)}function it(){}var at=!1;function ot(e,t,n){if(at)return e(t,n);at=!0;try{return rt(e,t,n)}finally{at=!1,($e!==null||et!==null)&&(it(),D())}}function st(e,t){var n=e.stateNode;if(n===null)return null;var i=Ji(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var ct=!1;if(c)try{var lt={};Object.defineProperty(lt,"passive",{get:function(){ct=!0}}),window.addEventListener(`test`,lt,lt),window.removeEventListener(`test`,lt,lt)}catch{ct=!1}function ut(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var dt=!1,ft=null,pt=!1,mt=null,ht={onError:function(e){dt=!0,ft=e}};function gt(e,t,n,r,i,a,o,s,c){dt=!1,ft=null,ut.apply(ht,arguments)}function _t(e,t,n,i,a,o,s,c,l){if(gt.apply(this,arguments),dt){if(dt){var u=ft;dt=!1,ft=null}else throw Error(r(198));pt||(pt=!0,mt=u)}}function vt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bt(e){if(vt(e)!==e)throw Error(r(188))}function xt(e){var t=e.alternate;if(!t){if(t=vt(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return bt(a),e;if(o===i)return bt(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function St(e){return e=xt(e),e===null?null:Ct(e)}function Ct(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ct(e);if(t!==null)return t;e=e.sibling}return null}var wt=n.unstable_scheduleCallback,Tt=n.unstable_cancelCallback,Et=n.unstable_shouldYield,Dt=n.unstable_requestPaint,Ot=n.unstable_now,kt=n.unstable_getCurrentPriorityLevel,At=n.unstable_ImmediatePriority,jt=n.unstable_UserBlockingPriority,Mt=n.unstable_NormalPriority,O=n.unstable_LowPriority,k=n.unstable_IdlePriority,Nt=null,A=null;function Pt(e){if(A&&typeof A.onCommitFiberRoot==`function`)try{A.onCommitFiberRoot(Nt,e,void 0,(e.current.flags&128)==128)}catch{}}var j=Math.clz32?Math.clz32:Lt,Ft=Math.log,It=Math.LN2;function Lt(e){return e>>>=0,e===0?32:31-(Ft(e)/It|0)|0}var Rt=64,zt=4194304;function Bt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Bt(a))):r=Bt(s)}else o=n&~i,o===0?a!==0&&(r=Bt(a)):r=Bt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-j(t),i=1<<n,r|=e[n],t&=~i;return r}function Ht(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ut(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-j(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ht(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Wt(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Gt(){var e=Rt;return Rt<<=1,!(Rt&4194240)&&(Rt=64),e}function Kt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-j(t),e[t]=n}function Jt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-j(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-j(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function Xt(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zt,Qt,N,$t,en,P=!1,tn=[],nn=null,rn=null,an=null,on=new Map,sn=new Map,cn=[],ln=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function un(e,t){switch(e){case`focusin`:case`focusout`:nn=null;break;case`dragenter`:case`dragleave`:rn=null;break;case`mouseover`:case`mouseout`:an=null;break;case`pointerover`:case`pointerout`:on.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:sn.delete(t.pointerId)}}function dn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ki(t),t!==null&&Qt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function fn(e,t,n,r,i){switch(t){case`focusin`:return nn=dn(nn,e,t,n,r,i),!0;case`dragenter`:return rn=dn(rn,e,t,n,r,i),!0;case`mouseover`:return an=dn(an,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return on.set(a,dn(on.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,sn.set(a,dn(sn.get(a)||null,e,t,n,r,i)),!0}return!1}function pn(e){var t=Gi(e.target);if(t!==null){var n=vt(t);if(n!==null){if(t=n.tag,t===13){if(t=yt(n),t!==null){e.blockedOn=t,en(e.priority,function(){N(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xe=r,n.target.dispatchEvent(r),Xe=null}else return t=Ki(n),t!==null&&Qt(t),e.blockedOn=n,!1;t.shift()}return!0}function hn(e,t,n){mn(e)&&n.delete(t)}function gn(){P=!1,nn!==null&&mn(nn)&&(nn=null),rn!==null&&mn(rn)&&(rn=null),an!==null&&mn(an)&&(an=null),on.forEach(hn),sn.forEach(hn)}function _n(e,t){e.blockedOn===t&&(e.blockedOn=null,P||(P=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,gn)))}function F(e){function t(t){return _n(t,e)}if(0<tn.length){_n(tn[0],e);for(var n=1;n<tn.length;n++){var r=tn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&_n(nn,e),rn!==null&&_n(rn,e),an!==null&&_n(an,e),on.forEach(t),sn.forEach(t),n=0;n<cn.length;n++)r=cn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<cn.length&&(n=cn[0],n.blockedOn===null);)pn(n),n.blockedOn===null&&cn.shift()}var vn=C.ReactCurrentBatchConfig,yn=!0;function bn(e,t,n,r){var i=M,a=vn.transition;vn.transition=null;try{M=1,Sn(e,t,n,r)}finally{M=i,vn.transition=a}}function xn(e,t,n,r){var i=M,a=vn.transition;vn.transition=null;try{M=4,Sn(e,t,n,r)}finally{M=i,vn.transition=a}}function Sn(e,t,n,r){if(yn){var i=wn(e,t,n,r);if(i===null)_i(e,t,r,Cn,n),un(e,r);else if(fn(i,e,t,n,r))r.stopPropagation();else if(un(e,r),t&4&&-1<ln.indexOf(e)){for(;i!==null;){var a=Ki(i);if(a!==null&&Zt(a),a=wn(e,t,n,r),a===null&&_i(e,t,r,Cn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else _i(e,t,r,null,n)}}var Cn=null;function wn(e,t,n,r){if(Cn=null,e=Ze(r),e=Gi(e),e!==null)if(t=vt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Cn=e,null}function Tn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(kt()){case At:return 1;case jt:return 4;case Mt:case O:return 16;case k:return 536870912;default:return 16}default:return 16}}var En=null,Dn=null,On=null;function kn(){if(On)return On;var e,t=Dn,n=t.length,r,i=`value`in En?En.value:En.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return On=i.slice(e,1<r?1-r:void 0)}function An(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jn(){return!0}function Mn(){return!1}function Nn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?jn:Mn,this.isPropagationStopped=Mn,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=jn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=jn)},persist:function(){},isPersistent:jn}),t}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fn=Nn(Pn),In=E({},Pn,{view:0,detail:0}),Ln=Nn(In),Rn,zn,Bn,Vn=E({},In,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Bn&&(Bn&&e.type===`mousemove`?(Rn=e.screenX-Bn.screenX,zn=e.screenY-Bn.screenY):zn=Rn=0,Bn=e),Rn)},movementY:function(e){return`movementY`in e?e.movementY:zn}}),Hn=Nn(Vn),Un=Nn(E({},Vn,{dataTransfer:0})),Wn=Nn(E({},In,{relatedTarget:0})),Gn=Nn(E({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0})),Kn=Nn(E({},Pn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),qn=Nn(E({},Pn,{data:0})),Jn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Yn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Xn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Zn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xn[e])?!!t[e]:!1}function Qn(){return Zn}var $n=Nn(E({},In,{key:function(e){if(e.key){var t=Jn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=An(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Yn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qn,charCode:function(e){return e.type===`keypress`?An(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?An(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),er=Nn(E({},Vn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),tr=Nn(E({},In,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qn})),nr=Nn(E({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0})),rr=Nn(E({},Vn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),ir=[9,13,27,32],ar=c&&`CompositionEvent`in window,or=null;c&&`documentMode`in document&&(or=document.documentMode);var sr=c&&`TextEvent`in window&&!or,cr=c&&(!ar||or&&8<or&&11>=or),lr=` `,ur=!1;function dr(e,t){switch(e){case`keyup`:return ir.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function fr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var pr=!1;function I(e,t){switch(e){case`compositionend`:return fr(t);case`keypress`:return t.which===32?(ur=!0,lr):null;case`textInput`:return e=t.data,e===lr&&ur?null:e;default:return null}}function mr(e,t){if(pr)return e===`compositionend`||!ar&&dr(e,t)?(e=kn(),On=Dn=En=null,pr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return cr&&t.locale!==`ko`?null:t.data;default:return null}}var hr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!hr[e.type]:t===`textarea`}function _r(e,t,n,r){nt(r),t=yi(t,`onChange`),0<t.length&&(n=new Fn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var vr=null,yr=null;function br(e){di(e,0)}function xr(e){if(we(qi(e)))return e}function Sr(e,t){if(e===`change`)return t}var Cr=!1;if(c){var wr;if(c){var Tr=`oninput`in document;if(!Tr){var Er=document.createElement(`div`);Er.setAttribute(`oninput`,`return;`),Tr=typeof Er.oninput==`function`}wr=Tr}else wr=!1;Cr=wr&&(!document.documentMode||9<document.documentMode)}function Dr(){vr&&(vr.detachEvent(`onpropertychange`,Or),yr=vr=null)}function Or(e){if(e.propertyName===`value`&&xr(yr)){var t=[];_r(t,yr,e,Ze(e)),ot(br,t)}}function kr(e,t,n){e===`focusin`?(Dr(),vr=t,yr=n,vr.attachEvent(`onpropertychange`,Or)):e===`focusout`&&Dr()}function Ar(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return xr(yr)}function jr(e,t){if(e===`click`)return xr(t)}function Mr(e,t){if(e===`input`||e===`change`)return xr(t)}function Nr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Pr=typeof Object.is==`function`?Object.is:Nr;function Fr(e,t){if(Pr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Pr(e[i],t[i]))return!1}return!0}function Ir(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lr(e,t){var n=Ir(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ir(n)}}function Rr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zr(){for(var e=window,t=Te();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Te(e.document)}return t}function Br(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Vr(e){var t=zr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rr(n.ownerDocument.documentElement,n)){if(r!==null&&Br(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Lr(n,a);var o=Lr(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hr=c&&`documentMode`in document&&11>=document.documentMode,Ur=null,Wr=null,Gr=null,Kr=!1;function qr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kr||Ur==null||Ur!==Te(r)||(r=Ur,`selectionStart`in r&&Br(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gr&&Fr(Gr,r)||(Gr=r,r=yi(Wr,`onSelect`),0<r.length&&(t=new Fn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ur)))}function Jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Yr={animationend:Jr(`Animation`,`AnimationEnd`),animationiteration:Jr(`Animation`,`AnimationIteration`),animationstart:Jr(`Animation`,`AnimationStart`),transitionend:Jr(`Transition`,`TransitionEnd`)},Xr={},Zr={};c&&(Zr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),`TransitionEvent`in window||delete Yr.transitionend.transition);function Qr(e){if(Xr[e])return Xr[e];if(!Yr[e])return e;var t=Yr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zr)return Xr[e]=t[n];return e}var $r=Qr(`animationend`),ei=Qr(`animationiteration`),ti=Qr(`animationstart`),ni=Qr(`transitionend`),ri=new Map,ii=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function ai(e,t){ri.set(e,t),o(t,[e])}for(var oi=0;oi<ii.length;oi++){var si=ii[oi];ai(si.toLowerCase(),`on`+(si[0].toUpperCase()+si.slice(1)))}ai($r,`onAnimationEnd`),ai(ei,`onAnimationIteration`),ai(ti,`onAnimationStart`),ai(`dblclick`,`onDoubleClick`),ai(`focusin`,`onFocus`),ai(`focusout`,`onBlur`),ai(ni,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var ci=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),li=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(ci));function ui(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,_t(r,t,void 0,e),e.currentTarget=null}function di(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;ui(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;ui(i,s,l),a=c}}}if(pt)throw e=mt,pt=!1,mt=null,e}function fi(e,t){var n=t[Hi];n===void 0&&(n=t[Hi]=new Set);var r=e+`__bubble`;n.has(r)||(gi(t,e,2,!1),n.add(r))}function pi(e,t,n){var r=0;t&&(r|=4),gi(n,e,r,t)}var mi=`_reactListening`+Math.random().toString(36).slice(2);function hi(e){if(!e[mi]){e[mi]=!0,i.forEach(function(t){t!==`selectionchange`&&(li.has(t)||pi(t,!1,e),pi(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mi]||(t[mi]=!0,pi(`selectionchange`,!1,t))}}function gi(e,t,n,r){switch(Tn(t)){case 1:var i=bn;break;case 4:i=xn;break;default:i=Sn}n=i.bind(null,t,n,e),i=void 0,!ct||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function _i(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Gi(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}ot(function(){var r=a,i=Ze(n),o=[];a:{var s=ri.get(e);if(s!==void 0){var c=Fn,l=e;switch(e){case`keypress`:if(An(n)===0)break a;case`keydown`:case`keyup`:c=$n;break;case`focusin`:l=`focus`,c=Wn;break;case`focusout`:l=`blur`,c=Wn;break;case`beforeblur`:case`afterblur`:c=Wn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Hn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Un;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=tr;break;case $r:case ei:case ti:c=Gn;break;case ni:c=nr;break;case`scroll`:c=Ln;break;case`wheel`:c=rr;break;case`copy`:case`cut`:case`paste`:c=Kn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=er}var u=(t&4)!=0,d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=st(p,f),h!=null&&u.push(vi(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Xe&&(l=n.relatedTarget||n.fromElement)&&(Gi(l)||l[Vi]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Gi(l):null,l!==null&&(d=vt(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Hn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=er,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:qi(c),m=l==null?s:qi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Gi(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=bi(m))p++;for(m=0,h=f;h;h=bi(h))m++;for(;0<p-m;)u=bi(u),p--;for(;0<m-p;)f=bi(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=bi(u),f=bi(f)}u=null}else u=null;c!==null&&xi(o,s,c,u,!1),l!==null&&d!==null&&xi(o,d,l,u,!0)}}a:{if(s=r?qi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=Sr;else if(gr(s))if(Cr)g=Mr;else{g=Ar;var _=kr}else (c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=jr);if(g&&=g(e,r)){_r(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&je(s,`number`,s.value)}switch(_=r?qi(r):window,e){case`focusin`:(gr(_)||_.contentEditable===`true`)&&(Ur=_,Wr=r,Gr=null);break;case`focusout`:Gr=Wr=Ur=null;break;case`mousedown`:Kr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Kr=!1,qr(o,n,i);break;case`selectionchange`:if(Hr)break;case`keydown`:case`keyup`:qr(o,n,i)}var v;if(ar)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else pr?dr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(cr&&n.locale!==`ko`&&(pr||y!==`onCompositionStart`?y===`onCompositionEnd`&&pr&&(v=kn()):(En=i,Dn=`value`in En?En.value:En.textContent,pr=!0)),_=yi(r,y),0<_.length&&(y=new qn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=fr(n),v!==null&&(y.data=v)))),(v=sr?I(e,n):mr(e,n))&&(r=yi(r,`onBeforeInput`),0<r.length&&(i=new qn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}di(o,t)})}function vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=st(e,n),a!=null&&r.unshift(vi(e,a,i)),a=st(e,t),a!=null&&r.push(vi(e,a,i))),e=e.return}return r}function bi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xi(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=st(n,a),c!=null&&o.unshift(vi(n,c,s))):i||(c=st(n,a),c!=null&&o.push(vi(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Si=/\r\n?/g,Ci=/\u0000|\uFFFD/g;function wi(e){return(typeof e==`string`?e:``+e).replace(Si,`
`).replace(Ci,``)}function Ti(e,t,n){if(t=wi(t),wi(e)!==t&&n)throw Error(r(425))}function Ei(){}var Di=null,Oi=null;function ki(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ai=typeof setTimeout==`function`?setTimeout:void 0,ji=typeof clearTimeout==`function`?clearTimeout:void 0,Mi=typeof Promise==`function`?Promise:void 0,Ni=typeof queueMicrotask==`function`?queueMicrotask:Mi===void 0?Ai:function(e){return Mi.resolve(null).then(e).catch(Pi)};function Pi(e){setTimeout(function(){throw e})}function Fi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),F(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++;n=i}while(n);F(t)}function Ii(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Li(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Ri=Math.random().toString(36).slice(2),zi=`__reactFiber$`+Ri,Bi=`__reactProps$`+Ri,Vi=`__reactContainer$`+Ri,Hi=`__reactEvents$`+Ri,Ui=`__reactListeners$`+Ri,Wi=`__reactHandles$`+Ri;function Gi(e){var t=e[zi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vi]||n[zi]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Li(e);e!==null;){if(n=e[zi])return n;e=Li(e)}return t}e=n,n=e.parentNode}return null}function Ki(e){return e=e[zi]||e[Vi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Ji(e){return e[Bi]||null}var Yi=[],Xi=-1;function Zi(e){return{current:e}}function L(e){0>Xi||(e.current=Yi[Xi],Yi[Xi]=null,Xi--)}function R(e,t){Xi++,Yi[Xi]=e.current,e.current=t}var Qi={},$i=Zi(Qi),z=Zi(!1),ea=Qi;function ta(e,t){var n=e.type.contextTypes;if(!n)return Qi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function B(e){return e=e.childContextTypes,e!=null}function na(){L(z),L($i)}function ra(e,t,n){if($i.current!==Qi)throw Error(r(168));R($i,t),R(z,n)}function ia(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,ye(e)||`Unknown`,a));return E({},n,i)}function aa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qi,ea=$i.current,R($i,e),R(z,z.current),!0}function oa(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=ia(e,t,ea),i.__reactInternalMemoizedMergedChildContext=e,L(z),L($i),R($i,e)):L(z),R(z,n)}var sa=null,ca=!1,la=!1;function ua(e){sa===null?sa=[e]:sa.push(e)}function da(e){ca=!0,ua(e)}function fa(){if(!la&&sa!==null){la=!0;var e=0,t=M;try{var n=sa;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}sa=null,ca=!1}catch(t){throw sa!==null&&(sa=sa.slice(e+1)),wt(At,fa),t}finally{M=t,la=!1}}return null}var pa=[],ma=0,ha=null,ga=0,_a=[],va=0,ya=null,ba=1,xa=``;function Sa(e,t){pa[ma++]=ga,pa[ma++]=ha,ha=e,ga=t}function Ca(e,t,n){_a[va++]=ba,_a[va++]=xa,_a[va++]=ya,ya=e;var r=ba;e=xa;var i=32-j(r)-1;r&=~(1<<i),n+=1;var a=32-j(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ba=1<<32-j(t)+i|n<<i|r,xa=a+e}else ba=1<<a|n<<i|r,xa=e}function wa(e){e.return!==null&&(Sa(e,1),Ca(e,1,0))}function Ta(e){for(;e===ha;)ha=pa[--ma],pa[ma]=null,ga=pa[--ma],pa[ma]=null;for(;e===ya;)ya=_a[--va],_a[va]=null,xa=_a[--va],_a[va]=null,ba=_a[--va],_a[va]=null}var Ea=null,Da=null,V=!1,H=null;function Oa(e,t){var n=Xl(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ka(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t===null?!1:(e.stateNode=t,Ea=e,Da=Ii(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t===null?!1:(e.stateNode=t,Ea=e,Da=null,!0);case 13:return t=t.nodeType===8?t:null,t===null?!1:(n=ya===null?null:{id:ba,overflow:xa},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xl(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ea=e,Da=null,!0);default:return!1}}function Aa(e){return(e.mode&1)!=0&&(e.flags&128)==0}function ja(e){if(V){var t=Da;if(t){var n=t;if(!ka(e,t)){if(Aa(e))throw Error(r(418));t=Ii(n.nextSibling);var i=Ea;t&&ka(e,t)?Oa(i,n):(e.flags=e.flags&-4097|2,V=!1,Ea=e)}}else{if(Aa(e))throw Error(r(418));e.flags=e.flags&-4097|2,V=!1,Ea=e}}}function Ma(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ea=e}function Na(e){if(e!==Ea)return!1;if(!V)return Ma(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!ki(e.type,e.memoizedProps)),t&&=Da){if(Aa(e))throw Pa(),Error(r(418));for(;t;)Oa(e,t),t=Ii(t.nextSibling)}if(Ma(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){Da=Ii(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}Da=null}}else Da=Ea?Ii(e.stateNode.nextSibling):null;return!0}function Pa(){for(var e=Da;e;)e=Ii(e.nextSibling)}function Fa(){Da=Ea=null,V=!1}function Ia(e){H===null?H=[e]:H.push(e)}var La=C.ReactCurrentBatchConfig;function Ra(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function za(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function Ba(e){var t=e._init;return t(e._payload)}function Va(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=$l(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ru(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===te?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===le&&Ba(i)===t.type)?(r=a(t,n.props),r.ref=Ra(e,t,n),r.return=e,r):(r=eu(n.type,n.key,n.props,null,e.mode,r),r.ref=Ra(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=iu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=tu(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=ru(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=eu(t.type,t.key,t.props,null,e.mode,n),n.ref=Ra(e,null,t),n.return=e,n;case ee:return t=iu(t,e.mode,n),t.return=e,t;case le:var r=t._init;return f(e,r(t._payload),n)}if(Me(t)||fe(t))return t=tu(t,e.mode,n,null),t.return=e,t;za(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case ee:return n.key===i?u(e,t,n,r):null;case le:return i=n._init,p(e,t,i(n._payload),r)}if(Me(n)||fe(n))return i===null?d(e,t,n,r,null):null;za(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case ee:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case le:var a=r._init;return m(e,t,n,a(r._payload),i)}if(Me(r)||fe(r))return e=e.get(n)||null,d(t,e,r,i,null);za(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),V&&Sa(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return V&&Sa(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),V&&Sa(r,h),l}function g(a,s,c,l){var u=fe(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),V&&Sa(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return V&&Sa(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),V&&Sa(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===te&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===te){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===le&&Ba(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=Ra(e,l,i),r.return=e,e=r;break a}n(e,l);break}else t(e,l);l=l.sibling}i.type===te?(r=tu(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=eu(i.type,i.key,i.props,null,e.mode,o),o.ref=Ra(e,r,i),o.return=e,e=o)}return s(e);case ee:a:{for(l=i.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}else{n(e,r);break}else t(e,r);r=r.sibling}r=iu(i,e.mode,o),r.return=e,e=r}return s(e);case le:return l=i._init,_(e,r,l(i._payload),o)}if(Me(i))return h(e,r,i,o);if(fe(i))return g(e,r,i,o);za(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=ru(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Ha=Va(!0),Ua=Va(!1),Wa=Zi(null),Ga=null,Ka=null,qa=null;function Ja(){qa=Ka=Ga=null}function Ya(e){var t=Wa.current;L(Wa),e._currentValue=t}function Xa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Za(e,t){Ga=e,qa=Ka=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ls=!0),e.firstContext=null)}function Qa(e){var t=e._currentValue;if(qa!==e)if(e={context:e,memoizedValue:t,next:null},Ka===null){if(Ga===null)throw Error(r(308));Ka=e,Ga.dependencies={lanes:0,firstContext:e}}else Ka=Ka.next=e;return t}var $a=null;function eo(e){$a===null?$a=[e]:$a.push(e)}function to(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,eo(t)):(n.next=i.next,i.next=n),t.interleaved=n,no(e,r)}function no(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ro=!1;function io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ao(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function oo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function so(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,no(e,n)}return i=r.interleaved,i===null?(t.next=t,eo(r)):(t.next=i.next,i.next=t),r.interleaved=t,no(e,n)}function co(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yt(e,n)}}function lo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function uo(e,t,n,r){var i=e.updateQueue;ro=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=E({},d,f);break a;case 2:ro=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Qc|=o,e.lanes=o,e.memoizedState=d}}function fo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var U={},W=Zi(U),po=Zi(U),mo=Zi(U);function ho(e){if(e===U)throw Error(r(174));return e}function go(e,t){switch(R(mo,t),R(po,e),R(W,U),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ze(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ze(t,e)}L(W),R(W,t)}function _o(){L(W),L(po),L(mo)}function vo(e){ho(mo.current);var t=ho(W.current),n=ze(t,e.type);t!==n&&(R(po,e),R(W,n))}function yo(e){po.current===e&&(L(W),L(po))}var G=Zi(0);function bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xo=[];function So(){for(var e=0;e<xo.length;e++)xo[e]._workInProgressVersionPrimary=null;xo.length=0}var Co=C.ReactCurrentDispatcher,wo=C.ReactCurrentBatchConfig,To=0,K=null,Eo=null,Do=null,Oo=!1,ko=!1,Ao=0,jo=0;function Mo(){throw Error(r(321))}function No(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pr(e[n],t[n]))return!1;return!0}function Po(e,t,n,i,a,o){if(To=o,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Co.current=e===null||e.memoizedState===null?_s:vs,e=n(i,a),ko){o=0;do{if(ko=!1,Ao=0,25<=o)throw Error(r(301));o+=1,Do=Eo=null,t.updateQueue=null,Co.current=ys,e=n(i,a)}while(ko)}if(Co.current=gs,t=Eo!==null&&Eo.next!==null,To=0,Do=Eo=K=null,Oo=!1,t)throw Error(r(300));return e}function Fo(){var e=Ao!==0;return Ao=0,e}function Io(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Do===null?K.memoizedState=Do=e:Do=Do.next=e,Do}function Lo(){if(Eo===null){var e=K.alternate;e=e===null?null:e.memoizedState}else e=Eo.next;var t=Do===null?K.memoizedState:Do.next;if(t!==null)Do=t,Eo=e;else{if(e===null)throw Error(r(310));Eo=e,e={memoizedState:Eo.memoizedState,baseState:Eo.baseState,baseQueue:Eo.baseQueue,queue:Eo.queue,next:null},Do===null?K.memoizedState=Do=e:Do=Do.next=e}return Do}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){var t=Lo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=Eo,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((To&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,K.lanes|=d,Qc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Pr(i,t.memoizedState)||(Ls=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,K.lanes|=o,Qc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bo(e){var t=Lo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Pr(o,t.memoizedState)||(Ls=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Vo(){}function Ho(e,t){var n=K,i=Lo(),a=t(),o=!Pr(i.memoizedState,a);if(o&&(i.memoizedState=a,Ls=!0),i=i.queue,es(Go.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||Do!==null&&Do.memoizedState.tag&1){if(n.flags|=2048,Yo(9,Wo.bind(null,n,i,a,t),void 0,null),Gc===null)throw Error(r(349));To&30||Uo(n,t,a)}return a}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pr(e,n)}catch{return!0}}function qo(e){var t=no(e,1);t!==null&&vl(t,e,1,-1)}function Jo(e){var t=Io();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t.queue=e,e=e.dispatch=fs.bind(null,K,e),[t.memoizedState,e]}function Yo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Xo(){return Lo().memoizedState}function Zo(e,t,n,r){var i=Io();K.flags|=e,i.memoizedState=Yo(1|t,n,void 0,r===void 0?null:r)}function Qo(e,t,n,r){var i=Lo();r=r===void 0?null:r;var a=void 0;if(Eo!==null){var o=Eo.memoizedState;if(a=o.destroy,r!==null&&No(r,o.deps)){i.memoizedState=Yo(t,n,a,r);return}}K.flags|=e,i.memoizedState=Yo(1|t,n,a,r)}function $o(e,t){return Zo(8390656,8,e,t)}function es(e,t){return Qo(2048,8,e,t)}function ts(e,t){return Qo(4,2,e,t)}function ns(e,t){return Qo(4,4,e,t)}function rs(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function is(e,t,n){return n=n==null?null:n.concat([e]),Qo(4,4,rs.bind(null,t,e),n)}function as(){}function os(e,t){var n=Lo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&No(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ss(e,t){var n=Lo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&No(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cs(e,t,n){return To&21?(Pr(n,t)||(n=Gt(),K.lanes|=n,Qc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ls=!0),e.memoizedState=n)}function ls(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=wo.transition;wo.transition={};try{e(!1),t()}finally{M=n,wo.transition=r}}function us(){return Lo().memoizedState}function ds(e,t,n){var r=_l(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ps(e))ms(t,n);else if(n=to(e,t,n,r),n!==null){var i=gl();vl(n,e,r,i),hs(n,t,r)}}function fs(e,t,n){var r=_l(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ps(e))ms(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Pr(s,o)){var c=t.interleaved;c===null?(i.next=i,eo(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=to(e,t,i,r),n!==null&&(i=gl(),vl(n,e,r,i),hs(n,t,r))}}function ps(e){var t=e.alternate;return e===K||t!==null&&t===K}function ms(e,t){ko=Oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hs(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yt(e,n)}}var gs={readContext:Qa,useCallback:Mo,useContext:Mo,useEffect:Mo,useImperativeHandle:Mo,useInsertionEffect:Mo,useLayoutEffect:Mo,useMemo:Mo,useReducer:Mo,useRef:Mo,useState:Mo,useDebugValue:Mo,useDeferredValue:Mo,useTransition:Mo,useMutableSource:Mo,useSyncExternalStore:Mo,useId:Mo,unstable_isNewReconciler:!1},_s={readContext:Qa,useCallback:function(e,t){return Io().memoizedState=[e,t===void 0?null:t],e},useContext:Qa,useEffect:$o,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),Zo(4194308,4,rs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zo(4,2,e,t)},useMemo:function(e,t){var n=Io();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Io();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ds.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Io();return e={current:e},t.memoizedState=e},useState:Jo,useDebugValue:as,useDeferredValue:function(e){return Io().memoizedState=e},useTransition:function(){var e=Jo(!1),t=e[0];return e=ls.bind(null,e[1]),Io().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=K,a=Io();if(V){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Gc===null)throw Error(r(349));To&30||Uo(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,$o(Go.bind(null,i,o,e),[e]),i.flags|=2048,Yo(9,Wo.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Io(),t=Gc.identifierPrefix;if(V){var n=xa,r=ba;n=(r&~(1<<32-j(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Ao++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=jo++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},vs={readContext:Qa,useCallback:os,useContext:Qa,useEffect:es,useImperativeHandle:is,useInsertionEffect:ts,useLayoutEffect:ns,useMemo:ss,useReducer:zo,useRef:Xo,useState:function(){return zo(Ro)},useDebugValue:as,useDeferredValue:function(e){return cs(Lo(),Eo.memoizedState,e)},useTransition:function(){return[zo(Ro)[0],Lo().memoizedState]},useMutableSource:Vo,useSyncExternalStore:Ho,useId:us,unstable_isNewReconciler:!1},ys={readContext:Qa,useCallback:os,useContext:Qa,useEffect:es,useImperativeHandle:is,useInsertionEffect:ts,useLayoutEffect:ns,useMemo:ss,useReducer:Bo,useRef:Xo,useState:function(){return Bo(Ro)},useDebugValue:as,useDeferredValue:function(e){var t=Lo();return Eo===null?t.memoizedState=e:cs(t,Eo.memoizedState,e)},useTransition:function(){return[Bo(Ro)[0],Lo().memoizedState]},useMutableSource:Vo,useSyncExternalStore:Ho,useId:us,unstable_isNewReconciler:!1};function bs(e,t){if(e&&e.defaultProps){for(var n in t=E({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ss={isMounted:function(e){return(e=e._reactInternals)?vt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gl(),i=_l(e),a=oo(r,i);a.payload=t,n!=null&&(a.callback=n),t=so(e,a,i),t!==null&&(vl(t,e,i,r),co(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gl(),i=_l(e),a=oo(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=so(e,a,i),t!==null&&(vl(t,e,i,r),co(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gl(),r=_l(e),i=oo(n,r);i.tag=2,t!=null&&(i.callback=t),t=so(e,i,r),t!==null&&(vl(t,e,r,n),co(t,e,r))}};function Cs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Fr(n,r)||!Fr(i,a):!0}function ws(e,t,n){var r=!1,i=Qi,a=t.contextType;return typeof a==`object`&&a?a=Qa(a):(i=B(t)?ea:$i.current,r=t.contextTypes,a=(r=r!=null)?ta(e,i):Qi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ss,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ts(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ss.enqueueReplaceState(t,t.state,null)}function Es(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},io(e);var a=t.contextType;typeof a==`object`&&a?i.context=Qa(a):(a=B(t)?ea:$i.current,i.context=ta(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(xs(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&Ss.enqueueReplaceState(i,i.state,null),uo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function Ds(e,t){try{var n=``,r=t;do n+=_e(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function Os(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ks(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var As=typeof WeakMap==`function`?WeakMap:Map;function js(e,t,n){n=oo(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ol||(ol=!0,sl=r),ks(e,t)},n}function Ms(e,t,n){n=oo(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ks(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){ks(e,t),typeof r!=`function`&&(cl===null?cl=new Set([this]):cl.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Ns(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new As;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ul.bind(null,e,t,n),t.then(e,e))}function Ps(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null?!0:t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Fs(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=oo(-1,1),t.tag=2,so(n,t,1))),n.lanes|=1),e)}var Is=C.ReactCurrentOwner,Ls=!1;function Rs(e,t,n,r){t.child=e===null?Ua(t,null,n,r):Ha(t,e.child,n,r)}function zs(e,t,n,r,i){n=n.render;var a=t.ref;return Za(t,i),r=Po(e,t,n,r,a,i),n=Fo(),e!==null&&!Ls?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ac(e,t,i)):(V&&n&&wa(t),t.flags|=1,Rs(e,t,r,i),t.child)}function Bs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Zl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Vs(e,t,a,r,i)):(e=eu(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Fr:n,n(o,r)&&e.ref===t.ref)return ac(e,t,i)}return t.flags|=1,e=$l(a,r),e.ref=t.ref,e.return=t,t.child=e}function Vs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Fr(a,r)&&e.ref===t.ref)if(Ls=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ls=!0);else return t.lanes=e.lanes,ac(e,t,i)}return Ws(e,t,n,r,i)}function Hs(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`)if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(Yc,Jc),Jc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,R(Yc,Jc),Jc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,R(Yc,Jc),Jc|=r}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),R(Yc,Jc),Jc|=r;return Rs(e,t,i,n),t.child}function Us(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ws(e,t,n,r,i){var a=B(n)?ea:$i.current;return a=ta(t,a),Za(t,i),n=Po(e,t,n,r,a,i),r=Fo(),e!==null&&!Ls?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ac(e,t,i)):(V&&r&&wa(t),t.flags|=1,Rs(e,t,n,i),t.child)}function Gs(e,t,n,r,i){if(B(n)){var a=!0;aa(t)}else a=!1;if(Za(t,i),t.stateNode===null)ic(e,t),ws(t,n,r),Es(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=Qa(l):(l=B(n)?ea:$i.current,l=ta(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Ts(t,o,r,l),ro=!1;var f=t.memoizedState;o.state=f,uo(t,r,o,i),c=t.memoizedState,s!==r||f!==c||z.current||ro?(typeof u==`function`&&(xs(t,n,u,r),c=t.memoizedState),(s=ro||Cs(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ao(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:bs(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=Qa(c):(c=B(n)?ea:$i.current,c=ta(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Ts(t,o,r,c),ro=!1,f=t.memoizedState,o.state=f,uo(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||z.current||ro?(typeof p==`function`&&(xs(t,n,p,r),m=t.memoizedState),(l=ro||Cs(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ks(e,t,n,r,a,i)}function Ks(e,t,n,r,i,a){Us(e,t);var o=(t.flags&128)!=0;if(!r&&!o)return i&&oa(t,n,!1),ac(e,t,a);r=t.stateNode,Is.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ha(t,e.child,null,a),t.child=Ha(t,null,s,a)):Rs(e,t,s,a),t.memoizedState=r.state,i&&oa(t,n,!0),t.child}function qs(e){var t=e.stateNode;t.pendingContext?ra(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ra(e,t.context,!1),go(e,t.containerInfo)}function Js(e,t,n,r,i){return Fa(),Ia(i),t.flags|=256,Rs(e,t,n,r),t.child}var Ys={dehydrated:null,treeContext:null,retryLane:0};function Xs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zs(e,t,n){var r=t.pendingProps,i=G.current,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!=0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),R(G,i&1),e===null)return ja(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data===`$!`?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=nu(o,r,0,null),e=tu(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Xs(n),t.memoizedState=Ys,e):Qs(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return ec(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=$l(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=tu(a,o,n,null),a.flags|=2):a=$l(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Xs(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Ys,r}return a=e.child,e=a.sibling,r=$l(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qs(e,t){return t=nu({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function $s(e,t,n,r){return r!==null&&Ia(r),Ha(t,e.child,null,n),e=Qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ec(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Os(Error(r(422))),$s(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=nu({mode:`visible`,children:i.children},a,0,null),o=tu(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Ha(t,e.child,null,s),t.child.memoizedState=Xs(s),t.memoizedState=Ys,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return $s(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=Os(o,i,void 0),$s(e,t,s,i)}if(c=(s&e.childLanes)!==0,Ls||c){if(i=Gc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,no(e,a),vl(i,e,a,-1))}return Ml(),i=Os(Error(r(421))),$s(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Gl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Da=Ii(a.nextSibling),Ea=t,V=!0,H=null,e!==null&&(_a[va++]=ba,_a[va++]=xa,_a[va++]=ya,ba=e.id,xa=e.overflow,ya=t),t=Qs(t,i.children),t.flags|=4096,t)}function tc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xa(e.return,t,n)}function nc(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function rc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Rs(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tc(e,n,t);else if(e.tag===19)tc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&bo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),nc(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}nc(t,!0,n,null,a);break;case`together`:nc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ic(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=$l(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$l(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function oc(e,t,n){switch(t.tag){case 3:qs(t),Fa();break;case 5:vo(t);break;case 1:B(t.type)&&aa(t);break;case 4:go(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;R(Wa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(R(G,G.current&1),e=ac(e,t,n),e===null?null:e.sibling):Zs(e,t,n):(R(G,G.current&1),t.flags|=128,null);R(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return rc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),R(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,Hs(e,t,n)}return ac(e,t,n)}var sc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},cc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ho(W.current);var o=null;switch(n){case`input`:i=Ee(e,i),r=Ee(e,r),o=[];break;case`select`:i=E({},i,{value:void 0}),r=E({},r,{value:void 0}),o=[];break;case`textarea`:i=Pe(e,i),r=Pe(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=Ei)}Je(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null));for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u===`style`)if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l;else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&fi(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},lc=function(e,t,n,r){n!==r&&(t.flags|=4)};function uc(e,t){if(!V)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function dc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fc(e,t,n){var i=t.pendingProps;switch(Ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dc(t),null;case 1:return B(t.type)&&na(),dc(t),null;case 3:return i=t.stateNode,_o(),L(z),L($i),So(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Na(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,H!==null&&(Sl(H),H=null))),dc(t),null;case 5:yo(t);var o=ho(mo.current);if(n=t.type,e!==null&&t.stateNode!=null)cc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return dc(t),null}if(e=ho(W.current),Na(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[zi]=t,i[Bi]=s,e=(t.mode&1)!=0,n){case`dialog`:fi(`cancel`,i),fi(`close`,i);break;case`iframe`:case`object`:case`embed`:fi(`load`,i);break;case`video`:case`audio`:for(o=0;o<ci.length;o++)fi(ci[o],i);break;case`source`:fi(`error`,i);break;case`img`:case`image`:case`link`:fi(`error`,i),fi(`load`,i);break;case`details`:fi(`toggle`,i);break;case`input`:De(i,s),fi(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},fi(`invalid`,i);break;case`textarea`:Fe(i,s),fi(`invalid`,i)}for(var c in Je(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&Ti(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&Ti(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&fi(`scroll`,i)}switch(n){case`input`:Ce(i),Ae(i,s,!0);break;case`textarea`:Ce(i),Le(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=Ei)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Re(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[zi]=t,e[Bi]=i,sc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Ye(n,i),n){case`dialog`:fi(`cancel`,e),fi(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:fi(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<ci.length;o++)fi(ci[o],e);o=i;break;case`source`:fi(`error`,e),o=i;break;case`img`:case`image`:case`link`:fi(`error`,e),fi(`load`,e),o=i;break;case`details`:fi(`toggle`,e),o=i;break;case`input`:De(e,i),o=Ee(e,i),fi(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=E({},i,{value:void 0}),fi(`invalid`,e);break;case`textarea`:Fe(e,i),o=Pe(e,i),fi(`invalid`,e);break;default:o=i}for(s in Je(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Ke(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Ve(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&He(e,u):typeof u==`number`&&He(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&fi(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:Ce(e),Ae(e,i,!1);break;case`textarea`:Ce(e),Le(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+be(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Ne(e,!!i.multiple,i.defaultValue,!0):Ne(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=Ei)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return dc(t),null;case 6:if(e&&t.stateNode!=null)lc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=ho(mo.current),ho(W.current),Na(t)){if(i=t.stateNode,n=t.memoizedProps,i[zi]=t,(s=i.nodeValue!==n)&&(e=Ea,e!==null))switch(e.tag){case 3:Ti(i.nodeValue,n,(e.mode&1)!=0);break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Ti(i.nodeValue,n,(e.mode&1)!=0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[zi]=t,t.stateNode=i}return dc(t),null;case 13:if(L(G),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Da!==null&&t.mode&1&&!(t.flags&128))Pa(),Fa(),t.flags|=98560,s=!1;else if(s=Na(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[zi]=t}else Fa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dc(t),s=!1}else H!==null&&(Sl(H),H=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?Xc===0&&(Xc=3):Ml())),t.updateQueue!==null&&(t.flags|=4),dc(t),null);case 4:return _o(),e===null&&hi(t.stateNode.containerInfo),dc(t),null;case 10:return Ya(t.type._context),dc(t),null;case 17:return B(t.type)&&na(),dc(t),null;case 19:if(L(G),s=t.memoizedState,s===null)return dc(t),null;if(i=(t.flags&128)!=0,c=s.rendering,c===null)if(i)uc(s,!1);else{if(Xc!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=bo(e),c!==null){for(t.flags|=128,uc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return R(G,G.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ot()>il&&(t.flags|=128,i=!0,uc(s,!1),t.lanes=4194304)}else{if(!i)if(e=bo(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),uc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!V)return dc(t),null}else 2*Ot()-s.renderingStartTime>il&&n!==1073741824&&(t.flags|=128,i=!0,uc(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(dc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ot(),t.sibling=null,n=G.current,R(G,i?n&1|2:n&1),t);case 22:case 23:return Ol(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Jc&1073741824&&(dc(t),t.subtreeFlags&6&&(t.flags|=8192)):dc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function pc(e,t){switch(Ta(t),t.tag){case 1:return B(t.type)&&na(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _o(),L(z),L($i),So(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yo(t),null;case 13:if(L(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(G),null;case 4:return _o(),null;case 10:return Ya(t.type._context),null;case 22:case 23:return Ol(),null;case 24:return null;default:return null}}var mc=!1,hc=!1,gc=typeof WeakSet==`function`?WeakSet:Set,q=null;function _c(e,t){var n=e.ref;if(n!==null)if(typeof n==`function`)try{n(null)}catch(n){Hl(e,t,n)}else n.current=null}function vc(e,t,n){try{n()}catch(n){Hl(e,t,n)}}var yc=!1;function bc(e,t){if(Di=yn,e=zr(),Br(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Oi={focusedElem:e,selectionRange:n},yn=!1,q=t;q!==null;)if(t=q,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:bs(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){Hl(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return h=yc,yc=!1,h}function xc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&vc(t,n,a)}i=i.next}while(i!==r)}}function Sc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Cc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function wc(e){var t=e.alternate;t!==null&&(e.alternate=null,wc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zi],delete t[Bi],delete t[Hi],delete t[Ui],delete t[Wi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tc(e){return e.tag===5||e.tag===3||e.tag===4}function Ec(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Tc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Dc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ei));else if(r!==4&&(e=e.child,e!==null))for(Dc(e,t,n),e=e.sibling;e!==null;)Dc(e,t,n),e=e.sibling}function Oc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oc(e,t,n),e=e.sibling;e!==null;)Oc(e,t,n),e=e.sibling}var kc=null,Ac=!1;function jc(e,t,n){for(n=n.child;n!==null;)Mc(e,t,n),n=n.sibling}function Mc(e,t,n){if(A&&typeof A.onCommitFiberUnmount==`function`)try{A.onCommitFiberUnmount(Nt,n)}catch{}switch(n.tag){case 5:hc||_c(n,t);case 6:var r=kc,i=Ac;kc=null,jc(e,t,n),kc=r,Ac=i,kc!==null&&(Ac?(e=kc,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):kc.removeChild(n.stateNode));break;case 18:kc!==null&&(Ac?(e=kc,n=n.stateNode,e.nodeType===8?Fi(e.parentNode,n):e.nodeType===1&&Fi(e,n),F(e)):Fi(kc,n.stateNode));break;case 4:r=kc,i=Ac,kc=n.stateNode.containerInfo,Ac=!0,jc(e,t,n),kc=r,Ac=i;break;case 0:case 11:case 14:case 15:if(!hc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&vc(n,t,o),i=i.next}while(i!==r)}jc(e,t,n);break;case 1:if(!hc&&(_c(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Hl(n,t,e)}jc(e,t,n);break;case 21:jc(e,t,n);break;case 22:n.mode&1?(hc=(r=hc)||n.memoizedState!==null,jc(e,t,n),hc=r):jc(e,t,n);break;default:jc(e,t,n)}}function Nc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gc),t.forEach(function(t){var r=Kl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Pc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:kc=c.stateNode,Ac=!1;break a;case 3:kc=c.stateNode.containerInfo,Ac=!0;break a;case 4:kc=c.stateNode.containerInfo,Ac=!0;break a}c=c.return}if(kc===null)throw Error(r(160));Mc(o,s,a),kc=null,Ac=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){Hl(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)J(t,e),t=t.sibling}function J(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pc(t,e),Fc(e),i&4){try{xc(3,e,e.return),Sc(3,e)}catch(t){Hl(e,e.return,t)}try{xc(5,e,e.return)}catch(t){Hl(e,e.return,t)}}break;case 1:Pc(t,e),Fc(e),i&512&&n!==null&&_c(n,n.return);break;case 5:if(Pc(t,e),Fc(e),i&512&&n!==null&&_c(n,n.return),e.flags&32){var a=e.stateNode;try{He(a,``)}catch(t){Hl(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&Oe(a,o),Ye(c,s);var u=Ye(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Ke(a,f):d===`dangerouslySetInnerHTML`?Ve(a,f):d===`children`?He(a,f):S(a,d,f,u)}switch(c){case`input`:ke(a,o);break;case`textarea`:Ie(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Ne(a,!!o.multiple,o.multiple?[]:``,!1):Ne(a,!!o.multiple,o.defaultValue,!0)):Ne(a,!!o.multiple,m,!1)}a[Bi]=o}catch(t){Hl(e,e.return,t)}}break;case 6:if(Pc(t,e),Fc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){Hl(e,e.return,t)}}break;case 3:if(Pc(t,e),Fc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{F(t.containerInfo)}catch(t){Hl(e,e.return,t)}break;case 4:Pc(t,e),Fc(e);break;case 13:Pc(t,e),Fc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(rl=Ot())),i&4&&Nc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(hc=(u=hc)||d,Pc(t,e),hc=u):Pc(t,e),Fc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(q=e,d=e.child;d!==null;){for(f=q=d;q!==null;){switch(p=q,m=p.child,p.tag){case 0:case 11:case 14:case 15:xc(4,p,p.return);break;case 1:_c(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Hl(i,n,e)}}break;case 5:_c(p,p.return);break;case 22:if(p.memoizedState!==null){zc(f);continue}}m===null?zc(f):(m.return=p,q=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=Ge(`display`,s))}catch(t){Hl(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){Hl(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pc(t,e),Fc(e),i&4&&Nc(e);break;case 21:break;default:Pc(t,e),Fc(e)}}function Fc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(Tc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(He(a,``),i.flags&=-33),Oc(e,Ec(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Dc(e,Ec(e),o);break;default:throw Error(r(161))}}catch(t){Hl(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ic(e,t,n){q=e,Lc(e,t,n)}function Lc(e,t,n){for(var r=(e.mode&1)!=0;q!==null;){var i=q,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||mc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||hc;s=mc;var l=hc;if(mc=o,(hc=c)&&!l)for(q=i;q!==null;)o=q,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Bc(i):(c.return=o,q=c);for(;a!==null;)q=a,Lc(a,t,n),a=a.sibling;q=i,mc=s,hc=l}Rc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,q=a):Rc(e,t,n)}}function Rc(e){for(;q!==null;){var t=q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:hc||Sc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!hc)if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:bs(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&fo(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fo(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&F(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}hc||t.flags&512&&Cc(t)}catch(e){Hl(t,t.return,e)}}if(t===e){q=null;break}if(n=t.sibling,n!==null){n.return=t.return,q=n;break}q=t.return}}function zc(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,q=n;break}q=t.return}}function Bc(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sc(4,t)}catch(e){Hl(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){Hl(t,i,e)}}var a=t.return;try{Cc(t)}catch(e){Hl(t,a,e)}break;case 5:var o=t.return;try{Cc(t)}catch(e){Hl(t,o,e)}}}catch(e){Hl(t,t.return,e)}if(t===e){q=null;break}var s=t.sibling;if(s!==null){s.return=t.return,q=s;break}q=t.return}}var Vc=Math.ceil,Hc=C.ReactCurrentDispatcher,Uc=C.ReactCurrentOwner,Wc=C.ReactCurrentBatchConfig,Y=0,Gc=null,Kc=null,qc=0,Jc=0,Yc=Zi(0),Xc=0,Zc=null,Qc=0,$c=0,el=0,tl=null,nl=null,rl=0,il=1/0,al=null,ol=!1,sl=null,cl=null,ll=!1,ul=null,dl=0,fl=0,pl=null,ml=-1,hl=0;function gl(){return Y&6?Ot():ml===-1?ml=Ot():ml}function _l(e){return e.mode&1?Y&2&&qc!==0?qc&-qc:La.transition===null?(e=M,e===0?(e=window.event,e=e===void 0?16:Tn(e.type),e):e):(hl===0&&(hl=Gt()),hl):1}function vl(e,t,n,i){if(50<fl)throw fl=0,pl=null,Error(r(185));qt(e,n,i),(!(Y&2)||e!==Gc)&&(e===Gc&&(!(Y&2)&&($c|=n),Xc===4&&wl(e,qc)),yl(e,i),n===1&&Y===0&&!(t.mode&1)&&(il=Ot()+500,ca&&fa()))}function yl(e,t){var n=e.callbackNode;Ut(e,t);var r=Vt(e,e===Gc?qc:0);if(r===0)n!==null&&Tt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Tt(n),t===1)e.tag===0?da(Tl.bind(null,e)):ua(Tl.bind(null,e)),Ni(function(){!(Y&6)&&fa()}),n=null;else{switch(Xt(r)){case 1:n=At;break;case 4:n=jt;break;case 16:n=Mt;break;case 536870912:n=k;break;default:n=Mt}n=Jl(n,bl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function bl(e,t){if(ml=-1,hl=0,Y&6)throw Error(r(327));var n=e.callbackNode;if(Bl()&&e.callbackNode!==n)return null;var i=Vt(e,e===Gc?qc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=Nl(e,i);else{t=i;var a=Y;Y|=2;var o=jl();(Gc!==e||qc!==t)&&(al=null,il=Ot()+500,kl(e,t));do try{Fl();break}catch(t){Al(e,t)}while(1);Ja(),Hc.current=o,Y=a,Kc===null?(Gc=null,qc=0,t=Xc):t=0}if(t!==0){if(t===2&&(a=Wt(e),a!==0&&(i=a,t=xl(e,a))),t===1)throw n=Zc,kl(e,0),wl(e,i),yl(e,Ot()),n;if(t===6)wl(e,i);else{if(a=e.current.alternate,!(i&30)&&!Cl(a)&&(t=Nl(e,i),t===2&&(o=Wt(e),o!==0&&(i=o,t=xl(e,o))),t===1))throw n=Zc,kl(e,0),wl(e,i),yl(e,Ot()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Rl(e,nl,al);break;case 3:if(wl(e,i),(i&130023424)===i&&(t=rl+500-Ot(),10<t)){if(Vt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){gl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ai(Rl.bind(null,e,nl,al),t);break}Rl(e,nl,al);break;case 4:if(wl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-j(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=Ot()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Vc(i/1960))-i,10<i){e.timeoutHandle=Ai(Rl.bind(null,e,nl,al),i);break}Rl(e,nl,al);break;case 5:Rl(e,nl,al);break;default:throw Error(r(329))}}}return yl(e,Ot()),e.callbackNode===n?bl.bind(null,e):null}function xl(e,t){var n=tl;return e.current.memoizedState.isDehydrated&&(kl(e,t).flags|=256),e=Nl(e,t),e!==2&&(t=nl,nl=n,t!==null&&Sl(t)),e}function Sl(e){nl===null?nl=e:nl.push.apply(nl,e)}function Cl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Pr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wl(e,t){for(t&=~el,t&=~$c,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-j(t),r=1<<n;e[n]=-1,t&=~r}}function Tl(e){if(Y&6)throw Error(r(327));Bl();var t=Vt(e,0);if(!(t&1))return yl(e,Ot()),null;var n=Nl(e,t);if(e.tag!==0&&n===2){var i=Wt(e);i!==0&&(t=i,n=xl(e,i))}if(n===1)throw n=Zc,kl(e,0),wl(e,t),yl(e,Ot()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rl(e,nl,al),yl(e,Ot()),null}function El(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(il=Ot()+500,ca&&fa())}}function Dl(e){ul!==null&&ul.tag===0&&!(Y&6)&&Bl();var t=Y;Y|=1;var n=Wc.transition,r=M;try{if(Wc.transition=null,M=1,e)return e()}finally{M=r,Wc.transition=n,Y=t,!(Y&6)&&fa()}}function Ol(){Jc=Yc.current,L(Yc)}function kl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ji(n)),Kc!==null)for(n=Kc.return;n!==null;){var r=n;switch(Ta(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&na();break;case 3:_o(),L(z),L($i),So();break;case 5:yo(r);break;case 4:_o();break;case 13:L(G);break;case 19:L(G);break;case 10:Ya(r.type._context);break;case 22:case 23:Ol()}n=n.return}if(Gc=e,Kc=e=$l(e.current,null),qc=Jc=t,Xc=0,Zc=null,el=$c=Qc=0,nl=tl=null,$a!==null){for(t=0;t<$a.length;t++)if(n=$a[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}$a=null}return e}function Al(e,t){do{var n=Kc;try{if(Ja(),Co.current=gs,Oo){for(var i=K.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Oo=!1}if(To=0,Do=Eo=K=null,ko=!1,Ao=0,Uc.current=null,n===null||n.return===null){Xc=1,Zc=t,Kc=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=qc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Ps(s);if(m!==null){m.flags&=-257,Fs(m,s,c,o,t),m.mode&1&&Ns(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}else{if(!(t&1)){Ns(o,u,t),Ml();break a}l=Error(r(426))}}else if(V&&c.mode&1){var _=Ps(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Fs(_,s,c,o,t),Ia(Ds(l,c));break a}}o=l=Ds(l,c),Xc!==4&&(Xc=2),tl===null?tl=[o]:tl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=js(o,l,t);lo(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(cl===null||!cl.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Ms(o,c,t);lo(o,x);break a}}o=o.return}while(o!==null)}Ll(n)}catch(e){t=e,Kc===n&&n!==null&&(Kc=n=n.return);continue}break}while(1)}function jl(){var e=Hc.current;return Hc.current=gs,e===null?gs:e}function Ml(){(Xc===0||Xc===3||Xc===2)&&(Xc=4),Gc===null||!(Qc&268435455)&&!($c&268435455)||wl(Gc,qc)}function Nl(e,t){var n=Y;Y|=2;var i=jl();(Gc!==e||qc!==t)&&(al=null,kl(e,t));do try{Pl();break}catch(t){Al(e,t)}while(1);if(Ja(),Y=n,Hc.current=i,Kc!==null)throw Error(r(261));return Gc=null,qc=0,Xc}function Pl(){for(;Kc!==null;)Il(Kc)}function Fl(){for(;Kc!==null&&!Et();)Il(Kc)}function Il(e){var t=ql(e.alternate,e,Jc);e.memoizedProps=e.pendingProps,t===null?Ll(e):Kc=t,Uc.current=null}function Ll(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=pc(n,t),n!==null){n.flags&=32767,Kc=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xc=6,Kc=null;return}}else if(n=fc(n,t,Jc),n!==null){Kc=n;return}if(t=t.sibling,t!==null){Kc=t;return}Kc=t=e}while(t!==null);Xc===0&&(Xc=5)}function Rl(e,t,n){var r=M,i=Wc.transition;try{Wc.transition=null,M=1,zl(e,t,n,r)}finally{Wc.transition=i,M=r}return null}function zl(e,t,n,i){do Bl();while(ul!==null);if(Y&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Jt(e,o),e===Gc&&(Kc=Gc=null,qc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,Jl(Mt,function(){return Bl(),null})),o=(n.flags&15990)!=0,n.subtreeFlags&15990||o){o=Wc.transition,Wc.transition=null;var s=M;M=1;var c=Y;Y|=4,Uc.current=null,bc(e,n),J(n,e),Vr(Oi),yn=!!Di,Oi=Di=null,e.current=n,Ic(n,e,a),Dt(),Y=c,M=s,Wc.transition=o}else e.current=n;if(ll&&(ll=!1,ul=e,dl=a),o=e.pendingLanes,o===0&&(cl=null),Pt(n.stateNode,i),yl(e,Ot()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(ol)throw ol=!1,e=sl,sl=null,e;return dl&1&&e.tag!==0&&Bl(),o=e.pendingLanes,o&1?e===pl?fl++:(fl=0,pl=e):fl=0,fa(),null}function Bl(){if(ul!==null){var e=Xt(dl),t=Wc.transition,n=M;try{if(Wc.transition=null,M=16>e?16:e,ul===null)var i=!1;else{if(e=ul,ul=null,dl=0,Y&6)throw Error(r(331));var a=Y;for(Y|=4,q=e.current;q!==null;){var o=q,s=o.child;if(q.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(q=u;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:xc(8,d,o)}var f=d.child;if(f!==null)f.return=d,q=f;else for(;q!==null;){d=q;var p=d.sibling,m=d.return;if(wc(d),d===u){q=null;break}if(p!==null){p.return=m,q=p;break}q=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}q=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,q=s;else b:for(;q!==null;){if(o=q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,q=v;break b}q=o.return}}var y=e.current;for(q=y;q!==null;){s=q;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,q=b;else b:for(s=y;q!==null;){if(c=q,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Sc(9,c)}}catch(e){Hl(c,c.return,e)}if(c===s){q=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,q=x;break b}q=c.return}}if(Y=a,fa(),A&&typeof A.onPostCommitFiberRoot==`function`)try{A.onPostCommitFiberRoot(Nt,e)}catch{}i=!0}return i}finally{M=n,Wc.transition=t}}return!1}function Vl(e,t,n){t=Ds(n,t),t=js(e,t,1),e=so(e,t,1),t=gl(),e!==null&&(qt(e,1,t),yl(e,t))}function Hl(e,t,n){if(e.tag===3)Vl(e,e,n);else for(;t!==null;){if(t.tag===3){Vl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(cl===null||!cl.has(r))){e=Ds(n,e),e=Ms(t,e,1),t=so(t,e,1),e=gl(),t!==null&&(qt(t,1,e),yl(t,e));break}}t=t.return}}function Ul(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=gl(),e.pingedLanes|=e.suspendedLanes&n,Gc===e&&(qc&n)===n&&(Xc===4||Xc===3&&(qc&130023424)===qc&&500>Ot()-rl?kl(e,0):el|=n),yl(e,t)}function Wl(e,t){t===0&&(e.mode&1?(t=zt,zt<<=1,!(zt&130023424)&&(zt=4194304)):t=1);var n=gl();e=no(e,t),e!==null&&(qt(e,t,n),yl(e,n))}function Gl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wl(e,n)}function Kl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Wl(e,n)}var ql=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||z.current)Ls=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Ls=!1,oc(e,t,n);Ls=!!(e.flags&131072)}else Ls=!1,V&&t.flags&1048576&&Ca(t,ga,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;ic(e,t),e=t.pendingProps;var a=ta(t,$i.current);Za(t,n),a=Po(null,t,i,e,a,n);var o=Fo();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,B(i)?(o=!0,aa(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,io(t),a.updater=Ss,t.stateNode=a,a._reactInternals=t,Es(t,i,e,n),t=Ks(null,t,i,!0,o,n)):(t.tag=0,V&&o&&wa(t),Rs(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(ic(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Ql(i),e=bs(i,e),a){case 0:t=Ws(null,t,i,e,n);break a;case 1:t=Gs(null,t,i,e,n);break a;case 11:t=zs(null,t,i,e,n);break a;case 14:t=Bs(null,t,i,bs(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:bs(i,a),Ws(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:bs(i,a),Gs(e,t,i,a,n);case 3:a:{if(qs(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,ao(e,t),uo(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Ds(Error(r(423)),t),t=Js(e,t,i,n,a);break a}else if(i!==a){a=Ds(Error(r(424)),t),t=Js(e,t,i,n,a);break a}else for(Da=Ii(t.stateNode.containerInfo.firstChild),Ea=t,V=!0,H=null,n=Ua(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fa(),i===a){t=ac(e,t,n);break a}Rs(e,t,i,n)}t=t.child}return t;case 5:return vo(t),e===null&&ja(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,ki(i,a)?s=null:o!==null&&ki(i,o)&&(t.flags|=32),Us(e,t),Rs(e,t,s,n),t.child;case 6:return e===null&&ja(t),null;case 13:return Zs(e,t,n);case 4:return go(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ha(t,null,i,n):Rs(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:bs(i,a),zs(e,t,i,a,n);case 7:return Rs(e,t,t.pendingProps,n),t.child;case 8:return Rs(e,t,t.pendingProps.children,n),t.child;case 12:return Rs(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,R(Wa,i._currentValue),i._currentValue=s,o!==null)if(Pr(o.value,s)){if(o.children===a.children&&!z.current){t=ac(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=oo(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xa(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Xa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Rs(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Za(t,n),a=Qa(a),i=i(a),t.flags|=1,Rs(e,t,i,n),t.child;case 14:return i=t.type,a=bs(i,t.pendingProps),a=bs(i.type,a),Bs(e,t,i,a,n);case 15:return Vs(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:bs(i,a),ic(e,t),t.tag=1,B(i)?(e=!0,aa(t)):e=!1,Za(t,n),ws(t,i,a),Es(t,i,a,n),Ks(null,t,i,!0,e,n);case 19:return rc(e,t,n);case 22:return Hs(e,t,n)}throw Error(r(156,t.tag))};function Jl(e,t){return wt(e,t)}function Yl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xl(e,t,n,r){return new Yl(e,t,n,r)}function Zl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ql(e){if(typeof e==`function`)return+!!Zl(e);if(e!=null){if(e=e.$$typeof,e===ae)return 11;if(e===ce)return 14}return 2}function $l(e,t){var n=e.alternate;return n===null?(n=Xl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function eu(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)Zl(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case te:return tu(n.children,a,o,t);case T:s=8,a|=8;break;case ne:return e=Xl(12,n,t,a|2),e.elementType=ne,e.lanes=o,e;case oe:return e=Xl(13,n,t,a),e.elementType=oe,e.lanes=o,e;case se:return e=Xl(19,n,t,a),e.elementType=se,e.lanes=o,e;case ue:return nu(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case re:s=10;break a;case ie:s=9;break a;case ae:s=11;break a;case ce:s=14;break a;case le:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Xl(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function tu(e,t,n,r){return e=Xl(7,e,r,t),e.lanes=n,e}function nu(e,t,n,r){return e=Xl(22,e,r,t),e.elementType=ue,e.lanes=n,e.stateNode={isHidden:!1},e}function ru(e,t,n){return e=Xl(6,e,null,t),e.lanes=n,e}function iu(e,t,n){return t=Xl(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function au(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kt(0),this.expirationTimes=Kt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ou(e,t,n,r,i,a,o,s,c){return e=new au(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Xl(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},io(a),e}function su(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ee,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function cu(e){if(!e)return Qi;e=e._reactInternals;a:{if(vt(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(B(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(B(n))return ia(e,n,t)}return t}function lu(e,t,n,r,i,a,o,s,c){return e=ou(n,r,!0,e,i,a,o,s,c),e.context=cu(null),n=e.current,r=gl(),i=_l(n),a=oo(r,i),a.callback=t??null,so(n,a,i),e.current.lanes=i,qt(e,i,r),yl(e,r),e}function uu(e,t,n,r){var i=t.current,a=gl(),o=_l(i);return n=cu(n),t.context===null?t.context=n:t.pendingContext=n,t=oo(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=so(i,t,o),e!==null&&(vl(e,i,o,a),co(e,i,o)),o}function du(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function pu(e,t){fu(e,t),(e=e.alternate)&&fu(e,t)}function mu(){return null}var hu=typeof reportError==`function`?reportError:function(e){console.error(e)};function gu(e){this._internalRoot=e}_u.prototype.render=gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));uu(e,t,null,null)},_u.prototype.unmount=gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dl(function(){uu(null,e,null,null)}),t[Vi]=null}};function _u(e){this._internalRoot=e}_u.prototype.unstable_scheduleHydration=function(e){if(e){var t=$t();e={blockedOn:null,target:e,priority:t};for(var n=0;n<cn.length&&t!==0&&t<cn[n].priority;n++);cn.splice(n,0,e),n===0&&pn(e)}};function vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function bu(){}function xu(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=du(o);a.call(e)}}var o=lu(t,r,e,0,null,!1,!1,``,bu);return e._reactRootContainer=o,e[Vi]=o.current,hi(e.nodeType===8?e.parentNode:e),Dl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=du(c);s.call(e)}}var c=ou(e,0,!1,null,null,!1,!1,``,bu);return e._reactRootContainer=c,e[Vi]=c.current,hi(e.nodeType===8?e.parentNode:e),Dl(function(){uu(t,c,n,r)}),c}function Su(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=du(o);s.call(e)}}uu(t,o,e,i)}else o=xu(n,t,e,i,r);return du(o)}Zt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bt(t.pendingLanes);n!==0&&(Yt(t,n|1),yl(t,Ot()),!(Y&6)&&(il=Ot()+500,fa()))}break;case 13:Dl(function(){var t=no(e,1);t!==null&&vl(t,e,1,gl())}),pu(e,1)}},Qt=function(e){if(e.tag===13){var t=no(e,134217728);t!==null&&vl(t,e,134217728,gl()),pu(e,134217728)}},N=function(e){if(e.tag===13){var t=_l(e),n=no(e,t);n!==null&&vl(n,e,t,gl()),pu(e,t)}},$t=function(){return M},en=function(e,t){var n=M;try{return M=e,t()}finally{M=n}},Qe=function(e,t,n){switch(t){case`input`:if(ke(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Ji(i);if(!a)throw Error(r(90));we(i),ke(i,a)}}}break;case`textarea`:Ie(e,n);break;case`select`:t=n.value,t!=null&&Ne(e,!!n.multiple,t,!1)}},rt=El,it=Dl;var Cu={usingClientEntryPoint:!1,Events:[Ki,qi,Ji,nt,D,El]},wu={findFiberByHostInstance:Gi,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},Tu={bundleType:wu.bundleType,version:wu.version,rendererPackageName:wu.rendererPackageName,rendererConfig:wu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=St(e),e===null?null:e.stateNode},findFiberByHostInstance:wu.findFiberByHostInstance||mu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eu.isDisabled&&Eu.supportsFiber)try{Nt=Eu.inject(Tu),A=Eu}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vu(t))throw Error(r(200));return su(e,t,null,n)},e.createRoot=function(e,t){if(!vu(e))throw Error(r(299));var n=!1,i=``,a=hu;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ou(e,1,!1,null,null,n,!1,i,a),e[Vi]=t.current,hi(e.nodeType===8?e.parentNode:e),new gu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=St(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return Dl(e)},e.hydrate=function(e,t,n){if(!yu(t))throw Error(r(200));return Su(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!vu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=hu;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=lu(t,null,e,1,n??null,a,!1,o,s),e[Vi]=t.current,hi(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new _u(t)},e.render=function(e,t,n){if(!yu(t))throw Error(r(200));return Su(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!yu(e))throw Error(r(40));return e._reactRootContainer?(Dl(function(){Su(null,null,e,!1,function(){e._reactRootContainer=null,e[Vi]=null})}),!0):!1},e.unstable_batchedUpdates=El,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!yu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return Su(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=_();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),y=u(p(),1),b=u(v(),1),x=`1.3.23`;function S(e,t,n){return Math.max(e,Math.min(t,n))}function C(e,t,n){return(1-n)*e+n*t}function w(e,t,n,r){return C(e,t,1-Math.exp(-n*r))}function ee(e,t){return(e%t+t)%t}var te=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(e){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;let n=S(0,this.currentTime/this.duration,1);t=n>=1;let r=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=w(this.value,this.to,this.lerp*60,e),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:r,easing:i,onStart:a,onUpdate:o}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,a?.(),this.onUpdate=o}};function T(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{n=void 0,e.apply(this,r)},t)}}var ne=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(e,t,{autoResize:n=!0,debounce:r=250}={}){this.wrapper=e,this.content=t,n&&(this.debouncedResize=T(this.resize,r),this.wrapper instanceof Window?window.addEventListener(`resize`,this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener(`resize`,this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},re=class{events={};emit(e,...t){let n=this.events[e]||[];for(let e=0,r=n.length;e<r;e++)n[e]?.(...t)}on(e,t){return this.events[e]?this.events[e].push(t):this.events[e]=[t],()=>{this.events[e]=this.events[e]?.filter(e=>t!==e)}}off(e,t){this.events[e]=this.events[e]?.filter(e=>t!==e)}destroy(){this.events={}}},ie=100/6,ae={passive:!1};function oe(e,t){return e===1?ie:e===2?t:1}var se=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new re;constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){this.element=e,this.options=t,window.addEventListener(`resize`,this.onWindowResize),this.onWindowResize(),this.element.addEventListener(`wheel`,this.onWheel,ae),this.element.addEventListener(`touchstart`,this.onTouchStart,ae),this.element.addEventListener(`touchmove`,this.onTouchMove,ae),this.element.addEventListener(`touchend`,this.onTouchEnd,ae)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener(`resize`,this.onWindowResize),this.element.removeEventListener(`wheel`,this.onWheel,ae),this.element.removeEventListener(`touchstart`,this.onTouchStart,ae),this.element.removeEventListener(`touchmove`,this.onTouchMove,ae),this.element.removeEventListener(`touchend`,this.onTouchEnd,ae)}onTouchStart=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit(`scroll`,{deltaX:0,deltaY:0,event:e})};onTouchMove=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit(`scroll`,{deltaX:r,deltaY:i,event:e})};onTouchEnd=e=>{this.emitter.emit(`scroll`,{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})};onWheel=e=>{let{deltaX:t,deltaY:n,deltaMode:r}=e,i=oe(r,this.window.width),a=oe(r,this.window.height);t*=i,n*=a,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit(`scroll`,{deltaX:t,deltaY:n,event:e})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},ce=e=>Math.min(1,1.001-2**(-10*e)),le=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new te;emitter=new re;dimensions;virtualScroll;constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:a=.075,touchInertiaExponent:o=1.7,duration:s,easing:c,lerp:l=.1,infinite:u=!1,orientation:d=`vertical`,gestureOrientation:f=d===`horizontal`?`both`:`vertical`,touchMultiplier:p=1,wheelMultiplier:m=1,autoResize:h=!0,prevent:g,virtualScroll:_,overscroll:v=!0,autoRaf:y=!1,anchors:b=!1,autoToggle:S=!1,allowNestedScroll:C=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:ee=w,stopInertiaOnNavigate:te=!1}={}){window.lenisVersion=x,window.lenis||(window.lenis={}),window.lenis.version=x,d===`horizontal`&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),(!e||e===document.documentElement)&&(e=window),typeof s==`number`&&typeof c!=`function`?c=ce:typeof c==`function`&&typeof s!=`number`&&(s=1),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:a,touchInertiaExponent:o,duration:s,easing:c,lerp:l,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:p,wheelMultiplier:m,autoResize:h,prevent:g,virtualScroll:_,overscroll:v,autoRaf:y,anchors:b,autoToggle:S,allowNestedScroll:C,naiveDimensions:ee,stopInertiaOnNavigate:te},this.dimensions=new ne(e,t,{autoResize:h}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.addEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener(`click`,this.onClick),this.options.wrapper.addEventListener(`pointerdown`,this.onPointerDown),this.virtualScroll=new se(n,{touchMultiplier:p,wheelMultiplier:m}),this.virtualScroll.on(`scroll`,this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener(`transitionend`,this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.removeEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener(`pointerdown`,this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener(`click`,this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}onScrollEnd=e=>{e instanceof CustomEvent||(this.isScrolling===`smooth`||this.isScrolling===!1)&&e.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent(`scrollend`,{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let e=this.isHorizontal?`overflow-x`:`overflow-y`;return getComputedStyle(this.rootElement)[e]}checkOverflow(){[`hidden`,`clip`].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=e=>{e.propertyName?.includes(`overflow`)&&e.target===this.rootElement&&this.checkOverflow()};setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:`instant`}):this.options.wrapper.scrollTo({top:e,behavior:`instant`})}onClick=e=>{let t=e.composedPath().filter(e=>e instanceof HTMLAnchorElement&&e.href).map(e=>new URL(e.href)),n=new URL(window.location.href);if(this.options.anchors){let e=t.find(e=>n.host===e.host&&n.pathname===e.pathname&&e.hash);if(e){let t=typeof this.options.anchors==`object`&&this.options.anchors?this.options.anchors:void 0,n=`#${e.hash.split(`#`)[1]}`;this.scrollTo(n,t);return}}if(this.options.stopInertiaOnNavigate&&t.some(e=>n.host===e.host&&n.pathname!==e.pathname)){this.reset();return}};onPointerDown=e=>{e.button===1&&this.reset()};onVirtualScroll=e=>{if(typeof this.options.virtualScroll==`function`&&this.options.virtualScroll(e)===!1)return;let{deltaX:t,deltaY:n,event:r}=e;if(this.emitter.emit(`virtual-scroll`,{deltaX:t,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;let i=r.type.includes(`touch`),a=r.type.includes(`wheel`);this.isTouching=r.type===`touchstart`||r.type===`touchmove`;let o=t===0&&n===0;if(this.options.syncTouch&&i&&r.type===`touchstart`&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let s=this.options.gestureOrientation===`vertical`&&n===0||this.options.gestureOrientation===`horizontal`&&t===0;if(o||s)return;let c=r.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let l=this.options.prevent,u=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`;if(c.find(e=>e instanceof HTMLElement&&(typeof l==`function`&&l?.(e)||e.hasAttribute?.(`data-lenis-prevent`)||u===`vertical`&&e.hasAttribute?.(`data-lenis-prevent-vertical`)||u===`horizontal`&&e.hasAttribute?.(`data-lenis-prevent-horizontal`)||i&&e.hasAttribute?.(`data-lenis-prevent-touch`)||a&&e.hasAttribute?.(`data-lenis-prevent-wheel`)||this.options.allowNestedScroll&&this.hasNestedScroll(e,{deltaX:t,deltaY:n}))))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&a)){this.isScrolling=`native`,this.animate.stop(),r.lenisStopPropagation=!0;return}let d=n;this.options.gestureOrientation===`both`?d=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation===`horizontal`&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();let f=i&&this.options.syncTouch,p=i&&r.type===`touchend`;p&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit(`scroll`,this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling===`native`){let e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling=`native`),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty(`overflow`);return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty(`overflow`,`clip`);return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=e=>{let t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,programmatic:i=!0,lerp:a=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:s=i?this.options.easing:void 0,onStart:c,onComplete:l,force:u=!1,userData:d}={}){if((this.isStopped||this.isLocked)&&!u)return;let f=e,p=t;if(typeof f==`string`&&[`top`,`left`,`start`,`#`].includes(f))f=0;else if(typeof f==`string`&&[`bottom`,`right`,`end`].includes(f))f=this.limit;else{let e=null;if(typeof f==`string`?(e=document.querySelector(f),e||(f===`#top`?f=0:console.warn(`Lenis: Target not found`,f))):f instanceof HTMLElement&&f?.nodeType&&(e=f),e){if(this.options.wrapper!==window){let e=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?e.left:e.top}let t=e.getBoundingClientRect(),n=getComputedStyle(e),r=this.isHorizontal?Number.parseFloat(n.scrollMarginLeft):Number.parseFloat(n.scrollMarginTop),i=getComputedStyle(this.rootElement),a=this.isHorizontal?Number.parseFloat(i.scrollPaddingLeft):Number.parseFloat(i.scrollPaddingTop);f=(this.isHorizontal?t.left:t.top)+this.animatedScroll-(Number.isNaN(r)?0:r)-(Number.isNaN(a)?0:a)}}if(typeof f==`number`){if(f+=p,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let e=f-this.animatedScroll;e>this.limit/2?f-=this.limit:e<-this.limit/2&&(f+=this.limit)}}else f=S(0,f,this.limit);if(f===this.targetScroll){c?.(this),l?.(this);return}if(this.userData=d??{},n){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o==`number`&&typeof s!=`function`?s=ce:typeof s==`function`&&typeof o!=`number`&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:s,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=`smooth`,c?.(this)},onUpdate:(e,t)=>{this.isScrolling=`smooth`,this.lastVelocity=this.velocity,this.velocity=e-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=e,this.setScroll(this.scroll),i&&(this.targetScroll=e),t||this.emit(),t&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(e,{deltaX:t,deltaY:n}){let r=Date.now();e._lenis||={};let i=e._lenis,a,o,s,c,l,u,d,f,p,m;if(r-(i.time??0)>2e3){i.time=Date.now();let t=window.getComputedStyle(e);if(i.computedStyle=t,a=[`auto`,`overlay`,`scroll`].includes(t.overflowX),o=[`auto`,`overlay`,`scroll`].includes(t.overflowY),l=[`auto`].includes(t.overscrollBehaviorX),u=[`auto`].includes(t.overscrollBehaviorY),i.hasOverflowX=a,i.hasOverflowY=o,!(a||o))return!1;d=e.scrollWidth,f=e.scrollHeight,p=e.clientWidth,m=e.clientHeight,s=d>p,c=f>m,i.isScrollableX=s,i.isScrollableY=c,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=p,i.clientHeight=m,i.hasOverscrollBehaviorX=l,i.hasOverscrollBehaviorY=u}else s=i.isScrollableX,c=i.isScrollableY,a=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,p=i.clientWidth,m=i.clientHeight,l=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(a&&s||o&&c))return!1;let h=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`,g,_,v,y,b,x;if(h===`horizontal`)g=Math.round(e.scrollLeft),_=d-p,v=t,y=a,b=s,x=l;else if(h===`vertical`)g=Math.round(e.scrollTop),_=f-m,v=n,y=o,b=c,x=u;else return!1;return!x&&(g>=_||g<=0)?!0:(v>0?g<_:g>0)&&y&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?`x`:`y`]}get isHorizontal(){return this.options.orientation===`horizontal`}get actualScroll(){let e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?ee(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling===`smooth`}get className(){let e=`lenis`;return this.options.autoToggle&&(e+=` lenis-autoToggle`),this.isStopped&&(e+=` lenis-stopped`),this.isLocked&&(e+=` lenis-locked`),this.isScrolling&&(e+=` lenis-scrolling`),this.isScrolling===`smooth`&&(e+=` lenis-smooth`),e}updateClassName(){this.cleanUpClassName(),this.className.split(` `).forEach(e=>{this.rootElement.classList.add(e)})}cleanUpClassName(){for(let e of Array.from(this.rootElement.classList))(e===`lenis`||e.startsWith(`lenis-`))&&this.rootElement.classList.remove(e)}},ue=s((e=>{var t=p(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),de=s(((e,t)=>{t.exports=ue()})),fe=(0,y.createContext)({});function E(e){let t=(0,y.useRef)(null);return t.current===null&&(t.current=e()),t.current}var pe=typeof window<`u`?y.useLayoutEffect:y.useEffect,me=(0,y.createContext)(null);function he(e,t){e.indexOf(t)===-1&&e.push(t)}function ge(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var _e=(e,t,n)=>n>t?t:n<e?e:n,ve={},ye=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),be=e=>typeof e==`object`&&!!e,xe=e=>/^0[^.\s]+$/u.test(e);function Se(e){let t;return()=>(t===void 0&&(t=e()),t)}var Ce=e=>e,we=(...e)=>e.reduce((e,t)=>n=>t(e(n))),Te=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1},Ee=class{constructor(){this.subscriptions=[]}add(e){return he(this.subscriptions,e),()=>ge(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},De=e=>e*1e3,Oe=e=>e/1e3,ke=(e,t)=>t?1e3/t*e:0,Ae=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,je=1e-7,Me=12;function Ne(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=Ae(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>je&&++s<Me);return o}function Pe(e,t,n,r){if(e===t&&n===r)return Ce;let i=t=>Ne(t,0,1,e,n);return e=>e===0||e===1?e:Ae(i(e),t,r)}var Fe=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Ie=e=>t=>1-e(1-t),Le=Pe(.33,1.53,.69,.99),Re=Ie(Le),ze=Fe(Re),Be=e=>e>=1?1:(e*=2)<1?.5*Re(e):.5*(2-2**(-10*(e-1))),Ve=e=>1-Math.sin(Math.acos(e)),He=Ie(Ve),Ue=Fe(Ve),We=Pe(.42,0,1,1),Ge=Pe(0,0,.58,1),Ke=Pe(.42,0,.58,1),qe=e=>Array.isArray(e)&&typeof e[0]!=`number`,Je=e=>Array.isArray(e)&&typeof e[0]==`number`,Ye={linear:Ce,easeIn:We,easeInOut:Ke,easeOut:Ge,circIn:Ve,circInOut:Ue,circOut:He,backIn:Re,backInOut:ze,backOut:Le,anticipate:Be},Xe=e=>typeof e==`string`,Ze=e=>{if(Je(e)){e.length;let[t,n,r,i]=e;return Pe(t,n,r,i)}else if(Xe(e))return Ye[e],`${e}`,Ye[e];return e},Qe=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],$e={value:null,addProjectionMetrics:null};function et(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0;let o=n;n=r,r=o,n.forEach(l),t&&$e.value&&$e.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var tt=40;function nt(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Qe.reduce((e,n)=>(e[n]=et(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=ve.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,tt),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:Qe.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<Qe.length;t++)o[Qe[t]].cancel(e)},state:i,steps:o}}var{schedule:D,cancel:rt,state:it,steps:at}=nt(typeof requestAnimationFrame<`u`?requestAnimationFrame:Ce,!0),ot;function st(){ot=void 0}var ct={now:()=>(ot===void 0&&ct.set(it.isProcessing||ve.useManualTiming?it.timestamp:performance.now()),ot),set:e=>{ot=e,queueMicrotask(st)}},lt={layout:0,mainThread:0,waapi:0},ut=e=>t=>typeof t==`string`&&t.startsWith(e),dt=ut(`--`),ft=ut(`var(--`),pt=e=>ft(e)?mt.test(e.split(`/*`)[0].trim()):!1,mt=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function ht(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var gt={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},_t={...gt,transform:e=>_e(0,1,e)},vt={...gt,default:1},yt=e=>Math.round(e*1e5)/1e5,bt=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function xt(e){return e==null}var St=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ct=(e,t)=>n=>!!(typeof n==`string`&&St.test(n)&&n.startsWith(e)||t&&!xt(n)&&Object.prototype.hasOwnProperty.call(n,t)),wt=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(bt);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Tt=e=>_e(0,255,e),Et={...gt,transform:e=>Math.round(Tt(e))},Dt={test:Ct(`rgb`,`red`),parse:wt(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+Et.transform(e)+`, `+Et.transform(t)+`, `+Et.transform(n)+`, `+yt(_t.transform(r))+`)`};function Ot(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var kt={test:Ct(`#`),parse:Ot,transform:Dt.transform},At=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),jt=At(`deg`),Mt=At(`%`),O=At(`px`),k=At(`vh`),Nt=At(`vw`),A={...Mt,parse:e=>Mt.parse(e)/100,transform:e=>Mt.transform(e*100)},Pt={test:Ct(`hsl`,`hue`),parse:wt(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+Mt.transform(yt(t))+`, `+Mt.transform(yt(n))+`, `+yt(_t.transform(r))+`)`},j={test:e=>Dt.test(e)||kt.test(e)||Pt.test(e),parse:e=>Dt.test(e)?Dt.parse(e):Pt.test(e)?Pt.parse(e):kt.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?Dt.transform(e):Pt.transform(e),getAnimatableNone:e=>{let t=j.parse(e);return t.alpha=0,j.transform(t)}},Ft=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function It(e){return isNaN(e)&&typeof e==`string`&&(e.match(bt)?.length||0)+(e.match(Ft)?.length||0)>0}var Lt=`number`,Rt=`color`,zt=`var`,Bt=`var(`,Vt="${}",Ht=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ut(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(Ht,e=>(j.test(e)?(r.color.push(a),i.push(Rt),n.push(j.parse(e))):e.startsWith(Bt)?(r.var.push(a),i.push(zt),n.push(e)):(r.number.push(a),i.push(Lt),n.push(parseFloat(e))),++a,Vt)).split(Vt),indexes:r,types:i}}function Wt(e){return Ut(e).values}function Gt({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];e===Lt?i+=yt(r[a]):e===Rt?i+=j.transform(r[a]):i+=r[a]}return i}}function Kt(e){return Gt(Ut(e))}var qt=e=>typeof e==`number`?0:j.test(e)?j.getAnimatableNone(e):e,Jt=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:qt(e);function Yt(e){let t=Ut(e);return Gt(t)(t.values.map((e,n)=>Jt(e,t.split[n])))}var M={test:It,parse:Wt,createTransformer:Kt,getAnimatableNone:Yt};function Xt(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Zt({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Xt(s,r,e+1/3),a=Xt(s,r,e),o=Xt(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function Qt(e,t){return n=>n>0?t:e}var N=(e,t,n)=>e+(t-e)*n,$t=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},en=[kt,Dt,Pt],P=e=>en.find(t=>t.test(e));function tn(e){let t=P(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===Pt&&(n=Zt(n)),n}var nn=(e,t)=>{let n=tn(e),r=tn(t);if(!n||!r)return Qt(e,t);let i={...n};return e=>(i.red=$t(n.red,r.red,e),i.green=$t(n.green,r.green,e),i.blue=$t(n.blue,r.blue,e),i.alpha=N(n.alpha,r.alpha,e),Dt.transform(i))},rn=new Set([`none`,`hidden`]);function an(e,t){return rn.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function on(e,t){return n=>N(e,t,n)}function sn(e){return typeof e==`number`?on:typeof e==`string`?pt(e)?Qt:j.test(e)?nn:dn:Array.isArray(e)?cn:typeof e==`object`?j.test(e)?nn:ln:Qt}function cn(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>sn(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function ln(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=sn(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function un(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var dn=(e,t)=>{let n=M.createTransformer(t),r=Ut(e),i=Ut(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?rn.has(e)&&!i.values.length||rn.has(t)&&!r.values.length?an(e,t):we(cn(un(r,i),i.values),n):(`${e}${t}`,Qt(e,t))};function fn(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?N(e,t,n):sn(e)(e,t)}var pn=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>D.update(t,e),stop:()=>rt(t),now:()=>it.isProcessing?it.timestamp:ct.now()}},mn=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},hn=2e4;function gn(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function _n(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(gn(r),hn);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:Oe(i)}}var F={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function vn(e,t){return e*Math.sqrt(1-t*t)}var yn=12;function bn(e,t,n){let r=n;for(let n=1;n<yn;n++)r-=e(r)/t(r);return r}var xn=.001;function Sn({duration:e=F.duration,bounce:t=F.bounce,velocity:n=F.velocity,mass:r=F.mass}){let i,a;F.maxDuration;let o=1-t;o=_e(F.minDamping,F.maxDamping,o),e=_e(F.minDuration,F.maxDuration,Oe(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=vn(t,o),c=Math.exp(-i);return xn-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=vn(t**2,o);return(-i(t)+xn>0?-1:1)*((a-s)*c)/l}):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=bn(i,a,s);if(e=De(e),isNaN(c))return{stiffness:F.stiffness,damping:F.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var Cn=[`duration`,`bounce`],wn=[`stiffness`,`damping`,`mass`];function Tn(e,t){return t.some(t=>e[t]!==void 0)}function En(e){let t={velocity:F.velocity,stiffness:F.stiffness,damping:F.damping,mass:F.mass,isResolvedFromDuration:!1,...e};if(!Tn(e,wn)&&Tn(e,Cn))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*_e(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:F.mass,stiffness:i,damping:a}}else{let n=Sn({...e,velocity:0});t={...t,...n,mass:F.mass},t.isResolvedFromDuration=!0}return t}function Dn(e=F.visualDuration,t=F.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=En({...n,velocity:-Oe(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=Oe(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?F.restSpeed.granular:F.restSpeed.default,i||=v?F.restDelta.granular:F.restDelta.default;let y,b,x,S,C,w;if(h<1)x=vn(_,h),S=(m+h*_*g)/x,y=e=>o-Math.exp(-h*_*e)*(S*Math.sin(x*e)+g*Math.cos(x*e)),C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let ee={calculatedDuration:p&&d||null,velocity:e=>De(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=De(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=De(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(gn(ee),hn),t=mn(t=>ee.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return ee}Dn.applyToOptions=e=>{let t=_n(e,100,Dn);return e.ease=t.ease,e.duration=De(t.duration),e.type=`keyframes`,e};var On=5;function kn(e,t,n){let r=Math.max(t-On,0);return ke(n-e(r),t-r)}function An({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=Dn({keyframes:[f.value,m(f.value)],velocity:kn(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function jn(e,t,n){let r=[],i=n||ve.mix||fn,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=we(Array.isArray(t)?t[n]||Ce:t,a)),r.push(a)}return r}function Mn(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=jn(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=Te(e[r],e[r+1],n);return s[r](i)};return n?t=>l(_e(e[0],e[a-1],t)):l}function Nn(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=Te(0,t,r);e.push(N(n,1,i))}}function Pn(e){let t=[0];return Nn(t,e.length-1),t}function Fn(e,t){return e.map(e=>e*t)}function In(e,t){return e.map(()=>t||Ke).splice(0,e.length-1)}function Ln({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=qe(r)?r.map(Ze):Ze(r),a={done:!1,value:t[0]},o=Mn(Fn(n&&n.length===t.length?n:Pn(t),e),t,{ease:Array.isArray(i)?i:In(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var Rn=e=>e!==null;function zn(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(Rn),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var Bn={decay:An,inertia:An,tween:Ln,keyframes:Ln,spring:Dn};function Vn(e){typeof e.type==`string`&&(e.type=Bn[e.type])}var Hn=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},Un=e=>e/100,Wn=class extends Hn{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==ct.now()&&this.tick(ct.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},lt.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;Vn(e);let{type:t=Ln,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||Ln;s!==Ln&&typeof o[0]!=`number`&&(this.mixKeyframes=we(Un,fn(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=gn(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=_e(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==An&&(b.value=zn(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return Oe(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Oe(e)}get time(){return Oe(this.currentTime)}set time(e){e=De(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return kn(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(ct.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=Oe(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=pn,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(ct.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,lt.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function Gn(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var Kn=e=>e*180/Math.PI,qn=e=>Yn(Kn(Math.atan2(e[1],e[0]))),Jn={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:qn,rotateZ:qn,skewX:e=>Kn(Math.atan(e[1])),skewY:e=>Kn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Yn=e=>(e%=360,e<0&&(e+=360),e),Xn=qn,Zn=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Qn=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),$n={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Zn,scaleY:Qn,scale:e=>(Zn(e)+Qn(e))/2,rotateX:e=>Yn(Kn(Math.atan2(e[6],e[5]))),rotateY:e=>Yn(Kn(Math.atan2(-e[2],e[0]))),rotateZ:Xn,rotate:Xn,skewX:e=>Kn(Math.atan(e[4])),skewY:e=>Kn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function er(e){return+!!e.includes(`scale`)}function tr(e,t){if(!e||e===`none`)return er(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=$n,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Jn,i=t}if(!i)return er(t);let a=r[t],o=i[1].split(`,`).map(rr);return typeof a==`function`?a(o):o[a]}var nr=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return tr(n,t)};function rr(e){return parseFloat(e.trim())}var ir=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],ar=new Set([...ir,`pathRotation`]),or=e=>e===gt||e===O,sr=new Set([`x`,`y`,`z`]),cr=ir.filter(e=>!sr.has(e));function lr(e){let t=[];return cr.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var ur={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>tr(t,`x`),y:(e,{transform:t})=>tr(t,`y`)};ur.translateX=ur.x,ur.translateY=ur.y;var dr=new Set,fr=!1,pr=!1,I=!1;function mr(){if(pr){let e=Array.from(dr).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=lr(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}pr=!1,fr=!1,dr.forEach(e=>e.complete(I)),dr.clear()}function hr(){dr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(pr=!0)})}function gr(){I=!0,hr(),mr(),I=!1}var _r=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(dr.add(this),fr||(fr=!0,D.read(hr),D.resolveKeyframes(mr))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}Gn(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),dr.delete(this)}cancel(){this.state===`scheduled`&&(dr.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},vr=e=>e.startsWith(`--`);function yr(e,t,n){vr(t)?e.style.setProperty(t,n):e.style[t]=n}var br={};function xr(e,t){let n=Se(e);return()=>br[t]??n()}var Sr=xr(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),Cr=xr(()=>window.ViewTimeline!==void 0,`viewTimeline`),wr=xr(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),Tr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Er={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:Tr([0,.65,.55,1]),circOut:Tr([.55,0,1,.45]),backIn:Tr([.31,.01,.66,-.59]),backOut:Tr([.33,1.53,.69,.99])};function Dr(e,t){if(e)return typeof e==`function`?wr()?mn(e,t):`ease-out`:Je(e)?Tr(e):Array.isArray(e)?e.map(e=>Dr(e,t)||Er.easeOut):Er[e]}function Or(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=Dr(s,i);Array.isArray(d)&&(u.easing=d),$e.value&&lt.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return $e.value&&p.finished.finally(()=>{lt.waapi--}),p}function kr(e){return typeof e==`function`&&`applyToOptions`in e}function Ar({type:e,...t}){return kr(e)&&wr()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var jr=class extends Hn{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=Ar(e);this.animation=Or(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=zn(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),yr(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return Oe(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Oe(e)}get time(){return Oe(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=De(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&Sr()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),Ce):r(this)}},Mr={anticipate:Be,backInOut:ze,circInOut:Ue};function Nr(e){return e in Mr}function Pr(e){typeof e.ease==`string`&&Nr(e.ease)&&(e.ease=Mr[e.ease])}var Fr=10,Ir=class extends jr{constructor(e){Pr(e),Vn(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new Wn({...a,autoplay:!1}),s=Math.max(Fr,ct.now()-this.startTime),c=_e(0,Fr,s-Fr),l=o.sample(s).value,{name:u}=this.options;i&&u&&yr(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},Lr=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(M.test(e)||e===`0`)&&!e.startsWith(`url(`));function Rr(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function zr(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=Lr(i,t),s=Lr(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:Rr(e)||(n===`spring`||kr(n))&&r}function Br(e){e.duration=0,e.type=`keyframes`}var Vr=new Set([`opacity`,`clipPath`,`filter`,`transform`]),Hr=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Ur(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&Hr.test(e[t]))return!0;return!1}var Wr=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),Gr=Se(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function Kr(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:c,transformTemplate:l}=t.owner.getProps();return Gr()&&n&&(Vr.has(n)||Wr.has(n)&&Ur(s))&&(n!==`transform`||!l)&&!c&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var qr=40,Jr=class extends Hn{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=ct.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||_r;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=ct.now();let u=!0;zr(e,i,a,o)||(u=!1,(ve.instantAnimations||!s)&&l?.(zn(e,n,t)),e[0]=e[e.length-1],Br(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>qr?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&Kr(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new Ir({...d,element:p})}catch{m=new Wn(d)}else m=new Wn(d);m.finished.then(()=>{this.notifyFinished()}).catch(Ce),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),gr()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function Yr(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Xr=30,Zr=e=>!isNaN(parseFloat(e)),Qr={current:void 0},$r=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=ct.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=ct.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Zr(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new Ee);let n=this.events[e].add(t);return e===`change`?()=>{n(),D.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Qr.current&&Qr.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=ct.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Xr)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Xr);return ke(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function ei(e,t){return new $r(e,t)}function ti(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function ni(e,t){let n=e?.[t]??e?.default??e;return n===e?n:ti(n,e)}var ri={type:`spring`,stiffness:500,damping:25,restSpeed:10},ii=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),ai={type:`keyframes`,duration:.8},oi={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},si=(e,{keyframes:t})=>t.length>2?ai:ar.has(e)?e.startsWith(`scale`)?ii(t[1]):ri:oi,ci=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function li(e){for(let t in e)if(!ci.has(t))return!0;return!1}var ui=(e,t,n,r={},i,a)=>o=>{let s=ni(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=De(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};li(s)||Object.assign(u,si(e,u)),u.duration&&=De(u.duration),u.repeatDelay&&=De(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Br(u),u.delay===0&&(d=!0)),(ve.instantAnimations||ve.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,Br(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=zn(u.keyframes,s);if(e!==void 0){D.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new Wn(u):new Jr(u)},di=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function fi(e){let t=di.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function pi(e,t,n=1){`${e}`;let[r,i]=fi(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return ye(e)?parseFloat(e):e}return pt(i)?pi(i,t,n+1):i}function mi(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function hi(e,t,n,r){if(typeof t==`function`){let[i,a]=mi(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=mi(r);t=t(n===void 0?e.custom:n,i,a)}return t}function gi(e,t,n){let r=e.getProps();return hi(r,t,n===void 0?r.custom:n,e)}var _i=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...ir]),vi=e=>Array.isArray(e);function yi(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ei(n))}function bi(e){return vi(e)?e[e.length-1]||0:e}function xi(e,t){let{transitionEnd:n={},transition:r={},...i}=gi(e,t)||{};i={...i,...n};for(let t in i)yi(e,t,bi(i[t]))}var Si=e=>!!(e&&e.getVelocity);function Ci(e){return!!(Si(e)&&e.add)}function wi(e,t){let n=e.getValue(`willChange`);if(Ci(n))return n.add(t);if(!n&&ve.WillChange){let n=new ve.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Ti(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Ei=`data-`+Ti(`framerAppearId`);function Di(e){return e.props[Ei]}function Oi({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function ki(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?ti(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState&&e.animationState.getState()[i],p=a?.path;p&&p.animateVisualElement(e,s,a,n,d);for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&Oi(f,t))continue;let o={delay:n,...ni(a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){D.update(()=>r.set(i));continue}let p=!1;if(window.MotionHandoffAnimation){let n=Di(e);if(n){let e=window.MotionHandoffAnimation(n,t,D);e!==null&&(o.startTime=e,p=!0)}}wi(e,t);let m=l??e.shouldReduceMotion;r.start(ui(t,r,i,m&&_i.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>D.update(()=>{o&&xi(e,o)});d.length?Promise.all(d).then(t):t()}return d}function Ai(e,t,n={}){let r=gi(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(ki(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return ji(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function ji(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(Ai(c,t,{...o,delay:n+(typeof r==`function`?0:r)+Yr(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function Mi(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>Ai(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=Ai(e,t,n);else{let i=typeof t==`function`?gi(e,t,n.custom):t;r=Promise.all(ki(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var Ni={test:e=>e===`auto`,parse:e=>e},Pi=e=>t=>t.test(e),Fi=[gt,O,Mt,jt,Nt,k,Ni],Ii=e=>Fi.find(Pi(e));function Li(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||xe(e)}var Ri=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function zi(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(bt)||[];if(!r)return e;let i=n.replace(r,``),a=+!!Ri.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var Bi=/\b([a-z-]*)\(.*?\)/gu,Vi={...M,getAnimatableNone:e=>{let t=e.match(Bi);return t?t.map(zi).join(` `):e}},Hi={...M,getAnimatableNone:e=>{let t=M.parse(e);return M.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},Ui={...gt,transform:Math.round},Wi={borderWidth:O,borderTopWidth:O,borderRightWidth:O,borderBottomWidth:O,borderLeftWidth:O,borderRadius:O,borderTopLeftRadius:O,borderTopRightRadius:O,borderBottomRightRadius:O,borderBottomLeftRadius:O,width:O,maxWidth:O,height:O,maxHeight:O,top:O,right:O,bottom:O,left:O,inset:O,insetBlock:O,insetBlockStart:O,insetBlockEnd:O,insetInline:O,insetInlineStart:O,insetInlineEnd:O,padding:O,paddingTop:O,paddingRight:O,paddingBottom:O,paddingLeft:O,paddingBlock:O,paddingBlockStart:O,paddingBlockEnd:O,paddingInline:O,paddingInlineStart:O,paddingInlineEnd:O,margin:O,marginTop:O,marginRight:O,marginBottom:O,marginLeft:O,marginBlock:O,marginBlockStart:O,marginBlockEnd:O,marginInline:O,marginInlineStart:O,marginInlineEnd:O,fontSize:O,backgroundPositionX:O,backgroundPositionY:O,rotate:jt,pathRotation:jt,rotateX:jt,rotateY:jt,rotateZ:jt,scale:vt,scaleX:vt,scaleY:vt,scaleZ:vt,skew:jt,skewX:jt,skewY:jt,distance:O,translateX:O,translateY:O,translateZ:O,x:O,y:O,z:O,perspective:O,transformPerspective:O,opacity:_t,originX:A,originY:A,originZ:O,zIndex:Ui,fillOpacity:_t,strokeOpacity:_t,numOctaves:Ui},Gi={...Wi,color:j,backgroundColor:j,outlineColor:j,fill:j,stroke:j,borderColor:j,borderTopColor:j,borderRightColor:j,borderBottomColor:j,borderLeftColor:j,filter:Vi,WebkitFilter:Vi,mask:Hi,WebkitMask:Hi},Ki=e=>Gi[e],qi=new Set([Vi,Hi]);function Ji(e,t){let n=Ki(e);return qi.has(n)||(n=M),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var Yi=new Set([`auto`,`none`,`0`]);function Xi(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Yi.has(t)&&Ut(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=Ji(n,i)}var Zi=class extends _r{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),pt(r))){let i=pi(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!_i.has(n)||e.length!==2)return;let[r,i]=e,a=Ii(r),o=Ii(i);if(ht(r)!==ht(i)&&ur[n]){this.needsMeasurement=!0;return}if(a!==o)if(or(a)&&or(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else ur[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||Li(e[t]))&&n.push(t);n.length&&Xi(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ur[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=ur[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function L(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var R=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function Qi(e){return be(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:$i,cancel:z}=nt(queueMicrotask,!1),ea={x:!1,y:!1};function ta(){return ea.x||ea.y}function B(e){return e===`x`||e===`y`?ea[e]?null:(ea[e]=!0,()=>{ea[e]=!1}):ea.x||ea.y?null:(ea.x=ea.y=!0,()=>{ea.x=ea.y=!1})}function na(e,t){let n=L(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function ra(e){return!(e.pointerType===`touch`||ta())}function ia(e,t,n={}){let[r,i,a]=na(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!ra(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var aa=(e,t)=>t?e===t?!0:aa(e,t.parentElement):!1,oa=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,sa=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function ca(e){return sa.has(e.tagName)||e.isContentEditable===!0}var la=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function ua(e){return la.has(e.tagName)||e.isContentEditable===!0}var da=new WeakSet;function fa(e){return t=>{t.key===`Enter`&&e(t)}}function pa(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var ma=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=fa(()=>{if(da.has(n))return;pa(n,`down`);let e=fa(()=>{pa(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>pa(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function ha(e){return oa(e)&&!ta()}var ga=new WeakSet;function _a(e,t,n={}){let[r,i,a]=na(e,n),o=e=>{let r=e.currentTarget;if(!ha(e)||ga.has(e))return;da.add(r),n.stopPropagation&&ga.add(e);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),da.has(r)&&da.delete(r),ha(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||aa(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Qi(e)&&(e.addEventListener(`focus`,e=>ma(e,i)),!ca(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function va(e){return be(e)&&`ownerSVGElement`in e}var ya=new WeakMap,ba,xa=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:va(r)&&`getBBox`in r?r.getBBox()[t]:r[n],Sa=xa(`inline`,`width`,`offsetWidth`),Ca=xa(`block`,`height`,`offsetHeight`);function wa({target:e,borderBoxSize:t}){ya.get(e)?.forEach(n=>{n(e,{get width(){return Sa(e,t)},get height(){return Ca(e,t)}})})}function Ta(e){e.forEach(wa)}function Ea(){typeof ResizeObserver>`u`||(ba=new ResizeObserver(Ta))}function Da(e,t){ba||Ea();let n=L(e);return n.forEach(e=>{let n=ya.get(e);n||(n=new Set,ya.set(e,n)),n.add(t),ba?.observe(e)}),()=>{n.forEach(e=>{let n=ya.get(e);n?.delete(t),n?.size||ba?.unobserve(e)})}}var V=new Set,H;function Oa(){H=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};V.forEach(t=>t(e))},window.addEventListener(`resize`,H)}function ka(e){return V.add(e),H||Oa(),()=>{V.delete(e),!V.size&&typeof H==`function`&&(window.removeEventListener(`resize`,H),H=void 0)}}function Aa(e,t){return typeof e==`function`?ka(e):Da(e,t)}function ja(e,t){let n,r=()=>{let{currentTime:r}=t,i=(r===null?0:r.value)/100;n!==i&&e(i),n=i};return D.preUpdate(r,!0),()=>rt(r)}function Ma(e){return va(e)&&e.tagName===`svg`}function Na(...e){let t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],a=e[2+n],o=e[3+n],s=Mn(i,a,o);return t?s(r):s}var Pa=[...Fi,j,M],Fa=e=>Pa.find(Pi(e)),Ia=()=>({translate:0,scale:1,origin:0,originPoint:0}),La=()=>({x:Ia(),y:Ia()}),Ra=()=>({min:0,max:0}),za=()=>({x:Ra(),y:Ra()}),Ba=new WeakMap;function Va(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Ha(e){return typeof e==`string`||Array.isArray(e)}var Ua=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],Wa=[`initial`,...Ua];function Ga(e){return Va(e.animate)||Wa.some(t=>Ha(e[t]))}function Ka(e){return!!(Ga(e)||e.variants)}function qa(e,t,n){for(let r in t){let i=t[r],a=n[r];if(Si(i))e.addValue(r,i);else if(Si(a))e.addValue(r,ei(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,ei(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var Ja={current:null},Ya={current:!1},Xa=typeof window<`u`;function Za(){if(Ya.current=!0,Xa)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Ja.current=e.matches;e.addEventListener(`change`,t),t()}else Ja.current=!1}var Qa=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],$a={};function eo(e){$a=e}function to(){return $a}var no=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=_r,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=ct.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,D.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Ga(t),this.isVariantNode=Ka(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&Si(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,Ba.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Ya.current||Za(),this.shouldReduceMotion=Ja.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),rt(this.notifyUpdate),rt(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Vr.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new jr({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:De(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=ar.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&D.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in $a){let t=$a[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):za()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Qa.length;t++){let n=Qa[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=qa(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=ei(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(ye(n)||xe(n))?n=parseFloat(n):!Fa(n)&&M.test(t)&&(n=Ji(e,t)),this.setBaseTarget(e,Si(n)?n.get():n)),Si(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=hi(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Si(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Ee),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){$i.render(this.render)}},ro=class extends no{constructor(){super(...arguments),this.KeyframeResolver=Zi}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Si(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},io=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function ao({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function oo({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function so(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function co(e){return e===void 0||e===1}function lo({scale:e,scaleX:t,scaleY:n}){return!co(e)||!co(t)||!co(n)}function uo(e){return lo(e)||fo(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function fo(e){return U(e.x)||U(e.y)}function U(e){return e&&e!==`0%`}function W(e,t,n){return n+t*(e-n)}function po(e,t,n,r,i){return i!==void 0&&(e=W(e,i,r)),W(e,n,r)+t}function mo(e,t=0,n=1,r,i){e.min=po(e.min,t,n,r,i),e.max=po(e.max,t,n,r,i)}function ho(e,{x:t,y:n}){mo(e.x,t.translate,t.scale,t.originPoint),mo(e.y,n.translate,n.scale,n.originPoint)}var go=.999999999999,_o=1.0000000000001;function vo(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(yo(e.x,-a.scroll.offset.x),yo(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,ho(e,o)),r&&uo(a.latestValues)&&xo(e,a.latestValues,a.layout?.layoutBox))}t.x<_o&&t.x>go&&(t.x=1),t.y<_o&&t.y>go&&(t.y=1)}function yo(e,t){e.min+=t,e.max+=t}function G(e,t,n,r,i=.5){mo(e,t,n,N(e.min,e.max,i),r)}function bo(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function xo(e,t,n){let r=n??e;G(e.x,bo(t.x,r.x),t.scaleX,t.scale,t.originX),G(e.y,bo(t.y,r.y),t.scaleY,t.scale,t.originY)}function So(e,t){return ao(so(e.getBoundingClientRect(),t))}function Co(e,t,n){let r=So(e,n),{scroll:i}=t;return i&&(yo(r.x,i.offset.x),yo(r.y,i.offset.y)),r}var wo={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},To=ir.length;function K(e,t,n){let r=``,i=!0;for(let a=0;a<To;a++){let o=ir[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=R(s,Wi[o]);if(!c){i=!1;let t=wo[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}let a=e.pathRotation;return a&&(i=!1,r+=`rotate(${R(a,Wi.pathRotation)}) `),r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function Eo(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(ar.has(e)){o=!0;continue}else if(dt(e)){i[e]=n;continue}else{let t=R(n,Wi[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=K(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Do(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Oo(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var ko={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(O.test(e))e=parseFloat(e);else return e;return`${Oo(e,t.target.x)}% ${Oo(e,t.target.y)}%`}},Ao={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=M.parse(e);if(i.length>5)return r;let a=M.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=N(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},jo={borderRadius:{...ko,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:ko,borderTopRightRadius:ko,borderBottomLeftRadius:ko,borderBottomRightRadius:ko,boxShadow:Ao};function Mo(e,{layout:t,layoutId:n}){return ar.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!jo[e]||e===`opacity`)}function No(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(Si(r[t])||i&&Si(i[t])||Mo(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Po(e){return window.getComputedStyle(e)}var Fo=class extends ro{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Do}readValueFromInstance(e,t){if(ar.has(t))return this.projection?.isProjecting?er(t):nr(e,t);{let n=Po(e),r=(dt(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return So(e,t)}build(e,t,n){Eo(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return No(e,t,n)}},Io={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Lo={offset:`strokeDashoffset`,array:`strokeDasharray`};function Ro(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Io:Lo;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var zo=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function Bo(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Eo(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of zo)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Ro(d,i,a,o,!1)}var Vo=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),Ho=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function Uo(e,t,n,r){Do(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(Vo.has(n)?n:Ti(n),t.attrs[n])}function Wo(e,t,n){let r=No(e,t,n);for(let n in e)if(Si(e[n])||Si(t[n])){let t=ir.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var Go=class extends ro{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=za}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(ar.has(t)){let e=Ki(t);return e&&e.default||0}return t=Vo.has(t)?t:Ti(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Wo(e,t,n)}build(e,t,n){Bo(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){Uo(e,t,n,r)}mount(e){this.isSVGTag=Ho(e.tagName),super.mount(e)}},Ko=Wa.length;function qo(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&qo(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<Ko;n++){let r=Wa[n],i=e.props[r];(Ha(i)||i===!1)&&(t[r]=i)}return t}function Jo(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var Yo=[...Ua].reverse(),Xo=Ua.length;function Zo(e){return t=>Promise.all(t.map(({animation:t,options:n})=>Mi(e,t,n)))}function Qo(e){let t=Zo(e),n=ts(),r=!0,i=!1,a=t=>(n,r)=>{let i=gi(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=qo(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<Xo;t++){let p=Yo[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=Ha(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||Va(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=$o(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,ee={...w,...C},te=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in ee){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=vi(t)&&vi(n)?!Jo(t,n)||y:t!==n,r?t==null?u.add(e):te(e):t!==void 0&&u.has(e)?te(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let T=v&&y;b&&(!T||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!T&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=gi(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=Yr(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=gi(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=ts(),i=!0}}}function $o(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!Jo(t,e):!1}function es(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ts(){return{animate:es(!0),whileInView:es(),whileHover:es(),whileTap:es(),whileDrag:es(),whileFocus:es(),exit:es()}}function ns(e,t){e.min=t.min,e.max=t.max}function rs(e,t){ns(e.x,t.x),ns(e.y,t.y)}function is(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var as=.9999,os=1.0001,ss=-.01,cs=.01;function ls(e){return e.max-e.min}function us(e,t,n){return Math.abs(e-t)<=n}function ds(e,t,n,r=.5){e.origin=r,e.originPoint=N(t.min,t.max,e.origin),e.scale=ls(n)/ls(t),e.translate=N(n.min,n.max,e.origin)-e.originPoint,(e.scale>=as&&e.scale<=os||isNaN(e.scale))&&(e.scale=1),(e.translate>=ss&&e.translate<=cs||isNaN(e.translate))&&(e.translate=0)}function fs(e,t,n,r){ds(e.x,t.x,n.x,r?r.originX:void 0),ds(e.y,t.y,n.y,r?r.originY:void 0)}function ps(e,t,n,r=0){e.min=(r?N(n.min,n.max,r):n.min)+t.min,e.max=e.min+ls(t)}function ms(e,t,n,r){ps(e.x,t.x,n.x,r?.x),ps(e.y,t.y,n.y,r?.y)}function hs(e,t,n,r=0){let i=r?N(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+ls(t)}function gs(e,t,n,r){hs(e.x,t.x,n.x,r?.x),hs(e.y,t.y,n.y,r?.y)}function _s(e,t,n,r,i){return e-=t,e=W(e,1/n,r),i!==void 0&&(e=W(e,1/i,r)),e}function vs(e,t=0,n=1,r=.5,i,a=e,o=e){if(Mt.test(t)&&(t=parseFloat(t),t=N(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=N(a.min,a.max,r);e===a&&(s-=t),e.min=_s(e.min,t,n,s,i),e.max=_s(e.max,t,n,s,i)}function ys(e,t,[n,r,i],a,o){vs(e,t[n],t[r],t[i],t.scale,a,o)}var bs=[`x`,`scaleX`,`originX`],xs=[`y`,`scaleY`,`originY`];function Ss(e,t,n,r){ys(e.x,t,bs,n?n.x:void 0,r?r.x:void 0),ys(e.y,t,xs,n?n.y:void 0,r?r.y:void 0)}function Cs(e){return e.translate===0&&e.scale===1}function ws(e){return Cs(e.x)&&Cs(e.y)}function Ts(e,t){return e.min===t.min&&e.max===t.max}function Es(e,t){return Ts(e.x,t.x)&&Ts(e.y,t.y)}function Ds(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Os(e,t){return Ds(e.x,t.x)&&Ds(e.y,t.y)}function ks(e){return ls(e.x)/ls(e.y)}function As(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function js(e){return[e(`x`),e(`y`)]}function Ms(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,pathRotation:i,rotateX:a,rotateY:o,skewX:s,skewY:c}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotate(${i}deg) `),a&&(r+=`rotateX(${a}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),c&&(r+=`skewY(${c}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Ns=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`],Ps=Ns.length,Fs=e=>typeof e==`string`?parseFloat(e):e,Is=e=>typeof e==`number`||O.test(e);function Ls(e,t,n,r,i,a){i?(e.opacity=N(0,n.opacity??1,zs(r)),e.opacityExit=N(t.opacity??1,0,Bs(r))):a&&(e.opacity=N(t.opacity??1,n.opacity??1,r));for(let i=0;i<Ps;i++){let a=Ns[i],o=Rs(t,a),s=Rs(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||Is(o)===Is(s)?(e[a]=Math.max(N(Fs(o),Fs(s),r),0),(Mt.test(s)||Mt.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=N(t.rotate||0,n.rotate||0,r))}function Rs(e,t){return e[t]===void 0?e.borderRadius:e[t]}var zs=Vs(0,.5,He),Bs=Vs(.5,.95,Ce);function Vs(e,t,n){return r=>r<e?0:r>t?1:n(Te(e,t,r))}function Hs(e,t,n){let r=Si(e)?e:ei(e);return r.start(ui(``,r,t,n)),r.animation}function Us(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var Ws=(e,t)=>e.depth-t.depth,Gs=class{constructor(){this.children=[],this.isDirty=!1}add(e){he(this.children,e),this.isDirty=!0}remove(e){ge(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Ws),this.isDirty=!1,this.children.forEach(e)}};function Ks(e,t){let n=ct.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(rt(r),e(a-t))};return D.setup(r,!0),()=>rt(r)}function qs(e){return Si(e)?e.get():e}var Js=class{constructor(){this.members=[]}add(e){he(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(ge(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(ge(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},Ys={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Xs={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Zs=[``,`X`,`Y`,`Z`],Qs=1e3,$s=0;function ec(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function tc(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=Di(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,D,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&tc(r)}function nc({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=$s++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,$e.value&&(Xs.nodes=Xs.calculatedTargetDeltas=Xs.calculatedProjections=0),this.nodes.forEach(ac),this.nodes.forEach(mc),this.nodes.forEach(hc),this.nodes.forEach(oc),$e.addProjectionMetrics&&$e.addProjectionMetrics(Xs)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new Gs)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Ee),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=va(t)&&!Ma(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;D.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=Ks(i,250),Ys.hasAnimatedSinceResize&&(Ys.hasAnimatedSinceResize=!1,this.nodes.forEach(pc)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||xc,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Os(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...ni(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l,t.path)}else t||pc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),rt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(gc),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&tc(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(lc),this.nodes.forEach(cc);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(uc);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(dc),this.nodes.forEach(fc),this.nodes.forEach(rc),this.nodes.forEach(ic)):this.nodes.forEach(uc),this.clearAllSnapshots();let e=ct.now();it.delta=_e(0,1e3/60,e-it.timestamp),it.timestamp=e,it.isProcessing=!0,at.update.process(it),at.preRender.process(it),at.render.process(it),it.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,$i.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(sc),this.sharedNodes.forEach(q)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,D.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){D.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ls(this.snapshot.measuredBox.x)&&!ls(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=za(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!ws(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||uo(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Tc(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return za();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Dc))){let{scroll:e}=this.root;e&&(yo(t.x,e.offset.x),yo(t.y,e.offset.y))}return t}removeElementScroll(e){let t=za();if(rs(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&rs(t,e),yo(t.x,i.offset.x),yo(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||za();rs(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(yo(r.x,-n.scroll.offset.x),yo(r.y,-n.scroll.offset.y)),uo(n.latestValues)&&xo(r,n.latestValues,n.layout?.layoutBox)}return uo(this.latestValues)&&xo(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=za();rs(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!uo(n.latestValues))continue;let r;n.instance&&(lo(n.latestValues)&&n.updateSnapshot(),r=za(),rs(r,n.measurePageBox())),Ss(t,n.latestValues,n.snapshot?.layoutBox,r)}return uo(this.latestValues)&&Ss(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==it.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=it.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=za(),this.targetWithTransforms=za()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ms(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):rs(this.target,this.layout.layoutBox),ho(this.target,this.targetDelta)):rs(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),$e.value&&Xs.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||lo(this.parent.latestValues)||fo(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=za(),this.relativeTargetOrigin=za(),gs(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),rs(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===it.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;rs(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;vo(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=za());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(is(this.prevProjectionDelta.x,this.projectionDelta.x),is(this.prevProjectionDelta.y,this.projectionDelta.y)),fs(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!As(this.projectionDelta.x,this.prevProjectionDelta.x)||!As(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),$e.value&&Xs.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=La(),this.projectionDelta=La(),this.projectionDeltaWithTransform=La()}setAnimationOrigin(e,t=!1,n){let r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o=La();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=za(),c=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,d=!!(c&&!u&&this.options.crossfade===!0&&!this.path.some(bc));this.animationProgress=0;let f,p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{let n=t/1e3,r=p?.(n);r?(o.x.translate=r.x,o.x.scale=N(e.x.scale,1,n),o.x.origin=e.x.origin,o.x.originPoint=e.x.originPoint,o.y.translate=r.y,o.y.scale=N(e.y.scale,1,n),o.y.origin=e.y.origin,o.y.originPoint=e.y.originPoint):(_c(o.x,e.x,n),_c(o.y,e.y,n)),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(gs(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),yc(this.relativeTarget,this.relativeTargetOrigin,s,n),f&&Es(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||=za(),rs(f,this.relativeTarget)),c&&(this.animationValues=a,Ls(a,i,this.latestValues,n,d,u)),r&&r.rotate!==void 0&&(this.animationValues||=a,this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(rt(this.pendingAnimation),void 0),this.pendingAnimation=D.update(()=>{Ys.hasAnimatedSinceResize=!0,lt.layout++,this.motionValue||=ei(0),this.motionValue.jump(0,!1),this.currentAnimation=Hs(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{lt.layout--},onComplete:()=>{lt.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Qs),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&Ec(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||za();let t=ls(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=ls(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}rs(t,n),xo(t,i),fs(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Js),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&ec(`z`,e,r,this.animationValues);for(let t=0;t<Zs.length;t++)ec(`rotate${Zs[t]}`,e,r,this.animationValues),ec(`skew${Zs[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=qs(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=qs(t?.pointerEvents)||``),this.hasProjected&&!uo(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Ms(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in jo){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=jo[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?qs(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(cc),this.root.sharedNodes.clear()}}}function rc(e){e.updateLayout()}function ic(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)js(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=ls(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;ns(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else Ec(i,t.layoutBox,n)&&js(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=ls(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=La();fs(o,n,t.layoutBox);let s=La();a?fs(s,e.applyTransform(r,!0),t.measuredBox):fs(s,n,t.layoutBox);let c=!ws(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=za();gs(s,t.layoutBox,i.layoutBox,o);let c=za();gs(c,n,a.layoutBox,o),Os(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function ac(e){$e.value&&Xs.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function oc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function sc(e){e.clearSnapshot()}function cc(e){e.clearMeasurements()}function lc(e){e.isLayoutDirty=!0,e.updateLayout()}function uc(e){e.isLayoutDirty=!1}function dc(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function fc(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function pc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function mc(e){e.resolveTargetDelta()}function hc(e){e.calcProjection()}function gc(e){e.resetSkewAndRotation()}function q(e){e.removeLeadSnapshot()}function _c(e,t,n){e.translate=N(t.translate,0,n),e.scale=N(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function vc(e,t,n,r){e.min=N(t.min,n.min,r),e.max=N(t.max,n.max,r)}function yc(e,t,n,r){vc(e.x,t.x,n.x,r),vc(e.y,t.y,n.y,r)}function bc(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var xc={duration:.45,ease:[.4,0,.1,1]},Sc=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Cc=Sc(`applewebkit/`)&&!Sc(`chrome/`)?Math.round:Ce;function wc(e){e.min=Cc(e.min),e.max=Cc(e.max)}function Tc(e){wc(e.x),wc(e.y)}function Ec(e,t,n){return e===`position`||e===`preserve-aspect`&&!us(ks(t),ks(n),.2)}function Dc(e){return e!==e.root&&e.scroll?.wasRoot}var Oc=nc({attachResizeListener:(e,t)=>Us(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),kc={current:void 0},Ac=nc({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!kc.current){let e=new Oc({});e.mount(window),e.setOptions({layoutScroll:!0}),kc.current=e}return kc.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),jc=(0,y.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Mc(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Nc(...e){return t=>{let n=!1,r=e.map(e=>{let r=Mc(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Mc(e[t],null)}}}}function Pc(...e){return y.useCallback(Nc(...e),e)}var J=de(),Fc=class extends y.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(Qi(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=Qi(e)&&e.offsetWidth||0,r=Qi(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top,a.direction=i.direction}return null}componentDidUpdate(){}render(){return this.props.children}};function Ic({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,y.useId)(),s=(0,y.useRef)(null),c=(0,y.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:`ltr`}),{nonce:l}=(0,y.useContext)(jc),u=Pc(s,e.props?.ref??e?.ref);return(0,y.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m,direction:h}=c.current;if(t||a===!1||!s.current||!e||!u)return;let g=h===`rtl`,_=n===`left`?g?`right: ${p}`:`left: ${f}`:g?`left: ${f}`:`right: ${p}`,v=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let y=document.createElement(`style`);l&&(y.nonce=l);let b=i??document.head;return b.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),b.contains(y)&&b.removeChild(y)}},[t]),(0,J.jsx)(Fc,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:y.cloneElement(e,{ref:u})})}var Lc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=E(Rc),d=(0,y.useId)(),f=!0,p=(0,y.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,y.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),y.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,J.jsx)(Ic,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,J.jsx)(me.Provider,{value:p,children:e})};function Rc(){return new Map}function zc(e=!0){let t=(0,y.useContext)(me);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,y.useId)();(0,y.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,y.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var Bc=e=>e.key||``;function Vc(e){let t=[];return y.Children.forEach(e,e=>{(0,y.isValidElement)(e)&&t.push(e)}),t}var Hc=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=zc(o),f=(0,y.useMemo)(()=>Vc(e),[e]),p=o&&!u?[]:f.map(Bc),m=(0,y.useRef)(!0),h=(0,y.useRef)(f),g=E(()=>new Map),_=(0,y.useRef)(new Set),[v,b]=(0,y.useState)(f),[x,S]=(0,y.useState)(f);pe(()=>{m.current=!1,h.current=f;for(let e=0;e<x.length;e++){let t=Bc(x[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[x,p.length,p.join(`-`)]);let C=[];if(f!==v){let e=[...f];for(let t=0;t<x.length;t++){let n=x[t],r=Bc(n);p.includes(r)||(e.splice(t,0,n),C.push(n))}return a===`wait`&&C.length&&(e=C),S(Vc(e)),b(f),null}let{forceRender:w}=(0,y.useContext)(fe);return(0,J.jsx)(J.Fragment,{children:x.map(e=>{let v=Bc(e),y=o&&!u?!1:f===x||p.includes(v);return(0,J.jsx)(Lc,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(g.has(v))_.current.add(v),g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(w?.(),S(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},Uc=(0,y.createContext)({strict:!1}),Wc={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},Y=!1;function Gc(){if(Y)return;let e={};for(let t in Wc)e[t]={isEnabled:e=>Wc[t].some(t=>!!e[t])};eo(e),Y=!0}function Kc(){return Gc(),to()}function qc(e){let t=Kc();for(let n in e)t[n]={...t[n],...e[n]};eo(t)}var Jc=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function Yc(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||Jc.has(e)}var Xc=c({default:()=>Zc}),Zc,Qc=o((()=>{throw Zc={},Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`)})),$c=e=>!Yc(e);function el(e){typeof e==`function`&&($c=t=>t.startsWith(`on`)?!Yc(t):e(t))}try{el((Qc(),d(Xc)).default)}catch{}function tl(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||Si(e[i])||($c(i)||n===!0&&Yc(i)||!t&&!Yc(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var nl=(0,y.createContext)({});function rl(e,t){if(Ga(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Ha(t)?t:void 0,animate:Ha(n)?n:void 0}}return e.inherit===!1?{}:t}function il(e){let{initial:t,animate:n}=rl(e,(0,y.useContext)(nl));return(0,y.useMemo)(()=>({initial:t,animate:n}),[al(t),al(n)])}function al(e){return Array.isArray(e)?e.join(` `):e}var ol=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function sl(e,t,n){for(let r in t)!Si(t[r])&&!Mo(r,n)&&(e[r]=t[r])}function cl({transformTemplate:e},t){return(0,y.useMemo)(()=>{let n=ol();return Eo(n,t,e),Object.assign({},n.vars,n.style)},[t])}function ll(e,t){let n=e.style||{},r={};return sl(r,n,e),Object.assign(r,cl(e,t)),r}function ul(e,t){let n={},r=ll(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var dl=()=>({...ol(),attrs:{}});function fl(e,t,n,r){let i=(0,y.useMemo)(()=>{let n=dl();return Bo(n,t,Ho(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};sl(t,e.style,e),i.style={...t,...i.style}}return i}var pl=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function ml(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(pl.indexOf(e)>-1||/[A-Z]/u.test(e))}function hl(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??ml(e)?fl:ul)(t,r,i,e),c=tl(t,typeof e==`string`,a),l=e===y.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,y.useMemo)(()=>Si(u)?u.get():u,[u]);return(0,y.createElement)(e,{...l,children:d})}function gl({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:_l(n,r,i,e),renderState:t()}}function _l(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=qs(a[e]);let{initial:o,animate:s}=e,c=Ga(e),l=Ka(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!Va(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=hi(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var vl=e=>(t,n)=>{let r=(0,y.useContext)(nl),i=(0,y.useContext)(me),a=()=>gl(e,t,r,i);return n?a():E(a)},yl=vl({scrapeMotionValuesFromProps:No,createRenderState:ol}),bl=vl({scrapeMotionValuesFromProps:Wo,createRenderState:dl}),xl=Symbol.for(`motionComponentSymbol`);function Sl(e,t,n){let r=(0,y.useRef)(n);(0,y.useInsertionEffect)(()=>{r.current=n});let i=(0,y.useRef)(null);return(0,y.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}var Cl=(0,y.createContext)({});function wl(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function Tl(e,t,n,r,i,a){let{visualElement:o}=(0,y.useContext)(nl),s=(0,y.useContext)(Uc),c=(0,y.useContext)(me),l=(0,y.useContext)(jc),u=l.reducedMotion,d=l.skipAnimations,f=(0,y.useRef)(null),p=(0,y.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,y.useContext)(Cl);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&El(f.current,n,i,h);let g=(0,y.useRef)(!1);(0,y.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[Ei],v=(0,y.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return pe(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,y.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function El(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Dl(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&wl(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function Dl(e){if(e)return e.options.allowProjection===!1?Dl(e.parent):e.projection}function Ol(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&qc(r);let a=n?n===`svg`:ml(e),o=a?bl:yl;function s(n,s){let c,l={...(0,y.useContext)(jc),...n,layoutId:kl(n)},{isStatic:u}=l,d=il(n),f=o(n,u);if(!u&&typeof window<`u`){Al(l,r);let t=jl(l);c=t.MeasureLayout,d.visualElement=Tl(e,f,l,i,t.ProjectionNode,a)}return(0,J.jsxs)(nl.Provider,{value:d,children:[c&&d.visualElement?(0,J.jsx)(c,{visualElement:d.visualElement,...l}):null,hl(e,n,Sl(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,y.forwardRef)(s);return c[xl]=e,c}function kl({layoutId:e}){let t=(0,y.useContext)(fe).id;return t&&e!==void 0?t+`-`+e:e}function Al(e,t){(0,y.useContext)(Uc).strict}function jl(e){let{drag:t,layout:n}=Kc();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Ml(e,t){if(typeof Proxy>`u`)return Ol;let n=new Map,r=(n,r)=>Ol(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Ol(a,void 0,e,t)),n.get(a))})}var Nl=(e,t)=>t.isSVG??ml(e)?new Go(t):new Fo(t,{allowProjection:e!==y.Fragment}),Pl=class extends io{constructor(e){super(e),e.animationState||=Qo(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();Va(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},Fl=0,Il={animation:{Feature:Pl},exit:{Feature:class extends io{constructor(){super(...arguments),this.id=Fl++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`||typeof e==`object`&&e&&!Array.isArray(e)){let n=gi(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Ll(e){return{point:{x:e.pageX,y:e.pageY}}}var Rl=e=>t=>oa(t)&&e(t,Ll(t));function zl(e,t,n,r){return Us(e,t,Rl(n),r)}var Bl=({current:e})=>e?e.ownerDocument.defaultView:null,Vl=(e,t)=>Math.abs(e-t);function Hl(e,t){let n=Vl(e.x,t.x),r=Vl(e.y,t.y);return Math.sqrt(n**2+r**2)}var Ul=new Set([`auto`,`scroll`]),Wl=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Gl(this.lastRawMoveEventInfo,this.transformPagePoint));let e=ql(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=Hl(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=it;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=Gl(t,this.transformPagePoint),D.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=ql(e.type===`pointercancel`?this.lastMoveEventInfo:Gl(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!oa(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=Gl(Ll(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=it;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,ql(s,this.history)),this.removeListeners=we(zl(this.contextWindow,`pointermove`,this.handlePointerMove),zl(this.contextWindow,`pointerup`,this.handlePointerUp),zl(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(Ul.has(e.overflowX)||Ul.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),D.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),rt(this.updatePoint)}};function Gl(e,t){return t?{point:t(e.point)}:e}function Kl(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ql({point:e},t){return{point:e,delta:Kl(e,Yl(t)),offset:Kl(e,Jl(t)),velocity:Xl(t,.1)}}function Jl(e){return e[0]}function Yl(e){return e[e.length-1]}function Xl(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=Yl(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>De(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>De(t)*2&&(r=e[1]);let a=Oe(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Zl(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?N(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?N(n,e,r.max):Math.min(e,n)),e}function Ql(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function $l(e,{top:t,left:n,bottom:r,right:i}){return{x:Ql(e.x,n,i),y:Ql(e.y,t,r)}}function eu(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function tu(e,t){return{x:eu(e.x,t.x),y:eu(e.y,t.y)}}function nu(e,t){let n=.5,r=ls(e),i=ls(t);return i>r?n=Te(t.min,t.max-r,e.min):r>i&&(n=Te(e.min,e.max-i,t.min)),_e(0,1,n)}function ru(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var iu=.35;function au(e=iu){return e===!1?e=0:e===!0&&(e=iu),{x:ou(e,`left`,`right`),y:ou(e,`top`,`bottom`)}}function ou(e,t,n){return{min:su(e,t),max:su(e,n)}}function su(e,t){return typeof e==`number`?e:e[t]||0}var cu=new WeakMap,lu=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=za(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(Ll(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=B(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),js(e=>{let t=this.getAxisMotionValue(e).get()||0;if(Mt.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=ls(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&D.update(()=>i(e,t),!1,!0),wi(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=pu(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&D.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new Wl(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:Bl(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&D.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!fu(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=Zl(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&wl(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=$l(n.layoutBox,e):this.constraints=!1,this.elastic=au(t),r!==this.constraints&&!wl(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&js(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=ru(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!wl(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let i=Co(n,r.root,this.visualElement.getTransformPagePoint()),a=tu(r.layout.layoutBox,i);if(t){let e=t(oo(a));this.hasMutatedConstraints=!!e,e&&(a=ao(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=js(o=>{if(!fu(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return wi(this.visualElement,e),n.start(ui(e,n,0,t,this.visualElement,!1))}stopAnimation(){js(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.visualElement.getProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){js(t=>{let{drag:n}=this.getProps();if(!fu(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-N(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!wl(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};js(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=nu({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),js(t=>{if(!fu(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(N(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;cu.set(this.visualElement,this);let e=this.visualElement.current,t=zl(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&ua(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();wl(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=du(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),D.read(r);let o=Us(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(js(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=iu,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function uu(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function du(e,t,n){let r=Aa(e,uu(n)),i=Aa(t,uu(n));return()=>{r(),i()}}function fu(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function pu(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var mu=class extends io{constructor(e){super(e),this.removeGroupControls=Ce,this.removeListeners=Ce,this.controls=new lu(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ce}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},hu=e=>(t,n)=>{e&&D.update(()=>e(t,n),!1,!0)},gu=class extends io{constructor(){super(...arguments),this.removePointerDownListener=Ce}onPointerDown(e){this.session=new Wl(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Bl(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:hu(e),onStart:hu(t),onMove:hu(n),onEnd:(e,t)=>{delete this.session,r&&D.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=zl(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},_u=!1,vu=class extends y.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),_u&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Ys.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),_u=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||D.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),$i.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;_u=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function yu(e){let[t,n]=zc(),r=(0,y.useContext)(fe);return(0,J.jsx)(vu,{...e,layoutGroup:r,switchLayoutGroup:(0,y.useContext)(Cl),isPresent:t,safeToRemove:n})}var bu={pan:{Feature:gu},drag:{Feature:mu,ProjectionNode:Ac,MeasureLayout:yu}};function xu(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&D.postRender(()=>i(t,Ll(t)))}var Su=class extends io{mount(){let{current:e}=this.node;e&&(this.unmount=ia(e,(e,t)=>(xu(this.node,t,`Start`),e=>xu(this.node,e,`End`))))}unmount(){}},Cu=class extends io{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=we(Us(this.node.current,`focus`,()=>this.onFocus()),Us(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function wu(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&D.postRender(()=>i(t,Ll(t)))}var Tu=class extends io{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=_a(e,(e,t)=>(wu(this.node,t,`Start`),(e,{success:t})=>wu(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},Eu=new WeakMap,Du=new WeakMap,Ou=e=>{let t=Eu.get(e.target);t&&t(e)},ku=e=>{e.forEach(Ou)};function Au({root:e,...t}){let n=e||document;Du.has(n)||Du.set(n,{});let r=Du.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(ku,{root:e,...t})),r[i]}function ju(e,t,n){let r=Au(t);return Eu.set(e,n),r.observe(e),()=>{Eu.delete(e),r.unobserve(e)}}var Mu={some:0,all:1},Nu=class extends io{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Mu[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=ju(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Pu(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function Pu({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Fu={inView:{Feature:Nu},tap:{Feature:Tu},focus:{Feature:Cu},hover:{Feature:Su}},Iu={layout:{ProjectionNode:Ac,MeasureLayout:yu}},Lu=Ml({...Il,...Fu,...bu,...Iu},Nl);function Ru(e){return typeof window>`u`?!1:e?Cr():Sr()}var zu=50,Bu=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),Vu=()=>({time:0,x:Bu(),y:Bu()}),Hu={x:{length:`Width`,position:`Left`},y:{length:`Height`,position:`Top`}};function Uu(e,t,n,r){let i=n[t],{length:a,position:o}=Hu[t],s=i.current,c=n.time;i.current=Math.abs(e[`scroll${o}`]),i.scrollLength=e[`scroll${a}`]-e[`client${a}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Te(0,i.scrollLength,i.current);let l=r-c;i.velocity=l>zu?0:ke(i.current-s,l)}function Wu(e,t,n){Uu(e,`x`,t,n),Uu(e,`y`,t,n),t.time=n}function Gu(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(Qi(r))n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName===`svg`){let e=r.getBoundingClientRect();r=r.parentElement;let t=r.getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let i=null,a=r.parentNode;for(;!i;)a.tagName===`svg`&&(i=a),a=r.parentNode;r=i}else break;return n}var Ku={start:0,center:.5,end:1};function qu(e,t,n=0){let r=0;if(e in Ku&&(e=Ku[e]),typeof e==`string`){let t=parseFloat(e);e.endsWith(`px`)?r=t:e.endsWith(`%`)?e=t/100:e.endsWith(`vw`)?r=t/100*document.documentElement.clientWidth:e.endsWith(`vh`)?r=t/100*document.documentElement.clientHeight:e=t}return typeof e==`number`&&(r=t*e),n+r}var Ju=[0,0];function Yu(e,t,n,r){let i=Array.isArray(e)?e:Ju,a=0,o=0;return typeof e==`number`?i=[e,e]:typeof e==`string`&&(e=e.trim(),i=e.includes(` `)?e.split(` `):[e,Ku[e]?e:`0`]),a=qu(i[0],n,r),o=qu(i[1],t),a-o}var Xu={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Zu={x:0,y:0};function Qu(e){return`getBBox`in e&&e.tagName!==`svg`?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function $u(e,t,n){let{offset:r=Xu.All}=n,{target:i=e,axis:a=`y`}=n,o=a===`y`?`height`:`width`,s=i===e?Zu:Gu(i,e),c=i===e?{width:e.scrollWidth,height:e.scrollHeight}:Qu(i),l={width:e.clientWidth,height:e.clientHeight};t[a].offset.length=0;let u=!t[a].interpolate,d=r.length;for(let e=0;e<d;e++){let n=Yu(r[e],l[o],c[o],s[a]);!u&&n!==t[a].interpolatorOffsets[e]&&(u=!0),t[a].offset[e]=n}u&&(t[a].interpolate=Mn(t[a].offset,Pn(r),{clamp:!1}),t[a].interpolatorOffsets=[...t[a].offset]),t[a].progress=_e(0,1,t[a].interpolate(t[a].current))}function ed(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function td(e,t,n,r={}){return{measure:t=>{ed(e,r.target,n),Wu(e,n,t),(r.offset||r.target)&&$u(e,n,r)},notify:()=>t(n)}}var nd=new WeakMap,rd=new WeakMap,id=new WeakMap,ad=new WeakMap,od=new WeakMap,sd=e=>e===document.scrollingElement?window:e;function cd(e,{container:t=document.scrollingElement,trackContentSize:n=!1,...r}={}){if(!t)return Ce;let i=id.get(t);i||(i=new Set,id.set(t,i));let a=td(t,e,Vu(),r);if(i.add(a),!nd.has(t)){let e=()=>{for(let e of i)e.measure(it.timestamp);D.preUpdate(n)},n=()=>{for(let e of i)e.notify()},r=()=>D.read(e);nd.set(t,r);let a=sd(t);window.addEventListener(`resize`,r),t!==document.documentElement&&rd.set(t,Aa(t,r)),a.addEventListener(`scroll`,r),r()}if(n&&!od.has(t)){let e=nd.get(t),n={width:t.scrollWidth,height:t.scrollHeight};ad.set(t,n);let r=D.read(()=>{let r=t.scrollWidth,i=t.scrollHeight;(n.width!==r||n.height!==i)&&(e(),n.width=r,n.height=i)},!0);od.set(t,r)}let o=nd.get(t);return D.read(o,!1,!0),()=>{rt(o);let e=id.get(t);if(!e||(e.delete(a),e.size))return;let n=nd.get(t);nd.delete(t),n&&(sd(t).removeEventListener(`scroll`,n),rd.get(t)?.(),window.removeEventListener(`resize`,n));let r=od.get(t);r&&(rt(r),od.delete(t)),ad.delete(t)}}var ld=[[Xu.Enter,`entry`],[Xu.Exit,`exit`],[Xu.Any,`cover`],[Xu.All,`contain`]],ud={start:0,end:1};function dd(e){let t=e.trim().split(/\s+/);if(t.length!==2)return;let n=ud[t[0]],r=ud[t[1]];if(!(n===void 0||r===void 0))return[n,r]}function fd(e){if(e.length!==2)return;let t=[];for(let n of e)if(Array.isArray(n))t.push(n);else if(typeof n==`string`){let e=dd(n);if(!e)return;t.push(e)}else return;return t}function pd(e,t){let n=fd(e);if(!n)return!1;for(let e=0;e<2;e++){let r=n[e],i=t[e];if(r[0]!==i[0]||r[1]!==i[1])return!1}return!0}function md(e){if(!e)return{rangeStart:`contain 0%`,rangeEnd:`contain 100%`};for(let[t,n]of ld)if(pd(e,t))return{rangeStart:`${n} 0%`,rangeEnd:`${n} 100%`}}var hd=new Map;function gd(e){let t={value:0};return{currentTime:t,cancel:cd(n=>{t.value=n[e.axis].progress*100},e)}}function _d({source:e,container:t,...n}){let{axis:r}=n;e&&(t=e);let i=hd.get(t);i||(i=new Map,hd.set(t,i));let a=n.target??`self`,o=i.get(a);o||(o={},i.set(a,o));let s=r+(n.offset??[]).join(`,`);return o[s]||(n.target&&Ru(n.target)?md(n.offset)?o[s]=new ViewTimeline({subject:n.target,axis:r}):o[s]=gd({container:t,...n}):Ru()?o[s]=new ScrollTimeline({source:t,axis:r}):o[s]=gd({container:t,...n})),o[s]}function vd(e,t){let n=_d(t),r=t.target?md(t.offset):void 0,i=t.target?Ru(t.target)&&!!r:Ru();return e.attachTimeline({timeline:i?n:void 0,...r&&i&&{rangeStart:r.rangeStart,rangeEnd:r.rangeEnd},observe:e=>(e.pause(),ja(t=>{e.time=e.iterationDuration*t},n))})}function yd(e){return e&&(e.target||e.offset)}function bd(e){return e.length===2}function xd(e,t){return bd(e)||yd(t)?cd(n=>{e(n[t.axis].progress,n)},t):ja(e,_d(t))}function Sd(e,{axis:t=`y`,container:n=document.scrollingElement,...r}={}){if(!n)return Ce;let i={axis:t,container:n,...r};return typeof e==`function`?xd(e,i):vd(e,i)}var Cd=()=>({scrollX:ei(0),scrollY:ei(0),scrollXProgress:ei(0),scrollYProgress:ei(0)}),wd=e=>e?!e.current:!1;function Td(e,t,n,r){return{factory:i=>{let a,o=()=>{if(wd(n)||wd(r)){$i.read(o);return}a=Sd(i,{...t,axis:e,container:n?.current||void 0,target:r?.current||void 0})};return $i.read(o),()=>{z(o),a?.()}},times:[0,1],keyframes:[0,1],ease:e=>e,duration:1}}function Ed(e,t){return typeof window>`u`?!1:e?Cr()&&!!md(t):Sr()}function Dd({container:e,target:t,...n}={}){let r=E(Cd);Ed(t,n.offset)&&(r.scrollXProgress.accelerate=Td(`x`,n,e,t),r.scrollYProgress.accelerate=Td(`y`,n,e,t));let i=(0,y.useRef)(null),a=(0,y.useRef)(!1),o=(0,y.useCallback)(()=>(i.current=Sd((e,{x:t,y:n})=>{r.scrollX.set(t.current),r.scrollXProgress.set(t.progress),r.scrollY.set(n.current),r.scrollYProgress.set(n.progress)},{...n,container:e?.current||void 0,target:t?.current||void 0}),()=>{i.current?.()}),[e,t,JSON.stringify(n.offset)]);return pe(()=>{if(a.current=!1,wd(e)||wd(t)){a.current=!0;return}else return o()},[o]),(0,y.useEffect)(()=>{if(!a.current)return;let n,r=()=>{let r=wd(e),i=wd(t);!r&&!i&&(n=o())};return $i.read(r),()=>{z(r),n?.()}},[o]),r}function Od(e){let t=E(()=>ei(e)),{isStatic:n}=(0,y.useContext)(jc);if(n){let[,n]=(0,y.useState)(e);(0,y.useEffect)(()=>t.on(`change`,n),[])}return t}function kd(e,t){let n=Od(t()),r=()=>n.set(t());return r(),pe(()=>{let t=()=>D.preRender(r,!1,!0),n=e.map(e=>e.on(`change`,t));return()=>{n.forEach(e=>e()),rt(r)}}),n}function Ad(e){Qr.current=[],e();let t=kd(Qr.current,e);return Qr.current=void 0,t}function jd(e,t,n,r){if(typeof e==`function`)return Ad(e);if(n!==void 0&&!Array.isArray(n)&&typeof t!=`function`)return Nd(e,t,n,r);let i=typeof t==`function`?t:Na(t,n,r),a=Array.isArray(e)?Md(e,i):Md([e],([e])=>i(e)),o=Array.isArray(e)?void 0:e.accelerate;return o&&!o.isTransformed&&typeof t!=`function`&&Array.isArray(n)&&r?.clamp!==!1&&(a.accelerate={...o,times:t,keyframes:n,isTransformed:!0,...r?.ease?{ease:r.ease}:{}}),a}function Md(e,t){let n=E(()=>[]);return kd(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}function Nd(e,t,n,r){let i=E(()=>Object.keys(n)),a=E(()=>({}));for(let o of i)a[o]=jd(e,t,n[o],r);return a}var Pd=1e3,Fd=1001,Id=1002,Ld=1006,Rd=1008,zd=1009,Bd=1015,Vd=1023,Hd=2300,Ud=2301,Wd=2302,Gd=2400,Kd=2401,qd=2402,Jd=`srgb`,Yd=`srgb-linear`,Xd=`display-p3`,Zd=`display-p3-linear`,Qd=`linear`,$d=`srgb`,ef=`rec709`,tf=7680,nf=35044,rf=2e3,af=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},of=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`);Math.PI/180,180/Math.PI;function sf(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(of[e&255]+of[e>>8&255]+of[e>>16&255]+of[e>>24&255]+`-`+of[t&255]+of[t>>8&255]+`-`+of[t>>16&15|64]+of[t>>24&255]+`-`+of[n&63|128]+of[n>>8&255]+`-`+of[n>>16&255]+of[n>>24&255]+of[r&255]+of[r>>8&255]+of[r>>16&255]+of[r>>24&255]).toLowerCase()}function cf(e,t,n){return Math.max(t,Math.min(n,e))}function lf(e,t){return(e%t+t)%t}function uf(e,t,n){return(1-n)*e+n*t}function df(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function ff(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var pf=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(cf(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},X=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(mf.makeScale(e,t)),this}rotate(e){return this.premultiply(mf.makeRotation(-e)),this}translate(e,t){return this.premultiply(mf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mf=new X;function hf(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function gf(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}var _f={};function vf(e){e in _f||(_f[e]=!0,console.warn(e))}var yf=new X().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bf=new X().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xf={[Yd]:{transfer:Qd,primaries:ef,toReference:e=>e,fromReference:e=>e},[Jd]:{transfer:$d,primaries:ef,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[Zd]:{transfer:Qd,primaries:`p3`,toReference:e=>e.applyMatrix3(bf),fromReference:e=>e.applyMatrix3(yf)},[Xd]:{transfer:$d,primaries:`p3`,toReference:e=>e.convertSRGBToLinear().applyMatrix3(bf),fromReference:e=>e.applyMatrix3(yf).convertLinearToSRGB()}},Sf=new Set([Yd,Zd]),Cf={enabled:!0,_workingColorSpace:Yd,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Sf.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let r=xf[t].toReference,i=xf[n].fromReference;return i(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return xf[e].primaries},getTransfer:function(e){return e===``?Qd:xf[e].transfer}};function wf(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Tf(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ef,Df=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ef===void 0&&(Ef=gf(`canvas`)),Ef.width=e.width,Ef.height=e.height;let n=Ef.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ef}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=gf(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=wf(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(wf(t[e]/255)*255):t[e]=wf(t[e]);return{data:t,width:e.width,height:e.height}}else return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Of=0,kf=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=sf(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Af(r[t].image)):e.push(Af(r[t]))}else e=Af(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Af(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Df.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var jf=0,Mf=class e extends af{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Fd,i=Fd,a=Ld,o=Rd,s=Vd,c=zd,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=sf(),this.name=``,this.source=new kf(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new pf(0,0),this.repeat=new pf(1,1),this.center=new pf(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new X,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pd:e.x-=Math.floor(e.x);break;case Fd:e.x=e.x<0?0:1;break;case Id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pd:e.y-=Math.floor(e.y);break;case Fd:e.y=e.y<0?0:1;break;case Id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mf.DEFAULT_IMAGE=null,Mf.DEFAULT_MAPPING=300,Mf.DEFAULT_ANISOTROPY=1;var Nf=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cf(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ff.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ff.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pf.copy(this).projectOnVector(e),this.sub(Pf)}reflect(e){return this.sub(Pf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(cf(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pf=new Z,Ff=new Nf,If=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rf.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rf.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Rf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Rf):Rf.fromBufferAttribute(r,t),Rf.applyMatrix4(e.matrixWorld),this.expandByPoint(Rf);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),zf.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),zf.copy(e.boundingBox)),zf.applyMatrix4(e.matrixWorld),this.union(zf)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rf),Rf.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kf),qf.subVectors(this.max,Kf),Bf.subVectors(e.a,Kf),Vf.subVectors(e.b,Kf),Hf.subVectors(e.c,Kf),Uf.subVectors(Vf,Bf),Wf.subVectors(Hf,Vf),Gf.subVectors(Bf,Hf);let t=[0,-Uf.z,Uf.y,0,-Wf.z,Wf.y,0,-Gf.z,Gf.y,Uf.z,0,-Uf.x,Wf.z,0,-Wf.x,Gf.z,0,-Gf.x,-Uf.y,Uf.x,0,-Wf.y,Wf.x,0,-Gf.y,Gf.x,0];return!Xf(t,Bf,Vf,Hf,qf)||(t=[1,0,0,0,1,0,0,0,1],!Xf(t,Bf,Vf,Hf,qf))?!1:(Jf.crossVectors(Uf,Wf),t=[Jf.x,Jf.y,Jf.z],Xf(t,Bf,Vf,Hf,qf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rf).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rf).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Lf[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Lf[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Lf[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Lf[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Lf[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Lf[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Lf[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Lf[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Lf),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Lf=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Rf=new Z,zf=new If,Bf=new Z,Vf=new Z,Hf=new Z,Uf=new Z,Wf=new Z,Gf=new Z,Kf=new Z,qf=new Z,Jf=new Z,Yf=new Z;function Xf(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Yf.fromArray(e,a);let o=i.x*Math.abs(Yf.x)+i.y*Math.abs(Yf.y)+i.z*Math.abs(Yf.z),s=t.dot(Yf),c=n.dot(Yf),l=r.dot(Yf);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Zf=new If,Qf=new Z,$f=new Z,ep=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Zf.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qf.subVectors(e,this.center);let t=Qf.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Qf,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($f.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qf.copy(e.center).add($f)),this.expandByPoint(Qf.copy(e.center).sub($f))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},tp=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/np.setFromMatrixColumn(e,0).length(),i=1/np.setFromMatrixColumn(e,1).length(),a=1/np.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ip,e,ap)}lookAt(e,t,n){let r=this.elements;return cp.subVectors(e,t),cp.lengthSq()===0&&(cp.z=1),cp.normalize(),op.crossVectors(n,cp),op.lengthSq()===0&&(Math.abs(n.z)===1?cp.x+=1e-4:cp.z+=1e-4,cp.normalize(),op.crossVectors(n,cp)),op.normalize(),sp.crossVectors(cp,op),r[0]=op.x,r[4]=sp.x,r[8]=cp.x,r[1]=op.y,r[5]=sp.y,r[9]=cp.y,r[2]=op.z,r[6]=sp.z,r[10]=cp.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],ee=r[1],te=r[5],T=r[9],ne=r[13],re=r[2],ie=r[6],ae=r[10],oe=r[14],se=r[3],ce=r[7],le=r[11],ue=r[15];return i[0]=a*x+o*ee+s*re+c*se,i[4]=a*S+o*te+s*ie+c*ce,i[8]=a*C+o*T+s*ae+c*le,i[12]=a*w+o*ne+s*oe+c*ue,i[1]=l*x+u*ee+d*re+f*se,i[5]=l*S+u*te+d*ie+f*ce,i[9]=l*C+u*T+d*ae+f*le,i[13]=l*w+u*ne+d*oe+f*ue,i[2]=p*x+m*ee+h*re+g*se,i[6]=p*S+m*te+h*ie+g*ce,i[10]=p*C+m*T+h*ae+g*le,i[14]=p*w+m*ne+h*oe+g*ue,i[3]=_*x+v*ee+y*re+b*se,i[7]=_*S+v*te+y*ie+b*ce,i[11]=_*C+v*T+y*ae+b*le,i[15]=_*w+v*ne+y*oe+b*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=np.set(r[0],r[1],r[2]).length(),a=np.set(r[4],r[5],r[6]).length(),o=np.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],rp.copy(this);let s=1/i,c=1/a,l=1/o;return rp.elements[0]*=s,rp.elements[1]*=s,rp.elements[2]*=s,rp.elements[4]*=c,rp.elements[5]*=c,rp.elements[6]*=c,rp.elements[8]*=l,rp.elements[9]*=l,rp.elements[10]*=l,t.setFromRotationMatrix(rp),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=rf){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=rf){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},np=new Z,rp=new tp,ip=new Z(0,0,0),ap=new Z(1,1,1),op=new Z,sp=new Z,cp=new Z,lp=new tp,up=new Nf,dp=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(cf(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-cf(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(cf(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-cf(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(cf(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-cf(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return up.setFromEuler(this),this.setFromQuaternion(up,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dp.DEFAULT_ORDER=`XYZ`;var fp=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},pp=0,mp=new Z,hp=new Nf,gp=new tp,_p=new Z,vp=new Z,yp=new Z,bp=new Nf,xp=new Z(1,0,0),Sp=new Z(0,1,0),Cp=new Z(0,0,1),wp={type:`added`},Tp={type:`removed`},Ep={type:`childadded`,child:null},Dp={type:`childremoved`,child:null},Op=class e extends af{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=sf(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Z,n=new dp,r=new Nf,i=new Z(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tp},normalMatrix:{value:new X}}),this.matrix=new tp,this.matrixWorld=new tp,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hp.setFromAxisAngle(e,t),this.quaternion.multiply(hp),this}rotateOnWorldAxis(e,t){return hp.setFromAxisAngle(e,t),this.quaternion.premultiply(hp),this}rotateX(e){return this.rotateOnAxis(xp,e)}rotateY(e){return this.rotateOnAxis(Sp,e)}rotateZ(e){return this.rotateOnAxis(Cp,e)}translateOnAxis(e,t){return mp.copy(e).applyQuaternion(this.quaternion),this.position.add(mp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xp,e)}translateY(e){return this.translateOnAxis(Sp,e)}translateZ(e){return this.translateOnAxis(Cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gp.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_p.copy(e):_p.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),vp.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gp.lookAt(vp,_p,this.up):gp.lookAt(_p,vp,this.up),this.quaternion.setFromRotationMatrix(gp),r&&(gp.extractRotation(r.matrixWorld),hp.setFromRotationMatrix(gp),this.quaternion.premultiply(hp.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wp),Ep.child=e,this.dispatchEvent(Ep),Ep.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tp),Dp.child=e,this.dispatchEvent(Dp),Dp.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gp.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gp.multiply(e.parent.matrixWorld)),e.applyMatrix4(gp),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wp),Ep.child=e,this.dispatchEvent(Ep),Ep.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vp,e,yp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vp,bp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Op.DEFAULT_UP=new Z(0,1,0),Op.DEFAULT_MATRIX_AUTO_UPDATE=!0,Op.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ap={h:0,s:0,l:0},jp={h:0,s:0,l:0};function Mp(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Np=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jd){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Cf.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Cf.workingColorSpace){return this.r=e,this.g=t,this.b=n,Cf.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Cf.workingColorSpace){if(e=lf(e,1),t=cf(t,0,1),n=cf(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Mp(i,r,e+1/3),this.g=Mp(i,r,e),this.b=Mp(i,r,e-1/3)}return Cf.toWorkingColorSpace(this,r),this}setStyle(e,t=Jd){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jd){let n=kp[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wf(e.r),this.g=wf(e.g),this.b=wf(e.b),this}copyLinearToSRGB(e){return this.r=Tf(e.r),this.g=Tf(e.g),this.b=Tf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jd){return Cf.fromWorkingColorSpace(Pp.copy(this),e),Math.round(cf(Pp.r*255,0,255))*65536+Math.round(cf(Pp.g*255,0,255))*256+Math.round(cf(Pp.b*255,0,255))}getHexString(e=Jd){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Cf.workingColorSpace){Cf.fromWorkingColorSpace(Pp.copy(this),t);let n=Pp.r,r=Pp.g,i=Pp.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Cf.workingColorSpace){return Cf.fromWorkingColorSpace(Pp.copy(this),t),e.r=Pp.r,e.g=Pp.g,e.b=Pp.b,e}getStyle(e=Jd){Cf.fromWorkingColorSpace(Pp.copy(this),e);let t=Pp.r,n=Pp.g,r=Pp.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Ap),this.setHSL(Ap.h+e,Ap.s+t,Ap.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ap),e.getHSL(jp);let n=uf(Ap.h,jp.h,t),r=uf(Ap.s,jp.s,t),i=uf(Ap.l,jp.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pp=new Np;Np.NAMES=kp;var Fp=0,Ip=class extends af{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=sf(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Np(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tf,this.stencilZFail=tf,this.stencilZPass=tf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn(`Material: onBuild() has been removed.`)}onBeforeRender(){console.warn(`Material: onBeforeRender() has been removed.`)}},Lp=new Z,Rp=new pf,zp=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=nf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bd,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return vf(`THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.`),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rp.fromBufferAttribute(this,t),Rp.applyMatrix3(e),this.setXY(t,Rp.x,Rp.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lp.fromBufferAttribute(this,t),Lp.applyMatrix3(e),this.setXYZ(t,Lp.x,Lp.y,Lp.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lp.fromBufferAttribute(this,t),Lp.applyMatrix4(e),this.setXYZ(t,Lp.x,Lp.y,Lp.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lp.fromBufferAttribute(this,t),Lp.applyNormalMatrix(e),this.setXYZ(t,Lp.x,Lp.y,Lp.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lp.fromBufferAttribute(this,t),Lp.transformDirection(e),this.setXYZ(t,Lp.x,Lp.y,Lp.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=df(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ff(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=df(t,this.array)),t}setX(e,t){return this.normalized&&(t=ff(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=df(t,this.array)),t}setY(e,t){return this.normalized&&(t=ff(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=df(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ff(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=df(t,this.array)),t}setW(e,t){return this.normalized&&(t=ff(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ff(t,this.array),n=ff(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ff(t,this.array),n=ff(n,this.array),r=ff(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=ff(t,this.array),n=ff(n,this.array),r=ff(r,this.array),i=ff(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Bp=class extends zp{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Vp=class extends zp{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Hp=class extends zp{constructor(e,t,n){super(new Float32Array(e),t,n)}},Up=0,Wp=new tp,Gp=new Op,Kp=new Z,qp=new If,Jp=new If,Yp=new Z,Xp=class e extends af{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=sf(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hf(e)?Vp:Bp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new X().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wp.makeRotationFromQuaternion(e),this.applyMatrix4(Wp),this}rotateX(e){return Wp.makeRotationX(e),this.applyMatrix4(Wp),this}rotateY(e){return Wp.makeRotationY(e),this.applyMatrix4(Wp),this}rotateZ(e){return Wp.makeRotationZ(e),this.applyMatrix4(Wp),this}translate(e,t,n){return Wp.makeTranslation(e,t,n),this.applyMatrix4(Wp),this}scale(e,t,n){return Wp.makeScale(e,t,n),this.applyMatrix4(Wp),this}lookAt(e){return Gp.lookAt(e),Gp.updateMatrix(),this.applyMatrix4(Gp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kp).negate(),this.translate(Kp.x,Kp.y,Kp.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new Hp(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new If);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];qp.setFromBufferAttribute(n),this.morphTargetsRelative?(Yp.addVectors(this.boundingBox.min,qp.min),this.boundingBox.expandByPoint(Yp),Yp.addVectors(this.boundingBox.max,qp.max),this.boundingBox.expandByPoint(Yp)):(this.boundingBox.expandByPoint(qp.min),this.boundingBox.expandByPoint(qp.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ep);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new Z,1/0);return}if(e){let n=this.boundingSphere.center;if(qp.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Jp.setFromBufferAttribute(n),this.morphTargetsRelative?(Yp.addVectors(qp.min,Jp.min),qp.expandByPoint(Yp),Yp.addVectors(qp.max,Jp.max),qp.expandByPoint(Yp)):(qp.expandByPoint(Jp.min),qp.expandByPoint(Jp.max))}qp.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Yp.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Yp));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Yp.fromBufferAttribute(a,t),o&&(Kp.fromBufferAttribute(e,t),Yp.add(Kp)),r=Math.max(r,n.distanceToSquared(Yp))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new zp(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new Z,s[e]=new Z;let c=new Z,l=new Z,u=new Z,d=new pf,f=new pf,p=new pf,m=new Z,h=new Z;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new Z,y=new Z,b=new Z,x=new Z;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new zp(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Z,i=new Z,a=new Z,o=new Z,s=new Z,c=new Z,l=new Z,u=new Z;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yp.fromBufferAttribute(e,t),Yp.normalize(),e.setXYZ(t,Yp.x,Yp.y,Yp.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new zp(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Zp=class e extends Xp{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Hp(c,3)),this.setAttribute(`normal`,new Hp(l,3)),this.setAttribute(`uv`,new Hp(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,ee=0,te=0,T=new Z;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)T[e]=(s*v-b)*r,T[t]=o*i,T[n]=S,c.push(T.x,T.y,T.z),T[e]=0,T[t]=0,T[n]=m>0?1:-1,l.push(T.x,T.y,T.z),u.push(s/h),u.push(1-a/g),ee+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),te+=6}o.addGroup(f,te,_),f+=te,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Qp(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function $p(e){let t={};for(let n=0;n<e.length;n++){let r=Qp(e[n]);for(let e in r)t[e]=r[e]}return t}var Q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},$={common:{diffuse:{value:new Np(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new X},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new X}},envmap:{envMap:{value:null},envMapRotation:{value:new X},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new X}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new X}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new X},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new X},normalScale:{value:new pf(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new X},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new X}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new X}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new X}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Np(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Np(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0},uvTransform:{value:new X}},sprite:{diffuse:{value:new Np(16777215)},opacity:{value:1},center:{value:new pf(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new X},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0}}},em={basic:{uniforms:$p([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:Q.meshbasic_vert,fragmentShader:Q.meshbasic_frag},lambert:{uniforms:$p([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Np(0)}}]),vertexShader:Q.meshlambert_vert,fragmentShader:Q.meshlambert_frag},phong:{uniforms:$p([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Np(0)},specular:{value:new Np(1118481)},shininess:{value:30}}]),vertexShader:Q.meshphong_vert,fragmentShader:Q.meshphong_frag},standard:{uniforms:$p([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new Np(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag},toon:{uniforms:$p([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new Np(0)}}]),vertexShader:Q.meshtoon_vert,fragmentShader:Q.meshtoon_frag},matcap:{uniforms:$p([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:Q.meshmatcap_vert,fragmentShader:Q.meshmatcap_frag},points:{uniforms:$p([$.points,$.fog]),vertexShader:Q.points_vert,fragmentShader:Q.points_frag},dashed:{uniforms:$p([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Q.linedashed_vert,fragmentShader:Q.linedashed_frag},depth:{uniforms:$p([$.common,$.displacementmap]),vertexShader:Q.depth_vert,fragmentShader:Q.depth_frag},normal:{uniforms:$p([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:Q.meshnormal_vert,fragmentShader:Q.meshnormal_frag},sprite:{uniforms:$p([$.sprite,$.fog]),vertexShader:Q.sprite_vert,fragmentShader:Q.sprite_frag},background:{uniforms:{uvTransform:{value:new X},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Q.background_vert,fragmentShader:Q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new X}},vertexShader:Q.backgroundCube_vert,fragmentShader:Q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Q.cube_vert,fragmentShader:Q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Q.equirect_vert,fragmentShader:Q.equirect_frag},distanceRGBA:{uniforms:$p([$.common,$.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Q.distanceRGBA_vert,fragmentShader:Q.distanceRGBA_frag},shadow:{uniforms:$p([$.lights,$.fog,{color:{value:new Np(0)},opacity:{value:1}}]),vertexShader:Q.shadow_vert,fragmentShader:Q.shadow_frag}};em.physical={uniforms:$p([em.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new X},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new X},clearcoatNormalScale:{value:new pf(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new X},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new X},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new X},sheen:{value:0},sheenColor:{value:new Np(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new X},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new X},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new X},transmissionSamplerSize:{value:new pf},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new X},attenuationDistance:{value:0},attenuationColor:{value:new Np(0)},specularColor:{value:new Np(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new X},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new X},anisotropyVector:{value:new pf},anisotropyMap:{value:null},anisotropyMapTransform:{value:new X}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag};var tm=(1+Math.sqrt(5))/2,nm=1/tm;-tm,-nm,-nm;var rm=class extends Ip{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:``},this.type=`MeshStandardMaterial`,this.color=new Np(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Np(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new pf(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dp,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function im(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function am(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var om=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},sm=class extends om{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gd,endingEnd:Gd}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kd:i=e,o=2*t-n;break;case qd:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Kd:a=e,s=2*n-t;break;case qd:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},cm=class extends om{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},lm=class extends om{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},um=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=im(t,this.TimeBufferType),this.values=im(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:im(e.times,Array),values:im(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Hd:t=this.InterpolantFactoryMethodDiscrete;break;case Ud:t=this.InterpolantFactoryMethodLinear;break;case Wd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hd;case this.InterpolantFactoryMethodLinear:return Ud;case this.InterpolantFactoryMethodSmooth:return Wd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&am(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Wd,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};um.prototype.TimeBufferType=Float32Array,um.prototype.ValueBufferType=Float32Array,um.prototype.DefaultInterpolation=Ud;var dm=class extends um{constructor(e,t,n){super(e,t,n)}};dm.prototype.ValueTypeName=`bool`,dm.prototype.ValueBufferType=Array,dm.prototype.DefaultInterpolation=Hd,dm.prototype.InterpolantFactoryMethodLinear=void 0,dm.prototype.InterpolantFactoryMethodSmooth=void 0;var fm=class extends um{};fm.prototype.ValueTypeName=`color`;var pm=class extends um{};pm.prototype.ValueTypeName=`number`;var mm=class extends om{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Nf.slerpFlat(i,0,a,c-o,a,c,s);return i}},hm=class extends um{InterpolantFactoryMethodLinear(e){return new mm(this.times,this.values,this.getValueSize(),e)}};hm.prototype.ValueTypeName=`quaternion`,hm.prototype.InterpolantFactoryMethodSmooth=void 0;var gm=class extends um{constructor(e,t,n){super(e,t,n)}};gm.prototype.ValueTypeName=`string`,gm.prototype.ValueBufferType=Array,gm.prototype.DefaultInterpolation=Hd,gm.prototype.InterpolantFactoryMethodLinear=void 0,gm.prototype.InterpolantFactoryMethodSmooth=void 0;var _m=class extends um{};_m.prototype.ValueTypeName=`vector`;var vm={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},ym=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null}}},bm=class{constructor(e){this.manager=e===void 0?ym:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};bm.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var xm=class extends bm{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=vm.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;let o=gf(`img`);function s(){l(),vm.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}},Sm=class extends bm{constructor(e){super(e)}load(e,t,n,r){let i=new Mf,a=new xm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Cm=`\\[\\]\\.:\\/`,wm=RegExp(`[\\[\\]\\.:\\/]`,`g`),Tm=`[^\\[\\]\\.:\\/]`,Em=`[^`+Cm.replace(`\\.`,``)+`]`,Dm=`((?:WC+[\\/:])*)`.replace(`WC`,Tm),Om=`(WCOD+)?`.replace(`WCOD`,Em),km=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Tm),Am=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Tm),jm=RegExp(`^`+Dm+Om+km+Am+`$`),Mm=[`material`,`materials`,`bones`,`map`],Nm=class{constructor(e,t,n){let r=n||Pm.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pm=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(wm,``)}static parseTrackName(e){let t=jm.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Mm.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pm.Composite=Nm,Pm.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Pm.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Pm.prototype.GetterByBindingType=[Pm.prototype._getValue_direct,Pm.prototype._getValue_array,Pm.prototype._getValue_arrayElement,Pm.prototype._getValue_toArray],Pm.prototype.SetterByBindingTypeAndVersioning=[[Pm.prototype._setValue_direct,Pm.prototype._setValue_direct_setNeedsUpdate,Pm.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pm.prototype._setValue_array,Pm.prototype._setValue_array_setNeedsUpdate,Pm.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pm.prototype._setValue_arrayElement,Pm.prototype._setValue_arrayElement_setNeedsUpdate,Pm.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pm.prototype._setValue_fromArray,Pm.prototype._setValue_fromArray_setNeedsUpdate,Pm.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`166`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`166`);var Fm=s((e=>{e.ContinuousEventPriority=4,e.DefaultEventPriority=16,e.DiscreteEventPriority=1})),Im=s(((e,t)=>{t.exports=Fm()}));function Lm(e){let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(i!==t){let e=t;t=r?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a=(e,r=i,a=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let o=r(t);function s(){let n=r(t);if(!a(o,n)){let t=o;e(o=n,t)}}return n.add(s),()=>n.delete(s)},o={setState:r,getState:i,subscribe:(e,t,r)=>t||r?a(e,t,r):(n.add(e),()=>n.delete(e)),destroy:()=>n.clear()};return t=e(r,i,o),o}var Rm=typeof window>`u`||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent)?y.useEffect:y.useLayoutEffect;function zm(e){let t=typeof e==`function`?Lm(e):e,n=(e=t.getState,n=Object.is)=>{let[,r]=(0,y.useReducer)(e=>e+1,0),i=t.getState(),a=(0,y.useRef)(i),o=(0,y.useRef)(e),s=(0,y.useRef)(n),c=(0,y.useRef)(!1),l=(0,y.useRef)();l.current===void 0&&(l.current=e(i));let u,d=!1;(a.current!==i||o.current!==e||s.current!==n||c.current)&&(u=e(i),d=!n(l.current,u)),Rm(()=>{d&&(l.current=u),a.current=i,o.current=e,s.current=n,c.current=!1});let f=(0,y.useRef)(i);Rm(()=>{let e=()=>{try{let e=t.getState(),n=o.current(e);s.current(l.current,n)||(a.current=e,l.current=n,r())}catch{c.current=!0,r()}},n=t.subscribe(e);return t.getState()!==f.current&&e(),n},[]);let p=d?u:l.current;return(0,y.useDebugValue)(p),p};return Object.assign(n,t),n[Symbol.iterator]=function(){console.warn(`[useStore, api] = create() is deprecated and will be removed in v4`);let e=[n,t];return{next(){let t=e.length<=0;return{value:e.shift(),done:t}}}},n}var Bm=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m)if(n(c)!==null)m=!0,oe(x);else{var t=n(l);t!==null&&se(b,t.startTime-e)}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&se(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,ee=5,te=-1;function T(){return!(e.unstable_now()-te<ee)}function ne(){if(C!==null){var t=e.unstable_now();te=t;var n=!0;try{n=C(!0,t)}finally{n?re():(S=!1,C=null)}}else S=!1}var re;if(typeof v==`function`)re=function(){v(ne)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=ne,re=function(){ae.postMessage(null)}}else re=function(){g(ne,0)};function oe(e){C=e,S||(S=!0,re())}function se(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,oe(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ee=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,se(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,oe(x))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),Vm=s(((e,t)=>{t.exports=Bm()})),Hm=s(((e,t)=>{t.exports=function(e){var t={},n=p(),r=Vm(),i=Object.assign;function a(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,s=Symbol.for(`react.element`),c=Symbol.for(`react.portal`),l=Symbol.for(`react.fragment`),u=Symbol.for(`react.strict_mode`),d=Symbol.for(`react.profiler`),f=Symbol.for(`react.provider`),m=Symbol.for(`react.context`),h=Symbol.for(`react.forward_ref`),g=Symbol.for(`react.suspense`),_=Symbol.for(`react.suspense_list`),v=Symbol.for(`react.memo`),y=Symbol.for(`react.lazy`),b=Symbol.for(`react.offscreen`),x=Symbol.iterator;function S(e){return typeof e!=`object`||!e?null:(e=x&&e[x]||e[`@@iterator`],typeof e==`function`?e:null)}function C(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case l:return`Fragment`;case c:return`Portal`;case d:return`Profiler`;case u:return`StrictMode`;case g:return`Suspense`;case _:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case m:return(e.displayName||`Context`)+`.Consumer`;case f:return(e._context.displayName||`Context`)+`.Provider`;case h:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case v:return t=e.displayName||null,t===null?C(e.type)||`Memo`:t;case y:t=e._payload,e=e._init;try{return C(e(t))}catch{}}return null}function w(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return C(t);case 8:return t===u?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function ee(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function te(e){if(ee(e)!==e)throw Error(a(188))}function T(e){var t=e.alternate;if(!t){if(t=ee(e),t===null)throw Error(a(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return te(i),e;if(o===r)return te(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,r=o;break}if(c===r){s=!0,r=i,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,r=i;break}if(c===r){s=!0,r=o,n=i;break}c=c.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function ne(e){return e=T(e),e===null?null:re(e)}function re(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=re(e);if(t!==null)return t;e=e.sibling}return null}function ie(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){if(e.tag!==4){var t=ie(e);if(t!==null)return t}e=e.sibling}return null}var ae=Array.isArray,oe=e.getPublicInstance,se=e.getRootHostContext,ce=e.getChildHostContext,le=e.prepareForCommit,ue=e.resetAfterCommit,de=e.createInstance,fe=e.appendInitialChild,E=e.finalizeInitialChildren,pe=e.prepareUpdate,me=e.shouldSetTextContent,he=e.createTextInstance,ge=e.scheduleTimeout,_e=e.cancelTimeout,ve=e.noTimeout,ye=e.isPrimaryRenderer,be=e.supportsMutation,xe=e.supportsPersistence,Se=e.supportsHydration,Ce=e.getInstanceFromNode,we=e.preparePortalMount,Te=e.getCurrentEventPriority,Ee=e.detachDeletedInstance,De=e.supportsMicrotasks,Oe=e.scheduleMicrotask,ke=e.supportsTestSelectors,Ae=e.findFiberRoot,je=e.getBoundingRect,Me=e.getTextContent,Ne=e.isHiddenSubtree,Pe=e.matchAccessibilityRole,Fe=e.setFocusIfFocusable,Ie=e.setupIntersectionObserver,Le=e.appendChild,Re=e.appendChildToContainer,ze=e.commitTextUpdate,Be=e.commitMount,Ve=e.commitUpdate,He=e.insertBefore,Ue=e.insertInContainerBefore,We=e.removeChild,Ge=e.removeChildFromContainer,Ke=e.resetTextContent,qe=e.hideInstance,Je=e.hideTextInstance,Ye=e.unhideInstance,Xe=e.unhideTextInstance,Ze=e.clearContainer,Qe=e.cloneInstance,$e=e.createContainerChildSet,et=e.appendChildToContainerChildSet,tt=e.finalizeContainerChildren,nt=e.replaceContainerChildren,D=e.cloneHiddenInstance,rt=e.cloneHiddenTextInstance,it=e.canHydrateInstance,at=e.canHydrateTextInstance,ot=e.canHydrateSuspenseInstance,st=e.isSuspenseInstancePending,ct=e.isSuspenseInstanceFallback,lt=e.registerSuspenseInstanceRetry,ut=e.getNextHydratableSibling,dt=e.getFirstHydratableChild,ft=e.getFirstHydratableChildWithinContainer,pt=e.getFirstHydratableChildWithinSuspenseInstance,mt=e.hydrateInstance,ht=e.hydrateTextInstance,gt=e.hydrateSuspenseInstance,_t=e.getNextHydratableInstanceAfterSuspenseInstance,vt=e.commitHydratedContainer,yt=e.commitHydratedSuspenseInstance,bt=e.clearSuspenseBoundary,xt=e.clearSuspenseBoundaryFromContainer,St=e.shouldDeleteUnhydratedTailInstances,Ct=e.didNotMatchHydratedContainerTextInstance,wt=e.didNotMatchHydratedTextInstance,Tt;function Et(e){if(Tt===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Tt=t&&t[1]||``}return`
`+Tt+e}var Dt=!1;function Ot(e,t){if(!e||Dt)return``;Dt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{Dt=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?Et(e):``}var kt=Object.prototype.hasOwnProperty,At=[],jt=-1;function Mt(e){return{current:e}}function O(e){0>jt||(e.current=At[jt],At[jt]=null,jt--)}function k(e,t){jt++,At[jt]=e.current,e.current=t}var Nt={},A=Mt(Nt),Pt=Mt(!1),j=Nt;function Ft(e,t){var n=e.type.contextTypes;if(!n)return Nt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function It(e){return e=e.childContextTypes,e!=null}function Lt(){O(Pt),O(A)}function Rt(e,t,n){if(A.current!==Nt)throw Error(a(168));k(A,t),k(Pt,n)}function zt(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!=`function`)return n;for(var o in r=r.getChildContext(),r)if(!(o in t))throw Error(a(108,w(e)||`Unknown`,o));return i({},n,r)}function Bt(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nt,j=A.current,k(A,e),k(Pt,Pt.current),!0}function Vt(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=zt(e,t,j),r.__reactInternalMemoizedMergedChildContext=e,O(Pt),O(A),k(A,e)):O(Pt),k(Pt,n)}var Ht=Math.clz32?Math.clz32:Gt,Ut=Math.log,Wt=Math.LN2;function Gt(e){return e>>>=0,e===0?32:31-(Ut(e)/Wt|0)|0}var Kt=64,qt=4194304;function Jt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Jt(a))):r=Jt(s)}else o=n&~i,o===0?a!==0&&(r=Jt(a)):r=Jt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ht(t),i=1<<n,r|=e[n],t&=~i;return r}function M(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xt(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ht(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=M(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Zt(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Qt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function N(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ht(t),e[t]=n}function $t(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ht(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function en(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ht(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var P=0;function tn(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nn=r.unstable_scheduleCallback,rn=r.unstable_cancelCallback,an=r.unstable_shouldYield,on=r.unstable_requestPaint,sn=r.unstable_now,cn=r.unstable_ImmediatePriority,ln=r.unstable_UserBlockingPriority,un=r.unstable_NormalPriority,dn=r.unstable_IdlePriority,fn=null,pn=null;function mn(e){if(pn&&typeof pn.onCommitFiberRoot==`function`)try{pn.onCommitFiberRoot(fn,e,void 0,(e.current.flags&128)==128)}catch{}}function hn(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var gn=typeof Object.is==`function`?Object.is:hn,_n=null,F=!1,vn=!1;function yn(e){_n===null?_n=[e]:_n.push(e)}function bn(e){F=!0,yn(e)}function xn(){if(!vn&&_n!==null){vn=!0;var e=0,t=P;try{var n=_n;for(P=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_n=null,F=!1}catch(t){throw _n!==null&&(_n=_n.slice(e+1)),nn(cn,xn),t}finally{P=t,vn=!1}}return null}var Sn=o.ReactCurrentBatchConfig;function Cn(e,t){if(gn(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!kt.call(t,i)||!gn(e[i],t[i]))return!1}return!0}function wn(e){switch(e.tag){case 5:return Et(e.type);case 16:return Et(`Lazy`);case 13:return Et(`Suspense`);case 19:return Et(`SuspenseList`);case 0:case 2:case 15:return e=Ot(e.type,!1),e;case 11:return e=Ot(e.type.render,!1),e;case 1:return e=Ot(e.type,!0),e;default:return``}}function Tn(e,t){if(e&&e.defaultProps){for(var n in t=i({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var En=Mt(null),Dn=null,On=null,kn=null;function An(){kn=On=Dn=null}function jn(e,t,n){ye?(k(En,t._currentValue),t._currentValue=n):(k(En,t._currentValue2),t._currentValue2=n)}function Mn(e){var t=En.current;O(En),ye?e._currentValue=t:e._currentValue2=t}function Nn(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Pn(e,t){Dn=e,kn=On=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(B=!0),e.firstContext=null)}function Fn(e){var t=ye?e._currentValue:e._currentValue2;if(kn!==e)if(e={context:e,memoizedValue:t,next:null},On===null){if(Dn===null)throw Error(a(308));On=e,Dn.dependencies={lanes:0,firstContext:e}}else On=On.next=e;return t}var In=null,Ln=!1;function Rn(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zn(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vn(e,t){var n=e.updateQueue;n!==null&&(n=n.shared,po!==null&&e.mode&1&&!(W&2)?(e=n.interleaved,e===null?(t.next=t,In===null?In=[n]:In.push(n)):(t.next=e.next,e.next=t),n.interleaved=t):(e=n.pending,e===null?t.next=t:(t.next=e.next,e.next=t),n.pending=t))}function Hn(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,en(e,n)}}function Un(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wn(e,t,n,r){var a=e.updateQueue;Ln=!1;var o=a.firstBaseUpdate,s=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var l=c,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,c=d.lastBaseUpdate,c!==s&&(c===null?d.firstBaseUpdate=u:c.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=a.baseState;s=0,d=u=l=null,c=o;do{var p=c.lane,m=c.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:m,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});a:{var h=e,g=c;switch(p=t,m=n,g.tag){case 1:if(h=g.payload,typeof h==`function`){f=h.call(m,f,p);break a}f=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(m,f,p):h,p==null)break a;f=i({},f,p);break a;case 2:Ln=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,p=a.effects,p===null?a.effects=[c]:p.push(c))}else m={eventTime:m,lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},d===null?(u=d=m,l=f):d=d.next=m,s|=p;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;p=c,c=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(1);if(d===null&&(l=f),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=d,t=a.shared.interleaved,t!==null){a=t;do s|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);G|=s,e.lanes=s,e.memoizedState=f}}function Gn(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!=`function`)throw Error(a(191,i));i.call(r)}}}var Kn=new n.Component().refs;function qn(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:i({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jn={isMounted:function(e){return(e=e._reactInternals)?ee(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Io(),i=Lo(e),a=Bn(r,i);a.payload=t,n!=null&&(a.callback=n),Vn(e,a),t=Ro(e,i,r),t!==null&&Hn(t,e,i)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Io(),i=Lo(e),a=Bn(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),Vn(e,a),t=Ro(e,i,r),t!==null&&Hn(t,e,i)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Io(),r=Lo(e),i=Bn(n,r);i.tag=2,t!=null&&(i.callback=t),Vn(e,i),t=Ro(e,r,n),t!==null&&Hn(t,e,r)}};function Yn(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Cn(n,r)||!Cn(i,a):!0}function Xn(e,t,n){var r=!1,i=Nt,a=t.contextType;return typeof a==`object`&&a?a=Fn(a):(i=It(t)?j:A.current,r=t.contextTypes,a=(r=r!=null)?Ft(e,i):Nt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Jn,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Zn(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Jn.enqueueReplaceState(t,t.state,null)}function Qn(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Kn,Rn(e);var a=t.contextType;typeof a==`object`&&a?i.context=Fn(a):(a=It(t)?j:A.current,i.context=Ft(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(qn(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&Jn.enqueueReplaceState(i,i.state,null),Wn(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}var $n=[],er=0,tr=null,nr=0,rr=[],ir=0,ar=null,or=1,sr=``;function cr(e,t){$n[er++]=nr,$n[er++]=tr,tr=e,nr=t}function lr(e,t,n){rr[ir++]=or,rr[ir++]=sr,rr[ir++]=ar,ar=e;var r=or;e=sr;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var a=32-Ht(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,or=1<<32-Ht(t)+i|n<<i|r,sr=a+e}else or=1<<a|n<<i|r,sr=e}function ur(e){e.return!==null&&(cr(e,1),lr(e,1,0))}function dr(e){for(;e===tr;)tr=$n[--er],$n[er]=null,nr=$n[--er],$n[er]=null;for(;e===ar;)ar=rr[--ir],rr[ir]=null,sr=rr[--ir],rr[ir]=null,or=rr[--ir],rr[ir]=null}var fr=null,pr=null,I=!1,mr=!1,hr=null;function gr(e,t){var n=gs(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _r(e,t){switch(e.tag){case 5:return t=it(t,e.type,e.pendingProps),t===null?!1:(e.stateNode=t,fr=e,pr=dt(t),!0);case 6:return t=at(t,e.pendingProps),t===null?!1:(e.stateNode=t,fr=e,pr=null,!0);case 13:if(t=ot(t),t!==null){var n=ar===null?null:{id:or,overflow:sr};return e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=gs(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,fr=e,pr=null,!0}return!1;default:return!1}}function vr(e){return(e.mode&1)!=0&&(e.flags&128)==0}function yr(e){if(I){var t=pr;if(t){var n=t;if(!_r(e,t)){if(vr(e))throw Error(a(418));t=ut(n);var r=fr;t&&_r(e,t)?gr(r,n):(e.flags=e.flags&-4097|2,I=!1,fr=e)}}else{if(vr(e))throw Error(a(418));e.flags=e.flags&-4097|2,I=!1,fr=e}}}function br(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;fr=e}function xr(e){if(!Se||e!==fr)return!1;if(!I)return br(e),I=!0,!1;if(e.tag!==3&&(e.tag!==5||St(e.type)&&!me(e.type,e.memoizedProps))){var t=pr;if(t){if(vr(e)){for(e=pr;e;)e=ut(e);throw Error(a(418))}for(;t;)gr(e,t),t=ut(t)}}if(br(e),e.tag===13){if(!Se)throw Error(a(316));if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(317));pr=_t(e)}else pr=fr?ut(e.stateNode):null;return!0}function Sr(){Se&&(pr=fr=null,mr=I=!1)}function Cr(e){hr===null?hr=[e]:hr.push(e)}function wr(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var i=r,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=i.refs;t===Kn&&(t=i.refs={}),e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function Tr(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function Er(e){var t=e._init;return t(e._payload)}function Dr(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function i(e,t){return e=ys(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function u(t){return e&&t.alternate===null&&(t.flags|=2),t}function d(e,t,n,r){return t===null||t.tag!==6?(t=Cs(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n,r){var a=n.type;return a===l?m(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===y&&Er(a)===t.type)?(r=i(t,n.props),r.ref=wr(e,t,n),r.return=e,r):(r=bs(n.type,n.key,n.props,null,e.mode,r),r.ref=wr(e,t,n),r.return=e,r)}function p(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ws(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function m(e,t,n,r,a){return t===null||t.tag!==7?(t=xs(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function h(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=Cs(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case s:return n=bs(t.type,t.key,t.props,null,e.mode,n),n.ref=wr(e,null,t),n.return=e,n;case c:return t=ws(t,e.mode,n),t.return=e,t;case y:var r=t._init;return h(e,r(t._payload),n)}if(ae(t)||S(t))return t=xs(t,e.mode,n,null),t.return=e,t;Tr(e,t)}return null}function g(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?d(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case s:return n.key===i?f(e,t,n,r):null;case c:return n.key===i?p(e,t,n,r):null;case y:return i=n._init,g(e,t,i(n._payload),r)}if(ae(n)||S(n))return i===null?m(e,t,n,r,null):null;Tr(e,n)}return null}function _(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,d(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case s:return e=e.get(r.key===null?n:r.key)||null,f(t,e,r,i);case c:return e=e.get(r.key===null?n:r.key)||null,p(t,e,r,i);case y:var a=r._init;return _(e,t,n,a(r._payload),i)}if(ae(r)||S(r))return e=e.get(n)||null,m(t,e,r,i,null);Tr(t,r)}return null}function v(i,a,s,c){for(var l=null,u=null,d=a,f=a=0,p=null;d!==null&&f<s.length;f++){d.index>f?(p=d,d=null):p=d.sibling;var m=g(i,d,s[f],c);if(m===null){d===null&&(d=p);break}e&&d&&m.alternate===null&&t(i,d),a=o(m,a,f),u===null?l=m:u.sibling=m,u=m,d=p}if(f===s.length)return n(i,d),I&&cr(i,f),l;if(d===null){for(;f<s.length;f++)d=h(i,s[f],c),d!==null&&(a=o(d,a,f),u===null?l=d:u.sibling=d,u=d);return I&&cr(i,f),l}for(d=r(i,d);f<s.length;f++)p=_(d,i,f,s[f],c),p!==null&&(e&&p.alternate!==null&&d.delete(p.key===null?f:p.key),a=o(p,a,f),u===null?l=p:u.sibling=p,u=p);return e&&d.forEach(function(e){return t(i,e)}),I&&cr(i,f),l}function b(i,s,c,l){var u=S(c);if(typeof u!=`function`)throw Error(a(150));if(c=u.call(c),c==null)throw Error(a(151));for(var d=u=null,f=s,p=s=0,m=null,v=c.next();f!==null&&!v.done;p++,v=c.next()){f.index>p?(m=f,f=null):m=f.sibling;var y=g(i,f,v.value,l);if(y===null){f===null&&(f=m);break}e&&f&&y.alternate===null&&t(i,f),s=o(y,s,p),d===null?u=y:d.sibling=y,d=y,f=m}if(v.done)return n(i,f),I&&cr(i,p),u;if(f===null){for(;!v.done;p++,v=c.next())v=h(i,v.value,l),v!==null&&(s=o(v,s,p),d===null?u=v:d.sibling=v,d=v);return I&&cr(i,p),u}for(f=r(i,f);!v.done;p++,v=c.next())v=_(f,i,p,v.value,l),v!==null&&(e&&v.alternate!==null&&f.delete(v.key===null?p:v.key),s=o(v,s,p),d===null?u=v:d.sibling=v,d=v);return e&&f.forEach(function(e){return t(i,e)}),I&&cr(i,p),u}function x(e,r,a,o){if(typeof a==`object`&&a&&a.type===l&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case s:a:{for(var d=a.key,f=r;f!==null;){if(f.key===d){if(d=a.type,d===l){if(f.tag===7){n(e,f.sibling),r=i(f,a.props.children),r.return=e,e=r;break a}}else if(f.elementType===d||typeof d==`object`&&d&&d.$$typeof===y&&Er(d)===f.type){n(e,f.sibling),r=i(f,a.props),r.ref=wr(e,f,a),r.return=e,e=r;break a}n(e,f);break}else t(e,f);f=f.sibling}a.type===l?(r=xs(a.props.children,e.mode,o,a.key),r.return=e,e=r):(o=bs(a.type,a.key,a.props,null,e.mode,o),o.ref=wr(e,r,a),o.return=e,e=o)}return u(e);case c:a:{for(f=a.key;r!==null;){if(r.key===f)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),r=i(r,a.children||[]),r.return=e,e=r;break a}else{n(e,r);break}else t(e,r);r=r.sibling}r=ws(a,e.mode,o),r.return=e,e=r}return u(e);case y:return f=a._init,x(e,r,f(a._payload),o)}if(ae(a))return v(e,r,a,o);if(S(a))return b(e,r,a,o);Tr(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),r=i(r,a),r.return=e,e=r):(n(e,r),r=Cs(a,e.mode,o),r.return=e,e=r),u(e)):n(e,r)}return x}var Or=Dr(!0),kr=Dr(!1),Ar={},jr=Mt(Ar),Mr=Mt(Ar),Nr=Mt(Ar);function Pr(e){if(e===Ar)throw Error(a(174));return e}function Fr(e,t){k(Nr,t),k(Mr,e),k(jr,Ar),e=se(t),O(jr),k(jr,e)}function Ir(){O(jr),O(Mr),O(Nr)}function Lr(e){var t=Pr(Nr.current),n=Pr(jr.current);t=ce(n,e.type,t),n!==t&&(k(Mr,e),k(jr,t))}function Rr(e){Mr.current===e&&(O(jr),O(Mr))}var zr=Mt(0);function Br(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||st(n)||ct(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vr=[];function Hr(){for(var e=0;e<Vr.length;e++){var t=Vr[e];ye?t._workInProgressVersionPrimary=null:t._workInProgressVersionSecondary=null}Vr.length=0}var Ur=o.ReactCurrentDispatcher,Wr=o.ReactCurrentBatchConfig,Gr=0,Kr=null,qr=null,Jr=null,Yr=!1,Xr=!1,Zr=0,Qr=0;function $r(){throw Error(a(321))}function ei(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gn(e[n],t[n]))return!1;return!0}function ti(e,t,n,r,i,o){if(Gr=o,Kr=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ur.current=e===null||e.memoizedState===null?Li:Ri,e=n(r,i),Xr){o=0;do{if(Xr=!1,Zr=0,25<=o)throw Error(a(301));o+=1,Jr=qr=null,t.updateQueue=null,Ur.current=zi,e=n(r,i)}while(Xr)}if(Ur.current=Ii,t=qr!==null&&qr.next!==null,Gr=0,Jr=qr=Kr=null,Yr=!1,t)throw Error(a(300));return e}function ni(){var e=Zr!==0;return Zr=0,e}function ri(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jr===null?Kr.memoizedState=Jr=e:Jr=Jr.next=e,Jr}function ii(){if(qr===null){var e=Kr.alternate;e=e===null?null:e.memoizedState}else e=qr.next;var t=Jr===null?Kr.memoizedState:Jr.next;if(t!==null)Jr=t,qr=e;else{if(e===null)throw Error(a(310));qr=e,e={memoizedState:qr.memoizedState,baseState:qr.baseState,baseQueue:qr.baseQueue,queue:qr.queue,next:null},Jr===null?Kr.memoizedState=Jr=e:Jr=Jr.next=e}return Jr}function ai(e,t){return typeof t==`function`?t(e):t}function oi(e){var t=ii(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=qr,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((Gr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=r):l=l.next=f,Kr.lanes|=d,G|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=c,gn(r,t.memoizedState)||(B=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Kr.lanes|=o,G|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function si(e){var t=ii(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);gn(o,t.memoizedState)||(B=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ci(){}function li(e,t){var n=Kr,r=ii(),i=t(),o=!gn(r.memoizedState,i);if(o&&(r.memoizedState=i,B=!0),r=r.queue,bi(fi.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Jr!==null&&Jr.memoizedState.tag&1){if(n.flags|=2048,hi(9,di.bind(null,n,r,i,t),void 0,null),po===null)throw Error(a(349));Gr&30||ui(n,t,i)}return i}function ui(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Kr.updateQueue,t===null?(t={lastEffect:null,stores:null},Kr.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function di(e,t,n,r){t.value=n,t.getSnapshot=r,pi(t)&&Ro(e,1,-1)}function fi(e,t,n){return n(function(){pi(t)&&Ro(e,1,-1)})}function pi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gn(e,n)}catch{return!0}}function mi(e){var t=ri();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:e},t.queue=e,e=e.dispatch=ji.bind(null,Kr,e),[t.memoizedState,e]}function hi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Kr.updateQueue,t===null?(t={lastEffect:null,stores:null},Kr.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gi(){return ii().memoizedState}function _i(e,t,n,r){var i=ri();Kr.flags|=e,i.memoizedState=hi(1|t,n,void 0,r===void 0?null:r)}function vi(e,t,n,r){var i=ii();r=r===void 0?null:r;var a=void 0;if(qr!==null){var o=qr.memoizedState;if(a=o.destroy,r!==null&&ei(r,o.deps)){i.memoizedState=hi(t,n,a,r);return}}Kr.flags|=e,i.memoizedState=hi(1|t,n,a,r)}function yi(e,t){return _i(8390656,8,e,t)}function bi(e,t){return vi(2048,8,e,t)}function xi(e,t){return vi(4,2,e,t)}function Si(e,t){return vi(4,4,e,t)}function Ci(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wi(e,t,n){return n=n==null?null:n.concat([e]),vi(4,4,Ci.bind(null,t,e),n)}function Ti(){}function Ei(e,t){var n=ii();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ei(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Di(e,t){var n=ii();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ei(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Oi(e,t){var n=P;P=n!==0&&4>n?n:4,e(!0);var r=Wr.transition;Wr.transition={};try{e(!1),t()}finally{P=n,Wr.transition=r}}function ki(){return ii().memoizedState}function Ai(e,t,n){var r=Lo(e);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mi(e)?Ni(t,n):(Pi(e,t,n),n=Io(),e=Ro(e,r,n),e!==null&&Fi(e,t,r))}function ji(e,t,n){var r=Lo(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mi(e))Ni(t,i);else{Pi(e,t,i);var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,gn(s,o))return}catch{}n=Io(),e=Ro(e,r,n),e!==null&&Fi(e,t,r)}}function Mi(e){var t=e.alternate;return e===Kr||t!==null&&t===Kr}function Ni(e,t){Xr=Yr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pi(e,t,n){po!==null&&e.mode&1&&!(W&2)?(e=t.interleaved,e===null?(n.next=n,In===null?In=[t]:In.push(t)):(n.next=e.next,e.next=n),t.interleaved=n):(e=t.pending,e===null?n.next=n:(n.next=e.next,e.next=n),t.pending=n)}function Fi(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,en(e,n)}}var Ii={readContext:Fn,useCallback:$r,useContext:$r,useEffect:$r,useImperativeHandle:$r,useInsertionEffect:$r,useLayoutEffect:$r,useMemo:$r,useReducer:$r,useRef:$r,useState:$r,useDebugValue:$r,useDeferredValue:$r,useTransition:$r,useMutableSource:$r,useSyncExternalStore:$r,useId:$r,unstable_isNewReconciler:!1},Li={readContext:Fn,useCallback:function(e,t){return ri().memoizedState=[e,t===void 0?null:t],e},useContext:Fn,useEffect:yi,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),_i(4194308,4,Ci.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _i(4194308,4,e,t)},useInsertionEffect:function(e,t){return _i(4,2,e,t)},useMemo:function(e,t){var n=ri();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ri();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ai.bind(null,Kr,e),[r.memoizedState,e]},useRef:function(e){var t=ri();return e={current:e},t.memoizedState=e},useState:mi,useDebugValue:Ti,useDeferredValue:function(e){var t=mi(e),n=t[0],r=t[1];return yi(function(){var t=Wr.transition;Wr.transition={};try{r(e)}finally{Wr.transition=t}},[e]),n},useTransition:function(){var e=mi(!1),t=e[0];return e=Oi.bind(null,e[1]),ri().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Kr,i=ri();if(I){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),po===null)throw Error(a(349));Gr&30||ui(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,yi(fi.bind(null,r,o,e),[e]),r.flags|=2048,hi(9,di.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ri(),t=po.identifierPrefix;if(I){var n=sr,r=or;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Zr++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Qr++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},Ri={readContext:Fn,useCallback:Ei,useContext:Fn,useEffect:bi,useImperativeHandle:wi,useInsertionEffect:xi,useLayoutEffect:Si,useMemo:Di,useReducer:oi,useRef:gi,useState:function(){return oi(ai)},useDebugValue:Ti,useDeferredValue:function(e){var t=oi(ai),n=t[0],r=t[1];return bi(function(){var t=Wr.transition;Wr.transition={};try{r(e)}finally{Wr.transition=t}},[e]),n},useTransition:function(){return[oi(ai)[0],ii().memoizedState]},useMutableSource:ci,useSyncExternalStore:li,useId:ki,unstable_isNewReconciler:!1},zi={readContext:Fn,useCallback:Ei,useContext:Fn,useEffect:bi,useImperativeHandle:wi,useInsertionEffect:xi,useLayoutEffect:Si,useMemo:Di,useReducer:si,useRef:gi,useState:function(){return si(ai)},useDebugValue:Ti,useDeferredValue:function(e){var t=si(ai),n=t[0],r=t[1];return bi(function(){var t=Wr.transition;Wr.transition={};try{r(e)}finally{Wr.transition=t}},[e]),n},useTransition:function(){return[si(ai)[0],ii().memoizedState]},useMutableSource:ci,useSyncExternalStore:li,useId:ki,unstable_isNewReconciler:!1};function Bi(e,t){try{var n=``,r=t;do n+=wn(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i}}function Vi(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Hi=typeof WeakMap==`function`?WeakMap:Map;function Ui(e,t,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Eo||(Eo=!0,Do=r),Vi(e,t)},n}function Wi(e,t,n){n=Bn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Vi(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){Vi(e,t),typeof r!=`function`&&(Oo===null?Oo=new Set([this]):Oo.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Gi(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Hi;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ls.bind(null,e,t,n),t.then(e,e))}function Ki(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null?!0:t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function qi(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bn(-1,1),t.tag=2,Vn(n,t))),n.lanes|=1),e)}function Ji(e){e.flags|=4}function Yi(e,t){if(e!==null&&e.child===t.child)return!0;if(t.flags&16)return!1;for(e=t.child;e!==null;){if(e.flags&12854||e.subtreeFlags&12854)return!1;e=e.sibling}return!0}var Xi,Zi,L,R;if(be)Xi=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)fe(e,n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Zi=function(){},L=function(e,t,n,r,i){if(e=e.memoizedProps,e!==r){var a=t.stateNode,o=Pr(jr.current);n=pe(a,n,e,r,i,o),(t.updateQueue=n)&&Ji(t)}},R=function(e,t,n,r){n!==r&&Ji(t)};else if(xe){Xi=function(e,t,n,r){for(var i=t.child;i!==null;){if(i.tag===5){var a=i.stateNode;n&&r&&(a=D(a,i.type,i.memoizedProps,i)),fe(e,a)}else if(i.tag===6)a=i.stateNode,n&&r&&(a=rt(a,i.memoizedProps,i)),fe(e,a);else if(i.tag!==4){if(i.tag===22&&i.memoizedState!==null)a=i.child,a!==null&&(a.return=i),Xi(e,i,!0,!0);else if(i.child!==null){i.child.return=i,i=i.child;continue}}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};var Qi=function(e,t,n,r){for(var i=t.child;i!==null;){if(i.tag===5){var a=i.stateNode;n&&r&&(a=D(a,i.type,i.memoizedProps,i)),et(e,a)}else if(i.tag===6)a=i.stateNode,n&&r&&(a=rt(a,i.memoizedProps,i)),et(e,a);else if(i.tag!==4){if(i.tag===22&&i.memoizedState!==null)a=i.child,a!==null&&(a.return=i),Qi(e,i,!0,!0);else if(i.child!==null){i.child.return=i,i=i.child;continue}}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};Zi=function(e,t){var n=t.stateNode;if(!Yi(e,t)){e=n.containerInfo;var r=$e(e);Qi(r,t,!1,!1),n.pendingChildren=r,Ji(t),tt(e,r)}},L=function(e,t,n,r,i){var a=e.stateNode,o=e.memoizedProps;if((e=Yi(e,t))&&o===r)t.stateNode=a;else{var s=t.stateNode,c=Pr(jr.current),l=null;o!==r&&(l=pe(s,n,o,r,i,c)),e&&l===null?t.stateNode=a:(a=Qe(a,l,n,o,r,t,e,s),E(a,n,r,i,c)&&Ji(t),t.stateNode=a,e?Ji(t):Xi(a,t,!1,!1))}},R=function(e,t,n,r){n===r?t.stateNode=e.stateNode:(e=Pr(Nr.current),n=Pr(jr.current),t.stateNode=he(r,e,n,t),Ji(t))}}else Zi=function(){},L=function(){},R=function(){};function $i(e,t){if(!I)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function z(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ea(e,t,n){var r=t.pendingProps;switch(dr(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return z(t),null;case 1:return It(t.type)&&Lt(),z(t),null;case 3:return r=t.stateNode,Ir(),O(Pt),O(A),Hr(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xr(t)?Ji(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,hr!==null&&(Uo(hr),hr=null))),Zi(e,t),z(t),null;case 5:Rr(t),n=Pr(Nr.current);var i=t.type;if(e!==null&&t.stateNode!=null)L(e,t,i,r,n),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(a(166));return z(t),null}if(e=Pr(jr.current),xr(t)){if(!Se)throw Error(a(175));e=mt(t.stateNode,t.type,t.memoizedProps,n,e,t,!mr),t.updateQueue=e,e!==null&&Ji(t)}else{var o=de(i,r,n,e,t);Xi(o,t,!1,!1),t.stateNode=o,E(o,i,r,n,e)&&Ji(t)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return z(t),null;case 6:if(e&&t.stateNode!=null)R(e,t,e.memoizedProps,r);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(a(166));if(e=Pr(Nr.current),n=Pr(jr.current),xr(t)){if(!Se)throw Error(a(176));if(e=t.stateNode,r=t.memoizedProps,(n=ht(e,r,t,!mr))&&(i=fr,i!==null))switch(o=(i.mode&1)!=0,i.tag){case 3:Ct(i.stateNode.containerInfo,e,r,o);break;case 5:wt(i.type,i.memoizedProps,i.stateNode,e,r,o)}n&&Ji(t)}else t.stateNode=he(r,e,n,t)}return z(t),null;case 13:if(O(zr),r=t.memoizedState,I&&pr!==null&&t.mode&1&&!(t.flags&128)){for(e=pr;e;)e=ut(e);return Sr(),t.flags|=98560,t}if(r!==null&&r.dehydrated!==null){if(r=xr(t),e===null){if(!r)throw Error(a(318));if(!Se)throw Error(a(344));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(317));gt(e,t)}else Sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;return z(t),null}return hr!==null&&(Uo(hr),hr=null),t.flags&128?(t.lanes=n,t):(r=r!==null,n=!1,e===null?xr(t):n=e.memoizedState!==null,r&&!n&&(t.child.flags|=8192,t.mode&1&&(e===null||zr.current&1?vo===0&&(vo=3):Qo())),t.updateQueue!==null&&(t.flags|=4),z(t),null);case 4:return Ir(),Zi(e,t),e===null&&we(t.stateNode.containerInfo),z(t),null;case 10:return Mn(t.type._context),z(t),null;case 17:return It(t.type)&&Lt(),z(t),null;case 19:if(O(zr),i=t.memoizedState,i===null)return z(t),null;if(r=(t.flags&128)!=0,o=i.rendering,o===null)if(r)$i(i,!1);else{if(vo!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Br(e),o!==null){for(t.flags|=128,$i(i,!1),e=o.updateQueue,e!==null&&(t.updateQueue=e,t.flags|=4),t.subtreeFlags=0,e=n,r=t.child;r!==null;)n=r,i=e,n.flags&=14680066,o=n.alternate,o===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,i=o.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),r=r.sibling;return k(zr,zr.current&1|2),t.child}e=e.sibling}i.tail!==null&&sn()>To&&(t.flags|=128,r=!0,$i(i,!1),t.lanes=4194304)}else{if(!r)if(e=Br(o),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,e!==null&&(t.updateQueue=e,t.flags|=4),$i(i,!0),i.tail===null&&i.tailMode===`hidden`&&!o.alternate&&!I)return z(t),null}else 2*sn()-i.renderingStartTime>To&&n!==1073741824&&(t.flags|=128,r=!0,$i(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(e=i.last,e===null?t.child=o:e.sibling=o,i.last=o)}return i.tail===null?(z(t),null):(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=sn(),t.sibling=null,e=zr.current,k(zr,r?e&1|2:e&1),t);case 22:case 23:return Jo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?go&1073741824&&(z(t),be&&t.subtreeFlags&6&&(t.flags|=8192)):z(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}var ta=o.ReactCurrentOwner,B=!1;function na(e,t,n,r){t.child=e===null?kr(t,null,n,r):Or(t,e.child,n,r)}function ra(e,t,n,r,i){n=n.render;var a=t.ref;return Pn(t,i),r=ti(e,t,n,r,a,i),n=ni(),e!==null&&!B?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ca(e,t,i)):(I&&n&&ur(t),t.flags|=1,na(e,t,r,i),t.child)}function ia(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!_s(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,aa(e,t,a,r,i)):(e=bs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Cn:n,n(o,r)&&e.ref===t.ref)return Ca(e,t,i)}return t.flags|=1,e=ys(a,r),e.ref=t.ref,e.return=t,t.child=e}function aa(e,t,n,r,i){if(e!==null&&Cn(e.memoizedProps,r)&&e.ref===t.ref)if(B=!1,(e.lanes&i)!==0)e.flags&131072&&(B=!0);else return t.lanes=e.lanes,Ca(e,t,i);return ca(e,t,n,r,i)}function oa(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`)if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null},k(_o,go),go|=n;else if(n&1073741824)t.memoizedState={baseLanes:0,cachePool:null},r=a===null?n:a.baseLanes,k(_o,go),go|=r;else return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null},t.updateQueue=null,k(_o,go),go|=e,null;else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),k(_o,go),go|=r;return na(e,t,i,n),t.child}function sa(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ca(e,t,n,r,i){var a=It(n)?j:A.current;return a=Ft(t,a),Pn(t,i),n=ti(e,t,n,r,a,i),r=ni(),e!==null&&!B?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ca(e,t,i)):(I&&r&&ur(t),t.flags|=1,na(e,t,n,i),t.child)}function la(e,t,n,r,i){if(It(n)){var a=!0;Bt(t)}else a=!1;if(Pn(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),Xn(t,n,r),Qn(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=Fn(l):(l=It(n)?j:A.current,l=Ft(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Zn(t,o,r,l),Ln=!1;var f=t.memoizedState;o.state=f,Wn(t,r,o,i),c=t.memoizedState,s!==r||f!==c||Pt.current||Ln?(typeof u==`function`&&(qn(t,n,u,r),c=t.memoizedState),(s=Ln||Yn(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,zn(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:Tn(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=Fn(c):(c=It(n)?j:A.current,c=Ft(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Zn(t,o,r,c),Ln=!1,f=t.memoizedState,o.state=f,Wn(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||Pt.current||Ln?(typeof p==`function`&&(qn(t,n,p,r),m=t.memoizedState),(l=Ln||Yn(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return ua(e,t,n,r,a,i)}function ua(e,t,n,r,i,a){sa(e,t);var o=(t.flags&128)!=0;if(!r&&!o)return i&&Vt(t,n,!1),Ca(e,t,a);r=t.stateNode,ta.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Or(t,e.child,null,a),t.child=Or(t,null,s,a)):na(e,t,s,a),t.memoizedState=r.state,i&&Vt(t,n,!0),t.child}function da(e){var t=e.stateNode;t.pendingContext?Rt(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rt(e,t.context,!1),Fr(e,t.containerInfo)}function fa(e,t,n,r,i){return Sr(),Cr(i),t.flags|=256,na(e,t,n,r),t.child}var pa={dehydrated:null,treeContext:null,retryLane:0};function ma(e){return{baseLanes:e,cachePool:null}}function ha(e,t,n){var r=t.pendingProps,i=zr.current,o=!1,s=(t.flags&128)!=0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!=0),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),k(zr,i&1),e===null)return yr(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?ct(e)?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:`hidden`,children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Ss(i,r,0,null),e=xs(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ma(n),t.memoizedState=pa,e):ga(t,i));if(i=e.memoizedState,i!==null){if(c=i.dehydrated,c!==null){if(s)return t.flags&256?(t.flags&=-257,ya(e,t,n,Error(a(422)))):t.memoizedState===null?(o=r.fallback,i=t.mode,r=Ss({mode:`visible`,children:r.children},i,0,null),o=xs(o,i,n,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Or(t,e.child,null,n),t.child.memoizedState=ma(n),t.memoizedState=pa,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))t=ya(e,t,n,null);else if(ct(c))t=ya(e,t,n,Error(a(419)));else if(r=(n&e.childLanes)!==0,B||r){if(r=po,r!==null){switch(n&-n){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}r=(o&(r.suspendedLanes|n))===0?o:0,r!==0&&r!==i.retryLane&&(i.retryLane=r,Ro(e,r,-1))}Qo(),t=ya(e,t,n,Error(a(421)))}else st(c)?(t.flags|=128,t.child=e.child,t=ds.bind(null,e),lt(c,t),t=null):(n=i.treeContext,Se&&(pr=pt(c),fr=t,I=!0,hr=null,mr=!1,n!==null&&(rr[ir++]=or,rr[ir++]=sr,rr[ir++]=ar,or=n.id,sr=n.overflow,ar=t)),t=ga(t,t.pendingProps.children),t.flags|=4096);return t}return o?(r=va(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?ma(n):{baseLanes:i.baseLanes|n,cachePool:null},o.childLanes=e.childLanes&~n,t.memoizedState=pa,r):(n=_a(e,t,r.children,n),t.memoizedState=null,n)}return o?(r=va(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?ma(n):{baseLanes:i.baseLanes|n,cachePool:null},o.childLanes=e.childLanes&~n,t.memoizedState=pa,r):(n=_a(e,t,r.children,n),t.memoizedState=null,n)}function ga(e,t){return t=Ss({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function _a(e,t,n,r){var i=e.child;return e=i.sibling,n=ys(i,{mode:`visible`,children:n}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n}function va(e,t,n,r,i){var a=t.mode;e=e.child;var o=e.sibling,s={mode:`hidden`,children:n};return!(a&1)&&t.child!==e?(n=t.child,n.childLanes=0,n.pendingProps=s,t.deletions=null):(n=ys(e,s),n.subtreeFlags=e.subtreeFlags&14680064),o===null?(r=xs(r,a,i,null),r.flags|=2):r=ys(o,r),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function ya(e,t,n,r){return r!==null&&Cr(r),Or(t,e.child,null,n),e=ga(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ba(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Nn(e.return,t,n)}function xa(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Sa(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(na(e,t,r.children,n),r=zr.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ba(e,n,t);else if(e.tag===19)ba(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(k(zr,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Br(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xa(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Br(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xa(t,!0,n,null,a);break;case`together`:xa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ca(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),G|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=ys(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ys(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wa(e,t,n){switch(t.tag){case 3:da(t),Sr();break;case 5:Lr(t);break;case 1:It(t.type)&&Bt(t);break;case 4:Fr(t,t.stateNode.containerInfo);break;case 10:jn(t,t.type._context,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(k(zr,zr.current&1),e=Ca(e,t,n),e===null?null:e.sibling):ha(e,t,n):(k(zr,zr.current&1),t.flags|=128,null);k(zr,zr.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sa(e,t,n);t.flags|=128}var i=t.memoizedState;if(i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(zr,zr.current),r)break;return null;case 22:case 23:return t.lanes=0,oa(e,t,n)}return Ca(e,t,n)}function Ta(e,t){switch(dr(t),t.tag){case 1:return It(t.type)&&Lt(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ir(),O(Pt),O(A),Hr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rr(t),null;case 13:if(O(zr),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(zr),null;case 4:return Ir(),null;case 10:return Mn(t.type._context),null;case 22:case 23:return Jo(),null;case 24:return null;default:return null}}var Ea=!1,Da=!1,V=typeof WeakSet==`function`?WeakSet:Set,H=null;function Oa(e,t){var n=e.ref;if(n!==null)if(typeof n==`function`)try{n(null)}catch(n){cs(e,t,n)}else n.current=null}function ka(e,t,n){try{n()}catch(n){cs(e,t,n)}}var Aa=!1;function ja(e,t){for(le(e.containerInfo),H=t;H!==null;)if(e=H,t=e.child,e.subtreeFlags&1028&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var n=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(n!==null){var r=n.memoizedProps,i=n.memoizedState,o=e.stateNode;o.__reactInternalSnapshotBeforeUpdate=o.getSnapshotBeforeUpdate(e.elementType===e.type?r:Tn(e.type,r),i)}break;case 3:be&&Ze(e.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(t){cs(e,e.return,t)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return n=Aa,Aa=!1,n}function Ma(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&ka(t,n,a)}i=i.next}while(i!==r)}}function Na(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Pa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=oe(n);break;default:e=n}typeof t==`function`?t(e):t.current=e}}function Fa(e,t,n){if(pn&&typeof pn.onCommitFiberUnmount==`function`)try{pn.onCommitFiberUnmount(fn,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var r=e=e.next;do{var i=r,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&ka(t,n,a),r=r.next}while(r!==e)}break;case 1:if(Oa(t,n),e=t.stateNode,typeof e.componentWillUnmount==`function`)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(e){cs(t,n,e)}break;case 5:Oa(t,n);break;case 4:be?Ua(e,t,n):xe&&xe&&(t=t.stateNode.containerInfo,n=$e(t),nt(t,n))}}function Ia(e,t,n){for(var r=t;;)if(Fa(e,r,n),r.child===null||be&&r.tag===4){if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}else r.child.return=r,r=r.child}function La(e){var t=e.alternate;t!==null&&(e.alternate=null,La(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ee(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ra(e){return e.tag===5||e.tag===3||e.tag===4}function za(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ra(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ba(e){if(be){a:{for(var t=e.return;t!==null;){if(Ra(t))break a;t=t.return}throw Error(a(160))}var n=t;switch(n.tag){case 5:t=n.stateNode,n.flags&32&&(Ke(t),n.flags&=-33),n=za(e),Ha(e,n,t);break;case 3:case 4:t=n.stateNode.containerInfo,n=za(e),Va(e,n,t);break;default:throw Error(a(161))}}}function Va(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?Ue(n,e,t):Re(n,e);else if(r!==4&&(e=e.child,e!==null))for(Va(e,t,n),e=e.sibling;e!==null;)Va(e,t,n),e=e.sibling}function Ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?He(n,e,t):Le(n,e);else if(r!==4&&(e=e.child,e!==null))for(Ha(e,t,n),e=e.sibling;e!==null;)Ha(e,t,n),e=e.sibling}function Ua(e,t,n){for(var r=t,i=!1,o,s;;){if(!i){i=r.return;a:for(;;){if(i===null)throw Error(a(160));switch(o=i.stateNode,i.tag){case 5:s=!1;break a;case 3:o=o.containerInfo,s=!0;break a;case 4:o=o.containerInfo,s=!0;break a}i=i.return}i=!0}if(r.tag===5||r.tag===6)Ia(e,r,n),s?Ge(o,r.stateNode):We(o,r.stateNode);else if(r.tag===18)s?xt(o,r.stateNode):bt(o,r.stateNode);else if(r.tag===4){if(r.child!==null){o=r.stateNode.containerInfo,s=!0,r.child.return=r,r=r.child;continue}}else if(Fa(e,r,n),r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return,r.tag===4&&(i=!1)}r.sibling.return=r.return,r=r.sibling}}function Wa(e,t){if(be){switch(t.tag){case 0:case 11:case 14:case 15:Ma(3,t,t.return),Na(3,t),Ma(5,t,t.return);return;case 1:return;case 5:var n=t.stateNode;if(n!=null){var r=t.memoizedProps;e=e===null?r:e.memoizedProps;var i=t.type,o=t.updateQueue;t.updateQueue=null,o!==null&&Ve(n,o,i,e,r,t)}return;case 6:if(t.stateNode===null)throw Error(a(162));n=t.memoizedProps,ze(t.stateNode,e===null?n:e.memoizedProps,n);return;case 3:Se&&e!==null&&e.memoizedState.isDehydrated&&vt(t.stateNode.containerInfo);return;case 12:return;case 13:Ga(t);return;case 19:Ga(t);return;case 17:return}throw Error(a(163))}switch(t.tag){case 0:case 11:case 14:case 15:Ma(3,t,t.return),Na(3,t),Ma(5,t,t.return);return;case 12:return;case 13:Ga(t);return;case 19:Ga(t);return;case 3:Se&&e!==null&&e.memoizedState.isDehydrated&&vt(t.stateNode.containerInfo);break;case 22:case 23:return}a:if(xe){switch(t.tag){case 1:case 5:case 6:break a;case 3:case 4:t=t.stateNode,nt(t.containerInfo,t.pendingChildren);break a}throw Error(a(163))}}function Ga(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new V),t.forEach(function(t){var r=fs.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Ka(e,t){for(H=t;H!==null;){t=H;var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e;be?Ua(a,i,t):Ia(a,i,t);var o=i.alternate;o!==null&&(o.return=null),i.return=null}catch(e){cs(i,t,e)}}if(n=t.child,t.subtreeFlags&12854&&n!==null)n.return=t,H=n;else for(;H!==null;){t=H;try{var s=t.flags;if(s&32&&be&&Ke(t.stateNode),s&512){var c=t.alternate;if(c!==null){var l=c.ref;l!==null&&(typeof l==`function`?l(null):l.current=null)}}if(s&8192)switch(t.tag){case 13:if(t.memoizedState!==null){var u=t.alternate;(u===null||u.memoizedState===null)&&(wo=sn())}break;case 22:var d=t.memoizedState!==null,f=t.alternate,p=f!==null&&f.memoizedState!==null;if(n=t,be){a:if(r=n,i=d,a=null,be)for(var m=r;;){if(m.tag===5){if(a===null){a=m;var h=m.stateNode;i?qe(h):Ye(m.stateNode,m.memoizedProps)}}else if(m.tag===6){if(a===null){var g=m.stateNode;i?Je(g):Xe(g,m.memoizedProps)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===r)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===r)break;for(;m.sibling===null;){if(m.return===null||m.return===r)break a;a===m&&(a=null),m=m.return}a===m&&(a=null),m.sibling.return=m.return,m=m.sibling}}if(d&&!p&&n.mode&1){H=n;for(var _=n.child;_!==null;){for(n=H=_;H!==null;){r=H;var v=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Ma(4,r,r.return);break;case 1:Oa(r,r.return);var y=r.stateNode;if(typeof y.componentWillUnmount==`function`){var b=r.return;try{y.props=r.memoizedProps,y.state=r.memoizedState,y.componentWillUnmount()}catch(e){cs(r,b,e)}}break;case 5:Oa(r,r.return);break;case 22:if(r.memoizedState!==null){Xa(n);continue}}v===null?Xa(n):(v.return=r,H=v)}_=_.sibling}}}switch(s&4102){case 2:Ba(t),t.flags&=-3;break;case 6:Ba(t),t.flags&=-3,Wa(t.alternate,t);break;case 4096:t.flags&=-4097;break;case 4100:t.flags&=-4097,Wa(t.alternate,t);break;case 4:Wa(t.alternate,t)}}catch(e){cs(t,t.return,e)}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}}function qa(e,t,n){H=e,Ja(e,t,n)}function Ja(e,t,n){for(var r=(e.mode&1)!=0;H!==null;){var i=H,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ea;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||Da;s=Ea;var l=Da;if(Ea=o,(Da=c)&&!l)for(H=i;H!==null;)o=H,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Za(i):(c.return=o,H=c);for(;a!==null;)H=a,Ja(a,t,n),a=a.sibling;H=i,Ea=s,Da=l}Ya(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,H=a):Ya(e,t,n)}}function Ya(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Da||Na(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Da)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Tn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Gn(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=oe(t.child.stateNode);break;case 1:n=t.child.stateNode}Gn(t,s,n)}break;case 5:var c=t.stateNode;n===null&&t.flags&4&&Be(c,t.type,t.memoizedProps,t);break;case 6:break;case 4:break;case 12:break;case 13:if(Se&&t.memoizedState===null){var l=t.alternate;if(l!==null){var u=l.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&yt(d)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(a(163))}Da||t.flags&512&&Pa(t)}catch(e){cs(t,t.return,e)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function Xa(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function Za(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Na(4,t)}catch(e){cs(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){cs(t,i,e)}}var a=t.return;try{Pa(t)}catch(e){cs(t,a,e)}break;case 5:var o=t.return;try{Pa(t)}catch(e){cs(t,o,e)}}}catch(e){cs(t,t.return,e)}if(t===e){H=null;break}var s=t.sibling;if(s!==null){s.return=t.return,H=s;break}H=t.return}}var Qa=0,$a=1,eo=2,to=3,no=4;if(typeof Symbol==`function`&&Symbol.for){var ro=Symbol.for;Qa=ro(`selector.component`),$a=ro(`selector.has_pseudo_class`),eo=ro(`selector.role`),to=ro(`selector.test_id`),no=ro(`selector.text`)}function io(e){var t=Ce(e);if(t!=null){if(typeof t.memoizedProps[`data-testname`]!=`string`)throw Error(a(364));return t}if(e=Ae(e),e===null)throw Error(a(362));return e.stateNode.current}function ao(e,t){switch(t.$$typeof){case Qa:if(e.type===t.value)return!0;break;case $a:a:{t=t.value,e=[e,0];for(var n=0;n<e.length;){var r=e[n++],i=e[n++],o=t[i];if(r.tag!==5||!Ne(r)){for(;o!=null&&ao(r,o);)i++,o=t[i];if(i===t.length){t=!0;break a}else for(r=r.child;r!==null;)e.push(r,i),r=r.sibling}}t=!1}return t;case eo:if(e.tag===5&&Pe(e.stateNode,t.value))return!0;break;case no:if((e.tag===5||e.tag===6)&&(e=Me(e),e!==null&&0<=e.indexOf(t.value)))return!0;break;case to:if(e.tag===5&&(e=e.memoizedProps[`data-testname`],typeof e==`string`&&e.toLowerCase()===t.value.toLowerCase()))return!0;break;default:throw Error(a(365))}return!1}function oo(e){switch(e.$$typeof){case Qa:return`<`+(C(e.value)||`Unknown`)+`>`;case $a:return`:has(`+(oo(e)||``)+`)`;case eo:return`[role="`+e.value+`"]`;case no:return`"`+e.value+`"`;case to:return`[data-testname="`+e.value+`"]`;default:throw Error(a(365))}}function so(e,t){var n=[];e=[e,0];for(var r=0;r<e.length;){var i=e[r++],a=e[r++],o=t[a];if(i.tag!==5||!Ne(i)){for(;o!=null&&ao(i,o);)a++,o=t[a];if(a===t.length)n.push(i);else for(i=i.child;i!==null;)e.push(i,a),i=i.sibling}}return n}function co(e,t){if(!ke)throw Error(a(363));e=io(e),e=so(e,t),t=[],e=Array.from(e);for(var n=0;n<e.length;){var r=e[n++];if(r.tag===5)Ne(r)||t.push(r.stateNode);else for(r=r.child;r!==null;)e.push(r),r=r.sibling}return t}var lo=Math.ceil,uo=o.ReactCurrentDispatcher,fo=o.ReactCurrentOwner,U=o.ReactCurrentBatchConfig,W=0,po=null,mo=null,ho=0,go=0,_o=Mt(0),vo=0,yo=null,G=0,bo=0,xo=0,So=null,Co=null,wo=0,To=1/0;function K(){To=sn()+500}var Eo=!1,Do=null,Oo=null,ko=!1,Ao=null,jo=0,Mo=0,No=null,Po=-1,Fo=0;function Io(){return W&6?sn():Po===-1?Po=sn():Po}function Lo(e){return e.mode&1?W&2&&ho!==0?ho&-ho:Sn.transition===null?(e=P,e===0?Te():e):(Fo===0&&(e=Kt,Kt<<=1,!(Kt&4194240)&&(Kt=64),Fo=e),Fo):1}function Ro(e,t,n){if(50<Mo)throw Mo=0,No=null,Error(a(185));var r=zo(e,t);return r===null?null:(N(r,t,n),(!(W&2)||r!==po)&&(r===po&&(!(W&2)&&(bo|=t),vo===4&&Go(r,ho)),Bo(r,n),t===1&&W===0&&!(e.mode&1)&&(K(),F&&xn())),r)}function zo(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function Bo(e,t){var n=e.callbackNode;Xt(e,t);var r=Yt(e,e===po?ho:0);if(r===0)n!==null&&rn(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&rn(n),t===1)e.tag===0?bn(Ko.bind(null,e)):yn(Ko.bind(null,e)),De?Oe(function(){W===0&&xn()}):nn(cn,xn),n=null;else{switch(tn(r)){case 1:n=cn;break;case 4:n=ln;break;case 16:n=un;break;case 536870912:n=dn;break;default:n=un}n=ms(n,Vo.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vo(e,t){if(Po=-1,Fo=0,W&6)throw Error(a(327));var n=e.callbackNode;if(os()&&e.callbackNode!==n)return null;var r=Yt(e,e===po?ho:0);if(r===0)return null;if(r&30||(r&e.expiredLanes)!==0||t)t=$o(e,r);else{t=r;var i=W;W|=2;var o=Zo();(po!==e||ho!==t)&&(K(),Yo(e,t));do try{ts();break}catch(t){Xo(e,t)}while(1);An(),uo.current=o,W=i,mo===null?(po=null,ho=0,t=vo):t=0}if(t!==0){if(t===2&&(i=Zt(e),i!==0&&(r=i,t=Ho(e,i))),t===1)throw n=yo,Yo(e,0),Go(e,r),Bo(e,sn()),n;if(t===6)Go(e,r);else{if(i=e.current.alternate,!(r&30)&&!Wo(i)&&(t=$o(e,r),t===2&&(o=Zt(e),o!==0&&(r=o,t=Ho(e,o))),t===1))throw n=yo,Yo(e,0),Go(e,r),Bo(e,sn()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:is(e,Co);break;case 3:if(Go(e,r),(r&130023424)===r&&(t=wo+500-sn(),10<t)){if(Yt(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Io(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ge(is.bind(null,e,Co),t);break}is(e,Co);break;case 4:if(Go(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ht(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=sn()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lo(r/1960))-r,10<r){e.timeoutHandle=ge(is.bind(null,e,Co),r);break}is(e,Co);break;case 5:is(e,Co);break;default:throw Error(a(329))}}}return Bo(e,sn()),e.callbackNode===n?Vo.bind(null,e):null}function Ho(e,t){var n=So;return e.current.memoizedState.isDehydrated&&(Yo(e,t).flags|=256),e=$o(e,t),e!==2&&(t=Co,Co=n,t!==null&&Uo(t)),e}function Uo(e){Co===null?Co=e:Co.push.apply(Co,e)}function Wo(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!gn(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Go(e,t){for(t&=~xo,t&=~bo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ht(t),r=1<<n;e[n]=-1,t&=~r}}function Ko(e){if(W&6)throw Error(a(327));os();var t=Yt(e,0);if(!(t&1))return Bo(e,sn()),null;var n=$o(e,t);if(e.tag!==0&&n===2){var r=Zt(e);r!==0&&(t=r,n=Ho(e,r))}if(n===1)throw n=yo,Yo(e,0),Go(e,t),Bo(e,sn()),n;if(n===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,is(e,Co),Bo(e,sn()),null}function qo(e){Ao!==null&&Ao.tag===0&&!(W&6)&&os();var t=W;W|=1;var n=U.transition,r=P;try{if(U.transition=null,P=1,e)return e()}finally{P=r,U.transition=n,W=t,!(W&6)&&xn()}}function Jo(){go=_o.current,O(_o)}function Yo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==ve&&(e.timeoutHandle=ve,_e(n)),mo!==null)for(n=mo.return;n!==null;){var r=n;switch(dr(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Lt();break;case 3:Ir(),O(Pt),O(A),Hr();break;case 5:Rr(r);break;case 4:Ir();break;case 13:O(zr);break;case 19:O(zr);break;case 10:Mn(r.type._context);break;case 22:case 23:Jo()}n=n.return}if(po=e,mo=e=ys(e.current,null),ho=go=t,vo=0,yo=null,xo=bo=G=0,Co=So=null,In!==null){for(t=0;t<In.length;t++)if(n=In[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}In=null}return e}function Xo(e,t){do{var n=mo;try{if(An(),Ur.current=Ii,Yr){for(var r=Kr.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yr=!1}if(Gr=0,Jr=qr=Kr=null,Xr=!1,Zr=0,fo.current=null,n===null||n.return===null){vo=1,yo=t,mo=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=ho,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Ki(s);if(m!==null){m.flags&=-257,qi(m,s,c,o,t),m.mode&1&&Gi(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}else{if(!(t&1)){Gi(o,u,t),Qo();break a}l=Error(a(426))}}else if(I&&c.mode&1){var _=Ki(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),qi(_,s,c,o,t),Cr(l);break a}}o=l,vo!==4&&(vo=2),So===null?So=[o]:So.push(o),l=Bi(l,c),c=s;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var v=Ui(c,l,t);Un(c,v);break a;case 1:o=l;var y=c.type,b=c.stateNode;if(!(c.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(Oo===null||!Oo.has(b)))){c.flags|=65536,t&=-t,c.lanes|=t;var x=Wi(c,o,t);Un(c,x);break a}}c=c.return}while(c!==null)}rs(n)}catch(e){t=e,mo===n&&n!==null&&(mo=n=n.return);continue}break}while(1)}function Zo(){var e=uo.current;return uo.current=Ii,e===null?Ii:e}function Qo(){(vo===0||vo===3||vo===2)&&(vo=4),po===null||!(G&268435455)&&!(bo&268435455)||Go(po,ho)}function $o(e,t){var n=W;W|=2;var r=Zo();po===e&&ho===t||Yo(e,t);do try{es();break}catch(t){Xo(e,t)}while(1);if(An(),W=n,uo.current=r,mo!==null)throw Error(a(261));return po=null,ho=0,vo}function es(){for(;mo!==null;)ns(mo)}function ts(){for(;mo!==null&&!an();)ns(mo)}function ns(e){var t=ps(e.alternate,e,go);e.memoizedProps=e.pendingProps,t===null?rs(e):mo=t,fo.current=null}function rs(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ta(n,t),n!==null){n.flags&=32767,mo=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{vo=6,mo=null;return}}else if(n=ea(n,t,go),n!==null){mo=n;return}if(t=t.sibling,t!==null){mo=t;return}mo=t=e}while(t!==null);vo===0&&(vo=5)}function is(e,t){var n=P,r=U.transition;try{U.transition=null,P=1,as(e,t,n)}finally{U.transition=r,P=n}return null}function as(e,t,n){do os();while(Ao!==null);if(W&6)throw Error(a(327));var r=e.finishedWork,i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if($t(e,o),e===po&&(mo=po=null,ho=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ko||(ko=!0,ms(un,function(){return os(),null})),o=(r.flags&15990)!=0,r.subtreeFlags&15990||o){o=U.transition,U.transition=null;var s=P;P=1;var c=W;W|=4,fo.current=null,ja(e,r),Ka(e,r,i),ue(e.containerInfo),e.current=r,qa(r,e,i),on(),W=c,P=s,U.transition=o}else e.current=r;if(ko&&(ko=!1,Ao=e,jo=i),o=e.pendingLanes,o===0&&(Oo=null),mn(r.stateNode,n),Bo(e,sn()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)n(t[r]);if(Eo)throw Eo=!1,e=Do,Do=null,e;return jo&1&&e.tag!==0&&os(),o=e.pendingLanes,o&1?e===No?Mo++:(Mo=0,No=e):Mo=0,xn(),null}function os(){if(Ao!==null){var e=tn(jo),t=U.transition,n=P;try{if(U.transition=null,P=16>e?16:e,Ao===null)var r=!1;else{if(e=Ao,Ao=null,jo=0,W&6)throw Error(a(331));var i=W;for(W|=4,H=e.current;H!==null;){var o=H,s=o.child;if(H.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(H=u;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:Ma(8,d,o)}var f=d.child;if(f!==null)f.return=d,H=f;else for(;H!==null;){d=H;var p=d.sibling,m=d.return;if(La(d),d===u){H=null;break}if(p!==null){p.return=m,H=p;break}H=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}H=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,H=s;else b:for(;H!==null;){if(o=H,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ma(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,H=v;break b}H=o.return}}var y=e.current;for(H=y;H!==null;){s=H;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,H=b;else b:for(s=y;H!==null;){if(c=H,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Na(9,c)}}catch(e){cs(c,c.return,e)}if(c===s){H=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,H=x;break b}H=c.return}}if(W=i,xn(),pn&&typeof pn.onPostCommitFiberRoot==`function`)try{pn.onPostCommitFiberRoot(fn,e)}catch{}r=!0}return r}finally{P=n,U.transition=t}}return!1}function ss(e,t,n){t=Bi(n,t),t=Ui(e,t,1),Vn(e,t),t=Io(),e=zo(e,1),e!==null&&(N(e,1,t),Bo(e,t))}function cs(e,t,n){if(e.tag===3)ss(e,e,n);else for(;t!==null;){if(t.tag===3){ss(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(Oo===null||!Oo.has(r))){e=Bi(n,e),e=Wi(t,e,1),Vn(t,e),e=Io(),t=zo(t,1),t!==null&&(N(t,1,e),Bo(t,e));break}}t=t.return}}function ls(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Io(),e.pingedLanes|=e.suspendedLanes&n,po===e&&(ho&n)===n&&(vo===4||vo===3&&(ho&130023424)===ho&&500>sn()-wo?Yo(e,0):xo|=n),Bo(e,t)}function us(e,t){t===0&&(e.mode&1?(t=qt,qt<<=1,!(qt&130023424)&&(qt=4194304)):t=1);var n=Io();e=zo(e,t),e!==null&&(N(e,t,n),Bo(e,n))}function ds(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),us(e,n)}function fs(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(t),us(e,n)}var ps=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pt.current)B=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return B=!1,wa(e,t,n);B=!!(e.flags&131072)}else B=!1,I&&t.flags&1048576&&lr(t,nr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps;var i=Ft(t,A.current);Pn(t,n),i=ti(null,t,r,e,i,n);var o=ni();return t.flags|=1,typeof i==`object`&&i&&typeof i.render==`function`&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,It(r)?(o=!0,Bt(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rn(t),i.updater=Jn,t.stateNode=i,i._reactInternals=t,Qn(t,r,e,n),t=ua(null,t,r,!0,o,n)):(t.tag=0,I&&o&&ur(t),na(null,t,i,n),t=t.child),t;case 16:r=t.elementType;a:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=vs(r),e=Tn(r,e),i){case 0:t=ca(null,t,r,e,n);break a;case 1:t=la(null,t,r,e,n);break a;case 11:t=ra(null,t,r,e,n);break a;case 14:t=ia(null,t,r,Tn(r.type,e),n);break a}throw Error(a(306,r,``))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tn(r,i),ca(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tn(r,i),la(e,t,r,i,n);case 3:a:{if(da(t),e===null)throw Error(a(387));r=t.pendingProps,o=t.memoizedState,i=o.element,zn(e,t),Wn(t,r,null,n);var s=t.memoizedState;if(r=s.element,Se&&o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Error(a(423)),t=fa(e,t,r,n,i);break a}else if(r!==i){i=Error(a(424)),t=fa(e,t,r,n,i);break a}else for(Se&&(pr=ft(t.stateNode.containerInfo),fr=t,I=!0,hr=null,mr=!1),n=kr(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sr(),r===i){t=Ca(e,t,n);break a}na(e,t,r,n)}t=t.child}return t;case 5:return Lr(t),e===null&&yr(t),r=t.type,i=t.pendingProps,o=e===null?null:e.memoizedProps,s=i.children,me(r,i)?s=null:o!==null&&me(r,o)&&(t.flags|=32),sa(e,t),na(e,t,s,n),t.child;case 6:return e===null&&yr(t),null;case 13:return ha(e,t,n);case 4:return Fr(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Or(t,null,r,n):na(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tn(r,i),ra(e,t,r,i,n);case 7:return na(e,t,t.pendingProps,n),t.child;case 8:return na(e,t,t.pendingProps.children,n),t.child;case 12:return na(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,jn(t,r,s),o!==null)if(gn(o.value,s)){if(o.children===i.children&&!Pt.current){t=Ca(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Bn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Nn(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(a(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Nn(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}na(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Pn(t,n),i=Fn(i),r=r(i),t.flags|=1,na(e,t,r,n),t.child;case 14:return r=t.type,i=Tn(r,t.pendingProps),i=Tn(r.type,i),ia(e,t,r,i,n);case 15:return aa(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tn(r,i),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,It(r)?(e=!0,Bt(t)):e=!1,Pn(t,n),Xn(t,r,i),Qn(t,r,i,n),ua(null,t,r,!0,e,n);case 19:return Sa(e,t,n);case 22:return oa(e,t,n)}throw Error(a(156,t.tag))};function ms(e,t){return nn(e,t)}function hs(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gs(e,t,n,r){return new hs(e,t,n,r)}function _s(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vs(e){if(typeof e==`function`)return+!!_s(e);if(e!=null){if(e=e.$$typeof,e===h)return 11;if(e===v)return 14}return 2}function ys(e,t){var n=e.alternate;return n===null?(n=gs(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bs(e,t,n,r,i,o){var s=2;if(r=e,typeof e==`function`)_s(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case l:return xs(n.children,i,o,t);case u:s=8,i|=8;break;case d:return e=gs(12,n,t,i|2),e.elementType=d,e.lanes=o,e;case g:return e=gs(13,n,t,i),e.elementType=g,e.lanes=o,e;case _:return e=gs(19,n,t,i),e.elementType=_,e.lanes=o,e;case b:return Ss(n,i,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case f:s=10;break a;case m:s=9;break a;case h:s=11;break a;case v:s=14;break a;case y:s=16,r=null;break a}throw Error(a(130,e==null?e:typeof e,``))}return t=gs(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function xs(e,t,n,r){return e=gs(7,e,r,t),e.lanes=n,e}function Ss(e,t,n,r){return e=gs(22,e,r,t),e.elementType=b,e.lanes=n,e.stateNode={},e}function Cs(e,t,n){return e=gs(6,e,null,t),e.lanes=n,e}function ws(e,t,n){return t=gs(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ts(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=ve,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qt(0),this.expirationTimes=Qt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qt(0),this.identifierPrefix=r,this.onRecoverableError=i,Se&&(this.mutableSourceEagerHydrationData=null)}function Es(e,t,n,r,i,a,o,s,c){return e=new Ts(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=gs(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null},Rn(a),e}function Ds(e){if(!e)return Nt;e=e._reactInternals;a:{if(ee(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(It(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var n=e.type;if(It(n))return zt(e,n,t)}return t}function Os(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(a(188)):(e=Object.keys(e).join(`,`),Error(a(268,e)));return e=ne(t),e===null?null:e.stateNode}function ks(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function As(e,t){ks(e,t),(e=e.alternate)&&ks(e,t)}function js(e){return e=ne(e),e===null?null:e.stateNode}function Ms(){return null}return t.attemptContinuousHydration=function(e){e.tag===13&&(Ro(e,134217728,Io()),As(e,134217728))},t.attemptHydrationAtCurrentPriority=function(e){if(e.tag===13){var t=Io(),n=Lo(e);Ro(e,n,t),As(e,n)}},t.attemptSynchronousHydration=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jt(t.pendingLanes);n!==0&&(en(t,n|1),Bo(t,sn()),!(W&6)&&(K(),xn()))}break;case 13:var r=Io();qo(function(){return Ro(e,1,r)}),As(e,1)}},t.batchedUpdates=function(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(K(),F&&xn())}},t.createComponentSelector=function(e){return{$$typeof:Qa,value:e}},t.createContainer=function(e,t,n,r,i,a,o){return Es(e,t,!1,null,n,r,i,a,o)},t.createHasPseudoClassSelector=function(e){return{$$typeof:$a,value:e}},t.createHydrationContainer=function(e,t,n,r,i,a,o,s,c){return e=Es(n,r,!0,e,i,a,o,s,c),e.context=Ds(null),n=e.current,r=Io(),i=Lo(n),a=Bn(r,i),a.callback=t??null,Vn(n,a),e.current.lanes=i,N(e,i,r),Bo(e,r),e},t.createPortal=function(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}},t.createRoleSelector=function(e){return{$$typeof:eo,value:e}},t.createTestNameSelector=function(e){return{$$typeof:to,value:e}},t.createTextSelector=function(e){return{$$typeof:no,value:e}},t.deferredUpdates=function(e){var t=P,n=U.transition;try{return U.transition=null,P=16,e()}finally{P=t,U.transition=n}},t.discreteUpdates=function(e,t,n,r,i){var a=P,o=U.transition;try{return U.transition=null,P=1,e(t,n,r,i)}finally{P=a,U.transition=o,W===0&&K()}},t.findAllNodes=co,t.findBoundingRects=function(e,t){if(!ke)throw Error(a(363));t=co(e,t),e=[];for(var n=0;n<t.length;n++)e.push(je(t[n]));for(t=e.length-1;0<t;t--){n=e[t];for(var r=n.x,i=r+n.width,o=n.y,s=o+n.height,c=t-1;0<=c;c--)if(t!==c){var l=e[c],u=l.x,d=u+l.width,f=l.y,p=f+l.height;if(r>=u&&o>=f&&i<=d&&s<=p){e.splice(t,1);break}else if(!(r!==u||n.width!==l.width||p<o||f>s)){f>o&&(l.height+=f-o,l.y=o),p<s&&(l.height=s-f),e.splice(t,1);break}else if(!(o!==f||n.height!==l.height||d<r||u>i)){u>r&&(l.width+=u-r,l.x=r),d<i&&(l.width=i-u),e.splice(t,1);break}}}return e},t.findHostInstance=Os,t.findHostInstanceWithNoPortals=function(e){return e=T(e),e=e===null?null:ie(e),e===null?null:e.stateNode},t.findHostInstanceWithWarning=function(e){return Os(e)},t.flushControlled=function(e){var t=W;W|=1;var n=U.transition,r=P;try{U.transition=null,P=1,e()}finally{P=r,U.transition=n,W=t,W===0&&(K(),xn())}},t.flushPassiveEffects=os,t.flushSync=qo,t.focusWithin=function(e,t){if(!ke)throw Error(a(363));for(e=io(e),t=so(e,t),t=Array.from(t),e=0;e<t.length;){var n=t[e++];if(!Ne(n)){if(n.tag===5&&Fe(n.stateNode))return!0;for(n=n.child;n!==null;)t.push(n),n=n.sibling}}return!1},t.getCurrentUpdatePriority=function(){return P},t.getFindAllNodesFailureDescription=function(e,t){if(!ke)throw Error(a(363));var n=0,r=[];e=[io(e),0];for(var i=0;i<e.length;){var o=e[i++],s=e[i++],c=t[s];if((o.tag!==5||!Ne(o))&&(ao(o,c)&&(r.push(oo(c)),s++,s>n&&(n=s)),s<t.length))for(o=o.child;o!==null;)e.push(o,s),o=o.sibling}if(n<t.length){for(e=[];n<t.length;n++)e.push(oo(t[n]));return`findAllNodes was able to match part of the selector:
  `+(r.join(` > `)+`

No matching component was found for:
  `)+e.join(` > `)}return null},t.getPublicRootInstance=function(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return oe(e.child.stateNode);default:return e.child.stateNode}},t.injectIntoDevTools=function(e){if(e={bundleType:e.bundleType,version:e.version,rendererPackageName:e.rendererPackageName,rendererConfig:e.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:o.ReactCurrentDispatcher,findHostInstanceByFiber:js,findFiberByHostInstance:e.findFiberByHostInstance||Ms,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.0.0-fc46dba67-20220329`},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`)e=!1;else{var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)e=!0;else{try{fn=t.inject(e),pn=t}catch{}e=!!t.checkDCE}}return e},t.isAlreadyRendering=function(){return!1},t.observeVisibleRects=function(e,t,n,r){if(!ke)throw Error(a(363));e=co(e,t);var i=Ie(e,n,r).disconnect;return{disconnect:function(){i()}}},t.registerMutableSourceForHydration=function(e,t){var n=t._getVersion;n=n(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,n]:e.mutableSourceEagerHydrationData.push(t,n)},t.runWithPriority=function(e,t){var n=P;try{return P=e,t()}finally{P=n}},t.shouldError=function(){return null},t.shouldSuspend=function(){return!1},t.updateContainer=function(e,t,n,r){var i=t.current,a=Io(),o=Lo(i);return n=Ds(n),t.context===null?t.context=n:t.pendingContext=n,t=Bn(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),Vn(i,t),e=Ro(i,o,a),e!==null&&Hn(e,i,o),o},t}})),Um=s(((e,t)=>{t.exports=Hm()})),Wm=e=>typeof e==`object`&&typeof e.then==`function`,Gm=[];function Km(e,t,n=(e,t)=>e===t){if(e===t)return!0;if(!e||!t)return!1;let r=e.length;if(t.length!==r)return!1;for(let i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}function qm(e,t=null,n=!1,r={}){t===null&&(t=[e]);for(let e of Gm)if(Km(t,e.keys,e.equal)){if(n)return;if(Object.prototype.hasOwnProperty.call(e,`error`))throw e.error;if(Object.prototype.hasOwnProperty.call(e,`response`))return r.lifespan&&r.lifespan>0&&(e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout(e.remove,r.lifespan)),e.response;if(!n)throw e.promise}let i={keys:t,equal:r.equal,remove:()=>{let e=Gm.indexOf(i);e!==-1&&Gm.splice(e,1)},promise:(Wm(e)?e:e(...t)).then(e=>{i.response=e,r.lifespan&&r.lifespan>0&&(i.timeout=setTimeout(i.remove,r.lifespan))}).catch(e=>i.error=e)};if(Gm.push(i),!n)throw i.promise}var Jm=(e,t,n)=>qm(e,t,!1,n),Ym=(e,t,n)=>void qm(e,t,!0,n),Xm=e=>{if(e===void 0||e.length===0)Gm.splice(0,Gm.length);else{let t=Gm.find(t=>Km(e,t.keys,t.equal));t&&t.remove()}},Zm=Im(),Qm=u(Um()),$m=Vm(),eh={};function th(e,t){function n(e,{args:t=[],attach:n,...r},i){let a=`${e[0].toUpperCase()}${e.slice(1)}`,o;if(e===`primitive`){if(r.object===void 0)throw Error(`R3F: Primitives without 'object' are invalid!`);let t=r.object;o=dh(t,{type:e,root:i,attach:n,primitive:!0})}else{let r=eh[a];if(!r)throw Error(`R3F: ${a} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(t))throw Error(`R3F: The args prop must be an array!`);o=dh(new r(...t),{type:e,root:i,attach:n,memoizedProps:{args:t}})}return o.__r3f.attach===void 0&&(o instanceof Xp?o.__r3f.attach=`geometry`:o instanceof Ip&&(o.__r3f.attach=`material`)),a!==`inject`&&vh(o,r),o}function r(e,t){let n=!1;if(t){var r,i;(r=t.__r3f)!=null&&r.attach?mh(e,t,t.__r3f.attach):t.isObject3D&&e.isObject3D&&(e.add(t),n=!0),n||(i=e.__r3f)==null||i.objects.push(t),t.__r3f||dh(t,{}),t.__r3f.parent=e,bh(t),yh(t)}}function i(e,t,n){let r=!1;if(t){var i,a;if((i=t.__r3f)!=null&&i.attach)mh(e,t,t.__r3f.attach);else if(t.isObject3D&&e.isObject3D){t.parent=e,t.dispatchEvent({type:`added`}),e.dispatchEvent({type:`childadded`,child:t});let i=e.children.filter(e=>e!==t),a=i.indexOf(n);e.children=[...i.slice(0,a),t,...i.slice(a)],r=!0}r||(a=e.__r3f)==null||a.objects.push(t),t.__r3f||dh(t,{}),t.__r3f.parent=e,bh(t),yh(t)}}function a(e,t,n=!1){e&&[...e].forEach(e=>o(t,e,n))}function o(e,t,n){if(t){var r,i;if(t.__r3f&&(t.__r3f.parent=null),(r=e.__r3f)!=null&&r.objects&&(e.__r3f.objects=e.__r3f.objects.filter(e=>e!==t)),(i=t.__r3f)!=null&&i.attach)hh(e,t,t.__r3f.attach);else if(t.isObject3D&&e.isObject3D){var o;e.remove(t),(o=t.__r3f)!=null&&o.root&&Ch(ch(t),t)}let s=t.__r3f?.primitive,c=!s&&(n===void 0?t.dispose!==null:n);if(s||(a(t.__r3f?.objects,t,c),a(t.children,t,c)),delete t.__r3f,c&&t.dispose&&t.type!==`Scene`){let e=()=>{try{t.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT>`u`?(0,$m.unstable_scheduleCallback)($m.unstable_IdlePriority,e):e()}yh(e)}}function s(e,t,i,a){let s=e.__r3f?.parent;if(!s)return;let c=n(t,i,e.__r3f.root);if(e.children){for(let t of e.children)t.__r3f&&r(c,t);e.children=e.children.filter(e=>!e.__r3f)}e.__r3f.objects.forEach(e=>r(c,e)),e.__r3f.objects=[],e.__r3f.autoRemovedBeforeAppend||o(s,e),c.parent&&(c.__r3f.autoRemovedBeforeAppend=!0),r(s,c),c.raycast&&c.__r3f.eventCount&&ch(c).getState().internal.interaction.push(c),[a,a.alternate].forEach(e=>{e!==null&&(e.stateNode=c,e.ref&&(typeof e.ref==`function`?e.ref(c):e.ref.current=c))})}let c=()=>console.warn(`Text is not allowed in the R3F tree! This could be stray whitespace or characters.`);return{reconciler:(0,Qm.default)({createInstance:n,removeChild:o,appendChild:r,appendInitialChild:r,insertBefore:i,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(e,t)=>{if(!t)return;let n=e.getState().scene;n.__r3f&&(n.__r3f.root=e,r(n,t))},removeChildFromContainer:(e,t)=>{t&&o(e.getState().scene,t)},insertInContainerBefore:(e,t,n)=>{if(!t||!n)return;let r=e.getState().scene;r.__r3f&&i(r,t,n)},getRootHostContext:()=>null,getChildHostContext:e=>e,finalizeInitialChildren(e){return!!(e?.__r3f??{}).handlers},prepareUpdate(e,t,n,r){if((e?.__r3f??{}).primitive&&r.object&&r.object!==e)return[!0];{let{args:t=[],children:i,...a}=r,{args:o=[],children:s,...c}=n;if(!Array.isArray(t))throw Error(`R3F: the args prop must be an array!`);if(t.some((e,t)=>e!==o[t]))return[!0];let l=gh(e,a,c,!0);return l.changes.length?[!1,l]:null}},commitUpdate(e,[t,n],r,i,a,o){t?s(e,r,a,o):vh(e,n)},commitMount(e,t,n,r){let i=e.__r3f??{};e.raycast&&i.handlers&&i.eventCount&&ch(e).getState().internal.interaction.push(e)},getPublicInstance:e=>e,prepareForCommit:()=>null,preparePortalMount:e=>dh(e.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(e){let{attach:t,parent:n}=e.__r3f??{};t&&n&&hh(n,e,t),e.isObject3D&&(e.visible=!1),yh(e)},unhideInstance(e,t){let{attach:n,parent:r}=e.__r3f??{};n&&r&&mh(r,e,n),(e.isObject3D&&t.visible==null||t.visible)&&(e.visible=!0),yh(e)},createTextInstance:c,hideTextInstance:c,unhideTextInstance:c,getCurrentEventPriority:()=>t?t():Zm.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<`u`&&lh.fun(performance.now)?performance.now:lh.fun(Date.now)?Date.now:()=>0,scheduleTimeout:lh.fun(setTimeout)?setTimeout:void 0,cancelTimeout:lh.fun(clearTimeout)?clearTimeout:void 0}),applyProps:vh}}var nh,rh=e=>`colorSpace`in e||`outputColorSpace`in e,ih=()=>eh.ColorManagement??null;typeof window<`u`&&((nh=window.document)!=null&&nh.createElement||window.navigator?.product===`ReactNative`)?y.useLayoutEffect:y.useEffect;var ah=class extends y.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}};ah.getDerivedStateFromError=()=>({error:!0});var oh=new Map,sh=e=>e&&!!e.memoized&&!!e.changes;function ch(e){let t=e.__r3f.root;for(;t.getState().previousRoot;)t=t.getState().previousRoot;return t}var lh={obj:e=>e===Object(e)&&!lh.arr(e)&&typeof e!=`function`,fun:e=>typeof e==`function`,str:e=>typeof e==`string`,num:e=>typeof e==`number`,boo:e=>typeof e==`boolean`,und:e=>e===void 0,arr:e=>Array.isArray(e),equ(e,t,{arrays:n=`shallow`,objects:r=`reference`,strict:i=!0}={}){if(typeof e!=typeof t||!!e!=!!t)return!1;if(lh.str(e)||lh.num(e)||lh.boo(e))return e===t;let a=lh.obj(e);if(a&&r===`reference`)return e===t;let o=lh.arr(e);if(o&&n===`reference`)return e===t;if((o||a)&&e===t)return!0;let s;for(s in e)if(!(s in t))return!1;if(a&&n===`shallow`&&r===`shallow`){for(s in i?t:e)if(!lh.equ(e[s],t[s],{strict:i,objects:`reference`}))return!1}else for(s in i?t:e)if(e[s]!==t[s])return!1;if(lh.und(s)){if(o&&e.length===0&&t.length===0||a&&Object.keys(e).length===0&&Object.keys(t).length===0)return!0;if(e!==t)return!1}return!0}};function uh(e){let t={nodes:{},materials:{}};return e&&e.traverse(e=>{e.name&&(t.nodes[e.name]=e),e.material&&!t.materials[e.material.name]&&(t.materials[e.material.name]=e.material)}),t}function dh(e,t){let n=e;return n.__r3f={type:``,root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...t},e}function fh(e,t){let n=e;if(t.includes(`-`)){let r=t.split(`-`),i=r.pop();return n=r.reduce((e,t)=>e[t],e),{target:n,key:i}}else return{target:n,key:t}}var ph=/-\d+$/;function mh(e,t,n){if(lh.str(n)){if(ph.test(n)){let{target:t,key:r}=fh(e,n.replace(ph,``));Array.isArray(t[r])||(t[r]=[])}let{target:r,key:i}=fh(e,n);t.__r3f.previousAttach=r[i],r[i]=t}else t.__r3f.previousAttach=n(e,t)}function hh(e,t,n){var r,i;if(lh.str(n)){let{target:r,key:i}=fh(e,n),a=t.__r3f.previousAttach;a===void 0?delete r[i]:r[i]=a}else (r=t.__r3f)==null||r.previousAttach==null||r.previousAttach(e,t);(i=t.__r3f)==null||delete i.previousAttach}function gh(e,{children:t,key:n,ref:r,...i},{children:a,key:o,ref:s,...c}={},l=!1){let u=e.__r3f,d=Object.entries(i),f=[];if(l){let e=Object.keys(c);for(let t=0;t<e.length;t++)i.hasOwnProperty(e[t])||d.unshift([e[t],`__defaultremove`])}d.forEach(([t,n])=>{var r;if((r=e.__r3f)!=null&&r.primitive&&t===`object`||lh.equ(n,c[t]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(t))return f.push([t,n,!0,[]]);let a=[];t.includes(`-`)&&(a=t.split(`-`)),f.push([t,n,!1,a]);for(let e in i){let n=i[e];e.startsWith(`${t}-`)&&f.push([e,n,!1,e.split(`-`)])}});let p={...i};return u!=null&&u.memoizedProps&&u!=null&&u.memoizedProps.args&&(p.args=u.memoizedProps.args),u!=null&&u.memoizedProps&&u!=null&&u.memoizedProps.attach&&(p.attach=u.memoizedProps.attach),{memoized:p,changes:f}}var _h=typeof process<`u`&&!1;function vh(e,t){var n;let r=e.__r3f,i=r?.root,a=i==null||i.getState==null?void 0:i.getState(),{memoized:o,changes:s}=sh(t)?t:gh(e,t),c=r?.eventCount;e.__r3f&&(e.__r3f.memoizedProps=o);for(let t=0;t<s.length;t++){let[n,i,o,c]=s[t];if(rh(e)){let e=3001,t=`srgb`,r=`srgb-linear`;n===`encoding`?(n=`colorSpace`,i=i===e?t:r):n===`outputEncoding`&&(n=`outputColorSpace`,i=i===e?t:r)}let l=e,u=l[n];if(c.length&&(u=c.reduce((e,t)=>e[t],e),!(u&&u.set))){let[t,...r]=c.reverse();l=r.reverse().reduce((e,t)=>e[t],e),n=t}if(i===`__defaultremove`)if(l.constructor){let e=oh.get(l.constructor);e||(e=new l.constructor,oh.set(l.constructor,e)),i=e[n]}else i=0;if(o&&r)i?r.handlers[n]=i:delete r.handlers[n],r.eventCount=Object.keys(r.handlers).length;else if(u&&u.set&&(u.copy||u instanceof fp)){if(Array.isArray(i))u.fromArray?u.fromArray(i):u.set(...i);else if(u.copy&&i&&i.constructor&&(_h?u.constructor.name===i.constructor.name:u.constructor===i.constructor))u.copy(i);else if(i!==void 0){let e=u instanceof Np;!e&&u.setScalar?u.setScalar(i):u instanceof fp&&i instanceof fp?u.mask=i.mask:u.set(i),!ih()&&a&&!a.linear&&e&&u.convertSRGBToLinear()}}else if(l[n]=i,l[n]instanceof Mf&&l[n].format===1023&&l[n].type===1009&&a){let e=l[n];rh(e)&&rh(a.gl)?e.colorSpace=a.gl.outputColorSpace:e.encoding=a.gl.outputEncoding}yh(e)}if(r&&r.parent&&e.raycast&&c!==r.eventCount){let t=ch(e).getState().internal,n=t.interaction.indexOf(e);n>-1&&t.interaction.splice(n,1),r.eventCount&&t.interaction.push(e)}return!(s.length===1&&s[0][0]===`onUpdate`)&&s.length&&(n=e.__r3f)!=null&&n.parent&&bh(e),e}function yh(e){var t,n;let r=(t=e.__r3f)==null||(n=t.root)==null||n.getState==null?void 0:n.getState();r&&r.internal.frames===0&&r.invalidate()}function bh(e){e.onUpdate==null||e.onUpdate(e)}function xh(){let e=typeof self<`u`&&self||typeof window<`u`&&window;if(!e)return Zm.DefaultEventPriority;switch(e.event?.type){case`click`:case`contextmenu`:case`dblclick`:case`pointercancel`:case`pointerdown`:case`pointerup`:return Zm.DiscreteEventPriority;case`pointermove`:case`pointerout`:case`pointerover`:case`pointerenter`:case`pointerleave`:case`wheel`:return Zm.ContinuousEventPriority;default:return Zm.DefaultEventPriority}}function Sh(e,t,n,r){let i=n.get(t);i&&(n.delete(t),n.size===0&&(e.delete(r),i.target.releasePointerCapture(r)))}function Ch(e,t){let{internal:n}=e.getState();n.interaction=n.interaction.filter(e=>e!==t),n.initialHits=n.initialHits.filter(e=>e!==t),n.hovered.forEach((e,r)=>{(e.eventObject===t||e.object===t)&&n.hovered.delete(r)}),n.capturedMap.forEach((e,r)=>{Sh(n.capturedMap,t,e,r)})}var wh=y.createContext(null),Th,Eh=new Set,Dh=new Set,Oh=new Set;function kh(e,t){if(e.size)for(let{callback:n}of e.values())n(t)}function Ah(e,t){switch(e){case`before`:return kh(Eh,t);case`after`:return kh(Dh,t);case`tail`:return kh(Oh,t)}}var jh,Mh;function Nh(e,t,n){let r=t.clock.getDelta();for(t.frameloop===`never`&&typeof e==`number`&&(r=e-t.clock.elapsedTime,t.clock.oldTime=t.clock.elapsedTime,t.clock.elapsedTime=e),jh=t.internal.subscribers,Th=0;Th<jh.length;Th++)Mh=jh[Th],Mh.ref.current(Mh.store.getState(),r,n);return!t.internal.priority&&t.gl.render&&t.gl.render(t.scene,t.camera),t.internal.frames=Math.max(0,t.internal.frames-1),t.frameloop===`always`?1:t.internal.frames}function Ph(e){let t=!1,n=!1,r,i,a;function o(s){i=requestAnimationFrame(o),t=!0,r=0,Ah(`before`,s),n=!0;for(let t of e.values()){var c;a=t.store.getState(),a.internal.active&&(a.frameloop===`always`||a.internal.frames>0)&&!((c=a.gl.xr)!=null&&c.isPresenting)&&(r+=Nh(s,a))}if(n=!1,Ah(`after`,s),r===0)return Ah(`tail`,s),t=!1,cancelAnimationFrame(i)}function s(r,i=1){var a;if(!r)return e.forEach(e=>s(e.store.getState(),i));(a=r.gl.xr)!=null&&a.isPresenting||!r.internal.active||r.frameloop===`never`||(i>1?r.internal.frames=Math.min(60,r.internal.frames+i):n?r.internal.frames=2:r.internal.frames=1,t||(t=!0,requestAnimationFrame(o)))}function c(t,n=!0,r,i){if(n&&Ah(`before`,t),r)Nh(t,r,i);else for(let n of e.values())Nh(t,n.store.getState());n&&Ah(`after`,t)}return{loop:o,invalidate:s,advance:c}}function Fh(){let e=y.useContext(wh);if(!e)throw Error(`R3F: Hooks can only be used within the Canvas component!`);return e}function Ih(e=e=>e,t){return Fh()(e,t)}var Lh=new WeakMap;function Rh(e,t){return function(n,...r){let i=Lh.get(n);return i||(i=new n,Lh.set(n,i)),e&&e(i),Promise.all(r.map(e=>new Promise((n,r)=>i.load(e,e=>{e.scene&&Object.assign(e,uh(e.scene)),n(e)},t,t=>r(Error(`Could not load ${e}: ${t?.message}`))))))}}function zh(e,t,n,r){let i=Array.isArray(t)?t:[t],a=Jm(Rh(n,r),[e,...i],{equal:lh.equ});return Array.isArray(t)?a:a[0]}zh.preload=function(e,t,n){let r=Array.isArray(t)?t:[t];return Ym(Rh(n),[e,...r])},zh.clear=function(e,t){return Xm([e,...Array.isArray(t)?t:[t]])};var Bh=new Map,{invalidate:Vh,advance:Hh}=Ph(Bh),{reconciler:Uh,applyProps:Wh}=th(Bh,xh);Uh.injectIntoDevTools({bundleType:0,rendererPackageName:`@react-three/fiber`,version:`18.3.1`});var Gh=0,Kh=zm(e=>(ym.onStart=(t,n,r)=>{e({active:!0,item:t,loaded:n,total:r,progress:(n-Gh)/(r-Gh)*100})},ym.onLoad=()=>{e({active:!1})},ym.onError=t=>e(e=>({errors:[...e.errors,t]})),ym.onProgress=(t,n,r)=>{n===r&&(Gh=r),e({active:!0,item:t,loaded:n,total:r,progress:(n-Gh)/(r-Gh)*100||100})},{errors:[],active:!1,progress:0,item:``,loaded:0,total:0}));function qh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}new pf,new pf;function Jh(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}var Yh=function e(t,n,r){var i=this;Jh(this,e),qh(this,`dot2`,function(e,t){return i.x*e+i.y*t}),qh(this,`dot3`,function(e,t,n){return i.x*e+i.y*t+i.z*n}),this.x=t,this.y=n,this.z=r},Xh=[new Yh(1,1,0),new Yh(-1,1,0),new Yh(1,-1,0),new Yh(-1,-1,0),new Yh(1,0,1),new Yh(-1,0,1),new Yh(1,0,-1),new Yh(-1,0,-1),new Yh(0,1,1),new Yh(0,-1,1),new Yh(0,1,-1),new Yh(0,-1,-1)],Zh=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],Qh=Array(512),$h=Array(512);(function(e){e>0&&e<1&&(e*=65536),e=Math.floor(e),e<256&&(e|=e<<8);for(var t=0;t<256;t++){var n=t&1?Zh[t]^e&255:Zh[t]^e>>8&255;Qh[t]=Qh[t+256]=n,$h[t]=$h[t+256]=Xh[n%12]}})(0),.5*(Math.sqrt(3)-1),(3-Math.sqrt(3))/6,Math.PI*2;function eg(e){if(typeof e==`number`)e=Math.abs(e);else if(typeof e==`string`){var t=e;e=0;for(var n=0;n<t.length;n++)e=(e+(n+1)*(t.charCodeAt(n)%96))%2147483647}return e===0&&(e=311),e}function tg(e){var t=eg(e);return function(){var e=t*48271%2147483647;return t=e,e/2147483647}}new function e(t){var n=this;Jh(this,e),qh(this,`seed`,0),qh(this,`init`,function(e){n.seed=e,n.value=tg(e)}),qh(this,`value`,tg(this.seed)),this.init(t)}(Math.random());var ng=e=>e===Object(e)&&!Array.isArray(e)&&typeof e!=`function`;function rg(e,t){let n=Ih(e=>e.gl),r=zh(Sm,ng(e)?Object.values(e):e);return(0,y.useLayoutEffect)(()=>{t?.(r)},[t]),(0,y.useEffect)(()=>{if(`initTexture`in n){let e=[];Array.isArray(r)?e=r:r instanceof Mf?e=[r]:ng(r)&&(e=Object.values(r)),e.forEach(e=>{e instanceof Mf&&n.initTexture(e)})}},[n,r]),(0,y.useMemo)(()=>{if(ng(e)){let t={},n=0;for(let i in e)t[i]=r[n++];return t}else return r},[e,r])}rg.preload=e=>zh.preload(Sm,e),rg.clear=e=>zh.clear(Sm,e);var ig=0;function ag(e,t){let n=`atom${++ig}`,r={toString:()=>n};return typeof e==`function`?r.read=e:(r.init=e,r.read=og,r.write=sg),t&&(r.write=t),r}function og(e){return e(this)}function sg(e,t,n){return t(this,typeof n==`function`?n(e(this)):n)}var cg=(e,t)=>e.unstable_is?e.unstable_is(t):t===e,lg=e=>`init`in e,ug=e=>!!e.write,dg=new WeakMap,fg=(e,t)=>{dg.set(e,t),e.catch(()=>{}).finally(()=>dg.delete(e))},pg=(e,t)=>{let n=dg.get(e);n&&(dg.delete(e),n(t))},mg=(e,t)=>{e.status=`fulfilled`,e.value=t},hg=(e,t)=>{e.status=`rejected`,e.reason=t},gg=e=>typeof e?.then==`function`,_g=(e,t)=>!!e&&`v`in e&&`v`in t&&Object.is(e.v,t.v),vg=(e,t)=>!!e&&`e`in e&&`e`in t&&Object.is(e.e,t.e),yg=e=>!!e&&`v`in e&&e.v instanceof Promise,bg=(e,t)=>`v`in e&&`v`in t&&e.v.orig&&e.v.orig===t.v.orig,xg=e=>{if(`e`in e)throw e.e;return e.v},Sg=()=>{let e=new WeakMap,t=new WeakMap,n=[],r=new WeakMap,i=t=>e.get(t),a=(e,t)=>{t.d.forEach((t,n)=>{if(!r.has(n)){let e=i(n);r.set(n,[e,new Set]),e&&a(n,e)}r.get(n)[1].add(e)})},o=(t,o)=>{var s;let c=i(t);if(e.set(t,o),(s=n[n.length-1])==null||s.add(t),r.has(t)||(r.set(t,[c,new Set]),a(t,o)),yg(c)){let e=`v`in o?o.v instanceof Promise?o.v:Promise.resolve(o.v):Promise.reject(o.e);c.v!==e&&pg(c.v,e)}},s=(e,t,n,r)=>{let i=new Map(r?t.d:null),a=!1;n.forEach((n,r)=>{!n&&cg(e,r)&&(n=t),n&&(i.set(r,n),t.d.get(r)!==n&&(a=!0))}),(a||t.d.size!==i.size)&&(t.d=i)},c=(e,t,n,r)=>{let a=i(e),c={d:a?.d||new Map,v:t};if(n&&s(e,c,n,r),_g(a,c)&&a.d===c.d)return a;if(yg(a)&&yg(c)&&bg(a,c)){if(a.d===c.d)return a;c.v=a.v}return o(e,c),c},l=(e,n,r,a)=>{if(gg(n)){let o,s=()=>{let n=i(e);if(!yg(n)||n.v!==l)return;let a=c(e,l,r);t.has(e)&&n.d!==a.d&&y(e,a,n.d)},l=new Promise((e,t)=>{let r=!1;n.then(t=>{r||(r=!0,mg(l,t),e(t),s())},e=>{r||(r=!0,hg(l,e),t(e),s())}),o=t=>{r||(r=!0,t.then(e=>mg(l,e),e=>hg(l,e)),e(t))}});return l.orig=n,l.status=`pending`,fg(l,e=>{e&&(o(e),a?.())}),c(e,l,r,!0)}return c(e,n,r)},u=(e,t,n)=>{let r=i(e),a={d:r?.d||new Map,e:t};return n&&s(e,a,n),vg(r,a)&&r.d===a.d?r:(o(e,a),a)},d=(e,n)=>{let r=i(e);if(!n?.(e)&&r&&(t.has(e)||Array.from(r.d).every(([t,r])=>{if(t===e)return!0;let i=d(t,n);return i===r||_g(i,r)})))return r;let a=new Map,o=!0,s=t=>{if(cg(e,t)){let e=i(t);if(e)return a.set(t,e),xg(e);if(lg(t))return a.set(t,void 0),t.init;throw Error(`no atom init`)}let r=d(t,n);return a.set(t,r),xg(r)},c,f,p={get signal(){return c||=new AbortController,c.signal},get setSelf(){return!f&&ug(e)&&(f=(...t)=>{if(!o)return h(e,...t)}),f}};try{return l(e,e.read(s,p),a,()=>c?.abort())}catch(t){return u(e,t,a)}finally{o=!1}},f=e=>xg(d(e)),p=e=>{let n=e=>{var n;let i=new Set(t.get(e)?.t);return(n=r.get(e))==null||n[1].forEach(e=>{i.add(e)}),i},o=[],s=new Set,c=e=>{if(!s.has(e)){s.add(e);for(let t of n(e))e!==t&&c(t);o.push(e)}};c(e);let l=new Set([e]),u=e=>s.has(e);for(let e=o.length-1;e>=0;--e){let t=o[e],n=i(t);if(!n)continue;let r=!1;for(let e of n.d.keys())if(e!==t&&l.has(e)){r=!0;break}if(r){let e=d(t,u);a(t,e),_g(n,e)||l.add(t)}s.delete(t)}},m=(e,...t)=>e.write(e=>xg(d(e)),(t,...r)=>{let a=n.length>0;a||n.push(new Set([t]));let o;if(cg(e,t)){if(!lg(t))throw Error(`atom not writable`);_g(i(t),l(t,r[0]))||p(t)}else o=m(t,...r);return a||b(n.pop()),o},...t),h=(e,...t)=>{n.push(new Set([e]));let r=m(e,...t);return b(n.pop()),r},g=(e,n,r)=>{var a;let o=t.get(e);if(o)return n&&o.t.add(n),o;let s=r||[];(a=i(e))==null||a.d.forEach((t,n)=>{n!==e&&g(n,e,s)}),d(e);let c={t:new Set(n&&[n]),l:new Set};if(t.set(e,c),ug(e)&&e.onMount){let{onMount:t}=e;s.push(()=>{let n=t((...t)=>h(e,...t));n&&(c.u=n)})}return r||s.forEach(e=>e()),c},_=(e,t)=>!t.l.size&&(!t.t.size||t.t.size===1&&t.t.has(e)),v=(e,n)=>{if(!_(e,n))return;let r=n.u;r&&r(),t.delete(e);let a=i(e);a&&(yg(a)&&pg(a.v),a.d.forEach((n,r)=>{if(r!==e){let n=t.get(r);n&&(n.t.delete(e),v(r,n))}}))},y=(e,n,r)=>{let i=new Set(n.d.keys()),a=new Set;r?.forEach((n,r)=>{if(i.has(r)){i.delete(r);return}a.add(r);let o=t.get(r);o&&o.t.delete(e)}),i.forEach(t=>{g(t,e)}),a.forEach(e=>{let n=t.get(e);n&&v(e,n)})},b=e=>{let n=[],a=e=>{var t;if(!r.has(e))return;let[o,s]=r.get(e);r.delete(e),n.push([e,o]),s.forEach(a),(t=i(e))==null||t.d.forEach((e,t)=>a(t))};e.forEach(a),n.forEach(([e,n])=>{let r=i(e);if(r&&r!==n){let i=t.get(e);i&&r.d!==n?.d&&y(e,r,n?.d),i&&!(!yg(n)&&(_g(n,r)||vg(n,r)))&&i.l.forEach(e=>e())}})};return{get:f,set:h,sub:(e,t)=>{let n=g(e);b([e]);let r=n.l;return r.add(t),()=>{r.delete(t),v(e,n)}}}},Cg,wg=()=>(Cg||=Sg(),Cg),Tg=(0,y.createContext)(void 0),Eg=e=>{let t=(0,y.useContext)(Tg);return e?.store||t||wg()},Dg=e=>typeof e?.then==`function`,Og=y.default.use||(e=>{if(e.status===`pending`)throw e;if(e.status===`fulfilled`)return e.value;throw e.status===`rejected`?e.reason:(e.status=`pending`,e.then(t=>{e.status=`fulfilled`,e.value=t},t=>{e.status=`rejected`,e.reason=t}),e)});function kg(e,t){let n=Eg(t),[[r,i,a],o]=(0,y.useReducer)(t=>{let r=n.get(e);return Object.is(t[0],r)&&t[1]===n&&t[2]===e?t:[r,n,e]},void 0,()=>[n.get(e),n,e]),s=r;(i!==n||a!==e)&&(o(),s=n.get(e));let c=t?.delay;return(0,y.useEffect)(()=>{let t=n.sub(e,()=>{if(typeof c==`number`){setTimeout(o,c);return}o()});return o(),t},[n,e,c]),(0,y.useDebugValue)(s),Dg(s)?Og(s):s}function Ag(e,t){let n=Eg(t);return(0,y.useCallback)((...t)=>n.set(e,...t),[n,e])}function jg(e,t){return[kg(e,t),Ag(e,t)]}var Mg=[`../images/woman-taking-photo-with-camera-vibrant-landscape_964851-203020.jpg`,`../images/graphic.avif`,`DSC00680.jpg`,`DSC00933.jpg`,`DSC00966.jpg`,`DSC00983.jpg`,`DSC01011.jpg`,`DSC01040.jpg`,`DSC01064.jpg`,`DSC01071.jpg`,`DSC01103.jpg`,`DSC01145.jpg`,`DSC01420.jpg`,`DSC01461.jpg`,`DSC01489.jpg`,`DSC02031.jpg`,`DSC02064.jpg`,`DSC02069.jpg`];ag(0);var Ng=ag(`idle`),Pg=[{front:`book-cover-anshi.jpg`,back:Mg[0]}];for(let e=1;e<Mg.length-1;e+=2)Pg.push({front:Mg[e%Mg.length],back:Mg[(e+1)%Mg.length]});Pg.push({front:Mg[Mg.length-1],back:`book-back-anshi.jpg`});var Fg=1.28,Ig=1.71,Lg=.003,Rg=30,zg=Fg/Rg,Bg=new Zp(Fg,Ig,Lg,Rg,2);Bg.translate(Fg/2,0,0);var Vg=Bg.attributes.position,Hg=new Z,Ug=[],Wg=[];for(let e=0;e<Vg.count;e++){Hg.fromBufferAttribute(Vg,e);let t=Hg.x,n=Math.max(0,Math.floor(t/zg)),r=t%zg/zg;Ug.push(n,n+1,0,0),Wg.push(1-r,r,0,0)}Bg.setAttribute(`skinIndex`,new Bp(Ug,4)),Bg.setAttribute(`skinWeight`,new Hp(Wg,4));var Gg=new Np(`white`);new Np(`orange`),new rm({color:Gg}),new rm({color:`#111`}),new rm({color:Gg}),new rm({color:Gg}),Pg.forEach(e=>{rg.preload(`/textures/${e.front}`),rg.preload(`/textures/${e.back}`),rg.preload(`/textures/book-cover-roughness-anshi.jpg`)});var Kg=({onLoaded:e})=>{let{progress:t}=Kh(),[n,r]=(0,y.useState)(`in`),[i,a]=(0,y.useState)(!0);return(0,y.useEffect)(()=>{if(t===100){let t=setTimeout(()=>{r(`out`)},500),n=setTimeout(()=>{a(!1),e?.()},1500);return()=>{clearTimeout(t),clearTimeout(n)}}},[t,e]),i?(0,J.jsxs)(`div`,{style:{position:`fixed`,inset:0,zIndex:9999,pointerEvents:n===`out`?`none`:`all`},children:[(0,J.jsxs)(`div`,{style:{display:`flex`,width:`100%`,height:`100%`,position:`absolute`,inset:0},children:[(0,J.jsx)(Lu.div,{initial:{y:0},animate:{y:n===`out`?`-100%`:0},transition:{duration:.8,ease:[.76,0,.24,1],delay:0},style:{flex:1,backgroundColor:`#f8c210`}}),(0,J.jsx)(Lu.div,{initial:{y:0},animate:{y:n===`out`?`-100%`:0},transition:{duration:.8,ease:[.76,0,.24,1],delay:.1},style:{flex:1,backgroundColor:`#f8c210`}}),(0,J.jsx)(Lu.div,{initial:{y:0},animate:{y:n===`out`?`-100%`:0},transition:{duration:.8,ease:[.76,0,.24,1],delay:.2},style:{flex:1,backgroundColor:`#f8c210`}})]}),(0,J.jsx)(Hc,{children:n!==`out`&&(0,J.jsxs)(Lu.div,{initial:{opacity:1},exit:{opacity:0},transition:{duration:.3},style:{position:`absolute`,inset:0,zIndex:10,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`},children:[(0,J.jsx)(`div`,{style:{fontFamily:`var(--font-display)`,fontSize:`clamp(48px, 15vw, 150px)`,fontWeight:900,color:`#222`,letterSpacing:`-0.04em`,lineHeight:.8},children:`ANSHI`}),(0,J.jsx)(`div`,{style:{position:`absolute`,bottom:`20%`,left:`50%`,transform:`translateX(-50%)`,height:`4px`,width:`200px`,backgroundColor:`rgba(0,0,0,0.1)`,borderRadius:`2px`,overflow:`hidden`},children:(0,J.jsx)(`div`,{style:{height:`100%`,width:`${t}%`,backgroundColor:`#222`,transition:`width 0.3s ease`}})})]})})]}):null};function qg(){let[e,t]=(0,y.useState)(!1),[n]=jg(Ng),[r,i]=(0,y.useState)(``),[a,o]=(0,y.useState)(``);(0,y.useEffect)(()=>{let e=()=>{let e=new Date,t=new Intl.DateTimeFormat(`en-US`,{timeZone:`Asia/Kolkata`,hour:`numeric`,minute:`2-digit`,hour12:!0}).format(e),n=new Intl.DateTimeFormat(`en-US`,{timeZone:`Asia/Kolkata`,month:`short`,year:`2-digit`}).formatToParts(e),r=n.find(e=>e.type===`month`)?.value||`Jan`,a=n.find(e=>e.type===`year`)?.value||`26`;i(t),o(`${r} '${a}`)};e();let t=setInterval(e,6e4);return()=>clearInterval(t)},[]),(0,y.useEffect)(()=>{if(window.innerWidth<768)return;let e=new le({duration:.8,easing:e=>Math.min(1,1.001-2**(-10*e)),smoothWheel:!0});function t(n){e.raf(n),requestAnimationFrame(t)}return requestAnimationFrame(t),()=>{e.destroy()}},[]);let{scrollYProgress:s}=Dd(),c=jd(s,[0,1],[1,.78]),l=jd(s,[0,1],[0,1]),u=jd(s,[0,.85],[1,.05]),d=jd(s,[0,1],[`105%`,`0%`]),[f,p]=(0,y.useState)(!1),[m,h]=(0,y.useState)(!1);return(0,y.useEffect)(()=>s.on(`change`,e=>{p(e>.05),h(e>.7)}),[s]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Kg,{onLoaded:()=>t(!0)}),(0,J.jsx)(`div`,{style:{opacity:+!!e,transition:`opacity 0.6s ease`,pointerEvents:e?`auto`:`none`},children:(0,J.jsx)(`div`,{className:`scroll-wrapper relative w-full h-[200vh] bg-black select-none`,children:(0,J.jsxs)(`div`,{className:`fixed inset-0 w-full h-screen p-2 sm:p-6 flex flex-col justify-between z-10 overflow-hidden pointer-events-none`,children:[(0,J.jsxs)(Lu.main,{style:{scale:c,willChange:`transform`},className:`hero-card-inner relative flex-1 w-full h-full rounded-[24px] overflow-hidden border border-white/5 flex flex-col justify-between p-4 origin-center pointer-events-auto`,children:[(0,J.jsx)(`div`,{className:`absolute inset-0 bg-base-gradient pointer-events-none z-0`}),(0,J.jsx)(Lu.div,{style:{opacity:l},className:`absolute inset-0 bg-overlay-gradient pointer-events-none hdr-bg-overlay z-0`}),(0,J.jsx)(`div`,{className:`absolute inset-0 pointer-events-none hdr-noise z-10`}),(0,J.jsxs)(Lu.div,{style:{opacity:u},className:`absolute inset-0 flex flex-col lg:flex-row z-20 overflow-hidden`,children:[(0,J.jsxs)(`div`,{className:`w-full lg:w-1/2 flex flex-col justify-center h-full p-8 sm:p-12 lg:p-16 bg-black/40 lg:bg-transparent overflow-y-auto shrink-0`,children:[(0,J.jsxs)(`div`,{className:`flex flex-col`,children:[(0,J.jsxs)(`h1`,{className:`text-white font-black tracking-tighter leading-[0.85] font-display mb-8 select-none flex flex-col`,children:[(0,J.jsxs)(`div`,{className:`text-[25vw] lg:text-[14vw]`,children:[`ANSHI`,(0,J.jsx)(`span`,{className:`text-[5vw] lg:text-[2vw] align-top relative -top-[4vw] lg:-top-[2vw]`,children:`®`})]}),(0,J.jsx)(`div`,{className:`text-[12vw] lg:text-[6vw] text-left mt-2 text-white/90 tracking-normal`,children:`JANGID`})]}),(0,J.jsxs)(`div`,{className:`flex justify-between items-start mb-12 font-sans text-sm md:text-base w-full max-w-sm`,children:[(0,J.jsxs)(`div`,{className:`flex flex-col`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-2 font-bold mb-1 text-white`,children:[(0,J.jsx)(`div`,{className:`w-2.5 h-2.5 rounded-full bg-[#f8c210]`}),(0,J.jsx)(`span`,{children:`Open for project`})]}),(0,J.jsx)(`span`,{className:`text-white/50`,children:a||`Jan '26`})]}),(0,J.jsxs)(`div`,{className:`flex flex-col text-right font-bold text-white`,children:[(0,J.jsx)(`span`,{className:`mb-1`,children:r||`4:45 PM`}),(0,J.jsx)(`span`,{className:`text-white/50 font-normal`,children:`Kolkata, IN`})]})]})]}),(0,J.jsxs)(`div`,{className:`flex flex-col mt-4 lg:mt-8`,children:[(0,J.jsxs)(`div`,{className:`mb-6`,children:[(0,J.jsx)(Lu.h2,{animate:{rotate:[-2,4,-2]},transition:{repeat:1/0,duration:2.5,ease:`easeInOut`},className:`text-[#f8c210] font-script text-4xl md:text-5xl origin-left mb-2 inline-block`,children:`I am`}),(0,J.jsxs)(`h3`,{className:`text-white text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] font-sans tracking-tight`,children:[`Graphic designer &`,(0,J.jsx)(`br`,{}),`Photographer.`]})]}),(0,J.jsxs)(`button`,{className:`bg-[#f8c210] text-black w-full max-w-sm px-6 py-4 font-bold text-lg hover:bg-white hover:text-black transition-colors flex justify-between items-center cursor-pointer pointer-events-auto rounded-sm`,children:[`My Works`,(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:2.5,stroke:`currentColor`,className:`w-5 h-5`,children:(0,J.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25`})})]})]})]}),(0,J.jsx)(`div`,{className:`w-full lg:w-1/2 h-[50vh] lg:h-full bg-[#0a0a0c] relative flex items-center justify-center shrink-0 border-t lg:border-t-0 lg:border-l border-white/10`,children:(0,J.jsx)(`span`,{className:`text-white/20 font-sans tracking-widest uppercase text-sm`,children:`Image Placeholder`})})]})]}),(0,J.jsx)(Lu.div,{style:{y:d,willChange:`transform`},className:`next-section-card absolute inset-0 z-30 bg-black p-6 sm:p-10 md:p-16 flex flex-col justify-center items-center pointer-events-auto`,children:(0,J.jsx)(`div`,{className:`absolute inset-0 pointer-events-none hdr-noise opacity-30 z-0`})})]})})}),(0,J.jsx)(`div`,{className:`fixed inset-0 bg-black z-[9999]`,style:{opacity:+(n===`black`),transition:`opacity 0.8s ease-in-out`,pointerEvents:n===`black`?`auto`:`none`}})]})}(0,b.createRoot)(document.getElementById(`root`)).render((0,J.jsx)(y.StrictMode,{children:(0,J.jsx)(qg,{})}));
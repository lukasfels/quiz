(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ps(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const jc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hc=Ps(jc);function No(t){return!!t||t===""}function ks(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=pe(r)?Wc(r):ks(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(pe(t))return t;if(fe(t))return t}}const Vc=/;(?![^(]*\))/g,zc=/:(.+)/;function Wc(t){const e={};return t.split(Vc).forEach(n=>{if(n){const r=n.split(zc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Xt(t){let e="";if(pe(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const r=Xt(t[n]);r&&(e+=r+" ")}else if(fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Kc(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=br(t[r],e[r]);return n}function br(t,e){if(t===e)return!0;let n=li(t),r=li(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Rn(t),r=Rn(e),n||r)return t===e;if(n=D(t),r=D(e),n||r)return n&&r?Kc(t,e):!1;if(n=fe(t),r=fe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!br(t[o],e[o]))return!1}}return String(t)===String(e)}function Mo(t,e){return t.findIndex(n=>br(n,e))}const _n=t=>pe(t)?t:t==null?"":D(t)||fe(t)&&(t.toString===Lo||!B(t.toString))?JSON.stringify(t,Do,2):String(t),Do=(t,e)=>e&&e.__v_isRef?Do(t,e.value):qt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Er(e)?{[`Set(${e.size})`]:[...e.values()]}:fe(e)&&!D(e)&&!Uo(e)?String(e):e,re={},Kt=[],Ue=()=>{},qc=()=>!1,Gc=/^on[^a-z]/,Ir=t=>Gc.test(t),Ns=t=>t.startsWith("onUpdate:"),Ee=Object.assign,Ms=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Jc=Object.prototype.hasOwnProperty,z=(t,e)=>Jc.call(t,e),D=Array.isArray,qt=t=>Fn(t)==="[object Map]",Er=t=>Fn(t)==="[object Set]",li=t=>Fn(t)==="[object Date]",B=t=>typeof t=="function",pe=t=>typeof t=="string",Rn=t=>typeof t=="symbol",fe=t=>t!==null&&typeof t=="object",xo=t=>fe(t)&&B(t.then)&&B(t.catch),Lo=Object.prototype.toString,Fn=t=>Lo.call(t),Yc=t=>Fn(t).slice(8,-1),Uo=t=>Fn(t)==="[object Object]",Ds=t=>pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xn=Ps(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Xc=/-(\w)/g,Ge=wr(t=>t.replace(Xc,(e,n)=>n?n.toUpperCase():"")),Qc=/\B([A-Z])/g,on=wr(t=>t.replace(Qc,"-$1").toLowerCase()),Tr=wr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Br=wr(t=>t?`on${Tr(t)}`:""),An=(t,e)=>!Object.is(t,e),Qn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ar=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ns=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ui;const Zc=()=>ui||(ui=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ve;class Fo{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ve&&(this.parent=Ve,this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ve;try{return Ve=this,e()}finally{Ve=n}}}on(){Ve=this}off(){Ve=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function $o(t){return new Fo(t)}function el(t,e=Ve){e&&e.active&&e.effects.push(t)}const xs=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Bo=t=>(t.w&Et)>0,jo=t=>(t.n&Et)>0,tl=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Et},nl=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Bo(s)&&!jo(s)?s.delete(t):e[n++]=s,s.w&=~Et,s.n&=~Et}e.length=n}},rs=new WeakMap;let gn=0,Et=1;const ss=30;let xe;const Nt=Symbol(""),is=Symbol("");class Ls{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,el(this,r)}run(){if(!this.active)return this.fn();let e=xe,n=_t;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=xe,xe=this,_t=!0,Et=1<<++gn,gn<=ss?tl(this):fi(this),this.fn()}finally{gn<=ss&&nl(this),Et=1<<--gn,xe=this.parent,_t=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xe===this?this.deferStop=!0:this.active&&(fi(this),this.onStop&&this.onStop(),this.active=!1)}}function fi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let _t=!0;const Ho=[];function an(){Ho.push(_t),_t=!1}function cn(){const t=Ho.pop();_t=t===void 0?!0:t}function Oe(t,e,n){if(_t&&xe){let r=rs.get(t);r||rs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=xs()),Vo(s)}}function Vo(t,e){let n=!1;gn<=ss?jo(t)||(t.n|=Et,n=!Bo(t)):n=!t.has(xe),n&&(t.add(xe),xe.deps.push(t))}function st(t,e,n,r,s,i){const o=rs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&D(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":D(t)?Ds(n)&&a.push(o.get("length")):(a.push(o.get(Nt)),qt(t)&&a.push(o.get(is)));break;case"delete":D(t)||(a.push(o.get(Nt)),qt(t)&&a.push(o.get(is)));break;case"set":qt(t)&&a.push(o.get(Nt));break}if(a.length===1)a[0]&&os(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);os(xs(c))}}function os(t,e){const n=D(t)?t:[...t];for(const r of n)r.computed&&di(r);for(const r of n)r.computed||di(r)}function di(t,e){(t!==xe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const rl=Ps("__proto__,__v_isRef,__isVue"),zo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rn)),sl=Us(),il=Us(!1,!0),ol=Us(!0),hi=al();function al(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)Oe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){an();const r=G(this)[e].apply(this,n);return cn(),r}}),t}function Us(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?wl:Jo:e?Go:qo).get(r))return r;const o=D(r);if(!t&&o&&z(hi,s))return Reflect.get(hi,s,i);const a=Reflect.get(r,s,i);return(Rn(s)?zo.has(s):rl(s))||(t||Oe(r,"get",s),e)?a:ue(a)?o&&Ds(s)?a:a.value:fe(a)?t?Yo(a):ln(a):a}}const cl=Wo(),ll=Wo(!0);function Wo(t=!1){return function(n,r,s,i){let o=n[r];if(Cn(o)&&ue(o)&&!ue(s))return!1;if(!t&&!Cn(s)&&(as(s)||(s=G(s),o=G(o)),!D(n)&&ue(o)&&!ue(s)))return o.value=s,!0;const a=D(n)&&Ds(r)?Number(r)<n.length:z(n,r),c=Reflect.set(n,r,s,i);return n===G(i)&&(a?An(s,o)&&st(n,"set",r,s):st(n,"add",r,s)),c}}function ul(t,e){const n=z(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&st(t,"delete",e,void 0),r}function fl(t,e){const n=Reflect.has(t,e);return(!Rn(e)||!zo.has(e))&&Oe(t,"has",e),n}function dl(t){return Oe(t,"iterate",D(t)?"length":Nt),Reflect.ownKeys(t)}const Ko={get:sl,set:cl,deleteProperty:ul,has:fl,ownKeys:dl},hl={get:ol,set(t,e){return!0},deleteProperty(t,e){return!0}},pl=Ee({},Ko,{get:il,set:ll}),Fs=t=>t,Sr=t=>Reflect.getPrototypeOf(t);function zn(t,e,n=!1,r=!1){t=t.__v_raw;const s=G(t),i=G(e);n||(e!==i&&Oe(s,"get",e),Oe(s,"get",i));const{has:o}=Sr(s),a=r?Fs:n?js:On;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Wn(t,e=!1){const n=this.__v_raw,r=G(n),s=G(t);return e||(t!==s&&Oe(r,"has",t),Oe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Kn(t,e=!1){return t=t.__v_raw,!e&&Oe(G(t),"iterate",Nt),Reflect.get(t,"size",t)}function pi(t){t=G(t);const e=G(this);return Sr(e).has.call(e,t)||(e.add(t),st(e,"add",t,t)),this}function gi(t,e){e=G(e);const n=G(this),{has:r,get:s}=Sr(n);let i=r.call(n,t);i||(t=G(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?An(e,o)&&st(n,"set",t,e):st(n,"add",t,e),this}function mi(t){const e=G(this),{has:n,get:r}=Sr(e);let s=n.call(e,t);s||(t=G(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&st(e,"delete",t,void 0),i}function _i(){const t=G(this),e=t.size!==0,n=t.clear();return e&&st(t,"clear",void 0,void 0),n}function qn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=G(o),c=e?Fs:t?js:On;return!t&&Oe(a,"iterate",Nt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Gn(t,e,n){return function(...r){const s=this.__v_raw,i=G(s),o=qt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Fs:e?js:On;return!e&&Oe(i,"iterate",c?is:Nt),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function ct(t){return function(...e){return t==="delete"?!1:this}}function gl(){const t={get(i){return zn(this,i)},get size(){return Kn(this)},has:Wn,add:pi,set:gi,delete:mi,clear:_i,forEach:qn(!1,!1)},e={get(i){return zn(this,i,!1,!0)},get size(){return Kn(this)},has:Wn,add:pi,set:gi,delete:mi,clear:_i,forEach:qn(!1,!0)},n={get(i){return zn(this,i,!0)},get size(){return Kn(this,!0)},has(i){return Wn.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:qn(!0,!1)},r={get(i){return zn(this,i,!0,!0)},get size(){return Kn(this,!0)},has(i){return Wn.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:qn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Gn(i,!1,!1),n[i]=Gn(i,!0,!1),e[i]=Gn(i,!1,!0),r[i]=Gn(i,!0,!0)}),[t,n,e,r]}const[ml,_l,vl,yl]=gl();function $s(t,e){const n=e?t?yl:vl:t?_l:ml;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(z(n,s)&&s in r?n:r,s,i)}const bl={get:$s(!1,!1)},Il={get:$s(!1,!0)},El={get:$s(!0,!1)},qo=new WeakMap,Go=new WeakMap,Jo=new WeakMap,wl=new WeakMap;function Tl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sl(t){return t.__v_skip||!Object.isExtensible(t)?0:Tl(Yc(t))}function ln(t){return Cn(t)?t:Bs(t,!1,Ko,bl,qo)}function Rl(t){return Bs(t,!1,pl,Il,Go)}function Yo(t){return Bs(t,!0,hl,El,Jo)}function Bs(t,e,n,r,s){if(!fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Sl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function vt(t){return Cn(t)?vt(t.__v_raw):!!(t&&t.__v_isReactive)}function Cn(t){return!!(t&&t.__v_isReadonly)}function as(t){return!!(t&&t.__v_isShallow)}function Xo(t){return vt(t)||Cn(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function Qt(t){return ar(t,"__v_skip",!0),t}const On=t=>fe(t)?ln(t):t,js=t=>fe(t)?Yo(t):t;function Qo(t){_t&&xe&&(t=G(t),Vo(t.dep||(t.dep=xs())))}function Zo(t,e){t=G(t),t.dep&&os(t.dep)}function ue(t){return!!(t&&t.__v_isRef===!0)}function Q(t){return ea(t,!1)}function Al(t){return ea(t,!0)}function ea(t,e){return ue(t)?t:new Cl(t,e)}class Cl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:On(e)}get value(){return Qo(this),this._value}set value(e){e=this.__v_isShallow?e:G(e),An(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:On(e),Zo(this))}}function ge(t){return ue(t)?t.value:t}const Ol={get:(t,e,n)=>ge(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ta(t){return vt(t)?t:new Proxy(t,Ol)}function Pl(t){const e=D(t)?new Array(t.length):{};for(const n in t)e[n]=Nl(t,n);return e}class kl{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Nl(t,e,n){const r=t[e];return ue(r)?r:new kl(t,e,n)}class Ml{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ls(e,()=>{this._dirty||(this._dirty=!0,Zo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=G(this);return Qo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Dl(t,e,n=!1){let r,s;const i=B(t);return i?(r=t,s=Ue):(r=t.get,s=t.set),new Ml(r,s,i||!s,n)}function yt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Rr(i,e,n)}return s}function Fe(t,e,n,r){if(B(t)){const i=yt(t,e,n,r);return i&&xo(i)&&i.catch(o=>{Rr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Fe(t[i],e,n,r));return s}function Rr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){yt(c,null,10,[t,o,a]);return}}xl(t,n,s,r)}function xl(t,e,n,r=!0){console.error(t)}let cr=!1,cs=!1;const Ae=[];let Ze=0;const vn=[];let mn=null,Vt=0;const yn=[];let ft=null,zt=0;const na=Promise.resolve();let Hs=null,ls=null;function Vs(t){const e=Hs||na;return t?e.then(this?t.bind(this):t):e}function Ll(t){let e=Ze+1,n=Ae.length;for(;e<n;){const r=e+n>>>1;Pn(Ae[r])<t?e=r+1:n=r}return e}function ra(t){(!Ae.length||!Ae.includes(t,cr&&t.allowRecurse?Ze+1:Ze))&&t!==ls&&(t.id==null?Ae.push(t):Ae.splice(Ll(t.id),0,t),sa())}function sa(){!cr&&!cs&&(cs=!0,Hs=na.then(aa))}function Ul(t){const e=Ae.indexOf(t);e>Ze&&Ae.splice(e,1)}function ia(t,e,n,r){D(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),sa()}function Fl(t){ia(t,mn,vn,Vt)}function $l(t){ia(t,ft,yn,zt)}function Ar(t,e=null){if(vn.length){for(ls=e,mn=[...new Set(vn)],vn.length=0,Vt=0;Vt<mn.length;Vt++)mn[Vt]();mn=null,Vt=0,ls=null,Ar(t,e)}}function oa(t){if(Ar(),yn.length){const e=[...new Set(yn)];if(yn.length=0,ft){ft.push(...e);return}for(ft=e,ft.sort((n,r)=>Pn(n)-Pn(r)),zt=0;zt<ft.length;zt++)ft[zt]();ft=null,zt=0}}const Pn=t=>t.id==null?1/0:t.id;function aa(t){cs=!1,cr=!0,Ar(t),Ae.sort((n,r)=>Pn(n)-Pn(r));const e=Ue;try{for(Ze=0;Ze<Ae.length;Ze++){const n=Ae[Ze];n&&n.active!==!1&&yt(n,null,14)}}finally{Ze=0,Ae.length=0,oa(),cr=!1,Hs=null,(Ae.length||vn.length||yn.length)&&aa(t)}}function Bl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||re;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[u]||re;p&&(s=n.map(m=>m.trim())),d&&(s=n.map(ns))}let a,c=r[a=Br(e)]||r[a=Br(Ge(e))];!c&&i&&(c=r[a=Br(on(e))]),c&&Fe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Fe(l,t,6,s)}}function ca(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!B(t)){const c=l=>{const u=ca(l,e,!0);u&&(a=!0,Ee(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(D(i)?i.forEach(c=>o[c]=null):Ee(o,i),r.set(t,o),o)}function Cr(t,e){return!t||!Ir(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,on(e))||z(t,e))}let Me=null,la=null;function lr(t){const e=Me;return Me=t,la=t&&t.type.__scopeId||null,e}function jl(t,e=Me,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ai(-1);const i=lr(e),o=t(...s);return lr(i),r._d&&Ai(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function jr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:p,setupState:m,ctx:w,inheritAttrs:x}=t;let C,A;const L=lr(t);try{if(n.shapeFlag&4){const K=s||r;C=ze(u.call(K,K,d,i,m,p,w)),A=c}else{const K=e;C=ze(K.length>1?K(i,{attrs:c,slots:a,emit:l}):K(i,null)),A=e.props?c:Hl(c)}}catch(K){In.length=0,Rr(K,t,1),C=_e(xt)}let H=C;if(A&&x!==!1){const K=Object.keys(A),{shapeFlag:X}=H;K.length&&X&7&&(o&&K.some(Ns)&&(A=Vl(A,o)),H=Zt(H,A))}return n.dirs&&(H=Zt(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),C=H,lr(L),C}const Hl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ir(n))&&((e||(e={}))[n]=t[n]);return e},Vl=(t,e)=>{const n={};for(const r in t)(!Ns(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function zl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?vi(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==r[p]&&!Cr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?vi(r,o,l):!0:!!o;return!1}function vi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Cr(n,i))return!0}return!1}function Wl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Kl=t=>t.__isSuspense;function ql(t,e){e&&e.pendingBranch?D(t)?e.effects.push(...t):e.effects.push(t):$l(t)}function Zn(t,e){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[t]=e}}function We(t,e,n=!1){const r=me||Me;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r.proxy):e}}const yi={};function bn(t,e,n){return ua(t,e,n)}function ua(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=re){const a=me;let c,l=!1,u=!1;if(ue(t)?(c=()=>t.value,l=as(t)):vt(t)?(c=()=>t,r=!0):D(t)?(u=!0,l=t.some(A=>vt(A)||as(A)),c=()=>t.map(A=>{if(ue(A))return A.value;if(vt(A))return Pt(A);if(B(A))return yt(A,a,2)})):B(t)?e?c=()=>yt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),Fe(t,a,3,[p])}:c=Ue,e&&r){const A=c;c=()=>Pt(A())}let d,p=A=>{d=C.onStop=()=>{yt(A,a,4)}};if(Nn)return p=Ue,e?n&&Fe(e,a,3,[c(),u?[]:void 0,p]):c(),Ue;let m=u?[]:yi;const w=()=>{if(!!C.active)if(e){const A=C.run();(r||l||(u?A.some((L,H)=>An(L,m[H])):An(A,m)))&&(d&&d(),Fe(e,a,3,[A,m===yi?void 0:m,p]),m=A)}else C.run()};w.allowRecurse=!!e;let x;s==="sync"?x=w:s==="post"?x=()=>we(w,a&&a.suspense):x=()=>Fl(w);const C=new Ls(c,x);return e?n?w():m=C.run():s==="post"?we(C.run.bind(C),a&&a.suspense):C.run(),()=>{C.stop(),a&&a.scope&&Ms(a.scope.effects,C)}}function Gl(t,e,n){const r=this.proxy,s=pe(t)?t.includes(".")?fa(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=me;en(this);const a=ua(s,i.bind(r),n);return o?en(o):Mt(),a}function fa(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Pt(t,e){if(!fe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ue(t))Pt(t.value,e);else if(D(t))for(let n=0;n<t.length;n++)Pt(t[n],e);else if(Er(t)||qt(t))t.forEach(n=>{Pt(n,e)});else if(Uo(t))for(const n in t)Pt(t[n],e);return t}function da(t){return B(t)?{setup:t,name:t.name}:t}const er=t=>!!t.type.__asyncLoader,ha=t=>t.type.__isKeepAlive;function Jl(t,e){pa(t,"a",e)}function Yl(t,e){pa(t,"da",e)}function pa(t,e,n=me){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Or(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ha(s.parent.vnode)&&Xl(r,e,n,s),s=s.parent}}function Xl(t,e,n,r){const s=Or(e,t,r,!0);zs(()=>{Ms(r[e],s)},n)}function Or(t,e,n=me,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;an(),en(n);const a=Fe(e,n,t,o);return Mt(),cn(),a});return r?s.unshift(i):s.push(i),i}}const ot=t=>(e,n=me)=>(!Nn||t==="sp")&&Or(t,e,n),Ql=ot("bm"),Zl=ot("m"),eu=ot("bu"),tu=ot("u"),nu=ot("bum"),zs=ot("um"),ru=ot("sp"),su=ot("rtg"),iu=ot("rtc");function ou(t,e=me){Or("ec",t,e)}function Hr(t,e){const n=Me;if(n===null)return t;const r=kr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=re]=e[i];B(o)&&(o={mounted:o,updated:o}),o.deep&&Pt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Tt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(an(),Fe(c,n,8,[t.el,a,t,e]),cn())}}const ga="components",ma=Symbol();function um(t){return pe(t)?au(ga,t,!1)||t:t||ma}function au(t,e,n=!0,r=!1){const s=Me||me;if(s){const i=s.type;if(t===ga){const a=$u(i,!1);if(a&&(a===e||a===Ge(e)||a===Tr(Ge(e))))return i}const o=bi(s[t]||i[t],e)||bi(s.appContext[t],e);return!o&&r?i:o}}function bi(t,e){return t&&(t[e]||t[Ge(e)]||t[Tr(Ge(e))])}function cu(t,e,n,r){let s;const i=n&&n[r];if(D(t)||pe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(fe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const us=t=>t?Pa(t)?kr(t)||t.proxy:us(t.parent):null,ur=Ee(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>us(t.parent),$root:t=>us(t.root),$emit:t=>t.emit,$options:t=>va(t),$forceUpdate:t=>t.f||(t.f=()=>ra(t.update)),$nextTick:t=>t.n||(t.n=Vs.bind(t.proxy)),$watch:t=>Gl.bind(t)}),lu={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==re&&z(r,e))return o[e]=1,r[e];if(s!==re&&z(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&z(l,e))return o[e]=3,i[e];if(n!==re&&z(n,e))return o[e]=4,n[e];fs&&(o[e]=0)}}const u=ur[e];let d,p;if(u)return e==="$attrs"&&Oe(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==re&&z(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,z(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==re&&z(s,e)?(s[e]=n,!0):r!==re&&z(r,e)?(r[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==re&&z(t,o)||e!==re&&z(e,o)||(a=i[0])&&z(a,o)||z(r,o)||z(ur,o)||z(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let fs=!0;function uu(t){const e=va(t),n=t.proxy,r=t.ctx;fs=!1,e.beforeCreate&&Ii(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:m,updated:w,activated:x,deactivated:C,beforeDestroy:A,beforeUnmount:L,destroyed:H,unmounted:K,render:X,renderTracked:ce,renderTriggered:V,errorCaptured:q,serverPrefetch:le,expose:ve,inheritAttrs:be,components:Te,directives:at,filters:Pe}=e;if(l&&fu(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const se in o){const ee=o[se];B(ee)&&(r[se]=ee.bind(n))}if(s){const se=s.call(n,n);fe(se)&&(t.data=ln(se))}if(fs=!0,i)for(const se in i){const ee=i[se],Se=B(ee)?ee.bind(n,n):B(ee.get)?ee.get.bind(n,n):Ue,$t=!B(ee)&&B(ee.set)?ee.set.bind(n):Ue,Ye=Ce({get:Se,set:$t});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:Be=>Ye.value=Be})}if(a)for(const se in a)_a(a[se],r,n,se);if(c){const se=B(c)?c.call(n):c;Reflect.ownKeys(se).forEach(ee=>{Zn(ee,se[ee])})}u&&Ii(u,t,"c");function he(se,ee){D(ee)?ee.forEach(Se=>se(Se.bind(n))):ee&&se(ee.bind(n))}if(he(Ql,d),he(Zl,p),he(eu,m),he(tu,w),he(Jl,x),he(Yl,C),he(ou,q),he(iu,ce),he(su,V),he(nu,L),he(zs,K),he(ru,le),D(ve))if(ve.length){const se=t.exposed||(t.exposed={});ve.forEach(ee=>{Object.defineProperty(se,ee,{get:()=>n[ee],set:Se=>n[ee]=Se})})}else t.exposed||(t.exposed={});X&&t.render===Ue&&(t.render=X),be!=null&&(t.inheritAttrs=be),Te&&(t.components=Te),at&&(t.directives=at)}function fu(t,e,n=Ue,r=!1){D(t)&&(t=ds(t));for(const s in t){const i=t[s];let o;fe(i)?"default"in i?o=We(i.from||s,i.default,!0):o=We(i.from||s):o=We(i),ue(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Ii(t,e,n){Fe(D(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function _a(t,e,n,r){const s=r.includes(".")?fa(n,r):()=>n[r];if(pe(t)){const i=e[t];B(i)&&bn(s,i)}else if(B(t))bn(s,t.bind(n));else if(fe(t))if(D(t))t.forEach(i=>_a(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&bn(s,i,t)}}function va(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>fr(c,l,o,!0)),fr(c,e,o)),i.set(e,c),c}function fr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&fr(t,i,n,!0),s&&s.forEach(o=>fr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=du[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const du={data:Ei,props:Rt,emits:Rt,methods:Rt,computed:Rt,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Rt,directives:Rt,watch:pu,provide:Ei,inject:hu};function Ei(t,e){return e?t?function(){return Ee(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function hu(t,e){return Rt(ds(t),ds(e))}function ds(t){if(D(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ie(t,e){return t?[...new Set([].concat(t,e))]:e}function Rt(t,e){return t?Ee(Ee(Object.create(null),t),e):e}function pu(t,e){if(!t)return e;if(!e)return t;const n=Ee(Object.create(null),t);for(const r in e)n[r]=Ie(t[r],e[r]);return n}function gu(t,e,n,r=!1){const s={},i={};ar(i,Pr,1),t.propsDefaults=Object.create(null),ya(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Rl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function mu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=G(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Cr(t.emitsOptions,p))continue;const m=e[p];if(c)if(z(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const w=Ge(p);s[w]=hs(c,a,w,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{ya(t,e,s,i)&&(l=!0);let u;for(const d in a)(!e||!z(e,d)&&((u=on(d))===d||!z(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=hs(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!z(e,d)&&!0)&&(delete i[d],l=!0)}l&&st(t,"set","$attrs")}function ya(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Xn(c))continue;const l=e[c];let u;s&&z(s,u=Ge(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Cr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=G(n),l=a||re;for(let u=0;u<i.length;u++){const d=i[u];n[d]=hs(s,c,d,l[d],t,!z(l,d))}}return o}function hs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=z(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&B(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(en(s),r=l[n]=c.call(null,e),Mt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===on(n))&&(r=!0))}return r}function ba(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!B(t)){const u=d=>{c=!0;const[p,m]=ba(d,e,!0);Ee(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,Kt),Kt;if(D(i))for(let u=0;u<i.length;u++){const d=Ge(i[u]);wi(d)&&(o[d]=re)}else if(i)for(const u in i){const d=Ge(u);if(wi(d)){const p=i[u],m=o[d]=D(p)||B(p)?{type:p}:p;if(m){const w=Ri(Boolean,m.type),x=Ri(String,m.type);m[0]=w>-1,m[1]=x<0||w<x,(w>-1||z(m,"default"))&&a.push(d)}}}const l=[o,a];return r.set(t,l),l}function wi(t){return t[0]!=="$"}function Ti(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Si(t,e){return Ti(t)===Ti(e)}function Ri(t,e){return D(e)?e.findIndex(n=>Si(n,t)):B(e)&&Si(e,t)?0:-1}const Ia=t=>t[0]==="_"||t==="$stable",Ws=t=>D(t)?t.map(ze):[ze(t)],_u=(t,e,n)=>{if(e._n)return e;const r=jl((...s)=>Ws(e(...s)),n);return r._c=!1,r},Ea=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ia(s))continue;const i=t[s];if(B(i))e[s]=_u(s,i,r);else if(i!=null){const o=Ws(i);e[s]=()=>o}}},wa=(t,e)=>{const n=Ws(e);t.slots.default=()=>n},vu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),ar(e,"_",n)):Ea(e,t.slots={})}else t.slots={},e&&wa(t,e);ar(t.slots,Pr,1)},yu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ee(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Ea(e,s)),o=e}else e&&(wa(t,e),o={default:1});if(i)for(const a in s)!Ia(a)&&!(a in o)&&delete s[a]};function Ta(){return{app:null,config:{isNativeTag:qc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bu=0;function Iu(t,e){return function(r,s=null){B(r)||(r=Object.assign({},r)),s!=null&&!fe(s)&&(s=null);const i=Ta(),o=new Set;let a=!1;const c=i.app={_uid:bu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ju,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&B(l.install)?(o.add(l),l.install(c,...u)):B(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const p=_e(r,s);return p.appContext=i,u&&e?e(p,l):t(p,l,d),a=!0,c._container=l,l.__vue_app__=c,kr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function ps(t,e,n,r,s=!1){if(D(t)){t.forEach((p,m)=>ps(p,e&&(D(e)?e[m]:e),n,r,s));return}if(er(r)&&!s)return;const i=r.shapeFlag&4?kr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===re?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(pe(l)?(u[l]=null,z(d,l)&&(d[l]=null)):ue(l)&&(l.value=null)),B(c))yt(c,a,12,[o,u]);else{const p=pe(c),m=ue(c);if(p||m){const w=()=>{if(t.f){const x=p?u[c]:c.value;s?D(x)&&Ms(x,i):D(x)?x.includes(i)||x.push(i):p?(u[c]=[i],z(d,c)&&(d[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,z(d,c)&&(d[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,we(w,n)):w()}}}const we=ql;function Eu(t){return wu(t)}function wu(t,e){const n=Zc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:m=Ue,cloneNode:w,insertStaticContent:x}=t,C=(f,h,g,y=null,v=null,E=null,R=!1,I=null,T=!!h.dynamicChildren)=>{if(f===h)return;f&&!hn(f,h)&&(y=k(f),ke(f,v,E,!0),f=null),h.patchFlag===-2&&(T=!1,h.dynamicChildren=null);const{type:b,ref:N,shapeFlag:O}=h;switch(b){case Ks:A(f,h,g,y);break;case xt:L(f,h,g,y);break;case Vr:f==null&&H(h,g,y,R);break;case Ne:at(f,h,g,y,v,E,R,I,T);break;default:O&1?ce(f,h,g,y,v,E,R,I,T):O&6?Pe(f,h,g,y,v,E,R,I,T):(O&64||O&128)&&b.process(f,h,g,y,v,E,R,I,T,ie)}N!=null&&v&&ps(N,f&&f.ref,E,h||f,!h)},A=(f,h,g,y)=>{if(f==null)r(h.el=a(h.children),g,y);else{const v=h.el=f.el;h.children!==f.children&&l(v,h.children)}},L=(f,h,g,y)=>{f==null?r(h.el=c(h.children||""),g,y):h.el=f.el},H=(f,h,g,y)=>{[f.el,f.anchor]=x(f.children,h,g,y,f.el,f.anchor)},K=({el:f,anchor:h},g,y)=>{let v;for(;f&&f!==h;)v=p(f),r(f,g,y),f=v;r(h,g,y)},X=({el:f,anchor:h})=>{let g;for(;f&&f!==h;)g=p(f),s(f),f=g;s(h)},ce=(f,h,g,y,v,E,R,I,T)=>{R=R||h.type==="svg",f==null?V(h,g,y,v,E,R,I,T):ve(f,h,v,E,R,I,T)},V=(f,h,g,y,v,E,R,I)=>{let T,b;const{type:N,props:O,shapeFlag:M,transition:U,patchFlag:W,dirs:te}=f;if(f.el&&w!==void 0&&W===-1)T=f.el=w(f.el);else{if(T=f.el=o(f.type,E,O&&O.is,O),M&8?u(T,f.children):M&16&&le(f.children,T,null,y,v,E&&N!=="foreignObject",R,I),te&&Tt(f,null,y,"created"),O){for(const ae in O)ae!=="value"&&!Xn(ae)&&i(T,ae,null,O[ae],E,f.children,y,v,S);"value"in O&&i(T,"value",null,O.value),(b=O.onVnodeBeforeMount)&&He(b,y,f)}q(T,f,f.scopeId,R,y)}te&&Tt(f,null,y,"beforeMount");const ne=(!v||v&&!v.pendingBranch)&&U&&!U.persisted;ne&&U.beforeEnter(T),r(T,h,g),((b=O&&O.onVnodeMounted)||ne||te)&&we(()=>{b&&He(b,y,f),ne&&U.enter(T),te&&Tt(f,null,y,"mounted")},v)},q=(f,h,g,y,v)=>{if(g&&m(f,g),y)for(let E=0;E<y.length;E++)m(f,y[E]);if(v){let E=v.subTree;if(h===E){const R=v.vnode;q(f,R,R.scopeId,R.slotScopeIds,v.parent)}}},le=(f,h,g,y,v,E,R,I,T=0)=>{for(let b=T;b<f.length;b++){const N=f[b]=I?dt(f[b]):ze(f[b]);C(null,N,h,g,y,v,E,R,I)}},ve=(f,h,g,y,v,E,R)=>{const I=h.el=f.el;let{patchFlag:T,dynamicChildren:b,dirs:N}=h;T|=f.patchFlag&16;const O=f.props||re,M=h.props||re;let U;g&&St(g,!1),(U=M.onVnodeBeforeUpdate)&&He(U,g,h,f),N&&Tt(h,f,g,"beforeUpdate"),g&&St(g,!0);const W=v&&h.type!=="foreignObject";if(b?be(f.dynamicChildren,b,I,g,y,W,E):R||Se(f,h,I,null,g,y,W,E,!1),T>0){if(T&16)Te(I,h,O,M,g,y,v);else if(T&2&&O.class!==M.class&&i(I,"class",null,M.class,v),T&4&&i(I,"style",O.style,M.style,v),T&8){const te=h.dynamicProps;for(let ne=0;ne<te.length;ne++){const ae=te[ne],De=O[ae],Bt=M[ae];(Bt!==De||ae==="value")&&i(I,ae,De,Bt,v,f.children,g,y,S)}}T&1&&f.children!==h.children&&u(I,h.children)}else!R&&b==null&&Te(I,h,O,M,g,y,v);((U=M.onVnodeUpdated)||N)&&we(()=>{U&&He(U,g,h,f),N&&Tt(h,f,g,"updated")},y)},be=(f,h,g,y,v,E,R)=>{for(let I=0;I<h.length;I++){const T=f[I],b=h[I],N=T.el&&(T.type===Ne||!hn(T,b)||T.shapeFlag&70)?d(T.el):g;C(T,b,N,null,y,v,E,R,!0)}},Te=(f,h,g,y,v,E,R)=>{if(g!==y){for(const I in y){if(Xn(I))continue;const T=y[I],b=g[I];T!==b&&I!=="value"&&i(f,I,b,T,R,h.children,v,E,S)}if(g!==re)for(const I in g)!Xn(I)&&!(I in y)&&i(f,I,g[I],null,R,h.children,v,E,S);"value"in y&&i(f,"value",g.value,y.value)}},at=(f,h,g,y,v,E,R,I,T)=>{const b=h.el=f?f.el:a(""),N=h.anchor=f?f.anchor:a("");let{patchFlag:O,dynamicChildren:M,slotScopeIds:U}=h;U&&(I=I?I.concat(U):U),f==null?(r(b,g,y),r(N,g,y),le(h.children,g,N,v,E,R,I,T)):O>0&&O&64&&M&&f.dynamicChildren?(be(f.dynamicChildren,M,g,v,E,R,I),(h.key!=null||v&&h===v.subTree)&&Sa(f,h,!0)):Se(f,h,g,N,v,E,R,I,T)},Pe=(f,h,g,y,v,E,R,I,T)=>{h.slotScopeIds=I,f==null?h.shapeFlag&512?v.ctx.activate(h,g,y,R,T):de(h,g,y,v,E,R,T):he(f,h,T)},de=(f,h,g,y,v,E,R)=>{const I=f.component=Du(f,y,v);if(ha(f)&&(I.ctx.renderer=ie),xu(I),I.asyncDep){if(v&&v.registerDep(I,se),!f.el){const T=I.subTree=_e(xt);L(null,T,h,g)}return}se(I,f,h,g,v,E,R)},he=(f,h,g)=>{const y=h.component=f.component;if(zl(f,h,g))if(y.asyncDep&&!y.asyncResolved){ee(y,h,g);return}else y.next=h,Ul(y.update),y.update();else h.el=f.el,y.vnode=h},se=(f,h,g,y,v,E,R)=>{const I=()=>{if(f.isMounted){let{next:N,bu:O,u:M,parent:U,vnode:W}=f,te=N,ne;St(f,!1),N?(N.el=W.el,ee(f,N,R)):N=W,O&&Qn(O),(ne=N.props&&N.props.onVnodeBeforeUpdate)&&He(ne,U,N,W),St(f,!0);const ae=jr(f),De=f.subTree;f.subTree=ae,C(De,ae,d(De.el),k(De),f,v,E),N.el=ae.el,te===null&&Wl(f,ae.el),M&&we(M,v),(ne=N.props&&N.props.onVnodeUpdated)&&we(()=>He(ne,U,N,W),v)}else{let N;const{el:O,props:M}=h,{bm:U,m:W,parent:te}=f,ne=er(h);if(St(f,!1),U&&Qn(U),!ne&&(N=M&&M.onVnodeBeforeMount)&&He(N,te,h),St(f,!0),O&&$){const ae=()=>{f.subTree=jr(f),$(O,f.subTree,f,v,null)};ne?h.type.__asyncLoader().then(()=>!f.isUnmounted&&ae()):ae()}else{const ae=f.subTree=jr(f);C(null,ae,g,y,f,v,E),h.el=ae.el}if(W&&we(W,v),!ne&&(N=M&&M.onVnodeMounted)){const ae=h;we(()=>He(N,te,ae),v)}(h.shapeFlag&256||te&&er(te.vnode)&&te.vnode.shapeFlag&256)&&f.a&&we(f.a,v),f.isMounted=!0,h=g=y=null}},T=f.effect=new Ls(I,()=>ra(b),f.scope),b=f.update=()=>T.run();b.id=f.uid,St(f,!0),b()},ee=(f,h,g)=>{h.component=f;const y=f.vnode.props;f.vnode=h,f.next=null,mu(f,h.props,y,g),yu(f,h.children,g),an(),Ar(void 0,f.update),cn()},Se=(f,h,g,y,v,E,R,I,T=!1)=>{const b=f&&f.children,N=f?f.shapeFlag:0,O=h.children,{patchFlag:M,shapeFlag:U}=h;if(M>0){if(M&128){Ye(b,O,g,y,v,E,R,I,T);return}else if(M&256){$t(b,O,g,y,v,E,R,I,T);return}}U&8?(N&16&&S(b,v,E),O!==b&&u(g,O)):N&16?U&16?Ye(b,O,g,y,v,E,R,I,T):S(b,v,E,!0):(N&8&&u(g,""),U&16&&le(O,g,y,v,E,R,I,T))},$t=(f,h,g,y,v,E,R,I,T)=>{f=f||Kt,h=h||Kt;const b=f.length,N=h.length,O=Math.min(b,N);let M;for(M=0;M<O;M++){const U=h[M]=T?dt(h[M]):ze(h[M]);C(f[M],U,g,null,v,E,R,I,T)}b>N?S(f,v,E,!0,!1,O):le(h,g,y,v,E,R,I,T,O)},Ye=(f,h,g,y,v,E,R,I,T)=>{let b=0;const N=h.length;let O=f.length-1,M=N-1;for(;b<=O&&b<=M;){const U=f[b],W=h[b]=T?dt(h[b]):ze(h[b]);if(hn(U,W))C(U,W,g,null,v,E,R,I,T);else break;b++}for(;b<=O&&b<=M;){const U=f[O],W=h[M]=T?dt(h[M]):ze(h[M]);if(hn(U,W))C(U,W,g,null,v,E,R,I,T);else break;O--,M--}if(b>O){if(b<=M){const U=M+1,W=U<N?h[U].el:y;for(;b<=M;)C(null,h[b]=T?dt(h[b]):ze(h[b]),g,W,v,E,R,I,T),b++}}else if(b>M)for(;b<=O;)ke(f[b],v,E,!0),b++;else{const U=b,W=b,te=new Map;for(b=W;b<=M;b++){const Re=h[b]=T?dt(h[b]):ze(h[b]);Re.key!=null&&te.set(Re.key,b)}let ne,ae=0;const De=M-W+1;let Bt=!1,oi=0;const dn=new Array(De);for(b=0;b<De;b++)dn[b]=0;for(b=U;b<=O;b++){const Re=f[b];if(ae>=De){ke(Re,v,E,!0);continue}let je;if(Re.key!=null)je=te.get(Re.key);else for(ne=W;ne<=M;ne++)if(dn[ne-W]===0&&hn(Re,h[ne])){je=ne;break}je===void 0?ke(Re,v,E,!0):(dn[je-W]=b+1,je>=oi?oi=je:Bt=!0,C(Re,h[je],g,null,v,E,R,I,T),ae++)}const ai=Bt?Tu(dn):Kt;for(ne=ai.length-1,b=De-1;b>=0;b--){const Re=W+b,je=h[Re],ci=Re+1<N?h[Re+1].el:y;dn[b]===0?C(null,je,g,ci,v,E,R,I,T):Bt&&(ne<0||b!==ai[ne]?Be(je,g,ci,2):ne--)}}},Be=(f,h,g,y,v=null)=>{const{el:E,type:R,transition:I,children:T,shapeFlag:b}=f;if(b&6){Be(f.component.subTree,h,g,y);return}if(b&128){f.suspense.move(h,g,y);return}if(b&64){R.move(f,h,g,ie);return}if(R===Ne){r(E,h,g);for(let O=0;O<T.length;O++)Be(T[O],h,g,y);r(f.anchor,h,g);return}if(R===Vr){K(f,h,g);return}if(y!==2&&b&1&&I)if(y===0)I.beforeEnter(E),r(E,h,g),we(()=>I.enter(E),v);else{const{leave:O,delayLeave:M,afterLeave:U}=I,W=()=>r(E,h,g),te=()=>{O(E,()=>{W(),U&&U()})};M?M(E,W,te):te()}else r(E,h,g)},ke=(f,h,g,y=!1,v=!1)=>{const{type:E,props:R,ref:I,children:T,dynamicChildren:b,shapeFlag:N,patchFlag:O,dirs:M}=f;if(I!=null&&ps(I,null,g,f,!0),N&256){h.ctx.deactivate(f);return}const U=N&1&&M,W=!er(f);let te;if(W&&(te=R&&R.onVnodeBeforeUnmount)&&He(te,h,f),N&6)P(f.component,g,y);else{if(N&128){f.suspense.unmount(g,y);return}U&&Tt(f,null,h,"beforeUnmount"),N&64?f.type.remove(f,h,g,v,ie,y):b&&(E!==Ne||O>0&&O&64)?S(b,h,g,!1,!0):(E===Ne&&O&384||!v&&N&16)&&S(T,h,g),y&&fn(f)}(W&&(te=R&&R.onVnodeUnmounted)||U)&&we(()=>{te&&He(te,h,f),U&&Tt(f,null,h,"unmounted")},g)},fn=f=>{const{type:h,el:g,anchor:y,transition:v}=f;if(h===Ne){_(g,y);return}if(h===Vr){X(f);return}const E=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:I}=v,T=()=>R(g,E);I?I(f.el,E,T):T()}else E()},_=(f,h)=>{let g;for(;f!==h;)g=p(f),s(f),f=g;s(h)},P=(f,h,g)=>{const{bum:y,scope:v,update:E,subTree:R,um:I}=f;y&&Qn(y),v.stop(),E&&(E.active=!1,ke(R,f,h,g)),I&&we(I,h),we(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},S=(f,h,g,y=!1,v=!1,E=0)=>{for(let R=E;R<f.length;R++)ke(f[R],h,g,y,v)},k=f=>f.shapeFlag&6?k(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),J=(f,h,g)=>{f==null?h._vnode&&ke(h._vnode,null,null,!0):C(h._vnode||null,f,h,null,null,null,g),oa(),h._vnode=f},ie={p:C,um:ke,m:Be,r:fn,mt:de,mc:le,pc:Se,pbc:be,n:k,o:t};let j,$;return e&&([j,$]=e(ie)),{render:J,hydrate:j,createApp:Iu(J,j)}}function St({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Sa(t,e,n=!1){const r=t.children,s=e.children;if(D(r)&&D(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=dt(s[i]),a.el=o.el),n||Sa(o,a))}}function Tu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Su=t=>t.__isTeleport,Ne=Symbol(void 0),Ks=Symbol(void 0),xt=Symbol(void 0),Vr=Symbol(void 0),In=[];let Le=null;function rt(t=!1){In.push(Le=t?null:[])}function Ru(){In.pop(),Le=In[In.length-1]||null}let kn=1;function Ai(t){kn+=t}function Ra(t){return t.dynamicChildren=kn>0?Le||Kt:null,Ru(),kn>0&&Le&&Le.push(t),t}function bt(t,e,n,r,s,i){return Ra(Z(t,e,n,r,s,i,!0))}function Au(t,e,n,r,s){return Ra(_e(t,e,n,r,s,!0))}function gs(t){return t?t.__v_isVNode===!0:!1}function hn(t,e){return t.type===e.type&&t.key===e.key}const Pr="__vInternal",Aa=({key:t})=>t!=null?t:null,tr=({ref:t,ref_key:e,ref_for:n})=>t!=null?pe(t)||ue(t)||B(t)?{i:Me,r:t,k:e,f:!!n}:t:null;function Z(t,e=null,n=null,r=0,s=null,i=t===Ne?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Aa(e),ref:e&&tr(e),scopeId:la,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(qs(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=pe(n)?8:16),kn>0&&!o&&Le&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Le.push(c),c}const _e=Cu;function Cu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ma)&&(t=xt),gs(t)){const a=Zt(t,e,!0);return n&&qs(a,n),kn>0&&!i&&Le&&(a.shapeFlag&6?Le[Le.indexOf(t)]=a:Le.push(a)),a.patchFlag|=-2,a}if(Bu(t)&&(t=t.__vccOpts),e){e=Ou(e);let{class:a,style:c}=e;a&&!pe(a)&&(e.class=Xt(a)),fe(c)&&(Xo(c)&&!D(c)&&(c=Ee({},c)),e.style=ks(c))}const o=pe(t)?1:Kl(t)?128:Su(t)?64:fe(t)?4:B(t)?2:0;return Z(t,e,n,r,s,o,i,!0)}function Ou(t){return t?Xo(t)||Pr in t?Ee({},t):t:null}function Zt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?ku(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Aa(a),ref:e&&e.ref?n&&s?D(s)?s.concat(tr(e)):[s,tr(e)]:tr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ne?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zt(t.ssContent),ssFallback:t.ssFallback&&Zt(t.ssFallback),el:t.el,anchor:t.anchor}}function Pu(t=" ",e=0){return _e(Ks,null,t,e)}function Ca(t="",e=!1){return e?(rt(),Au(xt,null,t)):_e(xt,null,t)}function ze(t){return t==null||typeof t=="boolean"?_e(xt):D(t)?_e(Ne,null,t.slice()):typeof t=="object"?dt(t):_e(Ks,null,String(t))}function dt(t){return t.el===null||t.memo?t:Zt(t)}function qs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(D(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),qs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Pr in e)?e._ctx=Me:s===3&&Me&&(Me.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Me},n=32):(e=String(e),r&64?(n=16,e=[Pu(e)]):n=8);t.children=e,t.shapeFlag|=n}function ku(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Xt([e.class,r.class]));else if(s==="style")e.style=ks([e.style,r.style]);else if(Ir(s)){const i=e[s],o=r[s];o&&i!==o&&!(D(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function He(t,e,n,r=null){Fe(t,e,7,[n,r])}const Nu=Ta();let Mu=0;function Du(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Nu,i={uid:Mu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ba(r,s),emitsOptions:ca(r,s),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Bl.bind(null,i),t.ce&&t.ce(i),i}let me=null;const Oa=()=>me||Me,en=t=>{me=t,t.scope.on()},Mt=()=>{me&&me.scope.off(),me=null};function Pa(t){return t.vnode.shapeFlag&4}let Nn=!1;function xu(t,e=!1){Nn=e;const{props:n,children:r}=t.vnode,s=Pa(t);gu(t,n,s,e),vu(t,r);const i=s?Lu(t,e):void 0;return Nn=!1,i}function Lu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Qt(new Proxy(t.ctx,lu));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Fu(t):null;en(t),an();const i=yt(r,t,0,[t.props,s]);if(cn(),Mt(),xo(i)){if(i.then(Mt,Mt),e)return i.then(o=>{Ci(t,o,e)}).catch(o=>{Rr(o,t,0)});t.asyncDep=i}else Ci(t,i,e)}else ka(t,e)}function Ci(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:fe(e)&&(t.setupState=ta(e)),ka(t,n)}let Oi;function ka(t,e,n){const r=t.type;if(!t.render){if(!e&&Oi&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ee(Ee({isCustomElement:i,delimiters:a},o),c);r.render=Oi(s,l)}}t.render=r.render||Ue}en(t),an(),uu(t),cn(),Mt()}function Uu(t){return new Proxy(t.attrs,{get(e,n){return Oe(t,"get","$attrs"),e[n]}})}function Fu(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Uu(t))},slots:t.slots,emit:t.emit,expose:e}}function kr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ta(Qt(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ur)return ur[n](t)}}))}function $u(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function Bu(t){return B(t)&&"__vccOpts"in t}const Ce=(t,e)=>Dl(t,e,Nn);function Na(t,e,n){const r=arguments.length;return r===2?fe(e)&&!D(e)?gs(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&gs(n)&&(n=[n]),_e(t,e,n))}const ju="3.2.37",Hu="http://www.w3.org/2000/svg",Ct=typeof document<"u"?document:null,Pi=Ct&&Ct.createElement("template"),Vu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ct.createElementNS(Hu,t):Ct.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ct.createTextNode(t),createComment:t=>Ct.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ct.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Pi.innerHTML=r?`<svg>${t}</svg>`:t;const a=Pi.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function zu(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Wu(t,e,n){const r=t.style,s=pe(n);if(n&&!s){for(const i in n)ms(r,i,n[i]);if(e&&!pe(e))for(const i in e)n[i]==null&&ms(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const ki=/\s*!important$/;function ms(t,e,n){if(D(n))n.forEach(r=>ms(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ku(t,e);ki.test(n)?t.setProperty(on(r),n.replace(ki,""),"important"):t[r]=n}}const Ni=["Webkit","Moz","ms"],zr={};function Ku(t,e){const n=zr[e];if(n)return n;let r=Ge(e);if(r!=="filter"&&r in t)return zr[e]=r;r=Tr(r);for(let s=0;s<Ni.length;s++){const i=Ni[s]+r;if(i in t)return zr[e]=i}return e}const Mi="http://www.w3.org/1999/xlink";function qu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Mi,e.slice(6,e.length)):t.setAttributeNS(Mi,e,n);else{const i=Hc(e);n==null||i&&!No(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Gu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=No(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Ma,Ju]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let _s=0;const Yu=Promise.resolve(),Xu=()=>{_s=0},Qu=()=>_s||(Yu.then(Xu),_s=Ma());function Ot(t,e,n,r){t.addEventListener(e,n,r)}function Zu(t,e,n,r){t.removeEventListener(e,n,r)}function ef(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=tf(e);if(r){const l=i[e]=nf(r,s);Ot(t,a,l,c)}else o&&(Zu(t,a,o,c),i[e]=void 0)}}const Di=/(?:Once|Passive|Capture)$/;function tf(t){let e;if(Di.test(t)){e={};let n;for(;n=t.match(Di);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[on(t.slice(2)),e]}function nf(t,e){const n=r=>{const s=r.timeStamp||Ma();(Ju||s>=n.attached-1)&&Fe(rf(r,n.value),e,5,[r])};return n.value=t,n.attached=Qu(),n}function rf(t,e){if(D(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const xi=/^on[a-z]/,sf=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?zu(t,r,s):e==="style"?Wu(t,n,r):Ir(e)?Ns(e)||ef(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):of(t,e,r,s))?Gu(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),qu(t,e,r,s))};function of(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&xi.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||xi.test(e)&&pe(n)?!1:e in t}const dr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return D(e)?n=>Qn(e,n):e};function af(t){t.target.composing=!0}function Li(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=dr(s);const i=r||s.props&&s.props.type==="number";Ot(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ns(a)),t._assign(a)}),n&&Ot(t,"change",()=>{t.value=t.value.trim()}),e||(Ot(t,"compositionstart",af),Ot(t,"compositionend",Li),Ot(t,"change",Li))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=dr(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ns(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},fm={deep:!0,created(t,e,n){t._assign=dr(n),Ot(t,"change",()=>{const r=t._modelValue,s=cf(t),i=t.checked,o=t._assign;if(D(r)){const a=Mo(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Er(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Da(t,i))})},mounted:Ui,beforeUpdate(t,e,n){t._assign=dr(n),Ui(t,e,n)}};function Ui(t,{value:e,oldValue:n},r){t._modelValue=e,D(e)?t.checked=Mo(e,r.props.value)>-1:Er(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=br(e,Da(t,!0)))}function cf(t){return"_value"in t?t._value:t.value}function Da(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const lf=Ee({patchProp:sf},Vu);let Fi;function uf(){return Fi||(Fi=Eu(lf))}const ff=(...t)=>{const e=uf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=df(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function df(t){return pe(t)?document.querySelector(t):t}var hf=!1;/*!
  * pinia v2.0.21
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let xa;const Nr=t=>xa=t,La=Symbol();function vs(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var En;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(En||(En={}));function pf(){const t=$o(!0),e=t.run(()=>Q({}));let n=[],r=[];const s=Qt({install(i){Nr(s),s._a=i,i.provide(La,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!hf?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ua=()=>{};function $i(t,e,n,r=Ua){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Oa()&&zs(s),s}function jt(t,...e){t.slice().forEach(n=>{n(...e)})}function ys(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];vs(s)&&vs(r)&&t.hasOwnProperty(n)&&!ue(r)&&!vt(r)?t[n]=ys(s,r):t[n]=r}return t}const gf=Symbol();function mf(t){return!vs(t)||!t.hasOwnProperty(gf)}const{assign:Qe}=Object;function _f(t){return!!(ue(t)&&t.effect)}function vf(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=Pl(n.state.value[t]);return Qe(u,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=Qt(Ce(()=>{Nr(n);const m=n._s.get(t);return o[p].call(m,m)})),d),{}))}return c=Fa(t,l,e,n,r,!0),c.$reset=function(){const d=s?s():{};this.$patch(p=>{Qe(p,d)})},c}function Fa(t,e,n={},r,s,i){let o;const a=Qe({actions:{}},n),c={deep:!0};let l,u,d=Qt([]),p=Qt([]),m;const w=r.state.value[t];!i&&!w&&(r.state.value[t]={}),Q({});let x;function C(V){let q;l=u=!1,typeof V=="function"?(V(r.state.value[t]),q={type:En.patchFunction,storeId:t,events:m}):(ys(r.state.value[t],V),q={type:En.patchObject,payload:V,storeId:t,events:m});const le=x=Symbol();Vs().then(()=>{x===le&&(l=!0)}),u=!0,jt(d,q,r.state.value[t])}const A=Ua;function L(){o.stop(),d=[],p=[],r._s.delete(t)}function H(V,q){return function(){Nr(r);const le=Array.from(arguments),ve=[],be=[];function Te(de){ve.push(de)}function at(de){be.push(de)}jt(p,{args:le,name:V,store:X,after:Te,onError:at});let Pe;try{Pe=q.apply(this&&this.$id===t?this:X,le)}catch(de){throw jt(be,de),de}return Pe instanceof Promise?Pe.then(de=>(jt(ve,de),de)).catch(de=>(jt(be,de),Promise.reject(de))):(jt(ve,Pe),Pe)}}const K={_p:r,$id:t,$onAction:$i.bind(null,p),$patch:C,$reset:A,$subscribe(V,q={}){const le=$i(d,V,q.detached,()=>ve()),ve=o.run(()=>bn(()=>r.state.value[t],be=>{(q.flush==="sync"?u:l)&&V({storeId:t,type:En.direct,events:m},be)},Qe({},c,q)));return le},$dispose:L},X=ln(Qe({},K));r._s.set(t,X);const ce=r._e.run(()=>(o=$o(),o.run(()=>e())));for(const V in ce){const q=ce[V];if(ue(q)&&!_f(q)||vt(q))i||(w&&mf(q)&&(ue(q)?q.value=w[V]:ys(q,w[V])),r.state.value[t][V]=q);else if(typeof q=="function"){const le=H(V,q);ce[V]=le,a.actions[V]=q}}return Qe(X,ce),Qe(G(X),ce),Object.defineProperty(X,"$state",{get:()=>r.state.value[t],set:V=>{C(q=>{Qe(q,V)})}}),r._p.forEach(V=>{Qe(X,o.run(()=>V({store:X,app:r._a,pinia:r,options:a})))}),w&&i&&n.hydrate&&n.hydrate(X.$state,w),l=!0,u=!0,X}function $a(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Oa();return a=a||l&&We(La),a&&Nr(a),a=xa,a._s.has(r)||(i?Fa(r,e,s,a):vf(r,s,a)),a._s.get(r)}return o.$id=r,o}function yf(t){return typeof t=="object"&&t!==null}function Bi(t,e){return t=yf(t)?t:Object.create(null),new Proxy(t,{get(n,r,s){return Reflect.get(n,r,s)||Reflect.get(e,r,s)}})}function ji(t){return t!==null&&typeof t=="object"}function bs(t,e){const n=Array.isArray(t)&&Array.isArray(e),r=ji(t)&&ji(e);if(!n&&!r)throw new Error("Can only merge object with object or array with array");const s=n?[]:{};return[...Object.keys(t),...Object.keys(e)].forEach(o=>{Array.isArray(t[o])&&Array.isArray(e[o])?s[o]=[...Object.values(bs(t[o],e[o]))]:e[o]!==null&&typeof e[o]=="object"&&typeof t[o]=="object"?s[o]=bs(t[o],e[o]):t[o]!==void 0&&e[o]===void 0?s[o]=t[o]:t[o]===void 0&&e[o]!==void 0&&(s[o]=e[o])}),s}function Hi(t,e){return e.reduce((n,r)=>r==="[]"&&Array.isArray(n)?n:n==null?void 0:n[r],t)}function Vi(t,e,n){const r=e.slice(0,-1).reduce((s,i)=>/^(__proto__)$/.test(i)?{}:s[i]=s[i]||{},t);if(Array.isArray(r[e[e.length-1]])&&Array.isArray(n)){const s=r[e[e.length-1]].map((i,o)=>Array.isArray(i)&&typeof i!="object"?[...i,...n[o]]:typeof i=="object"&&i!==null&&Object.keys(i).some(a=>Array.isArray(i[a]))?bs(i,n[o]):{...i,...n[o]});r[e[e.length-1]]=s}else e[e.length-1]===void 0&&Array.isArray(r)&&Array.isArray(n)?r.push(...n):r[e[e.length-1]]=n;return t}function Ba(t,e){return e.reduce((n,r)=>{const s=r.split(".");if(!s.includes("[]"))return Vi(n,s,Hi(t,s));const i=s.indexOf("[]"),o=s.slice(0,i),a=s.slice(0,i+1),c=s.slice(i+1),l=Hi(t,a),u=[];for(const d of l)c.length!==0&&(Array.isArray(d)||typeof d=="object")?u.push(Ba(d,[c.join(".")])):u.push(d);return Vi(n,o,u)},Array.isArray(t)?[]:{})}function zi(t,e,n,r){try{const s=e==null?void 0:e.getItem(r);s&&t.$patch(n==null?void 0:n.deserialize(s))}catch{}}function bf(t={}){return e=>{const{options:{persist:n},store:r}=e;if(!n)return;const s=(Array.isArray(n)?n.map(i=>Bi(i,t)):[Bi(n,t)]).map(({storage:i=localStorage,beforeRestore:o=null,afterRestore:a=null,serializer:c={serialize:JSON.stringify,deserialize:JSON.parse},key:l=r.$id,paths:u=null})=>({storage:i,beforeRestore:o,afterRestore:a,serializer:c,key:l,paths:u}));s.forEach(i=>{const{storage:o,serializer:a,key:c,paths:l,beforeRestore:u,afterRestore:d}=i;u==null||u(e),zi(r,o,a,c),d==null||d(e),r.$subscribe((p,m)=>{try{const w=Array.isArray(l)?Ba(m,l):m;o.setItem(c,a.serialize(w))}catch{}},{detached:!0})}),r.$hydrate=({runHooks:i=!0}={})=>{s.forEach(o=>{const{beforeRestore:a,afterRestore:c,storage:l,serializer:u,key:d}=o;i&&(a==null||a(e)),zi(r,l,u,d),i&&(c==null||c(e))})}}}var If=bf();/*!
  * vue-router v4.1.4
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Wt=typeof window<"u";function Ef(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Y=Object.assign;function Kr(t,e){const n={};for(const r in e){const s=e[r];n[r]=$e(s)?s.map(t):t(s)}return n}const wn=()=>{},$e=Array.isArray,wf=/\/$/,Tf=t=>t.replace(wf,"");function qr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Cf(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Sf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Wi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Rf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&tn(e.matched[r],n.matched[s])&&ja(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function tn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ja(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Af(t[n],e[n]))return!1;return!0}function Af(t,e){return $e(t)?Ki(t,e):$e(e)?Ki(e,t):t===e}function Ki(t,e){return $e(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Cf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Mn;(function(t){t.pop="pop",t.push="push"})(Mn||(Mn={}));var Tn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Tn||(Tn={}));function Of(t){if(!t)if(Wt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Tf(t)}const Pf=/^[^#]+#/;function kf(t,e){return t.replace(Pf,"#")+e}function Nf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Mr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Mf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Nf(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function qi(t,e){return(history.state?history.state.position-e:-1)+t}const Is=new Map;function Df(t,e){Is.set(t,e)}function xf(t){const e=Is.get(t);return Is.delete(t),e}let Lf=()=>location.protocol+"//"+location.host;function Ha(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Wi(c,"")}return Wi(n,t)+r+s}function Uf(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=Ha(t,location),w=n.value,x=e.value;let C=0;if(p){if(n.value=m,e.value=p,o&&o===w){o=null;return}C=x?p.position-x.position:0}else r(m);s.forEach(A=>{A(n.value,w,{delta:C,type:Mn.pop,direction:C?C>0?Tn.forward:Tn.back:Tn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const m=()=>{const w=s.indexOf(p);w>-1&&s.splice(w,1)};return i.push(m),m}function u(){const{history:p}=window;!p.state||p.replaceState(Y({},p.state,{scroll:Mr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:d}}function Gi(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Mr():null}}function Ff(t){const{history:e,location:n}=window,r={value:Ha(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:Lf()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=Y({},e.state,Gi(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Y({},s.value,e.state,{forward:c,scroll:Mr()});i(u.current,u,!0);const d=Y({},Gi(r.value,c,null),{position:u.position+1},l);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function $f(t){t=Of(t);const e=Ff(t),n=Uf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Y({location:"",base:t,go:r,createHref:kf.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Bf(t){return typeof t=="string"||t&&typeof t=="object"}function Va(t){return typeof t=="string"||typeof t=="symbol"}const lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},za=Symbol("");var Ji;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ji||(Ji={}));function nn(t,e){return Y(new Error,{type:t,[za]:!0},e)}function Xe(t,e){return t instanceof Error&&za in t&&(e==null||!!(t.type&e))}const Yi="[^/]+?",jf={sensitive:!1,strict:!1,start:!0,end:!0},Hf=/[.+*?^${}()[\]/\\]/g;function Vf(t,e){const n=Y({},jf,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const p=l[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(Hf,"\\$&"),m+=40;else if(p.type===1){const{value:w,repeatable:x,optional:C,regexp:A}=p;i.push({name:w,repeatable:x,optional:C});const L=A||Yi;if(L!==Yi){m+=10;try{new RegExp(`(${L})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${w}" (${L}): `+K.message)}}let H=x?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;d||(H=C&&l.length<2?`(?:/${H})`:"/"+H),C&&(H+="?"),s+=H,m+=20,C&&(m+=-8),x&&(m+=-20),L===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",w=i[p-1];d[w.name]=m&&w.repeatable?m.split("/"):m}return d}function c(l){let u="",d=!1;for(const p of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:w,repeatable:x,optional:C}=m,A=w in l?l[w]:"";if($e(A)&&!x)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const L=$e(A)?A.join("/"):A;if(!L)if(C)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);u+=L}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function zf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Wf(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=zf(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Xi(r))return 1;if(Xi(s))return-1}return s.length-r.length}function Xi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Kf={type:0,value:""},qf=/[a-zA-Z0-9_]/;function Gf(t){if(!t)return[[]];if(t==="/")return[[Kf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function d(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:qf.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function Jf(t,e,n){const r=Vf(Gf(t.path),n),s=Y(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Yf(t,e){const n=[],r=new Map;e=eo({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,d,p){const m=!p,w=Xf(u);w.aliasOf=p&&p.record;const x=eo(e,u),C=[w];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of H)C.push(Y({},w,{components:p?p.record.components:w.components,path:K,aliasOf:p?p.record:w}))}let A,L;for(const H of C){const{path:K}=H;if(d&&K[0]!=="/"){const X=d.record.path,ce=X[X.length-1]==="/"?"":"/";H.path=d.record.path+(K&&ce+K)}if(A=Jf(H,d,x),p?p.alias.push(A):(L=L||A,L!==A&&L.alias.push(A),m&&u.name&&!Zi(A)&&o(u.name)),w.children){const X=w.children;for(let ce=0;ce<X.length;ce++)i(X[ce],A,p&&p.children[ce])}p=p||A,c(A)}return L?()=>{o(L)}:wn}function o(u){if(Va(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&Wf(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Wa(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Zi(u)&&r.set(u.record.name,u)}function l(u,d){let p,m={},w,x;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw nn(1,{location:u});x=p.record.name,m=Y(Qi(d.params,p.keys.filter(L=>!L.optional).map(L=>L.name)),u.params&&Qi(u.params,p.keys.map(L=>L.name))),w=p.stringify(m)}else if("path"in u)w=u.path,p=n.find(L=>L.re.test(w)),p&&(m=p.parse(w),x=p.record.name);else{if(p=d.name?r.get(d.name):n.find(L=>L.re.test(d.path)),!p)throw nn(1,{location:u,currentLocation:d});x=p.record.name,m=Y({},d.params,u.params),w=p.stringify(m)}const C=[];let A=p;for(;A;)C.unshift(A.record),A=A.parent;return{name:x,path:w,params:m,matched:C,meta:Zf(C)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Qi(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Xf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Qf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Qf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Zi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Zf(t){return t.reduce((e,n)=>Y(e,n.meta),{})}function eo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Wa(t,e){return e.children.some(n=>n===t||Wa(t,n))}const Ka=/#/g,ed=/&/g,td=/\//g,nd=/=/g,rd=/\?/g,qa=/\+/g,sd=/%5B/g,id=/%5D/g,Ga=/%5E/g,od=/%60/g,Ja=/%7B/g,ad=/%7C/g,Ya=/%7D/g,cd=/%20/g;function Gs(t){return encodeURI(""+t).replace(ad,"|").replace(sd,"[").replace(id,"]")}function ld(t){return Gs(t).replace(Ja,"{").replace(Ya,"}").replace(Ga,"^")}function Es(t){return Gs(t).replace(qa,"%2B").replace(cd,"+").replace(Ka,"%23").replace(ed,"%26").replace(od,"`").replace(Ja,"{").replace(Ya,"}").replace(Ga,"^")}function ud(t){return Es(t).replace(nd,"%3D")}function fd(t){return Gs(t).replace(Ka,"%23").replace(rd,"%3F")}function dd(t){return t==null?"":fd(t).replace(td,"%2F")}function hr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function hd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(qa," "),o=i.indexOf("="),a=hr(o<0?i:i.slice(0,o)),c=o<0?null:hr(i.slice(o+1));if(a in e){let l=e[a];$e(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function to(t){let e="";for(let n in t){const r=t[n];if(n=ud(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}($e(r)?r.map(i=>i&&Es(i)):[r&&Es(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function pd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=$e(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const gd=Symbol(""),no=Symbol(""),Dr=Symbol(""),Xa=Symbol(""),ws=Symbol("");function pn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ht(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(nn(4,{from:n,to:e})):d instanceof Error?a(d):Bf(d)?a(nn(2,{from:e,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(d=>a(d))})}function Gr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(md(a)){const l=(a.__vccOpts||a)[e];l&&s.push(ht(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Ef(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&ht(p,n,r,i,o)()}))}}return s}function md(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ro(t){const e=We(Dr),n=We(Xa),r=Ce(()=>e.resolve(ge(t.to))),s=Ce(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(tn.bind(null,u));if(p>-1)return p;const m=so(c[l-2]);return l>1&&so(u)===m&&d[d.length-1].path!==m?d.findIndex(tn.bind(null,c[l-2])):p}),i=Ce(()=>s.value>-1&&bd(n.params,r.value.params)),o=Ce(()=>s.value>-1&&s.value===n.matched.length-1&&ja(n.params,r.value.params));function a(c={}){return yd(c)?e[ge(t.replace)?"replace":"push"](ge(t.to)).catch(wn):Promise.resolve()}return{route:r,href:Ce(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const _d=da({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ro,setup(t,{slots:e}){const n=ln(ro(t)),{options:r}=We(Dr),s=Ce(()=>({[io(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[io(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Na("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),vd=_d;function yd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function bd(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!$e(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function so(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const io=(t,e,n)=>t!=null?t:e!=null?e:n,Id=da({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=We(ws),s=Ce(()=>t.route||r.value),i=We(no,0),o=Ce(()=>{let l=ge(i);const{matched:u}=s.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=Ce(()=>s.value.matched[o.value]);Zn(no,Ce(()=>o.value+1)),Zn(gd,a),Zn(ws,s);const c=Q();return bn(()=>[c.value,a.value,t.name],([l,u,d],[p,m,w])=>{u&&(u.instances[d]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!tn(u,m)||!p)&&(u.enterCallbacks[d]||[]).forEach(x=>x(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,d=a.value,p=d&&d.components[u];if(!p)return oo(n.default,{Component:p,route:l});const m=d.props[u],w=m?m===!0?l.params:typeof m=="function"?m(l):m:null,C=Na(p,Y({},w,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return oo(n.default,{Component:C,route:l})||C}}});function oo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Qa=Id;function Ed(t){const e=Yf(t.routes,t),n=t.parseQuery||hd,r=t.stringifyQuery||to,s=t.history,i=pn(),o=pn(),a=pn(),c=Al(lt);let l=lt;Wt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Kr.bind(null,_=>""+_),d=Kr.bind(null,dd),p=Kr.bind(null,hr);function m(_,P){let S,k;return Va(_)?(S=e.getRecordMatcher(_),k=P):k=_,e.addRoute(k,S)}function w(_){const P=e.getRecordMatcher(_);P&&e.removeRoute(P)}function x(){return e.getRoutes().map(_=>_.record)}function C(_){return!!e.getRecordMatcher(_)}function A(_,P){if(P=Y({},P||c.value),typeof _=="string"){const $=qr(n,_,P.path),f=e.resolve({path:$.path},P),h=s.createHref($.fullPath);return Y($,f,{params:p(f.params),hash:hr($.hash),redirectedFrom:void 0,href:h})}let S;if("path"in _)S=Y({},_,{path:qr(n,_.path,P.path).path});else{const $=Y({},_.params);for(const f in $)$[f]==null&&delete $[f];S=Y({},_,{params:d(_.params)}),P.params=d(P.params)}const k=e.resolve(S,P),J=_.hash||"";k.params=u(p(k.params));const ie=Sf(r,Y({},_,{hash:ld(J),path:k.path})),j=s.createHref(ie);return Y({fullPath:ie,hash:J,query:r===to?pd(_.query):_.query||{}},k,{redirectedFrom:void 0,href:j})}function L(_){return typeof _=="string"?qr(n,_,c.value.path):Y({},_)}function H(_,P){if(l!==_)return nn(8,{from:P,to:_})}function K(_){return V(_)}function X(_){return K(Y(L(_),{replace:!0}))}function ce(_){const P=_.matched[_.matched.length-1];if(P&&P.redirect){const{redirect:S}=P;let k=typeof S=="function"?S(_):S;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=L(k):{path:k},k.params={}),Y({query:_.query,hash:_.hash,params:"path"in k?{}:_.params},k)}}function V(_,P){const S=l=A(_),k=c.value,J=_.state,ie=_.force,j=_.replace===!0,$=ce(S);if($)return V(Y(L($),{state:typeof $=="object"?Y({},J,$.state):J,force:ie,replace:j}),P||S);const f=S;f.redirectedFrom=P;let h;return!ie&&Rf(r,k,S)&&(h=nn(16,{to:f,from:k}),$t(k,k,!0,!1)),(h?Promise.resolve(h):le(f,k)).catch(g=>Xe(g)?Xe(g,2)?g:Se(g):se(g,f,k)).then(g=>{if(g){if(Xe(g,2))return V(Y({replace:j},L(g.to),{state:typeof g.to=="object"?Y({},J,g.to.state):J,force:ie}),P||f)}else g=be(f,k,!0,j,J);return ve(f,k,g),g})}function q(_,P){const S=H(_,P);return S?Promise.reject(S):Promise.resolve()}function le(_,P){let S;const[k,J,ie]=wd(_,P);S=Gr(k.reverse(),"beforeRouteLeave",_,P);for(const $ of k)$.leaveGuards.forEach(f=>{S.push(ht(f,_,P))});const j=q.bind(null,_,P);return S.push(j),Ht(S).then(()=>{S=[];for(const $ of i.list())S.push(ht($,_,P));return S.push(j),Ht(S)}).then(()=>{S=Gr(J,"beforeRouteUpdate",_,P);for(const $ of J)$.updateGuards.forEach(f=>{S.push(ht(f,_,P))});return S.push(j),Ht(S)}).then(()=>{S=[];for(const $ of _.matched)if($.beforeEnter&&!P.matched.includes($))if($e($.beforeEnter))for(const f of $.beforeEnter)S.push(ht(f,_,P));else S.push(ht($.beforeEnter,_,P));return S.push(j),Ht(S)}).then(()=>(_.matched.forEach($=>$.enterCallbacks={}),S=Gr(ie,"beforeRouteEnter",_,P),S.push(j),Ht(S))).then(()=>{S=[];for(const $ of o.list())S.push(ht($,_,P));return S.push(j),Ht(S)}).catch($=>Xe($,8)?$:Promise.reject($))}function ve(_,P,S){for(const k of a.list())k(_,P,S)}function be(_,P,S,k,J){const ie=H(_,P);if(ie)return ie;const j=P===lt,$=Wt?history.state:{};S&&(k||j?s.replace(_.fullPath,Y({scroll:j&&$&&$.scroll},J)):s.push(_.fullPath,J)),c.value=_,$t(_,P,S,j),Se()}let Te;function at(){Te||(Te=s.listen((_,P,S)=>{if(!fn.listening)return;const k=A(_),J=ce(k);if(J){V(Y(J,{replace:!0}),k).catch(wn);return}l=k;const ie=c.value;Wt&&Df(qi(ie.fullPath,S.delta),Mr()),le(k,ie).catch(j=>Xe(j,12)?j:Xe(j,2)?(V(j.to,k).then($=>{Xe($,20)&&!S.delta&&S.type===Mn.pop&&s.go(-1,!1)}).catch(wn),Promise.reject()):(S.delta&&s.go(-S.delta,!1),se(j,k,ie))).then(j=>{j=j||be(k,ie,!1),j&&(S.delta&&!Xe(j,8)?s.go(-S.delta,!1):S.type===Mn.pop&&Xe(j,20)&&s.go(-1,!1)),ve(k,ie,j)}).catch(wn)}))}let Pe=pn(),de=pn(),he;function se(_,P,S){Se(_);const k=de.list();return k.length?k.forEach(J=>J(_,P,S)):console.error(_),Promise.reject(_)}function ee(){return he&&c.value!==lt?Promise.resolve():new Promise((_,P)=>{Pe.add([_,P])})}function Se(_){return he||(he=!_,at(),Pe.list().forEach(([P,S])=>_?S(_):P()),Pe.reset()),_}function $t(_,P,S,k){const{scrollBehavior:J}=t;if(!Wt||!J)return Promise.resolve();const ie=!S&&xf(qi(_.fullPath,0))||(k||!S)&&history.state&&history.state.scroll||null;return Vs().then(()=>J(_,P,ie)).then(j=>j&&Mf(j)).catch(j=>se(j,_,P))}const Ye=_=>s.go(_);let Be;const ke=new Set,fn={currentRoute:c,listening:!0,addRoute:m,removeRoute:w,hasRoute:C,getRoutes:x,resolve:A,options:t,push:K,replace:X,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:de.add,isReady:ee,install(_){const P=this;_.component("RouterLink",vd),_.component("RouterView",Qa),_.config.globalProperties.$router=P,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>ge(c)}),Wt&&!Be&&c.value===lt&&(Be=!0,K(s.location).catch(J=>{}));const S={};for(const J in lt)S[J]=Ce(()=>c.value[J]);_.provide(Dr,P),_.provide(Xa,ln(S)),_.provide(ws,c);const k=_.unmount;ke.add(_),_.unmount=function(){ke.delete(_),ke.size<1&&(l=lt,Te&&Te(),Te=null,c.value=lt,Be=!1,he=!1),k()}}};return fn}function Ht(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function wd(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>tn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>tn(l,c))||s.push(c))}return[n,r,s]}function Za(){return We(Dr)}/**
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
 *//**
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
 */const ec=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Td=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},tc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[d],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ec(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Td(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),d!==64){const w=l<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Sd=function(t){const e=ec(t);return tc.encodeByteArray(e,!0)},nc=function(t){return Sd(t).replace(/\./g,"")},Rd=function(t){try{return tc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Ad{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function Od(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Pd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kd(){const t=ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Nd(){return typeof indexedDB=="object"}function Md(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Dd="FirebaseError";class wt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Dd,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$n.prototype.create)}}class $n{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?xd(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new wt(s,a,r)}}function xd(t,e){return t.replace(Ld,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ld=/\{\$([^}]+)}/g;function Ud(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ao(i)&&ao(o)){if(!pr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ao(t){return t!==null&&typeof t=="object"}/**
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
 */function Bn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fd(t,e){const n=new $d(t,e);return n.subscribe.bind(n)}class $d{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Bd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Jr),s.error===void 0&&(s.error=Jr),s.complete===void 0&&(s.complete=Jr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jr(){}/**
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
 */function un(t){return t&&t._delegate?t._delegate:t}class rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const At="[DEFAULT]";/**
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
 */class jd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ad;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vd(e))try{this.getOrInitializeService({instanceIdentifier:At})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=At){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=At){return this.instances.has(e)}getOptions(e=At){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=At){return this.component?this.component.multipleInstances?e:At:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hd(t){return t===At?void 0:t}function Vd(t){return t.instantiationMode==="EAGER"}/**
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
 */class zd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const Wd={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Kd=oe.INFO,qd={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},Gd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=qd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rc{constructor(e){this.name=e,this._logLevel=Kd,this._logHandler=Gd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const Jd=(t,e)=>e.some(n=>t instanceof n);let co,lo;function Yd(){return co||(co=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xd(){return lo||(lo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sc=new WeakMap,Ts=new WeakMap,ic=new WeakMap,Yr=new WeakMap,Js=new WeakMap;function Qd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(It(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sc.set(n,t)}).catch(()=>{}),Js.set(e,t),e}function Zd(t){if(Ts.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ts.set(t,e)}let Ss={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ts.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ic.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eh(t){Ss=t(Ss)}function th(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xr(this),e,...n);return ic.set(r,e.sort?e.sort():[e]),It(r)}:Xd().includes(t)?function(...e){return t.apply(Xr(this),e),It(sc.get(this))}:function(...e){return It(t.apply(Xr(this),e))}}function nh(t){return typeof t=="function"?th(t):(t instanceof IDBTransaction&&Zd(t),Jd(t,Yd())?new Proxy(t,Ss):t)}function It(t){if(t instanceof IDBRequest)return Qd(t);if(Yr.has(t))return Yr.get(t);const e=nh(t);return e!==t&&(Yr.set(t,e),Js.set(e,t)),e}const Xr=t=>Js.get(t);function rh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=It(o);return r&&o.addEventListener("upgradeneeded",c=>{r(It(o.result),c.oldVersion,c.newVersion,It(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const sh=["get","getKey","getAll","getAllKeys","count"],ih=["put","add","delete","clear"],Qr=new Map;function uo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qr.get(e))return Qr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ih.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Qr.set(e,i),i}eh(t=>({...t,get:(e,n,r)=>uo(e,n)||t.get(e,n,r),has:(e,n)=>!!uo(e,n)||t.has(e,n)}));/**
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
 */class oh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ah(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ah(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rs="@firebase/app",fo="0.7.33";/**
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
 */const Lt=new rc("@firebase/app"),ch="@firebase/app-compat",lh="@firebase/analytics-compat",uh="@firebase/analytics",fh="@firebase/app-check-compat",dh="@firebase/app-check",hh="@firebase/auth",ph="@firebase/auth-compat",gh="@firebase/database",mh="@firebase/database-compat",_h="@firebase/functions",vh="@firebase/functions-compat",yh="@firebase/installations",bh="@firebase/installations-compat",Ih="@firebase/messaging",Eh="@firebase/messaging-compat",wh="@firebase/performance",Th="@firebase/performance-compat",Sh="@firebase/remote-config",Rh="@firebase/remote-config-compat",Ah="@firebase/storage",Ch="@firebase/storage-compat",Oh="@firebase/firestore",Ph="@firebase/firestore-compat",kh="firebase",Nh="9.10.0";/**
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
 */const oc="[DEFAULT]",Mh={[Rs]:"fire-core",[ch]:"fire-core-compat",[uh]:"fire-analytics",[lh]:"fire-analytics-compat",[dh]:"fire-app-check",[fh]:"fire-app-check-compat",[hh]:"fire-auth",[ph]:"fire-auth-compat",[gh]:"fire-rtdb",[mh]:"fire-rtdb-compat",[_h]:"fire-fn",[vh]:"fire-fn-compat",[yh]:"fire-iid",[bh]:"fire-iid-compat",[Ih]:"fire-fcm",[Eh]:"fire-fcm-compat",[wh]:"fire-perf",[Th]:"fire-perf-compat",[Sh]:"fire-rc",[Rh]:"fire-rc-compat",[Ah]:"fire-gcs",[Ch]:"fire-gcs-compat",[Oh]:"fire-fst",[Ph]:"fire-fst-compat","fire-js":"fire-js",[kh]:"fire-js-all"};/**
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
 */const gr=new Map,As=new Map;function Dh(t,e){try{t.container.addComponent(e)}catch(n){Lt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dn(t){const e=t.name;if(As.has(e))return Lt.debug(`There were multiple attempts to register component ${e}.`),!1;As.set(e,t);for(const n of gr.values())Dh(n,t);return!0}function ac(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const xh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ut=new $n("app","Firebase",xh);/**
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
 */class Lh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
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
 */const xr=Nh;function Uh(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:oc,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Ut.create("bad-app-name",{appName:String(r)});const s=gr.get(r);if(s){if(pr(t,s.options)&&pr(n,s.config))return s;throw Ut.create("duplicate-app",{appName:r})}const i=new zd(r);for(const a of As.values())i.addComponent(a);const o=new Lh(t,n,i);return gr.set(r,o),o}function Fh(t=oc){const e=gr.get(t);if(!e)throw Ut.create("no-app",{appName:t});return e}function Gt(t,e,n){var r;let s=(r=Mh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lt.warn(a.join(" "));return}Dn(new rn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const $h="firebase-heartbeat-database",Bh=1,xn="firebase-heartbeat-store";let Zr=null;function cc(){return Zr||(Zr=rh($h,Bh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xn)}}}).catch(t=>{throw Ut.create("idb-open",{originalErrorMessage:t.message})})),Zr}async function jh(t){var e;try{return(await cc()).transaction(xn).objectStore(xn).get(lc(t))}catch(n){if(n instanceof wt)Lt.warn(n.message);else{const r=Ut.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Lt.warn(r.message)}}}async function ho(t,e){var n;try{const s=(await cc()).transaction(xn,"readwrite");return await s.objectStore(xn).put(e,lc(t)),s.done}catch(r){if(r instanceof wt)Lt.warn(r.message);else{const s=Ut.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Lt.warn(s.message)}}}function lc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Hh=1024,Vh=30*24*60*60*1e3;class zh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=po();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Vh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=po(),{heartbeatsToSend:n,unsentEntries:r}=Wh(this._heartbeatsCache.heartbeats),s=nc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function po(){return new Date().toISOString().substring(0,10)}function Wh(t,e=Hh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),go(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),go(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Kh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nd()?Md().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await jh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ho(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ho(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function go(t){return nc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function qh(t){Dn(new rn("platform-logger",e=>new oh(e),"PRIVATE")),Dn(new rn("heartbeat",e=>new zh(e),"PRIVATE")),Gt(Rs,fo,t),Gt(Rs,fo,"esm2017"),Gt("fire-js","")}qh("");var Gh="firebase",Jh="9.10.0";/**
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
 */Gt(Gh,Jh,"app");function Ys(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function uc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yh=uc,fc=new $n("auth","Firebase",uc());/**
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
 */const mo=new rc("@firebase/auth");function nr(t,...e){mo.logLevel<=oe.ERROR&&mo.error(`Auth (${xr}): ${t}`,...e)}/**
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
 */function Je(t,...e){throw Xs(t,...e)}function Ke(t,...e){return Xs(t,...e)}function dc(t,e,n){const r=Object.assign(Object.assign({},Yh()),{[e]:n});return new $n("auth","Firebase",r).create(e,{appName:t.name})}function Xh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Je(t,"argument-error"),dc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return fc.create(t,...e)}function F(t,e,...n){if(!t)throw Xs(e,...n)}function tt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nr(e),new Error(e)}function it(t,e){t||tt(e)}/**
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
 */const _o=new Map;function nt(t){it(t instanceof Function,"Expected a class definition");let e=_o.get(t);return e?(it(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_o.set(t,e),e)}/**
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
 */function Qh(t,e){const n=ac(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(pr(i,e!=null?e:{}))return s;Je(s,"already-initialized")}return n.initialize({options:e})}function Zh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Cs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ep(){return vo()==="http:"||vo()==="https:"}function vo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function tp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ep()||Od()||"connection"in navigator)?navigator.onLine:!0}function np(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class jn{constructor(e,n){this.shortDelay=e,this.longDelay=n,it(n>e,"Short delay should be less than long delay!"),this.isMobile=Cd()||Pd()}get(){return tp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qs(t,e){it(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class hc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const sp=new jn(3e4,6e4);function ip(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Lr(t,e,n,r,s={}){return pc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Bn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),hc.fetch()(gc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function pc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rp),e);try{const s=new ap(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Jn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Jn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Jn(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw dc(t,u,l);Je(t,u)}}catch(s){if(s instanceof wt)throw s;Je(t,"network-request-failed")}}async function op(t,e,n,r,s={}){const i=await Lr(t,e,n,r,s);return"mfaPendingCredential"in i&&Je(t,"multi-factor-auth-required",{_serverResponse:i}),i}function gc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Qs(t.config,s):`${t.config.apiScheme}://${s}`}class ap{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),sp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ke(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function cp(t,e){return Lr(t,"POST","/v1/accounts:delete",e)}async function lp(t,e){return Lr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Sn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function up(t,e=!1){const n=un(t),r=await n.getIdToken(e),s=Zs(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Sn(es(s.auth_time)),issuedAtTime:Sn(es(s.iat)),expirationTime:Sn(es(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function es(t){return Number(t)*1e3}function Zs(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return nr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Rd(r);return i?JSON.parse(i):(nr("Failed to decode base64 JWT payload"),null)}catch(i){return nr("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function fp(t){const e=Zs(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ln(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wt&&dp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class hp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class mc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sn(this.lastLoginAt),this.creationTime=Sn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ln(t,lp(n,{idToken:r}));F(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?mp(i.providerUserInfo):[],a=gp(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new mc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function pp(t){const e=un(t);await mr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function mp(t){return t.map(e=>{var{providerId:n}=e,r=Ys(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _p(t,e){const n=await pc(t,{},async()=>{const r=Bn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=gc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",hc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await _p(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Un;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Un,this.toJSON())}_performRefresh(){return tt("not implemented")}}/**
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
 */function ut(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ys(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new mc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ln(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return up(this,e)}reload(){return pp(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ln(this,cp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:K,isAnonymous:X,providerData:ce,stsTokenManager:V}=n;F(H&&V,e,"internal-error");const q=Un.fromJSON(this.name,V);F(typeof H=="string",e,"internal-error"),ut(d,e.name),ut(p,e.name),F(typeof K=="boolean",e,"internal-error"),F(typeof X=="boolean",e,"internal-error"),ut(m,e.name),ut(w,e.name),ut(x,e.name),ut(C,e.name),ut(A,e.name),ut(L,e.name);const le=new Dt({uid:H,auth:e,email:p,emailVerified:K,displayName:d,isAnonymous:X,photoURL:w,phoneNumber:m,tenantId:x,stsTokenManager:q,createdAt:A,lastLoginAt:L});return ce&&Array.isArray(ce)&&(le.providerData=ce.map(ve=>Object.assign({},ve))),C&&(le._redirectEventId=C),le}static async _fromIdTokenResponse(e,n,r=!1){const s=new Un;s.updateFromServerResponse(n);const i=new Dt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await mr(i),i}}/**
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
 */class _c{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_c.type="NONE";const yo=_c;/**
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
 */function rr(t,e,n){return`firebase:${t}:${e}:${n}`}class Jt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=rr(this.userKey,s.apiKey,i),this.fullPersistenceKey=rr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jt(nt(yo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||nt(yo);const o=rr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=Dt._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Jt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Jt(i,e,r))}}/**
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
 */function bo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ec(e))return"Blackberry";if(wc(e))return"Webos";if(ei(e))return"Safari";if((e.includes("chrome/")||yc(e))&&!e.includes("edge/"))return"Chrome";if(Ic(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vc(t=ye()){return/firefox\//i.test(t)}function ei(t=ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yc(t=ye()){return/crios\//i.test(t)}function bc(t=ye()){return/iemobile/i.test(t)}function Ic(t=ye()){return/android/i.test(t)}function Ec(t=ye()){return/blackberry/i.test(t)}function wc(t=ye()){return/webos/i.test(t)}function Ur(t=ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vp(t=ye()){var e;return Ur(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yp(){return kd()&&document.documentMode===10}function Tc(t=ye()){return Ur(t)||Ic(t)||wc(t)||Ec(t)||/windows phone/i.test(t)||bc(t)}function bp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Sc(t,e=[]){let n;switch(t){case"Browser":n=bo(ye());break;case"Worker":n=`${bo(ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xr}/${r}`}/**
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
 */class Ip{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
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
 */class Ep{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Io(this),this.idTokenSubscription=new Io(this),this.beforeStateQueue=new Ip(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Jt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await mr(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=np()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?un(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(nt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $n("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nt(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Jt.create(this,[nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ti(t){return un(t)}class Io{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fd(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Rc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tt("not implemented")}_getIdTokenResponse(e){return tt("not implemented")}_linkToIdToken(e,n){return tt("not implemented")}_getReauthenticationResolver(e){return tt("not implemented")}}/**
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
 */async function Yt(t,e){return op(t,"POST","/v1/accounts:signInWithIdp",ip(t,e))}/**
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
 */const wp="http://localhost";class Ft extends Rc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ft(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ys(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ft(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yt(e,n)}buildRequest(){const e={requestUri:wp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bn(n)}return e}}/**
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
 */class ni{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hn extends ni{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pt extends Hn{constructor(){super("facebook.com")}static credential(e){return Ft._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";pt.PROVIDER_ID="facebook.com";/**
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
 */class et extends Hn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ft._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return et.credential(n,r)}catch{return null}}}et.GOOGLE_SIGN_IN_METHOD="google.com";et.PROVIDER_ID="google.com";/**
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
 */class gt extends Hn{constructor(){super("github.com")}static credential(e){return Ft._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com";gt.PROVIDER_ID="github.com";/**
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
 */class mt extends Hn{constructor(){super("twitter.com")}static credential(e,n){return Ft._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mt.credential(n,r)}catch{return null}}}mt.TWITTER_SIGN_IN_METHOD="twitter.com";mt.PROVIDER_ID="twitter.com";/**
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
 */class sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Dt._fromIdTokenResponse(e,r,s),o=Eo(r);return new sn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Eo(r);return new sn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Eo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class _r extends wt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_r.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _r(e,n,r,s)}}function Ac(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_r._fromErrorAndOperation(t,i,e,r):i})}async function Tp(t,e,n=!1){const r=await Ln(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return sn._forOperation(t,"link",r)}/**
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
 */async function Sp(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await Ln(t,Ac(s,i,e,t),n);F(o.idToken,s,"internal-error");const a=Zs(o.idToken);F(a,s,"internal-error");const{sub:c}=a;return F(t.uid===c,s,"user-mismatch"),sn._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Je(s,"user-mismatch"),o}}/**
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
 */async function Rp(t,e,n=!1){const r="signIn",s=await Ac(t,r,e),i=await sn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Ap(t,e,n,r){return un(t).onAuthStateChanged(e,n,r)}function Cp(t){return un(t).signOut()}const vr="__sak";/**
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
 */class Cc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vr,"1"),this.storage.removeItem(vr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Op(){const t=ye();return ei(t)||Ur(t)}const Pp=1e3,kp=10;class Oc extends Cc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Op()&&bp(),this.fallbackToPolling=Tc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);yp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Pp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Oc.type="LOCAL";const Np=Oc;/**
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
 */class Pc extends Cc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Pc.type="SESSION";const kc=Pc;/**
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
 */function Mp(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Fr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Fr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Mp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fr.receivers=[];/**
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
 */function ri(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Dp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ri("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qe(){return window}function xp(t){qe().location.href=t}/**
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
 */function Nc(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function Lp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Up(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Fp(){return Nc()?self:null}/**
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
 */const Mc="firebaseLocalStorageDb",$p=1,yr="firebaseLocalStorage",Dc="fbase_key";class Vn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $r(t,e){return t.transaction([yr],e?"readwrite":"readonly").objectStore(yr)}function Bp(){const t=indexedDB.deleteDatabase(Mc);return new Vn(t).toPromise()}function Os(){const t=indexedDB.open(Mc,$p);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yr,{keyPath:Dc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yr)?e(r):(r.close(),await Bp(),e(await Os()))})})}async function wo(t,e,n){const r=$r(t,!0).put({[Dc]:e,value:n});return new Vn(r).toPromise()}async function jp(t,e){const n=$r(t,!1).get(e),r=await new Vn(n).toPromise();return r===void 0?null:r.value}function To(t,e){const n=$r(t,!0).delete(e);return new Vn(n).toPromise()}const Hp=800,Vp=3;class xc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Os(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Vp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fr._getInstance(Fp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Lp(),!this.activeServiceWorker)return;this.sender=new Dp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Up()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Os();return await wo(e,vr,"1"),await To(e,vr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>To(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$r(s,!1).getAll();return new Vn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xc.type="LOCAL";const zp=xc;/**
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
 */function Wp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Kp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ke("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Wp().appendChild(r)})}function qp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new jn(3e4,6e4);/**
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
 */function Lc(t,e){return e?nt(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class si extends Rc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Gp(t){return Rp(t.auth,new si(t),t.bypassAuthState)}function Jp(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Sp(n,new si(t),t.bypassAuthState)}async function Yp(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Tp(n,new si(t),t.bypassAuthState)}/**
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
 */class Uc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gp;case"linkViaPopup":case"linkViaRedirect":return Yp;case"reauthViaPopup":case"reauthViaRedirect":return Jp;default:Je(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Xp=new jn(2e3,1e4);async function Qp(t,e,n){const r=ti(t);Xh(t,e,ni);const s=Lc(r,n);return new kt(r,"signInViaPopup",e,s).executeNotNull()}class kt extends Uc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,kt.currentPopupAction&&kt.currentPopupAction.cancel(),kt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){it(this.filter.length===1,"Popup operations only handle one event");const e=ri();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Xp.get())};e()}}kt.currentPopupAction=null;/**
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
 */const Zp="pendingRedirect",sr=new Map;class eg extends Uc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sr.get(this.auth._key());if(!e){try{const r=await tg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sr.set(this.auth._key(),e)}return this.bypassAuthState||sr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tg(t,e){const n=sg(e),r=rg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ng(t,e){sr.set(t._key(),e)}function rg(t){return nt(t._redirectPersistence)}function sg(t){return rr(Zp,t.config.apiKey,t.name)}async function ig(t,e,n=!1){const r=ti(t),s=Lc(r,e),o=await new eg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const og=10*60*1e3;class ag{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Fc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ke(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=og&&this.cachedEventUids.clear(),this.cachedEventUids.has(So(e))}saveEventToCache(e){this.cachedEventUids.add(So(e)),this.lastProcessedEventTime=Date.now()}}function So(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fc(t);default:return!1}}/**
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
 */async function lg(t,e={}){return Lr(t,"GET","/v1/projects",e)}/**
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
 */const ug=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fg=/^https?/;async function dg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lg(t);for(const n of e)try{if(hg(n))return}catch{}Je(t,"unauthorized-domain")}function hg(t){const e=Cs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fg.test(n))return!1;if(ug.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const pg=new jn(3e4,6e4);function Ro(){const t=qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gg(t){return new Promise((e,n)=>{var r,s,i;function o(){Ro(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ro(),n(Ke(t,"network-request-failed"))},timeout:pg.get()})}if(!((s=(r=qe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=qe().gapi)===null||i===void 0)&&i.load)o();else{const a=qp("iframefcb");return qe()[a]=()=>{gapi.load?o():n(Ke(t,"network-request-failed"))},Kp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ir=null,e})}let ir=null;function mg(t){return ir=ir||gg(t),ir}/**
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
 */const _g=new jn(5e3,15e3),vg="__/auth/iframe",yg="emulator/auth/iframe",bg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ig=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Eg(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qs(e,yg):`https://${t.config.authDomain}/${vg}`,r={apiKey:e.apiKey,appName:t.name,v:xr},s=Ig.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Bn(r).slice(1)}`}async function wg(t){const e=await mg(t),n=qe().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:Eg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ke(t,"network-request-failed"),a=qe().setTimeout(()=>{i(o)},_g.get());function c(){qe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Tg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sg=500,Rg=600,Ag="_blank",Cg="http://localhost";class Ao{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Og(t,e,n,r=Sg,s=Rg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Tg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ye().toLowerCase();n&&(a=yc(l)?Ag:n),vc(l)&&(e=e||Cg,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,w])=>`${p}${m}=${w},`,"");if(vp(l)&&a!=="_self")return Pg(e||"",a),new Ao(null);const d=window.open(e||"",a,u);F(d,t,"popup-blocked");try{d.focus()}catch{}return new Ao(d)}function Pg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const kg="__/auth/handler",Ng="emulator/auth/handler";function Co(t,e,n,r,s,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xr,eventId:s};if(e instanceof ni){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ud(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Hn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Mg(t)}?${Bn(a).slice(1)}`}function Mg({config:t}){return t.emulator?Qs(t,Ng):`https://${t.authDomain}/${kg}`}/**
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
 */const ts="webStorageSupport";class Dg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kc,this._completeRedirectFn=ig,this._overrideRedirectResult=ng}async _openPopup(e,n,r,s){var i;it((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Co(e,n,r,Cs(),s);return Og(e,o,ri())}async _openRedirect(e,n,r,s){return await this._originValidation(e),xp(Co(e,n,r,Cs(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(it(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wg(e),r=new ag(e);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ts,{type:ts},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ts];o!==void 0&&n(!!o),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tc()||ei()||Ur()}}const xg=Dg;var Oo="@firebase/auth",Po="0.20.7";/**
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
 */class Lg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ug(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Fg(t){Dn(new rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{F(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),F(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sc(t)},u=new Ep(a,c,l);return Zh(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dn(new rn("auth-internal",e=>{const n=ti(e.getProvider("auth").getImmediate());return(r=>new Lg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(Oo,Po,Ug(t)),Gt(Oo,Po,"esm2017")}/**
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
 */function $g(t=Fh()){const e=ac(t,"auth");return e.isInitialized()?e.getImmediate():Qh(t,{popupRedirectResolver:xg,persistence:[zp,Np,kc]})}Fg("Browser");const Bg={apiKey:"AIzaSyCqoZydYelqel01aC0sD12hp6JOOGTFmK0",authDomain:"vuequiz-1c49b.firebaseapp.com",projectId:"vuequiz-1c49b",storageBucket:"vuequiz-1c49b.appspot.com",messagingSenderId:"298182348689",appId:"1:298182348689:web:dc93eb7f8e7bd3f5d51430"},jg=Uh(Bg),or=$g(jg),Hg=async()=>{const t=new et;await Qp(or,t)},Vg=$a("userStore",()=>{const t=Q(""),e=Q(""),n=Q(""),r=Q(""),s=Q(0),i=Q(0);return{strUserName:t,strUserMail:e,strUserUID:n,strUserPhoto:r,strUserPlaytime:s,strUserWins:i}});const zg={class:"sidebar"},Wg=Z("div",null,[Z("p",null,"Home")],-1),Kg={key:0},qg={__name:"Sidebar",setup(t){const e=Q("Login"),n=Za(),r=Vg();Ap(or,o=>{o?(e.value="Logout",r.strUserName=o.displayName,r.strUserMail=o.email,r.strUserUID=o.uid,r.strUserPhoto=o.photoURL):e.value="Login"});function s(){e.value=="Login"?Hg():Cp(or)}function i(){n.push({name:"profile"})}return(o,a)=>(rt(),bt("div",zg,[Wg,ge(or).currentUser?(rt(),bt("div",Kg,[Z("p",{onClick:a[0]||(a[0]=c=>i())},"Profil")])):Ca("",!0),Z("button",{class:"button",onClick:a[1]||(a[1]=c=>s())},_n(e.value),1)]))}},Gg={__name:"App",setup(t){return(e,n)=>(rt(),bt(Ne,null,[_e(qg),_e(ge(Qa))],64))}},Jg="modulepreload",Yg=function(t){return"/"+t},ko={},Yn=function(e,n,r){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=Yg(s),s in ko)return;ko[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":Jg,i||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),i)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},$c=$a("quizStore",()=>{const t=Q(""),e=Q(!1),n=Q([]),r=Q({}),s=Q([]),i=Q({}),o=Q(0),a=Q(0),c=Q(2),l=Q(0),u=Q([0,0]),d=Q("00:00"),p=Q(!1);function m(){if(r.value.length>0){if(r.value.length>10&&!p.value){let w=Math.floor(Math.random()*r.value.length);for(;w==o.value;)w=Math.floor(Math.random()*r.value.length);o.value=w}else o.value<r.value.length-1?o.value++:o.value=0;i.value=r.value[o.value]}}return{strMode:t,boolNewGame:e,arrSelection:n,objQuestions:r,arrAnswers:s,objNext:i,intRandom:o,intConfigOV:a,intConfigAnswer:c,intConfigDelay:l,arrScore:u,strTime:d,boolLearn:p,nextQuestion:m}},{persist:!0});const Xg={class:"options"},Qg=Z("h3",null,"Optionen",-1),Zg=Z("br",null,null,-1),em=Z("br",null,null,-1),tm=Z("br",null,null,-1),nm={__name:"ConfigView",setup(t){const e=$c(),n=Q(!0),r=Q(["Keine \xDCbersicht","\xDCbersicht anzeigen"]),s=Q(["Selbst Schreiben","Schreiben (Autocomplete)","Antworten vorgeben"]),i=Q(["Antwort nicht zeigen","Antwort kurz zeigen"]);function o(){n.value=!n.value}return(a,c)=>(rt(),bt("div",Xg,[Z("div",{class:Xt({hideConfig:!n.value}),onClick:o}," Optionen ",2),Z("div",{class:Xt(["optionTab",{hideConfig:n.value}])},[Qg,Z("label",null,[Z("p",null,_n(r.value[ge(e).intConfigOV]),1),Hr(Z("input",{type:"range",min:"0",max:"1","onUpdate:modelValue":c[0]||(c[0]=l=>ge(e).intConfigOV=l)},null,512),[[Wr,ge(e).intConfigOV]])]),Zg,Z("label",null,[Z("p",null,_n(s.value[ge(e).intConfigAnswer]),1),Hr(Z("input",{type:"range",min:"0",max:"2","onUpdate:modelValue":c[1]||(c[1]=l=>ge(e).intConfigAnswer=l)},null,512),[[Wr,ge(e).intConfigAnswer]])]),em,Z("label",null,[Z("p",null,_n(i.value[ge(e).intConfigDelay]),1),Hr(Z("input",{type:"range",min:"0",max:"1","onUpdate:modelValue":c[2]||(c[2]=l=>ge(e).intConfigDelay=l)},null,512),[[Wr,ge(e).intConfigDelay]])]),tm,Z("button",{class:"button",onClick:o},"Speichern")],2)]))}};const rm={__name:"InstallPWA",setup(t){const e=Q(!0);let n;window.addEventListener("beforeinstallprompt",s=>{s.preventDefault(),n=s,e.value=!1});const r=async()=>{n.prompt();const{outcome:s}=await n.userChoice;n=null,s==="accepted"?console.log("User accepted the install prompt."):s==="dismissed"&&console.log("User dismissed the install prompt")};return(s,i)=>(rt(),bt("div",{class:Xt(["pwa",{hidePWA:e.value}])},[Z("button",{onClick:r},"Als App installieren")],2))}},sm={class:"view"},im=Z("h1",null,"W\xE4hle deinen Modus",-1),om={class:"button-grid modes"},am=["onClick"],cm={__name:"MainView",setup(t){const e={flags:"Flaggen",capitals:"Hauptst\xE4dte",outlines:"Umrisse",expert:"Expert",pokemon:"Pokemon"},n=Za(),r=$c();let s=r.objQuestions.length>0;function i(a){r.strMode=a,n.push({name:"mode"})}function o(){console.log("test"),n.push({name:"quiz"})}return(a,c)=>(rt(),bt(Ne,null,[Z("div",sm,[Z("div",null,[im,Z("div",om,[(rt(),bt(Ne,null,cu(e,(l,u)=>Z("a",{onClick:d=>i(u)},_n(l),9,am)),64))]),ge(s)?(rt(),bt("button",{key:0,class:"button",onClick:o},"Resume")):Ca("",!0)])]),_e(nm),_e(rm)],64))}},lm=Ed({history:$f("/"),routes:[{path:"/",name:"home",component:cm},{path:"/mode",name:"mode",component:()=>Yn(()=>import("./ModeView.4d720f74.js"),["assets/ModeView.4d720f74.js","assets/ModeView.6759dbd9.css","assets/pokemon.ab54c451.js"])},{path:"/quiz",name:"quiz",component:()=>Yn(()=>import("./QuizView.0ea1a670.js"),["assets/QuizView.0ea1a670.js","assets/QuizView.4ccdaf3b.css","assets/pokemon.ab54c451.js"])},{path:"/learn",name:"learn",component:()=>Yn(()=>import("./LearnView.fbf119b7.js"),["assets/LearnView.fbf119b7.js","assets/LearnView.8c5b7e3f.css","assets/pokemon.ab54c451.js"])},{path:"/profile",name:"profile",component:()=>Yn(()=>import("./ProfileView.6bd1fb29.js"),[])}]});const ii=ff(Gg),Bc=pf();Bc.use(If);ii.use(Bc);ii.use(lm);ii.mount("#app");export{Ne as F,nm as _,Z as a,ge as b,bt as c,Za as d,Au as e,Ca as f,_e as g,Q as h,bn as i,Dl as j,Wr as k,ln as l,nu as m,Xt as n,rt as o,lm as p,um as q,cu as r,Vg as s,_n as t,$c as u,fm as v,Hr as w};

import{H as d,s as w}from"./index.7c5e5199.js";const u=[];function p(e,t=d){let n;const o=new Set;function a(s){if(w(e,s)&&(e=s,n)){const i=!u.length;for(const l of o)l[1](),u.push(l,e);if(i){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function c(s){a(s(e))}function r(s,i=d){const l=[s,i];return o.add(l),o.size===1&&(n=t(a)||d),s(e),()=>{o.delete(l),o.size===0&&(n(),n=null)}}return{set:a,update:c,subscribe:r}}var h;const E=((h=globalThis.__sveltekit_cg02pe)==null?void 0:h.base)??"";var k;const A=((k=globalThis.__sveltekit_cg02pe)==null?void 0:k.assets)??E,R="1737406333037",I="sveltekit:snapshot",x="sveltekit:scroll",O="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},v=location.origin;function U(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function L(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const b={..._,"":_.hover};function m(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function N(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=m(e)}}function P(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!o||T(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),c=(n==null?void 0:n.origin)===v&&e.hasAttribute("download");return{url:n,external:a,target:o,download:c}}function V(e){let t=null,n=null,o=null,a=null,c=null,r=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),a===null&&(a=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),c===null&&(c=f(s,"reload")),r===null&&(r=f(s,"replacestate")),s=m(s);function i(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:b[o??"off"],preload_data:b[a??"off"],keep_focus:i(t),noscroll:i(n),reload:i(c),replace_state:i(r)}}function g(e){const t=p(e);let n=!0;function o(){n=!0,t.update(r=>r)}function a(r){n=!1,t.set(r)}function c(r){let s;return t.subscribe(i=>{(s===void 0||n&&i!==s)&&r(s=i)})}return{notify:o,set:a,subscribe:c}}function S(){const{set:e,subscribe:t}=p(!1);let n;async function o(){clearTimeout(n);try{const a=await fetch(`${A}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const r=(await a.json()).version!==R;return r&&(e(!0),clearTimeout(n)),r}catch{return!1}}return{subscribe:t,check:o}}function T(e,t){return e.origin!==v||!e.pathname.startsWith(t)}function Y(e){e.client}const q={url:g({}),page:g({}),navigating:p(null),updated:S()};export{O as I,_ as P,x as S,I as a,P as b,V as c,q as d,E as e,N as f,U as g,Y as h,T as i,v as o,L as s,p as w};

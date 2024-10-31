import{e as K}from"../chunks/singletons.608aac2b.js";import{S as D,i as N,s as j,k as d,l as g,m as A,h,n as c,b as w,H as L,J as oe,e as q,q as z,a as T,r as V,c as H,p as Q,G as _,u as O,K as F,L as W,M as X,N as ue,O as fe,g as I,d as P,f as me,I as he,o as _e,w as de,P as ge,y as G,z as R,A as U,Q as pe,B,v as ve}from"../chunks/index.7c5e5199.js";import{p as be}from"../chunks/stores.ca4775c1.js";import{c as Y,t as S,u as C,l as ce,d as ke,a as J,i as Z}from"../chunks/setup.425e5de2.js";const Ee=async({fetch:s})=>({posts:await(await s(`${K}/api/posts`)).json()}),ze=Object.freeze(Object.defineProperty({__proto__:null,load:Ee},Symbol.toStringTag,{value:"Module"}));function $(s,e,t){const l=s.slice();return l[2]=e[t],l}function x(s){let e,t,l,n=s[2].meta.title+"",a,i,u,r,p,m=s[2].meta.cover&&ee(s),o=s[2].meta.description&&te(s);return{c(){e=d("a"),t=d("div"),l=d("h2"),a=z(n),i=T(),m&&m.c(),u=T(),o&&o.c(),r=T(),this.h()},l(f){e=g(f,"A",{href:!0,target:!0,class:!0});var v=A(e);t=g(v,"DIV",{class:!0,style:!0});var E=A(t);l=g(E,"H2",{class:!0});var M=A(l);a=V(M,n),M.forEach(h),i=H(E),m&&m.l(E),u=H(E),o&&o.l(E),E.forEach(h),r=H(v),v.forEach(h),this.h()},h(){c(l,"class","svelte-1cevii1"),c(t,"class","column svelte-1cevii1"),Q(t,"--meta-color",s[2].meta.color),c(e,"href",p=""+(K+s[2].path)),c(e,"target","_self"),c(e,"class","svelte-1cevii1")},m(f,v){w(f,e,v),_(e,t),_(t,l),_(l,a),_(t,i),m&&m.m(t,null),_(t,u),o&&o.m(t,null),_(e,r)},p(f,v){v&1&&n!==(n=f[2].meta.title+"")&&O(a,n),f[2].meta.cover?m?m.p(f,v):(m=ee(f),m.c(),m.m(t,u)):m&&(m.d(1),m=null),f[2].meta.description?o?o.p(f,v):(o=te(f),o.c(),o.m(t,null)):o&&(o.d(1),o=null),v&1&&Q(t,"--meta-color",f[2].meta.color),v&1&&p!==(p=""+(K+f[2].path))&&c(e,"href",p)},d(f){f&&h(e),m&&m.d(),o&&o.d()}}}function ee(s){let e,t,l;return{c(){e=d("img"),this.h()},l(n){e=g(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){F(e.src,t=s[2].meta.cover)||c(e,"src",t),c(e,"alt",l=s[2].meta.title),c(e,"class","svelte-1cevii1")},m(n,a){w(n,e,a)},p(n,a){a&1&&!F(e.src,t=n[2].meta.cover)&&c(e,"src",t),a&1&&l!==(l=n[2].meta.title)&&c(e,"alt",l)},d(n){n&&h(e)}}}function te(s){let e,t=s[2].meta.description+"";return{c(){e=d("div"),this.h()},l(l){e=g(l,"DIV",{class:!0});var n=A(e);n.forEach(h),this.h()},h(){c(e,"class","text svelte-1cevii1")},m(l,n){w(l,e,n),e.innerHTML=t},p(l,n){n&1&&t!==(t=l[2].meta.description+"")&&(e.innerHTML=t)},d(l){l&&h(e)}}}function le(s){let e,t=s[2].meta.isPublic&&s[2].meta.lang==s[1]&&x(s);return{c(){t&&t.c(),e=q()},l(l){t&&t.l(l),e=q()},m(l,n){t&&t.m(l,n),w(l,e,n)},p(l,n){l[2].meta.isPublic&&l[2].meta.lang==l[1]?t?t.p(l,n):(t=x(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){t&&t.d(l),l&&h(e)}}}function ye(s){let e,t=s[0].posts,l=[];for(let n=0;n<t.length;n+=1)l[n]=le($(s,t,n));return{c(){e=d("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=g(n,"DIV",{class:!0});var a=A(e);for(let i=0;i<l.length;i+=1)l[i].l(a);a.forEach(h),this.h()},h(){c(e,"class","columns svelte-1cevii1")},m(n,a){w(n,e,a);for(let i=0;i<l.length;i+=1)l[i].m(e,null)},p(n,[a]){if(a&3){t=n[0].posts;let i;for(i=0;i<t.length;i+=1){const u=$(n,t,i);l[i]?l[i].p(u,a):(l[i]=le(u),l[i].c(),l[i].m(e,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=t.length}},i:L,o:L,d(n){n&&h(e),oe(l,n)}}}function Me(s,e,t){let{data:l}=e,{lang:n}=e;return s.$$set=a=>{"data"in a&&t(0,l=a.data),"lang"in a&&t(1,n=a.lang)},[l,n]}class we extends D{constructor(e){super(),N(this,e,Me,ye,j,{data:0,lang:1})}}function ne(s){let e,t=s[2][s[1]]+"",l;return{c(){e=d("h3"),l=z(t),this.h()},l(n){e=g(n,"H3",{class:!0});var a=A(e);l=V(a,t),a.forEach(h),this.h()},h(){c(e,"class","svelte-u142tv")},m(n,a){w(n,e,a),_(e,l)},p(n,a){a&6&&t!==(t=n[2][n[1]]+"")&&O(l,t)},d(n){n&&h(e)}}}function Ae(s){let e,t,l,n,a=s[2][s[1]]&&ne(s);return{c(){e=d("header"),t=d("h1"),l=z(s[0]),n=T(),a&&a.c(),this.h()},l(i){e=g(i,"HEADER",{class:!0});var u=A(e);t=g(u,"H1",{class:!0});var r=A(t);l=V(r,s[0]),r.forEach(h),n=H(u),a&&a.l(u),u.forEach(h),this.h()},h(){c(t,"class","svelte-u142tv"),c(e,"class","svelte-u142tv")},m(i,u){w(i,e,u),_(e,t),_(t,l),_(e,n),a&&a.m(e,null)},p(i,[u]){u&1&&O(l,i[0]),i[2][i[1]]?a?a.p(i,u):(a=ne(i),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:L,o:L,d(i){i&&h(e),a&&a.d()}}}function Te(s,e,t){let{title:l}=e,{lang:n}=e,{description:a}=e;return s.$$set=i=>{"title"in i&&t(0,l=i.title),"lang"in i&&t(1,n=i.lang),"description"in i&&t(2,a=i.description)},[l,n,a]}class He extends D{constructor(e){super(),N(this,e,Te,Ae,j,{title:0,lang:1,description:2})}}function ae(s,e,t){const l=s.slice();return l[5]=e[t],l}function se(s){let e,t=s[1],l=[];for(let n=0;n<t.length;n+=1)l[n]=ie(ae(s,t,n));return{c(){e=d("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=g(n,"DIV",{class:!0});var a=A(e);for(let i=0;i<l.length;i+=1)l[i].l(a);a.forEach(h),this.h()},h(){c(e,"class","svelte-ukq9fn")},m(n,a){w(n,e,a);for(let i=0;i<l.length;i+=1)l[i].m(e,null)},p(n,a){if(a&7){t=n[1];let i;for(i=0;i<t.length;i+=1){const u=ae(n,t,i);l[i]?l[i].p(u,a):(l[i]=ie(u),l[i].c(),l[i].m(e,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=t.length}},d(n){n&&h(e),oe(l,n)}}}function ie(s){let e,t=s[5].toUpperCase()+"",l,n,a,i;function u(){return s[3](s[5])}function r(){return s[4](s[5])}return{c(){e=d("span"),l=z(t),this.h()},l(p){e=g(p,"SPAN",{disabled:!0,class:!0});var m=A(e);l=V(m,t),m.forEach(h),this.h()},h(){c(e,"disabled",n=s[0]===s[5]),c(e,"class","svelte-ukq9fn"),W(e,"selected",s[0]===s[5])},m(p,m){w(p,e,m),_(e,l),a||(i=[X(e,"click",u),X(e,"keydown",r)],a=!0)},p(p,m){s=p,m&2&&t!==(t=s[5].toUpperCase()+"")&&O(l,t),m&3&&n!==(n=s[0]===s[5])&&c(e,"disabled",n),m&3&&W(e,"selected",s[0]===s[5])},d(p){p&&h(e),a=!1,ue(i)}}}function Ie(s){let e,t=s[1].length>1&&se(s);return{c(){t&&t.c(),e=q()},l(l){t&&t.l(l),e=q()},m(l,n){t&&t.m(l,n),w(l,e,n)},p(l,[n]){l[1].length>1?t?t.p(l,n):(t=se(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:L,o:L,d(l){t&&t.d(l),l&&h(e)}}}function Le(s,e,t){let{lang:l}=e,{languages:n}=e;function a(r){t(0,l=r),localStorage.setItem("selectedLanguage",r)}const i=r=>a(r),u=r=>a(r);return s.$$set=r=>{"lang"in r&&t(0,l=r.lang),"languages"in r&&t(1,n=r.languages)},[l,n,a,i,u]}class Se extends D{constructor(e){super(),N(this,e,Le,Ie,j,{lang:0,languages:1})}}function re(s){let e,t,l,n,a,i,u,r;function p(o){s[3](o)}let m={languages:ce};return s[1]!==void 0&&(m.lang=s[1]),t=new Se({props:m}),de.push(()=>ge(t,"lang",p)),a=new He({props:{essays:s[0].posts.filter(s[4]).length,lang:s[1],description:ke,title:S}}),u=new we({props:{data:s[0],lang:s[1]}}),{c(){e=d("article"),G(t.$$.fragment),n=T(),G(a.$$.fragment),i=T(),G(u.$$.fragment),this.h()},l(o){e=g(o,"ARTICLE",{style:!0,class:!0});var f=A(e);R(t.$$.fragment,f),n=H(f),R(a.$$.fragment,f),i=H(f),R(u.$$.fragment,f),f.forEach(h),this.h()},h(){Q(e,"--theme-color","blue"),c(e,"class","svelte-c31fpz")},m(o,f){w(o,e,f),U(t,e,null),_(e,n),U(a,e,null),_(e,i),U(u,e,null),r=!0},p(o,f){const v={};!l&&f&2&&(l=!0,v.lang=o[1],pe(()=>l=!1)),t.$set(v);const E={};f&3&&(E.essays=o[0].posts.filter(o[4]).length),f&2&&(E.lang=o[1]),a.$set(E);const M={};f&1&&(M.data=o[0]),f&2&&(M.lang=o[1]),u.$set(M)},i(o){r||(I(t.$$.fragment,o),I(a.$$.fragment,o),I(u.$$.fragment,o),r=!0)},o(o){P(t.$$.fragment,o),P(a.$$.fragment,o),P(u.$$.fragment,o),r=!1},d(o){o&&h(e),B(t),B(a),B(u)}}}function Pe(s){let e,t,l,n,a,i,u,r,p,m,o,f,v,E,M,b=Y&&s[1]&&s[0]!=null&&re(s);return document.title=t=S,{c(){b&&b.c(),e=T(),l=d("meta"),n=d("meta"),i=d("meta"),u=d("meta"),r=d("meta"),p=d("meta"),m=d("meta"),f=d("meta"),v=d("meta"),E=d("meta"),this.h()},l(y){b&&b.l(y),e=H(y);const k=fe("svelte-15zjhui",document.head);l=g(k,"META",{name:!0,content:!0}),n=g(k,"META",{property:!0,content:!0}),i=g(k,"META",{property:!0,content:!0}),u=g(k,"META",{property:!0,content:!0}),r=g(k,"META",{property:!0,content:!0}),p=g(k,"META",{name:!0,content:!0}),m=g(k,"META",{property:!0,content:!0}),f=g(k,"META",{name:!0,content:!0}),v=g(k,"META",{name:!0,content:!0}),E=g(k,"META",{name:!0,content:!0}),k.forEach(h),this.h()},h(){c(l,"name","description"),c(l,"content",J),c(n,"property","og:url"),c(n,"content",a=C),c(i,"property","og:title"),c(i,"content",S),c(u,"property","og:description"),c(u,"content",J),c(r,"property","og:image"),c(r,"content",Z),c(p,"name","twitter:card"),c(p,"content","summary_large_image"),c(m,"property","twitter:url"),c(m,"content",o=C),c(f,"name","twitter:title"),c(f,"content",S),c(v,"name","twitter:description"),c(v,"content",J),c(E,"name","twitter:image"),c(E,"content",Z)},m(y,k){b&&b.m(y,k),w(y,e,k),_(document.head,l),_(document.head,n),_(document.head,i),_(document.head,u),_(document.head,r),_(document.head,p),_(document.head,m),_(document.head,f),_(document.head,v),_(document.head,E),M=!0},p(y,[k]){Y&&y[1]&&y[0]!=null?b?(b.p(y,k),k&3&&I(b,1)):(b=re(y),b.c(),I(b,1),b.m(e.parentNode,e)):b&&(ve(),P(b,1,1,()=>{b=null}),me()),(!M||k&0)&&t!==(t=S)&&(document.title=t),(!M||k&4&&a!==(a=C))&&c(n,"content",a),(!M||k&4&&o!==(o=C))&&c(m,"content",o)},i(y){M||(I(b),M=!0)},o(y){P(b),M=!1},d(y){b&&b.d(y),y&&h(e),h(l),h(n),h(i),h(u),h(r),h(p),h(m),h(f),h(v),h(E)}}}function Ce(s,e,t){let l;he(s,be,r=>t(2,l=r));let{data:n}=e,a="";_e(async()=>{const r=localStorage.getItem("selectedLanguage");r?t(1,a=r):t(1,a=ce[0])});function i(r){a=r,t(1,a)}const u=r=>r.meta.isPublic&r.meta.lang==a;return s.$$set=r=>{"data"in r&&t(0,n=r.data)},[n,a,l,i,u]}class Ve extends D{constructor(e){super(),N(this,e,Ce,Pe,j,{data:0})}}export{Ve as component,ze as universal};

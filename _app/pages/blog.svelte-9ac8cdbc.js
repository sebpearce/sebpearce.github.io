import{S as e,i as a,s,E as t,e as n,t as c,j as o,J as r,c as d,a as l,b as m,d as i,l as h,o as u,g as f,f as p,h as k,F as E,w as v,x}from"../chunks/vendor-6704d4da.js";/* empty css                      */function $(e){let a,s,$,g,w,S,L,b,j;const I=e[2].default,y=t(I,e,e[1],null);return{c(){a=n("script"),s=c('if (\n      localStorage.theme === "dark" ||\n      (!("theme" in localStorage) &&\n        window.matchMedia("(prefers-color-scheme: dark)").matches)\n    ) {\n      document.documentElement.classList.add("dark")\n    } else {\n      document.documentElement.classList.remove("dark")\n    }'),$=o(),g=n("div"),w=n("article"),S=n("h4"),L=c(e[0]),b=o(),y&&y.c(),this.h()},l(t){const n=r('[data-svelte="svelte-1rpz0h3"]',document.head);a=d(n,"SCRIPT",{});var c=l(a);s=m(c,'if (\n      localStorage.theme === "dark" ||\n      (!("theme" in localStorage) &&\n        window.matchMedia("(prefers-color-scheme: dark)").matches)\n    ) {\n      document.documentElement.classList.add("dark")\n    } else {\n      document.documentElement.classList.remove("dark")\n    }'),c.forEach(i),n.forEach(i),$=h(t),g=d(t,"DIV",{class:!0});var o=l(g);w=d(o,"ARTICLE",{class:!0});var u=l(w);S=d(u,"H4",{});var f=l(S);L=m(f,e[0]),f.forEach(i),b=h(u),y&&y.l(u),u.forEach(i),o.forEach(i),this.h()},h(){u(w,"class","min-w-0 mx-1/10 mx-5 sm:mx-10 md:mx-20 py-20 prose prose-xl dark:prose-light"),u(g,"class","bg-white dark:bg-hex-111 flex justify-center")},m(e,t){f(document.head,a),f(a,s),p(e,$,t),p(e,g,t),f(g,w),f(w,S),f(S,L),f(w,b),y&&y.m(w,null),j=!0},p(e,[a]){(!j||1&a)&&k(L,e[0]),y&&y.p&&2&a&&E(y,I,e,e[1],a,null,null)},i(e){j||(v(y,e),j=!0)},o(e){x(y,e),j=!1},d(e){i(a),e&&i($),e&&i(g),y&&y.d(e)}}}function g(e,a,s){let{$$slots:t={},$$scope:n}=a,{date:c}=a;return e.$$set=e=>{"date"in e&&s(0,c=e.date),"$$scope"in e&&s(1,n=e.$$scope)},[c,n,t]}export default class extends e{constructor(e){super(),a(this,e,g,$,s,{date:0})}}
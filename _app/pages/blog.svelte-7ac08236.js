import{S as e,i as t,s,E as a,e as n,t as c,j as l,I as o,c as r,a as d,b as m,d as i,l as h,o as u,g as f,f as p,h as k,F as E,w as v,x}from"../chunks/vendor-3cb84129.js";/* empty css                      */function $(e){let t,s,$,g,w,S,b,L,j,I;document.title=t=e[1];const y=e[3].default,C=a(y,e,e[2],null);return{c(){s=n("script"),$=c('if (\n      localStorage.theme === "dark" ||\n      (!("theme" in localStorage) &&\n        window.matchMedia("(prefers-color-scheme: dark)").matches)\n    ) {\n      document.documentElement.classList.add("dark")\n    } else {\n      document.documentElement.classList.remove("dark")\n    }'),g=l(),w=n("div"),S=n("article"),b=n("h4"),L=c(e[0]),j=l(),C&&C.c(),this.h()},l(t){const a=o('[data-svelte="svelte-15bc0d8"]',document.head);s=r(a,"SCRIPT",{});var n=d(s);$=m(n,'if (\n      localStorage.theme === "dark" ||\n      (!("theme" in localStorage) &&\n        window.matchMedia("(prefers-color-scheme: dark)").matches)\n    ) {\n      document.documentElement.classList.add("dark")\n    } else {\n      document.documentElement.classList.remove("dark")\n    }'),n.forEach(i),a.forEach(i),g=h(t),w=r(t,"DIV",{class:!0});var c=d(w);S=r(c,"ARTICLE",{class:!0});var l=d(S);b=r(l,"H4",{});var u=d(b);L=m(u,e[0]),u.forEach(i),j=h(l),C&&C.l(l),l.forEach(i),c.forEach(i),this.h()},h(){u(S,"class","min-w-0 mx-1/10 mx-5 sm:mx-10 md:mx-20 py-20 prose prose-xl dark:prose-light"),u(w,"class","bg-white dark:bg-hex-111 flex justify-center")},m(e,t){f(document.head,s),f(s,$),p(e,g,t),p(e,w,t),f(w,S),f(S,b),f(b,L),f(S,j),C&&C.m(S,null),I=!0},p(e,[s]){(!I||2&s)&&t!==(t=e[1])&&(document.title=t),(!I||1&s)&&k(L,e[0]),C&&C.p&&4&s&&E(C,y,e,e[2],s,null,null)},i(e){I||(v(C,e),I=!0)},o(e){x(C,e),I=!1},d(e){i(s),e&&i(g),e&&i(w),C&&C.d(e)}}}function g(e,t,s){let{$$slots:a={},$$scope:n}=t,{date:c}=t,{title:l}=t;return e.$$set=e=>{"date"in e&&s(0,c=e.date),"title"in e&&s(1,l=e.title),"$$scope"in e&&s(2,n=e.$$scope)},[c,l,n,a]}export default class extends e{constructor(e){super(),t(this,e,g,$,s,{date:0,title:1})}}
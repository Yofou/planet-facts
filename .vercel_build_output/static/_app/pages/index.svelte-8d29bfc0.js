import{S as t,i as e,s,k as a,e as r,t as n,T as c,d as l,n as o,c as d,a as i,g as m,b as h,f as u,D as f,r as p,u as v,K as x,U as g,v as y,V as w,Q as E,W as k,B as j,E as A}from"../chunks/vendor-aec2e272.js";import{P as I}from"../chunks/data-c8278da0.js";function $(t){let e,s,a,n,c;return{c(){e=r("img"),this.h()},l(t){e=d(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){h(e,"class","\n        col-start-1\n        col-end-[-1]\n        row-start-3\n        row-end-4\n        justify-self-center\n        md:mt-[4rem]\n        transform \n        scale-[0.6]\n        md:scale-75 \n        z-0\n        "),e.src!==(s=t[1][t[0]])&&h(e,"src",s),h(e,"alt","")},m(t,s){u(t,e,s),c=!0},p(t,a){(!c||1&a&&e.src!==(s=t[1][t[0]]))&&h(e,"src",s)},i(t){c||(x((()=>{n&&n.end(1),a||(a=E(e,k,{x:-500,y:-100,delay:500,duration:1500})),a.start()})),c=!0)},o(t){a&&a.invalidate(),t&&(n=g(e,k,{x:750,y:-100,duration:1500})),c=!1},d(t){t&&l(e),t&&n&&n.end()}}}function z(t){let e,x,g,w,E,k,I,z,H=t[0],M=$(t);return{c(){e=a(),x=r("main"),g=r("h1"),w=n("the planets"),E=a(),k=r("p"),I=n("Adventure the depths of our solar system with every click"),z=a(),M.c(),this.h()},l(t){c('[data-svelte="svelte-1ngtc14"]',document.head).forEach(l),e=o(t),x=d(t,"MAIN",{class:!0});var s=i(x);g=d(s,"H1",{class:!0});var a=i(g);w=m(a,"the planets"),a.forEach(l),E=o(s),k=d(s,"P",{class:!0});var r=i(k);I=m(r,"Adventure the depths of our solar system with every click"),r.forEach(l),z=o(s),M.l(s),s.forEach(l),this.h()},h(){document.title="THE PLANETS | HOME",h(g,"class","font-ant text-[6rem] md:text-[9rem] lg:text-[10rem] tracking-[-1.05px] uppercase justify-self-center self-end z-10"),h(k,"class","font-spart text-[0.9rem] md:text-[1.5rem] text-center opacity-60 tracking-wider z-10"),h(x,"class","grid grid-cols-1 grid-rows-[200px,min-content,1fr] md:grid-rows-[300px,min-content,2fr] w-full h-full text-white overflow-hidden")},m(t,s){u(t,e,s),u(t,x,s),f(x,g),f(g,w),f(x,E),f(x,k),f(k,I),f(x,z),M.m(x,null)},p(t,[e]){1&e&&s(H,H=t[0])?(j(),p(M,1,1,A),v(),M=$(t),M.c(),y(M),M.m(x,null)):M.p(t,e)},i(t){y(M)},o(t){p(M)},d(t){t&&l(e),t&&l(x),M.d(t)}}}function H(t,e,s){let a;const r=I.map((({name:t})=>t)),n=I.reduce(((t,e)=>(t[e.name]=e.images.planet,t)),{});let c=0;const l=setInterval((()=>{s(2,c+=1)}),5e3);return w((()=>clearInterval(l))),t.$$.update=()=>{4&t.$$.dirty&&s(0,a=r[c%r.length])},[a,n,c]}export default class extends t{constructor(t){super(),e(this,t,H,z,s,{})}}
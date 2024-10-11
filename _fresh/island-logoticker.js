import{a as f,b as u,c as _}from"./chunk-ENXECTKD.js";import{a as v,f as y}from"./chunk-H6LPW6N3.js";var C=0,A=Array.isArray;function c(i,n,d,m,a,p){n||(n={});var e,r,o=n;if("ref"in o)for(r in o={},n)r=="ref"?e=n[r]:o[r]=n[r];var l={type:i,props:o,key:d,ref:e,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--C,__i:-1,__u:0,__source:a,__self:p};if(typeof i=="function"&&(e=i.defaultProps))for(r in e)o[r]===void 0&&(o[r]=e[r]);return v.vnode&&v.vnode(l),l}function j(i){let n=i?.speed||50,d=i?.direction||"left",m=y(i.children),[a,p]=f(0),e=_(null),[r,o]=f(!0),[l,g]=f("");u(()=>{let t=()=>{e.current&&p(e.current.scrollWidth)},s=new ResizeObserver(t);return e.current&&s.observe(e.current),()=>s.disconnect()},[]),u(()=>{if(a>0){let t=`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${a/2}px); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-${a/2}px); }
          100% { transform: translateX(0); }
        }
      `;g(t)}},[a]),u(()=>{let t={root:null,rootMargin:"0px",threshold:0},s=x=>{x.forEach(k=>{o(k.isIntersecting)})},h=new IntersectionObserver(s,t);return e.current&&h.observe(e.current),()=>h.disconnect()},[]);let b=a/2/n;return c("div",{className:"w-full overflow-hidden bg-background carousel-container",children:[c("div",{ref:e,className:"flex items-center",style:{animation:`scroll${d==="left"?"Left":"Right"} ${b}s linear infinite`,animationPlayState:r?"running":"paused",willChange:"transform"},children:[m.map((t,s)=>c("div",{className:"flex-shrink-0 mx-4",children:t},s)),m.map((t,s)=>c("div",{className:"flex-shrink-0 mx-4",children:t},`duplicate-${s}`))]}),c("style",{jsx:!0,children:l})]})}export{j as default};

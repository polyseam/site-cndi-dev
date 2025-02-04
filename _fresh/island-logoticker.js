import"./chunk-GI7LLYGM.js";import{a as i,b as o,c as f}from"./chunk-APUOKIQF.js";import{a as n}from"./chunk-VXQGIN4V.js";import{f as d}from"./chunk-VLNPATEH.js";import"./chunk-Z47A3HLT.js";function C(c){let m=c?.speed||50,u=c?.direction||"left",a=d(c.children),[s,h]=i(0),r=f(null),[v,p]=i(!0),[y,b]=i("");o(()=>{let e=()=>{r.current&&h(r.current.scrollWidth)},t=new ResizeObserver(e);return r.current&&t.observe(r.current),()=>t.disconnect()},[]),o(()=>{if(s>0){let e=`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${s/2}px); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-${s/2}px); }
          100% { transform: translateX(0); }
        }
      `;b(e)}},[s]),o(()=>{let e={root:null,rootMargin:"0px",threshold:0},t=k=>{k.forEach(x=>{p(x.isIntersecting)})},l=new IntersectionObserver(t,e);return r.current&&l.observe(r.current),()=>l.disconnect()},[]);let g=s/2/m;return n("div",{className:"w-full overflow-hidden bg-background carousel-container",children:[n("div",{ref:r,className:"flex items-center",style:{animation:`scroll${u==="left"?"Left":"Right"} ${g}s linear infinite`,animationPlayState:v?"running":"paused",willChange:"transform"},children:[a.map((e,t)=>n("div",{className:"flex-shrink-0 mx-4",children:e},t)),a.map((e,t)=>n("div",{className:"flex-shrink-0 mx-4",children:e},`duplicate-${t}`))]}),n("style",{jsx:!0,children:y})]})}export{C as default};

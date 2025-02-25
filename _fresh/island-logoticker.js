import"./chunk-GI7LLYGM.js";import{a as s,b as c,c as f}from"./chunk-APUOKIQF.js";import{a as e}from"./chunk-VXQGIN4V.js";import{f as d}from"./chunk-VLNPATEH.js";import"./chunk-ONOOT4BC.js";function m({children:i}){return e("section",{class:"m-0 p-0",children:i})}function S(i){let h=i?.speed||50,u=i?.direction||"left",l=d(i.children),[o,p]=s(0),r=f(null),[v,y]=s(!0),[C,b]=s("");c(()=>{let t=()=>{r.current&&p(r.current.scrollWidth)},n=new ResizeObserver(t);return r.current&&n.observe(r.current),()=>n.disconnect()},[]),c(()=>{if(o>0){let t=`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${o/2}px); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-${o/2}px); }
          100% { transform: translateX(0); }
        }
      `;b(t)}},[o]),c(()=>{let t={root:null,rootMargin:"0px",threshold:0},n=k=>{k.forEach(x=>{y(x.isIntersecting)})},a=new IntersectionObserver(n,t);return r.current&&a.observe(r.current),()=>a.disconnect()},[]);let g=o/2/h;return e(m,{children:e("div",{ref:r,className:"flex overflow-hidden bg-midpurp items-center h-[15vh] sm:h-[20vh]",children:[e("div",{className:"flex items-center",style:{animation:`scroll${u==="left"?"Left":"Right"} ${g}s linear infinite`,animationPlayState:v?"running":"paused",willChange:"transform"},children:[l.map((t,n)=>e("div",{className:"flex-shrink-0",children:t},n)),l.map((t,n)=>e("div",{className:"flex-shrink-0",children:t},`duplicate-${n}`))]}),e("style",{jsx:!0,children:C})]})})}export{S as default};

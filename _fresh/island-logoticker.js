import"./chunk-GI7LLYGM.js";import{a as s,b as c,c as d}from"./chunk-CUVNUMLA.js";import{a as e}from"./chunk-EICERXRJ.js";import{f as a}from"./chunk-GBB4VFSZ.js";import"./chunk-ONOOT4BC.js";function f({children:o}){return e("section",{class:"m-0 p-0",children:o})}function S(o){let m=o?.speed||50,u=o?.direction||"left",h=a(o.children),[i,p]=s(0),t=d(null),[v,y]=s(!0),[C,b]=s("");c(()=>{let n=()=>{t.current&&p(t.current.scrollWidth)},r=new ResizeObserver(n);return t.current&&r.observe(t.current),()=>r.disconnect()},[]),c(()=>{if(i>0){let n=`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${i/2}px); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-${i/2}px); }
          100% { transform: translateX(0); }
        }
      `;b(n)}},[i]),c(()=>{let n={root:null,rootMargin:"0px",threshold:0},r=x=>{x.forEach(k=>{y(k.isIntersecting)})},l=new IntersectionObserver(r,n);return t.current&&l.observe(t.current),()=>l.disconnect()},[]);let g=i/2/m;return e(f,{children:e("div",{ref:t,className:"flex bg-midpurp overflow-hidden h-[20vh]",children:[e("div",{className:"flex flex-col justify-center",style:{animation:`scroll${u==="left"?"Left":"Right"} ${g}s linear infinite`,animationPlayState:v?"running":"paused",willChange:"transform"},children:h.map((n,r)=>e("div",{className:"flex",children:n},r))}),e("style",{jsx:!0,children:C})]})})}export{S as default};

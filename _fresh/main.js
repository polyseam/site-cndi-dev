import{a as Y,c as B}from"./chunk-MCYFSI63.js";import{a as O,b as $,c as R,d as _,e as z,g as X}from"./chunk-YXFWN52L.js";typeof globalThis>"u"&&(window.globalThis=window);var G="fresh-partial",w="f-partial",M="f-loading",b="f-client-nav",q="data-fresh-key",C="data-current",x="data-ancestor";function K(t,e){let n=new URL(e,"http://localhost").pathname;return n!=="/"&&n.endsWith("/")&&(n=n.slice(0,-1)),t!=="/"&&t.endsWith("/")&&(t=t.slice(0,-1)),t===n?2:t.startsWith(n+"/")||n==="/"?1:0}function j(t,e){let n=t.props,r=n.href;if(typeof r=="string"&&r.startsWith("/")){let o=K(e,r);o===2?(n[C]="true",n["aria-current"]="page"):o===1&&(n[x]="true",n["aria-current"]="true")}}function se(t,e,n){let r=t.__k={_frshRootFrag:!0,nodeType:1,parentNode:t,nextSibling:null,get firstChild(){let o=e.nextSibling;return o===n?null:o},get childNodes(){let o=[],s=e.nextSibling;for(;s!==null&&s!==n;)o.push(s),s=s.nextSibling;return o},insertBefore(o,s){t.insertBefore(o,s??n)},appendChild(o){t.insertBefore(o,n)},removeChild(o){t.removeChild(o)},contains(o){if(o===null)return!1;let s=r.childNodes;for(let i=0;i<s.length;i++)if(s[i].contains(o))return!0;return!1}};return r}function k(t){return t.nodeType===Node.COMMENT_NODE}function le(t){return t.nodeType===Node.TEXT_NODE}function ee(t){return t.nodeType===Node.ELEMENT_NODE&&!("_frshRootFrag"in t)}function Ee(t,e){let n=[];V(t,e,[],[R(_,null)],document.body,n);for(let r=0;r<n.length;r++){let{vnode:o,rootFragment:s}=n[r],i=()=>{X(o,s)};"scheduler"in window?scheduler.postTask(i):setTimeout(i,0)}}function te(t){return t.children}te.displayName="PreactServerComponent";function H(t,e){let n=t.props;n.children==null?n.children=e:Array.isArray(n.children)?n.children.push(e):n.children=[n.children,e]}var v=class extends z{componentDidMount(){ne.set(this.props.name,this)}render(){return this.props.children}};var J=!1,ne=new Map;function W(t){let{startNode:e,endNode:n}=t,r=n.parentNode;if(!J&&e!==null&&e.nodeType===Node.COMMENT_NODE){let o=new Text("");t.startNode=o,r.insertBefore(o,e),e.remove()}if(!J&&n!==null&&n.nodeType===Node.COMMENT_NODE){let o=new Text("");t.endNode=o,r.insertBefore(o,n),n.remove()}}function Q(t,e,n,r,o,s){let[i,a]=o.slice(6).split(":"),l=`#frsh-slot-${i}-${a}-children`,d=document.querySelector(l);if(d!==null){n.push({kind:1,endNode:null,startNode:null,text:o.slice(1)});let c=d.content.cloneNode(!0);V(t,e,n,r,c,s),n.pop()}}function V(t,e,n,r,o,s){let i=o;for(;i!==null;){let a=n.length>0?n[n.length-1]:null;if(k(i)){let l=i.data;if(l.startsWith("!--")&&(l=l.slice(3,-2)),l.startsWith("frsh-slot"))n.push({startNode:i,text:l,endNode:null,kind:1}),r.push(R(te,{id:l}));else if(l.startsWith("frsh-partial")){let[d,c,p,N]=l.split(":");n.push({startNode:i,text:c,endNode:null,kind:2}),r.push(R(v,{name:c,key:N,mode:+p}))}else if(l.startsWith("frsh-key:")){let d=l.slice(9);r.push(R(_,{key:d}))}else if(l.startsWith("/frsh-key:")){let d=r.pop(),c=r[r.length-1];H(c,d),i=i.nextSibling;continue}else if(a!==null&&(l.startsWith("/frsh")||a.text===l)){if(a.endNode=i,n.pop(),a.kind===1){let d=r.pop(),c=r[r.length-1];c.props.children=d,W(a),i=a.endNode.nextSibling;continue}else if(a!==null&&(a.kind===0||a.kind===2))if(n.length===0){let d=r[r.length-1];d.props.children==null&&Q(t,e,n,r,l,s),r.pop();let c=i.parentNode;W(a);let p=se(c,a.startNode,a.endNode);s.push({vnode:d,marker:a,rootFragment:p}),i=a.endNode.nextSibling;continue}else{let d=r[r.length-1];d&&d.props.children==null?(Q(t,e,n,r,l,s),d.props.children==null&&r.pop()):r.pop(),a.endNode=i,W(a);let c=r[r.length-1];H(c,d),i=a.endNode.nextSibling;continue}}else if(l.startsWith("frsh")){let[d,c,p]=l.slice(5).split(":"),N=e[Number(c)];n.push({startNode:i,endNode:null,text:l,kind:0});let g=R(t[d],N);p&&(g.key=p),r.push(g)}}else if(le(i)){let l=r[r.length-1];a!==null&&(a.kind===1||a.kind===2)&&H(l,i.data)}else{let l=r[r.length-1];if(ee(i))if(a!==null&&(a.kind===1||a.kind===2)){let c={children:i.childNodes.length<=1?null:[]},p=!1;for(let g=0;g<i.attributes.length;g++){let f=i.attributes[g];if(f.nodeName===q){p=!0,c.key=f.nodeValue;continue}else if(f.nodeName===M){let h=f.nodeValue,u=e[Number(h)][M].value;i._freshIndicator=u}c[f.nodeName]=typeof i[f.nodeName]=="boolean"?!0:f.nodeValue}p&&i.removeAttribute(q);let N=R(i.localName,c);H(l,N),r.push(N)}else{let d=i.getAttribute(M);if(d!==null){let c=e[Number(d)][M].value;i._freshIndicator=c}}i.firstChild&&i.nodeName!=="SCRIPT"&&V(t,e,n,r,i.firstChild,s),a!==null&&a.kind!==0&&r.pop()}i!==null&&(i=i.nextSibling)}}var ae="Unable to process partial response.";async function D(t,e={}){e.redirect="follow",t.searchParams.set(G,"true");let n=await fetch(t,e);await de(n)}function re(t){document.querySelectorAll("a").forEach(e=>{let n=K(t.pathname,e.href);n===2?(e.setAttribute(C,"true"),e.setAttribute("aria-current","page"),e.removeAttribute(x)):n===1?(e.setAttribute(x,"true"),e.setAttribute("aria-current","true"),e.removeAttribute(C)):(e.removeAttribute(C),e.removeAttribute(x),e.removeAttribute("aria-current"))})}function oe(t,e,n,r){let o=null,s=r.firstChild,i=0;for(;s!==null;){if(k(s)){let a=s.data;if(a.startsWith("frsh-partial"))o=s,i++;else if(a.startsWith("/frsh-partial")){i--;let l={_frshRootFrag:!0,nodeType:1,nextSibling:null,firstChild:o,parentNode:r,get childNodes(){let d=[o],c=o;for(;(c=c.nextSibling)!==null;)d.push(c);return d}};V(e,n[0]??[],[],[R(_,null)],l,t)}}else i===0&&ee(s)&&oe(t,e,n,s);s=s.nextSibling}}var S=class extends Error{};async function de(t){let e=t.headers.get("Content-Type"),n=t.headers.get("X-Fresh-UUID");if(e!=="text/html; charset=utf-8")throw new Error(ae);let r=await t.text(),o=new DOMParser().parseFromString(r,"text/html"),s=[],i={},a=o.getElementById(`__FRSH_PARTIAL_DATA_${n}`),l=null;a!==null&&(l=JSON.parse(a.textContent),s.push(...Array.from(Object.entries(l.islands)).map(async f=>{let h=await import(`${f[1].url}`);i[f[0]]=h[f[1].export]})));let d=o.getElementById(`__FRSH_STATE_${n}`)?.textContent,c=[[],[]],p;l!==null&&l.signals!==null&&s.push(import(l.signals).then(f=>{p=f.signal}));let N;d&&l&&l.deserializer!==null&&s.push(import(l.deserializer).then(f=>N=f.deserialize)),await Promise.all(s),d&&(c=N?N(d,p):JSON.parse(d)?.v);let g=[];if(oe(g,i,c,o.body),g.length===0)throw new S(`Found no partials in HTML response. Please make sure to render at least one partial. Requested url: ${t.url}`);o.title&&(document.title=o.title),Array.from(o.head.childNodes).forEach(f=>{let h=f;if(h.nodeName!=="TITLE"){if(h.nodeName==="META"){let u=h;if(u.hasAttribute("charset"))return;let y=u.name;if(y!==""){let T=document.head.querySelector(`meta[name="${y}"]`);T!==null?T.content!==u.content&&(T.content=u.content):document.head.appendChild(u)}else{let T=h.getAttribute("property"),m=document.head.querySelector(`meta[property="${T}"]`);m!==null?m.content!==u.content&&(m.content=u.content):document.head.appendChild(u)}}else if(h.nodeName==="LINK"){let u=h;if(u.rel==="modulepreload")return;u.rel==="stylesheet"&&Array.from(document.head.querySelectorAll("link")).find(T=>T.href===u.href)===void 0&&document.head.appendChild(u)}else if(h.nodeName==="SCRIPT"){if(h.src===`${Y}/refresh.js`)return}else if(h.nodeName==="STYLE"){let u=h;u.id===""&&document.head.appendChild(u)}}});for(let f=0;f<g.length;f++){let{vnode:h,marker:u}=g[f],y=ne.get(u.text);if(!y)console.warn(`Partial "${u.text}" not found. Skipping...`);else{let T=h.props.mode,m=h.props.children;if(T===0)y.props.children=m;else{let F=y.props.children,E=Array.isArray(F)?F:[F];if(T===1)E.push(m);else{$(m)||(m=R(_,null,m)),m.key==null&&(m.key=E.length);let U=y.__v.__k;if(Array.isArray(U))for(let A=0;A<U.length;A++){let L=U[A];if(L.key==null)L.key=A;else break}for(let A=0;A<E.length;A++){let L=E[A];if(L.key==null)L.key=A;else break}E.unshift(m)}y.props.children=E}y.setState({})}}}var Z=O.vnode;O.vnode=t=>{if(B(t),typeof t.type=="string"&&(t.type==="a"&&j(t,location.pathname),b in t.props)){let e=t.props[b];typeof e=="boolean"&&(t.props[b]=String(e))}Z&&Z(t)};function P(t){if(t===null)return document.querySelector(`[${b}="true"]`)!==null;let e=t.closest(`[${b}]`);return e===null?!1:e.getAttribute(b)==="true"}var I=history.state?.index||0;if(!history.state){let t={index:I,scrollX,scrollY};history.replaceState(t,document.title)}function ie(t){if(t.href!==globalThis.location.href){let e={index:I,scrollX:globalThis.scrollX,scrollY:globalThis.scrollY};history.replaceState({...e},"",location.href),I++,e.scrollX=0,e.scrollY=0,history.pushState(e,"",t.href)}}document.addEventListener("click",async t=>{let e=t.target;if(e&&(e instanceof HTMLElement||e instanceof SVGElement)){let n=e;if(e.nodeName!=="A"&&(e=e.closest("a")),e===null&&(e=n.closest("button")),e&&e instanceof HTMLAnchorElement&&e.href&&(!e.target||e.target==="_self")&&e.origin===location.origin&&t.button===0&&!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button)&&!t.defaultPrevented){let r=e.getAttribute(w);if(e.getAttribute("href")?.startsWith("#")||!P(e))return;let o=e._freshIndicator;o!==void 0&&(o.value=!0),t.preventDefault();let s=new URL(e.href);try{ie(s);let i=new URL(r||s.href,location.href);await D(i),re(s),scrollTo({left:0,top:0,behavior:"instant"})}finally{o!==void 0&&(o.value=!1)}}else if(e&&e instanceof HTMLButtonElement&&(e.type!=="submit"||e.form===null)){let r=e.getAttribute(w);if(r===null||!P(e))return;let o=new URL(r,location.href);await D(o)}}});addEventListener("popstate",async t=>{if(t.state===null){history.scrollRestoration&&(history.scrollRestoration="auto");return}let e=history.state;if(I=e.index??I+1,!P(null)){location.reload();return}history.scrollRestoration&&(history.scrollRestoration="manual");let r=new URL(location.href,location.origin);try{await D(r),re(r),scrollTo({left:e.scrollX??0,top:e.scrollY??0,behavior:"instant"})}catch(o){if(o instanceof S){location.reload();return}throw o}});document.addEventListener("submit",async t=>{let e=t.target;if(e!==null&&e instanceof HTMLFormElement&&!t.defaultPrevented){if(!P(e)||t.submitter!==null&&!P(t.submitter))return;let n=t.submitter?.getAttribute("formmethod")?.toLowerCase()??e.method.toLowerCase();if(n!=="get"&&n!=="post"&&n!=="dialog")return;let r=t.submitter?.getAttribute(w)??t.submitter?.getAttribute("formaction")??e.getAttribute(w)??e.action;if(r!==""){t.preventDefault();let o=new URL(r,location.href),s;n==="get"?new URLSearchParams(new FormData(e)).forEach((a,l)=>o.searchParams.set(l,a)):s={body:new FormData(e),method:n},ie(o),await D(o,s)}}});export{de as applyPartials,Ee as revive};

import"./chunk-GI7LLYGM.js";import{a as O,b as v,c as R,d as L,e as B,g as X}from"./chunk-VLNPATEH.js";import"./chunk-ONOOT4BC.js";typeof globalThis>"u"&&(window.globalThis=window);var Y="165ac421540386f02ed77a901c07d9467216599b";var j="/_frsh",z="__frsh_c";function G(t){if(!t.startsWith("/")||t.startsWith("//"))return t;try{let e=new URL(t,"https://freshassetcache.local");return e.protocol!=="https:"||e.host!=="freshassetcache.local"||e.searchParams.has(z)?t:(e.searchParams.set(z,Y),e.pathname+e.search+e.hash)}catch(e){return console.warn(`Failed to create asset() URL, falling back to regular path ('${t}'):`,e),t}}function de(t){if(t.includes("("))return t;let e=t.split(","),n=[];for(let r of e){let o=r.trimStart(),i=r.length-o.length;if(o==="")return t;let s=o.indexOf(" ");s===-1&&(s=o.length);let a=r.substring(0,i),l=o.substring(0,s),d=o.substring(s);n.push(a+G(l)+d)}return n.join(",")}function J(t){if(t.type==="img"||t.type==="source"){let{props:e}=t;if(e["data-fresh-disable-lock"])return;typeof e.src=="string"&&(e.src=G(e.src)),typeof e.srcset=="string"&&(e.srcset=de(e.srcset))}}var k="fresh-partial",w="f-partial",I="f-loading",b="f-client-nav",W="data-fresh-key",x="data-current",C="data-ancestor";function K(t,e){let n=new URL(e,"http://localhost").pathname;return n!=="/"&&n.endsWith("/")&&(n=n.slice(0,-1)),t!=="/"&&t.endsWith("/")&&(t=t.slice(0,-1)),t===n?2:t.startsWith(n+"/")||n==="/"?1:0}function Q(t,e){let n=t.props,r=n.href;if(typeof r=="string"&&r.startsWith("/")){let o=K(e,r);o===2?(n[x]="true",n["aria-current"]="page"):o===1&&(n[C]="true",n["aria-current"]="true")}}function ce(t,e,n){let r=t.__k={_frshRootFrag:!0,nodeType:1,parentNode:t,nextSibling:null,get firstChild(){let o=e.nextSibling;return o===n?null:o},get childNodes(){let o=[],i=e.nextSibling;for(;i!==null&&i!==n;)o.push(i),i=i.nextSibling;return o},insertBefore(o,i){t.insertBefore(o,i??n)},appendChild(o){t.insertBefore(o,n)},removeChild(o){t.removeChild(o)},contains(o){if(o===null)return!1;let i=r.childNodes;for(let s=0;s<i.length;s++)if(i[s].contains(o))return!0;return!1}};return r}function ne(t){return t.nodeType===Node.COMMENT_NODE}function ue(t){return t.nodeType===Node.TEXT_NODE}function re(t){return t.nodeType===Node.ELEMENT_NODE&&!("_frshRootFrag"in t)}function Me(t,e){let n=[];U(t,e,[],[R(L,null)],document.body,n);for(let r=0;r<n.length;r++){let{vnode:o,rootFragment:i}=n[r],s=()=>{X(o,i)};"scheduler"in window?scheduler.postTask(s):setTimeout(s,0)}}function oe(t){return t.children}oe.displayName="PreactServerComponent";function S(t,e){let n=t.props;n.children==null?n.children=e:Array.isArray(n.children)?n.children.push(e):n.children=[n.children,e]}var $=class extends B{componentDidMount(){se.set(this.props.name,this)}render(){return this.props.children}};var Z=!1,se=new Map;function q(t){let{startNode:e,endNode:n}=t,r=n.parentNode;if(!Z&&e!==null&&e.nodeType===Node.COMMENT_NODE){let o=new Text("");t.startNode=o,r.insertBefore(o,e),e.remove()}if(!Z&&n!==null&&n.nodeType===Node.COMMENT_NODE){let o=new Text("");t.endNode=o,r.insertBefore(o,n),n.remove()}}function ee(t,e,n,r,o,i){let[s,a]=o.slice(6).split(":"),l=`#frsh-slot-${s}-${a}-children`,d=document.querySelector(l);if(d!==null){n.push({kind:1,endNode:null,startNode:null,text:o.slice(1)});let c=d.content.cloneNode(!0);U(t,e,n,r,c,i),n.pop()}}function U(t,e,n,r,o,i){let s=o;for(;s!==null;){let a=n.length>0?n[n.length-1]:null;if(ne(s)){let l=s.data;if(l.startsWith("!--")&&(l=l.slice(3,-2)),l.startsWith("frsh-slot"))n.push({startNode:s,text:l,endNode:null,kind:1}),r.push(R(oe,{id:l}));else if(l.startsWith("frsh-partial")){let[d,c,p,N]=l.split(":");n.push({startNode:s,text:c,endNode:null,kind:2}),r.push(R($,{name:c,key:N,mode:+p}))}else if(l.startsWith("frsh-key:")){let d=l.slice(9);r.push(R(L,{key:d}))}else if(l.startsWith("/frsh-key:")){let d=r.pop(),c=r[r.length-1];S(c,d),s=s.nextSibling;continue}else if(a!==null&&(l.startsWith("/frsh")||a.text===l)){if(a.endNode=s,n.pop(),a.kind===1){let d=r.pop(),c=r[r.length-1];c.props.children=d,q(a),s=a.endNode.nextSibling;continue}else if(a!==null&&(a.kind===0||a.kind===2))if(n.length===0){let d=r[r.length-1];d.props.children==null&&ee(t,e,n,r,l,i),r.pop();let c=s.parentNode;q(a);let p=ce(c,a.startNode,a.endNode);i.push({vnode:d,marker:a,rootFragment:p}),s=a.endNode.nextSibling;continue}else{let d=r[r.length-1];d&&d.props.children==null?(ee(t,e,n,r,l,i),d.props.children==null&&r.pop()):r.pop(),a.endNode=s,q(a);let c=r[r.length-1];S(c,d),s=a.endNode.nextSibling;continue}}else if(l.startsWith("frsh")){let[d,c,p]=l.slice(5).split(":"),N=e[Number(c)];n.push({startNode:s,endNode:null,text:l,kind:0});let g=R(t[d],N);p&&(g.key=p),r.push(g)}}else if(ue(s)){let l=r[r.length-1];a!==null&&(a.kind===1||a.kind===2)&&S(l,s.data)}else{let l=r[r.length-1];if(re(s))if(a!==null&&(a.kind===1||a.kind===2)){let c={children:s.childNodes.length<=1?null:[]},p=!1;for(let g=0;g<s.attributes.length;g++){let f=s.attributes[g];if(f.nodeName===W){p=!0,c.key=f.nodeValue;continue}else if(f.nodeName===I){let h=f.nodeValue,u=e[Number(h)][I].value;s._freshIndicator=u}c[f.nodeName]=typeof s[f.nodeName]=="boolean"?!0:f.nodeValue}p&&s.removeAttribute(W);let N=R(s.localName,c);S(l,N),r.push(N)}else{let d=s.getAttribute(I);if(d!==null){let c=e[Number(d)][I].value;s._freshIndicator=c}}s.firstChild&&s.nodeName!=="SCRIPT"&&U(t,e,n,r,s.firstChild,i),a!==null&&a.kind!==0&&r.pop()}s!==null&&(s=s.nextSibling)}}var fe="Unable to process partial response.";async function H(t,e={}){e.redirect="follow",t.searchParams.set(k,"true");let n=await fetch(t,e);await he(n)}function ie(t){document.querySelectorAll("a").forEach(e=>{let n=K(t.pathname,e.href);n===2?(e.setAttribute(x,"true"),e.setAttribute("aria-current","page"),e.removeAttribute(C)):n===1?(e.setAttribute(C,"true"),e.setAttribute("aria-current","true"),e.removeAttribute(x)):(e.removeAttribute(x),e.removeAttribute(C),e.removeAttribute("aria-current"))})}function le(t,e,n,r){let o=null,i=r.firstChild,s=0;for(;i!==null;){if(ne(i)){let a=i.data;if(a.startsWith("frsh-partial"))o=i,s++;else if(a.startsWith("/frsh-partial")){s--;let l={_frshRootFrag:!0,nodeType:1,nextSibling:null,firstChild:o,parentNode:r,get childNodes(){let d=[o],c=o;for(;(c=c.nextSibling)!==null;)d.push(c);return d}};U(e,n[0]??[],[],[R(L,null)],l,t)}}else s===0&&re(i)&&le(t,e,n,i);i=i.nextSibling}}var D=class extends Error{};async function he(t){let e=t.headers.get("Content-Type"),n=t.headers.get("X-Fresh-UUID");if(e!=="text/html; charset=utf-8")throw new Error(fe);let r=await t.text(),o=new DOMParser().parseFromString(r,"text/html"),i=[],s={},a=o.getElementById(`__FRSH_PARTIAL_DATA_${n}`),l=null;a!==null&&(l=JSON.parse(a.textContent),i.push(...Array.from(Object.entries(l.islands)).map(async f=>{let h=await import(`${f[1].url}`);s[f[0]]=h[f[1].export]})));let d=o.getElementById(`__FRSH_STATE_${n}`)?.textContent,c=[[],[]],p;l!==null&&l.signals!==null&&i.push(import(l.signals).then(f=>{p=f.signal}));let N;d&&l&&l.deserializer!==null&&i.push(import(l.deserializer).then(f=>N=f.deserialize)),await Promise.all(i),d&&(c=N?N(d,p):JSON.parse(d)?.v);let g=[];if(le(g,s,c,o.body),g.length===0)throw new D(`Found no partials in HTML response. Please make sure to render at least one partial. Requested url: ${t.url}`);o.title&&(document.title=o.title),Array.from(o.head.childNodes).forEach(f=>{let h=f;if(h.nodeName!=="TITLE"){if(h.nodeName==="META"){let u=h;if(u.hasAttribute("charset"))return;let y=u.name;if(y!==""){let T=document.head.querySelector(`meta[name="${y}"]`);T!==null?T.content!==u.content&&(T.content=u.content):document.head.appendChild(u)}else{let T=h.getAttribute("property"),m=document.head.querySelector(`meta[property="${T}"]`);m!==null?m.content!==u.content&&(m.content=u.content):document.head.appendChild(u)}}else if(h.nodeName==="LINK"){let u=h;if(u.rel==="modulepreload")return;u.rel==="stylesheet"&&Array.from(document.head.querySelectorAll("link")).find(T=>T.href===u.href)===void 0&&document.head.appendChild(u)}else if(h.nodeName==="SCRIPT"){if(h.src===`${j}/refresh.js`)return}else if(h.nodeName==="STYLE"){let u=h;u.id===""&&document.head.appendChild(u)}}});for(let f=0;f<g.length;f++){let{vnode:h,marker:u}=g[f],y=se.get(u.text);if(!y)console.warn(`Partial "${u.text}" not found. Skipping...`);else{let T=h.props.mode,m=h.props.children;if(T===0)y.props.children=m;else{let V=y.props.children,E=Array.isArray(V)?V:[V];if(T===1)E.push(m);else{v(m)||(m=R(L,null,m)),m.key==null&&(m.key=E.length);let F=y.__v.__k;if(Array.isArray(F))for(let A=0;A<F.length;A++){let _=F[A];if(_.key==null)_.key=A;else break}for(let A=0;A<E.length;A++){let _=E[A];if(_.key==null)_.key=A;else break}E.unshift(m)}y.props.children=E}y.setState({})}}}var te=O.vnode;O.vnode=t=>{if(J(t),typeof t.type=="string"&&(t.type==="a"&&Q(t,location.pathname),b in t.props)){let e=t.props[b];typeof e=="boolean"&&(t.props[b]=String(e))}te&&te(t)};function M(t){if(t===null)return document.querySelector(`[${b}="true"]`)!==null;let e=t.closest(`[${b}]`);return e===null?!1:e.getAttribute(b)==="true"}var P=history.state?.index||0;if(!history.state){let t={index:P,scrollX,scrollY};history.replaceState(t,document.title)}function ae(t){if(t.href!==globalThis.location.href){let e={index:P,scrollX:globalThis.scrollX,scrollY:globalThis.scrollY};history.replaceState({...e},"",location.href),P++,e.scrollX=0,e.scrollY=0,history.pushState(e,"",t.href)}}document.addEventListener("click",async t=>{let e=t.target;if(e&&(e instanceof HTMLElement||e instanceof SVGElement)){let n=e;if(e.nodeName!=="A"&&(e=e.closest("a")),e===null&&(e=n.closest("button")),e&&e instanceof HTMLAnchorElement&&e.href&&(!e.target||e.target==="_self")&&e.origin===location.origin&&t.button===0&&!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button)&&!t.defaultPrevented){let r=e.getAttribute(w);if(e.getAttribute("href")?.startsWith("#")||!M(e))return;let o=e._freshIndicator;o!==void 0&&(o.value=!0),t.preventDefault();let i=new URL(e.href);try{ae(i);let s=new URL(r||i.href,location.href);await H(s),ie(i),scrollTo({left:0,top:0,behavior:"instant"})}finally{o!==void 0&&(o.value=!1)}}else if(e&&e instanceof HTMLButtonElement&&(e.type!=="submit"||e.form===null)){let r=e.getAttribute(w);if(r===null||!M(e))return;let o=new URL(r,location.href);await H(o)}}});addEventListener("popstate",async t=>{if(t.state===null){history.scrollRestoration&&(history.scrollRestoration="auto");return}let e=history.state;if(P=e.index??P+1,!M(null)){location.reload();return}history.scrollRestoration&&(history.scrollRestoration="manual");let r=new URL(location.href,location.origin);try{await H(r),ie(r),scrollTo({left:e.scrollX??0,top:e.scrollY??0,behavior:"instant"})}catch(o){if(o instanceof D){location.reload();return}throw o}});document.addEventListener("submit",async t=>{let e=t.target;if(e!==null&&e instanceof HTMLFormElement&&!t.defaultPrevented){if(!M(e)||t.submitter!==null&&!M(t.submitter))return;let n=t.submitter?.getAttribute("formmethod")?.toLowerCase()??e.method.toLowerCase();if(n!=="get"&&n!=="post"&&n!=="dialog")return;let r=t.submitter?.getAttribute(w)??t.submitter?.getAttribute("formaction")??e.getAttribute(w)??e.action;if(r!==""){t.preventDefault();let o=new URL(r,location.href),i;n==="get"?new URLSearchParams(new FormData(e)).forEach((a,l)=>o.searchParams.set(l,a)):i={body:new FormData(e),method:n},ae(o),await H(o,i)}}});export{he as applyPartials,Me as revive};

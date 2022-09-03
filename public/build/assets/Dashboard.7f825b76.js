import{r as o,R as y,a as s,F as K,j as m,L as H,H as Le}from"./app.55e81d72.js";import{A as $e}from"./ApplicationLogo.4e0b08b9.js";let O=typeof window<"u"?o.exports.useLayoutEffect:o.exports.useEffect;function $(e){let t=o.exports.useRef(e);return O(()=>{t.current=e},[e]),t}function A(){let e=[],t=[],r={enqueue(n){t.push(n)},addEventListener(n,i,d,u){return n.addEventListener(i,d,u),r.add(()=>n.removeEventListener(i,d,u))},requestAnimationFrame(...n){let i=requestAnimationFrame(...n);return r.add(()=>cancelAnimationFrame(i))},nextFrame(...n){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...n))},setTimeout(...n){let i=setTimeout(...n);return r.add(()=>clearTimeout(i))},add(n){return e.push(n),()=>{let i=e.indexOf(n);if(i>=0){let[d]=e.splice(i,1);d()}}},dispose(){for(let n of e.splice(0))n()},async workQueue(){for(let n of t.splice(0))await n()}};return r}function ke(){let[e]=o.exports.useState(A);return o.exports.useEffect(()=>()=>e.dispose(),[e]),e}let k=function(e){let t=$(e);return y.useCallback((...r)=>t.current(...r),[t])},Y={serverHandoffComplete:!1};function X(){let[e,t]=o.exports.useState(Y.serverHandoffComplete);return o.exports.useEffect(()=>{e!==!0&&t(!0)},[e]),o.exports.useEffect(()=>{Y.serverHandoffComplete===!1&&(Y.serverHandoffComplete=!0)},[]),e}var ie;let Fe=0;function oe(){return++Fe}let Oe=(ie=y.useId)!=null?ie:function(){let e=X(),[t,r]=y.useState(e?oe:null);return O(()=>{t===null&&r(oe())},[t]),t!=null?""+t:void 0};function h(e,t,...r){if(e in t){let i=t[e];return typeof i=="function"?i(...r):i}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,h),n}let Re=Symbol();function ue(...e){let t=o.exports.useRef(e);o.exports.useEffect(()=>{t.current=e},[e]);let r=k(n=>{for(let i of t.current)i!=null&&(typeof i=="function"?i(n):i.current=n)});return e.every(n=>n==null||(n==null?void 0:n[Re]))?void 0:r}var de=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(de||{}),b=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(b||{});function ce({ourProps:e,theirProps:t,slot:r,defaultTag:n,features:i,visible:d=!0,name:u}){let a=fe(t,e);if(d)return S(a,r,n,u);let c=i!=null?i:0;if(c&2){let{static:l=!1,...f}=a;if(l)return S(f,r,n,u)}if(c&1){let{unmount:l=!0,...f}=a;return h(l?0:1,{[0](){return null},[1](){return S({...f,hidden:!0,style:{display:"none"}},r,n,u)}})}return S(a,r,n,u)}function S(e,t={},r,n){let{as:i=r,children:d,refName:u="ref",...a}=_(e,["unmount","static"]),c=e.ref!==void 0?{[u]:e.ref}:{},l=typeof d=="function"?d(t):d;a.className&&typeof a.className=="function"&&(a.className=a.className(t));let f={};if(i===o.exports.Fragment&&Object.keys(se(a)).length>0){if(!o.exports.isValidElement(l)||Array.isArray(l)&&l.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));return o.exports.cloneElement(l,Object.assign({},fe(l.props,se(_(a,["ref"]))),f,c))}return o.exports.createElement(i,Object.assign({},_(a,["ref"]),i!==o.exports.Fragment&&c,i!==o.exports.Fragment&&f),l)}function fe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let n of e)for(let i in n)i.startsWith("on")&&typeof n[i]=="function"?(r[i]!=null||(r[i]=[]),r[i].push(n[i])):t[i]=n[i];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(n=>[n,void 0])));for(let n in r)Object.assign(t,{[n](i,...d){let u=r[n];for(let a of u){if(i.defaultPrevented)return;a(i,...d)}}});return t}function ee(e){var t;return Object.assign(o.exports.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function se(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function _(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}let te=o.exports.createContext(null);te.displayName="OpenClosedContext";var F=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(F||{});function pe(){return o.exports.useContext(te)}function je({value:e,children:t}){return y.createElement(te.Provider,{value:e},t)}function me(){let e=o.exports.useRef(!1);return O(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Se(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function De(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function G(e,...t){e&&t.length>0&&e.classList.add(...t)}function Q(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Z=(e=>(e.Ended="ended",e.Cancelled="cancelled",e))(Z||{});function He(e,t){let r=A();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:i}=getComputedStyle(e),[d,u]=[n,i].map(a=>{let[c=0]=a.split(",").filter(Boolean).map(l=>l.includes("ms")?parseFloat(l):parseFloat(l)*1e3).sort((l,f)=>f-l);return c});if(d+u!==0){let a=[];a.push(r.addEventListener(e,"transitionrun",c=>{c.target===c.currentTarget&&(a.splice(0).forEach(l=>l()),a.push(r.addEventListener(e,"transitionend",l=>{l.target===l.currentTarget&&(t("ended"),a.splice(0).forEach(f=>f()))}),r.addEventListener(e,"transitioncancel",l=>{l.target===l.currentTarget&&(t("cancelled"),a.splice(0).forEach(f=>f()))})))}))}else t("ended");return r.add(()=>t("cancelled")),r.dispose}function Ae(e,t,r,n){let i=r?"enter":"leave",d=A(),u=n!==void 0?De(n):()=>{},a=h(i,{enter:()=>t.enter,leave:()=>t.leave}),c=h(i,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),l=h(i,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return Q(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),G(e,...a,...l),d.nextFrame(()=>{Q(e,...l),G(e,...c),He(e,f=>(f==="ended"&&(Q(e,...a),G(e,...t.entered)),u(f)))}),d.dispose}function Pe({container:e,direction:t,classes:r,events:n,onStart:i,onStop:d}){let u=me(),a=ke(),c=$(t),l=k(()=>h(c.current,{enter:()=>n.current.beforeEnter(),leave:()=>n.current.beforeLeave(),idle:()=>{}})),f=k(()=>h(c.current,{enter:()=>n.current.afterEnter(),leave:()=>n.current.afterLeave(),idle:()=>{}}));O(()=>{let p=A();a.add(p.dispose);let w=e.current;if(!!w&&c.current!=="idle"&&!!u.current)return p.dispose(),l(),i.current(c.current),p.add(Ae(w,r.current,c.current==="enter",C=>{p.dispose(),h(C,{[Z.Ended](){f(),d.current(c.current)},[Z.Cancelled]:()=>{}})})),p.dispose},[t])}function E(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let P=o.exports.createContext(null);P.displayName="TransitionContext";var Me=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Me||{});function qe(){let e=o.exports.useContext(P);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Be(){let e=o.exports.useContext(M);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let M=o.exports.createContext(null);M.displayName="NestingContext";function q(e){return"children"in e?q(e.children):e.current.filter(({state:t})=>t==="visible").length>0}function he(e){let t=$(e),r=o.exports.useRef([]),n=me(),i=k((u,a=b.Hidden)=>{let c=r.current.findIndex(({id:l})=>l===u);c!==-1&&(h(a,{[b.Unmount](){r.current.splice(c,1)},[b.Hidden](){r.current[c].state="hidden"}}),Se(()=>{var l;!q(r)&&n.current&&((l=t.current)==null||l.call(t))}))}),d=k(u=>{let a=r.current.find(({id:c})=>c===u);return a?a.state!=="visible"&&(a.state="visible"):r.current.push({id:u,state:"visible"}),()=>i(u,b.Unmount)});return o.exports.useMemo(()=>({children:r,register:d,unregister:i}),[d,i,r])}function Ue(){}let We=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ae(e){var t;let r={};for(let n of We)r[n]=(t=e[n])!=null?t:Ue;return r}function ze(e){let t=o.exports.useRef(ae(e));return o.exports.useEffect(()=>{t.current=ae(e)},[e]),t}let Ie="div",ge=de.RenderStrategy,ve=ee(function(e,t){let{beforeEnter:r,afterEnter:n,beforeLeave:i,afterLeave:d,enter:u,enterFrom:a,enterTo:c,entered:l,leave:f,leaveFrom:p,leaveTo:w,...C}=e,v=o.exports.useRef(null),U=ue(v,t),[g,T]=o.exports.useState("visible"),N=C.unmount?b.Unmount:b.Hidden,{show:L,appear:xe,initial:be}=qe(),{register:R,unregister:j}=Be(),W=o.exports.useRef(null),x=Oe();o.exports.useEffect(()=>{if(x)return R(x)},[R,x]),o.exports.useEffect(()=>{if(N===b.Hidden&&!!x){if(L&&g!=="visible"){T("visible");return}h(g,{hidden:()=>j(x),visible:()=>R(x)})}},[g,x,R,j,L,N]);let ye=$({enter:E(u),enterFrom:E(a),enterTo:E(c),entered:E(l),leave:E(f),leaveFrom:E(p),leaveTo:E(w)}),we=ze({beforeEnter:r,afterEnter:n,beforeLeave:i,afterLeave:d}),z=X();o.exports.useEffect(()=>{if(z&&g==="visible"&&v.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[v,g,z]);let I=be&&!xe,Ne=(()=>!z||I||W.current===L?"idle":L?"enter":"leave")(),V=o.exports.useRef(!1),ne=he(()=>{V.current||(T("hidden"),j(x))});Pe({container:v,classes:ye,events:we,direction:Ne,onStart:$(()=>{V.current=!0}),onStop:$(Te=>{V.current=!1,Te==="leave"&&!q(ne)&&(T("hidden"),j(x))})}),o.exports.useEffect(()=>{!I||(N===b.Hidden?W.current=null:W.current=L)},[L,I,g]);let Ee=C,Ce={ref:U};return y.createElement(M.Provider,{value:ne},y.createElement(je,{value:h(g,{visible:F.Open,hidden:F.Closed})},ce({ourProps:Ce,theirProps:Ee,defaultTag:Ie,features:ge,visible:g==="visible",name:"Transition.Child"})))}),J=ee(function(e,t){let{show:r,appear:n=!1,unmount:i,...d}=e,u=o.exports.useRef(null),a=ue(u,t);X();let c=pe();if(r===void 0&&c!==null&&(r=h(c,{[F.Open]:!0,[F.Closed]:!1})),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[l,f]=o.exports.useState(r?"visible":"hidden"),p=he(()=>{f("hidden")}),[w,C]=o.exports.useState(!0),v=o.exports.useRef([r]);O(()=>{w!==!1&&v.current[v.current.length-1]!==r&&(v.current.push(r),C(!1))},[v,r]);let U=o.exports.useMemo(()=>({show:r,appear:n,initial:w}),[r,n,w]);o.exports.useEffect(()=>{if(r)f("visible");else if(!q(p))f("hidden");else{let T=u.current;if(!T)return;let N=T.getBoundingClientRect();N.x===0&&N.y===0&&N.width===0&&N.height===0&&f("hidden")}},[r,p]);let g={unmount:i};return s(M.Provider,{value:p,children:s(P.Provider,{value:U,children:ce({ourProps:{...g,as:o.exports.Fragment,children:y.createElement(ve,{ref:a,...g,...d})},theirProps:{},defaultTag:o.exports.Fragment,features:ge,visible:l==="visible",name:"Transition"})})})}),Ve=ee(function(e,t){let r=o.exports.useContext(P)!==null,n=pe()!==null;return s(K,{children:!r&&n?s(J,{ref:t,...e}):y.createElement(ve,{ref:t,...e})})}),Ye=Object.assign(J,{Child:Ve,Root:J});const re=y.createContext(),B=({children:e})=>{const[t,r]=o.exports.useState(!1),n=()=>{r(i=>!i)};return s(re.Provider,{value:{open:t,setOpen:r,toggleOpen:n},children:s("div",{className:"relative",children:e})})},_e=({children:e})=>{const{open:t,setOpen:r,toggleOpen:n}=o.exports.useContext(re);return m(K,{children:[s("div",{onClick:n,children:e}),t&&s("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},Ge=({align:e="right",width:t="48",contentClasses:r="py-1 bg-white",children:n})=>{const{open:i,setOpen:d}=o.exports.useContext(re);let u="origin-top";e==="left"?u="origin-top-left left-0":e==="right"&&(u="origin-top-right right-0");let a="";return t==="48"&&(a="w-48"),s(K,{children:s(Ye,{as:o.exports.Fragment,show:i,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:s("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${u} ${a}`,onClick:()=>d(!1),children:s("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+r,children:n})})})})},Qe=({href:e,method:t="post",as:r="a",children:n})=>s(H,{href:e,method:t,as:r,className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",children:n});B.Trigger=_e;B.Content=Ge;B.Link=Qe;const D=B;function Ze({href:e,active:t,children:r}){return s(H,{href:e,className:t?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out",children:r})}function le({method:e="get",as:t="a",href:r,active:n=!1,children:i}){return s(H,{method:e,as:t,href:r,className:`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${n?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out`,children:i})}function Je({auth:e,header:t,children:r}){const[n,i]=o.exports.useState(!1);return m("div",{className:"min-h-screen bg-gray-100",children:[m("nav",{className:"bg-white border-b border-gray-100",children:[s("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:m("div",{className:"flex justify-between h-16",children:[m("div",{className:"flex",children:[s("div",{className:"shrink-0 flex items-center",children:s(H,{href:"/",children:s($e,{className:"block h-9 w-auto text-gray-500"})})}),s("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",children:s(Ze,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})})]}),s("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:s("div",{className:"ml-3 relative",children:m(D,{children:[s(D.Trigger,{children:s("span",{className:"inline-flex rounded-md",children:m("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[e.user.name,s("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:s("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),s(D.Content,{children:s(D.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})})]})})}),s("div",{className:"-mr-2 flex items-center sm:hidden",children:s("button",{onClick:()=>i(d=>!d),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:m("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[s("path",{className:n?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),s("path",{className:n?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),m("div",{className:(n?"block":"hidden")+" sm:hidden",children:[s("div",{className:"pt-2 pb-3 space-y-1",children:s(le,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})}),m("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[m("div",{className:"px-4",children:[s("div",{className:"font-medium text-base text-gray-800",children:e.user.name}),s("div",{className:"font-medium text-sm text-gray-500",children:e.user.email})]}),s("div",{className:"mt-3 space-y-1",children:s(le,{method:"post",href:route("logout"),as:"button",children:"Log Out"})})]})]})]}),t&&s("header",{className:"bg-white shadow",children:s("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:t})}),s("main",{children:r})]})}function et(e){return m(Je,{auth:e.auth,errors:e.errors,header:s("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Dashboard"}),children:[s(Le,{title:"Dashboard"}),s("div",{className:"py-12",children:s("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:s("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:s("div",{className:"p-6 bg-white border-b border-gray-200",children:"You're logged in!"})})})})]})}export{et as default};

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[559],{54533:function(e,t,n){"use strict";n.d(t,{Hp:function(){return i},tm:function(){return l},yh:function(){return a},aG:function(){return s}});var r=n(7653);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{rootMargin:n,threshold:a=.5}=t,[o,i]=r.useState(null),s=r.useRef(new Map);return r.useEffect(()=>{i(null);let t=new IntersectionObserver(e=>{e.forEach(e=>{let t=e.target.id;t&&s.current.set(t,e.isIntersecting&&e.intersectionRatio>=a)});let t=Array.from(s.current.entries()).find(e=>{let[,t]=e;return t});t&&i(t[0])},{rootMargin:n,threshold:a});return e.forEach(e=>{try{let n=document.getElementById(e);n&&t.observe(n)}catch(e){console.log(e)}}),()=>{t.disconnect()}},[e,a,n]),o}var o=n(81695);function i(){var e,t,a;let i=(0,o.useParams)(),[s,l]=r.useState(null!==(a=null===(t=n.g.location)||void 0===t?void 0:null===(e=t.hash)||void 0===e?void 0:e.slice(1))&&void 0!==a?a:null);return r.useEffect(()=>{function e(){var e,t;l(null===(t=n.g.location)||void 0===t?void 0:null===(e=t.hash)||void 0===e?void 0:e.slice(1))}return n.g.addEventListener("hashchange",e),e(),()=>n.g.removeEventListener("hashchange",e)},[i]),s}function s(e){let t=i(),n=(0,o.usePathname)();r.useLayoutEffect(()=>{if(t){let n=document.getElementById(t);n&&(e.scrollMarginTop&&(n.style.scrollMarginTop="".concat(e.scrollMarginTop,"px")),n.scrollIntoView({block:"start",behavior:"smooth"}))}else window.scrollTo(0,0);return()=>{if(t){let e=document.getElementById(t);e&&(e.style.scrollMarginTop="")}}},[t,n,e.scrollMarginTop])}function l(){let[e,t]=r.useState(!1);return r.useEffect(()=>{t(!0)},[]),e}},28785:function(e,t,n){"use strict";n.d(t,{K:function(){return o}});var r=n(27573),a=n(33298);let o=e=>{let{style:t,tile:n,pulse:o,delay:i,gridStyle:s}=e,l=(()=>{switch(i){case 0:return"delay-0";case 1:return"[animation-delay:_200ms]";case 2:return"[animation-delay:_400ms]";case 3:return"[animation-delay:_600ms]";case 4:return"[animation-delay:_800ms]"}})(),c=(()=>{switch(n){case 12:return"[mask:conic-gradient(from_90deg_at_1px_1px,_#0000_90deg,_#0003_0)_calc(50%+1px)_calc(0%+47px)_/_12px_12px]";case 24:return"[mask:conic-gradient(from_90deg_at_1px_1px,_#0000_90deg,_#0003_0)_calc(50%+1px)_calc(0%+47px)_/_24px_24px]";case 48:default:return"[mask:conic-gradient(from_90deg_at_1px_1px,_#0000_90deg,_#0003_0)_calc(50%+1px)_calc(0%+47px)_/_48px_48px]";case 96:return"[mask:conic-gradient(from_90deg_at_1px_1px,_#0000_90deg,_#0003_0)_calc(50%+1px)_calc(0%+47px)_/_96px_96px]"}})();return(0,r.jsx)("div",{className:(0,a.t)("ring-1","ring-dark/2","overflow-hidden","relative","grid","dark:ring-light/1",t),children:(0,r.jsx)("div",{className:(0,a.t)("w-full","bg-dark-4/4","dark:bg-light-3/1","grid","grid-area-1-1","overflow-hidden",c),children:(0,r.jsx)("div",{className:(0,a.t)("aspect-square","from-dark-4","to-transparent","grid-area-1-1","relative","origin-[50%_50%]","top-[50%]","self-stretch","bg-transparent","will-change-transform",o?"animate-[pulseAlt_6s_cubic-bezier(.44,.12,.29,.94)_infinite]":"animate-[rotateLoop_2s_linear_infinite]",o?"[background-image:radial-gradient(circle_closest-side,_var(--tw-gradient-stops)_0,_var(--tw-gradient-stops)_33%,_var(--tw-gradient-stops)_66%)]":"[background-image:conic-gradient(from_-90deg_at_50%_50%,_var(--tw-gradient-stops)_0deg,_var(--tw-gradient-stops)_90deg,_var(--tw-gradient-stops)_280deg)]",o?["from-primary-600/7","dark:from-primary-200"]:["dark:from-light-4/6"],l,s)})})})}},53902:function(e,t,n){"use strict";n.d(t,{zx:function(){return r.Button},rU:function(){return s.Link},gb:function(){return i}}),n(80718);var r=n(75014),a=n(27573),o=n(33298);let i=e=>(0,a.jsxs)("svg",{width:"100%",viewBox:"0 0 128 116",preserveAspectRatio:"xMaxYMid meet",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-busy":!0,...e,children:[(0,a.jsx)("path",{className:(0,o.t)("animate-[pathLoading_2s_ease_infinite_forwards]"),d:"M6 59.5V56.291C6 45.8865 11.5194 36.263 20.5 31.0091V31.0091L60.9857 7.32407C63.4452 5.88525 66.4843 5.86317 68.9643 7.26611L116 33.8734L70.4183 60.2148C67.9468 61.6431 64.9014 61.6462 62.4269 60.223L29.9772 41.5592C19.3106 35.4242 6 43.1236 6 55.4288V64.8776C6 73.4486 10.5708 81.3691 17.9918 85.6575L54.59 106.807C62.0198 111.1 71.1766 111.1 78.6064 106.807L116.364 84.9874C120.074 82.8432 122.36 78.883 122.36 74.5975V59.2647C122.36 57.7248 120.692 56.7626 119.359 57.5331L72.6023 84.5529C68.8874 86.6996 64.309 86.6996 60.5941 84.5529L26 64.5617",stroke:"currentColor",pathLength:"100",fill:"none",strokeWidth:"11",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M6 59.5V56.291C6 45.8865 11.5194 36.263 20.5 31.0091V31.0091L60.9857 7.32407C63.4452 5.88525 66.4843 5.86317 68.9643 7.26611L116 33.8734L70.4183 60.2148C67.9468 61.6431 64.9014 61.6462 62.4269 60.223L29.9772 41.5592C19.3106 35.4242 6 43.1236 6 55.4288V64.8776C6 73.4486 10.5708 81.3691 17.9918 85.6575L54.59 106.807C62.0198 111.1 71.1766 111.1 78.6064 106.807L116.364 84.9874C120.074 82.8432 122.36 78.883 122.36 74.5975V59.2647C122.36 57.7248 120.692 56.7626 119.359 57.5331L72.6023 84.5529C68.8874 86.6996 64.309 86.6996 60.5941 84.5529L26 64.5617",stroke:"currentColor",pathLength:"100",strokeOpacity:"0.24",fill:"none",strokeWidth:"11",strokeLinecap:"round",strokeLinejoin:"round"})]});n(42172);var s=n(22833);n(28785),n(66819)},45343:function(e,t,n){"use strict";n.d(t,{ZoomImage:function(){return g}});var r=n(27573),a=n(42172),o=n(45254),i=n.n(o),s=n(7653),l=n(3458),c=n(33298),d=n(97746),u=n.n(d);function g(e){let{src:t,alt:n,width:a}=e,o=s.useRef(null),[c,d]=s.useState(!1),[g,f]=s.useState(!1),[h,p]=s.useState(!1),[v,x]=s.useState(null);s.useEffect(()=>{if("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)return;let e="number"==typeof a?a:0,t=0,n=window.matchMedia("(min-width: 768px)"),r="undefined"!=typeof ResizeObserver?new ResizeObserver(e=>{let n=e[0];if(n&&0!==n.contentRect.width){var r;t=null===(r=e[0])||void 0===r?void 0:r.contentRect.width,x(e[0].contentRect),i()}}):null,i=()=>{n.matches?r&&e&&t&&e<=t?d(!1):d(!0):d(!1)};return n.addEventListener("change",i),o.current&&(null==r||r.observe(o.current)),r||i(),()=>{null==r||r.disconnect(),n.removeEventListener("change",i)}},[o,a]),c&&l.preload(t,{as:"image"});let k=s.useCallback(e=>{let n=new Image;n.src=t,n.onload=()=>{null==e||e()}},[t]),w=s.useCallback(()=>{_(()=>{p(!1)},()=>{f(!1)})},[]);return(0,r.jsx)(r.Fragment,{children:h?(0,r.jsxs)(r.Fragment,{children:[v?(0,r.jsx)("span",{style:{display:"block",width:v.width,height:v.height}}):null,l.createPortal((0,r.jsx)(m,{src:t,crossOrigin:e.crossOrigin,alt:null!=n?n:"",onClose:w}),document.body)]}):(0,r.jsx)("img",{ref:o,...e,alt:null!=n?n:"",onMouseEnter:()=>{c&&k()},onClick:()=>{c&&k(()=>{l.flushSync(()=>f(!0)),_(()=>{p(!0)})})},className:i()(e.className,c?u().zoomImg:null,g?u().zoomImageActive:null)})})}function m(e){let{src:t,alt:n,crossOrigin:o,onClose:l}=e,d=s.useRef(null);return s.useEffect(()=>{let e=e=>{"Escape"===e.key&&l()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[l]),s.useEffect(()=>{var e;null===(e=d.current)||void 0===e||e.focus()},[]),(0,r.jsxs)("div",{className:i()(u().zoomModal,(0,c.t)("fixed","inset-0","z-50","flex","items-center","justify-center","bg-light","dark:bg-dark","p-8")),onClick:l,children:[(0,r.jsx)("img",{src:t,alt:n,crossOrigin:o,className:(0,c.t)("max-w-full","max-h-full","object-contain","bg-light","dark:bg-dark")}),(0,r.jsx)("button",{ref:d,className:(0,c.t)("absolute","top-5","right-5","flex","flex-row","items-center","justify-center","text-sm","text-dark/6","dark:text-light/5","hover:text-primary","p-4","dark:text-light/5","rounded-full","bg-white","dark:bg-dark/3","shadow-sm","hover:shadow-md","border-slate-300","dark:border-dark/2","border"),onClick:l,children:(0,r.jsx)(a.JO,{icon:"compress-wide",className:(0,c.t)("size-5")})})]})}function _(e,t){document.startViewTransition?document.startViewTransition(()=>{l.flushSync(()=>e())}).finished.then(()=>{t&&t()}):(e(),null==t||t())}},97746:function(e){e.exports={zoomModal:"ZoomImage_zoomModal__VzJS3",zoomImg:"ZoomImage_zoomImg__teSyL",zoomImageActive:"ZoomImage_zoomImageActive__C33dt"}}}]);
//# sourceMappingURL=559-c0443086de7e1430.js.map
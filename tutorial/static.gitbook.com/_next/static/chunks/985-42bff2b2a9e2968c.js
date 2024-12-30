(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[985],{18014:function(){},42084:function(){},50433:function(e,t,n){"use strict";n.r(t),n.d(t,{InsightsProvider:function(){return f},useTrackEvent:function(){return v}});var r=n(27573);n(78548);var a=n(7653);n(45254),n(66880),n(36198),n(48982),n(90790),n(71362),n(97879);var o=n(1898),l=n(26066),i=n(77879),c=n(8174);let s=null,u="__gitbook_session";function p(){"undefined"!=typeof localStorage&&s&&localStorage.setItem(u,JSON.stringify(s))}var d=n(37195);let m=a.createContext(()=>{});function f(e){let{enabled:t,apiHost:n,visitorAuthToken:f,children:v,...h}=e,g=a.useRef(null),y=a.useRef({});a.useEffect(()=>{(0,d.getVisitorId)().then(e=>{g.current=e})},[]);let E=(0,i.$0)(()=>{let e=function(){if(s)return s;try{let e="undefined"!=typeof localStorage?localStorage.getItem(u):null;if(e){let t=JSON.parse(e);if("object"==typeof t&&"number"==typeof t.lastActiveAt&&"string"==typeof t.id&&t.lastActiveAt+18e5>Date.now())return(s=t)&&(s.lastActiveAt=Date.now(),p()),s}}catch(e){console.error("Error parsing session",e)}return s={id:(0,c.D)(),lastActiveAt:Date.now()},p(),s}(),r=g.current;if(!r)throw Error("Visitor ID should be set before flushing events");let a=[];for(let t in y.current){let n=y.current[t];if(n&&n.events.length){if(!n.pageContext){console.warn("No page context for flushing events of",t,n);continue}a.push(...function(e){var t,n,r,a;let o={sessionId:e.sessionId,visitorId:e.visitorId,userAgent:window.navigator.userAgent,language:window.navigator.language,cookies:l.Z.get(),referrer:document.referrer||null,visitorAuthToken:null!==(t=e.visitorAuthToken)&&void 0!==t?t:null},i={url:e.url,siteSection:null!==(n=e.context.siteSectionId)&&void 0!==n?n:null,siteSpace:null!==(r=e.context.siteSpaceId)&&void 0!==r?r:null,space:e.context.spaceId,siteShareKey:null!==(a=e.context.siteShareKey)&&void 0!==a?a:null,page:e.pageContext.pageId,revision:e.pageContext.revisionId};return e.events.map(e=>({...e,session:o,location:i}))}({url:n.url,events:n.events,context:h,pageContext:n.pageContext,visitorId:r,sessionId:e.id,visitorAuthToken:f})),y.current[t]={...n,events:[]}}}a.length>0&&(t?(console.log("Sending events",a),function(e){let{apiHost:t,organizationId:n,siteId:r,events:a}=e,o=new URL(t);o.pathname="/v1/orgs/".concat(n,"/sites/").concat(r,"/insights/events"),fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},keepalive:!0,body:JSON.stringify({events:a})})}({apiHost:n,organizationId:h.organizationId,siteId:h.siteId,events:a})):console.log("Skipping sending events",a))}),b=(0,i.Sf)(async()=>{var e;let t=null!==(e=g.current)&&void 0!==e?e:await (0,d.getVisitorId)();g.current=t,E()},1500),I=(0,i.$0)((e,t,n)=>{var r,a,o;console.log("Logging event",e,t);let l=window.location.pathname,i=y.current[l];y.current[l]={pageContext:null!==(r=null==i?void 0:i.pageContext)&&void 0!==r?r:t,url:null!==(a=null==i?void 0:i.url)&&void 0!==a?a:window.location.href,events:[...null!==(o=null==i?void 0:i.events)&&void 0!==o?o:[],{...e,timestamp:new Date().toISOString()}],context:h},void 0!==y.current[l].pageContext&&((null==n?void 0:n.immediate)&&g.current?(b.cancel(),E()):b())});return a.useEffect(()=>(window.addEventListener("beforeunload",E),()=>{window.removeEventListener("beforeunload",E)}),[E]),(0,r.jsx)(m.Provider,{value:I,children:(0,r.jsx)(o.OpenAPIOperationContextProvider,{onOpenClient:e=>{I({type:"api_client_open",operation:e})},children:e.children})})}function v(){return a.useContext(m)}},26700:function(e,t,n){"use strict";n.r(t),n.d(t,{TrackPageViewEvent:function(){return o}});var r=n(7653),a=n(50433);function o(e){let{pageId:t,revisionId:n}=e,o=(0,a.useTrackEvent)();return r.useEffect(()=>{o({type:"page_view"},{pageId:t,revisionId:n})},[t,n,o]),null}},92884:function(e,t,n){"use strict";n.r(t),n.d(t,{isCookiesTrackingDisabled:function(){return l},setCookiesTracking:function(){return o}});var r=n(26066);let a="__gitbook_cookie_granted";function o(e){r.Z.set(a,e?"yes":"no",{expires:365,sameSite:"none",secure:!0})}function l(){let e=r.Z.get(a);return"yes"!==e&&("no"===e||void 0)}},8174:function(e,t,n){"use strict";function r(){return"undefined"!=typeof crypto&&crypto.randomUUID?"".concat(crypto.randomUUID(),"R"):"".concat(Math.random().toString(36).substring(2),"R")}n.d(t,{D:function(){return r}})},37195:function(e,t,n){"use strict";n.r(t),n.d(t,{getVisitorId:function(){return s}});var r=n(26066),a=n(92884),o=n(8174),l=n(74859);let i=null,c=null;async function s(){return i||(c||(c=u().finally(()=>{c=null})),i=await c),i}async function u(){if((0,a.isCookiesTrackingDisabled)())return(0,o.D)();let e=r.Z.get("__session");if(e)return e;{var t;let e=(0,o.D)(),n=new URL(null!==(t=l.env.NEXT_PUBLIC_GITBOOK_APP_URL)&&void 0!==t?t:"https://app.gitbook.com");n.pathname="/__session",n.searchParams.set("proposed",e);try{let e=await fetch(n,{method:"GET",credentials:"include",cache:"no-cache",mode:"cors"}),{deviceId:t}=await e.json();return t}catch(t){return console.error("Failed to fetch visitor session ID",t),e}}}},48982:function(e,t,n){"use strict";n.r(t),n.d(t,{InteractiveSection:function(){return i}});var r=n(45254),a=n(7653),o=n(11067);let l=(0,o.cn)({key:"syncedTabState",default:{}});function i(e){var t,n,i;let{id:c,className:s,toggeable:u=!1,defaultOpened:p=!0,tabs:d=[],defaultTab:m=null===(t=d[0])||void 0===t?void 0:t.key,header:f,children:v,overlay:h,toggleOpenIcon:g="▶",toggleCloseIcon:y="▼",stateKey:E}=e,[b,I]=(0,o.FV)(l),O=E&&E in b?d.find(e=>e.key===b[E]):void 0,[k,N]=a.useState(p),[x,w]=a.useState(null!==(n=null==O?void 0:O.key)&&void 0!==n?n:m),S=null!==(i=null!=O?O:d.find(e=>e.key===x))&&void 0!==i?i:d[0];return a.createElement("div",{id:c,className:r("openapi-section",u?"openapi-section-toggeable":null,s,u?"".concat(s,"-").concat(k?"opened":"closed"):null)},a.createElement("div",{onClick:()=>{u&&N(!k)},className:r("openapi-section-header","".concat(s,"-header"))},a.createElement("div",{className:r("openapi-section-header-content","".concat(s,"-header-content"))},f),a.createElement("div",{className:r("openapi-section-header-controls","".concat(s,"-header-controls")),onClick:e=>{e.stopPropagation()}},d.length?a.createElement("select",{className:r("openapi-section-select","openapi-select","".concat(s,"-tabs-select")),value:S.key,onChange:e=>{w(e.target.value),E&&I(t=>({...t,[E]:e.target.value})),N(!0)}},d.map(e=>a.createElement("option",{key:e.key,value:e.key},e.label))):null,(v||(null==S?void 0:S.body))&&u?a.createElement("button",{className:r("openapi-section-toggle","".concat(s,"-toggle")),onClick:()=>N(!k)},k?y:g):null)),(!u||k)&&(v||(null==S?void 0:S.body))?a.createElement("div",{className:r("openapi-section-body","".concat(s,"-body"))},v,null==S?void 0:S.body):null,h)}},36198:function(e,t,n){"use strict";n.d(t,{U:function(){return o}});var r=n(7653),a=n(45254);function o(e){let{source:t,className:n}=e;return r.createElement("div",{className:a("openapi-markdown",n),dangerouslySetInnerHTML:{__html:t}})}},1898:function(e,t,n){"use strict";n.r(t),n.d(t,{OpenAPIOperationContextProvider:function(){return l},useOpenAPIOperationContext:function(){return i}});var r=n(7653),a=n(77879);let o=r.createContext({onOpenClient:()=>{}});function l(e){let{children:t}=e,n=(0,a.$0)(t=>{var n;null===(n=e.onOpenClient)||void 0===n||n.call(e,t)}),l=r.useMemo(()=>({onOpenClient:n}),[n]);return r.createElement(o.Provider,{value:l},t)}function i(){return r.useContext(o)}},90790:function(e,t,n){"use strict";n.d(t,{OpenAPIServerURLVariable:function(){return o}});var r=n(7653),a=n(45254);function o(e){let{variable:t}=e;return r.createElement("span",{className:a("openapi-url-var")},t.default)}},97879:function(e,t,n){"use strict";n.d(t,{OpenAPISpec:function(){return N}});var r=n(7653),a=n(78548),o=n(48982),l=n(45254),i=n(36198);let c="__$refResolved";function s(e){if("object"==typeof e&&e&&"$ref"in e)throw Error("Reference found");return e}function u(e){let{propertyName:t,required:n,schema:a,circularRefs:c=new Map,context:s,className:u}=e,d=(0,r.useId)(),y=c.get(a),b=new Map(c).set(a,d),I=y?null:h(a),O=y?null:g(a,new Set(b.keys()));return r.createElement(o.InteractiveSection,{id:d,className:l("openapi-schema",u),toggeable:!!I||!!O,defaultOpened:!!s.defaultInteractiveOpened,toggleOpenIcon:s.icons.chevronRight,toggleCloseIcon:s.icons.chevronDown,tabs:null==O?void 0:O[0].map((e,t)=>({key:"".concat(t),label:E(e,O[1]),body:b.has(e)?r.createElement(f,{id:b.get(e),schema:e}):r.createElement(m,{schema:e,circularRefs:b,context:s})})),header:r.createElement("div",{className:l("openapi-schema-presentation")},r.createElement("div",{className:l("openapi-schema-name")},t?r.createElement("span",{className:l("openapi-schema-propertyname")},t):null,n?r.createElement("span",{className:l("openapi-schema-required")},"*"):null,r.createElement("span",{className:l("openapi-schema-type")},E(a))),a.description?r.createElement(i.U,{source:a.description,className:"openapi-schema-description"}):null,"string"==typeof a.example||"number"==typeof a.example||"boolean"==typeof a.example?r.createElement("span",{className:"openapi-schema-example"},"Example: ",r.createElement("code",null,JSON.stringify(a.example))):null,a.pattern?r.createElement("div",{className:"openapi-schema-pattern"},"Pattern: ",r.createElement("code",null,a.pattern)):null)},I&&I.length>0||a.enum&&a.enum.length>0||y?r.createElement(r.Fragment,null,(null==I?void 0:I.length)?r.createElement(p,{properties:I,circularRefs:b,context:s}):null,a.enum&&a.enum.length>0?r.createElement(v,{enumValues:a.enum}):null,y?r.createElement(f,{id:y,schema:a}):null):null)}function p(e){let{id:t,properties:n,circularRefs:a,context:o}=e;return n.length?r.createElement("div",{id:t,className:l("openapi-schema-properties")},n.map(e=>r.createElement(u,{key:e.propertyName,circularRefs:a,...e,context:o}))):null}function d(e){let{schema:t,context:n}=e,a=h(t);return a&&a.length>0?r.createElement(p,{properties:a,context:n}):r.createElement(u,{schema:t,context:n,className:"openapi-schema-root"})}function m(e){let{schema:t,circularRefs:n,context:a}=e,o=(0,r.useId)(),l=h(t);return r.createElement(p,{id:o,properties:null!=l?l:[{schema:t}],circularRefs:l?new Map(n).set(t,o):n,context:a})}function f(e){let{id:t,schema:n}=e;return r.createElement("div",{className:"openapi-schema-circular"},"Circular reference to ",r.createElement("a",{href:"#".concat(t)},E(n))," ",r.createElement("span",{className:"openapi-schema-circular-glyph"},"↩"))}function v(e){let{enumValues:t}=e;return r.createElement("div",{className:"openapi-schema-enum"},t.map((e,t)=>r.createElement("span",{key:t,className:"openapi-schema-enum-value"},"".concat(e))))}function h(e){if(e.allOf)return e.allOf.reduce((e,t)=>{var n;return[...e,...null!==(n=h(s(t)))&&void 0!==n?n:[{schema:s(t)}]]},[]);if("array"===e.type&&e.items){let t=s(e.items);return h(t)||[{propertyName:"items",schema:t}]}if("object"===e.type||e.properties){let t=[];if(e.properties&&Object.entries(e.properties).forEach(n=>{let[r,a]=n,o=s(a);o.deprecated||t.push({propertyName:r,required:Array.isArray(e.required)?e.required.includes(r):void 0,schema:o})}),e.additionalProperties){let n=s(e.additionalProperties);t.push({propertyName:"Other properties",schema:!0===n?{}:n})}return t}return null}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set,n=new Set(t).add(e);return e.anyOf?[y("anyOf",e.anyOf.map(s),n),s(e.discriminator)]:e.oneOf?[y("oneOf",e.oneOf.map(s),n),s(e.discriminator)]:(e.allOf,null)}function y(e,t,n){return t.reduce((t,r)=>{if(r[e]&&!n.has(r)){var a;return[...t,...(null===(a=g(r,n))||void 0===a?void 0:a[0])||[]]}return[...t,r]},[])}function E(e,t){if(e.title)return e.title;if(t&&e.properties){let n=s(e.properties[t.propertyName]);if(n&&n.enum)return n.enum.map(e=>e.toString()).join(" | ")}let n="any";if(e.enum)n="enum";else if("array"===e.type&&e.items)n="array of ".concat(E(s(e.items)));else if(e.type||e.properties){var r;n=null!==(r=e.type)&&void 0!==r?r:"object",e.format&&(n+=" (".concat(e.format,")"))}else"anyOf"in e?n="any of":"oneOf"in e?n="one of":"allOf"in e?n="all of":"not"in e&&(n="not");return c in e&&(n="".concat(e[c]," (").concat(n,")")),e.nullable&&(n="nullable ".concat(n)),n}function b(e){var t;let{requestBody:n,context:a}=e;return r.createElement(o.InteractiveSection,{header:"Body",className:"openapi-requestbody",tabs:Object.entries(null!==(t=n.content)&&void 0!==t?t:{}).map(e=>{var t;let[n,o]=e;return{key:n,label:n,body:r.createElement(d,{schema:null!==(t=s(o.schema))&&void 0!==t?t:{},context:a})}}),defaultOpened:a.defaultInteractiveOpened},n.description?r.createElement(i.U,{source:n.description,className:"openapi-requestbody-description"}):null)}function I(e){var t,n;let{response:a,context:c}=e,u=Object.entries(null!==(t=a.content)&&void 0!==t?t:{}),m=Object.entries(null!==(n=a.headers)&&void 0!==n?n:{}).map(e=>{var t;let[n,r]=e;return[n,null!==(t=s(r))&&void 0!==t?t:{}]});return 0!==u.length||a.description||0!==m.length?r.createElement(r.Fragment,null,a.description?r.createElement(i.U,{source:a.description,className:"openapi-response-description"}):null,m.length>0?r.createElement(o.InteractiveSection,{toggeable:!0,defaultOpened:!!c.defaultInteractiveOpened,toggleCloseIcon:c.icons.chevronDown,toggleOpenIcon:c.icons.chevronRight,header:"Headers",className:l("openapi-responseheaders")},r.createElement(p,{properties:m.map(e=>{var t;let[n,r]=e;return{propertyName:n,schema:null!==(t=s(r.schema))&&void 0!==t?t:{},required:r.required}}),context:c})):null,u.length>0?r.createElement(o.InteractiveSection,{header:"Body",className:l("openapi-responsebody"),tabs:u.map(e=>{var t;let[n,a]=e;return{key:n,label:n,body:r.createElement(d,{schema:null!==(t=s(a.schema))&&void 0!==t?t:{},context:c})}})}):null):null}function O(e){var t,n;let{responses:a,context:i}=e;return r.createElement(o.InteractiveSection,{stateKey:(t="response",(n=i.blockKey)?"".concat(n,"_").concat(t):t),header:"Response",className:l("openapi-responses"),tabs:Object.entries(a).map(e=>{let[t,n]=e;return{key:t,label:t,body:r.createElement(I,{response:s(n),context:i})}})})}function k(e){let{securities:t,context:n}=e;return 0===t.length?null:r.createElement(o.InteractiveSection,{header:"Authorization",className:"openapi-securities",toggeable:!0,defaultOpened:!1,toggleCloseIcon:n.icons.chevronDown,toggleOpenIcon:n.icons.chevronRight,tabs:t.map(e=>{let[t,n]=e;return{key:t,label:t,body:r.createElement(r.Fragment,null,r.createElement("p",{className:"openapi-securities-label"},function(e){switch(e.type){case"apiKey":return"API Key";case"http":if("basic"===e.scheme)return"Basic Auth";if("bearer"==e.scheme)return"Bearer Token ".concat(e.bearerFormat?"(".concat(e.bearerFormat,")"):"");return"HTTP";case"oauth2":return"OAuth2";case"openIdConnect":return"OpenID Connect";default:return e.type}}(n)),n.description?r.createElement(i.U,{source:n.description,className:"openapi-securities-description"}):null)}})})}function N(e){let{rawData:t,context:n}=e,{operation:l,securities:i}=(0,a.im)(t),c=function(e){let t=["path","query","header"],n=[];return e.forEach(e=>{let t=e.in,r=function(e){switch(e){case"path":return"Path parameters";case"query":return"Query parameters";case"header":return"Header parameters";default:return e}}(e.in),a=n.find(e=>e.key===t);a?a.parameters.push(e):n.push({key:t,label:r,parameters:[e]})}),n.sort((e,n)=>t.indexOf(e.key)-t.indexOf(n.key)),n}((l.parameters||[]).map(s));return r.createElement(r.Fragment,null,i.length>0?r.createElement(k,{securities:i,context:n}):null,c.map(e=>r.createElement(o.InteractiveSection,{key:e.key,className:"openapi-parameters",toggeable:!0,toggleOpenIcon:n.icons.chevronRight,toggleCloseIcon:n.icons.chevronDown,header:e.label,defaultOpened:"path"===e.key||n.defaultInteractiveOpened},r.createElement(p,{properties:e.parameters.map(e=>{var t;return{propertyName:e.name,schema:{description:e.description,example:e.example,...null!==(t=s(e.schema))&&void 0!==t?t:{}},required:e.required}}),context:n}))),l.requestBody?r.createElement(b,{requestBody:s(l.requestBody),context:n}):null,l.responses?r.createElement(O,{responses:s(l.responses),context:n}):null)}},71362:function(e,t,n){"use strict";n.d(t,{ScalarApiButton:function(){return l}});var r=n(66880),a=n(7653),o=n(1898);function l(e){let{method:t,path:n}=e,l=(0,r._)(),{onOpenClient:i}=(0,o.useOpenAPIOperationContext)();return a.createElement("div",{className:"scalar scalar-activate"},a.createElement("button",{className:"scalar-activate-button",onClick:()=>{null==l||l.open({method:t,path:n,_source:"gitbook"}),i({method:t,path:n})}},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"12",fill:"none"},a.createElement("path",{stroke:"currentColor",strokeWidth:"1.5",d:"M1 10.05V1.43c0-.2.2-.31.37-.22l7.26 4.08c.17.1.17.33.01.43l-7.26 4.54a.25.25 0 0 1-.38-.21Z"})),"Test it"))}},78548:function(e,t,n){"use strict";n.d(t,{im:function(){return r.im}});var r=n(18279);n(2494),n(6515)}}]);
//# sourceMappingURL=985-42bff2b2a9e2968c.js.map
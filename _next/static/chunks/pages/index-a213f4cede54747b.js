(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4186)}])},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(6495).Z,n=r(2648).Z,i=r(1598).Z,s=r(7273).Z,o=i(r(7294)),l=n(r(3121)),c=r(2675),d=r(139),u=r(8730);r(7238);var m=n(r(9824));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,r,n,i,s,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&s(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,l=!1;n.current(a({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{o=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let _=o.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:n,widthInt:i,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:m,fill:f,placeholder:p,loading:h,srcString:_,config:x,unoptimized:v,loader:j,onLoadRef:w,onLoadingCompleteRef:b,setBlurComplete:y,setShowAltText:N,onLoad:E,onError:S}=e,k=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=m?"lazy":h,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},k,r,{width:i,height:n,decoding:"async","data-nimg":f?"fill":"1",className:c,loading:h,style:a({},d,u),ref:o.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&g(e,_,p,w,b,y,v))},[_,p,w,b,y,S,v,t]),onLoad:e=>{let t=e.currentTarget;g(t,_,p,w,b,y,v)},onError:e=>{N(!0),"blur"===p&&y(!0),S&&S(e)}})))}),x=o.forwardRef((e,t)=>{let r,n;var i,{src:g,sizes:x,unoptimized:v=!1,priority:j=!1,loading:w,className:b,quality:y,width:N,height:E,fill:S,style:k,onLoad:C,onLoadingComplete:z,placeholder:L="empty",blurDataURL:I,layout:R,objectFit:O,objectPosition:P,lazyBoundary:A,lazyRoot:H}=e,D=s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let F=o.useContext(u.ImageConfigContext),M=o.useMemo(()=>{let e=f||F||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return a({},e,{allSizes:t,deviceSizes:r})},[F]),B=D,T=B.loader||m.default;delete B.loader;let G="__next_img_default"in T;if(G){if("custom"===M.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let W=T;T=e=>{let{config:t}=e,r=s(e,["config"]);return W(r)}}if(R){"fill"===R&&(S=!0);let q={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];q&&(k=a({},k,q));let V={responsive:"100vw",fill:"100vw"}[R];V&&!x&&(x=V)}let Z="",U=h(N),X=h(E);if("object"==typeof(i=g)&&(p(i)||void 0!==i.src)){let J=p(g)?g.default:g;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(r=J.blurWidth,n=J.blurHeight,I=I||J.blurDataURL,Z=J.src,!S){if(U||X){if(U&&!X){let Q=U/J.width;X=Math.round(J.height*Q)}else if(!U&&X){let $=X/J.height;U=Math.round(J.width*$)}}else U=J.width,X=J.height}}let K=!j&&("lazy"===w||void 0===w);((g="string"==typeof g?g:Z).startsWith("data:")||g.startsWith("blob:"))&&(v=!0,K=!1),M.unoptimized&&(v=!0),G&&g.endsWith(".svg")&&!M.dangerouslyAllowSVG&&(v=!0);let[Y,ee]=o.useState(!1),[et,er]=o.useState(!1),ea=h(y),en=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:P}:{},et?{}:{color:"transparent"},k),ei="blur"===L&&I&&!Y?{backgroundSize:en.objectFit||"cover",backgroundPosition:en.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:U,heightInt:X,blurWidth:r,blurHeight:n,blurDataURL:I}),'")')}:{},es=function(e){let{config:t,src:r,unoptimized:a,width:n,quality:i,sizes:s,loader:o}=e;if(a)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:a,allSizes:n}=e;if(r){let i=/(^|\s)(1?\d?\d)vw/g,s=[];for(let o;o=i.exec(r);o)s.push(parseInt(o[2]));if(s.length){let l=.01*Math.min(...s);return{widths:n.filter(e=>e>=a[0]*l),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:a,kind:"w"};let c=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:c,kind:"x"}}(t,n,s),d=l.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:l.map((e,a)=>"".concat(o({config:t,src:r,quality:i,width:e})," ").concat("w"===c?e:a+1).concat(c)).join(", "),src:o({config:t,src:r,quality:i,width:l[d]})}}({config:M,src:g,unoptimized:v,width:U,quality:ea,sizes:x,loader:T}),eo=g,el={imageSrcSet:es.srcSet,imageSizes:es.sizes,crossOrigin:B.crossOrigin},ec=o.useRef(C);o.useEffect(()=>{ec.current=C},[C]);let ed=o.useRef(z);o.useEffect(()=>{ed.current=z},[z]);let eu=a({isLazy:K,imgAttributes:es,heightInt:X,widthInt:U,qualityInt:ea,className:b,imgStyle:en,blurStyle:ei,loading:w,config:M,fill:S,unoptimized:v,placeholder:L,loader:T,srcString:eo,onLoadRef:ec,onLoadingCompleteRef:ed,setBlurComplete:ee,setShowAltText:er},B);return o.default.createElement(o.default.Fragment,null,o.default.createElement(_,Object.assign({},eu,{ref:t})),j?o.default.createElement(l.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+es.src+es.srcSet+es.sizes,rel:"preload",as:"image",href:es.srcSet?void 0:es.src},el))):null)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:a,blurHeight:n,blurDataURL:i}=e,s=a||t,o=n||r,l=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(a&&n?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(i,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:a,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(a,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},4186:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var a=r(5893),n=r(6340),i=r.n(n),s=r(9008),o=r.n(s),l=r(5675),c=r.n(l),d=r(1502),u=r.n(d);function m(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o(),{children:[(0,a.jsx)("title",{children:"Create Next App"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("main",{className:u().main,children:[(0,a.jsxs)("div",{className:u().description,children:[(0,a.jsxs)("p",{children:["Get started by editing\xa0",(0,a.jsx)("code",{className:u().code,children:"pages/index.tsx"})]}),(0,a.jsx)("div",{children:(0,a.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["By"," ",(0,a.jsx)(c(),{src:"/vercel.svg",alt:"Vercel Logo",className:u().vercelLogo,width:100,height:24,priority:!0})]})})]}),(0,a.jsxs)("div",{className:u().center,children:[(0,a.jsx)(c(),{className:u().logo,src:"/next.svg",alt:"Next.js Logo",width:180,height:37,priority:!0}),(0,a.jsx)("div",{className:u().thirteen,children:(0,a.jsx)(c(),{src:"/thirteen.svg",alt:"13",width:40,height:31,priority:!0})})]}),(0,a.jsxs)("div",{className:u().grid,children:[(0,a.jsxs)("a",{href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:i().className,children:["Docs ",(0,a.jsx)("span",{children:"->"})]}),(0,a.jsx)("p",{className:i().className,children:"Find in-depth information about Next.js features and\xa0API."})]}),(0,a.jsxs)("a",{href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:i().className,children:["Learn ",(0,a.jsx)("span",{children:"->"})]}),(0,a.jsx)("p",{className:i().className,children:"Learn about Next.js in an interactive course with\xa0quizzes!"})]}),(0,a.jsxs)("a",{href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:i().className,children:["Templates ",(0,a.jsx)("span",{children:"->"})]}),(0,a.jsx)("p",{className:i().className,children:"Discover and deploy boilerplate example Next.js\xa0projects."})]}),(0,a.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:i().className,children:["Deploy ",(0,a.jsx)("span",{children:"->"})]}),(0,a.jsx)("p",{className:i().className,children:"Instantly deploy your Next.js site to a shareable URL with\xa0Vercel."})]})]})]})]})}},6340:function(e){e.exports={style:{fontFamily:"'__Inter_9c9965', '__Inter_Fallback_9c9965'",fontStyle:"normal"},className:"__className_9c9965"}},1502:function(e){e.exports={main:"Home_main__nLjiQ",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",center:"Home_center__4BFgC",logo:"Home_logo__27_tb",thirteen:"Home_thirteen__cMI_k",rotate:"Home_rotate____XsI",content:"Home_content__Zy02X",vercelLogo:"Home_vercelLogo__dtSk9"}},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);
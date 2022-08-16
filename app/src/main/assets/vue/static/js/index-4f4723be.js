import{R as Z,S as E,n as C,t as w,u as B,r,A as D,U as J,D as x,c as L,d as p,e as y,V as _,P as R,h as q,i as Y,w as H,v as K,j as M,a as b,b as Q,I as W,E as ee,J as te,H as oe,T as ne,F as ae,O as se}from"./index-731042c6.js";import{o as le,h as ce,c as re,H as ie,I as ue}from"./index-ac3d55c5.js";import{p as N,a as de}from"./use-id-df39a5bc.js";function ve(e,{args:t=[],done:o,canceled:s}){if(e){const n=e.apply(null,t);Z(n)?n.then(a=>{a?o():s&&s()}).catch(E):n?o():s&&s()}else o()}const fe={show:Boolean,zIndex:C,overlay:w,duration:C,teleport:[String,Object],lockScroll:w,lazyRender:w,beforeClose:Function,overlayStyle:Object,overlayClass:B,transitionAppear:Boolean,closeOnClickOverlay:w};function he(e,t){return e>t?"horizontal":t>e?"vertical":""}function me(){const e=r(0),t=r(0),o=r(0),s=r(0),n=r(0),a=r(0),c=r(""),i=()=>c.value==="vertical",u=()=>c.value==="horizontal",I=()=>{o.value=0,s.value=0,n.value=0,a.value=0,c.value=""};return{move:d=>{const v=d.touches[0];o.value=(v.clientX<0?0:v.clientX)-e.value,s.value=v.clientY-t.value,n.value=Math.abs(o.value),a.value=Math.abs(s.value);const f=10;(!c.value||n.value<f&&a.value<f)&&(c.value=he(n.value,a.value))},start:d=>{I(),e.value=d.touches[0].clientX,t.value=d.touches[0].clientY},reset:I,startX:e,startY:t,deltaX:o,deltaY:s,offsetX:n,offsetY:a,direction:c,isVertical:i,isHorizontal:u}}let S=0;const A="van-overflow-hidden";function ye(e,t){const o=me(),s=u=>{o.move(u);const I=o.deltaY.value>0?"10":"01",P=ce(u.target,e.value),{scrollHeight:h,offsetHeight:d,scrollTop:v}=P;let f="11";v===0?f=d>=h?"00":"01":v+d>=h&&(f="10"),f!=="11"&&o.isVertical()&&!(parseInt(f,2)&parseInt(I,2))&&N(u,!0)},n=()=>{document.addEventListener("touchstart",o.start),document.addEventListener("touchmove",s,{passive:!1}),S||document.body.classList.add(A),S++},a=()=>{S&&(document.removeEventListener("touchstart",o.start),document.removeEventListener("touchmove",s),S--,S||document.body.classList.remove(A))},c=()=>t()&&n(),i=()=>t()&&a();le(c),D(i),J(i),x(t,u=>{u?n():a()})}function X(e){const t=r(!1);return x(e,o=>{o&&(t.value=o)},{immediate:!0}),o=>()=>t.value?o():null}const Ie=Symbol(),[we,Pe]=L("overlay"),Se={show:Boolean,zIndex:C,duration:C,className:B,lockScroll:w,lazyRender:w,customStyle:Object};var ke=p({name:we,props:Se,setup(e,{slots:t}){const o=X(()=>e.show||!e.lazyRender),s=a=>{N(a,!0)},n=o(()=>{var a;const c=R(q(e.zIndex),e.customStyle);return Y(e.duration)&&(c.animationDuration=`${e.duration}s`),H(y("div",{style:c,class:[Pe(),e.className],onTouchmove:e.lockScroll?s:E},[(a=t.default)==null?void 0:a.call(t)]),[[K,e.show]])});return()=>y(_,{name:"van-fade",appear:!0},{default:n})}});const Ce=M(ke),Oe=R({},fe,{round:Boolean,position:b("center"),closeIcon:b("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:b("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[be,T]=L("popup");let g=2e3;var xe=p({name:be,inheritAttrs:!1,props:Oe,emits:["open","close","opened","closed","keydown","update:show","click-overlay","click-close-icon"],setup(e,{emit:t,attrs:o,slots:s}){let n,a;const c=r(),i=r(),u=X(()=>e.show||!e.lazyRender),I=Q(()=>{const l={zIndex:c.value};if(Y(e.duration)){const m=e.position==="center"?"animationDuration":"transitionDuration";l[m]=`${e.duration}s`}return l}),P=()=>{n||(e.zIndex!==void 0&&(g=+e.zIndex),n=!0,c.value=++g,t("open"))},h=()=>{n&&ve(e.beforeClose,{done(){n=!1,t("close"),t("update:show",!1)}})},d=l=>{t("click-overlay",l),e.closeOnClickOverlay&&h()},v=()=>{if(e.overlay)return y(Ce,{show:e.show,class:e.overlayClass,zIndex:c.value,duration:e.duration,customStyle:e.overlayStyle,onClick:d},{default:s["overlay-content"]})},f=l=>{t("click-close-icon",l),h()},$=()=>{if(e.closeable)return y(ue,{role:"button",tabindex:0,name:e.closeIcon,class:[T("close-icon",e.closeIconPosition),ie],classPrefix:e.iconPrefix,onClick:f},null)},V=()=>t("opened"),j=()=>t("closed"),F=l=>t("keydown",l),U=u(()=>{var l;const{round:m,position:k,safeAreaInsetTop:O,safeAreaInsetBottom:G}=e;return H(y("div",se({ref:i,style:I.value,class:[T({round:m,[k]:k}),{"van-safe-area-top":O,"van-safe-area-bottom":G}],onKeydown:F},o),[(l=s.default)==null?void 0:l.call(s),$()]),[[K,e.show]])}),z=()=>{const{position:l,transition:m,transitionAppear:k}=e,O=l==="center"?"van-fade":`van-popup-slide-${l}`;return y(_,{name:m||O,appear:k,onAfterEnter:V,onAfterLeave:j},{default:U})};return x(()=>e.show,l=>{l&&!n&&(P(),o.tabindex===0&&W(()=>{var m;(m=i.value)==null||m.focus()})),!l&&n&&(n=!1,t("close"))}),de({popupRef:i}),ye(i,()=>e.show&&e.lockScroll),re("popstate",()=>{e.closeOnPopstate&&(h(),a=!1)}),ee(()=>{e.show&&P()}),te(()=>{a&&(t("update:show",!0),a=!1)}),D(()=>{e.show&&e.teleport&&(h(),a=!0)}),oe(Ie,()=>e.show),()=>e.teleport?y(ne,{to:e.teleport},{default:()=>[v(),z()]}):y(ae,null,[v(),z()])}});const ge=M(xe);export{ge as P};
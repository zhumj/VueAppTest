import{r as L,f as S,I as b}from"./index-cd868d1f.js";import{c as I,n as s,t as y,u,z as B,d as D,e as a,i as r,j as V}from"./index-85da76be.js";const[z,t]=I("cell"),_={icon:String,size:String,title:s,value:s,label:s,center:Boolean,isLink:Boolean,border:y,required:Boolean,iconPrefix:String,valueClass:u,labelClass:u,titleClass:u,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},q=B({},_,L);var N=D({name:z,props:q,setup(e,{slots:l}){const f=S(),v=()=>{if(l.label||r(e.label))return a("div",{class:[t("label"),e.labelClass]},[l.label?l.label():e.label])},h=()=>{if(l.title||r(e.title))return a("div",{class:[t("title"),e.titleClass],style:e.titleStyle},[l.title?l.title():a("span",null,[e.title]),v()])},m=()=>{const n=l.value||l.default;if(n||r(e.value)){const i=l.title||r(e.title);return a("div",{class:[t("value",{alone:!i}),e.valueClass]},[n?n():a("span",null,[e.value])])}},C=()=>{if(l.icon)return l.icon();if(e.icon)return a(b,{name:e.icon,class:t("left-icon"),classPrefix:e.iconPrefix},null)},w=()=>{if(l["right-icon"])return l["right-icon"]();if(e.isLink){const n=e.arrowDirection?`arrow-${e.arrowDirection}`:"arrow";return a(b,{name:n,class:t("right-icon")},null)}};return()=>{var n,c;const{size:i,center:P,border:g,isLink:k,required:x}=e,o=(n=e.clickable)!=null?n:k,d={center:P,required:x,clickable:o,borderless:!g};return i&&(d[i]=!!i),a("div",{class:t(d),role:o?"button":void 0,tabindex:o?0:void 0,onClick:f},[C(),h(),m(),w(),(c=l.extra)==null?void 0:c.call(l)])}}});const j=V(N);export{j as C,_ as c};
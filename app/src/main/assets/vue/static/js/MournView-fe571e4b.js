import{c as k,n as h,u as _,d as C,N as w,e as t,j as b,Y as x,k as y,l as v,q as F,p as f,Z as B}from"./index-42591137.js";import{C as N,a as S}from"./index-ac4acb99.js";import{i as L,N as z}from"./index-1a4e2a76.js";import{L as M}from"./index-d785d473.js";const[A,m]=k("switch"),E={size:h,loading:Boolean,disabled:Boolean,modelValue:_,activeColor:String,inactiveColor:String,activeValue:{type:_,default:!0},inactiveValue:{type:_,default:!1}};var G=C({name:A,props:E,emits:["change","update:modelValue"],setup(e,{emit:n,slots:o}){const l=()=>e.modelValue===e.activeValue,i=()=>{if(!e.disabled&&!e.loading){const a=l()?e.inactiveValue:e.activeValue;n("update:modelValue",a),n("change",a)}},s=()=>{if(e.loading){const a=l()?e.activeColor:e.inactiveColor;return t(M,{class:m("loading"),color:a},null)}if(o.node)return o.node()};return L(()=>e.modelValue),()=>{var a;const{size:r,loading:u,disabled:c,activeColor:V,inactiveColor:g}=e,d=l(),p={fontSize:w(r),backgroundColor:d?V:g};return t("div",{role:"switch",class:m({on:d,loading:u,disabled:c}),style:p,tabindex:c?void 0:0,"aria-checked":d,onClick:i},[t("div",{class:m("node")},[s()]),(a=o.background)==null?void 0:a.call(o)])}}});const P=b(G);const q=C({__name:"MournView",setup(e){const n=x(),o=()=>{B.back()};return(l,i)=>{const s=z,a=P,r=N,u=S;return F(),y("div",null,[t(s,{title:"\u7070\u5EA6\u60BC\u5FF5","left-text":"\u8FD4\u56DE",border:!1,"left-arrow":"",fixed:"",placeholder:"",onClickLeft:o}),t(u,{inset:"",style:{"margin-top":"24px"}},{default:v(()=>[t(r,{title:"\u60BC\u5FF5\u6A21\u5F0F","title-class":"cell_title",center:""},{"right-icon":v(()=>[t(a,{modelValue:f(n).$state.isGrayMode,"onUpdate:modelValue":i[0]||(i[0]=c=>f(n).$state.isGrayMode=c),size:"24"},null,8,["modelValue"])]),_:1})]),_:1})])}}});export{q as default};
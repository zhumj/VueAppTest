import{c as y,a as w,t as L,m as $,d as V,b as x,e as c,n as S,j as N,r as g,C as m,k as b,o as h,l as C,q as k,F as D,s as F,Z as A,a7 as I}from"./index-e392ada0.js";import"./index-9c6ceaa6.js";import{F as O}from"./index-da21fc10.js";import{u as R,e as U,N as q}from"./index-9b715166.js";import"./use-expose-217e939b.js";import"./use-id-998a80c9.js";const[P,K]=y("row"),j=Symbol(P),T={tag:w("div"),wrap:L,align:String,gutter:$(0),justify:String};var W=V({name:P,props:T,setup(d,{slots:i}){const{children:v,linkChildren:u}=R(j),f=x(()=>{const t=[[]];let a=0;return v.forEach((r,e)=>{a+=Number(r.span),a>24?(t.push([e]),a-=24):t[t.length-1].push(e)}),t}),l=x(()=>{const t=Number(d.gutter),a=[];return t&&f.value.forEach(r=>{const e=t*(r.length-1)/r.length;r.forEach((s,o)=>{if(o===0)a.push({right:e});else{const n=t-a[s-1].right,_=e-n;a.push({left:n,right:_})}})}),a});return u({spaces:l}),()=>{const{tag:t,wrap:a,align:r,justify:e}=d;return c(t,{class:K({[`align-${r}`]:r,[`justify-${e}`]:e,nowrap:!a})},{default:()=>{var s;return[(s=i.default)==null?void 0:s.call(i)]}})}}});const[Y,Z]=y("col"),z={tag:w("div"),span:$(0),offset:S};var G=V({name:Y,props:z,setup(d,{slots:i}){const{parent:v,index:u}=U(j),f=x(()=>{if(!v)return;const{spaces:l}=v;if(l&&l.value&&l.value[u.value]){const{left:t,right:a}=l.value[u.value];return{paddingLeft:t?`${t}px`:null,paddingRight:a?`${a}px`:null}}});return()=>{const{tag:l,span:t,offset:a}=d;return c(l,{style:f.value,class:Z({[t]:t,[`offset-${a}`]:a})},{default:()=>{var r;return[(r=i.default)==null?void 0:r.call(i)]}})}}});const H=N(G),J=N(W);const M={class:"container"},Q={class:"content_top"},X={class:"content_buttom_item_content"},ue=V({__name:"SimpleCalculator",setup(d){const i={fieldInputTextColor:"#a9a9a9"},v=["(",")","DEL","AC","1","2","3","/","4","5","6","*","7","8","9","-","0",".","=","+"],u=g("0"),f=g("0"),l=g(["0"]),t=()=>{A.back()};function a(e){const s=l.value,o=s.length,n=s[o-1];if(!(o==1&&n=="0"&&(e==")"||e=="+"||e=="-"||e=="*"||e=="/"||e=="="))&&!(n=="("&&(e=="("||e==")"||e=="+"||e=="-"||e=="*"||e=="/"||e=="="))&&!(n==")"&&e!="+"&&e!="-"&&e!="*"&&e!="/"&&e!="=")){if(n=="/"||n=="*"||n=="-"||n=="+"){if(e=="+"||e=="-"||e=="*"||e=="/"){l.value.splice(o-1,1,e),u.value=l.value.join("");return}else if(e==")"||e=="=")return}if(e=="AC")l.value.length=0,l.value.push("0"),u.value=l.value.join("");else if(e=="DEL")o>1?n.length>1?l.value.splice(o-1,1,n.slice(0,n.length-1)):l.value.splice(o-1,1):n.length>1?l.value.splice(o-1,1,n.slice(0,n.length-1)):l.value.splice(0,1,"0"),u.value=l.value.join("");else if(e=="=")f.value=u.value+e,u.value=r(),l.value.length=0,l.value.push(u.value);else{if(e=="("&&!(o==1&&n=="0")&&n!="/"&&n!="*"&&n!="-"&&n!="+")return;if(e==")")if(s.indexOf("(")!=-1){if(s.slice(s.lastIndexOf("("),o).indexOf(")")!=-1||n=="("||n==")"||n=="+"||n=="-"||n=="*"||n=="/")return}else return;if(e=="."&&(n=="("||n==")"||n=="+"||n=="-"||n=="*"||n=="/"||n.includes(".")))return;o==1&&n=="0"&&e!="."?l.value=[e]:n=="("||n==")"||n=="/"||n=="*"||n=="-"||n=="+"||e=="("||e==")"||e=="/"||e=="*"||e=="-"||e=="+"?l.value.push(e):l.value.splice(o-1,1,n+e),u.value=l.value.join("")}}}function r(){return"1"}return(e,s)=>{const o=q,n=O,_=m,B=H,E=J;return k(),b("div",null,[c(o,{title:"\u7B80\u5355\u7684\u8BA1\u7B97\u5668(\u672A\u5B8C)","left-text":"\u8FD4\u56DE",border:!1,"left-arrow":"",fixed:"",placeholder:"",onClickLeft:t}),h("div",M,[h("div",Q,[c(_,{"theme-vars":i},{default:C(()=>[c(n,{class:"content_top_output",modelValue:f.value,"onUpdate:modelValue":s[0]||(s[0]=p=>f.value=p),readonly:"","input-align":"right",border:!1},null,8,["modelValue"])]),_:1}),c(n,{class:"content_top_input",modelValue:u.value,"onUpdate:modelValue":s[1]||(s[1]=p=>u.value=p),readonly:"","input-align":"right",border:!1},null,8,["modelValue"])]),c(E,null,{default:C(()=>[(k(),b(D,null,F(v,p=>c(B,{class:"content_buttom_item",span:"6",key:p,onClick:ee=>a(p)},{default:C(()=>[h("div",X,I(p),1)]),_:2},1032,["onClick"])),64))]),_:1})])])}}});export{ue as default};
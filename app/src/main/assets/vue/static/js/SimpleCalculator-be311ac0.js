import{c as Ae,a as Se,t as De,m as Be,d as _e,b as ve,e as ne,n as Le,j as Ce,r as ae,C as Re,k as Ee,o as he,l as pe,q as me,F as Te,s as Me,Z as Ue,a7 as ye}from"./index-85da76be.js";import"./index-dc72929d.js";import{F as Fe}from"./index-ff38f54f.js";import{u as Ve,e as Ge,N as $e}from"./index-cd868d1f.js";import"./use-expose-2f585cb0.js";import"./use-id-a26b2d01.js";const[Pe,qe]=Ae("row"),ke=Symbol(Pe),ze={tag:Se("div"),wrap:De,align:String,gutter:Be(0),justify:String};var He=_e({name:Pe,props:ze,setup(N,{slots:_}){const{children:I,linkChildren:S}=Ve(ke),p=ve(()=>{const O=[[]];let A=0;return I.forEach((D,R)=>{A+=Number(D.span),A>24?(O.push([R]),A-=24):O[O.length-1].push(R)}),O}),E=ve(()=>{const O=Number(N.gutter),A=[];return O&&p.value.forEach(D=>{const R=O*(D.length-1)/D.length;D.forEach((V,g)=>{if(g===0)A.push({right:R});else{const B=O-A[V-1].right,m=R-B;A.push({left:B,right:m})}})}),A});return S({spaces:E}),()=>{const{tag:O,wrap:A,align:D,justify:R}=N;return ne(O,{class:qe({[`align-${D}`]:D,[`justify-${R}`]:R,nowrap:!A})},{default:()=>{var V;return[(V=_.default)==null?void 0:V.call(_)]}})}}});const[Xe,We]=Ae("col"),je={tag:Se("div"),span:Be(0),offset:Le};var Ye=_e({name:Xe,props:je,setup(N,{slots:_}){const{parent:I,index:S}=Ge(ke),p=ve(()=>{if(!I)return;const{spaces:E}=I;if(E&&E.value&&E.value[S.value]){const{left:O,right:A}=E.value[S.value];return{paddingLeft:O?`${O}px`:null,paddingRight:A?`${A}px`:null}}});return()=>{const{tag:E,span:O,offset:A}=N;return ne(E,{style:p.value,class:We({[O]:O,[`offset-${A}`]:A})},{default:()=>{var D;return[(D=_.default)==null?void 0:D.call(_)]}})}}});const Ze=Ce(Ye),Je=Ce(He);var Ke=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,ge=Math.ceil,K=Math.floor,z="[BigNumber Error] ",Oe=z+"Number primitive has more than 15 significant digits: ",Y=1e14,x=14,de=9007199254740991,we=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],ee=1e7,F=1e9;function Ie(N){var _,I,S,p=h.prototype={constructor:h,toString:null,valueOf:null},E=new h(1),O=20,A=4,D=-7,R=21,V=-1e7,g=1e7,B=!1,m=1,d=0,k={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xA0",suffix:""},q="0123456789abcdefghijklmnopqrstuvwxyz",Z=!0;function h(e,n){var r,o,i,s,c,t,l,u,f=this;if(!(f instanceof h))return new h(e,n);if(n==null){if(e&&e._isBigNumber===!0){f.s=e.s,!e.c||e.e>g?f.c=f.e=null:e.e<V?f.c=[f.e=0]:(f.e=e.e,f.c=e.c.slice());return}if((t=typeof e=="number")&&e*0==0){if(f.s=1/e<0?(e=-e,-1):1,e===~~e){for(s=0,c=e;c>=10;c/=10,s++);s>g?f.c=f.e=null:(f.e=s,f.c=[e]);return}u=String(e)}else{if(!Ke.test(u=String(e)))return S(f,u,t);f.s=u.charCodeAt(0)==45?(u=u.slice(1),-1):1}(s=u.indexOf("."))>-1&&(u=u.replace(".","")),(c=u.search(/e/i))>0?(s<0&&(s=c),s+=+u.slice(c+1),u=u.substring(0,c)):s<0&&(s=u.length)}else{if(T(n,2,q.length,"Base"),n==10&&Z)return f=new h(e),H(f,O+f.e+1,A);if(u=String(e),t=typeof e=="number"){if(e*0!=0)return S(f,u,t,n);if(f.s=1/e<0?(u=u.slice(1),-1):1,h.DEBUG&&u.replace(/^0\.0*|\./,"").length>15)throw Error(Oe+e)}else f.s=u.charCodeAt(0)===45?(u=u.slice(1),-1):1;for(r=q.slice(0,n),s=c=0,l=u.length;c<l;c++)if(r.indexOf(o=u.charAt(c))<0){if(o=="."){if(c>s){s=l;continue}}else if(!i&&(u==u.toUpperCase()&&(u=u.toLowerCase())||u==u.toLowerCase()&&(u=u.toUpperCase()))){i=!0,c=-1,s=0;continue}return S(f,String(e),t,n)}t=!1,u=I(u,n,10,f.s),(s=u.indexOf("."))>-1?u=u.replace(".",""):s=u.length}for(c=0;u.charCodeAt(c)===48;c++);for(l=u.length;u.charCodeAt(--l)===48;);if(u=u.slice(c,++l)){if(l-=c,t&&h.DEBUG&&l>15&&(e>de||e!==K(e)))throw Error(Oe+f.s*e);if((s=s-c-1)>g)f.c=f.e=null;else if(s<V)f.c=[f.e=0];else{if(f.e=s,f.c=[],c=(s+1)%x,s<0&&(c+=x),c<l){for(c&&f.c.push(+u.slice(0,c)),l-=x;c<l;)f.c.push(+u.slice(c,c+=x));c=x-(u=u.slice(c)).length}else c-=l;for(;c--;u+="0");f.c.push(+u)}}else f.c=[f.e=0]}h.clone=Ie,h.ROUND_UP=0,h.ROUND_DOWN=1,h.ROUND_CEIL=2,h.ROUND_FLOOR=3,h.ROUND_HALF_UP=4,h.ROUND_HALF_DOWN=5,h.ROUND_HALF_EVEN=6,h.ROUND_HALF_CEIL=7,h.ROUND_HALF_FLOOR=8,h.EUCLID=9,h.config=h.set=function(e){var n,r;if(e!=null)if(typeof e=="object"){if(e.hasOwnProperty(n="DECIMAL_PLACES")&&(r=e[n],T(r,0,F,n),O=r),e.hasOwnProperty(n="ROUNDING_MODE")&&(r=e[n],T(r,0,8,n),A=r),e.hasOwnProperty(n="EXPONENTIAL_AT")&&(r=e[n],r&&r.pop?(T(r[0],-F,0,n),T(r[1],0,F,n),D=r[0],R=r[1]):(T(r,-F,F,n),D=-(R=r<0?-r:r))),e.hasOwnProperty(n="RANGE"))if(r=e[n],r&&r.pop)T(r[0],-F,-1,n),T(r[1],1,F,n),V=r[0],g=r[1];else if(T(r,-F,F,n),r)V=-(g=r<0?-r:r);else throw Error(z+n+" cannot be zero: "+r);if(e.hasOwnProperty(n="CRYPTO"))if(r=e[n],r===!!r)if(r)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))B=r;else throw B=!r,Error(z+"crypto unavailable");else B=r;else throw Error(z+n+" not true or false: "+r);if(e.hasOwnProperty(n="MODULO_MODE")&&(r=e[n],T(r,0,9,n),m=r),e.hasOwnProperty(n="POW_PRECISION")&&(r=e[n],T(r,0,F,n),d=r),e.hasOwnProperty(n="FORMAT"))if(r=e[n],typeof r=="object")k=r;else throw Error(z+n+" not an object: "+r);if(e.hasOwnProperty(n="ALPHABET"))if(r=e[n],typeof r=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(r))Z=r.slice(0,10)=="0123456789",q=r;else throw Error(z+n+" invalid: "+r)}else throw Error(z+"Object expected: "+e);return{DECIMAL_PLACES:O,ROUNDING_MODE:A,EXPONENTIAL_AT:[D,R],RANGE:[V,g],CRYPTO:B,MODULO_MODE:m,POW_PRECISION:d,FORMAT:k,ALPHABET:q}},h.isBigNumber=function(e){if(!e||e._isBigNumber!==!0)return!1;if(!h.DEBUG)return!0;var n,r,o=e.c,i=e.e,s=e.s;e:if({}.toString.call(o)=="[object Array]"){if((s===1||s===-1)&&i>=-F&&i<=F&&i===K(i)){if(o[0]===0){if(i===0&&o.length===1)return!0;break e}if(n=(i+1)%x,n<1&&(n+=x),String(o[0]).length==n){for(n=0;n<o.length;n++)if(r=o[n],r<0||r>=Y||r!==K(r))break e;if(r!==0)return!0}}}else if(o===null&&i===null&&(s===null||s===1||s===-1))return!0;throw Error(z+"Invalid BigNumber: "+e)},h.maximum=h.max=function(){return Ne(arguments,p.lt)},h.minimum=h.min=function(){return Ne(arguments,p.gt)},h.random=function(){var e=9007199254740992,n=Math.random()*e&2097151?function(){return K(Math.random()*e)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(r){var o,i,s,c,t,l=0,u=[],f=new h(E);if(r==null?r=O:T(r,0,F),c=ge(r/x),B)if(crypto.getRandomValues){for(o=crypto.getRandomValues(new Uint32Array(c*=2));l<c;)t=o[l]*131072+(o[l+1]>>>11),t>=9e15?(i=crypto.getRandomValues(new Uint32Array(2)),o[l]=i[0],o[l+1]=i[1]):(u.push(t%1e14),l+=2);l=c/2}else if(crypto.randomBytes){for(o=crypto.randomBytes(c*=7);l<c;)t=(o[l]&31)*281474976710656+o[l+1]*1099511627776+o[l+2]*4294967296+o[l+3]*16777216+(o[l+4]<<16)+(o[l+5]<<8)+o[l+6],t>=9e15?crypto.randomBytes(7).copy(o,l):(u.push(t%1e14),l+=7);l=c/7}else throw B=!1,Error(z+"crypto unavailable");if(!B)for(;l<c;)t=n(),t<9e15&&(u[l++]=t%1e14);for(c=u[--l],r%=x,c&&r&&(t=we[x-r],u[l]=K(c/t)*t);u[l]===0;u.pop(),l--);if(l<0)u=[s=0];else{for(s=-1;u[0]===0;u.splice(0,1),s-=x);for(l=1,t=u[0];t>=10;t/=10,l++);l<x&&(s-=x-l)}return f.e=s,f.c=u,f}}(),h.sum=function(){for(var e=1,n=arguments,r=new h(n[0]);e<n.length;)r=r.plus(n[e++]);return r},I=function(){var e="0123456789";function n(r,o,i,s){for(var c,t=[0],l,u=0,f=r.length;u<f;){for(l=t.length;l--;t[l]*=o);for(t[0]+=s.indexOf(r.charAt(u++)),c=0;c<t.length;c++)t[c]>i-1&&(t[c+1]==null&&(t[c+1]=0),t[c+1]+=t[c]/i|0,t[c]%=i)}return t.reverse()}return function(r,o,i,s,c){var t,l,u,f,a,w,v,P,M=r.indexOf("."),y=O,C=A;for(M>=0&&(f=d,d=0,r=r.replace(".",""),P=new h(o),w=P.pow(r.length-M),d=f,P.c=n(b(W(w.c),w.e,"0"),10,i,e),P.e=P.c.length),v=n(r,o,i,c?(t=q,e):(t=e,q)),u=f=v.length;v[--f]==0;v.pop());if(!v[0])return t.charAt(0);if(M<0?--u:(w.c=v,w.e=u,w.s=s,w=_(w,P,y,C,i),v=w.c,a=w.r,u=w.e),l=u+y+1,M=v[l],f=i/2,a=a||l<0||v[l+1]!=null,a=C<4?(M!=null||a)&&(C==0||C==(w.s<0?3:2)):M>f||M==f&&(C==4||a||C==6&&v[l-1]&1||C==(w.s<0?8:7)),l<1||!v[0])r=a?b(t.charAt(1),-y,t.charAt(0)):t.charAt(0);else{if(v.length=l,a)for(--i;++v[--l]>i;)v[l]=0,l||(++u,v=[1].concat(v));for(f=v.length;!v[--f];);for(M=0,r="";M<=f;r+=t.charAt(v[M++]));r=b(r,u,t.charAt(0))}return r}}(),_=function(){function e(o,i,s){var c,t,l,u,f=0,a=o.length,w=i%ee,v=i/ee|0;for(o=o.slice();a--;)l=o[a]%ee,u=o[a]/ee|0,c=v*l+u*w,t=w*l+c%ee*ee+f,f=(t/s|0)+(c/ee|0)+v*u,o[a]=t%s;return f&&(o=[f].concat(o)),o}function n(o,i,s,c){var t,l;if(s!=c)l=s>c?1:-1;else for(t=l=0;t<s;t++)if(o[t]!=i[t]){l=o[t]>i[t]?1:-1;break}return l}function r(o,i,s,c){for(var t=0;s--;)o[s]-=t,t=o[s]<i[s]?1:0,o[s]=t*c+o[s]-i[s];for(;!o[0]&&o.length>1;o.splice(0,1));}return function(o,i,s,c,t){var l,u,f,a,w,v,P,M,y,C,L,G,le,ue,ce,J,te,X=o.s==i.s?1:-1,$=o.c,U=i.c;if(!$||!$[0]||!U||!U[0])return new h(!o.s||!i.s||($?U&&$[0]==U[0]:!U)?NaN:$&&$[0]==0||!U?X*0:X/0);for(M=new h(X),y=M.c=[],u=o.e-i.e,X=s+u+1,t||(t=Y,u=j(o.e/x)-j(i.e/x),X=X/x|0),f=0;U[f]==($[f]||0);f++);if(U[f]>($[f]||0)&&u--,X<0)y.push(1),a=!0;else{for(ue=$.length,J=U.length,f=0,X+=2,w=K(t/(U[0]+1)),w>1&&(U=e(U,w,t),$=e($,w,t),J=U.length,ue=$.length),le=J,C=$.slice(0,J),L=C.length;L<J;C[L++]=0);te=U.slice(),te=[0].concat(te),ce=U[0],U[1]>=t/2&&ce++;do{if(w=0,l=n(U,C,J,L),l<0){if(G=C[0],J!=L&&(G=G*t+(C[1]||0)),w=K(G/ce),w>1)for(w>=t&&(w=t-1),v=e(U,w,t),P=v.length,L=C.length;n(v,C,P,L)==1;)w--,r(v,J<P?te:U,P,t),P=v.length,l=1;else w==0&&(l=w=1),v=U.slice(),P=v.length;if(P<L&&(v=[0].concat(v)),r(C,v,L,t),L=C.length,l==-1)for(;n(U,C,J,L)<1;)w++,r(C,J<L?te:U,L,t),L=C.length}else l===0&&(w++,C=[0]);y[f++]=w,C[0]?C[L++]=$[le]||0:(C=[$[le]],L=1)}while((le++<ue||C[0]!=null)&&X--);a=C[0]!=null,y[0]||y.splice(0,1)}if(t==Y){for(f=1,X=y[0];X>=10;X/=10,f++);H(M,s+(M.e=f+u*x-1)+1,c,a)}else M.e=u,M.r=+a;return M}}();function ie(e,n,r,o){var i,s,c,t,l;if(r==null?r=A:T(r,0,8),!e.c)return e.toString();if(i=e.c[0],c=e.e,n==null)l=W(e.c),l=o==1||o==2&&(c<=D||c>=R)?fe(l,c):b(l,c,"0");else if(e=H(new h(e),n,r),s=e.e,l=W(e.c),t=l.length,o==1||o==2&&(n<=s||s<=D)){for(;t<n;l+="0",t++);l=fe(l,s)}else if(n-=c,l=b(l,s,"0"),s+1>t){if(--n>0)for(l+=".";n--;l+="0");}else if(n+=s-t,n>0)for(s+1==t&&(l+=".");n--;l+="0");return e.s<0&&i?"-"+l:l}function Ne(e,n){for(var r,o=1,i=new h(e[0]);o<e.length;o++)if(r=new h(e[o]),r.s)n.call(i,r)&&(i=r);else{i=r;break}return i}function oe(e,n,r){for(var o=1,i=n.length;!n[--i];n.pop());for(i=n[0];i>=10;i/=10,o++);return(r=o+r*x-1)>g?e.c=e.e=null:r<V?e.c=[e.e=0]:(e.e=r,e.c=n),e}S=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,n=/^([^.]+)\.$/,r=/^\.([^.]+)$/,o=/^-?(Infinity|NaN)$/,i=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(s,c,t,l){var u,f=t?c:c.replace(i,"");if(o.test(f))s.s=isNaN(f)?null:f<0?-1:1;else{if(!t&&(f=f.replace(e,function(a,w,v){return u=(v=v.toLowerCase())=="x"?16:v=="b"?2:8,!l||l==u?w:a}),l&&(u=l,f=f.replace(n,"$1").replace(r,"0.$1")),c!=f))return new h(f,u);if(h.DEBUG)throw Error(z+"Not a"+(l?" base "+l:"")+" number: "+c);s.s=null}s.c=s.e=null}}();function H(e,n,r,o){var i,s,c,t,l,u,f,a=e.c,w=we;if(a){e:{for(i=1,t=a[0];t>=10;t/=10,i++);if(s=n-i,s<0)s+=x,c=n,l=a[u=0],f=l/w[i-c-1]%10|0;else if(u=ge((s+1)/x),u>=a.length)if(o){for(;a.length<=u;a.push(0));l=f=0,i=1,s%=x,c=s-x+1}else break e;else{for(l=t=a[u],i=1;t>=10;t/=10,i++);s%=x,c=s-x+i,f=c<0?0:l/w[i-c-1]%10|0}if(o=o||n<0||a[u+1]!=null||(c<0?l:l%w[i-c-1]),o=r<4?(f||o)&&(r==0||r==(e.s<0?3:2)):f>5||f==5&&(r==4||o||r==6&&(s>0?c>0?l/w[i-c]:0:a[u-1])%10&1||r==(e.s<0?8:7)),n<1||!a[0])return a.length=0,o?(n-=e.e+1,a[0]=w[(x-n%x)%x],e.e=-n||0):a[0]=e.e=0,e;if(s==0?(a.length=u,t=1,u--):(a.length=u+1,t=w[x-s],a[u]=c>0?K(l/w[i-c]%w[c])*t:0),o)for(;;)if(u==0){for(s=1,c=a[0];c>=10;c/=10,s++);for(c=a[0]+=t,t=1;c>=10;c/=10,t++);s!=t&&(e.e++,a[0]==Y&&(a[0]=1));break}else{if(a[u]+=t,a[u]!=Y)break;a[u--]=0,t=1}for(s=a.length;a[--s]===0;a.pop());}e.e>g?e.c=e.e=null:e.e<V&&(e.c=[e.e=0])}return e}function Q(e){var n,r=e.e;return r===null?e.toString():(n=W(e.c),n=r<=D||r>=R?fe(n,r):b(n,r,"0"),e.s<0?"-"+n:n)}return p.absoluteValue=p.abs=function(){var e=new h(this);return e.s<0&&(e.s=1),e},p.comparedTo=function(e,n){return re(this,new h(e,n))},p.decimalPlaces=p.dp=function(e,n){var r,o,i,s=this;if(e!=null)return T(e,0,F),n==null?n=A:T(n,0,8),H(new h(s),e+s.e+1,n);if(!(r=s.c))return null;if(o=((i=r.length-1)-j(this.e/x))*x,i=r[i])for(;i%10==0;i/=10,o--);return o<0&&(o=0),o},p.dividedBy=p.div=function(e,n){return _(this,new h(e,n),O,A)},p.dividedToIntegerBy=p.idiv=function(e,n){return _(this,new h(e,n),0,1)},p.exponentiatedBy=p.pow=function(e,n){var r,o,i,s,c,t,l,u,f,a=this;if(e=new h(e),e.c&&!e.isInteger())throw Error(z+"Exponent not an integer: "+Q(e));if(n!=null&&(n=new h(n)),t=e.e>14,!a.c||!a.c[0]||a.c[0]==1&&!a.e&&a.c.length==1||!e.c||!e.c[0])return f=new h(Math.pow(+Q(a),t?2-se(e):+Q(e))),n?f.mod(n):f;if(l=e.s<0,n){if(n.c?!n.c[0]:!n.s)return new h(NaN);o=!l&&a.isInteger()&&n.isInteger(),o&&(a=a.mod(n))}else{if(e.e>9&&(a.e>0||a.e<-1||(a.e==0?a.c[0]>1||t&&a.c[1]>=24e7:a.c[0]<8e13||t&&a.c[0]<=9999975e7)))return s=a.s<0&&se(e)?-0:0,a.e>-1&&(s=1/s),new h(l?1/s:s);d&&(s=ge(d/x+2))}for(t?(r=new h(.5),l&&(e.s=1),u=se(e)):(i=Math.abs(+Q(e)),u=i%2),f=new h(E);;){if(u){if(f=f.times(a),!f.c)break;s?f.c.length>s&&(f.c.length=s):o&&(f=f.mod(n))}if(i){if(i=K(i/2),i===0)break;u=i%2}else if(e=e.times(r),H(e,e.e+1,1),e.e>14)u=se(e);else{if(i=+Q(e),i===0)break;u=i%2}a=a.times(a),s?a.c&&a.c.length>s&&(a.c.length=s):o&&(a=a.mod(n))}return o?f:(l&&(f=E.div(f)),n?f.mod(n):s?H(f,d,A,c):f)},p.integerValue=function(e){var n=new h(this);return e==null?e=A:T(e,0,8),H(n,n.e+1,e)},p.isEqualTo=p.eq=function(e,n){return re(this,new h(e,n))===0},p.isFinite=function(){return!!this.c},p.isGreaterThan=p.gt=function(e,n){return re(this,new h(e,n))>0},p.isGreaterThanOrEqualTo=p.gte=function(e,n){return(n=re(this,new h(e,n)))===1||n===0},p.isInteger=function(){return!!this.c&&j(this.e/x)>this.c.length-2},p.isLessThan=p.lt=function(e,n){return re(this,new h(e,n))<0},p.isLessThanOrEqualTo=p.lte=function(e,n){return(n=re(this,new h(e,n)))===-1||n===0},p.isNaN=function(){return!this.s},p.isNegative=function(){return this.s<0},p.isPositive=function(){return this.s>0},p.isZero=function(){return!!this.c&&this.c[0]==0},p.minus=function(e,n){var r,o,i,s,c=this,t=c.s;if(e=new h(e,n),n=e.s,!t||!n)return new h(NaN);if(t!=n)return e.s=-n,c.plus(e);var l=c.e/x,u=e.e/x,f=c.c,a=e.c;if(!l||!u){if(!f||!a)return f?(e.s=-n,e):new h(a?c:NaN);if(!f[0]||!a[0])return a[0]?(e.s=-n,e):new h(f[0]?c:A==3?-0:0)}if(l=j(l),u=j(u),f=f.slice(),t=l-u){for((s=t<0)?(t=-t,i=f):(u=l,i=a),i.reverse(),n=t;n--;i.push(0));i.reverse()}else for(o=(s=(t=f.length)<(n=a.length))?t:n,t=n=0;n<o;n++)if(f[n]!=a[n]){s=f[n]<a[n];break}if(s&&(i=f,f=a,a=i,e.s=-e.s),n=(o=a.length)-(r=f.length),n>0)for(;n--;f[r++]=0);for(n=Y-1;o>t;){if(f[--o]<a[o]){for(r=o;r&&!f[--r];f[r]=n);--f[r],f[o]+=Y}f[o]-=a[o]}for(;f[0]==0;f.splice(0,1),--u);return f[0]?oe(e,f,u):(e.s=A==3?-1:1,e.c=[e.e=0],e)},p.modulo=p.mod=function(e,n){var r,o,i=this;return e=new h(e,n),!i.c||!e.s||e.c&&!e.c[0]?new h(NaN):!e.c||i.c&&!i.c[0]?new h(i):(m==9?(o=e.s,e.s=1,r=_(i,e,0,3),e.s=o,r.s*=o):r=_(i,e,0,m),e=i.minus(r.times(e)),!e.c[0]&&m==1&&(e.s=i.s),e)},p.multipliedBy=p.times=function(e,n){var r,o,i,s,c,t,l,u,f,a,w,v,P,M,y,C=this,L=C.c,G=(e=new h(e,n)).c;if(!L||!G||!L[0]||!G[0])return!C.s||!e.s||L&&!L[0]&&!G||G&&!G[0]&&!L?e.c=e.e=e.s=null:(e.s*=C.s,!L||!G?e.c=e.e=null:(e.c=[0],e.e=0)),e;for(o=j(C.e/x)+j(e.e/x),e.s*=C.s,l=L.length,a=G.length,l<a&&(P=L,L=G,G=P,i=l,l=a,a=i),i=l+a,P=[];i--;P.push(0));for(M=Y,y=ee,i=a;--i>=0;){for(r=0,w=G[i]%y,v=G[i]/y|0,c=l,s=i+c;s>i;)u=L[--c]%y,f=L[c]/y|0,t=v*u+f*w,u=w*u+t%y*y+P[s]+r,r=(u/M|0)+(t/y|0)+v*f,P[s--]=u%M;P[s]=r}return r?++o:P.splice(0,1),oe(e,P,o)},p.negated=function(){var e=new h(this);return e.s=-e.s||null,e},p.plus=function(e,n){var r,o=this,i=o.s;if(e=new h(e,n),n=e.s,!i||!n)return new h(NaN);if(i!=n)return e.s=-n,o.minus(e);var s=o.e/x,c=e.e/x,t=o.c,l=e.c;if(!s||!c){if(!t||!l)return new h(i/0);if(!t[0]||!l[0])return l[0]?e:new h(t[0]?o:i*0)}if(s=j(s),c=j(c),t=t.slice(),i=s-c){for(i>0?(c=s,r=l):(i=-i,r=t),r.reverse();i--;r.push(0));r.reverse()}for(i=t.length,n=l.length,i-n<0&&(r=l,l=t,t=r,n=i),i=0;n;)i=(t[--n]=t[n]+l[n]+i)/Y|0,t[n]=Y===t[n]?0:t[n]%Y;return i&&(t=[i].concat(t),++c),oe(e,t,c)},p.precision=p.sd=function(e,n){var r,o,i,s=this;if(e!=null&&e!==!!e)return T(e,1,F),n==null?n=A:T(n,0,8),H(new h(s),e,n);if(!(r=s.c))return null;if(i=r.length-1,o=i*x+1,i=r[i]){for(;i%10==0;i/=10,o--);for(i=r[0];i>=10;i/=10,o++);}return e&&s.e+1>o&&(o=s.e+1),o},p.shiftedBy=function(e){return T(e,-de,de),this.times("1e"+e)},p.squareRoot=p.sqrt=function(){var e,n,r,o,i,s=this,c=s.c,t=s.s,l=s.e,u=O+4,f=new h("0.5");if(t!==1||!c||!c[0])return new h(!t||t<0&&(!c||c[0])?NaN:c?s:1/0);if(t=Math.sqrt(+Q(s)),t==0||t==1/0?(n=W(c),(n.length+l)%2==0&&(n+="0"),t=Math.sqrt(+n),l=j((l+1)/2)-(l<0||l%2),t==1/0?n="5e"+l:(n=t.toExponential(),n=n.slice(0,n.indexOf("e")+1)+l),r=new h(n)):r=new h(t+""),r.c[0]){for(l=r.e,t=l+u,t<3&&(t=0);;)if(i=r,r=f.times(i.plus(_(s,i,u,1))),W(i.c).slice(0,t)===(n=W(r.c)).slice(0,t))if(r.e<l&&--t,n=n.slice(t-3,t+1),n=="9999"||!o&&n=="4999"){if(!o&&(H(i,i.e+O+2,0),i.times(i).eq(s))){r=i;break}u+=4,t+=4,o=1}else{(!+n||!+n.slice(1)&&n.charAt(0)=="5")&&(H(r,r.e+O+2,1),e=!r.times(r).eq(s));break}}return H(r,r.e+O+1,A,e)},p.toExponential=function(e,n){return e!=null&&(T(e,0,F),e++),ie(this,e,n,1)},p.toFixed=function(e,n){return e!=null&&(T(e,0,F),e=e+this.e+1),ie(this,e,n)},p.toFormat=function(e,n,r){var o,i=this;if(r==null)e!=null&&n&&typeof n=="object"?(r=n,n=null):e&&typeof e=="object"?(r=e,e=n=null):r=k;else if(typeof r!="object")throw Error(z+"Argument not an object: "+r);if(o=i.toFixed(e,n),i.c){var s,c=o.split("."),t=+r.groupSize,l=+r.secondaryGroupSize,u=r.groupSeparator||"",f=c[0],a=c[1],w=i.s<0,v=w?f.slice(1):f,P=v.length;if(l&&(s=t,t=l,l=s,P-=s),t>0&&P>0){for(s=P%t||t,f=v.substr(0,s);s<P;s+=t)f+=u+v.substr(s,t);l>0&&(f+=u+v.slice(s)),w&&(f="-"+f)}o=a?f+(r.decimalSeparator||"")+((l=+r.fractionGroupSize)?a.replace(new RegExp("\\d{"+l+"}\\B","g"),"$&"+(r.fractionGroupSeparator||"")):a):f}return(r.prefix||"")+o+(r.suffix||"")},p.toFraction=function(e){var n,r,o,i,s,c,t,l,u,f,a,w,v=this,P=v.c;if(e!=null&&(t=new h(e),!t.isInteger()&&(t.c||t.s!==1)||t.lt(E)))throw Error(z+"Argument "+(t.isInteger()?"out of range: ":"not an integer: ")+Q(t));if(!P)return new h(v);for(n=new h(E),u=r=new h(E),o=l=new h(E),w=W(P),s=n.e=w.length-v.e-1,n.c[0]=we[(c=s%x)<0?x+c:c],e=!e||t.comparedTo(n)>0?s>0?n:u:t,c=g,g=1/0,t=new h(w),l.c[0]=0;f=_(t,n,0,1),i=r.plus(f.times(o)),i.comparedTo(e)!=1;)r=o,o=i,u=l.plus(f.times(i=u)),l=i,n=t.minus(f.times(i=n)),t=i;return i=_(e.minus(r),o,0,1),l=l.plus(i.times(u)),r=r.plus(i.times(o)),l.s=u.s=v.s,s=s*2,a=_(u,o,s,A).minus(v).abs().comparedTo(_(l,r,s,A).minus(v).abs())<1?[u,o]:[l,r],g=c,a},p.toNumber=function(){return+Q(this)},p.toPrecision=function(e,n){return e!=null&&T(e,1,F),ie(this,e,n,2)},p.toString=function(e){var n,r=this,o=r.s,i=r.e;return i===null?o?(n="Infinity",o<0&&(n="-"+n)):n="NaN":(e==null?n=i<=D||i>=R?fe(W(r.c),i):b(W(r.c),i,"0"):e===10&&Z?(r=H(new h(r),O+i+1,A),n=b(W(r.c),r.e,"0")):(T(e,2,q.length,"Base"),n=I(b(W(r.c),i,"0"),10,e,o,!0)),o<0&&r.c[0]&&(n="-"+n)),n},p.valueOf=p.toJSON=function(){return Q(this)},p._isBigNumber=!0,p[Symbol.toStringTag]="BigNumber",p[Symbol.for("nodejs.util.inspect.custom")]=p.valueOf,N!=null&&h.set(N),h}function j(N){var _=N|0;return N>0||N===_?_:_-1}function W(N){for(var _,I,S=1,p=N.length,E=N[0]+"";S<p;){for(_=N[S++]+"",I=x-_.length;I--;_="0"+_);E+=_}for(p=E.length;E.charCodeAt(--p)===48;);return E.slice(0,p+1||1)}function re(N,_){var I,S,p=N.c,E=_.c,O=N.s,A=_.s,D=N.e,R=_.e;if(!O||!A)return null;if(I=p&&!p[0],S=E&&!E[0],I||S)return I?S?0:-A:O;if(O!=A)return O;if(I=O<0,S=D==R,!p||!E)return S?0:!p^I?1:-1;if(!S)return D>R^I?1:-1;for(A=(D=p.length)<(R=E.length)?D:R,O=0;O<A;O++)if(p[O]!=E[O])return p[O]>E[O]^I?1:-1;return D==R?0:D>R^I?1:-1}function T(N,_,I,S){if(N<_||N>I||N!==K(N))throw Error(z+(S||"Argument")+(typeof N=="number"?N<_||N>I?" out of range: ":" not an integer: ":" not a primitive number: ")+String(N))}function se(N){var _=N.c.length-1;return j(N.e/x)==_&&N.c[_]%2!=0}function fe(N,_){return(N.length>1?N.charAt(0)+"."+N.slice(1):N)+(_<0?"e":"e+")+_}function b(N,_,I){var S,p;if(_<0){for(p=I+".";++_;p+=I);N=p+N}else if(S=N.length,++_>S){for(p=I,_-=S;--_;p+=I);N+=p}else _<S&&(N=N.slice(0,_)+"."+N.slice(_));return N}var xe=Ie();const Qe={class:"container"},be={class:"content_top"},en={class:"content_buttom_item_content"},on=_e({__name:"SimpleCalculator",setup(N){const _={fieldInputTextColor:"#a9a9a9"},I=["(",")","DEL","AC","1","2","3","/","4","5","6","*","7","8","9","-","0",".","=","+"],S=ae("0"),p=ae("0"),E=ae(["0"]),O=()=>{Ue.back()};function A(g){const B=E.value,m=B.length,d=B[m-1];if(!(m==1&&d=="0"&&(g==")"||g=="+"||g=="-"||g=="*"||g=="/"||g=="="))&&!(d=="("&&(g=="("||g==")"||g=="+"||g=="-"||g=="*"||g=="/"||g=="="))&&!(d==")"&&g!="+"&&g!="-"&&g!="*"&&g!="/"&&g!="=")){if(d=="/"||d=="*"||d=="-"||d=="+"){if(g=="+"||g=="-"||g=="*"||g=="/"){E.value.splice(m-1,1,g),S.value=E.value.join("");return}else if(g==")"||g=="=")return}if(g=="AC")E.value.length=0,E.value.push("0"),S.value=E.value.join("");else if(g=="DEL")m>1?d.length>1?E.value.splice(m-1,1,d.slice(0,d.length-1)):E.value.splice(m-1,1):d.length>1?E.value.splice(m-1,1,d.slice(0,d.length-1)):E.value.splice(0,1,"0"),S.value=E.value.join("");else if(g=="=")p.value=S.value+g,S.value=D(),E.value.splice(0,m,S.value);else{if(g=="("&&!(m==1&&d=="0")&&d!="/"&&d!="*"&&d!="-"&&d!="+")return;if(g==")")if(B.indexOf("(")!=-1){if(B.slice(B.lastIndexOf("("),m).indexOf(")")!=-1||d=="("||d==")"||d=="+"||d=="-"||d=="*"||d=="/")return}else return;if(g=="."&&(d=="("||d==")"||d=="+"||d=="-"||d=="*"||d=="/"||d.includes(".")))return;m==1&&d=="0"&&g!="."?E.value=[g]:d=="("||d==")"||d=="/"||d=="*"||d=="-"||d=="+"||g=="("||g==")"||g=="/"||g=="*"||g=="-"||g=="+"?E.value.push(g):E.value.splice(m-1,1,d+g),S.value=E.value.join("")}}}function D(){const g=R(E.value),B=[];for(var m=0;m<g.length;m++){const k=g[m];if(k=="+"||k=="-"||k=="*"||k=="/"){const q=xe(B.pop()),Z=xe(B.pop());var d=0;k=="+"?d=Z.plus(q).toNumber():k=="-"?d=Z.minus(q).toNumber():k=="*"?d=Z.multipliedBy(q).toNumber():k=="/"&&(d=Z.dividedBy(q).toNumber()),B.push(d)}else B.push(parseFloat(k))}return""+B.pop()}function R(g){const B=[],m=[];for(let d=0;d<g.length;d++){const k=g[d];if(k=="+"||k=="-"||k=="*"||k=="/")if(m.length==0)m.push(k);else if(V(k)>V(m[m.length-1]))m.push(k);else for(;;){if(m.length==0){m.push(k);break}else if(V(k)>V(m[m.length-1])){m.push(k);break}B.push(m.pop())}else if(k=="(")m.push(k);else if(k==")")for(;;){if(m[m.length-1]=="("){m.pop();break}B.push(m.pop())}else B.push(k)}for(;m.length>0;)B.push(m.pop());return B}function V(g){return g=="+"||g=="-"?1:g=="*"||g=="/"?2:0}return(g,B)=>{const m=$e,d=Fe,k=Re,q=Ze,Z=Je;return me(),Ee("div",null,[ne(m,{title:"\u7B80\u5355\u7684\u8BA1\u7B97\u5668","left-text":"\u8FD4\u56DE",border:!1,"left-arrow":"",fixed:"",placeholder:"",onClickLeft:O}),he("div",Qe,[he("div",be,[ne(k,{"theme-vars":_},{default:pe(()=>[ne(d,{class:"content_top_output",modelValue:p.value,"onUpdate:modelValue":B[0]||(B[0]=h=>p.value=h),readonly:"","input-align":"right",border:!1},null,8,["modelValue"])]),_:1}),ne(d,{class:"content_top_input",modelValue:S.value,"onUpdate:modelValue":B[1]||(B[1]=h=>S.value=h),readonly:"","input-align":"right",border:!1},null,8,["modelValue"])]),ne(Z,null,{default:pe(()=>[(me(),Ee(Te,null,Me(I,h=>ne(q,{class:"content_buttom_item",span:"6",key:h,onClick:ie=>A(h)},{default:pe(()=>[he("div",en,ye(h),1)]),_:2},1032,["onClick"])),64))]),_:1})])])}}});export{on as default};
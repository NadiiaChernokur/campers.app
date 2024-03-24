"use strict";(self.webpackChunkcampers_app=self.webpackChunkcampers_app||[]).push([[746],{9746:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var r,i,c,s,d,h,o,l,a,u,x,p,f,g,j,v=t(9439),k=t(2791),m=t(3433),Z=t(4420),w=t(94),C=t(2605),b=t(128),y=t(7428),_=t(3329),S=function(){var e,n=(0,Z.I0)(),t=(0,k.useState)(!1),r=(0,v.Z)(t,2),i=r[0],c=r[1],s=(0,k.useState)(null),d=(0,v.Z)(s,2),h=d[0],o=d[1],l=(0,k.useState)([]),a=(0,v.Z)(l,2),u=a[0],x=a[1],p=(0,Z.v9)((function(e){return e.campersArray})),f=(0,Z.v9)((function(e){return e.newFilterArray}));console.log(f);(0,k.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favorites"))||[];x(e)}),[]);var g=function(e){if(e)return e.charAt(0).toUpperCase()+e.slice(1)};return(0,_.jsxs)(_.Fragment,{children:[null===(e=f.length>0?f:p)||void 0===e?void 0:e.map((function(e){var t,r,i,s;return(0,_.jsxs)(w._L,{children:[(0,_.jsx)(w.$U,{children:(0,_.jsx)(w.Mo,{src:null===(t=e.gallery)||void 0===t?void 0:t[0],alt:e.name})}),(0,_.jsxs)(w.Gk,{children:[(0,_.jsxs)(w.HK,{children:[(0,_.jsx)(w.VG,{children:e.name}),(0,_.jsxs)(w.pF,{children:[(0,_.jsxs)("p",{children:["\u20ac",e.price,",00"]}),(0,_.jsx)(w.ul,{onClick:function(){return function(e){var t=(0,m.Z)(u),r=t.indexOf(e);-1!==r?(t.splice(r,1),n((0,C.wy)(e))):(t.push(e),n((0,C.a3)(e))),x(t),localStorage.setItem("favorites",JSON.stringify(t))}(e._id)},children:(s=e._id,u.includes(s)?(0,_.jsx)("svg",{width:"24",height:"24",children:(0,_.jsx)(w.lS,{href:"".concat(b.Z,"#hearts")})}):(0,_.jsx)("svg",{width:"24",height:"24",children:(0,_.jsx)(w.lS,{href:"".concat(b.Z,"#heart")})}))})]})]}),(0,_.jsxs)(w.Zv,{children:[(0,_.jsxs)(w.Vc,{children:[(0,_.jsx)("svg",{width:"20",height:"14",children:(0,_.jsx)("use",{href:"".concat(b.Z,"#Rating")})}),e.rating,"(",null===(r=e.reviews)||void 0===r?void 0:r.length," Reviews)"]}),(0,_.jsxs)("p",{children:[(0,_.jsx)("svg",{width:"20",height:"14",children:(0,_.jsx)("use",{href:"".concat(b.Z,"#map")})}),e.location]})]}),(0,_.jsx)(w.dk,{children:e.description}),(0,_.jsxs)(w.rX,{children:[(0,_.jsxs)(w.aV,{children:[(0,_.jsx)("svg",{width:"20",height:"20",children:(0,_.jsx)("use",{href:"".concat(b.Z,"#Users")})}),(0,_.jsxs)(w.c_,{children:[e.adults," adults"]})]}),(0,_.jsxs)(w.aV,{children:[(0,_.jsx)("svg",{width:"20",height:"20",children:(0,_.jsx)("use",{href:"".concat(b.Z,"#nets")})}),(0,_.jsx)(w.c_,{children:g(e.transmission)})]}),(0,_.jsxs)(w.aV,{children:[(0,_.jsx)("svg",{width:"20",height:"20",children:(0,_.jsx)("use",{href:"".concat(b.Z,"#tank")})}),(0,_.jsx)(w.c_,{children:g(e.engine)})]}),(0,_.jsxs)(w.aV,{children:[(0,_.jsx)("svg",{width:"20",height:"20",children:(0,_.jsx)("use",{href:"".concat(b.Z,"#Kitchen")})}),(0,_.jsx)("p",{children:"Kitchen"})]}),(0,_.jsxs)(w.aV,{children:[(0,_.jsx)("svg",{width:"20",height:"20",children:(0,_.jsx)("use",{href:"".concat(b.Z,"#bad"),width:"20",height:"20",fill:"none"})}),(0,_.jsxs)(w.c_,{children:[null===(i=e.details)||void 0===i?void 0:i.beds," beds"]})]}),(0,_.jsxs)(w.aV,{children:[(0,_.jsx)("svg",{width:"20",height:"20",children:(0,_.jsx)("use",{href:"".concat(b.Z,"#blow"),width:"20",height:"20"})}),(0,_.jsx)(w.c_,{children:"AC"})]})]}),(0,_.jsx)(w.gm,{onClick:function(){return function(e){o(e),c(!0)}(e)},children:"Show more"})]})]},e._id)})),i&&(0,_.jsx)(y.Z,{onClose:function(){return c(!1)},auto:h})]})},A=t(1413),F=t(168),P=t(7924),V=P.ZP.input(r||(r=(0,F.Z)(["\n  position: absolute;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n"]))),I=P.ZP.label(i||(i=(0,F.Z)(["\n  cursor: pointer;\n  position: relative;\n  display: block;\n  border: 1px solid rgba(16, 24, 40, 0.2);\n  border-radius: 10px;\n  padding: 17px 12px;\n  width: 113px;\n  height: 95px;\n  text-align: center;\n\n  ",":checked + & {\n    background-color: green;\n    mix-blend-mode: multiply;\n  }\n"])),V),T=P.ZP.form(c||(c=(0,F.Z)(["\n  width: 360px;\n"]))),K=P.ZP.div(s||(s=(0,F.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  border-top: 1px solid rgba(16, 24, 40, 0.2);\n  padding-top: 24px;\n  margin-bottom: 32px;\n  color: #101828;\n"]))),E=P.ZP.div(d||(d=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),L=P.ZP.input(h||(h=(0,F.Z)(["\n  border-radius: 10px;\n  padding: 18px 218px 18px 18px;\n  width: 100%;\n  height: 56px;\n  background: #f7f7f7;\n\n  border: none;\n  margin-bottom: 32px;\n"]))),U=P.ZP.p(o||(o=(0,F.Z)(["\n  margin-bottom: 14px;\n"]))),N=P.ZP.p(l||(l=(0,F.Z)(["\n  font-weight: 600;\n  font-size: 20px;\n  color: #101828;\n  margin-bottom: 24px;\n"]))),O=P.ZP.p(a||(a=(0,F.Z)(["\n  margin-bottom: 24px;\n"]))),R=P.ZP.button(u||(u=(0,F.Z)(["\n  border-radius: 200px;\n  border: none;\n  padding: 16px 60px;\n  width: 173px;\n  height: 56px;\n  background: #e44848;\n  color: #fff;\n"]))),W=(P.ZP.svg(x||(x=(0,F.Z)(["\n  width: 15px;\n"]))),function(){var e=(0,Z.I0)(),n=(0,k.useState)(""),t=(0,v.Z)(n,2),r=t[0],i=t[1],c=(0,k.useState)(""),s=(0,v.Z)(c,2),d=s[0],h=s[1],o=(0,Z.v9)((function(e){return e.totalCampers})),l=(0,k.useState)([]),a=(0,v.Z)(l,2),u=a[0],x=a[1],p=(0,k.useState)({acChecked:!1,automaticChecked:!1,kitchenChecked:!1,tvChecked:!1,showerChecked:!1}),f=(0,v.Z)(p,2),g=f[0],j=f[1];return(0,k.useEffect)((function(){e((0,C.Zd)(u))}),[e,u]),(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(T,{children:[(0,_.jsxs)(E,{children:[(0,_.jsx)("label",{children:"Location"}),(0,_.jsx)(L,{type:"text",id:"locationInput",placeholder:"Kyiv, Ukraine",value:d,onChange:function(e){h(e.target.value)}})]}),(0,_.jsx)(U,{children:"Filters"}),(0,_.jsx)(N,{children:"Vehicle equipment"}),(0,_.jsxs)(K,{children:[(0,_.jsxs)(I,{htmlFor:"AC",style:g.acChecked?{border:"1px solid red"}:{},children:[(0,_.jsx)(V,{type:"checkbox",id:"AC",checked:g.acChecked,onChange:function(e){return n=e.target.checked,void j((0,A.Z)((0,A.Z)({},g),{},{acChecked:n}));var n}}),(0,_.jsx)("svg",{width:"32",height:"32",children:(0,_.jsx)("use",{xlinkHref:"".concat(b.Z,"#blow"),width:"32",height:"32"})}),(0,_.jsx)("p",{children:"AC"})]}),(0,_.jsxs)(I,{htmlFor:"Automatic",style:g.automaticChecked?{border:"1px solid red"}:{},children:[(0,_.jsx)(V,{type:"checkbox",id:"Automatic",checked:g.automaticChecked,onChange:function(e){return n=e.target.checked,void j((0,A.Z)((0,A.Z)({},g),{},{automaticChecked:n}));var n}}),(0,_.jsx)("svg",{width:"32",height:"32",children:(0,_.jsx)("use",{href:"".concat(b.Z,"#nets")})}),(0,_.jsx)("p",{children:"Automatic"})]}),(0,_.jsxs)(I,{htmlFor:"Kitchen",style:g.kitchenChecked?{border:"1px solid red"}:{},children:[(0,_.jsx)(V,{type:"checkbox",id:"Kitchen",checked:g.kitchenChecked,onChange:function(e){return n=e.target.checked,void j((0,A.Z)((0,A.Z)({},g),{},{kitchenChecked:n}));var n}}),(0,_.jsx)("svg",{width:"32",height:"32",children:(0,_.jsx)("use",{href:"".concat(b.Z,"#Kitchen")})}),(0,_.jsx)("p",{children:"Kitchen"})]}),(0,_.jsxs)(I,{htmlFor:"TV",style:g.tvChecked?{border:"1px solid red"}:{},children:[(0,_.jsx)(V,{type:"checkbox",id:"TV",checked:g.tvChecked,onChange:function(e){return n=e.target.checked,void j((0,A.Z)((0,A.Z)({},g),{},{tvChecked:n}));var n}}),(0,_.jsx)("svg",{width:"32",height:"32",children:(0,_.jsx)("use",{href:"".concat(b.Z,"#tel")})}),(0,_.jsx)("p",{children:"TV"})]}),(0,_.jsxs)(I,{htmlFor:"Shower/WC",style:g.showerChecked?{border:"1px solid red"}:{},children:[(0,_.jsx)(V,{type:"checkbox",id:"Shower/WC",checked:g.showerChecked,onChange:function(e){return n=e.target.checked,void j((0,A.Z)((0,A.Z)({},g),{},{showerChecked:n}));var n}}),(0,_.jsx)("svg",{width:"32",height:"32",children:(0,_.jsx)("use",{href:"".concat(b.Z,"#dusch")})}),(0,_.jsx)("p",{children:"Shower/WC"})]})]}),(0,_.jsx)(O,{children:"Vehicle type"}),(0,_.jsxs)(K,{children:[(0,_.jsxs)(I,{htmlFor:"panelTruck",style:"panelTruck"===r?{border:"1px solid red"}:{},children:[(0,_.jsx)(V,{type:"radio",name:"typeAuto",id:"panelTruck",checked:"panelTruck"===r,onChange:function(){return i("panelTruck")}}),(0,_.jsx)("svg",{width:"32",height:"32",children:(0,_.jsx)("use",{href:"".concat(b.Z,"#auto")})}),(0,_.jsx)("p",{children:"Van"})]}),(0,_.jsxs)(I,{htmlFor:"fullyIntegrated",style:"fullyIntegrated"===r?{border:"1px solid red"}:{},children:[(0,_.jsx)(V,{type:"radio",name:"typeAuto",id:"fullyIntegrated",checked:"fullyIntegrated"===r,onChange:function(){return i("fullyIntegrated")}}),(0,_.jsx)("svg",{width:"32",height:"32",children:(0,_.jsx)("use",{href:"".concat(b.Z,"#autodoor")})}),(0,_.jsx)("p",{children:"Fully Integrated"})]}),(0,_.jsxs)(I,{htmlFor:"Alcove",style:"Alcove"===r?{border:"1px solid red"}:{},children:[(0,_.jsx)(V,{type:"radio",name:"typeAuto",id:"Alcove",checked:"Alcove"===r,onChange:function(){return i("Alcove")}}),(0,_.jsx)("svg",{width:"32",height:"32",children:(0,_.jsx)("use",{href:"".concat(b.Z,"#autofool")})}),(0,_.jsx)("p",{children:"Alcove"})]})]}),(0,_.jsx)(R,{type:"submit",onClick:function(e){e.preventDefault();var n=[],t=[],i=[],c=[],s=[],h=[],l=[];if(g.acChecked&&(n=o.filter((function(e){return e.details.airConditioner>0}))),g.automaticChecked&&(t=o.filter((function(e){return"automatic"===e.transmission}))),g.kitchenChecked&&(i=o.filter((function(e){return e.details.kitchen>0}))),g.tvChecked&&(c=o.filter((function(e){return e.details.TV>0}))),g.showerChecked&&(s=o.filter((function(e){return e.details.bathroom>0}))),d.length>0){var a=new RegExp(d,"i");h=o.filter((function(e){return e.location.match(a)}))}r.length>0&&(l=o.filter((function(e){return e.form===r})));var u=null===o||void 0===o?void 0:o.filter((function(e){return(!n.length||n.some((function(n){return n._id===e._id})))&&(!t.length||t.some((function(n){return n._id===e._id})))&&(!i.length||i.some((function(n){return n._id===e._id})))&&(!c.length||c.some((function(n){return n._id===e._id})))&&(!s.length||s.some((function(n){return n._id===e._id})))&&(!h.length||h.some((function(n){return n._id===e._id})))&&(!l.length||l.some((function(n){return n._id===e._id})))}));console.log(u),x(u)},children:"Search"})]})})}),z=P.ZP.div(p||(p=(0,F.Z)(["\n  display: flex;\n  gap: 64px;\n  justify-content: center;\n"]))),G=P.ZP.div(f||(f=(0,F.Z)(["\n  width: 888px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),H=P.ZP.button(g||(g=(0,F.Z)(["\n  border: 1px solid rgba(71, 84, 103, 0.2);\n  border-radius: 200px;\n  padding: 16px 32px;\n  width: 145px;\n  height: 56px;\n  margin-bottom: 20px;\n"]))),J=P.ZP.div(j||(j=(0,F.Z)(["\n  width: 360px;\n"]))),q=function(){var e=(0,Z.I0)(),n=(0,k.useState)(1),t=(0,v.Z)(n,2),r=t[0],i=t[1],c=(0,k.useState)(!1),s=(0,v.Z)(c,2),d=s[0],h=s[1],o=(0,k.useState)(!1),l=(0,v.Z)(o,2),a=l[0],u=l[1],x=(0,k.useState)(!1),p=(0,v.Z)(x,2),f=p[0],g=p[1],j=(0,Z.v9)((function(e){return e.totalCampers})),m=(0,Z.v9)((function(e){return e.campersArray})),w=(0,Z.v9)((function(e){return e.newFilterArray}));console.log(w.length);var b=function(){m.length+4>=j.length&&g(!0),i((function(e){return e+1})),e((0,C.lI)(r)),u(!0)};return(0,k.useEffect)((function(){if(!d)return e((0,C.ow)()),void h(!0);r>1||(i((function(e){return e+1})),e((0,C.lI)(r)),e((0,C.lN)()))}),[e,d,r]),(0,k.useEffect)((function(){w.length>0&&g(!0)}),[w.length]),(0,k.useEffect)((function(){a&&u(!1)}),[a]),(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(z,{children:[(0,_.jsx)(J,{children:(0,_.jsx)(W,{})}),(0,_.jsxs)(G,{children:[(0,_.jsx)(S,{page:r}),f?(0,_.jsx)(H,{onClick:b,style:{display:"none"},children:"Load more"}):(0,_.jsx)(H,{onClick:b,style:{border:a?"1px solid red":"none"},children:"Load more"})]})]})})}}}]);
//# sourceMappingURL=746.df2d858d.chunk.js.map
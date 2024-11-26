import{b as K,m as P,r as k,i as v,w as t,c as o,d as n,f as l,e as _,j as C,F as x,l as z,k as c,t as u,g as r,p as M,q as W}from"./index-CCKSt-uV.js";const X={key:1,class:"d-flex justify-center mt-3"},Y={class:"d-flex align-center mb-4"},Z={class:"text-h4"},ee={class:"text-subtitle-1 mb-4"},te={class:"d-flex align-center mb-4"},le={class:"text-h4 text-decorated-line-through text-grey"},ae={class:"text-h4 ml-4 text-success"},oe={key:1,class:"text-h4"},se={class:"mb-4"},ne={class:"mb-6"},ue={class:"text-body-1"},ie={__name:"ProductDetail",setup(ce){const U=M(),A=K(),e=P(()=>W.products.find(i=>i.id===parseInt(U.params.id))),b=k(0),p=k(null),f=k(null),d=k(1),B=(i,a)=>i-i*(a/100),F=()=>{let i=parseInt(d.value);isNaN(i)||i<1?d.value=1:i>e.value.stock&&(d.value=e.value.stock)},S=P(()=>p.value&&f.value&&e.value&&e.value.stock>0&&d.value>0&&d.value<=e.value.stock),L=()=>{S.value&&(A.addItem({...e.value,size:p.value,color:f.value,quantity:parseInt(d.value)}),d.value=1,p.value=null,f.value=null)};return(i,a)=>{const y=o("v-img"),T=o("v-carousel-item"),$=o("v-carousel"),w=o("v-btn"),q=o("v-btn-toggle"),g=o("v-col"),h=o("v-chip"),D=o("v-icon"),j=o("v-list-item-title"),R=o("v-list-item-subtitle"),E=o("v-list-item"),O=o("v-list"),Q=o("v-card-text"),G=o("v-card"),I=o("v-select"),V=o("v-row"),H=o("v-text-field"),N=o("v-container"),J=o("v-alert");return e.value?(n(),v(N,{key:0},{default:t(()=>[l(V,null,{default:t(()=>[l(g,{cols:"12",md:"6"},{default:t(()=>[e.value.image&&e.value.image.length>0?(n(),v($,{key:0,modelValue:b.value,"onUpdate:modelValue":a[0]||(a[0]=s=>b.value=s),height:"400","hide-delimiter-background":"","show-arrows":"hover"},{default:t(()=>[(n(!0),_(x,null,C(e.value.image,(s,m)=>(n(),v(T,{key:m},{default:t(()=>[l(y,{src:s,height:"400",cover:""},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["modelValue"])):z("",!0),e.value.image&&e.value.image.length>0?(n(),_("div",X,[l(q,{modelValue:b.value,"onUpdate:modelValue":a[1]||(a[1]=s=>b.value=s),mandatory:"",color:"primary",group:""},{default:t(()=>[(n(!0),_(x,null,C(e.value.image,(s,m)=>(n(),v(w,{key:m,value:m,class:"mx-1"},{default:t(()=>[l(y,{src:s,width:"50",height:"50",cover:""},null,8,["src"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])):(n(),v(y,{key:2,src:"https://via.placeholder.com/400",height:"400",cover:""}))]),_:1}),l(g,{cols:"12",md:"6"},{default:t(()=>[c("div",Y,[c("h1",Z,u(e.value.name),1),e.value.promotionalCampaign?(n(),v(h,{key:0,color:"primary",class:"ml-4"},{default:t(()=>[r(u(e.value.promotionalCampaign),1)]),_:1})):z("",!0)]),c("p",ee,"Ref: "+u(e.value.reference),1),c("div",te,[e.value.discount>0?(n(),_(x,{key:0},[c("span",le," $"+u(e.value.salePrice.toLocaleString()),1),c("span",ae," $"+u(B(e.value.salePrice,e.value.discount).toLocaleString()),1),l(h,{color:"success",class:"ml-4"},{default:t(()=>[r(u(e.value.discount)+"% OFF ",1)]),_:1})],64)):(n(),_("span",oe," $"+u(e.value.salePrice.toLocaleString()),1))]),c("div",se,[l(h,{color:e.value.stock>0?"success":"error",class:"mb-2"},{default:t(()=>[r(u(e.value.stock>0?`${e.value.stock} unidades disponibles`:"Agotado"),1)]),_:1},8,["color"])]),c("div",ne,[a[5]||(a[5]=c("h2",{class:"text-h6 mb-2"},"Descripción",-1)),c("p",ue,u(e.value.longDescription),1)]),l(G,{class:"mb-6"},{default:t(()=>[l(Q,null,{default:t(()=>[a[7]||(a[7]=c("h3",{class:"text-h6 mb-2"},"Detalles del producto",-1)),l(O,null,{default:t(()=>[(n(!0),_(x,null,C(e.value.details,(s,m)=>(n(),v(E,{key:m},{prepend:t(()=>[l(D,null,{default:t(()=>a[6]||(a[6]=[r("mdi-information")])),_:1})]),default:t(()=>[l(j,{class:"text-capitalize"},{default:t(()=>[r(u(m),1)]),_:2},1024),l(R,null,{default:t(()=>[r(u(s),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),l(V,null,{default:t(()=>[l(g,{cols:"6"},{default:t(()=>[l(I,{modelValue:p.value,"onUpdate:modelValue":a[2]||(a[2]=s=>p.value=s),items:e.value.availableSizes,label:"Talla",outlined:"",dense:"",disabled:e.value.stock===0},null,8,["modelValue","items","disabled"])]),_:1}),l(g,{cols:"6"},{default:t(()=>[l(I,{modelValue:f.value,"onUpdate:modelValue":a[3]||(a[3]=s=>f.value=s),items:e.value.availableColors,label:"Color",outlined:"",dense:"",disabled:e.value.stock===0},null,8,["modelValue","items","disabled"])]),_:1})]),_:1}),l(V,{class:"mb-4"},{default:t(()=>[l(g,{cols:"6"},{default:t(()=>[l(H,{modelValue:d.value,"onUpdate:modelValue":a[4]||(a[4]=s=>d.value=s),type:"number",label:"Cantidad",min:"1",max:e.value.stock,disabled:e.value.stock===0,onInput:F},null,8,["modelValue","max","disabled"])]),_:1})]),_:1}),l(w,{block:"",color:"primary",size:"large",onClick:L,disabled:!S.value},{default:t(()=>[l(D,{left:""},{default:t(()=>a[8]||(a[8]=[r("mdi-cart-plus")])),_:1}),r(" "+u(e.value.stock===0?"Agotado":"Agregar al Carrito"),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})):(n(),v(N,{key:1},{default:t(()=>[l(J,{type:"error"},{default:t(()=>a[9]||(a[9]=[r(" Producto no encontrado. ")])),_:1})]),_:1}))}}};export{ie as default};

import{_ as y,x as h,e as a,m as t,u as o,f as l,w as i,F as k,y as I,p as f,z as S,A as B,g,o as c,v as r,t as _,B as N}from"./vendor.ea68c68e.js";import{s as d}from"./index.fc3d8398.js";const p=u=>(S("data-v-ab29f986"),u=u(),B(),u),w={class:"container-fluid"},L={class:"container mx-auto mt-5"},C={class:"row"},P={class:"col"},V=p(()=>t("h1",{class:"text-gray-900 font-bold text-[32px]"},"Supplier Invoices",-1)),j={class:"d-flex"},$={class:"btn-group",role:"group","aria-label":"Basic example"},A={class:"col"},F={class:"d-flex"},z={class:"ms-auto"},D={class:"btn-group",role:"group","aria-label":"Basic example"},E=p(()=>t("button",{type:"button",class:"btn btn-primary btn-dark"},"New",-1)),R={key:0,class:"container mx-auto mb-3 mt-5"},T={class:"table"},q=p(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col"},"Invoice Number"),t("th",{scope:"col"},"Supplier"),t("th",{scope:"col"},"Status"),t("th",{scope:"col"},"Amount")])],-1)),G={class:"table-group-divider"},H=p(()=>t("i",{class:"bi bi-currency-dollar"},null,-1)),J={key:0,class:"flex justify-between mt-4"},K=r(" Previous Page "),M=r(" Next Page "),O={setup(u){let v={doctype:"Supplier Portal Invoices",fields:["*"],orderBy:"creation desc",start:0,pageLength:5,auto:!0},s=null;return d.supplier_id&&d.isLoggedIn?(v.filters=[["supplier","=",d.supplier_id]],s=h(v)):s=h(v),s.fetch(),(Q,n)=>{const m=g("router-link"),b=g("Button");return c(),a("div",w,[t("div",L,[t("div",C,[t("div",P,[V,t("div",j,[t("div",null,[t("div",$,[t("button",{type:"button",class:"btn btn-sm btn-primary btn-dark",onClick:n[0]||(n[0]=(...e)=>o(d).logout.submit&&o(d).logout.submit(...e))},"Logout ")])])])]),t("div",A,[t("div",F,[t("div",z,[t("div",D,[l(m,{to:"/invoices/new"},{default:i(()=>[E]),_:1})])])])])]),o(s).data?(c(),a("div",R,[t("table",T,[q,t("tbody",G,[(c(!0),a(k,null,I(o(s).data,(e,x)=>(c(),a("tr",{key:x},[t("td",null,[l(m,{to:{name:"SupplierInvoice",params:{supplierInvoiceNumber:e.name}}},{default:i(()=>[r(_(e.name),1)]),_:2},1032,["to"])]),t("td",null,_(e.supplier),1),t("td",null,[l(o(N),null,{default:i(()=>[r(_(e.status),1)]),_:2},1024)]),t("td",null,[H,r(" "+_(e.total_amount),1)])]))),128))])])])):f("",!0)]),o(s).length>10?(c(),a("div",J,[l(b,{onClick:n[1]||(n[1]=e=>o(s).previous())},{default:i(()=>[K]),_:1}),l(b,{onClick:n[2]||(n[2]=e=>o(s).next())},{default:i(()=>[M]),_:1})])):f("",!0)])}}};var X=y(O,[["__scopeId","data-v-ab29f986"]]);export{X as default};
import{l as _,r as g,e as n,f as o,w as c,g as l,o as i,m as w,n as h,u as t,t as x,p as v,q as y,v as b}from"./vendor.ea68c68e.js";import{s as a}from"./index.fc3d8398.js";const V={class:"m-3 flex flex-row items-center justify-center"},A=["onSubmit"],C={key:0},D={key:1},S=b("Login"),k={key:2,class:"text-red-500"},N=_({setup(B){const s=g({forAdmin:!1});window.location.href.includes("accounting.seahavenind")&&(window.location.replace("https://accounting.seahavenind.com/erpnext"),console.log("redirected"));function m(d){let e=new FormData(d.target);s.forAdmin?a.login.submit({email:e.get("email"),password:e.get("password")}):a.supplier_login.submit({supplier_id:e.get("supplier_id")})}return(d,e)=>{const r=l("Input"),p=l("Button"),u=l("Card");return i(),n("div",V,[o(u,{title:"Welcome to Supplier Portal!",class:"w-full max-w-md mt-4"},{default:c(()=>[w("form",{class:"flex flex-col space-y-2 w-full",onSubmit:y(m,["prevent"])},[o(h,{modelValue:t(s).forAdmin,"onUpdate:modelValue":e[0]||(e[0]=f=>t(s).forAdmin=f),label:"Login as Admin"},null,8,["modelValue"]),t(s).forAdmin?(i(),n("div",C,[o(r,{required:"",name:"email",type:"text",placeholder:"username@email.com",label:"User ID"}),o(r,{required:"",name:"password",type:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022",label:"Password"})])):(i(),n("div",D,[o(r,{required:"",name:"supplier_id",type:"text",placeholder:"Supplier ID",label:"Supplier ID"})])),o(p,{loading:t(a).login.loading,appearance:"primary"},{default:c(()=>[S]),_:1},8,["loading"]),t(a).login.error?(i(),n("div",k,x(t(a).login.error),1)):v("",!0)],40,A)]),_:1})])}}});export{N as default};
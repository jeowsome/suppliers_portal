import{l as f,r as g,e as r,f as o,w as m,g as i,o as n,m as w,n as x,u as t,t as h,p as y,q as b,v}from"./vendor.19304de9.js";import{s}from"./index.860a4145.js";const V={class:"m-3 flex flex-row items-center justify-center"},A=["onSubmit"],C={key:0},D={key:1},S=v("Login"),k={key:2,class:"text-red-500"},N=f({setup(B){const a=g({forAdmin:!1});function p(d){let e=new FormData(d.target);a.forAdmin?s.login.submit({email:e.get("email"),password:e.get("password")}):s.supplier_login.submit({supplier_id:e.get("supplier_id")})}return(d,e)=>{const l=i("Input"),u=i("Button"),c=i("Card");return n(),r("div",V,[o(c,{title:"Welcome to Supplier Portal!",class:"w-full max-w-md mt-4"},{default:m(()=>[w("form",{class:"flex flex-col space-y-2 w-full",onSubmit:b(p,["prevent"])},[o(x,{modelValue:t(a).forAdmin,"onUpdate:modelValue":e[0]||(e[0]=_=>t(a).forAdmin=_),label:"Login as Admin"},null,8,["modelValue"]),t(a).forAdmin?(n(),r("div",C,[o(l,{required:"",name:"email",type:"text",placeholder:"username@email.com",label:"User ID"}),o(l,{required:"",name:"password",type:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022",label:"Password"})])):(n(),r("div",D,[o(l,{required:"",name:"supplier_id",type:"text",placeholder:"Supplier ID",label:"Supplier ID"})])),o(u,{loading:t(s).login.loading,appearance:"primary"},{default:m(()=>[S]),_:1},8,["loading"]),t(s).login.error?(n(),r("div",k,h(t(s).login.error),1)):y("",!0)],40,A)]),_:1})])}}});export{N as default};

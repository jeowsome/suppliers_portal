import{_ as D,j as v,V as h,Y as C,e as u,Q as k,R as w,S as x,f as t,w as i,F as B,g as r,o as c,m as y,v as n,t as U,O as F,p}from"./vendor.ea68c68e.js";const S={name:"InsertImage",props:["editor"],expose:["openDialog"],data(){return{addVideoDialog:{url:"",file:null,show:!1}}},components:{Button:v,Dialog:h,FileUploader:C},methods:{openDialog(){this.addVideoDialog.show=!0},onVideoSelect(l){let o=l.target.files[0];!o||(this.addVideoDialog.file=o)},addVideo(l){this.editor.chain().focus().insertContent(`<video src="${l}"></video>`).run(),this.reset()},reset(){this.addVideoDialog=this.$options.data().addVideoDialog}}},I={class:"flex items-center space-x-2"},N=n(" Remove "),A=["src"],R=n(" Insert Video "),j=n("Cancel");function L(l,o,P,b,e,s){const a=r("Button"),V=r("FileUploader"),g=r("Dialog");return c(),u(B,null,[k(l.$slots,"default",w(x({onClick:s.openDialog}))),t(g,{options:{title:"Add Video"},modelValue:e.addVideoDialog.show,"onUpdate:modelValue":o[2]||(o[2]=d=>e.addVideoDialog.show=d),onAfterLeave:s.reset},{"body-content":i(()=>[t(V,{"file-types":"video/*",onSuccess:o[0]||(o[0]=d=>e.addVideoDialog.url=d.file_url)},{default:i(({file:d,progress:f,uploading:_,openFileSelector:m})=>[y("div",I,[t(a,{onClick:m},{default:i(()=>[n(U(_?`Uploading ${f}%`:e.addVideoDialog.url?"Change Video":"Upload Video"),1)]),_:2},1032,["onClick"]),e.addVideoDialog.url?(c(),F(a,{key:0,onClick:()=>{e.addVideoDialog.url=null,e.addVideoDialog.file=null}},{default:i(()=>[N]),_:2},1032,["onClick"])):p("",!0)])]),_:1}),e.addVideoDialog.url?(c(),u("video",{key:0,src:e.addVideoDialog.url,class:"mt-2 w-full rounded-lg",type:"video/mp4",controls:""},null,8,A)):p("",!0)]),actions:i(()=>[t(a,{variant:"solid",onClick:o[1]||(o[1]=d=>s.addVideo(e.addVideoDialog.url))},{default:i(()=>[R]),_:1}),t(a,{onClick:s.reset},{default:i(()=>[j]),_:1},8,["onClick"])]),_:1},8,["modelValue","onAfterLeave"])],64)}var E=D(S,[["render",L]]);export{E as default};
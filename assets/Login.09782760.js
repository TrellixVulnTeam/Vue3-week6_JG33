import{K as m,z as d,o as p,b as f,p as o,J as u,A as l,B as c}from"./vendor.7c20991a.js";import{a as _}from"./index.03ddc5cf.js";import{_ as h,C as w,t as g}from"./index.ad61d20f.js";const b={name:"Login",setup(){const r=m(),s=d(""),n=d("");return{email:s,password:n,login:async()=>{const i={username:s.value,password:n.value};try{const{token:a,expired:t}=await _.adminAuth.login(i);w.setCookie(g,a,t),r.push({name:"admin-Products"})}catch(a){alert(a.message)}}}}},v={class:"container"},x={class:"row justify-content-center"},y=o("h1",{class:"h3 mb-3 font-weight-normal"},"\u8ACB\u5148\u767B\u5165",-1),k={class:"col-8"},j={class:"form-floating mb-3"},B=o("label",{for:"username"},"Email address",-1),C={class:"form-floating"},A=o("label",{for:"password"},"Password",-1),P=o("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," \u767B\u5165 ",-1),V=o("p",{class:"mt-5 mb-3 text-muted"},"\xA9 2022~\u221E - AprilChen",-1);function q(r,s,n,e,i,a){return p(),f("div",v,[o("div",x,[y,o("div",k,[o("form",{id:"form",class:"form-signin",onSubmit:s[2]||(s[2]=u((...t)=>e.login&&e.login(...t),["prevent"]))},[o("div",j,[l(o("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":s[0]||(s[0]=t=>e.email=t)},null,512),[[c,e.email]]),B]),o("div",C,[l(o("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",required:"","onUpdate:modelValue":s[1]||(s[1]=t=>e.password=t)},null,512),[[c,e.password]]),A]),P],32)])]),V])}var N=h(b,[["render",q]]);export{N as default};

import{d as C,c as i,a,b as g,F as h,r as b,u as s,e as f,f as F,g as I,h as k,n as u,w as x,i as c,j as N,o as e,k as y,t as S,R as d,l,_ as V}from"./index-DMtNJjVn.js";const w={class:"form-step-links text-center align-center"},B={key:0,class:"flex-column errors mt-2"},E={class:"d-flex align-center mt-6 text-center"},L=["disabled"],R=C({__name:"FormStep",props:{title:{},stepIdx:{},form:{},validator:{type:Function}},setup(D){const r=D,n=i(()=>r.validator(c.getters.formSubmitData)),_=i(()=>l.steps.some(p=>p.validator(c.getters.formSubmitData).length>0)),m=i(()=>r.stepIdx-1>=0?l.steps[r.stepIdx-1]:null),t=i(()=>r.stepIdx+1<l.steps.length?l.steps[r.stepIdx+1]:null);function $(){alert(`Thank you for your subscription! ${JSON.stringify(c.getters.formSubmitData)}`),N.push("/")}return(p,T)=>(e(),a("main",null,[g("div",w,[(e(!0),a(h,null,b(s(l).steps,(o,v)=>(e(),f(s(d),{class:u(["step-link",{error:o.validator(s(c).getters.formSubmitData).length>0}]),key:`step-${v}`,to:`/${o.name}`},{default:x(()=>[y(S(o.title),1)]),_:2},1032,["class","to"]))),128))]),(e(),f(F(p.form))),n.value.length?(e(),a("div",B,[(e(!0),a(h,null,b(n.value,(o,v)=>(e(),a("div",{key:`error-${v}`},S(o),1))),128))])):I("",!0),g("div",E,[k(s(d),{class:u(["arrow left",{disabled:!m.value}]),to:`/${m.value?m.value.name:""}`},null,8,["class","to"]),!_.value||!t.value?(e(),a("button",{key:0,disabled:_.value,onClick:$}," Submit ",8,L)):(e(),f(s(d),{key:1,class:u(["step-link",{disabled:n.value.length}]),to:`/${t.value?t.value.name:""}`},{default:x(()=>[y(" Next ")]),_:1},8,["class","to"])),k(s(d),{class:u(["arrow right",{disabled:!t.value||n.value.length}]),to:`/${t.value?t.value.name:""}`},null,8,["class","to"])])]))}}),z=V(R,[["__scopeId","data-v-5bda65d7"]]);export{z as default};
import{d as J,i as j,r as v,a as y,o as r,c as k,e as s,u as t,f as m,F as L,g as l,t as u,w as i,b as S,j as B,S as O}from"./index-Dic2KMxX.js";const z={class:"grid"},M={class:"col-12"},Q={class:"card p-fluid"},G=s("h5",null,"Steady State",-1),H={key:0},K={class:"card"},W=s("h5",null,"Settings",-1),X={class:"p-fluid formgrid grid"},Y={class:"field-checkbox col-12 md:col-6"},Z=s("label",{for:"chkJacobian"},"Calculate Jacobian",-1),ee={class:"field-checkbox col-12 md:col-6"},te=s("label",{for:"chkStability"},"perform Stability Analysis",-1),le={class:"field col-12 md:col-6"},ae=s("label",{for:"txtResolution"},"Resolution",-1),oe={class:"field col-12 md:col-6"},se=s("label",{for:"txtDerivation"},"Derivation Factor",-1),ne={class:"field-checkbox col-12 md:col-4"},ie=s("label",{for:"chkNewton"},"Use Newton",-1),de={class:"field-checkbox col-12 md:col-4"},re=s("label",{for:"chkIntegration"},"Use Integration",-1),ue={class:"field-checkbox col-12 md:col-4"},ce=s("label",{for:"chkBackIntegration"},"Use Back Integration",-1),me={class:"col-12 md:col-3"},pe=s("div",{class:"col-12 md:col-5"},null,-1),_e={key:0,class:"card"},ye=s("h5",null,"Results",-1),be={style:{"text-align":"left"}},Se={class:"name"},he={class:"name"},fe={style:{"text-align":"left"}},ve={class:"name"},ke={class:"name"},ge={style:{"text-align":"left"}},xe={style:{"text-align":"left"}},Re={style:{"text-align":"left"}},Ve={style:{"text-align":"left"}},Ue=J({__name:"SteadyState",setup(we){const e=j("$state"),T=()=>{(e==null?void 0:e.steadyStateSettings)!=null&&(e.steadyStateResult=null,O.runSteadyState(e,window))},g=v(null),x=v(null),R=v(null),V=v(null),h=p=>{p.value!=null&&p.value.exportCSV()},A=()=>{h(g)},D=()=>{h(x)},E=()=>{h(R)},F=()=>{h(V)},$=()=>{if((e==null?void 0:e.steadyStateResult)==null)return;const p=new Blob([e.steadyStateResult.stability],{type:"text/plain"}),a=window.URL.createObjectURL(p),n=document.createElement("a");n.setAttribute("hidden",""),n.setAttribute("href",a),n.setAttribute("download","stability_results.txt"),document.body.appendChild(n),n.click(),document.body.removeChild(n)},q=()=>{if((e==null?void 0:e.steadyStateResult)==null)return;const p=new Blob([e.steadyStateResult.protocol],{type:"text/plain"}),a=window.URL.createObjectURL(p),n=document.createElement("a");n.setAttribute("hidden",""),n.setAttribute("href",a),n.setAttribute("download","protocol.txt"),document.body.appendChild(n),n.click(),document.body.removeChild(n)};return(p,a)=>{var C,U,I;const n=y("InputSwitch"),w=y("InputNumber"),_=y("Button"),d=y("Column"),f=y("DataTable"),b=y("TabPanel"),P=y("TabView");return r(),k("div",z,[s("div",M,[s("div",Q,[G,((C=t(e))==null?void 0:C.steadyStateSettings)==null?(r(),k("p",H,"Pyodide loading ...")):m("",!0)]),((U=t(e))==null?void 0:U.steadyStateSettings)!=null?(r(),k(L,{key:0},[s("div",K,[W,s("div",X,[s("div",Y,[l(n,{id:"chkJacobian",modelValue:t(e).steadyStateSettings.problem.JacobianRequested,"onUpdate:modelValue":a[0]||(a[0]=o=>t(e).steadyStateSettings.problem.JacobianRequested=o)},null,8,["modelValue"]),Z]),s("div",ee,[l(n,{id:"chkStability",modelValue:t(e).steadyStateSettings.problem.StabilityAnalysisRequested,"onUpdate:modelValue":a[1]||(a[1]=o=>t(e).steadyStateSettings.problem.StabilityAnalysisRequested=o)},null,8,["modelValue"]),te]),s("div",le,[ae,l(w,{id:"txtResolution",maxFractionDigits:20,modelValue:t(e).steadyStateSettings.method.Resolution,"onUpdate:modelValue":a[2]||(a[2]=o=>t(e).steadyStateSettings.method.Resolution=o)},null,8,["modelValue"])]),s("div",oe,[se,l(w,{id:"txtDerivation",maxFractionDigits:20,modelValue:t(e).steadyStateSettings.method.Derivation_Factor,"onUpdate:modelValue":a[3]||(a[3]=o=>t(e).steadyStateSettings.method.Derivation_Factor=o)},null,8,["modelValue"])]),s("div",ne,[l(n,{id:"chkNewton",modelValue:t(e).steadyStateSettings.method.Use_Newton,"onUpdate:modelValue":a[4]||(a[4]=o=>t(e).steadyStateSettings.method.Use_Newton=o)},null,8,["modelValue"]),ie]),s("div",de,[l(n,{id:"chkIntegration",modelValue:t(e).steadyStateSettings.method.Use_Integration,"onUpdate:modelValue":a[5]||(a[5]=o=>t(e).steadyStateSettings.method.Use_Integration=o)},null,8,["modelValue"]),re]),s("div",ue,[l(n,{id:"chkBackIntegration",modelValue:t(e).steadyStateSettings.method.Use_Back_Integration,"onUpdate:modelValue":a[6]||(a[6]=o=>t(e).steadyStateSettings.method.Use_Back_Integration=o)},null,8,["modelValue"]),ce]),s("div",me,[l(_,{label:"Run Task",class:"mr-2 mb-1",onClick:a[7]||(a[7]=o=>T())})]),pe])]),((I=t(e))==null?void 0:I.steadyStateResult)!=null?(r(),k("div",_e,[ye,s("p",null,u(t(e).steadyStateResult.status),1),l(P,null,{default:i(()=>[t(e).steadyStateResult.species!=null&&t(e).steadyStateResult.species.length>0?(r(),S(b,{key:0,header:"Species"},{default:i(()=>[l(f,{value:t(e).steadyStateResult.species,ref_key:"species_table",ref:g},{header:i(()=>[s("div",be,[l(_,{icon:"pi pi-external-link",label:"Export",onClick:a[8]||(a[8]=o=>A())})])]),default:i(()=>[l(d,{field:"name",header:"Name",sortable:!0}),l(d,{field:"concentration",sortable:!0},{header:i(()=>{var o,c;return[s("span",Se," Concentration ["+u((o=t(e).units)==null?void 0:o.quantity_unit)+"/"+u((c=t(e).units)==null?void 0:c.volume_unit)+"]",1)]}),_:1}),l(d,{field:"rate",sortable:!0},{header:i(()=>{var o,c,N;return[s("span",he," Rate ["+u((o=t(e).units)==null?void 0:o.quantity_unit)+"/("+u((c=t(e).units)==null?void 0:c.time_unit)+"*"+u((N=t(e).units)==null?void 0:N.volume_unit)+")]",1)]}),_:1}),l(d,{field:"type",header:"Type",sortable:!0})]),_:1},8,["value"])]),_:1})):m("",!0),t(e).steadyStateResult.compartments!=null&&t(e).steadyStateResult.compartments.length>0?(r(),S(b,{key:1,header:"Compartments"},{default:i(()=>[l(f,{value:t(e).steadyStateResult.compartments,itemid:"name",ref_key:"compartment_table",ref:R},{header:i(()=>[s("div",fe,[l(_,{icon:"pi pi-external-link",label:"Export",onClick:a[9]||(a[9]=o=>E())})])]),default:i(()=>[l(d,{field:"name",header:"Name",sortable:!0}),l(d,{field:"size",sortable:!0},{header:i(()=>{var o;return[s("span",ve," Volume ["+u((o=t(e).units)==null?void 0:o.volume_unit)+"]",1)]}),_:1}),l(d,{field:"rate",sortable:!0},{header:i(()=>{var o,c;return[s("span",ke," Rate ["+u((o=t(e).units)==null?void 0:o.volume_unit)+"/"+u((c=t(e).units)==null?void 0:c.time_unit)+"]",1)]}),_:1}),l(d,{field:"type",header:"Type",sortable:!0})]),_:1},8,["value"])]),_:1})):m("",!0),t(e).steadyStateResult.parameters!=null&&t(e).steadyStateResult.parameters.length>0?(r(),S(b,{key:2,header:"Model Quantities"},{default:i(()=>[l(f,{value:t(e).steadyStateResult.parameters,itemid:"name",ref_key:"parameter_table",ref:V},{header:i(()=>[s("div",ge,[l(_,{icon:"pi pi-external-link",label:"Export",onClick:a[10]||(a[10]=o=>F())})])]),default:i(()=>[l(d,{field:"name",header:"Name",sortable:!0}),l(d,{field:"value",header:"Value",sortable:!0}),l(d,{field:"rate",header:"Rate",sortable:!0}),l(d,{field:"type",header:"Type",sortable:!0})]),_:1},8,["value"])]),_:1})):m("",!0),t(e).steadyStateResult.reactions!=null&&t(e).steadyStateResult.reactions.length>0?(r(),S(b,{key:3,header:"Reactions"},{default:i(()=>[l(f,{value:t(e).steadyStateResult.reactions,itemid:"name",ref_key:"reactions_table",ref:x},{header:i(()=>[s("div",xe,[l(_,{icon:"pi pi-external-link",label:"Export",onClick:a[11]||(a[11]=o=>D())})])]),default:i(()=>[l(d,{field:"name",header:"Name",sortable:!0}),l(d,{field:"flux",header:"Flux",sortable:!0}),l(d,{field:"scheme",header:"Reaction",sortable:!0})]),_:1},8,["value"])]),_:1})):m("",!0),t(e).steadyStateSettings.problem.StabilityAnalysisRequested?(r(),S(b,{key:4,header:"Stability"},{default:i(()=>[s("div",Re,[l(_,{icon:"pi pi-external-link",label:"Export",onClick:a[12]||(a[12]=o=>$())})]),l(t(B),{modelValue:t(e).steadyStateResult.stability,"onUpdate:modelValue":a[13]||(a[13]=o=>t(e).steadyStateResult.stability=o),rows:35,style:{width:"100%"},readonly:!0},null,8,["modelValue"])]),_:1})):m("",!0),l(b,{header:"Protocol"},{default:i(()=>[s("div",Ve,[l(_,{icon:"pi pi-external-link",label:"Export",onClick:a[14]||(a[14]=o=>q())})]),l(t(B),{modelValue:t(e).steadyStateResult.protocol,"onUpdate:modelValue":a[15]||(a[15]=o=>t(e).steadyStateResult.protocol=o),rows:20,style:{width:"100%"},readonly:!0},null,8,["modelValue"])]),_:1})]),_:1})])):m("",!0)],64)):m("",!0)])])}}});export{Ue as default};

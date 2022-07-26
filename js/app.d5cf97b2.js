(function(e){function t(t){for(var r,l,i=t[0],s=t[1],o=t[2],d=0,b=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&b.push(n[l][0]),n[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,o||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],r=!0,i=1;i<a.length;i++){var s=a[i];0!==n[s]&&(r=!1)}r&&(c.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},n={app:0},c=[];function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/gateway-peripheral-fe/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var u=s;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},9450:function(e,t,a){"use strict";a("ca3d")},ca3d:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);var r=a("7a23");function n(e,t,a,n,c,l){const i=Object(r["J"])("GatewaysTable");return Object(r["D"])(),Object(r["k"])(i)}const c=Object(r["n"])("p",null,"No gateway created yet",-1),l=Object(r["o"])("Create gateway");function i(e,t,a,n,i,s){const o=Object(r["J"])("peripherals-table"),u=Object(r["J"])("PlusOutlined"),d=Object(r["J"])("a-button"),b=Object(r["J"])("DeleteOutlined"),p=Object(r["J"])("a-popconfirm"),y=Object(r["J"])("a-table"),O=Object(r["J"])("create-gateway-modal");return Object(r["D"])(),Object(r["m"])(r["b"],null,[Object(r["p"])(y,{columns:e.columns,"data-source":e.gateways,pagination:!1,loading:e.isLoading,rowKey:"serialNumber",scroll:{x:600}},{expandedRowRender:Object(r["U"])(({record:t})=>[Object(r["p"])(o,{gatewayId:t._id,peripherals:t.peripherals,onRefresh:e.refreshGateways},null,8,["gatewayId","peripherals","onRefresh"])]),headerCell:Object(r["U"])(({column:a})=>["actions"===a.key?(Object(r["D"])(),Object(r["m"])(r["b"],{key:0},[Object(r["p"])(d,{type:"primary",shape:"circle",onClick:t[0]||(t[0]=t=>e.createGatewayModalVisibility=!0)},{icon:Object(r["U"])(()=>[Object(r["p"])(u)]),_:1}),Object(r["o"])(" "+Object(r["M"])(a.title),1)],64)):Object(r["l"])("",!0)]),bodyCell:Object(r["U"])(({column:t,record:a})=>["actions"===t.key?(Object(r["D"])(),Object(r["k"])(p,{key:0,title:"Are you sure you want to delete this gateway?",okType:"danger",onConfirm:t=>e.onDeleteGateway(a)},{default:Object(r["U"])(()=>[Object(r["p"])(d,{type:"danger",shape:"circle"},{icon:Object(r["U"])(()=>[Object(r["p"])(b)]),_:1})]),_:2},1032,["onConfirm"])):Object(r["l"])("",!0)]),emptyText:Object(r["U"])(()=>[c,Object(r["p"])(d,{type:"primary",onClick:t[1]||(t[1]=t=>e.createGatewayModalVisibility=!0)},{default:Object(r["U"])(()=>[l]),_:1})]),_:1},8,["columns","data-source","loading"]),Object(r["p"])(O,{isVisible:e.createGatewayModalVisibility,onClose:t[2]||(t[2]=t=>e.createGatewayModalVisibility=!1),onSuccess:e.gatewayCreated},null,8,["isVisible","onSuccess"])],64)}var s=a("bc3a"),o=a.n(s);const u=o.a.create({baseURL:"https://musala-test-be.herokuapp.com/"}),d=()=>new Promise((e,t)=>{u.get("gateway/").then(t=>{const{data:a}=t,{items:r}=a;e(r)}).catch(e=>{e.response?t(e.response.data):e.request&&t(e.request)})}),b=e=>new Promise((t,a)=>{u.delete("gateway/"+e).then(e=>{const{data:a}=e,{items:r}=a;t(r)}).catch(e=>{e.response?a(e.response.data):e.request&&a(e.request)})}),p=(e,t,a)=>new Promise((r,n)=>{u.post("gateway/",{serialNumber:e,address:t,label:a}).then(e=>{const{data:t}=e,{items:a}=t;r(a)}).catch(e=>{e.response?n(e.response.data):e.request&&n(e.request)})}),y=e=>new Promise((t,a)=>{u.delete("peripheral/"+e).then(e=>{const{data:a}=e,{items:r}=a;t(r)}).catch(e=>{e.response?a(e.response.data):e.request&&a(e.request)})}),O=(e,t,a,r)=>new Promise((n,c)=>{u.post("peripheral/",{gateway:e,vendor:t,uid:a,status:r}).then(e=>{const{data:t}=e,{items:a}=t;n(a)}).catch(e=>{e.response?c(e.response.data):e.request&&c(e.request)})});var j=a("56cd");a("8b35");const h=(e,t,a="")=>{const r={message:t,description:a};"success"===e?j["a"].success(r):"warning"===e?j["a"].warning(r):j["a"].error(r)},m=e=>{const t=[];if(e.error.errors){const{errors:a}=e.error;Object.keys(a).forEach(e=>{t.push(a[e].message)})}return 11e3===e.error.code&&t.push("Serial Number must be unique"),t.join("\n")},g=e=>{const t=new Date(e);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()} ${t.getHours()}:${t.getMinutes()}`},w=Object(r["n"])("hr",null,null,-1),f=Object(r["n"])("hr",null,null,-1);function v(e,t,a,n,c,l){const i=Object(r["J"])("a-input"),s=Object(r["J"])("modal");return Object(r["D"])(),Object(r["k"])(s,{visible:e.isVisible,"mask-closable":!1,"confirm-loading":e.isLoading,title:"Create Gateway",onCancel:e.emitCloseEvent,onOk:e.onCreateGateway},{default:Object(r["U"])(()=>[Object(r["p"])(i,{value:e.uniqueSerialNumber,"onUpdate:value":t[0]||(t[0]=t=>e.uniqueSerialNumber=t),placeholder:"Serial Number","allow-clear":!0},null,8,["value"]),w,Object(r["p"])(i,{value:e.label,"onUpdate:value":t[1]||(t[1]=t=>e.label=t),placeholder:"Label","allow-clear":!0},null,8,["value"]),f,Object(r["p"])(i,{value:e.address,"onUpdate:value":t[2]||(t[2]=t=>e.address=t),placeholder:"IP Address","allow-clear":!0},null,8,["value"])]),_:1},8,["visible","confirm-loading","onCancel","onOk"])}var k=a("ed3b"),P=a("b558"),C=(a("cd09"),a("1325"),Object(r["q"])({name:"CreateGatewayModal",components:{Modal:k["a"],AInput:P["a"]},props:{isVisible:{type:Boolean,required:!0}},setup(e,t){const a=Object(r["F"])({uniqueSerialNumber:"",address:"",label:"",isLoading:!1}),n=()=>{a.uniqueSerialNumber="",a.label="",a.address="",t.emit("close")},c=async()=>{try{a.isLoading=!0,await p(a.uniqueSerialNumber,a.address,a.label),h("success","Gateway succesfully created"),a.uniqueSerialNumber="",a.label="",a.address="",t.emit("success")}catch(e){const t=m(e);h("error","Gateway couldn´t be created",t)}finally{a.isLoading=!1}};return{props:e,emitCloseEvent:n,onCreateGateway:c,...Object(r["P"])(a)}}})),q=a("d959"),M=a.n(q);const U=M()(C,[["render",v]]);var D=U;function S(e,t,a,n,c,l){const i=Object(r["J"])("DeleteOutlined"),s=Object(r["J"])("a-button"),o=Object(r["J"])("a-popconfirm"),u=Object(r["J"])("a-switch"),d=Object(r["J"])("PlusOutlined"),b=Object(r["J"])("a-table"),p=Object(r["J"])("create-peripheral-modal");return Object(r["D"])(),Object(r["m"])(r["b"],null,[Object(r["p"])(b,{columns:e.columns,"data-source":e.peripherals,pagination:!1,loading:e.isLoading,scroll:{x:600}},{bodyCell:Object(r["U"])(({column:t,record:a})=>["createdAt"===t.key?(Object(r["D"])(),Object(r["m"])(r["b"],{key:0},[Object(r["o"])(Object(r["M"])(e.formatDate(a.createdAt)),1)],64)):Object(r["l"])("",!0),"actions"===t.key?(Object(r["D"])(),Object(r["k"])(o,{key:1,title:"Are you sure you want to delete this peripheral?",okType:"danger",onConfirm:t=>e.onDeletePeripheral(a)},{default:Object(r["U"])(()=>[Object(r["p"])(s,{type:"danger",shape:"circle"},{icon:Object(r["U"])(()=>[Object(r["p"])(i)]),_:1})]),_:2},1032,["onConfirm"])):Object(r["l"])("",!0),"status"===t.key?(Object(r["D"])(),Object(r["k"])(u,{key:2,checked:a.status,"onUpdate:checked":e=>a.status=e,"checked-children":"ON","un-checked-children":"OFF",disabled:!0},null,8,["checked","onUpdate:checked"])):Object(r["l"])("",!0)]),headerCell:Object(r["U"])(({column:a})=>["actions"===a.key?(Object(r["D"])(),Object(r["m"])(r["b"],{key:0},[Object(r["p"])(s,{type:"primary",shape:"circle",onClick:t[0]||(t[0]=t=>e.createPeripheralModalVisibility=!0)},{icon:Object(r["U"])(()=>[Object(r["p"])(d)]),_:1}),Object(r["o"])(" "+Object(r["M"])(a.title),1)],64)):Object(r["l"])("",!0)]),_:1},8,["columns","data-source","loading"]),Object(r["p"])(p,{isVisible:e.createPeripheralModalVisibility,gatewayId:e.gatewayId,onClose:t[1]||(t[1]=t=>e.createPeripheralModalVisibility=!1),onSuccess:e.peripheralCreated},null,8,["isVisible","gatewayId","onSuccess"])],64)}var A=a("47ce"),J=a("b1c8");const N=Object(r["n"])("hr",null,null,-1),G={class:"status-uid-container"},I=Object(r["n"])("span",null,"UID:",-1),V=Object(r["n"])("span",null,"Status:",-1);function L(e,t,a,n,c,l){const i=Object(r["J"])("a-input"),s=Object(r["J"])("a-input-number"),o=Object(r["J"])("a-switch"),u=Object(r["J"])("modal");return Object(r["D"])(),Object(r["k"])(u,{visible:e.isVisible,"mask-closable":!1,"confirm-loading":e.isLoading,title:"Create Peripheral",onCancel:e.emitCloseEvent,onOk:e.onCreatePeripheral},{default:Object(r["U"])(()=>[Object(r["p"])(i,{value:e.vendor,"onUpdate:value":t[0]||(t[0]=t=>e.vendor=t),placeholder:"Vendor","allow-clear":!0},null,8,["value"]),N,Object(r["n"])("div",G,[Object(r["n"])("div",null,[I,Object(r["p"])(s,{value:e.uid,"onUpdate:value":t[1]||(t[1]=t=>e.uid=t)},null,8,["value"])]),Object(r["n"])("div",null,[V,Object(r["p"])(o,{checked:e.status,"onUpdate:checked":t[2]||(t[2]=t=>e.status=t),"checked-children":"ON","un-checked-children":"OFF"},null,8,["checked"])])])]),_:1},8,["visible","confirm-loading","onCancel","onOk"])}var _=a("09d9"),x=a("160c"),T=(a("99bf"),a("f762"),Object(r["q"])({name:"CreatePeripheralModal",components:{Modal:k["a"],AInput:P["a"],AInputNumber:_["a"],ASwitch:x["a"]},props:{isVisible:{type:Boolean,required:!0},gatewayId:{type:String,required:!0}},setup(e,t){const a=Object(r["F"])({vendor:"",uid:NaN,status:!1,isLoading:!1}),n=()=>{a.vendor="",a.uid=NaN,a.status=!1,t.emit("close")},c=async()=>{try{a.isLoading=!0,await O(e.gatewayId,a.vendor,a.uid,a.status),h("success","Peripheral succesfully created"),a.vendor="",a.uid=NaN,a.status=!1,t.emit("success")}catch(r){const e=m(r);h("error","Peripheral couldn´t be created",e)}finally{a.isLoading=!1}};return{props:e,emitCloseEvent:n,...Object(r["P"])(a),onCreatePeripheral:c}}}));a("9450");const F=M()(T,[["render",L]]);var E=F,R=a("0020"),$=a("5efb"),B=a("768f"),H=(a("5785"),a("84d1"),Object(r["q"])({name:"PeripheralsTable",components:{ATable:R["a"],AButton:$["a"],PlusOutlined:A["a"],DeleteOutlined:J["a"],CreatePeripheralModal:E,ASwitch:x["a"],APopconfirm:B["a"]},props:{peripherals:{type:Array,required:!0},gatewayId:{type:String,required:!0}},emits:["refresh"],setup(e,t){const a=Object(r["F"])({columns:[{title:"Status",dataIndex:"status",key:"status"},{title:"UID",dataIndex:"uid",key:"uid"},{title:"Vendor",dataIndex:"vendor",key:"vendor"},{title:"Created At",dataIndex:"createdAt",key:"createdAt"},{title:"Actions",key:"actions"}],isLoading:!1,createPeripheralModalVisibility:!1}),n=async()=>{a.createPeripheralModalVisibility=!1,t.emit("refresh")},c=async e=>{try{a.isLoading=!0,await y(e._id),h("success","Gateway succesfully deleted"),t.emit("refresh")}catch(r){console.log("Error while deleting gateway: ",r)}finally{a.isLoading=!1}};return{...Object(r["P"])(a),props:e,peripheralCreated:n,onDeletePeripheral:c,formatDate:g}}}));const K=M()(H,[["render",S]]);var Y=K,z=Object(r["q"])({name:"GatewaysTable",components:{ATable:R["a"],AButton:$["a"],DeleteOutlined:J["a"],APopconfirm:B["a"],PeripheralsTable:Y,CreateGatewayModal:D,PlusOutlined:A["a"]},setup(){const e=Object(r["F"])({columns:[{title:"Serial Number",dataIndex:"serialNumber",key:"serialNumber"},{title:"Label",dataIndex:"label",key:"label"},{title:"IPv4 address",dataIndex:"address",key:"address"},{title:"Actions",key:"actions"}],gateways:[],isLoading:!0,createGatewayModalVisibility:!1,peripheralsModalVisibility:!1}),t=async t=>{try{e.isLoading=!0,await b(t._id),h("success","Gateway succesfully deleted"),await a()}catch(r){console.log("Error while deleting gateway: ",r)}finally{e.isLoading=!1}},a=async()=>{try{e.isLoading=!0,e.gateways=await d()}catch(t){console.log("Error while getting gateways")}finally{e.isLoading=!1}},n=async()=>{e.createGatewayModalVisibility=!1,await a()};return a(),{...Object(r["P"])(e),onDeleteGateway:t,gatewayCreated:n,refreshGateways:a}}});const Q=M()(z,[["render",i]]);var W=Q,X=Object(r["q"])({name:"App",components:{GatewaysTable:W}});const Z=M()(X,[["render",n]]);var ee=Z;Object(r["j"])(ee).mount("#app")}});
//# sourceMappingURL=app.d5cf97b2.js.map
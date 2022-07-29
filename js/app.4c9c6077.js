(function(e){function a(a){for(var r,s,n=a[0],o=a[1],c=a[2],u=0,b=[];u<n.length;u++)s=n[u],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&b.push(l[s][0]),l[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);d&&d(a);while(b.length)b.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,a=0;a<i.length;a++){for(var t=i[a],r=!0,n=1;n<t.length;n++){var o=t[n];0!==l[o]&&(r=!1)}r&&(i.splice(a--,1),e=s(s.s=t[0]))}return e}var r={},l={app:0},i=[];function s(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=r,s.d=function(e,a,t){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)s.d(t,r,function(a){return e[a]}.bind(null,r));return t},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="/gateway-peripheral-fe/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=a,n=n.slice();for(var c=0;c<n.length;c++)a(n[c]);var d=o;i.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("cd49")},cd49:function(e,a,t){"use strict";t.r(a);var r=t("7a23");function l(e,a,t,l,i,s){const n=Object(r["J"])("GatewaysTable");return Object(r["D"])(),Object(r["k"])(n)}const i=Object(r["n"])("p",null,"No gateway created yet",-1),s=Object(r["o"])("Create gateway");function n(e,a,t,l,n,o){const c=Object(r["J"])("peripherals-table"),d=Object(r["J"])("PlusOutlined"),u=Object(r["J"])("a-button"),b=Object(r["J"])("DeleteOutlined"),p=Object(r["J"])("a-popconfirm"),O=Object(r["J"])("a-table"),y=Object(r["J"])("create-gateway-modal");return Object(r["D"])(),Object(r["m"])(r["b"],null,[Object(r["p"])(O,{columns:e.columns,"data-source":e.gateways,pagination:!1,loading:e.isLoading,rowKey:"serialNumber",scroll:{x:600}},{expandedRowRender:Object(r["U"])(({record:a})=>[Object(r["p"])(c,{gatewayId:a._id,peripherals:a.peripherals,onRefresh:e.refreshGateways},null,8,["gatewayId","peripherals","onRefresh"])]),headerCell:Object(r["U"])(({column:t})=>["actions"===t.key?(Object(r["D"])(),Object(r["m"])(r["b"],{key:0},[Object(r["p"])(u,{type:"primary",shape:"circle",onClick:a[0]||(a[0]=a=>e.createGatewayModalVisibility=!0)},{icon:Object(r["U"])(()=>[Object(r["p"])(d)]),_:1}),Object(r["o"])(" "+Object(r["M"])(t.title),1)],64)):Object(r["l"])("",!0)]),bodyCell:Object(r["U"])(({column:a,record:t})=>["actions"===a.key?(Object(r["D"])(),Object(r["k"])(p,{key:0,title:"Are you sure you want to delete this gateway?",okType:"danger",onConfirm:a=>e.onDeleteGateway(t)},{default:Object(r["U"])(()=>[Object(r["p"])(u,{type:"danger",shape:"circle"},{icon:Object(r["U"])(()=>[Object(r["p"])(b)]),_:1})]),_:2},1032,["onConfirm"])):Object(r["l"])("",!0)]),emptyText:Object(r["U"])(()=>[i,Object(r["p"])(u,{type:"primary",onClick:a[1]||(a[1]=a=>e.createGatewayModalVisibility=!0)},{default:Object(r["U"])(()=>[s]),_:1})]),_:1},8,["columns","data-source","loading"]),Object(r["p"])(y,{isVisible:e.createGatewayModalVisibility,onClose:a[2]||(a[2]=a=>e.createGatewayModalVisibility=!1),onSuccess:e.gatewayCreated},null,8,["isVisible","onSuccess"])],64)}var o=t("bc3a"),c=t.n(o);const d=c.a.create({baseURL:"https://musala-test-be.herokuapp.com/"}),u=()=>new Promise((e,a)=>{d.get("gateway/").then(a=>{const{data:t}=a,{items:r}=t;e(r)}).catch(e=>{e.response?a(e.response.data):e.request&&a(e.request)})}),b=e=>new Promise((a,t)=>{d.delete("gateway/"+e).then(e=>{const{data:t}=e,{items:r}=t;a(r)}).catch(e=>{e.response?t(e.response.data):e.request&&t(e.request)})}),p=(e,a,t)=>new Promise((r,l)=>{d.post("gateway/",{serialNumber:e,address:a,label:t}).then(e=>{const{data:a}=e,{items:t}=a;r(t)}).catch(e=>{e.response?l(e.response.data):e.request&&l(e.request)})}),O=e=>new Promise((a,t)=>{d.delete("peripheral/"+e).then(e=>{const{data:t}=e,{items:r}=t;a(r)}).catch(e=>{e.response?t(e.response.data):e.request&&t(e.request)})}),y=(e,a,t,r)=>new Promise((l,i)=>{d.post("peripheral/",{gateway:e,vendor:a,uid:t,status:r}).then(e=>{const{data:a}=e,{items:t}=a;l(t)}).catch(e=>{e.response?i(e.response.data):e.request&&i(e.request)})});var j=t("56cd");t("8b35");const m=(e,a,t="")=>{const r={message:a,description:t};"success"===e?j["a"].success(r):"warning"===e?j["a"].warning(r):j["a"].error(r)},f=e=>{const a=[];if(e.error.errors){const{errors:t}=e.error;Object.keys(t).forEach(e=>{a.push(t[e].message)})}return 11e3===e.error.code&&a.push("Serial Number must be unique"),a.join("\n")},h=e=>{const a=new Date(e);return`${a.getDate()}/${a.getMonth()+1}/${a.getFullYear()} ${a.getHours()}:${a.getMinutes()}`};function g(e,a,t,l,i,s){const n=Object(r["J"])("a-input"),o=Object(r["J"])("a-form-item"),c=Object(r["J"])("a-form"),d=Object(r["J"])("modal");return Object(r["D"])(),Object(r["k"])(d,{visible:e.isVisible,"mask-closable":!1,"confirm-loading":e.data.isLoading,title:"Create Gateway",onCancel:e.emitCloseEvent,onOk:e.fieldsValidation},{default:Object(r["U"])(()=>[Object(r["p"])(c,{model:e.data,"label-col":{span:8},"wrapper-col":{span:16},autocomplete:"off",name:"form_in_modal",ref:"formRef"},{default:Object(r["U"])(()=>[Object(r["p"])(o,{label:"Serial Number",name:"uniqueSerialNumber",rules:[{required:!0,message:"Serial Number is required!"}]},{default:Object(r["U"])(()=>[Object(r["p"])(n,{value:e.data.uniqueSerialNumber,"onUpdate:value":a[0]||(a[0]=a=>e.data.uniqueSerialNumber=a),placeholder:"Serial Number","allow-clear":!0,disabled:e.data.isLoading},null,8,["value","disabled"])]),_:1}),Object(r["p"])(o,{label:"Label",name:"label",rules:[{required:!0,message:"Label is required!"}]},{default:Object(r["U"])(()=>[Object(r["p"])(n,{value:e.data.label,"onUpdate:value":a[1]||(a[1]=a=>e.data.label=a),placeholder:"Label","allow-clear":!0,disabled:e.data.isLoading},null,8,["value","disabled"])]),_:1}),Object(r["p"])(o,{label:"IP Address",name:"address",rules:[{required:!0,message:"IP Address is required!"},{validator:e.ipAddressValidation}]},{default:Object(r["U"])(()=>[Object(r["p"])(n,{value:e.data.address,"onUpdate:value":a[2]||(a[2]=a=>e.data.address=a),placeholder:"IP Address","allow-clear":!0,disabled:e.data.isLoading},null,8,["value","disabled"])]),_:1},8,["rules"])]),_:1},8,["model"])]),_:1},8,["visible","confirm-loading","onCancel","onOk"])}t("d9e2");const w=(e,a)=>/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/.test(a)||!a.length?Promise.resolve():Promise.reject(new Error("This is not a valid IP Address"));var v=t("ed3b"),k=t("b558"),P=t("3af3"),U=t("322e"),q=(t("cd09"),t("1325"),t("ad26"),Object(r["q"])({name:"CreateGatewayModal",components:{Modal:v["a"],AInput:k["a"],AForm:P["a"],AFormItem:U["a"]},props:{isVisible:{type:Boolean,required:!0}},setup(e,a){const t=Object(r["G"])(),l=Object(r["F"])({uniqueSerialNumber:"",address:"",label:"",isLoading:!1}),i=()=>{var e;l.isLoading||(null===(e=t.value)||void 0===e||e.resetFields(),a.emit("close"))},s=async()=>{try{var e;l.isLoading=!0,await p(l.uniqueSerialNumber,l.address,l.label),m("success","Gateway succesfully created"),null===(e=t.value)||void 0===e||e.resetFields(),a.emit("success")}catch(r){const e=f(r);m("error","Gateway couldn´t be created",e)}finally{l.isLoading=!1}},n=async()=>{try{var e;await(null===(e=t.value)||void 0===e?void 0:e.validateFields()),await s()}catch(a){console.log("Validation error info: ",a)}};return{props:e,emitCloseEvent:i,data:l,fieldsValidation:n,formRef:t,ipAddressValidation:w}}})),C=t("d959"),V=t.n(C);const _=V()(q,[["render",g]]);var A=_;const L=Object(r["n"])("p",null,"No peripheral created yet",-1),I=Object(r["o"])("Create peripheral");function M(e,a,t,l,i,s){const n=Object(r["J"])("DeleteOutlined"),o=Object(r["J"])("a-button"),c=Object(r["J"])("a-popconfirm"),d=Object(r["J"])("a-switch"),u=Object(r["J"])("PlusOutlined"),b=Object(r["J"])("a-table"),p=Object(r["J"])("create-peripheral-modal");return Object(r["D"])(),Object(r["m"])(r["b"],null,[Object(r["p"])(b,{columns:e.columns,"data-source":e.peripherals,pagination:!1,loading:e.isLoading,scroll:{x:600}},{bodyCell:Object(r["U"])(({column:a,record:t})=>["createdAt"===a.key?(Object(r["D"])(),Object(r["m"])(r["b"],{key:0},[Object(r["o"])(Object(r["M"])(e.formatDate(t.createdAt)),1)],64)):Object(r["l"])("",!0),"actions"===a.key?(Object(r["D"])(),Object(r["k"])(c,{key:1,title:"Are you sure you want to delete this peripheral?",okType:"danger",onConfirm:a=>e.onDeletePeripheral(t)},{default:Object(r["U"])(()=>[Object(r["p"])(o,{type:"danger",shape:"circle"},{icon:Object(r["U"])(()=>[Object(r["p"])(n)]),_:1})]),_:2},1032,["onConfirm"])):Object(r["l"])("",!0),"status"===a.key?(Object(r["D"])(),Object(r["k"])(d,{key:2,checked:t.status,"onUpdate:checked":e=>t.status=e,"checked-children":"ON","un-checked-children":"OFF",disabled:!0},null,8,["checked","onUpdate:checked"])):Object(r["l"])("",!0)]),headerCell:Object(r["U"])(({column:t})=>["actions"===t.key?(Object(r["D"])(),Object(r["m"])(r["b"],{key:0},[Object(r["p"])(o,{type:"primary",shape:"circle",onClick:a[0]||(a[0]=a=>e.createPeripheralModalVisibility=!0)},{icon:Object(r["U"])(()=>[Object(r["p"])(u)]),_:1}),Object(r["o"])(" "+Object(r["M"])(t.title),1)],64)):Object(r["l"])("",!0)]),emptyText:Object(r["U"])(()=>[L,Object(r["p"])(o,{type:"primary",onClick:a[1]||(a[1]=a=>e.createPeripheralModalVisibility=!0)},{default:Object(r["U"])(()=>[I]),_:1})]),_:1},8,["columns","data-source","loading"]),Object(r["p"])(p,{isVisible:e.createPeripheralModalVisibility,gatewayId:e.gatewayId,onClose:a[2]||(a[2]=a=>e.createPeripheralModalVisibility=!1),onSuccess:e.peripheralCreated},null,8,["isVisible","gatewayId","onSuccess"])],64)}var D=t("47ce"),J=t("b1c8");function S(e,a,t,l,i,s){const n=Object(r["J"])("a-input"),o=Object(r["J"])("a-form-item"),c=Object(r["J"])("a-switch"),d=Object(r["J"])("a-form"),u=Object(r["J"])("modal");return Object(r["D"])(),Object(r["k"])(u,{visible:e.isVisible,"mask-closable":!1,"confirm-loading":e.data.isLoading,title:"Create Peripheral",onCancel:e.emitCloseEvent,onOk:e.fieldsValidation},{default:Object(r["U"])(()=>[Object(r["p"])(d,{model:e.data,"label-col":{span:8},"wrapper-col":{span:16},autocomplete:"off",name:"form_in_modal",ref:"formRef"},{default:Object(r["U"])(()=>[Object(r["p"])(o,{label:"Vendor",name:"vendor",rules:[{required:!0,message:"Vendor is required!"}]},{default:Object(r["U"])(()=>[Object(r["p"])(n,{value:e.data.vendor,"onUpdate:value":a[0]||(a[0]=a=>e.data.vendor=a),placeholder:"Vendor","allow-clear":!0,disabled:e.data.isLoading},null,8,["value","disabled"])]),_:1}),Object(r["p"])(o,{label:"UID",name:"uid",rules:[{required:!0,message:"UID is required!"}]},{default:Object(r["U"])(()=>[Object(r["p"])(n,{value:e.data.uid,"onUpdate:value":a[1]||(a[1]=a=>e.data.uid=a),placeholder:"UID",type:"number",disabled:e.data.isLoading},null,8,["value","disabled"])]),_:1}),Object(r["p"])(o,{label:"Status",name:"status"},{default:Object(r["U"])(()=>[Object(r["p"])(c,{checked:e.data.status,"onUpdate:checked":a[2]||(a[2]=a=>e.data.status=a),"checked-children":"ON","un-checked-children":"OFF",disabled:e.data.isLoading},null,8,["checked","disabled"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","confirm-loading","onCancel","onOk"])}var G=t("160c"),F=(t("99bf"),t("f762"),Object(r["q"])({name:"CreatePeripheralModal",components:{Modal:v["a"],AInput:k["a"],ASwitch:G["a"],AForm:P["a"],AFormItem:U["a"]},props:{isVisible:{type:Boolean,required:!0},gatewayId:{type:String,required:!0}},setup(e,a){const t=Object(r["G"])(),l=Object(r["F"])({vendor:"",uid:"",status:!1,isLoading:!1}),i=()=>{var e;l.isLoading||(null===(e=t.value)||void 0===e||e.resetFields(),a.emit("close"))},s=async()=>{try{var r;l.isLoading=!0,await y(e.gatewayId,l.vendor,Number(l.uid),l.status),m("success","Peripheral succesfully created"),null===(r=t.value)||void 0===r||r.resetFields(),a.emit("success")}catch(i){const e=f(i);m("error","Peripheral couldn´t be created",e)}finally{l.isLoading=!1}},n=async()=>{try{var e;await(null===(e=t.value)||void 0===e?void 0:e.validateFields()),await s()}catch(a){console.log("Validation error info: ",a)}};return{props:e,emitCloseEvent:i,data:l,formRef:t,fieldsValidation:n}}}));const N=V()(F,[["render",S]]);var x=N,T=t("0020"),E=t("5efb"),R=t("768f"),$=(t("5785"),t("84d1"),Object(r["q"])({name:"PeripheralsTable",components:{ATable:T["a"],AButton:E["a"],PlusOutlined:D["a"],DeleteOutlined:J["a"],CreatePeripheralModal:x,ASwitch:G["a"],APopconfirm:R["a"]},props:{peripherals:{type:Array,required:!0},gatewayId:{type:String,required:!0}},emits:["refresh"],setup(e,a){const t=Object(r["F"])({columns:[{title:"Status",dataIndex:"status",key:"status"},{title:"UID",dataIndex:"uid",key:"uid"},{title:"Vendor",dataIndex:"vendor",key:"vendor"},{title:"Created At",dataIndex:"createdAt",key:"createdAt"},{title:"Actions",key:"actions"}],isLoading:!1,createPeripheralModalVisibility:!1}),l=async()=>{t.createPeripheralModalVisibility=!1,a.emit("refresh")},i=async e=>{try{t.isLoading=!0,await O(e._id),m("success","Peripheral succesfully deleted"),a.emit("refresh")}catch(r){console.log("Error while deleting gateway: ",r)}finally{t.isLoading=!1}};return{...Object(r["P"])(t),props:e,peripheralCreated:l,onDeletePeripheral:i,formatDate:h}}}));const B=V()($,[["render",M]]);var H=B,K=Object(r["q"])({name:"GatewaysTable",components:{ATable:T["a"],AButton:E["a"],DeleteOutlined:J["a"],APopconfirm:R["a"],PeripheralsTable:H,CreateGatewayModal:A,PlusOutlined:D["a"]},setup(){const e=Object(r["F"])({columns:[{title:"Serial Number",dataIndex:"serialNumber",key:"serialNumber"},{title:"Label",dataIndex:"label",key:"label"},{title:"IPv4 address",dataIndex:"address",key:"address"},{title:"Actions",key:"actions"}],gateways:[],isLoading:!0,createGatewayModalVisibility:!1,peripheralsModalVisibility:!1}),a=async a=>{try{e.isLoading=!0,await b(a._id),m("success","Gateway succesfully deleted"),await t()}catch(r){console.log("Error while deleting gateway: ",r)}finally{e.isLoading=!1}},t=async()=>{try{e.isLoading=!0,e.gateways=await u()}catch(a){console.log("Error while getting gateways")}finally{e.isLoading=!1}},l=async()=>{e.createGatewayModalVisibility=!1,await t()};return t(),{...Object(r["P"])(e),onDeleteGateway:a,gatewayCreated:l,refreshGateways:t}}});const Y=V()(K,[["render",n]]);var z=Y,Q=Object(r["q"])({name:"App",components:{GatewaysTable:z}});const W=V()(Q,[["render",l]]);var X=W;Object(r["j"])(X).mount("#app")}});
//# sourceMappingURL=app.4c9c6077.js.map
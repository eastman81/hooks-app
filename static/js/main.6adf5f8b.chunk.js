(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{14:function(e,t,n){e.exports=n(25)},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),c=n.n(l),o=(n(19),n(6)),i=n(5),u=n(29),m=n(13);var s=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),l=n[0],c=n[1],o=Object(a.useState)(1),s=Object(i.a)(o,2),p=s[0],E=s[1];return r.a.createElement(u.a,{onSubmit:function(t){t.preventDefault(),l&&p&&(e.addItem(l),e.addCount(parseInt(p)),c(""),E(1))},id:"form"},r.a.createElement(u.a.Row,null,r.a.createElement(m.a,null,r.a.createElement(u.a.Control,{as:"select",id:"formSelect",value:p,onChange:function(e){return E(e.target.value)}},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"),r.a.createElement("option",null,"6"),r.a.createElement("option",null,"7"),r.a.createElement("option",null,"8"),r.a.createElement("option",null,"9"),r.a.createElement("option",null,"10"),r.a.createElement("option",null,"11"),r.a.createElement("option",null,"12"))),r.a.createElement(m.a,null,r.a.createElement(u.a.Control,{type:"text",placeholder:"Item name",id:"formEnter",value:l,onChange:function(e){return c(e.target.value)}}))))},p=n(26),E=n(30);var d=function(e){var t=e.count[e.index].number>1?e.count[e.index].number:"";return r.a.createElement(p.a,{className:"itemList"},r.a.createElement(m.a,{id:"itemInfo",sm:9,style:{textDecoration:e.item.isInCart&&"line-through"}},"".concat(t," ").concat(e.item.text)),r.a.createElement(m.a,{className:"text-right",id:"itemButtons",sm:3},r.a.createElement(E.a,{id:"slashButton",variant:"secondary",size:"sm",style:{marginRight:"4px"},onClick:function(){return e.editItem(e.index)}},e.item.isInCart?"Re-Add":"Cross Off"),r.a.createElement(E.a,{id:"removeButton",variant:"danger",size:"sm",onClick:function(){return e.removeItem(e.index)}},"x")))},f=n(27),b=n(28);n(24);var v=function(){var e=Object(a.useState)([{text:"Milk",isInCart:!1},{text:"Eggs",isInCart:!1}]),t=Object(i.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)([{number:1},{number:12}]),u=Object(i.a)(c,2),E=u[0],v=u[1],C=function(e){var t=Object(o.a)(n);!1===n[e].isInCart?t[e].isInCart=!0:t[e].isInCart=!1,l(t)},I=function(e){var t=Object(o.a)(n),a=Object(o.a)(E);t.splice(e,1),a.splice(e,1),l(t),v(a)};return r.a.createElement(f.a,{className:"app"},r.a.createElement(b.a,null,r.a.createElement("h2",null,"Shopping Cart"),n.map((function(e,t){return r.a.createElement(d,{key:t,index:t,item:e,count:E,editItem:C,removeItem:I})})),r.a.createElement(p.a,null,r.a.createElement(m.a,null,r.a.createElement(s,{addItem:function(e){var t=[].concat(Object(o.a)(n),[{text:e,isInCart:!1}]);l(t)},addCount:function(e){var t=[].concat(Object(o.a)(E),[{number:e}]);v(t)}})))))};c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6adf5f8b.chunk.js.map
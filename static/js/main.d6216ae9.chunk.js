(this["webpackJsonpmy-todo-list"]=this["webpackJsonpmy-todo-list"]||[]).push([[0],[,,,function(t,e,n){t.exports={backdrop:"ErrorModal_backdrop__1-Q7n",modal:"ErrorModal_modal__1m-bO",header:"ErrorModal_header__1nb7G",content:"ErrorModal_content__PQEG_",actions:"ErrorModal_actions__fwU_O"}},,,,,function(t,e,n){t.exports={input:"AddTodo_input__2f6uy",inputButton:"AddTodo_inputButton__27elF"}},,function(t,e,n){t.exports={card:"Card_card__2Jqnh"}},function(t,e,n){t.exports={button:"Button_button__1Zwlt"}},function(t,e,n){t.exports={errorItem:"ErrorItem_errorItem__M0mlW"}},function(t,e,n){t.exports={todoItem:"TodoItem_todoItem__20zhk"}},function(t,e,n){t.exports={todoList:"TodoList_todoList__2Ltym"}},,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(9),c=n.n(r),a=(n(20),n(15)),i=n(2),s=n(10),u=n.n(s),d=n(0),l=function(t){return Object(d.jsx)("div",{className:"".concat(u.a.card," ").concat(t.className),children:t.children})},j=n(11),b=n.n(j),f=function(t){return Object(d.jsx)("button",{className:"".concat(b.a.button," ").concat(t.className),type:t.type||"button",onClick:t.onClick,children:t.children})},O=n(12),m=n.n(O),h=function(t){return Object(d.jsxs)("div",{className:m.a.errorItem,children:[Object(d.jsx)("h3",{children:"Joke for U"}),Object(d.jsxs)("p",{children:[t.error&&'"Error fenching data: '.concat(t.error,'"'),t.data]})]})},p=n(3),g=n.n(p),x=function(t){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:g.a.backdrop,onClick:t.onConfirm}),Object(d.jsxs)(l,{className:g.a.modal,children:[Object(d.jsx)("header",{className:g.a.header,children:Object(d.jsx)("h2",{children:t.title})}),Object(d.jsxs)("div",{className:g.a.content,children:[Object(d.jsx)("p",{children:t.message}),Object(d.jsx)("hr",{}),Object(d.jsx)(h,{data:t.jokeData,error:t.jokeError})]}),Object(d.jsx)("footer",{className:g.a.actions,children:Object(d.jsx)(f,{onClick:t.onConfirm,children:"Ok"})})]})]})},_=n(8),k=n.n(_),D=function(t){var e=Object(o.useState)(""),n=Object(i.a)(e,2),r=n[0],c=n[1],a=Object(o.useState)(null),s=Object(i.a)(a,2),u=s[0],j=s[1],b=Object(o.useState)(null),O=Object(i.a)(b,2),m=O[0],h=O[1],p=Object(o.useState)(null),g=Object(i.a)(p,2),_=g[0],D=g[1];return Object(d.jsxs)("div",{children:[u&&Object(d.jsx)(x,{title:u.title,message:u.message,onConfirm:function(){j(null)},jokeData:m,jokeError:_}),Object(d.jsx)(l,{className:k.a.input,children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0!==r.length?(t.onAddTodo(r),c("")):j({title:"Incorrect input",message:"Your todo can't be empty"})},children:[Object(d.jsx)("label",{htmlFor:"",children:"TODO List"}),Object(d.jsx)("input",{id:"usersTodo",value:r,onChange:function(t){c(t.target.value.trim())},type:"text",autoComplete:"off"}),Object(d.jsx)(f,{className:k.a.inputButton,type:"submit",onClick:function(){fetch("https://geek-jokes.sameerkumar.website/api?format=json").then((function(t){if(t.ok)return t.json();throw t})).then((function(t){h(t.joke)})).catch((function(t){console.log("Error fenching data: ",t),D(t)}))},children:"add"})]})})]})},v=n(5),y=n(13),E=n.n(y),C=function(t){return Object(d.jsxs)("li",{className:E.a.todoItem,draggable:"true",onDragStart:t.onDragStart,onDragLeave:t.onDragLeave,onDragEnd:t.onDragEnd,onDragOver:t.onDragOver,onDrop:t.onDrop,children:[t.message,Object(d.jsx)(f,{onClick:function(e){e.preventDefault(),t.onDelete(t.id)},children:"X"})]})},N=n(14),L=n.n(N),I=function(t){var e=Object(o.useState)(null),n=Object(i.a)(e,2),r=n[0],c=n[1],a=!0;0!==t.todoList.length&&(a=!1);return Object(d.jsxs)(l,{className:L.a.todoList,children:[a&&Object(d.jsx)("p",{children:"TODO list is empty"}),!a&&Object(d.jsx)("ul",{children:t.todoList.sort((function(t,e){return t.id>e.id?1:-1})).map((function(e){return Object(d.jsx)(C,{id:e.id,message:e.message,onDelete:t.onDeleteItem,onDragStart:function(t){return function(t,e){c(e)}(0,e)},onDragLeave:function(t){return function(t){t.target.style.background="initial"}(t)},onDragEnd:function(t){return function(t){t.target.style.background="initial"}(t)},onDragOver:function(t){return function(t){t.preventDefault(),t.target.style.background="#655967"}(t)},onDrop:function(n){return function(e,n){e.preventDefault(),t.onChangeOrder(t.todoList.map((function(t){return t.id===n.id?Object(v.a)(Object(v.a)({},t),{},{id:r.id}):t.id===r.id?Object(v.a)(Object(v.a)({},t),{},{id:n.id}):t}))),e.target.style.background="initial"}(n,e)}},e.id)}))})]})},S=function(){var t=Object(o.useState)([]),e=Object(i.a)(t,2),n=e[0],r=e[1],c=Object(o.useState)(0),s=Object(i.a)(c,2),u=s[0],l=s[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(D,{onAddTodo:function(t){n.length===u&&l((function(t){return++t})),r((function(e){return[].concat(Object(a.a)(e),[{id:"".concat(u),message:t}])}))}}),Object(d.jsx)(I,{todoList:n,onDeleteItem:function(t){r((function(e){return e.filter((function(e){return e.id!==t}))}))},onChangeOrder:function(t){r(t)}})]})};c.a.render(Object(d.jsx)(S,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.d6216ae9.chunk.js.map
(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(4),l=a.n(c),r=a(1),m=(a(11),a(12),a(13),a(2)),o=a.n(m),u=a(5),i=function(e){return fetch("".concat("https://mate-api.herokuapp.com").concat(e)).then((function(e){return e.json()})).then((function(e){return e.data})).catch((function(e){return e}))},p=function(){var e=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("/posts");case 2:return a=e.sent,e.abrupt("return",t?a.filter((function(e){return e.userId===t})):a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.userId,a=Object(n.useState)([]),c=Object(r.a)(a,2),l=c[0],m=c[1];return Object(n.useEffect)((function(){p(t).then((function(e){m(e)}))}),[t]),s.a.createElement("div",{className:"PostsList"},s.a.createElement("h2",null,"Posts:"),s.a.createElement("ul",{className:"PostsList__list"},l.map((function(e){return s.a.createElement("li",{className:"PostsList__item"},s.a.createElement("div",null,s.a.createElement("b",null,"[User #",e.userId,"]:"," "),e.title),s.a.createElement("button",{type:"button",className:"PostsList__button button"},"Open"))}))))},E=(a(15),function(){return s.a.createElement("form",{className:"NewCommentForm"},s.a.createElement("div",{className:"form-field"},s.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input"})),s.a.createElement("div",{className:"form-field"},s.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input"})),s.a.createElement("div",{className:"form-field"},s.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input"})),s.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),d=(a(16),function(){return s.a.createElement("div",{className:"PostDetails"},s.a.createElement("h2",null,"Post details:"),s.a.createElement("section",{className:"PostDetails__post"},s.a.createElement("p",null,"sunt aut facere repellat provident occaecati excepturi optio")),s.a.createElement("section",{className:"PostDetails__comments"},s.a.createElement("button",{type:"button",className:"button"},"Hide 2 comments"),s.a.createElement("ul",{className:"PostDetails__list"},s.a.createElement("li",{className:"PostDetails__list-item"},s.a.createElement("button",{type:"button",className:"PostDetails__remove-button button"},"X"),s.a.createElement("p",null,"My first comment")),s.a.createElement("li",{className:"PostDetails__list-item"},s.a.createElement("button",{type:"button",className:"PostDetails__remove-button button"},"X"),s.a.createElement("p",null,"sad sds dfsadf asdf asdf")))),s.a.createElement("section",null,s.a.createElement("div",{className:"PostDetails__form-wrapper"},s.a.createElement(E,null))))}),_=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(0),m=Object(r.a)(l,2),o=m[0],u=m[1];Object(n.useEffect)((function(){i("/users").then((function(e){c(e.slice(0,10))}))}),[]);return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App__header"},s.a.createElement("label",null,"Select a user: \xa0",s.a.createElement("select",{className:"App__user-selector",value:o,onChange:function(e){var t=e.target;u(+t.value)}},s.a.createElement("option",{value:"0"},"All users"),a.map((function(e,t){return s.a.createElement("option",{value:t+1,key:e.name},e.name)}))))),s.a.createElement("main",{className:"App__main"},s.a.createElement("div",{className:"App__sidebar"},s.a.createElement(f,{userId:o})),s.a.createElement("div",{className:"App__content"},s.a.createElement(d,null))))};l.a.render(s.a.createElement(_,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.aad6ec40.chunk.js.map
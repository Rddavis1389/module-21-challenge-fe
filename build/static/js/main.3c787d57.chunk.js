(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{65:function(e,t,a){e.exports=a(81)},71:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),l=a.n(o),c=(a(70),a(71),a(31)),s=a(22),i=a(63),u=a(9),m=a.n(u),d=a(17),p=a(8),g=a(83),b=a(84),v=a(89),h=a(55),f=a(85),E=a(86),k=a(93),w=a(52),y=a(53),x=a(46),S=a.n(x),O=new(function(){function e(){Object(w.a)(this,e)}return Object(y.a)(e,[{key:"getProfile",value:function(){return S()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return S()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),j=function(e){return fetch("/api/users/me",{headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(e)}})},I=function(e,t){return fetch("/api/users",{method:"PUT",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(t)},body:JSON.stringify(e)})},C=function(e,t){return fetch("/api/users/books/".concat(e),{method:"DELETE",headers:{authorization:"Bearer ".concat(t)}})},T=function(e){var t=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!t)return!1;var a=null===t||void 0===t?void 0:t.filter((function(t){return t!==e}));return localStorage.setItem("saved_books",JSON.stringify(a)),!0},B=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(""),c=Object(p.a)(l,2),s=c[0],u=c[1],w=Object(n.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),y=Object(p.a)(w,2),x=y[0],S=y[1];Object(n.useEffect)((function(){return function(){var e;(e=x).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var j=function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n,r,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),s){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(s));case 6:if((a=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,a.json();case 11:n=e.sent,r=n.items,l=r.map((function(e){var t;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(t=e.volumeInfo.imageLinks)||void 0===t?void 0:t.thumbnail)||""}})),o(l),u(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.find((function(e){return e.bookId===t})),r=O.loggedIn()?O.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,I(n,r);case 7:if(e.sent.ok){e.next=10;break}throw new Error("something went wrong!");case 10:S([].concat(Object(i.a)(x),[n.bookId])),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{fluid:!0,className:"text-light bg-dark"},r.a.createElement(b.a,null,r.a.createElement("h1",null,"Search for Books!"),r.a.createElement(v.a,{onSubmit:j},r.a.createElement(v.a.Row,null,r.a.createElement(h.a,{xs:12,md:8},r.a.createElement(v.a.Control,{name:"searchInput",value:s,onChange:function(e){return u(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})),r.a.createElement(h.a,{xs:12,md:4},r.a.createElement(f.a,{type:"submit",variant:"success",size:"lg"},"Submit Search")))))),r.a.createElement(b.a,null,r.a.createElement("h2",null,a.length?"Viewing ".concat(a.length," results:"):"Search for a book to begin"),r.a.createElement(E.a,null,a.map((function(e){return r.a.createElement(k.a,{key:e.bookId,border:"dark"},e.image?r.a.createElement(k.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,e.title),r.a.createElement("p",{className:"small"},"Authors: ",e.authors),r.a.createElement(k.a.Text,null,e.description),O.loggedIn()&&r.a.createElement(f.a,{disabled:null===x||void 0===x?void 0:x.some((function(t){return t===e.bookId})),className:"btn-block btn-info",onClick:function(){return C(e.bookId)}},(null===x||void 0===x?void 0:x.some((function(t){return t===e.bookId})))?"This book has already been saved!":"Save this Book!")))})))))},F=function(){var e=Object(n.useState)({}),t=Object(p.a)(e,2),a=t[0],o=t[1],l=Object.keys(a).length;Object(n.useEffect)((function(){(function(){var e=Object(d.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=O.loggedIn()?O.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.next=6,j(t);case 6:if((a=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,a.json();case 11:n=e.sent,o(n),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}})()()}),[l]);var c=function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=O.loggedIn()?O.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,C(t,a);case 6:if((n=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,n.json();case 11:r=e.sent,o(r),T(t),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t){return e.apply(this,arguments)}}();return l?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{fluid:!0,className:"text-light bg-dark"},r.a.createElement(b.a,null,r.a.createElement("h1",null,"Viewing saved books!"))),r.a.createElement(b.a,null,r.a.createElement("h2",null,a.savedBooks.length?"Viewing ".concat(a.savedBooks.length," saved ").concat(1===a.savedBooks.length?"book":"books",":"):"You have no saved books!"),r.a.createElement(E.a,null,a.savedBooks.map((function(e){return r.a.createElement(k.a,{key:e.bookId,border:"dark"},e.image?r.a.createElement(k.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,e.title),r.a.createElement("p",{className:"small"},"Authors: ",e.authors),r.a.createElement(k.a.Text,null,e.description),r.a.createElement(f.a,{className:"btn-block btn-danger",onClick:function(){return c(e.bookId)}},"Delete this Book!")))}))))):r.a.createElement("h2",null,"LOADING...")},L=a(91),N=a(90),P=a(88),q=a(92),_=a(29),D=a(38),J=a(87),G=function(){var e=Object(n.useState)({username:"",email:"",password:""}),t=Object(p.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!1),c=Object(p.a)(l,1)[0],s=Object(n.useState)(!1),i=Object(p.a)(s,2),u=i[0],g=i[1],b=function(e){var t=e.target,n=t.name,r=t.value;o(Object(D.a)({},a,Object(_.a)({},n,r)))},h=function(){var e=Object(d.a)(m.a.mark((function e(t){var n,r,l,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,s=a,fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 6:if((n=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,n.json();case 11:r=e.sent,l=r.token,c=r.user,console.log(c),O.login(l),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0),g(!0);case 22:o({username:"",email:"",password:""});case 23:case"end":return e.stop()}var s}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{noValidate:!0,validated:c,onSubmit:h},r.a.createElement(J.a,{dismissible:!0,onClose:function(){return g(!1)},show:u,variant:"danger"},"Something went wrong with your signup!"),r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,{htmlFor:"username"},"Username"),r.a.createElement(v.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:b,value:a.username,required:!0}),r.a.createElement(v.a.Control.Feedback,{type:"invalid"},"Username is required!")),r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,{htmlFor:"email"},"Email"),r.a.createElement(v.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:b,value:a.email,required:!0}),r.a.createElement(v.a.Control.Feedback,{type:"invalid"},"Email is required!")),r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,{htmlFor:"password"},"Password"),r.a.createElement(v.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:b,value:a.password,required:!0}),r.a.createElement(v.a.Control.Feedback,{type:"invalid"},"Password is required!")),r.a.createElement(f.a,{disabled:!(a.username&&a.email&&a.password),type:"submit",variant:"success"},"Submit")))},V=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(p.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!1),c=Object(p.a)(l,1)[0],s=Object(n.useState)(!1),i=Object(p.a)(s,2),u=i[0],g=i[1],b=function(e){var t=e.target,n=t.name,r=t.value;o(Object(D.a)({},a,Object(_.a)({},n,r)))},h=function(){var e=Object(d.a)(m.a.mark((function e(t){var n,r,l,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,s=a,fetch("/api/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 6:if((n=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,n.json();case 11:r=e.sent,l=r.token,c=r.user,console.log(c),O.login(l),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0),g(!0);case 22:o({username:"",email:"",password:""});case 23:case"end":return e.stop()}var s}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{noValidate:!0,validated:c,onSubmit:h},r.a.createElement(J.a,{dismissible:!0,onClose:function(){return g(!1)},show:u,variant:"danger"},"Something went wrong with your login credentials!"),r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,{htmlFor:"email"},"Email"),r.a.createElement(v.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:b,value:a.email,required:!0}),r.a.createElement(v.a.Control.Feedback,{type:"invalid"},"Email is required!")),r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,{htmlFor:"password"},"Password"),r.a.createElement(v.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:b,value:a.password,required:!0}),r.a.createElement(v.a.Control.Feedback,{type:"invalid"},"Password is required!")),r.a.createElement(f.a,{disabled:!(a.email&&a.password),type:"submit",variant:"success"},"Submit")))},Y=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(b.a,{fluid:!0},r.a.createElement(L.a.Brand,{as:c.b,to:"/"},"Google Books Search"),r.a.createElement(L.a.Toggle,{"aria-controls":"navbar"}),r.a.createElement(L.a.Collapse,{id:"navbar"},r.a.createElement(N.a,{className:"ml-auto"},r.a.createElement(N.a.Link,{as:c.b,to:"/"},"Search For Books"),O.loggedIn()?r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a.Link,{as:c.b,to:"/saved"},"See Your Books"),r.a.createElement(N.a.Link,{onClick:O.logout},"Logout")):r.a.createElement(N.a.Link,{onClick:function(){return o(!0)}},"Login/Sign Up"))))),r.a.createElement(P.a,{size:"lg",show:a,onHide:function(){return o(!1)},"aria-labelledby":"signup-modal"},r.a.createElement(q.a.Container,{defaultActiveKey:"login"},r.a.createElement(P.a.Header,{closeButton:!0},r.a.createElement(P.a.Title,{id:"signup-modal"},r.a.createElement(N.a,{variant:"pills"},r.a.createElement(N.a.Item,null,r.a.createElement(N.a.Link,{eventKey:"login"},"Login")),r.a.createElement(N.a.Item,null,r.a.createElement(N.a.Link,{eventKey:"signup"},"Sign Up"))))),r.a.createElement(P.a.Body,null,r.a.createElement(q.a.Content,null,r.a.createElement(q.a.Pane,{eventKey:"login"},r.a.createElement(V,{handleModalClose:function(){return o(!1)}})),r.a.createElement(q.a.Pane,{eventKey:"signup"},r.a.createElement(G,{handleModalClose:function(){return o(!1)}})))))))};var z=function(){return r.a.createElement(c.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:B}),r.a.createElement(s.a,{exact:!0,path:"/saved",component:F}),r.a.createElement(s.a,{render:function(){return r.a.createElement("h1",{className:"display-2"},"Wrong page!")}}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.3c787d57.chunk.js.map
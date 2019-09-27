(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{137:function(e,t,n){e.exports=n(292)},292:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(128),o=n.n(c),l=n(1),u=n(2);function i(){var e=Object(l.a)(["\n    html, body, div, span, applet, object, iframe,\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n    a, abbr, acronym, address, big, cite, code,\n    del, dfn, em, img, ins, kbd, q, s, samp,\n    small, strike, strong, sub, sup, tt, var,\n    b, u, i, center,\n    dl, dt, dd, ol, ul, li,\n    fieldset, form, label, legend,\n    table, caption, tbody, tfoot, thead, tr, th, td,\n    article, aside, canvas, details, embed, \n    figure, figcaption, footer, header, hgroup, \n    menu, nav, output, ruby, section, summary,\n    time, mark, audio, video {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        font-size: 100%;\n        font: inherit;\n        vertical-align: baseline;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        font-family: 'Cereal';\n    }\n    /* HTML5 display-role reset for older browsers */\n    article, aside, details, figcaption, figure, \n    footer, header, hgroup, menu, nav, section {\n        display: block;\n    }\n    body {\n        line-height: 1;\n        font-family: 'Roboto Mono', monospace;\n    }\n    ol, ul {\n        list-style: none;\n    }\n    blockquote, q {\n        quotes: none;\n    }\n    blockquote:before, blockquote:after,\n    q:before, q:after {\n        content: '';\n        content: none;\n    }\n    table {\n        border-collapse: collapse;\n        border-spacing: 0;\n    }\n "]);return i=function(){return e},e}var s=Object(u.a)(i()),m=n(16),p=n(33),d=n(6),b=n(34),f=n(32),g=n.n(f),h=function(){var e=localStorage.getItem("token");return g.a.create({headers:{Authorization:e,"Content-Type":"application/json"}})};function v(){var e=Object(l.a)(["\nbackground-color: #DC143C;\ncolor: #fff;\ntext-align: center;\npadding: 0.5%;\nmargin-right: 2%;\n\n"]);return v=function(){return e},e}function E(){var e=Object(l.a)(["\nheight: 10vh;\ndisplay: flex;\nalign-items: center;\njustify-content: space-around;\n\n"]);return E=function(){return e},e}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var O=function(e){var t={city:"",name:"",state:"",streetAddress:"",streetName:"",type:"",zipCode:""},n=Object(a.useState)(t),c=Object(d.a)(n,2),o=c[0],l=c[1],u=function(e){var t=e.target,n=t.name,a=t.value;l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o,Object(b.a)({},n,a)))},i=Object(a.useState)([]),s=Object(d.a)(i,2),m=s[0],p=s[1];return Object(a.useEffect)((function(){h().get("https://business-rec-web-be.herokuapp.com/api/companies/companytypes",{headers:{Authorization:"".concat(localStorage.getItem("token"))}}).then((function(e){p(e.data)})).catch((function(e){return console.log(e.response)}))}),[]),r.a.createElement(j,{onSubmit:function(n){n.preventDefault(),e.addRest(o),l(t),console.log(o)}},r.a.createElement("label",null,"City"),r.a.createElement("input",{type:"text",name:"city",value:o.city,onChange:u}),r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:o.name,onChange:u}),r.a.createElement("label",null,"State"),r.a.createElement("input",{type:"text",name:"state",value:o.state,onChange:u}),r.a.createElement("label",null,"streetAddress"),r.a.createElement("input",{type:"text",name:"streetAddress",value:o.streetAddress,onChange:u}),r.a.createElement("label",null,"User Review"),r.a.createElement("input",{type:"text",name:"streetName",value:o.streetName,onChange:u}),r.a.createElement("label",null,"type"),r.a.createElement("select",{type:"dropddown",name:"type",value:o.type,onChange:u},m.map((function(e){return r.a.createElement("option",{value:e.type},e.type)}))),r.a.createElement("label",null,"zipCode"),r.a.createElement("input",{type:"text",name:"zipCode",value:o.zipCode,onChange:u}),r.a.createElement(w,null,"Add a business"))},j=u.b.form(E()),w=u.b.button(v());function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var k=function(e){var t=Object(a.useState)(e.currentRest),n=Object(d.a)(t,2),c=n[0],o=n[1];Object(a.useEffect)((function(){o(e.currentRest)}),[e]);var l=Object(a.useState)([]),u=Object(d.a)(l,2),i=u[0],s=u[1];Object(a.useEffect)((function(){h().get("https://business-rec-web-be.herokuapp.com/api/companies/companytypes",{headers:{Authorization:"".concat(localStorage.getItem("token"))}}).then((function(e){s(e.data)})).catch((function(e){return console.log(e.response)}))}),[]);var m=function(e){var t=e.target,n=t.name,a=t.value;o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},c,Object(b.a)({},n,a)))};return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.updateRest(c.id,c)}},r.a.createElement("label",null,"City"),r.a.createElement("input",{type:"text",name:"city",value:c.city,onChange:m}),r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:c.name,onChange:m}),r.a.createElement("label",null,"State"),r.a.createElement("input",{type:"text",name:"state",value:c.state,onChange:m}),r.a.createElement("label",null,"streetAddress"),r.a.createElement("input",{type:"text",name:"streetAddress",value:c.streetAddress,onChange:m}),r.a.createElement("label",null,"streetName"),r.a.createElement("input",{type:"text",name:"streetName",value:c.streetName,onChange:m}),r.a.createElement("label",null,"type"),r.a.createElement("select",{type:"dropddown",name:"type",value:c.type,onChange:m},i.map((function(e){return r.a.createElement("option",{value:e.type},e.type)}))),r.a.createElement("label",null,"zipCode"),r.a.createElement("input",{type:"text",name:"zipCode",value:c.zipCode,onChange:m}),r.a.createElement("button",null,"Update"),r.a.createElement("button",{onClick:function(){return e.setEditing(!1)},className:"button muted-button"},"Cancel"))};function C(){var e=Object(l.a)(["\nwidth: 25%;\npadding: 2%;\nmargin: 10px;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nborder: 1px solid black;\n\n\n"]);return C=function(){return e},e}function S(){var e=Object(l.a)(["\ntext-align: center;\n\n"]);return S=function(){return e},e}function N(){var e=Object(l.a)(["\n   display: flex;\n   flex-wrap: wrap;\n   align-items: center;\n   justify-content: space-around;\n"]);return N=function(){return e},e}function P(){var e=Object(l.a)(["\n"]);return P=function(){return e},e}var z=u.b.div(P()),D=u.b.div(N()),A=u.b.p(S()),R=u.b.div(C()),q=function(e){return r.a.createElement(z,null,r.a.createElement(D,null,e.rests.length>0?e.rests.map((function(t){return r.a.createElement(R,{key:t.id},r.a.createElement("p",null,t.city),r.a.createElement("p",null,t.name),r.a.createElement("p",null,t.state),r.a.createElement("p",null,t.streetName),r.a.createElement("p",null,t.streetAddress),r.a.createElement("p",null,t.type),r.a.createElement("p",null,t.zipCode),r.a.createElement("div",null,r.a.createElement("button",{className:"button muted-button",onClick:function(){return e.editRest(t)}},"Edit"),r.a.createElement("button",{className:"button muted-button",onClick:function(){return e.deleteRest(t.id)}},"Delete")))})):r.a.createElement("div",null,r.a.createElement(A,null,"No users"))))},I=n(31);function B(){var e=Object(l.a)(["\n    background-color: #DC143C;\n    color: white;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 2.5%;\n    "]);return B=function(){return e},e}function U(){var e=Object(l.a)(["\nfont-size: 30px;\n"]);return U=function(){return e},e}function J(){var e=Object(l.a)(["\nbackground-color: #fff;\ncolor: black;\ntext-align: center;\npadding: 20%;\nmargin-right: 2%;\n"]);return J=function(){return e},e}var T=u.b.button(J()),L=u.b.h1(U()),M=u.b.div(B()),V=function(e){return r.a.createElement(M,null,r.a.createElement(L,null,"BUSINESS-REC"),r.a.createElement("p",null,"@",e.user),r.a.createElement(I.b,{to:"/"},r.a.createElement(T,null,"Logout")))};function W(){var e=Object(l.a)(["\ntext-align: center;\npadding: 1%;\n\n\n\n"]);return W=function(){return e},e}var H=function(){var e=JSON.parse(window.localStorage.getItem("user")),t=Object(a.useState)(e),n=Object(d.a)(t,2),c=n[0],o=(n[1],{id:null,name:"",type:"",address:"",city:""}),l=Object(a.useState)({}),u=Object(d.a)(l,2),i=u[0],s=u[1];Object(a.useEffect)((function(){h().get("https://business-rec-web-be.herokuapp.com/api/users/".concat(c.id,"/companies"),{headers:{Authorization:"".concat(localStorage.getItem("token"))}}).then((function(e){s(e.data)})).catch((function(e){return console.log(e.response)}))}),[]);var m=Object(a.useState)(o),b=Object(d.a)(m,2),f=(b[0],b[1]),g=Object(a.useState)(!1),v=Object(d.a)(g,2),E=v[0],y=v[1],j=Object(a.useState)(o),w=Object(d.a)(j,2),x=w[0],C=w[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(V,{user:c.username}),r.a.createElement("div",null,E?r.a.createElement("div",null,r.a.createElement("h2",null,"Edit Business"),r.a.createElement(k,{editing:E,setEditing:y,currentRest:x,updateRest:function e(t,n){h().patch("https://business-rec-web-be.herokuapp.com/api/users/".concat(c.id,"/companies"),{data:n}).then((function(n){y(!1),s(i.map((function(n){return n.id===t?e:n})))}))}})):r.a.createElement("div",null,r.a.createElement(Y,null,"Add a Business"),r.a.createElement(O,{addRest:function(e){h().post("https://business-rec-web-be.herokuapp.com/api/users/".concat(c.id,"/newcompany"),e).then((function(e){var t=e.data;s([].concat(Object(p.a)(i),[t]))})).catch((function(e){return console.log(e.response)}))}}))),r.a.createElement("div",null,r.a.createElement(Y,null,"My Businesses"),r.a.createElement(q,{rests:i,deleteRest:function(e){h().delete("https://business-rec-web-be.herokuapp.com/api/users/".concat(c.id,"/companies"),{data:{id:"".concat(e)}}).then((function(e){console.log(e);var t=e.data.id;f(i.filter((function(e){return e.id!==t})))}))},editRest:function(e){y(!0),C({city:e.city,name:e.name,state:e.state,streetName:e.streetName,streetAddress:e.streetAddress,type:e.type,zipCode:e.zipCode})}}))))},Y=u.b.h2(W()),$=n(18),F=n(17);function G(){var e=Object(l.a)(["\nbackground-color: #DC143C;\ncolor: #fff;\nwidth: 50%;\ntext-align: center;\npadding: 5%;\n"]);return G=function(){return e},e}function K(){var e=Object(l.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n&: hover .buttonclass{\n  background-color: #fff;\n  color: #DC143C;\n  }\n"]);return K=function(){return e},e}function Q(){var e=Object(l.a)(["\nwidth: 100%;\nmargin-top: 5%;\nmargin-bottom: 5%;\n"]);return Q=function(){return e},e}function X(){var e=Object(l.a)(["\ndisplay: flex;\nflex-direction: column;\npadding: 60px;\n"]);return X=function(){return e},e}function Z(){var e=Object(l.a)(["\ntext-align: center;\nmargin: 10%;\n"]);return Z=function(){return e},e}function _(){var e=Object(l.a)(["\nborder: 1px solid black;\nbackground-color: #fff;\npadding: 20px;\n"]);return _=function(){return e},e}function ee(){var e=Object(l.a)(["\nheight: 100vh;\nbackground-color: #fff;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: column;\ntext-align: center;\n"]);return ee=function(){return e},e}var te=Object($.c)({mapPropsToValues:function(e){return{username:e.username||"",password:e.password||""}},validationSchema:F.object().shape({username:F.string().required("Username must be entered"),password:F.string().required("Password must be entered")}),handleSubmit:function(e,t){var n=t.props,a=t.setStatus;g.a.post("https://business-rec-web-be.herokuapp.com/api/auth/login",e).then((function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("user",JSON.stringify(e.data.user)),a(e.data),n.history.push("/home")})).catch((function(e){return console.log(e.e)}))}})((function(e){var t=e.errors,n=e.touched,c=e.status,o=Object(a.useState)([]),l=Object(d.a)(o,2),u=l[0],i=l[1];return Object(a.useEffect)((function(){c&&i([].concat(Object(p.a)(u),[c]))}),[c]),r.a.createElement(ae,null,r.a.createElement(re,null,r.a.createElement(ce,null,"Log In"),r.a.createElement(oe,null,r.a.createElement(le,{type:"text",name:"username",placeholder:"username"}),n.username&&t.username&&r.a.createElement("p",null,t.username),r.a.createElement(le,{type:"password",name:"password",placeholder:"password"}),n.password&&t.password&&r.a.createElement("p",null,t.password)),r.a.createElement(ue,null,r.a.createElement(ie,{className:"buttonclass"},"Sign In"))))}));console.log(te);var ne=te,ae=u.b.div(ee()),re=Object(u.b)($.b)(_()),ce=u.b.label(Z()),oe=u.b.div(X()),le=Object(u.b)($.a)(Q()),ue=u.b.div(K()),ie=u.b.button(G());function se(){var e=Object(l.a)(["\nbackground-color: #DC143C;\ncolor: #fff;\nwidth: 50%;\ntext-align: center;\npadding: 5%;\n"]);return se=function(){return e},e}function me(){var e=Object(l.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n&: hover .buttonclass{\nbackground-color: #fff;\ncolor: #DC143C;\n}\n"]);return me=function(){return e},e}function pe(){var e=Object(l.a)(["\nwidth: 100%;\nmargin-top: 5%;\nmargin-bottom: 5%;\n"]);return pe=function(){return e},e}function de(){var e=Object(l.a)(["\ndisplay: flex;\nflex-direction: column;\npadding: 60px;\n"]);return de=function(){return e},e}function be(){var e=Object(l.a)(["\ntext-align: center;\nmargin: 10%;\n"]);return be=function(){return e},e}function fe(){var e=Object(l.a)(["\nborder: 1px solid black;\nbackground-color: #ffffff;\npadding: 20px;\n"]);return fe=function(){return e},e}function ge(){var e=Object(l.a)(["\nheight: 100vh;\nbackground-color: #fff;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: column;\ntext-align: center;\n\n"]);return ge=function(){return e},e}var he=Object($.c)({mapPropsToValues:function(e){return{username:e.username||"",password:e.password||""}},validationSchema:F.object().shape({username:F.string().required("You must create a username before continuing").min(4,"must be 4 or more characters").max(15,"thats a bit long, make it less than 15 characters"),password:F.string().required("Password must be entered").min(4,"must be 4 or more characters").max(15,"thats a bit long, make it less than 15 characters")}),handleSubmit:function(e,t){var n=t.props,a=t.setStatus;g.a.post("https://business-rec-web-be.herokuapp.com/api/auth/register",e).then((function(e){a(e.data),n.history.push("/")})).catch((function(e){return console.log(e.e)}))}})((function(e){var t=e.errors,n=e.touched,c=e.status,o=Object(a.useState)([]),l=Object(d.a)(o,2),u=l[0],i=l[1];return Object(a.useEffect)((function(){c&&i([].concat(Object(p.a)(u),[c]))}),[c]),r.a.createElement(Ee,null,r.a.createElement(ye,null,r.a.createElement(Oe,null,"Sign Up"),r.a.createElement(je,null,r.a.createElement(we,{type:"text",name:"username",placeholder:"username"}),n.username&&t.username&&r.a.createElement("p",null,t.username),r.a.createElement(we,{type:"password",name:"password",placeholder:"password"}),n.password&&t.password&&r.a.createElement("p",null,t.password)),r.a.createElement(xe,null,r.a.createElement(ke,{className:"buttonclass"},"Sign Up"))))}));console.log(he);var ve=he,Ee=u.b.div(ge()),ye=Object(u.b)($.b)(fe()),Oe=u.b.label(be()),je=u.b.div(de()),we=Object(u.b)($.a)(pe()),xe=u.b.div(me()),ke=u.b.button(se()),Ce=n(134),Se=function(e){var t=e.component,n=Object(Ce.a)(e,["component"]);return r.a.createElement(m.b,Object.assign({},n,{render:function(e){return localStorage.getItem("token")?r.a.createElement(t,Object.assign({},e,n)):r.a.createElement(m.a,{to:"/login"})}}))};var Ne=function(){return r.a.createElement("div",null,r.a.createElement(m.b,{exact:!0,path:"/",component:ne}),r.a.createElement(m.b,{exact:!0,path:"/signup",component:ve}),r.a.createElement(Se,{path:"/home",component:H}),r.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(I.a,null,r.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[137,1,2]]]);
//# sourceMappingURL=main.d9175884.chunk.js.map
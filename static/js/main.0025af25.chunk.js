(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(4),l=c.n(n),r=(c(9),c(2)),o=(c(10),c(0));var i=function(e){return e.alert&&Object(o.jsx)("div",{className:"container text-center",children:Object(o.jsx)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:Object(o.jsx)("strong",{children:e.alert.msg})})})};function b(e){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"/navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.swithMode}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"".concat("light"===e.mode?"Enable":"Disable"," dark Mode")})]})]})]})})})}function d(e){var t=Object(a.useState)(""),c=Object(r.a)(t,2),s=c[0],n=c[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"mb-3 text-center",children:[Object(o.jsx)("label",{htmlFor:"mybox",className:"form-label",children:Object(o.jsx)("h2",{children:"Enter Text To Analyis"})}),Object(o.jsx)("textarea",{className:"form-control",id:"mybox",placeholder:"Enter text here",rows:"8",value:s,onChange:function(e){n(e.target.value)},style:"dark"===e.mode?{color:"white",backgroundColor:"black"}:{color:"black",backgroundColor:"white"}})]}),Object(o.jsx)("button",{type:"button",className:"btn btn-success mx-3",onClick:function(){var t=s.toUpperCase();n(t),e.showalert("Upercase","sucess")},children:"Convert TO UperCase"}),Object(o.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(){var t=s.toLowerCase();n(t),e.showalert("Lowercase","sucess")},children:"Convert To LoweCase"})]}),Object(o.jsxs)("div",{className:"container my-5",children:[Object(o.jsx)("h2",{children:"Your text summary "}),Object(o.jsxs)("p",{children:[" ",Object(o.jsxs)("b",{children:[" ",s.length," "]})," characters AND ",Object(o.jsxs)("b",{children:[s.split(" ").length," "]})," words "]}),Object(o.jsxs)("p",{children:[.008*s.split(" ").length," Minutes to read"]})]})]})}var j=function(){var e=Object(a.useState)("light"),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(null),l=Object(r.a)(n,2),j=l[0],h=l[1],u=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),1500)};return Object(o.jsxs)("div",{children:[Object(o.jsx)(b,{title:"TextUtils",mode:c,swithMode:function(){"light"===c?(s("dark"),document.body.style.backgroundColor="black",document.body.style.color="white",u("dark mode is enable","suscess")):(s("light"),document.body.style.backgroundColor="white",document.body.style.color="black",u("dark mode is disable","suscess"))}}),Object(o.jsx)(i,{alert:j}),Object(o.jsx)(d,{mode:c,showalert:u})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),a(e),s(e),n(e),l(e)}))};l.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),h()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.0025af25.chunk.js.map
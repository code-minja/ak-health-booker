"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[809],{3321:function(n,e,t){t(2791);var i=t(184);e.Z=function(){return(0,i.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})}},6794:function(n,e,t){t.d(e,{Z:function(){return s}});t(2791);var i=t(184),s=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("footer",{children:(0,i.jsxs)("div",{className:"footer-bottom",children:["Made by"," ",(0,i.jsx)("a",{href:"https://www.linkedin.com/in/dunna-avinash",target:"_blank",rel:"noreferrer",children:"Avinash"})," ","\xa9 ",(new Date).getFullYear()]})})})}},3841:function(n,e,t){t.d(e,{Z:function(){return j}});var i=t(9439),s=t(2791),r=t(7689),c=t(1087),l=t(3495),o=t(9434),a=t(5318),d=t(3853),h=t(1213),u=t(456),x=t(184),j=function(){var n=(0,s.useState)(!1),e=(0,i.Z)(n,2),t=e[0],j=e[1],f=(0,o.I0)(),m=(0,r.s0)(),v=(0,s.useState)(localStorage.getItem("token")||""),p=(0,i.Z)(v,2),g=p[0],N=(p[1],(0,s.useState)(localStorage.getItem("token")?(0,u.Z)(localStorage.getItem("token")):"")),k=(0,i.Z)(N,2),Z=k[0];k[1];return(0,x.jsxs)("header",{children:[(0,x.jsxs)("nav",{className:t?"nav-active":"",children:[(0,x.jsx)("h2",{className:"nav-logo",children:(0,x.jsx)(c.OL,{to:"/",children:"HealthBooker"})}),(0,x.jsxs)("ul",{className:"nav-links",children:[(0,x.jsx)("li",{children:(0,x.jsx)(c.OL,{to:"/",children:"Home"})}),(0,x.jsx)("li",{children:(0,x.jsx)(c.OL,{to:"/doctors",children:"Doctors"})}),g&&Z.isAdmin&&(0,x.jsx)("li",{children:(0,x.jsx)(c.OL,{to:"/dashboard/users",children:"Dashboard"})}),g&&!Z.isAdmin&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(c.OL,{to:"/appointments",children:"Appointments"})}),(0,x.jsx)("li",{children:(0,x.jsx)(c.OL,{to:"/notifications",children:"Notifications"})}),(0,x.jsx)("li",{children:(0,x.jsx)(c.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,x.jsx)("li",{children:(0,x.jsx)(l.fO,{to:"/#contact",children:"Contact Us"})}),(0,x.jsx)("li",{children:(0,x.jsx)(c.OL,{to:"/profile",children:"Profile"})})]}),g?(0,x.jsx)("li",{children:(0,x.jsx)("span",{className:"btn",onClick:function(){f((0,a.ps)({})),localStorage.removeItem("token"),m("/login")},children:"Logout"})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(c.OL,{className:"btn",to:"/login",children:"Login"})}),(0,x.jsx)("li",{children:(0,x.jsx)(c.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,x.jsxs)("div",{className:"menu-icons",children:[!t&&(0,x.jsx)(d.cur,{className:"menu-open",onClick:function(){j(!0)}}),t&&(0,x.jsx)(h.ySC,{className:"menu-close",onClick:function(){j(!1)}})]})]})}},809:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var i=t(4165),s=t(5861),r=t(9439),c=t(2791),l=t(9434),o=t(3321),a=t(6794),d=t(3841),h=t(4971),u=t(5318),x=t(3200),j=(t(5108),t(184)),f=function(){var n=(0,c.useState)([]),e=(0,r.Z)(n,2),t=e[0],f=e[1],m=(0,l.I0)(),v=(0,l.v9)((function(n){return n.root})).loading,p=function(){var n=(0,s.Z)((0,i.Z)().mark((function n(e){var t;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m((0,u.K4)(!0)),n.next=4,(0,h.Z)("/notification/getallnotifs");case 4:t=n.sent,m((0,u.K4)(!1)),f(t),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}();return(0,c.useEffect)((function(){p()}),[]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(d.Z,{}),v?(0,j.jsx)(x.Z,{}):(0,j.jsxs)("section",{className:"container notif-section",children:[(0,j.jsx)("h2",{className:"page-heading",children:"Your Notifications"}),t.length>0?(0,j.jsx)("div",{className:"notifications",children:(0,j.jsxs)("table",{children:[(0,j.jsx)("thead",{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"S.No"}),(0,j.jsx)("th",{children:"Content"}),(0,j.jsx)("th",{children:"Date"}),(0,j.jsx)("th",{children:"Time"})]})}),(0,j.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(n,e){return(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{children:e+1}),(0,j.jsx)("td",{children:null===n||void 0===n?void 0:n.content}),(0,j.jsx)("td",{children:null===n||void 0===n?void 0:n.updatedAt.split("T")[0]}),(0,j.jsx)("td",{children:null===n||void 0===n?void 0:n.updatedAt.split("T")[1].split(".")[0]})]},null===n||void 0===n?void 0:n._id)}))})]})}):(0,j.jsx)(o.Z,{})]}),(0,j.jsx)(a.Z,{})]})}},5108:function(){}}]);
//# sourceMappingURL=809.de3ea382.chunk.js.map
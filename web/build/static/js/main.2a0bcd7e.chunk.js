(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{127:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(38),i=a.n(c),l=(a(127),a(95),a(21)),r=(a(128),a(205)),s=a(203),d=a(206),j=a(4),b=a(11),u=a(65),h=a.n(u),v="localhost"===window.location.hostname.split(":")[0]?"http://localhost:5001":"",O=a(209),m=a(207),x=a(204),p=a(1);var f=function(){var e=Object(n.useState)({teamOne:"",teamTwo:"",bat:"",score:"",wicket:"",over:"",teamtwoscore:"",teamtwowicket:"",teamtwoover:"",commentry:"",batsmanNameA:"",batsmanNameB:"",bowlerNameA:"",bowlerNameB:"",runsA:"",runsB:"",ballsA:"",ballsB:""}),t=Object(b.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){h.a.get("".concat(v,"/api/v1/score")).then((function(e){console.log("res +++: ",e.data),o(e.data)}))}),[]),Object(p.jsx)("div",{style:{margin:"1rem"},children:Object(p.jsxs)(O.a,{className:"set",component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[Object(p.jsx)(x.a,{label:"Team 1",variant:"standard",value:a.teamOne,onChange:function(e){o((function(t){return Object(j.a)(Object(j.a)({},t),{},{teamOne:e.target.value})}))},placeholder:"enter team one name"}),Object(p.jsx)(x.a,{label:"Team 2",variant:"standard",value:a.teamTwo,onChange:function(e){o((function(t){return Object(j.a)(Object(j.a)({},t),{},{teamTwo:e.target.value})}))},placeholder:"enter team two name"}),Object(p.jsx)(x.a,{label:"Bating team",variant:"standard",value:a.bat,onChange:function(e){o((function(t){return Object(j.a)(Object(j.a)({},t),{},{bat:e.target.value})}))},placeholder:"who is batting"}),Object(p.jsx)(x.a,{label:"Score",variant:"standard",type:"number",value:a.score,onChange:function(e){o((function(t){return Object(j.a)(Object(j.a)({},t),{},{score:e.target.value})}))},placeholder:"What's the score"}),Object(p.jsx)(x.a,{label:"Wicket",variant:"standard",type:"number",value:a.wicket,onChange:function(e){o((function(t){return Object(j.a)(Object(j.a)({},t),{},{wicket:e.target.value})}))},placeholder:"how many wickets"}),Object(p.jsx)(x.a,{label:"Over",variant:"standard",type:"number",value:a.over,onChange:function(e){o((function(t){return Object(j.a)(Object(j.a)({},t),{},{over:e.target.value})}))},placeholder:"how many overs"}),Object(p.jsx)(x.a,{label:"team 2 Score",variant:"standard",type:"number",value:a.teamtwoscore,onChange:function(e){o((function(t){return Object(j.a)(Object(j.a)({},t),{},{teamtwoscore:e.target.value})}))},placeholder:"What's the score"}),Object(p.jsx)(x.a,{label:"team 2 Wicket",variant:"standard",type:"number",value:a.teamtwowicket,onChange:function(e){o((function(t){return Object(j.a)(Object(j.a)({},t),{},{teamtwowicket:e.target.value})}))},placeholder:"how many wickets"}),Object(p.jsx)(x.a,{label:"team 2 over",variant:"standard",type:"number",value:a.teamtwoover,onChange:function(e){o((function(t){return Object(j.a)(Object(j.a)({},t),{},{teamtwoover:e.target.value})}))},placeholder:"how many overs"}),Object(p.jsx)(x.a,{label:"commentry",variant:"standard",value:null===a||void 0===a?void 0:a.commentry,onChange:function(e){o((function(t){return Object(j.a)(Object(j.a)({},t),{},{commentry:e.target.value})}))},placeholder:"What's your opinion"}),Object(p.jsx)(x.a,{label:" runsA",variant:"standard",type:"number",value:a.runsA,onChange:function(e){o((function(t){return Object(j.a)(Object(j.a)({},t),{},{runsA:e.target.value})}))},placeholder:"how many runs"}),"  ",Object(p.jsx)(x.a,{label:" runsB",variant:"standard",type:"number",value:a.runsB,onChange:function(e){o((function(t){return Object(j.a)(Object(j.a)({},t),{},{runsB:e.target.value})}))},placeholder:"how many runs"}),"  ",Object(p.jsx)(x.a,{label:"ballsA",variant:"standard",type:"number",value:a.ballsA,onChange:function(e){o((function(t){return Object(j.a)(Object(j.a)({},t),{},{ballsA:e.target.value})}))},placeholder:"how many balls"}),"  ",Object(p.jsx)(x.a,{label:"ballB",variant:"standard",type:"number",value:a.ballsB,onChange:function(e){o((function(t){return Object(j.a)(Object(j.a)({},t),{},{ballsB:e.target.value})}))},placeholder:"how many balls"}),Object(p.jsx)("br",{}),Object(p.jsxs)("select",{style:{width:"200px",height:"7vh",fontSize:"22px",borderRadius:"10px",paddingLeft:"3px"},onClick:function(e){o((function(t){return Object(j.a)(Object(j.a)({},t),{},{batsmanNameA:e.target.value})}))},children:[Object(p.jsx)("option",{selected:!0,disabled:!0,children:"Select Batsman 1"}),Object(p.jsx)("option",{value:"Babar Azam",children:"Babar Azam"}),Object(p.jsx)("option",{value:"Rizwan",children:"Rizwan"}),Object(p.jsx)("option",{value:"Fakhar Zaman",children:"Fakhar Zaman"}),Object(p.jsx)("option",{value:"Haider Ali",children:"Haider Ali"}),Object(p.jsx)("option",{value:"Mohammad Hafeez",children:"Mohammad Hafeez"}),Object(p.jsx)("option",{value:"Shoaib Malik",children:"Shoaib Malik"}),Object(p.jsx)("option",{value:"Asif Ali",children:"Asif Ali"}),Object(p.jsx)("option",{value:"Shadab Khan",children:"Shadab Khan"}),Object(p.jsx)("option",{value:"Imad Wasim",children:"Imad Wasim"}),Object(p.jsx)("option",{value:"Hasan Ali",children:"Hasan Ali"}),Object(p.jsx)("option",{value:"Shaheen Afridi",children:"Shaheen Afridi"}),Object(p.jsx)("option",{value:"Haris Rauf",children:"Haris Rauf"})]}),Object(p.jsxs)("select",{style:{width:"200px",height:"7vh",fontSize:"22px",borderRadius:"10px",paddingLeft:"3px"},onClick:function(e){o((function(t){return Object(j.a)(Object(j.a)({},t),{},{batsmanNameB:e.target.value})}))},children:[Object(p.jsx)("option",{selected:!0,disabled:!0,children:"Selesct Batsman 2"}),Object(p.jsx)("option",{value:"Babar Azam",children:"Babar Azam"}),Object(p.jsx)("option",{value:"Rizwan",children:"Rizwan"}),Object(p.jsx)("option",{value:"Fakhar Zaman",children:"Fakhar Zaman"}),Object(p.jsx)("option",{value:"Haider Ali",children:"Haider Ali"}),Object(p.jsx)("option",{value:"Mohammad Hafeez",children:"Mohammad Hafeez"}),Object(p.jsx)("option",{value:"Shoaib Malik",children:"Shoaib Malik"}),Object(p.jsx)("option",{value:"Asif Ali",children:"Asif Ali"}),Object(p.jsx)("option",{value:"Shadab Khan",children:"Shadab Khan"}),Object(p.jsx)("option",{value:"Imad Wasim",children:"Imad Wasim"}),Object(p.jsx)("option",{value:"Hasan Ali",children:"Hasan Ali"}),Object(p.jsx)("option",{value:"Shaheen Afridi",children:"Shaheen Afridi"}),Object(p.jsx)("option",{value:"Haris Rauf",children:"Haris Rauf"})]}),Object(p.jsxs)("select",{style:{width:"200px",height:"7vh",fontSize:"22px",borderRadius:"10px",paddingLeft:"5px"},onChange:function(e){o((function(t){return console.log(e.target.value),Object(j.a)(Object(j.a)({},t),{},{bowlerNameA:e.target.value})}))},children:[Object(p.jsx)("option",{selected:!0,disabled:!0,children:"Select Bowler 1"}),Object(p.jsx)("option",{value:"Pat Cummins",children:"Pat Cummins"}),Object(p.jsx)("option",{value:"Mitchell Starc",children:"Mitchell Starc"}),Object(p.jsx)("option",{value:"Adam Zampa",children:"Adam Zampa"}),Object(p.jsx)("option",{value:"Aaron Finch",children:"Aaron Finch"}),Object(p.jsx)("option",{value:"Ashton Agar",children:"Ashton Agar"}),Object(p.jsx)("option",{value:"Josh Hazlewood",children:"Josh Hazlewood"}),Object(p.jsx)("option",{value:"Josh Inglis",children:"Josh Inglis"}),Object(p.jsx)("option",{value:"Mitchell Marsh",children:"Mitchell Marsh"}),Object(p.jsx)("option",{value:"Glenn Maxwell",children:"Glenn Maxwell"}),Object(p.jsx)("option",{value:"Kane Richardson",children:"Kane Richardson"}),Object(p.jsx)("option",{value:"Steve Smith",children:"Steve Smith"}),Object(p.jsx)("option",{value:"Marcus Stoinis",children:"Marcus Stoinis"})]}),Object(p.jsxs)("select",{style:{width:"200px",height:"7vh",fontSize:"22px",borderRadius:"10px",paddingLeft:"5px"},onChange:function(e){o((function(t){return Object(j.a)(Object(j.a)({},t),{},{bowlerNameB:e.target.value})}))},children:[Object(p.jsx)("option",{selected:!0,disabled:!0,children:"Select Bowler 2"}),Object(p.jsx)("option",{value:"Pat Cummins",children:"Pat Cummins"}),Object(p.jsx)("option",{value:"Mitchell Starc",children:"Mitchell Starc"}),Object(p.jsx)("option",{value:"Adam Zampa",children:"Adam Zampa"}),Object(p.jsx)("option",{value:"Aaron Finch",children:"Aaron Finch"}),Object(p.jsx)("option",{value:"Ashton Agar",children:"Ashton Agar"}),Object(p.jsx)("option",{value:"Josh Hazlewood",children:"Josh Hazlewood"}),Object(p.jsx)("option",{value:"Josh Inglis",children:"Josh Inglis"}),Object(p.jsx)("option",{value:"Mitchell Marsh",children:"Mitchell Marsh"}),Object(p.jsx)("option",{value:"Glenn Maxwell",children:"Glenn Maxwell"}),Object(p.jsx)("option",{value:"Kane Richardson",children:"Kane Richardson"}),Object(p.jsx)("option",{value:"Steve Smith",children:"Steve Smith"}),Object(p.jsx)("option",{value:"Marcus Stoinis",children:"Marcus Stoinis"})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(m.a,{variant:"contained",onClick:function(){h.a.post("".concat(v,"/api/v1/score"),a).then((function(e){console.log("res: ",e.data)}))},children:"Set"})]})})},g=a(202),w=a(113),A=a(211),S=a(212),y=a(210);var B=function(){var e=Object(n.useState)({}),t=Object(b.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){h.a.get("".concat(v,"/api/v1/score")).then((function(e){console.log("res +++: ",e.data),o(e.data)}))}),[]),Object(n.useEffect)((function(){var e=Object(w.a)("http://localhost:5001");return e.on("connect",(function(){console.log("connected to server")})),e.on("disconnect",(function(e){console.log("disconnected from server: ",e)})),e.on("SCORE",(function(e){console.log(e),o(e)})),function(){e.close()}}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(y.a,{style:{textAlign:"center"},sx:{fontSize:20,color:"skyblue"},color:"text.secondary",gutterBottom:!0,children:[null===a||void 0===a?void 0:a.teamOne," vs ",null===a||void 0===a?void 0:a.teamTwo," (Bat ",a.bat,")"]}),Object(p.jsxs)("div",{style:{marginTop:"1rem",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"},children:[Object(p.jsx)("div",{style:{marginTop:"1rem"},children:Object(p.jsx)(g.a,{spacing:2,direction:"column",children:Object(p.jsx)(A.a,{style:{width:300,height:200,border:"10px solid skyblue",color:"green"},children:Object(p.jsxs)(S.a,{style:{color:"green"},children:[Object(p.jsx)(y.a,{sx:{fontSize:14},gutterBottom:!0,children:null===a||void 0===a?void 0:a.teamOne}),Object(p.jsxs)(y.a,{variant:"h5",component:"div",children:[null===a||void 0===a?void 0:a.score," / ",null===a||void 0===a?void 0:a.wicket]}),Object(p.jsxs)(y.a,{sx:{mb:1.5},children:["over: ",a.over]}),Object(p.jsxs)(y.a,{sx:{fontSize:14},gutterBottom:!0,children:[null===a||void 0===a?void 0:a.batsmanNameA," (",null===a||void 0===a?void 0:a.runsA,")"]}),Object(p.jsxs)(y.a,{sx:{fontSize:14},gutterBottom:!0,children:[null===a||void 0===a?void 0:a.batsmanNameB," (",null===a||void 0===a?void 0:a.runsB,")"]})]})})})}),Object(p.jsx)("div",{style:{marginTop:"1rem"},children:Object(p.jsx)(g.a,{spacing:2,direction:"column",children:Object(p.jsx)(A.a,{style:{width:300,height:200,border:"10px solid skyblue",color:"blue"},children:Object(p.jsxs)(S.a,{style:{color:"blue"},children:[Object(p.jsx)(y.a,{sx:{fontSize:14},gutterBottom:!0,children:null===a||void 0===a?void 0:a.teamTwo}),Object(p.jsxs)(y.a,{variant:"h5",component:"div",children:[null===a||void 0===a?void 0:a.teamtwoscore," / ",null===a||void 0===a?void 0:a.teamtwowicket]}),Object(p.jsxs)(y.a,{sx:{mb:1.5},children:["over: ",a.teamtwoover]}),Object(p.jsxs)(y.a,{sx:{fontSize:14},gutterBottom:!0,children:[null===a||void 0===a?void 0:a.bowlerNameA," over(",null===a||void 0===a?void 0:a.ballsA,")"]}),Object(p.jsxs)(y.a,{sx:{fontSize:14},gutterBottom:!0,children:[null===a||void 0===a?void 0:a.bowlerNameB,"  over(",null===a||void 0===a?void 0:a.ballsB,")"]})]})})})})]}),Object(p.jsxs)(y.a,{sx:{fontSize:20,color:"skyblue"},style:{textAlign:"center",marginTop:"10px"},variant:"body2",children:["Commentry: ",Object(p.jsxs)("b",{children:[" ",(null===a||void 0===a?void 0:a.commentry)||"Hassan Ali just droped the catch"]})]})]})};var k=function(){var e=Object(l.g)();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(r.a,{bg:"info",expand:"lg",children:Object(p.jsxs)(s.a,{children:[Object(p.jsx)(r.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(r.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(d.a,{className:"me-auto",children:[Object(p.jsx)(d.a.Link,{onClick:function(){e.push("/")},children:"Scoreboard"}),Object(p.jsx)(d.a.Link,{onClick:function(){e.push("/admin")},children:"Dashboard"})]})})]})}),Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.b,{exact:!0,path:"/",component:B}),Object(p.jsx)(l.b,{path:"/admin",component:f}),Object(p.jsx)(l.a,{to:"/"})]})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,214)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),o(e),c(e),i(e)}))},M=a(86);i.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(M.a,{children:Object(p.jsx)(k,{})})}),document.getElementById("root")),C()},95:function(e,t,a){}},[[159,1,2]]]);
//# sourceMappingURL=main.2a0bcd7e.chunk.js.map
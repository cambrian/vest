(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,a,t){"use strict";t.r(a);t(68),t(69);var n=t(33),l=t(21),r=t(29),o=t.n(r),c=t(10),i=t.n(c),s=t(0),m=t.n(s),u=function(){return m.a.createElement(i.a,{className:"card-info card-active card-static"},m.a.createElement(i.a.Body,null,m.a.createElement(i.a.Title,null,m.a.createElement("b",null,"Join our alpha!")),m.a.createElement(i.a.Text,null,"We're looking for users to purchase our initial run of staking contracts.",m.a.createElement("br",null),m.a.createElement("br",null),"Applications will be reviewed on a rolling basis, so please take a brief moment to tell us about your staking needs:"),m.a.createElement("a",{target:"_",href:"https://forms.gle/viP5yF9Aux5YmmU27"},m.a.createElement(o.a,{id:"apply",variant:"primary"},"Apply Now"))))},d=t(13),h=t.n(d),p=t(34),E=t.n(p),b=t(19),f=t.n(b),g=function(){return m.a.createElement("div",{id:"about-root"},m.a.createElement(f.a,{className:"top-buffer"},m.a.createElement(h.a,{md:{span:8}},m.a.createElement(E.a,null,m.a.createElement("h1",null,"About"),m.a.createElement("p",{id:"about-body"},m.a.createElement("b",null,"Vest")," is brought to you by"," ",m.a.createElement("a",{target:"_",href:"https://cambrian.dev"},"Cambrian Tech"),", a crypto-focused product lab. We're a Series A company backed by"," ",m.a.createElement("a",{target:"_",href:"https://polychain.capital"},"Polychain Capital"),","," ",m.a.createElement("a",{target:"_",href:"https://a16z.com"},"a16z"),", and"," ",m.a.createElement("a",{target:"_",href:"https://www.1confirmation.com"},"1confirmation")," ","(among others), and we're based out of downtown San Francisco."),m.a.createElement("p",null,"Our team of developers graduated from Stanford not too long ago. Their experience includes stints at companies like Google, Twitter, and Jane Street."),m.a.createElement("p",null,"We'd love to chat!",m.a.createElement("br",null),m.a.createElement("a",{href:"mailto:tech@cambrian.dev"},"tech@cambrian.dev")))),m.a.createElement(h.a,{md:{span:4}},m.a.createElement(u,null))))},v=t(36),y=t.n(v),w=t(64),N=t.n(w),k=t(25),x=t(26),T=t(20),O=t(30),S=t.n(O),C=t(40),j=t.n(C),A=t(31),B=t.n(A),F=t(66),z=t(32),P=t.n(z),W={control:function(e){return Object(x.a)({},e,{background:"transparent",border:"none","border-bottom":"none","&:hover":{"border-bottom":"none"},"border-radius":0,boxShadow:"none","caret-color":"transparent",color:"white",cursor:"pointer",height:"WebKit"===T.engineName?T.isSafari?"34px":"35px":"33.5px","min-height":"WebKit"===T.engineName?T.isSafari?"34px":"35px":"33.5px","& > *":{marginTop:"WebKit"===T.engineName?void 0:"-4px",marginBottom:T.isSafari?void 0:"auto"},marginLeft:-5,marginRight:-5})},dropdownIndicator:function(e){return Object(x.a)({},e,{color:"white","&:hover":{color:"white"}})},indicatorSeparator:function(e){return Object(x.a)({},e,{backgroundColor:"white",height:"15px",marginTop:"auto",marginBottom:"auto"})},singleValue:function(e){return Object(x.a)({},e,{color:"yellow",marginBottom:T.isSafari?void 0:"auto",maxWidth:void 0,position:void 0,transform:void 0})},option:function(e,a){var t=a.isSelected,n=a.isFocused;return Object(x.a)({},e,{color:"black",background:t?"lightskyblue":n?"#eee":"white","&:active":{background:t?"lightskyblue":n?"#eee":"white"}})}},M=function(e){return m.a.createElement("div",{className:"inline-select-wrapper"},m.a.createElement(F.a,Object.assign({},e,{isSearchable:!1,styles:W})))},R=function(e){var a=Object(s.useState)(1),t=Object(k.a)(a,2),n=t[0],l=t[1],r=Object(s.useState)(!1),c=Object(k.a)(r,2),u=c[0],d=c[1],p=Object(s.useState)("1000.00"),E=Object(k.a)(p,2),b=E[0],g=E[1],v=Object(s.useState)({value:"XTZ",label:"Tezzies"}),y=Object(k.a)(v,2),w=y[0],N=y[1],x=Object(s.useState)({value:3,label:"3 month"}),T=Object(k.a)(x,2),O=T[0],C=T[1];Object(s.useEffect)(function(){if(null!==e.tutorialRef.current&&u){var a=e.tutorialRef.current.getBoundingClientRect().top;window.scroll({top:a+window.scrollY-20}),d(!1)}},[e.tutorialRef,u]);var A=function(e){e!==n&&(l(e),d(!0))},F={XTZ:"KT1ExampleAddress",ATOM:"cosmos1ExampleAddress"},z={BTC:8730.59,XTZ:1.67,ATOM:4.56},W=w.value,R=O.value,Y=parseFloat(b)*{XTZ:.0059,ATOM:.0105}[W]*R,X=Y*z[W],Z=.6*Y*{XTZ:1908e-7,ATOM:52302e-8}[W],_=Z*z.BTC;return m.a.createElement(f.a,{className:"top-buffer"},m.a.createElement(h.a,{className:"order-md-12"},1===n&&m.a.createElement(j.a,{className:"tutorial-form"},m.a.createElement("code",null,m.a.createElement("span",{className:"tutorial-highlight bold"},"Example:")," You are purchasing the rewards from staking"," ",m.a.createElement(S.a,{className:"autosize-input",type:"text",value:b,onChange:function(e){var a=e.target.value;a.length<=8&&g(a)},onBlur:function(e){var a=parseFloat(b)||1e3;(a>=1e5||a<=0)&&(a=1e3),g(a.toFixed(2))}})," ",m.a.createElement(M,{options:[{value:"XTZ",label:"Tezzies"},{value:"ATOM",label:"Cosmos"}],value:w,onChange:function(e){return N(e)}})," ","for a"," ",m.a.createElement(M,{options:[{value:3,label:"3 month"},{value:6,label:"6 month"},{value:9,label:"9 month"}],value:O,onChange:function(e){return C(e)}})," ","duration..."," ",m.a.createElement(o.a,{variant:"dark",onClick:function(){return A(2)}},"Continue"))),2===n&&m.a.createElement(j.a,{className:"tutorial-form"},m.a.createElement("code",null,"...which will cost you"," ",m.a.createElement(B.a,{placement:"top",overlay:m.a.createElement(P.a,{className:"tooltip-code",id:"tooltip-cost"},"$",_.toFixed(2)," as of May 26")},m.a.createElement("span",{className:"tutorial-highlight"},Z.toFixed(4)))," ",m.a.createElement("span",{className:"tutorial-highlight"},"BTC"),". You are currently estimated to earn"," ",m.a.createElement(B.a,{placement:"top",overlay:m.a.createElement(P.a,{className:"tooltip-code",id:"tooltip-rewards"},"$",X.toFixed(2)," as of May 26")},m.a.createElement("span",{className:"tutorial-highlight"},Y.toFixed(2)))," ",m.a.createElement("span",{className:"tutorial-highlight"},W)," in rewards (liable to vary).",m.a.createElement("br",null),m.a.createElement("br",null),"Please enter your ",W," payout address:"," ",m.a.createElement(S.a,{className:"autosize-input",type:"text",value:F[W],readOnly:!0})," ",m.a.createElement(o.a,{variant:"dark",onClick:function(){return A(3)}},"Submit"))),3===n&&m.a.createElement("code",{id:"tutorial-confirm"},"Your staking contract has been confirmed!",m.a.createElement("br",null),m.a.createElement("br",null),"Please send"," ",m.a.createElement("span",{className:"tutorial-highlight"},Z.toFixed(4)," BTC")," ","to the following payment address within the next 24 hours:"," ",m.a.createElement(B.a,{placement:"top",overlay:m.a.createElement(P.a,{className:"tooltip-code",id:"tooltip-example-address"},"Example Address")},m.a.createElement("span",{className:"tutorial-highlight"},"1A1zP1eP5QGefi2")),".",m.a.createElement("br",null),m.a.createElement("br",null),"Once payment is confirmed, you should begin receiving the rewards from staking"," ",m.a.createElement("span",{className:"tutorial-highlight"},b," ",W)," ","for a"," ",m.a.createElement("span",{className:"tutorial-highlight"},O.label)," ","duration, paid out to your address beginning in"," ",m.a.createElement("span",{className:"tutorial-highlight"},F[W].substr(0,9)),".",m.a.createElement("br",null),m.a.createElement("br",null),"Your order code is"," ",m.a.createElement(B.a,{placement:"top",overlay:m.a.createElement(P.a,{className:"tooltip-code",id:"tooltip-example-order"},"Example Order Code")},m.a.createElement("span",{className:"tutorial-highlight"},"7GA3K9ME25B")),".")),m.a.createElement(h.a,{md:{span:6},className:"top-buffer-sm order-md-1"},m.a.createElement(i.a,{className:"card-info "+(1===n?"card-active":""),onClick:function(){return A(1)}},m.a.createElement(i.a.Body,null,m.a.createElement(i.a.Title,null,m.a.createElement("b",null,"Step 1: Select Terms")),m.a.createElement(i.a.Text,null,"Select a token, amount to stake, and duration to stake. These are the ",m.a.createElement("i",null,"terms")," of your staking contract."))),m.a.createElement(i.a,{className:"card-info top-buffer "+(2===n?"card-active":""),onClick:function(){return A(2)}},m.a.createElement(i.a.Body,null,m.a.createElement(i.a.Title,null,m.a.createElement("b",null,"Step 2: Checkout")),m.a.createElement(i.a.Text,null,"Review the quoted BTC price for your selected terms. If everything looks correct, submit a ",m.a.createElement("i",null,"payout address")," for receiving your rewards."))),m.a.createElement(i.a,{className:"card-info top-buffer "+(3===n?"card-active":""),onClick:function(){return A(3)}},m.a.createElement(i.a.Body,null,m.a.createElement(i.a.Title,null,m.a.createElement("b",null,"Step 3: Confirmation")),m.a.createElement(i.a.Text,null,"After checkout, you'll see a ",m.a.createElement("i",null,"payment address")," and an"," ",m.a.createElement("i",null,"order code"),". Send the indicated amount of BTC to this address within 24 hours (or you'll have to checkout again).",m.a.createElement("br",null),m.a.createElement("br",null),"Once the payment is fulfilled, watch the rewards roll in to your payout address! You can sit back and relax, but if you have any further questions, simply contact us with your order code.")))))},Y=function(){var e=Object(s.useRef)(null);return m.a.createElement("div",null,m.a.createElement(f.a,{className:"top-buffer"},m.a.createElement(h.a,{md:{span:8}},m.a.createElement(E.a,null,m.a.createElement("h1",null,m.a.createElement("b",null,"Staking With Leverage")),m.a.createElement("h3",null,m.a.createElement("span",{className:"chevron"},">>")," Earn dividends from the largest PoS miners."),m.a.createElement("hr",{id:"splash-rule"}),m.a.createElement("p",{className:"splash-description"},"Vest lets you purchase the rights to Proof-of-Stake (PoS) mining rewards, rather than having to stake yourself."),m.a.createElement("p",{className:"splash-description"},"Capture profits"," ",m.a.createElement("span",{className:"splash-highlight"},"without locking your own funds")," ","in a volatile asset. Take a"," ",m.a.createElement("span",{className:"splash-highlight"},"leveraged bet")," by receiving the rewards of massive staking operations."),m.a.createElement("p",{className:"splash-description"},"By partnering with only the most reputable stakers, we offer you exceptional reliability and industry-leading profit margins."))),m.a.createElement(h.a,{md:{span:4}},m.a.createElement(u,null))),m.a.createElement(f.a,{className:"top-buffer-section"},m.a.createElement(h.a,{ref:e},m.a.createElement("h3",{className:"subheader"},"How It Works"),m.a.createElement(R,{tutorialRef:e}))))},X=function(){return m.a.createElement(n.a,null,m.a.createElement(N.a,{className:"top-buffer"},m.a.createElement(f.a,null,m.a.createElement(h.a,null,m.a.createElement("h1",{id:"title"},m.a.createElement(n.b,{to:""},m.a.createElement(y.a,null,"Vest")))),m.a.createElement(h.a,{xs:{span:8},className:"text-right my-auto"},m.a.createElement("h4",{id:"menu"},m.a.createElement(n.c,{to:"/",activeClassName:"menu-active"},m.a.createElement(y.a,null,"Home")),"\xb7",m.a.createElement(n.c,{to:"/about",exact:!0,activeClassName:"menu-active"},m.a.createElement(y.a,null,"About"))))),m.a.createElement(l.d,null,m.a.createElement(l.b,{path:"/",exact:!0,component:Y}),m.a.createElement(l.b,{path:"/about",component:g}),m.a.createElement(l.a,{to:"/"})),m.a.createElement(f.a,{id:"footer"},m.a.createElement(h.a,null,"\xa92019"," ",m.a.createElement("a",{target:"_",href:"https://cambrian.dev"},"Cambrian Technologies"),". All rights reserved."))))},Z=t(12);t.n(Z).a.render(m.a.createElement(X,null),document.getElementById("root"))},67:function(e,a,t){e.exports=t(123)},68:function(e,a,t){},69:function(e,a,t){}},[[67,1,2]]]);
//# sourceMappingURL=main.42c21698.chunk.js.map
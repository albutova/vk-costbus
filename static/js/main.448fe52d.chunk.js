(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(t,e,o){},112:function(t,e,o){"use strict";o.r(e);o(61),o(86);var s=o(0),l=o.n(s),r=o(36),u=o.n(r),c=o(37),n=o.n(c),a=o(22),b=o(23),y=o(25),C=o(24),i=o(26),m=o(5),h=(o(110),o(8)),d={2:{cost:0,trolleybusCost:20},7:{cost:0,trolleybusCost:20},66:{cost:23,trolleybusCost:0},25:{cost:23,trolleybusCost:0},40:{cost:23,trolleybusCost:0},44:{cost:23,trolleybusCost:0},70:{cost:23,trolleybusCost:0},"82c":{cost:23,trolleybusCost:0},"82\u0441":{cost:23,trolleybusCost:0},"88\u0442":{cost:23,trolleybusCost:0},"88t":{cost:23,trolleybusCost:0},12:{cost:23,trolleybusCost:0},24:{cost:23,trolleybusCost:0},1:{cost:27,trolleybusCost:20},"1\u0442":{cost:27,trolleybusCost:0},"1t":{cost:27,trolleybusCost:0},"2\u0430":{cost:27,trolleybusCost:0},"2a":{cost:27,trolleybusCost:0},"5\u043a":{cost:27,trolleybusCost:0},"5k":{cost:27,trolleybusCost:0},8:{cost:27,trolleybusCost:20},9:{cost:27,trolleybusCost:20},21:{cost:27,trolleybusCost:0},41:{cost:27,trolleybusCost:0},59:{cost:27,trolleybusCost:0},68:{cost:27,trolleybusCost:0},6:{cost:27,trolleybusCost:20},"9\u043a":{cost:27,trolleybusCost:0},"9k":{cost:27,trolleybusCost:0},"9\u043c":{cost:27,trolleybusCost:0},"9m":{cost:27,trolleybusCost:0},10:{cost:27,trolleybusCost:0},"10\u0430":{cost:27,trolleybusCost:0},"10a":{cost:27,trolleybusCost:0},16:{cost:27,trolleybusCost:0},17:{cost:27,trolleybusCost:0},20:{cost:27,trolleybusCost:0},27:{cost:27,trolleybusCost:0},29:{cost:27,trolleybusCost:0},39:{cost:27,trolleybusCost:0},43:{cost:27,trolleybusCost:0},49:{cost:27,trolleybusCost:0},55:{cost:27,trolleybusCost:0},63:{cost:27,trolleybusCost:0},71:{cost:27,trolleybusCost:0},73:{cost:27,trolleybusCost:0},75:{cost:27,trolleybusCost:0},77:{cost:27,trolleybusCost:0},80:{cost:27,trolleybusCost:0},85:{cost:27,trolleybusCost:0},93:{cost:27,trolleybusCost:0},54:{cost:21,trolleybusCost:0},4:{cost:23,trolleybusCost:0},5:{cost:23,trolleybusCost:0},13:{cost:23,trolleybusCost:0},18:{cost:23,trolleybusCost:0},30:{cost:23,trolleybusCost:0},31:{cost:23,trolleybusCost:0},33:{cost:23,trolleybusCost:0},34:{cost:23,trolleybusCost:0},81:{cost:23,trolleybusCost:0},89:{cost:23,trolleybusCost:0},99:{cost:27,trolleybusCost:0}},p=(o(111),function(t){function e(t){var o;return Object(a.a)(this,e),(o=Object(y.a)(this,Object(C.a)(e).call(this,t))).updateMessage=function(t){o.setState(function(t){return{result:""}});var e=0,s=d[o.state.currentBus];s&&(o.state.isTrolleybus?s.trolleybusCost>0&&(e=s.trolleybusCost):e=s.cost),e=e?e+" "+o.rubtostr(e):"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445",o.setState(function(t){return{result:e}})},o.onChangeBus=function(t){o.setState({currentBus:t.target.value})},o.onChangeTrolleybus=function(t){o.setState({isTrolleybus:2==t.target.value})},o.rubtostr=function(t){var e=["\u0440\u0443\u0431\u043b\u044c","\u0440\u0443\u0431\u043b\u044f","\u0440\u0443\u0431\u043b\u0435\u0439"],o=(t=Math.abs(t)%100)%10;return t>10&&t<20?e[2]:o>1&&o<5?e[1]:1==o?e[0]:e[2]},o.state={id:"home",result:"",currentBus:"",isTrolleybus:!1},o.updateMessage=o.updateMessage.bind(Object(h.a)(Object(h.a)(o))),o.onChangeBus=o.onChangeBus.bind(Object(h.a)(Object(h.a)(o))),o.rubtostr=o.rubtostr.bind(Object(h.a)(Object(h.a)(o))),o}return Object(i.a)(e,t),Object(b.a)(e,[{key:"render",value:function(){return l.a.createElement(m.Panel,{id:this.state.id,theme:"white"},l.a.createElement(m.PanelHeader,null,"\u0426\u0435\u043d\u0430 \u043f\u0440\u043e\u0435\u0437\u0434\u0430 \u0432 \u041f\u0435\u043d\u0437\u0435"),l.a.createElement(m.FormLayout,null,l.a.createElement(m.FormLayoutGroup,{top:"\u041d\u043e\u043c\u0435\u0440 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043a\u0438/\u0430\u0432\u0442\u043e\u0431\u0443\u0441\u0430/\u0442\u0440\u043e\u043b\u043b\u0435\u0439\u0431\u0443\u0441\u0430"},l.a.createElement(m.Input,{type:"text",alignment:"center",placeHolder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440",onChange:this.onChangeBus})),l.a.createElement(m.FormLayoutGroup,null,l.a.createElement("center",null,l.a.createElement("input",{type:"radio",value:"1",name:"typeBus",onChange:this.onChangeTrolleybus}),"\u0410\u0432\u0442\u043e\u0431\u0443\u0441/\u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043a\u0430",l.a.createElement("input",{type:"radio",value:"2",name:"typeBus",onChange:this.onChangeTrolleybus}),"\u0422\u0440\u043e\u043b\u043b\u0435\u0439\u0431\u0443\u0441")),l.a.createElement(m.Button,{size:"xl",level:"primary",stretched:"true",onClick:this.updateMessage},"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u043e\u0438\u0442 \u043f\u0440\u043e\u0435\u0437\u0434?"),l.a.createElement(m.Div,{alignment:"center"},l.a.createElement(m.InfoRow,{className:"resultcost"},l.a.createElement("center",null,this.state.result)))))}}]),e}(l.a.Component)),g=function(t){function e(t){var o;return Object(a.a)(this,e),(o=Object(y.a)(this,Object(C.a)(e).call(this,t))).state={activePanel:"home"},o}return Object(i.a)(e,t),Object(b.a)(e,[{key:"render",value:function(){return l.a.createElement(m.View,{activePanel:this.state.activePanel},l.a.createElement(p,{id:"home"}))}}]),e}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.send("VKWebAppInit",{}),u.a.render(l.a.createElement(g,null),document.getElementById("root"))},60:function(t,e,o){t.exports=o(112)}},[[60,1,2]]]);
//# sourceMappingURL=main.448fe52d.chunk.js.map
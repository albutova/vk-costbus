(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);a(61),a(86);var n=a(0),o=a.n(n),r=a(37),c=a.n(r),i=a(18),l=a.n(i),u=a(23),s=a(24),m=a(26),p=a(25),d=a(27),h=a(1),b=(a(110),a(10)),f=function(e){function t(){var e;Object(u.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).updateMessage=function(t){e.setState(function(t){return{result:e.state.currentTime}})},e.onChangeTime=function(t){t.preventDefault(),e.setState({currentTime:t.target.value})};var a=new Date;return e.state={id:"home",result:"",currentTime:a.getHours()+":"+a.getMinutes()},e.updateMessage=e.updateMessage.bind(Object(b.a)(Object(b.a)(e))),e.onChangeTime=e.onChangeTime.bind(Object(b.a)(Object(b.a)(e))),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(h.Panel,{id:this.state.id},o.a.createElement(h.FormLayout,null,o.a.createElement(h.FormLayoutGroup,{top:"\u041d\u043e\u043c\u0435\u0440 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043a\u0438/\u0430\u0432\u0442\u043e\u0431\u0443\u0441\u0430/\u0442\u0440\u043e\u043b\u043b\u0435\u0439\u0431\u0443\u0441\u0430"},o.a.createElement(h.Input,{type:"text",alignment:"center"})),o.a.createElement(h.FormLayoutGroup,{top:"\u0412\u0440\u0435\u043c\u044f"},o.a.createElement(h.Input,{type:"text",defaultValue:this.state.currentTime,alignment:"center",onChange:this.onChangeTime})),o.a.createElement(h.FormLayoutGroup,{top:"\u0422\u0438\u043f \u043e\u043f\u043b\u0430\u0442\u044b"},o.a.createElement(h.Radio,{name:"type"},"\u041d\u0430\u043b\u0438\u0447\u043d\u044b\u0435"),o.a.createElement(h.Radio,{name:"type"},"\u041a\u0430\u0440\u0442\u0430")),o.a.createElement(h.Button,{size:"xl",level:"primary",stretched:"true",onClick:this.updateMessage},"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u043e\u0438\u0442 \u043f\u0440\u043e\u0435\u0437\u0434?"),o.a.createElement(h.Div,null,o.a.createElement(h.InfoRow,null,this.state.result))))}}]),t}(o.a.Component),g=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={activePanel:"home",fetchedUser:null},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;l.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),l.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return o.a.createElement(h.View,{activePanel:this.state.activePanel},o.a.createElement(f,{id:"home"}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.send("VKWebAppInit",{}),c.a.render(o.a.createElement(g,null),document.getElementById("root"))},60:function(e,t,a){e.exports=a(111)}},[[60,1,2]]]);
//# sourceMappingURL=main.bac244d0.chunk.js.map
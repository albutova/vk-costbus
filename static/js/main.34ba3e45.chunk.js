(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);a(61),a(86);var n=a(0),o=a.n(n),r=a(37),c=a.n(r),l=a(17),s=a.n(l),i=a(23),u=a(24),m=a(26),d=a(25),f=a(27),p=a(6),h=(a(110),a(18)),b=function(e){function t(){var e;Object(i.a)(this,t),e=Object(m.a)(this,Object(d.a)(t).call(this));var a=new Date;return e.state={id:"home",result:"",currentTime:a.getHours()+":"+a.getMinutes()},e.updateMessage=e.updateMessage.bind(Object(h.a)(Object(h.a)(e))),e}return Object(f.a)(t,e),Object(u.a)(t,[{key:"updateMessage",value:function(e){e.preventDefault(),console.log("!!!!!!!!!!!!!!!!!"),this.setState({result:"my friend (from changed state)!"})}},{key:"render",value:function(){return o.a.createElement(p.Panel,{id:this.state.id},o.a.createElement(p.FormLayout,null,o.a.createElement(p.FormLayoutGroup,{top:"\u041d\u043e\u043c\u0435\u0440 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043a\u0438/\u0430\u0432\u0442\u043e\u0431\u0443\u0441\u0430/\u0442\u0440\u043e\u043b\u043b\u0435\u0439\u0431\u0443\u0441\u0430"},o.a.createElement(p.Input,{type:"text",alignment:"center",bottom:"fffffffffff"})),o.a.createElement(p.FormLayoutGroup,{top:"\u0412\u0440\u0435\u043c\u044f"},o.a.createElement(p.Input,{type:"text",defaultValue:this.state.currentTime,alignment:"center"}),o.a.createElement(p.Button,{size:"xl",level:"primary",stretched:"true",onClick:"{updateMessage}"},"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u043e\u0438\u0442 \u043f\u0440\u043e\u0435\u0437\u0434?")),o.a.createElement(p.InfoRow,null,this.state.result)))}}]),t}(o.a.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={activePanel:"home",fetchedUser:null},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;s.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),s.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return o.a.createElement(p.View,{activePanel:this.state.activePanel},o.a.createElement(b,{id:"home"}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.send("VKWebAppInit",{}),c.a.render(o.a.createElement(w,null),document.getElementById("root"))},60:function(e,t,a){e.exports=a(111)}},[[60,1,2]]]);
//# sourceMappingURL=main.34ba3e45.chunk.js.map
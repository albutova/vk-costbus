(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);n(61),n(86);var a=n(0),o=n.n(a),l=n(31),c=n.n(l),r=n(17),i=n.n(r),u=n(55),s=n(56),d=n(58),m=n(57),p=n(59),h=n(7),f=(n(110),n(32)),b=function(e){var t,n=e.id,a=(e.go,e.currentTime);return o.a.createElement(h.Panel,{id:n},o.a.createElement(h.PanelHeader,null,"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u043e\u0438\u0442 \u043f\u0440\u043e\u0435\u0437\u0434?"),o.a.createElement(h.FormLayout,null,o.a.createElement(h.FormLayoutGroup,null,o.a.createElement(h.Input,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043a\u0438/\u0430\u0432\u0442\u043e\u0431\u0443\u0441\u0430/\u0442\u0440\u043e\u043b\u043b\u0435\u0439\u0431\u0443\u0441\u0430?",alignment:"center"}),o.a.createElement(h.Input,(t={type:"text",defaultValue:"\u0421\u0438\u0434\u043e\u0440\u043e\u0432",alignment:"right"},Object(f.a)(t,"defaultValue",a),Object(f.a)(t,"alignment","center"),t)))))},w=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"home",fetchedUser:null},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;i.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),i.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return o.a.createElement(h.View,{activePanel:this.state.activePanel},o.a.createElement(b,{id:"home",go:this.go}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.send("VKWebAppInit",{}),c.a.render(o.a.createElement(w,null),document.getElementById("root"))},60:function(e,t,n){e.exports=n(111)}},[[60,1,2]]]);
//# sourceMappingURL=main.222f5dd0.chunk.js.map
(this.webpackJsonprobocard=this.webpackJsonprobocard||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),c=n(3),s=n.n(c),a=(n(12),n(4)),i=n(5),u=n(7),b=n(6),h=(n(13),n(14),n(15),n(0)),d=function(e){return Object(h.jsxs)("div",{className:"card-container",children:[Object(h.jsx)("img",{src:"https://robohash.org/".concat(e.roboid,"?set=set3&size=180x180"),alt:"robot"}),Object(h.jsx)("h2",{children:e.roboname},e.roboid),Object(h.jsx)("p",{children:e.robomail})]})},j=function(e){return Object(h.jsx)("div",{className:"robo-card",children:e.robos.map((function(e){return Object(h.jsx)(d,{roboid:e.id,roboname:e.name,robomail:e.email})}))})},l=(n(17),function(e){return Object(h.jsx)("div",{className:"search-box",children:Object(h.jsx)("input",{type:"search",placeholder:"Search Robo",className:"search-input",onChange:e.search})})}),f=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.robots,o=t.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Robots"}),Object(h.jsx)(l,{search:function(t){return e.setState({searchField:t.target.value})}}),Object(h.jsx)(j,{robos:r})]})}}]),n}(o.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),o(e),r(e),c(e),s(e)}))};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.4afee39f.chunk.js.map
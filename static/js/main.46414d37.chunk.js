(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,image:"../public/images/1.jpg"},{id:2,image:"../public/images/2.jpg"},{id:3,image:"../public/images/3.jpg"},{id:4,image:"../public/images/4.jpg"},{id:5,image:"../public/images/5.jpg"},{id:6,image:"../public/images/6.jpg"},{id:7,image:"../public/images/7.jpg"},{id:8,image:"../public/images/8.jpg"},{id:9,image:"../public/images/9.jpg"}]},10:function(e,a,t){e.exports=t(17)},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(4),r=t.n(c),l=(t(16),t(3),t(5)),o=t(6),s=t(8),m=t(7),u=t(9);var g=function(e){return i.a.createElement("nav",{className:"navbar"},i.a.createElement("ul",null,i.a.createElement("li",null,"Clicky Game"),i.a.createElement("li",null,"Click an image to begin!"),i.a.createElement("li",null,"Score: ",i.a.createElement("span",{id:"score"},e.score)," | Top Score: ",i.a.createElement("span",{id:"topScore"},e.highScore))))},d=function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Clicky Game!"),i.a.createElement("h2",null,"Click on image to earn points, but don't click on any more than once!"))},h=function(){return i.a.createElement("div",null,i.a.createElement("footer",null,"Clicky Game! ",i.a.createElement("span",null,i.a.createElement("img",{src:"../public/images/footer.jpg"}))))},p=t(1);var f=function(e){return i.a.createElement("div",{className:"col-sm-4",value:e.id,onClick:function(){e.onClick(e.id)}},i.a.createElement("img",{className:"card",src:e.image,id:e.id,alt:e.id}))},E=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={clickedImages:[],score:0,highScore:0,images:p},t.shuffleArray=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e},t.shuffleResult=function(){var e=t.shuffleArray(p);t.setState({images:e})},t.checkImage=function(e){-1===t.state.clickedImages.indexOf(e)?(t.setState({score:t.state.score+1}),t.setState({clickedImages:t.state.clickedImages.concat(e)}),t.state.score>t.state.highScore&&t.setState({highscore:t.state.highscore+1}),t.shuffleResult()):(t.setState({score:0}),t.setState({clickedImages:[]}),t.shuffleResult())},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(g,{score:this.state.score,highScore:this.state.highScore}),i.a.createElement(d,null),i.a.createElement("div",{id:"mainContainer",className:"container"},i.a.createElement("div",{className:"row"},this.state.images.map(function(a){return i.a.createElement(f,{key:a.id,image:a.image,id:a.id,onClick:e.checkImage})}))),i.a.createElement(h,null))}}]),a}(n.Component),v=function(){return i.a.createElement(E,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},3:function(e,a,t){}},[[10,1,2]]]);
//# sourceMappingURL=main.46414d37.chunk.js.map
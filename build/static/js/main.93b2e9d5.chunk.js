(window.webpackJsonpclicky=window.webpackJsonpclicky||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"BananaMan","image":"/clicky-game/images/BananaMan.png","clicked":false},{"id":2,"name":"BMO","image":"/clicky-game/images/BMO.png","clicked":false},{"id":3,"name":"CB","image":"/clicky-game/images/CB.png","clicked":false},{"id":4,"name":"Finn","image":"/clicky-game/images/Finn.png","clicked":false},{"id":5,"name":"Gunter","image":"/clicky-game/images/Gunter.png","clicked":false},{"id":6,"name":"Flame King","image":"/clicky-game/images/FlameKing.png","clicked":false},{"id":7,"name":"Ice King","image":"/clicky-game/images/IceKing.png","clicked":false},{"id":8,"name":"Jake","image":"/clicky-game/images/Jake.png","clicked":false},{"id":9,"name":"LSP","image":"/clicky-game/images/LSP.png","clicked":false},{"id":10,"name":"Marceline","image":"/clicky-game/images/Marceline.png","clicked":false},{"id":11,"name":"PB","image":"/clicky-game/images/PB.png","clicked":false},{"id":12,"name":"PeppermintButler","image":"/clicky-game/images/PeppermintButler.png","clicked":false}]')},,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(2),r=t.n(i),l=t(3),s=t(4),o=t(7),m=t(5),g=t(8);t(14);var d=function(e){return c.a.createElement("div",{className:"click-item",style:{backgroundImage:"url(".concat(e.image,")")},"data-id":e.id,onClick:function(){return e.removeFriend(e.id)}})};t(15);var u=function(e){return c.a.createElement("div",{className:"container body-container"},e.children)};t(16);var k=function(e){return c.a.createElement("div",{className:"jumbotron jumbotron-fluid"},c.a.createElement("div",{className:"container text-align"},c.a.createElement("img",{src:"/clicky-game/images/Ice-King Header.png",id:"icekingheader",alt:"ice-king","data-toggle":"popover","data-placement":"left","data-content":"Click on a character below to earn points, but don't click on any more than once or the Ice King will freeze you!"}),c.a.createElement("span",{id:"press"},"Press me")),e.children)},f=t(6);t(17);var h=function(e){return c.a.createElement("nav",{className:"navbar sticky-top navbar-expand"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("h1",null,"Clicky Game"),c.a.createElement("span",{className:"sr-only nav-link clicky-title"},"(current)")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("h4",{className:"nav-link ".concat(e.colorStyle)},e.mid)),c.a.createElement("li",{className:"nav-item"},c.a.createElement("h4",{className:"nav-link"},"Score: ",e.score," | Top Score: ",e.highscore))),e.children)};t(18);var p=function(){return c.a.createElement("footer",{className:"page-footer"},c.a.createElement("div",{className:"footer-copyright text-center py-3"},c.a.createElement("strong",null,"Adventure Time Clicky Game")))},y=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={friends:f,score:0,highscore:0,mid:"Click a character below to begin the adventure!",colorStyle:"text-white"},t.gameOver=function(){return t.state.score>t.state.highscore&&t.setState({highscore:t.state.score},function(){console.log(this.state.highscore)}),t.state.friends.forEach(function(e){e.clicked=!1}),t.setState({mid:"Game Over! Click an image to play again."}),t.setState({score:0}),t.setState({colorStyle:"text-danger"}),!0},t.youWon=function(){return t.state.score>t.state.highscore&&t.setState({highscore:t.state.score},function(){console.log(this.state.highscore)}),t.state.friends.forEach(function(e){e.clicked=!1}),t.setState({mid:"Congrats you won!!"}),t.setState({score:0}),t.setState({colorStyle:"text-success"}),!0},t.clickFriend=function(e){var a=t.state.friends.map(function(a){return a.id===e&&(!1===a.clicked?(a.clicked=!0,t.setState({score:t.state.score+1},function(){console.log(this.state.score)}),t.setState({mid:"Oooh keep clicking!!"}),t.setState({colorStyle:"text-success"}),12===t.state.score&&t.youWon()):t.gameOver()),a});t.setState({friends:a});var n=t.state.friends.sort(function(){return Math.random()-.5});t.setState({friends:n})},t}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.state.score,"SCORE"),c.a.createElement("span",null,c.a.createElement(h,{score:this.state.score,highscore:this.state.highscore,mid:this.state.mid,colorStyle:this.state.colorStyle}),c.a.createElement(k,null),c.a.createElement(u,null,this.state.friends.map(function(a){return c.a.createElement(d,{removeFriend:e.clickFriend,id:a.id,key:a.id,name:a.name,image:a.image,clicked:a.clicked})})),c.a.createElement(p,null))}}]),a}(n.Component);t(19);r.a.render(c.a.createElement(y,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.93b2e9d5.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/lampv-profile-completejavascript.com.49e59015.jpg"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAcSURBVChTY5STk/vPQARggtIEwahCvIBIhQwMADWWAW3dbvNsAAAAAElFTkSuQmCC"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAKCAYAAABSfLWiAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAcSURBVChTY/wPBAwUAiYoTREYNQQTjBqCDhgYANF+BBBDhAflAAAAAElFTkSuQmCC"},function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),l=a.n(r),c=(a(16),a(1)),i=a(2),s=a(4),m=a(3),p=a(8),h=a.n(p),u=a(9),g=a.n(u),d=a(5);a(17);var v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={loaded:!1},n.handleScroll=n.handleScroll.bind(Object(d.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.handleScroll(),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e=this;if(!this.state.loaded&&function(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.top<=(window.innerHeight||document.documentElement.clientHeight)}(this.imgElm)){var t=new Image;t.src=this.props.src,t.onload=function(){var a=t.width/t.height;e.imgElm.setAttribute("src","".concat(e.props.src)),e.props.keepRatio&&e.imgElm.setAttribute("height","".concat(e.props.width/a)),e.imgElm.classList.add("".concat(e.props.effect)),e.setState({loaded:!0})}}}},{key:"render",value:function(){var e=this,t=this.props.width||"100%",a=this.props.height||"100%",n=this.props.extraClass||"";return o.a.createElement("img",{src:this.props.placeHolder,width:t,height:a,ref:function(t){return e.imgElm=t},className:"lazy-image ".concat(n),alt:this.props.alt})}}]),a}(o.a.Component),f=function(e){var t=e.getBoundingClientRect(),a=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+a}},b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleClick=function(t){t.preventDefault();var a=document.querySelector(e.props.href),n=f(a),o=n.top,r=n.left;window.scroll({top:o,left:r,behavior:"smooth"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.href,n=e.children;return o.a.createElement("a",{className:t,href:a,onClick:this.handleClick},n)}}]),a}(o.a.Component),E=function(e){var t=e.className,a=e.href,n=e.children;return o.a.createElement("a",{className:t,href:a,target:"_blank",rel:"noopener noreferrer"},n)},w=(a(18),function(e){var t=e.color,a=e.title;return o.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"17",height:"20",viewBox:"0 0 17 20"},o.a.createElement("title",null,a),o.a.createElement("path",{fill:t,d:"M2.645 15.781h2.578v-7.746h-2.578v7.746zM5.391 5.647c-0.011-0.759-0.558-1.339-1.44-1.339s-1.462 0.58-1.462 1.339c0 0.737 0.558 1.339 1.429 1.339h0.011c0.904 0 1.462-0.603 1.462-1.339zM11.92 15.781h2.578v-4.442c0-2.377-1.272-3.482-2.969-3.482-1.384 0-1.998 0.77-2.333 1.306h0.022v-1.127h-2.578s0.033 0.725 0 7.746v0h2.578v-4.33c0-0.223 0.011-0.458 0.078-0.625 0.19-0.458 0.614-0.938 1.328-0.938 0.926 0 1.295 0.703 1.295 1.752v4.141zM17.143 4.643v10.714c0 1.775-1.44 3.214-3.214 3.214h-10.714c-1.775 0-3.214-1.44-3.214-3.214v-10.714c0-1.775 1.44-3.214 3.214-3.214h10.714c1.775 0 3.214 1.44 3.214 3.214z"}))}),k=function(e){var t=e.color,a=e.title;return o.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"20",viewBox:"0 0 19 20"},o.a.createElement("title",null,a),o.a.createElement("path",{fill:t,d:"M18.080 4.554c-0.491 0.714-1.105 1.35-1.808 1.864 0.011 0.156 0.011 0.313 0.011 0.469 0 4.766-3.627 10.257-10.257 10.257-2.042 0-3.94-0.592-5.536-1.618 0.29 0.033 0.569 0.045 0.871 0.045 1.685 0 3.237-0.569 4.475-1.54-1.585-0.033-2.913-1.071-3.371-2.5 0.223 0.033 0.446 0.056 0.681 0.056 0.324 0 0.647-0.045 0.949-0.123-1.652-0.335-2.891-1.786-2.891-3.538v-0.045c0.48 0.268 1.038 0.435 1.629 0.458-0.971-0.647-1.607-1.752-1.607-3.002 0-0.67 0.179-1.283 0.491-1.819 1.775 2.187 4.442 3.616 7.433 3.772-0.056-0.268-0.089-0.547-0.089-0.826 0-1.987 1.607-3.605 3.605-3.605 1.038 0 1.975 0.435 2.634 1.138 0.815-0.156 1.596-0.458 2.288-0.871-0.268 0.837-0.837 1.54-1.585 1.987 0.725-0.078 1.429-0.279 2.076-0.558z"}))},A=function(e){var t=e.color,a=e.title;return o.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"20",viewBox:"0 0 12 20"},o.a.createElement("title",null,a),o.a.createElement("path",{fill:t,d:"M10.703 0.134v2.946h-1.752c-1.373 0-1.629 0.658-1.629 1.607v2.109h3.27l-0.435 3.304h-2.835v8.471h-3.415v-8.471h-2.846v-3.304h2.846v-2.433c0-2.824 1.73-4.364 4.252-4.364 1.205 0 2.243 0.089 2.545 0.134z"}))},y=function(e){var t=e.color,a=e.title;return o.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"17",height:"20",viewBox:"0 0 17 20"},o.a.createElement("title",null,a),o.a.createElement("path",{fill:t,d:"M8.571 1.429c4.732 0 8.571 3.839 8.571 8.571 0 3.783-2.455 6.998-5.859 8.136-0.435 0.078-0.592-0.19-0.592-0.413 0-0.279 0.011-1.205 0.011-2.355 0-0.804-0.268-1.317-0.58-1.585 1.908-0.212 3.917-0.938 3.917-4.23 0-0.938-0.335-1.696-0.882-2.299 0.089-0.223 0.379-1.094-0.089-2.277-0.714-0.223-2.355 0.882-2.355 0.882-0.681-0.19-1.417-0.29-2.143-0.29s-1.462 0.1-2.143 0.29c0 0-1.641-1.105-2.355-0.882-0.469 1.183-0.179 2.054-0.089 2.277-0.547 0.603-0.882 1.362-0.882 2.299 0 3.281 1.998 4.018 3.906 4.23-0.246 0.223-0.469 0.603-0.547 1.15-0.491 0.223-1.741 0.603-2.489-0.714-0.469-0.815-1.317-0.882-1.317-0.882-0.837-0.011-0.056 0.525-0.056 0.525 0.558 0.257 0.949 1.25 0.949 1.25 0.502 1.529 2.891 1.016 2.891 1.016 0 0.714 0.011 1.384 0.011 1.596 0 0.223-0.156 0.491-0.592 0.413-3.404-1.138-5.859-4.353-5.859-8.136 0-4.732 3.839-8.571 8.571-8.571zM3.248 13.739c0.022-0.045-0.011-0.1-0.078-0.134-0.067-0.022-0.123-0.011-0.145 0.022-0.022 0.045 0.011 0.1 0.078 0.134 0.056 0.033 0.123 0.022 0.145-0.022zM3.594 14.118c0.045-0.033 0.033-0.112-0.022-0.179-0.056-0.056-0.134-0.078-0.179-0.033-0.045 0.033-0.033 0.112 0.022 0.179 0.056 0.056 0.134 0.078 0.179 0.033zM3.929 14.621c0.056-0.045 0.056-0.134 0-0.212-0.045-0.078-0.134-0.112-0.19-0.067-0.056 0.033-0.056 0.123 0 0.201s0.145 0.112 0.19 0.078zM4.397 15.089c0.045-0.045 0.022-0.145-0.045-0.212-0.078-0.078-0.179-0.089-0.223-0.033-0.056 0.045-0.033 0.145 0.045 0.212 0.078 0.078 0.179 0.089 0.223 0.033zM5.033 15.368c0.022-0.067-0.045-0.145-0.145-0.179-0.089-0.022-0.19 0.011-0.212 0.078s0.045 0.145 0.145 0.167c0.089 0.033 0.19 0 0.212-0.067zM5.737 15.424c0-0.078-0.089-0.134-0.19-0.123-0.1 0-0.179 0.056-0.179 0.123 0 0.078 0.078 0.134 0.19 0.123 0.1 0 0.179-0.056 0.179-0.123zM6.384 15.313c-0.011-0.067-0.1-0.112-0.201-0.1-0.1 0.022-0.167 0.089-0.156 0.167 0.011 0.067 0.1 0.112 0.201 0.089s0.167-0.089 0.156-0.156z"}))},S=function(e){var t=e.color,a=e.title;return o.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},o.a.createElement("title",null,a),o.a.createElement("path",{fill:t,d:"M2.411 13.047l6.73 4.487v-4.007l-3.728-2.489zM1.719 11.44l2.154-1.44-2.154-1.44v2.879zM10.859 17.533l6.73-4.487-3.002-2.009-3.728 2.489v4.007zM10 12.031l3.036-2.031-3.036-2.031-3.036 2.031zM5.413 8.962l3.728-2.489v-4.007l-6.73 4.487zM16.127 10l2.154 1.44v-2.879zM14.587 8.962l3.002-2.009-6.73-4.487v4.007zM20 6.953v6.094c0 0.279-0.145 0.558-0.379 0.714l-9.141 6.094c-0.145 0.089-0.313 0.145-0.48 0.145s-0.335-0.056-0.48-0.145l-9.141-6.094c-0.234-0.156-0.379-0.435-0.379-0.714v-6.094c0-0.279 0.145-0.558 0.379-0.714l9.141-6.094c0.145-0.089 0.313-0.145 0.48-0.145s0.335 0.056 0.48 0.145l9.141 6.094c0.234 0.156 0.379 0.435 0.379 0.714z"}))},j=function(e){var t=e.color,a=e.title;return o.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"17",height:"20",viewBox:"0 0 17 20"},o.a.createElement("title",null,a),o.a.createElement("path",{fill:t,d:"M17.143 15v1.429c0 0.391-0.324 0.714-0.714 0.714h-15.714c-0.391 0-0.714-0.324-0.714-0.714v-1.429c0-0.391 0.324-0.714 0.714-0.714h15.714c0.391 0 0.714 0.324 0.714 0.714zM17.143 9.286v1.429c0 0.391-0.324 0.714-0.714 0.714h-15.714c-0.391 0-0.714-0.324-0.714-0.714v-1.429c0-0.391 0.324-0.714 0.714-0.714h15.714c0.391 0 0.714 0.324 0.714 0.714zM17.143 3.571v1.429c0 0.391-0.324 0.714-0.714 0.714h-15.714c-0.391 0-0.714-0.324-0.714-0.714v-1.429c0-0.391 0.324-0.714 0.714-0.714h15.714c0.391 0 0.714 0.324 0.714 0.714z"}))},C=function(e){var t=e.color,a=e.title;return o.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"20",viewBox:"0 0 19 20"},o.a.createElement("title",null,a),o.a.createElement("path",{fill:t,d:"M14.286 15c0-0.391-0.324-0.714-0.714-0.714s-0.714 0.324-0.714 0.714 0.324 0.714 0.714 0.714 0.714-0.324 0.714-0.714zM17.143 15c0-0.391-0.324-0.714-0.714-0.714s-0.714 0.324-0.714 0.714 0.324 0.714 0.714 0.714 0.714-0.324 0.714-0.714zM18.571 12.5v3.571c0 0.592-0.48 1.071-1.071 1.071h-16.429c-0.592 0-1.071-0.48-1.071-1.071v-3.571c0-0.592 0.48-1.071 1.071-1.071h5.19l1.507 1.518c0.413 0.402 0.949 0.625 1.518 0.625s1.105-0.223 1.518-0.625l1.518-1.518h5.179c0.592 0 1.071 0.48 1.071 1.071zM14.944 6.15c0.112 0.268 0.056 0.58-0.156 0.781l-5 5c-0.134 0.145-0.324 0.212-0.502 0.212s-0.368-0.067-0.502-0.212l-5-5c-0.212-0.201-0.268-0.513-0.156-0.781 0.112-0.257 0.368-0.435 0.658-0.435h2.857v-5c0-0.391 0.324-0.714 0.714-0.714h2.857c0.391 0 0.714 0.324 0.714 0.714v5h2.857c0.29 0 0.547 0.179 0.658 0.435z"}))},N=function(e){var t=e.color,a=e.title;return o.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"20",viewBox:"0 0 19 20"},o.a.createElement("title",null,a),o.a.createElement("path",{fill:t,d:"M17.98 10.837c0 0.379-0.156 0.737-0.413 1.004l-0.837 0.837c-0.268 0.268-0.636 0.424-1.016 0.424s-0.748-0.156-1.004-0.424l-3.281-3.27v7.857c0 0.804-0.67 1.306-1.429 1.306h-1.429c-0.759 0-1.429-0.502-1.429-1.306v-7.857l-3.281 3.27c-0.257 0.268-0.625 0.424-1.004 0.424s-0.748-0.156-1.004-0.424l-0.837-0.837c-0.268-0.268-0.424-0.625-0.424-1.004s0.156-0.748 0.424-1.016l7.266-7.266c0.257-0.268 0.625-0.413 1.004-0.413s0.748 0.145 1.016 0.413l7.266 7.266c0.257 0.268 0.413 0.636 0.413 1.016z"}))},I=function(){return o.a.createElement("div",{className:"flex-spread"},o.a.createElement("div",{className:"padding margin-2"},o.a.createElement(v,{placeHolder:g.a,src:h.a,width:"100%",height:"auto",effect:"opacity",alt:"Lam Pham's profile",extraClass:"image-responsive image-round border border-3 border-color-white"})),o.a.createElement("div",{className:"text-center"},o.a.createElement("h3",{className:"text-uppercase color-white"},o.a.createElement("strong",null,"Lam Pham")),o.a.createElement("p",{className:"color-grey"},o.a.createElement("small",null,"Software Engineer & Web Developer")),o.a.createElement("nav",null,o.a.createElement(b,{className:"block",href:"#intro"},"Intro"),o.a.createElement(b,{className:"block",href:"#portfolio"},"Portfolio"),o.a.createElement(b,{className:"block",href:"#about"},"About"),o.a.createElement(b,{className:"block",href:"#contact"},"Contact"),o.a.createElement(E,{className:"block",href:"https://linktr.ee/lampv"},"Linktree"))))},x=function(){return o.a.createElement("div",{className:"flex-static text-center padding-bottom"},o.a.createElement(E,{className:"margin-right",href:"https://codepen.io/completejavascript/"},o.a.createElement(S,{color:"#FFF"})),o.a.createElement(E,{className:"margin-right",href:"https://github.com/completejavascript"},o.a.createElement(y,{color:"#FFF"})),o.a.createElement(E,{className:"margin-right",href:"https://www.facebook.com/completejavascript/"},o.a.createElement(A,{color:"#FFF"})),o.a.createElement(E,{className:"margin-right",href:"https://www.linkedin.com/in/completejavascript/"},o.a.createElement(w,{color:"#FFF"})),o.a.createElement(E,{href:"https://twitter.com/CmpltJavaScript"},o.a.createElement(k,{color:"#FFF"})))},M=function(e){return o.a.createElement("aside",{className:"app-sidebar background-color-dark-grey position-fixed top-zero \n        height-full flex flex-column transition ".concat(e.isResponsive?"responsive":"")},o.a.createElement(I,null),o.a.createElement(x,null))},T=(a(19),function(e){var t=e.handleClick,a=e.isResponsive,n=e.color,r=e.bgColor;return o.a.createElement("div",{onClick:t,className:"app-toggle-menu background-color-".concat(r," position-fixed padding cursor-pointer\n        line-height-reset border-radius transition ").concat(a?"responsive":"")},o.a.createElement(j,{color:n}))}),B=function(){return o.a.createElement("header",{className:"app-header background-color-yellow",id:"intro"},o.a.createElement("div",{className:"container-full row"},o.a.createElement("div",{className:"col-xs-12 text-center margin-top-3 padding-top-3 padding-bottom-3"},o.a.createElement("h1",{className:"text-uppercase text-title"},o.a.createElement("strong",null,"I'm Lam Pham.")),o.a.createElement("p",{className:"margin-bottom-3 padding-bottom"},"Software Engineer, Web Developer, JavaScript Lover & Blogger @",o.a.createElement(E,{href:"https://completejavascript.com/"},"completejavascript")),o.a.createElement("div",{className:"margin-bottom-2"},o.a.createElement(b,{className:"btn btn-primary",href:"#about"},o.a.createElement("strong",null,"About")),o.a.createElement(b,{className:"btn btn-primary-inverse margin-left-half border-2",href:"#contact"},o.a.createElement("strong",null,"Contact"))))))},D=(a(20),function(e){var t=e.title;return o.a.createElement("h2",{className:"section-title text-uppercase text-center"},o.a.createElement("strong",null,t))}),R=function(e){var t=e.content;return o.a.createElement("p",{className:"text-description text-center margin-bottom-3"},t)},P=a(10),W=a.n(P),F=[{linkDemo:"https://spacex-launch-archives.pages.dev/",linkImg:"/res/spacex-launch-archives.png",altImg:"SpaceX Launch Archives",title:"SpaceX Launch Archives",description:"A React App for tracking all SpaceX Launches in history",tags:"React, TypeScript, GraphQL, Apollo GraphQL, Tailwind CSS",linkWiki:"https://github.com/completejavascript/spacex-launch-archives"},{linkDemo:"https://share-yt-vid.netlify.app/",linkImg:"/res/share-yt-vid.png",altImg:"Share Youtube Video",title:"Share Youtube Video",description:"A Web Application with Firebase for sharing youtube videos",tags:"React Context, React Hooks, React Router, Firebase, Jest",linkWiki:"https://github.com/completejavascript/share-yt-vid"},{linkDemo:"https://gb-template.netlify.com/",linkImg:"/res/gb-blog-template.png",altImg:"Gatsby Blog Template",title:"Gatsby Blog Template",description:"A GatsbyJS Blog Template for blogging purpose.",tags:"React, GatsbyJS, Shiba.CSS",linkWiki:"https://github.com/completejavascript/gatsby-blog-template"},{linkDemo:"https://about.phamvanlam.com/shiba-css/",linkImg:"/res/shiba-css.png",altImg:"Shiba.CSS",title:"Shiba.CSS",description:"A simple and lightweight CSS Framework built with Sass for building responsive web apps.",tags:"SCSS, CSS framework",linkWiki:"https://github.com/completejavascript/shiba-css"},{linkDemo:"https://about.phamvanlam.com/tic-tac-toe/",linkImg:"/res/tic-tac-toe-game.png",altImg:"Tic-Tac-Toe Game",title:"Tic-Tac-Toe Game",description:"Unbeatable Tic-Tac-Toe game using React and Minimax Algorithm",tags:"React, Create-react-app, Minimax Algorithm",linkWiki:"https://github.com/completejavascript/tic-tac-toe"},{linkDemo:"https://api-completejavascript.vercel.app/",linkImg:"/res/api-complete-javascript.png",altImg:"Complete JavaScript's Public APIs",title:"Complete JavaScript's Public APIs",description:"A collection of some public RESTful APIs from Complete JavaScript",tags:"Node.js, Express, MongoDB, Pug, Mocha, Chai, Swagger-jsdoc",linkWiki:"https://github.com/completejavascript/api-completejavascript-com"},{linkDemo:"https://about.phamvanlam.com/the-algorithms-blog/",linkImg:"/res/algorithms-blog.png",altImg:"Algorithms blog",title:"Algorithms Blog",description:"My Algorithms Blog in Vietnamese with Gatsby.js and Netlify",tags:"React, GatsbyJS",linkWiki:"https://github.com/completejavascript/the-algorithms-blog"},{linkDemo:"https://about.phamvanlam.com/pomodoro-clock/",linkImg:"/res/pomodoro-clock.png",altImg:"Pomodoro Clock",title:"Pomodoro Clock",description:"A pomodoro clock for Pomodoro Technique Timer",tags:"React, Create-react-app",linkWiki:"https://github.com/completejavascript/pomodoro-clock"},{linkDemo:"https://about.phamvanlam.com/calculator/",linkImg:"/res/calculator.png",altImg:"Calculator",title:"Standard Calculator",description:"A basic Calculator with five functions for addition, subtraction, division, multiplication and modulo operation",tags:"React, Create-react-app",linkWiki:"https://github.com/completejavascript/calculator"},{linkDemo:"https://about.phamvanlam.com/drum-machine/",linkImg:"/res/drum-machine.png",altImg:"Drum machine",title:"Drum Machine",description:"A simple Drum Machine with Create-react-app",tags:"React, Create-react-app",linkWiki:"https://github.com/completejavascript/drum-machine"},{linkDemo:"https://about.phamvanlam.com/markdown-editor/",linkImg:"/res/markdown-editor.png",altImg:"Markdown Editor",title:"Markdown Editor",description:"A very simple but useful Markdown Editor with CodeMirror, Markedjs and Create-react-app",tags:"React, CodeMirror, Markedjs, Create-react-app",linkWiki:"https://github.com/completejavascript/markdown-editor"},{linkDemo:"https://about.phamvanlam.com/find-dog-you-love/",linkImg:"/res/find-dog-you-love.png",altImg:"Find Dog You Love",title:"Find Dog You Love",description:"List all Dog Breeds Images using Dog.CEO API. So people, who love dogs, can find a dog they love easily",tags:"ES6, jQuery, Dog API",linkWiki:"https://github.com/completejavascript/find-dog-you-love"},{linkDemo:"https://about.phamvanlam.com/fcc-the-twitchtv-json-api/",linkImg:"/res/fcc-the-twitchtv-json-api.png",altImg:"Twitchtv JSON API",title:"Use the Twitch.tv JSON API",description:"A simple Twitch app displaying channel streaming status using Twitch.tv JSON API",tags:"ES6, jQuery, Twitch.tv API",linkWiki:"https://github.com/completejavascript/fcc-the-twitchtv-json-api"},{linkDemo:"https://about.phamvanlam.com/fcc-wikipedia-viewer/",linkImg:"/res/fcc-build-wikipedia-viewer.png",altImg:"Wikipedia Viewer",title:"Wikipedia Viewer",description:"Search Something on Wikipedia.org or View a Random Wikipedia Article",tags:"ES6, Vanilla js, Wikipedia API",linkWiki:"https://github.com/completejavascript/fcc-wikipedia-viewer"},{linkDemo:"https://about.phamvanlam.com/fcc-local-weather/",linkImg:"/res/fcc-show-local-weather.png",altImg:"Show local weather",title:"Weather App",description:"Showing the Local Weather on Currently, Next 48 Hours and Next 7 Days",tags:"JQuery, DarkSky API, Skycons",linkWiki:"https://github.com/completejavascript/fcc-local-weather"},{linkDemo:"https://about.phamvanlam.com/fcc-random-quote-machine/",linkImg:"/res/fcc-build-random-quote-machine.png",altImg:"Build a random quote machine",title:"Random Quote Machine",description:"Machine for Showing Random Quote, Sharing on Twitter, Tumblr and Facebook Comment Plugin Embedded",tags:"JQuery, Forismatic API",linkWiki:"https://github.com/completejavascript/fcc-random-quote-machine"},{linkDemo:"https://about.phamvanlam.com/fcc-personal-portfolio/",linkImg:"/res/fcc-build-personal-portfolio.png",altImg:"Build a personal portfolio image",title:"Personal Portfolio",description:"Personal Portfolio Landing Page for Sharing Personal Infomation, Skills, Projects,...",tags:"JQuery, Mustache.js",linkWiki:"https://github.com/completejavascript/fcc-personal-portfolio"},{linkDemo:"https://about.phamvanlam.com/fcc-tribute-page/",linkImg:"/res/fcc-build-tribute-page.png",altImg:"Build a tribute page project image",title:"Tribute Page",description:"Tribute Page for Brendan Eich - Founder of JavaScript",tags:"Bootstrap, JQuery",linkWiki:"https://github.com/completejavascript/fcc-tribute-page"}],J=(a(21),4),z=function(e){var t=e.project,a=t.title,n=t.description,r=t.linkDemo,l=t.linkImg,c=t.altImg,i=t.tags,s=t.linkWiki;return o.a.createElement("div",{className:"cell background-color-white margin-bottom-half"},o.a.createElement(E,{href:"".concat(r)},o.a.createElement(v,{placeHolder:W.a,src:l,width:"100%",height:"auto",effect:"opacity",alt:c})),o.a.createElement("h6",{className:"text-center margin-top"},o.a.createElement("strong",null,o.a.createElement(E,{href:"".concat(r)},a))),o.a.createElement("p",{className:"text-description text-center \r padding-left-half padding-right-half padding-bottom margin-bottom-3 "},n),o.a.createElement("div",{className:"cell-footer flex align-items-center background-color-light-grey position-absolute bottom-zero\r padding-left padding-right padding-top-half padding-bottom-half"},o.a.createElement("div",{className:"tags text-description text-left"},o.a.createElement("small",null,i)),o.a.createElement("div",{className:"how-to text-right"},o.a.createElement(E,{href:"".concat(s)},o.a.createElement("small",null,"GitHub")))))},O=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={projects:F,numPortfolioShow:6},e.handleSeeMore=function(){e.setState(function(e){return{numPortfolioShow:e.numPortfolioShow+J}})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.numPortfolioShow,a=e.projects,n=t<a.length?"":"opacity-none";return o.a.createElement("section",{className:"background-color-light-grey",id:"portfolio"},o.a.createElement("div",{className:"container-full row"},o.a.createElement("div",{className:"col-xs-12 margin-top-3"},o.a.createElement(D,{title:"Porfolio"}),o.a.createElement(R,{content:"Check out my lastest work below."})),o.a.createElement("div",{className:"flex-grid flex flex-row justify-content-space-around"},a.map(function(e,a){return a<t?o.a.createElement(o.a.Fragment,{key:"project-".concat(a)},o.a.createElement(z,{project:e})):null})),o.a.createElement("div",{className:"text-center margin-bottom-3 margin-top ".concat(n)},o.a.createElement("span",{id:"btn-see-more",className:"btn btn-primary",onClick:this.handleSeeMore},o.a.createElement("strong",null,"See more")))))}}]),a}(o.a.Component),Q=(a(22),function(e){var t=e.subject,a=e.percentage;return o.a.createElement("div",{className:"border border-default inline-block margin-right-half \n    margin-bottom-half padding-left-half padding-right-half"},t," ",a)}),L=function(){return o.a.createElement("div",{className:"margin-bottom"},o.a.createElement(Q,{subject:"C/C++",percentage:90}),o.a.createElement(Q,{subject:"Algorithm",percentage:90}),o.a.createElement(Q,{subject:"JavaScript",percentage:90}),o.a.createElement(Q,{subject:"Java & Android",percentage:80}),o.a.createElement(Q,{subject:"HTML5 & CSS3",percentage:80}),o.a.createElement(Q,{subject:"Git & GitHub",percentage:90}),o.a.createElement(Q,{subject:"ReactJS",percentage:95}),o.a.createElement(Q,{subject:"Gatsby",percentage:80}),o.a.createElement(Q,{subject:"AngularJS",percentage:75}),o.a.createElement(Q,{subject:"NodeJS & ExpressJS",percentage:80}),o.a.createElement(Q,{subject:"MongoDB & Mongoose",percentage:80}),o.a.createElement(Q,{subject:"QT/QML",percentage:85}),o.a.createElement(Q,{subject:"Kotlin",percentage:80}),o.a.createElement(Q,{subject:"Ant Design",percentage:80}),o.a.createElement(Q,{subject:"Chakra UI",percentage:80}),o.a.createElement(Q,{subject:"Bootstrap",percentage:70}),o.a.createElement(Q,{subject:"jQuery",percentage:85}),o.a.createElement(Q,{subject:"Mocha & Chai",percentage:65}),o.a.createElement(Q,{subject:"Jest",percentage:70}))},U=function(){return o.a.createElement("section",{className:"container-full row",id:"about"},o.a.createElement("div",{className:"col-xs-12 margin-top-3"},o.a.createElement(D,{title:"About"}),o.a.createElement(R,{content:"A little bit about me."}),o.a.createElement("div",{className:"about-content"},o.a.createElement("p",null,"Hi, My name is ",o.a.createElement("strong",{className:"color-red"},"Lam Pham")," from Vietnam. I am a Software Engineer with a focus on"," ",o.a.createElement("strong",{className:"color-red"},"C/C++"),". Besides, I am really passionate about ",o.a.createElement("strong",{className:"color-blue"},"JavaScript")," ","and",o.a.createElement("strong",{className:"color-blue"}," Web Development"),". I got a bachelor of Electronics and Telecommunication Engineering at Ha Noi University of Science and Technology (2011 - 2016)."),o.a.createElement("p",null,"From 06/2016 - 03/2019, I work for Samsung Vietnam Mobile R&D Center (SVMC) as a C/C++ Software Engineer. And 03/2019 - present, I work for VinSmart as a C/C++, Qt/QML Software Engineer and Front-end web developer with ReactJS."),o.a.createElement("p",null,"As you can see, this website is my personal portfolio webpage, which I created while learning Web Development from"," ",o.a.createElement(E,{href:"https://www.freecodecamp.org"},"freeCodeCamp")," ","in my spare time. And from now on, I am going to share my latest work consistently. Each project consists of its link for preview on Github and ",o.a.createElement("strong",{className:"color-red"},"how-to"),", which I explain how I created it. In fact, before digging deeper into freeCodeCamp or Web Development, I self-learned JavaScript, HTML5 & CSS3, Bootstrap & jQuery, AngularJS and NodeJS & ExpressJS... So, below are some information about me that I self-evaluate honestly:"),o.a.createElement(L,null),o.a.createElement("p",null,"Besides, I love coding and blogging. I try to code every day and write blogs to share my experiences with people. Here are my blogs (in Vietnamese):",o.a.createElement("span",null,o.a.createElement(E,{href:"https://completejavascript.com"}," ","Complete JavaScript"))," ",o.a.createElement("strong",null,"\xb7"),o.a.createElement("span",null,o.a.createElement(E,{href:"https://tools.completejavascript.com"}," ","Complete Tools"))," ",o.a.createElement("strong",null,"\xb7"),o.a.createElement("span",null,o.a.createElement(E,{href:"https://thuattoan.phamvanlam.com"}," ","Algorithm"))," ",o.a.createElement("strong",null,"\xb7"),o.a.createElement("span",null,o.a.createElement(E,{href:"https://phamvanlam.com"}," ","Personal Blog")),"."),o.a.createElement("p",null,"I enjoy instrument musical. In my free time, I usually play Ukulele. And, I like Street Workout. I am training it four times a week to get fit and healthy. Thanks for visiting my website!"),o.a.createElement("p",{className:"text-center margin-bottom-3"},o.a.createElement(E,{href:"/cv/LamPham.pdf",className:"btn btn-primary"},o.a.createElement(C,{color:"#FFF"}),o.a.createElement("strong",{className:"padding-left-half"},"MY CV"))))))},G=(a(23),function(){return o.a.createElement("section",{className:"app-contact background-color-yellow",id:"contact"},o.a.createElement("div",{className:"container-small row"},o.a.createElement("div",{className:"col-xs-12 margin-top-3"},o.a.createElement(D,{title:"Contact"}),o.a.createElement(R,{content:"If you would like to get in touch with me, please visit my social networks or send me a message. \r Thanks a lot!"}),o.a.createElement("div",{className:"contact-container margin-bottom-3 padding-bottom"},o.a.createElement("form",{method:"POST",action:"https://formspree.io/f/xpzbwkge",enctype:"multipart/form-data"},o.a.createElement("input",{className:"background-color-white",type:"text",id:"yname",name:"Name",placeholder:"Name",required:!0}),o.a.createElement("input",{className:"background-color-white",type:"email",id:"yemail",name:"Email",placeholder:"Email",required:!0}),o.a.createElement("textarea",{className:"background-color-white",type:"text",id:"ymsg",name:"Message",placeholder:"Message",required:!0}),o.a.createElement("button",{className:"btn-full btn-primary",type:"submit",id:"send"},o.a.createElement("strong",null,"Send Message")))))))}),H=function(){var e=(new Date).getFullYear();return o.a.createElement("footer",{className:"container-full background-color-dark-grey color-white text-center padding-top-half padding-bottom-half"},o.a.createElement("small",null,"Copyright \xa9 2018 - ",e," by",o.a.createElement(E,{href:"https://completejavascript.com/gioi-thieu/"}," ","Lam Pham"),". All Rights Reserved."))},V=(a(24),function(){return o.a.createElement("div",{className:"app-main float-right transition"},o.a.createElement(B,null),o.a.createElement(O,null),o.a.createElement(U,null),o.a.createElement(G,null),o.a.createElement(H,null))}),Y=(a(25),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).rootRef=o.a.createRef(),e.handleClick=function(){window.scroll({top:0,left:0,behavior:"smooth"})},e.showOrHideBackToTopButton=function(){var t=e.props.thresholdTop||100;document.body.scrollTop>t||document.documentElement.scrollTop>t?e.rootElm.style.display="block":e.rootElm.style.display="none"},e.handleScroll=function(){e.debounceTimer&&window.clearTimeout(e.debounceTimer),e.debounceTimer=window.setTimeout(function(){e.showOrHideBackToTopButton()},100)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.rootElm=this.rootRef.current,this.showOrHideBackToTopButton(),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props,t=e.bgColor,a=e.color;return o.a.createElement("div",{ref:this.rootRef,onClick:this.handleClick,className:"app-scroll-to-top position-fixed background-color-".concat(t," \n          cursor-pointer transition padding line-height-reset border-radius")},o.a.createElement(N,{color:a}))}}]),a}(o.a.Component)),q=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={isResponsive:!1},e.handleToggleClick=function(){e.setState(function(e){return{isResponsive:!e.isResponsive}})},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(T,{handleClick:this.handleToggleClick,isResponsive:this.state.isResponsive,color:"#FFF",bgColor:"grey-half"}),o.a.createElement(M,{isResponsive:this.state.isResponsive}),o.a.createElement(V,null),o.a.createElement(Y,{color:"#FFF",bgColor:"grey-half"}))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.2356f35c.chunk.js.map
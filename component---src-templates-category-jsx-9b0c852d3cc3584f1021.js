(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{151:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return d}),n.d(e,"pageQuery",function(){return m});var o=n(6),i=n.n(o),r=n(0),a=n.n(r),l=n(158),u=n.n(l),s=n(225),c=n(228),p=n(155),h=n.n(p),d=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t=this.props.pageContext.category,e=this.props.data.allMarkdownRemark.edges;return a.a.createElement(s.a,null,a.a.createElement("div",{className:"category-container"},a.a.createElement(u.a,{title:'Posts in category "'+t+'" | '+h.a.siteTitle}),a.a.createElement(c.a,{postEdges:e})))},e}(a.a.Component),m="4191571131"},155:function(t,e){t.exports={siteTitle:"luckyluu - Portfolio",siteTitleShort:"luckyluu",siteTitleAlt:"Front-End Developer live in Ho Chi Minh City, a photography geek, and a music lover",siteLogo:"/logos/logo-1024.png",siteUrl:"https://luubinhan.github.io",pathPrefix:"/portfolio",siteDescription:"luckyluu portfolio",siteRss:"/rss.xml",siteFBAppID:"445556375516928",googleAnalyticsID:"UA-29685098-2",disqusShortname:"luckyluu-blog",postDefaultCategoryID:"React",userName:"luckyluu",userTwitter:"luubinhan",userLocation:"Hồ Chí Minh, Việt Nam",userAvatar:"https://media.licdn.com/dms/image/C4E03AQFQg5eGuqMWkA/profile-displayphoto-shrink_200_200/0?e=1543449600&v=beta&t=KSe235f95l89g6FW6ICJ91sd2uBfmBXKLosm3pfcwzo",userDescription:"Front-End Developer live in Ho Chi Minh City, a photography geek, and a music lover",userLinks:[{label:"GitHub",url:"https://github.com/luubinhan",iconClassName:"github"},{label:"LinkedIn",url:"https://www.linkedin.com/in/l%C6%B0u-b%C3%ACnh-an-03556553/",iconClassName:"linkedin"},{label:"Twitter",url:"https://twitter.com/luubinhan",iconClassName:"twitter"},{label:"Codepen",url:"https://codepen.io/luckyluu/",iconClassName:"codepen"}],copyright:"Copyright © 2018. luckyluu",themeColor:"#01A1B1",backgroundColor:"#e0e0e0",toCChapters:["","Chapter 1","Chapter 2"]}},225:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var o=n(6),i=n.n(o),r=n(0),a=n.n(r),l=n(158),u=n.n(l),s=n(155),c=n.n(s),p=(n(226),function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t=this.props.children;return a.a.createElement("div",null,a.a.createElement(u.a,null,a.a.createElement("meta",{name:"description",content:c.a.siteDescription})),t)},e}(a.a.Component))},226:function(t,e,n){},228:function(t,e,n){"use strict";n(53),n(80),n(81);var o=n(6),i=n.n(o),r=n(0),a=n.n(r),l=n(38),u=function(t){function e(){return t.apply(this,arguments)||this}i()(e,t);var n=e.prototype;return n.getPostList=function(){var t=[];return this.props.postEdges.forEach(function(e){t.push({path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})}),t},n.render=function(){var t=this.getPostList();return a.a.createElement("div",null,t.map(function(t){return a.a.createElement(l.Link,{to:t.path,key:t.title},a.a.createElement("h1",null,t.title))}))},e}(a.a.Component);e.a=u}}]);
//# sourceMappingURL=component---src-templates-category-jsx-9b0c852d3cc3584f1021.js.map
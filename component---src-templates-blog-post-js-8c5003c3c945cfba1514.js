(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return E});a(33);var n=a(7),r=a.n(n),o=a(0),i=a.n(o),l=a(148),s=a.n(l),A=a(150),c=a(174),u=a.n(c),p=a(162),h=a(172),m=a(144),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=u()(this.props,"data.site.siteMetadata.title"),a=e.excerpt,n=this.props.pageContext,r=n.previous,o=n.next;return i.a.createElement(h.a,{location:this.props.location},i.a.createElement(s.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:a}],title:e.frontmatter.title+" | "+t}),i.a.createElement("h1",null,e.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(m.b)(-.2),{display:"block",marginBottom:Object(m.a)(1),marginTop:Object(m.a)(-1)})},e.frontmatter.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(m.a)(1)}}),i.a.createElement(p.a,null),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,r&&i.a.createElement(A.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),i.a.createElement("li",null,o&&i.a.createElement(A.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →"))))},t}(i.a.Component);t.default=g;var E="3804820323"},144:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return A});var n=a(180),r=a.n(n),o=a(181),i=a.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var l=new r.a(i.a);var s=l.rhythm,A=l.scale},145:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},150:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(143),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var A=a(145),c=a.n(A);a.d(t,"PageRenderer",function(){return c.a});var u=a(36);a.d(t,"parsePath",function(){return u.a});var p=r.a.createContext({}),h=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n={tipit:{thumbnail:"https://raw.githubusercontent.com/luubinhan/portfolio/master/static/images//tipit-screenshot.jpg",name:"Tipit.vn",url:"https://tipit.vn",tags:["reactjs","css"]},tuonglai:{thumbnail:"https://raw.githubusercontent.com/luubinhan/portfolio/master/static/images/tuonglai-foods.jpg",name:"Tương Lai Foods",url:"http://tuonglaifoods.vn",tags:["wordpress","css","design"]},bellow:{thumbnail:"https://raw.githubusercontent.com/luubinhan/portfolio/master/static/images/bellow-photobooth.jpg",name:"Bellow Photo Booth",url:"http://bellowphotobooth.com",tags:["wordpress","css","design"]},chat:{thumbnail:"https://raw.githubusercontent.com/luubinhan/portfolio/master/static/images/chat.jpg",name:"Chất Productions",url:"http://chatproductions.us",tags:["wordpress","css","design"]},bakco:{thumbnail:"https://raw.githubusercontent.com/luubinhan/portfolio/master/static/images/bachkhoa.jpg",name:"Bakco Brochure",url:"#",tags:["other","design"]},drill:{thumbnail:"https://raw.githubusercontent.com/luubinhan/portfolio/master/static/images/drill-inc.jpg",name:"Drill Inc",url:"http://www.drill-inc.jp/",tags:["css"]}}},157:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(53),s=a(2),A=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};A.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=A},162:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o),l=(a(178),a(179),a(163)),s=a.n(l),A=a(144),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(A.a)(2.5)}},i.a.createElement("img",{src:s.a,alt:"Kyle Mathews",style:{marginRight:Object(A.a)(.5),marginBottom:0,width:Object(A.a)(2),height:Object(A.a)(2)}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,"Kyle Mathews")," who lives and works in San Francisco building useful things."," ",i.a.createElement("a",{href:"https://twitter.com/kylemathews"},"You should follow him on Twitter")))},t}(i.a.Component);t.a=c},163:function(e,t){e.exports="data:image/jpeg;base64,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"},168:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEvklEQVR42rXWA5AsSRDG8X9m9/AJZ9u2FTjbtm2GLoSzETjbtm3bttazM92Vl2+7J252Y25u7yEjfpG1/jaruqJFLr0h2ITJIhYAEBF0qIMiec9lX8sZESBm6JCAhIA6CSmkCSQJ1miE0Kjrb+Mn3z+w73ZbrXTa6eH1JVcRIDiUnm7o+hNUmUGlahbSKN6Mmx6+vhYVhCg2QB1KsQS9PVjXXzMshIFilridPlhs+Zvj/l4hzkIoccRQiL4e6O5qDRGmKyECEhPZPilXbtaeHqFYNCWKIHaFEtbXiw2FEAAFc0wfhgCxa7jtQ7V6g3b9oYpG4LJJFPMQPf0i8gYwrd7MvW4i/QB5iMTtFKpj78oC5CTSQFxhYfnwE2Cl6WDFryfO4p2VG4Xi+5g1tzbOumyuqELkdIoIoogNZnsNgMFdNpaNxj0kQFsygja7IZHrjwsytl4T2pe6oGj2o6KKSZEJxT5Wn/Q2AKwLsxZ+BbCp0ZCIRCPr+IgimjcBfPzjvmXhsd+Sl+WmtqxWKNGptDlAUYAiK034kLHFwPSrkHejXYlcc08w807A0lK4fMmTdKXx77y18psPrED7ipzQqcwyIUCaCKVSA3jVrexSkGjYBETArMRs5Z9ZdOxX1Kzj2FKXjJpq0jqKkdNQEFQNrMQKPv7JxW5SCowoyXvFHZTbzx3QmR1AkuzPLz/vS5rOigiAtIaIETAE3BqT3kIU3Mgyp27AVd05gAHCaKuRQFwATFt/rQoQLKZc7GL58R9Q93Wk4d9Ok7pz3R5OXCOXjIK1e6ZikQBphSXGfcQ8lR+ppUVUrNORLrjrXOyuzD8nuQ5lYFMM31QVAazAahPfpqIJhoJ0HmYe4iq3T/NG++9JNP96s+UTCChEg6zqARIEFUMAGHUI8klEHc+FjbjXTADQEIrMUf6JxcZ8zoCvRcwBowsR5SE2cSe6o9zRbRxBFH1DMDCGTUJJy6wwzh+/Qg9JiBGM/1GpU/eQO9Nd6M4fRvUC4CLvP2EBsNA6DQXz/X8LEUBkau/ayMVtmXkHgilmDMHlIbRa/Ivl/PGrhYhIQqcDOHW3Yxx7B8wMg5Eh4qXGfsrc5R+ph+I/4xd4eJHtACQuwD1dmxpTV/LKX8vyYrI0WPMakeFX8VoT30jLOkgwZWT19zcYHGwwtVWOBqhoDQAlBQs5y2AeYNIrUcPiIGK01HR7H3jij+UBCPUy2vzjwVlGXvmsejti2+Z7FokitX4GvvwsfFQqC4VidoUXYu8ue2sTVLO1CKhrvb9EACf52RtX6LMLP9lp8cs+2aMalfoJovmFJyiwnRnXNt9Wsx+iEgIrmLUg67R08m4t65GUsEJvo7ri0YvdXD140WtJa1XUUiCbRjwYVbWY9u05ZS3CLkADX5thId+y1mvcO+TdADGykvb7J+LM+Ks+Ro9Z7GYAu+zjPSQq9RHE0ELSR6GAAruacSNQcGkIqJk5hsGyz0O+BuW/CCpi/Fkfg4eQgxe71tLaGNQCCoR6HWuGEMm2IwRC88xkPUdzAm3+3Q5fE4xmiGOnhFjcQwyWUbIyD8FLz6S64nzz7OXrO0XQEEhbDizkWreB1lDtA+X1T4g/6lWOXPQWOXjRG8LfflKmf+KO9KsAAAAASUVORK5CYII="},169:function(e,t){e.exports={siteTitle:"luckyluu - Portfolio",siteTitleShort:"luckyluu",siteTitleAlt:"Front-End Developer live in Ho Chi Minh City, a photography geek, and a music lover",siteLogo:"/logos/logo-1024.png",siteUrl:"https://luubinhan.github.io",pathPrefix:"/portfolio",siteDescription:"luckyluu portfolio",siteRss:"/rss.xml",siteFBAppID:"",googleAnalyticsID:"",disqusShortname:"luckyluu-blog",postDefaultCategoryID:"React",userName:"luckyluu",userTwitter:"luubinhan",userLocation:"Hồ Chí Minh, Việt Nam",userAvatar:"https://media.licdn.com/dms/image/C4E03AQFQg5eGuqMWkA/profile-displayphoto-shrink_200_200/0?e=1543449600&v=beta&t=KSe235f95l89g6FW6ICJ91sd2uBfmBXKLosm3pfcwzo",userDescription:"Front-End Developer live in Ho Chi Minh City, a photography geek, and a music lover",userLinks:[{label:"GitHub",url:"https://github.com/luubinhan",iconClassName:"github"},{label:"LinkedIn",url:"https://www.linkedin.com/in/l%C6%B0u-b%C3%ACnh-an-03556553/",iconClassName:"linkedin"},{label:"Twitter",url:"https://twitter.com/luubinhan",iconClassName:"twitter"},{label:"Codepen",url:"https://codepen.io/luckyluu/",iconClassName:"codepen"}],copyright:"Copyright © 2018. luckyluu",themeColor:"#01A1B1",backgroundColor:"#e0e0e0",toCChapters:["","Chapter 1","Chapter 2"]}},170:function(e,t,a){},172:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o),l=a(154),s=a(182),A=a(148),c=a.n(A),u=a(147),p=a(168),h=a.n(p),m=a(169),g=a.n(m),E=(a(156),a(48),a(170),{style:{boxShadow:"none",background:"#f47631"},arrowStyle:{borderColor:!1,color:"#f47631"}}),d=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).renderIcon=function(e){switch(e){case"github":return i.a.createElement(u.d,null);case"linkedin":return i.a.createElement(u.e,null);case"twitter":return i.a.createElement(u.g,null);case"codepen":return i.a.createElement(u.a,null);default:return null}},t}r()(t,e);var a=t.prototype;return a.getLinkElements=function(){var e=this;return this.props.config.userLinks.map(function(t){return i.a.createElement("a",{title:t.label,"aria-label":t.label,key:t.label,target:"_blank",rel:"noopener noreferrer",href:t.url},i.a.createElement(l.StatefulToolTip,{parent:e.renderIcon(t.iconClassName),position:"right",arrow:"center",style:E},i.a.createElement("div",{className:"my-tip"},t.label)))})},a.render=function(){return this.props.config.userLinks?i.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(o.Component),C=(a(144),i.a.createElement("span",{className:"logo"},i.a.createElement(s.Link,{activeClass:"active",to:"sectionPortfolio",spy:!0,smooth:!0,offset:0,duration:500},i.a.createElement("img",{src:h.a,alt:g.a.siteTitle})))),f=(i.a.createElement("span",{className:"icon-sidebar"},i.a.createElement(s.Link,{activeClass:"active",to:"sectionAbout",spy:!0,smooth:!0,offset:50,duration:500},i.a.createElement(u.b,null))),{style:{boxShadow:"none",background:"#f47631"},arrowStyle:{borderColor:!1,color:"#f47631"}}),w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return i.a.createElement("div",{className:"layout"},i.a.createElement(c.a,null,i.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",integrity:"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO",crossOrigin:"anonymous"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Chakra+Petch:400,700&subset=vietnamese",rel:"stylesheet"})),i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"inner"},i.a.createElement("div",{className:"top-section"},i.a.createElement(l.StatefulToolTip,{parent:C,position:"right",arrow:"center",style:f},i.a.createElement("div",{className:"my-tip"},"Quay lên đầu trang"))),i.a.createElement("div",{className:"middle-section"},i.a.createElement(l.StatefulToolTip,{parent:i.a.createElement("a",{href:"/blog",className:"icon-sidebar"},i.a.createElement(u.f,null)),position:"right",arrow:"center",style:f},i.a.createElement("div",{className:"my-tip"},"Blog của mình"))),i.a.createElement("div",{className:"bottom-section"},i.a.createElement(d,{config:g.a})))),t)},t}(i.a.Component);t.a=w}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-8c5003c3c945cfba1514.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),l=a("NmYn"),i=a.n(l),r=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),u=a("TSYQ"),b=a.n(u),d=a("QH2O"),p=a.n(d),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,l=void 0===o?[]:o;return Object(m.b)("div",{className:b()(p.a.pageHeader,(t={},t[p.a.withTabs]=l.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,l=o.baseUrl,i=o.subDirectory,s=l+"/edit/"+o.branch+i+"/src/pages"+t;return l?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),v=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),l=a===o,s=new RegExp(o+"/?(#.*)?$"),c=n.replace(s,a);return Object(m.b)("li",{key:e,className:b()((t={},t[v.selectedItem]=l,t),v.listItem)},Object(m.b)(r.Link,{className:v.link,to:""+c},e))}));return Object(m.b)("div",{className:v.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:v.list},l))))))},t}(o.a.Component),w=a("MjG9"),y=a("CzIb"),k=a("Asxa"),N=a("OIbQ"),T=a.n(N),P=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(k.c,{className:T.a.row},Object(m.b)(k.a,null,Object(m.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,l=t.frontmatter,u=void 0===l?{}:l,b=t.relativePagePath,d=t.titleType,p=u.tabs,g=u.title,f=u.theme,v=u.description,k=u.keywords,N=u.date,T=Object(y.a)().interiorTheme,I=Object(r.useStaticQuery)("2456312558").site.pathPrefix,E=I?n.pathname.replace(I,""):n.pathname,C=p?E.split("/").filter(Boolean).slice(-1)[0]||i()(p[0],{lower:!0}):"",A=f||T;return Object(m.b)(c.a,{tabs:p,homepage:!1,theme:A,pageTitle:g,pageDescription:v,pageKeywords:k,titleType:d},Object(m.b)(h,{title:o?Object(m.b)(o,null):g,label:"label",tabs:p,theme:A}),p&&Object(m.b)(x,{title:g,slug:E,tabs:p,currentTab:C}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:b}),Object(m.b)(P,{date:N})),Object(m.b)(j.a,{pageContext:t,location:n,slug:E,tabs:p,currentTab:C}),Object(m.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},PSB1:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a("wx14"),o=a("zLVn"),l=(a("q1tI"),a("7ljp")),i=a("013z"),r=(a("qKvR"),["components"]),s={},c={_frontmatter:s},u=i.a;function b(e){var t=e.components,a=Object(o.a)(e,r);return Object(l.b)(u,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Guide to open source development in the cloud"),Object(l.b)("p",null,"Enterprises are increasingly using more than one cloud in their IT solutions, a trend that is thanks, in large part, to the fact that most major clouds are built using open source software. An ",Object(l.b)("a",{parentName:"p",href:"https://developer.ibm.com/blogs/oreilly-open-source-skill-survey-blog/"},"O’Reilly survey"),", commissioned by IBM in Fall 2020, pointed out that, when choosing cloud providers, 70% of respondents prefer one based on open source. The survey went on to say:"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("em",{parentName:"p"},"Developers who want to develop cloud applications should work on honing their open source skills, which underly every major cloud platform, instead of only focusing on building skills for a proprietary cloud"),".")),Object(l.b)("p",null,"The most desirable open source skills are those related to Linux (containers), artificial intelligence and machine learning, and data storage."),Object(l.b)("p",null,"As both the cloud and open source landscapes evolve, we saw a need for a guide to highlight important aspects of hybrid cloud and multiclodu development—and their corresponding open source services."),Object(l.b)("p",null,"This goals of this guide are to provide:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Comprehensive learning for hybrid cloud and multicloud developers."),Object(l.b)("li",{parentName:"ol"},"An agnostic view of how various clouds are using open source in their offerings.")),Object(l.b)("p",null,"In each section of the guide you will find:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An introduction to the basic concepts related to cloud use cases."),Object(l.b)("li",{parentName:"ul"},"Information about how certain clouds take advantage of open source solutions related to those use cases."),Object(l.b)("li",{parentName:"ul"},"Additional learning resources so you can further your understanding.")),Object(l.b)("h2",null,"What’s leading to multicloud and hybrid cloud adoption?"),Object(l.b)("p",null,"In short, the answer is: Choice. Businesses want the ability to choose the best platform and services that will give them a competitive advantage. Other factors contributing to the rise of mulitcloud and hybrid cloud development include:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Each cloud has inherent strengths and weaknesses. Using a mulitcloud approach to development allows you to take advantage of the strengths of multiple clouds."),Object(l.b)("li",{parentName:"ul"},"Spreading workloads across clouds reduces risk."),Object(l.b)("li",{parentName:"ul"},"Using different clouds may reduce costs in the long term.")),Object(l.b)("p",null,"Developers benefit from multicloud development because it offers them the ability to:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Make an impact immediately using the cloud skills they have, while growing their skills in other clouds"),Object(l.b)("li",{parentName:"ul"},"Implement specific use cases for their work"),Object(l.b)("li",{parentName:"ul"},"Choose the cloud environment or services that work best for the problem they’re solving"),Object(l.b)("li",{parentName:"ul"},"Choose cloud services that will grow with their needs")),Object(l.b)("h2",null,"Use cases for cloud development"),Object(l.b)("p",null,"This guide walks you through common use cases that you will encounter as a cloud developer, including:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Coordinating your team’s development, testing, and DevOps practices"),Object(l.b)("li",{parentName:"ul"},"Extending cloud services with AI"),Object(l.b)("li",{parentName:"ul"},"Exposing a service API"),Object(l.b)("li",{parentName:"ul"},"Building and using containers"),Object(l.b)("li",{parentName:"ul"},"Planning, preparing, and using data storage")))}b.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-about-mdx-1cb5287d279a329eaae9.js.map
"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7932],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5177:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"release-policy",title:"Minor and Major Release Policy for the SAP Cloud SDK for JavaScript",sidebar_label:"Release Policy",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","upgrade","strategy","major","release","support"]},s=void 0,d={unversionedId:"js/release-policy",id:"js/release-policy",isDocsHomePage:!1,title:"Minor and Major Release Policy for the SAP Cloud SDK for JavaScript",description:"This release policy only applies to the SAP Cloud SDK for JavaScript.",source:"@site/docs/js/release-policy.mdx",sourceDirName:"js",slug:"/js/release-policy",permalink:"/cloud-sdk/docs/js/release-policy",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/release-policy.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1636144163,formattedLastUpdatedAt:"11/5/2021",frontMatter:{id:"release-policy",title:"Minor and Major Release Policy for the SAP Cloud SDK for JavaScript",sidebar_label:"Release Policy",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","upgrade","strategy","major","release","support"]},sidebar:"someSidebar",previous:{title:"Currency Conversion",permalink:"/cloud-sdk/docs/js/extensions/currency-conversion"},next:{title:"Announcing Version 2.x",permalink:"/cloud-sdk/docs/js/announcing-version-2"}},p=[{value:"Planned Major Release Schedule",id:"planned-major-release-schedule",children:[],level:2},{value:"Minor and Major Release Policy",id:"minor-and-major-release-policy",children:[{value:"Timelines",id:"timelines",children:[],level:3},{value:"Upgrading to a New Minor Version",id:"upgrading-to-a-new-minor-version",children:[],level:3},{value:"Upgrading to a New Major Version",id:"upgrading-to-a-new-major-version",children:[],level:3},{value:"Fixes, Maintenance, Documentation",id:"fixes-maintenance-documentation",children:[],level:3},{value:"Support and feedback",id:"support-and-feedback",children:[],level:3}],level:2}],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"relevance")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This release policy only applies to the SAP Cloud SDK for JavaScript.\nIt's not relevant for the SAP Cloud SDK for Java!"))),(0,o.kt)("h2",{id:"planned-major-release-schedule"},"Planned Major Release Schedule"),(0,o.kt)("p",null,"The SAP Cloud SDK for JavaScript follows ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,o.kt)("th",{parentName:"tr",align:null},"Status"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Release Date"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Link to Announcement"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"1.x"),(0,o.kt)("td",{parentName:"tr",align:null},"Released GA"),(0,o.kt)("td",{parentName:"tr",align:"left"},"March 2019"),(0,o.kt)("td",{parentName:"tr",align:"left"},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2.x"),(0,o.kt)("td",{parentName:"tr",align:null},"Planned"),(0,o.kt)("td",{parentName:"tr",align:"left"},"January 2022"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/cloud-sdk/docs/js/announcing-version-2"},"Version 2.x"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"3.x"),(0,o.kt)("td",{parentName:"tr",align:null},"Planned"),(0,o.kt)("td",{parentName:"tr",align:"left"},"July 2022"),(0,o.kt)("td",{parentName:"tr",align:"left"},"TBD")))),(0,o.kt)("h2",{id:"minor-and-major-release-policy"},"Minor and Major Release Policy"),(0,o.kt)("h3",{id:"timelines"},"Timelines"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We release a new ",(0,o.kt)("strong",{parentName:"li"},"minor version")," every 2 weeks, assuming new functionality or fixes are available."),(0,o.kt)("li",{parentName:"ul"},"We release a new ",(0,o.kt)("strong",{parentName:"li"},"major version")," every 6 to 12 months."),(0,o.kt)("li",{parentName:"ul"},"A few months before the major release, we announce the expected changes and planned release date.")),(0,o.kt)("h3",{id:"upgrading-to-a-new-minor-version"},"Upgrading to a New Minor Version"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Upgrade to a new ",(0,o.kt)("strong",{parentName:"li"},"minor release version")," should not involve any effort because we do not introduce breaking changes.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"TypeScript version bumps")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We regularly upgrade TypeScript to the latest stable version.\nIn rare cases this can lead to compilation errors for projects using TypeScript.\nThe solution is usually upgrading TypeScript to the latest stable version."))),(0,o.kt)("h3",{id:"upgrading-to-a-new-major-version"},"Upgrading to a New Major Version"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We provide a step-by-step upgrade guide for each major version."),(0,o.kt)("li",{parentName:"ul"},"Following the upgrade steps should take less than a day of development effort regardless of the project size.")),(0,o.kt)("h3",{id:"fixes-maintenance-documentation"},"Fixes, Maintenance, Documentation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We maintain only the ",(0,o.kt)("strong",{parentName:"li"},"latest major release")," of the SAP Cloud SDK for JavaScript."),(0,o.kt)("li",{parentName:"ul"},"The documentation is always up to date with the ",(0,o.kt)("strong",{parentName:"li"},"latest major release"),".")),(0,o.kt)("h3",{id:"support-and-feedback"},"Support and feedback"),(0,o.kt)("p",null,"We are happy to hear from you and usually respond within one day.\nCheck our ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/overview/get-support"},"support channels")," and chose the one that works best for you."))}u.isMDXComponent=!0}}]);
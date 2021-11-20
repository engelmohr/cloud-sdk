"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7932],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,v=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(v,l(l({ref:t},d),{},{components:n})):a.createElement(v,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),r=n(7294),o=n(2389),l=n(9443);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(9521),u=n(6010),d="tabItem_1uMI";function c(e){var t,n,a,o=e.lazy,l=e.block,c=e.defaultValue,p=e.values,m=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),b=y.tabGroupChoices,N=y.setTabGroupChoices,w=(0,r.useState)(g),j=w[0],x=w[1],S=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=b[m];null!=P&&P!==j&&h.some((function(e){return e.value===P}))&&x(P)}var M=function(e){var t=e.currentTarget,n=S.indexOf(t),a=h[n].value;a!==j&&(T(t),x(a),null!=m&&N(m,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;n=S[a]||S[0];break;case"ArrowLeft":var r=S.indexOf(e.currentTarget)-1;n=S[r]||S[S.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},v)},h.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,className:(0,u.Z)("tabs__item",d,{"tabs__item--active":j===t}),key:t,ref:function(e){return S.push(e)},onKeyDown:C,onFocus:M,onClick:M},null!=n?n:t)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function p(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},5177:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return v}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(6396),i=n(8215),s=["components"],u={id:"release-policy",title:"Minor and Major Release Policy for the SAP Cloud SDK for JavaScript",sidebar_label:"Release Policy",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","upgrade","strategy","major","release","support"]},d=void 0,c={unversionedId:"js/release-policy",id:"js/release-policy",isDocsHomePage:!1,title:"Minor and Major Release Policy for the SAP Cloud SDK for JavaScript",description:"This release policy only applies to the SAP Cloud SDK for JavaScript.",source:"@site/docs/js/release-policy.mdx",sourceDirName:"js",slug:"/js/release-policy",permalink:"/cloud-sdk/docs/js/release-policy",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/release-policy.mdx",tags:[],version:"current",lastUpdatedBy:"Artem Kovalyov",lastUpdatedAt:1637430483,formattedLastUpdatedAt:"11/20/2021",frontMatter:{id:"release-policy",title:"Minor and Major Release Policy for the SAP Cloud SDK for JavaScript",sidebar_label:"Release Policy",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","upgrade","strategy","major","release","support"]},sidebar:"someSidebar",previous:{title:"Currency Conversion",permalink:"/cloud-sdk/docs/js/extensions/currency-conversion"},next:{title:"Announcing Version 2.x",permalink:"/cloud-sdk/docs/js/announcing-version-2"}},p=[{value:"Planned Major Release Schedule",id:"planned-major-release-schedule",children:[],level:2},{value:"Minor and Major Release Policy",id:"minor-and-major-release-policy",children:[{value:"Timelines",id:"timelines",children:[],level:3},{value:"Upgrading to a New Minor Version",id:"upgrading-to-a-new-minor-version",children:[],level:3},{value:"Upgrading to a New Major Version",id:"upgrading-to-a-new-major-version",children:[],level:3},{value:"Documentation",id:"documentation",children:[],level:3},{value:"Fixes and Maintenance",id:"fixes-and-maintenance",children:[],level:3},{value:"Support and feedback",id:"support-and-feedback",children:[],level:3}],level:2}],m={toc:p};function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"relevance")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This release policy only applies to the SAP Cloud SDK for JavaScript.\nIt's not relevant for the SAP Cloud SDK for Java!"))),(0,o.kt)("h2",{id:"planned-major-release-schedule"},"Planned Major Release Schedule"),(0,o.kt)("p",null,"The SAP Cloud SDK for JavaScript follows ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,o.kt)("th",{parentName:"tr",align:null},"Status"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Release Date"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Link to Announcement"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"1.x"),(0,o.kt)("td",{parentName:"tr",align:null},"Released GA"),(0,o.kt)("td",{parentName:"tr",align:"left"},"March 2019"),(0,o.kt)("td",{parentName:"tr",align:"left"},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2.x"),(0,o.kt)("td",{parentName:"tr",align:null},"Planned"),(0,o.kt)("td",{parentName:"tr",align:"left"},"January 2022"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/cloud-sdk/docs/js/announcing-version-2"},"Version 2.x"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"3.x"),(0,o.kt)("td",{parentName:"tr",align:null},"Planned"),(0,o.kt)("td",{parentName:"tr",align:"left"},"July 2022"),(0,o.kt)("td",{parentName:"tr",align:"left"},"TBD")))),(0,o.kt)("h2",{id:"minor-and-major-release-policy"},"Minor and Major Release Policy"),(0,o.kt)("h3",{id:"timelines"},"Timelines"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We release a new ",(0,o.kt)("strong",{parentName:"li"},"minor version")," every 2 weeks, assuming new functionality or fixes are available."),(0,o.kt)("li",{parentName:"ul"},"We release a new ",(0,o.kt)("strong",{parentName:"li"},"major version")," every 6 to 12 months."),(0,o.kt)("li",{parentName:"ul"},"A few months before the major release, we announce the expected changes and planned release date.")),(0,o.kt)("h3",{id:"upgrading-to-a-new-minor-version"},"Upgrading to a New Minor Version"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Upgrade to a new ",(0,o.kt)("strong",{parentName:"li"},"minor release version")," should not involve any effort because we do not introduce breaking changes.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"TypeScript version bumps")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We regularly upgrade TypeScript to the latest stable version.\nIn rare cases this can lead to compilation errors for projects using TypeScript.\nThe solution is usually upgrading TypeScript to the latest stable version."))),(0,o.kt)("h3",{id:"upgrading-to-a-new-major-version"},"Upgrading to a New Major Version"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We provide a step-by-step upgrade guide for each major version."),(0,o.kt)("li",{parentName:"ul"},"Following the upgrade steps should take less than a day of development effort regardless of the project size.")),(0,o.kt)("h3",{id:"documentation"},"Documentation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The documentation is always up to date with the ",(0,o.kt)("strong",{parentName:"li"},"latest major release"),"."),(0,o.kt)("li",{parentName:"ul"},"We will use tabs to demonstrate a difference between the versions where required.")),(0,o.kt)(l.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nMajor version documentation\n\n"))),(0,o.kt)(i.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nDeprecated version documentation\n\n")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We will maintain documentation for the two most recent versions."),(0,o.kt)("li",{parentName:"ul"},"With every new major version release the oldest documented version is removed from the documentation portal.")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We will always provide a branch with the latest snapshot of the documentation before the major version release.\nYou can use that branch to host documentation for the earlier version locally."))),(0,o.kt)("h3",{id:"fixes-and-maintenance"},"Fixes and Maintenance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We provide new features and fixes only for the ",(0,o.kt)("strong",{parentName:"li"},"latest major release")," of the SAP Cloud SDK for JavaScript.")),(0,o.kt)("h3",{id:"support-and-feedback"},"Support and feedback"),(0,o.kt)("p",null,"We are happy to hear from you and usually respond within one day.\nCheck our ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/overview/get-support"},"support channels")," and chose the one that works best for you."))}v.isMDXComponent=!0}}]);
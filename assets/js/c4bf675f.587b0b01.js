"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9452],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return f}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=l(o),f=r,y=s["".concat(d,".").concat(f)]||s[f]||p[f]||a;return o?n.createElement(y,i(i({ref:t},c),{},{components:o})):n.createElement(y,i({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=s;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}s.displayName="MDXCreateElement"},7038:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],u={id:"cf-deploy",title:"Deploy to Cloud Foundry",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Deploy to Cloud Foundry",description:"Learn how to push you SAP Cloud SDK application to SAP BTP, Cloud Foundry environment",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},d=void 0,l={unversionedId:"java/guides/cf-deploy",id:"java/guides/cf-deploy",isDocsHomePage:!1,title:"Deploy to Cloud Foundry",description:"Learn how to push you SAP Cloud SDK application to SAP BTP, Cloud Foundry environment",source:"@site/docs/java/guides/cf-deploy.mdx",sourceDirName:"java/guides",slug:"/java/guides/cf-deploy",permalink:"/cloud-sdk/docs/java/guides/cf-deploy",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/guides/cf-deploy.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1635943953,formattedLastUpdatedAt:"11/3/2021",frontMatter:{id:"cf-deploy",title:"Deploy to Cloud Foundry",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Deploy to Cloud Foundry",description:"Learn how to push you SAP Cloud SDK application to SAP BTP, Cloud Foundry environment",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"someSidebar",previous:{title:"Cloud Foundry CLI",permalink:"/cloud-sdk/docs/java/guides/cf-cli"},next:{title:"CF XSUAA Service",permalink:"/cloud-sdk/docs/java/guides/cloud-foundry-xsuaa-service"}},c=[{value:"Push Application to Cloud Foundry",id:"push-application-to-cloud-foundry",children:[],level:2}],p={toc:c};function s(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"push-application-to-cloud-foundry"},"Push Application to Cloud Foundry"),(0,a.kt)("p",null,"Check this ",(0,a.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/s4sdk-cloud-foundry-sample-application.html"},"tutorial")," for more details while we're creating this section."))}s.isMDXComponent=!0}}]);
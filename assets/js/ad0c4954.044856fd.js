"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7050],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return m}});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||n;return o?a.createElement(f,l(l({ref:t},d),{},{components:o})):a.createElement(f,l({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,l=new Array(n);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<n;c++)l[c]=o[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},1260:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=o(7462),r=o(3366),n=(o(7294),o(3905)),l=["components"],i={id:"cloud-application-model",title:"Cloud Application Model",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Cloud Application Model",description:"Cloud Application Programming Model"},p=void 0,c={unversionedId:"related-projects/cloud-application-model",id:"related-projects/cloud-application-model",isDocsHomePage:!1,title:"Cloud Application Model",description:"Cloud Application Programming Model",source:"@site/docs/related-projects/cap.mdx",sourceDirName:"related-projects",slug:"/related-projects/cloud-application-model",permalink:"/cloud-sdk/docs/related-projects/cloud-application-model",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/related-projects/cap.mdx",tags:[],version:"current",lastUpdatedBy:"Johannes Schneider",lastUpdatedAt:1636038109,formattedLastUpdatedAt:"11/4/2021",frontMatter:{id:"cloud-application-model",title:"Cloud Application Model",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Cloud Application Model",description:"Cloud Application Programming Model"},sidebar:"someSidebar",previous:{title:"SAP TechEd",permalink:"/cloud-sdk/docs/community/sap-teched"},next:{title:"XSUAA Service",permalink:"/cloud-sdk/docs/related-projects/sap-xsuaa-security-library-for-javascript-and-java"}},d=[{value:"Relation to SAP Cloud SDK",id:"relation-to-sap-cloud-sdk",children:[{value:"How to Use the SAP Cloud SDK for Java With the SAP Cloud Application Programming Model",id:"how-to-use-the-sap-cloud-sdk-for-java-with-the-sap-cloud-application-programming-model",children:[],level:3}],level:2},{value:"About SAP Cloud Application Programming Model",id:"about-sap-cloud-application-programming-model",children:[],level:2},{value:"Learn More",id:"learn-more",children:[],level:2}],s={toc:d};function u(e){var t=e.components,o=(0,r.Z)(e,l);return(0,n.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"relation-to-sap-cloud-sdk"},"Relation to SAP Cloud SDK"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/"},"SAP Cloud Application Programming Model (CAP)")," is widely used to build cloud services within SAP."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CAP leverages some of SAP Cloud SDK features to deliver the best user experience out of the box",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Resilience"),(0,n.kt)("li",{parentName:"ul"},"OData V4 helpers"),(0,n.kt)("li",{parentName:"ul"},"The SAP Business Platform, Cloud Foundry environment abstractions"),(0,n.kt)("li",{parentName:"ul"},"The SAP Deploy with Confidence Abstractions"),(0,n.kt)("li",{parentName:"ul"},"Advanced ",(0,n.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/java/features/odata/generic-untyped-odata-client"},"generic OData client")))),(0,n.kt)("li",{parentName:"ul"},"You can consume CAP based services with SAP Cloud SDK by generating a compatible client"),(0,n.kt)("li",{parentName:"ul"},"CAP and SAP Cloud SDK can be used together to leverage benefits from both platforms"),(0,n.kt)("li",{parentName:"ul"},"CAP and SAP Cloud SDK have many features in common as well as unique ones.\nFeel free to approach us to get a recommendation for your specific project.")),(0,n.kt)("h3",{id:"how-to-use-the-sap-cloud-sdk-for-java-with-the-sap-cloud-application-programming-model"},"How to Use the SAP Cloud SDK for Java With the SAP Cloud Application Programming Model"),(0,n.kt)("p",null,"Check out our quick guide about ",(0,n.kt)("a",{parentName:"p",href:"/docs/java/guides/cap-sdk-integration"},"getting started")," with the SAP Cloud SDK for Java in a CAP project."),(0,n.kt)("p",null,"Another option is a ",(0,n.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cloudsdk-integrate-cap.html"},"step-by-step tutorial")," to help you use the SAP Cloud SDK for Java with CAP."),(0,n.kt)("h2",{id:"about-sap-cloud-application-programming-model"},"About SAP Cloud Application Programming Model"),(0,n.kt)("p",null,"The SAP Cloud Application Programming Model is an ",(0,n.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/about/#design-principles"},"open and opinionated"),", ",(0,n.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/about/#design-principles"},"framework of languages, libraries, and tools")," for building enterprise-grade services and applications.\nIt guides developers through proven ",(0,n.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/about/#best-practices"},"best practices")," and a great wealth of ",(0,n.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/about/features"},"out-of-the-box solutions")," for recurring tasks."),(0,n.kt)("p",null,"CAP-based projects benefit from a primary ",(0,n.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/about/#domain-models"},"focus on domain"),". Instead of delving into overly technical disciplines, we focus on ",(0,n.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/about/#grow-as-you-go"},"accelerated development"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/about/#platform-agnostic"},"safeguarding investments")," in a world of rapidly changing cloud technologies."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cap.cloud.sap/docs/assets/overview.png",alt:"CAP project diagram"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"CAP is recommended for:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Building APIs (OData, REST, Messaging)"),(0,n.kt)("li",{parentName:"ul"},"Consuming and emitting Enterprise Messages for SAP S/4HANA")),(0,n.kt)("h2",{id:"learn-more"},"Learn More"),(0,n.kt)("p",null,"Learn more about CAP from the ",(0,n.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/"},"official documentation"),"."))}u.isMDXComponent=!0}}]);
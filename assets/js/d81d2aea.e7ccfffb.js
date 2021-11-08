"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4667],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return v}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),v=r,f=u["".concat(l,".").concat(v)]||u[v]||d[v]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9576:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"overview",title:"Overview",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"SAP Cloud SDK offers type-safe client generators for OpenAPI services",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","openapi"]},l=void 0,c={unversionedId:"java/features/rest/overview",id:"java/features/rest/overview",isDocsHomePage:!1,title:"Overview",description:"SAP Cloud SDK offers type-safe client generators for OpenAPI services",source:"@site/docs/java/features/rest/overview.mdx",sourceDirName:"java/features/rest",slug:"/java/features/rest/overview",permalink:"/cloud-sdk/docs/java/features/rest/overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/rest/overview.mdx",tags:[],version:"current",lastUpdatedBy:"Artem Kovalyov",lastUpdatedAt:1636381192,formattedLastUpdatedAt:"11/8/2021",frontMatter:{id:"overview",title:"Overview",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"SAP Cloud SDK offers type-safe client generators for OpenAPI services",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","openapi"]},sidebar:"someSidebar",previous:{title:"Generic OData Client",permalink:"/cloud-sdk/docs/java/features/odata/generic-untyped-odata-client"},next:{title:"Generate a Typed OpenAPI Client",permalink:"/cloud-sdk/docs/java/features/rest/generate-rest-client"}},p=[{value:"OpenAPI Based Type-Safe Client for RESTful Services in Java",id:"openapi-based-type-safe-client-for-restful-services-in-java",children:[{value:"Pregenerated Type-Safe OpenAPI Client",id:"pregenerated-type-safe-openapi-client",children:[],level:3}],level:2},{value:"Why Using SAP Cloud SDK for Java With OpenAPI Services?",id:"why-using-sap-cloud-sdk-for-java-with-openapi-services",children:[],level:2},{value:"I&#39;m Providing a Service on SAP Business Technology Platform. How Can I Ship It With SAP Cloud SDK?",id:"im-providing-a-service-on-sap-business-technology-platform-how-can-i-ship-it-with-sap-cloud-sdk",children:[],level:2},{value:"Feedback",id:"feedback",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Released as generally available")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"OpenAPI code generator and type-safe client are released as generally available and ready for productive use."))),(0,o.kt)("h2",{id:"openapi-based-type-safe-client-for-restful-services-in-java"},"OpenAPI Based Type-Safe Client for RESTful Services in Java"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI")," standard is a popular format to define RESTful APIs.\nTogether with ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/features/odata/overview"},"OData")," it is one of the key API definition formats used at SAP.\nThe SAP Cloud SDK provides convenient tooling to make the consumption of OpenAPI services easy and convenient.\nWe provide a customized ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/features/rest/generate-rest-client"},"OpenAPI code generator")," capable of converting an OpenAPI specification into a type-safe Java client library nicely integrated with the SAP Business Technology Platform abstractions also provided by the SAP Cloud SDK.\nYou can use that generator to create a client for an OpenAPI-based API of your choice.\nTo speed up things for developers and reduce maintenance, we are working with different SAP services to release pregenerated client libraries available through ",(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=g:com.sap.cloud.sdk*"},"Maven Central"),".\nAnother way to get a client library is to generate it yourself based on API specifications available at ",(0,o.kt)("a",{parentName:"p",href:"https://api.sap.com/"},"SAP API Business Hub"),".\nIf you encounter any problems or errors with OpenAPI tooling give us feedback via our ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/overview/get-support"},"support channels"),"."),(0,o.kt)("h3",{id:"pregenerated-type-safe-openapi-client"},"Pregenerated Type-Safe OpenAPI Client"),(0,o.kt)("p",null,"We ship pregenerated type-safe OpenAPI client libraries as modules in collaboration with popular SAP services available on SAP Business Technology Platform and beyond."),(0,o.kt)("p",null,"Depending on the scope, modules could be available only internally within SAP or publicly released.\nThe ",(0,o.kt)("a",{parentName:"p",href:"clients/scp-workflow-rest-api"},"SAP Workflow service")," is an example of a publicly released API module."),(0,o.kt)("h2",{id:"why-using-sap-cloud-sdk-for-java-with-openapi-services"},"Why Using SAP Cloud SDK for Java With OpenAPI Services?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You'll benefit from type-safety, less code boilerplate, and better developer experience."),(0,o.kt)("li",{parentName:"ul"},"We take care of various complexities around the development of applications and extensions on the SAP Business Technology Platform."),(0,o.kt)("li",{parentName:"ul"},"You'll get convenience abstractions for Destinations, Authentication, Service bindings, CSRF and ETag tokens, Headers, and much more."),(0,o.kt)("li",{parentName:"ul"},"We hide the complexities of cloud development making many tasks ridiculously easy."),(0,o.kt)("li",{parentName:"ul"},"You're getting best in class support from the SAP Cloud SDK development team"),(0,o.kt)("li",{parentName:"ul"},"We take care of change management by continuously updating, integrating, and shipping the latest version of services that we release."),(0,o.kt)("li",{parentName:"ul"},"Our documentation is written by developers for developers.\nWe keep it relevant and up to date.")),(0,o.kt)("h2",{id:"im-providing-a-service-on-sap-business-technology-platform-how-can-i-ship-it-with-sap-cloud-sdk"},"I'm Providing a Service on SAP Business Technology Platform. How Can I Ship It With SAP Cloud SDK?"),(0,o.kt)("p",null,"Reach out to us via internal communication channels and we'll provide you with information on contributing."),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"We are happy to hear from you via internal communication channels or our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk/issues/new/choose"},"GitHub repository"),"."))}u.isMDXComponent=!0}}]);
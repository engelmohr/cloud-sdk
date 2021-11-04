"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[653],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7899:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={title:"Use the SAP Cloud SDK in the Browser",sidebar_label:"Use the SAP Cloud SDK in the Browser",description:"You'll learn how to package SDK for a browser, what are the limitations, and how to use it with popular frontend frameworks.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},l=void 0,d={unversionedId:"js/guides/sdk-in-browser",id:"js/guides/sdk-in-browser",isDocsHomePage:!1,title:"Use the SAP Cloud SDK in the Browser",description:"You'll learn how to package SDK for a browser, what are the limitations, and how to use it with popular frontend frameworks.",source:"@site/docs/js/guides/sdk-in-browser.mdx",sourceDirName:"js/guides",slug:"/js/guides/sdk-in-browser",permalink:"/cloud-sdk/docs/js/guides/sdk-in-browser",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/guides/sdk-in-browser.mdx",tags:[],version:"current",lastUpdatedBy:"Tom Frenken",lastUpdatedAt:1636048384,formattedLastUpdatedAt:"11/4/2021",frontMatter:{title:"Use the SAP Cloud SDK in the Browser",sidebar_label:"Use the SAP Cloud SDK in the Browser",description:"You'll learn how to package SDK for a browser, what are the limitations, and how to use it with popular frontend frameworks.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"someSidebar",previous:{title:"Tutorials Overview",permalink:"/cloud-sdk/docs/js/guides/tutorial-overview-sdk-js"},next:{title:"Currency Conversion",permalink:"/cloud-sdk/docs/js/extensions/currency-conversion"}},u=[{value:"Prerequisite",id:"prerequisite",children:[],level:2},{value:"Include the SAP Cloud SDK",id:"include-the-sap-cloud-sdk",children:[],level:2},{value:"Run Locally",id:"run-locally",children:[],level:2},{value:"Run on SAP BTP, Cloud Foundry Environment",id:"run-on-sap-btp-cloud-foundry-environment",children:[],level:2},{value:"Workaround",id:"workaround",children:[],level:2}],p={toc:u};function c(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The SAP Cloud SDK for JavaScript can be used both as a backend and frontend library when used in a browser.\nBecause of the specifics of a browser environment, some features might be unavailable.\nTo help you get up and running faster in a browser, we'll outline the main steps and caveats of using SAP Cloud SDK on the frontend.\nWe will use ",(0,o.kt)("inlineCode",{parentName:"p"},"Angular")," to illustrate the usage."),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"You have a front-end application set up.\nFor example an ",(0,o.kt)("a",{parentName:"p",href:"https://angular.io/cli/new"},"Angular application")," via ",(0,o.kt)("inlineCode",{parentName:"p"},"ng new myProject"),"."),(0,o.kt)("h2",{id:"include-the-sap-cloud-sdk"},"Include the SAP Cloud SDK"),(0,o.kt)("p",null,"For most examples, we will use the business partner API.\nAdd the package ",(0,o.kt)("inlineCode",{parentName:"p"},"@sap/cloud-sdk-vdm-business-partner-service")," to your package.json introduce some call via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"//In the .html part of the component\n<button (click)=\"callApi()\">Click me!</button>\n\n//In the .ts part of the component\nimport {BusinessPartner} from '@sap/cloud-sdk-vdm-business-partner-service'\n\nasync function callApi(){\n  const result await BusinessPartner.requestBuilder().getAll().execute(myDest)\n  console.log(result)\n}\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For the destination lookup, the SAP Cloud SDK relies on ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.js")," functionality like ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env")," for example.\nHowever, the request building, execution, and result parsing do not require any ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.js")," modules and can be used in the front end.\nHence, you have to create the destination variable ",(0,o.kt)("inlineCode",{parentName:"p"},"myDest")," manually."))),(0,o.kt)("p",null,"When you run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build")," your project should compile.\nCurrently, we are facing compilation errors of the kind ",(0,o.kt)("inlineCode",{parentName:"p"},"Module not found: Error: Can't resolve 'https' in ...'"),"\nPlease check out the ",(0,o.kt)("a",{parentName:"p",href:"#workaround"},"workaround")," for these kinds of errors."),(0,o.kt)("h2",{id:"run-locally"},"Run Locally"),(0,o.kt)("p",null,"As discussed above the ",(0,o.kt)("inlineCode",{parentName:"p"},"myDest")," can not be fetched via the destination service.\nWhen you run locally you can simply provide it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import {Destination} from '@sap-cloud-sdk/core'\n\nconst myDest:Destination = {\n  url: 'https://my123456.s4hana.ondemand.com',\n  username: 'myUser',\n  password: 'myPassowrd'\n}\n")),(0,o.kt)("p",null,"When you execute ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run serve")," your project is compiled and hosted on a local server."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When you trigger a request from a browser to the remote system all modern browsers will block this to ensure ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Same-origin_policy"},"same origin policy"),".\nOne simple way to overcome this issue locally is to disable the web security of your browser temporarily (e.g. --disable-web-security for Chrome).\nAlternatively, you can also create a second localhost proxy server that adds the ",(0,o.kt)("inlineCode",{parentName:"p"},"access-allow-origin-header")," to the request."))),(0,o.kt)("h2",{id:"run-on-sap-btp-cloud-foundry-environment"},"Run on SAP BTP, Cloud Foundry Environment"),(0,o.kt)("p",null,"For productive usage, the methods mentioned above for running locally are of course not needed.\nYou configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"xs-app.json")," of the used app-router with an entry like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "source": "/REMOTE-SYSTEM-IDENTIFIER/(.*)",\n  "target": "/$1",\n  "destination": "DESTINATION-NAME-ON-CF"\n}\n')),(0,o.kt)("p",null,"and then in your application define the destination as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import {Destination} from '@sap-cloud-sdk/core'\n\nconst myDest:Destination = {\n  url: '/REMOTE-SYSTEM-IDENTIFIER'\n}\n")),(0,o.kt)("p",null,"The created request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/REMOTE-SYSTEM-IDENTIFIER/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner")," will be matched by the app-router and the destination with the given URL and credentials is used."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This approach does not support principal propagation to On-premise systems.\nFor this you need a JWT and need to include the proper header fields defining the user.\nSee the documentation on ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/connectivity/on-premise"},"On-premise systems")," for details."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"With webpack it is possible to ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/plugins/normal-module-replacement-plugin/"},"load resources")," for local or productive usage.\nUsing such a switch you can adjust the value of the destination for the two cases."))),(0,o.kt)("h2",{id:"workaround"},"Workaround"),(0,o.kt)("p",null,"Currently, we are facing the issue, that during the compilation from TS to JS the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.js")," parts cause problems even if they are not used.\nWe hope to resolve these issues in the future but for now, here is a workaround:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Include ",(0,o.kt)("inlineCode",{parentName:"li"},"@angular-builders/custom-webpack")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"devDependencies")),(0,o.kt)("li",{parentName:"ul"},"Create a custom webpack configuration named ",(0,o.kt)("inlineCode",{parentName:"li"},"node-webpack.config.js")," and list the following node modules:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"module.exports = {\n  node: {\n    crypto: true,\n    stream: true,\n    zlib: true,\n    path: true,\n    os: true,\n    http: true,\n    https: true\n  }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"angular.json")," adjust the ",(0,o.kt)("inlineCode",{parentName:"li"},"build")," target to use the custom builder:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},' "build": {\n   "builder": "@angular-builders/custom-webpack:browser",\n   "options": {\n     "customWebpackConfig": {\n       "path": "./node-webpack.config.js"\n     }\n  ...\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"angular.json")," adjust the ",(0,o.kt)("inlineCode",{parentName:"li"},"serve")," target to use the custom builder as well:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},' "serve": {\n   "builder": "@angular-builders/custom-webpack:dev-server",\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," exclude the node modules, that do not exist in the browser:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"browser": {\n  "fs": false,\n  "net": false,\n  "tls": false\n}\n')),(0,o.kt)("p",null,"Now the project should build and the run locally."))}c.isMDXComponent=!0}}]);
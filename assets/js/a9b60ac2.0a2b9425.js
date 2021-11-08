"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2013],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return a}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return r}});var i=n(2263),a=n(3919);function o(){var e=(0,i.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var o=void 0===i?{}:i,r=o.forcePrependBaseUrl,s=void 0!==r&&r,l=o.absolute,d=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return d?e+c:c}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},807:function(e,t,n){var i=n(7294),a=n(3081);t.Z=function(e){var t=e.slug,n=e.name;return i.createElement("a",{href:"/cloud-sdk/api/"+a.Z[0]+"/"+t},n)}},3081:function(e,t){t.Z=["1.52.0","1.51.0","1.50.0","1.49.0","1.48.1","1.48.0","1.47.1","1.47.0","1.46.0","1.45.0","1.44.0","1.43.0","1.42.0","1.41.0","1.40.0","1.39.0","1.38.0","1.37.1","1.37.0","1.36.1","1.36.0","1.35.0","1.34.0","1.33.0","1.32.1","1.32.0","1.31.0","1.30.0","1.29.0","1.28.2","1.28.1","1.28.0","1.27.0","1.26.1","1.26.0","1.25.0","1.24.1","1.24.0","1.23.0","1.22.0","1.21.2","1.21.1","1.21.0","1.20.1","1.20.0","1.19.0","1.18.1","1.18.0"]},7492:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=n(807),s=n(4996),l=["components"],d={title:"Destinations",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Destinations",description:"This article describes how destinations are fetched in the SDK and how they can be configured.",keywords:["sap","cloud","sdk","destination","connectivity","JavaScript","TypeScript"]},c=void 0,u={unversionedId:"js/features/connectivity/destination",id:"js/features/connectivity/destination",isDocsHomePage:!1,title:"Destinations",description:"This article describes how destinations are fetched in the SDK and how they can be configured.",source:"@site/docs/js/features/connectivity/destination.mdx",sourceDirName:"js/features/connectivity",slug:"/js/features/connectivity/destination",permalink:"/cloud-sdk/docs/js/features/connectivity/destination",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/connectivity/destination.mdx",tags:[],version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1636381661,formattedLastUpdatedAt:"11/8/2021",frontMatter:{title:"Destinations",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Destinations",description:"This article describes how destinations are fetched in the SDK and how they can be configured.",keywords:["sap","cloud","sdk","destination","connectivity","JavaScript","TypeScript"]},sidebar:"someSidebar",previous:{title:"OData v4 Client API",permalink:"/cloud-sdk/docs/js/features/odata/use-odata-v4-type-safe-client-for-javascript-typescript"},next:{title:"Proxies",permalink:"/cloud-sdk/docs/js/features/connectivity/proxy"}},p=[{value:"Creating Destinations Manually",id:"creating-destinations-manually",children:[],level:2},{value:"Referencing Destinations by Name",id:"referencing-destinations-by-name",children:[{value:"Local Environment Variable",id:"local-environment-variable",children:[],level:3},{value:"Service Binding Environment Variables",id:"service-binding-environment-variables",children:[],level:3},{value:"Destination Service",id:"destination-service",children:[{value:"Authentication and JSON Web Token Retrieval",id:"authentication-and-json-web-token-retrieval",children:[],level:4},{value:"Multi-Tenancy",id:"multi-tenancy",children:[],level:4},{value:"Destination Lookup Without a JSON Web Token",id:"destination-lookup-without-a-json-web-token",children:[],level:4}],level:3},{value:"Additional headers and query parameters on destinations",id:"additional-headers-and-query-parameters-on-destinations",children:[{value:"Rules of precedence",id:"rules-of-precedence",children:[],level:4}],level:3}],level:2}],h={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Many applications on SAP Business Technology Platform (SAP BTP) communicate with other systems, e.g. line of business solutions.\nSAP BTP provides the concept of ",(0,o.kt)("em",{parentName:"p"},"destinations")," for convenient communication between SAP BTP and other systems.\nA destination is an object with the following information, among others:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"URL"),(0,o.kt)("li",{parentName:"ul"},"authentication configuration"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/connectivity/proxy"},"proxy settings"))),(0,o.kt)("p",null,"Destinations are managed separately from applications on SAP BTP and can be retrieved through the destination service at runtime.\nThe reasons to separate destinations and application are manifold:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can securely store authentication information that should not be part of application code."),(0,o.kt)("li",{parentName:"ul"},"You can update resource locations without touching application code."),(0,o.kt)("li",{parentName:"ul"},"Different customers may want to configure different systems."),(0,o.kt)("li",{parentName:"ul"},"Multiple applications might want to access the same systems.")),(0,o.kt)("p",null,"The SAP Cloud SDK helps you to authenticate against the destination service and retrieve destinations into your application."),(0,o.kt)("p",null,"The SAP Cloud SDK supports ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/odata/overview"},"OData")," and ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/openapi/overview"},"OpenApi")," services.\nFor both service types the ",(0,o.kt)("inlineCode",{parentName:"p"},"execute()")," methods triggers a request to a target system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"//OData\nconst responseOData = await BusinessPartner.requestBuilder()\n  .getAll()\n  .execute(myDestination);\n//OpenApi\nconst responseOpenApi = await MyApi.myFunction().execute(myDestination);\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"myDestination")," is an SAP Cloud SDK representation of a ",(0,o.kt)(r.Z,{slug:"interfaces/sap_cloud_sdk_core.Destination",name:"destination",mdxType:"LinkToLatestJsApiDocs"}),".\nThe given request is executed against ",(0,o.kt)("inlineCode",{parentName:"p"},"myDestination"),"."),(0,o.kt)("p",null,"For the rest of the document, we will discuss the different options on destination lookup.\nAll statements equally apply to OData and OpenAPI based services."),(0,o.kt)("h2",{id:"creating-destinations-manually"},"Creating Destinations Manually"),(0,o.kt)("p",null,"You can construct a destination object manually and pass the destination information directly to the ",(0,o.kt)("inlineCode",{parentName:"p"},"execute()")," method.\nThe minimal requirement towards a manually constructed destination is that you provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"url"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},".execute({ url: 'https://example.com'})\n")),(0,o.kt)("p",null,"This, however, is not recommended for productive use as you would loose the benefits of separating destinations from applications."),(0,o.kt)("h2",{id:"referencing-destinations-by-name"},"Referencing Destinations by Name"),(0,o.kt)("p",null,"Instead of defining your destination manually, you can reference it by a name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},".execute({ destinationName: 'myDestination' })\n")),(0,o.kt)("p",null,"The SAP Cloud SDK searches for the destination by its name in the following locations and in the following order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"local environment variables"),(0,o.kt)("li",{parentName:"ol"},"service binding environment variables"),(0,o.kt)("li",{parentName:"ol"},"SAP BTP's destination service")),(0,o.kt)("p",null,"The search stops, once a destination is found.\nTherefore, if a destination with the same name exists in multiple locations, the destination that occurs earliest during the search takes precedence before other destinations with the same name."),(0,o.kt)("h3",{id:"local-environment-variable"},"Local Environment Variable"),(0,o.kt)("p",null,"This option is present for deployment and testing in a local environment outside the SAP BTP where no destination services are available.\nIf a ",(0,o.kt)("inlineCode",{parentName:"p"},"destinations")," environment variable is present it will be used for the destination lookup as described above.\nThe value is expected to be a stringified JSON array, where the items adhere to the ",(0,o.kt)(r.Z,{slug:"interfaces/sap_cloud_sdk_core.Destination",name:"Destination interface",mdxType:"LinkToLatestJsApiDocs"}),".\nExample: ",(0,o.kt)("inlineCode",{parentName:"p"},"\"[{name: 'TESTINATION', url: 'http://url.hana.ondemand.com', username: 'DUMMY', password: 'dummy'}]\""),"."),(0,o.kt)("p",null,"The SAP Cloud SDK provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"setTestDestination(destination)")," function to add a destination to the environment variable for the current process programmatically.\nIt takes a ",(0,o.kt)(r.Z,{slug:"interfaces/sap_cloud_sdk_core.Destination",name:"destination object",mdxType:"LinkToLatestJsApiDocs"}),", transforms it to a JSON object, and adds it to ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.destinations"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { setTestDestination } from '@sap-cloud-sdk/test-util';\n\nsetTestDestination({\n  authentication: 'NoAuthentication',\n  name: 'TESTINATION',\n  isTrustingAllCertificates: false,\n  url: 'https://mys4hana.com'\n});\n")),(0,o.kt)("p",null,"This would set a destination with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"TESTINATION"),".\nAt runtime, the SAP Cloud SDK will check the environment variable for a destination with the given name and use it if present.\nNote that the SAP Cloud SDK offers also a ",(0,o.kt)("inlineCode",{parentName:"p"},"mockTestDestination()")," method, which reads in a ",(0,o.kt)("inlineCode",{parentName:"p"},"systems.json")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"credentials.json")," to create destinations.\nThe advantage of files is that they can be excluded from the repository since they contain sensitive information."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"AuthToken Forwarding")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Usually, the destination service should be used in production to fetch a destination including an authentication token.\nIn the case of frequent service to service communication, requesting the destination service every time for a target-specific ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT")," would mean a big overhead."),(0,o.kt)("p",{parentName:"div"},"In such a case you can configure your destination targets to accept the initial request ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT")," and use this for all further calls.\nThis makes the call to the destination service for a target-specific token redundant.\nIf you configured your target system in such a way, you put a destination in the local environment variables to stop the lookup right away.\nInclude the ",(0,o.kt)("inlineCode",{parentName:"p"},"forwardAuthToken")," to the destination configuration and your initial ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT")," will be forwarded directly as ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header to the target systems without an extra round trip to the destination service.\nYou can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"setTestDestination()")," method to set the destination in the environment variables:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"setTestDestination({\n  name: 'FORWARD-DESTINATION',\n  url: 'https://mys4hana.com',\n  forwardAuthToken: true\n});\n\nMyReqeust.execute({ destinationName: 'myDestination', jwt: 'forwardedJwt' });\n")))),(0,o.kt)("p",null,"Note that this approach is not suitable for multi-tenant scenarios, because only the destination service can return destinations for different tenants."),(0,o.kt)("h3",{id:"service-binding-environment-variables"},"Service Binding Environment Variables"),(0,o.kt)("p",null,"The service credentials, in other words ",(0,o.kt)("inlineCode",{parentName:"p"},"VCAP_SERVICES")," environment variables, may contain a destination.\nIf you want to use this information, the name of the service instance must be provided as the destination name.\nCurrently, two services types are supported out of the box ",(0,o.kt)("inlineCode",{parentName:"p"},"business-logging")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"s4-hana-cloud")," with the following transformation functions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"//business-logging\n(serviceBinding) => {\n    url: serviceBinding.credentials.writeUrl,\n    authentication: 'OAuth2ClientCredentials',\n    username: serviceBinding.credentials.uaa.clientid,\n    password: serviceBinding.credentials.uaa.clientsecret\n};\n\n//s4-hana-cloud\n(serviceBinding) => {\n    url: serviceBinding.credentials.URL,\n    authentication: 'BasicAuthentication',\n    username: serviceBinding.credentials.User,\n    password: serviceBinding.credentials.Password\n};\n")),(0,o.kt)("h3",{id:"destination-service"},"Destination Service"),(0,o.kt)("p",null,"In a productive environment, you will use a ",(0,o.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/7e306250e08340f89d6c103e28840f30.html"},"Destination service")," to retrieve destinations."),(0,o.kt)("h4",{id:"authentication-and-json-web-token-retrieval"},"Authentication and JSON Web Token Retrieval"),(0,o.kt)("p",null,"To access the destination service, the SAP Cloud SDK will first fetch an access token from the XSUAA service.\nThe token retrieved from the XSUAA service is used to make a call to the destination service and receive the destinations.\nThe destination service returns a destination with all relevant authentication information depending on the used authentication flow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PrincipalPropagation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NoAuthentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BasicAuthentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OAuth2SAMLBearerAssertion")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OAuth2UserTokenExchange")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OAuth2ClientCredentials")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OAuth2Password")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ClientCertificateAuthentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OAuth2JWTBearer"))),(0,o.kt)("p",null,"The SAP Cloud SDK automatically parses the response of the destination service and uses the provided authentication information for the request to the target system.\nFor a simple service, this would be the end of the story."),(0,o.kt)("h4",{id:"multi-tenancy"},"Multi-Tenancy"),(0,o.kt)("p",null,"However, the destination service is special in a way that it is a ",(0,o.kt)("inlineCode",{parentName:"p"},"tenant aware service"),".\nSuch services make it possible to build multi-tenant applications.\nSo, what defines a tenant aware service?"),(0,o.kt)("p",null,"Assume you want to build a simple application showing the 5 newest business-partner in an SAP S/4HANA system.\nYou want to offer this application as a service to customers.\nOf course, you want to make this service cost-efficient and host it only once and let multiple customers use it.\nThis leads now naturally to the requirement that your service needs to return the data related to the specific customers.\nA customer is represented by an account on the SAP BTP and a service considering the account is a ",(0,o.kt)("inlineCode",{parentName:"p"},"tenant aware service"),"."),(0,o.kt)("p",null,"Tenant aware services on the SAP BTP are offered to customers via a ",(0,o.kt)("inlineCode",{parentName:"p"},"subscription")," which works on a high level as follows:\nIf a customer wants to use a service, a subscription is created linking the customer account and the one account hosting the service.\nIn the following the term ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriber account")," will be used for the accounts using a service and ",(0,o.kt)("inlineCode",{parentName:"p"},"provider account")," for the one hosting it."),(0,o.kt)("p",null,"After this little definition detour, let's go back to the destination service and the SAP Cloud SDK.\nFor simplicity an optional argument of the destination lookup has been neglected in the beginning:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},".execute({destinationName: 'myDestination', jwt: 'yourJWT'})\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"jwt")," argument takes the JSON web token (JWT) issued by an XSUAA as input.\nThis token contains a field ",(0,o.kt)("inlineCode",{parentName:"p"},"zid")," holding the tenant id which will be used in the lookup process.\nThe lookup process done by the SAP Cloud SDK involves the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Request an access token for the destination service and a given tenant id from the XSUAA."),(0,o.kt)("li",{parentName:"ul"},"Due to the subscription between provider and subscriber, the XSUAA is allowed to issue the token."),(0,o.kt)("li",{parentName:"ul"},"The token allows for calling the destination service on behalf of the given tenant.\nThe tenant and service information is encoded in the access token."),(0,o.kt)("li",{parentName:"ul"},"Make a call to the destination service using the obtained access token."),(0,o.kt)("li",{parentName:"ul"},"The destination maintained in the given tenant are returned.")),(0,o.kt)("p",null,"If no token is given or the destination is not found in the subscriber account the provider account is used as a fallback.\nTo control this fallback behavior a selection strategy can be passed to the destination lookup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},".execute({destinationName: 'myDestination', jwt: 'yourJWT'},{selectionStrategy:'alwaysSubscriber'})\n")),(0,o.kt)("p",null,"There are three selection strategies defined in the SAP Cloud SDK: ",(0,o.kt)("inlineCode",{parentName:"p"},"alwaysSubscriber"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"alwaysProvider")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriberFirst"),".\nThe selection strategy can be passed as an optional argument to the ",(0,o.kt)("inlineCode",{parentName:"p"},".execute()")," method.\nThe default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriberFirst"),".\nThe selection strategies can be used to control for which account a destination lookup is attempted:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AlwaysSubscriber"),": Only try to get destinations from the subscriber account.\nA valid JWT is mandatory to receive something."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AlwaysProvider"),": Only try to get destination from the provider account.\nA JWT is not needed.\nEven if you present a subscriber JWT the provider destination will be returned if present."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SubscriberFirst"),": Tries to get from the subscriber first using the JWT.\nIf no valid JWT is provided or the destination is not found it tries the provider as described for ",(0,o.kt)("inlineCode",{parentName:"li"},"AlwaysProvider"),".")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"One aspect has been left out for simplicity.\nIn principle, it is possible to define destinations not only on the account level but also on the destination service level.\nThese destinations are called ",(0,o.kt)("inlineCode",{parentName:"p"},"instance destinations")," since they are tied to a service binding called instance on SAP BTP.\nIn every request, these destinations are added to the destinations returned by the destination service."))),(0,o.kt)("h4",{id:"destination-lookup-without-a-json-web-token"},"Destination Lookup Without a JSON Web Token"),(0,o.kt)("p",null,"There are situations where you do not have a JWT issued by the XSUAA but need to look a destination up e.g. in background processes.\nIn such situations the property ",(0,o.kt)("inlineCode",{parentName:"p"},"iss")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"DestinationAccessorOptions")," can be used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},".execute(\n  { destinationName: 'myDestination' },\n  { iss: yourIssuerValue }\n )\n")),(0,o.kt)("p",null,"The value for ",(0,o.kt)("inlineCode",{parentName:"p"},"iss")," is supposed to be the same as in a JWT issued from the XSUAA e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"https://yourSubdomain.localhost:8080/uaa/oauth/token"),".\nIn principle only the host of the URL is relevant but since the same parsing and replacement methods are used for the JWT handling, the URL has to be provided in the format above."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If a JWT is used in the destination lookup, a validation of the provided token is performed.\nThis validation ensures that the JWT has not been manipulated.\nIf only the ",(0,o.kt)("inlineCode",{parentName:"p"},"iss")," is provided no such validation is performed.\nNote that the given subdomain value defines from which tenant destinations are fetched.\nSo a wrong value may break the isolation for tenants.\nIt is your responsibility as a developer to ensure that the provided value for the ",(0,o.kt)("inlineCode",{parentName:"p"},"iss")," property is valid."))),(0,o.kt)("h3",{id:"additional-headers-and-query-parameters-on-destinations"},"Additional headers and query parameters on destinations"),(0,o.kt)("p",null,"The destination service has a convention to define static headers and query parameters on destinations.\nCreate additional properties in your destination in the SAP BTP cockpit and define their values as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"URL.headers.<header-key>")," for headers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"URL.queries.<query-key>")," for query parameters")),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<header-key>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<query-key>")," with the name of your headers or query parameters and set the respective values."),(0,o.kt)("img",{alt:"Additional properties on destination",src:(0,s.Z)("img/destination-additional-properties.png"),class:"center"}),(0,o.kt)("p",null,"In the example above, the destination has an ",(0,o.kt)("inlineCode",{parentName:"p"},"apiKey")," header with the value ",(0,o.kt)("inlineCode",{parentName:"p"},"<my-api-key>")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"language")," query parameter with the value ",(0,o.kt)("inlineCode",{parentName:"p"},"EN"),"."),(0,o.kt)("p",null,"The SAP Cloud SDK adds those additional headers and query parameters for every communication with the given destination."),(0,o.kt)("h4",{id:"rules-of-precedence"},"Rules of precedence"),(0,o.kt)("p",null,"The SAP Cloud SDK adds headers and query parameters from different sources.\nSome sources take precedence over others (highest to lowest):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"custom"),": headers/query parameters added to a request directly"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"additional properties"),": headers/query parameters defined on a destination"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"internal"),": headers/query parameters built by the SAP Cloud SDK")),(0,o.kt)("p",null,"Headers or query parameters built by the SAP Cloud SDK are overwritten by additional headers and query parameters on the destination.\nCustom headers and query parameters, however, overwrite the additional properties."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Header names")," keep their casing but overwrite other headers independent of casing, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"AUTHORIZATION")," overwrites ",(0,o.kt)("inlineCode",{parentName:"p"},"authorization"),".\nThis does not apply to query ",(0,o.kt)("strong",{parentName:"p"},"parameter names"),"`."))))}m.isMDXComponent=!0}}]);
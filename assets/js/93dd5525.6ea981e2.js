"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8579],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=s.createContext({}),u=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return s.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},l=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(n),h=r,f=l["".concat(c,".").concat(h)]||l[h]||d[h]||a;return n?s.createElement(f,o(o({ref:t},p),{},{components:n})):s.createElement(f,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}l.displayName="MDXCreateElement"},5005:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return l}});var s=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],i={},c=void 0,u={unversionedId:"js/features/odata/common/batch/changeset",id:"js/features/odata/common/batch/changeset",isDocsHomePage:!1,title:"changeset",description:"A changeset is a collection of HTTP POST, PUT, PATCH and DELETE operations - requests built by any CreateRequestBuilder, UpdateRequestBuilder and DeleteRequestBuilder in terms of the SAP Cloud SDK.",source:"@site/docs/js/features/odata/common/batch/changeset.mdx",sourceDirName:"js/features/odata/common/batch",slug:"/js/features/odata/common/batch/changeset",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/changeset",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/batch/changeset.mdx",tags:[],version:"current",lastUpdatedBy:"Artem Kovalyov",lastUpdatedAt:1636381192,formattedLastUpdatedAt:"11/8/2021",frontMatter:{}},p=[],d={toc:p};function l(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A changeset is a collection of HTTP ",(0,a.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PATCH")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE")," operations - requests built by any ",(0,a.kt)("a",{parentName:"p",href:"#create-request-builder"},(0,a.kt)("inlineCode",{parentName:"a"},"CreateRequestBuilder")),", ",(0,a.kt)("a",{parentName:"p",href:"#update-request-builder"},(0,a.kt)("inlineCode",{parentName:"a"},"UpdateRequestBuilder"))," and ",(0,a.kt)("a",{parentName:"p",href:"#delete-request-builder"},(0,a.kt)("inlineCode",{parentName:"a"},"DeleteRequestBuilder"))," in terms of the SAP Cloud SDK.\nThe order of execution within a changeset is not defined.\nThis differs from the whole batch request itself, where the order is defined.\nTherefore, the requests within a changeset should not depend on each other.\nIf the execution of any request within a changeset fails, the whole changeset will be reflected as an error in the response.\nThe changeset will not be applied, much like a database transaction."),(0,a.kt)("p",null,"Change requests cannot be passed to a batch request directly.\nThey have to be combined in a changeset, which in turn can be passed to the batch request.\nOnce a batch request is executed, it returns a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"BatchResponse"),"s.\nThose contain the raw response information of each subrequest.\nThe response to a changeset request can either be a collection of the subresponses to the subrequests of the changeset of type ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponses")," or an ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),".\nTo determine if a request was successful use ",(0,a.kt)("inlineCode",{parentName:"p"},".isSuccess()"),"."),(0,a.kt)("p",null,"Successful requests should be cast to ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponses")," which contains all subresponses for the changeset request.\nThose responses can be accessed by ",(0,a.kt)("inlineCode",{parentName:"p"},".responses")," and have the type ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponse"),".\nEach ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponse")," contains the HTTP code and can contain the raw body and the constructor of the entity that was parsed from the response, depending on whether there was a body in the response.\nCreate and delete requests typically do not have a response body.\nTo work with an instance of an entity given in a ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponse"),", you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},".as")," method, which allows you to transform the raw string body into an instance of the given constructor.\nNote that the response may not exist, so you should only call this method if you know that there is data.\nTypically the HTTP code is a good indicator for this (",(0,a.kt)("inlineCode",{parentName:"p"},"201 No Content")," probably won't have content).\nIf you are working with TypeScript you will have to tell the compiler, that the ",(0,a.kt)("inlineCode",{parentName:"p"},".as!")," method can be used here by adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"!"),".\nAlso note, that retrieve responses can be ",(0,a.kt)("a",{parentName:"p",href:"#error-handling"},(0,a.kt)("inlineCode",{parentName:"a"},"ErrorResponse"),"s"),".\nTherefore, it is crucial to check responses for success, before casting them to ",(0,a.kt)("inlineCode",{parentName:"p"},"WriteResponses"),"."),(0,a.kt)("p",null,"In the example below, a list of addresses is mapped to ",(0,a.kt)("a",{parentName:"p",href:"#update-request-builder"},"UpdateRequestBuilder"),"s.\nThese change requests are combined to one ",(0,a.kt)("inlineCode",{parentName:"p"},"changeset"),", which is passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"batch")," request and executed against a destination."),(0,a.kt)("p",null,"Once the batch request is executed it returns a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"BatchResponse"),"s, which in this example contains one response only, namely the one for the changeset."),(0,a.kt)("p",null,"If the request was not successful, an error will be thrown, otherwise, the subresponses are transformed into instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"BusinessPartnerAddress"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async function updateAddresses(\n  businessPartnerAddresses: BusinessPartnerAddress[]\n): Promise<BusinessPartnerAddress[]> {\n  // Create update requests\n  const updateRequests = businessPartnerAddresses.map(address =>\n    BusinessPartnerAddress.requestBuilder().update(address)\n  );\n\n  // Execute batch request with one changeset\n  const batchResponses = await batch(\n    // Combine update requests into one changeset\n    changeset(...updateRequests)\n  ).execute(destination);\n\n  // Get response for the changeset request\n  const changesetResonse = batchResponses[0];\n\n  // Error handling\n  if (!changesetResonse.isSuccess()) {\n    throw new Error('The changeset request was not successful.');\n  }\n\n  return (changesetResonse as WriteResponses).responses.map(response =>\n    // Transform response to an instance of BusinessPartnerAddress\n    response.as!(BusinessPartnerAddress)\n  );\n}\n")))}l.isMDXComponent=!0}}]);
"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6470],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3642:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},c=void 0,u={unversionedId:"js/features/odata/common/batch/serialization",id:"js/features/odata/common/batch/serialization",isDocsHomePage:!1,title:"serialization",description:"By default, when you execute a batch request, the subrequests are serialized to a multipart representation of the request, which is essentially a string.",source:"@site/docs/js/features/odata/common/batch/serialization.mdx",sourceDirName:"js/features/odata/common/batch",slug:"/js/features/odata/common/batch/serialization",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/serialization",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/batch/serialization.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1635943953,formattedLastUpdatedAt:"11/3/2021",frontMatter:{}},l=[],p={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, when you execute a batch request, the subrequests are serialized to a multipart representation of the request, which is essentially a string.\nThis is what a create request for a business partner addresses would serialize to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Content-Type: application/http\nContent-Transfer-Encoding: binary\n\nPOST /sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartnerAddress HTTP/1.1\nContent-Type: application/json\nAccept: application/json\n\n{"BusinessPartner":"1","PostalCode":"10001","City":"New York","Country":"USA"}\n\n')),(0,o.kt)("p",null,'The first lines are request headers for the multipart request, followed by a blank line.\nThe next line contains the request method and URL, followed by the request headers, a blank line, and the request payload.\nEvery "atomic" request is serialized to a string of this kind, while ',(0,o.kt)("inlineCode",{parentName:"p"},"GET")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE")," requests do not provide a payload."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8576],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||l[f]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7169:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},c=void 0,u={unversionedId:"js/features/odata/common/entity/deserialize-entity",id:"js/features/odata/common/entity/deserialize-entity",isDocsHomePage:!1,title:"deserialize-entity",description:"In some cases you might retrieve raw data from an OData response.",source:"@site/docs/js/features/odata/common/entity/deserialize-entity.mdx",sourceDirName:"js/features/odata/common/entity",slug:"/js/features/odata/common/entity/deserialize-entity",permalink:"/cloud-sdk/docs/js/features/odata/common/entity/deserialize-entity",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/entity/deserialize-entity.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1635943953,formattedLastUpdatedAt:"11/3/2021",frontMatter:{}},d=[],l={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In some cases you might retrieve raw data from an OData response.\nIf you need to transform it to an SAP Cloud SDK representation of an entity, you can deserialize it using the ",(0,a.kt)("inlineCode",{parentName:"p"},"deserializeEntity")," function.\nFields unknown according to the specification are added as custom fields, without deserializing the according value.\nNote that this function is not part of a specific service and has to be imported from the SAP Cloud SDK core package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { deserializeEntity } from '@sap-cloud-sdk/core';\n\nconst businessPartner = deserializeEntity(\n  {\n    FirstName: 'Peter',\n    LastName: 'Pan',\n    to_BusinessPartnerAddress: [\n      {\n        Country: 'Neverland'\n      }\n    ]\n  },\n  BusinessPartner\n);\n")))}p.isMDXComponent=!0}}]);
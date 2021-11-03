"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7181],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6043:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},u=void 0,s={unversionedId:"js/features/odata/common/query-parameter/filter-one-to-one",id:"js/features/odata/common/query-parameter/filter-one-to-one",isDocsHomePage:!1,title:"filter-one-to-one",description:"In addition to basic properties, filters can also be applied on one-to-one navigation properties.",source:"@site/docs/js/features/odata/common/query-parameter/filter-one-to-one.mdx",sourceDirName:"js/features/odata/common/query-parameter",slug:"/js/features/odata/common/query-parameter/filter-one-to-one",permalink:"/cloud-sdk/docs/js/features/odata/common/query-parameter/filter-one-to-one",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/query-parameter/filter-one-to-one.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1635943953,formattedLastUpdatedAt:"11/3/2021",frontMatter:{}},c=[],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In addition to basic properties, filters can also be applied on one-to-one navigation properties.\nThe example below shows how to filter on the ",(0,a.kt)("inlineCode",{parentName:"p"},"TO_CUSTOMER"),", which is a one-to-one navigation property of the BusinessPartner entity.\nPlease note, the ",(0,a.kt)("inlineCode",{parentName:"p"},"CUSTOMER_NAME")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CUSTOMER_FULL_NAME")," are properties of the entity ",(0,a.kt)("inlineCode",{parentName:"p"},"Customer"),", which is the type of the one-to-one navigation property ",(0,a.kt)("inlineCode",{parentName:"p"},"TO_CUSTOMER"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n  Get all business partners that match all the following conditions:\n    - Have customer with the customer name 'name'\n    - Have customer with the customer full name 'fullName'\n*/\n.filter(\n  BusinessPartner.TO_CUSTOMER.filter(\n    Customer.CUSTOMER_NAME.equals('name'),\n    Customer.CUSTOMER_FULL_NAME.equals('fullName')\n  )\n)\n")),(0,a.kt)("p",null,"The generated ",(0,a.kt)("inlineCode",{parentName:"p"},"$filter")," will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"$filter=((to_Customer/CustomerName eq 'name' and to_Customer/CustomerFullName eq 'fullName'))\n")))}m.isMDXComponent=!0}}]);
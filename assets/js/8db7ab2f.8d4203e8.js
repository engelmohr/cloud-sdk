"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2220],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9128:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s=void 0,u={unversionedId:"js/features/odata/common/query-parameter/filter",id:"js/features/odata/common/query-parameter/filter",isDocsHomePage:!1,title:"filter",description:"When operating on a collection of entities, the API offers filter( ... ) on the builders.",source:"@site/docs/js/features/odata/common/query-parameter/filter.mdx",sourceDirName:"js/features/odata/common/query-parameter",slug:"/js/features/odata/common/query-parameter/filter",permalink:"/cloud-sdk/docs/js/features/odata/common/query-parameter/filter",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/query-parameter/filter.mdx",tags:[],version:"current",lastUpdatedBy:"Alexander D\xfcmont",lastUpdatedAt:1637335287,formattedLastUpdatedAt:"11/19/2021",frontMatter:{}},p=[],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When operating on a collection of entities, the API offers ",(0,o.kt)("inlineCode",{parentName:"p"},"filter( ... )")," on the builders.\nIt directly corresponds to the ",(0,o.kt)("inlineCode",{parentName:"p"},"$filter")," parameter of the request.\nFilters are also built via the static property fields on entities:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n  Get all business partners that either:\n    - Have first name 'Alice' but not last name 'Bob'\n    - Or have first name 'Mallory'\n*/\nBusinessPartner.requestBuilder()\n  .getAll()\n  .filter(\n    or(\n      and(\n        BusinessPartner.FIRST_NAME.equals('Alice'),\n        BusinessPartner.LAST_NAME.notEquals('Bob')\n      ),\n      BusinessPartner.FIRST_NAME.equals('Mallory')\n    )\n  )\n  .execute(destination);\n")),(0,o.kt)("p",null,"The example above will translate to this filter parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"$filter=(((FirstName eq 'Alice') and (LastName ne 'Bob')) or (FirstName eq 'Mallory'))\n")),(0,o.kt)("p",null,"Take note of the order of ",(0,o.kt)("inlineCode",{parentName:"p"},"and")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"or"),".\nAs ",(0,o.kt)("inlineCode",{parentName:"p"},"or")," is invoked on the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"and")," it will form the outer expression while ",(0,o.kt)("inlineCode",{parentName:"p"},"and")," is an inner expression in the first branch of ",(0,o.kt)("inlineCode",{parentName:"p"},"or"),"."),(0,o.kt)("p",null,"In addition, the negation operator ",(0,o.kt)("inlineCode",{parentName:"p"},"not")," can also be used for wrapping any filter expressions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/*\n  Get all business partners that do not match any of the cases:\n    - Have first name 'Alice'\n    - Have last name 'Bob'\n*/\n.filter(\n  not(\n    or(\n      BusinessPartner.FIRST_NAME.equals('Alice'),\n      BusinessPartner.LAST_NAME.equals('Bob')\n    )\n  )\n)\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"$filter")," parameter will then be generated like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"$filter=not (FirstName eq 'Alice') or (LastName eq 'Bob'))\n")),(0,o.kt)("p",null,"It is also possible to pass multiple filters to the same filter function without concatenating them with ",(0,o.kt)("inlineCode",{parentName:"p"},"and")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"or"),".\nThey will be concatenated with ",(0,o.kt)("inlineCode",{parentName:"p"},"and")," by default.\nThe two following examples are equal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},".filter(\n  and(\n    BusinessPartner.FIRST_NAME.equals('Alice'),\n    BusinessPartner.LAST_NAME.notEquals('Bob')\n  )\n)\n")),(0,o.kt)("p",null,"The example above can be shortened to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},".filter(\n  BusinessPartner.FIRST_NAME.equals('Alice'),\n  BusinessPartner.LAST_NAME.notEquals('Bob')\n)\n")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[402],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||l[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8098:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={},s=void 0,c={unversionedId:"js/features/odata/v4/function-import-known-issues",id:"js/features/odata/v4/function-import-known-issues",isDocsHomePage:!1,title:"function-import-known-issues",description:"1. Currently, the Entity Type is not supported to be used as the parameters of the function import.",source:"@site/docs/js/features/odata/v4/function-import-known-issues.mdx",sourceDirName:"js/features/odata/v4",slug:"/js/features/odata/v4/function-import-known-issues",permalink:"/cloud-sdk/docs/js/features/odata/v4/function-import-known-issues",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/v4/function-import-known-issues.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1635943953,formattedLastUpdatedAt:"11/3/2021",frontMatter:{}},p=[],l={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Currently, the ",(0,a.kt)("inlineCode",{parentName:"li"},"Entity Type")," is not supported to be used as the parameters of the function import.\nFunction imports with such unsupported parameters are ignored during the generation.\nThis feature will be implemented in the future.\nPlease check this ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/SAP/cloud-sdk-js/issues/707"},"issue")," and comment if you need this feature."),(0,a.kt)("li",{parentName:"ol"},"Also, for the time being, we only support ",(0,a.kt)("inlineCode",{parentName:"li"},"unbound functions"),".\nThe ",(0,a.kt)("inlineCode",{parentName:"li"},"bound functions")," will be supported later, you can create a feature request ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/SAP/cloud-sdk-js/issues/new?assignees=&labels=feature+request&template=feature_request.md&title="},"here"),".")))}f.isMDXComponent=!0}}]);
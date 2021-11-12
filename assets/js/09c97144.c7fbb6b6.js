"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7567],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7201:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"Shared ESLint configuration",sidebar_label:"Shared ESLint configuration",description:"How to use our recommended ESLint configuration",keywords:["sap","cloud","sdk","JavaScript","TypeScript","ESLint","configuration","lint","formatting","static","analysis"]},s=void 0,u={unversionedId:"js/features/eslint-configuration",id:"js/features/eslint-configuration",isDocsHomePage:!1,title:"Shared ESLint configuration",description:"How to use our recommended ESLint configuration",source:"@site/docs/js/features/eslint-configuration.mdx",sourceDirName:"js/features",slug:"/js/features/eslint-configuration",permalink:"/cloud-sdk/docs/js/features/eslint-configuration",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/eslint-configuration.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1636739061,formattedLastUpdatedAt:"11/12/2021",frontMatter:{title:"Shared ESLint configuration",sidebar_label:"Shared ESLint configuration",description:"How to use our recommended ESLint configuration",keywords:["sap","cloud","sdk","JavaScript","TypeScript","ESLint","configuration","lint","formatting","static","analysis"]},sidebar:"someSidebar",previous:{title:"Logging",permalink:"/cloud-sdk/docs/js/features/logging"},next:{title:"Migrate to Kubernetes",permalink:"/cloud-sdk/docs/js/guides/migrate-sdk-application-from-btp-cf-to-kubernetes"}},l=[],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The SAP Cloud SDK provides a configuration with our recommended ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," rules and plugin.\nIt extends the ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint:recommended")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@typescript-eslint/recommended")," configurations.\nIt also uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint-config-prettier")," to avoid any formatting conflicts when using the highly recommended ",(0,i.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier"),"."),(0,i.kt)("p",null,"To add the configuration please adjust your ESLint configuration (usually called ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc.js"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "extends": "@sap-cloud-sdk"\n}\n')),(0,i.kt)("p",null,"or if you want to combine this configuration with others:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "extends": ["example-config", "@sap-cloud-sdk"]\n}\n')),(0,i.kt)("p",null,"This configuration depends on plugins ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint-plugin-import")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint-plugin-unused-imports"),", which need to be installed in your project."),(0,i.kt)("p",null,"ESLint merges these shareable configurations with your configuration.\nAny rule configured in your ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," will overwrite the setting for this rule in the shareable configuration."))}d.isMDXComponent=!0}}]);
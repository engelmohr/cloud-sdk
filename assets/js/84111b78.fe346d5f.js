"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2970],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,r[1]=d;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5954:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],d={id:"manage-dependencies",title:"Managing Dependencies",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Dependency Management",description:"How to manage dependencies, detect and resolve conflicts",keywords:["sap","cloud","sdk","cloud native","cloud sdk","dependency","dependency conflicts","manage dependencies","how-to"]},l=void 0,s={unversionedId:"java/guides/manage-dependencies",id:"java/guides/manage-dependencies",isDocsHomePage:!1,title:"Managing Dependencies",description:"How to manage dependencies, detect and resolve conflicts",source:"@site/docs/java/guides/dependencies.mdx",sourceDirName:"java/guides",slug:"/java/guides/manage-dependencies",permalink:"/cloud-sdk/docs/java/guides/manage-dependencies",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/guides/dependencies.mdx",tags:[],version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1637659488,formattedLastUpdatedAt:"11/23/2021",frontMatter:{id:"manage-dependencies",title:"Managing Dependencies",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Dependency Management",description:"How to manage dependencies, detect and resolve conflicts",keywords:["sap","cloud","sdk","cloud native","cloud sdk","dependency","dependency conflicts","manage dependencies","how-to"]},sidebar:"someSidebar",previous:{title:"CF XSUAA Service",permalink:"/cloud-sdk/docs/java/guides/cloud-foundry-xsuaa-service"},next:{title:"Logging",permalink:"/cloud-sdk/docs/java/guides/logging-overview"}},c=[{value:"General Information",id:"general-information",children:[{value:"The SAP Cloud SDK Bill-of-Material",id:"the-sap-cloud-sdk-bill-of-material",children:[],level:3}],level:2},{value:"Dealing With Dependency Conflicts",id:"dealing-with-dependency-conflicts",children:[{value:"Updating the SAP Cloud SDK Version",id:"updating-the-sap-cloud-sdk-version",children:[],level:3},{value:"Overriding Dependency Versions of the SAP Cloud SDK Bill-of-Material",id:"overriding-dependency-versions-of-the-sap-cloud-sdk-bill-of-material",children:[],level:3}],level:2}],p={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"general-information"},"General Information"),(0,o.kt)("p",null,"The SAP Cloud SDK for Java is a set of libraries that itself depends on other libraries.\nTo manage these relationships it relies on the ",(0,o.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html"},"dependency management functionality")," of ",(0,o.kt)("a",{parentName:"p",href:"https://maven.apache.org/index.html"},"Maven"),"."),(0,o.kt)("p",null,"This article shows how to manage dependencies for the SAP Cloud SDK for Java specifically.\nFor general information on how to deal with dependencies refer to the resources linked above and throughout this page."),(0,o.kt)("h3",{id:"the-sap-cloud-sdk-bill-of-material"},"The SAP Cloud SDK Bill-of-Material"),(0,o.kt)("p",null,"The SAP Cloud SDK provides a ",(0,o.kt)("a",{parentName:"p",href:"https://dzone.com/articles/the-bill-of-materials-in-maven"},"Bill-of-Material"),".\nIt comprises all dependencies and their specific version that the SAP Cloud SDK relies upon."),(0,o.kt)("p",null,"It can be used in the dependency management as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>use-latest-version-here</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n")),(0,o.kt)("p",null,"It helps in various ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Minimizing the effort for updating SAP Cloud SDK versions"),(0,o.kt)("li",{parentName:"ul"},"Ensuring all SAP Cloud SDK components are used consistently with the same version"),(0,o.kt)("li",{parentName:"ul"},"Compatibility with some other key SAP libraries or frameworks like ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/SAP/cloud-security-xsuaa-integration"},"XSUAA")," and ",(0,o.kt)("a",{parentName:"li",href:"https://cap.cloud.sap/docs/"},"CAP"),"."),(0,o.kt)("li",{parentName:"ul"},"Avoiding some potential dependency conflicts"),(0,o.kt)("li",{parentName:"ul"},"Checking which components & their respective version the SAP Cloud SDK depends upon")),(0,o.kt)("p",null,"For these reasons we highly recommend using the ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk-bom")," in your project."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Alternative: SAP Cloud SDK Modules Bill-of-Material")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Besides the SAP Cloud SDK Bill-of-Material ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk-bom")," there is also the SAP Cloud SDK Modules Bill-of-Material ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk-modules-bom"),".\nIt manages the version of all SAP Cloud SDK modules only.\n",(0,o.kt)("inlineCode",{parentName:"p"},"sdk-modules-bom")," does not manage versions of transitive dependencies and hence can be chosen to resolve dependency version conflicts."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"SAP Cloud SDK Maven Plugins")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please be aware that neither the ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk-bom")," nor the ",(0,o.kt)("inlineCode",{parentName:"p"},"modules-bom")," will manage the versions of any SAP Cloud SDK Maven plugins (like the ",(0,o.kt)("inlineCode",{parentName:"p"},"odata-generator-maven-plugin"),") you may use.\nIt is required to specify a version for such plugins explicitly, otherwise dependency conflicts may occur."))),(0,o.kt)("h2",{id:"dealing-with-dependency-conflicts"},"Dealing With Dependency Conflicts"),(0,o.kt)("p",null,"When using multiple libraries, you will probably run into a version conflict at some point.\nThis is caused by the way dependencies are resolved.\nIf you are using two libraries ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," where both depend on a different version of ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," you encounter a conflict."),(0,o.kt)("p",null,"This conflict can only be solved by you as the consumer be explicitly stating which version of ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," should be used."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dzone.com/articles/solving-dependency-conflicts-in-maven"},"This guide")," outlines this problem in more detail and provides general guidance on how to find and resolve such problems."),(0,o.kt)("h3",{id:"updating-the-sap-cloud-sdk-version"},"Updating the SAP Cloud SDK Version"),(0,o.kt)("p",null,"You may run into dependency related problems when updating SAP Cloud SDK versions since its dependencies are frequently updated.\nHere are some recommendations from our experience that should help to mitigate any problems:"),(0,o.kt)("p",null,"We recommend increasing the SAP Cloud SDK version in a dedicated change e.g. a pull request."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This isolates the change and makes finding problems easier.")),(0,o.kt)("p",null,"Look out for ",(0,o.kt)("inlineCode",{parentName:"p"},"MethodNotFound")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ClassDefNotFound")," exceptions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"They are common when a library is provided with an unexpected version.")),(0,o.kt)("p",null,"Check out our ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/release-notes-sap-cloud-sdk-for-java"},"release notes"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Under improvements, you will see all dependency changes.")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"mvn dependency:tree")," to analyze the dependency tree."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It shows where dependencies are used and in which version.")),(0,o.kt)("p",null,"Google the error message."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Usually, you will at least get an idea which library is causing the problems.")),(0,o.kt)("p",null,"Update the SAP Cloud SDK version frequently."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This mitigates the risk per update and ensures you are up to date.")),(0,o.kt)("h3",{id:"overriding-dependency-versions-of-the-sap-cloud-sdk-bill-of-material"},"Overriding Dependency Versions of the SAP Cloud SDK Bill-of-Material"),(0,o.kt)("p",null,"Sometimes you may want to override the version of a specific dependency the SAP Cloud SDK is using.\nYou can achieve this by listing it in the dependency management ",(0,o.kt)("em",{parentName:"p"},"before the SAP Cloud SDK BOM"),"."),(0,o.kt)("p",null,"For example to override the version of SLF4J:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>org.slf4j</groupId>\n            <artifactId>slf4j-api</artifactId>\n            <version>your-slf4j-version</version>\n        </dependency>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>latest-sdk-version</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Remember that including a dependency in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<dependencyManagement>")," section only enforces its version.\nIt does not yet include it as a dependency in your project."))))}u.isMDXComponent=!0}}]);
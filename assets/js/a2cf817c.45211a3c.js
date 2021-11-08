"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7655],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},6396:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7462),r=a(7294),o=a(2389),i=a(9443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(9521),p=a(6010),d="tabItem_1uMI";function c(e){var t,a,n,o=e.lazy,i=e.block,c=e.defaultValue,u=e.values,m=e.groupId,g=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=u?u:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=h[0])?void 0:n.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),N=y.tabGroupChoices,b=y.setTabGroupChoices,I=(0,r.useState)(k),S=I[0],w=I[1],A=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=N[m];null!=P&&P!==S&&v.some((function(e){return e.value===P}))&&w(P)}var O=function(e){var t=e.currentTarget,a=A.indexOf(t),n=v[a].value;n!==S&&(C(t),w(n),null!=m&&b(m,n))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=A.indexOf(e.currentTarget)+1;a=A[n]||A[0];break;case"ArrowLeft":var r=A.indexOf(e.currentTarget)-1;a=A[r]||A[A.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":i},g)},v.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,className:(0,p.Z)("tabs__item",d,{"tabs__item--active":S===t}),key:t,ref:function(e){return A.push(e)},onKeyDown:x,onFocus:O,onClick:O},null!=a?a:t)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function u(e){var t=(0,o.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},8911:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.align;return n.createElement("span",{className:t?"col text--right":""},n.createElement("a",{href:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom"},n.createElement("img",{alt:"maven central",src:"https://maven-badges.herokuapp.com/maven-central/com.sap.cloud.sdk/sdk-bom/badge.svg"})))}},3664:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return h}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(8911),l=a(6396),s=a(8215),p=["components"],d={id:"getting-started",title:"Getting Started",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting started",description:"Get up to speed with SAP Cloud SDK for Java in no time",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},c=void 0,u={unversionedId:"java/getting-started",id:"java/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Get up to speed with SAP Cloud SDK for Java in no time",source:"@site/docs/java/getting-started.mdx",sourceDirName:"java",slug:"/java/getting-started",permalink:"/cloud-sdk/docs/java/getting-started",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/getting-started.mdx",tags:[],version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1636392092,formattedLastUpdatedAt:"11/8/2021",frontMatter:{id:"getting-started",title:"Getting Started",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting started",description:"Get up to speed with SAP Cloud SDK for Java in no time",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/cloud-sdk/docs/java/overview-cloud-sdk-for-java"},next:{title:"Overview",permalink:"/cloud-sdk/docs/java/features/odata/overview"}},m=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Generating a Project from a Maven Archetype",id:"generating-a-project-from-a-maven-archetype",children:[],level:2},{value:"Integrate the SAP Cloud SDK for Java Into Your Project",id:"integrate-the-sap-cloud-sdk-for-java-into-your-project",children:[{value:"Adding Dependencies",id:"adding-dependencies",children:[],level:3},{value:"Framework Integration",id:"framework-integration",children:[],level:3}],level:2},{value:"More Step-by-Step Guides",id:"more-step-by-step-guides",children:[],level:2},{value:"Next Steps and Useful Resources",id:"next-steps-and-useful-resources",children:[],level:2}],g={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{mdxType:"MvnBadge"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"To get started with the SAP Cloud SDK for Java you can either create a new project or integrate the SAP Cloud SDK into your existing one.\nYou will need an installation of Java and Maven."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Java version compatibility")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The SAP Cloud SDK itself is compatible with Java 8 and 11.\nOther Java versions may work as well depending on your setup but are not yet tested by us.\nNote that the SAP Business Technology Platform Cloud Foundry environment only supports Java 8 out of the box but can be configured to also run with Java 11.\nSAP Business Technology Platform Neo only supports Java 8."))),(0,o.kt)("p",null,"To start with a clean, new project you can select ",(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=com.sap.cloud.sdk.archetypes"},"one of our archetypes")," and build upon it.\nAlternatively, you can follow ",(0,o.kt)("a",{parentName:"p",href:"#integrate-the-cloud-sdk-for-java-into-your-project"},"these instructions")," to integrate the SAP Cloud SDK into your existing setup."),(0,o.kt)("h2",{id:"generating-a-project-from-a-maven-archetype"},"Generating a Project from a Maven Archetype"),(0,o.kt)("p",null,"The SAP Cloud SDK provides archetypes based on ",(0,o.kt)("a",{parentName:"p",href:"https://spring.io/"},"Spring")," and ",(0,o.kt)("a",{parentName:"p",href:"https://tomee.apache.org/"},"TomEE"),", so select whatever suits you best."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The mentioned archetypes work out-of-the-box for Cloud Foundry.\nFor Neo platform we provide an archetype ",(0,o.kt)("inlineCode",{parentName:"p"},"scp-neo-javaee7")," for only servlet based projects."))),(0,o.kt)("p",null,"Run:"),(0,o.kt)(l.Z,{groupId:"frameworks",defaultValue:"spring",values:[{label:"Spring",value:"spring"},{label:"TomEE",value:"tomee"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"spring",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mvn archetype:generate "-DarchetypeGroupId=com.sap.cloud.sdk.archetypes" \\\n    "-DarchetypeArtifactId=scp-cf-spring" \\\n    "-DarchetypeVersion=RELEASE"\n'))),(0,o.kt)(s.Z,{value:"tomee",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mvn archetype:generate "-DarchetypeGroupId=com.sap.cloud.sdk.archetypes" \\\n    "-DarchetypeArtifactId=scp-cf-tomee" \\\n    "-DarchetypeVersion=RELEASE"\n')))),(0,o.kt)("p",null,"Maven will ask you to provide the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"groupId")," - usually serves as your organization identifier, i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"foo.bar.cloud.app")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"artifactId")," - it's your application's name, i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"mydreamapp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"version")," - we recommend keeping ",(0,o.kt)("inlineCode",{parentName:"li"},"1.0-SNAPSHOT")," if you're just starting"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"package")," - by default this equals to ",(0,o.kt)("inlineCode",{parentName:"li"},"groupId"),". Change it only if you know what you're doing")),(0,o.kt)("p",null,"After providing all the interactive values to the CLI it will generate your first SAP Cloud SDK based application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[INFO] Scanning for projects...\n[INFO]\n[INFO] ------------------< org.apache.maven:standalone-pom >-------------------\n[INFO] Building Maven Stub Project (No POM) 1\n[INFO] --------------------------------[ pom ]---------------------------------\n[INFO]\n[INFO] >>> maven-archetype-plugin:3.1.2:generate (default-cli) > generate-sources @ standalone-pom >>>\n[INFO]\n[INFO] <<< maven-archetype-plugin:3.1.2:generate (default-cli) < generate-sources @ standalone-pom <<<\n[INFO]\n[INFO]\n[INFO] --- maven-archetype-plugin:3.1.2:generate (default-cli) @ standalone-pom ---\n[INFO] Generating project in Interactive mode\n[INFO] ....\n[INFO] ....\nDefine value for property 'groupId': foo.bar.cloud.app\nDefine value for property 'artifactId' (should match expression '[^_]+'): mydreamapp\n[INFO] Using property: artifactId = mydreamapp\nDefine value for property 'version' 1.0-SNAPSHOT: :\nDefine value for property 'package' foo.bar.cloud.app: :\n[INFO] Using property: gitignore = .gitignore\n[INFO] Using property: skipUsageAnalytics = false\nConfirm properties configuration:\ngroupId: foo.bar.cloud.app\nartifactId: mydreamapp\nartifactId: mydreamapp\nversion: 1.0-SNAPSHOT\npackage: foo.bar.cloud.app\ngitignore: .gitignore\nskipUsageAnalytics: false\n Y: :\n[INFO] ----------------------------------------------------------------------------\n[INFO] Using following parameters for creating project from Archetype: scp-cf-tomee:RELEASE\n[INFO] ----------------------------------------------------------------------------\n[INFO] Parameter: groupId, Value: foo.bar.cloud.app\n[INFO] Parameter: artifactId, Value: mydreamapp\n[INFO] Parameter: version, Value: 1.0-SNAPSHOT\n[INFO] Parameter: package, Value: foo.bar.cloud.app\n[INFO] Parameter: packageInPathFormat, Value: foo/bar/cloud/app\n[INFO] Parameter: package, Value: foo.bar.cloud.app\n[INFO] Parameter: version, Value: 1.0-SNAPSHOT\n[INFO] Parameter: groupId, Value: foo.bar.cloud.app\n[INFO] Parameter: skipUsageAnalytics, Value: false\n[INFO] Parameter: gitignore, Value: .gitignore\n[INFO] Parameter: artifactId, Value: mydreamapp\n[INFO] Project created from Archetype in dir: /home/i531196/dev/temp/mydreamapp\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time:  02:28 min\n[INFO] Finished at: 2020-04-19T19:25:33+02:00\n[INFO] ------------------------------------------------------------------------\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulations! You've just set up a brand-new application with the SAP Cloud SDK for Java.")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To change the Java version modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"<java.version>")," property in the root ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml"),"."))),(0,o.kt)("h2",{id:"integrate-the-sap-cloud-sdk-for-java-into-your-project"},"Integrate the SAP Cloud SDK for Java Into Your Project"),(0,o.kt)("h3",{id:"adding-dependencies"},"Adding Dependencies"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The SAP Cloud SDK ",(0,o.kt)("a",{parentName:"p",href:"/docs/related-projects/cloud-application-model"},"integrates with CAP projects"),"!\nFollow the steps below or check out the dedicated ",(0,o.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cloudsdk-integrate-cap.html"},"tutorial on SAP Developers"),"."))),(0,o.kt)("p",null,"To get started with an existing project include the ",(0,o.kt)("em",{parentName:"p"},"SAP Cloud SDK BOM")," in the ",(0,o.kt)("em",{parentName:"p"},"dependency management")," section of your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>use-latest-version-here</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n")),(0,o.kt)("p",null,"If your application is running on ",(0,o.kt)("strong",{parentName:"p"},"SAP Business Technology Platform")," please add the appropriate dependency:"),(0,o.kt)(l.Z,{groupId:"btp",defaultValue:"cf",values:[{label:"Cloud Foundry",value:"cf"},{label:"Neo",value:"neo"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"cf",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.sap.cloud.sdk.cloudplatform</groupId>\n    <artifactId>scp-cf</artifactId>\n</dependency>\n"))),(0,o.kt)(s.Z,{value:"neo",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.sap.cloud.sdk.cloudplatform</groupId>\n    <artifactId>scp-neo</artifactId>\n</dependency>\n")))),(0,o.kt)("p",null,"If you want to connect to an ",(0,o.kt)("strong",{parentName:"p"},"SAP S/4HANA")," system via the ",(0,o.kt)("strong",{parentName:"p"},"OData")," protocol, you should also add a dependency to the client libraries of the SAP Cloud SDK.\nThe dependencies differ with respect to the type of ",(0,o.kt)("strong",{parentName:"p"},"SAP S/4HANA")," system(",(0,o.kt)("a",{parentName:"p",href:"https://api.sap.com/package/SAPS4HANACloud?section=Artifacts"},(0,o.kt)("strong",{parentName:"a"},"SAP S/4HANA Cloud"))," or ",(0,o.kt)("a",{parentName:"p",href:"https://api.sap.com/package/S4HANAOPAPI?section=Artifacts"},(0,o.kt)("strong",{parentName:"a"},"SAP S/4HANA On-premise 2020")),"):"),(0,o.kt)(l.Z,{groupId:"s4",defaultValue:"s4hc",values:[{label:"SAP S/4HANA Cloud",value:"s4hc"},{label:"SAP S/4HANA On-premise 2020",value:"s4op"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"s4hc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.sap.cloud.sdk.s4hana</groupId>\n    <artifactId>s4hana-all</artifactId>\n</dependency>\n"))),(0,o.kt)(s.Z,{value:"s4op",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.sap.cloud.sdk.s4hana</groupId>\n    <artifactId>s4hana-api-odata-onpremise-2020</artifactId>\n</dependency>\n<dependency>\n    <groupId>com.sap.cloud.sdk.s4hana</groupId>\n    <artifactId>s4hana-api-odata-v4-onpremise-2020</artifactId>\n</dependency>\n<dependency>\n    <groupId>com.sap.cloud.sdk.s4hana</groupId>\n    <artifactId>s4hana-connectivity</artifactId>\n</dependency>\n<dependency>\n    <groupId>com.sap.cloud.sdk.s4hana</groupId>\n    <artifactId>s4hana-core</artifactId>\n</dependency>\n")))),(0,o.kt)("p",null,"In case you have a ",(0,o.kt)("strong",{parentName:"p"},"CAP application")," which uses ",(0,o.kt)("strong",{parentName:"p"},"multitenancy")," features and/or a ",(0,o.kt)("strong",{parentName:"p"},"protected backend")," your service will need the following dependency:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.sap.cds</groupId>\n  <artifactId>cds-integration-cloud-sdk</artifactId>\n</dependency>\n")),(0,o.kt)("p",null,"We also recommend that you include the following plugin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>com.sap.cloud.sdk.plugins</groupId>\n    <artifactId>usage-analytics-maven-plugin</artifactId>\n    <version>use-latest-version-here</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>usage-analytics</goal>\n            </goals>\n            <configuration>\n                <skipUsageAnalytics>false</skipUsageAnalytics>\n                <generateSalt>true</generateSalt>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),(0,o.kt)("p",null,"It sends ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://blogs.sap.com/2018/10/23/usage-analytics-s4sdk/"},"anonymized usage data"))," such as the SAP Cloud SDK version used and helps us with improving the SAP Cloud SDK.\nFurthermore, the plugin is capable of generating a report with useful information about the project setup.\nInvoking ",(0,o.kt)("inlineCode",{parentName:"p"},"diagnosis-report")," will print out the SAP Cloud SDK modules used and their version but also other information like the Java and Maven version.\nThis is helpful when you are facing an issue and are reaching out to us for help."),(0,o.kt)("h3",{id:"framework-integration"},"Framework Integration"),(0,o.kt)("p",null,"In general, the SAP Cloud SDK for Java integrates natively into the ",(0,o.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-boot"},"Spring Boot")," and ",(0,o.kt)("a",{parentName:"p",href:"https://tomee.apache.org/"},"TomEE")," frameworks."),(0,o.kt)("p",null,"In particular the ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context"},"SAP Cloud SDK provides listeners")," that can extract tenant and principal information from an incoming request.\nTo ensure these listeners are present, please configure your project accordingly."),(0,o.kt)(l.Z,{groupId:"frameworks",defaultValue:"spring",values:[{label:"Spring",value:"spring"},{label:"TomEE",value:"tomee"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"spring",mdxType:"TabItem"},(0,o.kt)("p",null,"For a Spring based project please ensure that the application is annotated to scan for components of the SAP Cloud SDK:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@ComponentScan({"com.sap.cloud.sdk", "your.own.package"})\n@ServletComponentScan({"com.sap.cloud.sdk", "your.own.package"})\n')),(0,o.kt)("p",null,"Check the logs during application startup to ensure the listeners got registered.\nAlso, please check ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.sap.cloud.sdk/sdk-bom/latest"},"the Spring version")," declared in the SAP Cloud SDK BOM doesn't clash with your version of Spring."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Spring Support for Cloud Foundry")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For Spring based projects we provide out-of-the-box support only on Cloud Foundry with archetype ",(0,o.kt)("inlineCode",{parentName:"p"},"scp-cf-spring"),".")))),(0,o.kt)(s.Z,{value:"tomee",mdxType:"TabItem"},(0,o.kt)("p",null,"For a TomEE based project, the filters should be registered automatically.\nThey are part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"servlet")," module which comes into the dependency tree through ",(0,o.kt)("inlineCode",{parentName:"p"},"scp-cf")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"scp-neo")," automatically.\nCheck the logs during application startup to ensure the listeners got registered."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"SAP Cloud SDK Modules Bill-of-Material")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"By default, the SAP Cloud SDK archetypes reference the SAP Cloud SDK Bill-of-Material ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk-bom"),", which manages dependency versions for all SAP Cloud SDK modules and transitive dependencies.\nIf you face dependency conflicts, you can instead try using the SAP Cloud SDK Modules Bill-of-Material ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk-modules-bom")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencyManagement")," section of your Maven POM file."))),(0,o.kt)("h2",{id:"more-step-by-step-guides"},"More Step-by-Step Guides"),(0,o.kt)("p",null,"If you want to continue learning by example check out our ",(0,o.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorial-navigator.html?tag=products:technology-platform/sap-cloud-sdk/sap-cloud-sdk&tag=topic:java"},"tutorials for SAP Cloud SDK for Java"),"."),(0,o.kt)("h2",{id:"next-steps-and-useful-resources"},"Next Steps and Useful Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"guides/recommended-ide"},"Configure you IDE")),(0,o.kt)("li",{parentName:"ul"},"Get and configure the ",(0,o.kt)("a",{parentName:"li",href:"guides/cf-cli"},"Cloud Foundry CLI")),(0,o.kt)("li",{parentName:"ul"},"Check our latest ",(0,o.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/java/release-notes-sap-cloud-sdk-for-java"},"release notes")),(0,o.kt)("li",{parentName:"ul"},"Welcome to our ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/SAP/cloud-sdk/issues/new/choose"},"support")," if you have questions or experiencing any issues")))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4382],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4317:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={title:"Develop your App for Kubernetes with SAP Gardener and Java SDK",sidebar_label:"Kubernetes with SAP Gardener",description:"Learn how to develop with SAP Cloud SDK for Java for Kubernetes environment backed by SAP Gardener",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","kubernetes","java","k8s","gardener"]},l=void 0,p={unversionedId:"java/environments/sap-btp-kubernetes-environment-with-sap-gardener",id:"java/environments/sap-btp-kubernetes-environment-with-sap-gardener",isDocsHomePage:!1,title:"Develop your App for Kubernetes with SAP Gardener and Java SDK",description:"Learn how to develop with SAP Cloud SDK for Java for Kubernetes environment backed by SAP Gardener",source:"@site/docs/java/environments/sap-btp-kubernetes-environment-with-sap-gardener.mdx",sourceDirName:"java/environments",slug:"/java/environments/sap-btp-kubernetes-environment-with-sap-gardener",permalink:"/cloud-sdk/docs/java/environments/sap-btp-kubernetes-environment-with-sap-gardener",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/environments/sap-btp-kubernetes-environment-with-sap-gardener.mdx",tags:[],version:"current",lastUpdatedBy:"Matthias Kuhr",lastUpdatedAt:1637403168,formattedLastUpdatedAt:"11/20/2021",frontMatter:{title:"Develop your App for Kubernetes with SAP Gardener and Java SDK",sidebar_label:"Kubernetes with SAP Gardener",description:"Learn how to develop with SAP Cloud SDK for Java for Kubernetes environment backed by SAP Gardener",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","kubernetes","java","k8s","gardener"]},sidebar:"someSidebar",previous:{title:"SAP BTP Cloud Foundry",permalink:"/cloud-sdk/docs/java/environments/sap-btp-cloud-foundry-environment"},next:{title:"SAP Kyma",permalink:"/cloud-sdk/docs/java/environments/sap-btp-kyma-environment"}},c=[{value:"SAP Cloud SDK Features Supported on SAP Gardener",id:"sap-cloud-sdk-features-supported-on-sap-gardener",children:[],level:2},{value:"Getting Started with the SAP Cloud SDK on Gardener",id:"getting-started-with-the-sap-cloud-sdk-on-gardener",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Containerize the Application",id:"containerize-the-application",children:[],level:3},{value:"Create a Kubernetes Deployment",id:"create-a-kubernetes-deployment",children:[],level:3},{value:"Create an Ingress",id:"create-an-ingress",children:[],level:3},{value:"Access Your Application",id:"access-your-application",children:[],level:3},{value:"Bind SAP BTP Services to the Application",id:"bind-sap-btp-services-to-the-application",children:[{value:"Bind the Destination Service",id:"bind-the-destination-service",children:[],level:4},{value:"Bind the Identity and Authentication Service",id:"bind-the-identity-and-authentication-service",children:[],level:4}],level:3}],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://gardener.cloud/"},"SAP Gardener")," is a managed Kubernetes service by SAP developed as an Open Source project.\nIt helps create and manage multiple Kubernetes clusters with less effort by abstracting environment specifics to deliver the same homogeneous Kubernetes-native DevOps experience everywhere."),(0,r.kt)("p",null,"The SAP Cloud SDK for Java supports SAP Gardener-based Kubernetes clusters out of the box."),(0,r.kt)("h2",{id:"sap-cloud-sdk-features-supported-on-sap-gardener"},"SAP Cloud SDK Features Supported on SAP Gardener"),(0,r.kt)("p",null,"Find below the list of features we currently support:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 Consume SAP BTP services like Destination, Connectivity, IAS, XSUAA, and others"),(0,r.kt)("li",{parentName:"ul"},"\u2705 Multitenancy"),(0,r.kt)("li",{parentName:"ul"},"\u2705 Resilience & Caching"),(0,r.kt)("li",{parentName:"ul"},"\u2705 Connect to and consume services from SAP S/4HANA Cloud"),(0,r.kt)("li",{parentName:"ul"},"\u274c Connect to and consume services from SAP S/4HANA On-Premise"),(0,r.kt)("li",{parentName:"ul"},"\u2705 Seamless use of typed clients provided by the SAP Cloud SDK")),(0,r.kt)("h2",{id:"getting-started-with-the-sap-cloud-sdk-on-gardener"},"Getting Started with the SAP Cloud SDK on Gardener"),(0,r.kt)("p",null,"This detailed guide will help get your SAP Cloud SDK Java application up and running in the SAP Gardener-based Kubernetes cluster.\nYou can also use this guide to migrate your existing application to Kubernetes."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For additional information on more deployment options you can also check out the ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/cloud-sdk/docs/js/guides/migrate-sdk-application-from-btp-cf-to-kubernetes#configure-tls-and-obtain-a-domain-in-sap-gardener"},"guide for JavaScript"),"."))),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To follow this guide you will need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://gardener.cloud/"},"Gardener")," managed cluster"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SAP/sap-btp-service-operator/"},"SAP BTP Service Operator")," installed in the Cluster"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")," and a publicly reachable Docker repository"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-boot"},"Spring Boot")," Application using the SAP Cloud SDK")),(0,r.kt)("p",null,"Check out the details below in case you are uncertain about any of the prerequisites."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Gardener Cluster"),(0,r.kt)("p",null,"This guide assumes you have created a cluster via Gardener dashboard, have ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"Kubernetes CLI")," installed on your local machine and have it set up for cluster access."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl cluster-info")," should print out your cluster endpoints."),(0,r.kt)("p",{parentName:"div"},"In case you haven't set this up you can do so by downloading a ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," from your Gardener dashboard.\nYou can read more about accessing clusters using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," on the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"Kubernetes documentation")))),(0,r.kt)("p",null,"We also recommend to have an Ingress set up that exposes the application to the internet.\nYou can read more about configuring an Ingress on the ",(0,r.kt)("a",{parentName:"p",href:"https://gardener.cloud/docs/guides/applications/service-access/#loadbalancer-vs-ingress"},"Gardener documentation"),".")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"SAP BTP Service Operator"),(0,r.kt)("p",null,"This guide assumes you have the ",(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/09cc82baadc542a688176dce601398de/Cloud/en-US/b5a35bfa87b5444080e6e6e6d361fa20.html"},"SAP BTP Service Operator")," installed in your cluster.\nThe operator is used to create and bind service instances.\nThe same can also be achieved via the ",(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/09cc82baadc542a688176dce601398de/Cloud/en-US/20195bf3b6e64189966e08f669c275e1.html"},"Service Catalog"),".\nHowever, this guide will focus on the Service Operator usage."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In case you don't have it installed please follow the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP/sap-btp-service-operator#sap-business-technology-platform-sap-btp-service-operator-for-kubernetes"},"documentation")," to install it.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Docker"),(0,r.kt)("p",null,"This guide assumes you have ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," installed on your local machine."),(0,r.kt)("p",null,"Furthermore, you need a ",(0,r.kt)("strong",{parentName:"p"},"Docker repository")," where you can store images.\nThe repository needs to be publicly accessible in order for the cluster to access and download the Docker image we are going to create."),(0,r.kt)("p",null,"In case you don't have such a repository yet we recommend either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/"},"Docker Hub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://common.repositories.cloud.sap/ui/"},"Artifactory DMZ")," (for SAP internal developers)")),(0,r.kt)("p",null,"Access to images in a repository may be limited to authenticated and/or authorized users, depending on your configuration."),(0,r.kt)("p",null,"Make sure you are logged in to your repository on your local machine by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker login (your-repo) --username=(your-username)\n")),(0,r.kt)("p",null,"And check your configuration which is usually located under ",(0,r.kt)("inlineCode",{parentName:"p"},"(your-home-directory)/.docker/config.json"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In case AuthN/AuthZ is required to download images make sure you have a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/#create-a-secret-by-providing-credentials-on-the-command-line"},"secret configured in your cluster"),":"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret docker-registry (name-of-the-secret) --docker-username=(username) --docker-password=(API-token) --docker-server=(your-repo)\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Application using the SAP Cloud SDK"),(0,r.kt)("p",null,"If you don't have an application already you can comfortably ",(0,r.kt)("a",{parentName:"p",href:"../getting-started"},"create one from our archetypes"),".")),(0,r.kt)("h3",{id:"containerize-the-application"},"Containerize the Application"),(0,r.kt)("p",null,"To run on Kubernetes the application needs to be shipped in a container.\nFor this guide we will be using Docker."),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in the project root directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:"{2}","{2}":!0},'FROM openjdk:8-jdk-alpine\nARG JAR_FILE=application/target/*.jar\nCOPY ${JAR_FILE} app.jar\nENTRYPOINT ["java","-jar","/app.jar"]\nEXPOSE 8080\n')),(0,r.kt)("p",null,"If needed, update the ",(0,r.kt)("inlineCode",{parentName:"p"},"JAR_FILE")," to point to your JAR file."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can find more information on how to containerize Spring Boot applications in ",(0,r.kt)("a",{parentName:"p",href:"https://spring.io/guides/gs/spring-boot-docker/"},"this guide")," (in particular, check the ",(0,r.kt)("em",{parentName:"p"},"Containerize It")," section)."))),(0,r.kt)("p",null,"Compile and push the image by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t <your-repo>/<your-image-name> .\ndocker push <your-repo>/<your-image-name>\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In case you are facing authorization issues when pushing to your repository refer to the dedicated section under ",(0,r.kt)("a",{parentName:"p",href:"#prerequisites"},"Prerequisites"),"."))),(0,r.kt)("h3",{id:"create-a-kubernetes-deployment"},"Create a Kubernetes Deployment"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new YAML file describing the Kubernetes deployment:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="deployment.yml" {18,32}',title:'"deployment.yml"',"{18,32}":!0},"---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-app-deployment\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: my-app\n  template:\n    metadata:\n      labels:\n        app: my-app\n    spec:\n      containers:\n        # Configure the docker image you just pushed to your repository here\n        - image: <your-repo>/<your-image>:latest\n          name: my-app\n          imagePullPolicy: Always\n          resources:\n            requests:\n              memory: '1Gi'\n              cpu: '500m'\n            limits:\n              memory: '1.5Gi'\n              cpu: '750m'\n          # Volume mounts needed for injecting BTP service credentials\n          volumeMounts:\n      imagePullSecrets:\n        # In case your repository requires a login, reference your secret here\n        - name: <your-secret-for-docker-login>\n      # Volumes containing BTP serice credentials from secrets\n      volumes:\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app: my-app\n  name: my-app\n  namespace: default\nspec:\n  type: NodePort\n  ports:\n    - port: 8080\n  selector:\n    app: my-app\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the configuration via ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply -f deployment.yml"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Monitor the status of the deployment by running: ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get deployment my-app-deployment"),"."))),(0,r.kt)("p",null,"Eventually, you should see an output similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl get deployment my-app-deployment\n\nNAME                READY   UP-TO-DATE   AVAILABLE   AGE\nmy-app-deployment   1/1     1            1           15s\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In case something went wrong use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl describe")," together with ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pod")," to get more information about the status of your application."))),(0,r.kt)("h3",{id:"create-an-ingress"},"Create an Ingress"),(0,r.kt)("p",null,"To make your application available from outside the cluster we will create an Ingress."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In case you already have an Ingress configured in your cluster only add the new ",(0,r.kt)("inlineCode",{parentName:"p"},"rule")," for your new applications."),(0,r.kt)("p",{parentName:"div"},"You can read more about configuring an Ingress on the ",(0,r.kt)("a",{parentName:"p",href:"https://gardener.cloud/docs/guides/applications/service-access/#loadbalancer-vs-ingress"},"Gardener documentation"),"."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new YAML file containing the following Ingress configuration:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="ingress.yml" {12-13,16}',title:'"ingress.yml"',"{12-13,16}":!0},'---\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: ingress-router\n  namespace: default\n  annotations:\n  # cert.gardener.cloud/purpose: managed\nspec:\n  tls:\n    - hosts:\n      # - "<your-cluster-host>"\n      # - "*.ingress.<your-cluster-host>"\n    # secretName: secret-tls\n  rules:\n    - host: \'my-app.ingress.<your-cluster-host>\'\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: my-app\n                port:\n                  number: 8080\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the configuration via ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply -f ingress.yml"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify the Ingress is up and running: ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl describe ingress ingress-router")))),(0,r.kt)("p",null,"You should see an entry with the path ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," pointing to the backend ",(0,r.kt)("inlineCode",{parentName:"p"},"my-app"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In case something went wrong and you are struggling to configure the Ingress you can also come back and set it up later.\nThe Ingress is a convenient way to access your application.\nIt is not strictly required for the rest of this guide."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Recommended: Configure TLS for your Ingress"),(0,r.kt)("p",null,"Enable the NGINX Ingress add-on in your Gardener dashboard.\nThe process may take a few minutes.\nAfterwards, you should see a domain in the dashboard as well as a Kubernetes secret ",(0,r.kt)("inlineCode",{parentName:"p"},"secret-tls"),"."),(0,r.kt)("p",null,"Un-comment the 4 lines in the YAML above using the generated domain and secret.\nThen re-deploy the configuration as usual.\nYour cluster endpoint should now be trusted by your browser.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We highly recommended enabling TLS for your cluster endpoints.\nIt ensures your client (e.g. browser) can verify the cluster's identity."))),(0,r.kt)("h3",{id:"access-your-application"},"Access Your Application"),(0,r.kt)("p",null,"At this point take a moment to verify you can access your application.\nUse the host you have defined in your Ingress rule in a browser or other tool of your choice (e.g. Postman).\nIn case you started with an SAP Cloud SDK Archetype your should be greeted with a welcome page under the root path."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In case you skipped setting up an Ingress before you can use port forwarding to access your application."),(0,r.kt)("p",{parentName:"div"},"Identify the pod name of your application with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pods"),".\nThen enable port forwarding to it by running: ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl port-forward (your-pod-name) 8080:8080"),".\nWith that you should be able to access the application on your ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080")))),(0,r.kt)("h3",{id:"bind-sap-btp-services-to-the-application"},"Bind SAP BTP Services to the Application"),(0,r.kt)("p",null,"The SAP Business Technology Platform offers various services that can be used by applications.\nTo access services from a Kubernetes environment instances have to be created and bound to the application."),(0,r.kt)("p",null,"For this guide we'll assume we want to use two services:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Destination Service"),(0,r.kt)("li",{parentName:"ol"},"Identity and Authentication Service (IAS)")),(0,r.kt)("h4",{id:"bind-the-destination-service"},"Bind the Destination Service"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new YAML file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="destination-service.yaml"',title:'"destination-service.yaml"'},"---\napiVersion: services.cloud.sap.com/v1alpha1\nkind: ServiceInstance\nmetadata:\n  name: destination-service\nspec:\n  serviceOfferingName: destination\n  servicePlanName: lite\n  externalName: default-destination-service\n---\napiVersion: services.cloud.sap.com/v1alpha1\nkind: ServiceBinding\nmetadata:\n  name: my-destination-service-binding\nspec:\n  serviceInstanceName: destination-service\n  secretName: my-destination-service-secret\n  secretRootKey: my-destination-service-key\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the configuration via ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply -f destination-service.yml"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Monitor the status via ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl describe ServiceInstance destination-service"),".\nEventually this should automatically create a Kubernetes secret named ",(0,r.kt)("inlineCode",{parentName:"p"},"my-destination-service-secret"),".\nThis secret will contain the actual service binding information.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Mount the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-destination-service-secret")," secret into the file system of the application as follows:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the empty list of ",(0,r.kt)("inlineCode",{parentName:"p"},"volumes")," at the end of your ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment.yml"),".\nAdd a new volume, referencing the secret:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="volumes:"',title:'"volumes:"'},"- name: my-destination-service-binding-volume\n  secret:\n    secretName: my-destination-service-secret\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Mount this volume into the file system of your application.\nAdd it to the empty list of ",(0,r.kt)("inlineCode",{parentName:"p"},"volumeMounts")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"container")," section of your ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment.yml"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="volumeMounts:"',title:'"volumeMounts:"'},"- name: my-destination-service-binding-volume\n  mountPath: '/etc/secrets/sapcp/destination/my-destination-service'\n  readOnly: true\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the configuration via ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply -f deployment.yml"),"."))),(0,r.kt)("h4",{id:"bind-the-identity-and-authentication-service"},"Bind the Identity and Authentication Service"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new ",(0,r.kt)("inlineCode",{parentName:"li"},"identity-service.yaml")," file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="identity-service.yaml"',title:'"identity-service.yaml"'},"---\napiVersion: services.cloud.sap.com/v1alpha1\nkind: ServiceInstance\nmetadata:\n  name: my-identity-service\nspec:\n  serviceOfferingName: identity\n  servicePlanName: application\n  parameters:\n    # Allowed redirect URIs in case you want to use an approuter behind an ingress for user login\n    # oauth2-configuration:\n    #  redirect-uris:\n    #    - https://*.ingress.<your-cluster-host>/login/callback\n    consumed-services: []\n    xsuaa-cross-consumption: true\n    multi-tenant: true\n---\napiVersion: services.cloud.sap.com/v1alpha1\nkind: ServiceBinding\nmetadata:\n  name: my-identity-service-binding\nspec:\n  serviceInstanceName: my-identity-service\n  secretName: my-identity-service-secret\n  secretRootKey: my-identity-service-key\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Repeat the same steps 2-5 from the previous section, always replacing ",(0,r.kt)("inlineCode",{parentName:"li"},"destination")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"identity"),".")))}m.isMDXComponent=!0}}]);
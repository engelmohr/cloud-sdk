"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6397],{3905:function(e,n,a){a.d(n,{Zo:function(){return u},kt:function(){return m}});var t=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=t.createContext({}),p=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=p(e.components);return t.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,l=e.originalType,d=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,h=c["".concat(d,".").concat(m)]||c[m]||s[m]||l;return a?t.createElement(h,i(i({ref:n},u),{},{components:a})):t.createElement(h,i({ref:n},u))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=a.length,i=new Array(l);i[0]=c;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var p=2;p<l;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5827:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return r},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var t=a(7462),o=a(3366),l=(a(7294),a(3905)),i=["components"],r={id:"sap-cloud-sdk-linux-how-to",title:"Getting Started on Linux",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"SAP Cloud SDK on Linux",description:"Get up and started to build with SAP Cloud SDK on Linux",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},d=void 0,p={unversionedId:"java/guides/sap-cloud-sdk-linux-how-to",id:"java/guides/sap-cloud-sdk-linux-how-to",isDocsHomePage:!1,title:"Getting Started on Linux",description:"Get up and started to build with SAP Cloud SDK on Linux",source:"@site/docs/java/guides/linux-how-to.mdx",sourceDirName:"java/guides",slug:"/java/guides/sap-cloud-sdk-linux-how-to",permalink:"/cloud-sdk/docs/java/guides/sap-cloud-sdk-linux-how-to",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/guides/linux-how-to.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1636144163,formattedLastUpdatedAt:"11/5/2021",frontMatter:{id:"sap-cloud-sdk-linux-how-to",title:"Getting Started on Linux",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"SAP Cloud SDK on Linux",description:"Get up and started to build with SAP Cloud SDK on Linux",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"someSidebar",previous:{title:"Tutorials Overview",permalink:"/cloud-sdk/docs/java/guides/tutorial-overview-sdk-java"},next:{title:"Integration With CAP",permalink:"/cloud-sdk/docs/java/guides/cap-sdk-integration"}},u=[{value:"Get SAP Cloud SDK Development Environment for Java on Linux",id:"get-sap-cloud-sdk-development-environment-for-java-on-linux",children:[],level:2},{value:"Required Knowledge",id:"required-knowledge",children:[],level:2},{value:"Let&#39;s Install Dependencies",id:"lets-install-dependencies",children:[{value:"Installing the Java Development Kit and Maven",id:"installing-the-java-development-kit-and-maven",children:[],level:3},{value:"Use Maven To Build and Deploy Your App",id:"use-maven-to-build-and-deploy-your-app",children:[],level:3},{value:"Cloud Foundry Command Line Interface",id:"cloud-foundry-command-line-interface",children:[],level:3},{value:"Installing IntelliJ Idea IDE",id:"installing-intellij-idea-ide",children:[],level:3}],level:2},{value:"Initialize and Build Your App",id:"initialize-and-build-your-app",children:[{value:"To Initialize Your SAP Cloud SDK App From the Maven Archetype",id:"to-initialize-your-sap-cloud-sdk-app-from-the-maven-archetype",children:[],level:3},{value:"Building Your App",id:"building-your-app",children:[],level:3},{value:"Bind your Command-Line Interface to an API Endpoint",id:"bind-your-command-line-interface-to-an-api-endpoint",children:[],level:3},{value:"Deploying Your App",id:"deploying-your-app",children:[],level:3}],level:2}],s={toc:u};function c(e){var n=e.components,a=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"get-sap-cloud-sdk-development-environment-for-java-on-linux"},"Get SAP Cloud SDK Development Environment for Java on Linux"),(0,l.kt)("p",null,"This tutorial will guide you through getting your SAP Cloud SDK development environment up and running on Linux.\nAll the steps were verified on Ubuntu 18.04 and should comply with other Debian-based distributions."),(0,l.kt)("h2",{id:"required-knowledge"},"Required Knowledge"),(0,l.kt)("p",null,"No initial knowledge is required."),(0,l.kt)("h2",{id:"lets-install-dependencies"},"Let's Install Dependencies"),(0,l.kt)("h3",{id:"installing-the-java-development-kit-and-maven"},"Installing the Java Development Kit and Maven"),(0,l.kt)("p",null,"SAP Cloud SDK supports Java 8 and Java 11."),(0,l.kt)("p",null,"I'll base this example on Java 8."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install openjdk-8-jdk\n")),(0,l.kt)("p",null,"Updating alternatives to make sure the right version of Java is used."),(0,l.kt)("p",null,"Your distribution might have a different version of Java installed by default.\nYou can check your Java version by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"java -version\n")),(0,l.kt)("p",null,"As you can see below, my laptop has Java 11 as default."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"openjdk 11.0.5 2019-10-15\nOpenJDK Runtime Environment (build 11.0.5+10-post-Ubuntu-0ubuntu1.1)\nOpenJDK 64-Bit Server VM (build 11.0.5+10-post-Ubuntu-0ubuntu1.1, mixed mode)\n")),(0,l.kt)("p",null,"Check what Java versions you have on your machine with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"update-java-alternatives --list\n")),(0,l.kt)("p",null,"After installing OpenJDK 8 you should now have both Java 8 and Java 11."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"java-1.11.0-openjdk-amd64      1111       /usr/lib/jvm/java-1.11.0-openjdk-amd64\njava-1.8.0-openjdk-amd64       1081       /usr/lib/jvm/java-1.8.0-openjdk-amd64\n")),(0,l.kt)("p",null,"To switch between Java versions run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo update-alternatives --config java\n")),(0,l.kt)("p",null,"In my case, I have to press ",(0,l.kt)("strong",{parentName:"p"},"2")," to make Java 8 default."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Selection    Path                                            Priority   Status\n------------------------------------------------------------\n0            /usr/lib/jvm/java-11-openjdk-amd64/bin/java      1111      auto mode\n*1            /usr/lib/jvm/java-11-openjdk-amd64/bin/java      1111      manual mode\n2            /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java   1081      manual mode\nPress <enter> to keep the current choice[*], or type selection number:\n")),(0,l.kt)("p",null,"Check the Java version again.\nMind, the ",(0,l.kt)("inlineCode",{parentName:"p"},"version")," parameter has just one hyphen for Java 8 CLI."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"java -version\n")),(0,l.kt)("p",null,"You have now switched to Java 8."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'openjdk version "1.8.0_232"\nOpenJDK Runtime Environment (build 1.8.0_232-8u232-b09-0ubuntu1.1-b09)\nOpenJDK 64-Bit Server VM (build 25.232-b09, mixed mode)\n')),(0,l.kt)("h3",{id:"use-maven-to-build-and-deploy-your-app"},"Use ",(0,l.kt)("a",{parentName:"h3",href:"https://maven.apache.org/"},"Maven")," To Build and Deploy Your App"),(0,l.kt)("p",null,"Install ",(0,l.kt)("inlineCode",{parentName:"p"},"maven")," with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install maven\n")),(0,l.kt)("p",null,"To check if ",(0,l.kt)("inlineCode",{parentName:"p"},"maven")," is installed correctly run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mvn --version\n")),(0,l.kt)("p",null,"You'll see the maven version and build details."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Apache Maven 3.6.1\nMaven home: /usr/share/maven\nJava version: 1.8.0_232, vendor: Private Build, runtime: /usr/lib/jvm/java-8-openjdk-amd64/jre\nDefault locale: en_US, platform encoding: ANSI_X3.4-1968\nOS name: "linux", version: "5.3.0-26-generic", arch: "amd64", family: "unix"\n')),(0,l.kt)("p",null,"To find out more about Apache Maven, how to get it for your Linux distribution, and detailed tutorials ",(0,l.kt)("a",{parentName:"p",href:"https://maven.apache.org/"},"follow the official maven documentation"),"."),(0,l.kt)("h3",{id:"cloud-foundry-command-line-interface"},"Cloud Foundry Command Line Interface"),(0,l.kt)("p",null,"To deploy your app developed with SAP Cloud SDK to ",(0,l.kt)("a",{parentName:"p",href:"https://www.sap.com/products/cloud-platform.html"},"SAP Business Technology Platform")," you'll need the Cloud Foundry command-line interface (CLI).\nYou can download the latest release of the DEB package ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/cloudfoundry/cli/releases"},"from the official CF GitHub repository")," or follow ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/cloudfoundry/cli#installing-using-a-package-manager"},"instructions")," to install it with you package manager: ",(0,l.kt)("inlineCode",{parentName:"p"},"apt-get"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"yum")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"homebrew")," are supported."),(0,l.kt)("p",null,"After installing the CLI, you might need to reload your shell before it becomes available.\nTo check if it works run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cf\n")),(0,l.kt)("h3",{id:"installing-intellij-idea-ide"},"Installing IntelliJ Idea IDE"),(0,l.kt)("p",null,"For the best developer experience, we recommend getting the community version of ",(0,l.kt)("strong",{parentName:"p"},"IntelliJ Idea"),".\nDownload the archive from the ",(0,l.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/download/#section=linux"},"official site")," and follow installation instructions for your system."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Another supported IDE is ",(0,l.kt)("a",{parentName:"p",href:"https://www.eclipse.org/ide/"},"Eclipse"),"."))),(0,l.kt)("h2",{id:"initialize-and-build-your-app"},"Initialize and Build Your App"),(0,l.kt)("h3",{id:"to-initialize-your-sap-cloud-sdk-app-from-the-maven-archetype"},"To Initialize Your SAP Cloud SDK App From the Maven Archetype"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mvn archetype:generate -DarchetypeGroupId=com.sap.cloud.sdk.archetypes -DarchetypeArtifactId=scp-cf-tomee -DarchetypeVersion=RELEASE\n")),(0,l.kt)("p",null,"The snippet above will create a ",(0,l.kt)("inlineCode",{parentName:"p"},"TomEE")," app, you can also use archetype for Spring Boot."),(0,l.kt)("h3",{id:"building-your-app"},"Building Your App"),(0,l.kt)("p",null,"Change the directory to the root of the app you've just created."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd /<app-root-directory>\n")),(0,l.kt)("p",null,"To build your APP run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mvn clean package\n")),(0,l.kt)("p",null,"After a successful build, you'll find a ",(0,l.kt)("inlineCode",{parentName:"p"},"target")," folder within your app's root folder containing a ",(0,l.kt)("inlineCode",{parentName:"p"},"war")," file along with other build artifacts.\nThis ",(0,l.kt)("inlineCode",{parentName:"p"},"war")," file is a packaged version of your web-app that's going to be deployed in the SAP Cloud Foundry environment."),(0,l.kt)("h3",{id:"bind-your-command-line-interface-to-an-api-endpoint"},"Bind your Command-Line Interface to an API Endpoint"),(0,l.kt)("p",null,"Let's associate your Cloud Foundry(CF) CLI to your SAP account by providing an API endpoint and logging in with your account."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Select endpoint depending on your region:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Europe ",(0,l.kt)("a",{parentName:"li",href:"https://api.cf.eu10.hana.ondemand.com"},"https://api.cf.eu10.hana.ondemand.com")),(0,l.kt)("li",{parentName:"ul"},"US East: ",(0,l.kt)("a",{parentName:"li",href:"https://api.cf.us10.hana.ondemand.com"},"https://api.cf.us10.hana.ondemand.com")),(0,l.kt)("li",{parentName:"ul"},"US CENTRAL: ",(0,l.kt)("a",{parentName:"li",href:"https://api.cf.us20.hana.ondemand.com"},"https://api.cf.us20.hana.ondemand.com"))),(0,l.kt)("p",null,"To use a snippet for Europe run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"    cf api https://api.cf.eu10.hana.ondemand.com\n")),(0,l.kt)("p",null,"Provide your credentials for the SAP BTP by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cf login\n")),(0,l.kt)("h3",{id:"deploying-your-app"},"Deploying Your App"),(0,l.kt)("p",null,"To deploy your app run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cf push\n")),(0,l.kt)("p",null,"After a successful deployment, you'll see a status of just pushed app:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Waiting for app to start...\nname:                test-app\nrequested state:     started\nisolation segment:   trial\nroutes:              test-app-shy-hyena-st.cfapps.eu10.hana.ondemand.com\nlast uploaded:       Sun 12 Jan 14:29:02 CET 2020\nstack:               cflinuxfs3\nbuildpacks:          sap_java_buildpack\ntype:            web\ninstances:       1/1\nmemory usage:    1024M\nstart command:   JRE_HOME="META-INF/.sap_java_buildpack/sapjvm" JBP_CONFIG_SAPJVM_MEMORY_STACK_THREADS="250" JBP_CLASSPATH="" JBP_CONFIG_SAPJVM_MEMORY_CLASS_COUNT="" JAVA_HOME="META-INF/.sap_java_buildpack/sapjvm"\nJBP_CONFIG_SAPJVM_MEMORY_HEADROOM="0" CATALINA_HOME="META-INF/.sap_java_buildpack/tomee7" JAVA_OPTS=" -Djava.io.tmpdir=$TMPDIR -Dhttp.port=$PORT -Daccess.logging.enabled=false\n-Dlogback.configurationFile=file:META-INF/.sap_java_buildpack/tomee7/conf/logback.xml -DSAPJVM_EXTENSION_COMMAND_HANDLER=com.sap.xs2rt.dropletaddon.JvmExtensionCommandHandler\n-Djava.protocol.handler.pkgs=com.sap.xs.statistics.stream.handling.protocols -agentpath:/app/META-INF/.sap_java_buildpack/jvm_kill/jvmkill-1.12.0.RELEASE-trusty.so=printHeapHistogram=1 -Dsun.net.inetaddr.ttl=0\n-Dsun.net.inetaddr.negative.ttl=0" ./META-INF/.sap_java_buildpack/tomee7/bin/catalina.sh run\nstate     since                  cpu     memory         disk           details\n#0   running   2020-01-12T13:30:29Z   69.0%   446.2M of 1G   191.1M of 1G\n')),(0,l.kt)("p",null,"To verify your deployment take a ",(0,l.kt)("inlineCode",{parentName:"p"},"URL")," indicated in the ",(0,l.kt)("inlineCode",{parentName:"p"},"routes")," section from the deployment output above.\nPut it into your browser and add ",(0,l.kt)("inlineCode",{parentName:"p"},"/hello")," at the end.\nIt should look similar to: ",(0,l.kt)("inlineCode",{parentName:"p"},"https://test-app-shy-hyena-st.cfapps.eu10.hana.ondemand.com/hello"),"."))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6946],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(d,".").concat(h)]||u[h]||c[h]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4109:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],l={title:"Add the SAP Cloud SDK to Your Project",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Add the SAP Cloud SDK to Your Project",description:"This article shows how to add the SAP Cloud SDK to your project using the command-line interface.",keywords:["sap","cloud","sdk","cli","command","line","JavaScript","TypeScript"]},d=void 0,s={unversionedId:"js/features/cli/init",id:"js/features/cli/init",isDocsHomePage:!1,title:"Add the SAP Cloud SDK to Your Project",description:"This article shows how to add the SAP Cloud SDK to your project using the command-line interface.",source:"@site/docs/js/features/cli/init.mdx",sourceDirName:"js/features/cli",slug:"/js/features/cli/init",permalink:"/cloud-sdk/docs/js/features/cli/init",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/cli/init.mdx",tags:[],version:"current",lastUpdatedBy:"Christoph Schubert",lastUpdatedAt:1637746204,formattedLastUpdatedAt:"11/24/2021",frontMatter:{title:"Add the SAP Cloud SDK to Your Project",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Add the SAP Cloud SDK to Your Project",description:"This article shows how to add the SAP Cloud SDK to your project using the command-line interface.",keywords:["sap","cloud","sdk","cli","command","line","JavaScript","TypeScript"]},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/cloud-sdk/docs/js/features/cli/overview"},next:{title:"Deploy to SAP Business Technology Platform",permalink:"/cloud-sdk/docs/js/features/cli/package"}},p=[{value:"Add the SAP Cloud SDK to an Existing Project",id:"add-the-sap-cloud-sdk-to-an-existing-project",children:[{value:"Options",id:"options",children:[{value:"Project Directory",id:"project-directory",children:[],level:4},{value:"SAP Cloud Application Programming Model",id:"sap-cloud-application-programming-model",children:[],level:4},{value:"Frontend Scripts",id:"frontend-scripts",children:[],level:4},{value:"Force, Help, and Verbose",id:"force-help-and-verbose",children:[],level:4}],level:3},{value:"Step-by-Step",id:"step-by-step",children:[{value:"Enter Project Name",id:"enter-project-name",children:[],level:4},{value:"Enter the Command to Start Your Application",id:"enter-the-command-to-start-your-application",children:[],level:4},{value:"Do You Want to Provide Anonymous Usage Analytics to Help Us Improve the SAP Cloud SDK?",id:"do-you-want-to-provide-anonymous-usage-analytics-to-help-us-improve-the-sap-cloud-sdk",children:[],level:4}],level:3},{value:"Next Steps",id:"next-steps",children:[{value:"Make Sure That Your App Listens To <code>process.env.PORT</code>",id:"make-sure-that-your-app-listens-to-processenvport",children:[],level:4},{value:"Build Your App if Necessary",id:"build-your-app-if-necessary",children:[],level:4},{value:"Run <code>sap-cloud-sdk package</code>",id:"run-sap-cloud-sdk-package",children:[],level:4},{value:"Push to Cloud Foundry",id:"push-to-cloud-foundry",children:[],level:4}],level:3}],level:2},{value:"Set Up a New Project With the SAP Cloud SDK CLI",id:"set-up-a-new-project-with-the-sap-cloud-sdk-cli",children:[],level:2}],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"CLI is deprecated")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The SAP Cloud SDK CLI is deprecated.\nWe'll provide replacement for key value adds of the CLI like project scaffolding, etc."))),(0,i.kt)("p",null,"The SAP Cloud SDK CLI adds necessary dependencies and configurations to use the SAP Cloud SDK and deploy your app to SAP Business Technology Platform with one command.\nThis is possible for any existing project that uses ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),"."),(0,i.kt)("p",null,"If you are starting from scratch, the SAP Cloud SDK CLI can also generate a fully-loaded new project to get you started quickly.\nThis uses the CLI of our recommended backend framework ",(0,i.kt)("a",{parentName:"p",href:"https://nestjs.com"},"Nest")," and enhances it with the SAP Cloud SDK."),(0,i.kt)("h2",{id:"add-the-sap-cloud-sdk-to-an-existing-project"},"Add the SAP Cloud SDK to an Existing Project"),(0,i.kt)("p",null,"Do you want to add the SAP Cloud SDK to your existing Node.js application?"),(0,i.kt)("p",null,"Do you want to use the backend and testing frameworks you already know?"),(0,i.kt)("p",null,"If you answered yes to either question, you can use the SAP Cloud SDK CLI to add the SAP Cloud SDK and necessary configuration to your project.\nThe command-line tool will guide you step-by-step to create the right configuration for your project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd my-project\n\n$ sap-cloud-sdk init\nEnter project name (for use in manifest.yml) [my-project]:\nEnter the command to start your application: npm start\nDo you want to provide anonymous usage analytics to help us improve the SDK? (y|n): y\n  \u2714 Creating files\n  \u2714 Adding dependencies to package.json\n  \u2714 Installing dependencies\n  \u2714 Modifying `.gitignore`\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("h4",{id:"project-directory"},"Project Directory"),(0,i.kt)("p",null,"You can set the project directory via a flag or as a path parameter.\n",(0,i.kt)("strong",{parentName:"p"},"The default value is the working directory."),"\nIf the project directory is empty, the CLI will offer to create a new project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sap-cloud-sdk init PROJECTDIR\n\n$ sap-cloud-sdk init --projectDir=PROJECTDIR\n")),(0,i.kt)("h4",{id:"sap-cloud-application-programming-model"},"SAP Cloud Application Programming Model"),(0,i.kt)("p",null,"Add a ",(0,i.kt)("inlineCode",{parentName:"p"},"cds")," configuration and example data to follow the SAP Cloud Application Programming model.\n",(0,i.kt)("strong",{parentName:"p"},"By default, this configuration is not added.")),(0,i.kt)("p",null,"This can also be added with a separate command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Initialize the project with the SAP Cloud SDK and set up SAP CAP\n$ sap-cloud-sdk init --addCds\n# Set up SAP CAP without initializing\n$ sap-cloud-sdk add-cds\n")),(0,i.kt)("h4",{id:"frontend-scripts"},"Frontend Scripts"),(0,i.kt)("p",null,'Add frontend-related npm scripts which are executed by Project "Piper".\nThis is only needed if your project serves the frontend and you use Project "Piper" for your pipeline.\n',(0,i.kt)("strong",{parentName:"p"},"By default, this configuration is not added.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sap-cloud-sdk init --frontendScripts\n")),(0,i.kt)("h4",{id:"force-help-and-verbose"},"Force, Help, and Verbose"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--help")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"-h"),": Show help for the ",(0,i.kt)("inlineCode",{parentName:"li"},"init")," command."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--verbose")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"-v"),": Show more detailed output."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--force"),": Do not fail if a file or npm script already exists and overwrite it.")),(0,i.kt)("h3",{id:"step-by-step"},"Step-by-Step"),(0,i.kt)("h4",{id:"enter-project-name"},"Enter Project Name"),(0,i.kt)("p",null,"The project name is relevant for the Cloud Foundry repository.\nYour application will use this name to appear in the SAP Business Technology Platform Cockpit.\nBy default, it will suggest the name of the project folder."),(0,i.kt)("h4",{id:"enter-the-command-to-start-your-application"},"Enter the Command to Start Your Application"),(0,i.kt)("p",null,"When deploying to Cloud Foundry, it calls the entered command to start your application.\nThis can be any bash command.\nOften the command will be ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start"),"."),(0,i.kt)("p",null,"The SAP Cloud SDK CLI will add this command to the ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.yml"),".\nIf you don't know the command at this moment, you can adjust it manually afterward."),(0,i.kt)("h4",{id:"do-you-want-to-provide-anonymous-usage-analytics-to-help-us-improve-the-sap-cloud-sdk"},"Do You Want to Provide Anonymous Usage Analytics to Help Us Improve the SAP Cloud SDK?"),(0,i.kt)("p",null,"If you give your consent, the SAP Cloud SDK will collect the following data about your project:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"project pseudonym"),(0,i.kt)("li",{parentName:"ul"},"Node.js version"),(0,i.kt)("li",{parentName:"ul"},"npm version"),(0,i.kt)("li",{parentName:"ul"},"operating system information"),(0,i.kt)("li",{parentName:"ul"},"project dependencies"),(0,i.kt)("li",{parentName:"ul"},"whether TypeScript is used")),(0,i.kt)("p",null,"This helps us understand the ecosystem in which the SAP Cloud SDK is used and prioritize features accordingly.\nThe consent is stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"sap-cloud-sdk-analytics.json"),".\nTo withdraw your consent, set ",(0,i.kt)("inlineCode",{parentName:"p"},'"enabled": false')," or delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"sap-cloud-sdk-analytics.json")," file."),(0,i.kt)("p",null,"More information can be found on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-cli/blob/main/usage-analytics.md"},"GitHub"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sap-cloud-sdk init\n  [...]\n  \u2714 Creating files\n  \u2714 Adding dependencies to package.json\n  \u2714 Installing dependencies\n  \u2714 Modifying `.gitignore`\n\n+--------------------------------------------------------------+\n \u2705 Init finished successfully.\n\n \ud83d\ude80 Next steps:\n - Make sure that your app listens to `process.env.PORT`\n - Build your app if necessary\n - Run `sap-cloud-sdk package [--include INC][--exclude EXC]`\n - Push to Cloud Foundry (`cf push`)\n\n \ud83d\udd28 Consider setting up Jenkins to continuously build your app.\n Use `sap-cloud-sdk add-cx-server` to create the setup script.\n+--------------------------------------------------------------+\n")),(0,i.kt)("h3",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"After the initialization is finished, the CLI displays the necessary steps to deploy your application to Cloud Foundry."),(0,i.kt)("h4",{id:"make-sure-that-your-app-listens-to-processenvport"},"Make Sure That Your App Listens To ",(0,i.kt)("inlineCode",{parentName:"h4"},"process.env.PORT")),(0,i.kt)("p",null,"Your application may use a predefined listening port.\nYou can usually configure this in a central place like the ",(0,i.kt)("inlineCode",{parentName:"p"},"app.js")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"main.ts"),".\nIf you are using an express-based framework, look for the ",(0,i.kt)("inlineCode",{parentName:"p"},".listen()")," function."),(0,i.kt)("p",null,"According to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/buildpacks/node/node-tips.html"},"Cloud Foundry documentation")," your app needs to listen to the ",(0,i.kt)("inlineCode",{parentName:"p"},"PORT")," variable."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You must use the PORT environment variable to determine which port your app should listen on.\nTo also run your app locally, set the default port as 3000."),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},"  app.listen(process.env.PORT || 3000);\n"))),(0,i.kt)("h4",{id:"build-your-app-if-necessary"},"Build Your App if Necessary"),(0,i.kt)("p",null,"Before your application can be prepared for deployment, you may need to compile the code.\nThis is needed for any project that is built with TypeScript or Babel."),(0,i.kt)("p",null,"We recommend adding a build script in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),".\nYou can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ci-build")," script that is generated by the SAP Cloud SDK CLI as a placeholder.\nIf you use a ",(0,i.kt)("a",{parentName:"p",href:"https://sap.github.io/jenkins-library/"},'Project "Piper" pipeline'),", the generated configuration will automatically call the ",(0,i.kt)("inlineCode",{parentName:"p"},"ci-build")," script."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Productive Build")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Many project generators add build scripts automatically.\nIf there are multiple scripts, pay attention to use the productive build.\nOften this is done by adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"--prod")," flag (or removing ",(0,i.kt)("inlineCode",{parentName:"p"},"--dev"),")."))),(0,i.kt)("h4",{id:"run-sap-cloud-sdk-package"},"Run ",(0,i.kt)("inlineCode",{parentName:"h4"},"sap-cloud-sdk package")),(0,i.kt)("p",null,"Your repository will likely contain files that are not necessary to be uploaded when deploying.\nThe generated ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.yml")," defines the ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment")," folder as the path that will be uploaded when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"cf push"),".\nCalling ",(0,i.kt)("inlineCode",{parentName:"p"},"sap-cloud-sdk package")," will copy the needed files to the ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment")," folder.\nIf you want to include or exclude certain files, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--include")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--exclude")," flags.\nThese flags support ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Glob_(programming)"},"glob patterns"),"."),(0,i.kt)("p",null,"You can find more information in ",(0,i.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/cli/package"},"the article on this command"),"."),(0,i.kt)("h4",{id:"push-to-cloud-foundry"},"Push to Cloud Foundry"),(0,i.kt)("p",null,"Once your project is prepared, you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/cf-cli/install-go-cli.html"},"Cloud Foundry CLI")," to deploy your application.\nYou may need to log in to your Cloud Foundry account first."),(0,i.kt)("p",null,"Manual deployments via ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/devguide/push.html"},"cf push")," can be helpful in the beginning but are strongly discouraged for productive environments.\nThose deployments should be done by a CI/CD pipeline that ensures successful tests before deployment."),(0,i.kt)("h2",{id:"set-up-a-new-project-with-the-sap-cloud-sdk-cli"},"Set Up a New Project With the SAP Cloud SDK CLI"),(0,i.kt)("p",null,"If the target directory does not exist or does not contain a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", the CLI will ask you if you want to create a new project.\nThe new project will be based on the Nest CLI."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sap-cloud-sdk init example-project\nThe target directory (example-project) does not contain a `package.json.`\nShould a new `nest.js` project be initialized in the target directory? (y|n): y\n")),(0,i.kt)("p",null,"The generated project uses TypeScript as a language, npm as the package manager, Nest as the backend framework and Jest as a test framework.\nIt also includes the most current version of the SAP Cloud SDK as a dependency."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"But I would rather use JavaScript!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you prefer different tooling, we recommend you set up your project first and use the CLI to add the SAP Cloud SDK afterward."))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5993],{3905:function(e,a,n){n.d(a,{Zo:function(){return h},kt:function(){return u}});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),s=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):c(c({},a),e)),n},h=function(e){var a=s(e.components);return t.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return n?t.createElement(m,c(c({ref:a},h),{},{components:n})):t.createElement(m,c({ref:a},h))}));function u(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,c=new Array(r);c[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<r;s++)c[s]=n[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2087:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return h},default:function(){return d}});var t=n(7462),i=n(3366),r=(n(7294),n(3905)),c=["components"],o={id:"caching",title:"Caching Capabilities",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Caching",description:"How to use SAP Cloud SDK for Java to introduce caching into your application.",keywords:["sap","cloud","sdk","caching","cache","JCache","CacheConfiguration"]},l=void 0,s={unversionedId:"java/features/resilience/caching",id:"java/features/resilience/caching",isDocsHomePage:!1,title:"Caching Capabilities",description:"How to use SAP Cloud SDK for Java to introduce caching into your application.",source:"@site/docs/java/features/resilience/caching.mdx",sourceDirName:"java/features/resilience",slug:"/java/features/resilience/caching",permalink:"/cloud-sdk/docs/java/features/resilience/caching",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/resilience/caching.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1635943953,formattedLastUpdatedAt:"11/3/2021",frontMatter:{id:"caching",title:"Caching Capabilities",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Caching",description:"How to use SAP Cloud SDK for Java to introduce caching into your application.",keywords:["sap","cloud","sdk","caching","cache","JCache","CacheConfiguration"]},sidebar:"someSidebar",previous:{title:"Resilience",permalink:"/cloud-sdk/docs/java/features/resilience/resilience"},next:{title:"Overview",permalink:"/cloud-sdk/docs/java/environments/sap-btp-environments-overview"}},h=[{value:"Using the Resilience API for Caching",id:"using-the-resilience-api-for-caching",children:[{value:"Adding a JCache Provider",id:"adding-a-jcache-provider",children:[],level:3},{value:"Creating a Cache Configuration",id:"creating-a-cache-configuration",children:[],level:3},{value:"Applying a Cache Configuration",id:"applying-a-cache-configuration",children:[],level:3}],level:2},{value:"Configuring the Caching Strategy",id:"configuring-the-caching-strategy",children:[{value:"Multi Tenancy",id:"multi-tenancy",children:[],level:3},{value:"Removing Cache Entries Manually",id:"removing-cache-entries-manually",children:[{value:"Precise Control Over Cache Entries via <code>CacheFilter</code>",id:"precise-control-over-cache-entries-via-cachefilter",children:[],level:4}],level:3}],level:2},{value:"Advanced Cache Manipulation",id:"advanced-cache-manipulation",children:[],level:2}],p={toc:h};function d(e){var a=e.components,n=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Caching may improve your application's performance and responsiveness to your consumers.\nThe SAP Cloud SDK for Java provides abstractions for caching that make it easy to integrate caching into an application with almost no configuration overhead.\nAlso, it integrates with other SAP Cloud SDK features and most importantly is tenant aware out of the box.\nThe following article describes how to enable caching with the SAP Cloud SDK for Java in your application."),(0,r.kt)("h2",{id:"using-the-resilience-api-for-caching"},"Using the Resilience API for Caching"),(0,r.kt)("h3",{id:"adding-a-jcache-provider"},"Adding a JCache Provider"),(0,r.kt)("p",null,"The SAP Cloud SDK relies on the ",(0,r.kt)("inlineCode",{parentName:"p"},"JCache")," SPI to create and manage cache instances.\n",(0,r.kt)("inlineCode",{parentName:"p"},"JCache")," is a ",(0,r.kt)("a",{parentName:"p",href:"https://www.baeldung.com/java-spi"},"Service Provider Interface")," which requires an implementation of this interface to be present at runtime.\nBe sure that such an implementation is present on your ",(0,r.kt)("inlineCode",{parentName:"p"},"classpath"),".\nWe recommend ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ben-manes/caffeine"},"Caffeine")," which you can use by adding the below dependency to your application ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>com.github.ben-manes.caffeine</groupId>\n    <artifactId>jcache</artifactId>\n    <version>2.8.5</version>\n    <scope>runtime</scope>\n</dependency>\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Caching only works when a service provider or implementation for JCache is available at runtime.\nOtherwise, you will face a runtime exception."))),(0,r.kt)("h3",{id:"creating-a-cache-configuration"},"Creating a Cache Configuration"),(0,r.kt)("p",null,"As described in our ",(0,r.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-sdk/docs/java/features/resilience/resilience"},"Resilience section")," the SAP Cloud SDK allows you to run any code in the context of one or more resilience patterns.\nCaching is also a resilience pattern, so you can leverage the same API to build and apply a ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheConfiguration"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"CacheConfiguration cacheConfig = CacheConfiguration\n        .of(Duration.ofDays(1))\n        .withoutParameters();\n")),(0,r.kt)("p",null,"This builds a simple cache that will store values for one day and does not require any additional parameters.\nThe builder pattern requires at least a duration and if the cache requires parameters.\nThe configuration options are explained further below."),(0,r.kt)("p",null,"This configuration must then be added to a ",(0,r.kt)("inlineCode",{parentName:"p"},"ResilienceConfiguration"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ResilienceConfiguration resilienceConfig = ResilienceConfiguration\n        .empty(resilienceId)\n        .cacheConfiguration(cacheConfig);\n")),(0,r.kt)("p",null,"The above creates an otherwise empty ",(0,r.kt)("inlineCode",{parentName:"p"},"ResilienceConfiguration")," and thus only enables caching.\nOf course, you may use other resilience patterns as well."),(0,r.kt)("h3",{id:"applying-a-cache-configuration"},"Applying a Cache Configuration"),(0,r.kt)("p",null,"Since the cache configuration is part of a resilience configuration it is applied in the same way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ResilienceDecorator.executeSupplier(() -> operation(), resilienceConfig);\nResilienceDecorator.executeSupplier(() -> operation(), resilienceConfig);\n")),(0,r.kt)("p",null,"The above code will invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"operation()")," once since the result of the first invocation will be cached.\nOnly if the first call fails the second one would still happen."),(0,r.kt)("p",null,"Note that a specific cache instance is not yet created when the configuration is created.\nInstead, it is only created when an operation is decorated or executed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"ResilienceDecorator"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The cache functionality is tenant aware by default.\nThat means that by default cache entries created under a specific tenant will not be shared with other tenants.\nSee the section on ",(0,r.kt)("a",{parentName:"p",href:"#multi-tenancy"},"multi tenancy")," below."))),(0,r.kt)("h2",{id:"configuring-the-caching-strategy"},"Configuring the Caching Strategy"),(0,r.kt)("p",null,"The cache configuration offers 3 options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Cache Duration (Required)"),(0,r.kt)("li",{parentName:"ol"},"Expiration Strategy (Optional)"),(0,r.kt)("li",{parentName:"ol"},"Parameters (Optional)")),(0,r.kt)("p",null,"Each cache configuration must at least specify a duration after which a cache expires.\nHow this timeout is applied can be configured through the ",(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/CacheExpirationStrategy.html"},"Expiration Strategy"),".\nBy default, a cache entry is cleared once the configured duration has passed since the entry was created."),(0,r.kt)("p",null,"Finally, parameters can be listed that further refine the caching functionality.\nParameter values will be attached to the cache key.\nWhen the cache is accessed, only entries with matching parameter values will be returned."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Set a parameter value\ncacheConfig = CacheConfiguration\n        .of(Duration.ofDays(1))\n        .withParameters("value1");\nresilienceConfig.cacheConfiguration(cacheConfig);\n\n// Cache is empty, so this will be a cache miss\nResilienceDecorator.executeSupplier(() -> operation(), resilienceConfig);\n// Cache is hit, cached value will be returned\nResilienceDecorator.executeSupplier(() -> operation(), resilienceConfig);\n\n// Set a different parameter value\ncacheConfig = CacheConfiguration\n        .of(Duration.ofDays(1))\n        .withParameters("value2");\nresilienceConfig.cacheConfiguration(cacheConfig);\n\n// Cache is not hit because the existing cache entry has a different parameter value\nResilienceDecorator.executeSupplier(() -> operation(), resilienceConfig);\n\ncacheConfig = CacheConfiguration\n        .of(Duration.ofDays(1))\n        .withParameters("value1");\nresilienceConfig.cacheConfiguration(cacheConfig);\n\n// The cached value from the very first invocation is returned as the parameter is "value1" again\nResilienceDecorator.executeSupplier(() -> operation(), resilienceConfig);\n')),(0,r.kt)("p",null,"You can use parameters to separate cache entries as you see fit.\nPlease note that there is no need to do this to achieve multi-tenancy.\nThe SAP Cloud SDK is tenant aware by default as described below."),(0,r.kt)("h3",{id:"multi-tenancy"},"Multi Tenancy"),(0,r.kt)("p",null,"By default, this caching functionality is tenant aware.\nIf a tenant is available the SAP Cloud SDK will create cache entries only for that specific tenant.\nOther tenants will not see the value cached for that specific tenant."),(0,r.kt)("p",null,"For this example assume that ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"ResilienceConfiguration")," that has a ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheConfiguration")," in place:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"cachedOperation = ResilienceDecorator.decorateSupplier(() -> operation(), config)\n\n// cachedOperation() will be evaluated\nTenantAccessor.executeWithTenant(tenantA, () -> cachedOperation());\n// cached value will be taken\nTenantAccessor.executeWithTenant(tenantA, () -> cachedOperation());\n\n// cachedOperation() will be evaluated because the cached value is only accessible for tenantA\nTenantAccessor.executeWithTenant(tenantB, () -> cachedOperation());\n// cached value for tenantB will be taken\nTenantAccessor.executeWithTenant(tenantB, () -> cachedOperation());\n")),(0,r.kt)("p",null,"You can configure this isolation via the isolation mode of the resilience configuration.\nSet the isolation mode to ",(0,r.kt)("inlineCode",{parentName:"p"},"NO_ISOLATION")," to disable tenant aware caching.\nSee the section on isolation levels under ",(0,r.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-sdk/docs/java/features/resilience/resilience#multi-tenancy"},"Resilience")," for more details."),(0,r.kt)("h3",{id:"removing-cache-entries-manually"},"Removing Cache Entries Manually"),(0,r.kt)("p",null,"The SAP Cloud SDK offers different possibilities to manually remove cached entries.\nFirst, you may remove individual cache entries by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// respect tenant/principal and parameter isolation\nResilienceDecorator.clearCache(resilienceConfig);\n")),(0,r.kt)("p",null,"This operation is implicitly tenant-aware/principal-aware and also considers parameters defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheConfiguration")," when choosing which entries to remove."),(0,r.kt)("p",null,"Furthermore, should you need to remove all entries from a cache, you may use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// disregards tenant/principal and parameter isolation\nResilienceDecorator.clearAllCacheEntries(resilienceConfig);\n")),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This operation is intended to delete ",(0,r.kt)("strong",{parentName:"p"},"all")," cache entries associated with the given ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheConfiguration"),".\nIt intentionally ignores the isolation mode and, in consequence, affects all tenants and principals."))),(0,r.kt)("h4",{id:"precise-control-over-cache-entries-via-cachefilter"},"Precise Control Over Cache Entries via ",(0,r.kt)("inlineCode",{parentName:"h4"},"CacheFilter")),(0,r.kt)("p",null,"If you need fine-grained control over which cache entries to clear, you may create your custom ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheFilter"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// CacheFilter which matches all cache entries belonging to tenant "tenant1"\nCacheFilter tenantFilter = ( configuration, cacheKey, cacheEntry ) -> cacheKey.getTenantId().isDefined() && cacheKey.getTenantId().get().equals("tenant1");\n\n// clears all cache entries which match the provided CacheFilter, in this example all cache entries for "tenant1"\nResilienceDecorator.clearCache(resilienceConfig, tenantFilter);\n')),(0,r.kt)("p",null,"You can even combine multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheFilter")," instances for the cache clearing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// CacheFilter which matches all cache entries belonging to tenant "tenant1"\nCacheFilter tenantFilter = ( configuration, cacheKey, cacheEntry ) -> cacheKey.getTenantId().isDefined() && cacheKey.getTenantId().get().equals("tenant1");\n\n// CacheFilter which matches all cache entries belonging to principal "principal1"\nCacheFilter principalFilter = ( configuration, cacheKey, cacheEntry ) -> cacheKey.getPrincipalId().isDefined() && cacheKey.getPrincipalId().get().equals("principal1");\n\n// Combining two filters with CacheFilter.and(...) to a conjunction\nCacheFilter combinedAndFilter = CacheFilter.and(tenantFilter, principalFilter);\n\n// Combining two filters with CacheFilter.or(...) to a disjunction\nCacheFilter combinedOrFilter = CacheFilter.or(tenantFilter, principalFilter);\n\n// clears all cache entries which match the provided CacheFilter instance\nResilienceDecorator.clearCache(resilienceConfig, combinedAndFilter);\n')),(0,r.kt)("p",null,"This approach disregards the built-in tenant/principal and parameter isolation and solely considers the provided cache filters."),(0,r.kt)("p",null,"The SAP Cloud SDK provides prepared cache filters you can reuse for matching on tenant, principal or parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"CacheFilter matchesCurrentParameters = CacheFilter.keyMatchesParameters();\n\nCacheFilter matchesCurrentTenant = CacheFilter.keyMatchesTenant();\n\nCacheFilter matchesCurrentPrincipal = CacheFilter.keyMatchesPrincipal();\n")),(0,r.kt)("p",null,"Note that these built-in cache filters determine the tenant, the principal and the parameters to match respecting the ",(0,r.kt)("inlineCode",{parentName:"p"},"ResilienceConfiguration")," of the cache."),(0,r.kt)("p",null,"Additionally, you can create cache filters for a certain tenant, principal or certain parameters as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Iterable<Object> myParameters = obtainParameters();\nCacheFilter matchesMyParameters = CacheFilter.keyMatchesParameters(parameters);\n\nTenant myTenant = obtainTenant();\nCacheFilter matchesMytenant = CacheFilter.keyMatchesTenant(myTenant);\n\nPrincipal myPrincipal = obtainPrincipal();\nCacheFilter matchesMyPrincipal = CacheFilter.keyMatchesPrincipal(myPrincipal);\n")),(0,r.kt)("h2",{id:"advanced-cache-manipulation"},"Advanced Cache Manipulation"),(0,r.kt)("p",null,"To get hold of the created cache instance and to use it for advanced operations like for e.g. registering ",(0,r.kt)("a",{parentName:"p",href:"https://www.baeldung.com/jcache#listeners"},"event listeners")," you can use JCache API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"final Cache<SomeCacheKey, SomeResult> cache = Caching.getCachingProvider()\n                                                     .getCacheManager()\n                                                     .getCache(resilienceConfig.identifier()) //Returns the cache created using the resilienceId passed\n                                                     .registerCacheEntryListener(SimpleCacheEntryListener); //Registers the event listener\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SimpleCacheEntryListener")," is a class that implements the interfaces of the required events with respect to cache defined in ",(0,r.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/javax.cache/cache-api/latest/javax/cache/event/EventType.html"},(0,r.kt)("inlineCode",{parentName:"a"},"EventType")),".\nNote that the identifier of the resilience configuration is also the identifier of the cache associated with it."))}d.isMDXComponent=!0}}]);
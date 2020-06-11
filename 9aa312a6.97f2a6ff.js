(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{264:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return b}));var a=t(4),i=t(11),r=(t(0),t(394)),o={},c={id:"generated-config/typescript-urql",title:"typescript-urql",description:"This plugin generates urql (https://github.com/FormidableLabs/urql) components and HOC with TypeScript typings.",source:"@site/docs/generated-config/typescript-urql.md",permalink:"/docs/generated-config/typescript-urql",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-urql.md"},p=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>withComponent</code>",id:"withcomponent",children:[]},{value:"<code>withHooks</code>",id:"withhooks",children:[]},{value:"<code>urqlImportFrom</code>",id:"urqlimportfrom",children:[]},{value:"<code>noGraphQLTag</code>",id:"nographqltag",children:[]},{value:"<code>gqlImport</code>",id:"gqlimport",children:[]},{value:"<code>noExport</code>",id:"noexport",children:[]},{value:"<code>dedupeOperationSuffix</code>",id:"dedupeoperationsuffix",children:[]},{value:"<code>omitOperationSuffix</code>",id:"omitoperationsuffix",children:[]},{value:"<code>operationResultSuffix</code>",id:"operationresultsuffix",children:[]},{value:"<code>documentVariablePrefix</code>",id:"documentvariableprefix",children:[]},{value:"<code>documentVariableSuffix</code>",id:"documentvariablesuffix",children:[]},{value:"<code>fragmentVariablePrefix</code>",id:"fragmentvariableprefix",children:[]},{value:"<code>fragmentVariableSuffix</code>",id:"fragmentvariablesuffix",children:[]},{value:"<code>documentMode</code>",id:"documentmode",children:[]},{value:"<code>importOperationTypesFrom</code>",id:"importoperationtypesfrom",children:[]},{value:"<code>importDocumentNodeExternallyFrom</code>",id:"importdocumentnodeexternallyfrom",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]}]}],l={rightToc:p};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This plugin generates ",Object(r.b)("inlineCode",{parentName:"p"},"urql")," (",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/FormidableLabs/urql"}),"https://github.com/FormidableLabs/urql"),") components and HOC with TypeScript typings."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("div",{className:"admonition admonition-shell"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(r.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(r.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/typescript-urql\n")))),Object(r.b)("h2",{id:"api-reference"},"API Reference"),Object(r.b)("h3",{id:"withcomponent"},Object(r.b)("inlineCode",{parentName:"h3"},"withComponent")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("p",null,"Customized the output by enabling/disabling the generated Component."),Object(r.b)("h3",{id:"withhooks"},Object(r.b)("inlineCode",{parentName:"h3"},"withHooks")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Customized the output by enabling/disabling the generated React Hooks."),Object(r.b)("h3",{id:"urqlimportfrom"},Object(r.b)("inlineCode",{parentName:"h3"},"urqlImportFrom")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"urql")),Object(r.b)("p",null,"You can specify module that exports components ",Object(r.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Mutation"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Subscription")," and HOCs\nThis is useful for further abstraction of some common tasks (eg. error handling).\nFilepath relative to generated file can be also specified."),Object(r.b)("h3",{id:"nographqltag"},Object(r.b)("inlineCode",{parentName:"h3"},"noGraphQLTag")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("h3",{id:"gqlimport"},Object(r.b)("inlineCode",{parentName:"h3"},"gqlImport")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("h3",{id:"noexport"},Object(r.b)("inlineCode",{parentName:"h3"},"noExport")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("h3",{id:"dedupeoperationsuffix"},Object(r.b)("inlineCode",{parentName:"h3"},"dedupeOperationSuffix")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("h3",{id:"omitoperationsuffix"},Object(r.b)("inlineCode",{parentName:"h3"},"omitOperationSuffix")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("h3",{id:"operationresultsuffix"},Object(r.b)("inlineCode",{parentName:"h3"},"operationResultSuffix")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("h3",{id:"documentvariableprefix"},Object(r.b)("inlineCode",{parentName:"h3"},"documentVariablePrefix")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("h3",{id:"documentvariablesuffix"},Object(r.b)("inlineCode",{parentName:"h3"},"documentVariableSuffix")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("h3",{id:"fragmentvariableprefix"},Object(r.b)("inlineCode",{parentName:"h3"},"fragmentVariablePrefix")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("h3",{id:"fragmentvariablesuffix"},Object(r.b)("inlineCode",{parentName:"h3"},"fragmentVariableSuffix")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("h3",{id:"documentmode"},Object(r.b)("inlineCode",{parentName:"h3"},"documentMode")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"DocumentMode")),Object(r.b)("h3",{id:"importoperationtypesfrom"},Object(r.b)("inlineCode",{parentName:"h3"},"importOperationTypesFrom")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("h3",{id:"importdocumentnodeexternallyfrom"},Object(r.b)("inlineCode",{parentName:"h3"},"importDocumentNodeExternallyFrom")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("h3",{id:"scalars"},Object(r.b)("inlineCode",{parentName:"h3"},"scalars")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(r.b)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(r.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(r.b)("h3",{id:"namingconvention"},Object(r.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(r.b)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(r.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(r.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(r.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(r.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(r.b)("h4",{id:"usage-examples-1"},"Usage Examples"),Object(r.b)("h5",{id:"override-all-names"},"Override All Names"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(r.b)("h5",{id:"upper-case-enum-values"},"Upper-case enum values"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(r.b)("h5",{id:"keep-names-as-is"},"Keep names as is"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(r.b)("h5",{id:"remove-underscores"},"Remove Underscores"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(r.b)("h3",{id:"typesprefix"},Object(r.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",null,"Prefixes all the generated types."),Object(r.b)("h4",{id:"usage-examples-2"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(r.b)("h3",{id:"skiptypename"},Object(r.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(r.b)("h4",{id:"usage-examples-3"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(r.b)("h3",{id:"nonoptionaltypename"},Object(r.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Automatically adds ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(r.b)("h4",{id:"usage-examples-4"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")))}b.isMDXComponent=!0},394:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),b=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=b(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},s=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=b(t),s=a,u=d["".concat(o,".").concat(s)]||d[s]||m[s]||r;return t?i.a.createElement(u,c(c({ref:n},l),{},{components:t})):i.a.createElement(u,c({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=s;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);
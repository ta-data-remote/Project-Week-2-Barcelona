(window.webpackJsonp=window.webpackJsonp||[]).push([[60,24],{"./app/gamma/src/components/popovers/header-create-menu/index.tsx":function(e,n,a){"use strict";a.r(n),a.d(n,"HeaderCreateMenu",(function(){return O}));var t=a("./packages/browser/index.ts"),s=a("./packages/nachos/icons/board.tsx"),o=a("./packages/nachos/icons/template-board.tsx"),r=a("./packages/nachos/icons/organization.tsx"),l=a("./packages/nachos/icons/business-class.tsx"),i=a("./packages/nachos/icons/enterprise.tsx"),c=a("./app/src/components/PopoverMenu/index.ts"),d=a("./app/gamma/src/modules/state/ui/create-menu.ts"),u=a("./app/gamma/src/modules/state/models/teams.ts"),p=a("./node_modules/react/index.js"),m=a.n(p),b=a("./node_modules/react-redux/es/index.js"),g=a("./app/gamma/src/selectors/enterprises.ts"),h=a("./app/scripts/views/organization/InviteTeamMembers/TeamIllustrationAnimation.tsx"),f=a("./packages/test-ids/index.ts"),C=a("./packages/i18n/index.ts"),x=a("./packages/atlassian-analytics/index.ts"),E=a("./app/scripts/db/auth.js"),_=a.n(E),v=a("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=a.n(v),j=a("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./app/gamma/src/components/popovers/header-create-menu/HeaderCreateMenu.less"),k={insert:"head",singleton:!1},w=(y()(j.a,k),j.a.locals||{});const M=Object(C.forTemplate)("header_add_menu"),O=({enableEnterpriseAdd:e,isEnterpriseManaged:n,onCreateBoardOverlayShown:a,onCreateTeamOverlayShown:t,onClickCreateEnterpriseTeam:g,onClickCreateBoardFromTemplate:C,isDesktop:E})=>{const v=Object(b.d)(),y=!n,j=!E&&!n,k=!!e,O=!_.a.me().isDismissed("start-with-a-template");Object(p.useEffect)((()=>{v(Object(d.s)()),Object(h.b)()}),[]);const I=O?m.a.createElement("span",{className:w.newPillContainer},M("start-with-a-template"),m.a.createElement("span",{className:w.newPill},M("new"))):M("start-with-a-template");return m.a.createElement(c.a,null,m.a.createElement(c.b,{description:M("a-board-is-made-up-of-cards-ordered-on-lists"),onClick:()=>{a()},title:M("create-board"),testId:f.HeaderTestIds.CreateBoardButton,icon:m.a.createElement(s.BoardIcon,{dangerous_className:w.headerCreateIcon})}),m.a.createElement(c.b,{description:M("get-started-faster"),onClick:()=>{x.Analytics.sendUIEvent({action:"clicked",actionSubject:"menuItem",actionSubjectId:"startWithTemplateMenuItem",source:"createMenuInlineDialog"}),C()},title:I,testId:f.HeaderTestIds.CreateBoardFromTemplateButton,icon:m.a.createElement(o.a,{dangerous_className:w.headerCreateIcon})}),y&&m.a.createElement(c.b,{onClick:()=>{t(u.a.Default)},description:M("a-team-is-a-group-of-boards-and-people"),title:M("create-team"),testId:f.HeaderTestIds.CreateTeamButton,icon:m.a.createElement(r.a,{dangerous_className:w.headerCreateIcon})}),j&&m.a.createElement(c.b,{onClick:()=>{t(u.a.Business)},description:M("with-business-class-your-team-has-more"),title:M("create-business-team"),testId:f.HeaderTestIds.CreateBusinessTeamButton,icon:m.a.createElement(l.BusinessClassIcon,{dangerous_className:w.headerCreateIcon})}),k&&m.a.createElement(c.b,{onClick:()=>{x.Analytics.sendUIEvent({action:"clicked",actionSubject:"menuItem",actionSubjectId:"createEnterpriseTeamMenuItem",source:"createMenuInlineDialog"}),g()},description:M("your-team-will-be-owned-by-an-enterprise"),title:M("create-enterprise-team"),testId:f.HeaderTestIds.CreateEnterpriseTeamButton,icon:m.a.createElement(i.a,{dangerous_className:w.headerCreateIcon})}))};n.default=Object(b.c)((e=>({enableEnterpriseAdd:Object(g.d)(e),isEnterpriseManaged:Object(g.g)(e),isDesktop:Object(t.isDesktop)()})))(O)},"./app/src/components/PopoverMenu/index.ts":function(e,n,a){"use strict";a.d(n,"a",(function(){return _})),a.d(n,"b",(function(){return E})),a.d(n,"c",(function(){return x}));var t=a("./node_modules/classnames/index.js"),s=a.n(t),o=a("./app/src/forwardRefComponent.ts"),r=a("./app/src/components/RouterLink/RouterLink.tsx"),l=a("./node_modules/react/index.js"),i=a.n(l),c=a("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=a.n(c),u=a("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./app/src/components/PopoverMenu/PopoverMenu.less"),p={insert:"head",singleton:!1},m=(d()(u.a,p),u.a.locals||{}),b=a("./packages/a11y/index.ts");function g(){return(g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function h(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}const f=({children:e,description:n,rawDescription:a,title:t,icon:o})=>i.a.createElement(i.a.Fragment,null,o&&i.a.cloneElement(o,{size:"small"}),i.a.createElement("span",{className:s()(m.title,n&&m.withoutMargins)},t||e),(n||a)&&i.a.createElement("p",{className:m.description},n||a)),C=({appendSeparator:e,children:n})=>i.a.createElement("li",{className:s()(m.item,e&&m.withSeparator)},n),x=e=>{let{appendSeparator:n,testId:a,href:t,target:o,className:l,onClick:c}=e,d=h(e,["appendSeparator","testId","href","target","className","onClick"]);const[u,p]=Object(b.useFocusRing)();return i.a.createElement(C,{appendSeparator:n},i.a.createElement(r.b,g({className:s()(m.link,l,u&&m.linkFocusRing),href:t,testId:a,onClick:c,target:o},p),i.a.createElement(f,d)))},E=Object(o.a)("PopoverMenuButton",((e,n)=>{let{appendSeparator:a,onClick:t,className:o,disabled:r,testId:l}=e,c=h(e,["appendSeparator","onClick","className","disabled","testId"]);const[d,u]=Object(b.useFocusRing)();return i.a.createElement(C,{appendSeparator:a},i.a.createElement("button",g({className:s()(m.link,d&&m.linkFocusRing,o),disabled:r,onClick:t,"data-test-id":l,ref:n},u),i.a.createElement(f,c)))})),_=({className:e,children:n,testId:a})=>i.a.createElement("nav",{className:e},i.a.createElement("ul",{"data-test-id":a},n))},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./app/gamma/src/components/popovers/header-create-menu/HeaderCreateMenu.less":function(e,n,a){"use strict";var t=a("./node_modules/css-loader/dist/runtime/api.js"),s=a.n(t)()(!1);s.push([e.i,"._3Zwy2eOx5dLbm3 {\n  display: inline-flex;\n  align-items: center;\n}\n._2zS_zhzwgGdU-W {\n  background-color: #61BD4F;\n  border-radius: 20px;\n  color: #FFFFFF;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 20px;\n  padding: 1px 10px;\n  text-align: center;\n  margin-left: 8px;\n}\n.sc8LNmChVXUfL5 {\n  display: inline-flex;\n  align-items: center;\n  height: 20px;\n  width: 20px;\n}\n",""]),s.locals={newPillContainer:"_3Zwy2eOx5dLbm3",newPill:"_2zS_zhzwgGdU-W",headerCreateIcon:"sc8LNmChVXUfL5"},n.a=s},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./app/src/components/PopoverMenu/PopoverMenu.less":function(e,n,a){"use strict";var t=a("./node_modules/css-loader/dist/runtime/api.js"),s=a.n(t)()(!1);s.push([e.i,'._3Qtx4lodxp9J0E {\n  background-color: transparent;\n  border: none;\n  background: #FFFFFF;\n  border-radius: 0;\n  box-shadow: none;\n  color: #172B4D;\n  display: block;\n  height: 100%;\n  padding: 6px 12px;\n  text-align: left;\n  text-decoration: none;\n  width: 100%;\n  transition: none;\n  margin: 0;\n  outline: 0;\n}\n._3Qtx4lodxp9J0E:hover {\n  background-color: transparent;\n  border: none;\n  box-shadow: none;\n  background: rgba(9, 30, 66, 0.04);\n}\n._3Qtx4lodxp9J0E:active {\n  background-color: transparent;\n  border: none;\n  box-shadow: none;\n  background: #E4F0F6;\n}\n._3Qtx4lodxp9J0E._31k3XfnerJgTZ8:focus {\n  /*\n    TODO\n    Ideally we want to remove the global :focus override from classic.\n    It hurts accessibility and forces us to do stuff like this.\n    Once it is done, this can be removed.\n  */\n  outline: black dotted 1px;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  ._3Qtx4lodxp9J0E._31k3XfnerJgTZ8:focus {\n    outline: -webkit-focus-ring-color auto 5px;\n  }\n}\n._3Qtx4lodxp9J0E[disabled]:active,\n._3Qtx4lodxp9J0E[disabled]:focus,\n._3Qtx4lodxp9J0E[disabled]:hover {\n  background: transparent;\n  color: #A5ADBA !important;\n}\n._3Qtx4lodxp9J0E[disabled]:active ._3Gw3Oa5-RMe50s svg,\n._3Qtx4lodxp9J0E[disabled]:focus ._3Gw3Oa5-RMe50s svg,\n._3Qtx4lodxp9J0E[disabled]:hover ._3Gw3Oa5-RMe50s svg {\n  color: #A5ADBA !important;\n}\n._3Qtx4lodxp9J0E[disabled]:active span[name="check"],\n._3Qtx4lodxp9J0E[disabled]:focus span[name="check"],\n._3Qtx4lodxp9J0E[disabled]:hover span[name="check"] {\n  color: #6B778C !important;\n}\n._3Qtx4lodxp9J0E[disabled]:active .M91aWYFMf7mrFf,\n._3Qtx4lodxp9J0E[disabled]:focus .M91aWYFMf7mrFf,\n._3Qtx4lodxp9J0E[disabled]:hover .M91aWYFMf7mrFf {\n  color: #A5ADBA !important;\n}\n._3jTRr1WChvvqHf {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n}\n._3jTRr1WChvvqHf._2VCqfvi0epFnIK {\n  margin: 0;\n}\n.M91aWYFMf7mrFf {\n  color: #5E6C84;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  margin: 4px 0 0 0;\n  padding: 0;\n}\n.DIhgdvAd-R4ToE::after {\n  background-color: rgba(9, 30, 66, 0.13);\n  content: " ";\n  display: block;\n  height: 1px;\n  margin: 8px auto;\n  width: calc(100% - 20px);\n}\n',""]),s.locals={link:"_3Qtx4lodxp9J0E",linkFocusRing:"_31k3XfnerJgTZ8",icon:"_3Gw3Oa5-RMe50s",description:"M91aWYFMf7mrFf",title:"_3jTRr1WChvvqHf",withoutMargins:"_2VCqfvi0epFnIK",withSeparator:"DIhgdvAd-R4ToE"},n.a=s},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./packages/a11y/src/AccessibilityMenu/AccessibilityMenu.less":function(e,n,a){"use strict";var t=a("./node_modules/css-loader/dist/runtime/api.js"),s=a.n(t)()(!1);s.push([e.i,"._3YGsFyACTefHYF {\n  margin: 0;\n}\n._3jRzoY8BUC9T9r {\n  display: flex;\n}\n._3jRzoY8BUC9T9r .VZsWvb5qVISKPp {\n  margin-left: 3px;\n  margin-top: 2px;\n}\n._3jRzoY8BUC9T9r ._1iZ4r0EebD-_AO {\n  flex: 1;\n}\n._24YY3ffS5pAZxi {\n  align-items: center;\n  color: #091E42;\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n}\n._24YY3ffS5pAZxi .VZsWvb5qVISKPp {\n  margin-left: 3px;\n  margin-top: 2px;\n}\n._24YY3ffS5pAZxi ._1ragvyIlBWNN0g {\n  flex: 1;\n}\n.Yv_Jd5QjuO4P7w ._1O4iygPyhEyA1- {\n  display: block;\n  padding: 8px;\n  margin-top: 4px;\n}\n.Yv_Jd5QjuO4P7w label {\n  cursor: pointer;\n}\n.Yv_Jd5QjuO4P7w ._24YY3ffS5pAZxi:hover,\n.Yv_Jd5QjuO4P7w ._2BpqOEsSdnZi8i:hover,\n.Yv_Jd5QjuO4P7w ._1O4iygPyhEyA1-:hover,\n.Yv_Jd5QjuO4P7w ._24YY3ffS5pAZxi:focus-visible,\n.Yv_Jd5QjuO4P7w ._2BpqOEsSdnZi8i:focus-visible,\n.Yv_Jd5QjuO4P7w ._1O4iygPyhEyA1-:focus-visible {\n  background: rgba(9, 30, 66, 0.04);\n}\n",""]),s.locals={colorVisionLabel:"_3YGsFyACTefHYF",colorVisionOptions:"_3jRzoY8BUC9T9r",checkbox:"VZsWvb5qVISKPp",select:"_1iZ4r0EebD-_AO",tota11yOptions:"_24YY3ffS5pAZxi",label:"_1ragvyIlBWNN0g",accessibilityMenuWrapper:"Yv_Jd5QjuO4P7w",link:"_1O4iygPyhEyA1-",checkboxLabel:"_2BpqOEsSdnZi8i"},n.a=s},"./packages/a11y/index.ts":function(e,n,a){"use strict";a.r(n),a.d(n,"AccessibilityMenu",(function(){return v})),a.d(n,"AccessibilityMenuOptions",(function(){return y})),a.d(n,"a11yMenuState",(function(){return d})),a.d(n,"useFocusRing",(function(){return j}));var t=a("./node_modules/react/index.js"),s=a.n(t),o=a("./packages/nachos/icons/external-link.tsx"),r=a("./packages/nachos/checkbox.ts"),l=a("./packages/shared-state/index.ts"),i=a("./node_modules/uuid/v4.js"),c=a.n(i);const d=new l.b({colorVisionMode:"",isColorVisionEnabled:!1,isTota11yInstalled:!1,isTota11yEnabled:!1});var u,p=a("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=a.n(p),b=a("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./packages/a11y/src/AccessibilityMenu/AccessibilityMenu.less"),g={insert:"head",singleton:!1},h=(m()(b.a,g),b.a.locals||{});!function(e){e.Achromatopsia="Achromatopsia",e.BlurredVision="Blurred Vision",e.Deuteranopia="Deuteranopia",e.Protanopia="Protanopia",e.Tritanopia="Tritanopia"}(u||(u={}));const f=new Map([[u.Achromatopsia,'<feColorMatrix values="\n        0.213  0.715  0.072  0.000  0.000\n        0.213  0.715  0.072  0.000  0.000\n        0.213  0.715  0.072  0.000  0.000\n        0.000  0.000  0.000  1.000  0.000\n      " />'],[u.BlurredVision,'<feGaussianBlur stdDeviation="2" />'],[u.Deuteranopia,'<feColorMatrix values="\n        0.367  0.861 -0.228  0.000  0.000\n        0.280  0.673  0.047  0.000  0.000\n        -0.012  0.043  0.969  0.000  0.000\n        0.000  0.000  0.000  1.000  0.000\n      " />'],[u.Protanopia,'<feColorMatrix values="\n        0.152  1.053 -0.205  0.000  0.000\n        0.115  0.786  0.099  0.000  0.000\n        -0.004 -0.048  1.052  0.000  0.000\n        0.000  0.000  0.000  1.000  0.000\n      " />'],[u.Tritanopia,'<feColorMatrix values="\n        1.256 -0.077 -0.179  0.000  0.000\n        -0.078  0.931  0.148  0.000  0.000\n        0.005  0.691  0.304  0.000  0.000\n        0.000  0.000  0.000  1.000  0.000\n      " />']]),C=()=>{const[{colorVisionMode:e,isColorVisionEnabled:n,isTota11yInstalled:a,isTota11yEnabled:o},i]=Object(l.c)(d),u=Object(t.useCallback)((()=>{i({colorVisionMode:e,isColorVisionEnabled:!n,isTota11yInstalled:a,isTota11yEnabled:o})}),[i,e,n,a,o]),p=Object(t.useCallback)((({target:{value:e}})=>i({colorVisionMode:e,isColorVisionEnabled:n,isTota11yInstalled:a,isTota11yEnabled:o})),[i,n,a,o]),m=c()();return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:m,className:h.colorVisionLabel},"Color vision emulation"),s.a.createElement("div",{className:h.colorVisionOptions},s.a.createElement(r.a,{className:h.checkbox,isChecked:n,onChange:u,id:m}),s.a.createElement("select",{disabled:!n,className:h.select,"aria-label":"Color vision emulation options",onChange:p,defaultValue:e},s.a.createElement("option",{disabled:!0,value:""},"Select an emulation"),[...f.keys()].map((e=>s.a.createElement("option",{key:e,value:e},e))))))},x=()=>{var e;const[{colorVisionMode:n,isColorVisionEnabled:a}]=Object(l.c)(d),t=null===(e=f.get(n))||void 0===e?void 0:e.replace(/(\n|^\s|\s$)/g,""),o=c()();return a&&t?s.a.createElement("style",null,'#trello-root {\n      filter: url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"><filter id="'.concat(o,'">').concat(t,"</filter></svg>#").concat(o,"');\n    }")):null},E=()=>{const[{isTota11yEnabled:e,colorVisionMode:n,isColorVisionEnabled:o},i]=Object(l.c)(d),u=Object(t.useCallback)((async()=>{e||(await a.e(201).then(a.t.bind(null,"./node_modules/@khanacademy/tota11y/dist/tota11y.js",7)),setTimeout((()=>{var e;null===(e=document.querySelector(".tota11y-toolbar"))||void 0===e||e.classList.add("tota11y-expanded")}),300)),i({colorVisionMode:n,isColorVisionEnabled:o,isTota11yInstalled:!0,isTota11yEnabled:!e})}),[i,n,o,e]),p=c()();return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:p,className:h.tota11yOptions},s.a.createElement(r.a,{id:p,onChange:u,isChecked:e,className:h.checkbox}),s.a.createElement("span",{className:h.label},"Enable Tota11y sidebar")))},_=()=>{const[{isTota11yInstalled:e,isTota11yEnabled:n}]=Object(l.c)(d);return e&&!n?s.a.createElement("style",null,".tota11y { display: none !important }"):null},v=()=>s.a.createElement("div",{className:h.accessibilityMenuWrapper},s.a.createElement(E,null),s.a.createElement(C,null),s.a.createElement("a",{className:h.link,href:"https://hello.atlassian.net/wiki/spaces/TRELLOFE/pages/941672748/20.+Accessibility",target:"_blank"},"Web accessibility guide ",s.a.createElement(o.a,null))),y=()=>s.a.createElement(s.a.Fragment,null,s.a.createElement(_,null),s.a.createElement(x,null)),j=(e={})=>{const[n,a]=Object(t.useState)(!1),[s,o]=Object(t.useState)(!1),[r,l]=Object(t.useState)(!1),i=()=>{s&&r||a(!0)};return[n,{onMouseEnter:n=>{o(!0),a(!1),e.onMouseEnter&&e.onMouseEnter(n)},onMouseLeave:n=>{o(!1),a(!1),e.onMouseLeave&&e.onMouseLeave(n)},onMouseDown:n=>{l(!0),a(!1),e.onMouseDown&&e.onMouseDown(n)},onKeyDown:n=>{l(!1),i(),e.onKeyDown&&e.onKeyDown(n)},onKeyUp:n=>{i(),e.onKeyUp&&e.onKeyUp(n)},onBlur:n=>{a(!1),e.onBlur&&e.onBlur(n)}}]}},"./packages/nachos/icons/business-class.tsx":function(e,n,a){"use strict";a.r(n),a.d(n,"BusinessClassIcon",(function(){return l}));var t=a("./node_modules/react/index.js"),s=a.n(t),o=a("./packages/nachos/src/components/Icon/index.ts");const r=()=>s.a.createElement("svg",{width:"24",height:"24",role:"presentation",focusable:"false",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V6H19V20H5V6H7V5ZM9 6H15V5H9V6ZM7 9C7 8.44772 7.44772 8 8 8H10C10.5523 8 11 8.44772 11 9V16C11 16.5523 10.5523 17 10 17H8C7.44772 17 7 16.5523 7 16V9ZM14 8C13.4477 8 13 8.44772 13 9V14C13 14.5523 13.4477 15 14 15H16C16.5523 15 17 14.5523 17 14V9C17 8.44772 16.5523 8 16 8H14Z",fill:"currentColor"}),s.a.createElement("path",{d:"M4 6C2.89543 6 2 6.89543 2 8V18C2 19.1046 2.89543 20 4 20L4 6Z",fill:"currentColor"}),s.a.createElement("path",{d:"M20 20V6C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20Z",fill:"currentColor"})),l=e=>{const{testId:n,dangerous_className:a,size:t,color:l,label:i,block:c}=e;return s.a.createElement(o.a,{testId:n,size:t,dangerous_className:a,color:l,block:c,label:i||"BusinessClassIcon",glyph:r})}},"./packages/nachos/icons/template-board.tsx":function(e,n,a){"use strict";a.d(n,"a",(function(){return l}));var t=a("./node_modules/react/index.js"),s=a.n(t),o=a("./packages/nachos/src/components/Icon/index.ts");const r=()=>s.a.createElement("svg",{width:"24",height:"24",role:"presentation",focusable:"false",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M7 3C7 2.44772 7.44772 2 8 2H9C9.55228 2 10 2.44772 10 3C10 3.55228 9.55228 4 9 4H8C7.44772 4 7 3.55228 7 3Z",fill:"currentColor"}),s.a.createElement("path",{d:"M3 7C2.44772 7 2 7.44772 2 8V9C2 9.55228 2.44772 10 3 10C3.55228 10 4 9.55228 4 9V8C4 7.44772 3.55228 7 3 7Z",fill:"currentColor"}),s.a.createElement("path",{d:"M2 12C2 11.4477 2.44772 11 3 11C3.55228 11 4 11.4477 4 12V13C4 13.5523 3.55228 14 3 14C2.44772 14 2 13.5523 2 13V12Z",fill:"currentColor"}),s.a.createElement("path",{d:"M2 16C2 15.4477 2.44772 15 3 15C3.55228 15 4 15.4477 4 16V19C2.89543 19 2 18.1046 2 17V16Z",fill:"currentColor"}),s.a.createElement("path",{d:"M12 2C11.4477 2 11 2.44772 11 3C11 3.55228 11.4477 4 12 4H13C13.5523 4 14 3.55228 14 3C14 2.44772 13.5523 2 13 2H12Z",fill:"currentColor"}),s.a.createElement("path",{d:"M15 3C15 2.44772 15.4477 2 16 2H17C18.1046 2 19 2.89543 19 4H16C15.4477 4 15 3.55228 15 3Z",fill:"currentColor"}),s.a.createElement("path",{d:"M4 2C2.89543 2 2 2.89543 2 4V5C2 5.55228 2.44772 6 3 6C3.55228 6 4 5.55228 4 5V4H5C5.55228 4 6 3.55228 6 3C6 2.44772 5.55228 2 5 2H4Z",fill:"currentColor"}),s.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 5C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H7ZM8 7C7.44772 7 7 7.44771 7 8V17C7 17.5523 7.44772 18 8 18H11C11.5523 18 12 17.5523 12 17V8C12 7.44772 11.5523 7 11 7H8ZM14 8C14 7.44772 14.4477 7 15 7H18C18.5523 7 19 7.44772 19 8V13C19 13.5523 18.5523 14 18 14H15C14.4477 14 14 13.5523 14 13V8Z",fill:"currentColor"})),l=e=>{const{testId:n,dangerous_className:a,size:t,color:l,label:i,block:c}=e;return s.a.createElement(o.a,{testId:n,size:t,dangerous_className:a,color:l,block:c,label:i||"TemplateBoardIcon",glyph:r})}}}]);
//# sourceMappingURL=create-menu-popover.11a5b2dc12daa1104a73.js.map
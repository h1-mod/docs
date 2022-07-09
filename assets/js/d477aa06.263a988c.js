"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[649],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),f=r,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return t?o.createElement(d,l(l({ref:n},u),{},{components:t})):o.createElement(d,l({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8933:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),l=["components"],i={},c="Commands",s={unversionedId:"functions",id:"functions",isDocsHomePage:!1,title:"Commands",description:"Opening the in-game console",source:"@site/docs/functions.md",sourceDirName:".",slug:"/functions",permalink:"/functions",editUrl:"https://github.com/h1-mod/docs/blob/main/docs/functions.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Errors",permalink:"/errors"},next:{title:"Change in-game name",permalink:"/ingamename"}},u=[{value:"Opening the in-game console",id:"opening-the-in-game-console",children:[],level:2},{value:"Unlock/Stats menu",id:"unlockstats-menu",children:[],level:2},{value:"Field of View",id:"field-of-view",children:[],level:2},{value:"Singleplayer commands",id:"singleplayer-commands",children:[],level:2}],m={toc:u};function p(e){var n=e.components,i=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"commands"},"Commands"),(0,a.kt)("h2",{id:"opening-the-in-game-console"},"Opening the in-game console"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open your in-game console via (",(0,a.kt)("strong",{parentName:"li"},"~"),") to type commands.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(1815).Z})),(0,a.kt)("h2",{id:"unlockstats-menu"},"Unlock/Stats menu"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"Stats")," in the main lobby menu")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(3486).Z})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Unlock All Items: This unlocks all base game items and all camos (including DLC)"),(0,a.kt)("li",{parentName:"ol"},"Unlock All Loot: This unlocks all DLC weapons (does not unlock DLC camos)"),(0,a.kt)("li",{parentName:"ol"},"Unlock All Classes: This unlocks all prestige-earned additional classes for use.")),(0,a.kt)("h2",{id:"field-of-view"},"Field of View"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"There are 3 commands for Field-of-View (FOV) adjustment:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cg_fov <number>\ncg_fovScale <decimal number>\ncg_fovMin <number>\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"cg_fov is the world FOV. This will impact how much of the world you can see, while not affecting your hands and weapon. This setting is the base FOV setting."),(0,a.kt)("li",{parentName:"ol"},"cg_fovscale is the FOV multiplier. It takes the cg_fov number, and multiplies it. This causes the weapon and hands to be affected, but your zoom multipliers will be unaffected. (Example: 1x zoom at cg_fovscale 1.2 is still a pure 1x zoom)"),(0,a.kt)("li",{parentName:"ol"},"cg_fovmin is the minimum FOV that the game will allow during zoom. Most pronounced with snipers. Example: if you use cg_fov 80 and cg_fovmin 80, you will get no zoom, even on snipers. Looks strange, but can be useful.")),(0,a.kt)("p",null,"Play around with these options, as they are meant to be mixed and matched together."),(0,a.kt)("p",null,"For starters, please find a comfortable preset below, which roughly equates to a 100 FOV:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cg_fov 75\ncg_fovscale 1.25\ncg_fovmin <default / unedited>\n")),(0,a.kt)("h2",{id:"singleplayer-commands"},"Singleplayer commands"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All singleplayer cheats are present and available for use! ",(0,a.kt)("a",{parentName:"li",href:"https://www.liveabout.com/cod-4-cheats-pc-3401820"},"CoD4 Cheats List"))))}p.isMDXComponent=!0},1815:function(e,n,t){n.Z=t.p+"assets/images/keyboard-14f4277bbec38bacf0316378e589b66e.png"},3486:function(e,n,t){n.Z=t.p+"assets/images/unlockall-73c517898dc3d8790c15bd33b8e6fde5.png"}}]);
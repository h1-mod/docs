"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[998],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return t?n.createElement(m,a(a({ref:r},l),{},{components:t})):n.createElement(m,a({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7092:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],u={},p="Port Forwarding",c={unversionedId:"port-forwarding",id:"port-forwarding",isDocsHomePage:!1,title:"Port Forwarding",description:"1. Open up Command Prompt. (Windows key + R -> cmd).",source:"@site/docs/port-forwarding.md",sourceDirName:".",slug:"/port-forwarding",permalink:"/port-forwarding",editUrl:"https://github.com/h1-mod/docs/blob/main/docs/port-forwarding.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"How to make a Dedicated Server",permalink:"/install-server"},next:{title:"Lua Scripting",permalink:"/scripting"}},l=[],s={toc:l};function d(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"port-forwarding"},"Port Forwarding"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open up Command Prompt. (Windows key + R -> ",(0,i.kt)("inlineCode",{parentName:"li"},"cmd"),")."),(0,i.kt)("li",{parentName:"ol"},"Type in ",(0,i.kt)("inlineCode",{parentName:"li"},"ipconfig"),", and take the default gateway of the network device that you are using (Wireless/Ethernet)."),(0,i.kt)("li",{parentName:"ol"},"Open your internet browser and type in the default gateway IP Address (usually 192.168.X.X)"),(0,i.kt)("li",{parentName:"ol"},'Log in with your router login details (not your wifi password) and navigate to the "Virtual Server" or "Port Forwarding" area for your specific router.'),(0,i.kt)("li",{parentName:"ol"},'This is the part where you will likely need to help yourself. If something asks for an application name, put anything (we recommend "H1"). For the port, use 30120, and for the "forwarded IP address" (text might be different), put in your IP address. If something mentions "protocol" such as UDP or TCP, put both. If you can\'t, then do the process 2 times, 1 for UDP and the 2nd, TCP.'),(0,i.kt)("li",{parentName:"ol"},"Test your server by asking a friend to join. If they can join from their own PC, you did it right. If it fails, then you either did something wrong or your router does not support port forwarding (usually happens to Modem+Router Combo Devices).")))}d.isMDXComponent=!0}}]);
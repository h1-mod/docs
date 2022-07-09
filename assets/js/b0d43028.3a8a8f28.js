"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[659],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,h=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},992:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={},s="Lua Scripting",l={unversionedId:"scripting",id:"scripting",isDocsHomePage:!1,title:"Lua Scripting",description:"Introduction to Lua scripting",source:"@site/docs/scripting.md",sourceDirName:".",slug:"/scripting",permalink:"/scripting",editUrl:"https://github.com/h1-mod/docs/blob/main/docs/scripting.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Port Forwarding",permalink:"/port-forwarding"},next:{title:"Loading a Lua script",permalink:"/load-script"}},p=[{value:"Introduction to Lua scripting",id:"introduction-to-lua-scripting",children:[],level:2},{value:"Writing a basic script",id:"writing-a-basic-script",children:[],level:2}],u={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lua-scripting"},"Lua Scripting"),(0,i.kt)("h2",{id:"introduction-to-lua-scripting"},"Introduction to Lua scripting"),(0,i.kt)("p",null,"Lua was the scripting language used in place of GSC (the game's scripting language) on the X Labs clients. This was because at the time of IW6x, there was no GSC compiler. On H1-Mod, we adapt this language from the former clients because it is easy to work with provide a API that adds additional features. Although Lua scripting is the alternative language for the game's scripting, it can still communicate with GSC just fine. Alongside that, it adds new features that help you modify the game's stock GSC scripts to make it all the better."),(0,i.kt)("p",null,"If you have never used Lua before, ",(0,i.kt)("a",{parentName:"p",href:"https://www.lua.org/pil/contents.html"},"read up here")," to better understand it. This scripting documentation is based off ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XLabsProject/iw6x-client/wiki/Scripting"},"IW6x Lua Scripting Documentation"),"."),(0,i.kt)("h2",{id:"writing-a-basic-script"},"Writing a basic script"),(0,i.kt)("p",null,"In this little tutorial, we are going to write a simple Lua script that will count the amount of spawns on a player and do a bold print only the first time a player spawns."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- this callback function will run EVERY TIME a new player has connected\nlevel:onnotify("connected", function(player)\n    player.spawns = 0 -- we setup a new variable to keep count of spawns on the player entity\n    \n    -- this callback function will run EVERY TIME the player has spawned\n    player:onnotify("spawned_player", function()\n        player.spawns = player.spawns + 1 -- we add 1 to this variable everytime the player spawns\n        print("Player " .. player.name .. " has spawned " .. player.spawns .. " times!")\n    end)\n    \n    -- this callback function will run when the player has spawned for the first time only.\n    -- this is because we use `onnotifyonce` instead on `onnotify`\n    player:onnotifyonce("spawned_player", function()\n        player:clientiprintlnbold("Hello World!")\n    end)\nend)\n')),(0,i.kt)("p",null,"And after that, you have successfully made a basic Lua script. Refer to ",(0,i.kt)("a",{parentName:"p",href:"load-script"},"Loading a Lua script")," to learn how to use it. You can also refer to ",(0,i.kt)("a",{parentName:"p",href:"scripting-syntax"},"Lua Syntax")," on the basics of Lua."))}f.isMDXComponent=!0}}]);
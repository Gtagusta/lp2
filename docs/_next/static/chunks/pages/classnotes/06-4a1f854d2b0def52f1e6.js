(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[762],{8153:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var s=t(1717);function a(e,n,t,s,a,o,r){try{var l=e[o](r),d=l.value}catch(i){return void t(i)}l.done?n(d):Promise.resolve(d).then(s,a)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(s,o){var r=e.apply(n,t);function l(e){a(r,s,o,l,d,"next",e)}function d(e){a(r,s,o,l,d,"throw",e)}l(void 0)}))}}var r=t(8742),l=t.n(r),d=t(7378),i=t(2541),m=t(6171),c=t(4246);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function x(e){var n=e.src,t=e.code,s=e.lang,a=(0,d.useState)(""),r=a[0],u=a[1];return(0,d.useEffect)((function(){function e(){return(e=o(l().mark((function e(){var t,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.next=5,t.text();case 5:s=e.sent,u(s.trim());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t?u(t.trim()):function(){e.apply(this,arguments)}()}),[]),(0,c.jsx)(i.default,p(p({},i.defaultProps),{},{code:r,language:s,theme:m.default,children:function(e){var n=e.className,t=e.style,s=e.tokens,a=e.getLineProps,o=e.getTokenProps;return(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:n,style:t,children:s.map((function(e,n){return(0,c.jsx)("div",p(p({},a({line:e,key:n})),{},{children:e.map((function(e,n){return(0,c.jsx)("span",p({},o({token:e,key:n})))}))}))}))})})}}))}},9981:function(e,n,t){"use strict";t.r(n);var s=t(7397),a=t(1750),o=(t(7378),t(5318)),r=t(4955),l=t.n(r),d=t(7913),i=t(5979),m=(t(8579),t(8153)),c=["components"],u=function(e){return(0,d.withSSG)(l()({filename:"index.mdx",route:"/classnotes/06",meta:{},pageMap:[{name:"classnote",route:"/classnote"},{name:"classnotes",children:[{name:"01",children:[{name:"index",route:"/classnotes/01"},{name:"meta.json",meta:{index:"Aula 01"}}],route:"/classnotes/01"},{name:"02",children:[{name:"index",route:"/classnotes/02"},{name:"meta.json",meta:{index:"Aula 02"}}],route:"/classnotes/02"},{name:"03",children:[{name:"index",route:"/classnotes/03"},{name:"meta.json",meta:{index:"Aula 03"}}],route:"/classnotes/03"},{name:"04",children:[{name:"index",route:"/classnotes/04"},{name:"meta.json",meta:{index:"Aula 04"}}],route:"/classnotes/04"},{name:"05",children:[{name:"index",route:"/classnotes/05"},{name:"meta.json",meta:{index:"Aula 05"}}],route:"/classnotes/05"},{name:"06",children:[{name:"index",route:"/classnotes/06"},{name:"meta.json",meta:{index:"Aula 06"}}],route:"/classnotes/06"},{name:"07",children:[{name:"index",route:"/classnotes/07"},{name:"meta.json",meta:{index:"Aula 07"}}],route:"/classnotes/07"},{name:"08",children:[{name:"index",route:"/classnotes/08"},{name:"meta.json",meta:{index:"Aula 08"}}],route:"/classnotes/08"},{name:"09",children:[{name:"index",route:"/classnotes/09"},{name:"meta.json",meta:{index:"Aula 09"}}],route:"/classnotes/09"},{name:"10",children:[{name:"index",route:"/classnotes/10"},{name:"meta.json",meta:{index:"Aula 10"}}],route:"/classnotes/10"},{name:"11",children:[{name:"index",route:"/classnotes/11"},{name:"meta.json",meta:{index:"Aula 11"}}],route:"/classnotes/11"},{name:"12",children:[{name:"index",route:"/classnotes/12"},{name:"meta.json",meta:{index:"Aula 12"}}],route:"/classnotes/12"},{name:"meta.json",meta:{10:{title:"Aula 10",type:"nav",hidden:!0},11:{title:"Aula 11",type:"nav",hidden:!0},12:{title:"Aula 12",type:"nav",hidden:!0},"01":{title:"Aula 01",type:"nav",hidden:!0},"02":{title:"Aula 02",type:"nav",hidden:!0},"03":{title:"Aula 03",type:"nav",hidden:!0},"04":{title:"Aula 04",type:"nav",hidden:!0},"05":{title:"Aula 05",type:"nav",hidden:!0},"06":{title:"Aula 06",type:"nav",hidden:!0},"07":{title:"Aula 07",type:"nav",hidden:!0},"08":{title:"Aula 08",type:"nav",hidden:!0},"09":{title:"Aula 09",type:"nav",hidden:!0}}}],route:"/classnotes"},{name:"content",route:"/content"},{name:"exams",children:[{name:"meta.json",meta:{projeto:"Projeto"}},{name:"projeto",route:"/exams/projeto"}],route:"/exams"},{name:"index",route:"/"},{name:"meta.json",meta:{index:"Disciplina",classnote:"Aulas",classnotes:{title:"Aulas",type:"nav",hidden:!0},content:"Conte\xfado",tools:"Ferramentas",exams:{title:"Exames",type:"nav",hidden:!0}}},{name:"tools",route:"/tools"}]},i.Z))(e)};function p(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.mdx)(u,(0,s.Z)({components:n},t),(0,o.mdx)("h2",null,"MVC com Banco de Dados"),(0,o.mdx)("p",null,(0,o.mdx)("img",{src:"/lp2/imgs/database/mvc.png",alt:"",parentName:"p"})),(0,o.mdx)("h2",null,"Aplica\xe7\xe3o com SQLite"),(0,o.mdx)("h3",null,"Estrutura de C\xf3digo"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-txt",parentName:"pre"},"foods-app\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 public\n\u2502   \u251c\u2500\u2500 css\n\u2502   \u2502   \u2514\u2500\u2500 bootstrap.min.css\n\u2502   \u251c\u2500\u2500 foods.html\n\u2502   \u251c\u2500\u2500 imgs\n\u2502   \u2502   \u251c\u2500\u2500 hamburguer.jpg\n\u2502   \u2502   \u251c\u2500\u2500 salada.jpg\n\u2502   \u2502   \u2514\u2500\u2500 sanduiche.jpg\n\u2502   \u2514\u2500\u2500 js\n\u2502       \u251c\u2500\u2500 bootstrap.min.js\n\u2502       \u251c\u2500\u2500 jquery.min.js\n\u2502       \u2514\u2500\u2500 popper.min.js\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 controllers\n    \u2502   \u2514\u2500\u2500 foodsController.js\n    \u251c\u2500\u2500 db\n    \u2502   \u251c\u2500\u2500 database.sqlite\n    \u2502   \u2514\u2500\u2500 index.js\n    \u251c\u2500\u2500 index.js\n    \u251c\u2500\u2500 migrations\n    \u2502   \u2514\u2500\u2500 index.js\n    \u251c\u2500\u2500 models\n    \u2502   \u2514\u2500\u2500 Food.js\n    \u251c\u2500\u2500 routes\n    \u2502   \u2514\u2500\u2500 index.js\n    \u251c\u2500\u2500 seeders\n    \u2502   \u2514\u2500\u2500 index.js\n    \u2514\u2500\u2500 views\n        \u251c\u2500\u2500 foods\n        \u2502   \u2514\u2500\u2500 index.njk\n        \u2514\u2500\u2500 layout.njk\n")),(0,o.mdx)("p",null,(0,o.mdx)("a",{href:"https://codesandbox.io/s/express-foods-app-sqlite-simple-y472j?fontsize=14&hidenavigation=1&theme=dark",parentName:"p"},(0,o.mdx)("img",{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit express-foods-app-sqlite-simple",parentName:"a"}))),(0,o.mdx)("h3",null,"Loader"),(0,o.mdx)("p",null,"src/index.js:"),(0,o.mdx)(m.Z,{src:"/lp2/codes/database/foods-app-sqlite-simple/src/index.js",lang:"js",mdxType:"Code"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-bash",parentName:"pre"},"$ npm install express nunjucks\n")),(0,o.mdx)("h3",null,"Migration"),(0,o.mdx)("p",null,(0,o.mdx)("a",{href:"https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite",parentName:"p"},"vscode-sqlite"),":"),(0,o.mdx)("p",null,(0,o.mdx)("img",{src:"/lp2/imgs/database/database.png",alt:"",parentName:"p"})),(0,o.mdx)("p",null,"src/migrations/index.js:"),(0,o.mdx)(m.Z,{src:"/lp2/codes/database/foods-app-sqlite-simple/src/migrations/index.js",lang:"js",mdxType:"Code"}),(0,o.mdx)("h3",null,"Database"),(0,o.mdx)("p",null,"src/db/index.js:"),(0,o.mdx)(m.Z,{src:"/lp2/codes/database/foods-app-sqlite-simple/src/db/index.js",lang:"js",mdxType:"Code"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-bash",parentName:"pre"},"$ npm install sqlite-async\n")),(0,o.mdx)("h3",null,"Model"),(0,o.mdx)("p",null,"src/models/Food.js:"),(0,o.mdx)(m.Z,{src:"/lp2/codes/database/foods-app-sqlite-simple/src/models/Food.js",lang:"js",mdxType:"Code"}),(0,o.mdx)("h3",null,"Controller"),(0,o.mdx)("p",null,"src/controllers/foodsController.js:"),(0,o.mdx)(m.Z,{src:"/lp2/codes/database/foods-app-sqlite-simple/src/controllers/foodsController.js",lang:"js",mdxType:"Code"}))}p.isMDXComponent=!0,n.default=p},5226:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/classnotes/06",function(){return t(9981)}])}},function(e){e.O(0,[734,36,774,888,179],(function(){return n=5226,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
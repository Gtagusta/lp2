(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[183],{8153:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var a=t(1717);function s(e,n,t,a,s,r,o){try{var d=e[r](o),m=d.value}catch(l){return void t(l)}d.done?n(m):Promise.resolve(m).then(a,s)}function r(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var o=e.apply(n,t);function d(e){s(o,a,r,d,m,"next",e)}function m(e){s(o,a,r,d,m,"throw",e)}d(void 0)}))}}var o=t(8742),d=t.n(o),m=t(7378),l=t(2541),p=t(6171),c=t(4246);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function x(e){var n=e.src,t=e.code,a=e.lang,s=(0,m.useState)(""),o=s[0],i=s[1];return(0,m.useEffect)((function(){function e(){return(e=r(d().mark((function e(){var t,a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.next=5,t.text();case 5:a=e.sent,i(a.trim());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t?i(t.trim()):function(){e.apply(this,arguments)}()}),[]),(0,c.jsx)(l.default,u(u({},l.defaultProps),{},{code:o,language:a,theme:p.default,children:function(e){var n=e.className,t=e.style,a=e.tokens,s=e.getLineProps,r=e.getTokenProps;return(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:n,style:t,children:a.map((function(e,n){return(0,c.jsx)("div",u(u({},s({line:e,key:n})),{},{children:e.map((function(e,n){return(0,c.jsx)("span",u({},r({token:e,key:n})))}))}))}))})})}}))}},1602:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var a=t(7397),s=t(1750),r=t(7378),o=t(5318),d=t(4955),m=t.n(d),l=t(7913),p=t(5979),c=(t(8579),t(8153)),i=t(1717),u=t(4246);function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e){var n=e.src,t=e.children,a=e.height,s=(0,r.useState)(""),o=s[0],d=s[1],m=(0,r.useState)(0),l=m[0],p=m[1],c=(0,r.useRef)(null),i={borderRadius:"0.3rem",backgroundColor:"#f3f6fa",border:"solid 1px #dce6f0",padding:"1rem",marginTop:"0.8rem"},x=(0,r.useCallback)((function(e){var n=e.current.contentWindow.document,t=n.body,s=n.documentElement,r=Math.max(null===t||void 0===t?void 0:t.clientHeight,null===t||void 0===t?void 0:t.offsetHeight,null===t||void 0===t?void 0:t.scrollHeight,null===s||void 0===s?void 0:s.clientHeight,null===s||void 0===s?void 0:s.offsetHeight,null===s||void 0===s?void 0:s.scrollHeight);p(a||r)}),[]);return(0,r.useEffect)((function(){n?x(c):d(t)}),[x,c]),n?(0,u.jsx)("iframe",{ref:c,onLoad:function(){return x(c)},src:n,style:h(h({},i),{},{height:"".concat(Number(l)+50,"px"),width:"100%"})}):(0,u.jsx)("div",{style:i,children:o})}var g=["components"],j=function(e){return(0,l.withSSG)(m()({filename:"index.mdx",route:"/classnotes/02",meta:{},pageMap:[{name:"classnote",route:"/classnote"},{name:"classnotes",children:[{name:"01",children:[{name:"index",route:"/classnotes/01"},{name:"meta.json",meta:{index:"Aula 01"}}],route:"/classnotes/01"},{name:"02",children:[{name:"index",route:"/classnotes/02"},{name:"meta.json",meta:{index:"Aula 02"}}],route:"/classnotes/02"},{name:"03",children:[{name:"index",route:"/classnotes/03"},{name:"meta.json",meta:{index:"Aula 03"}}],route:"/classnotes/03"},{name:"04",children:[{name:"index",route:"/classnotes/04"},{name:"meta.json",meta:{index:"Aula 04"}}],route:"/classnotes/04"},{name:"meta.json",meta:{"01":{title:"Aula 01",type:"nav",hidden:!0},"02":{title:"Aula 02",type:"nav",hidden:!0},"03":{title:"Aula 03",type:"nav",hidden:!0},"04":{title:"Aula 04",type:"nav",hidden:!0}}}],route:"/classnotes"},{name:"content",route:"/content"},{name:"exams",children:[{name:"meta.json",meta:{projeto:"Projeto"}},{name:"projeto",route:"/exams/projeto"}],route:"/exams"},{name:"index",route:"/"},{name:"meta.json",meta:{index:"Disciplina",classnote:"Aulas",classnotes:{title:"Aulas",type:"nav",hidden:!0},content:"Conte\xfado",tools:"Ferramentas",exams:{title:"Exames",type:"nav",hidden:!0}}},{name:"tools",route:"/tools"}]},p.Z))(e)};function N(e){var n=e.components,t=(0,s.Z)(e,g);return(0,o.mdx)(j,(0,a.Z)({components:n},t),(0,o.mdx)("h1",null,"JavaScript e HTML"),(0,o.mdx)("h2",null,"Integrando JS e HTML"),(0,o.mdx)("p",null,(0,o.mdx)("a",{href:"/lp2/codes/form/hello-js/index.html",parentName:"p"},"hello-js/index.html"),":"),(0,o.mdx)(c.Z,{src:"/lp2/codes/form/hello-js/index.html",lang:"html",mdxType:"Code"}),(0,o.mdx)("p",null,(0,o.mdx)("a",{href:"/lp2/codes/form/hello-js/js/index.js",parentName:"p"},"hello-js/js/index.js"),":"),(0,o.mdx)(c.Z,{src:"/lp2/codes/form/hello-js/js/index.js",lang:"js",mdxType:"Code"}),(0,o.mdx)("h2",null,"Tratando dados de formul\xe1rio"),(0,o.mdx)("p",null,(0,o.mdx)("a",{href:"/lp2/codes/form/calc/index.html",parentName:"p"},"calc/index.html"),":"),(0,o.mdx)(f,{src:"/lp2/codes/form/calc/index.html",mdxType:"HyperText"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-html",parentName:"pre"},'<main class="container">\n  <h1 class="mb-5">Calculadora</h1>\n  <form action="sucesso.html" method="post">\n      <div class="form-group">\n        <input type="text" class="form-control w-25" id="number1" name="number1">\n      </div>\n      <div class="form-group">\n        <input type="text" class="form-control w-25" id="number2" name="number2">\n      </div>\n      <div class="form-group ml-2">\n        <input type="button" class="btn btn-primary" id="sum" name="sum" value="+">\n        <input type="button" class="btn btn-primary" id="minus" name="minus" value="-">\n        <input type="button" class="btn btn-primary" id="multiply" name="minus" value="x">\n        <input type="button" class="btn btn-primary" id="divide" name="minus" value="\xf7">\n      </div>\n      <div class="form-group">\n        <input type="text" class="form-control w-25" id="result" name="result">\n      </div>\n    </div>\n  </form>\n</main>\n<script src="js/index.js"><\/script>\n')),(0,o.mdx)("p",null,(0,o.mdx)("a",{href:"/lp2/codes/form/calc/js/index.js",parentName:"p"},"calc/js/index.js"),":"),(0,o.mdx)(c.Z,{src:"/lp2/codes/form/calc/js/index.js",lang:"js",mdxType:"Code"}),(0,o.mdx)("h2",null,"Conte\xfado Din\xe2mico"),(0,o.mdx)("p",null,(0,o.mdx)("img",{src:"/lp2/imgs/fetch/preview.png",alt:"",parentName:"p"})),(0,o.mdx)("p",null,"C\xf3digo:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-text",parentName:"pre"},"hosts-app\n\u251c\u2500\u2500 back\n\u2502   \u251c\u2500\u2500 .gitignore\n\u2502   \u251c\u2500\u2500 db.json\n\u2502   \u251c\u2500\u2500 package-lock.json\n\u2502   \u251c\u2500\u2500 package.json\n\u2502   \u251c\u2500\u2500 resquest.http\n\u2502   \u2514\u2500\u2500 src\n\u2502       \u2514\u2500\u2500 index.js\n\u2514\u2500\u2500 front\n    \u251c\u2500\u2500 index.html\n    \u2514\u2500\u2500 js\n        \u251c\u2500\u2500 index.js\n        \u2514\u2500\u2500 services\n            \u2514\u2500\u2500 api.js\n")),(0,o.mdx)("h3",null,"Front"),(0,o.mdx)("p",null,(0,o.mdx)("a",{href:"https://codesandbox.io/s/host-app-front-uvrug?fontsize=14&hidenavigation=1&theme=dark",parentName:"p"},(0,o.mdx)("img",{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit host-app-front",parentName:"a"}))),(0,o.mdx)("p",null,"hosts-app/front/index.html:"),(0,o.mdx)(c.Z,{src:"/lp2/codes/fetch/hosts-app/front/index.html",lang:"html",mdxType:"Code"}),(0,o.mdx)("p",null,"hosts-app/front/js/index.js:"),(0,o.mdx)(c.Z,{src:"/lp2/codes/fetch/hosts-app/front/js/index.js",lang:"js",mdxType:"Code"}),(0,o.mdx)("h3",null,"Back"),(0,o.mdx)("p",null,(0,o.mdx)("a",{href:"https://codesandbox.io/s/host-app-back-moeem?fontsize=14&hidenavigation=1&theme=dark",parentName:"p"},(0,o.mdx)("img",{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit host-app-back",parentName:"a"}))),(0,o.mdx)("p",null,"REST API"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr"},"M\xe9todo"),(0,o.mdx)("th",{parentName:"tr"},"Caminho"),(0,o.mdx)("th",{parentName:"tr"},"Resposta"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr"},"POST"),(0,o.mdx)("td",{parentName:"tr"},(0,o.mdx)("inlineCode",{parentName:"td"},"/hosts")),(0,o.mdx)("td",{parentName:"tr"},"Cria uma novo host")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr"},"GET"),(0,o.mdx)("td",{parentName:"tr"},(0,o.mdx)("inlineCode",{parentName:"td"},"/hosts")),(0,o.mdx)("td",{parentName:"tr"},"Retorna todas os hosts")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr"},"GET"),(0,o.mdx)("td",{parentName:"tr"},(0,o.mdx)("inlineCode",{parentName:"td"},"/hosts/1")),(0,o.mdx)("td",{parentName:"tr"},"Retorna o host de ID 1")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr"},"PUT"),(0,o.mdx)("td",{parentName:"tr"},(0,o.mdx)("inlineCode",{parentName:"td"},"/hosts/1")),(0,o.mdx)("td",{parentName:"tr"},"Atualiza o host de ID 1")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr"},"DELETE"),(0,o.mdx)("td",{parentName:"tr"},(0,o.mdx)("inlineCode",{parentName:"td"},"/hosts/1")),(0,o.mdx)("td",{parentName:"tr"},"Exclui o host de ID 1")))),(0,o.mdx)("p",null,"hosts-app/back/db.json:"),(0,o.mdx)(c.Z,{src:"/lp2/codes/fetch/hosts-app/back/db.json",lang:"json",mdxType:"Code"}),(0,o.mdx)("p",null,"hosts-app/back/src/index.js:"),(0,o.mdx)(c.Z,{src:"/lp2/codes/fetch/hosts-app/back/src/index.js",lang:"js",mdxType:"Code"}),(0,o.mdx)("p",null,(0,o.mdx)("a",{href:"https://github.com/typicode/json-server",parentName:"p"},"json-server"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-text",parentName:"pre"},"$ npm init -y\n$ npm install json-server\n")),(0,o.mdx)("p",null,"hosts-app/back/package.json:"),(0,o.mdx)(c.Z,{src:"/lp2/codes/fetch/hosts-app/back/package.json",lang:"json",mdxType:"Code"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-text",parentName:"pre"},"$ npm start\n")),(0,o.mdx)("p",null,(0,o.mdx)("a",{href:"http://localhost:3000/hosts",parentName:"p"},"localhost:3000/hosts"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-json",parentName:"pre"},'[\n  {\n    "name": "Server",\n    "address": "10.0.0.10",\n    "mask": "255.255.255.0",\n    "id": 1\n  },\n  {\n    "name": "PC 1",\n    "address": "192.168.0.1",\n    "mask": "255.255.255.0",\n    "id": 2\n  }\n]\n')),(0,o.mdx)("p",null,"back/request.http (",(0,o.mdx)("a",{href:"https://marketplace.visualstudio.com/items?itemName=humao.rest-client",parentName:"p"},"VS Code - Rest Client"),"):"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-text",parentName:"pre"},"### Create Host\n\n### Read Hosts\n\nGET http://localhost:3000/hosts\n\n### Read Host by ID\n\n### Update Host\n\n### Delete Host\n")),(0,o.mdx)("h2",null,"Fetch API"),(0,o.mdx)("p",null,"front/js/services/api.js:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-js",parentName:"pre"},"const domain = 'http://localhost:3000';\n\nasync function create(resource, data) {}\n\nasync function read(resource) {}\n\nasync function update(resource, data) {}\n\nasync function destroy(resource) {}\n\nexport default { create, read, update, destroy };\n")),(0,o.mdx)("h3",null,"Read"),(0,o.mdx)("p",null,"Request (Codesandbox - ",(0,o.mdx)("a",{href:"https://moeem.sse.codesandbox.io/hosts",parentName:"p"},"Read"),"):"),(0,o.mdx)("p",null,(0,o.mdx)("img",{src:"/lp2/imgs/fetch/read-hosts.png",alt:"",parentName:"p"})),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-txt",parentName:"pre"},"### Read Hosts\n\nGET http://localhost:3000/hosts\n")),(0,o.mdx)("p",null,"Code:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-js",parentName:"pre"},"async function read(resource) {\n  const res = await fetch(`${domain}${resource}`);\n\n  return await res.json();\n}\n")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-js",parentName:"pre"},"api.read('/hosts');\n")),(0,o.mdx)("h3",null,"Create"),(0,o.mdx)("p",null,"Resquest (",(0,o.mdx)("a",{href:"https://reqbin.com/75sw4s9x",parentName:"p"},"REQBIN - Create"),"):"),(0,o.mdx)("p",null,(0,o.mdx)("img",{src:"/lp2/imgs/fetch/create-host.png",alt:"",parentName:"p"})),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-text",parentName:"pre"},'### Create Host\n\nPOST http://localhost:3000/hosts\nContent-Type: application/json\n\n{\n  "name": "PC 2",\n  "address": "192.168.0.2",\n  "mask": "255.255.255.0"\n}\n')),(0,o.mdx)("p",null,"Code:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-js",parentName:"pre"},"async function create(resource, data) {\n  const res = await fetch(`${domain}${resource}`, {\n    method: 'post',\n    body: JSON.stringify(data),\n    headers: {\n      'Content-Type': 'application/json; charset=UTF-8',\n    },\n  });\n\n  return await res.json();\n}\n")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-js",parentName:"pre"},'const host = {\n  name: "PC 2",\n  address: "192.168.0.2",\n  mask: "255.255.255.0"\n}\n\napi.create(\'/hosts\', host);\n')),(0,o.mdx)("h3",null,"Update"),(0,o.mdx)("p",null,"Resquest (",(0,o.mdx)("a",{href:"https://reqbin.com/rmigtirs",parentName:"p"},"REQBIN - Upadte"),"):"),(0,o.mdx)("p",null,(0,o.mdx)("img",{src:"/lp2/imgs/fetch/update-host.png",alt:"",parentName:"p"})),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-text",parentName:"pre"},'### Update Host\n\nPUT http://localhost:3000/hosts/3\nContent-Type: application/json\n\n{\n  "name": "PC 2",\n  "address": "192.168.0.20",\n  "mask": "255.255.255.0"\n}\n')),(0,o.mdx)("p",null,"Code:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-js",parentName:"pre"},"async function update(resource, data) {\n  const res = await fetch(`${domain}${resource}`, {\n    method: 'put',\n    body: JSON.stringify(data),\n    headers: {\n      'Content-Type': 'application/json; charset=UTF-8',\n    },\n  });\n\n  return await res.json();\n}\n")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-js",parentName:"pre"},'const host = {\n  name: "PC 2",\n  address: "192.168.0.20",\n  mask: "255.255.255.0"\n}\n\napi.update(\'/hosts/3\', host);\n')),(0,o.mdx)("h3",null,"Delete"),(0,o.mdx)("p",null,"Request (",(0,o.mdx)("a",{href:"https://reqbin.com/8cwfroas",parentName:"p"},"REQBIN - Delete"),")"),(0,o.mdx)("p",null,(0,o.mdx)("img",{src:"/lp2/imgs/fetch/delete-host.png",alt:"",parentName:"p"})),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-text",parentName:"pre"},"### Delete Host\n\nDELETE http://localhost:3000/hosts/3\n")),(0,o.mdx)("p",null,"Code:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-js",parentName:"pre"},"async function destroy(resource) {\n  await fetch(`${domain}${resource}`, {\n    method: 'delete',\n  });\n}\n")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{className:"language-js",parentName:"pre"},"api.destroy('/hosts/1');\n")))}N.isMDXComponent=!0;var y=N},5400:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/classnotes/02",function(){return t(1602)}])}},function(e){e.O(0,[734,36,774,888,179],(function(){return n=5400,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
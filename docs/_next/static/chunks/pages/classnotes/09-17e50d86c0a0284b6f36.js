(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[473],{8153:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var s=t(1717);function a(e,n,t,s,a,r,o){try{var l=e[r](o),c=l.value}catch(u){return void t(u)}l.done?n(c):Promise.resolve(c).then(s,a)}function r(e){return function(){var n=this,t=arguments;return new Promise((function(s,r){var o=e.apply(n,t);function l(e){a(o,s,r,l,c,"next",e)}function c(e){a(o,s,r,l,c,"throw",e)}l(void 0)}))}}var o=t(8742),l=t.n(o),c=t(7378),u=t(2541),i=t(6171),m=t(4246);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function h(e){var n=e.src,t=e.code,s=e.lang,a=(0,c.useState)(""),o=a[0],d=a[1];return(0,c.useEffect)((function(){function e(){return(e=r(l().mark((function e(){var t,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.next=5,t.text();case 5:s=e.sent,d(s.trim());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t?d(t.trim()):function(){e.apply(this,arguments)}()}),[]),(0,m.jsx)(u.default,p(p({},u.defaultProps),{},{code:o,language:s,theme:i.default,children:function(e){var n=e.className,t=e.style,s=e.tokens,a=e.getLineProps,r=e.getTokenProps;return(0,m.jsx)("pre",{children:(0,m.jsx)("code",{className:n,style:t,children:s.map((function(e,n){return(0,m.jsx)("div",p(p({},a({line:e,key:n})),{},{children:e.map((function(e,n){return(0,m.jsx)("span",p({},r({token:e,key:n})))}))}))}))})})}}))}},7302:function(e,n,t){"use strict";t.r(n);var s=t(7397),a=t(1750),r=(t(7378),t(5318)),o=t(4955),l=t.n(o),c=t(7913),u=t(5979),i=(t(8579),t(8153)),m=["components"],d=function(e){return(0,c.withSSG)(l()({filename:"index.mdx",route:"/classnotes/09",meta:{},pageMap:[{name:"classnote",route:"/classnote"},{name:"classnotes",children:[{name:"01",children:[{name:"index",route:"/classnotes/01"},{name:"meta.json",meta:{index:"Aula 01"}}],route:"/classnotes/01"},{name:"02",children:[{name:"index",route:"/classnotes/02"},{name:"meta.json",meta:{index:"Aula 02"}}],route:"/classnotes/02"},{name:"03",children:[{name:"index",route:"/classnotes/03"},{name:"meta.json",meta:{index:"Aula 03"}}],route:"/classnotes/03"},{name:"04",children:[{name:"index",route:"/classnotes/04"},{name:"meta.json",meta:{index:"Aula 04"}}],route:"/classnotes/04"},{name:"05",children:[{name:"index",route:"/classnotes/05"},{name:"meta.json",meta:{index:"Aula 05"}}],route:"/classnotes/05"},{name:"06",children:[{name:"index",route:"/classnotes/06"},{name:"meta.json",meta:{index:"Aula 06"}}],route:"/classnotes/06"},{name:"07",children:[{name:"index",route:"/classnotes/07"},{name:"meta.json",meta:{index:"Aula 07"}}],route:"/classnotes/07"},{name:"08",children:[{name:"index",route:"/classnotes/08"},{name:"meta.json",meta:{index:"Aula 08"}}],route:"/classnotes/08"},{name:"09",children:[{name:"index",route:"/classnotes/09"},{name:"meta.json",meta:{index:"Aula 09"}}],route:"/classnotes/09"},{name:"10",children:[{name:"index",route:"/classnotes/10"},{name:"meta.json",meta:{index:"Aula 10"}}],route:"/classnotes/10"},{name:"11",children:[{name:"index",route:"/classnotes/11"},{name:"meta.json",meta:{index:"Aula 11"}}],route:"/classnotes/11"},{name:"12",children:[{name:"index",route:"/classnotes/12"},{name:"meta.json",meta:{index:"Aula 12"}}],route:"/classnotes/12"},{name:"meta.json",meta:{10:{title:"Aula 10",type:"nav",hidden:!0},11:{title:"Aula 11",type:"nav",hidden:!0},12:{title:"Aula 12",type:"nav",hidden:!0},"01":{title:"Aula 01",type:"nav",hidden:!0},"02":{title:"Aula 02",type:"nav",hidden:!0},"03":{title:"Aula 03",type:"nav",hidden:!0},"04":{title:"Aula 04",type:"nav",hidden:!0},"05":{title:"Aula 05",type:"nav",hidden:!0},"06":{title:"Aula 06",type:"nav",hidden:!0},"07":{title:"Aula 07",type:"nav",hidden:!0},"08":{title:"Aula 08",type:"nav",hidden:!0},"09":{title:"Aula 09",type:"nav",hidden:!0}}}],route:"/classnotes"},{name:"content",route:"/content"},{name:"exams",children:[{name:"meta.json",meta:{projeto:"Projeto"}},{name:"projeto",route:"/exams/projeto"}],route:"/exams"},{name:"index",route:"/"},{name:"meta.json",meta:{index:"Disciplina",classnote:"Aulas",classnotes:{title:"Aulas",type:"nav",hidden:!0},content:"Conte\xfado",tools:"Ferramentas",exams:{title:"Exames",type:"nav",hidden:!0}}},{name:"tools",route:"/tools"}]},u.Z))(e)};function p(e){var n=e.components,t=(0,a.Z)(e,m);return(0,r.mdx)(d,(0,s.Z)({components:n},t),(0,r.mdx)("h1",null,"Autentica\xe7\xe3o JWT"),(0,r.mdx)("h2",null,"JSON Web Token"),(0,r.mdx)("p",null,(0,r.mdx)("a",{href:"https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYzMzkxNDc3MiwiZXhwIjoxNjMzOTE1MDcyfQ.wGs4R42bIwKhTiFWVZrs-QGs_0bEWSc69rjylXj7nPE",parentName:"p"},"Token"),":"),(0,r.mdx)("p",null,(0,r.mdx)("img",{src:"/lp2/imgs/jwt/jwt-token.png",alt:"",parentName:"p"})),(0,r.mdx)("p",null,"Fluxo de Requisi\xe7\xe3o:"),(0,r.mdx)("p",null,(0,r.mdx)("img",{src:"/lp2/imgs/jwt/jwt-request.png",alt:"",parentName:"p"})),(0,r.mdx)("h2",null,"Backend"),(0,r.mdx)("p",null,(0,r.mdx)("a",{href:"https://github.com/lucachaves/lp2-classroom-2022/tree/auth-token",parentName:"p"},"C\xf3digo"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{className:"language-txt",parentName:"pre"},"foods-app\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 public\n\u2502   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 request.http\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 database\n    \u2502   \u251c\u2500\u2500 database.js\n    \u2502   \u251c\u2500\u2500 db.sqlite\n    \u2502   \u251c\u2500\u2500 load.js\n    \u2502   \u251c\u2500\u2500 migration.js\n    \u2502   \u251c\u2500\u2500 seeders.js\n    \u2502   \u2514\u2500\u2500 seeders.json\n    \u251c\u2500\u2500 index.js\n    \u251c\u2500\u2500 middleware\n    \u2502   \u2514\u2500\u2500 auth.js\n    \u251c\u2500\u2500 models\n    \u2502   \u251c\u2500\u2500 Category.js\n    \u2502   \u251c\u2500\u2500 Food.js\n    \u2502   \u2514\u2500\u2500 User.js\n    \u2514\u2500\u2500 routes.js\n")),(0,r.mdx)("p",null,"src/index.js:"),(0,r.mdx)(i.Z,{src:"https://raw.githubusercontent.com/lucachaves/lp2-classroom-2022/auth-token/src/index.js",lang:"js",mdxType:"Code"}),(0,r.mdx)("p",null,".env.example:"),(0,r.mdx)(i.Z,{src:"https://raw.githubusercontent.com/lucachaves/lp2-classroom-2022/auth-token/.env.example",lang:"js",mdxType:"Code"}),(0,r.mdx)("p",null,"src/middleware/auth.js:"),(0,r.mdx)(i.Z,{src:"https://raw.githubusercontent.com/lucachaves/lp2-classroom-2022/auth-token/src/middleware/auth.js",lang:"js",mdxType:"Code"}),(0,r.mdx)("p",null,"src/models/User.js:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{className:"language-js",parentName:"pre"},"import bcrypt from 'bcryptjs';\n\nimport Database from '../database/database.js';\n\nconst salt = Number(process.env.SALT);\n\nasync function create(user) {\n  //...\n}\n\nasync function read(id) {\n  // ...\n}\n\nasync function readByEmail(email) {\n  const db = await Database.connect();\n\n  const sql = `\n    SELECT\n      *\n    FROM\n      users\n    WHERE\n      email = ?\n  `;\n\n  return await db.get(sql, [email]);\n}\n\nexport default { create, read, readByEmail };\n")),(0,r.mdx)("p",null,"src/routes.js:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{className:"language-js",parentName:"pre"},"import { Router } from 'express';\nimport bcrypt from 'bcryptjs';\nimport jwt from 'jsonwebtoken';\n\nimport Category from './models/Category.js';\nimport Food from './models/Food.js';\nimport User from './models/User.js';\n\nimport { isAuthenticated } from './middleware/auth.js';\n\nconst router = Router();\n\nrouter.get('/', (req, res) => res.redirect('/signin.html'));\n\nrouter.get('/foods', isAuthenticated, async (req, res) => {\n  // ...\n});\n\nrouter.post('/foods', isAuthenticated, async (req, res) => {\n  // ...\n});\n\nrouter.put('/foods/:id', isAuthenticated, async (req, res) => {\n  // ...\n});\n\nrouter.delete('/foods/:id', isAuthenticated, async (req, res) => {\n  // ...\n});\n\nrouter.get('/categories', isAuthenticated, async (req, res) => {\n  // ...\n});\n\nrouter.post('/users', async (req, res) => {\n  // ...\n});\n\nrouter.post('/signin', async (req, res) => {\n  try {\n    const { email, password } = req.body;\n\n    const { id: userId, password: hash } = await User.readByEmail(email);\n\n    const match = await bcrypt.compareSync(password, hash);\n\n    if (match) {\n      const token = jwt.sign(\n        { userId },\n        process.env.SECRET,\n        { expiresIn: 3600 } // 1h\n      );\n\n      res.json({ auth: true, token });\n    } else {\n      throw new Error('User not found');\n    }\n  } catch (error) {\n    res.status(401).json({ error: 'User not found' });\n  }\n});\n\nrouter.get('/signout', (req, res) => {\n  return res.json({ auth: false, token: null });\n});\n\nrouter.use(function (req, res, next) {\n  // ...\n});\n\nrouter.use(function (err, req, res, next) {\n  // ...\n});\n\nexport default router;\n")),(0,r.mdx)("p",null,"request.http:"),(0,r.mdx)(i.Z,{src:"https://raw.githubusercontent.com/lucachaves/lp2-classroom-2022/auth-token/request.http",lang:"js",mdxType:"Code"}),(0,r.mdx)("h2",null,"Frontend"),(0,r.mdx)("p",null,(0,r.mdx)("a",{href:"https://github.com/lucachaves/lp2-classroom-2022/tree/auth-token",parentName:"p"},"C\xf3digo"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{className:"language-txt",parentName:"pre"},"foods-app\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 public\n\u2502   \u251c\u2500\u2500 foods.html\n\u2502   \u251c\u2500\u2500 js\n\u2502   \u2502   \u2514\u2500\u2500 auth.js\n\u2502   \u251c\u2500\u2500 signin.html\n\u2502   \u2514\u2500\u2500 signup.html\n\u251c\u2500\u2500 request.http\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 ...\n")),(0,r.mdx)("p",null,"public/js/auth.js:"),(0,r.mdx)(i.Z,{src:"https://raw.githubusercontent.com/lucachaves/lp2-classroom-2022/auth-token/public/js/auth.js",lang:"js",mdxType:"Code"}),(0,r.mdx)("p",null,"public/signin.html:"),(0,r.mdx)(i.Z,{src:"https://raw.githubusercontent.com/lucachaves/lp2-classroom-2022/auth-token/public/signin.html",lang:"html",mdxType:"Code"}),(0,r.mdx)("p",null,"public/foods.html:"),(0,r.mdx)(i.Z,{src:"https://raw.githubusercontent.com/lucachaves/lp2-classroom-2022/auth-token/public/foods.html",lang:"html",mdxType:"Code"}))}p.isMDXComponent=!0,n.default=p},9815:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/classnotes/09",function(){return t(7302)}])}},function(e){e.O(0,[734,36,774,888,179],(function(){return n=9815,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
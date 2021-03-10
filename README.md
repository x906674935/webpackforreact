######  开发环境装commit规范的插件 
npm i commitizen validate-commit-msg conventional-changelog-cli -D 
commitizen init cz-conventional-changelog --save --save-exact   //初始化 cz命令代替commit
npm i husky validate-commit-msg --save-dev //commit不合规范不能提交 需要加入下面这个json
"husky":{
    "hooks":{
      "commit-msg":"validate-commit-msg"
    }
  },

#### 装ts   
npm i typescript -g 
tsc --init //初始化 ts

####  装 react
npm i react react-dom react-router-dom @types/react @types/react-dom @types/react-router-dom -S
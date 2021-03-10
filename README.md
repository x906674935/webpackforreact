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
#### 装webpack 
npm i webpack webpack-cli webpack-dev-server html-webpack-plugin hoist-non-react-statics -D
#### 装ts loader
npm i typescript ts-loader source-map-loader -D
#### 装  全局状态管理
npm i redux react-redux  @types/react-redux redux-thunk redux-logger @types/redux-logger -S
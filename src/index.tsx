import * as React from "react";
import ReactDom from "react-dom";    //这样写需要配置tsconfig

let root  = document.getElementById("root");
let props = {className:"title"};
let element = React.createElement('div',props,"Hello World")

ReactDom.render(element,root)
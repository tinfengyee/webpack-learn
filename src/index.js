import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
  render() {
    return <div>Hello World</div>
  }
}

ReactDom.render(<App />, document.getElementById('root'));
// import _ from 'lodash';
// import printMe from './print.js';
// import './style.scss';

// function component() {
//   const element = document.createElement('div');
//   const btn = document.createElement('button');

//   // lodash，现在通过一个 script 引入
//   element.innerHTML = _.join(['Hello', 'weback'], ' ');
//   element.classList.add('red');

//   btn.innerHTML = '点击这里，然后查看 console！';
//   btn.onclick = printMe;

//   element.appendChild(btn);

//   return element;
// }

// // document.body.appendChild(component()); 
// // 继续点击示例页面上的按钮， 你会发现控制台仍在打印旧的 printMe 函数。这是因为按钮的 onclick 事件处理函数仍然绑定在旧的 printMe 函数上。
// let element = component();
// document.body.appendChild(element);

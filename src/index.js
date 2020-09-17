import _ from 'lodash';
import printMe from './print.js';
import './style.scss';
import Icon from './icon.jpg';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // lodash，现在通过一个 script 引入
  element.innerHTML = _.join(['Hello', 'weback'], ' ');
  element.classList.add('red');

  btn.innerHTML = '点击这里，然后查看 console！';
  btn.onclick = printMe;

  element.appendChild(btn);

  const iconImg = new Image();
  iconImg.src = Icon;
  element.appendChild(iconImg);

  return element;
}

// document.body.appendChild(component()); 
// 继续点击示例页面上的按钮， 你会发现控制台仍在打印旧的 printMe 函数。这是因为按钮的 onclick 事件处理函数仍然绑定在旧的 printMe 函数上。
let element = component();
document.body.appendChild(element);

console.log(module);
if (module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
    document.body.appendChild(element);
  })
}
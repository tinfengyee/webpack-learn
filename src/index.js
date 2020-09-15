import _ from 'lodash';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // lodash，现在通过一个 script 引入
  element.innerHTML = _.join(['Hello', 'weback'], ' ');

  btn.innerHTML = '点击这里，然后查看 console！';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
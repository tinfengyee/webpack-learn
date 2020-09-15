import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import dataJson from './data.json';

function component() {
  const element = document.createElement('div');

  // lodash，现在通过一个 script 引入
  element.innerHTML = _.join(['Hello', 'weback'], ' ');
  element.classList.add('hello');

  console.log(Icon);
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);
  console.log(dataJson);

  return element;
}

document.body.appendChild(component());
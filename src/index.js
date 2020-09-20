import _ from 'lodash';
import $ from 'jquery';
import Test from './test';

const dom = $('<div>');
dom.html(_.join(['Hello', 'Webpack'], '-'));
// dom.on('click', Test.bind(null, 'Hello World'))
$('body').append(dom);

// const element = document.createElement('div');
// element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// document.body.appendChild(component);


// function getComponent() {
//   return import(
//     /* webpackChunkName: "lodash" */
//     'lodash').then(({ default: _ }) => {
//     const element = document.createElement('div');
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     return element;
//   })
// }

// document.addEventListener('click', () => {
//   getComponent().then(component => {
//     document.body.appendChild(component);
//   });
// })

// document.addEventListener('click', () => {
//   import(/* webpackPrefetch: true */'./test.js').then(({default: func}) => {
//     func();
//   })
// })
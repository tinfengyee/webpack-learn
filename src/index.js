/*
 即使不配置splitChunks,异步代码会自动分割
*/
function getComponent() {
  return import('lodash').then(({ default: _ }) => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  })
}

getComponent().then(component => {
  document.body.appendChild(component);
});
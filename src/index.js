
// import _ from 'lodash';

// const element = document.createElement('div');
// element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// document.body.appendChild(component);


function getComponent() {
  return import(
    /* webpackChunkName: "lodash" */
    'lodash').then(({ default: _ }) => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  })
}

document.addEventListener('click', () => {
  getComponent().then(component => {
    document.body.appendChild(component);
  });
})
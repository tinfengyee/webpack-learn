function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'weback'], ' ');

  return element;
}

document.body.appendChild(component());
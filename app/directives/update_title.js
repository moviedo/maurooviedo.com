export default function (newValue, oldValue) {
  // do something based on the updated value
  // this will also be called for the initial value
  var content = getCleanContent(this.el.innerHTML),
      pageName = getTitle(newValue);
  
  pageName = `${pageName[0].toUpperCase()}${pageName.slice(1)}`;
  
  this.el.innerHTML = `${content}: ${pageName}`;
};

function getTitle(path) {
  if (path === '/')
    return 'home';
  else
    return path.slice(1);
}

function getCleanContent(content) {
  var index = content.indexOf(':');
  return index == -1 ? content : content.slice(0, index);
}

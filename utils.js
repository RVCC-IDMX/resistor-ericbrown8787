class Utils {
  static properCase(string) {
    return `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;
  }
  static log(content) {
    console.log(content);
  }
  static select(selector, scope) {
    return (scope || document).querySelector(selector);
  }
  static selectAll(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  }
  static listen(target, event, callback, capture = false) {
    target.addEventListener(event, callback, !!capture);
  }
  static eventLog(e) {
    console.log(e.target);
  }
  static sanitizeInput(inputValue) {
    const div = document.createElement('div');
    div.textContent = inputValue;
    return div.innerHTML;
  }
  static createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classlist.add(className);
    return element;
  }
  static deleteChildElements(parentElement) {
    let child = parentElement.lastElementChild;
    while (child) {
      parentElement.removeChild(child);
      child = parentElement.lastElementChild();
    }
  }
  static addClass(selector, className, scope) {
    (scope || document).querySelector(selector).classList.add(className);
  }
  static addClassAll(selector, className, scope) {
    (scope || document).querySelectorAll(selector).classList.add(className);
  }
  static isIOS() {
    return (
      (/iPad|iPhone|iPod/.test(navigator.platform) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
      !window.MSStream
    ); // MSStream is to avoid IE11
  }
}

export {Utils};
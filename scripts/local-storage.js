const setLocalStorage = function (lang) {
  if (localStorage.getItem('lang') == null) {
    console.log('null');
    localStorage.setItem('lang', 'en');
  } else {
    localStorage.setItem('lang', lang);
  }
}

const getLocalStorage = function () {
  return localStorage.getItem('lang');
}

export { setLocalStorage, getLocalStorage };

import { getLocalStorage, setLocalStorage } from "./local-storage.js";

const initKeyboardBehavior = function () {
  const keyboard = document.querySelector('.keyboard');

  document.addEventListener('keydown', event => {
    if (event.code == 'AltLeft' && event.ctrlKey) {
      if (getLocalStorage() == 'en') {
        setLocalStorage('ru');
      } else {
        setLocalStorage('en');
      }
      document.querySelectorAll('.key').forEach(key => {
        key.querySelector('.key-ru').classList.toggle('hidden');
        key.querySelector('.key-en').classList.toggle('hidden');
      });
    }
    event.preventDefault();
    document.querySelector(`#${event.code}`).dispatchEvent(new Event('mousedown'));
    document.querySelector(`#${event.code}`).dispatchEvent(new Event('click'));
  });

  document.addEventListener('keyup', event => {
    document.querySelector(`#${event.code}`).dispatchEvent(new Event('mouseup'));
  });
}

export { initKeyboardBehavior };
const initKeyboardBehavior = function () {
  const keyboard = document.querySelector('.keyboard');
  const textArea = document.querySelector('.textarea');
  let isCapsed = false;

  console.log(keyboard);
  document.addEventListener('keydown', event => {
    switch (event.code) {
      default:
        event.preventDefault();
        document.querySelector(`#${event.code}`).dispatchEvent(new Event('mousedown'));
        document.querySelector(`#${event.code}`).dispatchEvent(new Event('click'));
    }
  });
  document.addEventListener('keyup', event => {
    keyboard.querySelector(`#${event.code}`).classList.remove('key_pressed');
  });
}

export { initKeyboardBehavior };
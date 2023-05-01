import { renderMainWindow, renderHeader, renderTextArea, renderKeyboard } from './components-render.js';
import { initKeyboardBehavior } from './keyboard-behavior.js';
import { getLocalStorage, setLocalStorage } from './local-storage.js';

async function main() {
  renderMainWindow();
  renderHeader();
  renderTextArea();
  await renderKeyboard();
  initKeyboardBehavior();
}

main();
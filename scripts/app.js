import { renderMainWindow, renderHeader, renderTextArea, renderKeyboard, renderFooter } from './components-render.js';
import { initKeyboardBehavior } from './keyboard-behavior.js';
import { getLocalStorage, setLocalStorage } from './local-storage.js';

async function main() {
  renderMainWindow();
  renderHeader();
  renderTextArea();
  await renderKeyboard();
  initKeyboardBehavior();
  renderFooter();
}

main();
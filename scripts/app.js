import { renderMainWindow, renderHeader, renderTextArea, renderKeyboard } from './components-render.js';
import { initKeyboardBehavior } from './keyboard-behavior.js';

async function main() {
  renderMainWindow();
  renderHeader();
  renderTextArea();
  await renderKeyboard();
  initKeyboardBehavior();
}

main();
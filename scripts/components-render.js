const renderMainWindow = function () {
  const body = document.body;
  const container = document.createElement('main');
  container.classList.add('main-container');
  body.prepend(container);
}

const renderHeader = function () {
  const container = document.querySelector('.main-container');
  const header = document.createElement('header');
  const socialLinksContainer = document.createElement('ul');
  const headline = document.createElement('h1');

  socialLinksContainer.classList.add('social-links-container');
  socialLinksContainer.innerHTML = 
      `<li class="social-links-container__link">
         <a href="https://rs.school/js/">
           <img class="rss-logo" src="./assets/icons/rss-logo.svg">
         </a>
       </li>
       <li class="social-links-container__link">
         <a href="https://github.com/midicable">
           <img class="github-logo" src="./assets/icons/github-logo.svg">
         </a>
       </li>`;
  
  headline.classList.add('headline')
  headline.innerHTML =
      'Rolling Scopes School <br>' + 
      'Virtual Keyboard';
  
  header.classList.add('header');
  header.appendChild(socialLinksContainer);
  header.appendChild(headline);

  container.appendChild(header);
}

const renderTextArea = function () {
  const container =  document.querySelector('.main-container');
  const textArea = document.createElement('textarea');

  textArea.autofocus = true;
  textArea.classList.add('textarea');
  
  container.append(textArea);
}

const renderKey = function (keyData) {
  const key = document.createElement('div');

  key.id = keyData.code;
  key.className = keyData.class;
  key.innerHTML =
      `<div class="key-en">
         <span class="key-en_lowercase">${keyData.en.lowercase}</span>
         <span class="key-en_shifted hidden">${keyData.en.shifted}</span>
         <span class="key-en_capsed hidden">${keyData.en.capsed}</span>
         <span class="key-en_capsed-shifted hidden">${keyData.en.capsed_shifted}</span>
       </div>
       <div class="key-ru hidden">
         <span class="key-en_lowercase">${keyData.ru.lowercase}</span>
         <span class="key-en_shifted hidden">${keyData.ru.shifted}</span>
         <span class="key-en_capsed hidde">${keyData.ru.capsed}</span>
         <span class="key-en_capsed-shifted hidden">${keyData.ru.capsed_shifted}</span>
       </div>`;
  
  return key; 
}

const renderKeyboard = async function () {
  const url = './data/keys.json';
  const response = await fetch(url);
  const keysData = await response.json();

  const container = document.querySelector('.main-container');
  const keyboard = document.createElement('div');

  keyboard.classList.add('keyboard');
  keysData.forEach(keyData => {
    keyboard.append(renderKey(keyData));
  });
      
  container.append(keyboard);
}

export { renderMainWindow, renderHeader, renderTextArea, renderKeyboard };
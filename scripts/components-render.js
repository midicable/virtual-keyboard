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

const renderKeyboard = function () {
  const container = document.querySelector('.main-container');
  const keyboard = document.createElement('div');

  keyboard.classList.add('keyboard');
  keyboard.innerHTML =
      `<div class="key key-alphabetic">
         <div class="key-en">
           <span class="key-en_lowercase">\`</span>
           <span class="key-en_shifted">~</span>
           <span class="key-en_capsed">\`</span>
           <span class="key-en_capsed-shifted">~</span>
         </div>
         <div class="key-ru">
           <span class="key-en_lowercase">ё</span>
           <span class="key-en_shifted">Ё</span>
           <span class="key-en_capsed">Ё</span>
           <span class="key-en_capsed-shifted">ё</span>
         </div>
       </div>`;

  container.append(keyboard);
}

export { renderMainWindow, renderHeader, renderTextArea, renderKeyboard };
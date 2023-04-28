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

export { renderMainWindow, renderHeader, renderTextArea };
const renderMainWindow = function() {
  const body = document.body;
  const container = document.createElement('main');
  container.classList.add('main-container');
  body.prepend(container);
}

const renderHeader = function() {
  const container = document.querySelector('.main-container');
  const header = document.createElement('header');
  const socialLinksContainer = document.createElement('div');
  const headline = document.createElement('h1');

  socialLinksContainer.classList.add('social-links-container');
  socialLinksContainer.innerHTML = 
      '<img class="social-links-container__link" src="./assets/icons/rss-logo.svg" alt="RSS Logo">\n' +
      '<img class="social-links-container__link" src="./assets/icons/gh-logo.png" alt="GH Logo">';
  
  headline.classList.add('headline')
  headline.innerHTML =
      'Rolling Scopes School <br>' + 
      'Virtual Keyboard';
  
  header.classList.add('header');
  header.appendChild(socialLinksContainer);
  header.appendChild(headline);

  container.appendChild(header);
}

const renderTextArea = function() {
  
}

export { renderMainWindow, renderHeader };
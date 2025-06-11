const fs = require('node:fs');
const defaultTranslations = {
  headerText: 'Cookies on the BBC website',
  bannerText: 'Example banner text in here that will contain links to the settings page'

}; //import this from the en.json as a default

export const ShowBanner = (show, language) => {

  //the arg passed in is just an override instead of checking for the cookie
  if (show === false) {
    console.log('ckns_explicit has been set');
  }

  const languages = ['en', 'cy', 'ga', 'gd']; //there will be plenty more in here...

  // We will have a folder of translation files, probably JSON or something called en.json, cy.json etc.
  // We can then check for these tranlation files, if they aren't found default to english.
  let bannerText = {
    headerText: '',
    bannerText: ''
  };

  if (!language) {
    fs.readFile(`/translations/${language}.json`, 'utf8', (err, data) => {
      if (err) {
        //default en.json
        bannerText = defaultTranslations
      } else {
        bannerText = data;
      }
    });
  }

  const banner = `
    <div class="cookie-banner">
      <div class="container">
        <div class="cookie-banner-content">
          <div class="cookies-banner-text">
            <h2>${bannerText.headerText}</h2>
            <p>${bannerText.bannerText}</p>
          </div>
          <div class="cookies-banner-buttons">
            <button>Accept</button>
            <button>Reject</button>
            <button>Go to settings</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(banner)
};


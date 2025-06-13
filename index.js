//const fs = require('node:fs');
const defaultTranslations = {
  headerText: 'Cookies on the BBC website',
  bannerText: 'Example banner text in here that will contain links to the settings page'

}; //import this from the en.json as a default

export const crunch = () => {
  console.log('cookie crunch called!');
}

export const showBanner = () => {
  const languages = ['en', 'cy', 'ga', 'gd']; //there will be plenty more in here...

  // We will have a folder of translation files, probably JSON or something called en.json, cy.json etc.
  // roughly how translations would work...
  /* if (language) {
    fs.readFile(`/translations/${language}.json`, 'utf8', (err, data) => {
      if (err) {
        //default en.json
        bannerText = defaultTranslations
      } else {
        bannerText = data;
      }
    });
  } else {
    bannerText = defaultTranslations;
  } */

  let bannerText = defaultTranslations;
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

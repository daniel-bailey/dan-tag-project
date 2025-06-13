//const fs = require('node:fs');
const defaultTranslations = {
  headerText: 'Cookies on the BBC website',
  bannerText: 'Example banner text in here that will contain links to the settings page'

}; //import this from the en.json as a default

export const crunch = () => {
  console.log('cookie crunch called!');
}

export const showBanner = () => {
  const banner = document.createElement("div");
  banner.innerHTML = `
    <h2>BBC Cookie</h2>
    <p>text in here about the cookies etc. blah blah blah
  `;
  
  banner.style.position = 'absolute';
  banner.style.top = '0';
  banner.style.backgroundColor = 'pink';
  banner.style.padding = '10px';
  banner.style.zIndex = '9999';

  document.body.appendChild(banner);
};

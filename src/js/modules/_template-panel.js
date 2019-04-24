// Slider module

const templatePanel = () => {
  // Script for template options panel
  console.log('panel');
  const templatePanel = document.querySelectorAll('.js-template-options-panel')[0];
  const templatePanelButton = document.querySelector('.template__button');

  // Open and Close Options Panel
  templatePanelButton.addEventListener('click', (e) => {
    e.preventDefault;

    templatePanel.classList.toggle('template-panel-open')
  });

  // Color Options
  const colorSwitches = document.querySelectorAll('.switch');
  const themStylesheet = document.querySelector('#theme-stylesheet');

  for (var i = 0; i < colorSwitches.length; i++) {
    colorSwitches[i].addEventListener('click', (e) => {
      const colorSwitchTitle = e.target.getAttribute('title');

      themStylesheet.setAttribute('href', './css/themes/trinity-' + colorSwitchTitle + '.css');
    });
  }
};

export { templatePanel };

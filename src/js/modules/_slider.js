// Slider module

const slider = () => {
  console.log('slider');
  const sliderLinks = document.querySelectorAll('.slider__link');

  for (var i = 0; i < sliderLinks.length; i++) {
    sliderLinks[i].addEventListener('click', (event) => {
      // Block default link behavior
      event.preventDefault();

      // Cache slider link 'href' attribute
      const sliderLinkHref = event.currentTarget.getAttribute('href');

      if (event.currentTarget.classList.contains('slider__link--active')) {
        // When user clicks on already active link, do nothing
        return false;
      } else {
        // When user clicks on not active link find currently active link and deactivate it
        document.querySelector('.slider__link--active').classList.remove('slider__link--active');

        // Next, find currently active slide and deactivate it
        document.querySelector('.slider__slide--active').classList.remove('slider__slide--active');

        // Next, activate clicked link
        event.currentTarget.classList.add('slider__link--active');

        // Finally, activate slide related to clicked link
        document.querySelector(sliderLinkHref).classList.add('slider__slide--active');
      }
    });
  }
};

export { slider };

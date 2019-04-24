// Nav lnks module

const navLinks = () => {
  console.log('nav links');
  const navLinks = document.querySelectorAll('.js-nav a, .js-top');

  // Cycle through all navigation links and attach event listener for each
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', (event) => {
      // Block default link behavior
      event.preventDefault();

      // Smoothly scroll to the section related to clicked link
      $('html, body').animate({
        scrollTop: $($.attr(event.target, 'href')).offset().top
      }, 550);
    });
  }
};

export { navLinks };

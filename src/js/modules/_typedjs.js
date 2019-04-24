// TypedJS module

const typedJS = () => {
  console.log('typedjs');

  Typed.new('.js-typed-h1', {
    contentType: 'text',
    loop: false, // loop on or off (true or false)
    loopCount: false, // number of loops, false = infinite
    showCursor: false, // disable typing cursor
    strings: ['Clean, modern and beautiful design'],
    typeSpeed: 50, // typing speed
    callback: () => { // call when done callback function
      setTimeout(() => {
        Typed.new('.js-typed-p', {
          contentType: 'text',
          loop: false, // loop on or off (true or false)
          loopCount: false, // number of loops, false = infinite
          showCursor: false, // disable typing cursor
          strings: ['Trinity Bootstrap Template comes with a large number of example pages, that help you quickly setup the basic flows for your application. From registering to building your profile or setting a blog, we\'ve got you covered.'],
          typeSpeed: 5 // typing speed
        });
      }, 35);
    }
  });
};

export { typedJS };

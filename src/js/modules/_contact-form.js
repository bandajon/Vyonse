// Contact form module

const contactForm = () => {
  console.log('contact form');
  $('#formContact').submit((e) => {
    e.preventDefault();

    let $this = e.target;

    $.ajax({
      data: $($this).serialize(),
      type: 'POST',
      url: 'contact.php'
    }).done((response) => {
      e.preventDefault();

      // Message shown if message is successfully submited
      alert('Your message has been sent.');

      // Clear the form
      $($this)[0].reset();

      // Reset background of inputs to show labels
      const formInputs = document.querySelectorAll('form input, form textarea');

      formInputs.forEach((formInput) => {
        formInput.style.background = 'transparent';
      });
    }).fail((data) => {
      e.preventDefault();

      // Message shown if sending message failed
      alert('There was a problem with sending your message. Please try it again.');
      console.error(data);
    });
  });
};

export { contactForm };

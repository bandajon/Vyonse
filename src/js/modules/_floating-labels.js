// Form floating labels module

const floatingLabels = () => {
  // Scripts for floating labels
  console.log('floating labels')
  // Cache all form elements
  const formElements = document.querySelectorAll('form .form-element-transparent')

  // Cycle through all form elements and add event listener for each
  for (var i = 0; i < formElements.length; i++) {
    // Fix overlapping text caused by browsers autofill
    if (formElements[i].value.length !== 0) {
      formElements[i].style.background = '#fff'
    }

    let currentElement = formElements[i]

    currentElement.addEventListener('blur', () => {
      // If input field contains text, add background to hide label
      if (currentElement.value.length !== 0) {
        currentElement.style.background = '#fff';
      } else {
        // If input field doesn't contains text, make background transparent to make the label visible
        currentElement.style.background = 'transparent'
      }
    })
  }
}

export { floatingLabels }

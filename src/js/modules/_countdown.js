// Countdown module

const countdown = () => {
  console.log('countdown');
  // Cache all countdown boxes into consts
  const countdown = document.querySelector('.js-countdown');
  const countdownDays = document.querySelector('.countdown__days .number');
  const countdownHours= document.querySelector('.countdown__hours .number');
  const countdownMinutes= document.querySelector('.countdown__minutes .number');
  const countdownSeconds= document.querySelector('.countdown__seconds .number');

  // Extract the deadline date from 'data' attribute and use it to create new date
  const deadline = countdown.dataset.deadline;
  const deadlineDate = new Date(deadline).getTime()

  // Update the count down every 1 second (1000 milliseconds)
  setInterval(() => {
    // Get current date and time
    const currentDate = new Date().getTime();

    // Calculate the distance between current date and time and the deadline date and time
    const distance = deadlineDate - currentDate;

    // Calculations the data for remaining days, hours, minutes and seconds
    const days = (Math.floor(distance / (1000 * 60 * 60 * 24)));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Insert the result data into individual countdown boxes
    // If the number is lower than 10, add leading 0
    countdownDays.innerHTML = days;
    countdownHours.innerHTML = hours.toString().length !== 1 ? hours : '0' + hours;
    countdownMinutes.innerHTML = minutes.toString().length !== 1 ? minutes : '0' + minutes;
    countdownSeconds.innerHTML = seconds.toString().length !== 1 ? seconds : '0' + seconds;
  }, 1000);
};

export { countdown };

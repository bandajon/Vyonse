// Video module

const videoPlayer = () => {
  // Script for video hero
  // Note: this script is not necessary for using Landing page with video hero. It is just a test for HTML5 video support
  console.log('video');
  const isHTML5Video = (typeof(document.createElement('video').canPlayType) != 'undefined');

  if (!isHTML5Video) {
    // If HTML5 video is not supported, add class 'no-video' to HTML element
    document.querySelector('html').classList.add('no-video');
  }
};

export { videoPlayer };

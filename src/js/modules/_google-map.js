// Google Map module

const googleMap = () => {
  // Script for Google map
  console.log('Googl map');

  // Map Coordinates
  const latlng = new google.maps.LatLng(50.0753355, 14.4113856);

  const mapStyles = [
    {
      'elementType': 'labels.text.fill',
      'featureType': 'all',
      'stylers': [
        {
          'color': '#ffffff'
        }
      ]
    },
    {
      'elementType': 'labels.text.stroke',
      'featureType': 'all',
      'stylers': [
        {
          'visibility': 'on'
        },
        {
          'color': '#424b5b'
        },
        {
          'weight': 2
        },
        {
          'gamma': '1'
        }
      ]
    },
    {
      'elementType': 'labels.icon',
      'featureType': 'all',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'elementType': 'geometry',
      'featureType': 'administrative',
      'stylers': [
        {
          'weight': 0.6
        },
        {
          'color': '#545b6b'
        },
        {
          'gamma': '0'
        }
      ]
    },
    {
      'elementType': 'geometry',
      'featureType': 'landscape',
      'stylers': [
        {
          'color': '#545b6b'
        },
        {
          'gamma': '1'
        },
        {
          'weight': '10'
        }
      ]
    },
    {
      'elementType': 'geometry',
      'featureType': 'poi',
      'stylers': [
        {
          'color': '#666c7b'
        }
      ]
    },
    {
      'elementType': 'geometry',
      'featureType': 'poi.park',
      'stylers': [
        {
          'color': '#545b6b'
        }
      ]
    },
    {
      'elementType': 'geometry',
      'featureType': 'road',
      'stylers': [
        {
          'color': '#424a5b'
        },
        {
          'lightness': '0'
        }
      ]
    },
    {
      'elementType': 'geometry',
      'featureType': 'transit',
      'stylers': [
        {
          'color': '#666c7b'
        }
      ]
    },
    {
      'elementType': 'geometry',
      'featureType': 'water',
      'stylers': [
        {
          'color': '#2e3546'
        }
      ]
    }
  ]

  // Map Options
  const myOptions = {
    center: latlng,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    styles: mapStyles,
    zoom: 15
  };

  // Find map wrapper
  const map = new google.maps.Map(document.querySelector('#google-map'), myOptions);

  //  Start Marker
  const myLatlng = new google.maps.LatLng(50.0753355, 14.4113856);

  // Marker Text
  const contentString = '<div id=\'map-tooltip\' class=\'map-tooltip\'><h5>Our Office Location</h5><p>Come see us!</p></div>';

  const markerIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="512pt" height="512pt" viewBox="0 0 512 512"><path fill="#fff" d="M239.05 26.88c25.5-3.44 51.95.12 75.53 10.47 31.2 13.46 57.15 38.61 71.63 69.35 18.05 37.53 18.12 83.06.24 120.67-19.48 38.38-38.26 77.12-57.46 115.65-23.65 47.77-47.25 95.57-70.95 143.32-38.49-77.68-76.91-155.39-115.38-233.09-3.42-6.86-6.7-13.81-10.41-20.52-12.48-24.05-18.03-51.7-15.38-78.69 2.82-31.72 16.95-62.22 39.11-85.06 21.91-22.83 51.66-38.03 83.07-42.1m7.49 70.82c-21.3 3.4-40.53 17.24-50.69 36.25-8.89 16.32-10.9 36.23-5.39 53.98 4.39 14.58 13.71 27.61 26.04 36.55 13.22 9.75 29.97 14.62 46.36 13.39 13.67-.76 26.97-5.88 37.91-14.06 15.82-11.86 26.29-30.59 28.06-50.29 2.85-26.52-11.48-53.62-34.5-66.87-14.21-8.49-31.47-11.63-47.79-8.95z"/></svg>'

  const marker = new google.maps.Marker({
    icon: {
      scaledSize: new google.maps.Size(64, 64),
      //url: './images/map-marker-light.svg'
      url: 'data:image/svg+xml;utf-8, \
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M239.05 26.88c25.5-3.44 51.95.12 75.53 10.47 31.2 13.46 57.15 38.61 71.63 69.35 18.05 37.53 18.12 83.06.24 120.67-19.48 38.38-38.26 77.12-57.46 115.65-23.65 47.77-47.25 95.57-70.95 143.32-38.49-77.68-76.91-155.39-115.38-233.09-3.42-6.86-6.7-13.81-10.41-20.52-12.48-24.05-18.03-51.7-15.38-78.69 2.82-31.72 16.95-62.22 39.11-85.06 21.91-22.83 51.66-38.03 83.07-42.1m7.49 70.82c-21.3 3.4-40.53 17.24-50.69 36.25-8.89 16.32-10.9 36.23-5.39 53.98 4.39 14.58 13.71 27.61 26.04 36.55 13.22 9.75 29.97 14.62 46.36 13.39 13.67-.76 26.97-5.88 37.91-14.06 15.82-11.86 26.29-30.59 28.06-50.29 2.85-26.52-11.48-53.62-34.5-66.87-14.21-8.49-31.47-11.63-47.79-8.95z"/></svg>'
    },
    map: map,
    optimized: false,
    position: myLatlng,
    title: 'Welcome to Czech Republic!'
  });

  const infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  google.maps.event.addListener(marker, 'click', function () {
    infowindow.open(map, marker);
  });
  // End Marker
};

export { googleMap };

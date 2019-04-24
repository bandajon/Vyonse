// Main JavaScript file
//
// @author Alex Devero <deveroalex@gmail.com>
//

'use strict';// eslint-disable-line strict

import { contactForm } from './modules/_contact-form.js';
import { countdown } from './modules/_countdown.js';
import { floatingLabels } from './modules/_floating-labels.js';
import { googleMap } from './modules/_google-map.js';
import { navLinks } from './modules/_nav-links.js';
import { particlesJS } from './modules/_particlesjs.js';
import { slider } from './modules/_slider.js';
import { typedJS } from './modules/_typedjs.js';
import { videoPlayer } from './modules/_video.js';
(() => {
  const app = {
    appAnchors: {
      countdown: document.querySelectorAll('.js-countdown'),
      formContact: document.querySelectorAll('.js-form--contact'),
      formGeneral: document.querySelectorAll('.js-form'),
      formHero: document.querySelectorAll('.js-form--hero'),
      googleMap: document.querySelectorAll('.js-google-map'),
      lazyImages: document.querySelectorAll('.js-lazy'),
      navLinks: document.querySelectorAll('.js-nav'),
      particles: document.querySelectorAll('.js-particles'),
      slider: document.querySelectorAll('.js-trinity-slider'),
      typedjs: document.querySelectorAll('.js-typedjs'),
      videoHero: document.querySelectorAll('.js-hero--video')
    },
    appControllers: {
      contactFormController: () => {
        contactForm();
      },
      countdownController: () => {
        countdown();
      },
      formFloatingLabelsController: () => {
        floatingLabels();
      },
      googleMapController: () => {
        googleMap();
      },
      lazyImagesController: () => {
        // Scripts for lazyloading images
        // Docs: http://verlok.github.io/lazyload/
        const lazyload = new LazyLoad();// eslint-disable-line no-unused-vars
      },
      navLinksController: () => {
        navLinks();
      },
      particles: () => {
        particlesJS();
      },
      sliderController: () => {
        slider();
      },
      typedjsController: () => {
        typedJS();
      },
      videoHeroController: () => {
        videoPlayer();
      }
    },
    appSwitches: () => {
      if (app.appAnchors.countdown.length > 0) {
        // Initiate controller for countdown
        app.appControllers.countdownController();
      }

      if (app.appAnchors.formContact.length > 0) {
        // Initiate controller for contact form in the bottom
        app.appControllers.contactFormController();
      }

      if (app.appAnchors.formGeneral.length > 0) {
        // Initiate controller for floating labels
        app.appControllers.formFloatingLabelsController();
      }

      if (app.appAnchors.formHero.length > 0) {
        // Initiate controller for contact form in hero (top)
      }

      if (app.appAnchors.googleMap.length > 0) {
        // Initiate controller for mobile navigation
        app.appControllers.googleMapController();
      }

      if (app.appAnchors.lazyImages.length > 0) {
        // Initiate controller for lazyloading images
        app.appControllers.lazyImagesController();
      }

      if (app.appAnchors.navLinks.length > 0) {
        // Initiate controller for smooth scrolling for navigation links
        app.appControllers.navLinksController();
      }

      if (app.appAnchors.particles.length > 0) {
        // Initiate controller for ParticlesJS
        app.appControllers.particles();
      }

      if (app.appAnchors.slider.length > 0) {
        // Initiate controller for slider
        app.appControllers.sliderController();
      }

      if (app.appAnchors.typedjs.length > 0) {
        // Initiate controller for slider
        app.appControllers.typedjsController();
      }

      if (app.appAnchors.videoHero.length > 0) {
        // Initiate controller for video hero
        app.appControllers.videoHeroController();
      }
      },
    init: () => {
      // Check if JavaScript is available
      if (document.querySelector('.no-js') !== null) {
        document.querySelector('.no-js').classList.add('js');

        document.querySelector('.no-js').classList.remove('no-js');
      }

      // Initiate switches component
      app.appSwitches();
      }
  }

  // Initiate main app
  app.init();
})();

(function () {
  // Variables
  var nav = document.querySelector('.header__navigation');
  var langSwitcher = document.querySelector('.header__language-switcher');
  var search = document.querySelector('.header__search');
  var allToggles = document.querySelectorAll('.header--toggle');
  var navToggle = document.querySelector('.header__navigation--toggle');
  var langToggle = document.querySelector('.header__language-switcher--toggle');
  var searchToggle = document.querySelector('.header__search--toggle');
  var closeToggle = document.querySelector('.header__close--toggle');
  var allElements = document.querySelectorAll(
    '.header--element, .header--toggle'
  );
  var emailGlobalUnsub = document.querySelector('input[name="globalunsub"]');

  // Functions

  // Function for executing code on document ready
  function domReady(callback) {
    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  // Function for toggling mobile navigation
  function toggleNav() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    nav.classList.toggle('open');
    navToggle.classList.toggle('open');

    closeToggle.classList.toggle('show');
  }

  // Function for toggling mobile language selector
  function toggleLang() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    langSwitcher.classList.toggle('open');
    langToggle.classList.toggle('open');

    closeToggle.classList.toggle('show');
  }

  // Function for toggling mobile search field
  function toggleSearch() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    search.classList.toggle('open');
    searchToggle.classList.toggle('open');

    closeToggle.classList.toggle('show');
  }

  // Function for the header close option on mobile
  function closeAll() {
    allElements.forEach(function (element) {
      element.classList.remove('hide', 'open');
    });

    closeToggle.classList.remove('show');
  }

  // Function to disable the other checkbox inputs on the email subscription system page template
  function toggleDisabled() {
    var emailSubItem = document.querySelectorAll('#email-prefs-form .item');

    emailSubItem.forEach(function (item) {
      var emailSubItemInput = item.querySelector('input');

      if (emailGlobalUnsub.checked) {
        item.classList.add('disabled');
        emailSubItemInput.setAttribute('disabled', 'disabled');
        emailSubItemInput.checked = false;
      } else {
        item.classList.remove('disabled');
        emailSubItemInput.removeAttribute('disabled');
      }
    });
  }

  // Execute JavaScript on document ready
  domReady(function () {
    if (!document.body) {
      return;
    } else {
      // Function dependent on language switcher
      if (langSwitcher) {
        langToggle.addEventListener('click', toggleLang);
      }

      // Function dependent on navigation
      if (navToggle) {
        navToggle.addEventListener('click', toggleNav);
      }

      // Function dependent on search field
      if (searchToggle) {
        searchToggle.addEventListener('click', toggleSearch);
      }

      // Function dependent on close toggle
      if (closeToggle) {
        closeToggle.addEventListener('click', closeAll);
      }

      // Function dependent on email unsubscribe from all input
      if (emailGlobalUnsub) {
        emailGlobalUnsub.addEventListener('change', toggleDisabled);
      }
    }
  });
  
  // SVGs Load On View
  domReady(() => {
    
    // Constant for the delay before SVG loads
    const delay = 10;

    // Function to check if an element is completely in view
    function isInView(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
    // Get all elements with the class 'svg_load_on_scroll'
    const elements = document.querySelectorAll('.svg_load_on_scroll');

    // Loop over each element
    elements.forEach(element => {
      
      const computedStyle = window.getComputedStyle(element);
      // Get the background image URL
      const backgroundImage = computedStyle.getPropertyValue('background-image');

      // Check if the background image is a valid SVG URL
      if (backgroundImage && backgroundImage.includes('.svg')) {
        // Remove the url() part to get the clean URL
        const svgUrl = backgroundImage.slice(5, -2);
        // Set the SVG URL as a data attribute
        element.setAttribute('data-svg-background', svgUrl);

        // Remove the current background image
        element.style.backgroundImage = 'none';
        
        // Add a scroll event listener to the document
        document.addEventListener('scroll', function onScroll() {
          
          // Check if the element is completely in view
          if (isInView(element)) {
            // Remove the scroll event listener
            document.removeEventListener('scroll', onScroll);
            // Wait for the specified delay, then restore the background image
            setTimeout(() => {
              const svgBackground = element.getAttribute('data-svg-background');
              element.style.backgroundImage = `url(${svgBackground}?_rf=refresh)`;
              // Force reflow/repaint to ensure animation starts
              element.style.display = 'none';
              // Trigger reflow
              element.offsetHeight; // No need to store this value, it forces reflow
              // Re-display element
              element.style.display = '';
            }, delay);
          }
        });
      }
    });
    
  });
    
})();

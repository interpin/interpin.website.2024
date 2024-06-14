const buttons = document.querySelectorAll('.js-open-close-navigation');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    if (document.body.classList.contains('navigation-show')) {
      document.body.classList.remove('navigation-show');
      setTimeout(function () {
        document.body.classList.remove('navigation-block');
      }, 250);
    } else {
      document.body.classList.add('navigation-block');
      setTimeout(function () {
        document.body.classList.add('navigation-show');
      }, 1);
    }
  });
});


/* Bind all the navigation open/close bits */
const menuItemsWithChildren2 = document.querySelectorAll('.navigation-wrapper .hs-menu-wrapper > ul li.hs-item-has-children.hs-menu-depth-2');

// Loop through all items with children that are in layer 2 
menuItemsWithChildren2.forEach(item => {
  
  // Get the first anchor element that is a direct descendant of the item
  const anchor = item.querySelector('a:first-of-type');
  
  // Add chevrons to the begining
  const chevron = document.createElement('span');
  chevron.classList.add('chevron');
  chevron.innerHTML = '<i class="fas fa-chevron-right"></i>'; // Use Font Awesome icon here
  
  anchor.append(chevron);

  // Mark everything as being closed by default
  const submenu = item.querySelector('ul.hs-menu-children-wrapper');
  submenu.style.maxHeight = '0px';

  // Add event listener to toggle visibility and chevron direction
  anchor.addEventListener('click', () => {
    debugger;
    if (submenu.style.maxHeight === '0px') {
      submenu.style.maxHeight = '300px';
      chevron.innerHTML = '<i class="fas fa-chevron-down"></i>'; // Change to down chevron icon
    } else {
      submenu.style.maxHeight = '0px';
      chevron.innerHTML = '<i class="fas fa-chevron-right"></i>'; // Change back to right chevron icon
    }
  });
});


// Select the element using the provided selector
const fascinatorAtTop = document.querySelector('.body-container > .row-fluid-wrapper > .row-fluid > .span12 .row-number-1 .hero-interactive--container');

// Check if the element exists and add the class to the body
if (fascinatorAtTop) {
    document.body.classList.add('fascinator-at-top');
}
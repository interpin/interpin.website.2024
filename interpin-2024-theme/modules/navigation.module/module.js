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

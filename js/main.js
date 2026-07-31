(function(){
  var nav = document.getElementById('siteNav');
  var toggle = document.getElementById('navToggle');
  var navList = document.getElementById('navList');

  function onScroll(){
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  toggle.addEventListener('click', function(){
    navList.classList.toggle('open');
  });

  window.closeNav = function(){
    navList.classList.remove('open');
  };

  var slides = document.querySelectorAll('#slideshow img');
  if (slides.length > 1) {
    var current = 0;
    setInterval(function(){
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 4500);
  }
})();

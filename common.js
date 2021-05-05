window.addEventListener('load', () => {
  autoplay();

  function navruzTime() {
    const navruzDate = new Date('21 may, 2021, 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = navruzDate - now;
    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;
    const d = Math.floor(distance / day);
    const h = Math.floor(distance % day / hour);
    const m = Math.floor(distance % hour / min);
    const s = Math.floor(distance % min / sec);
    document.querySelector('.day').innerHTML = d;
    document.querySelector('.hour').innerHTML = h;
    document.querySelector('.min').innerHTML = m;
    document.querySelector('.sec').innerHTML = s;
    autoplay();
  }

  function autoplay() {
    setTimeout(navruzTime, 1000);
  }

  function typing(element) {
    let inner = element.html(),
        fullText = '',
        letterCount = 0,
        interval = setInterval(function () {
      fullText += inner[letterCount];
      element.html(fullText);
      letterCount++;

      if (fullText == inner) {
        clearInterval(interval);
      }
    }, 50);
  }

  typing($('.header-content_title'));
  AOS.init({
    // Global settings:
    disable: false,
    // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded',
    // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init',
    // class applied after initialization
    animatedClassName: 'aos-animate',
    // class applied on animation
    useClassNames: false,
    // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false,
    // disables automatic mutations' detections (advanced)
    debounceDelay: 50,
    // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99,
    // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120,
    // offset (in px) from the original trigger point
    delay: 0,
    // values from 0 to 3000, with step 50ms
    duration: 400,
    // values from 0 to 3000, with step 50ms
    easing: 'ease',
    // default easing for AOS animations
    once: false,
    // whether animation should happen only once - while scrolling down
    mirror: false,
    // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

  });
});
$('.header-menu').click(function () {
  $('.header-menu__item').toggleClass('active');
});
let burger = document.querySelector('.header-menu '),
    body = document.querySelector('body'),
    bar = document.querySelector('.header-nav_bar');
burger.addEventListener("click", function (e) {
  if (bar.style = "left:-100%") {
    bar.style = "left:0";
  } else {}

  console.log(e);
});
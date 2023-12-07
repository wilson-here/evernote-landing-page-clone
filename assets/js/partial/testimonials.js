const playTestimonials = () => {
  const testLogo = document.querySelectorAll(".test-logo");
  const testQuote = document.querySelectorAll(".test-quote");
  const isScreenLg = window.matchMedia("(min-width: 1024px)").matches;

  // TESTIMONIALS - active
  const activeLogo = (currentLogo) => {
    testLogo.forEach((item) => {
      item.classList.add(isScreenLg ? "opacity-20" : "hidden");
    });
    currentLogo.classList.remove(isScreenLg ? "opacity-20" : "hidden");
  };

  const activeTest = (currentLogo) => {
    testQuote.forEach((item) => {
      item.classList.add("hidden");
    });
    const activeLogo = currentLogo.alt;
    testQuote.forEach((item) => {
      const author = item
        .querySelector(".author")
        .innerHTML.toLowerCase()
        .trim();
      author === activeLogo ? item.classList.remove("hidden") : null;
    });
  };

  const active = function (currentLogo) {
    activeLogo(currentLogo);
    activeTest(currentLogo);
  };

  testLogo.forEach((item) => {
    item.onclick = function () {
      active(this);
    };
  });

  // TESTIMONIALS - autoplay
  const playNext = () => {
    let currentLogo = document
      .querySelector(".test-logo-wrap")
      .querySelector(isScreenLg ? ":not(.opacity-20)" : ":not(.hidden)");
    currentLogo = currentLogo.nextElementSibling
      ? currentLogo.nextElementSibling
      : currentLogo.parentElement.firstElementChild;
    active(currentLogo);
  };
  const firstLogo = testLogo[0];
  active(firstLogo);
  setInterval(playNext, 3000);
};

export default playTestimonials;

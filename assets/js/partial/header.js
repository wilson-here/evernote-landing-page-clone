const toggleMenu = () => {
  const hamburger = document.querySelector(".hamburger");
  const close = document.querySelector(".close");
  const menu = document.querySelector(".menu");
  hamburger.onclick = function () {
    hamburger.classList.add("hidden");
    close.classList.remove("hidden");
    menu.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  };
  close.onclick = function () {
    hamburger.classList.remove("hidden");
    close.classList.add("hidden");
    menu.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  };
};
export default toggleMenu;

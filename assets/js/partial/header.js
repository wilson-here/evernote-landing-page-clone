const handleMenu = () => {
  const hamburger = document.querySelector(".hamburger");
  const close = document.querySelector(".close");
  const menu = document.querySelector(".menu");
  const more = document.querySelectorAll(".more");

  const openMenu = () => {
    hamburger.classList.add("hidden");
    close.classList.remove("hidden");
    menu.classList.remove("h-0", "overflow-hidden");
    menu.classList.add("h-[calc(100vh-5rem)]", "overflow-auto", "py-4");
    document.body.classList.add("overflow-hidden");
  };
  hamburger.onclick = openMenu;

  const closeMenu = () => {
    hamburger.classList.remove("hidden");
    close.classList.add("hidden");
    menu.classList.remove("h-[calc(100vh-5rem)]", "overflow-auto", "py-4");
    menu.classList.add("h-0", "overflow-hidden");
    document.body.classList.remove("overflow-hidden");
  };
  close.onclick = closeMenu;

  const toggleMore = function () {
    this.lastElementChild.classList.toggle("rotate-180");
    this.nextElementSibling.classList.toggle("max-h-0");
    this.nextElementSibling.classList.toggle("max-h-[1000px]");
    this.nextElementSibling.classList.toggle("pb-4");
  };
  more.forEach((item) => {
    item.onclick = toggleMore;
  });
};

export default handleMenu;

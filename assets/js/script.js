const testLogo = document.querySelectorAll(".test-logo");
const active = function () {
  testLogo.forEach((item) => {
    item.classList.add("opacity-20");
  });
  this.classList.remove("opacity-20");
};

testLogo.forEach((item) => {
  item.onclick = active;
});

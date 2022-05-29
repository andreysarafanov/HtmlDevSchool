(() => {
  const navButton = document.querySelector("#menu-button");
  const navList = document.querySelector("#menu-list");
  const menu = document.querySelector("#menu");

  navButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    navList.classList.toggle("showed");
    menu.classList.toggle("showed");
    navButton.classList.toggle("crossed");
  });
})();

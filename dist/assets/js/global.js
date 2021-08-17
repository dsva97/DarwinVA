(() => {
  // src/js/header.js
  var headerLinks = [...document.querySelectorAll("header a")];
  var updateHrefLink = (currentPath, nextPath) => {
    if (nextPath === "/") {
      headerLinks.map((link) => {
        link.href = link.dataset.hash;
      });
    } else if (currentPath === "/") {
      headerLinks.map((link) => {
        link.href = link.dataset.href;
      });
    }
  };
  updateHrefLink("/", "/");
  window.ALink.subscribe(updateHrefLink);
  if (window.location.hash) {
    window.location.href = window.location.href;
  }
  var btnMenu = document.getElementById("btn-menu");
  var listMenu = document.getElementById("nav-menu");
  btnMenu.addEventListener("click", () => {
    listMenu.classList.toggle("menuIsOpen");
    btnMenu.classList.toggle("btnIsOpen");
  });
})();

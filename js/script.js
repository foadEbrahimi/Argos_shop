let shopList = document.querySelector(".shop-item");
let navbarAside = document.querySelector(".navbar-Aside");

shopList.addEventListener("click", () =>
  navbarAside.classList.toggle("show-Aside")
);

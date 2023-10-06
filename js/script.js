let shopList = document.querySelector(".shop-item");
let navbarAside = document.querySelector(".navbar-Aside");

shopList.addEventListener("click", () =>
  navbarAside.classList.toggle("show-Aside")
);
const swiper = new swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

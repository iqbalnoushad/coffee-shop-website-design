const navbar = document.querySelector(".navbar");
const cart = document.querySelector(".cart-items-container");
const search = document.querySelector(".search-form");

document.querySelector("#btn-menu").onclick = () => {
  navbar.classList.toggle("active");
  cart.classList.remove("active");
  search.classList.remove("active");
};

document.querySelector("#btn-cart").onclick = () => {
  cart.classList.toggle("active");
  navbar.classList.remove("active");
  search.classList.remove("active");
};

document.querySelector("#btn-search").onclick = () => {
  search.classList.toggle("active");
  navbar.classList.remove("active");
  cart.classList.remove("active");
};

window.scroll = () => {
  navbar.classList.remove("active");
  cart.classList.remove("active");
  search.classList.remove("active");
};

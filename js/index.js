const imgs = document.querySelectorAll("div.img-thumbs img");

const section = document.querySelector("header");
const lay = document.querySelector(".lay");

imgs.forEach((e) => {
   e.addEventListener("click", (event) => {
      section.style.backgroundImage = `url(../${event.target.getAttribute("src")})`;
      section.firstElementChild.setAttribute("data-img", `../${event.target.getAttribute("src")}`);
   });
});

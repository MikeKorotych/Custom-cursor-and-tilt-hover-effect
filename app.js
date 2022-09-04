// const cursor = document.getElementById("cursor");
const follower = document.getElementById("aura");
const links = document.querySelectorAll(".demo");

let mouseCursor = document.querySelector(".cursor");
let boxes = document.querySelectorAll(".box");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

boxes.forEach((box) => {
  box.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("dot");
  });
  box.addEventListener("mouseover", () => {
    mouseCursor.classList.add("dot");
  });
});

links.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("active");
    link.classList.remove("hovered-link");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("active");
    link.classList.add("hovered-link");
  });
});

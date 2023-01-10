((d) => {
  const btn = d.querySelector(".menu-btn");
  const nav = d.querySelector(".nav");
  btn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
  d.addEventListener("click", (e) => {
    if (!e.target.matches(".nav a") ) return;
    nav.classList.remove("active");
  });
})(document);

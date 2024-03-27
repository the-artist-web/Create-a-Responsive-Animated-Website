const header = document.querySelector("[data-header]"),
navbar = document.querySelector("[data-navbar]"),
bars = document.querySelector("[data-bars]"),
xmark = document.querySelector("[data-xmark]"),
img1 = document.querySelector("[data-img1]"),
img2 = document.querySelector("[data-img2]"),
p1 = document.querySelector("[data-p1]"),
p2 = document.querySelector("[data-p2]"),
p3 = document.querySelector("[data-p3]");

/**
 * header
 */
window.addEventListener("scroll", () => {
    if (scrollY >= 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

// navbar
bars.addEventListener("click", () => {
    navbar.classList.add("active");
    bars.classList.add("active");
    xmark.classList.add("active");
});

xmark.addEventListener("click", () => {
    navbar.classList.remove("active");
    bars.classList.remove("active");
    xmark.classList.remove("active");
});

/**
 * hero
 */
p1.addEventListener("click", () => {
    img1.classList.add("active");
    img2.classList.add("active");
});

p2.addEventListener("click", () => {
    img1.classList.remove("active");
    img2.classList.remove("active");
});

p3.addEventListener("click", () => {
    img1.classList.add("active");
    img2.classList.add("active");
});
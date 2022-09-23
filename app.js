const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((item, i) => {
    const itemNum = movieList[i].querySelectorAll("img").length;
    let clickCount = 0;
    item.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 300);
        clickCount++;
        if (clickCount > itemNum - ratio) {
            movieList[i].style.transform = 'translate(0)';
            clickCount = 0;
        }
        else
            movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
    })
})

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.container,.toggle"
);

console.log('items', items);

ball.addEventListener("click", () => {
    items.forEach((item) => {
        item.classList.toggle("active");
    })
    ball.classList.toggle("active");
})
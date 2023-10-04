const btn = document.querySelector("button");


btn.addEventListener("click", () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    document.querySelector("body").style.backgroundColor = `rgb(${red},${green},${blue})`;
    document.querySelector("h1").textContent = `rgb(${red},${green},${blue})`;
});
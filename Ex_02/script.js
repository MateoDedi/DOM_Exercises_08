const btns = document.querySelectorAll("button");
const pars = document.querySelectorAll(".hidden");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        if (pars[i].style.display === "none" || pars[i].style.display === "") {
            pars[i].style.display = "inline";
            btns[i].textContent = "Close tab";
        } else {
            pars[i].style.display = "none";
            btns[i].textContent = "Open tab";
        }
    });
}
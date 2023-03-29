const rating = document.querySelector(".rating");
const results = document.querySelector(".danke");

const submit = document.getElementById("btn-submit");

submit.addEventListener("click", () => {
    rating.style.display = "none"
    results.classList.remove("hidden");
})

const result = document.querySelectorAll(".btn");
const final = document.getElementById("result");

result.forEach( (rate) => {
    rate.addEventListener("click", () => {
        final.innerHTML = rate.innerHTML;
    })    
});
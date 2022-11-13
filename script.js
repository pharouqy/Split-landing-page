const sea = document.getElementById("sea");
const desert = document.getElementById("desert");

console.log(sea, desert);

sea.addEventListener("mouseover", () => {
  sea.classList.add("expend");
  desert.classList.remove("expend");
});

desert.addEventListener("mouseover", () => {
  desert.classList.add("expend");
  sea.classList.remove("expend");
});

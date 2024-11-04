const btn = document.querySelectorAll(".symbol");
const input = document.getElementById("input");
const equals = document.querySelector(".equals");

btn.forEach((symbol) => {
  symbol.addEventListener("click", () => {
    const value = symbol.value;
    if (value === "del") {
      // If "DEL" button is pressed, remove the last character from input
      input.value = input.value.slice(0, -1);
    } else if (value === "RESET") {
      input.value = "";
    } else if (value === "=") {
      input.value = eval(input.value);
    } else {
      input.value += value;
    }
  });
});

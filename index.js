let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("btn"));
console.log(buttons);

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "Ac":
        display.innerText = " ";
        break;

      case "del":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error!";
        }
        break;

      default:
        display.innerText += e.target.innerText;
    }
  });
});

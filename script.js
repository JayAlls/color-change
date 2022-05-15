const boxColor = document.getElementsByClassName("box-color");
const body = document.querySelector("body");

for (i = 0; i < boxColor.length; i++) {
  boxColor[i].addEventListener("click", (e) => {
    e.preventDefault();

    const color = e.target.id;

    switch (color) {
      case "red":
        body.style.background = "rgba(250, 54, 54, 0.815)";
        break;
      case "green":
        body.style.background = "rgba(175, 250, 54, 0.815)";
        break;
      case "blue":
        body.style.background = "rgba(54, 185, 250, 0.861)";
        break;
      case "violet":
        body.style.background = "rgba(250, 54, 214, 0.815)";
        break;
    }
  });
}

function getRandomColor() {
    let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    return randomColor;
  }
  function createBubbles() {
    for (let i = 0; i < 300; i++) {
      let bubble = document.createElement("div");
      bubble.classList.add("bubble");
      let size = Math.random() * 100 + "px";
      bubble.style.width = size;
      bubble.style.height = size;
      bubble.style.borderRadius = "50%";
      bubble.style.top = Math.random() * 100 + "vh";
      bubble.style.left = Math.random() * 100 + "vw";
      bubble.style.backgroundColor = getRandomColor();
      bubble.style.animationDelay = Math.random() * 5 + "s";
      document.body.appendChild(bubble);
    }
  }
  createBubbles();
  document.body.addEventListener("click", (event) => {
    if (event.target.tagName == "DIV") {
      event.target.remove("bubble");
    }
    if (document.querySelectorAll(".bubble").length === 0) {
        alert("You won!");
      }
  });
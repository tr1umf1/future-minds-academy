let textBox = document.createElement("textarea");
textBox.placeholder = "Write something";
document.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    currentContent += "<br></br>";
  }
  let character = event.key;
  let currentContent = textBox.textContent;
  textBox.textContent = currentContent + character;
});

document.body.appendChild(textBox);
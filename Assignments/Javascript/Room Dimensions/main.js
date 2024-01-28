let width = parseFloat(prompt("Enter thw width:"));
let length = parseFloat(prompt("Enter the length:"));

if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
  alert("Invalid input. Please enter valid positive numbers.");
} else {
  if (width < length) {
    [width, length] = [length, width];
  }
  let area = length * width;
  let perimeter = 2 * (length + width);

  let room = document.getElementById("room");
  room.style.width = width + "vw";
  room.style.height = length + "vh";
  document.body.appendChild(room);

  let dimensions = document.getElementById("dimensions");
  dimensions.innerHTML = `<p>Area: ${area}m<sup>2</sup></p>
    <p>Perimeter: ${perimeter}m</p>`;
}
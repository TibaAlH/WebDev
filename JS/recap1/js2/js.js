let x1 = Number(prompt("Enter the x-coordinate of the first point:"));
let y1 = Number(prompt("Enter the y-coordinate of the first point:"));
let x2 = Number(prompt("Enter the x-coordinate of the second point:"));
let y2 = Number(prompt("Enter the y-coordinate of the second point:"));
const Distance = Math.sqrt(((x2 - x1)**2 + (y2 - y1)**2));
document.querySelector("#target").innerHTML = "The distance between the two points is: " + Distance;
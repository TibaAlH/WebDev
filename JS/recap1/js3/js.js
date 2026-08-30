let side1= prompt("Enter the first side of the triangle:");
let side2= prompt("Enter the second side of the triangle:");
let side3= prompt("Enter the third side of the triangle:");

let type;
if(side1 == side2 && side2 == side3){
    type = "Equilateral";
}
else if (side1== side2 || side2==side3 || side1==side3){
    type = "isosceles";
}
else{
    type = "scalene";
}

document.querySelector("#type").innerHTML = "The triangle is " + type;
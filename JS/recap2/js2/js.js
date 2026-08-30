let numbers=[];
for (let i=0; i<5; i++){
    numbers.push(prompt(`Enter a number ${i+1}: `));
}

console.log("Numbers: " + numbers);

let search = numbers.includes(prompt("Enter a Number to Search:"));
if (search){
    console.log("Number Found");
}
else if (!search){
    console.log("Number Not Found");
}

numbers.pop(numbers.length - 1);
console.log("Updated Numbers: " + numbers);

numbers.sort((a, b) => a - b);
console.log("Sorted Numbers: " + numbers);
let numbers=[];
let answer;
while (answer !== "done") {
    answer = prompt("Enter a number (or 'done' to finish):");
    numbers.push(Number(answer));
    
}
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0){
        document.querySelector("#even").innerHTML += numbers[i] + ", ";
    }
}
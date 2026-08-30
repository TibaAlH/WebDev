"use strict";
const num= Number(prompt("temperature in Celsius"));
const F= (num * 9/5) + 32;
const K= num + 273.15;
document.querySelector("#target").innerHTML= "Temperature in Fahrenheit: " + F + "<br>" + "Temperature in Kelvin: " + K;
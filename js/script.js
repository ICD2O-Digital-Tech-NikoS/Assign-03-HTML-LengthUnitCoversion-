// Created by: Niko
// Created on: april 2024
// This file contains the JS functions for index.html


"use strict"
// function to calculate degrees fahrenheit to celsius
function calculateCelsius() {
  // declaring variable for degrees fahrenheit
  let f = document.getElementById("f").value;

  // calculates degrees celcius by multiplying degrees fahrenheit subtracted by 32, by 5/9
  let celsius = (f-32) * (5/9);
  document.getElementById("user-info").innerHTML = f + "° fahrenheit is equal to " + celsius.toFixed(0) + "°C.";

  return celsius;
}

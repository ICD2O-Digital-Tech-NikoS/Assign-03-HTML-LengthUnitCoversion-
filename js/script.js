// Created by: Niko
// Created on: april 2024
// This file contains the JS functions for index.html


"use strict"

function convertk() {

  let kilometers = document.getElementById("kilometers").value;
  
  // Perform calculation using the formula for kilometers to meters
  let meters = kilometers * 1000;
  document.getElementById("num-of-meters").innerHTML = "Result: " + kilometers + "km is equal to " + meters.toFixed(2) + "m.";

  if (kilometers == 0) {
    document.getElementById("num-of-meters").innerHTML = "Error: Please enter a number greater than 0.";
  }

  }


function convertm() {

  let meters = document.getElementById("meters").value;
  // Perform calculation using the formula for meters to feet
  let feet = meters * 3.28084
document.getElementById("num-of-feet").innerHTML = "Result: " + meters + "m is equal to " + feet.toFixed(2) + "ft.";

  if (meters == 0) {
    document.getElementById("num-of-feet").innerHTML = "Error: Please enter a number greater than 0.";
  }

  }




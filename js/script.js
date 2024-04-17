// Created by: Niko
// Created on: april 2024
// This file contains the JS functions for index.html

"use strict"

// function to convert kilometers to meters 
function convertk() {

  // get user input, num of kilometers
  let kilometers = document.getElementById("kilometers").value;
  
  // Perform calculation using the formula for kilometers to meters, save result to variable meters
  let meters = kilometers * 1000;
  //dispaly result in display space created in the index.html file
  document.getElementById("num-of-meters").innerHTML = "Result: " + kilometers + "km is equal to " + meters.toFixed(2) + "m.";

  // if statement to display an error if the user inputs a 0
  if (kilometers == 0) {
    document.getElementById("num-of-meters").innerHTML = "Error: Please enter a number greater than 0.";
  }

  }


function convertm() {

  let meters = document.getElementById("meters").value;
  // Perform calculation using the formula for meters to feet
  let feet = meters * 3.28084
  //dispaly result in display space created in the index.html file
  document.getElementById("num-of-feet").innerHTML = "Result: " + meters + "m is equal to " + feet.toFixed(2) + "ft.";

  // if statement to display an error if the user inputs a 0
  if (meters == 0) {
    document.getElementById("num-of-feet").innerHTML = "Error: Please enter a number greater than 0.";
  }

  }



